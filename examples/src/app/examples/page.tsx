"use client";
import styles from "./page.module.css";
import { Container, Spacer, Divider, Hidden, Row } from "brick-uikit/layout";
import { RadioGroup, Radio } from "brick-uikit/experimental";
import { 
	Button,
	Input,
	PasswordInput,
	Checkbox,
	Select,
	TextArea
} from "brick-uikit/input";

export default function ExamplesPage() {
	const options = ["apple", "orange"];

	function handle_change() {
		console.log("change!");
	}

	return (
		<>
			<Container>
				<Spacer top={2}/>
				<h1>Brick UI examples</h1>
				<Button>Hello</Button>
				<Button secondary>Hello</Button>
				<Button outline>Hello</Button>
				<Button ghost>Hello</Button>
				<Spacer top={2}/>
				<RadioGroup name="test">
					<Radio>
						Hello
					</Radio>
				</RadioGroup>

				<Spacer top={2}/>

				<Input name="test" onChange={handle_change}/>
				<PasswordInput name="password" onChange={handle_change}/>
				<Divider text={"or register with"} />
				<Checkbox />
				<Select 
					name="select" 
					onChange={handle_change} 
					options={options}
				/>
				<TextArea name="textArea" onChange={handle_change}/>
			</Container>
		</>
	);
}
