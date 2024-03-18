import React from 'react'

const navbar = () => {
  return (
    <nav>
      <span className="logo">easybank</span>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="x">Carers</a></li>
      </ul>

      <button>Request invite</button>
    </nav>
  )
}

export default navbar