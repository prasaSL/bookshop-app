

import Navbar from './components/navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Global navigation bar */}
        <main >{children}</main>
      </body>
    </html>
  );
}
