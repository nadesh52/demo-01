import "@/styles/globals.css";

export const metadata = {
  title: "Demo 01",
  description: "Generated by Next.js",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-background">{children}</body>
    </html>
  );
}
