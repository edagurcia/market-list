import { useState, createContext, useEffect } from "react";
import {
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	sendPasswordResetEmail,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/utils";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	// estado de autenticacion
	const [usuario, setUsuario] = useState(null);
	const [cargando, setCargando] = useState(true);

	useEffect(() => {
		const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
			setUsuario(currentUser);
			setCargando(false);
		});

		return () => unsuscribe();
	}, []);

	const registrar = (displayName, email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				updateProfile(auth.currentUser, { displayName: displayName });
			})
			.catch((error) => {
				const errorCode = error.code;
				console.log(error.code);
				if (errorCode === "auth/email-already-in-use") {
					toast.error("Ya existe un usuario con esta cuenta de correo");
				}
				if (errorCode === "auth/weak-password") {
					toast.error("La contraseña debe ser de almenos 6 caracteres");
				}
			});
	};

	const login = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {})
			.catch((error) => {
				const errorCode = error.code;
				if (errorCode === "auth/user-not-found") {
					toast.error(
						"No encontramos un usuario con su correo electrónico, por favor registre su cuenta."
					);
				} else if (errorCode === "auth/wrong-password") {
					toast.error("Credenciales no validas, por favor intentelo de nuevo.");
				} else {
					toast.error("Ocurrio un error.");
				}
			});
	};

	const resetPassword = (email) => {
		sendPasswordResetEmail(auth, email)
			.then(() => {
				toast.info(
					"Se envío un correo electrónico con las instrucciones para restaurar su contraseña"
				);
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	const logout = () => {
		signOut(auth).then(() => {
			setUsuario(null);
		});
	};

	return (
		<AuthContext.Provider
			value={{
				usuario,
				cargando,
				registrar,
				login,
				logout,
				resetPassword,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider };
export default AuthContext;
