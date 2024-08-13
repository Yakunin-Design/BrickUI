import { jsx as t } from "react/jsx-runtime";
import './index.css';const s = "_base_1c565_1", l = "_default_spacing_1c565_7", i = "_outline_1c565_12", a = {
  base: s,
  default_spacing: l,
  outline: i
};
function y(e) {
  let n = a.base;
  return e.no_spacing || (n += " " + a.default_spacing), e.outline && (n += " " + a.outline), e.className && (n += " " + e.className), /* @__PURE__ */ t(
    "div",
    {
      className: n,
      style: e.style,
      children: e.children
    }
  );
}
const _ = "_base_174nd_1", d = "_accent_174nd_8", o = "_secondary_174nd_13", u = "_outline_174nd_18", c = {
  base: _,
  accent: d,
  secondary: o,
  outline: u
};
function b(e) {
  let n = c.base;
  return e.accent && (n += " " + c.accent), e.outline && (n += " " + c.outline), e.secondary && (n += " " + c.secondary), e.className && (n += " " + e.className), /* @__PURE__ */ t(
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
