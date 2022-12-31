import React from 'react';
import {Media} from 'reactstrap';

function Banner(props) {
    return (
        
        // <div id="banner" className="align-items-center bg-img img-fluid img-responsive row">
        //     <Media heading className="ms-5 col-12 col-lg-5">
        //         <h1 id ="banner-header" className="col-2">TANVEER SINGH</h1>
        //         <p>Your friendly neighbourhood React Developer </p>
        //     </Media>
        //     <Media className="ms-6 col-12 col-lg-6 justify-content-center d-flex ">
        //         {/* <Media object src="assets/spidermantransparent.png" alt="spider-man" className="img-fluid"/> */}
           
        //     </Media>
        // </div>

            // <div className="container">
            //     <div className="row align-items-center" id="banner">
            //         <div className="col-12 col-sm-5 p-2 d-flex justify-content-sm-start">
            //             <h1 id="banner-header">TANVEER SINGH</h1>
            //             <p>Your friendly neighbourhood react developer</p>
                        
            //         </div>
            //         <div className="col-12 col-sm-4 p-2 d-flex justify-content-end">
            //             <img className="img-fluid" src="assets/spiderman.jpg" />
            //         </div>
            //     </div>
            // </div> 

            <div className="banner">
                <div className=" color-overlay d-flex flex-column justify-content-center align-items-center">
                    
                    <h1 className="bg-dark" id="banner-header">TANVEER SINGH</h1>
                    
                    <p className="bg-dark">Your friendly neighbourhood React Developer</p>
                   
                    
                </div>
               
            </div>



    )
}

export default Banner;