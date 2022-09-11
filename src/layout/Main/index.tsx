import React from 'react';
import MainNavbar from './MainNavbar';

import { Container, ContentContainer } from './styles';

type Props = {
  children: React.ReactNode;
}

const Main: React.FC<Props> = (props) => {
  return (
    <Container>
      <MainNavbar />
      <ContentContainer>
        {props.children}
      </ContentContainer>
    </Container>
  );
}

export default Main;