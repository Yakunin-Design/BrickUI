import Link from "next/link";
import { Container, Row, Spacer } from "@brick-uikit/layout";
import styles from "./prev_next.module.css";

type props = {
	id: stirng
}

export default function Usage(props: props) {
	const id = props.id.toLowerCase();

	return (
		<>
			<Spacer top={1}/>
			<h1>Usage {id}</h1>
		</>
	);
}
