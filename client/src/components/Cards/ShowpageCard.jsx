// Import CSS.
import './ShowpageCard.css'

export default function ShowpageCard({ props }) {
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
        </div>
      </div>
    </>
  )
}