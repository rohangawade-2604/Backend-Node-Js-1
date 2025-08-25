import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

import { signUpThunk } from '../Reducer/SignupReducer';



export const SignUp = () => {

  const dispatchSignUp = useDispatch();

  const fields = [
    {
      name: 'username', type: 'text', placeholder: 'Enter your Username', label: 'Username', required: true
    },

    {
      name: 'email', type: 'email', placeholder: 'Enter your Email', label: 'Email', required: true
    },

    {
      name: 'password', type: 'password', placeholder: 'Enter your Password', label: 'Password', required: true
    },

    {
      name: 'confirmPassword', type: 'password', placeholder: 'Enter your Confirm Password', label: 'Confirm Password', required: true
    }
  ];

  const [form, setform] = useState(() => {
    return fields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc
    }, {})
  })
  console.log('form: ', form);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatchSignUp(signUpThunk(form))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }


  return (
    <>
      <div className="form_part1  mt-10">

        <h1 className='text-center text-[20px] font-bold'>Sign Up </h1>

        <form action="" onSubmit={handleSubmit} >

          {
            fields?.map((el, i) => {
              return (
                <div key={i} className='flex flex-col gap-6 items-center  '>
                  <label htmlFor={el.name}></label>

                  <input type={el.type}
                    id={el.id}
                    name={el.name}
                    placeholder={el.placeholder}
                    onChange={(e) => handleChange(e)}
                    required={el.required}
                    autoComplete="off"

                    className='border-1 w-[400px] h-[40px] rounded-md text-center'
                  />
                </div>
              )
            })
          }
          <div className="button_part text-center mt-8">
            <button type='submit' className=' w-[400px] h-[40px] rounded-md bg-green-500 text-white transition-all hover:bg-green-600 hover:text-black '>Submit</button>
          </div>
        </form>
      </div>

    </>
  )
}


