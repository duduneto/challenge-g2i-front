import styled from 'styled-components';
import { navbarSizes } from '../../../contents/sizes/navbar'

export const Container = styled.div`
	height: ${navbarSizes.height};
	width: 100%;
	box-shadow: 0px 0px 14px -1px #0000001a;

	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const Title = styled.h1`
	margin: 0px;
`;
