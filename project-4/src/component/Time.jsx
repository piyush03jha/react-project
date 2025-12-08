import { useState, useEffect } from "react";

const Time = ({setIsOver}) => {

    const[leftTime, setLeftTime] = useState(500);
    const[displayTime, setDisplayTime] = useState("");

    useEffect(() => {
        let intervalId = setInterval(() => {
            setLeftTime(prev => {
                if(prev <= 0){
                    clearInterval(intervalId);
                    return 0;
                }
                return prev-1;
            })
        },1000);

        return () =>{
            clearInterval(intervalId)
        }
    }, [])

    useEffect(() => {
        if(leftTime === 0){
            setIsOver(true);
        }
         let formatedTime = (`${(Math.floor(leftTime / 60)).toString().padStart(2,'0')} : ${(leftTime % 60).toString().padStart(2,0)}`)
         setDisplayTime(formatedTime)
    },[leftTime])

  return (
    <div className="text-white text-2xl ">time Left: {displayTime}</div>
  )
}
export default Time;