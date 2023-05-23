import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpperCase = () =>
    {
        let textInUpcase = text.toUpperCase();
        console.log(textInUpcase);
        setText(textInUpcase);
        
    }

    const handleFormChange = (event) => {
        setText(event.target.value);
        console.log(text);
    }
  return (
    <form>
    <div className="container form-group my-3">
    <label htmlFor="exampleFormControlTextarea1"><h4>{props.labelName}</h4></label>
    <textarea className="form-control" id="exampleFormControlTextarea1"
     rows="10" onChange={handleFormChange} value={text}></textarea>
    <button type="button"  onClick={handleUpperCase} className="btn btn-primary my-3">To Uppercase</button>
    <button type="button" className="btn btn-primary my-3 mx-2">Word Counter</button>
    <p>The total number of words are : {props.word}</p>
  </div>
</form>
  )
}
