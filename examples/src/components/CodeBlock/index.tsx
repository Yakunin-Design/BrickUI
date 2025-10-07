"use client";
import Image from "next/image";
import { Row } from "@brick-uikit/layout";
import { useState } from "react";

import copy_icon from "./copy_icon.svg";
import mark_icon from "./mark_icon.svg";

import ts_icon from "./ts_icon.svg";
import terminal_icon from "./terminal.svg";

import styles from "./code_block.module.css";

import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-jsx";

type props = {
	lang: string,
	code: string,
	title?: string,
	terminal?: boolean
}

export default function CodeBlock(props: props) {
	const language = Prism.languages[props.lang];
	const highlited_code = Prism.highlight(props.code, language, props.lang);

	const [copied, set_copied] = useState(false);

	const icon = props.terminal ? terminal_icon : ts_icon;

	async function copy_to_clipboard() {
		await navigator.clipboard.writeText(props.code);
		set_copied(true);

		setTimeout(() => {
			set_copied(false);
		}, 2000);
	}

	return (
		<figure>
			<div className={styles.caption} onClick={copy_to_clipboard}>
				<Row>
					<Row gap={1}>
						<Image
						  src={icon}
						  alt="language icon"
						  height={16}
						/>
							
						{props.title && 
							<p>{props.title}</p>
						}
					</Row>
					<Image
					  src={copied ? mark_icon : copy_icon}
					  alt="copy icon"
					  height={16}
					  className={styles.copy}
					/>
				</Row>
			</div>
			<pre className={styles.code}>
				<code dangerouslySetInnerHTML={{
					__html: highlited_code
				}}></code>
			</pre>
		</figure>
	);
}
