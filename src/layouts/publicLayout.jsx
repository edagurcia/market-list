import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";

const PublicLayout = () => {
	return (
		<Main>
			<Outlet />
			<ToastContainer />
		</Main>
	);
};

const Main = styled.main`
	width: 100vw;
	height: 100vh;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export default PublicLayout;
