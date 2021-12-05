import { Fragment } from 'react';

import { Header } from './Header/Header.jsx';
import { BlogList } from './BlogList/BlogList.jsx';
import Star from './Star/Star.jsx';


const App = () => {
  return (
    <Fragment>
      <Header />
      <BlogList />
      <Star />
    </Fragment>
  );
}

export default App;
