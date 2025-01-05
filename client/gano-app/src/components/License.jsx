import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // Import Swiper CSS
import Australian from '/Australian.png';
import ISO from '/ISO.png';
import UKAS from '/UKAS.png';
import Food from '/food.png';
import ministry from '/Ministry.svg';
import GMP from '/GMP.png';
import Halal from '/HALAL.png';
import Chemlab from '/CHEMLAB.png';
import Universiti from '/Universiti.png';
import DSA from '/DSA.png';
import aqis from '/aqis.jfif';
import PSB from '/PSB.png';
import BBB from '/bbb.png';
import DSA2 from '/dsa.jfif';

function License() {
    return (
        <div className="py-10 bg-gray-100 mt-28">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Лицензии</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 10 },
                    768: { slidesPerView: 3, spaceBetween: 15 },
                    1024: { slidesPerView: 5, spaceBetween: 20 },
                }}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="flex items-center justify-center"
            >
                {[Australian, ISO, UKAS, Food, GMP, ministry, Halal, Chemlab, Universiti, DSA, aqis, PSB, BBB, DSA2].map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform">
                            <img src={image} alt={`License ${index + 1}`} className="w-[70%] h-[120px] object-contain" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default License;
