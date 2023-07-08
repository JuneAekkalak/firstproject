import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function FavoriteButton({ item, addToFavorites, favoriteItems }) {
  const handleAddToFavorites = () => {
    addToFavorites(item);
  };

  return (
    <button className="btn" onClick={handleAddToFavorites}>
      <FontAwesomeIcon
        icon={faHeart}
        color={
          favoriteItems.some((favItem) => favItem.id === item.id) ? "red" : "gray"
        }
      />
    </button>
  );
}

export default FavoriteButton;
