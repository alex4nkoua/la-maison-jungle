import Cart from "./Cart";

import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner() {
    const title = "la maison jungle";


    return (
        <>
            <div className="lmj-banner">
                <img src={logo} alt="la maison jungle" className="lmj-logo"  />
                <h1 className="lmj-title">{title.toUpperCase()}</h1>
            </div>
            <Cart />
        </>

    );
}

export default Banner;