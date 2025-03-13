import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import './index.css'

const Footer = () =>(
    <>
    <div className='footer-section-container-lg'>
        <div className='sub-section-1'>
            <div>
                <h1 className='footer-header'> Be the first to know </h1>
                <p className='footer-description'> Sign up for updates from mettā muse. </p>
                <div>
                    <input type='search' placeholder='Enter your e-mail...' className='input-email'/>
                    <button type='button' className='subscribe-button'> Subscribe </button>
                </div>
            </div>
            <div>
                <h1 className='contact-heading'> CONTACT US </h1>
                <p className='contact'> +44 221 133 5360 </p>
                <p className='contact'> customercare@mettamuse.com </p>
                <h1 className='currency-heading'> Currency </h1>
                <div className='currency-container'>
                    <img src='https://res.cloudinary.com/ddc7e5e7s/image/upload/v1741658903/Group_imjvt0.png' alt='USD' className='currency-image'/>
                    <img src='https://res.cloudinary.com/ddc7e5e7s/image/upload/v1741659009/Star_1_t5kmko.png' alt='star'/>
                    <h1 className='currency-type'> USD </h1>
                </div>
                <p className='currency-description'> Transactions will be completed in Euros and a currency reference is available on hover. </p>
            </div>
        </div>
        <hr/>
        <div>
            <ul className='header-footer-list'>
                <li className='items-header'> mettā muse </li>
                <li className='items-header'> Quick Links </li>
                <li className='items-header'> Follow Us </li>
            </ul>
            <div className='items-container'>
                <ul>
                    
                    <li> About Us </li>
                    <li> Stories </li>
                    <li> Artisans </li>
                    <li> Boutiques </li>
                    <li> Contact Us </li>
                    <li> EU Compliances Docs </li>
                </ul>
                <ul>
                    <li> Orders & Shipping </li>
                    <li> Join/Login as a Seller </li>
                    <li> Payment & Pricing </li>
                    <li> Return & Refunds </li>
                    <li> FAQs </li>
                    <li> Privacy Policy </li>
                    <li> Terms & Conditions </li>
                </ul>                     
                <ul>
                    <li className="social-media-container">
                        <FaInstagramSquare className="social-media-icons"/>
                        <FaLinkedin className="social-media-icons"/>
                    </li>
                    <h1 className="payment-accepts">mettā muse <span className="accepts"> Accepts</span></h1>
                    <img src="https://res.cloudinary.com/ddc7e5e7s/image/upload/v1741863397/Frame_136278_jpvygd.png" alt="payments"/>
                </ul>
            </div>
            
            <p className='copy-right-description'> Copyright © 2023 mettamuse. All rights reserved. </p>
        </div>
    </div>
    <div className="footer-section-container-sm">
        <h1 className='footer-header'> Be the first to know </h1>
        <p className='footer-description'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text. </p>
        <div>
            <input type='search' placeholder='Enter your e-mail...' className='input-email'/>
            <button type='button' className='subscribe-button'> Subscribe </button>
        </div>
        <hr className="line"/>
        <h1 className='contact-heading'> CONTACT US </h1>
        <div className="contact-details-sm">
            <p className='contact'> +44 221 133 5360 </p>
            <img src='https://res.cloudinary.com/ddc7e5e7s/image/upload/v1741659009/Star_1_t5kmko.png' alt='star'/>
            <p className='contact'> customercare@mettamuse.com </p>
        </div>
        <hr className="line"/>
        <h1 className='currency-heading'> Currency </h1>
        <div className='currency-container'>
            <img src='https://res.cloudinary.com/ddc7e5e7s/image/upload/v1741658903/Group_imjvt0.png' alt='USD' className='currency-image'/>
            <img src='https://res.cloudinary.com/ddc7e5e7s/image/upload/v1741659009/Star_1_t5kmko.png' alt='star'/>
            <h1 className='currency-type'> USD </h1>
        </div>
        <hr className="line"/>
        <select className="selector-element">
            <option> mettā muse </option>
            <option> About Us </option>
            <option> Stories </option>
            <option> Artisans </option>
            <option> Boutiques </option>
            <option> Contact Us </option>
            <option> EU Compliances Docs </option>
        </select>
        <hr className="line"/>
        <select className="selector-element">
            <option> Quick Links </option>
            <option> Orders & Shipping </option>
            <option> Join/Login as a Seller </option>
            <option> Payment & Pricing </option>
            <option> Return & Refunds </option>
            <option> FAQs </option>
            <option> Privacy Policy </option>
            <option> Terms & Conditions </option>
            <option> EU Compliances Docs </option>
        </select>
        <hr className="line"/>
        <select className="selector-element">
            <option> Follow Us </option>
            <option className="social-media-container">
                <FaInstagramSquare className="social-media-icons"/>
                <FaLinkedin className="social-media-icons"/>
            </option>
            <option> EU Compliances Docs </option>
        </select>
        <hr className="line"/>
        <h1 className="payment-accepts">mettā muse <span className="accepts"> Accepts</span></h1>
        <img src="https://res.cloudinary.com/ddc7e5e7s/image/upload/v1741863397/Frame_136278_jpvygd.png" alt="payments" className="payments"/>
        <p className='copy-right-description'> Copyright © 2023 mettamuse. All rights reserved. </p>
    </div>

    </>
)

export default Footer