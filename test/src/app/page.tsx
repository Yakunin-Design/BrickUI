"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "../../../";
// import { Button } from "@yakunin-design/brickui";

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>bruh</h1>
			<Button destructive>test</Button>
		</main>
	);
}
