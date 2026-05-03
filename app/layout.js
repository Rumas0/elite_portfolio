export const metadata = {
  title: "Itti Samur Tunib",
  description: "Professional Portfolio Website",
};

export default function Rootlayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
