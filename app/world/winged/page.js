import Link from "next/link";

const wingTypes = [
  {
    number: "02",
    title: "TWO",
    zh: "雙翼",
    note: "NATURAL TYPE",
  },
  {
    number: "04",
    title: "FOUR",
    zh: "四翼",
    note: "NATURAL TYPE",
  },
  {
    number: "06",
    title: "SIX",
    zh: "六翼",
    note: "NATURAL TYPE",
  },
];

export default function Winged() {
  return (
    <main className="winged-page">
      <section className="winged-hero">
        <div className="winged-meta">
          <span>IP / WORLD / 02</span>
          <span>PUBLIC RECORD</span>
        </div>

        <div className="winged-hero-type">
          <span>SPECIES / RECORD</span>

          <h1>
            WING
            <br />
            ED
          </h1>

          <div className="winged-hero-zh">
            <strong>有翼族</strong>
            <span>WINGED SPECIES</span>
          </div>
        </div>

        <div className="winged-figure">
          <div className="winged-figure-word" aria-hidden="true">
            WINGED
          </div>

          <div className="winged-orbit orbit-a" aria-hidden="true"></div>
          <div className="winged-orbit orbit-b" aria-hidden="true"></div>

          <img
            className="winged-figure-wings"
            src="/images/world/winged/20822a2673eb9415cb607943a4a365f3-1.png"
            alt=""
          />

          <img
            className="winged-figure-body"
            src="/images/world/winged/20822a2673eb9415cb607943a4a365f3-3.png"
            alt="有翼族角色 000 的視覺紀錄"
          />

          <img
            className="winged-figure-halo"
            src="/images/world/winged/20822a2673eb9415cb607943a4a365f3-2.png"
            alt=""
          />

          <span className="winged-callout callout-halo">
            01 / HALO
          </span>

          <span className="winged-callout callout-wing">
            02 / FEATHERED WING
          </span>

          <span className="winged-callout callout-body">
            03 / HUMANOID BODY
          </span>
        </div>

        <div className="winged-definition">
          <span>DEFINITION / 01</span>

          <p>
            擁有著覆蓋著羽毛的翅膀，
            以及頭頂光環的類人種族。
          </p>

          <p>性格高傲，自視不凡。</p>
        </div>
      </section>

      <section className="winged-structure">
        <div className="winged-section-meta">
          <span>01 / WING STRUCTURE</span>
          <span>NATURAL CLASSIFICATION</span>
        </div>

        <div className="winged-structure-heading">
          <span>NUMBER OF WINGS</span>

          <h2>2 / 4 / 6</h2>

          <p>
            有翼族具有雙翼、四翼與六翼的天生基因差異。
            翼數同時存在於其嚴格的社會結構之中。
          </p>
        </div>

        <div className="winged-types">
          {wingTypes.map((type) => (
            <div className="winged-type" key={type.number}>
              <div className="winged-type-diagram" aria-hidden="true">
                <span className="wing-line"></span>
                <span className="wing-core"></span>
                <span className="wing-line"></span>
              </div>

              <span className="winged-type-number">{type.number}</span>

              <div>
                <strong>{type.title}</strong>
                <span>{type.zh}</span>
              </div>

              <small>{type.note}</small>
            </div>
          ))}
        </div>

        <div className="winged-fifth">
          <span>EXCEPTION / FIFTH WING</span>

          <p>
            六翼有翼族天生具有提拔四翼有翼族的能力，
            被提拔者將後天生長第五翼。
          </p>

          <Link href="/world/society">
            SOCIAL STRUCTURE →
          </Link>
        </div>
      </section>

      <section className="winged-systems">
        <div className="winged-section-meta">
          <span>02 / SYSTEM</span>
          <span>WHITE / BLACK</span>
        </div>

        <div className="winged-systems-heading">
          <span>NON-NATURAL DIFFERENTIATION</span>

          <h2>
            WHITE
            <br />
            / BLACK
          </h2>

          <p>
            除天生翼數之外，有翼族亦存在後天非自然分化的
            白羽系統與黑羽系統。
          </p>
        </div>

        <div className="winged-dual">
          <figure className="winged-dual-figure winged-dual-white">
            <div className="winged-dual-image">
              <img
                src="/images/world/winged/IMG_0670.png"
                alt="000，白羽有翼族"
              />
              <span className="winged-dual-letter">W</span>
            </div>

            <figcaption>
              <div>
                <span>WHITE WING / 000</span>
                <strong>白羽</strong>
              </div>

              <small>ARTWORK / 鮫</small>
            </figcaption>
          </figure>

          <div className="winged-dual-axis" aria-hidden="true">
            <span></span>
            <i></i>
            <span></span>
          </div>

          <figure className="winged-dual-figure winged-dual-black">
            <div className="winged-dual-image">
              <img
                src="/images/world/winged/IMG_0669.png"
                alt="潘，黑羽有翼族"
              />
              <span className="winged-dual-letter">B</span>
            </div>

            <figcaption>
              <div>
                <span>BLACK WING / PAN</span>
                <strong>黑羽</strong>
              </div>

              <div className="winged-pan-meta">
                <small>OUTSIDE JURISDICTION</small>
                <small>ARTWORK / 鮫</small>
              </div>
            </figcaption>
          </figure>
        </div>

        <p className="winged-systems-footnote">
          此處僅記錄其分類。關於雙方的衝突、稱謂與百年戰爭，
          另見戰爭紀錄。
        </p>

        <Link href="/world/war" className="winged-war-link">
          <span>08 / WAR</span>
          <span>READ RECORD →</span>
        </Link>
      </section>

      <section className="winged-halo">
        <div className="winged-halo-mark" aria-hidden="true">
          <span></span>
        </div>

        <div className="winged-halo-title">
          <span>03 / HALO</span>
          <h2>光環</h2>
        </div>

        <div className="winged-halo-copy">
          <p>
            光環是有翼族的重要特徵，
            同時與其信仰存在密切關聯。
          </p>

          <p>
            關於光環的穩定、裂紋與信仰之間的關係，
            收錄於信仰紀錄。
          </p>

          <Link href="/world/faith" className="winged-faith-link">
            <span>04 / FAITH</span>
            <span>READ RECORD →</span>
          </Link>
        </div>
      </section>

      <section className="winged-footer">
        <Link href="/world/overview">
          ← 01 / OVERVIEW
        </Link>

        <Link href="/world/society">
          03 / SOCIETY →
        </Link>
      </section>
    </main>
  );
}
