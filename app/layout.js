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

        <section className="global-context-note">
          <div className="global-context-label">
            <span>CONTEXT NOTE</span>
            <span>FICTIONAL SETTING</span>
          </div>

          <p>
            《理想國》為虛構世界觀作品，其中部分宗教意象、名詞與視覺元素
            借鑑自基督宗教文化與藝術傳統；作品中的制度、教義、角色及事件皆屬
            虛構設定，不代表任何現實宗教、教派或信仰團體。
          </p>
        </section>
      </body>
    </html>
  );
}
