import { jsx as t, Fragment as d, jsxs as r } from "react/jsx-runtime";
import { useState as C } from "react";
import './index.css';const y = "_primary_1o70d_1", k = "_secondary_1o70d_20", x = "_outline_1o70d_29", v = "_ghost_1o70d_39", w = "_destructive_1o70d_48", N = "_floating_1o70d_57", $ = "_expand_1o70d_74", L = "_link_1o70d_78", j = "_disabled_1o70d_87", c = {
  primary: y,
  secondary: k,
  outline: x,
  ghost: v,
  destructive: w,
  floating: N,
  expand: $,
  link: L,
  disabled: j
};
function te(e) {
  let n = c.primary;
  return e.secondary && (n += " " + c.secondary), e.link && (n += " " + c.link), e.ghost && (n += " " + c.ghost), e.destructive && (n += " " + c.destructive), e.outline && (n += " " + c.outline), e.expand && (n += " " + c.expand), e.disabled && (n += " " + c.disabled), e.className && (n += " " + e.className), /* @__PURE__ */ t(d, { children: e.href ? /* @__PURE__ */ t("a", { href: e.href, children: /* @__PURE__ */ t(
    "button",
    {
      className: n,
      onClick: e.onClick,
      style: e.style,
      type: e.submit ? "submit" : "button",
      children: e.children
    }
  ) }) : /* @__PURE__ */ t(
    "button",
    {
      className: n,
      onClick: e.onClick,
      type: e.submit ? "submit" : "button",
      style: e.style,
      children: e.children
    }
  ) });
}
const M = "_label_wo8kf_1", W = "_input_wo8kf_8", B = "_error_wo8kf_24", F = "_error_label_wo8kf_28", h = {
  label: M,
  input: W,
  error: B,
  error_label: F
}, I = "_row_19uuv_1", P = "_start_19uuv_7", Z = "_end_19uuv_11", b = {
  row: I,
  start: P,
  end: Z
};
function G(e) {
  let n = "";
  e.className && (n += " " + e.className);
  const l = {
    gap: (e.gap || 0) + "rem",
    justifyContent: e.gap ? "flex-start" : "space-between"
  };
  return e.justifyContent && (l.justifyContent = e.justifyContent), e.align === "start" && (n += " " + b.start), e.align === "end" && (n += " " + b.end), n += " " + b.row, /* @__PURE__ */ t(
    "div",
    {
      className: n,
      onClick: e.onClick,
      title: e.title,
      style: l,
      children: e.children
    }
  );
}
function m(e) {
  const { top: n, bottom: l, left: a, children: i } = e, o = {
    marginTop: n ? `${n}rem` : "0rem",
    marginBottom: l ? `${l}rem` : "0rem",
    marginLeft: a ? `${a}rem` : "0rem"
  };
  return n || l ? /* @__PURE__ */ t("div", { style: o, children: i }) : /* @__PURE__ */ t("span", { style: o, children: i });
}
function ne(e) {
  let n = h.input;
  return e.error && (n = n + " " + h.error), e.className && (n = n + " " + e.className), /* @__PURE__ */ r(d, { children: [
    e.label && /* @__PURE__ */ r(d, { children: [
      /* @__PURE__ */ t("label", { className: h.label, htmlFor: e.name, children: e.label }),
      /* @__PURE__ */ t(m, { top: 0.5 })
    ] }),
    /* @__PURE__ */ t(
      "input",
      {
        className: n,
        id: e.name,
        name: e.name,
        type: e.type ? e.type : "text",
        placeholder: e.placeholder,
        onChange: e.onChange,
        value: e.value,
        maxLength: e.maxLength,
        style: e.style ? e.style : {},
        list: e.list,
        disabled: e.disabled,
        min: e.min,
        max: e.max,
        pattern: e.pattern
      }
    ),
    e.error && /* @__PURE__ */ t("p", { className: h.error_label, children: e.error })
  ] });
}
const R = "_label_1e11g_1", S = "_input_1e11g_7", T = "_error_1e11g_21", D = "_error_label_1e11g_25", E = "_icon_wrapper_1e11g_29", X = "_eye_1e11g_33", s = {
  label: R,
  input: S,
  error: T,
  error_label: D,
  icon_wrapper: E,
  eye: X
};
function f(e) {
  const [n, l] = C(e || !1);
  function a(i) {
    l(i || ((o) => !o));
  }
  return [n, a];
}
function A(e) {
  return e.is_closed ? /* @__PURE__ */ r("svg", { width: "22px", height: "16px", viewBox: "0 0 22 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ t("title", { children: "eye icon" }),
    /* @__PURE__ */ t("g", { id: "10-|-Worker-PO", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ t("g", { id: "account-info", transform: "translate(-1691.000000, -486.000000)", stroke: "#868686", strokeWidth: "2", children: /* @__PURE__ */ t("g", { id: "Group-20", transform: "translate(1186.000000, 336.000000)", children: /* @__PURE__ */ t("g", { id: "Group-11", transform: "translate(50.000000, 113.000000)", children: /* @__PURE__ */ r("g", { id: "3844476_eye_see_show_view_watch_icon", transform: "translate(456.000000, 38.000000)", children: [
      /* @__PURE__ */ t("path", { d: "M10,0 C5.33384615,0 1.38307692,2.93688889 0,7 C1.38307692,11.0631111 5.33384615,14 10,14 C14.6661538,14 18.6169231,11.0631111 20,7 C18.6169231,2.93688889 14.6661538,0 10,0 Z", id: "XMLID_10_" }),
      /* @__PURE__ */ t("circle", { id: "XMLID_12_", cx: "10", cy: "7", r: "4" })
    ] }) }) }) }) })
  ] }) : /* @__PURE__ */ r("svg", { width: "22", height: "16", viewBox: "0 0 22 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ r("g", { clipPath: "url(#clip0_4_2)", children: [
      /* @__PURE__ */ t("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 1C6.33385 1 2.38308 3.93689 1 8C2.38308 12.0631 6.33385 15 11 15C15.6662 15 19.6169 12.0631 21 8C19.6169 3.93689 15.6662 1 11 1Z", stroke: "#868686", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ t("path", { d: "M11 12C13.2091 12 15 10.2091 15 8C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8C7 10.2091 8.79086 12 11 12Z", stroke: "#868686", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ t("rect", { x: "23.0098", y: "-0.574295", width: "1.61828", height: "34.2114", transform: "rotate(57.7015 23.0098 -0.574295)", fill: "#868686" })
    ] }),
    /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ t("clipPath", { id: "clip0_4_2", children: /* @__PURE__ */ t("rect", { width: "22", height: "16", fill: "white" }) }) })
  ] });
}
function le(e) {
  const [n, l] = f();
  let a = s.input;
  return e.error && (a = a + " " + s.error), e.className && (a = a + " " + e.className), /* @__PURE__ */ r(d, { children: [
    e.label && /* @__PURE__ */ t("label", { className: s.label, htmlFor: e.name, children: e.label }),
    /* @__PURE__ */ t(m, { top: 0.5 }),
    /* @__PURE__ */ r("div", { className: s.icon_wrapper, children: [
      /* @__PURE__ */ t(
        "input",
        {
          className: a,
          id: e.name,
          name: e.name,
          type: n ? "text" : "password",
          placeholder: e.placeholder,
          onChange: e.onChange,
          value: e.value,
          maxLength: e.maxLength,
          style: e.style ? e.style : {}
        }
      ),
      /* @__PURE__ */ t(
        "div",
        {
          className: s.eye,
          onClick: () => l(),
          children: /* @__PURE__ */ t(A, { is_closed: n })
        }
      )
    ] }),
    e.error && /* @__PURE__ */ t("p", { className: s.error_label, children: e.error })
  ] });
}
const O = "_checkbox_container_1jpt9_1", q = "_checkbox_1jpt9_1", z = "_input_1jpt9_22", H = "_error_1jpt9_26", J = "_error_label_1jpt9_31", _ = {
  checkbox_container: O,
  checkbox: q,
  input: z,
  error: H,
  error_label: J
};
function ae(e) {
  const [n, l] = f(e.checked || !1);
  let a = _.checkbox;
  e.error && (a = a + " " + _.error);
  function i() {
    l(), e.onChange && e.onChange();
  }
  return /* @__PURE__ */ r("div", { className: _.checkbox_container, children: [
    /* @__PURE__ */ t("label", { children: /* @__PURE__ */ r(G, { gap: 1, children: [
      /* @__PURE__ */ t(
        "input",
        {
          type: "checkbox",
          name: "checkbox",
          id: "checkbox",
          onChange: i,
          checked: n,
          className: _.input
        }
      ),
      /* @__PURE__ */ t("div", { className: a, children: n && /* @__PURE__ */ t("svg", { width: "100%", height: "100%", viewBox: "0 0 14 14", version: "1.1", children: /* @__PURE__ */ t("g", { transform: "matrix(1.42896,0,0,1.42896,-3.00275,-2.78827)", children: /* @__PURE__ */ t("g", { id: "Symbols", children: /* @__PURE__ */ t("g", { id: "Worker-min-unem", children: /* @__PURE__ */ t("g", { id: "Group-5", children: /* @__PURE__ */ t("g", { id: "_1", children: /* @__PURE__ */ t(
        "path",
        {
          id: "Path",
          d: "M8.483,4.302L6.284,6.866L5.514,5.968C5.442,5.884 5.354,5.815 5.254,5.764C5.155,5.713 5.046,5.682 4.934,5.672C4.822,5.662 4.709,5.674 4.602,5.707C4.494,5.739 4.394,5.792 4.308,5.862C4.222,5.932 4.15,6.018 4.098,6.114C4.046,6.211 4.014,6.317 4.004,6.426C3.993,6.535 4.005,6.644 4.039,6.749C4.072,6.853 4.126,6.95 4.198,7.034L5.626,8.7C5.706,8.794 5.807,8.869 5.921,8.921C6.034,8.973 6.158,9 6.284,9C6.409,9 6.533,8.973 6.647,8.922C6.761,8.87 6.861,8.794 6.942,8.701L9.799,5.369C9.871,5.285 9.926,5.188 9.96,5.083C9.994,4.979 10.007,4.869 9.997,4.76C9.987,4.65 9.955,4.544 9.903,4.447C9.85,4.35 9.779,4.264 9.692,4.193C9.606,4.123 9.506,4.07 9.398,4.038C9.29,4.005 9.177,3.993 9.065,4.004C8.952,4.014 8.843,4.045 8.743,4.096C8.644,4.147 8.555,4.217 8.483,4.302Z"
        }
      ) }) }) }) }) }) }) }),
      e.children && /* @__PURE__ */ t("span", { className: _.labelText, children: e.children })
    ] }) }),
    e.error && /* @__PURE__ */ t("p", { className: _.error_label, children: e.error })
  ] });
}
const K = "_label_14ovd_1", Q = "_select_14ovd_6", U = "_error_14ovd_23", V = "_error_label_14ovd_27", u = {
  label: K,
  select: Q,
  error: U,
  error_label: V
};
function re(e) {
  const n = [];
  e.options.forEach((a, i) => {
    let o = a;
    e.values && (o = e.values[i]), n.push(
      /* @__PURE__ */ t("option", { value: o, children: a }, n.length)
    );
  });
  let l = u.select;
  return e.error && (l = l + " " + u.error), e.className && (l = l + " " + e.className), /* @__PURE__ */ r(d, { children: [
    e.label && /* @__PURE__ */ r(d, { children: [
      /* @__PURE__ */ t("label", { className: u.label, htmlFor: e.name, children: /* @__PURE__ */ t("h3", { children: e.label }) }),
      /* @__PURE__ */ t(m, { top: 0.5 })
    ] }),
    /* @__PURE__ */ t(
      "select",
      {
        className: l,
        id: e.name,
        name: e.name,
        onChange: e.onChange,
        value: e.value,
        children: n
      }
    ),
    e.error && /* @__PURE__ */ t("p", { className: u.error_label, children: e.error })
  ] });
}
const Y = "_textarea_17ec2_1", g = {
  textarea: Y
};
function ie(e) {
  return /* @__PURE__ */ r(d, { children: [
    e.label && /* @__PURE__ */ t("label", { className: g.label, htmlFor: e.name, children: /* @__PURE__ */ t("h3", { children: e.label }) }),
    /* @__PURE__ */ t(m, { top: 1 }),
    /* @__PURE__ */ t(
      "textarea",
      {
        className: e.className ? g.textarea + " " + e.className : g.textarea,
        id: e.name,
        name: e.name,
        placeholder: e.placeholder,
        onChange: e.onChange,
        value: e.value,
        style: e.style
      }
    )
  ] });
}
export {
  te as Button,
  ae as Checkbox,
  ne as Input,
  le as PasswordInput,
  re as Select,
  ie as TextArea
};
