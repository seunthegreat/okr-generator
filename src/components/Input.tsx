import React, { ChangeEvent, FC, MouseEvent } from 'react';
import { text } from '../style';

interface Props {
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  onClickGenerate: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Input: FC<Props> = ({ placeholder, value, onChange, onClickGenerate }) => {
  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className='border-r-[1px]'>
      <div className='p-5 py-10 h-96'>
        <textarea
          placeholder={placeholder}
          className={`${text.small} outline-none bg-primary w-full h-60 text-dimWhite leading-5`}
          value={value}
          onChange={handleOnChange}
        />
        <div className='flex flex-row justify-end'>
          <button
            onClick={onClickGenerate}
            className='bg-white rounded-[40px] flex hover:bg-transparent hover:border hover:border-[1px]'>
            <p className='font-semibold hover:text-white p-2 px-10'>Generate</p>
          </button>
        </div>
      </div>
    </div>
  )
};

export default Input;
