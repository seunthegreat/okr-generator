import React from 'react'
import { text } from '../style';

type Props = {}

const Tasklist = (props: Props) => {
  return (
    <div className='flex-grow flex flex-col mt-10'>
      <p className={`${text.small}`}>Learn and Master DevOps</p>
    </div>
  )
};

export default Tasklist