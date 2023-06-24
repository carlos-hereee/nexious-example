import { Footer, Header } from "nexious-library";
import data from "./data/example.data.json";

function App({ children }) {
  return (
    <div className="app">
      <Header menu={data.menu} data={data.logo} title={data.title} />
      {children}
      <Footer title={data.title} />
    </div>
  );
}

export default App;
