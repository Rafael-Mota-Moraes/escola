import { Router } from "react-router-dom";

import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyles";
import Routes from "./routes";
import history from "./services/history";

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
