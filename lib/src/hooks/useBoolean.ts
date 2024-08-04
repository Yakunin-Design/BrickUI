import { useState } from "react";

export default function useBoolean(initial_state?: boolean): [boolean, (value?: boolean) => void] {
	const [toggle_value, set_toggle_value] = useState(initial_state ? initial_state : false);

	function toggler(value?: boolean) {
		if(value) set_toggle_value(value);
		else set_toggle_value(prev => !prev);
	}
	return [toggle_value, toggler];
};