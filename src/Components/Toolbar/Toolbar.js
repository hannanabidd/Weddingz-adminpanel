import React from 'react';
import {Link} from 'react-router-dom'
// import Toggle from '../SideDrawer/Toggle';
import './toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <Link to="/">
                <div className="toolbar-logo">
                    <h3>WeddingZ</h3>
                </div>
            </Link>
            <div className="spacer"></div>
            {/* <Toggle click={props.drawerClickHandler} /> */}
            <div className="toolbar-navigation-items">
                <ul>
                    <li>
                        <Link to="/vendors">
                            Vendors
                        </Link>
                    </li>
                    <li>
                        <Link to="/venues">
                            Venues
                        </Link>
                    </li>
                    <li>
                        <Link to="/comparison">
                            Comparison
                        </Link>
                    </li>
                    <li>
                        <Link to="/budgetcalculator">
                            Budget calculator
                        </Link>
                    </li>
                    <li>
                        <Link to="/blogs">
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link to="/faqs">
                            FAQs
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar;