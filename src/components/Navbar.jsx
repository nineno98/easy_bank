import React from 'react'

const navbar = () => {
  return (
    <nav>
      <div className='wrapper'>
        <span className="logo">easybank</span>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="x">Carers</a></li>
        </ul>

        <button>Request invite</button>
      </div>
      
    </nav>
  )
}

export default navbar