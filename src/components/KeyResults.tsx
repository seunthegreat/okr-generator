import React, { FC } from 'react';
import { text } from '../style';
import { krList } from "../constants";
import { Player } from '@lottiefiles/react-lottie-player';

type Props = {
  data: krList[], 
  showResults: boolean,
  loading: boolean,
}

const KeyResults: FC<Props> = ({data, showResults, loading}) => {
  return (
    <div className='p-5 py-10 flex-grow flex flex-col py-10 mb-10'>
      {loading && 
        <div>
          <Player
          autoplay={true}
          loop={true}
          controls={true}
          src={"https://assets2.lottiefiles.com/private_files/lf30_kpqs3hdl.json"}
          className="w-[70%] h-[80%] object-contain hidden md:block"
        />
        </div>
      }
      {showResults && !loading &&
        <>
        <p className={`${text.normal} font-bold`}>
          Key Measurable Results
        </p>

        <div className='flex flex-col mt-5'>
          {data.map((item, index) => (
            <div className='bg-white p-3 rounded-[5px] mb-2 hover:bg-[#def9fa] flex flex-row' key={index}>
              <p className={`${text.normal} text-primary mr-2`}>{index + 1}.</p>
              <p className={`${text.normal} text-primary`}>{item.result}</p>
            </div>
          ))}
        </div>
      </>
      }
   </div>
  )
};

export default KeyResults;