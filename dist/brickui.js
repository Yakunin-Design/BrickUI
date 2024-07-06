import { jsx as i, Fragment as d } from "react/jsx-runtime";
const c = "_primary_1o70d_1", l = "_secondary_1o70d_20", o = "_outline_1o70d_29", a = "_ghost_1o70d_39", s = "_destructive_1o70d_48", _ = "_floating_1o70d_57", u = "_expand_1o70d_74", r = "_link_1o70d_78", f = "_disabled_1o70d_87", e = {
  primary: c,
  secondary: l,
  outline: o,
  ghost: a,
  destructive: s,
  floating: _,
  expand: u,
  link: r,
  disabled: f
};
function b(t) {
  let n = e.primary;
  return t.secondary && (n += " " + e.secondary), t.link && (n += " " + e.link), t.ghost && (n += " " + e.ghost), t.destructive && (n += " " + e.destructive), t.outline && (n += " " + e.outline), t.expand && (n += " " + e.expand), t.disabled && (n += " " + e.disabled), t.className && (n += " " + t.className), /* @__PURE__ */ i(d, { children: t.href ? /* @__PURE__ */ i("a", { href: t.href, children: /* @__PURE__ */ i(
    "button",
    {
      className: n,
      onClick: t.onClick,
      type: t.submit ? "submit" : "button",
      children: t.children
    }
  ) }) : /* @__PURE__ */ i(
    "button",
    {
      className: n,
      onClick: t.onClick,
      type: t.submit ? "submit" : "button",
      children: t.children
    }
  ) });
}
export {
  b as Button
};
