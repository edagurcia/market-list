import styled from "styled-components";

const Footer = () => {
	return (
		<FooterContainer>
			<p>Derechos Reservados &copy; @EDAgurcia {new Date().getFullYear()}</p>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	width: 100%;
	margin-top: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	color: #595959;
`;

export default Footer;
