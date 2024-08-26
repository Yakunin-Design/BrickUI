"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { Container, Spacer, Padding, Divider, Hidden, Row } from "brick-uikit/layout";
import { RadioGroup, Radio } from "brick-uikit/experimental";
import { Badge, Card } from "brick-uikit/display";
import { 
	Button,
	Input,
	PasswordInput,
	Checkbox,
	Select,
	TextArea,
	TimeInput
} from "brick-uikit/input";

export default function Home() {
	const [time, set_time] = useState("07:00");

	function handle_change(event: React.ChangeEvent<HTMLElement>) {
		const { name, value } = event.target;
		
		set_time(value);
	}

	return (
		<Container>
			<Spacer top={2}/>
			<h1>Brick UI examples</h1>

			<TimeInput
				name="time"
				value={time}
				onChange={handle_change}
			/>

			<Spacer top={20}/>

		</Container>
	);
}
