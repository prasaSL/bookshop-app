'use client';


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/books', label: 'Books' },
    { path: '/auth/login', label: 'Login' },
    { path: '/auth/register', label: 'Register' },
  ];

  return (
    <AppBar position="static" color="primary">
    <Toolbar>
      {/* Left section: Logo and Title */}
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Book Store
      </Typography>

      {/* Middle section: Navigation Links */}
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
        <Button color="inherit" startIcon={<HomeIcon />} >
          Home
        </Button>
        <Button color="inherit" startIcon={<InfoIcon />} >
          About
        </Button>
        <Button color="inherit" startIcon={<ContactMailIcon />} >
          Contact
        </Button>
      </Box>

      {/* Right section: Auth Buttons */}
      <Box>
        {/* {isAuthenticated ? (
          <>
            <Button color="inherit" >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" >
              Login
            </Button>
            <Button color="inherit" >
              Register
            </Button>
          </>
        )} */}
         <Button color="inherit" >
              Login
            </Button>
            <Button color="inherit" >
              Register
            </Button>
      </Box>
    </Toolbar>
  </AppBar>
  );
}
