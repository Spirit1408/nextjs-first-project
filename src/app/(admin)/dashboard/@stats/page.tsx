import StatCard, { StatCardType } from "@/app/components/stat-card";
import { getSummaryStats } from "@/lib/api";
import Link from "next/link";

const labelbyStat = {
	promotions: "Total promotions",
	categories: "Total categories",
	newCompanies: "New companies",
	activeCompanies: "Active companies",
};

export default async function Page() {
	const data = await getSummaryStats();

	return (
		<div className="grid grid-cols-12 gap-5">
			{(Object.keys(data) as (keyof typeof data)[]).map((key) => (
				<Link href={`/dashboard/${key}`} key={key} className="col-span-3">
					<StatCard
						type={StatCardType.Gradient}
						label={labelbyStat[key]}
						counter={data[key]}
					/>
				</Link>
			))}
		</div>
	);
}
