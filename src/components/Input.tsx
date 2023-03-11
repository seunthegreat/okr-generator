import React from 'react'
import { text } from '../style';

type Props = {}

const Input = (props: Props) => {
  return (
    <div className='border-r-[2px] border-dimWhite'>
      <p className={`${text.body}`}>
        Input
      </p>
   </div>
  )
};

export default Input