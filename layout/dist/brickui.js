import { jsx as n, jsxs as m, Fragment as o } from "react/jsx-runtime";
import './index.css';const _ = "_container_1v4dn_1", v = "_wrapper_1v4dn_8", f = "_lk_1v4dn_17", l = {
  container: _,
  wrapper: v,
  lk: f
};
function k(e) {
  let t;
  return e.wrapper ? t = l.wrapper : t = l.container, e.className && (t += " " + e.className), e.lk ? /* @__PURE__ */ n("div", { className: l.lk, children: /* @__PURE__ */ n("div", { className: t, children: e.children }) }) : /* @__PURE__ */ n("div", { className: t, children: e.children });
}
const u = "_row_19uuv_1", h = "_start_19uuv_7", g = "_end_19uuv_11", c = {
  row: u,
  start: h,
  end: g
};
function C(e) {
  let t = "";
  e.className && (t += " " + e.className);
  const i = {
    gap: (e.gap || 0) + "rem",
    justifyContent: e.gap ? "flex-start" : "space-between"
  };
  return e.justifyContent && (i.justifyContent = e.justifyContent), e.align === "start" && (t += " " + c.start), e.align === "end" && (t += " " + c.end), t += " " + c.row, /* @__PURE__ */ n(
    "div",
    {
      className: t,
      onClick: e.onClick,
      title: e.title,
      style: i,
      children: e.children
    }
  );
}
function j(e) {
  const { top: t, bottom: i, left: r, children: d } = e, s = {
    marginTop: t ? `${t}rem` : "0rem",
    marginBottom: i ? `${i}rem` : "0rem",
    marginLeft: r ? `${r}rem` : "0rem"
  };
  return t || i ? /* @__PURE__ */ n("div", { style: s, children: d }) : /* @__PURE__ */ n("span", { style: s, children: d });
}
function $(e) {
  let t = {};
  return (e.vertical || e.horizontal) && (t = {
    paddingTop: e.vertical + "rem",
    paddingBottom: e.vertical + "rem",
    paddingRight: e.horizontal + "em",
    paddingLeft: e.horizontal + "em"
  }), /* @__PURE__ */ n(
    "div",
    {
      className: e.className,
      onClick: e.onClick,
      title: e.title,
      style: t,
      children: e.children
    }
  );
}
const N = "_divider_28riq_1", w = "_line_28riq_8", y = "_text_28riq_14", a = {
  divider: N,
  line: w,
  text: y
};
function q(e) {
  return /* @__PURE__ */ m("div", { className: a.divider, children: [
    /* @__PURE__ */ n("div", { className: a.line }),
    e.text && /* @__PURE__ */ m(o, { children: [
      /* @__PURE__ */ n("p", { className: a.text, children: e.text }),
      /* @__PURE__ */ n("div", { className: a.line })
    ] })
  ] });
}
export {
  k as Container,
  q as Divider,
  $ as Padding,
  C as Row,
  j as Spacer
};
