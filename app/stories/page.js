import Link from "next/link";

const stories = [
  {
    number: "01",
    title: "伊甸非此",
    guide: "HITAR",
    href: "/stories/eden-is-not-here",
    status: "RECORD",
  },
  {
    number: "02",
    title: "巴別塔誓約",
    guide: "FREY",
    href: "/stories/babel-oath",
    status: "UNPUBLISHED",
  },
  {
    number: "03",
    title: "山羊與貓",
    guide: "REI",
    href: "/stories/goat-and-cat",
    status: "UNPUBLISHED",
  },
  {
    number: "04",
    title: "念舊時",
    guide: "E27",
    href: "/stories/nostalgia",
    status: "UNPUBLISHED",
  },
  {
    number: "05",
    title: "教典夾信紙",
    guide: "000",
    href: "/stories/letter-in-scripture",
    status: "UNPUBLISHED",
  },
  {
    number: "06",
    title: "悲喜劇",
    guide: "PAN",
    href: "/stories/tragedy-comedy",
    status: "UNPUBLISHED",
  },
];

export default function Stories() {
  return (
    <main className="stories-page">
      <section className="stories-cover">
        <div className="stories-meta">
          <span>IP / STORY INDEX</span>
          <span>06 RECORDS</span>
        </div>

        <div className="stories-heading">
          <span>NARRATIVE / ARCHIVE</span>

          <h1>STORIES</h1>

          <div className="stories-heading-bottom">
            <strong>故事</strong>
            <span>COLLECTED RECORDS</span>
          </div>
        </div>

        <blockquote className="stories-quote">
          <p>「人們聚了又散，什麼也不曾留下，唯有故事於此。」</p>
        </blockquote>
      </section>

      <section className="stories-index">
        <div className="stories-index-meta">
          <span>COLLECTION / 01—06</span>
          <span>SELECT A STORY</span>
        </div>

        {stories.map((story) => (
          <Link
            href={story.href}
            className={`story-entry story-${story.number}`}
            key={story.number}
          >
            <span className="story-number">
              {story.number}
            </span>

            <span className="story-title">
              {story.title}
            </span>

            <span className="story-guide">
              {story.guide}
            </span>

            <span className="story-status">
              {story.status}
            </span>
          </Link>
        ))}

        <div className="stories-endmark" aria-hidden="true">
          <span></span>
        </div>
      </section>
    </main>
  );
}
