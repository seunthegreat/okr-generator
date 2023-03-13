import React, { ChangeEvent, FC, MouseEvent } from 'react';
import { text } from '../style';

interface Props {
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  onClickGenerate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickTryDemo: (event: MouseEvent<HTMLButtonElement>) => void;
  showResults: boolean;
  loading: boolean;
}

const Input: FC<Props> = ({ placeholder, value, onChange, onClickGenerate, onClickTryDemo, showResults, loading }) => {
  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={`border-r-[1px] w-full flex flex-grow flex-col `}>
      <div className={`p-5 sm:pt-10 pt-5 flex flex-col ${!showResults ? 'h-80' : ''}`}>
        <div className='flex mb-3'>
          <textarea
            placeholder={placeholder}
            className={`${text.small}flex flex-grow outline-none bg-primary w-full text-dimWhite leading-5`}
            value={value}
            onChange={handleOnChange}
          />
        </div>

        {value == '' && (
          <div className="opacity-50 flex">
            <button
              onClick={onClickTryDemo}
              className='rounded-[10px] py-2 px-5 flex flex-row items-center justify-center border border-[1px]'>
              <p className={`text-white`}>Try Demo</p>
            </button>
          </div>
        )}

        {!showResults && (
          <div className={`w-full ${!showResults ? 'h-full' : ''} flex flex-col items-end justify-end`}>
            <button
              onClick={onClickGenerate}
              className='bg-white rounded-[40px] flex flex-row hover:bg-transparent hover:border hover:border-[1px]'>
              <p className={`${text.small} text-primary  font-semibold hover:text-white py-2 sm:px-10 px-5`}>
                {!loading ? `Generate` : `Generating...`}
              </p>
            </button>
          </div>
        )}
      </div>

    </div>
  )
};

export default Input;
