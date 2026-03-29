import Link from 'next/link'

export default function Agendar() {
  return (
    <section id="agendar">
      <div className="agendar-wrap">
        <div className="agendar-badge">📅 Reunión 100% gratis · 30 minutos</div>
        <h2>AGENDA<br />TU REUNIÓN</h2>
        <p>
          Te mostramos ejemplos reales, calculamos tu ROI y te contamos cómo
          funciona el mes gratis. Sin presión, sin compromiso.
        </p>
        <Link href="#agendar" className="btn-primary" style={{ marginBottom: '32px', display: 'inline-block' }}>
          Reservar horario →
        </Link>
        {/* Reemplazar con embed de Calendly cuando tengas la URL */}
        <div className="calendly-placeholder">
          <strong>📅 Calendario de reuniones</strong>
          Reemplaza este bloque con tu embed de Calendly:<br /><br />
          <code style={{ fontSize: '11px', color: 'var(--white3)' }}>
            {`<!-- Calendly inline widget -->`}<br />
            {`<div class="calendly-inline-widget" data-url="https://calendly.com/TU-USUARIO" style="min-width:320px;height:700px;"></div>`}<br />
            {`<script src="https://assets.calendly.com/assets/external/widget.js"></script>`}
          </code>
        </div>
      </div>
    </section>
  )
}
