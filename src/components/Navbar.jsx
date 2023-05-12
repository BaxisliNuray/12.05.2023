import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import CheckroomIcon from '@mui/icons-material/Checkroom';
function Navbar() {
    return (
        <AppBar position="static" style={{ backgroundColor: ' transparent' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                    <Typography >
                        <Link style={{ color: 'wheat', textDecoration: 'none' }} to='/home'> HOME </Link>
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} >
                        <CheckroomIcon sx={{ fontSize: '40px', color: '#d93f87', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            component="a"
                            href="/home"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'wheat',
                                textDecoration: 'none',

                            }}
                        >DUKKAN</Typography>
                    </div>
                    <div style={{display:'flex'}}>
                    <Typography>
                        <Link style={{ color: 'wheat', textDecoration: 'none' }} to='/'> BASKET PAGE </Link>
                    </Typography>
                    <button style={{marginLeft:'20px'}}>count</button>
                    </div>


                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar