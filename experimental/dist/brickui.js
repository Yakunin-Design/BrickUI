import { jsx as n, jsxs as c, Fragment as t } from "react/jsx-runtime";
import './index.css';const i = "_input_1hyw4_1", r = "_label_1hyw4_5", o = "_lk_1hyw4_24", s = "_checked_1hyw4_28", l = {
  input: i,
  label: r,
  lk: o,
  checked: s
};
function h(e) {
  return /* @__PURE__ */ n("p", { children: e.children });
}
function _(e) {
  return /* @__PURE__ */ c(t, { children: [
    /* @__PURE__ */ n(
      "label",
      {
        className: l.label,
        children: e.children
      }
    ),
    /* @__PURE__ */ n(
      "input",
      {
        className: l.input,
        type: "radio"
      }
    )
  ] });
}
export {
  _ as Radio,
  h as RadioGroup
};
