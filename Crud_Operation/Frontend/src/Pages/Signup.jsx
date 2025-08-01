import React from 'react'

export const Signup = () => {
  return (
    <>
      <div className="signUp">
        <div className="form_2">
          <form action="">

            <div className="name">
              <input type="text" name='name' placeholder="Name" />
            </div>


            <div className="age">
              <input type="number" name='age' placeholder="Age" />
            </div>

            
            <div className="Email">
              <input type="email" name='email' placeholder="email" />
            </div>

            
            <div className="password">
              <input type="text" name='password' placeholder="password" />
            </div>

            
            <div className="ConfirmPassword">
              <input type="text" name='confirmpassword' placeholder="Confirm Password" />
            </div>

            <div>
              <button type='submit'>Signup</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}