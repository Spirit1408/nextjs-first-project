import CustomLink from "@/app/components/CustomLink";

export interface SettingsPageProps {
	// props
}

export default function SettingsPage({}: SettingsPageProps) {
	return (
		<main>
			<h1 className="text-xl">Settings Page</h1>
			<CustomLink href="/">To home page</CustomLink>
		</main>
	);
}
