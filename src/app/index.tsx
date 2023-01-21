import React from 'react';
import trident from 'src/assets/trident.svg?url';
import Trident from 'src/assets/trident.svg';
import {Container, Header, Image} from './style';

const Application: React.FC = () => <Container>
  <Header>This is simple react app</Header>
  <br/>
  Svgr: svg as react component:
  <Trident height='1.5rem'/>
  <br/>
  Svgr: svg as url:
  <Image src={trident}/>
</Container>;

export default Application;
