"use client";

import { useRouter } from "next/navigation";
import Button from "./button";

export default function AddCompanyButton() {
	const router = useRouter();

	return (
		<>
			<Button onClick={() => router.push("/companies/new")}>Add company</Button>
		</>
	);
}
