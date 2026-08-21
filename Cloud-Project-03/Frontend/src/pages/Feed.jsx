import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLoading } from '../context/LoadingContext.jsx'

const Feed = () => {

    const { setLoading } = useLoading()

    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            caption: "Beautiful Scenery"
        }
    ])

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)

            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_PORT_URL}/posts`
                )

                setPosts(res.data.posts)
            } catch (err) {
                console.log(err)
                alert("Error fetching posts")
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [setLoading])

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