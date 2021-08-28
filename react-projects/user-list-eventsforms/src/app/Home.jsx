import React from "react";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";
import Body from "./components/Users/users";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

export default Home;