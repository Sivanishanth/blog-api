import { useState } from "react";
import axios from "axios";
import '../style/Register.css'

function Register(){
    const [name ,setName] = useState('')
    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const [error ,setError] = useState('')

    const handleRegister = async (e) =>{
        e.preventDefault()

        try{
            await axios.post('https://blog-api-flrk.onrender.com/auth/register',{
                name,email,password
            })
            alert('Registeration Succesfull!!! Login To Continue')
            window.location.href = '/login'
        }catch(error){
            setError(error.response?.data?.message || 'Register Failed..!')
        }
    }
    return(
        <div className="register-container">
            <h2 className="register-title">Register</h2>
            <form className="register-form" onSubmit={handleRegister}>
                <input 
                type="text"
                id="username"
                placeholder="Name"
                value={name}
                onChange={(e)=> setName(e.target.value)} />

                <input 
                type="email"
                id="blog-email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} />

                <input type="password" 
                id="blog-password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} />

                <button type="submit">Register</button>
            </form>
            {error && <p style={{color:'red'}}>{error}</p>}
        </div>
    )
}

export default Register