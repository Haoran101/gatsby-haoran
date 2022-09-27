import * as React from 'react';
import { Link } from 'gatsby';

const name = "Haoran Wei";
const navPath = [
    { text: "Home", path: "/" },
    { text: "Resume", path: "/resume" },
    { text: "Project", path: "/project" },
    { text: "Contact", path: "/#contact" }
];

const CustomHeader = () => {

    return (
        <header>
            <div>
                <h3 className="float-md-start mb-0 inner">Haoran Wei</h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/">Resume</Link>
                    <Link className="nav-link" to="/">Project</Link>
                </nav>
            </div>
        </header>
    )
}

export default CustomHeader