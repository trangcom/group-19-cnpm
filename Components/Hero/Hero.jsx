import React from 'react' 6.9k (gzipped: 2.7k)
import './Hero.css'
import hand_icon from '../Asset/hand_icon.png'
import arrow_icon from '../Asser/arrow.png'
import hero_image from '../Asser/hero_image.png'

const Hero = () => {
    return (
        <div className= 'hero'>
          <div className=  "hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
            <div className= "hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>  
            <p>collection</p>
            <p>for everyone</p>
            </div>
                <div className= "hero-latest-btn">
                    <div>latest collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
          </div>
            
          <div className= "hero-right">
            <img src={hero_image} alt="" />
          </div>
        </div>
    )
}

export default Hero
