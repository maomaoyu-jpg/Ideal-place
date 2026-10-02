import Link from "next/link";

const relatedRecords = [
  { number: "02", en: "WINGED", zh: "有翼族", href: "/world/winged" },
  { number: "03", en: "SOCIETY", zh: "階級與制度", href: "/world/society" },
  { number: "04", en: "FAITH", zh: "信仰", href: "/world/faith" },
  { number: "05", en: "EDUCATION", zh: "思想教育", href: "/world/education" },
  { number: "06", en: "TREE OF KNOWLEDGE", zh: "善惡樹計畫", href: "/world/tree" },
  { number: "07", en: "ANGEL ARMY", zh: "天使軍", href: "/world/army" },
  { number: "08", en: "WAR", zh: "戰爭", href: "/world/war" },
];

export default function WorldOverview() {
  return (
    <main className="overview-page">
      <section className="overview-hero">
        <div className="overview-meta">
          <span>IP / WORLD / 01</span>
          <span>PUBLIC RECORD</span>
        </div>

        <div className="overview-heading">
          <span>WORLD / OVERVIEW</span>
          <h1>
            IDEAL
            <br />
            PLACE
          </h1>

          <div className="overview-heading-bottom">
            <strong>理想國</strong>
            <span>世界概述</span>
          </div>
        </div>

        <p className="overview-intro">
          在逐漸荒蕪的大陸之上，生活著各式各樣的族群。
          隨著舊政權的瓦解，群龍無首的大陸面臨末日一般的浩劫，
          直到有翼族重新建立起新的國度——
          <em>恰如烏托邦一般美好的理想之都。</em>
        </p>

        <div className="overview-hero-mark" aria-hidden="true">
          <span></span>
          <span></span>
        </div>
      </section>

      <section className="overview-noah">
        <div className="overview-section-number">01 / NOAH</div>

        <div className="overview-noah-copy">
          <h2>諾亞大陸</h2>

          <p>
            原先氣候宜人、生物多樣的大陸，在一次隕石群帶來的災難後，
            失去了原有的豐饒。
          </p>

          <p>
            酸雨、洪水、旱災，各種自然災害頻繁發生，
            戰火與飢荒開始在各地醞釀，生活不復以往。
          </p>

          <p>
            在所有物種一籌莫展之際，有翼族展開了行動。
            祂們以驚人的速度平息戰火，在大陸少有的綠洲之上建立起國度，
            並以井井有條的制度規範及輔助各族復興。
          </p>

          <p className="overview-noah-last">
            在逐漸好轉的大陸上，新的篇章正重新譜寫……
          </p>
        </div>

        <figure className="overview-wing">
          <div className="overview-wing-frame">
            <img
              src="/images/world/overview-wing.jpg"
              alt="古典石雕羽翼局部"
            />
          </div>

          <figcaption>
            <span>FIG. 01</span>
            <span>WING / ICONOGRAPHY</span>
            <span>EDITORIAL REFERENCE</span>
          </figcaption>
        </figure>
      </section>

      <section className="overview-winged">
        <div className="overview-winged-index">02 / WINGED</div>

        <div className="overview-winged-title">
          <span>THE NEW ORDER</span>
          <h2>有翼族</h2>
        </div>

        <div className="overview-winged-copy">
          <p>
            擁有著覆蓋著羽毛的翅膀，以及頭頂光環的類人種族。
            性格高傲，自視不凡。
          </p>

          <p>
            有翼族分為雙翼、四翼、六翼的天生基因，
            以及後天非自然分化的白羽系統和黑羽系統。
          </p>

          <Link href="/world/winged" className="overview-read-record">
            <span>READ RECORD</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      <section className="overview-related">
        <div className="overview-related-head">
          <span>RELATED RECORDS</span>
          <span>02—08</span>
        </div>

        {relatedRecords.map((record) => (
          <Link
            href={record.href}
            className="overview-related-item"
            key={record.number}
          >
            <span>{record.number}</span>
            <strong>{record.en}</strong>
            <span>{record.zh}</span>
          </Link>
        ))}

        <Link href="/world" className="overview-back">
          ← WORLD INDEX
        </Link>
      </section>
    </main>
  );
}
