"use client";
import Image from "next/image";
import React from "react";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@ui/button";

export default function PreviewSection() {
	return (
		<div className="flex flex-col  h-screen  text-center ">
			<section className="basis-96 bg-purple h-full rounded-b-[2rem] py-6 px-6 relative">
				<div className="bg-white py-4 px-6  rounded-md flex w-full justify-between">
					<Button variant="outline">Back to Editor</Button>

					<Button>Share Link</Button>
				</div>
			</section>

			<section className="  w-full flex items-center justify-center">
				<div className="bg-white  w-[21.8rem]  absolute top-56 rounded-md shadow-preview-box py-12 px-14">
					<header className="flex flex-col items-center  gap-y-[1.56rem] pb-14">
						<Image
							width={600}
							height={400}
							className=" h-[6.5rem] w-[6.5rem] object-cover rounded-full outline outline-8 outline-purple"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt="profile image"
						/>

						<article className="flex flex-col gap-y-2">
							<p className=" text-heading-m">Ben Wright</p>

							<p className=" text-body-m text-grey">ben@example.com</p>
						</article>
					</header>

					<ul className="flex flex-col gap-y-5" role="list">
						<li className="flex items-center justify-between bg-black p-4 rounded-md text-white">
							<p>GitHub</p>
							<ArrowRightIcon />
						</li>
						<li className="flex items-center justify-between bg-black p-4 rounded-md text-white">
							<p>GitHub</p>
							<ArrowRightIcon />
						</li>
						<li className="flex items-center justify-between bg-black p-4 rounded-md text-white">
							<p>GitHub</p>
							<ArrowRightIcon />
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
