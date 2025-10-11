"use client";
import { Spacer, Row } from "@brick-uikit/layout";
import { Checkbox } from "@brick-uikit/input";
import CodeBlock from "@/components/CodeBlock";
import styles from "./usage.module.css";

const example1 = `<Checkbox onChange={handleChange}/>
<Spacer top={1}/>
<Checkbox
	onChange={handleChange}
	error="Your error message here"
/>
`;

export default function RowUsage() {
	function handleChange() {}

	return (
		<>
			<div className={styles.render}>
				<Checkbox
					onChange={handleChange}
				/>
				<Spacer top={1}/>
				<Checkbox
					onChange={handleChange}
					error="Your error message here"
				/>
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

