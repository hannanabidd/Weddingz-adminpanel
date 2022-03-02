import React from 'react';
import { Link } from 'react-router-dom';

function AdminMain(){
    return(
        <section className="adminpanel"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <h1 className="admin-h1">Admin Panel<span className="bubble-span">.</span></h1>
                    <p className="admin-p">Choose any of the following</p>
                    <Link to="/adminpanel/venues">
                            <div className="view-more-btn">
                                Venues
                            </div>
                    </Link>
                    <Link to="/adminpanel/vendors">
                            <div className="view-more-btn">
                                Vendors
                            </div>
                    </Link>
                
                </div>
                <div className="col-lg-4"></div>
                </div>
            </div>
        </section>
    )
}

export default AdminMain;