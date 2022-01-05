import React, { useState } from 'react';
import PropTypes from 'prop-types';
import img from "./logonav.png"

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json()) 
   }


export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

    

      const handleSubmit = async e => {
        if(username.length>5 && password.length>7){
          e.preventDefault();
          const token = await loginUser({
            username,
            password
          });
          setToken(token);
      }else{
        
      }
    }

    return(
    <div className="center">
        <form onSubmit={handleSubmit}>
            <img className="logolog" src={img}></img>
            <div className="inputbox">
                <input type="text" onChange={e => setUserName(e.target.value)} />
                <span>Email</span>
            </div>
            <div className="inputbox">
                <input type="text" onChange={e => setPassword(e.target.value)}/> 
                <span>Password</span>
            </div>
            <div className="inputbox">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};