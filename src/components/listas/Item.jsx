import styled from "styled-components";
import { FaBan, FaCheck, FaTrash } from "react-icons/fa";

const Item = ({ item, actualizarEstadoSi, actualizarEstadoNo, eliminar }) => {
	return (
		<ItemContainer>
			<span>{item.producto}</span>
			{item.completo ? (
				<FaCheck
					style={{ color: "#267365" }}
					title="¿No lo ha comprado aún?"
					onClick={() => actualizarEstadoNo(item.id)}
				/>
			) : (
				<FaBan
					style={{ color: "#3d4a73" }}
					title="¿Ya compro el producto?"
					onClick={() => actualizarEstadoSi(item.id)}
				/>
			)}
			<FaTrash
				style={{ color: "#F23030" }}
				title="¿Desea eliminar?"
				onClick={() => eliminar(item.id)}
			/>
		</ItemContainer>
	);
};

const ItemContainer = styled.div`
	width: 100%;
	height: 45px;
	padding: 0.3rem;
	margin-bottom: 20px;
	border-bottom: 1px solid gray;
	display: grid;
	grid-template-columns: 4fr 1fr 1fr;
	gap: 5px;
	svg {
		font-size: 18px;
		cursor: pointer;
	}
`;

export default Item;
