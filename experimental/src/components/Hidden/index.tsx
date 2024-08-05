import React from "react";
import styles from "src/components/Hidden/hidden.module.css";

type hidden_props = {
    children: React.ReactNode
};

export default function Hidden(props: hidden_props) {
    return (<div className={styles.hidden}>{props.children}</div>);
}
