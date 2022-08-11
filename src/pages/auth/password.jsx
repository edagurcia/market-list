import { useState } from "react";
import { toast } from "react-toastify";
import { Group, BtnPrimary } from "../../styles/form.elements";
import { Container, LinkContainer } from "../../styles/containers.elements";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import LinkItem from "../../components/shared/LinkItem";

const Password = () => {
	const [userInfo, setUserInfo] = useState({
		email: "",
	});

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
	};
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
				<BtnPrimary type="submit">Envíar Instrucciones</BtnPrimary>
			</form>
			<LinkContainer>
				<LinkItem url="/" title="¿Ya tiene una cuenta? ingrese ahora" />
				<LinkItem
					url="/register"
					title="¿No tiene una cuenta? registre gratis la suya"
				/>
			</LinkContainer>
			<Footer />
		</Container>
	);
};

export default Password;
