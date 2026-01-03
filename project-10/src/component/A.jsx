import React from 'react'
import C from './C'
import D from './D'

const A = () => {
  return (
    <div className='flex justify-center items-center border-4 bg-green-400 border-black h-40 w-40'>
        A<C />
        <D />
    </div>
  )
}

export default A