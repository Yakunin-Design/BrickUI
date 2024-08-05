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

type color_props = {
	hue: number,
	saturation: number,
	lightness: number
}

function colorBlock(color_props: color_props){
	return (
		<div 
			className={styles.block} 
			key={l+s}
			style={{background: `hsl(${color_props.hue}%, ${color_props.saturation}%, ${color_props.lightness}%)`}}
		></div>
	)
}

let color_blocks1 = [];
let color_blocks2 = [];
let color_blocks3 = [];

let s = 99;
let l = 1;
let step = 4.76;

for(let x = 0; x < 21; x++) {
	s -= step;	
	l += step;
	color_blocks1.push(
		<div 
			className={styles.block} 
			key={l+s}
			style={{background: `hsl(100, ${s}%, ${l}%)`}}
		></div>
	);
}

s = 99;
l = 1;
step = 16;

for(let x = 0; x < 7; x++) {
	s -= step;	
	l += step;
	color_blocks2.push(
		<div 
			className={styles.block} 
			key={s+l}
			style={{background: `hsl(100, ${s}%, ${l}%)`}}
		></div>
	);
}

s = 100;
l = 1;
step = .5;

for(let x = 0; x < 7; x++) {
	s -= step;	
	l += step;
	color_blocks3.push(
		<div 
			className={styles.block} 
			key={s+l}
			style={{background: `hsl(100, ${s}%, ${l}%)`}}
		></div>
	);
}

export default function Home() {
	const options = ["apple", "orange"];

	function handle_change() {
		console.log("change!");
	}

	return (
		<>
			<Hidden>
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
					<Select name="select" onChange={handle_change} options={options}/>
					<TextArea name="textArea" onChange={handle_change}/>
				</Container>
			</Hidden>
			<Container>
				<Spacer top={10}/>
				<Row>
					{color_blocks1}
				</Row>

				<Spacer top={2}/>
				<Row>
					{color_blocks2}
				</Row>

				<Spacer top={2}/>
				<Row>
					{color_blocks3}
				</Row>
			</Container>
		</>
	);
}
