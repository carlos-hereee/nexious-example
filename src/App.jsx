import { useEffect, useState } from "react";
import { Header, Footer } from "nexious-library/@nxs-template";
import data from "./data/example.data.json";

function App({ children }) {
  const [lan, setLan] = useState();

  useEffect(() => {
    if (lan) {
      console.log("lan", lan);
    }
  }, [lan]);
  return (
    <div className="app">
      <Header
        menu={data.menu}
        logo={data.logo}
        title={data.title}
        setLanguage={(e) => setLan(e)}
      />
      {children}
      <Footer title={data.title} />
    </div>
  );
}

export default App;
