
import React from 'react';
import  "./style.css";
import  Button from "./button.js";



const Greet =()=> {
    return (
      <div  style={{ textAlign: "center" }}>
      <h1>Hello World!!!</h1>
      <Button title='Submit'></Button>
      <Button title='Play Store'></Button>
      <Button />
  
 {/* <button className='btn'>Submit</button>
 <button className='btn'>Submit</button> */}
 </div>
  );
};

export default Greet;



