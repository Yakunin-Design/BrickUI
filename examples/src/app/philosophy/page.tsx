import Link from "next/link";
import Image from "next/image";
import { Container, Spacer, Row } from "@brick-uikit/layout";
import { Card, Badge } from "@brick-uikit/display";
import PhilosophyPoints from "@/components/PhilosophyPoints";

import styles from "./philosophy.module.css";

export default function YappingPage() {
	return (
		<Container wrapper>
			<h1>Philosophy</h1>
			<p className={styles.descrption}>
				Brick is a uikit that is inspired by <em><Link target="_blank" href="https://docs.flutter.dev/">Flutter widgets</Link></em> and react's idea of
				making components descriptive and <em><Link target="_blank" href="https://react.dev/reference/rules">diclarative</Link></em>
				
				<br/>
				The components should encapsulate the logic in them and create abstraction
				so that you can build ui's faster.

				<br/>
				There are already a buch of solutins that aim to achive that,
				but they didn't feel right, so we made our own.

			</p>
			<br/>
			<h3>Philosophy Points</h3>
			<Spacer top={1}/>
			<PhilosophyPoints/>

			<br/>
			<Badge><p>Enough yapping, install Brick uikit</p></Badge>
		</Container>
	);
}
