const SIMCard = require('../models/simCard');


exports.activateSIM = async (req, res) => {
    const { simNumber, phoneNumber } = req.body;
  
    try {
     
      let simCard = await SIMCard.findOne({ simNumber });
      
      
      if (!simCard) {
        simCard = new SIMCard({
          simNumber,
          phoneNumber,
          status: 'active',
          activationDate: new Date()
        });
        await simCard.save();
        return res.status(200).json({ message: 'SIM card created and activated successfully' });
      }
      
      
      if (simCard.status === 'active') {
        return res.status(400).json({ message: 'SIM card is already active' });
      }
      
    
      simCard.status = 'active';
      simCard.activationDate = new Date();
      await simCard.save();
      
      res.status(200).json({ message: 'SIM card activated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  

exports.deactivateSIM = async (req, res) => {
  const { simNumber } = req.body;

  try {
    const simCard = await SIMCard.findOne({ simNumber });
    
    if (!simCard) {
      return res.status(400).json({ message: 'SIM card not found' });
    }
    
    if (simCard.status === 'inactive') {
      return res.status(400).json({ message: 'SIM card is already inactive' });
    }
    
    simCard.status = 'inactive';
    await simCard.save();
    
    res.status(200).json({ message: 'SIM card deactivated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


exports.getSIMDetails = async (req, res) => {
  const { simNumber } = req.params;

  try {
    const simCard = await SIMCard.findOne({ simNumber });
    
    if (!simCard) {
      return res.status(400).json({ message: 'SIM card not found' });
    }
    
    res.status(200).json(simCard);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
