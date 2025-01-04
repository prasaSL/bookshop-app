// app/login/page.tsx
'use client';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form"  sx={{ mt: 2, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            type="email"
            
            
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            
          />
          {/* {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )} */}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
