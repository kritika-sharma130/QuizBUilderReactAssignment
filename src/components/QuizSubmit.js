import React from "react";

const QuizSubmit = ({ permalink }) => {
  return (
    <div className="header">
      <h3>{`Your quiz link is http://localhost:3000/mcq/${permalink}`}</h3>
    </div>
  );
};

export default QuizSubmit;
