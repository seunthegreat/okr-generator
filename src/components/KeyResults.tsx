import React, { FC } from 'react';
import { text } from '../style';
import { krList } from "../constants"

type Props = {
  data: krList[]
}

const KeyResults: FC<Props> = ({data}) => {
  return (
    <div className='p-5 py-10 h-96'>
      <p className={`${text.normal} font-bold`}>
        Key Measurable Results
      </p>

      <div className='flex flex-col mt-5'>
        {data.map((item, index) => (
          <div className='bg-white p-3 rounded-[5px] mb-2 hover:bg-[#def9fa]' key={index}>
            <p className={`${text.normal} text-primary`}>{index+1}. {item.result}</p>
          </div>
        ))}
      </div>
   </div>
  )
};

export default KeyResults;