import { useState, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { Group } from "../../styles/form.elements";
import useCompras from "../../hooks/useCompras";

const FormItem = () => {
	const [producto, setProducto] = useState("");
	const { agregarCompra, guardado, setGuardado } = useCompras();

	useEffect(() => {
		if (guardado) {
			setGuardado(false);
			setProducto("");
			toast.success("Producto agregado con exito");
		}
	}, [guardado]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (producto.trim() === "") {
			toast.error("Por favor escriba un producto para compra");
			return;
		}

		agregarCompra(producto);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Group>
				<label htmlFor="item">Producto: </label>
				<input
					type="text"
					id="item"
					name="item"
					placeholder="¿Qué hace falta en casa?"
					autoComplete="on"
					maxLength={50}
					value={producto}
					onChange={(e) => setProducto(e.target.value)}
				/>
			</Group>
			<BtnAdd type="submit">
				<FaPlus />
			</BtnAdd>
		</Form>
	);
};

const Form = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
	gap: 10px;
`;

const BtnAdd = styled.button`
	width: 40px;
	height: 40px;
	padding: 10px;
	font-size: 20px;
	border: none;
	border-radius: 10px;
	background-color: #3d4a73;
	color: #d9d9d9;

	&:hover {
		cursor: pointer;
		background-color: #030759;
		color: #f2f2f2;
	}
`;

export default FormItem;
