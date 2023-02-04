import { useSelector } from "react-redux";
import { useState } from "react";
import Canel from "../assets/canel.png";
import CardDefolt from "./CardInfo";
import "../style/card.css";

const Card = () => {
  const addCards = useSelector((state) => state.cards);
  const [count, setCount] = useState(9);
  const [info, setInfo] = useState("");

  const add = () => {
    setCount(count + 3);
  };

  const hendlClick = (i) => {
    setInfo(i);
  };

  return (
    <div className="cards">
      <div className="card-block">
        {addCards.slice(0, count).map((i) => (
          <div
            key={addCards.id}
            onClick={() => hendlClick(i)}
            className={`${
              info?.id === i.id
                ? "cards-block-info-pressing"
                : "cards-block-info"
            }`}
          >
            <img
              className="cards-block-info-img"
              src={`${i.thumbnail?.path}.${i.thumbnail?.extension}`}
              alt=""
            />
            <p className="cards-block-info-name">{i.name}</p>
          </div>
        ))}

        <div className="cards-block-info-button">
          <div>
            <button onClick={add} className="cards-block-info-buttonq">
              LOAD MORE
            </button>
          </div>
        </div>
      </div>

      <div>
        <CardDefolt info={info} />
      </div>

      <div>
        <img className="card-img" src={Canel} alt="" />
      </div>
    </div>
  );
};

export default Card;
