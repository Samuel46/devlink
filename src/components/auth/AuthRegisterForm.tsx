import Link from "next/link";
import React from "react";

import { EnvelopeOpenIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button } from "@ui/button";
import { TextField } from "@ui/text-field";

export default function AuthRegisterForm() {
	return (
		<div>
			<form className="flex flex-col gap-[1.5rem]">
				<TextField
					id="email"
					type="email"
					placeholder="e.g. alex@email.com"
					label="Email address"
					Icon={EnvelopeOpenIcon}
				/>

				<TextField
					id="password"
					type="email"
					placeholder="At least 8 characters"
					label="Create password"
					Icon={LockClosedIcon}
				/>

				<TextField
					id="password"
					type="email"
					placeholder="At least 8 characters"
					label="Confirm password"
					Icon={LockClosedIcon}
				/>

				<p className="text-body-s text-grey">Password must contain at least 8 characters</p>

				<Button>Create new account</Button>

				<p className="text-body-m text-center text-grey">
					Already have an account?{" "}
					<Link href="/login" className="text-purple cursor-pointer">
						Login
					</Link>
				</p>
			</form>
		</div>
	);
}
