import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "ItGeniux",
  description: "Next.js converted project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
