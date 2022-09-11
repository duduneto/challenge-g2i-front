import React from 'react';
import { Button, Card, Text } from '../../components';
import { useContents } from '../../hooks';
import { useGlobalDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import { 
  Container,
  ContentBox,
  ContentContainer,
  GreetingsContainer,
  CTAContainer,
 } from './styles';

const Home: React.FC = () => {
  const contents = useContents();
  const { setState } = useGlobalDispatch();
  const home = useAppSelector(state => state.global.home);
  // const [value, setValue] = React.useState(false);
  const pressStart = () => {
    setState({ home: new Date().getTime() })
    // setValue(state => !state);
  };

  React.useEffect(() => {
    setState({ navbar: { title: 'Welcome to the Trivia Challenge!' } })
  }, [])

  return (
    <Container>
      <ContentContainer>
        <GreetingsContainer>
          <ContentBox>
            <Text 
            content='You will be presented with 10 True or False questions.'
            size='md-lg'
            />
          </ContentBox>
          <ContentBox>
            <Text content='Can you score 100%?' />
          </ContentBox>
        </GreetingsContainer>
        <CTAContainer>
          <Button>BEGIN</Button>
        </CTAContainer>
      </ContentContainer>
    </Container>
  );
}

export default Home;