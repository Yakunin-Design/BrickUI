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
};

export declare function Container(props: container_props): JSX_2.Element;

declare type container_props = {
    children: default_2.ReactNode;
    wrapper?: boolean;
    className?: string;
    lk?: boolean;
};

export { }
