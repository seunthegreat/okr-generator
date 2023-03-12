import React, { useState } from 'react';
import { text } from '../style';
import { Input, KeyResults } from '.';
import { contents } from '../constants';
import { krList } from '../constants';

const { placeholder } = contents.input;
const { mock } = contents.keyResults;

const Generator = (): JSX.Element => {
  const [objective, setObjective] = useState<string>('');
  const [generateResults, setGenerateResults] = useState<boolean>(false); 
  const [demoMode, setDemoMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<krList[]>([]);

  const handleObjectiveChange = (value: string): void => {
    setObjective(value)
  };

  const handleGenerate = (): void => {
    //--If user clicks on demo, render mock result--//
    if (demoMode) {
      setGenerateResults(true);
      setResults(mock);
      return
    }
   
    console.log("API CAll here")
  };

  const handleTryDemo = (): void => {
   setDemoMode(true);
   setObjective("Learn DevOps Engineering");
  };

  const handleRefresh = (): void => {
    setObjective('');
    setResults([]);
    setGenerateResults(false);
    if (demoMode) return setDemoMode(false);
  }

  return (
    <div className='flex flex-col w-full sm:px-20 px-5'>
      <div className='border rounded-[10px] grid sm:grid-cols-2 grid-cols-1 '>
        <Input 
          placeholder={placeholder} 
          value={objective} 
          onChange={handleObjectiveChange} 
          onClickGenerate={handleGenerate}
          onClickTryDemo={handleTryDemo}
          showResults={generateResults}
          />
        <KeyResults 
          data={results} 
          showResults={generateResults} 
          loading={loading}
          onClickRefresh={handleRefresh}
        />
      </div>
      
    </div>
  )
}

export default Generator;