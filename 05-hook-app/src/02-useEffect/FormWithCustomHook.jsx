import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    })

  return (
    <>
        <h1>Formulario con custom hook</h1>

        <hr/>

        <input
            type="text"
            className='form-control'
            placeholder='Username'
            name="username"
            onChange={ onInputChange }
            value={ username }
        />


        <input
            type="email"
            className='form-control mt-2'
            placeholder='mariana@gmail.com'
            name="email"
            onChange={ onInputChange }
            value={ email }
        />

        <input
            type="password"
            className='form-control mt-2'
            placeholder='password'
            name="password"
            onChange={ onInputChange }
            value={ password }
        />      
        
        <button onClick={ onResetForm } className='btn btn-primary mt-2'>Borrar</button>
    </>
  )
}
