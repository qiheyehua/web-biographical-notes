import './globals.css';

export const metadata = {
  title: '七禾页话的个人简历',
  description: 'Full Stack Developer Portfolio',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh" className="scroll-smooth">
      
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
} 