import Link from 'next/link'

export default function Packs() {
  return (
    <section id="packs" className="reveal">
      <span className="section-label">Nuestros planes</span>
      <h2 className="section-title">Elige tu<br /><em>pack.</em></h2>
      <div className="packs-grid">

        {/* Pack Presencia */}
        <div className="pack-card">
          <div className="pack-tag alt">Pack Presencia</div>
          <div className="pack-name">Presencia Digital</div>
          <div className="pack-sub">Para clínicas que necesitan una presencia profesional en redes</div>
          <div className="pack-promo">Mes 1 gratis · Meses 2 y 3 con 10% dto.</div>
          <div className="pack-price">$300k</div>
          <div className="pack-price-sub">CLP / mes · Contrato mínimo 3 meses</div>
          <ul className="pack-features">
            <li>8 Reels / TikToks profesionales (formato 9:16)</li>
            <li>6 posts estáticos con fotografía y diseño</li>
            <li>1 sesión de fotografía mensual (30-50 fotos)</li>
            <li>Publicación en horarios óptimos</li>
            <li>Planificación editorial mensual</li>
            <li>Reporte básico de resultados</li>
          </ul>
          <Link href="#agendar" className="pack-btn ghost">Quiero este pack →</Link>
        </div>

        {/* Pack Marketing */}
        <div className="pack-card featured">
          <div className="pack-tag">⭐ Pack Marketing</div>
          <div className="pack-name">Marketing Digital</div>
          <div className="pack-sub">Para clínicas que quieren captar pacientes activamente</div>
          <div className="pack-promo">Mes 1 gratis · Meses 2 y 3 con 10% dto.</div>
          <div className="pack-price">$400k</div>
          <div className="pack-price-sub">CLP / mes · Contrato mínimo 3 meses</div>
          <ul className="pack-features">
            <li>Todo lo del Pack Presencia</li>
            <li>1 video corporativo mensual (60-90 seg)</li>
            <li>2 sesiones de fotografía mensuales</li>
            <li>Gestión de comunidad (respuesta a DMs)</li>
            <li>Google Ads completo (Search + Display + Maps)</li>
            <li>Campaña de leads con landing page</li>
            <li>Dashboard de métricas en tiempo real</li>
            <li>Reporte ampliado con comparativas</li>
          </ul>
          <Link href="#agendar" className="pack-btn">Quiero este pack →</Link>
        </div>

      </div>
    </section>
  )
}
