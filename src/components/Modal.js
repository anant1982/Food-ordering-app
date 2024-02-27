import { Dialog, Transition } from "@headlessui/react";
const Modal = (props) => {
	const { isOpen, closeModal, menuData } = props;

	return (
		<>
			<Transition
				show={isOpen}
				enter="animate-[menuExpand_0.25s_ease-out]"
				enterFrom="animate-[menuExpand_0.25s_ease-out]"
				enterTo="animate-[menuExpand_0.25s_ease-out]"
				leave="animate-[menuExpand_0.25s_ease-out]"
				leaveFrom="animate-[menuExpand_0.25s_ease-out]"
				leaveTo="animate-[menuExpand_0.25s_ease-out]"
				as="div">
				<Dialog
					open={isOpen}
					as="div"
					className="relative z-10"
					onClose={closeModal}>
					<div className="fixed inset-0 bg-[#282c3e99]" />
					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center text-center">
							<Dialog.Panel className="w-full sm:max-w-[500px] sm:max-h-[260px] overflow-auto rounded-xl bg-white pt-7 pr-6 pb-7 pl-10 text-left align-middle shadow-xl transition-all animate-[menuExpand_0.25s_ease-out]">
								{menuData.map((menu, index) => (
									<button
										key={index}
										className="text-left flex items-center w-full text-[16px] text-[#3d4152] mb-5 leading-6 last:mb-0">
										<span className="text-ellipsis overflow-hidden whitespace-nowrap capitalize flex-1">
											{menu.Title}
										</span>
										<span className="ml-4">{menu.Count}</span>
									</button>
								))}
							</Dialog.Panel>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default Modal;
