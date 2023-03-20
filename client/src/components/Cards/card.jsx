import "./Card.css";

function Card({ id, img, title }) {
  console.log(img);
  return (
    <div className="card-box" key={id}>
      <img src={img} className="card-img" alt="" />
      <div className="card-info-flex">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
}

export default Card;
