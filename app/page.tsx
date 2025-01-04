import { Box, Card, CardContent, Typography, CardMedia } from '@mui/material';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <Box 
    display="flex" 
    justifyContent="center" 
    alignItems="center" 
    minHeight="100vh"
    sx={{
      backgroundImage: 'url(/bg.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    >
      <Card sx={{ minWidth: 275,
        maxWidth: 500,
        margin: 'auto',
        marginTop: 10,
        borderRadius: 10,
        boxShadow: 5,
        padding: 2,
        textAlign : 'center',
        opacity: 0.8,
        
       }}>
        <CardMedia
          component="img"
          alt="Welcome"
          height="140"
          image="/welcome.jpg"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Welcome to the Home Page
          </Typography>
          <Typography sx={{ mt: 1.5 }} color="text.secondary">
            We're delighted to have you here! Explore a plethora of books and manage them effortlessly.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
