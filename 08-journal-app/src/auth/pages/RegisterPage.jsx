import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from '../../hooks';
import { useState } from 'react';
import { startCreatingUserWithEmailPassword } from '../../store/thunks';
import { useMemo } from 'react';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@') , 'El email debe de tener un @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmmitted, setFormSubmmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { formState, displayName, email, password, onInputChange, 
          isFormValid, displayNameValid, emailValid, passwordValid
        } = useForm(formData, formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmmitted(true);
    if ( !isFormValid ) return;
  
    console.log('formState', formState);
    dispatch( startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AuthLayout title='Crear cuenta'>
      <p>FormValid { isFormValid ? 'Valido' : 'Incorrecto'} </p>
      <form>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Nombre Completo" 
                type='text' 
                placeholder='Nombre completo'
                fullWidth
                name='displayName'
                value={ displayName }
                onChange={ onInputChange }
                error= { displayNameValid && formSubmmitted }
                helperText= { displayNameValid }
              />
            </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Correo" 
              type='email' 
              placeholder='correo@google.com'
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
              error= { emailValid && formSubmmitted }
              helperText= { emailValid }
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña" 
              type='password' 
              placeholder='*********'
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
              error= { passwordValid && formSubmmitted }
              helperText= { passwordValid }
            />
          </Grid>
        </Grid>

        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

          <Grid 
            item 
            xs={ 12 }
            display={ !!errorMessage ? '': 'none' }
            >
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>

          <Grid item xs={ 12 }>
            <Button
              disabled={ isCheckingAuthentication }
              type='submit'
              variant='contained' 
              fullWidth>
              Crear cuenta
            </Button>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
          <Link component={ RouterLink } color="inherit" to="/auth/login">
            Ingresar
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}
