import React from 'react'
import logo from '../../../public/source/images/logo.svg'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image className='w-5 h-auto' src={logo} alt='logo image' />
    </div>
  )
}

export default Logo
