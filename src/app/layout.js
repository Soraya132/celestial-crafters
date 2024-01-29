import "./globals.css";
import Nav from "@/components/Navbar/Nav";
export const metadata = {
  title: "Soraya's Portfolio",
  description: "web developer and Freelancer",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
