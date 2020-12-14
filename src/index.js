import React, { Fragment} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import QuizQuestions from './QuizQuestions'


function Index() {

return (
<Fragment>


<QuizQuestions/>

</Fragment>

)

}

const rootElement = document.getElementById("root"); 
//reader method for react
ReactDOM.render(<Index />, rootElement)