import React from "react"
import { Link } from "react-router-dom";


function Projects() {


    const articleCardStyle = {
        
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: 'Arial, Helvetica, sans-serif',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        transition: 'all 300ms',
      };
    
      const cardHoverStyle = {
        transform: 'translateY(-2px)',
        boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
      };


    return <div style={{backgroundColor:"#51E2F5",height:"auto"}}>
        <Link to={"/"} className="btn btn-sm btn-secondary text-white btn-outline-dark">Home</Link>
        <div style={{ display:"flex", alignItems:"center",justifyContent:"center"}}>
        <div className="container mt-5">
            <div className="row">

                <div className="col-5" style={articleCardStyle}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = cardHoverStyle.transform;
                    e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = articleCardStyle.boxShadow;
                  }}
                >
                    <h5 className="card-title">Food Delivery app (Django/React)</h5>
                <div className="card-body text-center">The app is a food delivery management system for multiple restaurants . The app comprises of admin login as well as user login . The admin can add restaurants and their consecutive menu, admin can also delete restaurants as well as individual menu items of the respective restaurants . User can securely login and search for menu item , restaurant name and also with location . user can select menu items upon his/her wish and add them all to cart . Payment is done via cart by using razorpay system . upon succcesfull booking the user is diaplayed a booking confirmation page and an email is sent with the booking details . user can anytime review the booking history and can download it as pdf having qr code </div>
                <a className="float-right" href="#"><i style={{fontSize:"24px", color:"black"}} className="fa">&#xf09b;</i></a>
                </div>

                <div className="col-5 ml-auto" style={articleCardStyle}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = cardHoverStyle.transform;
                    e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = articleCardStyle.boxShadow;
                  }}
                >
                <h5 className="card-title">Movie Ticketing app (Django/React)</h5>
                <div className="card-body text-center">The app is a fully functional Ticketing web application for a theatre. The web app has two interfaces , one is the admin interface where the admin can perform crud operations like Creating Editing Deleting actions and also the admin can assign specific movies to specific dates . with the user interface , there the user will be listed with tha available movies on the respective dates , the user can book any movie upon the desired date . payment is integrated with razorpay upon successfull booking the user will get an email with booking data and the user can download the booking history as pdf having qr code anytime</div>
                <a className="float-right" href="https://github.com/userharikrishnan/ticket_booking"><i style={{fontSize:"24px", color:"black"}} className="fa">&#xf09b;</i></a>
                </div>

            </div>

            <div className="row mt-5">

            <div className="col-5" style={articleCardStyle}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = cardHoverStyle.transform;
                    e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = articleCardStyle.boxShadow;
                  }}
                >
                 <h5 className="card-title">Medical store app (Django)</h5>
                <div className="card-body text-center">The app is a sample project made fully with django for doing simple crud as well as API crud for a medical store.</div>
                <a className="float-right" href="https://github.com/userharikrishnan/Medical_store_Django"><i style={{fontSize:"24px", color:"black"}} className="fa">&#xf09b;</i></a>
                </div>

                <div className="col-5 ml-auto" style={articleCardStyle}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = cardHoverStyle.transform;
                    e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = articleCardStyle.boxShadow;
                  }}
                >
                 <h5 className="card-title">Pharmacy management app (React)</h5>
                <div className="card-body text-center">This is a simple react js frontend app for performing simple crud operations using a provided api url . The project is based on a pharamacy managemnet system.</div>
                <a className="float-right" href="https://github.com/userharikrishnan/Pharmacy_management_React"><i style={{fontSize:"24px", color:"black"}} className="fa">&#xf09b;</i></a>
                </div>

            </div> 

            <div className="row mt-5 mb-4 ">
            <div className="col-12" style={articleCardStyle}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = cardHoverStyle.transform;
                    e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = articleCardStyle.boxShadow;
                  }}
                >
                <h5 className="card-title">MINI PROJECTS</h5>
                <div className="card-body text-center">Mini projects on javascript such as simple calculator , an automatic lottery draw machine , list comprehension , a multiplication table creator.</div>
                <a className="float-right" href="https://github.com/userharikrishnan/Javascript_mini_projects"><i style={{fontSize:"24px", color:"black"}} className="fa">&#xf09b;</i></a>
                </div>
            </div>

        </div>


    </div>
    </div>
}


export default Projects