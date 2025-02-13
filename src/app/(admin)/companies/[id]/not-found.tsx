import CustomLink from "@/app/components/CustomLink";

export default function NotFound() {
	return (
		<div className="text-center flex flex-col gap-5 mt-10 items-center">
			<p className="text-2xl">Company not found</p>
			<CustomLink href="/companies">Back to companies</CustomLink>
		</div>
	);
}
