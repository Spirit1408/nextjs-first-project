import AddCompanyButton from "./components/add-company-button";
import CustomLink from "./components/CustomLink";
import MagickButton from "./components/magic-button";

export default function Home() {
	return (
		<main>
			<h1 className="text-3xl font-bold underline mb-2">
				Home page. Local time: {new Date().toTimeString()}
			</h1>
			<AddCompanyButton />
			<CustomLink href="/dashboard">To dashboard</CustomLink>{" "}
			<CustomLink href="/companies">To companies</CustomLink>{" "}
			<MagickButton />
		</main>
	);
}
