export default function Home() {
  return (
    <main className="portfolio-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Portfolio home">Portfolio<span aria-hidden="true">.</span></a>
        <p>Creative developer</p>
      </nav>
      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="eyebrow" aria-hidden="true"><span>01</span><span className="eyebrow-line" /><span>Welcome</span></div>
        <h1 id="hero-title"><span>Hello</span><span className="world">World<span className="period">.</span></span></h1>
        <div className="hero-footer">
          <p>Ideas, shaped for the web.</p>
          <a href="mailto:hello@example.com">Say hello ↗</a>
        </div>
      </section>
      <footer><span>© 2026</span><span>Available worldwide</span></footer>
    </main>
  );
}
