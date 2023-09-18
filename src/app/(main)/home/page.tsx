"use client";

import React from "react";

import { LinkDetails, ProfileDetails } from "@components/home";
import { Tabs } from "@ui/tab";

/**
 * Renders the home page with tabs for displaying link details and profile details.
 * @returns {JSX.Element} The rendered home page.
 */
export default function HomePage(): JSX.Element {
	return (
		<Tabs defaultValue="link" className="w-full p-6 h-screen">
			{/* Profile section */}
			<ProfileDetails />
			{/* Link section */}
			<LinkDetails />
		</Tabs>
	);
}
