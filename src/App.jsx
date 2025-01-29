import { useState } from "react";

import "./assets/styles/App.css";

import PasswordBox from "./components/PasswordBox";
import DisplayFooter from "./components/DisplayFooter";
import DisplayLogo from "./components/DisplayLogo";
import GetOptions from "./components/GetOptions";

function App() {
  // For the checkbox options
  const [options, setOptions] = useState([]);
  const handleOptions = (newOptions) => {
    setOptions(newOptions);
  };

  return (
    <>
      <header>
        <DisplayLogo width="100px" />
        <h1>Password Generator</h1>
      </header>
      <main>
        <section id="options">
          <GetOptions onOptionChange={handleOptions} />
        </section>
        <section id="password">
          <PasswordBox options={options} />
        </section>
      </main>
      <footer>
        <DisplayFooter />
      </footer>
    </>
  );
}

export default App;
