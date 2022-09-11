import styled from 'styled-components';
import { textSizes, TextSizesT } from '../../contents/sizes/text';

type TextCompT = {
    size: keyof TextSizesT
}

export const Container = styled.div`
  
`;

export const TextComp = styled.span<TextCompT>`
  font-size: ${({size}) => textSizes[size]};
`;
