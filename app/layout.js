import "./globals.css";
import Navbar from "@/components/Navbar";
import SpaceBackground from "@/components/SpaceBackground";

export const metadata = {
  title: "Hack-O-Mania'25",
  description: "24hr Hackathon by STME NMIMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SpaceBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
