import CustomLink from "@/app/components/CustomLink";

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface SettingsPageProps {}
/* eslint-enable @typescript-eslint/no-empty-object-type */ 

export default function SettingsPage({}: SettingsPageProps) {
	return (
		<main>
			<h1 className="text-xl">Settings Page</h1>
			<CustomLink href="/">To home page</CustomLink>
		</main>
	);
}
