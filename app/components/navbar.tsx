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
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { isAuthenticated,
  clearToken
 } from '../utils/auth';
 import { useRouter } from 'next/navigation';
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/books', label: 'Books' },
    { path: '/auth/login', label: 'Login' },
    { path: '/auth/register', label: 'Register' },
  ];

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(isAuthenticated());
  }, []);
  const handleLogout = () => {
    clearToken();
    setIsAuth(false);
    router.push('/login');
  };

  return (
    <AppBar position="static" color="primary">
    <Toolbar>
      {/* Left section: Logo and Title */}
      
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Book Store
      </Typography>

      {/* Middle section: Navigation Links */}
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
      <Button 
      color="inherit" 
      startIcon={<HomeIcon />}
      onClick={() => isAuth ? router.push('/books') : router.push('/')}
    >
      Home
    </Button>
        
       
      </Box>

      {/* Right section: Auth Buttons */}
      <Box>
      {isAuth ? (
        <Button 
          color="inherit"
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <>
          <Button 
            color="inherit"
            onClick={() => router.push('/login')}
          >
            Login
          </Button>
          <Button 
            color="inherit"
            onClick={() => router.push('/register')}
          >
            Register
          </Button>
        </>
      )}
      </Box>
    </Toolbar>
  </AppBar>
  );
}
