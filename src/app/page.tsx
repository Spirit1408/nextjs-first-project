import AddCompanyButton from "./components/add-company-button";
import ClientComponent from "./components/client-component";
import ServerComponent from "./components/server-component";
import ServerComponentCopy from "./components/server-component-copy";

export default function Home() {
	return (
		<main>
			<h1 className="text-3xl font-bold underline mb-2">
				Home page. Local time: {new Date().toTimeString()}
			</h1>
			<AddCompanyButton />
			<ServerComponent />
			<ClientComponent>
				<ServerComponentCopy />
			</ClientComponent>
		</main>
	);
}
