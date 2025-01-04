'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  Container,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { GET_BOOKS, SEARCH_BOOKS, DELETE_BOOK } from '../graphql/queries';

export default function BookList() {
  const [search, setSearch] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const router = useRouter();

  const { data: allBooks, loading, error, refetch } = useQuery(GET_BOOKS);
  const { data: searchResults } = useQuery(SEARCH_BOOKS, {
    variables: { search },
    skip: !search
  });

  const [deleteBook] = useMutation(DELETE_BOOK, {
    onCompleted: () => {
      refetch();
      setOpenDialog(false);
      setSnackbar({
        open: true,
        message: 'Book deleted successfully',
        severity: 'success'
      });
    },
    onError: (error) => {
      setSnackbar({
        open: true,
        message: error.message || 'Error deleting book',
        severity: 'error'
      });
    }
  });

  useEffect(() => {
    if (search) {
      if (searchResults?.search) {
        setFilteredBooks(searchResults.search);
      }
    } else if (allBooks?.books) {
      setFilteredBooks(allBooks.books);
    }
  }, [search, searchResults, allBooks]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleDeleteClick = (bookId: string) => {
    setSelectedBookId(bookId);
    setOpenDialog(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedBookId) {
      try {
        await deleteBook({
          variables: { id: selectedBookId }
        });
      } catch (error) {
        console.error('Error deleting book:', error);
      }
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  if (loading) return <CircularProgress />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <TextField
        fullWidth
        margin="normal"
        label="Search books..."
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
      />
      

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Published Year</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBooks.map((book: any) => (
              <TableRow key={book.id}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.publishedYear}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    sx={{ mr: 1 }}
                    onClick={() => router.push(`/books/${book.id}`)} // Navigate to the book edit page
                  >
                    <EditIcon 
                      sx={{ color: 'primary.main' }}
                    />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => handleDeleteClick(book.id)}
                  >
                    <DeleteIcon
                      sx={{ color: 'error.main' }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this book?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleSnackbarClose}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}