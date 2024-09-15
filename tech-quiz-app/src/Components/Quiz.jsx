import React, {useState, useEffect} from 'react'
import { questions } from '../Data/question2'
import Question from './Question'
import Result from './Result'

const Quiz = ()=>{
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);

    //using useEffect for timmer
    useEffect(()=>{
        if(timeLeft===0){
            handleAnswerClick(false);
        }

        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1); 
        }, 1000);

        return()=> clearTimeout(timer);
    },[timeLeft]);

    //function for handle answer click is right or wrong
   const handleAnswerClick = (isCorrect)=>{
        if(isCorrect){
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
            setTimeLeft(10);
        }
        else{
            setShowResult(true);
        }
    }
    return(<div className='quiz-container'>
        {showResult ? (<Result score={score} total={questions.length} />): (<div>
            <h3>Time Left : {timeLeft} Seconds</h3>
            <h4>
            Question {currentQuestion + 1} of {questions.length}
          </h4> 
            <Question question={questions[currentQuestion]} onAnswerClick={handleAnswerClick} />
        </div>
    )}
    </div>);
}
export default Quiz