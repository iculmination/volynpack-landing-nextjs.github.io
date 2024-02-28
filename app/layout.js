import "./App.css";
// import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";

const robotoMono = Comfortaa({
  subsets: ["latin"],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: 'VolynPack'
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoMono.className}>
      <body>{children}</body>
    </html>
  );
} 
