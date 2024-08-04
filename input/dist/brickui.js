import { jsx as n, Fragment as s, jsxs as r } from "react/jsx-runtime";
import { useState as f } from "react";
import './index.css';const C = "_primary_1o70d_1", y = "_secondary_1o70d_20", x = "_outline_1o70d_29", k = "_ghost_1o70d_39", w = "_destructive_1o70d_48", v = "_floating_1o70d_57", N = "_expand_1o70d_74", $ = "_link_1o70d_78", j = "_disabled_1o70d_87", o = {
  primary: C,
  secondary: y,
  outline: x,
  ghost: k,
  destructive: w,
  floating: v,
  expand: N,
  link: $,
  disabled: j
};
function te(e) {
  let t = o.primary;
  return e.secondary && (t += " " + o.secondary), e.link && (t += " " + o.link), e.ghost && (t += " " + o.ghost), e.destructive && (t += " " + o.destructive), e.outline && (t += " " + o.outline), e.expand && (t += " " + o.expand), e.disabled && (t += " " + o.disabled), e.className && (t += " " + e.className), /* @__PURE__ */ n(s, { children: e.href ? /* @__PURE__ */ n("a", { href: e.href, children: /* @__PURE__ */ n(
    "button",
    {
      className: t,
      onClick: e.onClick,
      type: e.submit ? "submit" : "button",
      children: e.children
    }
  ) }) : /* @__PURE__ */ n(
    "button",
    {
      className: t,
      onClick: e.onClick,
      type: e.submit ? "submit" : "button",
      children: e.children
    }
  ) });
}
const L = "_label_61fzc_1", I = "_input_61fzc_8", F = "_error_61fzc_23", M = "_error_label_61fzc_27", h = {
  label: L,
  input: I,
  error: F,
  error_label: M
}, B = "_row_19uuv_1", P = "_start_19uuv_7", S = "_end_19uuv_11", u = {
  row: B,
  start: P,
  end: S
};
function z(e) {
  let t = "";
  e.className && (t += " " + e.className);
  const l = {
    gap: (e.gap || 0) + "rem",
    justifyContent: e.gap ? "flex-start" : "space-between"
  };
  return e.justifyContent && (l.justifyContent = e.justifyContent), e.align === "start" && (t += " " + u.start), e.align === "end" && (t += " " + u.end), t += " " + u.row, /* @__PURE__ */ n(
    "div",
    {
      className: t,
      onClick: e.onClick,
      title: e.title,
      style: l,
      children: e.children
    }
  );
}
function m(e) {
  const { top: t, bottom: l, left: a, children: c } = e, i = {
    marginTop: t ? `${t}rem` : "0rem",
    marginBottom: l ? `${l}rem` : "0rem",
    marginLeft: a ? `${a}rem` : "0rem"
  };
  return t || l ? /* @__PURE__ */ n("div", { style: i, children: c }) : /* @__PURE__ */ n("span", { style: i, children: c });
}
function ne(e) {
  let t = h.input;
  return e.error && (t = t + " " + h.error), e.className && (t = t + " " + e.className), /* @__PURE__ */ r(s, { children: [
    e.label && /* @__PURE__ */ r(s, { children: [
      /* @__PURE__ */ n("label", { className: h.label, htmlFor: e.name, children: e.label }),
      /* @__PURE__ */ n(m, { top: 0.5 })
    ] }),
    /* @__PURE__ */ n(
      "input",
      {
        className: t,
        id: e.name,
        name: e.name,
        type: e.type ? e.type : "text",
        placeholder: e.placeholder,
        onChange: e.onChange,
        value: e.value,
        maxLength: e.maxLength,
        style: e.style ? e.style : {},
        list: e.list,
        disabled: e.disabled
      }
    ),
    e.error && /* @__PURE__ */ n("p", { className: h.error_label, children: e.error })
  ] });
}
const T = "_label_1lrda_1", Z = "_input_1lrda_8", G = "_error_1lrda_19", D = "_error_label_1lrda_23", W = "_icon_wrapper_1lrda_27", X = "_eye_1lrda_31", d = {
  label: T,
  input: Z,
  error: G,
  error_label: D,
  icon_wrapper: W,
  eye: X
}, A = "data:image/svg+xml,%3csvg%20width='22'%20height='16'%20viewBox='0%200%2022%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4_2)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11%201C6.33385%201%202.38308%203.93689%201%208C2.38308%2012.0631%206.33385%2015%2011%2015C15.6662%2015%2019.6169%2012.0631%2021%208C19.6169%203.93689%2015.6662%201%2011%201Z'%20stroke='%23868686'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11%2012C13.2091%2012%2015%2010.2091%2015%208C15%205.79086%2013.2091%204%2011%204C8.79086%204%207%205.79086%207%208C7%2010.2091%208.79086%2012%2011%2012Z'%20stroke='%23868686'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3crect%20x='23.0098'%20y='-0.574295'%20width='1.61828'%20height='34.2114'%20transform='rotate(57.7015%2023.0098%20-0.574295)'%20fill='%23868686'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4_2'%3e%3crect%20width='22'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", E = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='22px'%20height='16px'%20viewBox='0%200%2022%2016'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3e3844476_eye_see_show_view_watch_icon%3c/title%3e%3cg%20id='10-|-Worker-PO'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cg%20id='account-info'%20transform='translate(-1691.000000,%20-486.000000)'%20stroke='%23868686'%20stroke-width='2'%3e%3cg%20id='Group-20'%20transform='translate(1186.000000,%20336.000000)'%3e%3cg%20id='Group-11'%20transform='translate(50.000000,%20113.000000)'%3e%3cg%20id='3844476_eye_see_show_view_watch_icon'%20transform='translate(456.000000,%2038.000000)'%3e%3cpath%20d='M10,0%20C5.33384615,0%201.38307692,2.93688889%200,7%20C1.38307692,11.0631111%205.33384615,14%2010,14%20C14.6661538,14%2018.6169231,11.0631111%2020,7%20C18.6169231,2.93688889%2014.6661538,0%2010,0%20Z'%20id='XMLID_10_'%3e%3c/path%3e%3ccircle%20id='XMLID_12_'%20cx='10'%20cy='7'%20r='4'%3e%3c/circle%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
function le(e) {
  const [t, l] = f(!1), a = () => l(!t);
  let c = d.input;
  return e.error && (c = c + " " + d.error), e.className && (c = c + " " + e.className), /* @__PURE__ */ r(s, { children: [
    e.label && /* @__PURE__ */ n("label", { className: d.label, htmlFor: e.name, children: e.label }),
    /* @__PURE__ */ n(m, { top: 1 }),
    /* @__PURE__ */ r("div", { className: d.icon_wrapper, children: [
      /* @__PURE__ */ n(
        "input",
        {
          className: c,
          id: e.name,
          name: e.name,
          type: t ? "text" : "password",
          placeholder: e.placeholder,
          onChange: e.onChange,
          value: e.value,
          maxLength: e.maxLength,
          style: e.style ? e.style : {}
        }
      ),
      /* @__PURE__ */ n(
        "img",
        {
          src: t ? E : A,
          alt: "eye",
          className: d.eye,
          onClick: a
        }
      )
    ] }),
    e.error && /* @__PURE__ */ n("p", { className: d.error_label, children: e.error })
  ] });
}
const O = "_checkbox_container_1jpt9_1", U = "_checkbox_1jpt9_1", q = "_input_1jpt9_22", H = "_error_1jpt9_26", J = "_error_label_1jpt9_31", _ = {
  checkbox_container: O,
  checkbox: U,
  input: q,
  error: H,
  error_label: J
};
function ae(e) {
  const [t, l] = f(e.checked || !1);
  let a = _.checkbox;
  e.error && (a = a + " " + _.error);
  function c() {
    e.checked || l((i) => !i), e.onChange && e.onChange();
  }
  return /* @__PURE__ */ r("div", { className: _.checkbox_container, children: [
    /* @__PURE__ */ n("label", { children: /* @__PURE__ */ r(z, { gap: 1, children: [
      /* @__PURE__ */ n(
        "input",
        {
          type: "checkbox",
          name: "checkbox",
          id: "checkbox",
          onChange: c,
          checked: t,
          className: _.input
        }
      ),
      /* @__PURE__ */ n("div", { className: a, children: t && /* @__PURE__ */ n("svg", { width: "100%", height: "100%", viewBox: "0 0 14 14", version: "1.1", children: /* @__PURE__ */ n("g", { transform: "matrix(1.42896,0,0,1.42896,-3.00275,-2.78827)", children: /* @__PURE__ */ n("g", { id: "Symbols", children: /* @__PURE__ */ n("g", { id: "Worker-min-unem", children: /* @__PURE__ */ n("g", { id: "Group-5", children: /* @__PURE__ */ n("g", { id: "_1", children: /* @__PURE__ */ n(
        "path",
        {
          id: "Path",
          d: "M8.483,4.302L6.284,6.866L5.514,5.968C5.442,5.884 5.354,5.815 5.254,5.764C5.155,5.713 5.046,5.682 4.934,5.672C4.822,5.662 4.709,5.674 4.602,5.707C4.494,5.739 4.394,5.792 4.308,5.862C4.222,5.932 4.15,6.018 4.098,6.114C4.046,6.211 4.014,6.317 4.004,6.426C3.993,6.535 4.005,6.644 4.039,6.749C4.072,6.853 4.126,6.95 4.198,7.034L5.626,8.7C5.706,8.794 5.807,8.869 5.921,8.921C6.034,8.973 6.158,9 6.284,9C6.409,9 6.533,8.973 6.647,8.922C6.761,8.87 6.861,8.794 6.942,8.701L9.799,5.369C9.871,5.285 9.926,5.188 9.96,5.083C9.994,4.979 10.007,4.869 9.997,4.76C9.987,4.65 9.955,4.544 9.903,4.447C9.85,4.35 9.779,4.264 9.692,4.193C9.606,4.123 9.506,4.07 9.398,4.038C9.29,4.005 9.177,3.993 9.065,4.004C8.952,4.014 8.843,4.045 8.743,4.096C8.644,4.147 8.555,4.217 8.483,4.302Z"
        }
      ) }) }) }) }) }) }) }),
      e.children && /* @__PURE__ */ n("span", { className: _.labelText, children: e.children })
    ] }) }),
    e.error && /* @__PURE__ */ n("p", { className: _.error_label, children: e.error })
  ] });
}
const K = "_label_tx4iy_1", Q = "_input_tx4iy_8", R = "_error_tx4iy_23", V = "_error_label_tx4iy_27", g = {
  label: K,
  input: Q,
  error: R,
  error_label: V
};
function ce(e) {
  const t = [];
  e.options.forEach((a, c) => {
    let i = a;
    e.values && (i = e.values[c]), t.push(
      /* @__PURE__ */ n("option", { value: i == null ? void 0 : i.toString(), children: a }, t.length)
    );
  });
  let l = g.input;
  return e.error && (l = l + " " + g.error), e.className && (l = l + " " + e.className), /* @__PURE__ */ r(s, { children: [
    e.label && /* @__PURE__ */ r(s, { children: [
      /* @__PURE__ */ n("label", { className: g.label, htmlFor: e.name, children: /* @__PURE__ */ n("h3", { children: e.label }) }),
      /* @__PURE__ */ n(m, { top: 1 })
    ] }),
    /* @__PURE__ */ n(
      "select",
      {
        className: l,
        id: e.name,
        name: e.name,
        onChange: e.onChange,
        value: e.value,
        children: t.map((a) => a)
      }
    )
  ] });
}
const Y = "_textarea_15jko_1", b = {
  textarea: Y
};
function ie(e) {
  return /* @__PURE__ */ r(s, { children: [
    e.label && /* @__PURE__ */ n("label", { className: b.label, htmlFor: e.name, children: /* @__PURE__ */ n("h3", { children: e.label }) }),
    /* @__PURE__ */ n(m, { top: 1 }),
    /* @__PURE__ */ n(
      "textarea",
      {
        className: e.className ? b.textarea + " " + e.className : b.textarea,
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
  ce as Select,
  ie as TextArea
};
