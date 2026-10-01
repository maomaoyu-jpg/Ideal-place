import "./globals.css";

export const metadata = {
  title: "IDEAL PLACE",
  description: "理想國世界觀檔案",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>
        <header className="site-header">
          <a href="/" className="site-name">
            IDEAL PLACE
          </a>

          <nav>
            <a href="/">NOAH</a>
            <a href="/eden">ARCHIVE</a>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
