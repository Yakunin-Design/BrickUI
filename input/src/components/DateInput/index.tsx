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

type props = { 
    value: Date;  // The parent passes a Date object
    name: string;
    onChange: (event: any) => void;
    error?: string;
    label?: string;
};

export default function DateInput(props: props) {
    const today = props.value;
    const month_names = get_month_names();

    // Handler for input changes (day, month, year)
    function handle_change(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const name = event.target.name;
        let value = event.target.value;

        // Validate day (1-31)
        if (name === "day") {
            const day_value: string = value.toString();
            if (Number(day_value) > 31) return;  // Reject invalid days
        }

        // Build the new date with the updated field (day, month, or year)
        const updated_date = {
            day: name === "day" ? value : today.getDate().toString(),
            month: name === "month" ? value : today.toLocaleString("default", { month: 'long' }),
            year: name === "year" ? value : today.getFullYear().toString(),
        };

        // Create a new Date object with the updated values
        const month_index = month_names.indexOf(updated_date.month);  // Convert month name to index (0-11)
        const new_date = new Date(Number(updated_date.year), month_index, Number(updated_date.day));

        // Emit the new date to the parent component
        const event_emulation = {
            target: {
                name: props.name,
                value: new_date,  // Pass the new Date object
            }
        };
        props.onChange(event_emulation);
    }

    function reset_field() {
        // Reset the day field when clicked
        const event_emulation = {
            target: {
                name: props.name,
                value: new Date(today.getFullYear(), today.getMonth(), 1),  // Reset to 1st of the month
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
                <div onClick={reset_field}>
                    <Input 
                        name="day"
                        value={today.getDate().toString()}  // Controlled day value
                        type="tel"
                        maxLength={2}
                        onChange={handle_change}  // Pass changes up
                        className={styles.day}
                        error={props.error && " "}
                    />
                </div>
                <Spacer left={1} />
                <Select
                    name="month"
                    onChange={handle_change}
                    value={today.toLocaleString("default", { month: 'long' })}
                    options={month_names}
                    error={props.error && " "}
                />
                <Spacer left={1} />
                <Input
                    name="year"
                    type="tel"
                    maxLength={4}
                    value={today.getFullYear().toString()}
                    onChange={handle_change}
                    className={styles.year}
                    error={props.error && " "}
                />
            </Row>
            {props.error && <p className={styles.error_label}>{props.error}</p>}
        </>
    );
}
