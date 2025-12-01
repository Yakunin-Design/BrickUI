"use client";
import { Spacer } from "@brick-uikit/layout";
import { Input } from "@brick-uikit/input";
import CodeBlock from "@/components/CodeBlock";
import UsageCard from "@/components/UsageCard";
import React, { ChangeEvent, useState, CSSProperties } from "react";
import styles from "./usage.module.css";

const basicExample = `<Input type="email" label="Email" placeholder="Enter your email" />
<Spacer top={1}/>
<Input name="phone" type="tel" placeholder="Enter your phone" />
<Spacer top={1}/>
<Input error="Invalid input" />`;

const sizeExample = `<Input min={5}  placeholder="Min 5 chars" />
<Spacer top={1}/>
<Input max={10} placeholder="Max 10 chars" />`;

const customizationExample = `<Input style={{
	border: "1px solid #931a04", background: "#fff8f5", color: "#931a04" }}
	placeholder="Custom style" />
<Spacer top={1}/>
<Input className={styles.customInput} placeholder="Custom class" />`;

const logicExample = `<Input name="email" onChange={handleChange} label="Email" type="email" placeholder="Enter email" />
<Spacer top={1}/>
<Input name="phone" onChange={handleChange} label="Phone" type="tel" placeholder="Enter phone" />
<Spacer top={1}/>
<Input name="disabled" onChange={handleChange} disabled placeholder="Disabled input" />
<Spacer top={1}/>
<Input name="validated" onChange={handleChange} pattern="[A-Za-z]{3,10}" maxLength={10} error="Must be 3-10 letters" placeholder="Validation example" />`;

export default function InputUsage() {
	const [values, setValues] = useState({
		input1: "",
		input2: "",
		input3: "",
		input4: "",
		input5: "",
		input6: "",
		input7: "",
		input8: "",
		input9: "",
		email: "",
		phone: "",
		disabled: "",
		validated: "",
	});

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		setValues(prev => ({ ...prev, [name]: value }));
	}

	return (
		<>
			{/* Basic usage */}
			<UsageCard
				id="#InputBasic"
				title="Basic usage"
				description="Basic usage covers the default Input, with optional label, placeholder, and error message."
				example={
					<>
						<Input type="email" label="Email" placeholder="Enter your email" />
						<Spacer top={1}/>
						<Input name="phone" type="tel" placeholder="Enter your phone" />
						<Spacer top={1}/>
						<Input error="Invalid input" />
					</>
				}
			>
				<CodeBlock
					title="example.tsx"
					lang="jsx"
					code={basicExample}
					example
				/>
			</UsageCard>

			{/* Size / Width */}
			<Spacer top={3}/>
			<UsageCard
				id="#InputSize"
				title="Size / Width"
				description="Adjust input width using `style` or CSS, and enforce character limits using `min` and `max` props."
				example={
					<>
						<Input min={5}  placeholder="Min 5 chars" />
						<Spacer top={1}/>
						<Input max={10} placeholder="Max 10 chars" />
					</>
				}
			>
				<CodeBlock
					title="example.tsx"
					lang="jsx"
					code={sizeExample}
					example
				/>
			</UsageCard>

			{/* Customization */}
			<Spacer top={3}/>
			<UsageCard
				id="#InputCustomization"
				title="Customization"
				description="Use `className` or `style` to customize appearance. Apply custom borders, background colors, or other CSS adjustments."
				example={
					<>
						<Input style={{
							border: "1px solid #931a04", background: "#fff8f5", color: "#931a04" }}
							placeholder="Custom style" />
						<Spacer top={1}/>
						<Input className={styles.customInput} placeholder="Custom class" />
					</>
				}
			>
				<CodeBlock
					title="example.tsx"
					lang="jsx"
					code={customizationExample}
					example
				/>
			</UsageCard>

			{/* Logic patterns */}
			<Spacer top={3}/>
			<UsageCard
				id="#InputLogic"
				title="Logic patterns"
				description="Controlled inputs, disabled state, validation, and type variations for email and phone."
				example={
					<>
						<Input name="email" onChange={handleChange} label="Email" type="email" placeholder="Enter email" />
						<Spacer top={1}/>
						<Input name="phone" onChange={handleChange} label="Phone" type="tel" placeholder="Enter phone" />
						<Spacer top={1}/>
						<Input name="disabled" onChange={handleChange} disabled placeholder="Disabled input" />
						<Spacer top={1}/>
						<Input name="validated" onChange={handleChange} pattern="[A-Za-z]{3,10}" maxLength={10} error="Must be 3-10 letters" placeholder="Validation example" />
					</>
				}
			>
				<CodeBlock
					title="example.tsx"
					lang="jsx"
					code={logicExample}
					example
				/>
			</UsageCard>
		</>
	);
}
