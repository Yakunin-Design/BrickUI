import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare function Hidden(props: hidden_props): JSX_2.Element;

declare type hidden_props = {
    children: default_2.ReactNode;
};

export declare function Radio(props: radio_props): JSX_2.Element;

declare type radio_group_props = {
    children: default_2.ReactNode;
    name: string;
};

declare type radio_props = {
    children: default_2.ReactNode;
    onClick?: () => void;
};

export declare function RadioGroup(props: radio_group_props): JSX_2.Element;

export { }
