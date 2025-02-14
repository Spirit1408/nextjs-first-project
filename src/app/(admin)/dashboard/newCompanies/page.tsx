import Header from "@/app/components/header";

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface DashboardPageProps {}
/* eslint-enable @typescript-eslint/no-empty-object-type */

export default function DashboardPage({}: DashboardPageProps) {
	return (
		<>
			<Header>Dashboard / New companies</Header>
			<div className="text-2xl text-center mt-5">Some additional info</div>
		</>
	);
}
