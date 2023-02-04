import RandomCard from "../additionalСomponents/RandomCard";
import Card from "../additionalСomponents/Card";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Characters = () => {
  const dispatch = useDispatch();
  const url = `https://gateway.marvel.com:443/v1/public/characters?limit=15&apikey=295ffdb088edf1625ecc4835a2b5c500`;
  const [cardRandom, setCardRandom] = useState({});
  const [randomHeroes, setRandomHeroes] = useState();
  const api = async () => {
    const respons = await fetch(url);
    const data = await respons.json();
    setCardRandom(data.data.results[2]);
    setRandomHeroes(data.data.results);

    dispatch({
      type: "CARDS",
      payload: {
        label: data.data.results,
      },
    });
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <div>
        <RandomCard
          randomHeroes={randomHeroes}
          cardRandom={cardRandom}
          setCardRandom={setCardRandom}
        />
        <Card />
      </div>
    </>
  );
};

export default Characters;
