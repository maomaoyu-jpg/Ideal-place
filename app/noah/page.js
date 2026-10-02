import Link from "next/link";

const locations = [
  {
    number: "01",
    en: "IZHAN",
    zh: "伊茲罕",
    href: "/noah/izhan",
    className: "noah-location-a",
    type: "IDEAL PLACE",
  },
  {
    number: "02",
    en: "ST. ISO",
    zh: "聖伊索",
    href: "/noah/st-iso",
    className: "noah-location-b",
    type: "IDEAL PLACE",
  },
  {
    number: "03",
    en: "EDEN",
    zh: "伊甸",
    href: "/eden",
    className: "noah-location-c",
    type: "IDEAL PLACE",
  },
  {
    number: "04",
    en: "TRUTH CHURCH",
    zh: "真理教堂",
    href: "/noah/truth-church",
    className: "noah-location-d",
    type: "IDEAL PLACE",
  },
  {
    number: "05",
    en: "WASTELAND",
    zh: "荒沼",
    href: "/noah/wasteland",
    className: "noah-location-e",
    type: "OUTSIDE JURISDICTION",
  },
];

export default function Noah() {
  return (
    <main className="noah-page">
      <section className="noah-cover">
        <div className="noah-meta">
          <span>IP / MAP 01</span>
          <span>GEOGRAPHICAL RECORD</span>
        </div>

        <div className="noah-heading">
          <span>CONTINENT / 01</span>
          <h1>NOAH</h1>

          <div className="noah-heading-bottom">
            <strong>諾亞大陸</strong>
            <span>GEOGRAPHICAL ARCHIVE</span>
          </div>
        </div>

        <div className="noah-coordinate" aria-hidden="true">
          <span className="coordinate-x"></span>
          <span className="coordinate-y"></span>
          <span className="coordinate-circle"></span>
          <span className="coordinate-point"></span>
        </div>
      </section>

      <section className="noah-map">
        <div className="noah-map-meta">
          <span>LOCATION INDEX</span>
          <span>05 RECORDS</span>
        </div>

        <div className="noah-route" aria-hidden="true"></div>

        {locations.map((location) => (
          <Link
            href={location.href}
            className={`noah-location ${location.className}`}
            key={location.number}
          >
            <span className="noah-location-number">
              {location.number}
            </span>

            <span className="noah-location-point" aria-hidden="true"></span>

            <span className="noah-location-name">
              {location.en}
            </span>

            <span className="noah-location-zh">
              {location.zh}
            </span>

            <span className="noah-location-type">
              {location.type}
            </span>
          </Link>
        ))}

        <div className="noah-map-caption">
          NOAH / GEOGRAPHICAL INDEX
        </div>
      </section>
    </main>
  );
}
