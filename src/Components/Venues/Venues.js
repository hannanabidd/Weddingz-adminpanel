import React from 'react';
import { Link } from 'react-router-dom';

function Venues(){
    return(
        <section className="adminpanel"> 
        <div className="container">
            <div className="row">
                
            <div className="col-lg-12">
                <div className="col-lg-12 heading">
                <h1 className="h1-v">Admin Panel<span className="bubble-span">.</span></h1>
                </div>
                <div className="col-lg-12">
                    <div className="options-select">
                <Link to="/allvenues">
                        <div className="view-more-btnn">
                             Show All Venues
                        </div>
                </Link>
                <Link to="/createvenue">
                        <div className="view-more-btn">
                            Create Venue
                        </div>
                </Link>
                </div>
                </div>
                <div className="footer-line"></div>
                <div className="col-lg-12 venue-select">
                    <p className="venue-p">Select Venue from The List</p>
                    <select className="form-control-venue">
                        <option value="grapefruit">Al-Nazir Palace</option>
                        <option value="lime">Mehar Palace</option>
                        <option selected value="coconut">Qasar-e-Noor</option>
                        <option value="mango">Ibrahim Marquee</option>
                    </select>
                </div>

                <div className="col-lg-12">
                    <div className="options-select">
               
                <Link to="/updatevenue">
                        <div className="view-more-btnn">
                            Update Venue
                        </div>
                </Link>
                <Link to="/deletevenue">
                        <div className="view-more-btn">
                            Delete Venue
                        </div>
                </Link>
                </div>
                </div>
                
            </div>
            {/* <div className="col-lg-4"></div> */}
            </div>
        </div>
    </section>
    )
}

export default Venues