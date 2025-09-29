import './globals.css';
import { ReactNode } from 'react';

export const metadata = { 
  title: 'FloatChat', 
  description: 'Ocean data dashboard with AI chatbot' 
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

