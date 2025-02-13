"use client";

import { useEffect, useState } from "react";
import Button, { ButtonProps } from "./button";

export default function MagicButton(props: ButtonProps) {
	const [count, setCount] = useState(0);
	const handleClick = () => setCount(count + 1);

	useEffect(() => {
		if (count > 2) {
			throw new Error("Magic button clicked too many times");
		}
	}, [count]);

	return (
		<Button {...props} onClick={handleClick}>
			Magick button
		</Button>
	);
}
