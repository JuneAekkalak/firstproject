import React from "react";
import { useState,useEffect } from "react";
import "../style/style.css";
import { useLocation } from "react-router-dom";
import movie_data from "../json/movie";

const MovieDetail = () => {
  const [item, setItems] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  useEffect(() => {
    const item = movie_data.find((item) => item.id === parseInt(id));
    setItems(item)

  }, []);

  return (
    <div className="container mt-5">
    <div >
              <h3>
                <b>{item.title}</b>
              </h3>
              <img src={item.image_url} style={{ width: "100px" }} />
              <p>{item.director}</p>
              <p>{item.cast}</p>
              <p>{item.rating}</p>
              <p>{item.duration}</p>
              <p>{item.show_time}.00</p>
              <p>{item.description}</p>
              
            </div>
  </div>
  );
};

export default MovieDetail
