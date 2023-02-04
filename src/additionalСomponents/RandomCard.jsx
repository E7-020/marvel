import HammerAndShield from "../assets/HammerAndShield.png";
import "../style/random-card.css";
const RandomCard = ({ cardRandom, setCardRandom, randomHeroes }) => {
  const hendlClick = () => {
    const indexHeroes = Math.floor(Math.random() * (randomHeroes.length - 1));
    const result = randomHeroes[indexHeroes];
    setCardRandom(result);
  };

  return (
    <>
      <div className="blocks">
        <div className="random-card">
          <div className="random-card-block">
            <img
              className="random-card-block-img"
              src={`${cardRandom.thumbnail?.path}.${cardRandom.thumbnail?.extension}`}
              alt=""
            />
          </div>
          <div className="random-card-text">
            <p className="random-card-text-name">{cardRandom.name}</p>
            <p className="random-card-text-description">
              {cardRandom.description}
            </p>
            <div className="random-card-btn">
              <button className="random-card-first-btn">HOMEPAGE</button>
              <button className="random-card-second-btn">WIKI</button>
            </div>
          </div>
        </div>

        <div className="call-random-card">
          <div className="call-random-card-text">
            <p className="call-random-card-first-text">
              Random character for today! <br />
              Do you want to get to know him better?
            </p>
            <p className="call-random-card-second-text">
              Or choose another one
            </p>
            <button onClick={hendlClick} className="call-random-card-btn">
              TRY IT
            </button>
          </div>

          <div className="call-random-card-block">
            <img
              className="call-random-card-block-img"
              src={HammerAndShield}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomCard;
