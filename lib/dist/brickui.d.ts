export declare function useBoolean(initial_state?: boolean): [boolean, (value?: boolean) => void];

export declare function useErrors(): [
Record<string, string>,
(field: string, message: string) => void,
() => void
];

export { }
