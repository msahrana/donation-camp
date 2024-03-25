import {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import MainCard from "./MainCard";

const Card = () => {
  const [card, setCard] = useState();

  const {id} = useParams();

  const cards = useLoaderData();

  useEffect(() => {
    const findCard = cards?.find((card) => card.id === id);
    setCard(findCard);
  }, [id, cards]);

  return (
    <div>
      <MainCard card={card}></MainCard>
    </div>
  );
};

export default Card;
