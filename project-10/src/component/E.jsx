import { useContext } from 'react'
import { MyContext } from '../MyContext.jsx'

const E = () => {
  const data = useContext(MyContext);
  return (
    <div className='h-15 w-15 bg-yellow-300'>E 
      <p>{data}</p>
    </div>
  )
}

export default E