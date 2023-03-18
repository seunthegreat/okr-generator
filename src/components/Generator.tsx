import React, { useState } from 'react';
import { text } from '../style';
import { Input, KeyResults, Tasklist } from '.';
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
  const [taskList, setTaskList] = useState([]);
  const [currentTab, setCurrentTab] = useState('results');
  const [noTaskList, setNoTaskList] = useState<boolean>(true);
  
  const handleGenerateTaskList = ():void => {
    setNoTaskList(false);
  }

  const handleObjectiveChange = (value: string): void => {
    setObjective(value)
  };

  const handleGenerate = async () => {
    //--If user clicks on demo, render mock result--//
    if (demoMode) {
      setGenerateResults(true);
      setResults(mock);
      return
    }
   
    console.log("is loading");
    setLoading(true);

    const form = { objective: objective };
    try {
      //--Fetch--//
      const response = await fetch('http://localhost:5173/generate-key-results', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // process the response as needed
      const results = await response.json();   
      const { data, success} = results;
      setLoading(false);

      if (success) {
        setGenerateResults(true);
        setResults(data);
        
        console.log(results)
      };

      

    }catch (error) {
      console.error(error);
    }
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
  };

  const handleTabClick = (tabName:string) => {
    setCurrentTab(tabName);
  };

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
          loading={loading}
          />
        <KeyResults 
          results={results} 
          taskList={taskList}
          showResults={generateResults} 
          loading={loading}
          onClickRefresh={handleRefresh}
          currentTab={currentTab}
          onClickTab={handleTabClick}
          noTaskList={noTaskList}
          onGenerateTaskList={handleGenerateTaskList}
        />

      </div>      
    </div>
  )
}

export default Generator;