"use client";
import { useState } from "react";

import { cn } from "@lib/utils";
import { Link1Icon } from "@radix-ui/react-icons";
import { Button } from "@ui/button";
import Dropdown from "@ui/drop-down";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tab";
import { TextField } from "@ui/text-field";

export default function Home() {
	const [tab, setTab] = useState("");

	console.log(tab, "tanananan");
	return (
		<div className="container m-auto">
			<h1 className="text-heading-m">Let’s get you started</h1>

			{/* <TextField id="name" placeholder="TextField is Empty" label="Text field" Icon={Link1Icon} />

			<Button variant="outline">Button</Button> */}
			<Dropdown />

			{/* <Tabs defaultValue="account" className="w-[400px]">
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="password">Password</TabsTrigger>
				</TabsList>
				<TabsContent value="account">Make changes to your account here.</TabsContent>
				<TabsContent value="password">Change your password here.</TabsContent>
			</Tabs> */}
		</div>
	);
}
