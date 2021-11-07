import React from 'react';
//Components
import Header from './components/Header';

//styles
import { GlobalStyle } from './GlobalStyle';

//primer da ne mora da se koristi JSX
//const Star = () => React.createElement ('div, null, 'This is a little star' ) 
// null, zato sto jos uvek nema nijedan props

const App = () => {
  //return Star()
  return (
    <div className="App">
      <Header />
      Start here.
      <GlobalStyle />
    </div>
  );
}

export default App;