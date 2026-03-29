import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <Link href="#" className="footer-logo">[AGENCIA]<span>.</span></Link>
      <div className="footer-links">
        <Link href="#como">Cómo funciona</Link>
        <Link href="#packs">Packs</Link>
        <Link href="#portfolio">Portafolio</Link>
        <Link href="#agendar">Agendar</Link>
      </div>
      <span>Santiago, RM · 2026</span>
    </footer>
  )
}
