import React from "react";

import { AuthRegisterForm } from "@components/auth";
import Container from "@ui/container";
import Logo from "@ui/logo";

export default function RegisterPage() {
	return (
		<Container>
			<div className="flex flex-col justify-center h-screen max-w-[470px] mx-auto">
				<div className="mb-12 mx-auto cursor-pointer">
					<Logo />
				</div>

				<div className=" flex flex-col gap-[1.5rem]  justify-center bg-white p-[2.5rem] rounded-md">
					<div className="flex flex-col gap-1.5 ">
						<h1 className="text-heading-m">Create account</h1>
						<p className="text-body-m text-grey">Let’s get you started sharing your links!</p>
					</div>

					<AuthRegisterForm />
				</div>
			</div>
		</Container>
	);
}
