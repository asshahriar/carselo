import { Footer, Navbar } from "@/components";
import "./globals.css";


export const metadata = {
  title: "Carselo",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
