import Link from "next/link";
import React from "react";

import { EnvelopeOpenIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button } from "@ui/button";
import { TextField } from "@ui/text-field";

export default function AuthLoginForm() {
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

				<TextField id="password" type="email" placeholder="Enter your password" label="Password" Icon={LockClosedIcon} />

				<Button>Login</Button>

				<p className="text-body-m text-center text-grey">
					Don’t have an account?{" "}
					<Link href="/register" className="text-purple cursor-pointer">
						Create account
					</Link>
				</p>
			</form>
		</div>
	);
}
