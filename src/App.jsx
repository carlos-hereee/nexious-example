import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import { BackButton, Capitalize, Heading, Logo } from "nexious-library";
import Header from "./component/Header";

import data from "./data/example.data.json";

const App = () => {
  // const [count, setCount] = useState(add(2, 5) ? add(2, 5) : 0);
  let count = 0;
  let name = ["vite", "+", "react"];
  let buttons = [2, 5];

  /**
   * NOTICE: 
   * mapping through the components displays the react element 
   *
   *  const cap = name.map((n) => <Capitalize data={n} />);
   * 
   * {
   *    $$typeof:Symbol(react.element), 
   *    key:null
   *    props:{data: 'vite'}
   *    ref:null
   *    ...rest
   * }
   * 
   * This is the react element to be invoked 

   */

  const handleCount = () => {
    setCount(() => count + 1);
  };
  return (
    <div className="app">
      {/* <header className="flex-g">
        <h1>
          {name.map((i) => (
            <Capitalize data={i} key={i} />
          ))}
        </h1>
        <Logo data={{ name: "industry-brand", url: reactLogo }} />
      </header> */}
      <Header data={data} />
      <Heading data="Links" />

      <div className="hero flex-g">
        <div>
          <p className="icon-label">Vite</p>
          {/* <a href="#vite" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a> */}
        </div>
        <div>
          <p>React</p>
          <a href="#react" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>
      {/* <button onClick={() => history.back()}>Back</button> */}
      <BackButton>Back</BackButton>

      <div className="card">
        {/* <Button data={count} click={handleCount} /> */}

        {/* {buttons.map((b) => (
          // <Button data={b} key={b} />
        ))} */}
        <button onClick={handleCount}>count is {count}</button>
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

export default App;
