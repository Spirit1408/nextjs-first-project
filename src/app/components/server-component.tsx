export interface ServerComponentProps {
	children?: React.ReactNode;
}

export default function ServerComponent({ children }: ServerComponentProps) {
	console.log("ServerComponent rendered");
	return (
		<div>
			<span>Server Component</span>
			{children}
		</div>
	);
}
