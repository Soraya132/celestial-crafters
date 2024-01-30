import "./globals.css";
import Nav from "@/components/Navbar/Nav";
export const metadata = {
  title: "Celestial Crafters",
  description: "Beyond Boundaries: Crafting a Celestial Future in Tech and Diversity",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        <div>
        <Nav />
         
          {children}
        </div>
      </body>
    </html>
  );
}
