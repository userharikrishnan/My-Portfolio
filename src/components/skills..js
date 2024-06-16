import React from "react";
import { Link } from "react-router-dom";

function Skills() {
    return (
        <div>
            <Link to={"/"} className="btn btn-sm btn-secondary text-white btn-outline-dark">Home</Link>

            <div className="container" style={{height:"91vh"}}>
                <div className="row justify-content-between">
                    <div className="col d-flex justify-content-center">
                        <i style={{fontSize:"110px"}} className="devicon-html5-plain-wordmark text-danger"></i>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <i style={{fontSize:"110px"}} className="devicon-css3-plain-wordmark text-info"></i>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <i style={{fontSize:"110px", color:"DarkBlue"}} className="devicon-bootstrap-plain-wordmark"></i>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <i style={{fontSize:"110px"}} className="devicon-javascript-plain text-warning"></i>
                    </div>
                </div>


                <div className="row justify-content-between mt-5">
                    <div className="col d-flex justify-content-center">
                        <i style={{fontSize:"110px"}} className="devicon-mysql-plain-wordmark"></i>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <i style={{fontSize:"110px"}} className="devicon-python-plain-wordmark"></i>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <i style={{fontSize:"110px"}} className="devicon-django-plain-wordmark"></i>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <i style={{fontSize:"110px"}} className="devicon-react-original-wordmark text-primary"></i>
                    </div>
                </div>

                <div className="row justify-content-between mt-5">
                    <div className="col d-flex justify-content-center">
                        <i style={{fontSize:"110px"}} className="devicon-tailwindcss-plain text-info"></i>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <i style={{fontSize:"110px"}} className="devicon-github-original-wordmark"></i>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <i style={{fontSize:"110px"}} className="devicon-git-plain-wordmark"></i>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <i style={{fontSize:"110px",color:"orangered"}} className="devicon-firebase-plain-wordmark"></i>
                    </div>
                </div>

                <div className="row justify-content-between mt-5">
                    <div className="col d-flex justify-content-center">
                        <i style={{fontSize:"110px"}} className="devicon-vscode-plain text-primary"></i>
                    </div>
                    
                </div>
                <div className="row mt-4 card" style={{border:"1px solid black"}}>
                    <div className="col-12 d-flex justify-content-center">
                        <p><b>
                           JSON , REST , API , REDUX , POSTMAN , SUBLIME TEXT , AXIOS , JSX , DJANGO REST FRAMEWORK , FIREBASE , phpMyAdmin

                            
                        </b></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
