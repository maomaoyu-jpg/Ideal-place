import Link from "next/link";

const doctrines = [
  {
    number: "01",
    en: "THE DIVINE",
    zh: "神",
    text: "有翼族的信仰以神為最高存在。神聖的意象、教典與儀式滲入社會之中，並成為理想國理解秩序與自身存在的重要基礎。",
  },
  {
    number: "02",
    en: "THE ANGEL",
    zh: "天使",
    text: "有翼族自稱「天使」，並以羽翼與光環作為神聖性的象徵。這份信仰不只存在於宗教領域，也深刻影響了有翼族對自身身分的認知。",
  },
  {
    number: "03",
    en: "THE SCRIPTURE",
    zh: "教典",
    text: "聖典與聖訓被視為信仰的重要依據，並透過教育、儀式與日常生活持續傳遞。",
  },
];

export default function Faith() {
  return (
    <main className="faith-page">
      <section className="faith-hero">
        <div className="faith-meta">
          <span>IP / WORLD / 04</span>
          <span>PUBLIC RECORD</span>
        </div>

        <div className="faith-hero-image" aria-hidden="true">
          <img
            src="/images/world/winged/IMG_4493.jpeg"
            alt=""
          />
        </div>

        <div className="faith-heading">
          <span>DOCTRINE / RELIGIOUS RECORD</span>

          <h1>FAITH</h1>

          <div className="faith-heading-bottom">
            <strong>信仰</strong>
            <span>RELIGION / DOCTRINE</span>
          </div>
        </div>

        <div className="faith-crosshair" aria-hidden="true">
          <span></span>
          <i></i>
        </div>

        <p className="faith-opening">
          白羽有翼族將自身稱作「天使」。
          <br />
          信仰不僅是宗教，也是理想國理解世界、
          建立秩序與定義自身的基礎之一。
        </p>
      </section>

      <section className="faith-belief">
        <div className="faith-section-meta">
          <span>ARTICLE / 01</span>
          <span>THE SACRED</span>
        </div>

        <div className="faith-belief-grid">
          <div className="faith-belief-title">
            <span>OBJECT OF FAITH</span>
            <h2>
              神聖，
              <br />
              與天使。
            </h2>
          </div>

          <div className="faith-belief-copy">
            <p>
              有翼族的文化大量圍繞著「神聖」建立。
              神、天使、光環、羽翼與教典，
              共同構成了理想國最重要的宗教符號。
            </p>

            <p>
              對有翼族而言，信仰並非與日常生活分離的事物。
              它存在於教育、制度、公共空間與個人身分之中，
              並持續影響人們如何理解這個國度。
            </p>
          </div>
        </div>

        <figure className="faith-cross-figure">
          <div className="faith-cross-image">
            <img
              src="/images/world/winged/IMG_4494.jpeg"
              alt="十字架與日暈"
            />
          </div>

          <figcaption>
            <span>FIG. 01</span>
            <span>SACRED SYMBOL / HALO</span>
            <span>EDITORIAL REFERENCE</span>
          </figcaption>
        </figure>
      </section>

      <section className="faith-doctrine">
        <div className="faith-section-meta">
          <span>ARTICLE / 02</span>
          <span>DOCTRINAL STRUCTURE</span>
        </div>

        <div className="faith-doctrine-heading">
          <span>THREE ELEMENTS</span>
          <h2>DOCTRINE</h2>
          <strong>信仰構成</strong>
        </div>

        <div className="faith-doctrine-list">
          {doctrines.map((item) => (
            <article className="faith-doctrine-item" key={item.number}>
              <span className="faith-doctrine-number">{item.number}</span>

              <div className="faith-doctrine-name">
                <span>{item.en}</span>
                <strong>{item.zh}</strong>
              </div>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faith-angel">
        <div className="faith-angel-image">
          <img
            src="/images/world/winged/IMG_4495.jpeg"
            alt="帶有光環的天使雕像"
          />

          <span className="faith-angel-label">
            FIG. 02 / ANGELIC ICONOGRAPHY
          </span>
        </div>

        <div className="faith-angel-copy">
          <span>ARTICLE / 03 — SELF-IDENTIFICATION</span>

          <h2>
            ANGEL
            <br />
            <em>天使</em>
          </h2>

          <p>
            「天使」既是一種宗教性的稱呼，
            也是白羽有翼族對自身的身分認知。
          </p>

          <p>
            覆羽的翅膀與頭頂的光環，
            因而同時具有生理特徵與神聖象徵的雙重意義。
          </p>

          <Link href="/world/winged" className="faith-record-link">
            <span>RELATED RECORD / WINGED</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      <section className="faith-institution">
        <div className="faith-section-meta faith-section-meta-dark">
          <span>ARTICLE / 04</span>
          <span>INSTITUTION</span>
        </div>

        <div className="faith-institution-heading">
          <span>FAITH AS INSTITUTION</span>
          <h2>
            SACRED
            <br />
            ORDER
          </h2>
        </div>

        <div className="faith-institution-image">
          <img
            src="/images/world/winged/IMG_4496.jpeg"
            alt="高柱上的有翼雕像"
          />
        </div>

        <div className="faith-institution-copy">
          <strong>信仰並不只存在於教堂。</strong>

          <p>
            它被寫入教育、公共秩序與社會生活之中。
            對神聖的理解，也因此成為理想國制度的一部分。
          </p>

          <p>
            宗教象徵遍布這個國度，
            並不斷提醒生活其中的人：
            他們所處的不只是一個國家，
            也是一個以信仰建立自我認知的社會。
          </p>
        </div>

        <div className="faith-institution-mark" aria-hidden="true">
          <span>04</span>
        </div>
      </section>

      <section className="faith-related">
        <div>
          <span>RELATED RECORD</span>
          <strong>思想教育</strong>
          <small>EDUCATION / 05</small>
        </div>

        <Link href="/world/education">
          NEXT RECORD — 05 / EDUCATION →
        </Link>
      </section>

      <footer className="faith-footer">
        <Link href="/world">← WORLD INDEX</Link>
        <span>IP / WORLD / 04</span>
      </footer>
    </main>
  );
}
