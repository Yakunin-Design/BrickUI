"use client";
import { Row, Spacer } from "@brick-uikit/layout";
import Input from "../Input";
import Select from "../Select";
import { useState, useEffect } from "react";
import styles from "./date.module.css";

function get_month_names(): string[] {
    const months = [];

    for (let i = 0; i < 12; i++) {
        const monthName = new Date(2024, i).toLocaleString("default", { month: 'long' });
        months.push(monthName);
    }

    return months;
}

type props = { value: string | Date; 
	name: string;
    onChange: (event: any) => void;
	error?: string;
    label?: string;
};

export default function DateInput(props: props) {
	const today = new Date(props.value);
	const month_name = today.toLocaleDateString('default', { month: 'long' });
	const month_names = get_month_names();

	type date_input = {
		day: string;
		month: string;
		year: string;
	}

	const default_input: date_input = {
		day: today.getDate().toString(),
		month: month_name,
		year: today.getFullYear().toString(),
	}

	const [date, set_date] = useState<date_input>(default_input);

    function handle_change(event: React.ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
		let value = event.target.value;

		if(name === "day") {
			const day_value: string = value.toString();
			if(Number(day_value) > 31) return;
		}

		set_date(prev => {
			return {
				...prev,
				[name]: value,
			};
		});
    }

	useEffect(() => {
		const new_date = new Date(`${date.year}-${date.month}-${date.day}`);

		const event_emulation = {
			target: {
				name: props.name,
				value: new_date
			}
		}

		props.onChange(event_emulation);
	}, [date]);

	function reset_field(event: React.MouseEvent<HTMLElement>) {
		set_date(prev => {return {...prev, day: ""}});
	}

    return (
		<>
            {props.label && (
                <>
                    <b className={styles.label}>
                        {props.label}
                    </b>
                    <Spacer top={0.5} />
                </>
            )}
			<Row>
				<div onClick={reset_field}>
					<Input 
						name="day"
						value={date.day}
						type="tel"
						maxLength={2}
						onChange={handle_change}
						className={styles.day}
						error={props.error && " "}
					/>
				</div>
				<Spacer left={1}/>
				<Select
					name="month"
					onChange={handle_change}
					value={date.month}
					options={month_names}
					error={props.error && " "}
				/>
				<Spacer left={1}/>
				<Input
					name="year"
					type="tel"
					maxLength={4}
					value={date.year}
					onChange={handle_change}
					className={styles.year}
					error={props.error && " "}
				/>
			</Row>
			{props.error && <p className={styles.error_label}>{props.error}</p>}
		</>
   );
}
