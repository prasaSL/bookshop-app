// app/books/page.tsx
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import Link from 'next/link';

export default function BookList() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      Book List
    </Typography>
      {/* Search Bar */}
      <TextField
        label="Search by Title, Author, or Genre"
        variant="outlined"
        fullWidth
 
        sx={{ mb: 2 }}
      />
    <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Published Year</TableCell>
            <TableCell>Genre</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {data.books.map((book: { id: string; title: string; author: string; publishedYear: string; genre: string }) => ( */}
            <TableRow>
              <TableCell>book.title</TableCell>
              <TableCell>book.author</TableCell>
              <TableCell>book.publishedYear</TableCell>
              <TableCell>book.genre</TableCell>
            </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
  );
}
