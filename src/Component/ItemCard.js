import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => (
  <div className="card col-4" style={{ width: "14rem", marginBottom: "3rem" }}>
    {/* <Link to={`/items/${item.id}`} className="card"> */}
    <div className="image">
      <img className="card-img-top " src={item.picture} alt={item.name} />
    </div>
    <div className="card-body">
      <h5 className="card-title">
        <span>{item.name}</span>
      </h5>
      <p class="card-text">
        <span>{item.price} JOD</span>
      </p>
      <p class="card-text">
        <span>{item.discription}</span>
      </p>
    </div>
    {/* </Link> */}
  </div>
);

export default ItemCard;