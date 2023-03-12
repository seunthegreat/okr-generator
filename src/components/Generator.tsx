import React, { useState } from 'react';
import { text } from '../style';
import { Input, KeyResults } from '.';
import { contents } from '../constants';

const { placeholder } = contents.input;
const { mock } = contents.keyResults;
type Props = {}

const Generator = (props: Props) => {
  const [objective, setObjective] = useState<string>('');
  const [generateResults, setGenerateResults] = useState<boolean>(false); 
  const [loading, setLoading] = useState<boolean>(false);

  const handleObjectiveChange = (value: string): void => {
    setObjective(value)
  };

  const handleGenerate = (): void => {
    setGenerateResults(true);
  };

  const handleTryDemo = (): void => {
   setObjective("Learn DevOps Engineering");
  }

  return (
    <div className='flex flex-col w-full px-20'>
      <div className='border rounded-[10px] grid grid-cols-2 '>
        <Input 
          placeholder={placeholder} 
          value={objective} 
          onChange={handleObjectiveChange} 
          onClickGenerate={handleGenerate}
          onClickTryDemo={handleTryDemo}
          showResults={generateResults}
          />
        <KeyResults data={mock} showResults={generateResults} loading={loading}/>
      </div>
      
    </div>
  )
}

export default Generator;