import "./globals.css";

export const metadata = {
  title: "Team2",
  description: "Created by Team2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
