import React, { ChangeEvent, FC, MouseEvent } from 'react';
import { text } from '../style';

interface Props {
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  onClickGenerate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickTryDemo: (event: MouseEvent<HTMLButtonElement>) => void;
  showResults: boolean;
}

const Input: FC<Props> = ({ placeholder, value, onChange, onClickGenerate, onClickTryDemo, showResults }) => {
  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className='border-r-[1px]'>
      <div className={`p-5 py-10 ${!showResults ? 'h-80' : 'h-full'} flex flex-col relative`}>
        <textarea
          placeholder={placeholder}
          className={`${text.small} outline-none bg-primary flex-grow w-full text-dimWhite leading-5 relative`}
          value={value}
          onChange={handleOnChange}
        />

        {value == '' && (
          <div className="h-3/4 opacity-50 py-5">
            <button
              onClick={onClickTryDemo}
              className='rounded-[10px] flex flex-row items-center justify-center border border-[1px]'>
              <p className='font-normal text-white p-2 px-5'>Try Demo</p>
            </button>
          </div>
        )}
        <div className='flex flex-row justify-end'>
          <button
            onClick={onClickGenerate}
            className='bg-white absolute bottom-3 rounded-[40px] flex hover:bg-transparent hover:border hover:border-[1px]'>
            <p className='font-semibold hover:text-white p-2 px-10'>Generate</p>
          </button>
        </div>
      </div>
    </div>
  )
};

export default Input;
