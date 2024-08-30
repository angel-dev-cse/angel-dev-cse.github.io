import SmoothScrolling from "./components/SmoothScrolling";
import { poppinsRegular } from "./ui/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
        <title>Angel Sharma</title>
      </head>
      <body className={`${poppinsRegular.className} scrollbar-hide`}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
