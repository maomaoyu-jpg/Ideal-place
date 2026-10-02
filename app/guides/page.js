import Link from "next/link";

const guides = [
  {
    primary: "Hitar",
    secondary: "希塔爾",
    tertiary: "X",
    location: "EDEN",
    href: "/guides/hiter",
    className: "guide-hitar",
  },
  {
    primary: "Frey",
    secondary: "芙蕾",
    tertiary: "F06",
    location: "EDEN",
    href: "/guides/frey",
    className: "guide-frey",
  },
  {
    primary: "Rei",
    secondary: "雷",
    tertiary: "L13",
    location: "EDEN",
    href: "/guides/rei",
    className: "guide-rei",
  },
  {
    primary: "E27",
    secondary: "Yixi",
    tertiary: "依汐",
    location: "EDEN",
    href: "/guides/e27",
    className: "guide-e27",
  },
  {
    primary: "000",
    secondary: "000",
    tertiary: null,
    location: "TRUTH CHURCH",
    href: "/guides/000",
    className: "guide-000",
  },
  {
    primary: "Pan",
    secondary: "潘",
    tertiary: "P05",
    struck: true,
    location: "WASTELAND",
    href: "/guides/pan",
    className: "guide-pan",
  },
];

export default function Guides() {
  return (
    <main className="guides-page">
      <section className="guides-cover">
        <div className="guides-meta">
          <span>IP / GUIDE INDEX</span>
          <span>06 RECORDS</span>
        </div>

        <div className="guides-heading">
          <span>PERSONNEL / INDEX</span>

          <h1>GUIDES</h1>

          <div className="guides-heading-bottom">
            <strong>「嚮導」</strong>
            <span>PERSONAL RECORDS</span>
          </div>
        </div>

        <div className="guides-cover-mark" aria-hidden="true">
          <span className="guide-mark-line guide-mark-line-a"></span>
          <span className="guide-mark-line guide-mark-line-b"></span>
          <span className="guide-mark-circle"></span>
          <span className="guide-mark-point"></span>
        </div>
      </section>

      <section className="guides-index">
        <div className="guides-index-meta">
          <span>NAME / IDENTITY / LOCATION</span>
          <span>SELECT A RECORD</span>
        </div>

        {guides.map((guide, index) => (
          <Link
            href={guide.href}
            className={`guide-entry ${guide.className}`}
            key={guide.primary}
          >
            <span className="guide-entry-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="guide-entry-primary">
              {guide.primary}
            </span>

            <span className="guide-entry-secondary">
              {guide.secondary}
            </span>

            {guide.tertiary && (
              <span
                className={`guide-entry-tertiary ${
                  guide.struck ? "guide-id-struck" : ""
                }`}
              >
                {guide.tertiary}
              </span>
            )}

            <span className="guide-entry-location">
              {guide.location}
            </span>
          </Link>
        ))}

       <div className="guides-footnote">
  <strong>「本同為迷茫之人」</strong>
  <span>THOSE WHO ARE LOST THEMSELVES.</span>
</div>
