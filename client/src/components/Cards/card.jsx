import React from "react";
import "./styles.css";
import item from "../../assets/items/trashcan.png"
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded"

function Card() {
  return (
    <div className="card-box">
      <img src={item} className="card-img" alt="" />
      <div className="card-info-flex">
        <h3 className="card-title">Item</h3>
        <div className="card-rating">
          <StarRateRoundedIcon />
          <p>10</p>
        </div>
      </div>
    </div>
  )
}







// function Card({ list }) {
//   console.log(list.imgSrc)
//   do a for each to go through the list and for each item inside the list map through to grab the img src.
//   return (
//     <div className="card-box">
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={15}
//         loop={true}
//         mousewheel={true}
//         cssMode={true}
//         pagination
//         modules={[Pagination, Navigation]}
//         className="swiper-container"
//       >
//         {list.imgSrc.map((src, i) => (
//           <SwiperSlide key={i}>
//             <img src={src} className="card-img" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="card-info-flex">
//         <h3 className="card-title">{list.title}</h3>
//         <div className="card-rating">
//           <StarRateRoundedIcon />
//           <p>{list.rating}</p>
//         </div>
//       </div>
//       <p style={{ margin: 0, color: "var(--font-grey)" }}>{list.desc}</p>
//       <p style={{ margin: 0, color: "var(--font-grey)" }}>{list.date}</p>
//       <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
//         <span style={{ fontWeight: "600" }}>₹{list.price}</span> night
//       </p>
//     </div>
//   );
// }

export default Card;
