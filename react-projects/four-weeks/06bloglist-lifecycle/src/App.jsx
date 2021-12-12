import { Fragment } from 'react';

import { Header } from './components/header/Header.jsx';
import { BlogList } from './components/bloglist/Bloglist.jsx';

const App = () => {
  return (
    <Fragment>
      <Header />
      <BlogList />
    </Fragment>
  );
}

export default App;
