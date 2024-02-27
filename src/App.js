import React from "react";
import ReactDOM from "react-dom/client";
import "../main.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const AppLayout = () => (
	<Provider store={appStore}>
		<div className="app-container">
			<Header />
			<Outlet />
			<Footer />
		</div>
	</Provider>
);

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurants/:resId",
				element: <RestaurantMenu />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
