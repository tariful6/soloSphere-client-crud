// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import sildeImage1 from '../../assets/images/carousel1.jpg'
import sildeImage2 from '../../assets/images/carousel2.jpg'
import sildeImage3 from '../../assets/images/carousel3.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';


const Carousel = () => {
    return (
        <div className=' container p-6 mx-auto '>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide image={sildeImage1} text={"Get Your Web Development Projects Done in Minutes"}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={sildeImage2} text={"Get Your Graphics Design Projects Done in Minutes"}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={sildeImage3} text={"Start your Digital Marketing Campaigns up a running "}></Slide>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Carousel;



