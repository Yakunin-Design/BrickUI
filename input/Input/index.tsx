import styles from "./input.module.css";
import Spacer from "@/components/std/Spacer";
import { CSSProperties } from "react";

type props = {
    name: string;
    onChange: (event: any) => void;
    type?: "tel" | "email";
    placeholder?: string;
    label?: string;
    value?: string | number;
    className?: string;
    error?: string;
    maxLength?: number;
    style?: CSSProperties;
    list?: string;
    disabled?: boolean;
};

export default function Input(props: props) {

	let input_style = styles.input;
	if (props.error) input_style = input_style + " " + styles.error;
	if (props.className) input_style = input_style + " " + props.className;

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
                type={props.type ? props.type : "text"}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
                maxLength={props.maxLength}
                style={props.style ? props.style : {}}
                list={props.list}
                disabled={props.disabled}
            />
			{props.error && <p className={styles.error_label}>{props.error}</p>}
        </>
    );
}
