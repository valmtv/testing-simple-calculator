import React, { useState } from 'react';

import trident from 'src/assets/trident.svg?url';
import Trident from 'src/assets/trident.svg';
import {Container, Header, Image, Input} from './style';


const Application: React.FC = () => {
  const [inputValue, setInputValue] = useState('enter math sentence');
  const [answer, setAnswer] = useState();
  const inputClick = () => {
    if (inputValue === 'enter math sentence') {
      setInputValue('');
    }
  };
  const handleInput = (e) => setInputValue(e.target.value);
  const handleEnterClick = (e) => {
    if (e.key === 'Enter') {
      try {
        const result = eval(inputValue);
        setInputValue('');
        setAnswer(result.toString());
      } catch(error) {
        setInputValue('');
        setAnswer('Invalid math sequance');
      }
    }
  };
  return  <Container>
    <Header>This is going to be the simpliest calculator</Header>
    <br/>
    Svgr: svg as react component:
    <Trident height='1.5rem'/>
    <br/>
    Svgr: svg as url:
    <Image src={trident}/>
    <Input 
      value={inputValue} 
      onChange={handleInput}
      onClick={inputClick} 
      onKeyDown={handleEnterClick}
    />
    <div>Answer: {answer}</div>
  </Container>;
};
export default Application;
