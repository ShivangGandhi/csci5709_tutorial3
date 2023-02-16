import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Registration() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const theme = createTheme();
    const password = useRef({})
    const navigate = useNavigate();

    password.current = watch("password", "");

    const onSubmit = (data) => {
        console.log(data);
        navigate('/profile', { state: data })
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="xs" sx={{ mb: 4 }}>
                <Paper sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Register
                    </Typography>
                    <br />
                    <hr />
                    <br />
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                        <React.Fragment>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        id="firstName"
                                        autoFocus
                                        fullWidth
                                        label="First Name"
                                        {...register("firstName", {
                                            required: "First Name is Required",
                                            pattern: {
                                                value: /^[A-Za-z]+$/,
                                                message: "Only Letters"
                                            }
                                        })}
                                        error={Boolean(errors.firstName)}
                                        helperText={errors.firstName?.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="family-name"
                                        name="lastName"
                                        id="lastName"
                                        fullWidth
                                        label="Last Name"
                                        {...register("lastName", {
                                            required: "Last Name is Required",
                                            pattern: {
                                                value: /^[A-Za-z]+$/,
                                                message: "Only Letters"
                                            }
                                        })}
                                        error={Boolean(errors.lastName)}
                                        helperText={errors.lastName?.message}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="email"
                                        autoComplete="email"
                                        id="email"
                                        fullWidth
                                        label="Email"
                                        {...register("email", {
                                            required: "Please enter your email",
                                            pattern: {
                                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                message: "Invalid Email"
                                            }
                                        })}
                                        error={Boolean(errors.email)}
                                        helperText={errors.email?.message}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        fullWidth
                                        label="Password"
                                        {...register("password", {
                                            required: "Please enter a password",
                                            minLength: {
                                                value: 8,
                                                message: "Password must have at least 8 characters"
                                            }
                                        })}
                                        error={Boolean(errors.password)}
                                        helperText={errors.password?.message}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="confirmPassword"
                                        type="password"
                                        id="confirmPassword"
                                        fullWidth
                                        label="Confirm Password"
                                        {...register("confirmPassword", {
                                            required: "Please confirm your password",
                                            validate: (value) => {
                                                return value === password.current || "The passwords do not match"
                                            }
                                        })}
                                        error={Boolean(errors.confirmPassword)}
                                        helperText={errors.confirmPassword?.message}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                color="primary"
                                size="large"
                                variant="outlined"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                        </React.Fragment>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    )
}
