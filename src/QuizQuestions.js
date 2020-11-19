import React from 'react'
import quizinfoData from './data/quizquestions.json'
import SideNavigation from './SideNavigation'
import quizzesStyles from './css/quizzesStyles.css'
//import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faUser, faBook, faFile, faSquare, faTrophy} from '@fortawesome/free-solid-svg-icons'
//import {AccountCircle, Dashboard, LibraryBooks, Extension, HourglassFull, Grade} from '@material-ui/icons'
//import Icon from '@material-ui/core/icon'
//import {CardMedia} from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'


const quizzes = quizinfoData.results[0].questions



function QuizQuestions() {



return (
<html>
<header>


</header>


<main>

<div className="row">

<div className="col-1">
<SideNavigation></SideNavigation>
</div>
<div className="col-6">  
<h1>This is a Quiz</h1> 


{quizzes.map(quiz => {
return (<div className="questionInfo">
 <h1>{quiz.number}</h1>  
<h2>{quiz.question}</h2>
<p>{quiz.questionDetail}</p>
<button>{quiz.answers.a}</button>
<button>{quiz.answers.b}</button>
<button>{quiz.answers.c}</button>


</div>)


})
}

</div> 

<div className="col-3">
<ul className="questionNavigation">
<li><a>QUESTION 1</a></li>
<li><a>QUESTION 2</a></li>
<li><a>QUESTION 3</a></li>
<li><a>QUESTION 4</a></li>
<li><a>QUESTION 5</a></li>
<li><a>QUESTION 6</a></li>
<button className="submitButton">SUBMIT</button>
</ul>


</div>


</div>




</main>



</html>



)



}

export default QuizQuestions