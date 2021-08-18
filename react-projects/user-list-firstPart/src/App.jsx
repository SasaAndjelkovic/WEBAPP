import { Fragment } from 'react';

import { Header } from './components/Header/Header.jsx';
import { List } from './components/List/List.jsx';
import { Footer } from './components/Footer/Footer.jsx';

function App() {
  return (
   <Fragment>
     <Header />
     <List />
     <Footer />
   </Fragment>
  );
}

export default App;
