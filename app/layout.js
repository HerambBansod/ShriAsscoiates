import { Roboto, Merriweather } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Shri Associates",
  description:
    "Shri Associates offers expert financial planning, stock market advisory, and insurance services in India. Secure your future with personalized investment and wealth management solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
