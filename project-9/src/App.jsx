import "./App.css"
import axios from "axios"
import { useState, useEffect } from "react"

const App = () => {

const [movies, setMovies] = useState([])
const [search, setSearch] = useState('')
const [load, setLoad] = useState(false)

useEffect(() =>{
  const timer = setTimeout(() =>{
    if(search.length > 2){
      searchMovie();
    } else if(search.length === 0){
      setMovies([])
    }
  }, 500)
  return () => clearTimeout(timer);
},[search])

const searchMovie = async ()=>{
  setLoad(true)
  try{
    const response = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=71dc54d0&page=1&limit=10`)
    if(response.data.Search){
      setMovies(response.data.Search)
    }
  }catch(Error){
    console.error("Error fetching Data", Error);
  }finally{
    setLoad(false)
  }
}


  return (
    <div>
      <div className="flex justify-center items-center my-5">
      <input
      className="mr-2 border border-amber-50 px-2 py-1 rounded-sm w-xl"
       type="text"
       value={search}
       onChange={(e) => setSearch(e.target.value)}
       placeholder="Enter Movie"
       />
       {/* <button className="bg-red-500 px-3 py-1 rounded-sm" onClick={searchMovie}>Search</button> */}
      </div>
      {load ? (<div className="flex items-center justify-center my-6">
        <div className="border-4 rounded-full w-12 h-12 animate-spin border-blue-500 border-t-transparent"></div>
      </div>):(<div className="grid grid-cols-4 gap-4 place-items-center">
        {movies.map((movie) => {
          return(
            <div key={movie.imdbID} className="flex items-center flex-col ">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          )
        })}
      </div>)}
      

    </div>
  )
}

export default App