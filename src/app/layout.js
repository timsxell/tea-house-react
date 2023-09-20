import './globals.css'
import { space_grotesk } from './fonts/fonts'
import Link from 'next/link'
import { StoreProvider } from '@/store/provider'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export const metadata = {
  title: 'Tea House',
  description: 'Tea House in Budva',
}

let count = 0;


export default function RootLayout({ children }) {
  return (
    <StoreProvider>
    <html lang="en">
      <body className={space_grotesk.className} style={{minHeight:'100vh'}}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
    </StoreProvider>
  )
}
