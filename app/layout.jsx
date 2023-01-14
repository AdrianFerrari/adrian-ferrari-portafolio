import './globals.css'
import Header from "./components/Header"
import { Raleway } from '@next/font/google';

const raleway = Raleway({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className}>
      <head />
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}