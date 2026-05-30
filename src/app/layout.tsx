import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <h2 className="bg-blue-100">ROOT LAYOUT</h2>
        {children}
      </body>
    </html>
  );
}
