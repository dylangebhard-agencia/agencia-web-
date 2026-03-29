import { getPortfolio, getReviews } from '@/lib/notion'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ValorProps from '@/components/ValorProps'
import ComoFunciona from '@/components/ComoFunciona'
import Packs from '@/components/Packs'
import RoiCalc from '@/components/RoiCalc'
import Portfolio from '@/components/Portfolio'
import Testimonios from '@/components/Testimonios'
import Faq from '@/components/Faq'
import Agendar from '@/components/Agendar'
import Footer from '@/components/Footer'

// Equivalente a getStaticProps con revalidate: 60 en App Router
export const revalidate = 60

export default async function Home() {
  const [items, reviews] = await Promise.all([
    getPortfolio(),
    getReviews(),
  ])

  return (
    <>
      <Nav />
      <Hero />
      <div className="divider" />
      <ValorProps />
      <div className="divider" />
      <ComoFunciona />
      <div className="divider" />
      <Packs />
      <RoiCalc />
      <div className="divider" />
      <Portfolio items={items} />
      <div className="divider" />
      <Testimonios reviews={reviews} />
      <div className="divider" />
      <Faq />
      <Agendar />
      <Footer />
    </>
  )
}
