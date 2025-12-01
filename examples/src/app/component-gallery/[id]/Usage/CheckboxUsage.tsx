"use client";
import { Spacer } from "@brick-uikit/layout";
import { Checkbox } from "@brick-uikit/input";
import CodeBlock from "@/components/CodeBlock";
import UsageCard from "@/components/UsageCard";
import React from "react";

const example1 = `<Checkbox 
	onChange={handleChange} 
	checked
>
	Accept terms and conditions
</Checkbox>

<Spacer top={1}/>

<Checkbox
	onChange={handleChange}
	error="You must accept terms to continue"
>
	Accept terms and conditions
</Checkbox>
`;



export default function CheckboxUsage() {
	function handleChange() {}

	return (
		<UsageCard
			id="#Checkbox"
			title="Checkbox"
			description="Checkboxes allow users to select one or more options from a list. You can control their state using the `checked` property and handle changes with the `onChange` callback. The `error` property can display validation messages, and `children` allows you to render a label next to the checkbox."
			example={
				<>
					<Checkbox onChange={handleChange} checked>
						Accept terms and conditions
					</Checkbox>
					<Spacer top={1}/>
					<Checkbox
						onChange={handleChange}
						error="You must accept terms to continue"
					>
						Accept terms and conditions
					</Checkbox>
				</>
			}
		>
			<CodeBlock
				title="example.tsx"
				lang="jsx"
				code={example1}
				example
			/>
		</UsageCard>
	);
}
