"use client";
import styles from "./page.module.css";
import { Container, Spacer, Row, Padding } from "@brick-uikit/layout";
import { Button } from "@brick-uikit/input";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import Image from "next/image";
import PhilosophyPoints from "@/components/PhilosophyPoints";
import HeroGraphics from "@/components/HeroGraphics";

export default function Home() {
	return (
		<>
			<section className={styles.hero}>
				<HeroGraphics/>
				<div className={styles.title}>
					<h1>Build interfaces like stacking bricks</h1>
					<Spacer top={1}/>
					<p className={styles.description}>
						Component library built around declarative components that encapsulate logic and behavior, so you can build interfaces like stacking bricks — modular, predictable, and fast.
					</p>
				</div>
			</section>
			<div className={styles.action_bar}>
				<Container>
					<Row className={styles.cta_group}>
						<Link href={"/philosophy"} className={styles.cta}>
							<p>1.</p>
							<h2>Philosophy</h2>
						</Link>
						<Link href={"/installation"} className={styles.cta}>
							<p>2.</p>
							<h2>Installation</h2>
						</Link>
						<Link href={"/component-gallery"} className={styles.cta}>
							<p>3.</p>
							<h2>Component Gallery</h2>
						</Link>
					</Row>
				</Container>
			</div>
			<Container wrapper className={styles.main}>
				<Spacer top={7}/>
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
				<p>github</p>
				<p>npmjs</p>
				<Spacer top={1}/>
				<CodeBlock
					lang="jsx"
					code="yarn add @brick-uikit/layout"
					terminal
				/>
			</Container>
		</>
	);

}
