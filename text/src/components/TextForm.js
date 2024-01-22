import React from 'react';
import { useState } from 'react';
import propTypes from 'prop-types'
export default function TextForm(props) {

    const [text, setText] = useState("Enter your text");
    
    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleCopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
    const handleLoClick = () => {
        setText(text.toLowerCase())
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div style={{backgroundColor: props.mode==="light"?'white':'#212529',
        color: props.mode==="light"?'black':'white'}}>
            <div className="mb-3">
                <h1>{props.title}</h1>
                <textarea className="form-control"  value={text} id="exampleFormControlTextarea1" rows="5" onChange={handleOnChange} style={{backgroundColor: props.mode==="light"?'white':'#212529',
             color: props.mode==="light"?'black':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1 bg-" onClick={handleUpClick}  >Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}  >Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}  >Copy Text</button>
           
            <h1>Preview</h1>
            <div className="container-primary"  >{text}</div>
            <p>{!text?0:text.split(" ").length} words and {text.length} characters</p>
            <p>{!text?0:0.008 * text.split(" ").length} minutes to read</p>
            

        </div>
    )
}

