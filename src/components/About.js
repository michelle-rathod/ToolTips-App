import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";

export default function About(props) {

    let myStyle = {
        color: props.mode==='light'?'black':'white',
        backgroundColor: props.mode==='light'?'white':'#212529',
        
    }

    let bodyStyle = {
        color: props.mode==='light'?'black':'white',
        backgroundColor: props.mode==='light'?'white':'#373737',
    }

    return (
        <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne" >
      <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      <strong>Analyze Text</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" >
      <div className="accordion-body" style={bodyStyle}>
      ToolTips provides you with a simple and effective way to manipulate your text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body" style={bodyStyle}>
       ToolTips is a free tool that offers character and word counts in real time for a given text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button  style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body" style={bodyStyle}>
      Any online browser, including Chrome, Firefox, Safari, and Opera, can use this tool
      </div>
    </div>
  </div>
</div>
    )
}

