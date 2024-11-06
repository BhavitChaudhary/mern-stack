const mongoose = require('mongoose');

const remarkSchema = new mongoose.Schema({
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comment: String,
  status: { type: String, enum: ['approved', 'rejected'], required: true },
});

const applicationSchema = new mongoose.Schema({
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  cv: { type: String, required: true },
  status: { type: String, default: 'pending' },
  remarks: [remarkSchema],
});

module.exports = mongoose.model('Application', applicationSchema);
