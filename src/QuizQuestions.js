import React, {Component} from 'react'
import quizinfoData from './data/quizquestions.json'
import SideNavigation from './SideNavigation'
import QuizResponses from './QuizResponses'
import quizzesStyles from './css/quizzesStyles.css'
//import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faUser, faBook, faFile, faSquare, faTrophy} from '@fortawesome/free-solid-svg-icons'
//import {AccountCircle, Dashboard, LibraryBooks, Extension, HourglassFull, Grade} from '@material-ui/icons'
//import Icon from '@material-ui/core/icon'
import {Card} from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import { render } from '@testing-library/react'


const quizzes = quizinfoData.results[0].questions



class QuizQuestions extends Component {


   

/*   state = {
quizzes: quizinfoData.results[0].questions


}
*/

render() {
return (



<div>
<html>
<header>


</header>


<main>

<div className="row">

<div className="col-1">
<SideNavigation></SideNavigation>
</div>
<div className="col-sm-7 col-md-7 col-lg-7"> 


<div className="quizBreadcrumbs">
<ul>
<li><a href="#">Quizzes</a></li>
<li>/</li>
<li><a href="#"> Unit 1</a></li>
<li>/</li>
<li><a href="#"> Quiz 1</a></li>
</ul>


</div>




{
   
quizzes.map((quiz) => {
return (   




<Card className="questionInfo">

<h1>{quiz.number}</h1>
<h2>{quiz.question}</h2>
<p>{quiz.questionDetail}</p>
<div className="allButtons">
<div id="choiceOne" onClick={()=> question1()}>{quiz.option1}</div>
<div id="choiceTwo" onClick={()=> question2()}>{quiz.option2}</div>
<div id="choiceThree" onClick={()=> question3()}>{quiz.option3}</div>
</div>
</Card>



)


const question1 = () => {
   console.log("Congrats, You got it right!")
      
   }

   const question2 = () =>{
      console.log("Sorry, that is wrong. Try again?")
         
      }
      
      
      const question3 = () => {
   console.log("Sorry, that is wrong. Try again?")
      
   }
   

})





}






<div id="userFeedback"></div>

</div> 

<div className="col-sm-4 col-md-3 col-lg-3">
<ul className="questionNavigation">
<li><a href="question1">QUESTION 1</a></li>
<li><a href="question2">QUESTION 2</a></li>
<li><a href="question3">QUESTION 3</a></li>
<li><a href="question4">QUESTION 4</a></li>
<li><a href="question5">QUESTION 5</a></li>
<li><a href="question6">QUESTION 6</a></li>
<button className="submitButton">SUBMIT</button>
</ul>


</div>


</div>




</main>



</html>

</div>





)

}

}



export default QuizQuestions