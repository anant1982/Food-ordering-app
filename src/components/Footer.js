import { Link } from "react-router-dom";
import LOGO_IMG from "../images/restaurant-white.png";
const Footer = () => {
	const year = new Date();
	return (
		<footer className="pt-16 pb-10 bg-gray-800 text-[rgba(255,255,255,0.6)] px-5">
			<div className="xl:container mx-auto">
				<div className="grid grid-cols-4 gap-7 mb-10">
					<div className="col-span-1">
						<Link to="/">
							<img className="w-20" src={LOGO_IMG} alt="site-logo" />
						</Link>
					</div>
					<div>
						<h2 className="text-xl font-bold mb-5 text-white">Company</h2>
						<ul className="">
							<li className="mb-3">
								<Link
									to="/"
									className="transition ease-in-out duration-500 hover:text-pink-400">
									Home
								</Link>
							</li>
							<li className="mb-3">
								<Link
									to="/about"
									className="transition ease-in-out duration-500 hover:text-pink-400">
									About
								</Link>
							</li>
							<li className="mb-3">
								<Link
									to="/contact"
									className="transition ease-in-out duration-500 hover:text-pink-400">
									Contact
								</Link>
							</li>
							<li className="mb-3">
								<a
									href="#"
									className="transition ease-in-out duration-500 hover:text-pink-400">
									Careers
								</a>
							</li>
							<li className="mb-3">
								<a
									href="#"
									className="transition ease-in-out duration-500 hover:text-pink-400">
									Team
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="text-xl font-bold mb-5 text-white">Contact us</h2>
						<ul className="">
							<li className="mb-3">
								<a
									href="#"
									className="transition ease-in-out duration-500 hover:text-pink-400">
									Terms & Conditions
								</a>
							</li>
							<li className="mb-3">
								<a
									href="#"
									className="transition ease-in-out duration-500 hover:text-pink-400">
									Privacy Policy
								</a>
							</li>
							<li className="mb-3">
								<a
									href="#"
									className="transition ease-in-out duration-500 hover:text-pink-400">
									Cookie Policy
								</a>
							</li>
							<li className="mb-3">
								<a
									href="#"
									className="transition ease-in-out duration-500 hover:text-pink-400">
									Help & Support
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="text-xl font-bold mb-5 text-white">
							We deliver to:
						</h2>
						<ul className="">
							<li className="mb-3">
								<a
									href="#"
									className="transition ease-in-out duration-500 hover:text-pink-400">
									Banglore
								</a>
							</li>
							<li className="mb-3">
								<a
									href="#"
									className="transition ease-in-out duration-500 hover:text-pink-400">
									Gurgaon
								</a>
							</li>
							<li className="mb-3">
								<a
									href="#"
									className="transition ease-in-out duration-500 hover:text-pink-400">
									Hyderabad
								</a>
							</li>
							<li className="mb-3">
								<a
									href="#"
									className="transition ease-in-out duration-500 hover:text-pink-400">
									Delhi
								</a>
							</li>
							<li className="mb-3">
								<a
									href="#"
									className="transition ease-in-out duration-500 hover:text-pink-400">
									Mumbai
								</a>
							</li>
							<li className="mb-3">
								<a
									href="#"
									className="transition ease-in-out duration-500 hover:text-pink-400">
									Pune
								</a>
							</li>
						</ul>
					</div>
				</div>
				<p className="text-center">
					&copy; {year.getFullYear()} Mysite. All rights reserved.
				</p>
			</div>
		</footer>
	);
};
export default Footer;
