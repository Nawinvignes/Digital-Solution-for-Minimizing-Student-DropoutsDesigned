import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/StudentFeed.css'; // Create a separate CSS file for styling

const FeedbackForm = () => {
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    studentClass: '',
    issue: ''
  });
  
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/feedback', feedbackData);
      if (response.status === 201) {
        setResponseMessage('Feedback submitted successfully!');
        setFeedbackData({ name: '', studentClass: '', issue: '' });  // Clear the form
      }
    } catch (error) {
      setResponseMessage('Error submitting feedback. Please try again.');
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={feedbackData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Class:</label>
          <input 
            type="text" 
            name="studentClass" 
            value={feedbackData.studentClass} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Issue:</label>
          <textarea 
            name="issue" 
            value={feedbackData.issue} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default FeedbackForm;
