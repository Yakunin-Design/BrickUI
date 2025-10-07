import styles from "./page.module.css";
import { Container, Spacer } from "@brick-uikit/layout";
import Link from "next/link";

export default function Menu() {
	return (
		<>
			<Container wrapper>
				<Spacer top={3}/>
				<h2>Brick uikit</h2>	
				<br/>
				<Link href={"/philosophy"}>Philosophy</Link>
				<br/>
				<Link href={"/installation"}>Installation</Link>
				<br/>
				<Link href={"/component-gallery"}>Component Gallery</Link>
				<br/>
				<Link href={"/guidelines"}>Style guidelines</Link>
				<br/>
				<Link href={"/theming"}>Theming</Link>
				<br/>
				<Link href={"/examples"}>Examples</Link>
			</Container>
		</>
	);
}
