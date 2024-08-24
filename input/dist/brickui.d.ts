import { ChangeEvent } from 'react';
import { CSSProperties } from 'react';
import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare function Button(props: button_props): JSX_2.Element;

declare type button_props = {
    children: default_2.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    outline?: boolean;
    expand?: boolean;
    link?: boolean;
    ghost?: boolean;
    className?: string;
    destructive?: boolean;
    submit?: boolean;
    disabled?: boolean;
    href?: string;
    style?: CSSProperties;
};

export declare function Checkbox(props: props_3): JSX_2.Element;

export declare function DateInput(props: props_7): JSX_2.Element;

export declare function Input(props: props): JSX_2.Element;

export declare function PasswordInput(props: props_2): JSX_2.Element;

declare type props = {
    name: string;
    onChange: (event: any) => void;
    type?: "tel" | "email";
    placeholder?: string;
    label?: string;
    value?: string | number;
    className?: string;
    error?: string;
    maxLength?: number;
    style?: CSSProperties;
    list?: string;
    disabled?: boolean;
    pattern?: string;
    min?: number;
    max?: number;
};

declare type props_2 = {
    name: string;
    onChange: (event: any) => void;
    label?: string;
    value?: string | number;
    className?: string;
    error?: string;
    maxLength?: number;
    style?: CSSProperties;
    placeholder?: string;
};

declare type props_3 = {
    onChange?: () => void;
    checked?: boolean;
    children?: React.ReactNode;
    error?: string;
};

declare type props_4 = {
    name: string;
    onChange: (event: any) => void;
    options: Array<string>;
    value: string | number;
    label?: string;
    error?: string;
    className?: string;
    values?: Array<string | number>;
};

declare type props_5 = {
    name: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    label?: string;
    value?: string;
    className?: string;
    style?: CSSProperties;
};

declare type props_6 = {
    name: string;
    onChange: (event: any) => void;
    placeholder?: string;
    label?: string;
    value?: string | number;
    className?: string;
    error?: string;
    style?: CSSProperties;
    disabled?: boolean;
    pattern?: string;
};

declare type props_7 = {
    value: string | Date;
    name: string;
    onChange: (event: any) => void;
    error?: string;
    label?: string;
};

export declare function Select(props: props_4): JSX_2.Element;

export declare function TextArea(props: props_5): JSX_2.Element;

export declare function TimeInput(props: props_6): JSX_2.Element;

export { }
