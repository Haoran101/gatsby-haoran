import * as React from 'react';
import { Link } from 'gatsby';

const CustomHeader = () => {

    return (
        <header>
            <div>
                <h3 className="float-md-start mb-0 inner">Haoran Wei</h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/resume">Resume</Link>
                    <Link className="nav-link" to="/project">Project</Link>
                </nav>
            </div>
        </header>
    )
}

export default CustomHeader