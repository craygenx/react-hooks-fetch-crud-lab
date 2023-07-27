import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionItems, setQuestionItems] =  useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(res => res.json())
    .then(data => setQuestionItems(data))
  },[]);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm setQuestionItems={setQuestionItems} questionItems={questionItems}/> : <QuestionList questionItems={questionItems} setQuestionItems={setQuestionItems}/>}
    </main>
  );
}

export default App;
