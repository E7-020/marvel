import Marvel from "../assets/marvel.png";
import Avengers from "../assets/avengers.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style/comics-info.css";
const ComicsInfo = () => {
  const addComics = useSelector((state) => state.comics);
  const { id } = useParams();
  const all = addComics.find((item) => item.id === +id);

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

      <div className="comics-info">
        <div className="comics-info-first-block">
          <img
            className="comics-info-first-block-img"
            src={`${all.images[0]?.path}.${all.images[0]?.extension}`}
            alt=""
          />
        </div>

        <div className="comics-info-second-block">
          <p className="comics-info-second-block-title">{all.title}</p>
          <p className="comics-info-second-block-description">
            {all.description}
          </p>
          <p className="comics-info-second-block-pages">
            {all.pageCount} pages
          </p>
          <p className="comics-info-second-block-language">
            Language: {all.textObjects[0].language}
          </p>
          <p className="comics-info-second-block-price">
            {all.prices[0].price}$
          </p>
        </div>
        <div className="comics-info-third-block">
          <Link
            to="/ComicsSection"
            style={{ textDecoration: "none" }}
            className="comics-info-third-block-link"
          >
            Back to all
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComicsInfo;
