import { jsx as e, jsxs as i, Fragment as d } from "react/jsx-runtime";
import './index.css';const l = "_input_o3cch_1", t = "_label_o3cch_5", o = "_lk_o3cch_23", r = "_checked_o3cch_27", n = {
  input: l,
  label: t,
  lk: o,
  checked: r
};
function _(c) {
  return /* @__PURE__ */ e("div", { children: c.children });
}
function u(c) {
  return /* @__PURE__ */ i(d, { children: [
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
const s = "_hidden_1wrby_1", h = {
  hidden: s
};
function p(c) {
  return /* @__PURE__ */ e("div", { className: h.hidden, children: c.children });
}
export {
  p as Hidden,
  u as Radio,
  _ as RadioGroup
};
