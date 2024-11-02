"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { Container, Spacer } from "brick-uikit/layout";
import { Button, Input, DateInput, TimeInput } from "brick-uikit/input";

export default function Home() {
	const [date, set_date] = useState(new Date());

	function handle_change(event: any) {
		const { name, value } = event.target;
		console.log(value);
		set_date(new Date(value));
	}

	function send(): void {
		if(!date || 
			isNaN(Date.parse(date.toString())) ||
			date.getDate() < 1 ||
			date.getFullYear() < new Date().getFullYear() - 1) {
				console.log("Error: " + date)
				return;
		}
		console.log("Hi mom: " + date)
	}

	return (
		<Container>
			<Spacer top={2}/>
			<h1>Brick UI examples</h1>

			<DateInput
				name="date"
				value={date}
				onChange={handle_change}
			/>
			<Spacer top={2}/>

			<Button children={"send"} onClick={send} />
			<Spacer top={20}/>
		</Container>
	);
}
