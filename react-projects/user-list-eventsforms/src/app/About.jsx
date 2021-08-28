import React, { Fragment } from "react";
import AboutContent from '../components/AboutContent.jsx';
import { Header }from "../components/Header.jsx";
import { Footer } from '../components/Footer.jsx';


const About = (props) => {
    return (
        <Fragment>
            <Header />
            <AboutContent title={props.match.params.title} />
            <Footer />
        </Fragment>
    )
}

export default About;