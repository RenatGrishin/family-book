import type { Metadata } from "next";

import "@radix-ui/themes/styles.css";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div>EVENTS</div>;
}
