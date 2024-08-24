import { jsx as t, Fragment as d, jsxs as i } from "react/jsx-runtime";
import { useState as $, useEffect as D } from "react";
import './index.css';const I = "_primary_1o70d_1", M = "_secondary_1o70d_20", W = "_outline_1o70d_29", B = "_ghost_1o70d_39", P = "_destructive_1o70d_48", T = "_floating_1o70d_57", Z = "_expand_1o70d_74", E = "_link_1o70d_78", G = "_disabled_1o70d_87", s = {
  primary: I,
  secondary: M,
  outline: W,
  ghost: B,
  destructive: P,
  floating: T,
  expand: Z,
  link: E,
  disabled: G
};
function xe(e) {
  let n = s.primary;
  return e.secondary && (n += " " + s.secondary), e.link && (n += " " + s.link), e.ghost && (n += " " + s.ghost), e.destructive && (n += " " + s.destructive), e.outline && (n += " " + s.outline), e.expand && (n += " " + s.expand), e.disabled && (n += " " + s.disabled), e.className && (n += " " + e.className), /* @__PURE__ */ t(d, { children: e.href ? /* @__PURE__ */ t("a", { href: e.href, children: /* @__PURE__ */ t(
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
const R = "_label_wo8kf_1", X = "_input_wo8kf_8", A = "_error_wo8kf_24", O = "_error_label_wo8kf_28", f = {
  label: R,
  input: X,
  error: A,
  error_label: O
}, Y = "_row_19uuv_1", q = "_start_19uuv_7", z = "_end_19uuv_11", N = {
  row: Y,
  start: q,
  end: z
};
function S(e) {
  let n = "";
  e.className && (n += " " + e.className);
  const l = {
    gap: (e.gap || 0) + "rem",
    justifyContent: e.gap ? "flex-start" : "space-between"
  };
  return e.justifyContent && (l.justifyContent = e.justifyContent), e.align === "start" && (n += " " + N.start), e.align === "end" && (n += " " + N.end), n += " " + N.row, /* @__PURE__ */ t(
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
function _(e) {
  const { top: n, bottom: l, left: a, children: o } = e, r = {
    marginTop: n ? `${n}rem` : "0rem",
    marginBottom: l ? `${l}rem` : "0rem",
    marginLeft: a ? `${a}rem` : "0rem"
  };
  return n || l ? /* @__PURE__ */ t("div", { style: r, children: o }) : /* @__PURE__ */ t("span", { style: r, children: o });
}
function j(e) {
  let n = f.input;
  return e.error && (n = n + " " + f.error), e.className && (n = n + " " + e.className), /* @__PURE__ */ i(d, { children: [
    e.label && /* @__PURE__ */ i(d, { children: [
      /* @__PURE__ */ t("label", { className: f.label, htmlFor: e.name, children: e.label }),
      /* @__PURE__ */ t(_, { top: 0.5 })
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
    e.error && /* @__PURE__ */ t("p", { className: f.error_label, children: e.error })
  ] });
}
const H = "_label_1e11g_1", J = "_input_1e11g_7", K = "_error_1e11g_21", Q = "_error_label_1e11g_25", U = "_icon_wrapper_1e11g_29", V = "_eye_1e11g_33", m = {
  label: H,
  input: J,
  error: K,
  error_label: Q,
  icon_wrapper: U,
  eye: V
};
function F(e) {
  const [n, l] = $(e || !1);
  function a(o) {
    l(o || ((r) => !r));
  }
  return [n, a];
}
function p(e) {
  return e.is_closed ? /* @__PURE__ */ i("svg", { width: "22px", height: "16px", viewBox: "0 0 22 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ t("title", { children: "eye icon" }),
    /* @__PURE__ */ t("g", { id: "10-|-Worker-PO", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ t("g", { id: "account-info", transform: "translate(-1691.000000, -486.000000)", stroke: "#868686", strokeWidth: "2", children: /* @__PURE__ */ t("g", { id: "Group-20", transform: "translate(1186.000000, 336.000000)", children: /* @__PURE__ */ t("g", { id: "Group-11", transform: "translate(50.000000, 113.000000)", children: /* @__PURE__ */ i("g", { id: "3844476_eye_see_show_view_watch_icon", transform: "translate(456.000000, 38.000000)", children: [
      /* @__PURE__ */ t("path", { d: "M10,0 C5.33384615,0 1.38307692,2.93688889 0,7 C1.38307692,11.0631111 5.33384615,14 10,14 C14.6661538,14 18.6169231,11.0631111 20,7 C18.6169231,2.93688889 14.6661538,0 10,0 Z", id: "XMLID_10_" }),
      /* @__PURE__ */ t("circle", { id: "XMLID_12_", cx: "10", cy: "7", r: "4" })
    ] }) }) }) }) })
  ] }) : /* @__PURE__ */ i("svg", { width: "22", height: "16", viewBox: "0 0 22 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ i("g", { clipPath: "url(#clip0_4_2)", children: [
      /* @__PURE__ */ t("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 1C6.33385 1 2.38308 3.93689 1 8C2.38308 12.0631 6.33385 15 11 15C15.6662 15 19.6169 12.0631 21 8C19.6169 3.93689 15.6662 1 11 1Z", stroke: "#868686", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ t("path", { d: "M11 12C13.2091 12 15 10.2091 15 8C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8C7 10.2091 8.79086 12 11 12Z", stroke: "#868686", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ t("rect", { x: "23.0098", y: "-0.574295", width: "1.61828", height: "34.2114", transform: "rotate(57.7015 23.0098 -0.574295)", fill: "#868686" })
    ] }),
    /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ t("clipPath", { id: "clip0_4_2", children: /* @__PURE__ */ t("rect", { width: "22", height: "16", fill: "white" }) }) })
  ] });
}
function Ne(e) {
  const [n, l] = F();
  let a = m.input;
  return e.error && (a = a + " " + m.error), e.className && (a = a + " " + e.className), /* @__PURE__ */ i(d, { children: [
    e.label && /* @__PURE__ */ t("label", { className: m.label, htmlFor: e.name, children: e.label }),
    /* @__PURE__ */ t(_, { top: 0.5 }),
    /* @__PURE__ */ i("div", { className: m.icon_wrapper, children: [
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
          className: m.eye,
          onClick: () => l(),
          children: /* @__PURE__ */ t(p, { is_closed: n })
        }
      )
    ] }),
    e.error && /* @__PURE__ */ t("p", { className: m.error_label, children: e.error })
  ] });
}
const ee = "_checkbox_container_1jpt9_1", te = "_checkbox_1jpt9_1", ne = "_input_1jpt9_22", le = "_error_1jpt9_26", ae = "_error_label_1jpt9_31", b = {
  checkbox_container: ee,
  checkbox: te,
  input: ne,
  error: le,
  error_label: ae
};
function we(e) {
  const [n, l] = F(e.checked || !1);
  let a = b.checkbox;
  e.error && (a = a + " " + b.error);
  function o() {
    l(), e.onChange && e.onChange();
  }
  return /* @__PURE__ */ i("div", { className: b.checkbox_container, children: [
    /* @__PURE__ */ t("label", { children: /* @__PURE__ */ i(S, { gap: 1, children: [
      /* @__PURE__ */ t(
        "input",
        {
          type: "checkbox",
          name: "checkbox",
          id: "checkbox",
          onChange: o,
          checked: n,
          className: b.input
        }
      ),
      /* @__PURE__ */ t("div", { className: a, children: n && /* @__PURE__ */ t("svg", { width: "100%", height: "100%", viewBox: "0 0 14 14", version: "1.1", children: /* @__PURE__ */ t("g", { transform: "matrix(1.42896,0,0,1.42896,-3.00275,-2.78827)", children: /* @__PURE__ */ t("g", { id: "Symbols", children: /* @__PURE__ */ t("g", { id: "Worker-min-unem", children: /* @__PURE__ */ t("g", { id: "Group-5", children: /* @__PURE__ */ t("g", { id: "_1", children: /* @__PURE__ */ t(
        "path",
        {
          id: "Path",
          d: "M8.483,4.302L6.284,6.866L5.514,5.968C5.442,5.884 5.354,5.815 5.254,5.764C5.155,5.713 5.046,5.682 4.934,5.672C4.822,5.662 4.709,5.674 4.602,5.707C4.494,5.739 4.394,5.792 4.308,5.862C4.222,5.932 4.15,6.018 4.098,6.114C4.046,6.211 4.014,6.317 4.004,6.426C3.993,6.535 4.005,6.644 4.039,6.749C4.072,6.853 4.126,6.95 4.198,7.034L5.626,8.7C5.706,8.794 5.807,8.869 5.921,8.921C6.034,8.973 6.158,9 6.284,9C6.409,9 6.533,8.973 6.647,8.922C6.761,8.87 6.861,8.794 6.942,8.701L9.799,5.369C9.871,5.285 9.926,5.188 9.96,5.083C9.994,4.979 10.007,4.869 9.997,4.76C9.987,4.65 9.955,4.544 9.903,4.447C9.85,4.35 9.779,4.264 9.692,4.193C9.606,4.123 9.506,4.07 9.398,4.038C9.29,4.005 9.177,3.993 9.065,4.004C8.952,4.014 8.843,4.045 8.743,4.096C8.644,4.147 8.555,4.217 8.483,4.302Z"
        }
      ) }) }) }) }) }) }) }),
      e.children && /* @__PURE__ */ t("span", { className: b.labelText, children: e.children })
    ] }) }),
    e.error && /* @__PURE__ */ t("p", { className: b.error_label, children: e.error })
  ] });
}
const re = "_label_14ovd_1", ie = "_select_14ovd_6", ce = "_error_14ovd_23", oe = "_error_label_14ovd_27", v = {
  label: re,
  select: ie,
  error: ce,
  error_label: oe
};
function de(e) {
  const n = [];
  e.options.forEach((a, o) => {
    let r = a;
    e.values && (r = e.values[o]), n.push(
      /* @__PURE__ */ t("option", { value: r, children: a }, n.length)
    );
  });
  let l = v.select;
  return e.error && (l = l + " " + v.error), e.className && (l = l + " " + e.className), /* @__PURE__ */ i(d, { children: [
    e.label && /* @__PURE__ */ i(d, { children: [
      /* @__PURE__ */ t("label", { className: v.label, htmlFor: e.name, children: /* @__PURE__ */ t("h3", { children: e.label }) }),
      /* @__PURE__ */ t(_, { top: 0.5 })
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
    e.error && /* @__PURE__ */ t("p", { className: v.error_label, children: e.error })
  ] });
}
const se = "_textarea_17ec2_1", w = {
  textarea: se
};
function $e(e) {
  return /* @__PURE__ */ i(d, { children: [
    e.label && /* @__PURE__ */ i(d, { children: [
      /* @__PURE__ */ t("label", { className: w.label, htmlFor: e.name, children: /* @__PURE__ */ t("h3", { children: e.label }) }),
      /* @__PURE__ */ t(_, { top: 0.5 })
    ] }),
    /* @__PURE__ */ t(
      "textarea",
      {
        className: e.className ? w.textarea + " " + e.className : w.textarea,
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
const _e = "_label_yijvs_1", he = "_input_yijvs_8", ue = "_error_yijvs_24", me = "_error_label_yijvs_28", C = {
  label: _e,
  input: he,
  error: ue,
  error_label: me
};
function Le(e) {
  let n = C.input;
  e.error && (n = n + " " + C.error), e.className && (n = n + " " + e.className);
  const [l, a] = $("");
  function o(r) {
    let c = r.target.value;
    c = c.replace(/\D/g, ""), c.length > 4 && (c = c.slice(0, 4));
    const h = Number(c[0]);
    h > 2 && h < 10 && (c = "0" + c[0]);
    const x = Number(c[1]);
    h === 2 && x > 3 || Number(c[2]) > 5 || (c.length > 2 && (c = `${c.slice(0, 2)}:${c.slice(2, 4)}`), a(c));
  }
  return D(() => {
    const r = {
      target: {
        name: e.name,
        value: l
      }
    };
    e.onChange(r);
  }, [l]), /* @__PURE__ */ i(d, { children: [
    e.label && /* @__PURE__ */ i(d, { children: [
      /* @__PURE__ */ t("label", { className: C.label, htmlFor: e.name, children: e.label }),
      /* @__PURE__ */ t(_, { top: 0.5 })
    ] }),
    /* @__PURE__ */ t(
      "input",
      {
        className: n,
        id: e.name,
        name: e.name,
        value: e.value,
        placeholder: e.placeholder,
        onChange: o,
        type: "tel",
        style: e.style ? e.style : {},
        disabled: e.disabled,
        pattern: e.pattern
      }
    ),
    e.error && /* @__PURE__ */ t("p", { className: C.error_label, children: e.error })
  ] });
}
const be = "_day_uyvr3_1", ge = "_year_uyvr3_5", ye = "_error_uyvr3_9", fe = "_error_label_uyvr3_13", k = {
  day: be,
  year: ge,
  error: ye,
  error_label: fe
};
function ve() {
  const e = [];
  for (let n = 0; n < 12; n++) {
    const l = new Date(2024, n).toLocaleString("default", { month: "long" });
    e.push(l);
  }
  return e;
}
function je(e) {
  const n = new Date(e.value), l = n.toLocaleDateString("default", { month: "long" }), a = ve(), o = {
    day: n.getDate().toString(),
    month: l,
    year: n.getFullYear().toString()
  }, [r, c] = $(o);
  function h(g) {
    const { name: u, value: L } = g.target;
    if (u === "day") {
      const y = L.toString();
      if (Number(y[0]) > 3 || Number(y) > 31) return;
    }
    c((y) => ({
      ...y,
      [u]: L
    }));
  }
  D(() => {
    const g = /* @__PURE__ */ new Date(`${r.year}-${r.month}-${r.day}`), u = {
      target: {
        name: e.name,
        value: g
      }
    };
    e.onChange(u);
  }, [r]);
  function x(g) {
    c((u) => ({ ...u, day: "" }));
  }
  return /* @__PURE__ */ i(d, { children: [
    e.label && /* @__PURE__ */ i(d, { children: [
      /* @__PURE__ */ t("b", { className: k.label, children: e.label }),
      /* @__PURE__ */ t(_, { top: 0.5 })
    ] }),
    /* @__PURE__ */ i(S, { children: [
      /* @__PURE__ */ t("div", { onClick: x, children: /* @__PURE__ */ t(
        j,
        {
          name: "day",
          value: r.day,
          type: "tel",
          maxLength: 2,
          onChange: h,
          className: k.day,
          error: e.error && " "
        }
      ) }),
      /* @__PURE__ */ t(_, { left: 1 }),
      /* @__PURE__ */ t(
        de,
        {
          name: "month",
          onChange: h,
          value: r.month,
          options: a,
          error: e.error && " "
        }
      ),
      /* @__PURE__ */ t(_, { left: 1 }),
      /* @__PURE__ */ t(
        j,
        {
          name: "year",
          type: "tel",
          maxLength: 4,
          value: r.year,
          onChange: h,
          className: k.year,
          error: e.error && " "
        }
      )
    ] }),
    e.error && /* @__PURE__ */ t("p", { className: k.error_label, children: e.error })
  ] });
}
export {
  xe as Button,
  we as Checkbox,
  je as DateInput,
  j as Input,
  Ne as PasswordInput,
  de as Select,
  $e as TextArea,
  Le as TimeInput
};
