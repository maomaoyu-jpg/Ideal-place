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
    text: "由六翼天使欽點。可任職於中央系統的管理職位，直接接受六翼發配。",
    cls: "society-aides",
  },
  {
    wings: "04",
    en: "LEADERSHIP",
    zh: "領導層",
    note: "LEADING CLASS",
    text: "理想國的一般管理職位主要由四翼天使任職。",
    cls: "society-leaders",
  },
  {
    wings: "02",
    en: "GENERAL PUBLIC",
    zh: "普通百姓",
    note: "MAJORITY",
    text: "數量最多的一般民眾。制度上無法進入領導層，但仍接受平等且優良的教育。",
    cls: "society-public",
  },
];

const departments = [
  { number: "01", en: "ADMINISTRATION", zh: "行政" },
  { number: "02", en: "EDUCATION", zh: "教育" },
  { number: "03", en: "DEFENSE", zh: "國防" },
  { number: "04", en: "LAW", zh: "法律" },
  { number: "05", en: "FOREIGN AFFAIRS", zh: "外交" },
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

      <section className="society-authority">
        <div className="society-section-meta">
          <span>ACCESS / AUTHORITY / APPOINTMENT</span>
          <span>INSTITUTIONAL RECORD</span>
        </div>

        <div className="society-authority-heading">
          <span>02 / AUTHORITY</span>
          <h2>
            AUTHORITY
            <br />
            IS NOT EQUAL.
          </h2>
        </div>

        <div className="society-authority-grid">
          <article className="society-authority-item society-authority-education">
            <span>EDUCATION</span>
            <strong>平等教育</strong>
            <p>
              二翼天使雖無法進入領導層，
              仍與其他階級一樣接受平等且優良的教育。
            </p>
          </article>

          <article className="society-authority-item society-authority-management">
            <span>MANAGEMENT</span>
            <strong>管理權</strong>
            <p>
              一般管理職位主要由四翼天使任職。
              翼數同時構成進入領導階層的制度門檻。
            </p>
          </article>

          <article className="society-authority-item society-authority-central">
            <span>CENTRAL SYSTEM</span>
            <strong>中央系統</strong>
            <p>
              五翼天使可任職於中央系統的管理職位，
              並直接接受六翼天使的發配。
            </p>
          </article>
        </div>
      </section>

      <section className="society-fifth-wing">
        <div className="society-fifth-meta">
          <span>EXCEPTION / 05</span>
          <span>APPOINTMENT SYSTEM</span>
        </div>

        <div className="society-fifth-diagram" aria-hidden="true">
          <div className="society-fifth-four">
            <strong>04</strong>
            <span>FOUR WINGS</span>
          </div>

          <div className="society-fifth-process">
            <span>SIX-WING AUTHORITY</span>
            <i></i>
            <small>APPOINTMENT</small>
          </div>

          <div className="society-fifth-five">
            <strong>05</strong>
            <span>FIFTH WING</span>
          </div>
        </div>

        <div className="society-fifth-copy">
          <span>THE FIFTH WING</span>
          <h2>第五翼</h2>
          <p>
            六翼天使擁有使四翼天使後天生長第五翼的權能。
            因此，五翼並非與二、四、六翼相同的自然階級，
            而是由六翼者欽點後形成的特殊身分。
          </p>
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
            五位六翼天使理論上地位平級，
            各自掌管理想國中央系統中的不同領域。
          </p>
        </div>

        <div className="society-departments">
          {departments.map((department) => (
            <div className="society-department" key={department.number}>
              <span>{department.number}</span>
              <strong>{department.en}</strong>
              <small>{department.zh}</small>
            </div>
          ))}
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
