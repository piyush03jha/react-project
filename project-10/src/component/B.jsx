import React from 'react'
import E from './E'
import F from './F'

const B = () => {
  return (
    <div className='flex justify-center items-center border-4 border-black h-40 w-40 bg-blue-400'>
       B <E></E>
        <F></F>
    </div>
  )
}

export default B