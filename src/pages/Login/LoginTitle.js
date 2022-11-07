import React from 'react'
import Input from './Input'
import Logo from "./images/logo.png"
import Button from './Button'

const LoginTitle = () => {
  return (
    <div className='col-md-7'>
        <img src={Logo} alt="Logo" />
              <h3>Login to <strong>Dashboard</strong></h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                consectetur adipisicing.
              </p>
              <form action="#">
                <Input value="Username" label="username" placeholder="Your Username" />
                <Input value="Password" label="password" placeholder="Your Password" />
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <label className="control control--checkbox mb-0"
                      ><span className="caption">Remember me</span>
                      <input type="checkbox" checked="checked" />
                      <div className="control__indicator"></div>
                    </label>
                  </div>
                  <div>
                    <span className="mb-5"
                      ><a href="#" className="forgot-pass">Forgot Password</a></span
                    >
                  </div>
                </div>

                <Button/>
              </form>
    </div>
  )
}

export default LoginTitle