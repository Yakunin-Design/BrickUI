"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { Container, Spacer, Padding, Divider, Row } from "brick-uikit/layout";
import { RadioGroup, Radio } from "brick-uikit/experimental";
import { Badge, Card } from "brick-uikit/display";
import { 
	Button,
	Input,
	PasswordInput,
	Checkbox,
	Select,
	TextArea,
	TimeInput,
	DateInput
} from "brick-uikit/input";

export default function Home() {
	const [date, set_date] = useState({
		date: new Date()
	});

	function handle_change(event: any) {
		const { name, value } = event.target;
		
		set_date(prev => {
			return {
				...prev,
				[name]: value
			}
		})
	}
	function save() {
		console.log(date.date);
	}

	return (
		<Container>
			<Spacer top={2}/>
			<h1>Brick UI examples</h1>

			<DateInput
				name="date"
				value={date.date}
				onChange={handle_change}
			/>

			<Spacer top={2}/>

			<Button onClick={save}>Save</Button>
			<Spacer top={20}/>
		</Container>
	);
}
