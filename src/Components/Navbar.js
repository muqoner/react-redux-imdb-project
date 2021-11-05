import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand navbar-dark bg-primary" >
                    <div className="container">
                        <a href="/" className="navbar-brand"><i className="fab fa-imdb fa-lg px-2"></i>IMDB</a>
                        <ul className="navbar-nav">
                            <li  className="nav-item">
                                <Link to="/comingsoon" className="nav-link">Coming Soon</Link>
                            </li>
                            <li  className="nav-item">
                                <Link to="/top250" className="nav-link">Top 250</Link>
                            </li>
                            <li  className="nav-item">
                                <Link to="/boxoffice" className="nav-link">Box Office</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar
