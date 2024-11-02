import { jsx as t, Fragment as s, jsxs as i } from "react/jsx-runtime";
import { useState as f, useEffect as P } from "react";
import './index.css';const R = "_primary_1o70d_1", T = "_secondary_1o70d_20", Z = "_outline_1o70d_29", E = "_ghost_1o70d_39", G = "_destructive_1o70d_48", O = "_floating_1o70d_57", U = "_expand_1o70d_74", X = "_link_1o70d_78", A = "_disabled_1o70d_87", h = {
  primary: R,
  secondary: T,
  outline: Z,
  ghost: E,
  destructive: G,
  floating: O,
  expand: U,
  link: X,
  disabled: A
};
function je(e) {
  let n = h.primary;
  return e.secondary && (n += " " + h.secondary), e.link && (n += " " + h.link), e.ghost && (n += " " + h.ghost), e.destructive && (n += " " + h.destructive), e.outline && (n += " " + h.outline), e.expand && (n += " " + h.expand), e.disabled && (n += " " + h.disabled), e.className && (n += " " + e.className), /* @__PURE__ */ t(s, { children: e.href ? /* @__PURE__ */ t("a", { href: e.href, children: /* @__PURE__ */ t(
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
const Y = "_label_wo8kf_1", q = "_input_wo8kf_8", z = "_error_wo8kf_24", H = "_error_label_wo8kf_28", v = {
  label: Y,
  input: q,
  error: z,
  error_label: H
}, J = "_row_19uuv_1", K = "_start_19uuv_7", Q = "_end_19uuv_11", j = {
  row: J,
  start: K,
  end: Q
};
function I(e) {
  let n = "";
  e.className && (n += " " + e.className);
  const a = {
    gap: (e.gap || 0) + "rem",
    justifyContent: e.gap ? "flex-start" : "space-between"
  };
  return e.justifyContent && (a.justifyContent = e.justifyContent), e.align === "start" && (n += " " + j.start), e.align === "end" && (n += " " + j.end), n += " " + j.row, /* @__PURE__ */ t(
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
  const { top: n, bottom: a, left: r, children: l } = e, o = {
    marginTop: n ? `${n}rem` : "0rem",
    marginBottom: a ? `${a}rem` : "0rem",
    marginLeft: r ? `${r}rem` : "0rem"
  };
  return n || a ? /* @__PURE__ */ t("div", { style: o, children: l }) : /* @__PURE__ */ t("span", { style: o, children: l });
}
function F(e) {
  let n = v.input;
  return e.error && (n = n + " " + v.error), e.className && (n = n + " " + e.className), /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ i(s, { children: [
      /* @__PURE__ */ t("label", { className: v.label, htmlFor: e.name, children: e.label }),
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
    e.error && /* @__PURE__ */ t("p", { className: v.error_label, children: e.error })
  ] });
}
const V = "_label_1e11g_1", p = "_input_1e11g_7", ee = "_error_1e11g_21", te = "_error_label_1e11g_25", ne = "_icon_wrapper_1e11g_29", le = "_eye_1e11g_33", g = {
  label: V,
  input: p,
  error: ee,
  error_label: te,
  icon_wrapper: ne,
  eye: le
};
function M(e) {
  const [n, a] = f(e || !1);
  function r(l) {
    a(l === !0 ? !0 : l === !1 ? !1 : (o) => !o);
  }
  return [n, r];
}
function ae(e) {
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
function Se(e) {
  const [n, a] = M();
  let r = g.input;
  return e.error && (r = r + " " + g.error), e.className && (r = r + " " + e.className), /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ t("label", { className: g.label, htmlFor: e.name, children: e.label }),
    /* @__PURE__ */ t(u, { top: 0.5 }),
    /* @__PURE__ */ i("div", { className: g.icon_wrapper, children: [
      /* @__PURE__ */ t(
        "input",
        {
          className: r,
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
          className: g.eye,
          onClick: () => a(),
          children: /* @__PURE__ */ t(ae, { is_closed: n })
        }
      )
    ] }),
    e.error && /* @__PURE__ */ t("p", { className: g.error_label, children: e.error })
  ] });
}
const re = "_checkbox_container_1jpt9_1", ie = "_checkbox_1jpt9_1", ce = "_input_1jpt9_22", oe = "_error_1jpt9_26", se = "_error_label_1jpt9_31", b = {
  checkbox_container: re,
  checkbox: ie,
  input: ce,
  error: oe,
  error_label: se
};
function De(e) {
  const [n, a] = M(e.checked || !1);
  let r = b.checkbox;
  e.error && (r = r + " " + b.error);
  function l() {
    a(), e.onChange && e.onChange();
  }
  return /* @__PURE__ */ i("div", { className: b.checkbox_container, children: [
    /* @__PURE__ */ t("label", { children: /* @__PURE__ */ i(I, { gap: 1, children: [
      /* @__PURE__ */ t(
        "input",
        {
          type: "checkbox",
          name: "checkbox",
          id: "checkbox",
          onChange: l,
          checked: n,
          className: b.input
        }
      ),
      /* @__PURE__ */ t("div", { className: r, children: n && /* @__PURE__ */ t("svg", { width: "100%", height: "100%", viewBox: "0 0 14 14", version: "1.1", children: /* @__PURE__ */ t("g", { transform: "matrix(1.42896,0,0,1.42896,-3.00275,-2.78827)", children: /* @__PURE__ */ t("g", { id: "Symbols", children: /* @__PURE__ */ t("g", { id: "Worker-min-unem", children: /* @__PURE__ */ t("g", { id: "Group-5", children: /* @__PURE__ */ t("g", { id: "_1", children: /* @__PURE__ */ t(
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
const de = "_label_1snfc_1", _e = "_select_1snfc_6", he = "_error_1snfc_24", ue = "_error_label_1snfc_28", x = {
  label: de,
  select: _e,
  error: he,
  error_label: ue
};
function me(e) {
  const n = [];
  e.options.forEach((r, l) => {
    let o = r;
    e.values && (o = e.values[l]), n.push(
      /* @__PURE__ */ t("option", { value: o, children: r }, n.length)
    );
  });
  let a = x.select;
  return e.error && (a = a + " " + x.error), e.className && (a = a + " " + e.className), /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ i(s, { children: [
      /* @__PURE__ */ t("label", { className: x.label, htmlFor: e.name, children: /* @__PURE__ */ t("h3", { children: e.label }) }),
      /* @__PURE__ */ t(u, { top: 0.5 })
    ] }),
    /* @__PURE__ */ t(
      "select",
      {
        className: a,
        id: e.name,
        name: e.name,
        onChange: e.onChange,
        value: e.value,
        children: n
      }
    ),
    e.error && /* @__PURE__ */ t("p", { className: x.error_label, children: e.error })
  ] });
}
const ge = "_textarea_17ec2_1", S = {
  textarea: ge
};
function We(e) {
  return /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ i(s, { children: [
      /* @__PURE__ */ t("label", { className: S.label, htmlFor: e.name, children: /* @__PURE__ */ t("h3", { children: e.label }) }),
      /* @__PURE__ */ t(u, { top: 0.5 })
    ] }),
    /* @__PURE__ */ t(
      "textarea",
      {
        className: e.className ? S.textarea + " " + e.className : S.textarea,
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
const be = "_label_g1943_1", fe = "_input_g1943_8", ye = "_error_g1943_25", Ce = "_error_label_g1943_29", N = {
  label: be,
  input: fe,
  error: ye,
  error_label: Ce
};
function Fe(e) {
  let n = N.input;
  e.error && (n = n + " " + N.error), e.className && (n = n + " " + e.className);
  function a(r) {
    let l = r.target.value;
    l = l.replace(/\D/g, ""), l.length > 4 && (l = l.slice(0, 4));
    const o = Number(l[0]);
    o > 2 && o < 10 && (l = "0" + l[0]);
    const y = Number(l[1]);
    if (o === 2 && y > 3 || Number(l[2]) > 5) return;
    l.length > 2 && (l = `${l.slice(0, 2)}:${l.slice(2, 4)}`);
    const C = {
      target: {
        name: e.name,
        value: l
      }
    };
    e.onChange(C);
  }
  return /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ i(s, { children: [
      /* @__PURE__ */ t("label", { className: N.label, htmlFor: e.name, children: e.label }),
      /* @__PURE__ */ t(u, { top: 0.5 })
    ] }),
    /* @__PURE__ */ t(
      "input",
      {
        className: n,
        id: e.name,
        name: e.name,
        value: e.value,
        placeholder: e.placeholder,
        onChange: a,
        type: "tel",
        style: e.style ? e.style : {},
        disabled: e.disabled,
        pattern: e.pattern
      }
    ),
    e.error && /* @__PURE__ */ t("p", { className: N.error_label, children: e.error })
  ] });
}
const ve = "_day_uyvr3_1", xe = "_year_uyvr3_5", Ne = "_error_uyvr3_9", ke = "_error_label_uyvr3_13", k = {
  day: ve,
  year: xe,
  error: Ne,
  error_label: ke
};
function we(e) {
  if (e === "ru-RU")
    return [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря"
    ];
  {
    const n = [];
    for (let a = 0; a < 12; a++) {
      const r = new Date(2024, a).toLocaleString("default", { month: "long" });
      n.push(r);
    }
    return n;
  }
}
function Ie(e) {
  const n = e.value, [a, r] = f(n.getDate().toString()), [l, o] = f([]), [y, C] = f(n.toLocaleString("default", { month: "long" })), [D, w] = f(n.getFullYear().toString());
  P(() => {
    const m = navigator.language || "en", d = we(m);
    o(d);
    const c = m == "ru-RU" ? d[n.getMonth()] : n.toLocaleString(m, { month: "long" });
    C(c);
  }, []);
  function $(m) {
    const d = m.target.name;
    let c = m.target.value;
    if (d === "day") {
      if (Number(c) > 31) return;
      r(c);
    }
    if (d === "month" && C(c), d === "year")
      if (c || (c = "", w("")), c.length === 1 && (c === "1" || c === "2")) w(c);
      else if (c.length > 1 && (c.startsWith("1") || c.startsWith("2"))) w(c);
      else return;
    const _ = {
      day: d === "day" ? c : a,
      month: d === "month" ? c : y,
      year: d === "year" ? c : D
    }, W = l.indexOf(_.month);
    let L = new Date(Number(_.year), W, Number(_.day));
    (_.year.length < 4 || !_.day || !Number(_.day) || Number(_.day) <= 0 || _.day !== L.getDate().toString() || W > 11) && (L = void 0);
    const B = {
      target: {
        name: e.name,
        value: L
        // Pass the new Date object
      }
    };
    e.onChange(B);
  }
  return /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ i(s, { children: [
      /* @__PURE__ */ t("b", { className: k.label, children: e.label }),
      /* @__PURE__ */ t(u, { top: 0.5 })
    ] }),
    /* @__PURE__ */ i(I, { children: [
      /* @__PURE__ */ t(
        F,
        {
          name: "day",
          value: a,
          type: "tel",
          maxLength: 2,
          onChange: $,
          className: k.day,
          error: e.error && " "
        }
      ),
      /* @__PURE__ */ t(u, { left: 1 }),
      /* @__PURE__ */ t(
        me,
        {
          name: "month",
          onChange: $,
          value: y,
          options: l,
          error: e.error && " "
        }
      ),
      /* @__PURE__ */ t(u, { left: 1 }),
      /* @__PURE__ */ t(
        F,
        {
          name: "year",
          type: "tel",
          maxLength: 4,
          value: D,
          onChange: $,
          className: k.year,
          error: e.error && " "
        }
      )
    ] }),
    e.error && /* @__PURE__ */ t("p", { className: k.error_label, children: e.error })
  ] });
}
export {
  je as Button,
  De as Checkbox,
  Ie as DateInput,
  F as Input,
  Se as PasswordInput,
  me as Select,
  We as TextArea,
  Fe as TimeInput
};
