import React from 'react';
import { useContents } from '../../hooks';
import { useGlobalDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';

const Home: React.FC = () => {
  const contents = useContents();
  const { setState } = useGlobalDispatch();
  const home = useAppSelector(state => state.global.home);
  // const [value, setValue] = React.useState(false);
  const pressStart = () => {
    setState({home: new Date().getTime()})
    // setValue(state => !state);
  };

  return (
    <>
      <h1>Parent</h1>
      <h2>{home}</h2>
      <h1>{contents.content.welcome}</h1>
      <button onClick={pressStart}>Start</button>
    </>
  );
}

export default Home;