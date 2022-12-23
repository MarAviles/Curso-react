import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'mariana@gmail.com'
    });


    const { username, email } = formState;

    const onInputChange = ({ target }) =>{
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    // useEffect(() => {
    //     console.log('useEffect changed');
    // }, []);


    // useEffect(() => {
    //     console.log('formState changed');
    // }, [formState]);

    // useEffect(() => {
    //     console.log('email changed');
    // }, [email]);
    


  return (
    <>
        <h1>Formulario Simple</h1>

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

        {
             username === 'strider2' && <Message/>
        }
        
    </>
  )
}
