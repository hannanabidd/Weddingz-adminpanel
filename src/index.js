import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Toolbar from './Components/Toolbar/Toolbar';
import AdminMain from './Components/Admin/AdminMain'
import VenueMain from './Components/Venues/VenueMain'
import CreateVenue from './Components/Venues/CreateVenue'
import UpdateVenue from './Components/Venues/UpdateVenue'


const App = () =>{

    return (
        <BrowserRouter>
            <Toolbar/>
            <Routes>
                    {/* <Route path="/" element={<HomeMain/>} /> */}
                    <Route path="/adminpanel" exact element={<AdminMain/>} />
                    <Route path='adminpanel/venues' exact element={<VenueMain/>} /> 
                    <Route path='createvenue' exact element={<CreateVenue/>} /> 
                    <Route path='updatevenue' exact element={<UpdateVenue/>} /> 
                    
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />,document.querySelector('#root'));