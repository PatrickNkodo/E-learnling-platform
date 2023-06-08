import React from "react";
import "./LessonPage.css";

const LessonPage = ({ title, content, multimedia, quizzes, activities }) => {
  return (
    <div className="lesson-page">
      <h1 className="lesson-page__title">{title}</h1>
      <div className="lesson-page__content">{content}</div>
      {multimedia && (
        <div className="lesson-page__multimedia">
          <h2 className="lesson-page__multimedia-title">Multimedia</h2>
          {multimedia}
        </div>
      )}
      {quizzes && (
        <div className="lesson-page__quizzes">
          <h2 className="lesson-page__quizzes-title">Quizzes</h2>
          {quizzes}
        </div>
      )}
      {activities && (
        <div className="lesson-page__activities">
          <h2 className="lesson-page__activities-title">Activities</h2>
          {activities}
        </div>
      )}
    </div>
  );
};

export default LessonPage;