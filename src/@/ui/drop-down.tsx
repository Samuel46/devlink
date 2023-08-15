import { Fragment, useState } from "react";

import { Listbox, Transition } from "@headlessui/react";
import { cn } from "@lib/utils";

const people = [
	{ id: 1, name: "Wade Cooper" },
	{ id: 2, name: "Arlene Mccoy" },
	{ id: 3, name: "Devon Webb" },
	{ id: 4, name: "Tom Cook" },
	{ id: 5, name: "Tanya Fox" },
	{ id: 6, name: "Hellen Schmidt" },
	{ id: 7, name: "Caroline Schultz" },
	{ id: 8, name: "Mason Heaney" },
	{ id: 9, name: "Claudie Smitham" },
	{ id: 10, name: "Emil Schaefer" },
];

export default function Dropdown() {
	const [selected, setSelected] = useState(people[3]);

	return (
		<Listbox value={selected} onChange={setSelected}>
			{({ open }) => (
				<>
					<Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Listbox.Label>
					<div className="relative mt-2">
						<Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white py-[0.75rem] border-[1px] border-input px-4 text-left text-grey-dark hover:shadow-md hover:border-purple transition-colors focus:outline-none focus:border-purple">
							<span className="block truncate text-body-m">{selected.name}</span>
							<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
								{open ? <OpenMenu /> : <CloseMenu />}
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="absolute z-10 mt-2 max-h-60 w-full text-body-m px-4 divide-y overflow-auto rounded-md bg-white border no-scrollbar   focus:outline-none ">
								{people.map((person) => (
									<Listbox.Option
										key={person.id}
										className={({ active }) =>
											cn(
												active ? "text-grey" : "text-grey-dark",
												"relative cursor-pointer select-none   pr-9"
											)
										}
										value={person}
									>
										{({ selected }) => (
											<>
												<span
													className={cn(
														selected ? "text-purple" : "font-normal",
														"block truncate border-black py-4"
													)}
												>
													{person.name}
												</span>
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</>
			)}
		</Listbox>
	);
}

function OpenMenu() {
	return (
		<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M13 8L7 2L1 8" stroke="#633CFF" stroke-width="2" />
		</svg>
	);
}

function CloseMenu() {
	return (
		<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 1L7 7L13 1" stroke="#633CFF" stroke-width="2" />
		</svg>
	);
}
