// src/app/layout.js

import './App.css'

//👇 Import Open Sans font
import { Comfortaa } from 'next/font/google'

//👇 Configure our font object
const robotoMono = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    // 👇 Attach font to global JSX node
    <html lang="en" className={robotoMono.className}>
      <body>{children}</body>
    </html>
  )
}