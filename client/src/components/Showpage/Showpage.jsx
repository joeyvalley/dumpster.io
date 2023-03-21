import React from "react";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";

export default function Showpage() {
  const [auth, setAuth] = useState();
  const params = useParams()
  const id = params.id
  const title = params.title
  const desc = params.description

  console.log(id);

  useEffect(() => {
    localStorage.getItem("TOKEN") ? setAuth(true) : setAuth(false);
  }, []);

  return (
    <div className="card-box" key={id}>
      <Header auth={auth} />
      <img src={id} className="card-img" alt="" />
      <div className="card-info-flex">
        <p>{id}</p>
        <p>{desc}</p>
        {/* <h3 className="card-title">{}</h3> */}
      </div>
    </div>
  );
}
