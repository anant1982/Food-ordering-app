import { useState } from "react";
import LOGO_IMG from "../images/restaurant-logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const [btnName, setBtnName] = useState("Login");
	const cartItems = useSelector((store) => store.cart.items);
	const getTotalQuantity = () => {
		let total = 0;
		cartItems.forEach((item) => {
			total += item.quantity;
		});
		return total;
	};
	return (
		<header className="px-5 py-4 bg-gray-200 shadow-lg shadow-slate-300 fixed left-0 top-0 w-full z-30">
			<div className="xl:container mx-auto flex items-center justify-between">
				<div className="logo-container">
					<Link to="/">
						<img className="w-20" src={LOGO_IMG} alt="site-logo" />
					</Link>
				</div>
				<div className="nav-items">
					<ul className="flex items-center justify-between p-0 mb-0">
						<li className="mr-8">
							<Link
								to="/"
								className="text-lg transition ease-in-out duration-500 hover:text-pink-500">
								Home
							</Link>
						</li>
						<li className="mr-8">
							<Link
								to="/about"
								className="text-lg transition ease-in-out duration-500 hover:text-pink-500">
								About Us
							</Link>
						</li>
						<li className="mr-8">
							<Link
								to="/contact"
								className="text-lg transition ease-in-out duration-500 hover:text-pink-500">
								Contact Us
							</Link>
						</li>
						<li className="mr-8">
							<Link
								to="/cart"
								className="text-lg transition ease-in-out duration-500 hover:text-pink-500 flex items-center">
								<span className="mr-2 relative">
									<svg
										className={
											cartItems.length > 0
												? "fill-green-700 stroke-green-700 stroke-2"
												: "fill-none stroke-black stroke-2"
										}
										viewBox="-1 0 37 32"
										height="24"
										width="24"
										fill="#686b78">
										<path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
									</svg>
									<span
										className={
											cartItems.length > 0
												? "text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold"
												: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold"
										}>
										{getTotalQuantity() ?? 0}
									</span>
								</span>
								<span>Cart</span>
							</Link>
						</li>
						<button
							className="bg-pink-400 hover:bg-pink-500 rounded-md px-7 py-3 text-white transition ease-in-out duration-500"
							onClick={() => {
								btnName === "Login"
									? setBtnName("Logout")
									: setBtnName("Login");
							}}>
							{btnName}
						</button>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
