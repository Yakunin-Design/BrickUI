import Link from "next/link";
import { Container, Row, Spacer } from "@brick-uikit/layout";
import RowUsage from "./RowUsage";
import ButtonUsage from "./ButtonUsage";
import BadgeUsage from "./BadgeUsage";
import InputUsage from "./InputUsage";
import CheckboxUsage from "./CheckboxUsage";
import styles from "./prev_next.module.css";
import SpacerUsage from "@/hooks/app/component-gallery/[id]/Usage/SpacerUsage";

type props = {
	id: string
}

export default function Usage(props: props) {
	const id = props.id.toLowerCase();

	return (
		<>
			<Spacer top={4}/>
			<h1>Usage {id}</h1>
			<Spacer top={1}/>
			{id === "spacer" &&
				<SpacerUsage/>
			}
			{id === "row" &&
				<RowUsage/>
			}
			{id === "button" &&
				<ButtonUsage/>
			}
			{id === "badge" &&
				<BadgeUsage/>
			}
			{id === "input" &&
				<InputUsage/>
			}
			{id === "checkbox" &&
				<CheckboxUsage/>
			}
		</>
	);
}
