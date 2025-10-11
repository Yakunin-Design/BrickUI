import { CSSProperties } from 'react';
import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare function Badge(props: badge_props): JSX_2.Element;

declare type badge_props = {
    children: default_2.ReactNode;
    outline?: boolean;
    accent?: boolean;
    secondary?: boolean;
    mini?: boolean;
    className?: string;
    style?: CSSProperties;
};

export declare function Card(props: card_props): JSX_2.Element;

declare type card_props = {
    children: default_2.ReactNode;
    no_spacing?: boolean;
    outline?: boolean;
    className?: string;
    style?: CSSProperties;
};

export { }
