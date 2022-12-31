import React, { Component } from 'react';
import {Card} from 'reactstrap';


function RenderTestimonial({test}) {
    return (
        <blockquote className="blockquote text-center ">
            <p>{test.testimonial}</p>
            <footer className="blockquote-footer">{test.author}</footer>
        </blockquote>
    );

}

const Testimonials = (props) => {

    const testimonials = props.testimonials.map((testimonial) => {
        return (
            <div key={testimonial.id} className="col-5 col-md-3">
                <RenderTestimonial test={testimonial} />
            </div>
        );
    });

        return(
            <div id="testimonials">
                <h2 className="m-4 text-center"><u>Daily-Bugle Testimonials</u></h2>
                
                <div className="container">
                    <div className="row row-content justify-content-center">
                        
                        {testimonials}
                    
                    </div>
                </div>
                 
            </div>
        );
}

export default Testimonials;