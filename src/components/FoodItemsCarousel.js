import { FOOD_ITEM_IMG_URL } from "../utils/constants";

const FoodItemsCarousel = (props) => {
	const { foodItems, currentIndex } = props;
	return (
		<div className="flex">
			{foodItems?.info?.map((foodItem, index) => (
				<div
					className="w-full pr-6 transition-all duration-1000 ease-in-out"
					key={index}
					style={{ transform: `translateX(-${currentIndex * 9}rem)` }}>
					<div>
						<a className="w-36 h-[180px]">
							<div className="block w-36 h-[180px]">
								<img
									className="w-36 h-[180px] object-cover"
									src={FOOD_ITEM_IMG_URL + foodItem.imageId}
									alt={foodItem.accessibility.altText}
									style={{ transition: "transform .5s" }}
								/>
							</div>
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default FoodItemsCarousel;
