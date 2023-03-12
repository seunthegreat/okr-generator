import React, { useState } from 'react';
import { text } from '../style';
import { Input, KeyResults } from '.';
import { contents } from '../constants';

const { placeholder } = contents.input;
const { mock } = contents.keyResults;
type Props = {}

const Generator = (props: Props) => {
  const [objective, setObjective] = useState('');

  const handleObjectiveChange = (value: string) => {
    setObjective(value)
  };

  const handleGenerate = () => {
    console.log("Objective: ",objective)
  }
  return (
    <div className='h-96 flex flex-col w-full px-20'>
      <div className='border rounded-[10px] h-full grid grid-cols-2 '>
        <Input 
          placeholder={placeholder} 
          value={objective} 
          onChange={handleObjectiveChange} 
          onClickGenerate={handleGenerate}
          />
        <KeyResults data={mock}/>
      </div>
      
    </div>
  )
}

export default Generator;