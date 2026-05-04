import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain Spy Protector – Stop Registrar Front-Running",
  description: "Proxy your domain searches anonymously. Prevent registrars from seeing and squatting your domain ideas before you buy."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="734cb925-6d40-4fd7-9b51-d407e01cff7d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
