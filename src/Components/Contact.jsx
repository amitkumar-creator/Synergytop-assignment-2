import React, { Component } from 'react'
import contact from '../Components/public/image/contactlogo.png';
import mailme from '../Components/public/image/mailmeimg.png';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
                <h3> <strong>Contact section</strong></h3>
                <h4>Random Text Random text Random text</h4>
                <h4>Email Id: amit.kumar@gmail.com</h4>
                <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=amit.kumar@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
                <h4>Contant Info: 1234567890/2999839902</h4>

                
                
                        <a href="https://www.facebook.com/amit.kumar">
                        <span className="icon fa fa-facebook" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://twitter.com/amit.kumar" >
                                <span className="icon fa fa-twitter"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="https://github.com/amitcreator">
                                <span className="icon fa fa-github" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://www.linkedin.com/in/amit.kumar/amit/">
                                <span className="icon fa fa-linkedin-square"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="https://amitsoft/">
                                <span className="icon fa fa-wordpress" style={{color:'antiquewhite'}}></span>
                        </a>
                
            </section>
        )
    }
}

export default Contact
