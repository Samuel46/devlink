import "./globals.css";

import { Instrument_Sans, Inter } from "next/font/google";

import type { Metadata } from "next";
const inter = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Link app",
	description: "A fully-functional link-sharing app for developers!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
