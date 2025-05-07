import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-full'>
        {/* Logo Div */}
      <div className="logo-div border border-black w-1/8 h-20"> LOGO </div>
      {/* Right side of navbar */}
      <div className="right-side-navbar border border-black w-7/8 h-20"> RIGHT SIDE</div>
    </div>
  )
}

export default Navbar
