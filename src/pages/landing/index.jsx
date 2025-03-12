import About from "../about"
import Collection from "../collection"
import Hero from "./components/hero"
import Reviews from "../reviews"
import Services from "./components/services"
import Testimonials from "./components/testimonials"
import MoreProducts from "./components/more-products"
import ContactUs from "./contactUs"

const LandingPage = () => {
  return (
    <div>
      <section id="home">       
        <Hero />
      </section>
      <section id="services">      
        <Services />
      </section>
      <section id="about">
      <About />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Collection />
      <Testimonials />
      <Reviews />
      <MoreProducts />
    </div>
  )
}

export default LandingPage