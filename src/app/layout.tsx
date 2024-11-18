import 'antd/dist/reset.css'; // CSS chính của Ant Design
import './globals.css'; // File custom CSS nếu bạn cần

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
