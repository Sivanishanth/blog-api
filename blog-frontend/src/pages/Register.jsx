import { useState } from "react"

export default function Register(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handelSubmit = async (e)=>{
        e.preventDefault()
        const userData = {
            name,
            email,
            password
        }
        try{
            const response = await fetch(
                "http://localhost:6000/auth/register",
                {
                    method : "POST",
                    header : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify(userData)
                }
            )
            const data = await response.json()
            console.log(data)
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div>
            <h1>Register User</h1>
            <form onSubmit={handelSubmit}>
                <input type="text" 
                id="Form-UserName"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input type="email"
                id="Form-Email"
                placeholder="Enter Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <br />
                <input type="password"
                id="Form-Password"
                placeholder="Enter Password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <br />

                <button>Register</button>
            </form>
        </div>
    )
}