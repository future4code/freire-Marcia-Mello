// Router
import Router from './routes/Router';

// constants
import theme from './constants/theme';

// styles
import { GlobalStyle } from './global/globalstyle';

// material-ui
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
