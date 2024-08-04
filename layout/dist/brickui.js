import { jsx as n, jsxs as o, Fragment as m } from "react/jsx-runtime";
import './index.css';const _ = "_container_1v4dn_1", v = "_wrapper_1v4dn_8", f = "_lk_1v4dn_17", a = {
  container: _,
  wrapper: v,
  lk: f
};
function j(e) {
  let t;
  return e.wrapper ? t = a.wrapper : t = a.container, e.className && (t += " " + e.className), e.lk ? /* @__PURE__ */ n("div", { className: a.lk, children: /* @__PURE__ */ n("div", { className: t, children: e.children }) }) : /* @__PURE__ */ n("div", { className: t, children: e.children });
}
const h = "_row_19uuv_1", u = "_start_19uuv_7", g = "_end_19uuv_11", c = {
  row: h,
  start: u,
  end: g
};
function $(e) {
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
function b(e) {
  const { top: t, bottom: i, left: r, children: d } = e, s = {
    marginTop: t ? `${t}rem` : "0rem",
    marginBottom: i ? `${i}rem` : "0rem",
    marginLeft: r ? `${r}rem` : "0rem"
  };
  return t || i ? /* @__PURE__ */ n("div", { style: s, children: d }) : /* @__PURE__ */ n("span", { style: s, children: d });
}
function q(e) {
  let t = {};
  return (e.vertical || e.horisontal) && (t = {
    paddingTop: e.vertical + "rem",
    paddingBottom: e.vertical + "rem",
    paddingRight: e.horisontal + "em",
    paddingLeft: e.horisontal + "em"
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
const N = "_divider_28riq_1", y = "_line_28riq_8", w = "_text_28riq_14", l = {
  divider: N,
  line: y,
  text: w
};
function B(e) {
  return /* @__PURE__ */ o("div", { className: l.divider, children: [
    /* @__PURE__ */ n("div", { className: l.line }),
    e.text && /* @__PURE__ */ o(m, { children: [
      /* @__PURE__ */ n("p", { className: l.text, children: e.text }),
      /* @__PURE__ */ n("div", { className: l.line })
    ] })
  ] });
}
const x = "_hidden_1wrby_1", k = {
  hidden: x
};
function L(e) {
  return /* @__PURE__ */ n("div", { className: k.hidden, children: e.children });
}
export {
  j as Container,
  B as Divider,
  L as Hidden,
  q as Padding,
  $ as Row,
  b as Spacer
};
