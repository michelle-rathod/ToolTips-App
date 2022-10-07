import React, { useState } from 'react'


export default function TextFunc(props) {
    
    function upperFun(){
        let finalText = text.toUpperCase()
        newText(finalText)
        props.showAlert("converted to uppercase","success")
    }

    function lowerFun(){
        let finalText = text.toLowerCase()
        newText(finalText)
        props.showAlert("converted to lowercase","success")
    }

    function clearFun(){
        let finalText = ""
        newText(finalText)
        props.showAlert("text cleared","success")
    }

    function copyFun(){
        navigator.clipboard.writeText(text)
        props.showAlert("text copied to clipboard","success")
    }

    function handleChange(event){
        newText(event.target.value)
    }

    const [text, newText] = useState("");

    return (
        <>
        <div className='container'>
            <div className="mb-1" >
                <h3 style={{color: props.mode==='light'?'black': 'white'}}>Text Formatter</h3>
                <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode==='light'?'white': '#212121', color:props.mode==='light'?'black': 'white'}}  id="exampleFormControlTextarea1" rows="7" placeholder='Enter Text Here'></textarea>
            </div>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-2" onClick={upperFun}>UpperCase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-2" onClick={lowerFun}>LowerCase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-2" onClick={copyFun}>Copy Text</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-2" onClick={clearFun}>Clear Text</button>
        </div>
        <div className='container my-4' style={{color: props.mode==='light'?'black': 'white'}}>
            <h3>Preview</h3>
            <div className='container py-1 my-1' style={{backgroundColor: props.mode==='light'?'white': '#212121', border:'2px solid white'}}>
            <p>{text.length>0?text:'Nothing to preview'}</p>
            </div>
            <h3>Text Summary</h3>
            <div  className='container py-1 my-1' style={{backgroundColor: props.mode==='light'?'white': '#212121', border:'2px solid white'}}>
            <p>{text.split(/\s+/).filter((element)=>{return element!==''}).length} words and {text.length} characters</p>
            </div>
        </div>
        </>
    )
}
