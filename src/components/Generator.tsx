import React from 'react'
import { text } from '../style';
import { Input, KeyResults } from '.';


type Props = {}

const Generator = (props: Props) => {
  return (
    <div className='h-96 flex flex-col w-full px-20'>
      <div className='border rounded-[10px] h-full grid grid-cols-2 '>
        <Input />
        <KeyResults />
      </div>
    </div>
  )
}

export default Generator;