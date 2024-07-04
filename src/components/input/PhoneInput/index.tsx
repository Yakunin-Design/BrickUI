import React from "react";
import styles from "./input.module.css";
import Spacer from "@/components/std/Spacer";
import { CSSProperties } from "react";

type props = {
    name: string;
    onChange: (event: any) => void;
    placeholder?: string;
    label?: string;
    value?: string | number;
    className?: string;
	error?: string;
    style?: CSSProperties;
};

export default function PhoneInput(props: props) {

	let input_style = styles.input;
	if (props.error) input_style = input_style + " " + styles.error;
	if (props.className) input_style = input_style + " " + props.className;

    function phone_change(event: React.ChangeEvent<HTMLInputElement>) {
		const input = event.target.value.replace(/\D/g, '');

		let match = input.match(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
		let formattedValue = '+';

		if (match) {
			if (match[1])
				formattedValue += match[1];
			if (match[2])
				formattedValue += ' (' + match[2];
			if (match[3])
				formattedValue += ') ' + match[3];
			if (match[4])
				formattedValue += '-' + match[4];
			if (match[5])
				formattedValue += '-' + match[5];
		}

        event.target.value = formattedValue;
        props.onChange(event);
    }

    return (
        <>
            {props.label && (
                <label className={styles.label} htmlFor={props.name}>
                    {props.label}
                </label>
            )}
            <Spacer top={1} />
            <input
                className={input_style}
                id={props.name}
                name={props.name}
                type={"tel"}
                placeholder={props.placeholder}
				maxLength={18}
                onChange={phone_change}
                value={props.value}
                style={props.style ? props.style : {}}
            />
			{props.error && <p className={styles.error_label}>{props.error}</p>}
        </>
    );
}
