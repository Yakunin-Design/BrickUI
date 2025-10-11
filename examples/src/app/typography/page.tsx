import Link from "next/link";
import Image from "next/image";
import { Container, Spacer, Row } from "@brick-uikit/layout";

import styles from "./typography.module.css";

type props = {
	variation: string
}

function TypeCard(props: props) {
	const variation = props.variation;

	return (
		<>
		<Row className={styles.type_card}>
				{variation === "h1" &&
					<h1>
						This is for component and layout headings.
					</h1>
				}
				{variation === "h2" &&
					<h2>
						This is for component and layout headings.
					</h2>
				}
				{variation === "h3" &&
					<h3>
						This is for component and layout headings.
					</h3>
				}
				{variation === "h4" &&
					<h4>
						This is for component and layout headings.
					</h4>
				}
				{variation === "h5" &&
					<h5>
						This is for component and layout headings.
					</h5>
				}
				{variation === "b" &&
					<b>
						This is for component and layout headings.
					</b>
				}
				{variation === "p" &&
					<p>
						This is for component and layout headings.
					</p>
				}
			<div className={styles.params}>
				{variation === "h1" &&
					<h4>h1 Heading</h4>
				}
				{variation === "h2" &&
					<h4>h2 Heading</h4>
				}
				{variation === "h3" &&
					<h4>h3 Heading</h4>
				}
				{variation === "h4" &&
					<h4>h4 Heading</h4>
				}
				{variation === "h5" &&
					<h4>h5 Heading</h4>
				}
				{variation === "b" &&
					<h4>b text</h4>
				}
				{variation === "p" &&
					<h4>p Text</h4>
				}
				<p>Type: IBM Plex Sans</p>
				<p>Size: 20px | 1.25rem</p>
				<p>Weight: 400 | regular</p>
				<p>Line height: 28px | 1.75rem</p>
				<p>Letter spacing: 0px</p>
			</div>
		</Row>
		<Spacer top={1}/>
		</>
	);
} 

export default function TypographyPage() {
	return (
		<Container wrapper>
			<h1>Typography</h1>
			<Spacer top={1}/>
			<p className={styles.descrption}>
				Brick UI kit was designed to be used with different combinations of fonts.
				Your project's design system defines colors, type faces, and their sizes at different screen size.
				Below there are recommended typefaces that are tested to work well with the library. 
			</p>

			<Spacer top={1}/>
			<Row className={styles.breakpoints}>
				<h3>Breakpoints</h3>
				<Row gap={1} className={styles.points}>
					<p className={styles.selected}>mobile</p>
					<p>laptop</p>
					<p>desktop</p>
					<p>tv</p>
				</Row>
			</Row>

			<Spacer top={1}/>
			<TypeCard variation="h1"/>
			<TypeCard variation="h2"/>
			<TypeCard variation="h3"/>
			<TypeCard variation="h4"/>
			<TypeCard variation="h5"/>
			<TypeCard variation="b"/>
			<TypeCard variation="p"/>

		</Container>
	);
}
