import { Container, Spacer } from "@brick-uikit/layout";
import CodeBlock from "@/components/CodeBlock";
import PropTable from "./PropTable";
import PrevNext from "@/components/PrevNext";
import Usage from "./Usage";
import { ComponentData, ComponentProperty } from "./component_property";

import dataset from "@/data/components_dataset.json";

interface PageProps {
	params: {
		id: string;
	};
}

function dataset_search(id: string) {	
	const titles = Object.keys(dataset);

	for(let i = 0; i < titles.length; i++) {
		const title = titles[i];
		if(title === id) {
			const component_data = (dataset as unknown as Record<string, ComponentData>)[title];
			return component_data;
		}
	}

	return null;
}

export default function ComponentPage({ params }: PageProps) {
	const component = dataset_search(params.id);
	if(!component) return (<h1>bruh</h1>);

	return (
		<>
			<Container wrapper>
				<h1>{component.name}</h1>
				<p>{component.description}</p>
				<Spacer top={1}/>
				<PropTable data={component.properties}/>
				<Spacer top={1}/>
				<CodeBlock
					lang="jsx"
					code={component.code}
				/>
				<Usage id={component.name}/>
			</Container>
			<PrevNext current={component.name}/>
		</>
	);
} 

