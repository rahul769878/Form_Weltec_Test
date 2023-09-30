import { useState } from 'react';
import './App.css';
import DisplayData from './component/DisplayData';
import FormData from './component/FormData';

function App() {
  const [data, setData] = useState([]);
  return (
    <>    
    <FormData data={data} setData={setData}/>
    <DisplayData data={data}/> 
    </>
  );
}

export default App;
