import "./App.css"
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const App = () => {

    const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    return response.json()
  } 
  const [id, setId] = useState(1)
  const { data, isPending, error } = useQuery({
    queryKey: ['todos', id],
    queryFn: () => getTodos(id),
  })

  if(error){
    return <div>Error: {error.message}</div>
  }

  return (
    <div>{ isPending ? "Loading..." : JSON.stringify(data.slice(0,10))}
    <button onClick={() => setId((prev) => prev + 1)}>increment id </button>
    </div>
    
  )


}

export default App