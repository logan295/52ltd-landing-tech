import Nav from './components/Nav'
import Hero from './components/Hero'
import LogoBar from './components/LogoBar'
import PainPoints from './components/PainPoints'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <WhyUs />
      <Services />
      <GetStarted />
      <LogoBar />
      <Footer />
    </main>
  )
}
