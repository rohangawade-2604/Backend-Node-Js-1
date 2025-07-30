import React from 'react'

export const Login = () => {
  return (
    <>
      <div className="Login">
        <form action="">
            <div className="username">
                <input type="text" name='username' placeholder="Username" />
            </div>

            <div className="password">
                <input type="password" name='password' placeholder="Password" />
            </div>
        </form>
      </div>
    </>
  )
}

