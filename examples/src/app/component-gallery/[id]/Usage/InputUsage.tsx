"use client";
import { Spacer, Row } from "@brick-uikit/layout";
import { Input, TimeInput, DateInput } from "@brick-uikit/input";
import CodeBlock from "@/components/CodeBlock";
import styles from "./usage.module.css";

const example1 = `<Input
	name="input1"
	onChange={handle_change}
/>
<Spacer top={1}/>
<Input
	name="input2"
	onChange={handle_change}
	label="Example label"
	placeholder="Type here"
/>
<Spacer top={1}/>
<Input
	name="input3"
	onChange={handle_change}
	disabled
/>
<Spacer top={1}/>
<Input
	name="input4"
	onChange={handle_change}
	error="Wrong input value"
/>
`;

export default function InputUsage() {
	function handle_change() {
	}

	return (
		<>
			<div className={styles.render}>
				<Input
					name="input1"
					onChange={handle_change}
				/>
				<Spacer top={1}/>
				<Input
					name="input2"
					onChange={handle_change}
					label="Example label"
					placeholder="Type here"
				/>
				<Spacer top={1}/>
				<Input
					name="input3"
					onChange={handle_change}
					disabled
				/>
				<Spacer top={1}/>
				<Input
					name="input4"
					onChange={handle_change}
					error="Wrong input value"
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

