import AddCompanyButton from "../../components/add-company-button";
import CompanyRow from "../../components/company-row";
import CompanyTable from "../../components/company-table";
import Header from "../../components/header";
import SearchInput from "../../components/search-input";
import Toolbar from "../../components/toolbar";
import { Status } from "@/app/components/status-label";

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface PageProps {}
/* eslint-enable @typescript-eslint/no-empty-object-type */

export default function Page({}: PageProps) {
	return (
		<>
			<Header>Companies</Header>
			<Toolbar action={<AddCompanyButton />}>
				<SearchInput placeholder="Search companies" />
			</Toolbar>
			<CompanyTable>
				<CompanyRow
					id={1}
					category="Products"
					company="Costco"
					status={Status.Active}
					promotion={true}
					country="USA"
					joinedDate="02.10.2025"
				/>
			</CompanyTable>
		</>
	);
}
