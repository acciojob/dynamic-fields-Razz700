
import React, { useRef, useState } from "react";
import './../styles/App.css';


const App = () => {
  let [data,setdata]=useState([{
    name:'',
    age:''
  }]);
console.log(data);
  const handleadd=()=>{
    setdata(data=>[...data,{
      name:'',
      age:''
    }]);
  }
  const handleremove=(i)=>{
    setdata(data=>{
      delete data[i];
      const arr=data.filter((item)=>item);
      console.log(arr,'data arr');
      return arr;
    });
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
  console.log(data)
  }
  const handlename=(e,i)=>{
    console.log(e.target.value,i);
    const val=e.target.value;
    setdata(data=>{
     const data1=[...data];
    // data1[i]={...data1[i],name:val}
    data1[i].name=val;
      return data1;
    })
  }
  const handleage=(e,i)=>{
    console.log(e.target.value,i);
    const val=e.target.value;
    setdata(data=>{
     const data1=[...data];
    // data1[i]={...data1[i],name:val}
    data1[i].age=val;
      return data1;
    })
  }
  return (
    <div>
      {data.map((item,i)=><div key={item+'a'+i}>
        <input onChange={(e)=>{handlename(e,i)}} value={item.name} type="text" name="name" placeholder="Name" required />
        <input onChange={(e)=>{handleage(e,i)}} value={item.age}  type="number" name="age" placeholder="Age" required />
        <button onClick={()=>{handleremove(i)}}>Remove</button>
      </div>)}
     <button onClick={handleadd}>Add More..</button>
     <button onClick={handlesubmit}>Submit</button>
      <p>After clicking submit check console for data</p>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
