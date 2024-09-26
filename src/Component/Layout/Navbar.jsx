import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='h-20 w-full bg-gray-400 flex justify-between items-center px-14 font-semibold text-xl text-gray-800'>
            <div>
                <h1>My Logo</h1>
            </div>

            <div>
                <ul className='flex justify-center items-center gap-5'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Help</li>
                </ul>
            </div>


      </nav>
    </div>
  )
}

export default Navbar
