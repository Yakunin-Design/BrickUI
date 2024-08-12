type padding_props = {
    children: React.ReactNode;
    horizontal?: number;
    vertical?: number;

    onClick?: () => void;
    className?: string;
    title?: string;
};

export default function Padding(props: padding_props) {
    let style = {};
    if (props.vertical || props.horizontal) {
        style = {
            paddingTop: props.vertical + "rem",
            paddingBottom: props.vertical + "rem",

            paddingRight: props.horizontal + "em",
            paddingLeft: props.horizontal + "em",
        };
    }

    return (
        <div
            className={props.className}
            onClick={props.onClick}
            title={props.title}
            style={style}
        >
            {props.children}
        </div>
    );
}
