import { useEffect, useState } from "react";
import { RESTAURANT_API_URL } from "./constants";

const useRestaurant = () => {
	const [listOfRestaurants, setlistOfRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);

	useEffect(() => {
		!listOfRestaurants.length && getRestaurants();
	}, []);

	const getRestaurants = async () => {
		const data = await fetch(RESTAURANT_API_URL);
		const json = await data.json();

		// Optional chaining
		setlistOfRestaurants(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setFilteredRestaurants(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	return [listOfRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestaurant;
