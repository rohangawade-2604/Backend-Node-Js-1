import React from 'react'

import {SignUp} from './SignUp'

export const Login = () => {
  return (
    <>
      <div className="login_page">
        <div className="content">
            <h1 className='heading'>Login Users</h1>
        </div>

        <div className="form">
            <form action="">
                <div>
                    <input type="text" name='Username' placeholder='Enter the Username' />
                </div>

                <div>
                     <input type="password" name='password' placeholder='Enter the password' />
                </div>
                
               <div>
                    <SignUp/>
                    <button type='submit'>Submit</button>
               </div>
                
            </form>
        </div>
      </div>
    </>
  )
}


