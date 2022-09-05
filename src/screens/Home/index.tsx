import React from 'react';
import { useContents } from '../../hooks';

const Home: React.FC = () => {
    const contents = useContents();
  return (
    <>
        <h1>Wlecom</h1>
        <h1>{contents.content.welcome}</h1>
    </>
  );
}

export default Home;