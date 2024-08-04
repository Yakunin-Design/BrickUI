import { useState as u } from "react";
function l(r) {
  const [e, o] = u(r || !1);
  function n(t) {
    o(t || ((s) => !s));
  }
  return [e, n];
}
function g() {
  const [r, e] = u({});
  function o(t, s) {
    e((c) => ({ ...c, [t]: s }));
  }
  function n() {
    e({});
  }
  return [r, o, n];
}
export {
  l as useBoolean,
  g as useErrors
};
