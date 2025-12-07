import Button from "./component/Button"
import Box from "./component/Box"
import { useState } from "react"
import './App.css'

const App = () => {

  const color =['pink', 'blue', 'green', 'red','grey','seagreen','skyblue','lightgreen','brown','orange']

  const [selectedColor, setSeclectedColor] = useState("orange")

  return (
    <div className="flex flex-col items-center justify-center m-10  gap-5">
      <h1 className="text-5xl text-white">Color Switcher</h1>
      <div>
      {
        color.map((item)=>{
          return(
               <Button key={item} color={item} setSeclectedColor={setSeclectedColor}>
                {item}
              </Button>

          
          )
        })
      }
      </div>
      <Box color={selectedColor} />
    </div>
  )
}

export default App