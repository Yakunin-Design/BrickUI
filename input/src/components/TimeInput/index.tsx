import styles from "./input.module.css";
import { Spacer } from "@brick-uikit/layout";
import { useState, useEffect, type CSSProperties } from "react";

type props = {
    name: string;
    onChange: (event: any) => void;
    placeholder?: string;
    label?: string;
    value?: string | number;
    className?: string;
	error?: string;
    style?: CSSProperties;
    disabled?: boolean;
	pattern?: string;
};

export default function TimeInput(props: props) {
	let input_style = styles.input;
	if (props.error) input_style = input_style + " " + styles.error;
	if (props.className) input_style = input_style + " " + props.className;

	const [time, set_time] = useState("");

    function handle_change(event: React.ChangeEvent<HTMLInputElement>) {
        let input = event.target.value;

        // Remove non-numeric characters
        input = input.replace(/\D/g, "");

        // Limit to 4 characters
        if (input.length > 4) 
            input = input.slice(0, 4);

		// if the first element is 2-9, place 0 in front of it,
		// ex: input - 5; value - 05
		const first_hour_digit = Number(input[0]);	
		if(first_hour_digit > 2 && first_hour_digit < 10) 
			input = "0" + input[0];

		// if the first hour digit is 2, like in 20:45
		// then the second hour digit:            ^
		// cant be larger than 3, ex: 
		// 25:45 - is invalid, 23:55 is good
	
		const second_hour_digit = Number(input[1]);
		if(first_hour_digit === 2 && second_hour_digit > 3) return;

		// minutes first digit cant be larger than 5
		if(Number(input[2]) > 5) return;

        // Format the input as HH:MM
        if (input.length > 2) 
            input = `${input.slice(0, 2)}:${input.slice(2, 4)}`;

        set_time(input);
    };

	useEffect(() => {
		const event_emulation = {
			target: {
				name: props.name,
				value: time
			}
		};

		props.onChange(event_emulation);
	}, [time]);

    return (
		<>
            {props.label && (
                <>
                    <label className={styles.label} htmlFor={props.name}>
                        {props.label}
                    </label>
                    <Spacer top={0.5} />
                </>
            )}
            <input
                className={input_style}
                id={props.name}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={handle_change}
                type="tel"
                style={props.style ? props.style : {}}
                disabled={props.disabled}
				pattern={props.pattern}
            />
			{props.error && <p className={styles.error_label}>{props.error}</p>}
		</>
    );
}
