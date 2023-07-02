import { useContext } from "react";
import { Header, Footer } from "nexious-library/@nxs-template";
import { Loading } from "nexious-library/@nxs-organism";
import { AppContext } from "./context/AppContext";

function App({ children }) {
  const { updateLocale, menu, logo, appName, isLoading } = useContext(AppContext);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Header menu={menu} logo={logo} setLanguage={(e) => updateLocale(e)} />
      {children}
      <Footer appName={appName} />
    </div>
  );
}

export default App;
