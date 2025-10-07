import Link from "next/link";
import Image from "next/image";
import { Container, Spacer, Row } from "@brick-uikit/layout";
import { Card, Badge } from "@brick-uikit/display";
import CodeBlock from "@/components/CodeBlock";

import styles from "./installation.module.css";

const code = `import { Container } from "brick-uikit/layout";

export default function ExamplePage() {
  return (
    <Container>
      <h1>Brick uikit layout</h1>
      <p>oh, hi mom!</p>
    </Container>
  );
}
`;

export default function InstallationPage() {
	return (
		<Container wrapper>
			<h1>Installation</h1>
			<p>
				im using: yarn | npm | pnpm | bunx
			</p>
			<Spacer top={1}/>

			<h3>1. Install the package</h3>	
			<Spacer top={1}/>
			<CodeBlock
				lang="jsx"
				code="yarn add @brick-uikit/layout"
				terminal
			/>

			<Spacer top={1}/>
			<h3>2. Import and use</h3>	
			<Spacer top={1}/>
			<CodeBlock
				lang="jsx"
				code={code}
				title="app.tsx"
			/>

		</Container>
	);
}
