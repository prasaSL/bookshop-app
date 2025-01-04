'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { gql, useQuery, useMutation } from '@apollo/client';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';

const GET_BOOK = gql`
  query GetBook($id: String!) {
    book(id: $id) {
      id
      title
      author
      publishedYear
      genre
    }
  }
`;

const UPDATE_BOOK = gql`
  mutation UpdateBook($id: String!, $updateBookInput: CreateBookDto!) {
    updateBook(id: $id, updateBookInput: $updateBookInput) {
      id
      title
      author
      publishedYear
      genre
    }
  }
`;

interface Book {
  id: string;
  title: string;
  author: string;
  publishedYear: string;
  genre: string;
}

const UpdateBook = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [formData, setFormData] = useState<Book>({
    id: '',
    title: '',
    author: '',
    publishedYear: '',
    genre: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id },
    skip: !id,
  });

  const [updateBook] = useMutation(UPDATE_BOOK, {
    onCompleted: () => {
      setSnackbar({
        open: true,
        message: 'Book updated successfully',
        severity: 'success',
      });
      router.push('/books');
    },
    onError: (error) => {
      setSnackbar({
        open: true,
        message: error.message,
        severity: 'error',
      });
    },
  });

  useEffect(() => {
    if (data?.book) {
      setFormData(data.book);
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateBook({
        variables: {
          id,
          updateBookInput: {
            title: formData.title,
            author: formData.author,
            publishedYear: formData.publishedYear,
            genre: formData.genre,
          },
        },
      });
    } catch (err) {
      console.error('Error updating book:', err);
    }
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Update Book
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            name="title"
            label="Title"
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="author"
            label="Author"
            value={formData.author}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="publishedYear"
            label="Published Year"
            value={formData.publishedYear}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="genre"
            label="Genre"
            value={formData.genre}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update Book
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UpdateBook;