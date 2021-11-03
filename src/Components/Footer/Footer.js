import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section>
            <div className="bg-secondary text-light p-3 " style={{ textAlign: 'center' }}>
                <p><Link to="/privacy-policy" style={{ color: 'yellow' }}>Privacy Policy</Link> |<Link to="/refund-policy" style={{ color: 'yellow' }}> Refund Policy</Link>  | <Link to="/terms-and-condition" style={{ color: 'yellow' }}>Terms And Conditions</Link> | <Link to="/log-in" style={{ color: 'yellow' }}>Your Account</Link></p>
                <p>Copyright ©2021 All rights reserved<br /></p>
            </div>
        </section>
    );
};

export default Footer;