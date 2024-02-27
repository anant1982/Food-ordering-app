import { useEffect, useState } from "react";
import { RESTAURANT_API_URL, FOOD_ITEM_TYPE_KEY } from "./constants";

const useFoodItems = () => {
	const [listOfFoodItems, setlistOfFoodItems] = useState([]);

	useEffect(() => {
		!listOfFoodItems.length && getFoodItems();
	}, []);

	const getFoodItems = async () => {
		const data = await fetch(RESTAURANT_API_URL);
		const json = await data.json();

		// Optional chaining
		const foodItemsData =
			json?.data?.cards
				?.map((x) => x.card)
				?.find((x) => x && x.card["@type"] === FOOD_ITEM_TYPE_KEY) || null;
		setlistOfFoodItems(foodItemsData);
	};
	console.log(listOfFoodItems);
	return [listOfFoodItems];
};

export default useFoodItems;
