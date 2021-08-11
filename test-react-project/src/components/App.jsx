import { Fragment } from 'react';

import { Header } from './Header/Header.jsx';
import { BlogList } from './BlogList/BlogList.jsx';

import './App.css';

const App = () => {
  return (
    <Fragment>
      <Header />
      <BlogList />
    </Fragment>
  );
}

export default App;
