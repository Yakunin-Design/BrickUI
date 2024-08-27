import { useState as u } from "react";
function c(r) {
  const [o, e] = u(r || !1);
  function n(t) {
    e(t === !0 ? !0 : t === !1 ? !1 : (s) => !s);
  }
  return [o, n];
}
function a() {
  const [r, o] = u({});
  function e(t, s) {
    o((f) => ({ ...f, [t]: s }));
  }
  function n() {
    o({});
  }
  return [r, e, n];
}
export {
  c as useBoolean,
  a as useErrors
};
