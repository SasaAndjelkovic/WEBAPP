import { Fragment } from "react";
import { Header } from './components/Header/Header.jsx';
import { Body } from './components/Body/Body.jsx';
import { Footer } from "./components/Footer/Footers.jsx";


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
