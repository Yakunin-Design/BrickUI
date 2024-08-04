"use client";
import styles from "./input.module.css";
import { Spacer } from "@brick-uikit/layout";
import { useBoolean } from "@brick-uikit/lib";
import EyeIcon from "./EyeIcon";  
import { CSSProperties, useState } from "react";

type props = {
    name: string;
    onChange: (event: any) => void;
    label?: string;
    value?: string | number;
    className?: string;
	error?: string;
    maxLength?: number;
    style?: CSSProperties;
    placeholder?: string;
};

export default function PasswordInput(props: props) {
    const [show_password, toggle_password] = useBoolean();

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
            <Spacer top={1} />
            <div className={styles.icon_wrapper}>
                <input
                    className={input_style}
                    id={props.name}
                    name={props.name}
                    type={show_password ? "text" : "password"}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                    maxLength={props.maxLength}
                    style={props.style ? props.style : {}}
                />
                <div
                    className={styles.eye}
                    onClick={() => toggle_password()}
                >
					<EyeIcon is_closed={show_password} />
				</div>
            </div>
			{props.error && <p className={styles.error_label}>{props.error}</p>}
        </>
    );
}
