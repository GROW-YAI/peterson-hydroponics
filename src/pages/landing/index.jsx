import Hero from "./components/hero"
import Testimonials from "./components/testimonials"
import HydroponicsInfo from "./components/hydroponics-info"
import Impact from "./components/impact"
import ProduceShowcase from "./components/produce-showcase"
import DeliverySection from "./components/delivery-section"

const LandingPage = () => {
  return (
    <div>
      <section id="home">       
        <Hero />
      </section>
      <section id="about">
        <HydroponicsInfo />
      </section>
      <Impact />
      <ProduceShowcase />
      <DeliverySection />
      <Testimonials />
    </div>
  )
}

export default LandingPage