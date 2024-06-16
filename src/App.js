import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import profilepik from "./profilepik.jpg"

function App() {

  return( <div>
   
  
  <div className='container-fluid' style={{backgroundColor:"rgba(100,100,100,1)"}} >
    <div className='row'>
      <div className='col-9'>
              <div className='container'>
                <div className='row'>
                  <div className='col-5'>
                    <img src={profilepik} style={{width:"150px", marginTop:"30px", marginLeft:"30px", borderRadius:"5px"}}/>
                  </div>

                </div>
              </div>

        <div className='row'>
          <div className='col-12 mt-5'>
            <p className='text-white-50'>Passionate Full-Stack Web Developer searching for opportunity to work with new technologies .
              Proficient in Frontend as well as Backend web development . Have skills in Django, ReactJS and
              MySQL . Capable of developing an entire fully functional web app . Looking forward to be in a team
              of professionals who can level up my skills and thereby mutual growth for the firm as well</p>
          </div>
        </div>
    
      </div>


      <div className='col-3 d-flex flex-column justify-content-end '>
            <Navbar />
      </div>


  </div>


    </div>

    <div className='container-fluid'>
      <div className='row mt-4'>
        <div className='col-12'>
          <h3>Contact Info</h3>
          <div className='row'>
            <div className='col-6 mt-4'>
              <p><b>Harichandanam, neduveli,
              konchira P.O. TVM 695615</b></p>
              <b>+91 7025678802 <i className="fa text-success">&#xf232;</i></b><br></br>
              <b>+91 7994754355 <i className="fa text-success">&#xf232;</i></b>
            </div>
            <div className='col-6 d-flex flex-column align-items-center'>
              <a href='https://github.com/userharikrishnan/'><i style={{fontSize:"24px", color:"black"}} className="fa">&#xf09b;</i> Github</a><br></br>
              <a href='https://www.linkedin.com/in/hari-krishnan-s-049615296'><i style={{fontSize:"24px"}} className="fa">&#xf0e1;</i> LinkedIn</a><br></br>
              <a href="#" class="ui-btn ui-btn-outline-none ui-icon-mail ui-btn-icon-left">sharikrishnan421@gmail.com</a>

            </div>
          </div>
        </div>
      </div>
    </div>






    </div>
  )
}

export default App;
