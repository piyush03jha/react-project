import { useState } from "react";
import "./app.css"
import Question from "./component/Question";
import Time from "./component/Time";
import Result from "./component/Result";

const App = () => {
 
const [isOver, setIsOver] = useState(false);
const [score, setScore] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <Time setIsOver={setIsOver} />
      {
        !isOver ? (<Question setIsOver = {setIsOver} setScore = {setScore}/>) : (<Result score = {score} />)
      }
      
    </div>
  )
}

export default App;