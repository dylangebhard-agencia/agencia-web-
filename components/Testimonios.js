import Image from 'next/image'

function Stars({ count }) {
  return (
    <div className="testi-stars">
      {'★'.repeat(Math.min(count, 5))}
    </div>
  )
}

export default function Testimonios({ reviews = [] }) {
  const items = reviews.length > 0 ? reviews : [
    {
      id: 'p1', nombre: 'Dr. Carlos M.', cargo: 'Clínica Dental', clinica: 'Las Condes', estrellas: 5,
      texto: 'En el primer mes ya tuvimos 6 pacientes nuevos que llegaron por Instagram. El contenido es de una calidad que no esperábamos por el precio.',
    },
    {
      id: 'p2', nombre: 'Dra. Valentina R.', cargo: 'Ortodoncia', clinica: 'Providencia', estrellas: 5,
      texto: 'El mes gratis fue lo que nos convenció de probar. Pero lo que más nos gustó fue el proceso: organizado, rápido y el resultado habla solo.',
    },
    {
      id: 'p3', nombre: 'Dr. Sebastián P.', cargo: 'Estética Dental', clinica: 'Ñuñoa', estrellas: 5,
      texto: 'Antes tenía fotos de celular en Instagram. Ahora tengo un perfil que da confianza y los pacientes lo mencionan cuando llaman para pedir hora.',
    },
  ]

  return (
    <section id="testimonios" className="reveal">
      <span className="section-label">Lo que dicen nuestros clientes</span>
      <h2 className="section-title">Reseñas<br /><em>reales.</em></h2>
      <div className="testimonios-grid">
        {items.map((r) => (
          <div key={r.id} className="testi-card">
            <Stars count={r.estrellas} />
            <p className="testi-text">&ldquo;{r.texto}&rdquo;</p>
            <div className="testi-author">
              <div className="testi-avatar">
                {r.avatarUrl ? (
                  <Image src={r.avatarUrl} alt={r.nombre} width={40} height={40} style={{ objectFit: 'cover' }} />
                ) : (
                  '👨‍⚕️'
                )}
              </div>
              <div>
                <div className="testi-name">{r.nombre}</div>
                <div className="testi-role">{r.cargo}{r.clinica ? ` · ${r.clinica}` : ''}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
