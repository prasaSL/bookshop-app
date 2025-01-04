'use client';

import { ApolloProvider } from '@apollo/client';
import Navbar from './components/navbar';
import AuthProvider from './components/authProvider';
import client from './graphql/client';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: 'Roboto, sans-serif',
          backgroundColor: '#f5f5f5',
          color: '#333333',
          
          
        }}
      
      >
        <ApolloProvider client={client}>
          <AuthProvider>
            <Navbar />
            <main>{children}</main>
          </AuthProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}