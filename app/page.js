import Link from "next/link";

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

      <Link className="enter-link" href="/eden">
        ENTER THE ARCHIVE
      </Link>
    </main>
  );
}
