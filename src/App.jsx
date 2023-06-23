import { useState } from "react";
import Header from "./components/Header";
import data from "./data/example.data.json";

function App({ children }) {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      {/* <div>
        <a href="https://vitejs.dev" >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <Header data={data} />
      {children}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
