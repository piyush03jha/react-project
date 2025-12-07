import './App.css'
import Card from "./component/Card";
import  user  from "./component/user.json"

function App() {

  return (
    <div className="grid grid-cols-4 gap-4 max-[1200px]:grid-cols-3 max-[950px]:grid-cols-2 max-[600px]:grid-cols-1 p-4">
     {user.map(function (obj) {
        console.log()
        return (
          <Card
            key={obj.id}
            title={obj.title}
            role={obj.role}
            imgUrl={obj.imgUrl}
            youtube={obj.youtube}
            insta={obj.insta}
            github={obj.github}
            linkedIn={obj.linkedIn}
            message={obj.message}
          />
        )
      })}


    </div>
  )
}

export default App
