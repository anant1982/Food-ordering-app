import { MENU_IMAGE_API_URL } from "../utils/constants";
import VEG_ICON from "../images/veg-64.png";
import NONVEG_ICON from "../images/non-veg-64.png";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
	addItem,
	decrementQuantity,
	incrementQuantity,
} from "../store/cartSlice";

const MenuItems = ({ items, itemIndex }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((store) => store.cart.items);

	const handleAddItem = (item) => {
		let itemPrice = "";
		if (item?.card?.info.defaultPrice) {
			itemPrice = item?.card?.info?.defaultPrice;
		} else {
			itemPrice = item?.card?.info?.price;
		}
		const { id, imageId, isVeg, name } = item?.card?.info;

		dispatch(
			addItem({
				id,
				name,
				imageId,
				itemPrice,
				isVeg,
			})
		);
	};

	function checkAlreadyExistItemInCart(id) {
		const itemInCart = cartItems.find((item) => item.id === id);
		if (itemInCart) {
			return itemInCart.quantity;
		}
	}

	return (
		<>
			<div
				className={`${
					itemIndex === 0 ? "menu-item-first" : ""
				} flex items-start justify-between pt-8 mt-6 border-t border-gray-300`}>
				<div className="pr-4">
					<div>
						<img
							className="w-5 h-5 mb-3"
							src={items.card.info.isVeg ? VEG_ICON : NONVEG_ICON}
							alt="veg-nonveg icon"
						/>
					</div>
					<div>
						<h5 className="text-[15px] font-semibold mb-2">
							{items.card.info.name}
						</h5>
					</div>
					<div>
						<span className="text-sm text-gray-500 mr-2">
							&#8377;{" "}
							{items.card.info.defaultPrice
								? items.card.info.defaultPrice / 100
								: items.card.info.price / 100}
						</span>
					</div>
					{items.card.info.description ? (
						<div className="mt-3">
							<p className="font-normal text-sm text-gray-500">
								{items.card.info.description}
							</p>
						</div>
					) : (
						""
					)}
				</div>
				<div className="relative">
					<div className="relative min-w-[118px] h-[120px] after:absolute after:content-[''] after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#ff00001f] after:h-[96px] after:rounded-lg">
						{items.card.info.imageId ? (
							<img
								className="rounded-lg object-cover w-[118px] h-[96px] after:absolute after:content-[''] after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[rgba(40,44,63,.05)] after:h-[96px] after:rounded-lg"
								src={MENU_IMAGE_API_URL + items.card.info.imageId}
								alt={items.card.info.name}
							/>
						) : (
							<img
								className="rounded-lg w-[118px] h-[96px] object-cover"
								src="https://placehold.co/400"
								alt="placeholder-image"
							/>
						)}
					</div>
					{checkAlreadyExistItemInCart(items?.card?.info?.id) == undefined ? (
						<button
							className="absolute left-3 bottom-2 bg-teal-600 text-white px-3 w-[80%] py-2 rounded-md text-sm font-semibold flex items-center"
							onClick={() => handleAddItem(items)}>
							<span>
								<FaCartArrowDown className="w-5 h-5 mr-2" />
							</span>
							<span>Add</span>
						</button>
					) : (
						<div className="flex items-center cursor-pointer text-sm font-semibold absolute left-3 bottom-2 bg-white w-[80%] border border-gray-300 shadow-lg">
							<button
								className="px-2 py-[2px] w-7 text-lg bg-sky-800 text-white rounded hover:bg-sky-600 transition duration-500"
								onClick={() =>
									dispatch(decrementQuantity(items?.card?.info?.id))
								}>
								-
							</button>
							<span className="mx-2 text-sm w-5 h-8 flex items-center justify-center">
								{checkAlreadyExistItemInCart(items?.card?.info?.id)}
							</span>
							<button
								className="px-2 py-[2px] w-7 text-lg bg-sky-800 text-white rounded hover:bg-sky-600 transition duration-500"
								onClick={() =>
									dispatch(incrementQuantity(items?.card?.info?.id))
								}>
								+
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default MenuItems;
