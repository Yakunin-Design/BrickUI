import styles from "./divider.module.css";

type props = {
    text?: string;
};

export default function Divider(props: props) {
    return (
		<div className={styles.divider}>
			<div className={styles.line}></div>
			{props.text &&
				<>
					<p className={styles.text}>{props.text}</p>
					<div className={styles.line}></div>
				</>
			}
		</div>
    );
}
