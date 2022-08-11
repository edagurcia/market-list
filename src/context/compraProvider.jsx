import { useState, useEffect, createContext } from "react";
import {
	getFirestore,
	query,
	where,
	collection,
	onSnapshot,
	addDoc,
	Timestamp,
	updateDoc,
	doc,
} from "firebase/firestore";
import { auth, app } from "../firebase/utils";

const CompraContext = createContext();

const CompraProvider = ({ children }) => {
	const [list, setList] = useState([]);
	const [cargando, setCargando] = useState(true);
	const [guardado, setGuardado] = useState(false);
	const db = getFirestore(app);

	const listRef = collection(db, "listas");

	const obtenerMisLista = () => {
		const q = query(
			listRef,
			where("usuario", "==", auth.currentUser.uid.toString())
		);
		const querySnapshot = onSnapshot(q);
		const docs = [];
		querySnapshot.forEach((doc) => {
			docs.push({
				...doc.data(),
				id: doc.id,
			});
		});
		setList(docs);
		setCargando(false);
	};

	const agregarCompra = async (producto) => {
		const docData = {
			producto: producto,
			creado: Timestamp.fromDate(new Date()),
			completo: false,
			usuario: auth.currentUser.uid,
		};

		await addDoc(collection(db, "listas"), docData);
		setGuardado(true);
	};

	const cambiarEstado = async (id) => {
		await updateDoc(
			doc(db, "listas", id, {
				completo: !completo,
			})
		);
	};

	return (
		<CompraContext.Provider
			value={{
				list,
				cargando,
				guardado,
				setGuardado,
				obtenerMisLista,
				agregarCompra,
				cambiarEstado,
			}}
		>
			{children}
		</CompraContext.Provider>
	);
};

export { CompraProvider };
export default CompraContext;
