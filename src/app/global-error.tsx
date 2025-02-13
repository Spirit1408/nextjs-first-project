"use client";

import Button from "./components/button";

export interface GlobalErrorProps {
	error: Error;
	reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
	return (
		<html lang="en">
			<head>
				<title>Error</title>
			</head>
			<body>
				<div className="text-center flex flex-col gap-5 mt-10 items-center">
					<p className="text-2xl">{`Something globally went wrong. ${error.message}`}</p>
					<Button onClick={() => reset()}>Try again</Button>
				</div>
			</body>
		</html>
	);
}
