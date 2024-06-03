import { useState, useRef } from "react"
import "./Quiz.css"
import { data } from "../../assets/data"

const Quiz = () => {

  //State Variables (Hooks)
  //let[variableName, setterFunction] = initialize at index 0
  let[index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);

  //The Hook below stores the number of correct answers
  let [score, setScore] = useState(0);

  //The Hook below stores whether or not there is another question to be loaded:
  let [result, setResult] = useState(false);

  // In order to display the correct answer when the wrong answer was chosen, create 4 reference variables below
  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) { 
      if (question.ans === ans) {
        //if answer(ans) on target element(e) is correct, add "correct" classname
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev+1);
      }
      else{
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans-1].current.classList.add("correct");
      }
    }
  }

  // "Next" button function below:
  const next = () => {
    if (lock === true) {
      if (index === data.length -1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      })
    }
  }

  //Functionality for Reset Button

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {/* Turnery Operators- {thingToTest ?(<- is it true?) if true this happens : if false this happens} */}
      {result ?
      <>
      </> 
       : 
       <>
        <h2>{index+1}. {question.question}</h2>
        <ul>
          {/* Used li*4 to make 4 li below */}
          <li ref={Option1} onClick={(e) => {checkAns(e, 1)}}>{question.option1}</li>
          <li ref={Option2} onClick={(e) => {checkAns(e, 2)}}>{question.option2}</li>
          <li ref={Option3} onClick={(e) => {checkAns(e, 3)}}>{question.option3}</li>
          <li ref={Option4} onClick={(e) => {checkAns(e, 4)}}>{question.option4}</li>
        </ul>
        <button onClick={next}>Next</button>
        <div className="index">{index+1} of {data.length} questions</div>
       </>}
       {result ? 
       <>
       <h2>You scored {score} out of {data.length}</h2>
       <button>Reset</button>
       </> 
       :
      <>
      </>}
    </div>
  )
}
export default Quiz