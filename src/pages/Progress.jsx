import React from "react";
import "./ProgressPage.css";

const ProgressPage = ({ courseTitle, completedLessons, completedQuizzes, completedAssignments }) => {
  const totalLessons = 10;
  const totalQuizzes = 5;
  const totalAssignments = 3;

  const calculateProgressPercentage = (completed, total) => {
    return completed > 0 ? Math.round((completed / total) * 100) : 0;
  };

  const lessonsProgressPercentage = calculateProgressPercentage(completedLessons, totalLessons);
  const quizzesProgressPercentage = calculateProgressPercentage(completedQuizzes, totalQuizzes);
  const assignmentsProgressPercentage = calculateProgressPercentage(completedAssignments, totalAssignments);

  return (
    <div className="progress-page">
      <h1 className="progress-page__title">{courseTitle} Progress</h1>
      <div className="progress-page__progress-bar">
        <div className="progress-page__progress-bar__section">
          <div className="progress-page__progress-bar__label">Lessons</div>
          <div className="progress-page__progress-bar__bar">
            <div
              className="progress-page__progress-bar__bar__fill"
              style={{ width: `${lessonsProgressPercentage}%` }}
            />
          </div>
          <div className="progress-page__progress-bar__percentage">{lessonsProgressPercentage}%</div>
        </div>
        <div className="progress-page__progress-bar__section">
          <div className="progress-page__progress-bar__label">Quizzes</div>
          <div className="progress-page__progress-bar__bar">
            <div
              className="progress-page__progress-bar__bar__fill"
              style={{ width: `${quizzesProgressPercentage}%` }}
            />
          </div>
          <div className="progress-page__progress-bar__percentage">{quizzesProgressPercentage}%</div>
        </div>
        <div className="progress-page__progress-bar__section">
          <div className="progress-page__progress-bar__label">Assignments</div>
          <div className="progress-page__progress-bar__bar">
            <div
              className="progress-page__progress-bar__bar__fill"
              style={{ width: `${assignmentsProgressPercentage}%` }}
            />
          </div>
          <div className="progress-page__progress-bar__percentage">{assignmentsProgressPercentage}%</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;