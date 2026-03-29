'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cur = document.getElementById('cursor')
    if (!cur) return

    const onMove = (e) => {
      cur.style.left = e.clientX + 'px'
      cur.style.top = e.clientY + 'px'
    }
    document.addEventListener('mousemove', onMove)

    const targets = document.querySelectorAll('a,button,.portfolio-item,.faq-q')
    const grow = () => cur.classList.add('grow')
    const shrink = () => cur.classList.remove('grow')
    targets.forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return <div className="cursor" id="cursor" />
}
