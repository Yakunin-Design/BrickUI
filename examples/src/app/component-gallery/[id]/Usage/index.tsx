import Link from "next/Link";
import { Container, Row, Spacer } from "@brick-uikit/layout";
import RowUsage from "./RowUsage";
import ButtonUsage from "./ButtonUsage";
import BadgeUsage from "./BadgeUsage";
import styles from "./prev_next.module.css";

type props = {
	id: stirng
}


export default function Usage(props: props) {
	const id = props.id.toLowerCase();

	return (
		<>
			<Spacer top={4}/>
			<h1>Usage {id}</h1>
			<Spacer top={1}/>
			{id === "row" &&
				<RowUsage/>
			}
			{id === "button" &&
				<ButtonUsage/>
			}
			{id === "badge" &&
				<BadgeUsage/>
			}
		</>
	);
}
