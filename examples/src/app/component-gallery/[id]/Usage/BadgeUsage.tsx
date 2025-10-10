import { Spacer, Row } from "@brick-uikit/layout";
import { Badge } from "@brick-uikit/display";
import CodeBlock from "@/components/CodeBlock";
import styles from "./usage.module.css";

const example1 = `<Row>
	<Badge>Default</Badge>
	<Badge accent mini>Accent</Badge>
	<Badge secondary>Secondary</Badge>
	<Badge outline>Outline</Badge>
</Row>
`;

export default function BadgeUsage() {
	return (
		<>
			<div className={styles.render}>
				<Row>
					<Badge>Default</Badge>
					<Badge accent mini>Accent</Badge>
					<Badge secondary>Secondary</Badge>
					<Badge outline>Outline</Badge>
				</Row>
			</div>
			<CodeBlock
				title="example.tsx"
				lang="jsx"
				code={example1}
				example
			/>
		</>
	) 
}

