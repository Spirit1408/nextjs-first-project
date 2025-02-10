import CustomLink from "../components/CustomLink";

export interface DashboardPageProps {
	// props
}

export default function DashboardPage({}: DashboardPageProps) {
	return (
		<main>
			<h1 className="text-xl">Dashboard Page</h1>
			<CustomLink href="dashboard/settings">To settings</CustomLink>
		</main>
	);
}
