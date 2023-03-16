import React from 'react'
import { text } from '../style';

type TaskListProps = {
  taskList: any
}

const Tasklist: React.FC<TaskListProps> = ({taskList}):JSX.Element => {
  return (
    <div className='flex-grow flex h-full flex-col mt-5'>
      <div className='h-full w-full flex items-center justify-center'>
      <div className="flex">
          <button
            //onClick={onClickTryDemo}
            className='rounded-[10px] flex flex-row items-center justify-center hover:border-secondary border border-[1px]'>
            <p className={`text-white hover:text-secondary py-2 px-5`}>Generate from Key Results</p>
          </button>
        </div>
      </div>
    </div>
  )
};

export default Tasklist