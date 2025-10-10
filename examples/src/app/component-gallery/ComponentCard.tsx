import Link from "next/link"; 
import Image from "next/image";
import { Card, Badge } from "@brick-uikit/display";
import { Spacer, Row } from "@brick-uikit/layout";

import styles from "./components.module.css";

import badge_icon from "./assets/badge.svg";
import card_icon from "./assets/card.svg";
import checkbox_icon from "./assets/checkbox.svg";
import container_icon from "./assets/container.svg";
import divider_icon from "./assets/divider.svg";
import experimental_icon from "./assets/experimental.svg";
import gauge_icon from "./assets/gauge.svg";
import input_icon from "./assets/input.svg";
import logo_icon from "./assets/logo.svg";
import padding_icon from "./assets/padding.svg";
import password_input_icon from "./assets/password_input.svg";
import row_icon from "./assets/row.svg";
import select_icon from "./assets/select.svg";
import spacer_icon from "./assets/spacer.svg";
import textarea_icon from "./assets/textarea.svg";
import button_icon from "./assets/button.svg";

type props = {
	name: string
	description: string
	icon: string
	experimental?: boolean,
	examples?: boolean
}

export default function ComponentCard(props: props) {
	let icon = spacer_icon;
	if (props.icon === "logo") icon = logo_icon;
	if (props.icon === "experimental") icon = experimental_icon;

	if (props.icon === "badge") icon = badge_icon;
	if (props.icon === "card") icon = card_icon;
	if (props.icon === "checkbox") icon = checkbox_icon;
	if (props.icon === "container") icon = container_icon;
	if (props.icon === "divider") icon = divider_icon;
	if (props.icon === "gauge") icon = gauge_icon;
	if (props.icon === "input") icon = input_icon;
	if (props.icon === "padding") icon = padding_icon;
	if (props.icon === "password_input") icon = password_input_icon;
	if (props.icon === "row") icon = row_icon;
	if (props.icon === "select") icon = select_icon;
	if (props.icon === "button") icon = button_icon;
	if (props.icon === "spacer") icon = spacer_icon;
	if (props.icon === "textarea") icon = textarea_icon;

	return (
		<Link href={"/component-gallery/" + props.name.toLowerCase()}>
			<Card className={props.experimental ? styles.experimental : styles.component_card}>
				<Image
				  src={icon}
				  alt={props.icon + " image preview"}
				  height={100}
				  className={styles.icon}
				/>
				<Spacer top={1}/>
				<Row>
					<h3>{props.name}</h3>
					{props.examples &&
						<Badge outline mini className={styles.usage}>
							usage
						</Badge>
					}
				</Row>
				<Spacer top={.5}/>
				<p>{props.description}</p>
			</Card>
		</Link>
	);
}
