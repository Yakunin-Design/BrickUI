import { jsx as c } from "react/jsx-runtime";
import './index.css';const s = "_base_3jjh0_1", l = "_default_spacing_3jjh0_7", i = "_outline_3jjh0_18", t = {
  base: s,
  default_spacing: l,
  outline: i
};
function y(e) {
  let n = t.base;
  return e.no_spacing || (n += " " + t.default_spacing), e.outline && (n += " " + t.outline), e.className && (n += " " + e.className), /* @__PURE__ */ c(
    "div",
    {
      className: n,
      style: e.style,
      children: e.children
    }
  );
}
const _ = "_base_174nd_1", d = "_accent_174nd_8", o = "_secondary_174nd_13", u = "_outline_174nd_18", a = {
  base: _,
  accent: d,
  secondary: o,
  outline: u
};
function b(e) {
  let n = a.base;
  return e.accent && (n += " " + a.accent), e.outline && (n += " " + a.outline), e.secondary && (n += " " + a.secondary), e.className && (n += " " + e.className), /* @__PURE__ */ c(
    "div",
    {
      className: n,
      style: e.style,
      children: e.children
    }
  );
}
export {
  b as Badge,
  y as Card
};
