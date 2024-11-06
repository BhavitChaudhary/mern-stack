import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = () => {
  const [applicantId, setApplicantId] = useState('');
  const [cv, setCv] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/applications/submit', { applicantId, cv });
      setMessage('Application submitted successfully!');
    } catch (error) {
      setMessage('Error submitting application.');
    }
  };

  return (
    <div>
      <h2>Submit Application</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Applicant ID"
          value={applicantId}
          onChange={(e) => setApplicantId(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setCv(e.target.files[0])}
        />
        <button type="submit">Submit Application</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ApplicationForm;
