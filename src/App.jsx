// import Header from "./components/Header";
import { Header } from "nexious-library";
import data from "./data/example.data.json";
// import { Header } from "nexious-library";

function App({ children }) {
  return (
    <div className="app">
      <Header
        menu={data.menu}
        data={{ url: data.logo.url, alt: data.logo.alt, title: data.title }}
      />
      {children}
    </div>
  );
}

export default App;
