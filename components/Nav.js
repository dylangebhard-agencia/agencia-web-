'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  useEffect(() => {
    const nav = document.getElementById('navbar')
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="navbar">
      <Link href="#" className="nav-logo">[AGENCIA]<span>.</span></Link>
      <div className="nav-links">
        <Link href="#como">Cómo funciona</Link>
        <Link href="#packs">Packs</Link>
        <Link href="#portfolio">Portafolio</Link>
        <Link href="#testimonios">Reseñas</Link>
        <Link href="#agendar" className="nav-cta">Agenda gratis →</Link>
      </div>
    </nav>
  )
}
