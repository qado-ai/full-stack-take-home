import "./globals.css";
import Providers from "./providers";

/*
  Layout Component:
  - Wraps the entire application.
  - We have already set up the QueryClientProvider (TanStack Query) for you.
  - You can add global navigation or footers here if desired, but it's not required.
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-gray-50 text-gray-900">
        <Providers>
           <main className="min-h-screen p-8 max-w-4xl mx-auto">
              {children}
           </main>
        </Providers>
      </body>
    </html>
  );
}
