'use client';

import Button from "@/app/components/button";

export interface ErrorComponentProps {
	error: Error;
	reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
	return (
		<div className="text-center flex flex-col gap-5 mt-10 items-center">
			<p className="text-2xl">{`Can't load sales. ${error.message}`}</p>
			<Button onClick={() => reset()}>Try again</Button>
		</div>
	);
}
