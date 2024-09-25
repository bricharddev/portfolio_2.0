import ContextoMenuProvider from "./context/Menu";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContextoMenuProvider>
        <Header />
      </ContextoMenuProvider>
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
