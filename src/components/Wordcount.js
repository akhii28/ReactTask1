import { useState,useEffect } from 'react';
import "./Wordcount.css";

export function Wordcount(){
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(()=>{
    const words = text.split(' ');

    let wordCount=0;
    words.forEach((word) => {
      if(word.trim() !== ''){
        wordCount++;
      }
    })
    setWordCount(wordCount);
  });
  return(
    <div>
      <h1 class="text-center"><b>Responsive Paragraph Word<br/>Counter</b></h1>
      <textarea id="text" value={text} onChange={changeHandler} rows={5} cols={30}></textarea>
      <br/>
      <br/>
      <p style={{marginLeft:"20px"}}>
        Word Count: {wordCount}
      </p>
    </div>
  )
}