import { MENU_IMAGE_API_URL } from "../utils/constants";
import VEG_ICON from "../images/veg-64.png";
import NONVEG_ICON from "../images/non-veg-64.png";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
	decrementQuantity,
	incrementQuantity,
	removeItem,
} from "../store/cartSlice";
import { Link } from "react-router-dom";

const CartItem = ({ item, itemIndex }) => {
	const dispatch = useDispatch();
	return (
		<>
			<div
				className={`${
					itemIndex === 0 ? "menu-item-first" : ""
				} flex items-start pt-8 mt-6 border-t border-gray-300 justify-between`}>
				<div className="w-1/5">
					<div className="relative min-w-[118px]">
						<Link
							to={`/restaurants/${item.id}`}
							className="relative after:absolute after:content-[''] after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#ff00001f] after:h-[96px] after:rounded-lg">
							{item.imageId ? (
								<img
									className="rounded-lg object-cover w-[126px] h-[96px] after:absolute after:content-[''] after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[rgba(40,44,63,.05)] after:h-[96px] after:rounded-lg"
									src={MENU_IMAGE_API_URL + item.imageId}
									alt={item.name}
								/>
							) : (
								<img
									className="rounded-lg w-[118px] h-[96px] object-cover"
									src="https://placehold.co/400"
									alt="placeholder-image"
								/>
							)}
						</Link>
					</div>
				</div>
				<div className="w-4/5 pl-6">
					<div>
						<img
							className="w-4 h-4 mb-2"
							src={item.isVeg ? VEG_ICON : NONVEG_ICON}
							alt="veg-nonveg icon"
						/>
						<h5 className="text-[16px] font-semibold mb-2">
							<Link to={`/restaurants/${item.id}`}>{item.name}</Link>
						</h5>
						<div className="flex items-center">
							<div className="mr-3">
								<span className="font-bold text-sm">Price: </span>
								<span className="text-sm text-gray-500 mr-2 font-semibold">
									&#8377; {(Math.round(item.itemPrice) / 100).toFixed(2)}
								</span>
							</div>
							<div className="flex ml-3 items-center">
								<span className="font-bold text-sm mr-5">Quantity: </span>
								<div className="flex items-center cursor-pointer text-sm font-semibold">
									<button
										className="px-2 py-[2px] w-7 text-lg bg-sky-800 text-white rounded hover:bg-sky-600 transition duration-500"
										onClick={() => dispatch(decrementQuantity(item.id))}>
										-
									</button>
									<span className="mx-2 text-sm w-5 h-8 flex items-center justify-center">
										{item.quantity}
									</span>
									<button
										className="px-2 py-[2px] w-7 text-lg bg-sky-800 text-white rounded hover:bg-sky-600 transition duration-500"
										onClick={() => dispatch(incrementQuantity(item.id))}>
										+
									</button>
								</div>
								<button
									className="flex items-center ml-6 border border-red-900 bg-red-900 text-white px-3 py-[6px] text-[12px] rounded"
									onClick={() => dispatch(removeItem(item.id))}>
									<FaTrashAlt className="mr-2" /> Remove
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItem;
