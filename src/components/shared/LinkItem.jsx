import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkItem = ({ url, title }) => {
	return <RLink to={url}>{title}</RLink>;
};

const RLink = styled(Link)`
	width: 100%;
	margin-bottom: 5px;
	font-weight: 300;
	font-size: 14px;
	color: #3d4a73;

	&:hover {
		color: #030759;
	}
`;

export default LinkItem;
