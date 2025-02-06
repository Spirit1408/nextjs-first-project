import { ActiveLabel } from "./components/active-label";
import { NonActiveLabel } from "./components/non-active-label";

export default function Home() {
	return (
		<main>
			<h1>Home page</h1>
			<ActiveLabel>Active</ActiveLabel>
			<NonActiveLabel>Non active</NonActiveLabel>
		</main>
	);
}
