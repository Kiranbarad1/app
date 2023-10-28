import React, { useState } from 'react';
import styled from 'styled-components';


function App() {
  
  const [name, setname] = useState('');
  const [R, setR] = useState('');
  const Likita =['7v fail', 'Anpadh','cat','gundamma','lier','dumb']
  const Kiran =['creator','one above all','single peice in world']
  const Other =['kind', 'innocent','humbal','buddy','stupid guy','topper','losser','useless',]


  const data =(e)=>{
   setname(e.target.value)
   console.log(name);
          
  }
  // const DataClear =(e)=>{
  //   setR('')
  
  //   setname('')
          
  // }
  const DataAdd =(e)=>{
    
    if (name.toUpperCase() === 'LIKITA') {
    
      setR(
        Likita[Math.floor(Math.random() * Likita.length)]
      )
    
    }
    else if(name.toUpperCase()==='KIRAN'){
      
      setR(
        Kiran[Math.floor(Math.random() * Kiran.length)]
      )
    }
    else if(name === ''){
      alert('enter name')
     
    }
    else{
      setR(
       Other[Math.floor(Math.random() * Other.length)]
      )
    }

  }
  return (
 

    <div style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      
    }}>
      <Input>
     <Take type="text"  onChange={data}/>
      </Input>
      <Send>
     <button onClick={DataAdd}>send</button>
      </Send>
     <h1>{R}</h1>
   </div>
    
  );
}

export default App;
const Division=styled.div`
display: flex;
background-color: tomato;
  
`
const Clear=styled.section`
  
`
const Take=styled.input`
  
`
const Send=styled.section`
  font-size:'60px';
`
const Input=styled.section`
  
`
   {/* <Clear>
     <button onClick={DataClear}>clear</button>
      </Clear> */}

     {/* <h1>{Rname}</h1> */}