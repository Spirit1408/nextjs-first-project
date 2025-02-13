"use client";
import Image from "next/image";
import SidebarItem from "@/app/components/sidebar-item";
import { usePathname, useRouter } from "next/navigation";

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface SidebarProps {}
/* eslint-enable @typescript-eslint/no-empty-object-type */

export default function Sidebar({}: SidebarProps) {
	const router = useRouter();
	const pathname = usePathname();
	const handleExitClick = () => {
		router.push("/");
	};

	return (
		<aside className="fixed top-0 left-0 z-40 w-60 h-screen">
			<div className="flex flex-col h-full overflow-y-auto bg-gray-900">
				<Image
					className="py-8 mb-11 mx-auto"
					width={122}
					height={25}
					src="/icons/logo.svg"
					alt="logo"
				/>
				<ul className="space-y-7">
					<SidebarItem
						pathname="/dashboard"
						src="/icons/squares.svg"
						alt="dashboard icon"
						current={pathname === "/dashboard"}
					>
						Dashboard
					</SidebarItem>
					<SidebarItem
						pathname="/companies"
						src="/icons/briefcase.svg"
						alt="companies icon"
						current={pathname === "/companies"}
					>
						Companies
					</SidebarItem>
				</ul>
				<button
					type="button"
					className="flex items-center gap-2 p-6 mt-auto mx-auto"
					onClick={handleExitClick}
				>
					<Image
						width={18}
						height={18}
						src="/icons/arrow-left-on-rectangle.svg"
						alt="exit icon"
					/>
					<span className="font-medium text-white">Exit</span>
				</button>
			</div>
		</aside>
	);
}
