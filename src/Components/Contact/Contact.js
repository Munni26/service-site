import React from 'react';
import Footer from '../Footer/Footer';
import ContactHeader from './ContactHeader/ContactHeader';

const Contact = () => {
    return (
        <div>
            <ContactHeader />
            <hr />

            <div className="container">
                <form action="#">
                    <h2>Get in touch</h2>
                    <textarea row="4" col="15" placeholder="Enter Message" />
                    <br />
                    <input type="text" name="" placeholder="Enter name" />
                    <br />
                    <input type="email" name="" placeholder="Enter email" />
                    <br />
                    <input type="text" name="" placeholder="Enter subject" />
                    <br />
                    <input type="submit" name="submit" value="Submit" />
                </form>
            </div>
            <br />
            <Footer />
        </div>

    );
};

export default Contact;