import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/authContext'
const Login = () => {
  
  const [inputs, setInputs] = useState({
    username: "",
    password:"",
  })

  const [err, seterr] = useState(null);

  const navigate  = useNavigate()
  const {login} = useContext(AuthContext)

  const handleChange = e =>
  {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //const response = await axios.post('/api/auth/login', inputs);
      //const { token } = response.data;

      // Save the JWT token in Local Storage
      //l//ocalStorage.setItem('access_token', token);
      await login(inputs);
      navigate("/")
    } catch (err) {
      console.log(err.response.data);
      seterr(err.response.data)
    }
  };
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type='text' placeholder='Username' name="username" onChange={handleChange}/>
        <input type='password' placeholder='Password' name="password" onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login