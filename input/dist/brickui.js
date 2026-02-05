import { jsx as t, Fragment as s, jsxs as i } from "react/jsx-runtime";
import { useState as y, useEffect as P } from "react";
import './index.css';const R = "_primary_16msh_1", T = "_secondary_16msh_39", Z = "_outline_16msh_57", E = "_ghost_16msh_77", G = "_destructive_16msh_95", O = "_floating_16msh_113", U = "_expand_16msh_147", X = "_link_16msh_155", A = "_disabled_16msh_173", _ = {
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
  let n = _.primary;
  return e.secondary && (n += " " + _.secondary), e.link && (n += " " + _.link), e.ghost && (n += " " + _.ghost), e.destructive && (n += " " + _.destructive), e.outline && (n += " " + _.outline), e.expand && (n += " " + _.expand), e.disabled && (n += " " + _.disabled), e.className && (n += " " + e.className), /* @__PURE__ */ t(s, { children: e.href ? /* @__PURE__ */ t("a", { href: e.href, children: /* @__PURE__ */ t(
    "button",
    {
      className: n,
      onClick: e.onClick,
      style: e.style,
      type: e.submit ? "submit" : "button",
      disabled: e.disabled,
      children: e.children
    }
  ) }) : /* @__PURE__ */ t(
    "button",
    {
      className: n,
      onClick: e.onClick,
      type: e.submit ? "submit" : "button",
      style: e.style,
      disabled: e.disabled,
      children: e.children
    }
  ) });
}
const Y = "_label_1cevt_1", q = "_input_1cevt_15", z = "_error_1cevt_47", H = "_error_label_1cevt_55", x = {
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
function m(e) {
  const { top: n, bottom: a, left: r, children: l } = e, o = {
    marginTop: n ? `${n}rem` : "0rem",
    marginBottom: a ? `${a}rem` : "0rem",
    marginLeft: r ? `${r}rem` : "0rem"
  };
  return n || a ? /* @__PURE__ */ t("div", { style: o, children: l }) : /* @__PURE__ */ t("span", { style: o, children: l });
}
function F(e) {
  let n = x.input;
  return e.error && (n = n + " " + x.error), e.className && (n = n + " " + e.className), /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ i(s, { children: [
      /* @__PURE__ */ t("label", { className: x.label, htmlFor: e.name, children: e.label }),
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
    e.error && /* @__PURE__ */ t("p", { className: x.error_label, children: e.error })
  ] });
}
const V = "_label_16956_1", p = "_input_16956_13", ee = "_error_16956_41", te = "_error_label_16956_49", ne = "_icon_wrapper_16956_57", le = "_eye_16956_65", b = {
  label: V,
  input: p,
  error: ee,
  error_label: te,
  icon_wrapper: ne,
  eye: le
};
function M(e) {
  const [n, a] = y(e || !1);
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
function De(e) {
  const [n, a] = M();
  let r = b.input;
  return e.error && (r = r + " " + b.error), e.className && (r = r + " " + e.className), /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ t("label", { className: b.label, htmlFor: e.name, children: e.label }),
    /* @__PURE__ */ t(m, { top: 0.5 }),
    /* @__PURE__ */ i("div", { className: b.icon_wrapper, children: [
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
          className: b.eye,
          onClick: () => a(),
          children: /* @__PURE__ */ t(ae, { is_closed: n })
        }
      )
    ] }),
    e.error && /* @__PURE__ */ t("p", { className: b.error_label, children: e.error })
  ] });
}
const re = "_checkbox_container_1sxp3_1", ie = "_checkbox_1sxp3_1", ce = "_input_1sxp3_43", oe = "_error_1sxp3_51", se = "_error_label_1sxp3_61", g = {
  checkbox_container: re,
  checkbox: ie,
  input: ce,
  error: oe,
  error_label: se
};
function Se(e) {
  const [n, a] = M(e.checked || !1);
  let r = g.checkbox;
  e.error && (r = r + " " + g.error);
  function l() {
    a(), e.onChange && e.onChange();
  }
  return /* @__PURE__ */ i("div", { className: g.checkbox_container, children: [
    /* @__PURE__ */ t("label", { children: /* @__PURE__ */ i(I, { gap: 1, children: [
      /* @__PURE__ */ t(
        "input",
        {
          type: "checkbox",
          name: "checkbox",
          id: "checkbox",
          onChange: l,
          checked: n,
          className: g.input
        }
      ),
      /* @__PURE__ */ t("div", { className: r, children: n && /* @__PURE__ */ t("svg", { width: "100%", height: "100%", viewBox: "0 0 14 14", version: "1.1", children: /* @__PURE__ */ t("g", { transform: "matrix(1.42896,0,0,1.42896,-3.00275,-2.78827)", children: /* @__PURE__ */ t("g", { id: "Symbols", children: /* @__PURE__ */ t("g", { id: "Worker-min-unem", children: /* @__PURE__ */ t("g", { id: "Group-5", children: /* @__PURE__ */ t("g", { id: "_1", children: /* @__PURE__ */ t(
        "path",
        {
          id: "Path",
          d: "M8.483,4.302L6.284,6.866L5.514,5.968C5.442,5.884 5.354,5.815 5.254,5.764C5.155,5.713 5.046,5.682 4.934,5.672C4.822,5.662 4.709,5.674 4.602,5.707C4.494,5.739 4.394,5.792 4.308,5.862C4.222,5.932 4.15,6.018 4.098,6.114C4.046,6.211 4.014,6.317 4.004,6.426C3.993,6.535 4.005,6.644 4.039,6.749C4.072,6.853 4.126,6.95 4.198,7.034L5.626,8.7C5.706,8.794 5.807,8.869 5.921,8.921C6.034,8.973 6.158,9 6.284,9C6.409,9 6.533,8.973 6.647,8.922C6.761,8.87 6.861,8.794 6.942,8.701L9.799,5.369C9.871,5.285 9.926,5.188 9.96,5.083C9.994,4.979 10.007,4.869 9.997,4.76C9.987,4.65 9.955,4.544 9.903,4.447C9.85,4.35 9.779,4.264 9.692,4.193C9.606,4.123 9.506,4.07 9.398,4.038C9.29,4.005 9.177,3.993 9.065,4.004C8.952,4.014 8.843,4.045 8.743,4.096C8.644,4.147 8.555,4.217 8.483,4.302Z"
        }
      ) }) }) }) }) }) }) }),
      e.children && /* @__PURE__ */ t("span", { className: g.labelText, children: e.children })
    ] }) }),
    e.error && /* @__PURE__ */ t("p", { className: g.error_label, children: e.error })
  ] });
}
const de = "_label_1m599_1", he = "_select_1m599_11", _e = "_error_1m599_47", me = "_error_label_1m599_55", v = {
  label: de,
  select: he,
  error: _e,
  error_label: me
};
function ue(e) {
  const n = [];
  e.options.forEach((r, l) => {
    let o = r;
    e.values && (o = e.values[l]), n.push(
      /* @__PURE__ */ t("option", { value: o, children: r }, n.length)
    );
  });
  let a = v.select;
  return e.error && (a = a + " " + v.error), e.className && (a = a + " " + e.className), /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ i(s, { children: [
      /* @__PURE__ */ t("label", { className: v.label, htmlFor: e.name, children: /* @__PURE__ */ t("h3", { children: e.label }) }),
      /* @__PURE__ */ t(m, { top: 0.5 })
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
    e.error && /* @__PURE__ */ t("p", { className: v.error_label, children: e.error })
  ] });
}
const be = "_textarea_ow9pc_1", D = {
  textarea: be
};
function We(e) {
  return /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ i(s, { children: [
      /* @__PURE__ */ t("label", { className: D.label, htmlFor: e.name, children: /* @__PURE__ */ t("h3", { children: e.label }) }),
      /* @__PURE__ */ t(m, { top: 0.5 })
    ] }),
    /* @__PURE__ */ t(
      "textarea",
      {
        className: e.className ? D.textarea + " " + e.className : D.textarea,
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
const ge = "_label_1lgup_1", ye = "_input_1lgup_15", fe = "_error_1lgup_49", Ce = "_error_label_1lgup_57", N = {
  label: ge,
  input: ye,
  error: fe,
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
    const f = Number(l[1]);
    if (o === 2 && f > 3 || Number(l[2]) > 5) return;
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
      /* @__PURE__ */ t(m, { top: 0.5 })
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
const xe = "_day_pr9xl_1", ve = "_year_pr9xl_9", Ne = "_error_pr9xl_17", ke = "_error_label_pr9xl_25", k = {
  day: xe,
  year: ve,
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
  const n = new Date(e.value), [a, r] = y(n && n.getDate().toString()), [l, o] = y([]), [f, C] = y(n && n.toLocaleString("default", { month: "long" })), [S, w] = y(n && n.getFullYear().toString());
  P(() => {
    const u = navigator.language || "en", d = we(u);
    o(d);
    const c = u == "ru-RU" ? d[n.getMonth()] : n.toLocaleString(u, { month: "long" });
    C(c);
  }, []);
  function $(u) {
    const d = u.target.name;
    let c = u.target.value;
    if (d === "day") {
      if (Number(c) > 31) return;
      r(c);
    }
    if (d === "month" && C(c), d === "year")
      if (c || (c = "", w("")), c.length === 1 && (c === "1" || c === "2")) w(c);
      else if (c.length > 1 && (c.startsWith("1") || c.startsWith("2"))) w(c);
      else return;
    const h = {
      day: d === "day" ? c : a,
      month: d === "month" ? c : f,
      year: d === "year" ? c : S
    }, W = l.indexOf(h.month);
    let L = new Date(Number(h.year), W, Number(h.day));
    (h.year.length < 4 || !h.day || !Number(h.day) || Number(h.day) <= 0 || h.day !== L.getDate().toString() || W > 11) && (L = void 0);
    const B = {
      target: {
        name: e.name,
        value: L
      }
    };
    e.onChange(B);
  }
  return /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ i(s, { children: [
      /* @__PURE__ */ t("b", { className: k.label, children: e.label }),
      /* @__PURE__ */ t(m, { top: 0.5 })
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
      /* @__PURE__ */ t(m, { left: 1 }),
      /* @__PURE__ */ t(
        ue,
        {
          name: "month",
          onChange: $,
          value: f,
          options: l,
          error: e.error && " "
        }
      ),
      /* @__PURE__ */ t(m, { left: 1 }),
      /* @__PURE__ */ t(
        F,
        {
          name: "year",
          type: "tel",
          maxLength: 4,
          value: S,
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
  Se as Checkbox,
  Ie as DateInput,
  F as Input,
  De as PasswordInput,
  ue as Select,
  We as TextArea,
  Fe as TimeInput
};
