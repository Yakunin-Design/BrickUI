import React from "react";
import styles from "./input.module.css";
import Spacer from "@/components/std/Spacer";
import eye_closed from "./eye_closed.svg";
import eye_opened from "./eye.svg";

import { CSSProperties, useState } from "react";
import Image from "next/image";

type props = {
    name: string;
    onChange: (event: any) => void;
    label?: string;
	error?: string;
    value?: string | number;
    className?: string;
    maxLength?: number;
    style?: CSSProperties;
    placeholder?: string;
};

export default function PasswordInput(props: props) {
    const [show, setShow] = useState(false);

    const toggle_show = () => {
        setShow(!show);
    };

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
            <div className={styles.icon_wrapper}>
                <input
                    className={input_style}
                    id={props.name}
                    name={props.name}
                    type={show ? "text" : "password"}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                    maxLength={props.maxLength}
                    style={props.style ? props.style : {}}
                />
                <Image
                    src={show ? eye_opened : eye_closed}
                    alt="eye"
                    className={styles.eye}
                    onClick={toggle_show}
                />
            </div>
			{props.error && <p className={styles.error_label}>{props.error}</p>}
        </>
    );
}
