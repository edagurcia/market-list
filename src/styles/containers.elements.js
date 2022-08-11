import styled from "styled-components";
import { device } from "../helpers/breakPoints";

const Container = styled.section`
	width: 100%;
	padding: 1rem;

	@media ${device.tablet} {
		width: 400px;
	}
`;

const LinkContainer = styled.div`
	width: 100%;
	padding: 1rem;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	text-align: right;
`;

const GridContainer = styled.div`
	overflow-y: scroll;
	height: 12rem;
	padding: 1rem;
`;

export { Container, LinkContainer, GridContainer };
