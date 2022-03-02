import React from "react";
import { Link } from 'react-router-dom';

function UpdateVenue(){
    return(
        <section className="adminpanel"> 
        <div className="container">
            <div className="row">        
                <div className="col-lg-12 heading">
                <h1 className="h1-v">Update a Venue<span className="bubble-span">.</span></h1>
                </div>
                <div className="col-lg-3"></div>
                <div className="row">             
                <form className="form-row">
                <div className="row"> 
                <div className="col-lg-6">
                     <input className='login-email col-lg-12' name='title'  placeholder='Title..' type="text" required/>
                     <input className='login-email col-lg-12' name='ratingsAverage'  placeholder='Ratings Average..' type="number" max="5"  required/>
                      <input className='login-email col-lg-12' name='price'  placeholder='Price..' type="number" required/>
                       <input className='login-email col-lg-12' name='contactNo'  placeholder='ContactNo..' type="tel" max="11" required/>
                        <select name="cars" id="cars" className='login-email col-lg-12'>
                            <option value="volvo">Banquet Halls</option>
                            <option value="saab">Marquees</option>
                            <option value="mercedes">Farmhouses</option>
                        </select>
                       <input className='login-email col-lg-12' name='location'  placeholder='Enter Exact Area' type="text" required/>
                       <input className='login-email col-lg-12' name='description'  placeholder='Give Detail Description..' type="text" required/>     
                </div>
                <div className="col-lg-6">
                <input className='login-email col-lg-12' name='cateringPolicy'  placeholder='Catering Policy..' type="text" required/>
                       <input className='login-email col-lg-12' name='DJPolicy'  placeholder='DJ Policy..' type="text" required/>
                       <input className='login-email col-lg-12' name='decorPolicy'  placeholder='Decor Policy..' type="textd" required/>
                       <input className='login-email col-lg-12' name='refundPolicy'  placeholder='Refund Policy..' type="text" required/>
                       <input className='login-email col-lg-12' name='kitchen'  placeholder='Kitchen..' type="text" required/>
                       <input className='login-email col-lg-12' name='parking'  placeholder='Parking Details..' type="text" required/>
                       <input className='login-email col-lg-12' name='webiste'  placeholder='Website..' type="url" />
                 </div>           
                 </div>
                 <div className="col-lg-12 v-button">
                 <input type="file" id="myFile" name="filename" />
                 </div>
                 <button type='submit'  className='create-venue-btn'>
                            Update Venue
                </button>
                
                </form>
                </div>
            </div>
            </div>

    </section>
    )
}

export default UpdateVenue;