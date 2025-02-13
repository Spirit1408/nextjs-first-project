import MagicButton from "@/app/components/magic-button";
import CustomLink from "../../components/CustomLink";

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface DashboardPageProps {}
/* eslint-enable @typescript-eslint/no-empty-object-type */


export default function DashboardPage({}: DashboardPageProps) {
	return (
		<main className="px-10 pt-5">
			<h1 className="text-xl">Dashboard Page</h1>
			<CustomLink href="dashboard/settings">To settings</CustomLink>{" "}
			<MagicButton />
		</main>
	);
}
