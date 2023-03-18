import React, { MouseEvent} from 'react'
import { text } from '../style';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Scrollbar, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { contents } from '../constants';

const { taskListMock } = contents.keyResults; //--> Dummy Data

type TaskListProps = {
  taskList: any, 
  noTaskList: boolean,
  onGenerateTaskList: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Tasklist: React.FC<TaskListProps> = ({taskList, onGenerateTaskList, noTaskList}):JSX.Element => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: unknown) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className='flex-grow flex h-full flex-col mt-5'>
      { noTaskList ? (
        <div className='h-full w-full flex items-center justify-center'>
        <div className="flex">
          <button
            onClick={onGenerateTaskList}
            className='rounded-[10px] flex flex-row items-center justify-center hover:border-secondary border border-[1px]'>
              <p className={`text-white hover:text-secondary py-2 px-5`}>Generate from Key Results</p>
            </button>
          </div>
        </div>
      ) : (
        <div className='h-full'>
          <Swiper 
            pagination={pagination}
            modules={[Pagination]}
            className="h-full">
              {taskListMock.map((item, index) => (
                <SwiperSlide className='h-full flex items-center' key={index}>
                  <Swiper
                    direction={"vertical"}
                    slidesPerView={"auto"}
                    freeMode={true}
                    scrollbar={true}
                    mousewheel={true}
                    modules={[FreeMode, Scrollbar, Mousewheel]}
                    className="mySwiper mb-8"
                  >
                    <SwiperSlide>
                      <div className='flex flex-col'>
                        <p className={`${text.body}`}>Result {index + 1}</p>
                        <div className='w-[95%] bg-white p-3 rounded-[5px] my-2 hover:bg-[#def9fa] flex flex-row' key={'kddd'}>
                          <p className={`${text.normal} text-primary`}>{item.result}</p>
                        </div>
                      </div>
                      <div className='flex flex-col flex-grow w-full'>
                        <p className={`${text.body}`}>Task</p>
                        {item.taskList.map((item, index) => (
                          <div key={index} className='border-b-[0.5px] border-gray-500 mt-3 w-[90%] mx-2 p-1'>
                            <p className={`${text.normal}`}>{index + 1}. {item.task}</p>
                          </div>
                        ))}
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      )}
    </div>
  )
};

export default Tasklist