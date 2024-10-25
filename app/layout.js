import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import Chatbot from './components/Chatbot'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BTC is going all time high',
  description: 'And we are getting high',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <Header />
        <main>
          {children}
        </main>
        <Chatbot />
      </body>
    </html>
  )
}