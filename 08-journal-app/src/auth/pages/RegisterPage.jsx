import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from '../../hooks';

const formData = {
  email: 'mariana.aviles@gmail.com',
  password: '123345',
  displayName: 'Mariana Avilés'
}

const formValidations = {
  email: [ (value) => value.includes('@') , 'El email debe de tener un @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

  console.log(formValidations);

  const { formState, displayName, email, password, onInputChange, 
          isFormValid, displayNameValid, emailValid, passwordValid
        } = useForm(formData, formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
  }

  return (
    <AuthLayout title='Crear cuenta'>
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
                error= { displayNameValid }
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
              error= { emailValid }
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
              error= { passwordValid }
              helperText= { passwordValid }
            />
          </Grid>

        </Grid>

        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 2 }}>
          <Grid item xs={ 12 } sm={ 6 }>
            <Button variant='contained' fullWidth>
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
