import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<Outlet />
		</ThemeProvider>
	);
}

export default App;
