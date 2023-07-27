export default function Delete({id, questionItems, setQuestionItems}){
    function handleDelete(event){
        const id = parseInt(event.target.id)
        const newQuestions = questionItems.filter((question)=>{
            return question.id !== id;
        })
        fetch(`http://localhost:4000/questions/${id}`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        })
        setQuestionItems(newQuestions)
    }
    return(
        <button onClick={handleDelete} id={id}>Del</button>
    )
}