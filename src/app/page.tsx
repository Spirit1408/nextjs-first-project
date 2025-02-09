import { Status, StatusLabel } from "./components/status-label";
import { cookies } from "next/headers";

export default function Home() {
	console.log(cookies());

	return (
		<main>
			<h1 className="text-3xl font-bold underline mb-2">
				Home page. Local time: {new Date().toTimeString()}
			</h1>
			<StatusLabel status={Status.Active}>Active</StatusLabel>
			<StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
			<StatusLabel status={Status.Pending}>Pending</StatusLabel>
			<StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
		</main>
	);
}
