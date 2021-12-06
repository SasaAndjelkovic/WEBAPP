import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

const NotFound = () => {
    return (
        <Fragment>
            <Header title="React Users" showNav={false} />
            <div>
                <h1>Page not found</h1>
                <Link to="/home">Return to home</Link>
            </div>
            <Footer />
        </Fragment>
    )
}

export default NotFound;