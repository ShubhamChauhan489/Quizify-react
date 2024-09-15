import React from "react";

const Question = ({ question, onAnswerClick }) => {

    return(<div className="question-container">
        <h2>{question.question}</h2>
        <ul>
            {question.options.map((option, index)=>(
                <li key={index}><button onClick={() => onAnswerClick(index === question.answer)}>{option}</button></li>
            ))}
        </ul>
    </div>);

}
export default Question


