import React, { CSSProperties }  from "react";
import styles from "./badge.module.css";

type badge_props = {
    children: React.ReactNode;
    outline?: boolean;
    accent?: boolean;
    secondary?: boolean;
    className?: string;
    style?: CSSProperties;
};

export default function Bagde(props: badge_props) {
    let card_styles = styles.base;

    if (props.accent)
        card_styles += " " + styles.accent;

    if (props.outline)
        card_styles += " " + styles.outline;

    if (props.secondary)
        card_styles += " " + styles.secondary;

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
