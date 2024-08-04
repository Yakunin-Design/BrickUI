import React from "react";
import styles from "./radio.module.css";

type radio_group_props = {
    children: React.ReactNode;
    onClick?: () => void;
};

export function RadioGroup(props: radio_group_props) {
	return(
	
	);
}

type radio_props = {
    children: React.ReactNode;
    onClick?: () => void;
};


export function Radio(props: radio_props) {
    return (
		<>
			<label></label>
			<input/>
		</>
    );
}
