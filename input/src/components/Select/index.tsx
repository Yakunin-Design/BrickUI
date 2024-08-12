import { Spacer } from "@brick-uikit/layout";
import styles from "./input.module.css";

type props = {
    name: string;
    onChange: (event: any) => void;
    placeholder?: string;
    label?: string;
	error?: string;
    className?: string;
    maxLength?: number;
    options: Array<string>;
	value?: string | number;
    values?: Array<string | number>;
};

export default function Select(props: props) {
	const options: Array<any> = [];

	props.options.forEach((opt, index) => {
		let value: string | number = opt;
		if(props.values)
			value = props.values[index];

		options.push(
			<option value={value?.toString()} key={options.length}>
				{opt}
			</option>
		);
	});

	let input_style = styles.select;
	if (props.error) input_style = input_style + " " + styles.error;
	if (props.className) input_style = input_style + " " + props.className;

    return (
        <>
            {props.label && (
                <>
                    <label className={styles.label} htmlFor={props.name}>
                        <h3>{props.label}</h3>
                    </label>
                    <Spacer top={1} />
                </>
            )}

            <select
                className={input_style}
                id={props.name}
                name={props.name}
				onChange={props.onChange}
				value={props.value}
            >
                {options.map(option => option)}
            </select>
        </>
    );
}
