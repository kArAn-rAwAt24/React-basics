import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(10);

   const incValueByMultipleSet = () => {
     if (counter >=16) return;
     /*setCounter(counter + 1);
     setCounter(counter + 1);
     setCounter(counter + 1);
     setCounter(counter + 1);*/ // it will inc counter by only 1 because of batch proceesing
     
     
     setCounter((prevCounter)=> {return prevCounter+1;})
     setCounter(prevCounter=>prevCounter+1);
     setCounter(prevCounter=>prevCounter+1);
     setCounter(prevCounter=>prevCounter+1);


   };
  const incValue = ()=>{
    if(counter==20) return;
    setCounter(counter+1);    
  }
  const decValue = () => {
    if(counter==0) return;
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>hello karan rawat</h1>
      <h2>COunter Value: {counter}</h2>

      <button onClick={incValueByMultipleSet}>
        Inc Value by multiple setCounter
      </button>
      <br />
      <button onClick={incValue}>Inc Value</button>
      <br />
      <button onClick={decValue}>Dec Value</button>
    </>
  );
}

export default App;
