import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;
