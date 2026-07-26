import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            caption: "Beautiful Scenery"
        }
    ])

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
        .then((res) => {
            setPosts(res.data.posts)
        })
    }, [])

  return (
    <section className='feed-section'>
        {posts.length > 0 ? (
            posts.map((post) => (
                <div key={post._id} className='post-card'>
                    <img src={post.image} alt={post.caption} />
                    <h3>{post.caption}</h3>
                </div>
            ))
        ) : (
            <p>No posts available.</p>
        )}
    </section>
  )
}

export default Feed
