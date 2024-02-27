const ShimmerHome = () => {
	return (
		<div className="mt-[130px]">
			<div className="bg-[#171a29] h-[400px] w-full flex flex-col">
				<div className="flex justify-center items-center w-[50px] h-[50px] mt-28 relative self-center">
					<div className="absolute -inset-4 border-4  border-slate-100 rounded-full animate-pulse"></div>
					<div className="absolute -inset-4 border-4 border-black/5 rounded-full animate-pulse"></div>
					<img
						className="absolute inset-0 m-auto rounded-full animate-pulse"
						src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"
						alt="shimmer"
					/>
				</div>
				<h1 className="text-white self-center item-center font-semibold text-[35px] mt-10 animate-pulse">
					Looking for great food near you...
				</h1>
			</div>
			<div className="grid grid-flow-col gap-12 max-w-[1200px] mx-auto pb-8">
				<div className="row-span-3 border-2 border-slate-200 border-t-0">
					{Array(10)
						.fill("")
						.map((e, index) => (
							<div
								key={index}
								className={
									index == 0
										? "bg-slate-200 mt-10 animate-pulse flex items-center pl-8 pt-6 pr-5 pb-6"
										: "animate-pulse flex items-center pl-8 pt-6 pr-5 pb-6"
								}>
								<div
									className={
										index == 0
											? "w-12 h-12 bg-white rounded-full mr-4"
											: "w-12 h-12 bg-slate-200 rounded-full mr-4"
									}></div>
								<p
									className={
										index == 0
											? "leading-relaxed w-[80px] h-3 bg-white"
											: "leading-relaxed w-[80px] h-3 bg-slate-200"
									}></p>
							</div>
						))}
				</div>
				<div className="col-span-3 pt-16 animate-pulse">
					<div className="w-[100px] h-3 bg-slate-200 mb-10"></div>
					<div className="grid gap-10 grid-cols-3 grid-rows-4">
						{Array(12)
							.fill("")
							.map((e, index) => (
								<div key={index} className="border-slate-200 rounded-md">
									<div className="w-full h-[180px] bg-slate-200 rounded-md"></div>
									<p className="leading-relaxed mt-4 mb-3 w-[150px] h-3 bg-slate-200 rounded-sm"></p>
									<p className="leading-relaxed mb-3 w-[95px] h-3 bg-slate-200 rounded-sm"></p>
									<p className="leading-relaxed w-[50px] h-3 bg-slate-200 rounded-sm"></p>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShimmerHome;
