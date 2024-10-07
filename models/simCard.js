const mongoose = require('mongoose');


const SIMCardSchema = new mongoose.Schema({
  simNumber: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive'
  },
  activationDate: {
    type: Date
  }
});


const SIMCard = mongoose.model('SIMCard', SIMCardSchema);

module.exports = SIMCard;
