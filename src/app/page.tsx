import AddCompanyButton from "./components/add-company-button";

export default function Home() {
	return (
		<main>
			<h1 className="text-3xl font-bold underline mb-2">
				Home page. Local time: {new Date().toTimeString()}
			</h1>
			<AddCompanyButton />
		</main>
	);
}
