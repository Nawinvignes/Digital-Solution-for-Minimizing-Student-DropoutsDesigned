import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import '../Styles/Issue.css';

const IssueForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    residentialaddress: '',
    academic_performance: '',
    engagement_score: '',
    attendance_rate: '',
    parental_educational_level: '',
    family_income: '',
    gender: '',
    socio_economic_status: false,
    disciplinary_record: '',
    major_cause: ''
  });

  const [riskScore, setRiskScore] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend for prediction
      const response = await axios.post('http://localhost:5000/students', formData);
      setRiskScore(response.data.risk_score); // Display risk score
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Student Dropout Risk Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" className="input-field" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" className="input-field" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input type="text" name="phone" className="input-field" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Residential Address:</label>
          <input type="text" name="residentialaddress" className="input-field" value={formData.residentialaddress} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Academic Performance:</label>
          <input type="number" name="academic_performance" className="input-field" value={formData.academic_performance} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Engagement Score:</label>
          <input type="number" name="engagement_score" className="input-field" value={formData.engagement_score} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Attendance Rate:</label>
          <input type="number" name="attendance_rate" className="input-field" value={formData.attendance_rate} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Parental Educational Level:</label>
          <input type="text" name="parental_educational_level" className="input-field" value={formData.parental_educational_level} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Family Income:</label>
          <input type="number" name="family_income" className="input-field" value={formData.family_income} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" className="input-field" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-group checkbox-group">
          <label>Socio-economic Status:</label>
          <input type="checkbox" name="socio_economic_status" className="checkbox-field" checked={formData.socio_economic_status} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Disciplinary Record:</label>
          <input type="text" name="disciplinary_record" className="input-field" value={formData.disciplinary_record} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Major Cause:</label>
          <input type="text" name="major_cause" className="input-field" value={formData.major_cause} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {riskScore !== null && (
        <div className="result">
          <h3>Form Submitted</h3>
        </div>
      )}
    </div>
  );
};

export default IssueForm;
