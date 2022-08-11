import styled from "styled-components";

const Mensaje = ({ titulo, tipo }) => {
	return (
		<MensajeInfo
			style={{
				backgroundColor: tipo === "alerta" ? "#F21313" : "#304269",
				color: tipo === "alerta" ? "#ffaeae" : "#91BED4",
			}}
		>
			{titulo}
		</MensajeInfo>
	);
};

const MensajeInfo = styled.h3`
	width: 100%;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
	border-radius: 10px;
`;

export default Mensaje;
