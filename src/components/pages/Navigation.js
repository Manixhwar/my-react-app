import React from "react";
import '../styles/navigation.css';
import imagelogo from '../images/dhl-logo4.jpg';

const imagesList = [
    {
        id: 1,
        src: imagelogo,
        alt: "imagelogo",
    },
];

function Navigation() {
    return (
        <div>
            <header className="c-navigation--bar">
                <div>
                    {imagesList.map((image) => (
                        <img className="common-image" key={image.id} src={image.src} alt={image.alt} />
                    ))}
                </div>
                <nav className="c-navigation--menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Tracking</a></li>
                        <li><a href="#">Locations</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </nav>
            </header>
            {/* Rest of your application content */}
        </div>
    );
}

export default Navigation;
