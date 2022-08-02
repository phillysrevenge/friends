import React from "react";

function Card({ name, email, id }) {
    return (
        <div className="bg-brown br3 pa3 ma2 grow bw2 shadow-5 dib">
            <a href="https://www.google.co.uk" target='_blank' rel='noreferrer'><img src={`https://robohash.org/${id}?200x200`} alt="friend" /></a>
            <div className="tc">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;