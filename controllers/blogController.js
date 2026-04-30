const blog = require('../models/Blog')

const getAllBlog = async (req, res) => {
    try {
        const blogs = await blog.find()
        res.status(200).json(blogs)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const createBlog = async (req, res) => {
    try {
        const newBlog = new blog(req.body)
        await newBlog.save()
        res.status(201).json(newBlog)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const deleteBlog = async (req, res) => {
    try {
        await blog.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Deleted Blog..." })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { getAllBlog, createBlog, deleteBlog }