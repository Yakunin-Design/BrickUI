import Link from "next/link";
import { Container, Row } from "@brick-uikit/layout";
import styles from "./sub_footer.module.css";

type props = {
	left_link: string,
	right_link: string
}

export default function PrevNext(props: props) {
	const prev = "Installation";
	const next = "Component Gallery";

	return (
		<nav className={styles.nav}>
			<Container className={styles.container}>
				<Row>
					{prev &&
						<Link href={props.left_link}>
							<div className={styles.prev}>
								<>
									<p>Quick Start</p>
									<h3>{prev}</h3>
								</>
							</div>
						</Link>
					}
					{next && 
						<Link href={props.right_link}>
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
