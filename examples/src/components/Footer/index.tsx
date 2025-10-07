import Link from "next/link";
import Image from "next/image";
import { Container, Row } from "@brick-uikit/layout";
import styles from "./footer.module.css";
import logo from "./logo.svg";

export default function Footer() {
    return (
        <footer className={styles.header}>
            <Container>
				<Link href="/">
					<Row>
						<Image src={logo} height={22} alt="logo"/>
						<h2>Brick uikit</h2>
					</Row>
				</Link>
            </Container>
        </footer>
    );
}
