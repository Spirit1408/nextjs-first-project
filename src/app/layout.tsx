import React from "react";
import "./globals.css";

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
			<body>{children}</body>
		</html>
	);
}
