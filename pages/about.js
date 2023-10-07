import React, { useState } from "react";

const About = () => {
  const [color,setColor] = useState('red')
  return (
    <center>
      <div
        style={{ width: "500px", height: "400px", backgroundColor:color,border:'2px solid black' }}
      ></div>
      <div style={{display:"grid",gridTemplateColumns: 'repeat(2, 1fr)',gap:"10px",border:'2px solid black',width:"800px",paddingLeft:"200px",padding:"10px"}}>
        <div style={{width:"100px",height:'100px',backgroundColor:'red' }}>Red</div>
        <div style={{width:"100px",height:'100px',backgroundColor:'yellow'}}>Yellow</div>
        <div style={{width:"100px",height:'100px',backgroundColor:'blue'}}>Blue</div>
        <div style={{width:"100px",height:'100px',backgroundColor:'green'}}>Green</div>
      </div>
      <div style={{display:'flex',marginLeft:"200px"}}>
        <div style={{width:'400px',height:"100px",border:'2px solid black'}} onClick={()=>setColor('red')}><button>Red</button></div>
        <div style={{width:'400px',height:"100px",border:'2px solid black'}} onClick={()=>setColor('yellow')}><button>Yellow</button></div>
        <div style={{width:'400px',height:"100px",border:'2px solid black'}} onClick={()=>setColor('blue')}><button>Blue</button></div>
        <div style={{width:'400px',height:"100px",border:'2px solid black'}} onClick={()=>setColor('green')}><button>Green</button></div>
      </div>
    </center>
  );
};
export default About;
