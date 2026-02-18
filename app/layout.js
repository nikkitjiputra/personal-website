import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import FallingLeaves from "./components/FallingLeaves";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nikki Tjiputra",
  description: "Personal Website",
};

const leafImages = [
    "/leaf1.png",
    "/leaf2.png",
    "/leaf3.png",
    "/leaf4.png",
    "/leaf5.png",
    "/leaf6.png"
];

export default function RootLayout({ children }) {
  //const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className={`font-sans antialiased`}
      >
        <FallingLeaves images={leafImages} count={30} />
        <NavBar className="self-start" />
        {children}
      </body>
    </html>
  );
}
