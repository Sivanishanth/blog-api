const blog = require('../models/Blog')

const getAllBlog = async (req , res)=>{
    const blogs = await blog.find()
    res.json(blogs)
}

const createBlog = async (req,res)=>{
    const newBlog = new blog(req.body)
    await newBlog.save()
    res.json(newBlog)
}

const deleteBlog = async (req,res)=>{
    await blog.findByIdAndDelete(req.params.id)
    res.json({message : "Deleted Blog..."})
}

module.exports = {getAllBlog , createBlog , deleteBlog}