import css from "./active-label.module.css";

export interface ActiveLabelProps {
	children: React.ReactNode;
}

export function ActiveLabel({ children }: ActiveLabelProps) {
	return <span className={css.label}>{children}</span>;
}
