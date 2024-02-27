import { useEffect, useState } from "react";

const useRestaurantMenu = (menuItems) => {
	const [menuData, setMenuData] = useState([]);
	useEffect(() => {
		let menuItemsData = menuItems.reduce((allMenus, menu) => {
			allMenus.set(menu.title, menu.itemCards.length);
			return allMenus;
		}, new Map());
		const data = [];
		function logMapElements(value, key) {
			data.push({ Title: key, Count: value });
		}
		menuItemsData.forEach(logMapElements);
		setMenuData(data);
	}, [menuItems]);

	return menuData;
};

export default useRestaurantMenu;
