import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DescriptionCard from "./DescriptionCard";

const Description = () => {
  const [card, setCard] = useState();

  const { id } = useParams();
  console.log(id);

  const cards = useLoaderData();
  console.log(cards);

  useEffect(() => {
    const findCard = cards?.find((card) => card.id == id);

    console.log(findCard);

    setCard(findCard);
  }, [id, cards]);

  
  return (
    <div>
      <DescriptionCard card={card}></DescriptionCard>
    </div>
  );
};

export default Description;
