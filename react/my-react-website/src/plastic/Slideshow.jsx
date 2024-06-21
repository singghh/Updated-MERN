import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const fadeImages = [
  {
    url: '/src/assets/pjpeg.jpg',
    caption: "The Urgent Call to Combat Beach Pollution"
  },
  {
    url: 'https://i2-prod.mirror.co.uk/incoming/article11589597.ece/ALTERNATES/s1227b/This-Hand-Out-photo-shows-plastic-waste.jpg',
    caption: "A Call to Heal Our Shores",
  },
  {
    url: 'https://images.wagwalkingweb.com/media/care/hero/1654534515.4420464/how-microplastics-can-affect-your-dogs-and-cats.png',
    caption: "The Unseen Pollutants in Soil",
  },
  {
    url: 'https://www.genevaenvironmentnetwork.org/wp-content/uploads/2020/11/2019_0520-plastic-pollution-aspect-ratio-2000-1200-1024x614.jpg',
    caption: "Unmasking the Invisible Threat of Plastic Air Pollution",
  },
  {
    url: 'https://images.deccanherald.com/deccanherald/import/sites/dh/files/article_images/2019/06/10/file6zr4a4re48914mhgx74o-1560154802.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true',
    caption: "Turning the Tide on Plastic Pollution",
  },
  {
    url: 'https://citizenmatters.in/wp-content/uploads/2024/03/Plastic-pollution-cattle-pinkychandran-Feb22-scaled-1.jpg',
    caption:"Unveiling plastic's impact on global wildlife"
  }
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade duration={3000} transitionDuration={900}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className='relative'>
            <img style={{ width: '100%', height: "605px", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center" }} src={fadeImage.url} alt={`slide ${index + 1}`} />

            <h2 className='absolute text-5xl top-10 left-8 font-bold text-[#ffff00] text-wrap'>
              <div className='flex'>
                <RiDoubleQuotesL color='white' />
                {fadeImage.caption}<RiDoubleQuotesR color='white' /></div>
            </h2> 
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default Slideshow;
