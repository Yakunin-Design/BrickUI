"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(src_exports);

// src/components/input/Button/index.tsx
var import_react = __toESM(require("react"));

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
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, props.href ? /* @__PURE__ */ import_react.default.createElement("a", { href: props.href }, /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      className: button_styles,
      onClick: props.onClick,
      type: props.submit ? "submit" : "button"
    },
    props.children
  )) : /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      className: button_styles,
      onClick: props.onClick,
      type: props.submit ? "submit" : "button"
    },
    props.children
  ));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
