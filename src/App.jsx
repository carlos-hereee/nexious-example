import { useContext, useEffect, useState } from "react";
import { Header, Footer } from "nexious-library/@nxs-template";
import { Loading } from "nexious-library/@nxs-organism";
import { AppContext } from "./context/AppContext";

function App({ children }) {
  const {
    updateLocale,
    menu,
    logo,
    appName,
    locale,
    isLoading,
    spanish,
    translation,
  } = useContext(AppContext);
  if (isLoading) {
    return <Loading />;
  }
  // if (locale === "spanish" || locale === "espanol") {
  //   console.log("locale", locale);
  //   return (
  //     <div className="app">
  //       <Header
  //         menu={spanish.menu}
  //         logo={spanish.logo}
  //         setLanguage={(e) => updateLocale(e)}
  //       />
  //       {children}
  //       <Footer appName={appName} />
  //     </div>
  //   );
  // } else
  return (
    <div className="app">
      <Header menu={menu} logo={logo} setLanguage={(e) => updateLocale(e)} />
      {children}
      <Footer appName={appName} />
    </div>
  );
}

export default App;
