import * as React from 'react';
import { Link } from 'gatsby';

const CustomHeader = ({currentPage}) => {

    return (
        <header className='pb-2 text-center'>
            <div>
                <h3 className="float-md-start mb-0 inner">Haoran Wei</h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    <Link className="nav-link" to="/" activeClassName='active'>Home</Link>
                    <Link className="nav-link" to="/resume" activeClassName='active'>Resume</Link>
                    <Link className="nav-link" to="/project" activeClassName='active'>Project</Link>
                </nav>
            </div>
        </header>
    )
}

export default CustomHeader