import React from 'react';
import { Button, Card, Text } from '../../../components';

import { 
  Container, 
  ContentBox,
  ButtonBox,
} from './styles';

const Question: React.FC = () => {
  return (
    <Container>
      <Card>
        <ContentBox>
          <Text content='question'></Text>
        </ContentBox>
      </Card>
      <ButtonBox>
        <Button width='48%' >False</Button>
        <Button width='48%'>True</Button>
      </ButtonBox>
    </Container>
  );
}

export default Question;