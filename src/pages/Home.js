import React from 'react'
import '../Styles/Home.css'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import '../Styles/Register.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import ControlledCarousel from '../components/ControlledCarousel';
import Sidebar from '../components/Sidebar'
function Home() {
  return (
    <div>
       <Navbar />
       <div className='carousel'>
         {/* <ControlledCarousel />  */}
        <div className='landing'>
        <div className='categories'>
{/* <ul class="list-group align-left"> */}
<ul class="list-group align-left">
<li class="list-group-item d-flex justify-content-between align-items-left  text-decoration: 
 none;
 " >
<Link to="/mobiles">  Mobiles </Link>


</li>
<li class="list-group-item d-flex justify-content-between align-items-left">
<Link to="/computers"> computers</Link>
</li>
<li class="list-group-item d-flex justify-content-between align-items-left">
<Link to="/furniture"> furniture</Link>

 
</li>

<li class="list-group-item d-flex justify-content-between align-items-left">
<Link to="/kitchen"> kitchen</Link>
 
</li>
<li class="list-group-item d-flex justify-content-between align-items-left">
<Link to="/Watches"> Watches</Link>
 
</li>
<li class="list-group-item d-flex justify-content-between align-items-left">
<Link to="/Woman"> Woman Clothing</Link>
 
</li>
<li class="list-group-item d-flex justify-content-between align-items-left">
<Link to="/Men"> Men Clothing</Link>
 
</li>
</ul>
    </div>

        <Products />
        </div>
        </div>
       
    </div>
    
   
  )
}

export default Home