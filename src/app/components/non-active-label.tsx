import css from "./non-active-label.module.css";

export interface NonActiveLabelProps {
	children: React.ReactNode;
}

export function NonActiveLabel({ children }: NonActiveLabelProps) {
	return <span className={css.label}>{children}</span>;
}
