import Marvel from "../assets/marvel.png";
import Avengers from "../assets/avengers.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../style/heroesInfo.css";
const HeroesInfo = () => {
  const addCards = useSelector((state) => state.cards);
  const { id } = useParams();
  const all = addCards.find((item) => item.id === +id);

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

      <div className="heroes-info">
        <div className="heroes-info-block">
          <img
            className="heroes-info-block-img"
            src={`${all.thumbnail?.path}.${all.thumbnail?.extension}`}
            alt=""
          />
        </div>
        <div className="heroes-info-block-text">
          <p className="heroes-info-block-text-name">{all.name}</p>
          <p className="heroes-info-block-text-description">
            {all.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroesInfo;
