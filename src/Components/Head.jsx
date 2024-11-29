import React from 'react'

export default function Head() {

  return (
    <div>
      <nav className='flex w-screen bg-emerald-900 gap-6'>
        <div className='flex items-center '>
          <h3 className='m-0 px-4'>Logo</h3>
        </div>

        <div className='flex grow'>
          <input className='grow m-2 rounded-md' type="text" placeholder='Search' />
        </div>

        <div className='flex'>
          <ul className='list-none flex my-0 p-0 items-center gap-4'>
              <li className='my-0'><a className='no-underline' href="">Home</a></li>
              <li className='my-0'><a className='no-underline' href="">Products</a></li>
              <li className='my-0'><a className='no-underline' href="">Service</a></li>
              <li className='my-0'><a className='no-underline' href="">About us</a></li>
          </ul>
        </div>

        <div className='flex items-center gap-4'>
          <div>
            <p className='btn btn-square my-0'><i className="bx bx-cart"></i></p>
          </div>
          <div>
            <p className='btn bt my-0'><i className="bx bx-user"></i>Account</p>
          </div>
        </div>
      </nav>
    </div>
  )
}
