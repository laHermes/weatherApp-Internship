import React from 'react'

function CardHeader(props) {
    return (
        <div className="card-header">
        <h2>
          {props.city}, {props.countryCode}
        </h2>
        <img
          src={`https://countryflags.io/${props.countryCode}/flat/32.png`}
          alt=""
        />
      </div>
    )
}

export default CardHeader;
