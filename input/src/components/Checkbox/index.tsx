import { Row } from "@brick-uikit/layout";
import { useBoolean } from "@brick-uikit/lib";
import { useState } from "react";
import styles from "./index.module.css";

type props = {
	onChange?: () => void;
	checked?: boolean;
	children?: React.ReactNode;
	error?: string;
};

export default function Checkbox(props: props) {
	const [is_checked, toggle_checked] = useBoolean(props.checked || false);

	let input_style = styles.checkbox;
	if (props.error)
		input_style = input_style + " " + styles.error;

	function handleChange() {
		toggle_checked();

		if(props.onChange) props.onChange();
	};

	return (
			<div className={styles.checkbox_container}>
				<label>
					<Row gap={1}>
						<input
							type="checkbox"
							name="checkbox"
							id="checkbox"
							onChange={handleChange}
							checked={is_checked}
							className={styles.input}
						/>
						<div className={input_style}>
							{is_checked && (
									<svg width="100%" height="100%" viewBox="0 0 14 14" version="1.1">
										<g transform="matrix(1.42896,0,0,1.42896,-3.00275,-2.78827)">
											<g id="Symbols">
												<g id="Worker-min-unem">
													<g id="Group-5">
														<g id="_1">
															<path id="Path"
																		d="M8.483,4.302L6.284,6.866L5.514,5.968C5.442,5.884 5.354,5.815 5.254,5.764C5.155,5.713 5.046,5.682 4.934,5.672C4.822,5.662 4.709,5.674 4.602,5.707C4.494,5.739 4.394,5.792 4.308,5.862C4.222,5.932 4.15,6.018 4.098,6.114C4.046,6.211 4.014,6.317 4.004,6.426C3.993,6.535 4.005,6.644 4.039,6.749C4.072,6.853 4.126,6.95 4.198,7.034L5.626,8.7C5.706,8.794 5.807,8.869 5.921,8.921C6.034,8.973 6.158,9 6.284,9C6.409,9 6.533,8.973 6.647,8.922C6.761,8.87 6.861,8.794 6.942,8.701L9.799,5.369C9.871,5.285 9.926,5.188 9.96,5.083C9.994,4.979 10.007,4.869 9.997,4.76C9.987,4.65 9.955,4.544 9.903,4.447C9.85,4.35 9.779,4.264 9.692,4.193C9.606,4.123 9.506,4.07 9.398,4.038C9.29,4.005 9.177,3.993 9.065,4.004C8.952,4.014 8.843,4.045 8.743,4.096C8.644,4.147 8.555,4.217 8.483,4.302Z"/>
														</g>
													</g>
												</g>
											</g>
										</g>
									</svg>
							)}
						</div>
						{props.children && (
							<span className={styles.labelText}>{props.children}</span>
						)}
					</Row>
				</label>
				{props.error && <p className={styles.error_label}>{props.error}</p>}
      </div>
	);
}
