"use client";
import { Row, Spacer } from "@brick-uikit/layout";
import { useEffect, useState } from "react";
import styles from "./date.module.css";
import { Input, Select } from "@brick-uikit/input";

function get_month_names(locale: string): string[] {
    if (locale === "ru-RU") {
        return [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
        ];
    } else {
        const months = [];
        for (let i = 0; i < 12; i++) {
            const monthName = new Date(2024, i).toLocaleString("default", { month: 'long' });
            months.push(monthName);
        }
        return months;
    }
}

type props = { 
    value: Date;  // The parent passes a Date object
    name: string;
    onChange: (event: any) => void;
    error?: string;
    label?: string;
};

export default function DateInput(props: props) {
    const today = props.value;
	const [day, set_day] = useState(today.getDate().toString());
	const [month_names, set_month_names] = useState<string[]>([]);
	const [selected_month, set_selected_month] = useState(today.toLocaleString("default", { month: 'long' }));
	const [year, set_year] = useState(today.getFullYear().toString()); // Get the user's locale

	useEffect(() => {
        // client-side locale detection
        const user_locale = navigator.language || "en";
		const months = get_month_names(user_locale);
        set_month_names(months);

		// Update selected month based on the new month names
        const current_month = user_locale == "ru-RU" ? 
			months[today.getMonth()] : today.toLocaleString(user_locale, { month: 'long' });
        set_selected_month(current_month);
    }, []);

    function handle_change(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const name = event.target.name;
        let value = event.target.value;
        if (name === "day") {
            // Validate day (1-31)
            if (Number(value) > 31) return;
            set_day(value);
        }
		// Update selected month when the user selects a different month
		if (name === "month") set_selected_month(value);

		if (name === "year") {
			if (!value) { value = ""; set_year(""); }
			// Validate year starts with 1 or 2
            if (value.length === 1 && (value === "1" || value === "2")) set_year(value);
            else if (value.length > 1 && (value.startsWith("1") || value.startsWith("2"))) set_year(value);
            else return; // Reject invalid year input
		}

         // Build the new date with the updated field (day, month, or year)
		 const updated_date = {
            day: name === "day" ? value : day,
            month: name === "month" ? value : selected_month,
            year: name === "year" ? value : year,
        };

        // Create a new Date object with the updated values
        const month_index = month_names.indexOf(updated_date.month);  // Convert month name to index (0-11)

		let new_date: Date | undefined = new Date(Number(updated_date.year), month_index, Number(updated_date.day)); 
		if(updated_date.year.length < 4 || !updated_date.day || !Number(updated_date.day) ||
			Number(updated_date.day) <= 0 || updated_date.day !== new_date.getDate().toString() || month_index > 11)
				new_date = undefined;

        // Emit the new date to the parent component
        const event_emulation = {
            target: {
                name: props.name,
                value: new_date,  // Pass the new Date object
            }
        };
		
        props.onChange(event_emulation);
    }

    return (
        <>
            {props.label && (
                <>
                    <b className={styles.label}>{props.label}</b>
                    <Spacer top={0.5} />
                </>
            )}
            <Row>
				<Input 
					name="day"
					value={day}  // Controlled day value
					type="tel"
					maxLength={2}
					onChange={handle_change}  // Pass changes up
					className={styles.day}
					error={props.error && " "}
				/>
				
                <Spacer left={1} />
                <Select
                    name="month"
                    onChange={handle_change}
                    value={selected_month}
                    options={month_names}
                    error={props.error && " "}
                />
                <Spacer left={1} />
                <Input
                    name="year"
                    type="tel"
                    maxLength={4}
                    value={year}
                    onChange={handle_change}
                    className={styles.year}
                    error={props.error && " "}
                />
            </Row>
            {props.error && <p className={styles.error_label}>{props.error}</p>}
        </>
    );
}
