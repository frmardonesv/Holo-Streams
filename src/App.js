import { ThemeProvider } from "styled-components";
import { theme } from "./assetss/styles/themes";
import RouterApp from "./router/RouterApp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
