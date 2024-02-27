import { useSelector } from "react-redux";

const CartTotal = () => {
	const cart = useSelector((state) => state.cart.items);

	const getTotal = () => {
		let totalQuantity = 0;
		let totalPrice = 0;
		let finalPrice = 0;
		cart.forEach((item) => {
			totalQuantity += item.quantity;
			totalPrice += item.itemPrice * item.quantity;
		});
		finalPrice += totalPrice / 100 + 3 + 106.79 + 86;
		return { totalPrice, totalQuantity, finalPrice };
	};

	return (
		<div className="total">
			<h4 className="mb-3 font-bold text-lg">Bill details</h4>
			<div className="text-sm">
				<div className="grid grid-cols-3 gap-6 mb-3">
					<div className="col-span-2">Total Qty</div>
					<div className="text-right">{getTotal().totalQuantity} items</div>
				</div>
				<div className="grid grid-cols-3 gap-6 mb-3">
					<div className="col-span-2">Item total</div>
					<div className="text-right">
						&#8377; {(Math.round(getTotal().totalPrice) / 100).toFixed(2)}
					</div>
				</div>
				<div className="grid grid-cols-3 gap-6 mb-3">
					<div className="col-span-2">Delivery fee | 9.0 kms</div>
					<div className="text-right">
						&#8377; {(Math.round(8600) / 100).toFixed(2)}
					</div>
				</div>
				<hr className="my-4 border-gray-300" />
				<div className="grid grid-cols-3 gap-6 mb-3">
					<div className="col-span-2">Platform fee</div>
					<div className="text-right">
						&#8377; {(Math.round(300) / 100).toFixed(2)}
					</div>
				</div>
				<div className="grid grid-cols-3 gap-6 mb-3">
					<div className="col-span-2">GST and Restaurant Charges</div>
					<div className="text-right">
						&#8377; {(Math.round(10679) / 100).toFixed(2)}
					</div>
				</div>
				<hr className="my-4 border-gray-600" />
				<div className="grid grid-cols-3 gap-6 mb-3 font-bold">
					<div className="col-span-2">TO PAY</div>
					<div className="text-right">
						&#8377; {Math.round(getTotal().finalPrice).toFixed(2)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartTotal;
