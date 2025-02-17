"use client";

import { useRouter } from "next/navigation";
import PromotionFormModal from "@/app/components/promotion-form-modal";
import { use } from "react";

export interface PageProps {
	params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
	const { id } = use(params);
	const router = useRouter();
	return (
		<PromotionFormModal
			companyId={id}
			show={true}
			onClose={() => router.back()}
		/>
	);
}