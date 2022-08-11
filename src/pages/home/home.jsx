import { useEffect } from "react";
import { Container, GridContainer } from "../../styles/containers.elements";
import useCompras from "../../hooks/useCompras";
import Mensaje from "../../components/shared/Mensaje";
import FormItem from "../../components/listas/FormItem";
import Spinner from "../../components/shared/Spinner";
import Item from "../../components/listas/Item";

const Home = () => {
	const { list, cargando, obtenerMisLista, cambiarEstado } = useCompras();

	useEffect(() => {
		obtenerMisLista();
	}, []);

	const actualizarEstado = (id) => {
		cambiarEstado(id);
	};

	if (cargando) return <Spinner />;

	return (
		<Container>
			<FormItem />
			<GridContainer>
				{list.length === 0 ? (
					<Mensaje titulo="No hay compras aún" tipo="alerta" />
				) : (
					list.map((item) => (
						<Item
							key={item.id}
							item={item}
							actualizarEstado={actualizarEstado}
						/>
					))
				)}
			</GridContainer>
		</Container>
	);
};

export default Home;
