const RestaurantOffer = ({ offerData }) => {
	return (
		<div>
			<div className="flex overflow-x-scroll overflow-y-hidden snap-x mb-3 pt-3">
				{offerData?.map((offer, index) => (
					<div className="flex mr-3" key={index}>
						<button className="border border-gray-300 rounded-lg p-2 shadow-sm flex items-center min-w-[220px]">
							<div className="flex">
								{offer.info.offerTag ? (
									<p
										className="text-center pl-1 transform rotate-180 font-semibold text-[9px] [writing-mode:vertical-lr] border-l border-[#e9e9eb]"
										style={{ color: offer.info.offerTagColor }}>
										{offer.info.offerTag}
									</p>
								) : (
									""
								)}
								<div
									className={
										offer.info.offerTag
											? "my-2 ml-2 flex flex-col justify-center"
											: "my-2"
									}>
									<div className="flex items-center">
										<img
											className="mr-2 w-5"
											src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart"
										/>
										<p className="text-[13px] font-semibold">
											{offer.info.header}
										</p>
									</div>
									<div className="flex items-center mt-1 text-ellipsis overflow-hidden text-gray-500 font-semibold max-w-[200px] whitespace-nowrap">
										<span className="text-[9px]">{offer.info.couponCode}</span>{" "}
										<span className="text-[9px] inline-block mx-1 -mt-0.5">
											{"|"}
										</span>
										<span className="text-[9px]">{offer.info.description}</span>
									</div>
								</div>
							</div>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
export default RestaurantOffer;
