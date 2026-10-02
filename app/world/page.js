import Link from "next/link";

const records = [
  {
    number: "01",
    title: "WORLD",
    zh: "世界概述",
    href: "/world/overview",
  },
  {
    number: "02",
    title: "WINGED",
    zh: "有翼族",
    href: "/world/winged",
  },
  {
    number: "03",
    title: "SOCIETY",
    zh: "階級與制度",
    href: "/world/society",
  },
  {
    number: "04",
    title: "FAITH",
    zh: "信仰",
    href: "/world/faith",
  },
  {
    number: "05",
    title: "EDUCATION",
    zh: "思想教育",
    href: "/world/education",
  },
  {
    number: "06",
    title: "TREE OF KNOWLEDGE",
    zh: "善惡樹計畫",
    href: "/world/tree",
  },
  {
    number: "07",
    title: "ANGEL ARMY",
    zh: "天使軍",
    href: "/world/army",
  },
  {
    number: "08",
    title: "WAR",
    zh: "戰爭",
    href: "/world/war",
  },
];

export default function World() {
  return (
    <main className="world-page">
      <section className="world-hero">
        <div className="archive-number">
          IP / 01 — PUBLIC RECORD
        </div>

        <div className="world-heading">
          <div>
            <div className="section-label">ARCHIVE / WORLD</div>

            <h1>
              WORLD
            </h1>
          </div>

          <p className="world-intro">
            理想國
            <br />
            世界與其秩序的公開紀錄。
          </p>
        </div>

        <div className="world-orbit" aria-hidden="true">
          <span className="orbit orbit-one"></span>
          <span className="orbit orbit-two"></span>
          <span className="orbit-dot"></span>
          <span className="orbit-line"></span>
        </div>
      </section>

      <section className="world-records">
        <div className="records-header">
          <span>INDEX</span>
          <span>PUBLIC ACCESS</span>
          <span>08 RECORDS</span>
        </div>

        {records.map((record) => (
          <Link
            className="record-row"
            href={record.href}
            key={record.number}
          >
            <span className="record-number">
              {record.number}
            </span>

            <span className="record-title">
              {record.title}
            </span>

            <span className="record-zh">
              {record.zh}
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
