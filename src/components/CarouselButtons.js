const CarouselButtons = ({ currentIndex, previous, next, listOfFoodItems }) => {
	return (
		<div className="flex absolute mt-3 right-0">
			{currentIndex != 0 && (
				<button
					className="bg-transparent border-0 cursor-pointer inline m-0 p-0 opacity-50"
					onClick={previous}>
					<div className="leading-none mr-3 rounded-[100%] h-9 pt-2 pl-2 pr-2 pb-1 bg-[rgb(226,226,231)]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5">
							<path
								fillRule="evenodd"
								d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				</button>
			)}
			{currentIndex + 4 !=
				listOfFoodItems?.card?.gridElements?.infoWithStyle?.info?.length && (
				<button
					className="bg-transparent border-0 cursor-pointer inline m-0 p-0 opacity-50"
					onClick={next}>
					<div className="leading-none rounded-[100%] h-9 pt-2 pl-2 pr-2 pb-1 bg-[rgb(226,226,231)]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5">
							<path
								fillRule="evenodd"
								d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				</button>
			)}
		</div>
	);
};

export default CarouselButtons;
