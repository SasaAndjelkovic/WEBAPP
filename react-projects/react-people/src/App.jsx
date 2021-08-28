import { Fragment } from 'react';

import { Header } from './components/Header,jsx';
import { Body } from './components/Body.jsx';
import { Footer } from '/.components/Footer.jsx';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default App;
