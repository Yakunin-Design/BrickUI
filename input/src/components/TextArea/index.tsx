import { Spacer } from "@brick-uikit/layout";
import { CSSProperties, ChangeEvent } from "react";
import styles from "./textarea.module.css";

type props = {
    name: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    label?: string;
    value?: string;
    className?: string;
    style?: CSSProperties;
};

export default function TextArea(props: props) {
    return (
        <>
            {props.label && (
                <label className={styles.label} htmlFor={props.name}>
                    <h3>{props.label}</h3>
                </label>
            )}
            <Spacer top={1} />
            <textarea
                className={
                    props.className
                        ? styles.textarea + " " + props.className
                        : styles.textarea
                }
                id={props.name}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
                style={props.style}
            />
        </>
    );
}
