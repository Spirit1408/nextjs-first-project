"use client";

import { use, useEffect } from "react";
import Header from "../../../components/header";
import { notFound } from "next/navigation";

export interface PageProps {
	params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
	const { id: rawId } = use(params);
	const id = Number.parseInt(rawId);

	useEffect(() => {
		if (Number.isNaN(id)) {
			notFound();
		}
	}, [id]);

	return (
		<>
			<Header>Company ({id})</Header>
			<p className="text-2xl text-center mt-5">Some selected company</p>
			<p className="text-xl text-center mt-2">{new Date().toTimeString()}</p>
		</>
	);
}
