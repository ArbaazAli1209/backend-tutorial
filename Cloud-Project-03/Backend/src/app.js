const express = require('express')
const multer = require('multer')
const uploadFile = require("./services/storage.service")
const postModel = require("./models/post.model")
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() })

app.post('/create-post', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No image file uploaded" })
        }

        const result = await uploadFile(req.file.buffer)

        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })

        return res.status(201).json({
            message: "Post created successfully",
            post
        })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "Failed to create post", error: err.message })
    }
})

app.get('/posts', async (req, res) => {
    try {
        const posts = await postModel.find()
        return res.status(200).json({ message: "Posts fetched successfully", posts })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "Failed to fetch posts", error: err.message })
    }
})

module.exports = app;