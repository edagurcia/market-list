import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaList, FaPowerOff } from "react-icons/fa";
import { device } from "../helpers/breakPoints";
import useAuth from "../hooks/useAuth";

const Nav = ({ nombreUsuario }) => {
	const { logout } = useAuth();

	return (
		<NavBar>
			<span>Bienvenido, {nombreUsuario}</span>
			<Options>
				<FaPowerOff
					title="Cerrar Sesión"
					className="logout"
					onClick={() => logout()}
				/>
			</Options>
		</NavBar>
	);
};

const NavBar = styled.nav`
	width: 100%;
	height: 40px;
	padding: 0.5rem;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	background-color: #ddd;

	span {
		width: 60%;
		font-size: 1rem;
		color: #3d4a73;
	}

	@media ${device.tablet} {
		width: 350px;
	}
`;

const Options = styled.div`
	width: 40%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	svg {
		font-size: 20px;
		color: #3d4a73;
		&:hover {
			color: #030759;
		}
	}

	.logout {
		color: #d94e4e;

		&:hover {
			cursor: pointer;
			color: #d92929;
		}
	}

	&:disabled {
		background-color: #d9d9d9;
		color: #f2f2f2;
		cursor: default;
	}
`;

export default Nav;
