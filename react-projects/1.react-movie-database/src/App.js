import React from 'react';

//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

//styles


import { GlobalStyle } from './GlobalStyle';

//primer da ne mora da se koristi JSX
//const Star = () => React.createElement ('div, null, 'This is a little star' ) 
// null, zato sto jos uvek nema nijedan props
/*const App = () => (  
  //return Star()
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );*/

const App = () => (  
    <Router> 
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:moveId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );


export default App;