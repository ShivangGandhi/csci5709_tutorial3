import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react'
import { useLocation } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


export default function Profile() {

    const theme = createTheme();
    const location = useLocation();

    const iconStyle = {
        color: 'blue',
        width: '100',
        height: '100',
        margin: 10,
        textAlign: 'center',
        display: 'inline-block',
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="xs" sx={{ mb: 4 }}>
                <Grid container spacing={2} sx={{ my: { xs: 3 } }}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        textAlign='center'
                    >
                        <Typography component="h1" variant="h3" align="center">
                            Profile
                        </Typography>

                        <AccountCircleOutlinedIcon style={iconStyle} />
                        <Card>

                            <CardHeader
                                title="First Name"
                                titleTypographyProps={{ align: 'center' }}
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2,
                                    }}
                                >
                                    <Typography component="h3" variant="h4" color="blue">
                                        {location.state.firstName}
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardHeader
                                title="Last Name"
                                titleTypographyProps={{ align: 'center' }}
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2,
                                    }}
                                >
                                    <Typography component="h3" variant="h4" color="blue">
                                        {location.state.lastName}
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardHeader
                                title="Email"
                                titleTypographyProps={{ align: 'center' }}
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2,
                                    }}
                                >
                                    <Typography component="h5" variant="h6" color="blue">
                                        {location.state.email}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}
