import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Blogs(){
    const [blogs,setBlogs] = useState([])
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [error,setError] = useState('')

    const [editId , setEditId] = useState(null)
    const [editTitle , setEditTitle] = useState('')
    const [editBody , setEditBody] = useState('')

    //get token localstorage
    const token = localStorage.getItem('token')

    //fetch blogs while page loads
    useEffect(()=>{
        fetchBlog()
    }, [])

    const fetchBlog = async ()=>{
        try{
            const response = await axios.get('https://blog-api-flrk.onrender.com/blogs',{
            headers : {Authorization : token}
        })
        setBlogs(response.data)
    }catch(error){
    setError('Failed to Fetch Blogs')
    }
}
const handleCreateBlog = async (e)=>{
    e.preventDefault()
    try{
        await axios.post('https://blog-api-flrk.onrender.com/blogs',
            {title,body},
            {headers : {Authorization : token}}
        )
        setTitle('')
        setBody('')
        fetchBlog()
    }catch(error){
        setError(error.response?.data?.message || 'Failed to Create Blog!')
    }
}
const handleDelete = async (id) =>{
    try{
        await axios.delete(`https://blog-api-flrk.onrender.com/blogs/${id}`,{
            headers : {Authorization : token}
        })
        fetchBlog()
    }catch(error){
        setError('Failed to Delete Blog!!')
    }
}

const handleUpdate = async (id)=>{
    try{
        await axios.put(`https://blog-api-flrk.onrender.com/blogs/${id}`,
           { title : editTitle , body : editBody }, 
           { headers : {Authorization : token} }
        )
        setEditId(null)
        fetchBlog()
    }catch(error){
        setError('Failed to Update Blog!!')
    }
}

const startEditting = (blogs) =>{
    setEditId(blogs._id)
    setEditTitle(blogs.title)
    setEditBody(blogs.body)
}

return(
    <div>
        <div className="blogsNavbar">
            <h1>Siva Blogs</h1>
            <button className="logoutBtn">logout</button>
        </div>
        <h2>Blogs</h2>
        <form onSubmit={handleCreateBlog}>
            <input
             type="text"
             id="create-blog-title"
             placeholder="Title"
             value={title}
             onChange={(e)=> setTitle(e.target.value)} required/>

             <textarea id="content-blog"
             placeholder="Body Content"
             value={body}
             onChange={(e)=> setBody(e.target.value)} required/>

             <button type="submit">Create Blog</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}

        <div>
            <h3>ALL BLOGS :</h3>
            {blogs.map(blog=>((
                <div key={blog._id} style={{border:'1px solid #d3cdcd' }}>
                    <h4>{blog.title}</h4>
                    <p>{blog.body}</p>
                    <button onClick={()=> handleDelete(blog._id)} id="delete-Blog">Delete</button>
                    {editId === blog._id ? (
                        <div>
                            <input value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)} />
                            <textarea value={editBody}
                            onChange={(e)=> setEditBody(e.target.value)}/>
                            <button onClick={()=> handleUpdate(blog._id)}>Save</button>
                            <button onClick={()=> setEditId(null)}>Cancel</button>
                        </div>
                    ):(
                        <button onClick={()=>startEditting(blog)}>Edit</button>
                    )}
                </div>
            ))
        )}
        </div>
    </div>
)
}

export default Blogs