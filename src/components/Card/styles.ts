import styled from 'styled-components';

type CardBoxT = {
	maxWidth?: string;
}

export const Container = styled.div`
  width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	padding: 2em;
`;

export const CardBox = styled.div<CardBoxT>`
	height: 100%;
	width: ${({maxWidth}) => maxWidth || '100%'};
  border: 1px solid #797979;
`;
