import { useContext, useEffect, useState } from "react";
import { Header, Footer } from "nexious-library/@nxs-template";
import enData from "./data/en-example.data.json";
import esData from "./data/es-example.data.json";
import { AppContext } from "./context/AppContext";

function App({ children }) {
  const { updateLocale, locale } = useContext(AppContext);
  const [data, setData] = useState(enData);

  useEffect(() => {
    if (locale === "english" || locale === "ingles") {
      setData(esData);
    }
    if (locale === "espanol" || locale === "spanish") {
      setData(esData);
    }
  }, [locale]);
  return (
    <div className="app">
      <Header
        menu={data.menu}
        logo={data.logo}
        title={data.title}
        setLanguage={(e) => updateLocale(e)}
      />
      {children}
      <Footer title={data.title} />
    </div>
  );
}

export default App;
