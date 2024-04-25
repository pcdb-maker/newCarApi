import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "API Car Rental",
  description: "An Car Rental Project completed with Rapid API, TypeScript and Javascript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
