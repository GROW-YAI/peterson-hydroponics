import About from "../about"
import Collection from "../collection"
import Hero from "./components/hero"
import Reviews from "./components/reviews"
import Services from "./components/services"
import Testimonials from "./components/testimonials"
import MoreProducts from "./components/more-products"

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Collection />
      <Testimonials />
      <Reviews />
      <MoreProducts />
    </div>
  )
}

export default LandingPage