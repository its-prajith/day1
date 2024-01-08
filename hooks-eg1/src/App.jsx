import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <div>
      <div class="pim">

        <div class=" a loginside">
        
            <h1>Sign In</h1>
            <div class="so-media">
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-instagram"></a>
              <a href="#" className="fa fa-google-plus"></a>
              <a href="#" className="fa fa-linkedin"></a>
              <div><h4>or use your account</h4></div>
            </div>
            {/* <!-- <label for="uname" value="Username" >Username: </label> --> */}
            <div><input type="text" id="uname" name="uname" placeholder="Username" /></div>
            <br />



              {/* <!-- <label for="lname" value="Password" >Password:</label> --> */}
              <div><input type="text" id="password" placeholder="Password" name="lname" /></div>
              <br />
                <div><a href="#">Forgot Password?</a></div>
                <br />
                  <div><button id="signin">Sign in</button></div>
                
              </div>



              <div className="a welcome">
                <div className="text">
                  <h1>Hello,Friend!</h1>

                  <p>Enter your personal details and start journey with us!!!</p>
                  <br />
                    <form> <div><button id="signup">Sign up</button></div></form>
                </div>
              </div>

            </div>
        </div>
      
  )
}

export default App
