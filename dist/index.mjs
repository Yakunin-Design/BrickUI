// src/components/input/Button/index.tsx
import React from "react";

// src/components/input/Button/button.module.css
var button_default = {};

// src/components/input/Button/index.tsx
function Button(props) {
  let button_styles = button_default.primary;
  if (props.secondary) {
    button_styles += " " + button_default.secondary;
  }
  if (props.link) {
    button_styles += " " + button_default.link;
  }
  if (props.ghost) {
    button_styles += " " + button_default.ghost;
  }
  if (props.destructive) {
    button_styles += " " + button_default.destructive;
  }
  if (props.outline) {
    button_styles += " " + button_default.outline;
  }
  if (props.expand) {
    button_styles += " " + button_default.expand;
  }
  if (props.disabled) {
    button_styles += " " + button_default.disabled;
  }
  if (props.className) {
    button_styles += " " + props.className;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, props.href ? /* @__PURE__ */ React.createElement("a", { href: props.href }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: button_styles,
      onClick: props.onClick,
      type: props.submit ? "submit" : "button"
    },
    props.children
  )) : /* @__PURE__ */ React.createElement(
    "button",
    {
      className: button_styles,
      onClick: props.onClick,
      type: props.submit ? "submit" : "button"
    },
    props.children
  ));
}
export {
  Button
};
