import { useContext, useEffect, useState } from "react";
import { Header, Footer } from "nexious-library/@nxs-template";

import { AppContext } from "./context/AppContext";

function App({ children }) {
  const { updateLocale, locale, translation } = useContext(AppContext);
  console.log("locale", locale);
  return (
    <div className="app">
      <Header
        menu={translation.menu}
        logo={translation.logo}
        title={translation.title}
        setLanguage={(e) => updateLocale(e)}
      />
      {children}
      <Footer title={translation.title} />
    </div>
  );
}

export default App;
