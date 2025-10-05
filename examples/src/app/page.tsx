"use client";
import styles from "./page.module.css";
import { Container, Spacer, Row } from "brick-uikit/layout";
import { Button } from "brick-uikit/input";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import PhilosophyPoints from "@/components/PhilosophyPoints";

export default function Home() {
	return (
		<Container wrapper>
			<section className={styles.hero}>
				<Spacer top={15}/>
				<h1>Build interfaces like stacking bricks</h1>
				<Spacer top={1}/>
				<p className={styles.description}>
					Component library built around declarative components that encapsulate logic and behavior, so you can build interfaces like stacking bricks — modular, predictable, and fast.
				</p>
				<br/>
				<Row gap={1} className={styles.cta}>
					<Button href="/installation">Installation</Button>
					<Button href="/component-gallery" secondary>Component Gallery</Button>
				</Row>
			</section>

			<h2>Philosophy Points</h2>
			<Spacer top={1}/>
			<PhilosophyPoints/>

			<Spacer top={3}/>
			<h2>Library strucrute</h2>
			<Spacer top={1}/>
			<p>
				@brick-uikit/layout - 
				<br/>
				@brick-uikit/input - 
				<br/>
				@brick-uikit/display - 
				<br/>
			</p>

			<Spacer top={3}/>
			<h2>Intall now</h2>
			<Spacer top={1}/>
			<CodeBlock
				lang="jsx"
				code="yarn add @brick-uikit/layout"
				terminal
			/>

		</Container>
	);
}
