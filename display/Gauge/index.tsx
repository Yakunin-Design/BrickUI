import styles from "./gauge.module.css";

type props = {
	value: number,
	title: string,
	type?: "temp" | "procent",
	errored?: boolean
}

function Gauge(props: props) {
	const calc = ( 157 * ( Math.abs(props.value - 1) ) ) / 100;
	let value = calc + " 1000";
	
	let gauge_color = styles.green;
	if (props.value > 75) gauge_color = styles.orange;
	if (props.value > 85) gauge_color = styles.red;

	const symbol = props.type === "temp" ? "°" : "%";
	let text = props.value?.toString() + symbol;

	let x_text_pos = props.type === "temp" ? 42 : 36;

	if ( props.errored || !props.value ) {
		value = "23.55";
		gauge_color = styles.red;
		text = "ERR";
		x_text_pos = 34;
	}

	return (
		<div className={styles.gauge}>
			<svg className={styles.svg} viewBox="0 0 120 75" xmlns="http://www.w3.org/2000/svg">
				<path 
					className={styles.dial_bar_bg} 
					d="M 10,70 A 50,50 0 0 1 110,70"
					fill="none" 
					stroke="gray" 
					strokeWidth="8"
				/>
				<path 
					className={gauge_color} 
					strokeDasharray={value}
					d="M 10,70 A 50,50 0 0 1 110,70"
					fill="none" 
					stroke="black"
					strokeWidth="8"
				/>

				<text className={styles.icon_text} x={x_text_pos} y="70" fontFamily="Arial" fontSize="24" fill="black">{text}</text>
			</svg>

			<p>{props.title}</p>
		</div>
	);
}

export default Gauge
