import React, {Component, Fragment} from 'react'





class QuizResponses extends Component {

state = {
Answers: this.props.findAnswers, 
ClickCheck: true, 
rightAnswer: this.props.rightAnswer


}

onAnswer = () => {

this.setState({
   ClickCheck:false
});


};


render() {

return (

<Fragment>
{ this.state.ClickCheck ? this.state.Answers.map(ans => {
   return <button onClick={this.onAnswer}> {ans}</button>

}) : <button > {this.state.rightAnswer}</button>}



</Fragment>
)
}
}

export default QuizResponses