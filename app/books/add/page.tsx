// app/books/add/page.tsx
'use client';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic for adding or updating the book
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Add a New Book
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Author"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={author}
          // onChange={(e) => setAuthor(e.target.value)}
        />
        <TextField
          label="Published Year"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={publishedYear}
          // onChange={(e) => setPublishedYear(e.target.value)}
        />
        <TextField
          label="Genre"
          variant="outlined"
          fullWidth
          margin="normal"
          // value={genre}
          // onChange={(e) => setGenre(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Add Book
        </Button>
      </Box>
    </Container>
  );
}
