import { useState } from "react";
import { Container, GridContainer } from "../../styles/containers.elements";
import useCompras from "../../hooks/useCompras";
import Mensaje from "../../components/shared/Mensaje";
import FormItem from "../../components/listas/FormItem";
import Spinner from "../../components/shared/Spinner";
import Item from "../../components/listas/Item";
import ModalDelete from "../../components/listas/ModalDelete";

const Home = () => {
	const [openModal, setOpenModal] = useState(false);
	const [delId, setDelId] = useState("");
	const { list, cargando, completado, noCompletado, borrarProducto } =
		useCompras();

	const actualizarEstadoSi = (id) => {
		completado(id);
	};

	const actualizarEstadoNo = (id) => {
		noCompletado(id);
	};

	const eliminar = (id) => {
		setDelId(id);
		setOpenModal(true);
	};

	if (cargando) return <Spinner />;

	return (
		<Container>
			<FormItem />
			<GridContainer>
				{list.length === 0 ? (
					<Mensaje titulo="No hay compras registradas aún" tipo="alerta" />
				) : (
					list !== null &&
					list.map((item) => (
						<Item
							key={item.id}
							item={item}
							actualizarEstadoSi={actualizarEstadoSi}
							actualizarEstadoNo={actualizarEstadoNo}
							eliminar={eliminar}
							setOpenModal={setOpenModal}
							setDelId={setDelId}
						/>
					))
				)}
			</GridContainer>
			<ModalDelete
				openModal={openModal}
				setOpenModal={setOpenModal}
				delId={delId}
				setDelId={setDelId}
				borrarProducto={borrarProducto}
			/>
		</Container>
	);
};

export default Home;
