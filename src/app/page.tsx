import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'

const page = () => {
  return (
    <div className='relative h-screen'>
      <div className='bg-neutral-light-grayish-blue absolute h-1/2 -z-10 w-full left-1/2 rounded-bl-[5rem]'></div>
      <div>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default page
