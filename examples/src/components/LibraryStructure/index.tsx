import { Row, Spacer } from "@brick-uikit/layout";
import { Badge } from "@brick-uikit/display";
import Image from "next/image";
import Link from "next/link";

import arrows_graphic from "./arrows.svg";
import styles from "./library.module.css";

type props = {
	name: string,
	link: string,
	github: string,
	description: string
}

function TableItem(props: props) {
	return (
		<>
			<Row align={"start"}>
				<div>
					<b className={styles.subtitle}>{props.name}</b>
					<Spacer top={.5}/>
					<Row gap={1}>
						<Badge secondary mini>
							<Link href={props.link} target="_blank">
								<Row gap={.4}>
									<svg height="16" width="16" viewBox="0 0 700 700" fill="#f00" aria-hidden="true"><polygon fill="#f00" points="0,700 700,700 700,0 0,0"></polygon><polygon fill="#fff" points="150,550 350,550 350,250 450,250 450,550 550,550 550,150 150,150 "></polygon></svg>
									npm
								</Row>
							</Link>
						</Badge>
						<Badge secondary mini>
							<Link href={props.github} target="_blank">
								<Row gap={.4}>
									<svg height="16" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="16" data-view-component="true">
										<path fill="#fff" d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
									</svg>
									github
								</Row>
							</Link>
						</Badge>
					</Row>
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
				github="https://github.com/Yakunin-Design/BrickUI/tree/main/layout"
				description="Defines structure and spacing for organizing content."
			/>
			<TableItem
				name="@brick-uikit/input"
				link="https://www.npmjs.com/package/@brick-uikit/input"
				github="https://github.com/Yakunin-Design/BrickUI/tree/main/input"
				description="Collects user data and triggers actions."
			/>
			<TableItem
				name="@brick-uikit/display"
				link="https://www.npmjs.com/package/@brick-uikit/display"
				github="https://github.com/Yakunin-Design/BrickUI/tree/main/display"
				description="Presents information and visual feedback."
			/>
			<TableItem
				name="@brick-uikit/experimental"
				link="https://www.npmjs.com/package/@brick-uikit/experimental"
				github="https://github.com/Yakunin-Design/BrickUI/tree/main/experimental"
				description="Early-stage interactive or conceptual elements."
			/>
		</>
	);
}
