import { heroBg } from "../../../assets"

const Hero = () => {
  return (
  <div className="flex h-screen">
<div className="w-1/2 color bg-yellow-400 place-content-center">
      <div className="mx-auto w-fit flex flex-col items-start gap-y-4 p-20">
        <div className="flex flex-col text-5xl">
          <span className="font-thin">Best Paintings of<br /> </span>
          <span className="font-bold">LizArt Collections</span>
        </div>
        <p className="w-80">
          What’s that, you say? He inhaled a painting?? The man must be enormous! Not quite. Wigan’s works are ‘micro-sculptures’, so tiny they must be viewed through a microscope.    </p>
        <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg	text-cyan-800">DISCOVER</button>
      </div>
    </div>

    <div className="w-1/2">
      <img src={heroBg} alt="Hero background" className="object-cover w-full h-full" />
    </div>
  </div>
  )
}

export default Hero