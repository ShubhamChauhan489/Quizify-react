import React,{useState, useEffect} from 'react'

const Result = ({score, total})=>{
    const[leaderboard, setLeaderboard] = useState([]);

    // for storing user score in local storage

    useEffect(()=>{
        const savedScore = JSON.parse(localStorage.getItem('leaderboard')) || [];
        const newScore = {score, total, date: new Date().toLocaleDateString()};
        const updatedScores = [...savedScore, newScore];

        localStorage.setItem('leaderboard',JSON.stringify(updatedScores));
        setLeaderboard(updatedScores);
    }, [score, total]);

    return(<div className='result-container'>
        <h2>Your Score : {score}/{total}</h2>
        <button onClick={()=>window.location.reload()}>Restart Quiz</button>

        <h3>LeaderBoard</h3>
        <ul>
            {leaderboard.map((entry, index)=>(
            <li key={index}>Score: {entry.score}/{entry.total}- {entry.date}</li>))}
        </ul>

    </div>);


};
export default Result