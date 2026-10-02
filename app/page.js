import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "WORLD",
    zh: "理想國",
    href: "/world",
  },
  {
    number: "02",
    title: "NOAH",
    zh: "諾亞大陸",
    href: "/noah",
  },
  {
    number: "03",
    title: "GUIDES",
    zh: "嚮導",
    href: "/guides",
  },
  {
    number: "04",
    title: "STORIES",
    zh: "故事",
    href: "/stories",
  },
];

export default function Home() {
  return (
    <main className="home">
      <div className="archive-mark">
        IP / 00 — PUBLIC RECORD
      </div>

      <h1 className="hero-title">
        IDEAL
        <br />
        PLACE
      </h1>

      <p className="hero-text">
        如夢似幻，完美的理想鄉……
      </p>

      <nav className="home-index">
        {sections.map((section) => (
          <Link
            className="home-index-item"
            href={section.href}
            key={section.title}
          >
            <span className="home-index-number">
              {section.number}
            </span>

            <span className="home-index-title">
              {section.title}
            </span>

            <span className="home-index-zh">
              {section.zh}
            </span>

            <span className="home-index-arrow" aria-hidden="true"></span>
          </Link>
        ))}
      </nav>
    </main>
  );
}
