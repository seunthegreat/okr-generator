import React from 'react';
import { text } from '../style';
import { krList } from "../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { FreeMode, Scrollbar, Mousewheel } from "swiper";

type ResultListProps = {
  results: krList[], 
};

const ResultList: React.FC<ResultListProps> = ({results}):JSX.Element => {
  return (
    <div className='flex flex-col mt-5 h-[100%]'>
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
        {results.map((item, index) => (
        <div className='bg-white p-3 rounded-[5px] mb-2 hover:bg-[#def9fa] flex flex-row' key={index}>
          <p className={`${text.normal} text-primary mr-2`}>{index + 1}.</p>
          <p className={`${text.normal} text-primary`}>{item.result.substring(3)}</p>
        </div>
       ))}
        </SwiperSlide>
      </Swiper>
    </div>
  )
};

export default ResultList