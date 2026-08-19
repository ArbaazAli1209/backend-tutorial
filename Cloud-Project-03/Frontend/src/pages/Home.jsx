import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='home-section'>
      <h1>Welcome to Cloud Project</h1>
      <p>Share images with a caption, or browse what others have posted.</p>

      <div className='home-actions'>
        <Link to='/create-post'>
          <button type='button'>Create Post</button>
        </Link>
        <Link to='/feed'>
          <button type='button'>View Feed</button>
        </Link>
      </div>
    </section>
  )
}

export default Home