import { Link } from "react-router-dom";
import useFoodItems from "../utils/useFoodItems";
import useRestaurant from "../utils/useRestaurant";
import FoodItemsCarousel from "./FoodItemsCarousel";
import RestaurantCard, { NewlyOnBoardedRestaurant } from "./RestaurantCard";
import ShimmerHome from "./ShimmerHome";
import { useState } from "react";
import CarouselButtons from "./CarouselButtons";

const Body = () => {
	const [listOfRestaurants, filteredRestaurants, setFilteredRestaurants] =
		useRestaurant();
	const [listOfFoodItems] = useFoodItems();
	const [searchText, setSearchText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	const RestaurantNewlyOpened = NewlyOnBoardedRestaurant(RestaurantCard);

	function previous() {
		setCurrentIndex(currentIndex - 1);
	}

	function next() {
		setCurrentIndex(currentIndex + 1);
	}

	// Conditional rendering
	if (
		listOfRestaurants === null ||
		filteredRestaurants === null ||
		listOfFoodItems === null ||
		setFilteredRestaurants === null
	) {
		return <ShimmerHome />;
	}
	return (
		<main className="home-main-wrapper pt-4 mt-[91px]">
			<div className="top-wrapper">
				<div className="relative">
					<CarouselButtons
						currentIndex={currentIndex}
						previous={previous}
						next={next}
						listOfFoodItems={listOfFoodItems}
					/>
					<div>
						<div className="p-4 overflow-hidden bg-white">
							<div className="bg-white mb-4 flex justify-between items-baseline overflow-hidden">
								<div className="block">
									<h2 className="mb-0 antialiased font-black text-2xl tracking-[-0.4px] text-[rgba(2,6,12,0.92)] overflow-hidden w-full line-clamp-1 break-words">
										{listOfFoodItems?.card?.header?.title}
									</h2>
								</div>
							</div>
							<div className="overflow-x-scroll overflow-y-hidden -ml-4 -mr-4">
								<FoodItemsCarousel
									foodItems={listOfFoodItems?.card?.gridElements?.infoWithStyle}
									currentIndex={currentIndex}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bottom-wrapper">
				<div className="flex items-center my-8">
					<div className="mr-8">
						<input
							className="px-3 py-3 rounded-md border border-slate-500 mr-3 w-[300px]"
							type="text"
							name="search"
							value={searchText}
							onChange={(e) => {
								setSearchText(e.target.value);
							}}
						/>
						<button
							className="bg-pink-400 hover:bg-pink-500 px-7 py-3 rounded-md text-white transition ease-in-out duration-500"
							onClick={() => {
								const filterRest = listOfRestaurants.filter((res) =>
									res.info.name.toLowerCase().includes(searchText.toLowerCase())
								);
								setFilteredRestaurants(filterRest);
							}}>
							Search
						</button>
					</div>
					<button
						className="bg-pink-400 hover:bg-pink-500 px-7 py-3 rounded-md text-white transition ease-in-out duration-500"
						onClick={() => {
							const filterList = listOfRestaurants.filter(
								(res) => res.info.avgRating > 4.1
							);
							setFilteredRestaurants(filterList);
						}}>
						Top rated Restaurants
					</button>
				</div>
				<div className="grid gap-7 grid-cols-4 mb-16">
					{filteredRestaurants?.map((restaurant) => (
						<Link
							key={restaurant.info.id}
							to={`/restaurants/${restaurant.info.id}`}
							className="relative inline-block w-full h-full">
							{restaurant.info.isNewlyOnboarded ? (
								<RestaurantNewlyOpened resData={restaurant} />
							) : (
								<RestaurantCard key={restaurant.info.id} resData={restaurant} />
							)}
						</Link>
					))}
				</div>
			</div>
		</main>
	);
};

export default Body;
