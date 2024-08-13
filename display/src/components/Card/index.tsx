import React, { CSSProperties }  from "react";
import styles from "./card.module.css";

type card_props = {
    children: React.ReactNode;
	no_spacing?: boolean;
    outline?: boolean;
    expand?: boolean;
    className?: string;
    style?: CSSProperties;
};

export default function Card(props: card_props) {
    let card_styles = styles.base;

	if(!props.no_spacing)
        card_styles += " " + styles.default_spacing;

    if (props.outline)
        card_styles += " " + styles.outline;

    if (props.className)
        card_styles += " " + props.className;

    return (
		<div
			className={card_styles}
			style={props.style}
		>
			{props.children}
		</div>
    );
}
