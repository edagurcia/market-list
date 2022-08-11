import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Group, BtnPrimary } from "../../styles/form.elements";
import { Container, LinkContainer } from "../../styles/containers.elements";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import LinkItem from "../../components/shared/LinkItem";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../components/shared/Spinner";

const Login = () => {
	const [userInfo, setUserInfo] = useState({
		email: "",
		password: "",
	});

	const { usuario, cargando, login } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (usuario !== null) {
			navigate("/app");
		}
	}, [usuario]);

	const handleChange = (e) => {
		setUserInfo({
			...userInfo,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (userInfo.email.trim() === "" || userInfo.password.trim() === "") {
			toast.error("Sus credenciales son obligatorias");
			return;
		}

		login(userInfo.email, userInfo.password);
	};

	if (cargando) return <Spinner />;

	return (
		<Container>
			<Header />
			<form onSubmit={handleSubmit}>
				<Group>
					<label htmlFor="email">Correo Electrónico: </label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Eje: correo@servicio.com"
						autoComplete="off"
						value={userInfo.email}
						onChange={handleChange}
					/>
				</Group>
				<Group>
					<label htmlFor="password">Contraseña:</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Su Contraseña..."
						autoComplete="off"
						value={userInfo.password}
						onChange={handleChange}
					/>
				</Group>
				<BtnPrimary type="submit">Ingresar</BtnPrimary>
			</form>
			<LinkContainer>
				<LinkItem
					url="/register"
					title="¿No tiene una cuenta? registre gratis la suya"
				/>
				<LinkItem
					url="/password"
					title="¿Olvido su contraseña? siga estos pasos"
				/>
			</LinkContainer>
			<Footer />
		</Container>
	);
};

export default Login;
