import React from 'react'
import "./login.css"
import LoginSlideshow from './LoginSlideshow'
import LoginTitle from './LoginTitle'

const Login = () => {
  return (
    <div className="d-lg-flex half">
      <LoginSlideshow/>
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
              <LoginTitle/>
    
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login