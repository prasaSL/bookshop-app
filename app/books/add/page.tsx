// app/books/add/page.tsx
'use client';
import { Box, Button, Container, TextField, Typography, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
// import { CREATE_BOOK } from '../graphql/queries';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const [genre, setGenre] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  
  const CREATE_BOOK = gql`
  mutation CreateBook($createBookInput: CreateBookDto!) {
    createBook(createBookInput: $createBookInput) {
      id
      title
    }
  }
`;
  const [createBook] = useMutation(CREATE_BOOK);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data } = await createBook({
        variables: {
          createBookInput: {
            title,
            author,
            publishedYear,
            genre
          },
        },
      });

      setSnackbarMessage('Book added successfully!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      clearForm();
    } catch (err) {
      setSnackbarMessage('Error adding book. Please try again.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const clearForm = () => {
    setTitle('');
    setAuthor('');
    setPublishedYear('');
    setGenre('');
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Author"
          variant="outlined"
          fullWidth
          margin="normal"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <TextField
          label="Published Year"
          variant="outlined"
          fullWidth
          margin="normal"
          value={publishedYear}
          onChange={(e) => setPublishedYear(e.target.value)}
        />
        <TextField
          label="Genre"
          variant="outlined"
          fullWidth
          margin="normal"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth
          >
            Add Book
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            onClick={clearForm}
            sx={{ ml: 2 }}
          >
            Clear
          </Button>
        </Box>
      </Box>

      {/* Snackbar for showing feedback */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}
