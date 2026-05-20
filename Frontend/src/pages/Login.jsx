import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../style/Login.css'

function Login() {
    const navigate = useNavigate()
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [error , setError] = useState('')

    const handleLogin = async (e) =>{

        e.preventDefault()
        try {
            const response = await axios.post('https://blog-api-flrk.onrender.com/auth/login',{
                email,
                password
            })
            localStorage.setItem('token',response.data.token)
            alert('Login Succesful')
            navigate('/blogs')
        }catch(error){
            setError(error.response?.data?.message || 'Login Failed')
        }
    }
    return(
        <div className="login-container">
            <h2 className="login-title">Login Page</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <input 
                className="login-input"
                type="email"
                id="blog-mail"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

                <input 
                className="login-input"
                type="password"
                id="blog-password"
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)} />

                <button className="login-btn" type="submit">Login</button>
            </form>
            {error && <p style={{color:'red'}}>{error}</p>}
        </div>
    )
}

export default Login