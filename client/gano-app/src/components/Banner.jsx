import { Swiper, SwiperSlide } from 'swiper/react';
import BannerImage from '/public/BannerImage.png';
import Slider2 from '/public/slider2.jpg';
import Slider3 from '/public/slider3.png';
import Slider4 from '/public/slider4.jpg';
import { Autoplay } from 'swiper/modules';
import {motion } from "motion/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const animation = {
    hidden: {
        opacity: 0,
        x: -100, 
        scale: 1, 
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1, 
        transition: {
            duration: 0.30, 
            ease: [0.10, 0.1, 0.10, 0.15],
        },
    },
};


function Banner() {
    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay]} 
                autoplay={{
                    delay: 2000, 
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className='w-full h-[700px]  bg-cover bg-center flex items-center' style={{backgroundImage:`url(${BannerImage})`}}>
                        <motion.p 
                          initial="hidden"
                          whileInView="visible"
                          variants={animation}
                         className='lg:text-7xl text-4xl text-white lg:pl-16 pl-5 cursor-default '
                         >
                            Откройте силу <br />
                            ганодермы для здоровья
                        </motion.p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-[700px]  bg-cover bg-center flex items-center' style={{backgroundImage:`url(${Slider2})`}}>
                        <motion.p 
                             initial="hidden"
                             whileInView="visible"
                             variants={animation}
                            className='lg:text-7xl text-4xl text-white lg:pl-16 pl-5 cursor-default '>
                                Питайтесь правильно,<br />
                            живите здорово с ганодермой!
                        </motion.p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-[700px]  bg-cover bg-center flex items-center' style={{backgroundImage:`url(${Slider3})`}}>
                        <motion.p 
                             initial="hidden"
                             whileInView="visible"
                             variants={animation}
                            className='lg:text-7xl text-4xl text-white lg:pl-16 pl-5 cursor-default '>
                                Здоровье и гармония<br />
                             начинаются с Gano Excel
                        </motion.p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-[700px]  bg-cover bg-center flex items-center' style={{backgroundImage:`url(${Slider4})`}}>
                        <motion.p 
                             initial="hidden"
                             whileInView="visible"
                             variants={animation}
                            className='lg:text-7xl text-4xl text-white lg:pl-16 pl-5 cursor-default '>
                                Ощутите баланс и силу <br />
                                природы с ганодермой.
                        </motion.p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Banner;
