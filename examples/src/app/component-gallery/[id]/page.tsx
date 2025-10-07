import { Container } from "@brick-uikit/layout";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ComponentPage({ params }: PageProps) {
	return (
		<Container wrapper>
			<h1>{params.id}</h1>
		</Container>
	);
} 
