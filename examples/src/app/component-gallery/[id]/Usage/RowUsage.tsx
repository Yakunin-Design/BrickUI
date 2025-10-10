import { Spacer, Row } from "@brick-uikit/layout";
import CodeBlock from "@/components/CodeBlock";
import styles from "./usage.module.css";

const example1 = `<Row>
	<h4>Title</h4>
	<p>Here is how you would use Row component</p>
</Row>
`;

const example2 = `<Row gap={1}>
	<h4>Title</h4>
	<p>Here is how you would use Row component</p>
</Row>
`;


export default function RowUsage() {
	return (
		<>
			<p>By default if you use Row, child elements will position with space between them</p>
			<Spacer top={1}/>
			<div className={styles.render}>
				<Row>
					<h4>Look to the right</h4>
					<p>Here is how you would use Row component</p>
				</Row>
			</div>
			<CodeBlock
				title="example.tsx"
				lang="jsx"
				code={example1}
				example
			/>
			<Spacer top={2}/>
			<h2>Gap</h2>
			<p>You can use the gap property, and the row component will position the elements on gap width you give it. The gap number is set in rems</p>
			<Spacer top={1}/>
			<div className={styles.render}>
				<Row gap={1}>
					<h4>Title</h4>
					<p>Here is how you would use Row component</p>
				</Row>
			</div>
			<CodeBlock
				title="example.tsx"
				lang="jsx"
				code={example2}
				example
			/>
		</>
	) 
}

