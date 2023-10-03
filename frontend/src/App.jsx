import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyles";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
