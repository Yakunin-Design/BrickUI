import React from "react";
import styles from "./radio.module.css";

type radio_group_props = {
    children: React.ReactNode;
	name: string;
};

export function RadioGroup(props: radio_group_props) {
	return(
		<p>
			{props.children}	
		</p>
	);
}

type radio_props = {
    children: React.ReactNode;
    onClick?: () => void;
};

export function Radio(props: radio_props) {
    return (
		<>
            <label
                className={styles.label}
            >
                {props.children}
            </label>
            <input
                className={styles.input}
                type="radio"
            />
		</>
    );
}
