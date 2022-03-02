import React, { Fragment, useState } from 'react';
import { venueURL } from '../URLs';

function CreateVenue(){
    const [title, setTitle] = useState('');
    const [ratingsAverage, setRatingsAverage] = useState(0);
    const [price, setPrice] = useState(0);
    const [contactNo, setContactNo] = useState(0);
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [cateringPolicy, setCateringPolicy] = useState('');
    const [DJPolicy, setDJPolicy] = useState('');
    const [decorPolicy, setDecorPolicy] = useState('');
    const [refundPolicy, setRefundPolicy] = useState('');
    const [kitchen, setKitchen] = useState('');
    const [parking,setParking] = useState('');
    const [website,setWebsite] = useState('');
    const [photos,setPhotos] = useState('');

    function titleName(e){
        setTitle(e.target.value)
    }
    function venueRatings(e){
        setRatingsAverage(e.target.value)
    }
    function venuePrice(e){
        setPrice(e.target.value)
    }
    function venueContact(e){
        setContactNo(e.target.value)
    }
    function venueCategory(e){
        setCategory(e.target.value)
    }
    function venueLocation(e){
        setLocation(e.target.value)
    }
    function venueDescription(e){
        setDescription(e.target.value)
    }
    function venueCateringPolicy(e){
        setCateringPolicy(e.target.value)
    }
    function venueDJPolicy(e){
        setDJPolicy(e.target.value)
    }
    function venueDecorPolicy(e){
        setDecorPolicy(e.target.value)
    }
    function venueRefundPolicy(e){
        setRefundPolicy(e.target.value)
    }
    function venueKitchen(e){
        setKitchen(e.target.value)
    }
    function venueParking(e){
        setParking(e.target.value)
    }
    function venueWebsite(e){
        setWebsite(e.target.value)
    }
    function venuePhotos(e){
        setPhotos(e.target.value)
    }



    function overlayFunctionOn(){
        document.getElementById("form-overlay").style.display = "block"
    }
    function overlayFunctionOff(){
        document.getElementById("form-overlay").style.display = "none"
    }
    function hideOverlay(){
        document.getElementById("form-overlay").style.display = "none"
        document.getElementById("success").style.display = "block"
    }
    function keepOverlay(){
        document.getElementById("form-overlay").style.display = "none"
        document.getElementById("failed").style.display = "block"
    }

    const SubmitForm = async(e) => {
        e.preventDefault();
        const headers = {
            method:'POST',
            body:JSON.stringify({title, ratingsAverage, price, description, category, contactNo, location,refundPolicy, DJPolicy, cateringPolicy, decorPolicy, parking, kitchen, website, photos}),
            headers: new Headers({
                "Content-Type":"application/json",
            })
        }
        const userData = await fetch(venueURL, headers)
        if(userData.status === 200){ 
            console.log(userData.status)
            return(
                <Fragment>
                    {hideOverlay()}
                </Fragment>
            )
        }
        else{
            console.log(userData.status)
            return(
                <Fragment>
                    {keepOverlay()}
                </Fragment>
            )
        }
    }

    return(
        <section className="adminpanel"> 
        <div id="form-overlay" onClick={overlayFunctionOff}>
                <div className="loader" id="loader">
                    <div className="loader-mini">
                    </div>
                </div>
                <div style={{display:"none"}} id="success">
                    <p style={{color:"green"}}>
                        Success
                    </p>
                </div>                            
                <div style={{display:"none"}} id="failed">
                    <p style={{color:"red"}}>
                        Failed
                    </p>
                </div>
            </div>
        <div className="container">
            <div className="row">        
                <div className="col-lg-12 heading">
                <h1 className="h1-v">Create New Venue<span className="bubble-span">.</span></h1>
                </div>
                <div className="col-lg-3"></div>
                <div className="row">             
                <form className="form-row" onSubmit={SubmitForm}>
                <div className="row"> 
                <div className="col-lg-6">
                     <input className='login-email col-lg-12' name='title' onChange={titleName} placeholder='Title..' type="text" required/>
                     <input className='login-email col-lg-12' name='ratingsAverage' onChange={venueRatings} placeholder='Ratings Average..' type="number" max="5"  required/>
                      <input className='login-email col-lg-12' name='price' onChange={venuePrice} placeholder='Price..' type="number" required/>
                       <input className='login-email col-lg-12' name='contactNo' onChange={venueContact} placeholder='ContactNo..' type="number" max="11" required/>
                       <input className='login-email col-lg-12' name='category' onChange={venueCategory} placeholder='select Category' type="text"  required/>
                        {/* <select name="category" id="cars" className='login-email col-lg-12' onChange={venueCategory} >
                            <option value="volvo">Banquet Halls</option>
                            <option value="saab">Marquees</option>
                            <option value="mercedes">Farmhouses</option>
                        </select> */}
                       <input className='login-email col-lg-12' name='location' onChange={venueLocation} placeholder='Enter Exact Area' type="text" required/>
                       <input className='login-email col-lg-12' name='description' onChange={venueDescription} placeholder='Give Detail Description..' type="text" required/>     
                </div>
                <div className="col-lg-6">
                <input className='login-email col-lg-12' name='cateringPolicy' onChange={venueCateringPolicy} placeholder='Catering Policy..' type="text" required/>
                       <input className='login-email col-lg-12' name='DJPolicy' onChange={venueDJPolicy} placeholder='DJ Policy..' type="text" required/>
                       <input className='login-email col-lg-12' name='decorPolicy' onChange={venueDecorPolicy} placeholder='Decor Policy..' type="textd" required/>
                       <input className='login-email col-lg-12' name='refundPolicy' onChange={venueRefundPolicy} placeholder='Refund Policy..' type="text" required/>
                       <input className='login-email col-lg-12' name='kitchen' onChange={venueKitchen} placeholder='Kitchen..' type="text" required/>
                       <input className='login-email col-lg-12' name='parking' onChange={venueParking} placeholder='Parking Details..' type="text" required/>
                       <input className='login-email col-lg-12' name='website' onChange={venueWebsite} placeholder='Website..' type="url" />
                 </div>           
                 </div>
                 {/* <div className="col-lg-12 v-button">
                 <input type="file" id="myFile" name="filename" onChange={venuePhotos} />
                 </div> */}
                 <button type='submit'  className='create-venue-btn' onClick={overlayFunctionOn}>
                            Create Venue
                </button>
                
                </form>
                </div>
            </div>
            </div>

    </section>
    )
}

export default CreateVenue;