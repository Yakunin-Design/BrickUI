import styles from "./components.module.css";
import Link from "next/link";
import Image from "next/image";
import { Container, Spacer, Row } from "@brick-uikit/layout";
import { Card } from "@brick-uikit/display";
import ComponentCard from "./ComponentCard";

export default function ComponentGalleryPage() {
	return (
		<>
			<Container>
				<Spacer top={2}/>
				<h1>Component Gallery</h1>
				<p>
					Here you can find all the components available in the library. We are working on adding more components.
				</p>

				<Spacer top={3} bottom={1}>
					<h2>Layout</h2>
				</Spacer>
				<div className={styles.grid}>
					<ComponentCard
						name="Spacer"
						description="Invisible block that adds white space"
						icon="spacer"
					/>

					<ComponentCard
						name="Container"
						description="Sets visual boundaries of a webpage, limiting content width"
						icon="container"
					/>

					<ComponentCard
						name="Padding"
						description="A wrapper that adds inner spacing around its child"
						icon="padding"
					/>

					<ComponentCard
						name="Row"
						description="Arranges children in a horizontal line, from left to right"
						icon="row"
					/>

					<ComponentCard
						name="Devider"
						description="A thin line used as a separator. Helps to visually split blocks or interface elements."
						icon="divider"
					/>
				</div>


				<Spacer top={4} bottom={1}>
					<h2>Input</h2>
				</Spacer>
				<div className={styles.grid}>
					<ComponentCard
						name="Input"
						description="A basic field where users can type text or numbers"
						icon="input"
					/>
					<ComponentCard
						name="PasswordInput"
						description="Input field that hides characters to keep sensitive info"
						icon="password_input"
					/>
					<ComponentCard
						name="TextArea"
						description="A multi-line text field for entering longer content"
						icon="textarea"
					/>
					<ComponentCard
						name="Button"
						description="An interactive element that triggers an action when clicked"
						icon="button"
					/>
					<ComponentCard
						name="Checkbox"
						description="A small box that users can check or uncheck"
						icon="checkbox"
					/>
					<ComponentCard
						name="Select"
						description="A dropdown menu that lets users choose options from a list"
						icon="select"
					/>
				</div>

				<Spacer top={4} bottom={1}>
					<h2>Display</h2>
				</Spacer>
				<div className={styles.grid}>
					<ComponentCard
						name="Card"
						description="A block that groups content in a visually separated container"
						icon="card"
					/>
					<ComponentCard
						name="Badge"
						description="A small label used to highlight things"
						icon="badge"
					/>
					<ComponentCard
						name="Gauge"
						description="A visual indicator, that shows value within a range"
						icon="gauge"
					/>
				</div>

				<Spacer top={4} bottom={1}>
					<h2>Experimental</h2>
				</Spacer>
				<div className={styles.grid}>
					<ComponentCard
						name="Radio"
						description="A circular input that allows users to select only one option from a group"
						icon="experimental"
						experimental
					/>
					<ComponentCard
						name="Hidden"
						description="This just hides everything inside of hidden component"
						icon="experimental"
						experimental
					/>
					<ComponentCard
						name="AutoComplete"
						description="Autocomplete input that shows a list of suggestions"
						icon="experimental"
						experimental
					/>
				</div>
			</Container>
		</>
	);
}
