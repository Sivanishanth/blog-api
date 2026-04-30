const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')
const protect = require('../middleware/authMiddle')

router.get('/',protect,blogController.getAllBlog)
router.post('/',protect,blogController.createBlog)
router.delete('/:id',protect,blogController.deleteBlog)

module.exports = router