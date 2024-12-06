import React from 'react'

const Login = () => {
  return (
    <div>
            <form >
                
                <div className="form-group">
                    <label>Email address:</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" id="pwd" />
                </div>
    
                <button className="btn btn-primary">Submit</button>
            </form>

        </div>
  )
}

export default Login
