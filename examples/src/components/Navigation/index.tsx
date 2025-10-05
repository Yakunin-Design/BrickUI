import Link from "next/link";
import Image from "next/image";
import { Container, Row } from "brick-uikit/layout";
import styles from "./navigation.module.css";
import logo from "./logo.svg";

export default function Navigation() {
    return (
        <nav className={styles.header}>
            <Container>
				<Row>
					<Link href="/">
						<Row gap={1}>
							<Image src={logo} height={22} alt="logo"/>
							<b>Brick uikit</b>
						</Row>
					</Link>
					<Link href="/menu">
						<p>Menu</p>
					</Link>
				</Row>
            </Container>
        </nav>
    );
}
