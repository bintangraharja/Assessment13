import React, { useState } from 'react'
import './App.css';
import { SymbolTriangleUpIcon, SymbolTriangleDownIcon, StopwatchIcon, IconButton} from 'evergreen-ui'
import Timer from './component/Timer';
import Btn from './component/Btn';


function App(){
  const [time, setTime] = useState({s:0, m:0,h:0});
  const [interval, setInterv] = useState();
  const [status, setStatus] = useState(0);

  var second = time.s, minute = time.m, hour = time.h;
  
  const tambahjam = () => {
    hour= hour + 1;
    return setTime({s:second, m:minute,h:hour});
    };
  const tambahmenit = () =>{
    minute = minute + 1;
    return setTime({s:second, m:minute,h:hour});
    };
  const tambahdetik =()=>{
    second = second + 1;
    return setTime({s:second, m:minute,h:hour});
    };
  const kurangjam = () => {
      hour = hour - 1;
      return setTime({s:second, m:minute,h:hour});
      };
  const kurangmenit = () =>{
      minute = minute - 1;
      return setTime({s:second, m:minute,h:hour});
      };
  const kurangdetik =()=>{
      second= second -1;
      return setTime({s:second, m:minute,h:hour});
      };

  const start = () =>{
    run();
    setStatus(1);
    setInterv(setInterval(run,1000))
  };
  
  const run = () => {
    if(hour < 0 || minute < 0|| second < 0){
      clearInterval(interval);
      hour = 0; minute = 0; second =0;
      
    }
    else if(hour === 0 && minute === 0 && second === 0){
      clearInterval(interval);
      setStatus(3);
    }else{
    if( hour > 0 && minute === 0 && second === 0){
      hour--;
      minute = 60;
    }
    if(hour >= 0 && second === 0){
      minute--;
      second = 60;
    }
    if(hour >= 0 && minute >= 0 && second > 0){
      second--;
    }else{
      setTime({s:0,m:0,h:0});
    }
  }
  return setTime({s:second, m:minute,h:hour});
    
  };
  const stop = () =>{
    clearInterval(interval);
    setStatus(2);
  };
  const reset = () => {
    clearInterval(interval);
    setStatus(0);
    setTime({s:0,m:0,h:0})
  };
  const resume = () => start()

  return (
  <section className="main-container">
    <section className="timer">
      <div className="center header">
    {(status === 3)?
    <style>{'body{background-color: #66ff66;}'}</style>: 
    <style>{'body{background-color: rgb(13, 240, 240);}'}</style>
    }
     <h1>
       <StopwatchIcon />
       SIMPLE COUNTDOWN
       <StopwatchIcon />
     </h1>
   </div>
   <div className="center info">
    {(status === 1 || status ===2)? 
   <div>Time Remaining</div>:""}
   {(status === 3)? 
   <div>BOOOM!!!!!</div>:""}
   </div>
   {(status === 0) ?
   <div className="center">
    <IconButton appearance="minimal"icon={SymbolTriangleUpIcon} onClick={tambahjam}></IconButton>
    <IconButton appearance="minimal"icon={SymbolTriangleUpIcon} onClick={tambahmenit}></IconButton>
    <IconButton appearance="minimal"icon={SymbolTriangleUpIcon} onClick={tambahdetik}></IconButton>
   </div>:""}
   <div className="center">
     <Timer time={time}/>
  </div>
  {(status === 0)?
  <div className="center">
  <IconButton appearance="minimal"icon={SymbolTriangleDownIcon} onClick={kurangjam}></IconButton>
  <IconButton appearance="minimal"icon={SymbolTriangleDownIcon} onClick={kurangmenit}></IconButton>
  <IconButton appearance="minimal"icon={SymbolTriangleDownIcon} onClick={kurangdetik}></IconButton>
  </div>:""}
  <div className="center">
     <Btn status={status} resume={resume} reset={reset} stop={stop} start={start}/>
  </div>
  </section>
  </section>

  )
}
export default App;
