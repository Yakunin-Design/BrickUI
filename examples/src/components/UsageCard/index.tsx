import { Spacer } from "@brick-uikit/layout";
import CodeBlock from "@/components/CodeBlock";
import styles from "./usage_card.module.css";

interface UsageCardProps {
	id?: string;
	title?: string;
	description?: string;
	example?: React.ReactNode;
	children: React.ReactNode;
}

export default function UsageCard({ id, title, description, example, children }: UsageCardProps) {
	return (
		<>
			<Spacer top={3} />
			{title && <h2 id={id}>{title}</h2>}
			{description && (
				<>
					<Spacer top={1} />
					<p>{description}</p>
				</>
			)}

			<Spacer top={1} />
			{example && <div className={styles.render}>{example}</div>}

			{children}
		</>
	);
}