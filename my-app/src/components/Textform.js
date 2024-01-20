import React,{useState} from 'react'



export default function Textform(props) {
     



  const handleUpClick =()=>{
    if(text.length==0)
      props.showAlert("Please enter text","warning")
  
    else
    {
      let newText=text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase","success")}
      
  }
  const handleLowClick =()=>{
    if(text.length==0)
      props.showAlert("Please enter text","warning")
  
    else
    {
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success")
  }}
  const handleClearClick =()=>{
    if(text.length==0)
      props.showAlert("Please enter text","warning")
  
    else
    {
    let newText="";
    setText(newText);
    props.showAlert("Cleared textbox","success")
  }}
  
  const handleCopy=()=>{
    //var text=document.querySelector("#exampleFormControlTextarea1")
    //text.select();
    if(text.length==0)
      props.showAlert("Please enter text","warning")
  
    else
    {
    navigator.clipboard.writeText(text)
    props.showAlert("Copied to clipboard!","success")}
  }

 const handleExtraSpaces=()=>{
  if(text.length==0)
      props.showAlert("Please enter text","warning")
  
    else
    {
  let newText=text.split(/[ ]+/)
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed","success")}
 }

  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const [text,setText]=useState('');
  return (
    <>
  <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>{props.heading}</h1>
     <div className="mb-3">
          <textarea className="form-control" value={text}  onChange={handleOnChange}  id="exampleFormControlTextarea1 " style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black',caretColor:props.mode==='dark'?'white':'black' }} rows="6"></textarea>
    </div>
    <button className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove extra spaces </button>
    
  </div>
  <div className="contianer my-2"style={{color:props.mode==='dark'?'white':'black'}} >
       <h1>Your text summary</h1>
       <p> {text.split(" ").length-1}  words and {text.length} number of characters</p>
  </div>

  <div className="container my-1" style={{color:props.mode==='dark'?'white':'black'}} >
    <h3>Preview</h3>
    <p>{text.length>0?text:'enter your text to preview'}</p>
  </div>
  </>
  )
}
