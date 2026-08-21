import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLoading } from '../context/LoadingContext.jsx'

const CreatePost = () => {
    const navigate = useNavigate()
    const { setLoading } = useLoading()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        setLoading(true)

        try {
            await axios.post(
                `${import.meta.env.VITE_PORT_URL}/create-post`,
                formData
            )

            navigate('/feed')
        } catch (err) {
            console.log(err)
            alert("Error creating post")
        } finally {
            setLoading(false)
        }
    }

  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
            <input type="file" name="image" accept="image/*" />
            <input type="text" name="caption" placeholder="Enter caption" required />
            <button type="submit">Submit</button>
        </form>
    </section>
  )
}

export default CreatePost
