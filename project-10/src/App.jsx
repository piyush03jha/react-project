import A from "./component/A"
import B from "./component/B"
import "./App.css"

const App = () => {
  return (
    <div className="flex flex-col m-auto justify-center items-center h-100 w-100 bg-red-500">
    App  <A />
      <B />
    </div>
  )
}

export default App