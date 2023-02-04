import Marvel from "../assets/marvel.png";
import Avengers from "../assets/avengers.png";
import "../style/comics-section.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import ComicsInfo from "./ComicsInfo";
const ComicsSection = () => {
  const addComics = useSelector((state) => state.comics);
  const [count, setCount] = useState(8);

  const add = () => {
    setCount(count + 4);
  };

  return (
    <div>
      <div className="banner">
        <div className="banner-first-block">
          <img className="banner-first-block-img" src={Marvel} alt="" />
        </div>

        <div className="banner-second-block">
          <p className="banner-second-block-text">
            New comics every week! Stay tuned!
          </p>
        </div>

        <div></div>
        <div></div>

        <div className="banner-third-block">
          <img
            className="banner-third-block-second-img"
            src={Avengers}
            alt=""
          />
        </div>
      </div>

      <div className="comics">
        {addComics.slice(0, count).map((i) => (
          <Link
            key={i.id}
            to={`/ComicsInfo/${i.id}`}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <div className="comics-block-info">
              <img
                className="comics-block-info-img"
                src={`${i.images[0]?.path}.${i.images[0]?.extension}`}
                alt=""
              />
              <p className="comics-block-info-name">{i.title}</p>
              <p className="comics-block-info-price">
                {i.prices[0].price !== 0
                  ? `${i.prices[0].price}$`
                  : "NOT AVAILABLE"}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="comics-block">
        <button onClick={add} className="comics-block-btn">
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default ComicsSection;
