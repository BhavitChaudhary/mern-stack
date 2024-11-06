import React, { useState } from 'react';
import axios from 'axios';

const ReviewPage = () => {
  const [applicationId, setApplicationId] = useState('');
  const [status, setStatus] = useState('');
  const [comment, setComment] = useState('');

  const handleReview = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/applications/review', {
        applicationId,
        reviewerId: '12345', // Assuming this is the reviewer ID
        status,
        comment,
      });
      alert('Application reviewed successfully');
    } catch (error) {
      alert('Error reviewing application');
    }
  };

  return (
    <div>
      <h2>Review Application</h2>
      <input
        type="text"
        placeholder="Application ID"
        value={applicationId}
        onChange={(e) => setApplicationId(e.target.value)}
      />
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="">Select Status</option>
        <option value="approved">Approve</option>
        <option value="rejected">Reject</option>
      </select>
      <textarea
        placeholder="Add remarks"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleReview}>Submit Review</button>
    </div>
  );
};

export default ReviewPage;
