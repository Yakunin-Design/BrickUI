import { jsx as t } from "react/jsx-runtime";
import './index.css';const s = "_base_bc655_1", l = "_default_spacing_bc655_7", i = "_outline_bc655_12", n = {
  base: s,
  default_spacing: l,
  outline: i
};
function y(e) {
  let c = n.base;
  return e.no_spacing || (c += " " + n.default_spacing), e.outline && (c += " " + n.outline), e.className && (c += " " + e.className), /* @__PURE__ */ t(
    "div",
    {
      className: c,
      style: e.style,
      children: e.children
    }
  );
}
const _ = "_base_hfe5e_1", d = "_accent_hfe5e_7", o = "_secondary_hfe5e_11", f = "_outline_hfe5e_15", a = {
  base: _,
  accent: d,
  secondary: o,
  outline: f
};
function b(e) {
  let c = a.base;
  return e.accent && (c += " " + a.accent), e.outline && (c += " " + a.outline), e.secondary && (c += " " + a.secondary), e.className && (c += " " + e.className), /* @__PURE__ */ t(
    "div",
    {
      className: c,
      style: e.style,
      children: e.children
    }
  );
}
export {
  b as Badge,
  y as Card
};
