import Router from "./router/routes";
import { MainContainer, GlobalStyle } from "./global/globalStyles";
import { GameProvider } from "./context";

function App() {
	return (
		<GameProvider>
			<MainContainer>
				<GlobalStyle />
				<Router />
			</MainContainer>
		</GameProvider>
	);
}

export default App;
