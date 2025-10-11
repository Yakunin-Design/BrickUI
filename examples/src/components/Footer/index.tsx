import Link from "next/link";
import Image from "next/image";
import { Container, Row, Spacer } from "@brick-uikit/layout";

import styles from "./footer.module.css";

import logo from "./yakunin_design_logo.svg";
import npm_logo from "./npm_logo.svg";
import github_logo from "./github_logo.svg";
import figma_logo from "./figma_logo.svg";
import sketch_logo from "./sketch_logo.svg";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
					<Row className={styles.row}>
						<div>
							<Image src={logo} height={20} alt="logo"/>
							<Spacer top={1}/>
							<p>Developed by Yakunin Design Team</p>
						</div>
						<Row gap={3}>
							<div className={styles.column}>
								<h3>Source code</h3>
								<Link href={"https://www.npmjs.com/~yakunin-design"} target="_blank">
									<Row gap={.5}>
										<Image src={npm_logo} height={16} alt="logo"/>
										<p>npmjs</p>
									</Row>
								</Link>
								<Spacer top={.5}/>
								<Link href={"https://github.com/Yakunin-Design/BrickUI"} target="_blank">
									<Row gap={.5}>
										<Image src={github_logo} height={16} alt="logo"/>
										<p>github</p>
									</Row>
								</Link>
							</div>
							<div className={styles.column}>
								<h3>UI kit download</h3>
								<Link href={"https://www.figma.com/design/0vRjG7pnQQwDR33vuSV02L/UI-kit?node-id=0-1&t=qRpKzh5aTCNE45wX-1"} target="_blank">
									<Row gap={.5}>
										<Image src={figma_logo} height={16} alt="logo"/>
										<p>figma</p>
									</Row>
								</Link>
								<Spacer top={.5}/>
								<Link href={"/"}>
									<Row gap={.5}>
										<Image src={sketch_logo} height={16} alt="logo"/>
										<p>sketch</p>
									</Row>
								</Link>
							</div>
						</Row>
					</Row>
            </Container>
        </footer>
    );
}
