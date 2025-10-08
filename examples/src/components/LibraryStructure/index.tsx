import { Row, Spacer } from "@brick-uikit/layout";
import { Badge } from "@brick-uikit/display";
import Image from "next/image";
import Link from "next/link";

import npm_logo from "./npm_logo.svg";
import arrows_graphic from "./arrows.svg";
import styles from "./library.module.css";

type props = {
	name: string,
	link: string,
	description: string
}

function TableItem(props: props) {
	return (
		<>
			<Row align={"start"}>
				<div>
					<b>{props.name}</b>
					<Spacer top={.4}/>
					<Badge>
						<Link href={props.link} target="_blank">
							<Row gap={.4}>
								<svg height="16" width="16" viewBox="0 0 700 700" fill="#f00" aria-hidden="true"><polygon fill="#f00" points="0,700 700,700 700,0 0,0"></polygon><polygon fill="#fff" points="150,550 350,550 350,250 450,250 450,550 550,550 550,150 150,150 "></polygon></svg>
								npm
							</Row>
						</Link>
					</Badge>
				</div>
				<p className={styles.description}>
					{props.description}
				</p>
			</Row>
			<Spacer top={1}/>
		</>
	);
}

export default function LibraryStructure() {
	return (
		<>
			<h2>Library Structure</h2>
			<Spacer top={2}/>
					<TableItem
						name="@brick-uikit/layout"
						link="https://www.npmjs.com/package/@brick-uikit/layout"
						description="Defines structure and spacing for organizing content."
					/>
					<TableItem
						name="@brick-uikit/input"
						link="https://www.npmjs.com/package/@brick-uikit/input"
						description="Collects user data and triggers actions."
					/>
					<TableItem
						name="@brick-uikit/display"
						link="https://www.npmjs.com/package/@brick-uikit/display"
						description="Presents information and visual feedback."
					/>
					<TableItem
						name="@brick-uikit/experimental"
						link="https://www.npmjs.com/package/@brick-uikit/experimental"
						description="Early-stage interactive or conceptual elements."
					/>
		</>
	);
}
