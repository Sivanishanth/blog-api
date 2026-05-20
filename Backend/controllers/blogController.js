const blog = require('../models/Blog')

const getAllBlog = async (req, res) => {
    try {
        const blogs = await blog.find({ userId: req.user.userId })
        res.status(200).json(blogs)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const createBlog = async (req, res) => {
    try {
        const newBlog = new blog(req.body)
        newBlog.userId = req.user.userId
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

const updateBlog = async (req,res)=> {
    try{
        const updated = await blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true}
        )
        res.status(200).json(updated)
    }catch(error){
        res.status(500).json({message : error.message})
    }
}

module.exports = {getAllBlog,createBlog,updateBlog,deleteBlog}