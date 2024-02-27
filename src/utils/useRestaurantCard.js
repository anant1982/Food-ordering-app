import { useEffect, useState } from "react";
import {
	MENU_API_URL,
	MENU_ITEM_TYPE_KEY,
	RESTAURANT_TYPE_KEY,
	RESTAURANT_LICENSE_INFO_KEY,
	RESTAURANT_ADDRESS_INFO_KEY,
} from "./constants";

const useRestaurantCard = (resId) => {
	const [restaurant, setRestaurant] = useState(null);
	const [menuItems, setMenuItems] = useState([]);
	const [offerItems, setOfferItems] = useState([]);
	const [resInfo, setResInfo] = useState([]);
	const [addressInfo, setAddressInfo] = useState([]);

	useEffect(() => {
		getRestaurantData();
	}, []);
	const getRestaurantData = async () => {
		try {
			const data = await fetch(
				MENU_API_URL +
					"&restaurantId=" +
					resId +
					"&catalog_qa=undefined&submitAction=ENTER"
			);
			const json = await data.json();
			const restaurantData =
				json?.data?.cards
					?.map((x) => x.card)
					?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
					?.info || null;
			setRestaurant(restaurantData);

			// Set menu item data
			const menuItemsData =
				json?.data?.cards
					.find((x) => x.groupedCard)
					?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
					?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY) || null;

			setMenuItems(menuItemsData);

			// Set offers for menu items
			const offerItemsData =
				json?.data?.cards
					.find((x) => x.groupedCard)
					?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
					?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
					?.map((x) => x.itemCards)
					.flat()
					?.map((x) => x.card)
					?.map((x) => x.info.offerTags)
					.filter((x) => x !== undefined)
					.map((x) => x[0]) || null;
			setOfferItems(offerItemsData[0]);

			// Set license info of menu items
			const resInfoData =
				json?.data?.cards
					.find((x) => x.groupedCard)
					?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
					?.filter((x) => x["@type"] == RESTAURANT_LICENSE_INFO_KEY) || null;
			setResInfo(resInfoData);

			// Set address info of menu items
			const resAddressData =
				json?.data?.cards
					.find((x) => x.groupedCard)
					?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
					?.filter((x) => x["@type"] == RESTAURANT_ADDRESS_INFO_KEY) || null;
			setAddressInfo(resAddressData);
		} catch (err) {
			setAddressInfo([]);
			setResInfo([]);
			setOfferItems([]);
			setMenuItems([]);
			setRestaurant(null);
			console.error(err);
		}
	};
	return [restaurant, menuItems, offerItems, resInfo, addressInfo];
};

export default useRestaurantCard;
