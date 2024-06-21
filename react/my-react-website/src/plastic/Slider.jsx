import Slider from 'react-infinite-logo-slider'

const Slide = () => {
    
    return (
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
            
        >
            <Slider.Slide>
                <img src="/src/assets/Scroll2.png" alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/src/assets/Scroll3.png" alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/src/assets/Scroll4.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/src/assets/Scroll5.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/src/assets/Oceancleanup.jpg" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/src/assets/scroll7.png" alt="any3" className='w-36' />
            </Slider.Slide>
            
            <Slider.Slide>

            </Slider.Slide>
        </Slider>
    )
}              
                     
export default Slide