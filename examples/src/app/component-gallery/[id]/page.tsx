import { Container, Spacer } from "@brick-uikit/layout";
import dataset from "./components_dataset.json";
import CodeBlock from "@/components/CodeBlock";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ComponentPage({ params }: PageProps) {
	return (
		<Container wrapper>
			<h1>{dataset.container.name}</h1>
			<p>{dataset.container.description}</p>
			<Spacer top={1}/>
			<CodeBlock
				lang="jsx"
				code={dataset.container.code}
			/>
		</Container>
	);
} 
