import "./App.css";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./components/Context";
// import { Details } from "./components/Details";
// import { Product } from "./components/Products";

function App() {
  return (
    <ContextProvider>
      <div className="app">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
