import { jsx as t, Fragment as s, jsxs as i } from "react/jsx-runtime";
import { useState as f, useEffect as E } from "react";
import './index.css';const Z = "_primary_1o70d_1", G = "_secondary_1o70d_20", O = "_outline_1o70d_29", X = "_ghost_1o70d_39", A = "_destructive_1o70d_48", U = "_floating_1o70d_57", Y = "_expand_1o70d_74", q = "_link_1o70d_78", z = "_disabled_1o70d_87", h = {
  primary: Z,
  secondary: G,
  outline: O,
  ghost: X,
  destructive: A,
  floating: U,
  expand: Y,
  link: q,
  disabled: z
};
function Ee(e) {
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
const H = "_label_wo8kf_1", J = "_input_wo8kf_8", K = "_error_wo8kf_24", Q = "_error_label_wo8kf_28", C = {
  label: H,
  input: J,
  error: K,
  error_label: Q
}, V = "_row_19uuv_1", p = "_start_19uuv_7", ee = "_end_19uuv_11", F = {
  row: V,
  start: p,
  end: ee
};
function B(e) {
  let n = "";
  e.className && (n += " " + e.className);
  const l = {
    gap: (e.gap || 0) + "rem",
    justifyContent: e.gap ? "flex-start" : "space-between"
  };
  return e.justifyContent && (l.justifyContent = e.justifyContent), e.align === "start" && (n += " " + F.start), e.align === "end" && (n += " " + F.end), n += " " + F.row, /* @__PURE__ */ t(
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
  const { top: n, bottom: l, left: a, children: r } = e, c = {
    marginTop: n ? `${n}rem` : "0rem",
    marginBottom: l ? `${l}rem` : "0rem",
    marginLeft: a ? `${a}rem` : "0rem"
  };
  return n || l ? /* @__PURE__ */ t("div", { style: c, children: r }) : /* @__PURE__ */ t("span", { style: c, children: r });
}
function Ze(e) {
  let n = C.input;
  return e.error && (n = n + " " + C.error), e.className && (n = n + " " + e.className), /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ i(s, { children: [
      /* @__PURE__ */ t("label", { className: C.label, htmlFor: e.name, children: e.label }),
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
    e.error && /* @__PURE__ */ t("p", { className: C.error_label, children: e.error })
  ] });
}
const te = "_label_1e11g_1", ne = "_input_1e11g_7", le = "_error_1e11g_21", re = "_error_label_1e11g_25", ae = "_icon_wrapper_1e11g_29", ie = "_eye_1e11g_33", b = {
  label: te,
  input: ne,
  error: le,
  error_label: re,
  icon_wrapper: ae,
  eye: ie
};
function R(e) {
  const [n, l] = f(e || !1);
  function a(r) {
    l(r || ((c) => !c));
  }
  return [n, a];
}
function ce(e) {
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
function Ge(e) {
  const [n, l] = R();
  let a = b.input;
  return e.error && (a = a + " " + b.error), e.className && (a = a + " " + e.className), /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ t("label", { className: b.label, htmlFor: e.name, children: e.label }),
    /* @__PURE__ */ t(m, { top: 0.5 }),
    /* @__PURE__ */ i("div", { className: b.icon_wrapper, children: [
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
          className: b.eye,
          onClick: () => l(),
          children: /* @__PURE__ */ t(ce, { is_closed: n })
        }
      )
    ] }),
    e.error && /* @__PURE__ */ t("p", { className: b.error_label, children: e.error })
  ] });
}
const oe = "_checkbox_container_1jpt9_1", se = "_checkbox_1jpt9_1", de = "_input_1jpt9_22", _e = "_error_1jpt9_26", he = "_error_label_1jpt9_31", g = {
  checkbox_container: oe,
  checkbox: se,
  input: de,
  error: _e,
  error_label: he
};
function Oe(e) {
  const [n, l] = R(e.checked || !1);
  let a = g.checkbox;
  e.error && (a = a + " " + g.error);
  function r() {
    l(), e.onChange && e.onChange();
  }
  return /* @__PURE__ */ i("div", { className: g.checkbox_container, children: [
    /* @__PURE__ */ t("label", { children: /* @__PURE__ */ i(B, { gap: 1, children: [
      /* @__PURE__ */ t(
        "input",
        {
          type: "checkbox",
          name: "checkbox",
          id: "checkbox",
          onChange: r,
          checked: n,
          className: g.input
        }
      ),
      /* @__PURE__ */ t("div", { className: a, children: n && /* @__PURE__ */ t("svg", { width: "100%", height: "100%", viewBox: "0 0 14 14", version: "1.1", children: /* @__PURE__ */ t("g", { transform: "matrix(1.42896,0,0,1.42896,-3.00275,-2.78827)", children: /* @__PURE__ */ t("g", { id: "Symbols", children: /* @__PURE__ */ t("g", { id: "Worker-min-unem", children: /* @__PURE__ */ t("g", { id: "Group-5", children: /* @__PURE__ */ t("g", { id: "_1", children: /* @__PURE__ */ t(
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
const me = "_label_1snfc_1", ue = "_select_1snfc_6", be = "_error_1snfc_24", ge = "_error_label_1snfc_28", N = {
  label: me,
  select: ue,
  error: be,
  error_label: ge
};
function Xe(e) {
  const n = [];
  e.options.forEach((a, r) => {
    let c = a;
    e.values && (c = e.values[r]), n.push(
      /* @__PURE__ */ t("option", { value: c, children: a }, n.length)
    );
  });
  let l = N.select;
  return e.error && (l = l + " " + N.error), e.className && (l = l + " " + e.className), /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ i(s, { children: [
      /* @__PURE__ */ t("label", { className: N.label, htmlFor: e.name, children: /* @__PURE__ */ t("h3", { children: e.label }) }),
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
    e.error && /* @__PURE__ */ t("p", { className: N.error_label, children: e.error })
  ] });
}
const fe = "_textarea_17ec2_1", S = {
  textarea: fe
};
function Ae(e) {
  return /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ i(s, { children: [
      /* @__PURE__ */ t("label", { className: S.label, htmlFor: e.name, children: /* @__PURE__ */ t("h3", { children: e.label }) }),
      /* @__PURE__ */ t(m, { top: 0.5 })
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
const ye = "_label_g1943_1", ve = "_input_g1943_8", Ce = "_error_g1943_25", Ne = "_error_label_g1943_29", x = {
  label: ye,
  input: ve,
  error: Ce,
  error_label: Ne
};
function Ue(e) {
  let n = x.input;
  e.error && (n = n + " " + x.error), e.className && (n = n + " " + e.className);
  function l(a) {
    let r = a.target.value;
    r = r.replace(/\D/g, ""), r.length > 4 && (r = r.slice(0, 4));
    const c = Number(r[0]);
    c > 2 && c < 10 && (r = "0" + r[0]);
    const y = Number(r[1]);
    if (c === 2 && y > 3 || Number(r[2]) > 5) return;
    r.length > 2 && (r = `${r.slice(0, 2)}:${r.slice(2, 4)}`);
    const v = {
      target: {
        name: e.name,
        value: r
      }
    };
    e.onChange(v);
  }
  return /* @__PURE__ */ i(s, { children: [
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
        value: e.value,
        placeholder: e.placeholder,
        onChange: l,
        type: "tel",
        style: e.style ? e.style : {},
        disabled: e.disabled,
        pattern: e.pattern
      }
    ),
    e.error && /* @__PURE__ */ t("p", { className: x.error_label, children: e.error })
  ] });
}
const xe = "_day_uyvr3_1", ke = "_year_uyvr3_5", we = "_error_uyvr3_9", $e = "_error_label_uyvr3_13", k = {
  day: xe,
  year: ke,
  error: we,
  error_label: $e
}, Le = "_label_wo8kf_1", je = "_input_wo8kf_8", De = "_error_wo8kf_24", Fe = "_error_label_wo8kf_28", w = {
  label: Le,
  input: je,
  error: De,
  error_label: Fe
};
function P(e) {
  const { top: n, bottom: l, left: a, children: r } = e, c = {
    marginTop: n ? `${n}rem` : "0rem",
    marginBottom: l ? `${l}rem` : "0rem",
    marginLeft: a ? `${a}rem` : "0rem"
  };
  return n || l ? /* @__PURE__ */ t("div", { style: c, children: r }) : /* @__PURE__ */ t("span", { style: c, children: r });
}
function M(e) {
  let n = w.input;
  return e.error && (n = n + " " + w.error), e.className && (n = n + " " + e.className), /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ i(s, { children: [
      /* @__PURE__ */ t("label", { className: w.label, htmlFor: e.name, children: e.label }),
      /* @__PURE__ */ t(P, { top: 0.5 })
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
    e.error && /* @__PURE__ */ t("p", { className: w.error_label, children: e.error })
  ] });
}
const Se = "_label_14ovd_1", We = "_select_14ovd_6", Ie = "_error_14ovd_23", Me = "_error_label_14ovd_27", $ = {
  label: Se,
  select: We,
  error: Ie,
  error_label: Me
};
function Be(e) {
  const n = [];
  e.options.forEach((a, r) => {
    let c = a;
    e.values && (c = e.values[r]), n.push(
      /* @__PURE__ */ t("option", { value: c, children: a }, n.length)
    );
  });
  let l = $.select;
  return e.error && (l = l + " " + $.error), e.className && (l = l + " " + e.className), /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ i(s, { children: [
      /* @__PURE__ */ t("label", { className: $.label, htmlFor: e.name, children: /* @__PURE__ */ t("h3", { children: e.label }) }),
      /* @__PURE__ */ t(P, { top: 0.5 })
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
    e.error && /* @__PURE__ */ t("p", { className: $.error_label, children: e.error })
  ] });
}
function Re(e) {
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
    for (let l = 0; l < 12; l++) {
      const a = new Date(2024, l).toLocaleString("default", { month: "long" });
      n.push(a);
    }
    return n;
  }
}
function Ye(e) {
  const n = new Date(e.value), [l, a] = f(n && n.getDate().toString()), [r, c] = f([]), [y, v] = f(n && n.toLocaleString("default", { month: "long" })), [W, L] = f(n && n.getFullYear().toString());
  E(() => {
    const u = navigator.language || "en", d = Re(u);
    c(d);
    const o = u == "ru-RU" ? d[n.getMonth()] : n.toLocaleString(u, { month: "long" });
    v(o);
  }, []);
  function j(u) {
    const d = u.target.name;
    let o = u.target.value;
    if (d === "day") {
      if (Number(o) > 31) return;
      a(o);
    }
    if (d === "month" && v(o), d === "year")
      if (o || (o = "", L("")), o.length === 1 && (o === "1" || o === "2")) L(o);
      else if (o.length > 1 && (o.startsWith("1") || o.startsWith("2"))) L(o);
      else return;
    const _ = {
      day: d === "day" ? o : l,
      month: d === "month" ? o : y,
      year: d === "year" ? o : W
    }, I = r.indexOf(_.month);
    let D = new Date(Number(_.year), I, Number(_.day));
    (_.year.length < 4 || !_.day || !Number(_.day) || Number(_.day) <= 0 || _.day !== D.getDate().toString() || I > 11) && (D = void 0);
    const T = {
      target: {
        name: e.name,
        value: D
        // Pass the new Date object
      }
    };
    e.onChange(T);
  }
  return /* @__PURE__ */ i(s, { children: [
    e.label && /* @__PURE__ */ i(s, { children: [
      /* @__PURE__ */ t("b", { className: k.label, children: e.label }),
      /* @__PURE__ */ t(m, { top: 0.5 })
    ] }),
    /* @__PURE__ */ i(B, { children: [
      /* @__PURE__ */ t(
        M,
        {
          name: "day",
          value: l,
          type: "tel",
          maxLength: 2,
          onChange: j,
          className: k.day,
          error: e.error && " "
        }
      ),
      /* @__PURE__ */ t(m, { left: 1 }),
      /* @__PURE__ */ t(
        Be,
        {
          name: "month",
          onChange: j,
          value: y,
          options: r,
          error: e.error && " "
        }
      ),
      /* @__PURE__ */ t(m, { left: 1 }),
      /* @__PURE__ */ t(
        M,
        {
          name: "year",
          type: "tel",
          maxLength: 4,
          value: W,
          onChange: j,
          className: k.year,
          error: e.error && " "
        }
      )
    ] }),
    e.error && /* @__PURE__ */ t("p", { className: k.error_label, children: e.error })
  ] });
}
export {
  Ee as Button,
  Oe as Checkbox,
  Ye as DateInput,
  Ze as Input,
  Ge as PasswordInput,
  Xe as Select,
  Ae as TextArea,
  Ue as TimeInput
};
