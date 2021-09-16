import React,{ useState} from 'react';
import './App.css';

const App = () => {
  let time = new Date().toLocaleString();

  const [ctime, setCtime] = useState(time);

const UpdateTime = () => {
  time = new Date().toLocaleString();
  setCtime(time);
};

setInterval(UpdateTime, 1000)

  return (
    <div className="time">
    <h1>
     { ctime } 
    </h1>
   
</div>
  )

}

export default App;
