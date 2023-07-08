import React, { useState, useEffect } from "react";
// import FavoritesCard from "../component/FavoritesCard";

const Favorites = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("favoriteItems");
    if (storedItems) {
      setFavoriteItems(JSON.parse(storedItems));
    }
  }, []);

  const removeFromFavorites = (itemId) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  
    // Update localStorage
    const updatedItems = favoriteItems.filter((item) => item.id !== itemId);
    localStorage.setItem("favoriteItems", JSON.stringify(updatedItems));
  };
  

  return (
    <div className="mt-5 container">
      <h1>Favorites Page</h1>
      {favoriteItems.length > 0 ? (
        favoriteItems.map((item) => (
          <div>
            <img src={item.image_url} style={{ width: "100px" }} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.rating}</p>
            <button
              className="btn btn-danger"
              onClick={() => removeFromFavorites(item.id)}
            >
              Remove from Favorites
            </button>
          </div>
        ))
      ) : (
        <div className="mt-5">
          <p>No favorite items found.</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
