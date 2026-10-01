import Link from "next/link";

export default function Eden() {
  return (
    <main className="archive-page">
      <div className="archive-number">
        IP / NOAH / EDEN — PUBLIC RECORD
      </div>

      <h1 className="archive-title">伊甸莊園</h1>
      <div className="archive-subtitle">EDEN MANOR</div>

      <div className="archive-grid">
        <section className="archive-description">
          <div className="section-label">LOCATION / 01</div>

          <p>
            位於諾亞大陸的伊甸。
            此處的正式檔案仍待補完。
          </p>

          <p>
            關於伊甸莊園的紀錄，可以由不同的嚮導閱讀。
            同一個地方，未必只有一種說法。
          </p>
        </section>

        <aside className="guide-panel">
          <div className="section-label">GUIDES</div>

          <Link className="guide-link" href="/guides/hiter">
            <span className="guide-name">希塔爾</span>
            <span className="guide-code">GUIDE / HITER</span>
          </Link>

          <Link className="guide-link" href="/guides/e27">
            <span className="guide-name">E27</span>
            <span className="guide-code">GUIDE / E27</span>
          </Link>
        </aside>
      </div>
    </main>
  );
}
