import React from 'react';
import Trident from '../assets/trident.svg';
import {Header} from './style';

const Application: React.FC = () => <Header>
  This is simples react app
  <Trident style={{width: '2rem'}} />
</Header>;

export default Application;
