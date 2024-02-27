const Shimmer = () => {
	return (
		<>
			<div className="animate-pulse w-full mx-auto p-4 max-w-[900px] mt-[130px]">
				<div className="flex justify-between">
					<div>
						<div className="bg-slate-200 h-5 w-[300px] mb-3"></div>
						<span className="bg-slate-200 h-3 w-[200px] mb-3 inline-block"></span>
						<p className="bg-slate-200 h-3 w-[100px] mb-3"></p>
					</div>
					<div className="border border-slate-200 rounded-md p-2">
						<div className="flex items-center mb-3">
							<div className="rounded-full bg-slate-200 h-5 w-5 mr-3"></div>
							<span className="bg-slate-200 h-3 w-[40px] inline-block"></span>
						</div>
						<p className="bg-slate-200 h-3 w-[60px] mb-3"></p>
					</div>
				</div>
				<ul className="mt-4">
					<li className="flex items-center">
						<div className="rounded-full bg-slate-200 h-5 w-5 mr-3"></div>
						<span className="bg-slate-200 h-3 w-[240px] inline-block"></span>
					</li>
				</ul>
				<hr className="border border-dashed border-slate-200 my-5" />
				<div className="mb-3">
					<ul className="flex items-center">
						<li className="flex items-center mr-4">
							<div className="rounded-full bg-slate-200 h-5 w-5 mr-3"></div>
							<span className="bg-slate-200 h-3 w-[60px] inline-block"></span>
						</li>
						<li className="flex items-center">
							<div className="rounded-full bg-slate-200 h-5 w-5 mr-3"></div>
							<span className="bg-slate-200 h-3 w-[60px] inline-block"></span>
						</li>
					</ul>
				</div>
				<div>
					<div className="flex overflow-x-scroll overflow-y-hidden snap-x mb-3 pt-3">
						<div className="flex mr-3">
							<button className="border  border-slate-200 rounded-lg p-2 shadow-sm h-[90px] flex items-center min-w-[220px] mr-3">
								<div className="flex">
									<div className="my-2 ml-2 flex flex-col justify-center">
										<div className="flex items-center mb-2">
											<div className="rounded-full bg-slate-200 h-5 w-5 mr-3"></div>
											<p className="bg-slate-200 h-3 w-[153px]"></p>
										</div>
										<div className="flex items-center mt-1 text-ellipsis overflow-hidden text-gray-500 font-semibold">
											<span className="bg-slate-200 h-3 w-[82px] inline-block"></span>
											<span className="bg-slate-200 h-3 w-[5px] inline-block mx-2"></span>
											<span className="bg-slate-200 h-3 w-[82px] inline-block"></span>
										</div>
									</div>
								</div>
							</button>
							<button className="border  border-slate-200 rounded-lg p-2 shadow-sm h-[90px] flex items-center min-w-[220px] mr-3">
								<div className="flex">
									<div className="my-2 ml-2 flex flex-col justify-center">
										<div className="flex items-center mb-2">
											<div className="rounded-full bg-slate-200 h-5 w-5 mr-3"></div>
											<p className="bg-slate-200 h-3 w-[153px]"></p>
										</div>
										<div className="flex items-center mt-1 text-ellipsis overflow-hidden text-gray-500 font-semibold">
											<span className="bg-slate-200 h-3 w-[82px] inline-block"></span>
											<span className="bg-slate-200 h-3 w-[5px] inline-block mx-2"></span>
											<span className="bg-slate-200 h-3 w-[82px] inline-block"></span>
										</div>
									</div>
								</div>
							</button>
							<button className="border  border-slate-200 rounded-lg p-2 shadow-sm h-[90px] flex items-center min-w-[220px] mr-3">
								<div className="flex">
									<div className="my-2 ml-2 flex flex-col justify-center">
										<div className="flex items-center mb-2">
											<div className="rounded-full bg-slate-200 h-5 w-5 mr-3"></div>
											<p className="bg-slate-200 h-3 w-[153px]"></p>
										</div>
										<div className="flex items-center mt-1 text-ellipsis overflow-hidden text-gray-500 font-semibold">
											<span className="bg-slate-200 h-3 w-[82px] inline-block"></span>
											<span className="bg-slate-200 h-3 w-[5px] inline-block mx-2"></span>
											<span className="bg-slate-200 h-3 w-[82px] inline-block"></span>
										</div>
									</div>
								</div>
							</button>
						</div>
					</div>
				</div>
				<div className="grid gap-5 grid-cols-2 my-16">
					<div>
						<div className="bg-slate-200 w-full h-64 mb-4"></div>
						<div className="flex items-end justify-between">
							<div className="flex flex-col">
								<span className="bg-slate-200 h-3 w-[150px] inline-block mb-3"></span>
								<span className="bg-slate-200 h-3 w-[85px] inline-block mb-3"></span>
								<span className="bg-slate-200 h-3 w-[50px] inline-block mb-3"></span>
							</div>
							<div>
								<div className="bg-slate-200 h-8 w-24 inline-block"></div>
							</div>
						</div>
					</div>
					<div>
						<div className="bg-slate-200 w-full h-64 mb-4"></div>
						<div className="flex items-end justify-between">
							<div className="flex flex-col">
								<span className="bg-slate-200 h-3 w-[150px] inline-block mb-3"></span>
								<span className="bg-slate-200 h-3 w-[85px] inline-block mb-3"></span>
								<span className="bg-slate-200 h-3 w-[50px] inline-block mb-3"></span>
							</div>
							<div>
								<div className="bg-slate-200 h-8 w-24 inline-block"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Shimmer;
