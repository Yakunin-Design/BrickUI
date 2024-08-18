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
	TextArea
} from "brick-uikit/input";

export default function Home() {
	const [data, set_data] = useState({fruit: 2});
	const options = ["apple", "orange", "blueberry", "watermelon"];
	const values = [1, 2, 3, 4];

	function handle_change() {
		const { name, value } = event.target;
		
		set_data(prev => {
			return {
				...prev,
				[name]: Number(value)
			}
		})
	}

	return (
		<Container>
			<Spacer top={2}/>
			<h1>Brick UI examples</h1>
			<Spacer top={2}/>
			<Row gap={1}>
				<Button>Hello</Button>
				<Button secondary>Hello</Button>
				<Button outline>Hello</Button>
				<Button ghost>Hello</Button>
			</Row>
			<Spacer top={2}/>
			<RadioGroup name="test">
				<Row>
					<Radio>
						Radio 1
					</Radio>
					<Radio>
						Radio 2
					</Radio>
				</Row>
			</RadioGroup>

			<Spacer top={2}/>

			<Input name="test" onChange={handle_change}/>
			<PasswordInput name="password" onChange={handle_change}/>
			<Divider text={"or register with"} />
			<Checkbox />

			<Select 
				name="fruit" 
				onChange={handle_change} 
				options={options} 
				values={values}
				value={data.fruit}
			/>

			<TextArea name="textArea" onChange={handle_change}/>

			<Badge>Badge</Badge>
			<Card>
				<Row gap={.5}>
					<Badge accent>Badge</Badge>
					<Badge secondary>Badge</Badge>
					<Badge outline>Badge</Badge>
				</Row>
				<Spacer top={.5}/>
				<h3>This is a card</h3>
				<p>Hello and welcome to my youtube tutorial XD</p>
			</Card>

			<Card outline>
				<h3>This is a card</h3>
				<p>Hello and welcome to my youtube tutorial XD</p>
			</Card>

			<Spacer top={20}/>
		</Container>
	);
}
