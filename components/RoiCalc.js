'use client'
import { useState } from 'react'

function fmtK(n) {
  return '$' + Math.round(n).toLocaleString('es-CL') + 'k'
}

export default function RoiCalc() {
  const [ticket, setTicket] = useState(180)
  const [pacs, setPacs] = useState(5)
  const [pack, setPack] = useState(300)

  const income = ticket * pacs
  const roi = (income / pack).toFixed(1)
  const net = income - pack

  function pct(value, min, max) {
    return (((value - min) / (max - min)) * 100).toFixed(1) + '%'
  }

  return (
    <section id="roi" className="reveal">
      <span className="section-label">Calculadora ROI</span>
      <h2 className="section-title">¿Cuánto vale<br /><em>un paciente nuevo?</em></h2>
      <p className="section-body" style={{ margin: '16px 0 40px' }}>
        Mueve los sliders y descubre en segundos si el pack se paga solo con tu clínica.
      </p>
      <div className="roi-card">
        <div className="roi-grid">
          <div className="roi-inputs">
            <div className="roi-field">
              <label>Precio promedio por tratamiento</label>
              <span className="roi-val">{fmtK(ticket)}</span>
              <input
                type="range" min="30" max="500" step="10" value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                style={{ '--pct': pct(ticket, 30, 500) }}
              />
            </div>
            <div className="roi-field">
              <label>Pacientes nuevos que esperas / mes</label>
              <span className="roi-val">{pacs}</span>
              <input
                type="range" min="1" max="30" step="1" value={pacs}
                onChange={(e) => setPacs(Number(e.target.value))}
                style={{ '--pct': pct(pacs, 1, 30) }}
              />
            </div>
            <div className="roi-field">
              <label>Pack contratado</label>
              <span className="roi-val">{fmtK(pack)}</span>
              <input
                type="range" min="300" max="400" step="100" value={pack}
                onChange={(e) => setPack(Number(e.target.value))}
                style={{ '--pct': pct(pack, 300, 400) }}
              />
            </div>
          </div>
          <div className="roi-result">
            <div style={{ fontSize: '12px', color: 'var(--white3)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '8px' }}>
              Retorno estimado
            </div>
            <div className="roi-result-n">{roi}x</div>
            <div className="roi-result-x">la inversión</div>
            <div className="roi-breakdown" style={{ marginTop: '28px' }}>
              <div className="roi-line">
                <span>Ingreso por pacientes / mes</span>
                <span>{fmtK(income)}</span>
              </div>
              <div className="roi-line">
                <span>Inversión en el pack</span>
                <span>−{fmtK(pack)}</span>
              </div>
              <div className="roi-line">
                <span>🟢 Ganancia neta estimada</span>
                <span>{fmtK(net)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
