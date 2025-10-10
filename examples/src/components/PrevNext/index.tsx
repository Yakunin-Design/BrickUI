import Link from "next/link";
import { Container, Row } from "@brick-uikit/layout";
import styles from "./prev_next.module.css";
import dataset from "@/data/components_dataset";

type props = {
	current: stirng
}

export default function PrevNext(props: props) {
	const id = props.current.toLowerCase();
	const component_list = Object.keys(dataset);

	let index = 0;
	for(let i = 0; i < component_list.length; i++) {
		if(component_list[i] === id) index = i;
	}

	const prev = component_list[index-1] || null;
	const next = component_list[index+1] || null;

	return (
		<nav className={styles.nav}>
			<Container className={styles.container}>
				<Row>
					{prev &&
						<Link href={"/component-gallery/" + prev}>
							<div className={styles.prev}>
								<>
									<p>Prev</p>
									<h3>{prev}</h3>
								</>
							</div>
						</Link>
					}
					{next && 
						<Link href={"/component-gallery/" + next}>
							<div className={styles.next}>
								<>
									<p>Next</p>
									<h3>{next}</h3>
								</>
							</div>
						</Link>
					}
				</Row>
			</Container>
		</nav>
	);
}
