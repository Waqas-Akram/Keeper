import React,{useState} from 'react';
function Time(){
    setInterval(getTime,1000)
    let curretTime = new Date().toLocaleTimeString();
    const [time,setTime] = useState(curretTime);
    function getTime(){
        let newTime =new Date().toLocaleTimeString();
        setTime(newTime);
        

    }
  return(
    <div>
    <h1 >{time}</h1>
    </div>
  )
}
export default Time;