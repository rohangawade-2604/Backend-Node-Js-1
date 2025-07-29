import React from 'react'


export const SignUp = () => {
  return (
    <>
      <form action="">
        <div>
            <input type="text" name='name' placeholder='Enter the Name' />
        </div>

        <div>
             <input type="number" name='age' placeholder='Enter the Age' />
        </div>

          <div>
             <input type="email" name='email' placeholder='Enter the Email' />
        </div>

          <div>
             <input type="password" name='password' placeholder='Enter the password' />
        </div>

          <div>
           
            <button type='submit'>Submit</button>
        </div>
        
        
      </form>


    </>
  )
}


