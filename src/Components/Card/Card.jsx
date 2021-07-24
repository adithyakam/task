import React from 'react'

import "./Card.css"

function Card({ele}) {
    return (
        <div className="card">
            <p><span>Name: </span>{ele.name}</p>
            <p><span>Age: </span>{ele.age}</p>
            <p><span>gender: </span>{ele.gender}</p>
            <p><span>email: </span>{ele.email}</p>
            <p><span>Ph: </span>{ele.phoneNo}</p>
        </div>
    )
}

export default Card
