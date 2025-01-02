import "./global.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
