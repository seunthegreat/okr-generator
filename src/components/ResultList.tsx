import React from 'react';
import { text } from '../style';
import { krList } from "../constants";

type ResultListProps = {
  data: krList[], 
};

const ResultList: React.FC<ResultListProps> = ({data}):JSX.Element => {
  return (
    <div className='flex flex-col mt-5'>
      {data.map((item, index) => (
        <div className='bg-white p-3 rounded-[5px] mb-2 hover:bg-[#def9fa] flex flex-row' key={index}>
          <p className={`${text.normal} text-primary mr-2`}>{index + 1}.</p>
          <p className={`${text.normal} text-primary`}>{item.result.substring(3)}</p>
        </div>
       ))}
    </div>
  )
};

export default ResultList