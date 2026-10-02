import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "WORLD",
    zh: "理想國",
    verdict: "如夢似幻，完美的理想鄉……？",
    href: "/world",
  },
  {
    number: "02",
    title: "NOAH",
    zh: "諾亞大陸",
    verdict: "神話的發源地，一切自此萌芽。",
    href: "/noah",
  },
  {
    number: "03",
    title: "GUIDES",
    zh: "「嚮導」",
    verdict: "真誠或虛假，懷抱著信仰的神的子民。",
    href: "/guides",
  },
  {
    number: "04",
    title: "STORIES",
    zh: "故事",
    verdict: "從零開始的篇章，寫他們的分分合合。",
    href: "/stories",
  },
];

export default function Home() {
  return (
    <main className="home">
      <div className="archive-mark">IP / 00 — PUBLIC RECORD</div>

      <h1 className="hero-title">
        IDEAL
        <br />
        PLACE
      </h1>

      <p className="hero-text">如夢似幻，完美的理想鄉……</p>

      <nav className="home-index">
        {sections.map((section) => (
          <Link
            className="home-index-item"
            href={section.href}
            key={section.title}
          >
            <span className="home-index-number">{section.number}</span>

            <span className="home-index-title">{section.title}</span>

            <span className="home-index-zh">{section.zh}</span>

            <span className="home-index-verdict">
              {section.verdict}
            </span>
          </Link>
        ))}
      </nav>
    </main>
  );
}
