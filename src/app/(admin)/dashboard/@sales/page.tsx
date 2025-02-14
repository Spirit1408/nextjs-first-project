import DashboardCard from "@/app/components/dashboard-card";
import { getSummarySales } from "@/lib/api";
import SummaryTable from "@/app/components/summary-table";
import SummaryTableHeader from "@/app/components/summary-table-header";
import SummaryTableCell from "@/app/components/summary-table-cell";
import MagicButton from "@/app/components/magic-button";

export default async function Page() {
	const data = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(getSummarySales());
		}, 4000);
	});

	return (
		<DashboardCard
			label={
				<>
					Sales details <MagicButton />
				</>
			}
		>
			<SummaryTable
				headers={
					<>
						<SummaryTableHeader>Company</SummaryTableHeader>
						<SummaryTableHeader align="center">Sold</SummaryTableHeader>
						<SummaryTableHeader align="center">income</SummaryTableHeader>
					</>
				}
			>
				{data.map(({ companyId, companyTitle, sold, income }) => (
					<tr key={companyId}>
						<SummaryTableCell>{companyTitle}</SummaryTableCell>
						<SummaryTableCell align="center">{sold}</SummaryTableCell>
						<SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
					</tr>
				))}
			</SummaryTable>
		</DashboardCard>
	);
}
