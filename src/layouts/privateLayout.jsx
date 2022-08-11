import { Outlet, Navigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import useAuth from "../hooks/useAuth";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const PrivateLayout = () => {
	const { usuario } = useAuth();

	return (
		<>
			{usuario ? (
				<Main>
					<Header />
					<Outlet />
					<ToastContainer />
					<Footer />
				</Main>
			) : (
				<Navigate to="/" />
			)}
		</>
	);
};

const Main = styled.main`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export default PrivateLayout;
