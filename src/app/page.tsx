import CustomLink from "./components/CustomLink";

export default function Home() {
	return (
		<main>
			<h1 className="text-xl">Home page</h1>
			<CustomLink href="/dashboard">To dashboard</CustomLink>{" "}
			<CustomLink href="/companies">To companies</CustomLink>{" "}
		</main>
	);
}
