
'use client';

import { ApolloProvider } from '@apollo/client';
import Navbar from './components/navbar';
import client from './graphql/client';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <ApolloProvider client={client}>
          <Navbar /> {/* Global navigation bar */}
          <main>{children}</main>
        </ApolloProvider>
      </body>
    </html>
  );
}
