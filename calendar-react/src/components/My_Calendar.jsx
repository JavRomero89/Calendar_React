import { useState } from 'react';
import Calendar from 'react-calendar';


function My_Calendar() {
  const [value, onChange] = useState(new Date());
const [date,setDate] = useState (null)
 console.log(date); 
  return (
    <div>
      <Calendar onClickDay={(e)=>{setDate(e.toLocaleDateString())}} onChange={onChange} value={value} />
      <p>{date}</p>
      <p></p>
    </div>
  );
}
export default My_Calendar