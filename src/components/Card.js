import React from "react";

import mapTick from "../images/map_tick.svg"

export default function Card(props) {
    return (
        <section className="card">
            <img src={props.content} alt="location" className="card-img" />
            <div className="card-content">
                <div className="card-location">
                    <img src={mapTick} alt="" />
                    <a href={props.map}>View on Google Maps</a>
                </div>
                <h1 className="name">{props.name}</h1>
                <p className="data">{props.date}</p>
                <p className="desc">{props.desc}</p>
            </div>
        </section>
    );
}