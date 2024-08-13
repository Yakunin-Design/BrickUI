import { jsx as t, Fragment as d, jsxs as r } from "react/jsx-runtime";
import { useState as C } from "react";
import './index.css';const y = "_primary_1o70d_1", k = "_secondary_1o70d_20", x = "_outline_1o70d_29", v = "_ghost_1o70d_39", w = "_destructive_1o70d_48", N = "_floating_1o70d_57", j = "_expand_1o70d_74", $ = "_link_1o70d_78", L = "_disabled_1o70d_87", o = {
  primary: y,
  secondary: k,
  outline: x,
  ghost: v,
  destructive: w,
  floating: N,
  expand: j,
  link: $,
  disabled: L
};
function te(e) {
  let n = o.primary;
  return e.secondary && (n += " " + o.secondary), e.link && (n += " " + o.link), e.ghost && (n += " " + o.ghost), e.destructive && (n += " " + o.destructive), e.outline && (n += " " + o.outline), e.expand && (n += " " + o.expand), e.disabled && (n += " " + o.disabled), e.className && (n += " " + e.className), /* @__PURE__ */ t(d, { children: e.href ? /* @__PURE__ */ t("a", { href: e.href, children: /* @__PURE__ */ t(
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
}, I = "_row_19uuv_1", P = "_start_19uuv_7", S = "_end_19uuv_11", m = {
  row: I,
  start: P,
  end: S
};
function Z(e) {
  let n = "";
  e.className && (n += " " + e.className);
  const a = {
    gap: (e.gap || 0) + "rem",
    justifyContent: e.gap ? "flex-start" : "space-between"
  };
  return e.justifyContent && (a.justifyContent = e.justifyContent), e.align === "start" && (n += " " + m.start), e.align === "end" && (n += " " + m.end), n += " " + m.row, /* @__PURE__ */ t(
    "div",
    {
      className: n,
      onClick: e.onClick,
      title: e.title,
      style: a,
      children: e.children
    }
  );
}
function u(e) {
  const { top: n, bottom: a, left: l, children: c } = e, i = {
    marginTop: n ? `${n}rem` : "0rem",
    marginBottom: a ? `${a}rem` : "0rem",
    marginLeft: l ? `${l}rem` : "0rem"
  };
  return n || a ? /* @__PURE__ */ t("div", { style: i, children: c }) : /* @__PURE__ */ t("span", { style: i, children: c });
}
function ne(e) {
  let n = h.input;
  return e.error && (n = n + " " + h.error), e.className && (n = n + " " + e.className), /* @__PURE__ */ r(d, { children: [
    e.label && /* @__PURE__ */ r(d, { children: [
      /* @__PURE__ */ t("label", { className: h.label, htmlFor: e.name, children: e.label }),
      /* @__PURE__ */ t(u, { top: 0.5 })
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
const G = "_label_drjiu_1", R = "_input_drjiu_8", T = "_error_drjiu_22", D = "_error_label_drjiu_26", E = "_icon_wrapper_drjiu_30", X = "_eye_drjiu_34", s = {
  label: G,
  input: R,
  error: T,
  error_label: D,
  icon_wrapper: E,
  eye: X
};
function g(e) {
  const [n, a] = C(e || !1);
  function l(c) {
    a(c || ((i) => !i));
  }
  return [n, l];
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
  const [n, a] = g();
  let l = s.input;
  return e.error && (l = l + " " + s.error), e.className && (l = l + " " + e.className), /* @__PURE__ */ r(d, { children: [
    e.label && /* @__PURE__ */ t("label", { className: s.label, htmlFor: e.name, children: e.label }),
    /* @__PURE__ */ t(u, { top: 1 }),
    /* @__PURE__ */ r("div", { className: s.icon_wrapper, children: [
      /* @__PURE__ */ t(
        "input",
        {
          className: l,
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
          onClick: () => a(),
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
  const [n, a] = g(e.checked || !1);
  let l = _.checkbox;
  e.error && (l = l + " " + _.error);
  function c() {
    a(), e.onChange && e.onChange();
  }
  return /* @__PURE__ */ r("div", { className: _.checkbox_container, children: [
    /* @__PURE__ */ t("label", { children: /* @__PURE__ */ r(Z, { gap: 1, children: [
      /* @__PURE__ */ t(
        "input",
        {
          type: "checkbox",
          name: "checkbox",
          id: "checkbox",
          onChange: c,
          checked: n,
          className: _.input
        }
      ),
      /* @__PURE__ */ t("div", { className: l, children: n && /* @__PURE__ */ t("svg", { width: "100%", height: "100%", viewBox: "0 0 14 14", version: "1.1", children: /* @__PURE__ */ t("g", { transform: "matrix(1.42896,0,0,1.42896,-3.00275,-2.78827)", children: /* @__PURE__ */ t("g", { id: "Symbols", children: /* @__PURE__ */ t("g", { id: "Worker-min-unem", children: /* @__PURE__ */ t("g", { id: "Group-5", children: /* @__PURE__ */ t("g", { id: "_1", children: /* @__PURE__ */ t(
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
const K = "_label_1fd5b_1", Q = "_select_1fd5b_8", U = "_error_1fd5b_24", V = "_error_label_1fd5b_28", b = {
  label: K,
  select: Q,
  error: U,
  error_label: V
};
function re(e) {
  const n = [];
  e.options.forEach((l, c) => {
    let i = l;
    e.values && (i = e.values[c]), n.push(
      /* @__PURE__ */ t("option", { value: i == null ? void 0 : i.toString(), children: l }, n.length)
    );
  });
  let a = b.select;
  return e.error && (a = a + " " + b.error), e.className && (a = a + " " + e.className), /* @__PURE__ */ r(d, { children: [
    e.label && /* @__PURE__ */ r(d, { children: [
      /* @__PURE__ */ t("label", { className: b.label, htmlFor: e.name, children: /* @__PURE__ */ t("h3", { children: e.label }) }),
      /* @__PURE__ */ t(u, { top: 1 })
    ] }),
    /* @__PURE__ */ t(
      "select",
      {
        className: a,
        id: e.name,
        name: e.name,
        onChange: e.onChange,
        value: e.value,
        children: n.map((l) => l)
      }
    )
  ] });
}
const Y = "_textarea_17ec2_1", f = {
  textarea: Y
};
function ie(e) {
  return /* @__PURE__ */ r(d, { children: [
    e.label && /* @__PURE__ */ t("label", { className: f.label, htmlFor: e.name, children: /* @__PURE__ */ t("h3", { children: e.label }) }),
    /* @__PURE__ */ t(u, { top: 1 }),
    /* @__PURE__ */ t(
      "textarea",
      {
        className: e.className ? f.textarea + " " + e.className : f.textarea,
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
