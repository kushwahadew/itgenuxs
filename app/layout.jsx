import "./globals.css";
// import "leaflet/dist/leaflet.css";
import { Providers } from "./providers";

export const metadata = {
  title: "ITGenixs",
  description: "Next.js converted project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
