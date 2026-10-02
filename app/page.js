import Link from "next/link";

const records = [
  { n: "01", en: "WORLD", zh: "世界概述", href: "/world/overview", cls: "record-a" },
  { n: "02", en: "WINGED", zh: "有翼族", href: "/world/winged", cls: "record-b" },
  { n: "03", en: "SOCIETY", zh: "階級與制度", href: "/world/society", cls: "record-c" },
  { n: "04", en: "FAITH", zh: "信仰", href: "/world/faith", cls: "record-d" },
  { n: "05", en: "EDUCATION", zh: "思想教育", href: "/world/education", cls: "record-e" },
  { n: "06", en: "TREE\nOF KNOWLEDGE", zh: "善惡樹計畫", href: "/world/tree", cls: "record-f" },
  { n: "07", en: "ANGEL ARMY", zh: "天使軍", href: "/world/army", cls: "record-g" },
  { n: "08", en: "WAR", zh: "戰爭", href: "/world/war", cls: "record-h" },
];

export default function World() {
  return (
    <main className="world-editorial">
      <section className="world-cover">
        <div className="world-meta">
          <span>IP / 01</span>
          <span>PUBLIC RECORD</span>
        </div>

        <div className="world-cover-art" aria-hidden="true">
          <span className="world-ring ring-large"></span>
          <span className="world-ring ring-small"></span>
          <span className="world-axis"></span>
          <span className="world-point"></span>
        </div>

        <div className="world-title-block">
          <span className="world-kicker">ARCHIVE / WORLD</span>

          <h1>WORLD</h1>

          <div className="world-title-bottom">
            <strong>理想國</strong>
            <span>THE IDEAL PLACE</span>
          </div>
        </div>

        <p className="world-cover-note">
          世界與其秩序的公開紀錄。
          <br />
          08 RECORDS / PUBLIC ACCESS
        </p>
      </section>

      <section className="editorial-index">
        <div className="index-axis" aria-hidden="true">
          <span></span>
        </div>

        {records.map((record) => (
          <Link
            href={record.href}
            className={`editorial-record ${record.cls}`}
            key={record.n}
          >
            <span className="editorial-number">{record.n}</span>

            <span className="editorial-title">
              {record.en.split("\n").map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </span>

            <span className="editorial-zh">{record.zh}</span>
          </Link>
        ))}

        <div className="index-caption caption-one">
          IDEAL PLACE
          <br />
          ARCHIVE SYSTEM
        </div>

        <div className="index-caption caption-two">
          01—08
          <br />
          WORLD RECORDS
        </div>
      </section>
    </main>
  );
}
