import { Swiper, SwiperSlide } from 'swiper/react';
import BannerImage from '/public/BannerImage.png';
import Slider2 from '/public/slider2.jpg';
import Slider3 from '/public/slider3.png';
import Slider4 from '/public/slider4.jpg';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
                        <p className='text-7xl text-white pl-16 '>Откройте силу <br />
                        ганодермы для здоровья</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-[700px]  bg-cover bg-center flex items-center' style={{backgroundImage:`url(${Slider2})`}}>
                        <p className='text-7xl text-white pl-16 '>Питайтесь правильно,<br />
                        живите здорово с ганодермой!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-[700px]  bg-cover bg-center flex items-center' style={{backgroundImage:`url(${Slider3})`}}>
                        <p className='text-7xl text-white pl-16 '>Здоровье и гармония<br />
                             начинаются с Gano Excel</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-[700px]  bg-cover bg-center flex items-center' style={{backgroundImage:`url(${Slider4})`}}>
                        <p className='text-7xl text-white pl-16 '>Ощутите баланс и силу <br />
                            природы с ганодермой.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Banner;
