import Link from "next/link";
import Image from "next/image";
import { Container, Row } from "@brick-uikit/layout";
import styles from "./prev_next.module.css";

export default function PrevNext() {
    return (
        <nav className={styles.nav}>
            <Container>
				<Link href="/">
					<Row>
						<h2>PrevNext</h2>
					</Row>
				</Link>
            </Container>
        </nav>
    );
}
