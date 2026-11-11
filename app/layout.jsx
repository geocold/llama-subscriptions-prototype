import './globals.css'

export const metadata = {
  title: 'Llama Premium | Llama Inc.',
  description: 'Your AI travel assistant. Go Premium for unlimited trip planning.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
