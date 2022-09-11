import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentBox = styled.div`
	width: 100%;
	height: 33%;
	min-height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ContentContainer = styled.div`
	height: 100%;
	width: 70%;
	min-width: 300px;
	display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GreetingsContainer = styled.div`
	height: 70%;
	min-height: 500px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export const CTAContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 2rem 1rem;
`;