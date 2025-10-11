type ComponentProperty = Record<string, [string, string]>;
type ComponentData = {
	name: string;
	lib: "layout" | "input" | "display" | "experimental";
	description: string;
	code: string;
	properties: ComponentProperty[];
};

type ParsedComponentProperty = {
	prop_name: string;
	type: string;
	description: string;
};

export {type ComponentProperty, type ComponentData, type ParsedComponentProperty}
