import { useState } from "react";

export default function useErrors(): [
	Record<string, string>, 
	(field: string, message: string) => void,
	() => void
] {
	const [errors, set_errors] = useState({});

	function add_error(field: string, message: string) {
		set_errors(prev => {return {...prev, [field]: message}});
	}

	function clear_errors() {
		set_errors({});
	}

	return [errors, add_error, clear_errors];
};
