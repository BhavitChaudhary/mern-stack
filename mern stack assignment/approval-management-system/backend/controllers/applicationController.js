const Application = require('../models/Application');

const submitApplication = async (req, res) => {
  try {
    const { applicantId, cv } = req.body;
    const newApplication = new Application({
      applicant: applicantId,
      cv,
    });
    await newApplication.save();
    res.json(newApplication);
  } catch (err) {
    res.status(500).json({ message: 'Error submitting application', error: err.message });
  }
};

const reviewApplication = async (req, res) => {
  try {
    const { applicationId, reviewerId, status, comment } = req.body;
    const application = await Application.findById(applicationId);
    application.remarks.push({ reviewer: reviewerId, comment, status });
    application.status = status;
    await application.save();
    res.json(application);
  } catch (err) {
    res.status(500).json({ message: 'Error reviewing application', error: err.message });
  }
};

module.exports = { submitApplication, reviewApplication };
