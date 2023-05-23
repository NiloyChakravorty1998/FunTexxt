import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
<div>
     <Navbar/>
      <div className="container mx-auto">
       <TextForm labelName="Enter your text here"/>
      </div>
</div>   
  );
}

export default App;
