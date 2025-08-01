import React from 'react'
import{useState} from 'react';
import {useDispatch} from 'react-redux';
import {  signupThunks } from '../Features/SignIn/SignUpReducer';

export const Signup = () => {

  const dispatchSignup = useDispatch();

  const field = [
    {
      name: 'username', type: 'text', placeholder:'Enter your Username', label:'Username' , required: true
    },

    {
      name: 'email', type: 'email', placeholder:'Enter your Email', label:'Email' , required: true
    },

    {
      name: 'password', type: 'password', placeholder:'Enter your Password', label:'Password' , required: true
    },

    {
      name: 'confirmPassword', type: 'password', placeholder:'Enter your Confirm Password', label:'Confirm Password' , required: true
    }

  ];


  const [form ,setForm] = useState(()=> {
    return field.reduce((acc , field) => {
      acc[field.name] = '';
      return acc
    }, {})
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchSignup(signupThunks(form))
  }

  const handleChange = (e) => {
    const {name , value} = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        {
          field?.map((el, i) => {
            return(
              <div key={i}>
                <label htmlFor={el.name}>{el.label}</label>

                <input
                 type={el.type}
                 name={el.name}
                 id={el.id}
                 placeholder={el.placeholder}
                 value={form[el.name]}
                 onChange={(e) => handleChange(e)} 
                 required={el.required}/>
              </div>
            )
          })
        }
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}