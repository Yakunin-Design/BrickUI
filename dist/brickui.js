import { jsx as i, Fragment as l } from "react/jsx-runtime";
import './index.css';const a = "_primary_1o70d_1", d = "_secondary_1o70d_20", s = "_outline_1o70d_29", o = "_ghost_1o70d_39", _ = "_destructive_1o70d_48", r = "_floating_1o70d_57", u = "_expand_1o70d_74", m = "_link_1o70d_78", f = "_disabled_1o70d_87", t = {
  primary: a,
  secondary: d,
  outline: s,
  ghost: o,
  destructive: _,
  floating: r,
  expand: u,
  link: m,
  disabled: f
};
function v(n) {
  let e = t.primary;
  return n.secondary && (e += " " + t.secondary), n.link && (e += " " + t.link), n.ghost && (e += " " + t.ghost), n.destructive && (e += " " + t.destructive), n.outline && (e += " " + t.outline), n.expand && (e += " " + t.expand), n.disabled && (e += " " + t.disabled), n.className && (e += " " + n.className), /* @__PURE__ */ i(l, { children: n.href ? /* @__PURE__ */ i("a", { href: n.href, children: /* @__PURE__ */ i(
    "button",
    {
      className: e,
      onClick: n.onClick,
      type: n.submit ? "submit" : "button",
      children: n.children
    }
  ) }) : /* @__PURE__ */ i(
    "button",
    {
      className: e,
      onClick: n.onClick,
      type: n.submit ? "submit" : "button",
      children: n.children
    }
  ) });
}
const h = "_container_1v4dn_1", y = "_wrapper_1v4dn_8", b = "_lk_1v4dn_17", c = {
  container: h,
  wrapper: y,
  lk: b
};
function g(n) {
  let e;
  return n.wrapper ? e = c.wrapper : e = c.container, n.className && (e += " " + n.className), n.lk ? /* @__PURE__ */ i("div", { className: c.lk, children: /* @__PURE__ */ i("div", { className: e, children: n.children }) }) : /* @__PURE__ */ i("div", { className: e, children: n.children });
}
export {
  v as Button,
  g as Container
};
