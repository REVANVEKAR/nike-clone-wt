import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section id="home" className="w-full flex
    xl:flex-row flex:col justify-center min-h-screen
    gap-10 max-container ">

      <div className="relative xl:w-2/5 flex 
      flex-col justify-center items-start w-full
      max-xl:padding-x pt-28">
          <p>Our Summer Collection</p>
          <h1>
            <span>The New Arrival</span>
            <br/>
            <span>Nike x Rev </span>
            shoes
          </h1>
          <p>Discover stylish Nike x Rev arrivals,
           quality, comfort and innovation for your 
           hectic reva life
          </p>
          <Button label="Shop Now"
          iconURL={arrowRight}/>

          <div className="flex justify-start items-start
          flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat, index)=>(
              <div key={index}>
                <p>{stat.value}</p>
                <p>{stat.label}</p>
              </div>
              
            ))}
          </div>
          
      </div>

    </section>
  )
}

export default Hero
