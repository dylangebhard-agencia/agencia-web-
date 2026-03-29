import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-video-wrap">
        <div className="hero-video-placeholder">
          <div style={{ fontSize: '64px', opacity: 0.06 }}>🎬</div>
        </div>
      </div>
      <div className="hero-grain" />
      <div className="hero-gradient" />
      <div className="hero-content">
        <div className="hero-badge">📍 Santiago · Región Metropolitana</div>
        <h1 className="hero-title">
          Tu clínica<br />
          <span className="accent">en el</span><br />
          <span className="stroke">feed</span>
        </h1>
        <p className="hero-sub">
          Producimos el contenido audiovisual que necesitas para atraer más pacientes —
          reels, fotos y campañas diseñadas para clínicas dentales.
        </p>
        <div className="hero-actions">
          <Link href="#agendar" className="btn-primary">Agenda tu reunión gratis</Link>
          <Link href="#packs" className="btn-ghost">Ver los packs →</Link>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-n">8+</div>
            <div className="stat-l">Reels / mes</div>
          </div>
          <div className="stat-div" />
          <div className="stat">
            <div className="stat-n">3x</div>
            <div className="stat-l">ROI promedio</div>
          </div>
          <div className="stat-div" />
          <div className="stat">
            <div className="stat-n">M1</div>
            <div className="stat-l">Gratis</div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
      </div>
    </section>
  )
}
