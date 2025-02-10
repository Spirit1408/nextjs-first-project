import Link from "next/link";

interface LinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
}

export default function CustomLink({ href, children }: LinkProps) {
	return (
		<Link
			href={href}
			className="underline text-blue-600 hover:text-blue-800 ease-in duration-300"
		>
			{children}
		</Link>
	);
}
