import { Spacer, Row } from "@brick-uikit/layout";
import CodeBlock from "@/components/CodeBlock";
import UsageCard from "@/components/UsageCard";
import { Button } from "@brick-uikit/input";

const spacerExample = `<h3>Example of spacer</h3>
<Spacer top={2}/>
<Button>Button 1</Button>
<Spacer bottom={3}/>
<p>Some content below the buttons</p>
<Spacer left={4}>This text is indented using left margin</Spacer>
`;

export default function SpacerUsage() {
	return (
		<UsageCard
			id="#Spacer"
			title="Spacer"
			description="The Spacer component is a simple utility for controlling spacing between elements. You can use it to apply top, bottom, or left margins in rem units. It also accepts children to render inline content with spacing applied. This makes layout adjustments quick and consistent without manually writing margin styles for each element"
			example={
				<>
					<h3>Example of spacer</h3>
					<Spacer top={2}/>
					<h4>Spacer top and bottom</h4>
					<Spacer bottom={4}/>
					<p>Some content below the buttons</p>
					<Spacer left={4}>This text is indented using left margin</Spacer>
				</>
			}
		>
			<CodeBlock
				title="example.tsx"
				lang="jsx"
				code={spacerExample}
				example
			/>
		</UsageCard>
	)
}