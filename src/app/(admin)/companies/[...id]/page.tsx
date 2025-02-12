import Header from "../../../components/header";

export interface PageProps {
	params: { id: string[] };
}

export default function Page({ params }: PageProps) {
	return (
		<>
			<Header>Company ({String(params.id)})</Header>
			<p className="text-2xl text-center mt-5">Some selected company</p>
			<p className="text-xl text-center mt-2">{new Date().toTimeString()}</p>
		</>
	);
}
