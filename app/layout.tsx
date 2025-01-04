'use client';

import { ApolloProvider } from '@apollo/client';
import Navbar from './components/navbar';
import AuthProvider from './components/authProvider';
import client from './graphql/client';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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