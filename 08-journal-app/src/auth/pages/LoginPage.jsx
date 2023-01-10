import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Link } from "@mui/material"
import { Google } from "@mui/icons-material"

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthetication, startGoogleSignIn } from '../../store';

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange} = useForm({
    email: 'mariana.aviles@gmail.com',
    password: '123345'
  });

  const isAuthenticating = useMemo( () =>  status == 'checking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log({ email, password });

    dispatch( checkingAuthetication() );
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Correo" 
              type='email' 
              placeholder='correo@google.com'
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña" 
              type='password' 
              placeholder='*********'
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

        </Grid>

        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 2 }}>
          <Grid item xs={ 12 } sm={ 6 }>
            <Button 
              disabled={ isAuthenticating }
              type='submit'
              variant='contained' 
              fullWidth>
              Login
            </Button>
          </Grid>

          <Grid item xs={ 12 } sm={ 6 }>
            <Button
              disabled={ isAuthenticating }
              variant='contained'
              fullWidth
              onClick={ onGoogleSignIn }>
              <Google/>
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Link component={ RouterLink } color="inherit" to="/auth/register">
            Crear una cuenta
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}

