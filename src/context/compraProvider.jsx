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
	deleteDoc,
} from "firebase/firestore";
import { auth, app } from "../firebase/utils";
import useAuth from "../hooks/useAuth";

const CompraContext = createContext();

const CompraProvider = ({ children }) => {
	const [list, setList] = useState([]);
	const [cargando, setCargando] = useState(true);
	const [guardado, setGuardado] = useState(false);
	const db = getFirestore(app);

	const listRef = collection(db, "listas");
	const { usuario } = useAuth();

	useEffect(() => {
		const obtenerMisLista = () => {
			const q = query(listRef, where("usuario", "==", usuario.uid));
			onSnapshot(q, (querySnapshot) => {
				const docs = [];
				querySnapshot.forEach((doc) => {
					docs.push({
						id: doc.id,
						...doc.data(),
					});
				});
				setList(docs);
				setCargando(false);
			});
		};
		if (usuario !== null) {
			obtenerMisLista();
		}
	}, [usuario]);

	const agregarCompra = async (formData) => {
		const docData = {
			producto: formData.producto,
			creado: Timestamp.fromDate(new Date()),
			completo: false,
			usuario: formData.usuario,
		};

		await addDoc(collection(db, "listas"), docData);
		setGuardado(true);
	};

	const completado = async (id) => {
		const docRef = doc(db, "listas", id);
		await updateDoc(docRef, {
			completo: true,
		});
	};

	const noCompletado = async (id) => {
		const docRef = doc(db, "listas", id);
		await updateDoc(docRef, {
			completo: false,
		});
	};

	const borrarProducto = async (id) => {
		const docRef = doc(db, "listas", id);
		await deleteDoc(docRef);
	};

	return (
		<CompraContext.Provider
			value={{
				list,
				cargando,
				guardado,
				setGuardado,
				agregarCompra,
				completado,
				noCompletado,
				borrarProducto,
			}}
		>
			{children}
		</CompraContext.Provider>
	);
};

export { CompraProvider };
export default CompraContext;
