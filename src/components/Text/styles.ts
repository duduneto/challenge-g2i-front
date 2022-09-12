import styled from 'styled-components';
import { textSizes, TextSizesT } from '../../contents/sizes/text';

type TextCompT = {
  size: keyof TextSizesT;
  padding?: string;
}

export const Container = styled.div<Omit <TextCompT, 'size'>>`
padding: ${({ padding }) => padding || 'none'};
`;

export const TextComp = styled.span<TextCompT>`
  font-size: ${({ size }) => textSizes[size]};
`;
