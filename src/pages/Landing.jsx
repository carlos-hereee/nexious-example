import { useState } from "react";
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
const Landing = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="card">
        <div>
          <a href="https://vitejs.dev">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};
export default Landing;
