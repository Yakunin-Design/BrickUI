import styles from "./table.module.css";
import { ComponentData, ParsedComponentProperty } from "./component_data";
import { Spacer } from "@brick-uikit/layout";

function TableRow(props: ParsedComponentProperty){
	return (
		<tr>
			<td><span className={styles.code}>{props.prop_name}</span></td>
			<td><span className={styles.code}>{props.type}</span></td>
			<td className={styles.description}>{props.description}</td>
		</tr>
	);
}

export default function PropTable({ data }: { data: ComponentProperty[] }) {
	const parsed_props: ParsedComponentProperty[] = data.map((prop) => {
		const [prop_name, [type, description]] = Object.entries(prop)[0];
		return { prop_name, type, description };
	});

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th scope="col">Prop</th>
					<th scope="col">Type</th>
					<th scope="col" className={styles.description}>Description</th>
				</tr>
			</thead>
			<tbody>
				{parsed_props.map((prop) => <TableRow key={prop.prop_name} {...prop}/>)}
			</tbody>
		</table>
	);
}

