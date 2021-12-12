import React from "react";

import { Header } from './components/header/header.jsx';

const App = () => {
  return (
    <React.Fragment>
    <Header poruka = {'zdravo again'}  />
      {/* <h1>Cao zdravo u head-u zbog props (bez props postojim ali sam nevidljiv)</h1> */}
    {/* </Header> */}
    <div>
      <header>
        <p>Zdravo cao van head-a, ne treba props</p>
      </header>
    </div>
  
    </React.Fragment>
  );
}

export default App;
