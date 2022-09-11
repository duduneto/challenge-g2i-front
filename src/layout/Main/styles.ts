import styled from 'styled-components';
import { navbarSizes } from '../../contents/sizes/navbar';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const ContentContainer = styled.div`
  height: calc(100% - ${navbarSizes.height});
  width: 100%;
`;
