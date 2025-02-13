import Header from "../../../components/header";

export interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
	const resolvedParams = await params;
	
	return (
		<>
			<Header>Company ({resolvedParams.id})</Header>
			<p className="text-2xl text-center mt-5">Some selected company</p>
			<p className="text-xl text-center mt-2">{new Date().toTimeString()}</p>
		</>
	);
}
