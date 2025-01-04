import gql from 'graphql-tag';

// Search Books
export const SEARCH_BOOKS = gql`
  query SearchBooks($search: String!) {
    search(search: $search) {
      id
      title
      author
      publishedYear
      genre
    }
  }
`;

// Register User
export const REGISTER_USER = gql`
  mutation Register($registerUserInput: RegisterUserInput!) {
    register(registerUserInput: $registerUserInput) {
      id
      username
      role
    }
  }
`;

// Update Book
export const UPDATE_BOOK = gql`
  mutation UpdateBook($id: String!, $updateBookInput: CreateBookDto!) {
    updateBook(id: $id, updateBookInput: $updateBookInput) {
      id
      title
    }
  }
`;

// Delete Book
export const DELETE_BOOK = gql`
  mutation DeleteBook($id: String!) {
    deleteBook(id: $id) {
      id
      title
     
    }
  }
`;

// Create Book
export const CREATE_BOOK = gql`
  mutation CreateBook($createBookInput: CreateBookDto!) {
    createBook(createBookInput: $createBookInput) {
      id
      title
    }
  }
`;


export const LOGIN_USER = gql`
  mutation LoginUser($loginUserInput: LoginUserInput!) {
    login(loginUserInput: $loginUserInput) {
      accessToken
      user {
        id
        username
        role
      }
    }
  }
`;


export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
      publishedYear
      genre
    }
  }
`;