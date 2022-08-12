import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
import { toast } from "react-toastify";
import { device } from "../../helpers/breakPoints";

const ModalDelete = ({
	openModal,
	setOpenModal,
	delId,
	setDelId,
	borrarProducto,
}) => {
	const handleClose = () => {
		setDelId("");
		setOpenModal(false);
	};

	const handleEliminar = () => {
		borrarProducto(delId).then(() => {
			toast.info("Producto Eliminado");
			setDelId("");
			setOpenModal(false);
		});
	};

	return (
		<>
			{openModal && (
				<ModalBlock>
					<ModalOverlay />
					<ModalContainer>
						<ModalHeader>
							<ModalTitle>Borrar Compra</ModalTitle>
							<ModalClose onClick={() => setOpenModal(false)}>
								<MdOutlineClose style={{ fontSize: "20px" }} />
							</ModalClose>
						</ModalHeader>
						<ModalBody>
							<Mensaje>
								<p>¿Desea eliminar esta compra?</p>
								<div>
									<button type="button" onClick={() => handleClose()}>
										No
									</button>
									<button type="button" onClick={() => handleEliminar()}>
										Si
									</button>
								</div>
							</Mensaje>
						</ModalBody>
					</ModalContainer>
				</ModalBlock>
			)}
		</>
	);
};

const ModalBlock = styled.div`
	align-items: center;
	bottom: 0;
	justify-content: center;
	left: 0;
	overflow: hidden;
	padding: 0.4rem;
	position: fixed;
	right: 0;
	top: 0;
	display: flex;
	opacity: 1;
	z-index: 9999;
`;

const ModalOverlay = styled.a`
	background: rgba(0, 0, 0, 0.65);
	bottom: 0;
	cursor: default;
	display: block;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
`;

const ModalClose = styled.a`
	float: right !important;
	text-decoration: none !important;
	cursor: pointer;
	font-size: 1rem;
`;

const ModalContainer = styled.div`
	width: 100%;
	height: 150px;
	background: #ffffff;
	border-radius: 0.1rem;
	display: flex;
	flex-direction: column;
	padding: 0 0.8rem;
	animation: slide-down 0.2s ease 1;
	z-index: 1;
	box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);

	@media ${device.tablet} {
		width: 350px;
		height: 200px;
	}
`;

const ModalBody = styled.div`
	overflow-y: auto;
	padding: 30px 10px;
	position: relative;
`;

const ModalHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 20px 5px 10px 5px;
`;

const ModalTitle = styled.h4`
	width: 90%;
	text-align: right;
	margin-bottom: 10px;
	border-bottom: 1px solid;
	font-weight: 300;
	text-transform: uppercase;
	color: #f24444;
`;

const Mensaje = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	button {
		width: 80px;
		height: 30px;
		cursor: pointer;
		margin-top: 15px;
		margin-right: 5px;
	}
`;

export default ModalDelete;
