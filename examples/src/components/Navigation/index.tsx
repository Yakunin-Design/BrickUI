import Link from "next/link";
import Image from "next/image";
import { Container, Row } from "@brick-uikit/layout";
import styles from "./navigation.module.css";
import logo from "./logo.svg";
import menu_icon from "./menu_icon.svg";

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
					<div className={styles.large_nav}>
						<Link href="/philosophy">
							<p>Philosophy</p>
						</Link>
						|
						<Link href="/installation">
							<p>Installation</p>
						</Link>
						|
						<Link href="/component-gallery">
							<p>Component Gallery</p>
						</Link>
						|
						<Link href="/typography">
							<p>Typography</p>
						</Link>
					</div>
					<Link href="/menu" className={styles.small_nav}>
						<Image
							src={menu_icon}
							alt="menu icon"
							width={18}
						/>
					</Link>
				</Row>
            </Container>
        </nav>
    );
}
