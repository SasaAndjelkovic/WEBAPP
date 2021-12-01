import React from 'react';

//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';

//Context
import UserProvider from './context';

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
      <UserProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/:moveId' element={<Movie />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </UserProvider>
    </Router>
  );

export default App;