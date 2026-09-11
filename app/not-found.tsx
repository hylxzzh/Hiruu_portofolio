import Link from "next/link";

export default function NotFound() {
  return (
    <main className="portfolio-shell">
      <div className="grain" aria-hidden="true" />
      <div className="page-wrap" style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <div style={{ textAlign: "center", maxWidth: 520 }}>
          <p className="eyebrow">
            <span className="status-dot" /> Signal lost
          </p>
          <h1>
            404.
            <br />
            <em>Out of range.</em>
          </h1>
          <p className="hero-intro" style={{ margin: "28px auto 40px" }}>
            This channel is quiet — the page you are looking for does not exist.
          </p>
          <Link className="button button--solid" href="/">
            Return home <span>↖</span>
          </Link>
        </div>
      </div>
    </main>
  );
}