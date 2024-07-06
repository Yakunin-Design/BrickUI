import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare function Container(props: container_props): JSX_2.Element;

declare type container_props = {
    children: default_2.ReactNode;
    wrapper?: boolean;
    className?: string;
    lk?: boolean;
};

export declare function Divider(props: divider_props): JSX_2.Element;

declare type divider_props = {
    text?: string;
};

export declare function Padding(props: padding_props): JSX_2.Element;

declare type padding_props = {
    children: React.ReactNode;
    horisontal?: number;
    vertical?: number;
    onClick?: () => void;
    className?: string;
    title?: string;
};

export declare function Row(props: row_props): JSX_2.Element;

declare type row_props = {
    children: default_2.ReactNode;
    gap?: number;
    justifyContent?: "flex-start" | "flex-end" | "space-between" | "space-around";
    onClick?: () => void;
    align?: "start" | "end";
    className?: string;
    title?: string;
};

export declare function Spacer(props: spacer_props): JSX_2.Element;

declare type spacer_props = {
    children?: default_2.ReactNode;
    top?: number;
    bottom?: number;
    left?: number;
};

export { }
