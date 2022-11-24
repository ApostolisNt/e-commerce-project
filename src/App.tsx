import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="categories-container">
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Hats</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Jackets</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Sneakers</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Womern</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Men</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  )
}

export default App
