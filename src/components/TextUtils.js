import React, { useEffect, useState } from 'react';


export default function TextUtils() {

    const handleLowerCase = () =>{
       let newText = Text.toLocaleLowerCase();
        setText(newText);
    }

    const handleReset= () =>{
        let netText=' ';
        setText(netText);
        let newwords = ' ';
        setwords(newwords);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const removeExtraSpaces = () =>{
        let newText = Text.replace(/ {1,}/g," ");
        newText = newText.trim();
        setText(newText);
    }
    const totalWords = () =>{
        let words = Text.split(' ').length;
        setwords(words);
    }
    const increment = () => {
      setnum(num+1);
      alert("I am clicked");
    }
    function handleCopyText() {
  /* Get the text field */
  var copyText = document.getElementById("textBox");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
} 


    const [words, setwords] =useState(0);
    const [Text, setText] = useState('');
    const [num, setnum] = useState(0);

    useEffect(
    () => {alert("I am Clicked");
    }, [num]);

  return(
      <div className='container my-4'>
  <div className="mb-3">
      <h1 className='text-center'>Welcom to TextUtils</h1>
  <textarea className="form-control" value={Text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
  <button className='btn btn-primary mx-2 my-4' onClick={handleLowerCase}>LowerCase</button>
  <button className='btn btn-success mx-2 my-4' onClick={() => setText(Text.toLocaleUpperCase())}>UpperCase</button>

  <button className='btn btn-success mx-2 my-4' onClick={handleCopyText}>Copy Text</button>
  <button className='btn btn-danger mx-2 my-4' onClick={handleReset}>Reset</button>
  <button className='btn btn-warning mx-2 my-4' onClick={removeExtraSpaces}>removeExtraSpaces</button>
</div>
{/* <h4>There are <span className='badge bg-primary text-white'>{Text.split(' ').length}</span> Words
and <span className='badge bg-primary text-white'>{Text.length}</span> Characters in Your Text.</h4> */}

  <p><button className='btn btn-warning mx-2 my-4' onClick={totalWords}>Total Words</button>
  <span className='badge bg-secondary text-white'>{words}</span></p>

  {/* <p><button className='btn btn-secondary my-2 mx-2' onClick={increment}>increment</button>
  <span className='badge bg-primary text-white'>{num}</span></p> */}

  <button className='btn btn-secondary' 
  onClick={() => {
    setnum(num + 1);
    } }>click me {num}</button>
</div>
  );
}
