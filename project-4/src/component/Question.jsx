import { useState } from "react";
import questions from "./question.json";

const Question = ({setIsOver, setScore}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    

    const handleOptionclick = (selectedOption) => {
        if(selectedOption === questions[currentIndex].answer){
            setScore(prev => prev + 1)
        }

        if(currentIndex + 1 < questions.length){
            setCurrentIndex(prev => prev + 1)
        }else{
            setIsOver(true);
        }
    }

  return (
    <div className="mt-4 text-white">
        <h2 className="text-4xl mt-5">{questions[currentIndex].question}</h2>
        <div className="flex flex-col gap-3 mt-5 items-start ml-8">
            {
                questions[currentIndex].options.map((option) => {
                    return <button key = {option} onClick={() => handleOptionclick(option)}>
                        {option}
                    </button>
                })
            }
        </div>
    </div>
  )
}

export default Question