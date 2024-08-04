import { jsx as e, jsxs as l, Fragment as t } from "react/jsx-runtime";
import './index.css';const o = "_input_o3cch_1", i = "_label_o3cch_5", r = "_lk_o3cch_23", s = "_checked_o3cch_27", n = {
  input: o,
  label: i,
  lk: r,
  checked: s
};
function h(c) {
  return /* @__PURE__ */ e("p", { children: c.children });
}
function _(c) {
  return /* @__PURE__ */ l(t, { children: [
    /* @__PURE__ */ e(
      "label",
      {
        className: n.label,
        children: c.children
      }
    ),
    /* @__PURE__ */ e(
      "input",
      {
        className: n.input,
        type: "radio"
      }
    )
  ] });
}
export {
  _ as Radio,
  h as RadioGroup
};
