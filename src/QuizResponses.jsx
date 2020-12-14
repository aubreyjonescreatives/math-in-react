import React from 'react'
import quizinfoData from './data/quizquestions.json'





const quizzes = quizinfoData.results[0].questions



function QuizResponses() {



    {quizzes.map(quiz => {
        return (
        
        
     console.log(quiz.correct) 
  
        )
       
    
    
    })
        }

        



    }
    
    export default QuizResponses