import data from "./data/example.data.json";
import { Header, Footer } from "nexious-library/@nxs-template";
function App({ children }) {
  return (
    <div className="app">
      <Header menu={data.menu} logo={data.logo} title={data.title} />
      {children}
      <Footer title={data.title} />
    </div>
  );
}

export default App;
