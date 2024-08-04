import styles from "./page.module.css";
import { Container } from "brick-uikit/layout";
import { Button } from "brick-uikit/input";

export default function Home() {
	return (
		<Container>
			<h1>Brick UI examples</h1>
			<Button>Hello</Button>
		</Container>
	);
}
