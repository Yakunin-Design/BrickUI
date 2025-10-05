import Link from "next/link";
import Image from "next/image";
import { Container, Spacer, Row } from "brick-uikit/layout";
import { Card, Badge } from "@brick-uikit/display";
import PhilosophyPoints from "@/components/PhilosophyPoints";

import styles from "./quick_start.module.css";

export default function YappingPage() {
	return (
		<Container wrapper>
			<h1>Philosophy</h1>
			<p>
				Brick is a uikit that is inspired by *Flutter widgets* and react's idea of
				making components descriptive and *diclarative*
				
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

			<Spacer top={1}/>
			<h3>Library strucrute</h3>
			<br/>
			<p>
				@brick-uikit/layout - 
				<br/>
				@brick-uikit/input - 
				<br/>
				@brick-uikit/display - 
				<br/>
			</p>

			<br/>
			<Badge><p>Enough yapping, install Brick uikit</p></Badge>
		</Container>
	);
}
