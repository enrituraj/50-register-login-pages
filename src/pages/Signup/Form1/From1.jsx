import React from 'react'
import form_img from'./img/Form1.png'
import './Form.scss'
const From1 = () => {
  return (
    <>
        {/** navbar 
        <nav className="navbar">
            <div className="logo">
                <h3>Logo</h3>
            </div>
        </nav>*/}
        {/** Form Body */}
        <div className="form-container">
            <div className="form-area">
                <div className="form-header">
                    <h1 className="main-title">Welcome to Design Community</h1>
                    <p className="subtitle">Already have an ccount? <a href="">Log in</a></p>
                 </div>
                <div className="form-body">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email'/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' id='username'/>
                    </div>
                    <div className="input-group password">
                        <div className="flex">                            
                            <label htmlFor="password">Password</label>
                            <span>Hide</span>
                        </div>
                        <input type="password" name='password' id='password'/>
                        <ul className="password-strength">
                            <li>Use 8 or more characters</li>
                            <li>One Uppercase character</li>
                            <li>One lowercase character</li>
                            <li>One special character</li>
                            <li>One number</li>
                        </ul>
                    </div>
                    <div className="checkbox">
                        <label htmlFor="check">
                            <input type="checkbox" name="" id="check" />
                            <div>I want to receive emails about the product, feature updates, events, and marketing promotions.</div>
                        </label>
                    </div>
                    <p className="subtitle">
                    By creating an account, you agree to the Terms of use and Privacy Policy.
                    </p>
                    <button disabled className='btn-signup'>Create an account</button>
                    <p className="subtitle">Already have an ccount? <a href="">Log in</a></p>
                </div>
            </div>
            <div className="form-img">
                <div className="form-bg"></div>
            </div>
        </div>
    </>
  )
}

export default From1