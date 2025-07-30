import React from 'react'

export const Login = () => {
  return (
    <>
      <div className="Login">
        <form action="" className='form_part'>
            <h4>Login page </h4>
            <div className="username">
                <input type="text" name='username' placeholder="Username" />
            </div>

            <div className="password">
                <input type="password" name='password' placeholder="Password" />
            </div>


            <div className="btn">
                <button type='submit'>Login</button>
            </div>
        </form>
      </div>
    </>
  )
}

