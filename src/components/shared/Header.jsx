import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import Nav from "../Nav";
import logo from "../../assets/the_market_list.png";

const Header = () => {
	const { usuario } = useAuth();

	return (
		<HeadContainer>
			<img src={logo} alt="Logo" />
			{usuario !== null ? (
				<Nav nombreUsuario={usuario.displayName} />
			) : (
				<p>No olvides nunca las compras de tu casa!</p>
			)}
		</HeadContainer>
	);
};

const HeadContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 20px;
	p {
		font-size: 1.5rem;
		font-weight: 600;
		color: #3d4a73;
	}
`;

export default Header;
