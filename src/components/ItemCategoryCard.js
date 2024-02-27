import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import MenuItems from "./MenuItems";

const ItemCategoryCard = (props) => {
	const { menuItems, categoryTitle } = props;

	return (
		<>
			<Disclosure as="div" className="px-4">
				{({ open }) => (
					<>
						<Disclosure.Button className="py-2 flex items-center w-full justify-between">
							<h5 className="text-[17px] font-bold">
								{categoryTitle} ({menuItems.itemCards.length})
							</h5>
							<ChevronUpIcon
								className={`${
									open ? "" : "rotate-180 transform"
								} h-8 w-8 text-black`}
							/>
						</Disclosure.Button>
						{menuItems.itemCards.map((menuItem, index) => (
							<Disclosure.Panel as="div" key={index}>
								<MenuItems
									items={menuItem}
									itemsLength={menuItems.itemCards.length}
									itemIndex={index}
								/>
							</Disclosure.Panel>
						))}
					</>
				)}
			</Disclosure>
		</>
	);
};

export default ItemCategoryCard;
