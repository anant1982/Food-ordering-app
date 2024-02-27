import Shimmer from "./Shimmer";
import { ICON_18, LICENSE_IMAGE_API_URL } from "../utils/constants";
import PRICE_IMG from "../images/money.png";
import TIME_IMG from "../images/time.png";
import RES_ICON from "../images/restaurant-icon.png";
import { useParams } from "react-router-dom";
import useRestaurantOffer from "../utils/useRestaurantOffer";
import useRestaurantCard from "../utils/useRestaurantCard";
import ItemCategoryCard from "./ItemCategoryCard";
import { useState } from "react";
import Modal from "./Modal";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantOffer from "./RestaurantOffer";

const RestaurantMenu = () => {
	let { resId } = useParams();
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	// Get Offers from custom hook
	const resOfferData = useRestaurantOffer(resId);
	// Get Cards from custom hook
	const [restaurant, menuItems, offersItem, resInfo, addressInfo] =
		useRestaurantCard(resId);
	const menuData = useRestaurantMenu(menuItems);

	if (
		restaurant === null ||
		resOfferData === null ||
		menuData === null ||
		resInfo === null ||
		addressInfo === null ||
		menuItems === null
	) {
		return <Shimmer />;
	}

	return (
		<div className="px-4 lg:max-w-[800px] mx-auto mt-[130px] mb-24">
			<div className="flex justify-between">
				<div>
					<h2 className="font-bold text-xl">{restaurant?.name}</h2>
					<span className="text-sm text-gray-400">
						{restaurant?.cuisines.join(", ")}
					</span>
					<p className="text-sm text-gray-400">{restaurant?.areaName}</p>
				</div>
				<div className="border rounded-md p-2">
					<span className="pb-[10px] mb-2 border-b inline-block w-full font-bold text-center text-green-600">
						&#9733;{" "}
						{restaurant?.avgRating
							? restaurant?.avgRating
							: restaurant?.avgRatingString}
					</span>
					<p className="text-[11px] text-gray-400">
						{restaurant?.totalRatingsString}
					</p>
				</div>
			</div>
			<ul className="mt-4">
				<li className="flex items-center">
					<img className="mr-2" src={ICON_18 + restaurant?.feeDetails.icon} />
					<span className="text-sm text-gray-400">
						{restaurant?.feeDetails.message}
					</span>
				</li>
			</ul>
			<hr className="border border-dashed my-5" />
			<div className="mb-3">
				<ul className="flex items-center">
					<li className="flex items-center mr-4">
						<img className="mr-3" src={TIME_IMG} />{" "}
						<span className="text-sm font-bold">
							{restaurant?.sla.slaString}
						</span>
					</li>
					<li className="flex items-center">
						<img className="mr-3" src={PRICE_IMG} />{" "}
						<span className="text-sm font-bold">
							{restaurant?.costForTwoMessage}
						</span>
					</li>
				</ul>
			</div>
			{/* Offer data component */}
			<RestaurantOffer offerData={resOfferData} />
			{/* Offer data component */}
			<div className="mt-8 mb-6">
				<div>
					{menuItems?.map((menuItem, index) => (
						<div key={index}>
							<div className={"my-4 " + menuItem?.title}>
								<ItemCategoryCard
									menuItems={menuItem}
									categoryTitle={menuItem?.title}
								/>
							</div>
							<div className="border-b-[16px] border-zinc-200"></div>
						</div>
					))}
				</div>
				<div className="px-4 pb-48 pt-3 bg-zinc-200 text-[#93959f]">
					{resInfo?.map((license, index) => (
						<div className="flex items-center" key={index}>
							<img
								className="h-[30px] w-[60px] mr-4"
								src={LICENSE_IMAGE_API_URL + license.imageId}
							/>
							<p className="pt-1 text-[14px]">{license.text[0]}</p>
						</div>
					))}
					{addressInfo?.map((address, index) => (
						<div className="mt-4" key={index}>
							<p className="text-[14px] font-semibold border-t border-[#a9abb2] pt-4 capitalize">
								{address.name}
							</p>
							<p className="text-[14px]">{"(Outlet: " + address.area + ")"}</p>
							<div className="flex items-center text-[12px] mt-3">
								<div className="mr-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
										fill="currentColor"
										className="w-4 h-4">
										<path
											fillRule="evenodd"
											d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<p className="pt-1">{address.completeAddress}</p>
							</div>
						</div>
					))}
				</div>
				<div className="sm:w-[800px] sm:mx-auto fixed left-0 right-0 bottom-0 z-10 pointer-events-none">
					<div
						onLoad={() => {
							let element = document.querySelector(".browse-menu-btn-closed");
							element.classList.add("open");
						}}
						onClick={openModal}
						className="browse-menu-btn-closed h-[84] z-[1] transition-transform duration-[0.25s] will-change-transform relative">
						<button className="absolute left-1/2 top-0 transform -translate-x-2/4 w-[150px] h-[40px] pointer-events-auto">
							<div className="h-[40px] w-[150px] rounded-[30px] bg-[#5d8ed5] text-white text-center shadow-[0_5px_10px_0_rgba(0,0,0,0.3)_,_0_2px_1px_0_rgba(93,141,213,.2)] p-[14px] font-semibold text-[12px] flex items-center justify-center uppercase will-change-transform transform scale-x-100 transition-transform duration-[0.25s] ease-in-out">
								<span className="mr-[6px]">
									<img
										className="w-[13px] h-[13px]"
										src={RES_ICON}
										alt="Menu icon"
									/>
								</span>
								Browse Menu
							</div>
						</button>
					</div>
				</div>
			</div>
			<Modal isOpen={isOpen} closeModal={closeModal} menuData={menuData} />
		</div>
	);
};

export default RestaurantMenu;
