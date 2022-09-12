import React from 'react';
import { Button, Text } from '../../components';
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
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const contents = useContents();
  const { setState } = useGlobalDispatch();
  const navigate = useNavigate();

  const home = useAppSelector(state => state.global.home);

  // const [value, setValue] = React.useState(false);
  const pressBegin = () => {
    navigate("/quiz");
  };

  React.useEffect(() => {
    setState({
      key: 'navbar.title',
      value: 'Welcome to the Trivia Challenge!'
    })
  }, [setState]);

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
          <Button onClick={pressBegin} >BEGIN</Button>
        </CTAContainer>
      </ContentContainer>
    </Container>
  );
}

export default Home;