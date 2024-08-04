import React from "react";
import styles from "./hidden.module.css";

type hidden_props = {
    children: React.ReactNode
};

export default function Hidden(props: hidden_props) {
    return (<div className={styles.hidden}>{props.children}</div>);
}
