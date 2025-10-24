// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "EstudarParaConcurso",
  description: "Portal de estudos para concursos públicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-800">
        <Header />
        <main className="pt-20 pb-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
