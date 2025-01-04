'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { isAuthenticated } from '../utils/auth';
import { Box } from '@mui/material';

const PUBLIC_ROUTES = ['/login', '/register', '/'];

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = isAuthenticated();
    setIsAuth(auth);
    
    if (!auth && !PUBLIC_ROUTES.includes(pathname)) {
      router.push('/');
    }
  }, [pathname, router]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {children}
    </Box>
  );
};

export default AuthProvider;