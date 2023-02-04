import ComicsSection from "../additionalСomponents/ComicsSection";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Comics = () => {
  const dispatch = useDispatch();
  const url = `https://gateway.marvel.com:443/v1/public/comics?orderBy=modified&limit=16&apikey=51f502f53348b5a218887333707c8a5b`;

  const api = async () => {
    const respons = await fetch(url);
    const data = await respons.json();
    console.log(data);
    dispatch({
      type: "COMICS",
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
      <ComicsSection />
    </>
  );
};

export default Comics;
