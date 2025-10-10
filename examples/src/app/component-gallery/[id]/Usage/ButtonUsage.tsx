import { Spacer, Row } from "@brick-uikit/layout";
import { Button } from "@brick-uikit/input";
import CodeBlock from "@/components/CodeBlock";
import styles from "./usage.module.css";

const example1 = `<Row>
	<Button>Default</Button>
	<Button secondary>Secondary</Button>
	<Button outline>Outline</Button>
	<Button ghost>Ghost</Button>
	<Button disabled>Disabled</Button>
</Row>
`;

const example2 = `<h3>Install BrickUI?</h3>
<Spacer top={2}/>
<Button expand>Yay</Button>
<Spacer top={1}/>
<Button expand destructive>NOO! I want my mommy!</Button>
`;


export default function ButtonUsage() {
	return (
		<>
			<div className={styles.render}>
				<Row>
					<Button>Default</Button>
					<Button secondary>Secondary</Button>
					<Button outline>Outline</Button>
					<Button ghost>Ghost</Button>
					<Button disabled>Disabled</Button>
				</Row>
			</div>
			<CodeBlock
				title="example.tsx"
				lang="jsx"
				code={example1}
				example
			/>
			<Spacer top={3}/>
			<h2>Expand</h2>
			<p>You can use the expand property to expand the button to all the available width of the screen. This is really useful for mobile first projects</p>
			<Spacer top={1}/>
			<div className={styles.render}>
				<h3>Install BrickUI?</h3>
				<Spacer top={2}/>
				<Button expand>Yay</Button>
				<Spacer top={1}/>
				<Button expand destructive>NOO! I want my mommy!</Button>
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

