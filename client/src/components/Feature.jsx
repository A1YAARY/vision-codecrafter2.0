import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Feature = () => {
  const progressBarRef = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${(1 - progress) * 100}%`;
    }
  };

  return (
    <div className=" relative">
      <Swiper
        className="progress-slide-carousel relative  w-full h-screen bg-[#E0AAFF] "
        modules={[Pagination, Autoplay]}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        autoplay={{
          delay: 2000, // 3 seconds per slide
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <SwiperSlide>
          <div className=" bg-[#E0AAFF] rounded-2xl h-96 flex justify-center items-center">
            <span className="text-3xl font-semibold text-indigo-600">
            Slide 1
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[#E0AAFF] rounded-2xl h-96 flex justify-center items-center">
            <span className="text-3xl font-semibold text-indigo-600">
              Slide 2
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#E0AAFF] rounded-2xl h-96 flex justify-center items-center">
            <span className="text-3xl font-semibold text-indigo-600">
              Slide 3
            </span>
          </div>
        </SwiperSlide>

        {/* Progress Bar */}
        
      </Swiper>

      {/* Pagination */}
      
    </div>
  );
};

export default Feature;