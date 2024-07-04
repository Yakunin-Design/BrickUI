import React from 'react';

type props = {
    children: React.ReactNode;
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
declare function Button(props: props): React.JSX.Element;

export { Button };
