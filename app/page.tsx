import Nav from './components/Nav'
import Hero from './components/Hero'
import LogoBar from './components/LogoBar'
import PainPoints from './components/PainPoints'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import GetStarted from './components/GetStarted'
import BookAMeeting from './components/BookAMeeting'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: 0, margin: 0, padding: 0 }}>
      <Nav />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <WhyUs />
      <Services />
      <GetStarted />
      <BookAMeeting />
      <LogoBar />
      <Footer />
    </main>
  )
}
