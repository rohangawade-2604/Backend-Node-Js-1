import React from 'react'

export const login = () => {
  return (
    <>
      <div className="login_page">
        <div className="content">
            <h1>Login Users</h1>
        </div>

        <div className="form">
            <form action="">
                <input type="text" name='Username' placeholder='Enter the Username' />
                <input type="password" name='password' placeholder='Enter the password' />
                <button type='submit'>Submit</button>
            </form>
        </div>
      </div>
    </>
  )
}


