import Link from "next/link";

const classes = [
  {
    wings: "06",
    en: "RULERS",
    zh: "統治者",
    note: "HIGHEST AUTHORITY",
    text: "理想國的最高統治階級。現今由五位六翼天使共同統治。",
    cls: "society-rulers",
  },
  {
    wings: "05",
    en: "APPOINTED AIDES",
    zh: "輔佐者",
    note: "BY APPOINTMENT",
    text: "由六翼統治者欽點的輔佐者。其地位來自統治者的直接任命。",
    cls: "society-aides",
  },
  {
    wings: "04",
    en: "LEADERSHIP",
    zh: "領導層",
    note: "LEADING CLASS",
    text: "理想國各制度與組織中的領導階級。",
    cls: "society-leaders",
  },
  {
    wings: "02",
    en: "GENERAL PUBLIC",
    zh: "普通百姓",
    note: "MAJORITY",
    text: "數量最多的一般民眾，構成理想國社會的主要人口。",
    cls: "society-public",
  },
];

export default function Society() {
  return (
    <main className="society-page">
      <section className="society-hero">
        <div className="society-meta">
          <span>IP / WORLD / 03</span>
          <span>PUBLIC RECORD</span>
        </div>

        <div className="society-heading">
          <span>SOCIAL STRUCTURE / RECORD</span>

          <h1>
            SOCI
            <br />
            ETY
          </h1>

          <div className="society-heading-bottom">
            <strong>階級與制度</strong>
            <span>SOCIAL HIERARCHY</span>
          </div>
        </div>

        <div className="society-hero-scale" aria-hidden="true">
          <span>06</span>
          <span>05</span>
          <span>04</span>
          <span>02</span>
        </div>
      </section>

      <section className="society-law">
        <div className="society-law-meta">
          <span>ARTICLE / 01</span>
          <span>AUTHORITY</span>
        </div>

        <p>所有天使必須對六翼天使表現敬意與尊崇。</p>

        <span className="society-law-index">06 / SUPREME</span>
      </section>

      <section className="society-hierarchy">
        <div className="society-section-meta">
          <span>CLASSIFICATION</span>
          <span>04 LEVELS</span>
        </div>

        <div className="society-hierarchy-head">
          <span>NUMBER OF WINGS</span>
          <span>STATUS / FUNCTION</span>
        </div>

        <div className="society-class-list">
          {classes.map((item) => (
            <article
              className={`society-class ${item.cls}`}
              key={item.wings}
            >
              <div className="society-class-number">
                <span>{item.wings}</span>
                <small>WINGS</small>
              </div>

              <div className="society-class-name">
                <span>{item.note}</span>
                <h2>{item.en}</h2>
                <strong>{item.zh}</strong>
              </div>

              <p>{item.text}</p>
            </article>
          ))}

          <div className="society-appointment" aria-hidden="true">
            <span>APPOINTED</span>
          </div>
        </div>
      </section>

      <section className="society-government">
        <div className="society-government-index">
          <span>CURRENT GOVERNANCE</span>
          <span>RECORD / 05</span>
        </div>

        <div className="society-government-number">05</div>

        <div className="society-government-copy">
          <span>SIX-WING RULERS</span>
          <h2>共同統治</h2>
          <p>
            現今的理想國由五位六翼天使共同統治。
          </p>
        </div>

        <div className="society-five-marks" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </section>

      <footer className="society-footer">
        <Link href="/world">← WORLD INDEX</Link>

        <Link href="/world/faith">
          NEXT RECORD — 04 / FAITH →
        </Link>
      </footer>
    </main>
  );
}
