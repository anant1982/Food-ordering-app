import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantOffer = (resId) => {
	const [resOfferData, setResOfferData] = useState(null);
	useEffect(() => {
		fetchOffers();
	}, []);
	const fetchOffers = async () => {
		const data = await fetch(
			MENU_API_URL +
				"&restaurantId=" +
				resId +
				"&catalog_qa=undefined&submitAction=ENTER"
		);
		const json = await data.json();

		setResOfferData(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
		);
	};
	return resOfferData;
};

export default useRestaurantOffer;
