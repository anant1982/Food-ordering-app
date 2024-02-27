import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();
	return (
		<div className="mt-[91px] bg-gray-300">
			<div className="xl:w-3/4 xl:mx-auto">
				{cartItems.length > 0 ? (
					<div className="py-9 flex justify-between">
						<div className="w-2/3 bg-white py-7 px-8 rounded-md">
							<div className="pb-4 mb-6 border-b-2 border-b-gray-500 border-dashed flex items-center justify-between">
								<h1 className="font-extrabold text-2xl">Cart Items</h1>
								<button
									className="flex items-center ml-6 border border-red-900 bg-red-900 text-white px-5 py-2 text-sm rounded-md"
									onClick={() => dispatch(clearCart())}>
									<FaTrashRestoreAlt className="mr-2" /> Clear cart
								</button>
							</div>
							<div>
								{cartItems.map((cartItem, index) => (
									<CartItem
										key={cartItem.id}
										item={cartItem}
										itemIndex={index}
									/>
								))}
							</div>
						</div>
						<div className="w-1/3 ml-10 bg-white py-7 px-8 rounded-md">
							<h3 className="font-extrabold text-2xl mb-6 pb-5 border-b-2 border-b-gray-500 border-dashed">
								Order Summary
							</h3>
							<CartTotal />
						</div>
					</div>
				) : (
					<div className="text-center py-8 min-h-80 flex flex-col justify-center">
						<p className="font-semibold text-xl">
							Your cart is empty!! Please go to home and select some delicious
							items!!
						</p>
						<Link
							to="/"
							className="px-2 py-3 bg-pink-500 text-white w-[150px] rounded-md mx-auto mt-8">
							Go to Home
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
