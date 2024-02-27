import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
	const { resData } = props;
	const {
		name,
		cuisines,
		avgRating,
		cloudinaryImageId,
		id,
		aggregatedDiscountInfoV3,
		areaName,
	} = resData?.info;
	const { deliveryTime, slaString } = resData?.info.sla;
	return (
		<div className="grid gap-3 transition-all ease-out duration-[0.05s] delay-150 grid-flow-row hover:-translate-y-1 hover:scale-95">
			<div className="relative before:content-[''] before:h-0 before:block before:pt-[calc(66.6667%)]">
				<div className="absolute top-0 left-0 w-full h-full">
					<div className="relative rounded-2xl overflow-hidden w-full h-full drop-shadow-[0px_2px_8px_rgba(0,0,0,0.1)]">
						<img
							className="h-full w-full object-cover"
							src={CDN_URL + cloudinaryImageId}
							alt="res-logo"
						/>
						<div className="absolute bottom-0 right-0 left-0 grid content-end text-left pl-3 pr-3 pb-2 h-[calc(81px)] bg-gradient-to-b from-[rgba(27,_30,_36,_0)] to-[rgb(27,_30,_36)] from-[0%] to-[84.21%]">
							<div></div>
							<div className="font-black antialiased text-[18px] leading-[22px] tracking-[-0.5px] text-[rgba(255,255,255,0.92)] overflow-hidden w-full line-clamp-1 break-words uppercase">
								{aggregatedDiscountInfoV3?.header +
									" " +
									aggregatedDiscountInfoV3?.subHeader}
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<div className="ml-3">
				<h3 className="font-bold text-lg mb-1 line-clamp-1">{name}</h3>
				<div className="flex items-center font-semibold text-[16px] mb-2">
					<p className="mr-1">
						<span className="bg-green-600 rounded-full size-5 inline-flex items-center justify-center text-xs text-white mr-1">
							&#9733;
						</span>{" "}
						{avgRating} •{" "}
					</p>
					<p>{slaString}</p>
				</div>
				<p className="text-gray-600 line-clamp-1 text-md">
					{cuisines.join(", ")}
				</p>
				<p className="text-gray-600 line-clamp-1 text-md">{areaName}</p>
			</div>
		</div>
	);
};

export const NewlyOnBoardedRestaurant = (RestaurantCard) => {
	return (props) => {
		return (
			<>
				<label className="absolute z-10 py-2 px-3 text-[12px] font-bold top-0 left-0 bg-orange-500 text-white rounded-lg">
					New
				</label>
				<RestaurantCard {...props} />
			</>
		);
	};
};

export default RestaurantCard;
