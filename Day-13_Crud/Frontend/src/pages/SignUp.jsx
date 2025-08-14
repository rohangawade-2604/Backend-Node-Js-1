import React from 'react'   
import { useState } from 'react'
import{ useDispatch } from 'react-redux';

import { signUpThunk} from '../Reducer/SignupReducer';



export const SignUp = () => {

    const dispatchSignUp = useDispatch();

    const fields = [
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

    const [form , setform] = useState(() => {
        return fields.reduce((acc , field) => {
            acc[field.name] = '';
            return acc
        }, {})
    })
    console.log('form: ', form);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatchSignUp(signUpThunk(form)) 
    }

    const handleChange =(e) => {
        const {name, value} = e.target;
        setform((prev) => {
            return{
                ...prev,
                [name]: value
            }
        })
    }


  return (
    <>
      <form action="" onSubmit={handleSubmit}>
            
            {
                fields?.map((el ,i) => {
                    return(
                        <div key={i}>
                            <label htmlFor={el.name}>{el.label}</label>

                            <input type={el.type} 
                            id={el.id}
                            name={el.name} 
                            placeholder={el.placeholder} 
                            onChange={(e) =>handleChange(e)} 
                            required={el.required} 
                        />
                        </div>
                    )
                })
            }
            <button type='submit'>Submit</button>
      </form>
    </>
  )
}

 
