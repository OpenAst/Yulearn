import { useState } from 'react'
import api from "../api"
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"; 
import "../styles/Form.css";

const Form = ({ endpoint, method }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const name = method === "login" ? "Login" : "Register"
    const text = method === "login" ? "Learn to earn" : "Welcome to the world of adventure";

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        const res = await api.post(endpoint, { username, password})
        if (method === "login") {
          localStorage.setItem(ACCESS_TOKEN, res.data.access);
          localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
          navigate("/")
        }
        else {
          alert('Registration successful! Please login.');
          navigate("/login")
        }
      }
      catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    }
    const handlePassword = async (e) => {
      e.preventDefault();

      try {
        const res = await api.post('/auth', { username, password });

      } catch (error) {
        console.log("Error handling password:", error)
      }
    }

    return ( 
      <form onSubmit={handleSubmit}    className="form-container">
        <h1>{name}</h1>
        <p className="form-text">{text}</p>
        <input 
          className="form-input"
          value={username}
          type='text'
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />

        <input 
          className="form-input"
          value={password}
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          />

        <button 
          className="form-button" 
          type = "submit"
          disabled={loading}
        >{loading ? 'Loading...' : name}</button>
        <br />
        <button className="password-reset" 
          onClick={handlePassword}
          type="submit"
        >Forgot password ?</button>
      </form>
    )      
}

export default Form;