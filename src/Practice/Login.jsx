import React from 'react'
import Dedicatedcss from '../Home/home.module.css'

const Login = () => {
  return (
    <div>
         <div className={Dedicatedcss.section}>
        <form action="">
            <div className={Dedicatedcss.login} id='login2'>
                    <div id='hello'>
                    <div><TextField id="outlined-basic" type='email' label="Email" variant="outlined" required name='userEmail' onChange={handledata}/></div>
                    <div><TextField id="outlined-basic" type='password' label="Password" variant="outlined" required name='password' onChange={handledata}/></div>
                    <div id={Dedicatedcss.button} onClick={handleSubmit}><Login/></div>
                    <div>Forgot Password?</div>
                    <div>Don't have an account <Link to={'/signup'} onClick={handleSignup}>Sign up</Link></div>
                    </div>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login