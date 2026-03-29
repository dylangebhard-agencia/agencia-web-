'use client'
import { useState } from 'react'

const FAQS = [
  {
    q: '¿El primer mes realmente es gratis?',
    a: 'Sí, 100% gratis. Producimos y entregamos todos los servicios del pack sin cobrar. Lo único que pedimos es un contrato firmado de 3 meses antes de comenzar. Si decides salir antes de los 3 meses, pagas el mes 1 a precio normal — eso nos protege a ambos.',
  },
  {
    q: '¿Cuánto tiempo toma la primera grabación?',
    a: 'Una sesión de 3 a 4 horas en tu clínica. En ese tiempo grabamos material suficiente para todo el mes: reels, fotos, video corporativo (si aplica). Coordinamos la fecha con al menos 5 días de anticipación para que no afecte tu agenda.',
  },
  {
    q: '¿Necesito tener experiencia en redes sociales?',
    a: 'No. Nosotros nos encargamos de todo: grabación, edición, planificación y publicación. Solo necesitas darnos acceso a tu cuenta de Instagram. Si tienes preferencias de estilo o mensajes importantes, los incorporamos — si no, nosotros proponemos.',
  },
  {
    q: '¿Cuánto debo invertir en Google Ads (Pack Marketing)?',
    a: 'El presupuesto de pauta lo pagas tú directamente a Google — los $400k del pack cubren la gestión completa (configuración, optimización, reportes). Recomendamos un mínimo de $200k-$400k mensuales de pauta para ver resultados relevantes.',
  },
  {
    q: '¿Qué pasa con el contenido que producen?',
    a: 'Todo el contenido es tuyo una vez entregado y pagado el mes correspondiente. Puedes usarlo en todas tus plataformas libremente. Nosotros también tenemos autorización (firmada en el contrato) para usarlo en nuestro portafolio y redes propias.',
  },
  {
    q: '¿Trabajan con clínicas de cualquier tamaño?',
    a: 'Sí, desde clínicas unipersonales hasta centros dentales con varios box. Lo importante es tener las ganas de crecer digitalmente. Adaptamos el contenido a tu espacio, equipo y servicios específicos.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="reveal">
      <span className="section-label">Preguntas frecuentes</span>
      <h2 className="section-title">FAQ</h2>
      <div className="faq-list" style={{ maxWidth: '720px', marginTop: '40px' }}>
        {FAQS.map((item, i) => (
          <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
            <div className="faq-q" onClick={() => toggle(i)}>
              {item.q}
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-a">{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
