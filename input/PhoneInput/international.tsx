//@ts-nocheck
import styles from "./input.module.css";
import Spacer from "@/components/std/Spacer";
import {useState} from "react";
import { CSSProperties } from "react";

type props = {
    name: string;
    onChange: (event: any) => void;
    placeholder?: string;
    label?: string;
	error?: string;
    value?: string | number;
    className?: string;
    style?: CSSProperties;
};

export default function PhoneInput(props: props) {

	function getFlagEmoji(countryCode) {
		const codePoints = countryCode
			.toUpperCase()
			.split('')
			.map(char =>  127397 + char.charCodeAt());
		return String.fromCodePoint(...codePoints);
	}

	const phone_code = {
		"+1": "US",
		"+7": "RU"
	}

	const [custom_value, set_custom_value] = useState("");
	const [icon, set_icon] = useState("");

	// +1 (000) 000 0000

	function phone_change() {
        const { value } = event.target;


		// icon
		const country_code = value.substring(0,2);
		const country_short_name = phone_code[country_code];
		if(country_short_name) set_icon(getFlagEmoji(country_short_name));

		// auto plus
		const first_char = value.substring(0,1);
		if (first_char === "8") set_custom_value("+7")
		else if (first_char === "1") set_custom_value("+" + value);
		else if (first_char === "7") set_custom_value("+" + value);
		else set_custom_value(value);

		const second_char = value.substring(2,6);
		if(second_char.length === 3) set_custom_value(value.substring(0,2) + " (" + second_char + ") ");

		const third_group = value.substring(10,13);
		if(third_group.length === 2) set_custom_value(value.substring(0,10) + third_group + " ");

		// limit max chars to 17
		if(value.length >= 17) set_custom_value(value.substring(0, 17));
	}

	let input_style = styles.input;
	if (props.error) input_style = input_style + " " + styles.error;
	if (props.className) input_style = input_style + " " + props.className;

    return (
        <>
            {props.label && (
                <label className={styles.label} htmlFor={props.name}>
                    {props.label}
                </label>
            )}
            <Spacer top={.5} />
			<div className={styles.input_wrapper}>
				<span className={styles.country_icon}>{icon}</span>
				<input
					className={input_style}
					id={props.name}
					name={props.name}
					type={"tel"}
					placeholder={props.placeholder}
					onChange={phone_change}
					value={custom_value}
					style={props.style ? props.style : {}}
				/>
			</div>
			{props.error && <p className={styles.error_label}>{props.error}</p>}
        </>
    );
}
