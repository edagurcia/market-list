import styled from "styled-components";
import { FaBan, FaCheck, FaTrash } from "react-icons/fa";

const Item = ({ item, actualizarEstado }) => {
	return (
		<ItemContainer>
			<span>{item.producto}</span>
			{item.completo ? (
				<FaCheck
					style={{ color: "#267365" }}
					title="¿No lo ha comprado aún?"
					onClick={() => actualizarEstado(item.id)}
				/>
			) : (
				<FaBan
					style={{ color: "#3d4a73" }}
					title="¿Ya compro el producto?"
					onClick={() => actualizarEstado(item.id)}
				/>
			)}
			<FaTrash style={{ color: "#F23030" }} title="¿Desea eliminar?" />
		</ItemContainer>
	);
};

const ItemContainer = styled.div`
	width: 100%;
	height: 30px;
	padding: 0.3rem;
	margin-bottom: 20px;
	display: grid;
	grid-template-columns: 4fr 1fr 1fr;
	gap: 5px;
	svg {
		font-size: 18px;
		cursor: pointer;
	}
	border-radius: 10px;
	background: #ddd;
	box-shadow: 5px 5px 10px #3d4a73, -5px -5px 10px #ffffff;
`;

export default Item;
