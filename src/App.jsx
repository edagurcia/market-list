import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authProvider";
import { CompraProvider } from "./context/compraProvider";
import PublicLayout from "./layouts/publicLayout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Password from "./pages/auth/password";
import PrivateLayout from "./layouts/privateLayout";
import Home from "./pages/home/home";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<CompraProvider>
					<Routes>
						<Route path="/" element={<PublicLayout />}>
							<Route index element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route path="/password" element={<Password />} />
						</Route>
						<Route path="/app" element={<PrivateLayout />}>
							<Route index element={<Home />} />
						</Route>
					</Routes>
				</CompraProvider>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
