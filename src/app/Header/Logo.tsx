import React from 'react'
import logo from '../../../public/source/images/logo.svg'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image className='cursor-pointer w-5 md:w-6 lg:w-7 xl:w-8  h-auto' src={logo} alt='logo image' />
    </div>
  )
}

export default Logo
