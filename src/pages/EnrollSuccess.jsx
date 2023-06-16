import React from 'react';

function WelcomeMessage(props) {
  return (
    <div className="welcome-message">
      <h1>Welcome to {props.courseName}!</h1>
      <p>Thank you for enrolling in this course. We're excited to have you join us and look forward to helping you learn and grow.</p>
    </div>
  );
}

export default WelcomeMessage;