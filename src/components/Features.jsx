import React from 'react';
import '../Styles/Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <h1>Our Features</h1>
      <div className="features-grid">
        <div className="feature-item">
          <h2>User Authentication</h2>
          <p>
            <strong>Secure and Personalized Access</strong><br />
            Our application ensures secure login for students, staff, and parents, implementing role-based access control. This tailored access empowers students to connect with appropriate resources and support, fostering a sense of accountability and belonging. 
            By ensuring that only authorized users can access specific information, we enhance the security and privacy of sensitive educational data.
          </p>
        </div>
        <div className="feature-item">
          <h2>Personalized Dashboards</h2>
          <p>
            <strong>Insights into Academic Progress</strong><br />
            Each user has a personalized dashboard that provides an overview of their academic performance, attendance records, and essential resources. These dashboards highlight important tasks, deadlines, and alerts, enabling students to stay organized and focused. 
            By promoting proactive engagement with their education, we help students avoid the pitfalls that can lead to dropout.
          </p>
        </div>
        <div className="feature-item">
          <h2>Resource Center</h2>
          <p>
            <strong>Access to Essential Educational Materials</strong><br />
            Our Resource Center offers a comprehensive collection of educational materials, including tutorials, videos, and articles, along with access to counseling services and mentoring programs. 
            By providing students with the tools they need to succeed, we help bridge knowledge gaps and encourage continuous learning, thus reducing the risk of dropouts due to academic struggles.
          </p>
        </div>
        <div className="feature-item">
          <h2>Notification System</h2>
          <p>
            <strong>Real-Time Updates to Keep Students Informed</strong><br />
            Our real-time notification system keeps students informed about important events, deadlines, and updates, ensuring they never miss critical information. 
            By maintaining open lines of communication, we help students stay engaged and aware of their academic responsibilities, significantly contributing to their retention in the educational system.
          </p>
        </div>
        <div className="feature-item">
          <h2>Feedback Mechanism</h2>
          <p>
            <strong>Listening to Our Students</strong><br />
            The built-in feedback mechanism allows students to voice their experiences and challenges. By understanding their needs and concerns, we can adapt our platform to better serve them, ensuring that we address any issues that may lead to disengagement and dropout.
          </p>
        </div>
        <div className="feature-item">
          <h2>Community Support</h2>
          <p>
            <strong>Building a Supportive Learning Environment</strong><br />
            Our platform fosters a sense of community among students, parents, and educators. By encouraging collaboration and support networks, we create an environment where students feel valued and connected. 
            This sense of belonging is crucial for keeping students engaged and motivated, ultimately helping to reduce dropout rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
