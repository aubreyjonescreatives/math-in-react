import React from 'react'
import quizinfoData from './data/quizquestions.json'
import quizzesStyles from './css/quizzesStyles.css'
//import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faUser, faBook, faFile, faSquare, faTrophy} from '@fortawesome/free-solid-svg-icons'
import {AccountCircle, Dashboard, LibraryBooks, Extension, HourglassFull, Grade} from '@material-ui/icons'
//import Icon from '@material-ui/core/icon'
import {Avatar, Link} from '@material-ui/core'
import smallflcincicon from './assets/images/smallflcincicon.png'
import 'bootstrap/dist/css/bootstrap.min.css'



                                      
function SideNavigation() {



return (
<html>
<header>


</header>


<main>


<nav>
                                                                                                                                                                                                                                                                                                                                                                                                                          
<li><a href="#about"><p><Avatar src={smallflcincicon} className="flcincicon"/></p><p>FLC INC</p></a></li> 
<li><a href="#about"><p><AccountCircle></AccountCircle></p><p>ACCOUNT</p></a></li> 
<li><a href="#about"><p><Dashboard></Dashboard></p><p>DASHBOARD</p></a></li> 
<li><a href="Algebra1Lessons.js"><p><LibraryBooks></LibraryBooks></p><p>LESSONS</p></a></li> 
<li><a href="#about"><p><Extension></Extension></p><p>PRACTICES</p></a></li> 
<li><a href="QuizQuestions.js"><p><HourglassFull></HourglassFull></p><p>QUIZZES</p></a></li> 
<li><a href="#about"><p><Grade></Grade></p><p>AWARDS</p></a></li> 


</nav>




</main>



</html>



)



}

export default SideNavigation