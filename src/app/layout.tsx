import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./components/providers";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<title>NextJS Test App</title>
			</head>
			<body className={font.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
