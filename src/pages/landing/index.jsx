import About from "../about"
import Collection from "../collection"
import Hero from "./components/hero"
import Reviews from "./components/reviews"
import Services from "./components/services"
import Testimonials from "./components/testimonials"

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Collection />
      <Testimonials />
      <Reviews />
    </div>
  )
}

export default LandingPage