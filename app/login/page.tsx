'use client';

import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../graphql/queries'; // Import your login mutation
import { setToken } from '../utils/auth'; // Authentication helpers
import { useRouter } from 'next/navigation'; // For redirecting after login
import { LOGIN_USER } from '../graphql/queries';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  // Login mutation hook
  const [loginUser] = useMutation(LOGIN_USER);

  interface LoginUserInput {
    username: string;
    password: string;
  }

  interface LoginData {
    login: {
      token: string;
    };
  }

  interface LoginVariables {
    username: string;
    password: string;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const loginUserInput: LoginUserInput = {
        username,
        password
      };
      
      const { data } = await loginUser({ 
        variables: { loginUserInput } 
      }) as { data: LoginData };
      
      setToken(data.login.accessToken);
      router.push('/books');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
       <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Sign In
          </Button>
        </Box>
      </Box> 
    </Container>
  );
}