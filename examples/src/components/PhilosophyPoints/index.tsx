import { Card } from "@brick-uikit/display";
import { Spacer } from "@brick-uikit/layout";
import styles from "./points.module.css";

export default function PhilosophyPonits() {
	return (
		<div className={styles.grid}>
			<Card className={styles.card}>
				<p className={styles.emoji}>⚙️</p> 
				<Spacer top={2}/>
				<h3>Declarative</h3>
				<p>
					Logic lives in components, not in glue code.
				</p>
			</Card>

			<Card className={styles.card}>
				<p className={styles.emoji}>
					🧱 
				</p> 
				<Spacer top={2}/>
				<h3>Composable</h3>
				<p>
					 Components fit together seamlessly.
				</p>
			</Card>

			<Card className={styles.card}>
				<p className={styles.emoji}>
					🎨 
				</p> 
				<Spacer top={2}/>
				<h3>Customizable</h3>
				<p>
					 Works with your existing design system.
				</p>
			</Card>

			<Card className={styles.card}>
				<p className={styles.emoji}>
					⚡
				</p> 
				<Spacer top={2}/>
				<h3>Fast & Typed</h3>
				<p>
					Fast & Typed — Fully TypeScript-based.
				</p>
			</Card>
		</div>
	);
}
