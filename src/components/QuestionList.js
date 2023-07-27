import React from "react";
import Delete from "./delete";

function QuestionList({questionItems, setQuestionItems}) {
  const questions = questionItems.map((question)=>{
    return <li key={question.id}>
        <>{question.prompt}</>
        <Delete id={question.id} questionItems={questionItems} setQuestionItems={setQuestionItems}/>
      </li>
  });

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions}</ul>
    </section>
  );
}

export default QuestionList;
