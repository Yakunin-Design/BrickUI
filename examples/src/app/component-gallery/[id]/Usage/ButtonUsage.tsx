import { Spacer, Row } from "@brick-uikit/layout";
import {Button, Input} from "@brick-uikit/input";
import CodeBlock from "@/components/CodeBlock";
import styles from "./usage.module.css";
import UsageCard from "@/components/UsageCard";
import React from "react";

const example1 = `<Row>
	<Button>Default</Button>
	<Button secondary>Secondary</Button>
	<Button outline>Outline</Button>
	<Button ghost>Ghost</Button>
</Row>
`;

const example2 = `<Row>
	<Button link href={"#LogicState"}>Link</Button>
	<Button disabled>Disabled</Button>
	<Button destructive>Destructive</Button>
</Row>
`;

const example3 = `<h3>Install BrickUI?</h3>
<Spacer top={2}/>
<Button expand>Yay</Button>
<Spacer top={1}/>
<Button expand destructive>NOO! I want my mommy!</Button>
`;

const exampleForm = `<form
  onSubmit={(e) => {
    e.preventDefault();
    console.log("Form submitted");
  }}
>
  <Button
    onClick={() => console.log("Clicked!")}
    type="submit"
  >
    Submit
  </Button>
</form>
`;

const example5 = `<Button className={styles.glow}>
	Glow button
</Button>
<Button 
	style={{
		background: "linear-gradient(90deg, #931a04, #e3492d)",
		color: "#DDD",
		border: "1px solid #931a04"
	}}>
	Inline Gradient
</Button>`

export default function ButtonUsage() {
	return (
		<>
			<UsageCard
				id="VisualOptions"
				title="Visual options"
				description="The button supports several visual options that help you adjust to the design system and hierarchy of the interface"
				example={
					<Row>
						<Button>Default</Button>
						<Button secondary>Secondary</Button>
						<Button outline>Outline</Button>
						<Button ghost>Ghost</Button>
					</Row>
				}
			>
				<CodeBlock
					title="example.tsx"
					lang="jsx"
					code={example1}
					example
				/>
			</UsageCard>

			<Spacer top={3}/>

			<UsageCard
				id="LogicState"
				title="Logic states"
				description="Logic states help inform the behavior and meaning of a button: reference format, disabled state or warning about a dangerous action.
				These options change not only the appearance, but also how the
				user interacts with the button"
				example={
					<Row>
						<Button link href={"#LogicState"}>Link</Button>
						<Button disabled>Disabled</Button>
						<Button destructive>Destructive</Button>
					</Row>
				}
			>
				<CodeBlock
					title="example.tsx"
					lang="jsx"
					code={example2}
					example
				/>
			</UsageCard>

			<UsageCard
				id="Expand"
				title="Expand"
				description="You can use the expand property to expand the button to all the available width of the screen. This is
				really useful for mobile first projects"
				example={
					<>
						<h3>Install BrickUI?</h3>
						<Spacer top={2}/>
						<Button expand>Yay</Button>
						<Spacer top={1}/>
						<Button expand destructive>NOO! I want my mommy!</Button>
					</>
				}
			>
				<CodeBlock
					title="example.tsx"
					lang="jsx"
					code={example3}
					example
				/>
			</UsageCard>

			<UsageCard
				id="FormUsage"
				title="Form usage"
				description="You can use the button inside forms to trigger both form submission and custom click handlers. When the button has type='submit', the form's onSubmit event will be triggered automatically"
			>
				<CodeBlock
					title="form.tsx"
					lang="jsx"
					code={exampleForm}
				/>
			</UsageCard>


			<Spacer top={3}/>
			<UsageCard
				id="Customization"
				title="Customization"
				description="You can use className to apply your own CSS modules or utility classes, and styles to directly override individual CSS properties when needed. This is useful for creating special-case buttons, state-dependent styling, or small one-off adjustments"
				example={
					<Row>
						<Button className={styles.glow}>
							Glow button
						</Button>
						<Button
							style={{
								background: "linear-gradient(90deg, #931a04, #e3492d)",
								color: "#DDD",
								border: "1px solid #931a04"
							}}
						>
							Inline Gradient
						</Button>
					</Row>
				}
			>
				<CodeBlock
					title="example.tsx"
					lang="jsx"
					code={example5}
					example
				/>
			</UsageCard>
		</>
	)
}

