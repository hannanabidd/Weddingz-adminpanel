import React from 'react';
import {Link} from 'react-router-dom';
import './sidedrawer.css';


const sideDrawer = props => {
    let drawerClasses = ['side-drawer']
    if(props.show){
        drawerClasses = ['side-drawer open']
    }

    return(
        <nav className={drawerClasses} onClick={props.drawerClickHandler}>
            <ul>
                <li>
                    WeddingZ
                </li>
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
        </nav>
    )
}

export default sideDrawer;