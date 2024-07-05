"use client";
import Image from "next/image";
import styles from "./page.module.css";
// import { Button } from "../../../";
import { Button } from "brickui";

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>bruh</h1>
			<Button secondary>test</Button>
		</main>
	);
}
