import { useContext } from "react";
import CompraContext from "../context/compraProvider";

const useCompras = () => {
	return useContext(CompraContext);
};

export default useCompras;
