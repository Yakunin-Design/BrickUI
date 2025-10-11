import { jsx as c } from "react/jsx-runtime";
import './index.css';const i = "_base_3jjh0_1", s = "_default_spacing_3jjh0_7", l = "_outline_3jjh0_18", t = {
  base: i,
  default_spacing: s,
  outline: l
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
const _ = "_base_1ea4x_1", d = "_accent_1ea4x_8", o = "_secondary_1ea4x_13", u = "_outline_1ea4x_18", f = "_mini_1ea4x_23", a = {
  base: _,
  accent: d,
  secondary: o,
  outline: u,
  mini: f
};
function b(e) {
  let n = a.base;
  return e.accent && (n += " " + a.accent), e.outline && (n += " " + a.outline), e.mini && (n += " " + a.mini), e.secondary && (n += " " + a.secondary), e.className && (n += " " + e.className), /* @__PURE__ */ c(
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
