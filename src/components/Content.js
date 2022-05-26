import React from "react";

import Card from "./Card";

import data from "../data"

export default function Content() {
    
    const cardElements = data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    });

    return ( 
        <section className="content">
            {cardElements}
        </section>
    );
}