'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FILTERS = ['Todos', 'Reels', 'Fotografía', 'Video corporativo', 'Google Ads']

export default function Portfolio({ items = [] }) {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filtered = activeFilter === 'Todos'
    ? items
    : items.filter((item) =>
        item.tipo?.toLowerCase().includes(activeFilter.toLowerCase())
      )

  return (
    <section id="portfolio" className="reveal">
      <span className="section-label">Nuestro trabajo</span>
      <h2 className="section-title">Portafolio</h2>

      <div className="portfolio-filter">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn${activeFilter === f ? ' on' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-thumb">
                {item.thumbnailUrl ? (
                  <Image src={item.thumbnailUrl} alt={item.titulo} fill style={{ objectFit: 'cover' }} />
                ) : (
                  '🎬'
                )}
              </div>
              <div className="portfolio-overlay">
                <div className="portfolio-play">
                  {item.videoUrl ? '▶' : '🖼'}
                </div>
                <span>{item.titulo}</span>
                <small>{item.tipo}{item.cliente ? ` · ${item.cliente}` : ''}</small>
              </div>
            </div>
          ))
        ) : (
          /* Placeholders cuando no hay items en Notion aún */
          <>
            <div className="portfolio-item">
              <div className="portfolio-thumb">🦷</div>
              <div className="portfolio-overlay">
                <div className="portfolio-play">▶</div>
                <span>Clínica Dental Centro</span>
                <small>Reel · Pack Presencia</small>
              </div>
            </div>
            <div className="portfolio-item" style={{ aspectRatio: '4/5' }}>
              <div className="portfolio-thumb">📸</div>
              <div className="portfolio-overlay">
                <div className="portfolio-play">🖼</div>
                <span>Estética Molar</span>
                <small>Fotografía · Pack Marketing</small>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-thumb">🎬</div>
              <div className="portfolio-overlay">
                <div className="portfolio-play">▶</div>
                <span>Ortodoncia Sonrisa</span>
                <small>Video corporativo</small>
              </div>
            </div>
            <div className="portfolio-item" style={{ aspectRatio: '4/5' }}>
              <div className="portfolio-thumb">📱</div>
              <div className="portfolio-overlay">
                <div className="portfolio-play">▶</div>
                <span>Clínica Las Condes</span>
                <small>Reel · Pack Presencia</small>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-thumb">✨</div>
              <div className="portfolio-overlay">
                <div className="portfolio-play">🖼</div>
                <span>Dentista Providencia</span>
                <small>Fotografía</small>
              </div>
            </div>
            <div className="portfolio-item" style={{ aspectRatio: '4/5' }}>
              <div className="portfolio-thumb">🎥</div>
              <div className="portfolio-overlay">
                <div className="portfolio-play">▶</div>
                <span>Clínica Ñuñoa</span>
                <small>Video corporativo</small>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="portfolio-cta">
        <p>¿Quieres ver más ejemplos de nuestro trabajo?</p>
        <Link href="#agendar" className="btn-primary" style={{ display: 'inline-block' }}>
          Agenda y te mostramos todo →
        </Link>
      </div>
    </section>
  )
}
