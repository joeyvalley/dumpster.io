// Import CSS.
import './ShowpageCard.css'

// Import hooks
import { useEffect, useState } from 'react'

// Import
import GoogleMapReact from 'google-map-react';

export default function ShowpageCard({ props }) {
  props ? console.log(props) : console.log("none");

  return (
    <>
      <div className="showpage-container">
        <div className="item-info">
          <p>{props ? props.title : ""}</p>
          <img alt="the-item" src={props ? props.img : ""} />
          <p>{props ? props.description : ""}</p>
          <p>{props ? props.dateUploaded : ""}</p>
        </div>
        <div className="item-location-map">
          {props ?
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyDKJnzUeLMF750WbkItYzJRds5FSIxbOgM" }}
              defaultCenter={[props.location.latitude, props.location.longitude]}
              defaultZoom={15}
            /> :
            <p> heollo</p>
          }

        </div>
      </div>
    </>
  )
}