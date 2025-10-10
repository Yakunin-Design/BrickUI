import styles from "./page.module.css";
import { Container, Spacer, Row } from "@brick-uikit/layout";
import { Badge } from "@brick-uikit/display";
import Link from "next/link";

export default function Menu() {
	return (
		<>
			<Container wrapper>
				<Spacer top={3}/>
				<h2>Brick uikit</h2>	

				<Spacer top={1}/>
				<Link href={"/philosophy"}>Philosophy</Link>

				<Spacer top={1}/>
				<Link href={"/installation"}>Installation</Link>

				<Spacer top={1}/>
				<Link href={"/component-gallery"}>Component Gallery</Link>

				<Spacer top={1}/>
				<Row gap={1}>
					<Link href={"/guides"}>Style guidelines</Link>
					<Badge mini accent>demo</Badge>
				</Row>

				<Spacer top={1}/>
				<Row gap={1}>
					<Link href={"/"}>Theming</Link>
					<Badge mini>coming soon</Badge>
				</Row>

				<Spacer top={1}/>
				<Row gap={1}>
					<Link href={"/"}>Examples</Link>
					<Badge mini>coming soon</Badge>
				</Row>
			</Container>
		</>
	);
}
