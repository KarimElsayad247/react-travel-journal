import React from "react";

import globe from "../images/globe.svg"

export default function Navbar() {
    return (
        <section className="navbar">
            <img src={globe} alt="website logo, a globe" />
            <p>my travel journal</p>
        </section>
    );
}