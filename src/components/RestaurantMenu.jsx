import React from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "@/utils/useRestaurantrMenu";

function RestaurantMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">{name}</h1>
      <h2>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      <h1 className="text-3xl font-bold mb-5">Menu</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li> */}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
