import Image from "next/image";
import innerMobile from "public/images/inner.png";
import onboarding from "public/images/onboarding.png";
import outerMobile from "public/images/outer.png";
import React from "react";

import { Button } from "@ui/button";
import Logo from "@ui/logo";

export default function HomePage() {
	return (
		<div className="p-6 h-screen">
			{/* The outer most container */}
			<div className=" bottom-6  h-full">
				{/* The two section container */}

				<div className="grid grid-rows-layout  grid-cols-layout gap-6 h-full">
					<div className="col-span-2">
						<div className="bg-white py-6 rounded-md flex justify-between px-6 ">
							<Logo />

							<div className="flex items-center gap-4">
								<h6>Link</h6>
								{/* Profile */}
								<p className="text-heading-s text-grey">Profile Details</p>
							</div>

							<div className="flex items-center gap-4">
								<Button variant="outline" className="w-[114px]">
									Preview
								</Button>
							</div>
						</div>
					</div>

					{/* Mobile section */}
					<section className="bg-white h-full  w-full  rounded-md">
						<div className="h-full flex justify-center items-center">
							<div className="relative">
								<Image src={outerMobile} alt="outer_preview" />

								<div className="absolute top-16 left-[35px] z-40 w-full  max-w-[237px] ">
									<div className="w-full">
										<div className="flex flex-col justify-center items-center w-full mb-14">
											<Avatar className="mb-6" />
											<Title className="mb-[0.81rem]" />
											<Email />
										</div>

										<div className="flex flex-col justify-center items-center w-full mb-14 gap-5">
											<Link />
											<Link />
											<Link />
											<Link />
											<Link />
										</div>
									</div>
								</div>

								<div className="absolute top-[10px] left-[11px]">
									<Image src={innerMobile} alt="outer_preview" />
								</div>
							</div>
						</div>
					</section>

					<section className="bg-white h-full flex flex-col w-full rounded-md ">
						{/* Header section */}

						<div className="px-10 pt-10 pb-6 ">
							<div className="pb-10">
								<h1 className="text-heading-m">Customize your links</h1>
								<p className="text-body-m text-grey">
									Add/edit/remove links below and then share all your profiles with the world!
								</p>
							</div>

							<Button variant="outline" className="w-full">
								+ Add new link
							</Button>
						</div>

						{/* Card */}
						<div className="px-10 pb-10">
							<div className="bg-grey-light h-full rounded-md p-5 flex flex-col items-center mb-10 ">
								<Image src={onboarding} alt="onboarding" className="pb-10" />

								<div className="text-center ">
									<h1 className="text-heading-m pb-4">Let’s get you started</h1>

									<p className="text-body-m text-grey  w-[488px]">
										Use the “Add new link” button to get started. Once you have more than one link, you can
										reorder and edit them. We’re here to help you share your profiles with everyone!
									</p>
								</div>
							</div>
						</div>

						{/* Button section */}
						<div className="flex items-center justify-end divide-yellow-50 border-t h-full w-full ">
							<div className="px-10">
								<Button disabled>Save</Button>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

// SVGS

function Avatar({ className }: { className?: string }) {
	return (
		<div className={className}>
			<svg width="97" height="96" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="48.5" cy="48" r="48" fill="#EEEEEE" />
			</svg>
		</div>
	);
}

function Title({ className }: { className?: string }) {
	return (
		<div className={className}>
			<svg width="161" height="16" viewBox="0 0 161 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="0.5" width="160" height="16" rx="8" fill="#EEEEEE" />
			</svg>
		</div>
	);
}

function Email({ className }: { className?: string }) {
	return (
		<div className={className}>
			<svg width="73" height="8" viewBox="0 0 73 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="0.5" width="72" height="8" rx="4" fill="#EEEEEE" />
			</svg>
		</div>
	);
}

function Link({ className }: { className?: string }) {
	return (
		<div className={className}>
			<svg width="237" height="44" viewBox="0 0 237 44" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="237" height="44" rx="8" fill="#EEEEEE" />
			</svg>
		</div>
	);
}
