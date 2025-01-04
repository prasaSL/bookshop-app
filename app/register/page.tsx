import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const userRegister = () => {
  return (
    (
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
            Register
          </Typography>
          <Box component="form"  sx={{ mt: 2, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
             
             
            />
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
              
             
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              
            />
            {/* {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
            {success && (
              <Typography color="primary" variant="body2">
                {success}
              </Typography>
            )} */}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
              Register
            </Button>
          </Box>
        </Box>
      </Container>
  )
  )
}

export default userRegister