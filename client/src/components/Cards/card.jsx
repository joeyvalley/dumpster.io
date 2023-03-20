import "./Card.css";
// import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";



function Card({ id, img }) {
  console.log(img);
  return (
    <div key={id}>
      hi
    </div>
    // <div className="card-box">
    //   <img src={img} className="card-img" alt="" />
    //   <div className="card-info-flex">
    //     <h3 className="card-title">Item</h3>
    //     <div className="card-rating">
    //       <StarRateRoundedIcon />
    //       <p>10</p>
    //       <div className="price">
    //         <p></p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Card;