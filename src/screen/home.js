import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import movie_data from "../json/movie";
import FavoriteButton from "../component/FavoriteButton";
const Home = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [clickedItems, setClickedItems] = useState({});

  const [movieDay1, setMovieDay1] = useState([]);
  const [movieDay2, setMovieDay2] = useState([]);
  const [movieDay3, setMovieDay3] = useState([]);
  const [movieDay4, setMovieDay4] = useState([]);

  useEffect(() => {
    setMovieDay1(movie_data.slice(0, 15));
    setMovieDay2(movie_data.slice(15, 30));
    setMovieDay3(movie_data.slice(30, 45));
    setMovieDay4(movie_data.slice(45, 62));

    console.log("1", movieDay1);
    console.log("2", movieDay2);
    console.log("3", movieDay3);
    console.log("4", movieDay4);
  }, []);

  useEffect(() => {
    const storedItems = localStorage.getItem("favoriteItems");
    if (storedItems) {
      setFavoriteItems(JSON.parse(storedItems));
      console.log("storedItems  = ", storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const removeFromFavorites = (itemId) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  const addToFavorites = (item) => {
    if (!favoriteItems.find((favItem) => favItem.id === item.id)) {
      setFavoriteItems((prevItems) => [...prevItems, item]);
    } else {
      removeFromFavorites(item.id);
    }
    setClickedItems((prevState) => ({
      ...prevState,
      [item.id]: !prevState[item.id],
    }));
  };

  return (
    <div className="container">
      <div className="mt-5">
        <p className="text-danger" style={{ fontSize: "25px" }}>
          Movie Day 1
        </p>
        {movieDay1.map((item) => (
          <Link
            to={`/movie-detail?id=${item.id}`}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-decoration-none"
            key={item.id}
          >
            <div>
              <h3>
                <b>{item.title}</b>
              </h3>
              <img src={item.image_url} style={{ width: "250px" }} />
              <p>{item.director}</p>
              <p>{item.cast}</p>
              <p>{item.rating}</p>
              <p>{item.duration}</p>
              <p>{item.show_time}.00</p>
              <p>{item.description}</p>
              <button
                className="btn"
                onClick={() => {
                  console.log("Button clicked!");
                  addToFavorites(item);
                }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  color={
                    favoriteItems.some((favItem) => favItem.id === item.id)
                      ? "red"
                      : "gray"
                  }
                />
              </button>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-5">
        <p className="text-danger" style={{ fontSize: "25px" }}>
          Movie Day 2
        </p>

        <div>
          {movieDay2.map((item) => (
            <div key={item.id}>
              <Link
                to={`/movie-detail`}
                className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-decoration-none"
              >
                <div>
                  <h3>
                    <b>{item.title}</b>
                  </h3>
                  <img src={item.image_url} style={{ width: "250px" }} />
                  <p>{item.director}</p>
                  <p>{item.cast}</p>
                  <p>{item.ratinge}</p>
                  <p>{item.duration}</p>
                  <p>{item.show_time}.00</p>
                  <p>{item.description}</p>
                </div>
              </Link>
              <FavoriteButton
                item={item}
                addToFavorites={addToFavorites}
                favoriteItems={favoriteItems}
              />
            </div>
          ))}
        </div>
      </div>
      <Link to="/favorite">View Favorites</Link>
      {/*       
      <div className="mt-5">
        <h1 className="text-danger">Movie Day 3</h1>
        {movieDay3.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image_url} style={{ width: "100px" }} />
            <p>{item.director}</p>
            <p>{item.cast}</p>
            <p>{item.ratinge}</p>
            <p>{item.duration}</p>
            <p>{item.show_time}.00</p>
            <p>{item.description}</p>
            <button className="btn" onClick={() => addToFavorites(item)}>
              <FontAwesomeIcon
                icon={faHeart}
                color={
                  favoriteItems.some((favItem) => favItem.id === item.id)
                    ? "red"
                    : "gray"
                }
              />
            </button>
          </div>
        ))}
      </div>



      <div className="mt-5">
        <h1 className="text-danger">Movie Day 4</h1>
        {movieDay4.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image_url} style={{ width: "100px" }} />
            <p>{item.director}</p>
            <p>{item.cast}</p>
            <p>{item.ratinge}</p>
            <p>{item.duration}</p>
            <p>{item.show_time}.00</p>
            <p>{item.description}</p>
            <button className="btn" onClick={() => addToFavorites(item)}>
              <FontAwesomeIcon
                icon={faHeart}
                color={
                  favoriteItems.some((favItem) => favItem.id === item.id)
                    ? "red"
                    : "gray"
                }
              />
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
