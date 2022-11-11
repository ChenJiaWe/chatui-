var _a;
function _mergeNamespaces(n2, m2) {
  m2.forEach(function(e) {
    e && typeof e !== "string" && !Array.isArray(e) && Object.keys(e).forEach(function(k2) {
      if (k2 !== "default" && !(k2 in n2)) {
        var d = Object.getOwnPropertyDescriptor(e, k2);
        Object.defineProperty(n2, k2, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k2];
          }
        });
      }
    });
  });
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
const p$1 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p$1();
var react = { exports: {} };
var react_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols2;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty$1.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols2 = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols2.length; i++) {
        if (propIsEnumerable.call(from, symbols2[i])) {
          to[symbols2[i]] = from[symbols2[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = objectAssign, n = 60103, p = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q = 60109, r$2 = 60110, t = 60112;
react_production_min.Suspense = 60113;
var u = 60115, v = 60116;
if ("function" === typeof Symbol && Symbol.for) {
  var w = Symbol.for;
  n = w("react.element");
  p = w("react.portal");
  react_production_min.Fragment = w("react.fragment");
  react_production_min.StrictMode = w("react.strict_mode");
  react_production_min.Profiler = w("react.profiler");
  q = w("react.provider");
  r$2 = w("react.context");
  t = w("react.forward_ref");
  react_production_min.Suspense = w("react.suspense");
  u = w("react.memo");
  v = w("react.lazy");
}
var x = "function" === typeof Symbol && Symbol.iterator;
function y$1(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = x && a[x] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B$1 = {};
function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B$1;
  this.updater = c || A;
}
C.prototype.isReactComponent = {};
C.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
C.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D$1() {
}
D$1.prototype = C.prototype;
function E$1(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B$1;
  this.updater = c || A;
}
var F$1 = E$1.prototype = new D$1();
F$1.constructor = E$1;
l(F$1, C.prototype);
F$1.isPureReactComponent = true;
var G$1 = { current: null }, H$1 = Object.prototype.hasOwnProperty, I$1 = { key: true, ref: true, __self: true, __source: true };
function J(a, b, c) {
  var e, d = {}, k2 = null, h = null;
  if (null != b)
    for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
      H$1.call(b, e) && !I$1.hasOwnProperty(e) && (d[e] = b[e]);
  var g = arguments.length - 2;
  if (1 === g)
    d.children = c;
  else if (1 < g) {
    for (var f = Array(g), m2 = 0; m2 < g; m2++)
      f[m2] = arguments[m2 + 2];
    d.children = f;
  }
  if (a && a.defaultProps)
    for (e in g = a.defaultProps, g)
      void 0 === d[e] && (d[e] = g[e]);
  return { $$typeof: n, type: a, key: k2, ref: h, props: d, _owner: G$1.current };
}
function K(a, b) {
  return { $$typeof: n, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function L(a) {
  return "object" === typeof a && null !== a && a.$$typeof === n;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var M$1 = /\/+/g;
function N$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function O$1(a, b, c, e, d) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case n:
          case p:
            h = true;
        }
    }
  if (h)
    return h = a, d = d(h), a = "" === e ? "." + N$1(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M$1, "$&/") + "/"), O$1(d, b, c, "", function(a2) {
      return a2;
    })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M$1, "$&/") + "/") + a)), b.push(d)), 1;
  h = 0;
  e = "" === e ? "." : e + ":";
  if (Array.isArray(a))
    for (var g = 0; g < a.length; g++) {
      k2 = a[g];
      var f = e + N$1(k2, g);
      h += O$1(k2, b, c, f, d);
    }
  else if (f = y$1(a), "function" === typeof f)
    for (a = f.call(a), g = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f = e + N$1(k2, g++), h += O$1(k2, b, c, f, d);
  else if ("object" === k2)
    throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}
function P$1(a, b, c) {
  if (null == a)
    return a;
  var e = [], d = 0;
  O$1(a, e, "", "", function(a2) {
    return b.call(c, a2, d++);
  });
  return e;
}
function Q(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function(b2) {
      0 === a._status && (b2 = b2.default, a._status = 1, a._result = b2);
    }, function(b2) {
      0 === a._status && (a._status = 2, a._result = b2);
    });
  }
  if (1 === a._status)
    return a._result;
  throw a._result;
}
var R$1 = { current: null };
function S$1() {
  var a = R$1.current;
  if (null === a)
    throw Error(z(321));
  return a;
}
var T$1 = { ReactCurrentDispatcher: R$1, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G$1, IsSomeRendererActing: { current: false }, assign: l };
react_production_min.Children = { map: P$1, forEach: function(a, b, c) {
  P$1(a, function() {
    b.apply(this, arguments);
  }, c);
}, count: function(a) {
  var b = 0;
  P$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return P$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!L(a))
    throw Error(z(143));
  return a;
} };
react_production_min.Component = C;
react_production_min.PureComponent = E$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1;
react_production_min.cloneElement = function(a, b, c) {
  if (null === a || void 0 === a)
    throw Error(z(267, a));
  var e = l({}, a.props), d = a.key, k2 = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h = G$1.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f in b)
      H$1.call(b, f) && !I$1.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (1 === f)
    e.children = c;
  else if (1 < f) {
    g = Array(f);
    for (var m2 = 0; m2 < f; m2++)
      g[m2] = arguments[m2 + 2];
    e.children = g;
  }
  return {
    $$typeof: n,
    type: a.type,
    key: d,
    ref: k2,
    props: e,
    _owner: h
  };
};
react_production_min.createContext = function(a, b) {
  void 0 === b && (b = null);
  a = { $$typeof: r$2, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: q, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = J;
react_production_min.createFactory = function(a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: t, render: a };
};
react_production_min.isValidElement = L;
react_production_min.lazy = function(a) {
  return { $$typeof: v, _payload: { _status: -1, _result: a }, _init: Q };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: u, type: a, compare: void 0 === b ? null : b };
};
react_production_min.useCallback = function(a, b) {
  return S$1().useCallback(a, b);
};
react_production_min.useContext = function(a, b) {
  return S$1().useContext(a, b);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a, b) {
  return S$1().useEffect(a, b);
};
react_production_min.useImperativeHandle = function(a, b, c) {
  return S$1().useImperativeHandle(a, b, c);
};
react_production_min.useLayoutEffect = function(a, b) {
  return S$1().useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return S$1().useMemo(a, b);
};
react_production_min.useReducer = function(a, b, c) {
  return S$1().useReducer(a, b, c);
};
react_production_min.useRef = function(a) {
  return S$1().useRef(a);
};
react_production_min.useState = function(a) {
  return S$1().useState(a);
};
react_production_min.version = "17.0.2";
{
  react.exports = react_production_min;
}
var React = react.exports;
var React$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": React
}, [react.exports]);
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  var f, g, h, k2;
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
    var t2 = null, u2 = null, w2 = function() {
      if (null !== t2)
        try {
          var a = exports.unstable_now();
          t2(true, a);
          t2 = null;
        } catch (b) {
          throw setTimeout(w2, 0), b;
        }
    };
    f = function(a) {
      null !== t2 ? setTimeout(f, 0, a) : (t2 = a, setTimeout(w2, 0));
    };
    g = function(a, b) {
      u2 = setTimeout(a, b);
    };
    h = function() {
      clearTimeout(u2);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k2 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x2 = window.setTimeout, y2 = window.clearTimeout;
    if ("undefined" !== typeof console) {
      var z2 = window.cancelAnimationFrame;
      "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      "function" !== typeof z2 && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A2 = false, B2 = null, C2 = -1, D2 = 5, E2 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E2;
    };
    k2 = function() {
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (null !== B2) {
        var a = exports.unstable_now();
        E2 = a + D2;
        try {
          B2(true, a) ? G2.postMessage(null) : (A2 = false, B2 = null);
        } catch (b) {
          throw G2.postMessage(null), b;
        }
      } else
        A2 = false;
    };
    f = function(a) {
      B2 = a;
      A2 || (A2 = true, G2.postMessage(null));
    };
    g = function(a, b) {
      C2 = x2(function() {
        a(exports.unstable_now());
      }, b);
    };
    h = function() {
      y2(C2);
      C2 = -1;
    };
  }
  function H2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; ; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (void 0 !== e && 0 < I2(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function J2(a) {
    a = a[0];
    return void 0 === a ? null : a;
  }
  function K2(a) {
    var b = a[0];
    if (void 0 !== b) {
      var c = a.pop();
      if (c !== b) {
        a[0] = c;
        a:
          for (var d = 0, e = a.length; d < e; ) {
            var m2 = 2 * (d + 1) - 1, n2 = a[m2], v2 = m2 + 1, r2 = a[v2];
            if (void 0 !== n2 && 0 > I2(n2, c))
              void 0 !== r2 && 0 > I2(r2, n2) ? (a[d] = r2, a[v2] = c, d = v2) : (a[d] = n2, a[m2] = c, d = m2);
            else if (void 0 !== r2 && 0 > I2(r2, c))
              a[d] = r2, a[v2] = c, d = v2;
            else
              break a;
          }
      }
      return b;
    }
    return null;
  }
  function I2(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  var L2 = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q2 = false, R2 = false, S2 = false;
  function T2(a) {
    for (var b = J2(M2); null !== b; ) {
      if (null === b.callback)
        K2(M2);
      else if (b.startTime <= a)
        K2(M2), b.sortIndex = b.expirationTime, H2(L2, b);
      else
        break;
      b = J2(M2);
    }
  }
  function U2(a) {
    S2 = false;
    T2(a);
    if (!R2)
      if (null !== J2(L2))
        R2 = true, f(V2);
      else {
        var b = J2(M2);
        null !== b && g(U2, b.startTime - a);
      }
  }
  function V2(a, b) {
    R2 = false;
    S2 && (S2 = false, h());
    Q2 = true;
    var c = P2;
    try {
      T2(b);
      for (O2 = J2(L2); null !== O2 && (!(O2.expirationTime > b) || a && !exports.unstable_shouldYield()); ) {
        var d = O2.callback;
        if ("function" === typeof d) {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e = d(O2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e ? O2.callback = e : O2 === J2(L2) && K2(L2);
          T2(b);
        } else
          K2(L2);
        O2 = J2(L2);
      }
      if (null !== O2)
        var m2 = true;
      else {
        var n2 = J2(M2);
        null !== n2 && g(U2, n2.startTime - b);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c, Q2 = false;
    }
  }
  var W2 = k2;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q2 || (R2 = true, f(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J2(L2);
  };
  exports.unstable_next = function(a) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = P2;
    }
    var c = P2;
    P2 = b;
    try {
      return a();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = P2;
    P2 = a;
    try {
      return b();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: N2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, H2(M2, a), null === J2(L2) && a === J2(M2) && (S2 ? h() : S2 = true, g(U2, c - d))) : (a.sortIndex = e, H2(L2, a), R2 || Q2 || (R2 = true, f(V2)));
    return a;
  };
  exports.unstable_wrapCallback = function(a) {
    var b = P2;
    return function() {
      var c = P2;
      P2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        P2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, m = objectAssign, r$1 = scheduler.exports;
function y(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y(227));
var ba = /* @__PURE__ */ new Set(), ca = {};
function da(a, b) {
  ea(a, b);
  ea(a + "Capture", b);
}
function ea(a, b) {
  ca[a] = b;
  for (a = 0; a < b.length; a++)
    ba.add(b[a]);
}
var fa = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja = {}, ka = {};
function la(a) {
  if (ia.call(ka, a))
    return true;
  if (ia.call(ja, a))
    return false;
  if (ha.test(a))
    return ka[a] = true;
  ja[a] = true;
  return false;
}
function ma(a, b, c, d) {
  if (null !== c && 0 === c.type)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (null !== c)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function na(a, b, c, d) {
  if (null === b || "undefined" === typeof b || ma(a, b, c, d))
    return true;
  if (d)
    return false;
  if (null !== c)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function B(a, b, c, d, e, f, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
  this.removeEmptyString = g;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D[a] = new B(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  D[b] = new B(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  D[a] = new B(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  D[a] = new B(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  D[a] = new B(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  D[a] = new B(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    oa,
    pa
  );
  D[b] = new B(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b, c, d) {
  var e = D.hasOwnProperty(b) ? D[b] : null;
  var f = null !== e ? 0 === e.type : d ? false : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? false : true;
  f || (na(b, c, e, d) && (c = null), d || null === e ? la(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua$1 = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
if ("function" === typeof Symbol && Symbol.for) {
  var E = Symbol.for;
  sa = E("react.element");
  ta = E("react.portal");
  ua$1 = E("react.fragment");
  wa = E("react.strict_mode");
  xa = E("react.profiler");
  ya = E("react.provider");
  za = E("react.context");
  Aa = E("react.forward_ref");
  Ba = E("react.suspense");
  Ca = E("react.suspense_list");
  Da = E("react.memo");
  Ea = E("react.lazy");
  Fa = E("react.block");
  E("react.scope");
  Ga = E("react.opaque.id");
  Ha = E("react.debug_trace_mode");
  Ia = E("react.offscreen");
  Ja = E("react.legacy_hidden");
}
var Ka = "function" === typeof Symbol && Symbol.iterator;
function La(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ka && a[Ka] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var Ma;
function Na(a) {
  if (void 0 === Ma)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Ma = b && b[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (k2) {
          var d = k2;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (k2) {
          d = k2;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k2) {
        d = k2;
      }
      a();
    }
  } catch (k2) {
    if (k2 && d && "string" === typeof k2.stack) {
      for (var e = k2.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f[h])
                return "\n" + e[g].replace(" at new ", " at ");
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
}
function Qa(a) {
  switch (a.tag) {
    case 5:
      return Na(a.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Pa(a.type, false), a;
    case 11:
      return a = Pa(a.type.render, false), a;
    case 22:
      return a = Pa(a.type._render, false), a;
    case 1:
      return a = Pa(a.type, true), a;
    default:
      return "";
  }
}
function Ra(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ua$1:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";
      case ya:
        return (a._context.displayName || "Context") + ".Provider";
      case Aa:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b = a._payload;
        a = a._init;
        try {
          return Ra(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return m({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function $a(a, b) {
  b = b.checked;
  null != b && qa(a, "checked", b, false);
}
function ab(a, b) {
  $a(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c)
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function cb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function bb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a)
    null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
function db(a) {
  var b = "";
  aa.Children.forEach(a, function(a2) {
    null != a2 && (b += a2);
  });
  return b;
}
function eb(a, b) {
  a = m({ children: void 0 }, b);
  if (b = db(b.children))
    a.children = b;
  return a;
}
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML)
    throw Error(y(91));
  return m({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b)
        throw Error(y(92));
      if (Array.isArray(c)) {
        if (!(1 >= c.length))
          throw Error(y(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function lb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? lb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var nb, ob = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function pb(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a) {
  rb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b] = qb[a];
  });
});
function sb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
}
function tb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = sb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var ub = m({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a, b) {
  if (b) {
    if (ub[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
      throw Error(y(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children)
        throw Error(y(60));
      if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (null != b.style && "object" !== typeof b.style)
      throw Error(y(62));
  }
}
function wb(a, b) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(y(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb(a, b, c, d, e) {
  return a(b, c, d, e);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (null !== zb || null !== Ab)
    Ib(), Fb();
}
function Nb(a, b, c) {
  if (Lb)
    return a(b, c);
  Lb = true;
  try {
    return Jb(a, b, c);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b) {
  var c = a.stateNode;
  if (null === c)
    return null;
  var d = Db(c);
  if (null === d)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && "function" !== typeof c)
    throw Error(y(231, b, typeof c));
  return c;
}
var Pb = false;
if (fa)
  try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", { get: function() {
      Pb = true;
    } });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = false;
  }
function Rb(a, b, c, d, e, f, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a) {
  Sb = true;
  Tb = a;
} };
function Xb(a, b, c, d, e, f, g, h, k2) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b, c, d, e, f, g, h, k2) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 1026) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function $b(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b)
      return b.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y(188));
}
function bc(a) {
  var b = a.alternate;
  if (!b) {
    b = Zb(a);
    if (null === b)
      throw Error(y(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e)
      break;
    var f = e.alternate;
    if (null === f) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f.child) {
      for (f = e.child; f; ) {
        if (f === c)
          return ac(e), a;
        if (f === d)
          return ac(e), b;
        f = f.sibling;
      }
      throw Error(y(188));
    }
    if (c.return !== d.return)
      c = e, d = f;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f.child; h; ) {
          if (h === c) {
            g = true;
            c = f;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(y(189));
      }
    }
    if (c.alternate !== d)
      throw Error(y(190));
  }
  if (3 !== c.tag)
    throw Error(y(188));
  return c.stateNode.current === c ? a : b;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b = a; ; ) {
    if (5 === b.tag || 6 === b.tag)
      return b;
    if (b.child)
      b.child.return = b, b = b.child;
    else {
      if (b === a)
        break;
      for (; !b.sibling; ) {
        if (!b.return || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return null;
}
function dc(a, b) {
  for (var c = a.alternate; null !== b; ) {
    if (b === a || b === c)
      return true;
    b = b.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = /* @__PURE__ */ new Map(), oc = /* @__PURE__ */ new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b, c, d, e) {
  return { blockedOn: a, domEventName: b, eventSystemFlags: c | 16, nativeEvent: e, targetContainers: [d] };
}
function sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b.pointerId);
  }
}
function tc(a, b, c, d, e, f) {
  if (null === a || a.nativeEvent !== f)
    return a = rc(b, c, d, e, f), null !== b && (b = Cb(b), null !== b && fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return kc = tc(kc, a, b, c, d, e), true;
    case "dragenter":
      return lc = tc(lc, a, b, c, d, e), true;
    case "mouseover":
      return mc = tc(mc, a, b, c, d, e), true;
    case "pointerover":
      var f = e.pointerId;
      nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), true;
  }
  return false;
}
function vc(a) {
  var b = wc(a.target);
  if (null !== b) {
    var c = Zb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = $b(c), null !== b) {
          a.blockedOn = b;
          hc(a.lanePriority, function() {
            r$1.unstable_runWithPriority(a.priority, function() {
              gc(c);
            });
          });
          return;
        }
      } else if (3 === b && c.stateNode.hydrate) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null !== c)
      return b = Cb(c), null !== b && fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function zc(a, b, c) {
  xc(a) && c.delete(b);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (null !== a.blockedOn) {
      a = Cb(a.blockedOn);
      null !== a && ec(a);
      break;
    }
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (null !== c) {
        a.blockedOn = c;
        break;
      }
      b.shift();
    }
    null === a.blockedOn && jc.shift();
  }
  null !== kc && xc(kc) && (kc = null);
  null !== lc && xc(lc) && (lc = null);
  null !== mc && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, ic || (ic = true, r$1.unstable_scheduleCallback(r$1.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b(b2) {
    return Bc(b2, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c = 1; c < jc.length; c++) {
      var d = jc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== kc && Bc(kc, a);
  null !== lc && Bc(lc, a);
  null !== mc && Bc(mc, a);
  nc.forEach(b);
  oc.forEach(b);
  for (c = 0; c < pc.length; c++)
    d = pc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < pc.length && (c = pc[0], null === c.blockedOn); )
    vc(c), null === c.blockedOn && pc.shift();
}
function Dc(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b = Ec[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Gc)
      return Fc[a] = b[c];
  return a;
}
var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = /* @__PURE__ */ new Map(), Nc = /* @__PURE__ */ new Map(), Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a, b) {
  for (var c = 0; c < a.length; c += 2) {
    var d = a[c], e = a[c + 1];
    e = "on" + (e[0].toUpperCase() + e.slice(1));
    Nc.set(d, b);
    Mc.set(d, e);
    da(e, [d]);
  }
}
var Qc = r$1.unstable_now;
Qc();
var F = 8;
function Rc(a) {
  if (0 !== (1 & a))
    return F = 15, 1;
  if (0 !== (2 & a))
    return F = 14, 2;
  if (0 !== (4 & a))
    return F = 13, 4;
  var b = 24 & a;
  if (0 !== b)
    return F = 12, b;
  if (0 !== (a & 32))
    return F = 11, 32;
  b = 192 & a;
  if (0 !== b)
    return F = 10, b;
  if (0 !== (a & 256))
    return F = 9, 256;
  b = 3584 & a;
  if (0 !== b)
    return F = 8, b;
  if (0 !== (a & 4096))
    return F = 7, 4096;
  b = 4186112 & a;
  if (0 !== b)
    return F = 6, b;
  b = 62914560 & a;
  if (0 !== b)
    return F = 5, b;
  if (a & 67108864)
    return F = 4, 67108864;
  if (0 !== (a & 134217728))
    return F = 3, 134217728;
  b = 805306368 & a;
  if (0 !== b)
    return F = 2, b;
  if (0 !== (1073741824 & a))
    return F = 1, 1073741824;
  F = 8;
  return a;
}
function Sc(a) {
  switch (a) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a) {
  switch (a) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a));
  }
}
function Uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c)
    return F = 0;
  var d = 0, e = 0, f = a.expiredLanes, g = a.suspendedLanes, h = a.pingedLanes;
  if (0 !== f)
    d = f, e = F = 15;
  else if (f = c & 134217727, 0 !== f) {
    var k2 = f & ~g;
    0 !== k2 ? (d = Rc(k2), e = F) : (h &= f, 0 !== h && (d = Rc(h), e = F));
  } else
    f = c & ~g, 0 !== f ? (d = Rc(f), e = F) : 0 !== h && (d = Rc(h), e = F);
  if (0 === d)
    return 0;
  d = 31 - Vc(d);
  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
  if (0 !== b && b !== d && 0 === (b & g)) {
    Rc(b);
    if (e <= F)
      return b;
    F = e;
  }
  b = a.entangledLanes;
  if (0 !== b)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b), 0 === a ? Xc(10, b) : a;
    case 10:
      return a = Yc(192 & ~b), 0 === a ? Xc(8, b) : a;
    case 8:
      return a = Yc(3584 & ~b), 0 === a && (a = Yc(4186112 & ~b), 0 === a && (a = 512)), a;
    case 2:
      return b = Yc(805306368 & ~b), 0 === b && (b = 268435456), b;
  }
  throw Error(y(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function $c(a, b, c) {
  a.pendingLanes |= b;
  var d = b - 1;
  a.suspendedLanes &= d;
  a.pingedLanes &= d;
  a = a.eventTimes;
  b = 31 - Vc(b);
  a[b] = c;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a) {
  return 0 === a ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = r$1.unstable_UserBlockingPriority, ed = r$1.unstable_runWithPriority, fd = true;
function gd(a, b, c, d) {
  Kb || Ib();
  var e = hd, f = Kb;
  Kb = true;
  try {
    Hb(e, a, b, c, d);
  } finally {
    (Kb = f) || Mb();
  }
}
function id(a, b, c, d) {
  ed(dd, hd.bind(null, a, b, c, d));
}
function hd(a, b, c, d) {
  if (fd) {
    var e;
    if ((e = 0 === (b & 4)) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b, c, d), jc.push(a);
    else {
      var f = yc(a, b, c, d);
      if (null === f)
        e && sc(a, d);
      else {
        if (e) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f, a, b, c, d);
            jc.push(a);
            return;
          }
          if (uc(f, a, b, c, d))
            return;
          sc(a, d);
        }
        jd(a, b, d, null, c);
      }
    }
  }
}
function yc(a, b, c, d) {
  var e = xb(d);
  e = wc(e);
  if (null !== e) {
    var f = Zb(e);
    if (null === f)
      e = null;
    else {
      var g = f.tag;
      if (13 === g) {
        e = $b(f);
        if (null !== e)
          return e;
        e = null;
      } else if (3 === g) {
        if (f.stateNode.hydrate)
          return 3 === f.tag ? f.stateNode.containerInfo : null;
        e = null;
      } else
        f !== e && (e = null);
    }
  }
  jd(a, b, d, e, c);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = m({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = m({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b)
      return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = m({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = fa && "CompositionEvent" in window, be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be, de = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if ("change" === a)
    return b;
}
var we = false;
if (fa) {
  var xe;
  if (fa) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b);
    else {
      Kb = true;
      try {
        Gb(a, b);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b) {
  if ("click" === a)
    return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a)
    return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a, b) {
  if (He(a, b))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++)
    if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b) {
  var c = Ke(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Ke(c);
  }
}
function Me(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Ne() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Oe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
Pc(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
  0
);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Yb(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k2 = h.instance, l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f && e.isPropagationStopped())
            break a;
          Ze(e, h, l2);
          f = k2;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k2 = h.instance;
          l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f && e.isPropagationStopped())
            break a;
          Ze(e, h, l2);
          f = k2;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G(a, b) {
  var c = $e(b), d = a + "__bubble";
  c.has(d) || (af(b, a, 2, false), c.add(d));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b) {
    Ye.has(b) || df(b, false, a, null);
    df(b, true, a, null);
  }));
}
function df(a, b, c, d) {
  var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, f = c;
  "selectionchange" === a && 9 !== c.nodeType && (f = c.ownerDocument);
  if (null !== d && !b && Ye.has(a)) {
    if ("scroll" !== a)
      return;
    e |= 2;
    f = d;
  }
  var g = $e(f), h = a + "__" + (b ? "capture" : "bubble");
  g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
}
function af(a, b, c, d) {
  var e = Nc.get(b);
  switch (void 0 === e ? 2 : e) {
    case 0:
      e = gd;
      break;
    case 1:
      e = id;
      break;
    default:
      e = hd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Pb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function jd(a, b, c, d, e) {
  var f = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d)
    a:
      for (; ; ) {
        if (null === d)
          return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e)
            break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; null !== h; ) {
            g = wc(h);
            if (null === g)
              return;
            k2 = g.tag;
            if (5 === k2 || 6 === k2) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Nb(function() {
    var d2 = f, e2 = xb(c), g2 = [];
    a: {
      var h2 = Mc.get(a);
      if (void 0 !== h2) {
        var k3 = td, x2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            x2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            x2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k3 = Hd;
            break;
          case Lc:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var w2 = 0 !== (b & 4), z2 = !w2 && "scroll" === a, u2 = w2 ? null !== h2 ? h2 + "Capture" : null : h2;
        w2 = [];
        for (var t2 = d2, q2; null !== t2; ) {
          q2 = t2;
          var v2 = q2.stateNode;
          5 === q2.tag && null !== v2 && (q2 = v2, null !== u2 && (v2 = Ob(t2, u2), null != v2 && w2.push(ef(t2, v2, q2))));
          if (z2)
            break;
          t2 = t2.return;
        }
        0 < w2.length && (h2 = new k3(h2, x2, null, c, e2), g2.push({ event: h2, listeners: w2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && 0 === (b & 16) && (x2 = c.relatedTarget || c.fromElement) && (wc(x2) || x2[ff]))
          break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (x2 = c.relatedTarget || c.toElement, k3 = d2, x2 = x2 ? wc(x2) : null, null !== x2 && (z2 = Zb(x2), x2 !== z2 || 5 !== x2.tag && 6 !== x2.tag))
              x2 = null;
          } else
            k3 = null, x2 = d2;
          if (k3 !== x2) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u2 = "onMouseEnter";
            t2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              w2 = Td, v2 = "onPointerLeave", u2 = "onPointerEnter", t2 = "pointer";
            z2 = null == k3 ? h2 : ue(k3);
            q2 = null == x2 ? h2 : ue(x2);
            h2 = new w2(v2, t2 + "leave", k3, c, e2);
            h2.target = z2;
            h2.relatedTarget = q2;
            v2 = null;
            wc(e2) === d2 && (w2 = new w2(u2, t2 + "enter", x2, c, e2), w2.target = q2, w2.relatedTarget = z2, v2 = w2);
            z2 = v2;
            if (k3 && x2)
              b: {
                w2 = k3;
                u2 = x2;
                t2 = 0;
                for (q2 = w2; q2; q2 = gf(q2))
                  t2++;
                q2 = 0;
                for (v2 = u2; v2; v2 = gf(v2))
                  q2++;
                for (; 0 < t2 - q2; )
                  w2 = gf(w2), t2--;
                for (; 0 < q2 - t2; )
                  u2 = gf(u2), q2--;
                for (; t2--; ) {
                  if (w2 === u2 || null !== u2 && w2 === u2.alternate)
                    break b;
                  w2 = gf(w2);
                  u2 = gf(u2);
                }
                w2 = null;
              }
            else
              w2 = null;
            null !== k3 && hf(g2, h2, k3, w2, false);
            null !== x2 && null !== z2 && hf(g2, z2, x2, w2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type)
          var J2 = ve;
        else if (me(h2))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (J2 = Ee);
        if (J2 && (J2 = J2(a, d2))) {
          ne(g2, J2, c, e2);
          break a;
        }
        K2 && K2(a, h2, d2);
        "focusout" === a && (K2 = h2._wrapperState) && K2.controlled && "number" === h2.type && bb(h2, "number", h2.value);
      }
      K2 = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(K2) || "true" === K2.contentEditable)
            Qe = K2, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var Q2;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie ? ge(a, c) && (L2 = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (L2 = "onCompositionStart");
      L2 && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== L2 ? "onCompositionEnd" === L2 && ie && (Q2 = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d2, L2), 0 < K2.length && (L2 = new Ld(L2, a, null, c, e2), g2.push({ event: L2, listeners: K2 }), Q2 ? L2.data = Q2 : (Q2 = he(c), null !== Q2 && (L2.data = Q2))));
      if (Q2 = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld(
          "onBeforeInput",
          "beforeinput",
          null,
          c,
          e2
        ), g2.push({ event: e2, listeners: d2 }), e2.data = Q2);
    }
    se(g2, b);
  });
}
function ef(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f = e.stateNode;
    5 === e.tag && null !== f && (e = f, f = Ob(a, c), null != f && d.unshift(ef(a, f, e)), f = Ob(a, b), null != f && d.push(ef(a, f, e)));
    a = a.return;
  }
  return d;
}
function gf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function hf(a, b, c, d, e) {
  for (var f = b._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d)
      break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Ob(c, f), null != k2 && g.unshift(ef(c, k2, h))) : e || (k2 = Ob(c, f), null != k2 && g.push(ef(c, k2, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
function jf() {
}
var kf = null, lf = null;
function mf(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }
  return false;
}
function nf(a, b) {
  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var of = "function" === typeof setTimeout ? setTimeout : void 0, pf = "function" === typeof clearTimeout ? clearTimeout : void 0;
function qf(a) {
  1 === a.nodeType ? a.textContent = "" : 9 === a.nodeType && (a = a.body, null != a && (a.textContent = ""));
}
function rf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b)
          return a;
        b--;
      } else
        "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a) {
  return { $$typeof: Ga, toString: a, valueOf: a };
}
var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
function wc(a) {
  var b = a[wf];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[ff] || c[wf]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child)
        for (a = sf(a); null !== a; ) {
          if (c = a[wf])
            return c;
          a = sf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[wf] || a[ff];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(y(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b = a[yf];
  void 0 === b && (b = a[yf] = /* @__PURE__ */ new Set());
  return b;
}
var zf = [], Af = -1;
function Bf(a) {
  return { current: a };
}
function H(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I(a, b) {
  Af++;
  zf[Af] = a.current;
  a.current = b;
}
var Cf = {}, M = Bf(Cf), N = Bf(false), Df = Cf;
function Ef(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Cf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f;
  for (f in c)
    e[f] = b[f];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Ff(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a, b, c) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b);
  I(N, c);
}
function If(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if ("function" !== typeof d.getChildContext)
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in a))
      throw Error(y(108, Ra(b) || "Unknown", e));
  return m({}, c, d);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a);
  I(N, N.current);
  return true;
}
function Kf(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(y(169));
  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
  I(N, c);
}
var Lf = null, Mf = null, Nf = r$1.unstable_runWithPriority, Of = r$1.unstable_scheduleCallback, Pf = r$1.unstable_cancelCallback, Qf = r$1.unstable_shouldYield, Rf = r$1.unstable_requestPaint, Sf = r$1.unstable_now, Tf = r$1.unstable_getCurrentPriorityLevel, Uf = r$1.unstable_ImmediatePriority, Vf = r$1.unstable_UserBlockingPriority, Wf = r$1.unstable_NormalPriority, Xf = r$1.unstable_LowPriority, Yf = r$1.unstable_IdlePriority, Zf = {}, $f = void 0 !== Rf ? Rf : function() {
}, ag = null, bg = null, cg = false, dg = Sf(), O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a) {
  switch (a) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a, b) {
  a = fg(a);
  return Nf(a, b);
}
function hg(a, b, c) {
  a = fg(a);
  return Of(a, b, c);
}
function ig() {
  if (null !== bg) {
    var a = bg;
    bg = null;
    Pf(a);
  }
  jg();
}
function jg() {
  if (!cg && null !== ag) {
    cg = true;
    var a = 0;
    try {
      var b = ag;
      gg(99, function() {
        for (; a < b.length; a++) {
          var c = b[a];
          do
            c = c(true);
          while (null !== c);
        }
      });
      ag = null;
    } catch (c) {
      throw null !== ag && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b) {
  if (a && a.defaultProps) {
    b = m({}, b);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b = mg.current;
  H(mg);
  a.type._context._currentValue = b;
}
function sg(a, b) {
  for (; null !== a; ) {
    var c = a.alternate;
    if ((a.childLanes & b) === b)
      if (null === c || (c.childLanes & b) === b)
        break;
      else
        c.childLanes |= b;
    else
      a.childLanes |= b, null !== c && (c.childLanes |= b);
    a = a.return;
  }
}
function tg(a, b) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (ug = true), a.firstContext = null);
}
function vg(a, b) {
  if (pg !== a && false !== b && 0 !== b) {
    if ("number" !== typeof b || 1073741823 === b)
      pg = a, b = 1073741823;
    b = { context: a, observedBits: b, next: null };
    if (null === og) {
      if (null === ng)
        throw Error(y(308));
      og = b;
      ng.dependencies = { lanes: 0, firstContext: b, responders: null };
    } else
      og = og.next = b;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function zg(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a, b) {
  a = a.updateQueue;
  if (null !== a) {
    a = a.shared;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
}
function Bg(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f ? e = f = g : f = f.next = g;
        c = c.next;
      } while (null !== c);
      null === f ? e = f = b : f = f.next = b;
    } else
      e = f = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function Cg(a, b, c, d) {
  var e = a.updateQueue;
  wg = false;
  var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f = l2 : g.next = l2;
    g = k2;
    var n2 = a.alternate;
    if (null !== n2) {
      n2 = n2.updateQueue;
      var A2 = n2.lastBaseUpdate;
      A2 !== g && (null === A2 ? n2.firstBaseUpdate = l2 : A2.next = l2, n2.lastBaseUpdate = k2);
    }
  }
  if (null !== f) {
    A2 = e.baseState;
    g = 0;
    n2 = l2 = k2 = null;
    do {
      h = f.lane;
      var p2 = f.eventTime;
      if ((d & h) === h) {
        null !== n2 && (n2 = n2.next = {
          eventTime: p2,
          lane: 0,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        });
        a: {
          var C2 = a, x2 = f;
          h = b;
          p2 = c;
          switch (x2.tag) {
            case 1:
              C2 = x2.payload;
              if ("function" === typeof C2) {
                A2 = C2.call(p2, A2, h);
                break a;
              }
              A2 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x2.payload;
              h = "function" === typeof C2 ? C2.call(p2, A2, h) : C2;
              if (null === h || void 0 === h)
                break a;
              A2 = m({}, A2, h);
              break a;
            case 2:
              wg = true;
          }
        }
        null !== f.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [f] : h.push(f));
      } else
        p2 = { eventTime: p2, lane: h, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, null === n2 ? (l2 = n2 = p2, k2 = A2) : n2 = n2.next = p2, g |= h;
      f = f.next;
      if (null === f)
        if (h = e.shared.pending, null === h)
          break;
        else
          f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
    } while (1);
    null === n2 && (k2 = A2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = n2;
    Dg |= g;
    a.lanes = g;
    a.memoizedState = A2;
  }
}
function Eg(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e)
          throw Error(y(191, e));
        e.call(d);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : m({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var Kg = { isMounted: function(a) {
  return (a = a._reactInternals) ? Zb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f = zg(d, e);
  f.payload = b;
  void 0 !== c && null !== c && (f.callback = c);
  Ag(a, f);
  Jg(a, e, d);
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f = zg(d, e);
  f.tag = 1;
  f.payload = b;
  void 0 !== c && null !== c && (f.callback = c);
  Ag(a, f);
  Jg(a, e, d);
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = Hg(), d = Ig(a), e = zg(c, d);
  e.tag = 2;
  void 0 !== b && null !== b && (e.callback = b);
  Ag(a, e);
  Jg(a, d, c);
} };
function Lg(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : true;
}
function Mg(a, b, c) {
  var d = false, e = Cf;
  var f = b.contextType;
  "object" === typeof f && null !== f ? f = vg(f) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Ef(a, e) : Cf);
  b = new b(c, f);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Kg;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}
function Ng(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
}
function Og(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Fg;
  xg(a);
  var f = b.contextType;
  "object" === typeof f && null !== f ? e.context = vg(f) : (f = Ff(b) ? Df : M.current, e.context = Ef(a, f));
  Cg(a, c, e, d);
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  "function" === typeof f && (Gg(a, b, f, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag)
          throw Error(y(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(y(147, a));
      var e = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e)
        return b.ref;
      b = function(a2) {
        var b2 = d.refs;
        b2 === Fg && (b2 = d.refs = {});
        null === a2 ? delete b2[e] : b2[e] = a2;
      };
      b._stringRef = e;
      return b;
    }
    if ("string" !== typeof a)
      throw Error(y(284));
    if (!c._owner)
      throw Error(y(290, a));
  }
  return a;
}
function Rg(a, b) {
  if ("textarea" !== a.type)
    throw Error(y(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
}
function Sg(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.lastEffect;
      null !== d2 ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
      c2.nextEffect = null;
      c2.flags = 8;
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; null !== d2; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
      null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Tg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return c2;
    d2 = b2.alternate;
    if (null !== d2)
      return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
    b2.flags = 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags = 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag)
      return b2 = Ug(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    if (null !== b2 && b2.elementType === c2.type)
      return d2 = e(b2, c2.props), d2.ref = Qg(a2, b2, c2), d2.return = a2, d2;
    d2 = Vg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Qg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = Wg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function n2(a2, b2, c2, d2, f2) {
    if (null === b2 || 7 !== b2.tag)
      return b2 = Xg(c2, a2.mode, d2, f2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function A2(a2, b2, c2) {
    if ("string" === typeof b2 || "number" === typeof b2)
      return b2 = Ug("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case sa:
          return c2 = Vg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Qg(a2, null, b2), c2.return = a2, c2;
        case ta:
          return b2 = Wg(b2, a2.mode, c2), b2.return = a2, b2;
      }
      if (Pg(b2) || La(b2))
        return b2 = Xg(
          b2,
          a2.mode,
          c2,
          null
        ), b2.return = a2, b2;
      Rg(a2, b2);
    }
    return null;
  }
  function p2(a2, b2, c2, d2) {
    var e2 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 || "number" === typeof c2)
      return null !== e2 ? null : h(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case sa:
          return c2.key === e2 ? c2.type === ua$1 ? n2(a2, b2, c2.props.children, d2, e2) : k2(a2, b2, c2, d2) : null;
        case ta:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
      }
      if (Pg(c2) || La(c2))
        return null !== e2 ? null : n2(a2, b2, c2, d2, null);
      Rg(a2, c2);
    }
    return null;
  }
  function C2(a2, b2, c2, d2, e2) {
    if ("string" === typeof d2 || "number" === typeof d2)
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case sa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, d2.type === ua$1 ? n2(b2, a2, d2.props.children, e2, d2.key) : k2(b2, a2, d2, e2);
        case ta:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
      }
      if (Pg(d2) || La(d2))
        return a2 = a2.get(c2) || null, n2(b2, a2, d2, e2, null);
      Rg(b2, d2);
    }
    return null;
  }
  function x2(e2, g2, h2, k3) {
    for (var l3 = null, t2 = null, u2 = g2, z2 = g2 = 0, q2 = null; null !== u2 && z2 < h2.length; z2++) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var n3 = p2(e2, u2, h2[z2], k3);
      if (null === n3) {
        null === u2 && (u2 = q2);
        break;
      }
      a && u2 && null === n3.alternate && b(e2, u2);
      g2 = f(n3, g2, z2);
      null === t2 ? l3 = n3 : t2.sibling = n3;
      t2 = n3;
      u2 = q2;
    }
    if (z2 === h2.length)
      return c(e2, u2), l3;
    if (null === u2) {
      for (; z2 < h2.length; z2++)
        u2 = A2(e2, h2[z2], k3), null !== u2 && (g2 = f(u2, g2, z2), null === t2 ? l3 = u2 : t2.sibling = u2, t2 = u2);
      return l3;
    }
    for (u2 = d(e2, u2); z2 < h2.length; z2++)
      q2 = C2(u2, e2, z2, h2[z2], k3), null !== q2 && (a && null !== q2.alternate && u2.delete(null === q2.key ? z2 : q2.key), g2 = f(q2, g2, z2), null === t2 ? l3 = q2 : t2.sibling = q2, t2 = q2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    return l3;
  }
  function w2(e2, g2, h2, k3) {
    var l3 = La(h2);
    if ("function" !== typeof l3)
      throw Error(y(150));
    h2 = l3.call(h2);
    if (null == h2)
      throw Error(y(151));
    for (var t2 = l3 = null, u2 = g2, z2 = g2 = 0, q2 = null, n3 = h2.next(); null !== u2 && !n3.done; z2++, n3 = h2.next()) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var w3 = p2(e2, u2, n3.value, k3);
      if (null === w3) {
        null === u2 && (u2 = q2);
        break;
      }
      a && u2 && null === w3.alternate && b(e2, u2);
      g2 = f(w3, g2, z2);
      null === t2 ? l3 = w3 : t2.sibling = w3;
      t2 = w3;
      u2 = q2;
    }
    if (n3.done)
      return c(e2, u2), l3;
    if (null === u2) {
      for (; !n3.done; z2++, n3 = h2.next())
        n3 = A2(e2, n3.value, k3), null !== n3 && (g2 = f(n3, g2, z2), null === t2 ? l3 = n3 : t2.sibling = n3, t2 = n3);
      return l3;
    }
    for (u2 = d(e2, u2); !n3.done; z2++, n3 = h2.next())
      n3 = C2(u2, e2, z2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && u2.delete(null === n3.key ? z2 : n3.key), g2 = f(n3, g2, z2), null === t2 ? l3 = n3 : t2.sibling = n3, t2 = n3);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    return l3;
  }
  return function(a2, d2, f2, h2) {
    var k3 = "object" === typeof f2 && null !== f2 && f2.type === ua$1 && null === f2.key;
    k3 && (f2 = f2.props.children);
    var l3 = "object" === typeof f2 && null !== f2;
    if (l3)
      switch (f2.$$typeof) {
        case sa:
          a: {
            l3 = f2.key;
            for (k3 = d2; null !== k3; ) {
              if (k3.key === l3) {
                switch (k3.tag) {
                  case 7:
                    if (f2.type === ua$1) {
                      c(a2, k3.sibling);
                      d2 = e(k3, f2.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    break;
                  default:
                    if (k3.elementType === f2.type) {
                      c(a2, k3.sibling);
                      d2 = e(k3, f2.props);
                      d2.ref = Qg(a2, k3, f2);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                }
                c(a2, k3);
                break;
              } else
                b(a2, k3);
              k3 = k3.sibling;
            }
            f2.type === ua$1 ? (d2 = Xg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Vg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Qg(a2, d2, f2), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case ta:
          a: {
            for (k3 = f2.key; null !== d2; ) {
              if (d2.key === k3)
                if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Wg(f2, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
      }
    if ("string" === typeof f2 || "number" === typeof f2)
      return f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Ug(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2);
    if (Pg(f2))
      return x2(a2, d2, f2, h2);
    if (La(f2))
      return w2(a2, d2, f2, h2);
    l3 && Rg(a2, f2);
    if ("undefined" === typeof f2 && !k3)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a2.type) || "Component"));
      }
    return c(a2, d2);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y(174));
  return a;
}
function eh(a, b) {
  I(ch, b);
  I(bh, a);
  I(ah, $g);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
  }
  H(ah);
  I(ah, b);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a) {
  dh(ch.current);
  var b = dh(ah.current);
  var c = mb(b, a.type);
  b !== c && (I(bh, a), I(ah, c));
}
function hh(a) {
  bh.current === a && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
        return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 64))
        return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a, b) {
  var c = nh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.flags = 8;
  null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}
function oh(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b = kh;
    if (b) {
      var c = b;
      if (!oh(a, b)) {
        b = rf(c.nextSibling);
        if (!b || !oh(a, b)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c);
      }
      jh = a;
      kh = rf(b.firstChild);
    } else
      a.flags = a.flags & -1025 | 2, lh = false, jh = a;
  }
}
function qh(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  jh = a;
}
function rh(a) {
  if (a !== jh)
    return false;
  if (!lh)
    return qh(a), lh = true, false;
  var b = a.type;
  if (5 !== a.tag || "head" !== b && "body" !== b && !nf(b, a.memoizedProps))
    for (b = kh; b; )
      mh(a, b), b = rf(b.nextSibling);
  qh(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(y(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              kh = rf(a.nextSibling);
              break a;
            }
            b--;
          } else
            "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a = 0; a < th.length; a++)
    th[a]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R = null, S = null, T = null, yh = false, zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a, b) {
  if (null === b)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Ch(a, b, c, d, e, f) {
  xh = f;
  R = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  vh.current = null === a || null === a.memoizedState ? Dh : Eh;
  a = c(d, e);
  if (zh) {
    f = 0;
    do {
      zh = false;
      if (!(25 > f))
        throw Error(y(301));
      f += 1;
      T = S = null;
      b.updateQueue = null;
      vh.current = Fh;
      a = c(d, e);
    } while (zh);
  }
  vh.current = Gh;
  b = null !== S && null !== S.next;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b)
    throw Error(y(300));
  return a;
}
function Hh() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === T ? R.memoizedState = T = a : T = T.next = a;
  return T;
}
function Ih() {
  if (null === S) {
    var a = R.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = S.next;
  var b = null === T ? R.memoizedState : T.next;
  if (null !== b)
    T = b, S = a;
  else {
    if (null === a)
      throw Error(y(310));
    S = a;
    a = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
    null === T ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function Kh(a) {
  var b = Ih(), c = b.queue;
  if (null === c)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = S, e = d.baseQueue, f = c.pending;
  if (null !== f) {
    if (null !== e) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }
    d.baseQueue = e = f;
    c.pending = null;
  }
  if (null !== e) {
    e = e.next;
    d = d.baseState;
    var h = g = f = null, k2 = e;
    do {
      var l2 = k2.lane;
      if ((xh & l2) === l2)
        null !== h && (h = h.next = { lane: 0, action: k2.action, eagerReducer: k2.eagerReducer, eagerState: k2.eagerState, next: null }), d = k2.eagerReducer === a ? k2.eagerState : a(d, k2.action);
      else {
        var n2 = {
          lane: l2,
          action: k2.action,
          eagerReducer: k2.eagerReducer,
          eagerState: k2.eagerState,
          next: null
        };
        null === h ? (g = h = n2, f = d) : h = h.next = n2;
        R.lanes |= l2;
        Dg |= l2;
      }
      k2 = k2.next;
    } while (null !== k2 && k2 !== e);
    null === h ? f = d : h.next = g;
    He(d, b.memoizedState) || (ug = true);
    b.memoizedState = d;
    b.baseState = f;
    b.baseQueue = h;
    c.lastRenderedState = d;
  }
  return [b.memoizedState, c.dispatch];
}
function Lh(a) {
  var b = Ih(), c = b.queue;
  if (null === c)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f = a(f, g.action), g = g.next;
    while (g !== e);
    He(f, b.memoizedState) || (ug = true);
    b.memoizedState = f;
    null === b.baseQueue && (b.baseState = f);
    c.lastRenderedState = f;
  }
  return [f, d];
}
function Mh(a, b, c) {
  var d = b._getVersion;
  d = d(b._source);
  var e = b._workInProgressVersionPrimary;
  if (null !== e)
    a = e === d;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b._workInProgressVersionPrimary = d, th.push(b);
  if (a)
    return c(b._source);
  th.push(b);
  throw Error(y(350));
}
function Nh(a, b, c, d) {
  var e = U;
  if (null === e)
    throw Error(y(349));
  var f = b._getVersion, g = f(b._source), h = vh.current, k2 = h.useState(function() {
    return Mh(e, b, c);
  }), l2 = k2[1], n2 = k2[0];
  k2 = T;
  var A2 = a.memoizedState, p2 = A2.refs, C2 = p2.getSnapshot, x2 = A2.source;
  A2 = A2.subscribe;
  var w2 = R;
  a.memoizedState = { refs: p2, source: b, subscribe: d };
  h.useEffect(function() {
    p2.getSnapshot = c;
    p2.setSnapshot = l2;
    var a2 = f(b._source);
    if (!He(g, a2)) {
      a2 = c(b._source);
      He(n2, a2) || (l2(a2), a2 = Ig(w2), e.mutableReadLanes |= a2 & e.pendingLanes);
      a2 = e.mutableReadLanes;
      e.entangledLanes |= a2;
      for (var d2 = e.entanglements, h2 = a2; 0 < h2; ) {
        var k3 = 31 - Vc(h2), v2 = 1 << k3;
        d2[k3] |= a2;
        h2 &= ~v2;
      }
    }
  }, [c, b, d]);
  h.useEffect(function() {
    return d(b._source, function() {
      var a2 = p2.getSnapshot, c2 = p2.setSnapshot;
      try {
        c2(a2(b._source));
        var d2 = Ig(w2);
        e.mutableReadLanes |= d2 & e.pendingLanes;
      } catch (q2) {
        c2(function() {
          throw q2;
        });
      }
    });
  }, [b, d]);
  He(C2, c) && He(x2, b) && He(A2, d) || (a = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a.dispatch = l2 = Oh.bind(null, R, a), k2.queue = a, k2.baseQueue = null, n2 = Mh(e, b, c), k2.memoizedState = k2.baseState = n2);
  return n2;
}
function Ph(a, b, c) {
  var d = Ih();
  return Nh(d, a, b, c);
}
function Qh(a) {
  var b = Hh();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a };
  a = a.dispatch = Oh.bind(null, R, a);
  return [b.memoizedState, a];
}
function Rh(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = R.updateQueue;
  null === b ? (b = { lastEffect: null }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function Sh(a) {
  var b = Hh();
  a = { current: a };
  return b.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b, c, d) {
  var e = Hh();
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, void 0, void 0 === d ? null : d);
}
function Vh(a, b, c, d) {
  var e = Ih();
  d = void 0 === d ? null : d;
  var f = void 0;
  if (null !== S) {
    var g = S.memoizedState;
    f = g.destroy;
    if (null !== d && Bh(d, g.deps)) {
      Rh(b, c, f, d);
      return;
    }
  }
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, f, d);
}
function Wh(a, b) {
  return Uh(516, 4, a, b);
}
function Xh(a, b) {
  return Vh(516, 4, a, b);
}
function Yh(a, b) {
  return Vh(4, 2, a, b);
}
function Zh(a, b) {
  if ("function" === typeof b)
    return a = a(), b(a), function() {
      b(null);
    };
  if (null !== b && void 0 !== b)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function $h(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b, a), c);
}
function ai() {
}
function bi(a, b) {
  var c = Ih();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Bh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ci(a, b) {
  var c = Ih();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Bh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function di(a, b) {
  var c = eg();
  gg(98 > c ? 98 : c, function() {
    a(true);
  });
  gg(97 < c ? 97 : c, function() {
    var c2 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b();
    } finally {
      wh.transition = c2;
    }
  });
}
function Oh(a, b, c) {
  var d = Hg(), e = Ig(a), f = { lane: e, action: c, eagerReducer: null, eagerState: null, next: null }, g = b.pending;
  null === g ? f.next = f : (f.next = g.next, g.next = f);
  b.pending = f;
  g = a.alternate;
  if (a === R || null !== g && g === R)
    zh = yh = true;
  else {
    if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g))
      try {
        var h = b.lastRenderedState, k2 = g(h, c);
        f.eagerReducer = g;
        f.eagerState = k2;
        if (He(k2, h))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a, e, d);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a, b) {
  Hh().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return Uh(4, 2, Zh.bind(
    null,
    b,
    a
  ), c);
}, useLayoutEffect: function(a, b) {
  return Uh(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Hh();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Hh();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  a = a.dispatch = Oh.bind(null, R, a);
  return [d.memoizedState, a];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Qh(a), c = b[0], d = b[1];
  Wh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Qh(false), b = a[0];
  a = di.bind(null, a[1]);
  Sh(a);
  return [a, b];
}, useMutableSource: function(a, b, c) {
  var d = Hh();
  d.memoizedState = { refs: { getSnapshot: b, setSnapshot: null }, source: a, subscribe: c };
  return Nh(d, a, b, c);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a = false, b = uf(function() {
      a || (a = true, c("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c = Qh(b)[1];
    0 === (R.mode & 2) && (R.flags |= 516, Rh(
      5,
      function() {
        c("r:" + (tf++).toString(36));
      },
      void 0,
      null
    ));
    return b;
  }
  b = "r:" + (tf++).toString(36);
  Qh(b);
  return b;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Kh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Kh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false }, Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Lh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Lh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a, b, c, d) {
  b.child = null === a ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
}
function gi(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  tg(b, e);
  d = Ch(a, b, c, d, f, e);
  if (null !== a && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, d, e);
  return b.child;
}
function ii(a, b, c, d, e, f) {
  if (null === a) {
    var g = c.type;
    if ("function" === typeof g && !ji(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps)
      return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
    a = Vg(c.type, null, d, b, b.mode, f);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  g = a.child;
  if (0 === (e & f) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Je, c(e, d) && a.ref === b.ref))
    return hi(a, b, f);
  b.flags |= 1;
  a = Tg(g, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function ki(a, b, c, d, e, f) {
  if (null !== a && Je(a.memoizedProps, d) && a.ref === b.ref)
    if (ug = false, 0 !== (f & e))
      0 !== (a.flags & 16384) && (ug = true);
    else
      return b.lanes = a.lanes, hi(a, b, f);
  return li(a, b, c, d, f);
}
function mi(a, b, c) {
  var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode)
    if (0 === (b.mode & 4))
      b.memoizedState = { baseLanes: 0 }, ni(b, c);
    else if (0 !== (c & 1073741824))
      b.memoizedState = { baseLanes: 0 }, ni(b, null !== f ? f.baseLanes : c);
    else
      return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a }, ni(b, a), null;
  else
    null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
  fi(a, b, e, c);
  return b.child;
}
function oi(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c)
    b.flags |= 128;
}
function li(a, b, c, d, e) {
  var f = Ff(c) ? Df : M.current;
  f = Ef(b, f);
  tg(b, e);
  c = Ch(a, b, c, d, f, e);
  if (null !== a && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, c, e);
  return b.child;
}
function pi(a, b, c, d, e) {
  if (Ff(c)) {
    var f = true;
    Jf(b);
  } else
    f = false;
  tg(b, e);
  if (null === b.stateNode)
    null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = true;
  else if (null === a) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = vg(l2) : (l2 = Ff(c) ? Df : M.current, l2 = Ef(b, l2));
    var n2 = c.getDerivedStateFromProps, A2 = "function" === typeof n2 || "function" === typeof g.getSnapshotBeforeUpdate;
    A2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Ng(b, g, d, l2);
    wg = false;
    var p2 = b.memoizedState;
    g.state = p2;
    Cg(b, d, g, e);
    k2 = b.memoizedState;
    h !== d || p2 !== k2 || N.current || wg ? ("function" === typeof n2 && (Gg(b, c, n2, d), k2 = b.memoizedState), (h = wg || Lg(b, c, h, d, p2, k2, l2)) ? (A2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = false);
  } else {
    g = b.stateNode;
    yg(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : lg(b.type, h);
    g.props = l2;
    A2 = b.pendingProps;
    p2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = vg(k2) : (k2 = Ff(c) ? Df : M.current, k2 = Ef(b, k2));
    var C2 = c.getDerivedStateFromProps;
    (n2 = "function" === typeof C2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== A2 || p2 !== k2) && Ng(b, g, d, k2);
    wg = false;
    p2 = b.memoizedState;
    g.state = p2;
    Cg(b, d, g, e);
    var x2 = b.memoizedState;
    h !== A2 || p2 !== x2 || N.current || wg ? ("function" === typeof C2 && (Gg(b, c, C2, d), x2 = b.memoizedState), (l2 = wg || Lg(b, c, l2, d, p2, x2, k2)) ? (n2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(
      d,
      x2,
      k2
    ), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x2), g.props = d, g.state = x2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 256), d = false);
  }
  return qi(a, b, c, d, f, e);
}
function qi(a, b, c, d, e, f) {
  oi(a, b);
  var g = 0 !== (b.flags & 64);
  if (!d && !g)
    return e && Kf(b, c, false), hi(a, b, f);
  d = b.stateNode;
  ei.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
  b.memoizedState = d.state;
  e && Kf(b, c, true);
  return b.child;
}
function ri(a) {
  var b = a.stateNode;
  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, false);
  eh(a, b.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a, b, c) {
  var d = b.pendingProps, e = P.current, f = false, g;
  (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  g ? (f = true, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || true === d.unstable_avoidThisFallback || (e |= 1);
  I(P, e & 1);
  if (null === a) {
    void 0 !== d.fallback && ph(b);
    a = d.children;
    e = d.fallback;
    if (f)
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, a;
    if ("number" === typeof d.unstable_expectedLoadTime)
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, b.lanes = 33554432, a;
    c = vi({ mode: "visible", children: a }, b.mode, c, null);
    c.return = b;
    return b.child = c;
  }
  if (null !== a.memoizedState) {
    if (f)
      return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
    c = xi(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  if (f)
    return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
  c = xi(a, b, d.children, c);
  b.memoizedState = null;
  return c;
}
function ui(a, b, c, d) {
  var e = a.mode, f = a.child;
  b = { mode: "hidden", children: b };
  0 === (e & 2) && null !== f ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
  c = Xg(c, e, d, null);
  f.return = a;
  c.return = a;
  f.sibling = c;
  a.child = f;
  return c;
}
function xi(a, b, c, d) {
  var e = a.child;
  a = e.sibling;
  c = Tg(e, { mode: "visible", children: c });
  0 === (b.mode & 2) && (c.lanes = d);
  c.return = b;
  c.sibling = null;
  null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
  return b.child = c;
}
function wi(a, b, c, d, e) {
  var f = b.mode, g = a.child;
  a = g.sibling;
  var h = { mode: "hidden", children: c };
  0 === (f & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
  null !== a ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
  d.return = b;
  c.return = b;
  c.sibling = d;
  b.child = c;
  return d;
}
function yi(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  sg(a.return, b);
}
function zi(a, b, c, d, e, f) {
  var g = a.memoizedState;
  null === g ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e, lastEffect: f } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
}
function Ai(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f = d.tail;
  fi(a, b, d.children, c);
  d = P.current;
  if (0 !== (d & 2))
    d = d & 1 | 2, b.flags |= 64;
  else {
    if (null !== a && 0 !== (a.flags & 64))
      a:
        for (a = b.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && yi(a, c);
          else if (19 === a.tag)
            yi(a, c);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  I(P, d);
  if (0 === (b.mode & 2))
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; )
          a = c.alternate, null !== a && null === ih(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        zi(b, false, e, c, f, b.lastEffect);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === ih(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        zi(b, true, c, null, f, b.lastEffect);
        break;
      case "together":
        zi(b, false, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function hi(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  Dg |= b.lanes;
  if (0 !== (c & b.childLanes)) {
    if (null !== a && b.child !== a.child)
      throw Error(y(153));
    if (null !== b.child) {
      a = b.child;
      c = Tg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; null !== a.sibling; )
        a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag)
      a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Ci = function() {
};
Di = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    dh(ah.current);
    var f = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f = [];
        break;
      case "option":
        e = eb(a, e);
        d = eb(a, d);
        f = [];
        break;
      case "select":
        e = m({}, e, { value: void 0 });
        d = m({}, d, { value: void 0 });
        f = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = jf);
    }
    vb(c, d);
    var g;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
        if ("style" === l2) {
          var h = e[l2];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ca.hasOwnProperty(l2) ? f || (f = []) : (f = f || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h))
        if ("style" === l2)
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k2)
              k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
          } else
            c || (f || (f = []), f.push(l2, c)), c = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f = f || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f = f || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ca.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && G("scroll", a), f || h === k2 || (f = [])) : "object" === typeof k2 && null !== k2 && k2.$$typeof === Ga ? k2.toString() : (f = f || []).push(l2, k2));
    }
    c && (f = f || []).push(
      "style",
      c
    );
    var l2 = f;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Ei = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Fi(a, b) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; )
          null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function Gi(a, b, c) {
  var d = b.pendingProps;
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d = b.stateNode;
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child)
        rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
      Ci(b);
      return null;
    case 5:
      hh(b);
      var e = dh(ch.current);
      c = b.type;
      if (null !== a && null != b.stateNode)
        Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
      else {
        if (!d) {
          if (null === b.stateNode)
            throw Error(y(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b)) {
          d = b.stateNode;
          c = b.type;
          var f = b.memoizedProps;
          d[wf] = b;
          d[xf] = f;
          switch (c) {
            case "dialog":
              G("cancel", d);
              G("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G(Xe[a], d);
              break;
            case "source":
              G("error", d);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d);
              G("load", d);
              break;
            case "details":
              G("toggle", d);
              break;
            case "input":
              Za(d, f);
              G("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f.multiple };
              G("invalid", d);
              break;
            case "textarea":
              hb(d, f), G("invalid", d);
          }
          vb(c, f);
          a = null;
          for (var g in f)
            f.hasOwnProperty(g) && (e = f[g], "children" === g ? "string" === typeof e ? d.textContent !== e && (a = ["children", e]) : "number" === typeof e && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && null != e && "onScroll" === g && G("scroll", d));
          switch (c) {
            case "input":
              Va(d);
              cb(d, f, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f.onClick && (d.onclick = jf);
          }
          d = a;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          a === kb.html && (a = lb(c));
          a === kb.html ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[wf] = b;
          a[xf] = d;
          Bi(a, b, false, false);
          b.stateNode = a;
          g = wb(c, d);
          switch (c) {
            case "dialog":
              G("cancel", a);
              G("close", a);
              e = d;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a);
              e = d;
              break;
            case "video":
            case "audio":
              for (e = 0; e < Xe.length; e++)
                G(Xe[e], a);
              e = d;
              break;
            case "source":
              G("error", a);
              e = d;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a);
              G("load", a);
              e = d;
              break;
            case "details":
              G("toggle", a);
              e = d;
              break;
            case "input":
              Za(a, d);
              e = Ya(a, d);
              G("invalid", a);
              break;
            case "option":
              e = eb(a, d);
              break;
            case "select":
              a._wrapperState = { wasMultiple: !!d.multiple };
              e = m({}, d, { value: void 0 });
              G("invalid", a);
              break;
            case "textarea":
              hb(a, d);
              e = gb(a, d);
              G("invalid", a);
              break;
            default:
              e = d;
          }
          vb(c, e);
          var h = e;
          for (f in h)
            if (h.hasOwnProperty(f)) {
              var k2 = h[f];
              "style" === f ? tb(a, k2) : "dangerouslySetInnerHTML" === f ? (k2 = k2 ? k2.__html : void 0, null != k2 && ob(a, k2)) : "children" === f ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && pb(a, k2) : "number" === typeof k2 && pb(a, "" + k2) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ca.hasOwnProperty(f) ? null != k2 && "onScroll" === f && G("scroll", a) : null != k2 && qa(a, f, k2, g));
            }
          switch (c) {
            case "input":
              Va(a);
              cb(a, d, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              null != d.value && a.setAttribute("value", "" + Sa(d.value));
              break;
            case "select":
              a.multiple = !!d.multiple;
              f = d.value;
              null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, true);
              break;
            default:
              "function" === typeof e.onClick && (a.onclick = jf);
          }
          mf(c, d) && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 128);
      }
      return null;
    case 6:
      if (a && null != b.stateNode)
        Ei(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode)
          throw Error(y(166));
        c = dh(ch.current);
        dh(ah.current);
        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
      }
      return null;
    case 13:
      H(P);
      d = b.memoizedState;
      if (0 !== (b.flags & 64))
        return b.lanes = c, b;
      d = null !== d;
      c = false;
      null === a ? void 0 !== b.memoizedProps.fallback && rh(b) : c = null !== a.memoizedState;
      if (d && !c && 0 !== (b.mode & 2))
        if (null === a && true !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (P.current & 1))
          0 === V && (V = 3);
        else {
          if (0 === V || 3 === V)
            V = 4;
          null === U || 0 === (Dg & 134217727) && 0 === (Hi & 134217727) || Ii(U, W);
        }
      if (d || c)
        b.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b), null === a && cf(b.stateNode.containerInfo), null;
    case 10:
      return rg(b), null;
    case 17:
      return Ff(b.type) && Gf(), null;
    case 19:
      H(P);
      d = b.memoizedState;
      if (null === d)
        return null;
      f = 0 !== (b.flags & 64);
      g = d.rendering;
      if (null === g)
        if (f)
          Fi(d, false);
        else {
          if (0 !== V || null !== a && 0 !== (a.flags & 64))
            for (a = b.child; null !== a; ) {
              g = ih(a);
              if (null !== g) {
                b.flags |= 64;
                Fi(d, false);
                f = g.updateQueue;
                null !== f && (b.updateQueue = f, b.flags |= 4);
                null === d.lastEffect && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                d = c;
                for (c = b.child; null !== c; )
                  f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                I(P, P.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          null !== d.tail && O() > Ji && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
        }
      else {
        if (!f)
          if (a = ih(g), null !== a) {
            if (b.flags |= 64, f = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Fi(d, true), null === d.tail && "hidden" === d.tailMode && !g.alternate && !lh)
              return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
          } else
            2 * O() - d.renderingStartTime > Ji && 1073741824 !== c && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
        d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, null !== c ? c.sibling = g : b.child = g, d.last = g);
      }
      return null !== d.tail ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f ? b & 1 | 2 : b & 1), c) : null;
    case 23:
    case 24:
      return Ki(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null;
  }
  throw Error(y(156, b.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b = a.flags;
      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b = a.flags;
      if (0 !== (b & 64))
        throw Error(y(285));
      a.flags = b & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a, b) {
  try {
    var c = "", d = b;
    do
      c += Qa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f) {
    e = "\nError generating stack: " + f.message + "\n" + f.stack;
  }
  return { value: a, source: b, stack: e };
}
function Ni(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Oi = "function" === typeof WeakMap ? WeakMap : Map;
function Pi(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Qi || (Qi = true, Ri = d);
    Ni(a, b);
  };
  return c;
}
function Si(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function() {
      Ni(a, b);
      return d(e);
    };
  }
  var f = a.stateNode;
  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
    "function" !== typeof d && (null === Ti ? Ti = /* @__PURE__ */ new Set([this]) : Ti.add(this), Ni(a, b));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
var Ui = "function" === typeof WeakSet ? WeakSet : Set;
function Vi(a) {
  var b = a.ref;
  if (null !== b)
    if ("function" === typeof b)
      try {
        b(null);
      } catch (c) {
        Wi(a, c);
      }
    else
      b.current = null;
}
function Xi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b.flags & 256 && null !== a) {
        var c = a.memoizedProps, d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }
      return;
    case 3:
      b.flags & 256 && qf(b.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a, b, c) {
  switch (c.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b = c.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        a = b = b.next;
        do {
          if (3 === (a.tag & 3)) {
            var d = a.create;
            a.destroy = d();
          }
          a = a.next;
        } while (a !== b);
      }
      b = c.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        a = b = b.next;
        do {
          var e = a;
          d = e.next;
          e = e.tag;
          0 !== (e & 4) && 0 !== (e & 1) && (Zi(c, a), $i(c, a));
          a = d;
        } while (a !== b);
      }
      return;
    case 1:
      a = c.stateNode;
      c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(
        d,
        b.memoizedState,
        a.__reactInternalSnapshotBeforeUpdate
      )));
      b = c.updateQueue;
      null !== b && Eg(c, b, a);
      return;
    case 3:
      b = c.updateQueue;
      if (null !== b) {
        a = null;
        if (null !== c.child)
          switch (c.child.tag) {
            case 5:
              a = c.child.stateNode;
              break;
            case 1:
              a = c.child.stateNode;
          }
        Eg(c, b, a);
      }
      return;
    case 5:
      a = c.stateNode;
      null === b && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Cc(c))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a, b) {
  for (var c = a; ; ) {
    if (5 === c.tag) {
      var d = c.stateNode;
      if (b)
        d = d.style, "function" === typeof d.setProperty ? d.setProperty("display", "none", "important") : d.display = "none";
      else {
        d = c.stateNode;
        var e = c.memoizedProps.style;
        e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null;
        d.style.display = sb("display", e);
      }
    } else if (6 === c.tag)
      c.stateNode.nodeValue = b ? "" : c.memoizedProps;
    else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === a)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === a)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function bj(a, b) {
  if (Mf && "function" === typeof Mf.onCommitFiberUnmount)
    try {
      Mf.onCommitFiberUnmount(Lf, b);
    } catch (f) {
    }
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b.updateQueue;
      if (null !== a && (a = a.lastEffect, null !== a)) {
        var c = a = a.next;
        do {
          var d = c, e = d.destroy;
          d = d.tag;
          if (void 0 !== e)
            if (0 !== (d & 4))
              Zi(b, c);
            else {
              d = b;
              try {
                e();
              } catch (f) {
                Wi(d, f);
              }
            }
          c = c.next;
        } while (c !== a);
      }
      break;
    case 1:
      Vi(b);
      a = b.stateNode;
      if ("function" === typeof a.componentWillUnmount)
        try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f) {
          Wi(
            b,
            f
          );
        }
      break;
    case 5:
      Vi(b);
      break;
    case 4:
      cj(a, b);
  }
}
function dj(a) {
  a.alternate = null;
  a.child = null;
  a.dependencies = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.return = null;
  a.updateQueue = null;
}
function ej(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function fj(a) {
  a: {
    for (var b = a.return; null !== b; ) {
      if (ej(b))
        break a;
      b = b.return;
    }
    throw Error(y(160));
  }
  var c = b;
  b = c.stateNode;
  switch (c.tag) {
    case 5:
      var d = false;
      break;
    case 3:
      b = b.containerInfo;
      d = true;
      break;
    case 4:
      b = b.containerInfo;
      d = true;
      break;
    default:
      throw Error(y(161));
  }
  c.flags & 16 && (pb(b, ""), c.flags &= -17);
  a:
    b:
      for (c = a; ; ) {
        for (; null === c.sibling; ) {
          if (null === c.return || ej(c.return)) {
            c = null;
            break a;
          }
          c = c.return;
        }
        c.sibling.return = c.return;
        for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag; ) {
          if (c.flags & 2)
            continue b;
          if (null === c.child || 4 === c.tag)
            continue b;
          else
            c.child.return = c, c = c.child;
        }
        if (!(c.flags & 2)) {
          c = c.stateNode;
          break a;
        }
      }
  d ? gj(a, c, b) : hj(a, c, b);
}
function gj(a, b, c) {
  var d = a.tag, e = 5 === d || 6 === d;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = jf));
  else if (4 !== d && (a = a.child, null !== a))
    for (gj(a, b, c), a = a.sibling; null !== a; )
      gj(a, b, c), a = a.sibling;
}
function hj(a, b, c) {
  var d = a.tag, e = 5 === d || 6 === d;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a))
    for (hj(a, b, c), a = a.sibling; null !== a; )
      hj(a, b, c), a = a.sibling;
}
function cj(a, b) {
  for (var c = b, d = false, e, f; ; ) {
    if (!d) {
      d = c.return;
      a:
        for (; ; ) {
          if (null === d)
            throw Error(y(160));
          e = d.stateNode;
          switch (d.tag) {
            case 5:
              f = false;
              break a;
            case 3:
              e = e.containerInfo;
              f = true;
              break a;
            case 4:
              e = e.containerInfo;
              f = true;
              break a;
          }
          d = d.return;
        }
      d = true;
    }
    if (5 === c.tag || 6 === c.tag) {
      a:
        for (var g = a, h = c, k2 = h; ; )
          if (bj(g, k2), null !== k2.child && 4 !== k2.tag)
            k2.child.return = k2, k2 = k2.child;
          else {
            if (k2 === h)
              break a;
            for (; null === k2.sibling; ) {
              if (null === k2.return || k2.return === h)
                break a;
              k2 = k2.return;
            }
            k2.sibling.return = k2.return;
            k2 = k2.sibling;
          }
      f ? (g = e, h = c.stateNode, 8 === g.nodeType ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
    } else if (4 === c.tag) {
      if (null !== c.child) {
        e = c.stateNode.containerInfo;
        f = true;
        c.child.return = c;
        c = c.child;
        continue;
      }
    } else if (bj(a, c), null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b)
        return;
      c = c.return;
      4 === c.tag && (d = false);
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function ij(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c = b.updateQueue;
      c = null !== c ? c.lastEffect : null;
      if (null !== c) {
        var d = c = c.next;
        do
          3 === (d.tag & 3) && (a = d.destroy, d.destroy = void 0, void 0 !== a && a()), d = d.next;
        while (d !== c);
      }
      return;
    case 1:
      return;
    case 5:
      c = b.stateNode;
      if (null != c) {
        d = b.memoizedProps;
        var e = null !== a ? a.memoizedProps : d;
        a = b.type;
        var f = b.updateQueue;
        b.updateQueue = null;
        if (null !== f) {
          c[xf] = d;
          "input" === a && "radio" === d.type && null != d.name && $a(c, d);
          wb(a, e);
          b = wb(a, d);
          for (e = 0; e < f.length; e += 2) {
            var g = f[e], h = f[e + 1];
            "style" === g ? tb(c, h) : "dangerouslySetInnerHTML" === g ? ob(c, h) : "children" === g ? pb(c, h) : qa(c, g, h, b);
          }
          switch (a) {
            case "input":
              ab(c, d);
              break;
            case "textarea":
              ib(c, d);
              break;
            case "select":
              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, null != f ? fb(c, !!d.multiple, f, false) : a !== !!d.multiple && (null != d.defaultValue ? fb(c, !!d.multiple, d.defaultValue, true) : fb(c, !!d.multiple, d.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (null === b.stateNode)
        throw Error(y(162));
      b.stateNode.nodeValue = b.memoizedProps;
      return;
    case 3:
      c = b.stateNode;
      c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
      return;
    case 12:
      return;
    case 13:
      null !== b.memoizedState && (jj = O(), aj(b.child, true));
      kj(b);
      return;
    case 19:
      kj(b);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b, null !== b.memoizedState);
      return;
  }
  throw Error(y(163));
}
function kj(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Ui());
    b.forEach(function(b2) {
      var d = lj.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function mj(a, b) {
  return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : false;
}
var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X = 0, U = null, Y = null, W = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null, Qi = false, Ri = null, Ti = null, xj = false, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = false;
function Hg() {
  return 0 !== (X & 48) ? O() : -1 !== Fj ? Fj : Fj = O();
}
function Ig(a) {
  a = a.mode;
  if (0 === (a & 2))
    return 1;
  if (0 === (a & 4))
    return 99 === eg() ? 1 : 2;
  0 === Gj && (Gj = tj);
  if (0 !== kg.transition) {
    0 !== Hj && (Hj = null !== vj ? vj.pendingLanes : 0);
    a = Gj;
    var b = 4186112 & ~Hj;
    b &= -b;
    0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
    return b;
  }
  a = eg();
  0 !== (X & 4) && 98 === a ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b, c) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a = Kj(a, b);
  if (null === a)
    return null;
  $c(a, b, c);
  a === U && (Hi |= b, 4 === V && Ii(a, W));
  var d = eg();
  1 === b ? 0 !== (X & 8) && 0 === (X & 48) ? Lj(a) : (Mj(a, c), 0 === X && (wj(), ig())) : (0 === (X & 4) || 98 !== d && 99 !== d || (null === Cj ? Cj = /* @__PURE__ */ new Set([a]) : Cj.add(a)), Mj(a, c));
  vj = a;
}
function Kj(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
function Mj(a, b) {
  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g; ) {
    var h = 31 - Vc(g), k2 = 1 << h, l2 = f[h];
    if (-1 === l2) {
      if (0 === (k2 & d) || 0 !== (k2 & e)) {
        l2 = b;
        Rc(k2);
        var n2 = F;
        f[h] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b && (a.expiredLanes |= k2);
    g &= ~k2;
  }
  d = Uc(a, a === U ? W : 0);
  b = F;
  if (0 === d)
    null !== c && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (null !== c) {
      if (a.callbackPriority === b)
        return;
      c !== Zf && Pf(c);
    }
    15 === b ? (c = Lj.bind(null, a), null === ag ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : 14 === b ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if (0 !== (X & 48))
    throw Error(y(327));
  var b = a.callbackNode;
  if (Oj() && a.callbackNode !== b)
    return null;
  var c = Uc(a, a === U ? W : 0);
  if (0 === c)
    return null;
  var d = c;
  var e = X;
  X |= 16;
  var f = Pj();
  if (U !== a || W !== d)
    wj(), Qj(a, d);
  do
    try {
      Rj();
      break;
    } catch (h) {
      Sj(a, h);
    }
  while (1);
  qg();
  oj.current = f;
  X = e;
  null !== Y ? d = 0 : (U = null, W = 0, d = V);
  if (0 !== (tj & Hi))
    Qj(a, 0);
  else if (0 !== d) {
    2 === d && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c = Wc(a), 0 !== c && (d = Tj(a, c)));
    if (1 === d)
      throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c;
    switch (d) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c);
        if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
          if (0 !== Uc(a, 0))
            break;
          e = a.suspendedLanes;
          if ((e & c) !== c) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c);
        if ((c & 4186112) === c)
          break;
        d = a.eventTimes;
        for (e = -1; 0 < c; ) {
          var g = 31 - Vc(c);
          f = 1 << g;
          g = d[g];
          g > e && (e = g);
          c &= ~f;
        }
        c = e;
        c = O() - c;
        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
        if (10 < c) {
          a.timeoutHandle = of(Uj.bind(null, a), c);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b ? Nj.bind(null, a) : null;
}
function Ii(a, b) {
  b &= ~uj;
  b &= ~Hi;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - Vc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Lj(a) {
  if (0 !== (X & 48))
    throw Error(y(327));
  Oj();
  if (a === U && 0 !== (a.expiredLanes & W)) {
    var b = W;
    var c = Tj(a, b);
    0 !== (tj & Hi) && (b = Uc(a, b), c = Tj(a, b));
  } else
    b = Uc(a, 0), c = Tj(a, b);
  0 !== a.tag && 2 === c && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b = Wc(a), 0 !== b && (c = Tj(a, b)));
  if (1 === c)
    throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Uj(a);
  Mj(a, O());
  return null;
}
function Vj() {
  if (null !== Cj) {
    var a = Cj;
    Cj = null;
    a.forEach(function(a2) {
      a2.expiredLanes |= 24 & a2.pendingLanes;
      Mj(a2, O());
    });
  }
  ig();
}
function Wj(a, b) {
  var c = X;
  X |= 1;
  try {
    return a(b);
  } finally {
    X = c, 0 === X && (wj(), ig());
  }
}
function Xj(a, b) {
  var c = X;
  X &= -2;
  X |= 8;
  try {
    return a(b);
  } finally {
    X = c, 0 === X && (wj(), ig());
  }
}
function ni(a, b) {
  I(rj, qj);
  qj |= b;
  tj |= b;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, pf(c));
  if (null !== Y)
    for (c = Y.return; null !== c; ) {
      var d = c;
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d);
          break;
        case 23:
        case 24:
          Ki();
      }
      c = c.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b) {
  do {
    var c = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d = R.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (null === c || null === c.return) {
        V = 1;
        sj = b;
        Y = null;
        break;
      }
      a: {
        var f = a, g = c.return, h = c, k2 = b;
        b = W;
        h.flags |= 2048;
        h.firstEffect = h.lastEffect = null;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2;
          if (0 === (h.mode & 2)) {
            var n2 = h.alternate;
            n2 ? (h.updateQueue = n2.updateQueue, h.memoizedState = n2.memoizedState, h.lanes = n2.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var A2 = 0 !== (P.current & 1), p2 = g;
          do {
            var C2;
            if (C2 = 13 === p2.tag) {
              var x2 = p2.memoizedState;
              if (null !== x2)
                C2 = null !== x2.dehydrated ? true : false;
              else {
                var w2 = p2.memoizedProps;
                C2 = void 0 === w2.fallback ? false : true !== w2.unstable_avoidThisFallback ? true : A2 ? false : true;
              }
            }
            if (C2) {
              var z2 = p2.updateQueue;
              if (null === z2) {
                var u2 = /* @__PURE__ */ new Set();
                u2.add(l2);
                p2.updateQueue = u2;
              } else
                z2.add(l2);
              if (0 === (p2.mode & 2)) {
                p2.flags |= 64;
                h.flags |= 16384;
                h.flags &= -2981;
                if (1 === h.tag)
                  if (null === h.alternate)
                    h.tag = 17;
                  else {
                    var t2 = zg(-1, 1);
                    t2.tag = 2;
                    Ag(h, t2);
                  }
                h.lanes |= 1;
                break a;
              }
              k2 = void 0;
              h = b;
              var q2 = f.pingCache;
              null === q2 ? (q2 = f.pingCache = new Oi(), k2 = /* @__PURE__ */ new Set(), q2.set(l2, k2)) : (k2 = q2.get(l2), void 0 === k2 && (k2 = /* @__PURE__ */ new Set(), q2.set(l2, k2)));
              if (!k2.has(h)) {
                k2.add(h);
                var v2 = Yj.bind(null, f, l2, h);
                l2.then(v2, v2);
              }
              p2.flags |= 4096;
              p2.lanes = b;
              break a;
            }
            p2 = p2.return;
          } while (null !== p2);
          k2 = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        5 !== V && (V = 2);
        k2 = Mi(k2, h);
        p2 = g;
        do {
          switch (p2.tag) {
            case 3:
              f = k2;
              p2.flags |= 4096;
              b &= -b;
              p2.lanes |= b;
              var J2 = Pi(p2, f, b);
              Bg(p2, J2);
              break a;
            case 1:
              f = k2;
              var K2 = p2.type, Q2 = p2.stateNode;
              if (0 === (p2.flags & 64) && ("function" === typeof K2.getDerivedStateFromError || null !== Q2 && "function" === typeof Q2.componentDidCatch && (null === Ti || !Ti.has(Q2)))) {
                p2.flags |= 4096;
                b &= -b;
                p2.lanes |= b;
                var L2 = Si(p2, f, b);
                Bg(p2, L2);
                break a;
              }
          }
          p2 = p2.return;
        } while (null !== p2);
      }
      Zj(c);
    } catch (va) {
      b = va;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a = oj.current;
  oj.current = Gh;
  return null === a ? Gh : a;
}
function Tj(a, b) {
  var c = X;
  X |= 16;
  var d = Pj();
  U === a && W === b || Qj(a, b);
  do
    try {
      ak();
      break;
    } catch (e) {
      Sj(a, e);
    }
  while (1);
  qg();
  X = c;
  oj.current = d;
  if (null !== Y)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; null !== Y; )
    bk(Y);
}
function Rj() {
  for (; null !== Y && !Qf(); )
    bk(Y);
}
function bk(a) {
  var b = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  null === b ? Zj(a) : Y = b;
  pj.current = null;
}
function Zj(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 2048)) {
      c = Gi(c, b, qj);
      if (null !== c) {
        Y = c;
        return;
      }
      c = b;
      if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== (qj & 1073741824) || 0 === (c.mode & 4)) {
        for (var d = 0, e = c.child; null !== e; )
          d |= e.lanes | e.childLanes, e = e.sibling;
        c.childLanes = d;
      }
      null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
    } else {
      c = Li(b);
      if (null !== c) {
        c.flags &= 2047;
        Y = c;
        return;
      }
      null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === V && (V = 5);
}
function Uj(a) {
  var b = eg();
  gg(99, dk.bind(null, a, b));
  return null;
}
function dk(a, b) {
  do
    Oj();
  while (null !== yj);
  if (0 !== (X & 48))
    throw Error(y(327));
  var c = a.finishedWork;
  if (null === c)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(y(177));
  a.callbackNode = null;
  var d = c.lanes | c.childLanes, e = d, f = a.pendingLanes & ~e;
  a.pendingLanes = e;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e;
  a.mutableReadLanes &= e;
  a.entangledLanes &= e;
  e = a.entanglements;
  for (var g = a.eventTimes, h = a.expirationTimes; 0 < f; ) {
    var k2 = 31 - Vc(f), l2 = 1 << k2;
    e[k2] = 0;
    g[k2] = -1;
    h[k2] = -1;
    f &= ~l2;
  }
  null !== Cj && 0 === (d & 24) && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
  if (null !== d) {
    e = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g = Ne();
    if (Oe(g)) {
      if ("selectionStart" in g)
        h = { start: g.selectionStart, end: g.selectionEnd };
      else
        a:
          if (h = (h = g.ownerDocument) && h.defaultView || window, (l2 = h.getSelection && h.getSelection()) && 0 !== l2.rangeCount) {
            h = l2.anchorNode;
            f = l2.anchorOffset;
            k2 = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h.nodeType, k2.nodeType;
            } catch (va) {
              h = null;
              break a;
            }
            var n2 = 0, A2 = -1, p2 = -1, C2 = 0, x2 = 0, w2 = g, z2 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w2 !== h || 0 !== f && 3 !== w2.nodeType || (A2 = n2 + f);
                  w2 !== k2 || 0 !== l2 && 3 !== w2.nodeType || (p2 = n2 + l2);
                  3 === w2.nodeType && (n2 += w2.nodeValue.length);
                  if (null === (u2 = w2.firstChild))
                    break;
                  z2 = w2;
                  w2 = u2;
                }
                for (; ; ) {
                  if (w2 === g)
                    break b;
                  z2 === h && ++C2 === f && (A2 = n2);
                  z2 === k2 && ++x2 === l2 && (p2 = n2);
                  if (null !== (u2 = w2.nextSibling))
                    break;
                  w2 = z2;
                  z2 = w2.parentNode;
                }
                w2 = u2;
              }
            h = -1 === A2 || -1 === p2 ? null : { start: A2, end: p2 };
          } else
            h = null;
      h = h || { start: 0, end: 0 };
    } else
      h = null;
    lf = { focusedElem: g, selectionRange: h };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d;
    do
      try {
        ek();
      } catch (va) {
        if (null === Z)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (null !== Z);
    Ij = null;
    Z = d;
    do
      try {
        for (g = a; null !== Z; ) {
          var t2 = Z.flags;
          t2 & 16 && pb(Z.stateNode, "");
          if (t2 & 128) {
            var q2 = Z.alternate;
            if (null !== q2) {
              var v2 = q2.ref;
              null !== v2 && ("function" === typeof v2 ? v2(null) : v2.current = null);
            }
          }
          switch (t2 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h = Z;
              cj(g, h);
              var J2 = h.alternate;
              dj(h);
              null !== J2 && dj(J2);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (null === Z)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (null !== Z);
    v2 = lf;
    q2 = Ne();
    t2 = v2.focusedElem;
    g = v2.selectionRange;
    if (q2 !== t2 && t2 && t2.ownerDocument && Me(t2.ownerDocument.documentElement, t2)) {
      null !== g && Oe(t2) && (q2 = g.start, v2 = g.end, void 0 === v2 && (v2 = q2), "selectionStart" in t2 ? (t2.selectionStart = q2, t2.selectionEnd = Math.min(v2, t2.value.length)) : (v2 = (q2 = t2.ownerDocument || document) && q2.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h = t2.textContent.length, J2 = Math.min(g.start, h), g = void 0 === g.end ? J2 : Math.min(g.end, h), !v2.extend && J2 > g && (h = g, g = J2, J2 = h), h = Le(t2, J2), f = Le(t2, g), h && f && (1 !== v2.rangeCount || v2.anchorNode !== h.node || v2.anchorOffset !== h.offset || v2.focusNode !== f.node || v2.focusOffset !== f.offset) && (q2 = q2.createRange(), q2.setStart(h.node, h.offset), v2.removeAllRanges(), J2 > g ? (v2.addRange(q2), v2.extend(f.node, f.offset)) : (q2.setEnd(f.node, f.offset), v2.addRange(q2))))));
      q2 = [];
      for (v2 = t2; v2 = v2.parentNode; )
        1 === v2.nodeType && q2.push({ element: v2, left: v2.scrollLeft, top: v2.scrollTop });
      "function" === typeof t2.focus && t2.focus();
      for (t2 = 0; t2 < q2.length; t2++)
        v2 = q2[t2], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c;
    Z = d;
    do
      try {
        for (t2 = a; null !== Z; ) {
          var K2 = Z.flags;
          K2 & 36 && Yi(t2, Z.alternate, Z);
          if (K2 & 128) {
            q2 = void 0;
            var Q2 = Z.ref;
            if (null !== Q2) {
              var L2 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q2 = L2;
                  break;
                default:
                  q2 = L2;
              }
              "function" === typeof Q2 ? Q2(q2) : Q2.current = q2;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (null === Z)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (null !== Z);
    Z = null;
    $f();
    X = e;
  } else
    a.current = c;
  if (xj)
    xj = false, yj = a, zj = b;
  else
    for (Z = d; null !== Z; )
      b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b;
  d = a.pendingLanes;
  0 === d && (Ti = null);
  1 === d ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c = c.stateNode;
  if (Mf && "function" === typeof Mf.onCommitFiberRoot)
    try {
      Mf.onCommitFiberRoot(Lf, c, void 0, 64 === (c.current.flags & 64));
    } catch (va) {
    }
  Mj(a, O());
  if (Qi)
    throw Qi = false, a = Ri, Ri = null, a;
  if (0 !== (X & 8))
    return null;
  ig();
  return null;
}
function ek() {
  for (; null !== Z; ) {
    var a = Z.alternate;
    Jj || null === Ij || (0 !== (Z.flags & 8) ? dc(Z, Ij) && (Jj = true) : 13 === Z.tag && mj(a, Z) && dc(Z, Ij) && (Jj = true));
    var b = Z.flags;
    0 !== (b & 256) && Xi(a, Z);
    0 === (b & 512) || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (90 !== zj) {
    var a = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a, fk);
  }
  return false;
}
function $i(a, b) {
  Aj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b) {
  Bj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (null === yj)
    return false;
  var a = yj;
  yj = null;
  if (0 !== (X & 48))
    throw Error(y(331));
  var b = X;
  X |= 32;
  var c = Bj;
  Bj = [];
  for (var d = 0; d < c.length; d += 2) {
    var e = c[d], f = c[d + 1], g = e.destroy;
    e.destroy = void 0;
    if ("function" === typeof g)
      try {
        g();
      } catch (k2) {
        if (null === f)
          throw Error(y(330));
        Wi(f, k2);
      }
  }
  c = Aj;
  Aj = [];
  for (d = 0; d < c.length; d += 2) {
    e = c[d];
    f = c[d + 1];
    try {
      var h = e.create;
      e.destroy = h();
    } catch (k2) {
      if (null === f)
        throw Error(y(330));
      Wi(f, k2);
    }
  }
  for (h = a.current.firstEffect; null !== h; )
    a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
  X = b;
  ig();
  return true;
}
function gk(a, b, c) {
  b = Mi(c, b);
  b = Pi(a, b, 1);
  Ag(a, b);
  b = Hg();
  a = Kj(a, 1);
  null !== a && ($c(a, 1, b), Mj(a, b));
}
function Wi(a, b) {
  if (3 === a.tag)
    gk(a, a, b);
  else
    for (var c = a.return; null !== c; ) {
      if (3 === c.tag) {
        gk(c, a, b);
        break;
      } else if (1 === c.tag) {
        var d = c.stateNode;
        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) {
          a = Mi(b, a);
          var e = Si(c, a, 1);
          Ag(c, e);
          e = Hg();
          c = Kj(c, 1);
          if (null !== c)
            $c(c, 1, e), Mj(c, e);
          else if ("function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d)))
            try {
              d.componentDidCatch(b, a);
            } catch (f) {
            }
          break;
        }
      }
      c = c.return;
    }
}
function Yj(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = Hg();
  a.pingedLanes |= a.suspendedLanes & c;
  U === a && (W & c) === c && (4 === V || 3 === V && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
  Mj(a, b);
}
function lj(a, b) {
  var c = a.stateNode;
  null !== c && c.delete(b);
  b = 0;
  0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === eg() ? 1 : 2 : (0 === Gj && (Gj = tj), b = Yc(62914560 & ~Gj), 0 === b && (b = 4194304)));
  c = Hg();
  a = Kj(a, b);
  null !== a && ($c(a, b, c), Mj(a, c));
}
var ck;
ck = function(a, b, c) {
  var d = b.lanes;
  if (null !== a)
    if (a.memoizedProps !== b.pendingProps || N.current)
      ug = true;
    else if (0 !== (c & d))
      ug = 0 !== (a.flags & 16384) ? true : false;
    else {
      ug = false;
      switch (b.tag) {
        case 3:
          ri(b);
          sh();
          break;
        case 5:
          gh(b);
          break;
        case 1:
          Ff(b.type) && Jf(b);
          break;
        case 4:
          eh(b, b.stateNode.containerInfo);
          break;
        case 10:
          d = b.memoizedProps.value;
          var e = b.type._context;
          I(mg, e._currentValue);
          e._currentValue = d;
          break;
        case 13:
          if (null !== b.memoizedState) {
            if (0 !== (c & b.child.childLanes))
              return ti(a, b, c);
            I(P, P.current & 1);
            b = hi(a, b, c);
            return null !== b ? b.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d = 0 !== (c & b.childLanes);
          if (0 !== (a.flags & 64)) {
            if (d)
              return Ai(a, b, c);
            b.flags |= 64;
          }
          e = b.memoizedState;
          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
          I(P, P.current);
          if (d)
            break;
          else
            return null;
        case 23:
        case 24:
          return b.lanes = 0, mi(a, b, c);
      }
      return hi(a, b, c);
    }
  else
    ug = false;
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      d = b.type;
      null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
      a = b.pendingProps;
      e = Ef(b, M.current);
      tg(b, c);
      e = Ch(null, b, d, a, e, c);
      b.flags |= 1;
      if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
        b.tag = 1;
        b.memoizedState = null;
        b.updateQueue = null;
        if (Ff(d)) {
          var f = true;
          Jf(b);
        } else
          f = false;
        b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
        xg(b);
        var g = d.getDerivedStateFromProps;
        "function" === typeof g && Gg(b, d, g, a);
        e.updater = Kg;
        b.stateNode = e;
        e._reactInternals = b;
        Og(b, d, a, c);
        b = qi(null, b, d, true, f, c);
      } else
        b.tag = 0, fi(null, b, e, c), b = b.child;
      return b;
    case 16:
      e = b.elementType;
      a: {
        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        f = e._init;
        e = f(e._payload);
        b.type = e;
        f = b.tag = hk(e);
        a = lg(e, a);
        switch (f) {
          case 0:
            b = li(null, b, e, a, c);
            break a;
          case 1:
            b = pi(null, b, e, a, c);
            break a;
          case 11:
            b = gi(null, b, e, a, c);
            break a;
          case 14:
            b = ii(null, b, e, lg(e.type, a), d, c);
            break a;
        }
        throw Error(y(306, e, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
    case 3:
      ri(b);
      d = b.updateQueue;
      if (null === a || null === d)
        throw Error(y(282));
      d = b.pendingProps;
      e = b.memoizedState;
      e = null !== e ? e.element : null;
      yg(a, b);
      Cg(b, d, null, c);
      d = b.memoizedState.element;
      if (d === e)
        sh(), b = hi(a, b, c);
      else {
        e = b.stateNode;
        if (f = e.hydrate)
          kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = true;
        if (f) {
          a = e.mutableSourceEagerHydrationData;
          if (null != a)
            for (e = 0; e < a.length; e += 2)
              f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
          c = Zg(b, null, d, c);
          for (b.child = c; c; )
            c.flags = c.flags & -3 | 1024, c = c.sibling;
        } else
          fi(a, b, d, c), sh();
        b = b.child;
      }
      return b;
    case 5:
      return gh(b), null === a && ph(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : null !== f && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;
    case 6:
      return null === a && ph(b), null;
    case 13:
      return ti(a, b, c);
    case 4:
      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
    case 7:
      return fi(a, b, b.pendingProps, c), b.child;
    case 8:
      return fi(
        a,
        b,
        b.pendingProps.children,
        c
      ), b.child;
    case 12:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g = b.memoizedProps;
        f = e.value;
        var h = b.type._context;
        I(mg, h._currentValue);
        h._currentValue = f;
        if (null !== g)
          if (h = g.value, f = He(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) {
            if (g.children === e.children && !N.current) {
              b = hi(a, b, c);
              break a;
            }
          } else
            for (h = b.child, null !== h && (h.return = b); null !== h; ) {
              var k2 = h.dependencies;
              if (null !== k2) {
                g = h.child;
                for (var l2 = k2.firstContext; null !== l2; ) {
                  if (l2.context === d && 0 !== (l2.observedBits & f)) {
                    1 === h.tag && (l2 = zg(-1, c & -c), l2.tag = 2, Ag(h, l2));
                    h.lanes |= c;
                    l2 = h.alternate;
                    null !== l2 && (l2.lanes |= c);
                    sg(h.return, c);
                    k2.lanes |= c;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;
              if (null !== g)
                g.return = h;
              else
                for (g = h; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  h = g.sibling;
                  if (null !== h) {
                    h.return = g.return;
                    g = h;
                    break;
                  }
                  g = g.return;
                }
              h = g;
            }
        fi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(
        e,
        f.unstable_observedBits
      ), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
    case 14:
      return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);
    case 15:
      return ki(a, b, b.type, b.pendingProps, d, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = true, Jf(b)) : a = false, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, true, a, c);
    case 19:
      return Ai(a, b, c);
    case 23:
      return mi(a, b, c);
    case 24:
      return mi(a, b, c);
  }
  throw Error(y(156, b.tag));
};
function ik(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b, c, d) {
  return new ik(a, b, c, d);
}
function ji(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function hk(a) {
  if ("function" === typeof a)
    return ji(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Aa)
      return 11;
    if (a === Da)
      return 14;
  }
  return 2;
}
function Tg(a, b) {
  var c = a.alternate;
  null === c ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Vg(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if ("function" === typeof a)
    ji(a) && (g = 1);
  else if ("string" === typeof a)
    g = 5;
  else
    a:
      switch (a) {
        case ua$1:
          return Xg(c.children, e, f, b);
        case Ha:
          g = 8;
          e |= 16;
          break;
        case wa:
          g = 8;
          e |= 1;
          break;
        case xa:
          return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;
        case Ba:
          return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;
        case Ca:
          return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;
        case Ia:
          return vi(c, e, f, b);
        case Ja:
          return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case ya:
                g = 10;
                break a;
              case za:
                g = 9;
                break a;
              case Aa:
                g = 11;
                break a;
              case Da:
                g = 14;
                break a;
              case Ea:
                g = 16;
                d = null;
                break a;
              case Fa:
                g = 22;
                break a;
            }
          throw Error(y(130, null == a ? a : typeof a, ""));
      }
  b = nh(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f;
  return b;
}
function Xg(a, b, c, d) {
  a = nh(7, a, d, b);
  a.lanes = c;
  return a;
}
function vi(a, b, c, d) {
  a = nh(23, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  return a;
}
function Ug(a, b, c) {
  a = nh(6, a, null, b);
  a.lanes = c;
  return a;
}
function Wg(a, b, c) {
  b = nh(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function jk(a, b, c) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: ta, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function lk(a, b, c, d) {
  var e = b.current, f = Hg(), g = Ig(e);
  a:
    if (c) {
      c = c._reactInternals;
      b: {
        if (Zb(c) !== c || 1 !== c.tag)
          throw Error(y(170));
        var h = c;
        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;
            case 1:
              if (Ff(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h = h.return;
        } while (null !== h);
        throw Error(y(171));
      }
      if (1 === c.tag) {
        var k2 = c.type;
        if (Ff(k2)) {
          c = If(c, k2, h);
          break a;
        }
      }
      c = h;
    } else
      c = Cf;
  null === b.context ? b.context = c : b.pendingContext = c;
  b = zg(f, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  Ag(e, b);
  Jg(e, g, f);
  return g;
}
function mk(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function nk(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function ok(a, b) {
  nk(a, b);
  (a = a.alternate) && nk(a, b);
}
function pk() {
  return null;
}
function qk(a, b, c) {
  var d = null != c && null != c.hydrationOptions && c.hydrationOptions.mutableSources || null;
  c = new jk(a, b, null != c && true === c.hydrate);
  b = nh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
  c.current = b;
  b.stateNode = c;
  xg(b);
  a[ff] = c.current;
  cf(8 === a.nodeType ? a.parentNode : a);
  if (d)
    for (a = 0; a < d.length; a++) {
      b = d[a];
      var e = b._getVersion;
      e = e(b._source);
      null == c.mutableSourceEagerHydrationData ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
    }
  this._internalRoot = c;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b = a.containerInfo;
  lk(null, a, null, function() {
    b[ff] = null;
  });
};
function rk(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function sk(a, b) {
  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
  if (!b)
    for (var c; c = a.lastChild; )
      a.removeChild(c);
  return new qk(a, 0, b ? { hydrate: true } : void 0);
}
function tk(a, b, c, d, e) {
  var f = c._reactRootContainer;
  if (f) {
    var g = f._internalRoot;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = mk(g);
        h.call(a2);
      };
    }
    lk(b, g, a, e);
  } else {
    f = c._reactRootContainer = sk(c, d);
    g = f._internalRoot;
    if ("function" === typeof e) {
      var k2 = e;
      e = function() {
        var a2 = mk(g);
        k2.call(a2);
      };
    }
    Xj(function() {
      lk(b, g, a, e);
    });
  }
  return mk(g);
}
ec = function(a) {
  if (13 === a.tag) {
    var b = Hg();
    Jg(a, 4, b);
    ok(a, 4);
  }
};
fc = function(a) {
  if (13 === a.tag) {
    var b = Hg();
    Jg(a, 67108864, b);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (13 === a.tag) {
    var b = Hg(), c = Ig(a);
    Jg(a, c, b);
    ok(a, c);
  }
};
hc = function(a, b) {
  return b();
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      ab(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(y(90));
            Wa(d);
            ab(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Wj;
Hb = function(a, b, c, d, e) {
  var f = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b, c, d, e));
  } finally {
    X = f, 0 === X && (wj(), ig());
  }
};
Ib = function() {
  0 === (X & 49) && (Vj(), Oj());
};
Jb = function(a, b) {
  var c = X;
  X |= 2;
  try {
    return a(b);
  } finally {
    X = c, 0 === X && (wj(), ig());
  }
};
function uk(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!rk(b))
    throw Error(y(200));
  return kk(a, b, null, c);
}
var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] }, wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = cc(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
reactDom_production_min.createPortal = uk;
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render)
      throw Error(y(188));
    throw Error(y(268, Object.keys(a)));
  }
  a = cc(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a, b) {
  var c = X;
  if (0 !== (c & 48))
    return a(b);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b));
  } finally {
    X = c, ig();
  }
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, true, c);
};
reactDom_production_min.render = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a, b) {
  return uk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!rk(c))
    throw Error(y(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(y(38));
  return tk(a, b, c, false, d);
};
reactDom_production_min.version = "17.0.2";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var ReactDOM = reactDom.exports;
/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
var Action$1;
(function(Action3) {
  Action3["Pop"] = "POP";
  Action3["Push"] = "PUSH";
  Action3["Replace"] = "REPLACE";
})(Action$1 || (Action$1 = {}));
const PopStateEventType = "popstate";
function createBrowserHistory(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  function createBrowserLocation(window2, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window2.location;
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options2);
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location) {
  return {
    usr: location.state,
    key: location.key
  };
}
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends$3({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    key: to && to.key || key || createKey()
  });
  return location;
}
function createPath(_ref2) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref2;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function createURL(location) {
  let base = typeof window !== "undefined" && typeof window.location !== "undefined" && window.location.origin !== "null" ? window.location.origin : "unknown://unknown";
  let href = typeof location === "string" ? location : createPath(location);
  return new URL(href, base);
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options2;
  let globalHistory = window2.history;
  let action = Action$1.Pop;
  let listener = null;
  function handlePop() {
    action = Action$1.Pop;
    if (listener) {
      listener({
        action,
        location: history.location
      });
    }
  }
  function push(to, state) {
    action = Action$1.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    let historyState = getHistoryState(location);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location
      });
    }
  }
  function replace(to, state) {
    action = Action$1.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    let historyState = getHistoryState(location);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location
      });
    }
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window2, to);
    },
    encodeLocation(location) {
      let url = createURL(createPath(location));
      return _extends$3({}, location, {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      });
    },
    push,
    replace,
    go(n2) {
      return globalHistory.go(n2);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes2, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes2);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(
      branches[i],
      safelyDecodeURI(pathname)
    );
  }
  return matches;
}
function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes2.forEach((route, index2) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index2,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path, index2) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index2) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n2, i) => n2 === b[i]);
  return siblings ? a[a.length - 1] - b[b.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index2) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index2] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index2] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index2) => index2 === 0 || match.route.path && match.route.path.length > 0);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$3({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
class ErrorResponse {
  constructor(status, statusText, data) {
    this.status = status;
    this.statusText = statusText || "";
    this.data = data;
  }
}
function isRouteErrorResponse(e) {
  return e instanceof ErrorResponse;
}
const validActionMethods = /* @__PURE__ */ new Set(["POST", "PUT", "PATCH", "DELETE"]);
/* @__PURE__ */ new Set(["GET", "HEAD", ...validActionMethods]);
/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function isPolyfill(x2, y2) {
  return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
}
const is = typeof Object.is === "function" ? Object.is : isPolyfill;
const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = React$1;
function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
  const value = getSnapshot();
  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  });
  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot;
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
    const handleStoreChange = () => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({
          inst
        });
      }
    };
    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;
  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  return getSnapshot();
}
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM;
const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
"useSyncExternalStore" in React$1 ? ((module) => module.useSyncExternalStore)(React$1) : shim;
const DataStaticRouterContext = /* @__PURE__ */ react.exports.createContext(null);
const DataRouterStateContext = /* @__PURE__ */ react.exports.createContext(null);
const NavigationContext = /* @__PURE__ */ react.exports.createContext(null);
const LocationContext = /* @__PURE__ */ react.exports.createContext(null);
const RouteContext = /* @__PURE__ */ react.exports.createContext({
  outlet: null,
  matches: []
});
const RouteErrorContext = /* @__PURE__ */ react.exports.createContext(null);
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = react.exports.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return react.exports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return react.exports.useContext(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = react.exports.useContext(NavigationContext);
  let {
    matches
  } = react.exports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  let activeRef = react.exports.useRef(false);
  react.exports.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = react.exports.useCallback(function(to, options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator2.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options2.relative === "path");
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options2.replace ? navigator2.replace : navigator2.push)(path, options2.state, options2);
  }, [basename, navigator2, routePathnamesJson, locationPathname]);
  return navigate;
}
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = react.exports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  return react.exports.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
function useRoutes(routes2, locationArg) {
  !useInRouterContext() ? invariant(false) : void 0;
  let dataRouterStateContext = react.exports.useContext(DataRouterStateContext);
  let {
    matches: parentMatches
  } = react.exports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes2, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches, dataRouterStateContext || void 0);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ react.exports.createElement(LocationContext.Provider, {
      value: {
        location: _extends$2({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action$1.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorElement() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement("h2", null, "Unhandled Thrown Error!"), /* @__PURE__ */ react.exports.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ react.exports.createElement("pre", {
    style: preStyles
  }, stack) : null, /* @__PURE__ */ react.exports.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ react.exports.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own\xA0", /* @__PURE__ */ react.exports.createElement("code", {
    style: codeStyles
  }, "errorElement"), " props on\xA0", /* @__PURE__ */ react.exports.createElement("code", {
    style: codeStyles
  }, "<Route>")));
}
class RenderErrorBoundary extends react.exports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    }
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ react.exports.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    }) : this.props.children;
  }
}
function RenderedRoute(_ref2) {
  let {
    routeContext,
    match,
    children
  } = _ref2;
  let dataStaticRouterContext = react.exports.useContext(DataStaticRouterContext);
  if (dataStaticRouterContext && match.route.errorElement) {
    dataStaticRouterContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ react.exports.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]));
    !(errorIndex >= 0) ? invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index2) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
    let errorElement = dataRouterState ? match.route.errorElement || /* @__PURE__ */ react.exports.createElement(DefaultErrorElement, null) : null;
    let getChildren = () => /* @__PURE__ */ react.exports.createElement(RenderedRoute, {
      match,
      routeContext: {
        outlet,
        matches: parentMatches.concat(renderedMatches.slice(0, index2 + 1))
      }
    }, error ? errorElement : match.route.element !== void 0 ? match.route.element : outlet);
    return dataRouterState && (match.route.errorElement || index2 === 0) ? /* @__PURE__ */ react.exports.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error,
      children: getChildren()
    }) : getChildren();
  }, null);
}
var DataRouterHook$1;
(function(DataRouterHook2) {
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterHook$1 || (DataRouterHook$1 = {}));
var DataRouterStateHook$1;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}));
function useDataRouterState(hookName) {
  let state = react.exports.useContext(DataRouterStateContext);
  !state ? invariant(false) : void 0;
  return state;
}
function useRouteError() {
  var _state$errors;
  let error = react.exports.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
  let route = react.exports.useContext(RouteContext);
  let thisRoute = route.matches[route.matches.length - 1];
  if (error) {
    return error;
  }
  !route ? invariant(false) : void 0;
  !thisRoute.route.id ? invariant(false) : void 0;
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[thisRoute.route.id];
}
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action$1.Pop,
    navigator: navigator2,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = react.exports.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp
  }), [basename, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = react.exports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  if (location == null) {
    return null;
  }
  return /* @__PURE__ */ react.exports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ react.exports.createElement(LocationContext.Provider, {
    children,
    value: {
      location,
      navigationType
    }
  }));
}
var AwaitRenderStatus;
(function(AwaitRenderStatus2) {
  AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
  AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
  AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
new Promise(() => {
});
/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event);
}
const _excluded$I = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
function BrowserRouter(_ref2) {
  let {
    basename,
    children,
    window: window2
  } = _ref2;
  let historyRef = react.exports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setState] = react.exports.useState({
    action: history.action,
    location: history.location
  });
  react.exports.useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ react.exports.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
const Link = /* @__PURE__ */ react.exports.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4, rest = _objectWithoutPropertiesLoose$1(_ref4, _excluded$I);
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return /* @__PURE__ */ react.exports.createElement("a", _extends$1({}, rest, {
    href,
    onClick: reloadDocument ? onClick : handleClick,
    ref,
    target
  }));
});
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook2["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return react.exports.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
var index$1 = "";
var index = "";
const navConfig = [
  {
    title: "\u5BF9\u8BDD\u7EC4\u4EF6",
    list: [
      { name: "\u5BF9\u8BDD\u5BB9\u5668", code: "chat" },
      {
        name: "\u610F\u89C1\u53CD\u9988",
        code: "suggestion"
      }
    ]
  }
];
function toPascalCase(str) {
  return str.split("-").map((w2) => w2[0].toUpperCase() + w2.slice(1).toLowerCase()).join("");
}
function DemoIndex() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "demo-index"
  }, navConfig.map((t2) => /* @__PURE__ */ React.createElement("div", {
    className: "demo-nav",
    key: t2.title
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "demo-nav-title"
  }, t2.title), /* @__PURE__ */ React.createElement("ul", {
    className: "demo-nav-list"
  }, t2.list.map((tt) => /* @__PURE__ */ React.createElement("li", {
    key: tt.code
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "demo-nav-link",
    to: `/${tt.code}`
  }, `${toPascalCase(tt.code)} ${tt.name}`)))))));
}
const DemoPage = ({ children }) => {
  const { pathname } = useLocation();
  const name = pathname.slice(1);
  return /* @__PURE__ */ React.createElement("div", {
    className: "demo-page",
    "data-page": name
  }, children);
};
const DemoSection = ({ title, bg: bg2 = "white", children }) => /* @__PURE__ */ React.createElement("div", {
  className: `demo-section bg-${bg2}`
}, /* @__PURE__ */ React.createElement("h2", {
  className: "demo-section-title"
}, title), children);
(function() {
  if (typeof window !== "object") {
    return;
  }
  if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    if (!("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(
        window.IntersectionObserverEntry.prototype,
        "isIntersecting",
        {
          get: function() {
            return this.intersectionRatio > 0;
          }
        }
      );
    }
    return;
  }
  function getFrameElement(doc2) {
    try {
      return doc2.defaultView && doc2.defaultView.frameElement || null;
    } catch (e) {
      return null;
    }
  }
  var document2 = function(startDoc) {
    var doc2 = startDoc;
    var frame = getFrameElement(doc2);
    while (frame) {
      doc2 = frame.ownerDocument;
      frame = getFrameElement(doc2);
    }
    return doc2;
  }(window.document);
  var registry = [];
  var crossOriginUpdater = null;
  var crossOriginRect = null;
  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = ensureDOMRect(entry.rootBounds);
    this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
    this.intersectionRect = ensureDOMRect(entry.intersectionRect || getEmptyRect());
    this.isIntersecting = !!entry.intersectionRect;
    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height;
    if (targetArea) {
      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
    } else {
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }
  function IntersectionObserver2(callback, opt_options) {
    var options2 = opt_options || {};
    if (typeof callback != "function") {
      throw new Error("callback must be a function");
    }
    if (options2.root && options2.root.nodeType != 1 && options2.root.nodeType != 9) {
      throw new Error("root must be a Document or Element");
    }
    this._checkForIntersections = throttle2(
      this._checkForIntersections.bind(this),
      this.THROTTLE_TIMEOUT
    );
    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options2.rootMargin);
    this.thresholds = this._initThresholds(options2.threshold);
    this.root = options2.root || null;
    this.rootMargin = this._rootMarginValues.map(function(margin) {
      return margin.value + margin.unit;
    }).join(" ");
    this._monitoringDocuments = [];
    this._monitoringUnsubscribes = [];
  }
  IntersectionObserver2.prototype.THROTTLE_TIMEOUT = 100;
  IntersectionObserver2.prototype.POLL_INTERVAL = null;
  IntersectionObserver2.prototype.USE_MUTATION_OBSERVER = true;
  IntersectionObserver2._setupCrossOriginUpdater = function() {
    if (!crossOriginUpdater) {
      crossOriginUpdater = function(boundingClientRect, intersectionRect) {
        if (!boundingClientRect || !intersectionRect) {
          crossOriginRect = getEmptyRect();
        } else {
          crossOriginRect = convertFromParentRect(boundingClientRect, intersectionRect);
        }
        registry.forEach(function(observer) {
          observer._checkForIntersections();
        });
      };
    }
    return crossOriginUpdater;
  };
  IntersectionObserver2._resetCrossOriginUpdater = function() {
    crossOriginUpdater = null;
    crossOriginRect = null;
  };
  IntersectionObserver2.prototype.observe = function(target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
      return item.element == target;
    });
    if (isTargetAlreadyObserved) {
      return;
    }
    if (!(target && target.nodeType == 1)) {
      throw new Error("target must be an Element");
    }
    this._registerInstance();
    this._observationTargets.push({ element: target, entry: null });
    this._monitorIntersections(target.ownerDocument);
    this._checkForIntersections();
  };
  IntersectionObserver2.prototype.unobserve = function(target) {
    this._observationTargets = this._observationTargets.filter(function(item) {
      return item.element != target;
    });
    this._unmonitorIntersections(target.ownerDocument);
    if (this._observationTargets.length == 0) {
      this._unregisterInstance();
    }
  };
  IntersectionObserver2.prototype.disconnect = function() {
    this._observationTargets = [];
    this._unmonitorAllIntersections();
    this._unregisterInstance();
  };
  IntersectionObserver2.prototype.takeRecords = function() {
    var records = this._queuedEntries.slice();
    this._queuedEntries = [];
    return records;
  };
  IntersectionObserver2.prototype._initThresholds = function(opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold))
      threshold = [threshold];
    return threshold.sort().filter(function(t2, i, a) {
      if (typeof t2 != "number" || isNaN(t2) || t2 < 0 || t2 > 1) {
        throw new Error("threshold must be a number between 0 and 1 inclusively");
      }
      return t2 !== a[i - 1];
    });
  };
  IntersectionObserver2.prototype._parseRootMargin = function(opt_rootMargin) {
    var marginString = opt_rootMargin || "0px";
    var margins = marginString.split(/\s+/).map(function(margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
      if (!parts) {
        throw new Error("rootMargin must be specified in pixels or percent");
      }
      return { value: parseFloat(parts[1]), unit: parts[2] };
    });
    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];
    return margins;
  };
  IntersectionObserver2.prototype._monitorIntersections = function(doc2) {
    var win = doc2.defaultView;
    if (!win) {
      return;
    }
    if (this._monitoringDocuments.indexOf(doc2) != -1) {
      return;
    }
    var callback = this._checkForIntersections;
    var monitoringInterval = null;
    var domObserver = null;
    if (this.POLL_INTERVAL) {
      monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
    } else {
      addEvent(win, "resize", callback, true);
      addEvent(doc2, "scroll", callback, true);
      if (this.USE_MUTATION_OBSERVER && "MutationObserver" in win) {
        domObserver = new win.MutationObserver(callback);
        domObserver.observe(doc2, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
    this._monitoringDocuments.push(doc2);
    this._monitoringUnsubscribes.push(function() {
      var win2 = doc2.defaultView;
      if (win2) {
        if (monitoringInterval) {
          win2.clearInterval(monitoringInterval);
        }
        removeEvent(win2, "resize", callback, true);
      }
      removeEvent(doc2, "scroll", callback, true);
      if (domObserver) {
        domObserver.disconnect();
      }
    });
    var rootDoc = this.root && (this.root.ownerDocument || this.root) || document2;
    if (doc2 != rootDoc) {
      var frame = getFrameElement(doc2);
      if (frame) {
        this._monitorIntersections(frame.ownerDocument);
      }
    }
  };
  IntersectionObserver2.prototype._unmonitorIntersections = function(doc2) {
    var index2 = this._monitoringDocuments.indexOf(doc2);
    if (index2 == -1) {
      return;
    }
    var rootDoc = this.root && (this.root.ownerDocument || this.root) || document2;
    var hasDependentTargets = this._observationTargets.some(function(item) {
      var itemDoc = item.element.ownerDocument;
      if (itemDoc == doc2) {
        return true;
      }
      while (itemDoc && itemDoc != rootDoc) {
        var frame2 = getFrameElement(itemDoc);
        itemDoc = frame2 && frame2.ownerDocument;
        if (itemDoc == doc2) {
          return true;
        }
      }
      return false;
    });
    if (hasDependentTargets) {
      return;
    }
    var unsubscribe = this._monitoringUnsubscribes[index2];
    this._monitoringDocuments.splice(index2, 1);
    this._monitoringUnsubscribes.splice(index2, 1);
    unsubscribe();
    if (doc2 != rootDoc) {
      var frame = getFrameElement(doc2);
      if (frame) {
        this._unmonitorIntersections(frame.ownerDocument);
      }
    }
  };
  IntersectionObserver2.prototype._unmonitorAllIntersections = function() {
    var unsubscribes = this._monitoringUnsubscribes.slice(0);
    this._monitoringDocuments.length = 0;
    this._monitoringUnsubscribes.length = 0;
    for (var i = 0; i < unsubscribes.length; i++) {
      unsubscribes[i]();
    }
  };
  IntersectionObserver2.prototype._checkForIntersections = function() {
    if (!this.root && crossOriginUpdater && !crossOriginRect) {
      return;
    }
    var rootIsInDom = this._rootIsInDom();
    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
    this._observationTargets.forEach(function(item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);
      var rootContainsTarget = this._rootContainsTarget(target);
      var oldEntry = item.entry;
      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, targetRect, rootRect);
      var rootBounds = null;
      if (!this._rootContainsTarget(target)) {
        rootBounds = getEmptyRect();
      } else if (!crossOriginUpdater || this.root) {
        rootBounds = rootRect;
      }
      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now2(),
        target,
        boundingClientRect: targetRect,
        rootBounds,
        intersectionRect
      });
      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);
    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };
  IntersectionObserver2.prototype._computeTargetAndRootIntersection = function(target, targetRect, rootRect) {
    if (window.getComputedStyle(target).display == "none")
      return;
    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;
    while (!atRoot && parent) {
      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};
      if (parentComputedStyle.display == "none")
        return null;
      if (parent == this.root || parent.nodeType == 9) {
        atRoot = true;
        if (parent == this.root || parent == document2) {
          if (crossOriginUpdater && !this.root) {
            if (!crossOriginRect || crossOriginRect.width == 0 && crossOriginRect.height == 0) {
              parent = null;
              parentRect = null;
              intersectionRect = null;
            } else {
              parentRect = crossOriginRect;
            }
          } else {
            parentRect = rootRect;
          }
        } else {
          var frame = getParentNode(parent);
          var frameRect = frame && getBoundingClientRect(frame);
          var frameIntersect = frame && this._computeTargetAndRootIntersection(frame, frameRect, rootRect);
          if (frameRect && frameIntersect) {
            parent = frame;
            parentRect = convertFromParentRect(frameRect, frameIntersect);
          } else {
            parent = null;
            intersectionRect = null;
          }
        }
      } else {
        var doc2 = parent.ownerDocument;
        if (parent != doc2.body && parent != doc2.documentElement && parentComputedStyle.overflow != "visible") {
          parentRect = getBoundingClientRect(parent);
        }
      }
      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
      }
      if (!intersectionRect)
        break;
      parent = parent && getParentNode(parent);
    }
    return intersectionRect;
  };
  IntersectionObserver2.prototype._getRootRect = function() {
    var rootRect;
    if (this.root && !isDoc(this.root)) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      var doc2 = isDoc(this.root) ? this.root : document2;
      var html2 = doc2.documentElement;
      var body = doc2.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html2.clientWidth || body.clientWidth,
        width: html2.clientWidth || body.clientWidth,
        bottom: html2.clientHeight || body.clientHeight,
        height: html2.clientHeight || body.clientHeight
      };
    }
    return this._expandRectByRootMargin(rootRect);
  };
  IntersectionObserver2.prototype._expandRectByRootMargin = function(rect) {
    var margins = this._rootMarginValues.map(function(margin, i) {
      return margin.unit == "px" ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });
    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;
    return newRect;
  };
  IntersectionObserver2.prototype._hasCrossedThreshold = function(oldEntry, newEntry) {
    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
    if (oldRatio === newRatio)
      return;
    for (var i = 0; i < this.thresholds.length; i++) {
      var threshold = this.thresholds[i];
      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };
  IntersectionObserver2.prototype._rootIsInDom = function() {
    return !this.root || containsDeep(document2, this.root);
  };
  IntersectionObserver2.prototype._rootContainsTarget = function(target) {
    var rootDoc = this.root && (this.root.ownerDocument || this.root) || document2;
    return containsDeep(rootDoc, target) && (!this.root || rootDoc == target.ownerDocument);
  };
  IntersectionObserver2.prototype._registerInstance = function() {
    if (registry.indexOf(this) < 0) {
      registry.push(this);
    }
  };
  IntersectionObserver2.prototype._unregisterInstance = function() {
    var index2 = registry.indexOf(this);
    if (index2 != -1)
      registry.splice(index2, 1);
  };
  function now2() {
    return window.performance && performance.now && performance.now();
  }
  function throttle2(fn, timeout) {
    var timer = null;
    return function() {
      if (!timer) {
        timer = setTimeout(function() {
          fn();
          timer = null;
        }, timeout);
      }
    };
  }
  function addEvent(node, event, fn, opt_useCapture) {
    if (typeof node.addEventListener == "function") {
      node.addEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.attachEvent == "function") {
      node.attachEvent("on" + event, fn);
    }
  }
  function removeEvent(node, event, fn, opt_useCapture) {
    if (typeof node.removeEventListener == "function") {
      node.removeEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.detachEvent == "function") {
      node.detachEvent("on" + event, fn);
    }
  }
  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;
    return width >= 0 && height >= 0 && {
      top,
      bottom,
      left,
      right,
      width,
      height
    } || null;
  }
  function getBoundingClientRect(el) {
    var rect;
    try {
      rect = el.getBoundingClientRect();
    } catch (err) {
    }
    if (!rect)
      return getEmptyRect();
    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }
    return rect;
  }
  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  function ensureDOMRect(rect) {
    if (!rect || "x" in rect) {
      return rect;
    }
    return {
      top: rect.top,
      y: rect.top,
      bottom: rect.bottom,
      left: rect.left,
      x: rect.left,
      right: rect.right,
      width: rect.width,
      height: rect.height
    };
  }
  function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
    var top = parentIntersectionRect.top - parentBoundingRect.top;
    var left = parentIntersectionRect.left - parentBoundingRect.left;
    return {
      top,
      left,
      height: parentIntersectionRect.height,
      width: parentIntersectionRect.width,
      bottom: top + parentIntersectionRect.height,
      right: left + parentIntersectionRect.width
    };
  }
  function containsDeep(parent, child) {
    var node = child;
    while (node) {
      if (node == parent)
        return true;
      node = getParentNode(node);
    }
    return false;
  }
  function getParentNode(node) {
    var parent = node.parentNode;
    if (node.nodeType == 9 && node != document2) {
      return getFrameElement(node);
    }
    if (parent && parent.assignedSlot) {
      parent = parent.assignedSlot.parentNode;
    }
    if (parent && parent.nodeType == 11 && parent.host) {
      return parent.host;
    }
    return parent;
  }
  function isDoc(node) {
    return node && node.nodeType === 9;
  }
  window.IntersectionObserver = IntersectionObserver2;
  window.IntersectionObserverEntry = IntersectionObserverEntry;
})();
function r(e) {
  var t2, f, n2 = "";
  if ("string" == typeof e || "number" == typeof e)
    n2 += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t2 = 0; t2 < e.length; t2++)
        e[t2] && (f = r(e[t2])) && (n2 && (n2 += " "), n2 += f);
    else
      for (t2 in e)
        e[t2] && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function clsx() {
  for (var e, t2, f = 0, n2 = ""; f < arguments.length; )
    (e = arguments[f++]) && (t2 = r(e)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
/*! @license DOMPurify 2.4.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.0/LICENSE */
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
}
function _setPrototypeOf$1(o, p2) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf$1(o, p2);
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct$1()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf$1(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
}
function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$1(arr);
}
function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var hasOwnProperty = Object.hasOwnProperty, setPrototypeOf = Object.setPrototypeOf, isFrozen = Object.isFrozen, getPrototypeOf = Object.getPrototypeOf, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var freeze = Object.freeze, seal = Object.seal, create = Object.create;
var _ref = typeof Reflect !== "undefined" && Reflect, apply = _ref.apply, construct = _ref.construct;
if (!apply) {
  apply = function apply2(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}
if (!freeze) {
  freeze = function freeze2(x2) {
    return x2;
  };
}
if (!seal) {
  seal = function seal2(x2) {
    return x2;
  };
}
if (!construct) {
  construct = function construct2(Func, args) {
    return _construct(Func, _toConsumableArray$1(args));
  };
}
var arrayForEach = unapply(Array.prototype.forEach);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return apply(func, thisArg, args);
  };
}
function unconstruct(func) {
  return function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return construct(func, args);
  };
}
function addToSet(set, array, transformCaseFunc) {
  transformCaseFunc = transformCaseFunc ? transformCaseFunc : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set, null);
  }
  var l2 = array.length;
  while (l2--) {
    var element = array[l2];
    if (typeof element === "string") {
      var lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) {
          array[l2] = lcElement;
        }
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
function clone(object) {
  var newObject = create(null);
  var property;
  for (property in object) {
    if (apply(hasOwnProperty, object, [property])) {
      newObject[property] = object[property];
    }
  }
  return newObject;
}
function lookupGetter(object, prop) {
  while (object !== null) {
    var desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue(element) {
    console.warn("fallback value for", element);
    return null;
  }
  return fallbackValue;
}
var html$1$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]);
var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var text = freeze(["#text"]);
var html$2 = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
var svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
var IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
);
var DOCTYPE_NAME = seal(/^html$/i);
var getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, document2) {
  if (_typeof$1(trustedTypes) !== "object" || typeof trustedTypes.createPolicy !== "function") {
    return null;
  }
  var suffix = null;
  var ATTR_NAME = "data-tt-policy-suffix";
  if (document2.currentScript && document2.currentScript.hasAttribute(ATTR_NAME)) {
    suffix = document2.currentScript.getAttribute(ATTR_NAME);
  }
  var policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML: function createHTML(html2) {
        return html2;
      },
      createScriptURL: function createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
function createDOMPurify() {
  var window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  var DOMPurify = function DOMPurify2(root) {
    return createDOMPurify(root);
  };
  DOMPurify.version = "2.4.0";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== 9) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  var originalDocument = window2.document;
  var document2 = window2.document;
  var DocumentFragment = window2.DocumentFragment, HTMLTemplateElement = window2.HTMLTemplateElement, Node = window2.Node, Element2 = window2.Element, NodeFilter = window2.NodeFilter, _window$NamedNodeMap = window2.NamedNodeMap, NamedNodeMap = _window$NamedNodeMap === void 0 ? window2.NamedNodeMap || window2.MozNamedAttrMap : _window$NamedNodeMap, HTMLFormElement = window2.HTMLFormElement, DOMParser = window2.DOMParser, trustedTypes = window2.trustedTypes;
  var ElementPrototype = Element2.prototype;
  var cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  var getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  var getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  var getParentNode = lookupGetter(ElementPrototype, "parentNode");
  if (typeof HTMLTemplateElement === "function") {
    var template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document2 = template.content.ownerDocument;
    }
  }
  var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
  var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML("") : "";
  var _document = document2, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
  var importNode = originalDocument.importNode;
  var documentMode = {};
  try {
    documentMode = clone(document2).documentMode ? document2.documentMode : {};
  } catch (_) {
  }
  var hooks = {};
  DOMPurify.isSupported = typeof getParentNode === "function" && implementation && typeof implementation.createHTMLDocument !== "undefined" && documentMode !== 9;
  var MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
  var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
  var ALLOWED_TAGS = null;
  var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(html$1$1), _toConsumableArray$1(svg$1), _toConsumableArray$1(svgFilters), _toConsumableArray$1(mathMl$1), _toConsumableArray$1(text)));
  var ALLOWED_ATTR = null;
  var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray$1(html$2), _toConsumableArray$1(svg), _toConsumableArray$1(mathMl), _toConsumableArray$1(xml)));
  var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  var FORBID_TAGS = null;
  var FORBID_ATTR = null;
  var ALLOW_ARIA_ATTR = true;
  var ALLOW_DATA_ATTR = true;
  var ALLOW_UNKNOWN_PROTOCOLS = false;
  var SAFE_FOR_TEMPLATES = false;
  var WHOLE_DOCUMENT = false;
  var SET_CONFIG = false;
  var FORCE_BODY = false;
  var RETURN_DOM = false;
  var RETURN_DOM_FRAGMENT = false;
  var RETURN_TRUSTED_TYPE = false;
  var SANITIZE_DOM = true;
  var SANITIZE_NAMED_PROPS = false;
  var SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  var KEEP_CONTENT = true;
  var IN_PLACE = false;
  var USE_PROFILES = {};
  var FORBID_CONTENTS = null;
  var DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  var DATA_URI_TAGS = null;
  var DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
  var URI_SAFE_ATTRIBUTES = null;
  var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  var MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  var NAMESPACE = HTML_NAMESPACE;
  var IS_EMPTY_INPUT = false;
  var PARSER_MEDIA_TYPE;
  var SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  var DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  var transformCaseFunc;
  var CONFIG = null;
  var formElement = document2.createElement("form");
  var isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  var _parseConfig = function _parseConfig2(cfg) {
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || _typeof$1(cfg) !== "object") {
      cfg = {};
    }
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? function(x2) {
      return x2;
    } : stringToLowerCase;
    ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
    URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(
      clone(DEFAULT_URI_SAFE_ATTRIBUTES),
      cfg.ADD_URI_SAFE_ATTR,
      transformCaseFunc
    ) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(
      clone(DEFAULT_DATA_URI_TAGS),
      cfg.ADD_DATA_URI_TAGS,
      transformCaseFunc
    ) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = "FORBID_CONTENTS" in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
    FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
    USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, _toConsumableArray$1(text));
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1$1);
        addToSet(ALLOWED_ATTR, html$2);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
  var HTML_INTEGRATION_POINTS = addToSet({}, ["foreignobject", "desc", "title", "annotation-xml"]);
  var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
  var ALL_SVG_TAGS = addToSet({}, svg$1);
  addToSet(ALL_SVG_TAGS, svgFilters);
  addToSet(ALL_SVG_TAGS, svgDisallowed);
  var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
  addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
  var _checkValidNamespace = function _checkValidNamespace2(element) {
    var parent = getParentNode(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: HTML_NAMESPACE,
        tagName: "template"
      };
    }
    var tagName = stringToLowerCase(element.tagName);
    var parentTagName = stringToLowerCase(parent.tagName);
    if (element.namespaceURI === SVG_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "svg";
      }
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }
      return Boolean(ALL_SVG_TAGS[tagName]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "math";
      }
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
      }
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
    }
    return false;
  };
  var _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });
    try {
      node.parentNode.removeChild(node);
    } catch (_) {
      try {
        node.outerHTML = emptyHTML;
      } catch (_2) {
        node.remove();
      }
    }
  };
  var _removeAttribute = function _removeAttribute2(name, node) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: node.getAttributeNode(name),
        from: node
      });
    } catch (_) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: node
      });
    }
    node.removeAttribute(name);
    if (name === "is" && !ALLOWED_ATTR[name]) {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(node);
        } catch (_) {
        }
      } else {
        try {
          node.setAttribute(name, "");
        } catch (_) {
        }
      }
    }
  };
  var _initDocument = function _initDocument2(dirty) {
    var doc2;
    var leadingWhitespace;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      var matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml") {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc2 = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_) {
      }
    }
    if (!doc2 || !doc2.documentElement) {
      doc2 = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc2.documentElement.innerHTML = IS_EMPTY_INPUT ? "" : dirtyPayload;
      } catch (_) {
      }
    }
    var body = doc2.body || doc2.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc2, WHOLE_DOCUMENT ? "html" : "body")[0];
    }
    return WHOLE_DOCUMENT ? doc2.documentElement : body;
  };
  var _createIterator = function _createIterator2(root) {
    return createNodeIterator.call(
      root.ownerDocument || root,
      root,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT,
      null,
      false
    );
  };
  var _isClobbered = function _isClobbered2(elm) {
    return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function");
  };
  var _isNode = function _isNode2(object) {
    return _typeof$1(Node) === "object" ? object instanceof Node : object && _typeof$1(object) === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string";
  };
  var _executeHook = function _executeHook2(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }
    arrayForEach(hooks[entryPoint], function(hook) {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };
  var _sanitizeElements = function _sanitizeElements2(currentNode) {
    var content;
    _executeHook("beforeSanitizeElements", currentNode, null);
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
      _forceRemove(currentNode);
      return true;
    }
    var tagName = transformCaseFunc(currentNode.nodeName);
    _executeHook("uponSanitizeElement", currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }
    if (tagName === "select" && regExpTest(/<template/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName))
          return false;
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName))
          return false;
      }
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        var parentNode = getParentNode(currentNode) || currentNode.parentNode;
        var childNodes = getChildNodes(currentNode) || currentNode.childNodes;
        if (childNodes && parentNode) {
          var childCount = childNodes.length;
          for (var i = childCount - 1; i >= 0; --i) {
            parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode instanceof Element2 && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed") && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      content = currentNode.textContent;
      content = stringReplace(content, MUSTACHE_EXPR$1, " ");
      content = stringReplace(content, ERB_EXPR$1, " ");
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    _executeHook("afterSanitizeElements", currentNode, null);
    return false;
  };
  var _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
      return false;
    }
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName))
      ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName))
      ;
    else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if (_basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value)))
        ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName])
      ;
    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, "")))
      ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag])
      ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, "")))
      ;
    else if (!value)
      ;
    else {
      return false;
    }
    return true;
  };
  var _basicCustomElementTest = function _basicCustomElementTest2(tagName) {
    return tagName.indexOf("-") > 0;
  };
  var _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    var attr;
    var value;
    var lcName;
    var l2;
    _executeHook("beforeSanitizeAttributes", currentNode, null);
    var attributes = currentNode.attributes;
    if (!attributes) {
      return;
    }
    var hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    l2 = attributes.length;
    while (l2--) {
      attr = attributes[l2];
      var _attr = attr, name = _attr.name, namespaceURI = _attr.namespaceURI;
      value = name === "value" ? attr.value : stringTrim(attr.value);
      lcName = transformCaseFunc(name);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      _removeAttribute(name, currentNode);
      if (!hookEvent.keepAttr) {
        continue;
      }
      if (regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        value = stringReplace(value, MUSTACHE_EXPR$1, " ");
        value = stringReplace(value, ERB_EXPR$1, " ");
      }
      var lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
        _removeAttribute(name, currentNode);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      if (trustedTypesPolicy && _typeof$1(trustedTypes) === "object" && typeof trustedTypes.getAttributeType === "function") {
        if (namespaceURI)
          ;
        else {
          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
            case "TrustedHTML":
              value = trustedTypesPolicy.createHTML(value);
              break;
            case "TrustedScriptURL":
              value = trustedTypesPolicy.createScriptURL(value);
              break;
          }
        }
      }
      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name, value);
        } else {
          currentNode.setAttribute(name, value);
        }
        arrayPop(DOMPurify.removed);
      } catch (_) {
      }
    }
    _executeHook("afterSanitizeAttributes", currentNode, null);
  };
  var _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
    var shadowNode;
    var shadowIterator = _createIterator(fragment);
    _executeHook("beforeSanitizeShadowDOM", fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHook("uponSanitizeShadowNode", shadowNode, null);
      if (_sanitizeElements(shadowNode)) {
        continue;
      }
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
      _sanitizeAttributes(shadowNode);
    }
    _executeHook("afterSanitizeShadowDOM", fragment, null);
  };
  DOMPurify.sanitize = function(dirty) {
    var cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var body;
    var importedNode;
    var currentNode;
    var oldNode;
    var returnNode;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      if (typeof dirty.toString !== "function") {
        throw typeErrorCreate("toString is not a function");
      } else {
        dirty = dirty.toString();
        if (typeof dirty !== "string") {
          throw typeErrorCreate("dirty is not a string, aborting");
        }
      }
    }
    if (!DOMPurify.isSupported) {
      if (_typeof$1(window2.toStaticHTML) === "object" || typeof window2.toStaticHTML === "function") {
        if (typeof dirty === "string") {
          return window2.toStaticHTML(dirty);
        }
        if (_isNode(dirty)) {
          return window2.toStaticHTML(dirty.outerHTML);
        }
      }
      return dirty;
    }
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    DOMPurify.removed = [];
    if (typeof dirty === "string") {
      IN_PLACE = false;
    }
    if (IN_PLACE) {
      if (dirty.nodeName) {
        var tagName = transformCaseFunc(dirty.nodeName);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
    } else if (dirty instanceof Node) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
    while (currentNode = nodeIterator.nextNode()) {
      if (currentNode.nodeType === 3 && currentNode === oldNode) {
        continue;
      }
      if (_sanitizeElements(currentNode)) {
        continue;
      }
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
      _sanitizeAttributes(currentNode);
      oldNode = currentNode;
    }
    oldNode = null;
    if (IN_PLACE) {
      return dirty;
    }
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, " ");
      serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, " ");
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function(cfg) {
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    var lcTag = transformCaseFunc(tag);
    var lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    hooks[entryPoint] = hooks[entryPoint] || [];
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint) {
    if (hooks[entryPoint]) {
      return arrayPop(hooks[entryPoint]);
    }
  };
  DOMPurify.removeHooks = function(entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };
  DOMPurify.removeAllHooks = function() {
    hooks = {};
  };
  return DOMPurify;
}
var purify = createDOMPurify();
function importScript(url, name) {
  return new Promise(function(resolve, reject) {
    var script = document.createElement("script");
    script.async = true;
    script.crossOrigin = "anonymous";
    var destroy = function destroy2() {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (name && window[name]) {
        delete window[name];
      }
    };
    script.onload = function() {
      resolve(window[name]);
      destroy();
    };
    script.onerror = function() {
      reject(new Error("Failed to import: ".concat(url)));
      destroy();
    };
    script.src = url;
    document.head.appendChild(script);
  });
}
function lazyComponent(url, name, success2, fail2) {
  var ret = /* @__PURE__ */ React.lazy(function() {
    return importScript(url, name).then(function(res) {
      if (!res.default) {
        throw new Error("Failed to import ".concat(name, " component: no default export"));
      }
      ret.WrappedComponent = res.default || res;
      if (success2) {
        success2();
      }
      return res;
    }).catch(function(err) {
      if (fail2) {
        fail2(err);
      }
      return {
        default: function _default() {
          return /* @__PURE__ */ React.createElement(React.Fragment, null);
        }
      };
    });
  });
  return ret;
}
function mountComponent(Comp) {
  var root = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document.body;
  var div = document.createElement("div");
  root.appendChild(div);
  var Clone = /* @__PURE__ */ React.cloneElement(Comp, {
    onUnmount: function onUnmount() {
      ReactDOM.unmountComponentAtNode(div);
      root.removeChild(div);
    }
  });
  ReactDOM.render(Clone, div);
  return div;
}
function useClickOutside(handler) {
  var eventName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "click";
  var ref = react.exports.useRef();
  react.exports.useEffect(function() {
    var listener = function listener2(e) {
      var targetElement = ref.current;
      if (!targetElement || targetElement.contains(e.target)) {
        return;
      }
      if (handler) {
        handler(e);
      }
    };
    document.addEventListener(eventName, listener);
    return function() {
      document.removeEventListener(eventName, listener);
    };
  }, [eventName, handler]);
  return ref;
}
function useForwardRef(ref) {
  var targetRef = react.exports.useRef(null);
  react.exports.useEffect(function() {
    if (!ref)
      return;
    if (typeof ref === "function") {
      ref(targetRef.current);
    } else {
      ref.current = targetRef.current;
    }
  }, [ref]);
  return targetRef;
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function getRandomString() {
  var x2 = 2147483648;
  return Math.floor(Math.random() * x2).toString(36) + Math.abs(Math.floor(Math.random() * x2) ^ Date.now()).toString(36);
}
function reflow(el) {
  return el.offsetHeight;
}
function ownKeys$6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols2 = symbols2.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$6(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var TIME_GAP = 5 * 60 * 1e3;
var lastTs = 0;
var makeMsg = function makeMsg2(msg, id2) {
  var ts2 = msg.createdAt || Date.now();
  var hasTime = msg.hasTime || ts2 - lastTs > TIME_GAP;
  if (hasTime) {
    lastTs = ts2;
  }
  return _objectSpread$6(_objectSpread$6({}, msg), {}, {
    _id: msg._id || id2 || getRandomString(),
    createdAt: ts2,
    position: msg.position || "left",
    hasTime
  });
};
var TYPING_ID = "_TYPING_";
function useMessages() {
  var initialState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var initialMsgs = react.exports.useMemo(function() {
    return initialState.map(function(t2) {
      return makeMsg(t2);
    });
  }, [initialState]);
  var _useState = react.exports.useState(initialMsgs), _useState2 = _slicedToArray(_useState, 2), messages = _useState2[0], setMessages = _useState2[1];
  var isTypingRef = react.exports.useRef(false);
  var prependMsgs = react.exports.useCallback(function(msgs) {
    setMessages(function(prev) {
      return [].concat(_toConsumableArray(msgs), _toConsumableArray(prev));
    });
  }, []);
  var updateMsg = react.exports.useCallback(function(id2, msg) {
    setMessages(function(prev) {
      return prev.map(function(t2) {
        return t2._id === id2 ? makeMsg(msg, id2) : t2;
      });
    });
  }, []);
  var appendMsg = react.exports.useCallback(function(msg) {
    var newMsg = makeMsg(msg);
    if (isTypingRef.current) {
      isTypingRef.current = false;
      updateMsg(TYPING_ID, newMsg);
    } else {
      setMessages(function(prev) {
        return [].concat(_toConsumableArray(prev), [newMsg]);
      });
    }
  }, [updateMsg]);
  var deleteMsg = react.exports.useCallback(function(id2) {
    setMessages(function(prev) {
      return prev.filter(function(t2) {
        return t2._id !== id2;
      });
    });
  }, []);
  var resetList = react.exports.useCallback(function() {
    var list = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    setMessages(list);
  }, []);
  var setTyping = react.exports.useCallback(function(typing) {
    if (typing === isTypingRef.current)
      return;
    if (typing) {
      appendMsg({
        _id: TYPING_ID,
        type: "typing"
      });
    } else {
      deleteMsg(TYPING_ID);
    }
    isTypingRef.current = typing;
  }, [appendMsg, deleteMsg]);
  return {
    messages,
    prependMsgs,
    appendMsg,
    updateMsg,
    deleteMsg,
    resetList,
    setTyping
  };
}
function useMount(_ref2) {
  var _ref$active = _ref2.active, active = _ref$active === void 0 ? false : _ref$active, ref = _ref2.ref, _ref$delay = _ref2.delay, delay = _ref$delay === void 0 ? 300 : _ref$delay;
  var _useState = react.exports.useState(false), _useState2 = _slicedToArray(_useState, 2), isShow = _useState2[0], setIsShow = _useState2[1];
  var _useState3 = react.exports.useState(false), _useState4 = _slicedToArray(_useState3, 2), didMount = _useState4[0], setDidMount = _useState4[1];
  var timeout = react.exports.useRef();
  react.exports.useEffect(function() {
    if (active) {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      setDidMount(active);
    } else {
      setIsShow(active);
      timeout.current = setTimeout(function() {
        setDidMount(active);
      }, delay);
    }
  }, [active, delay]);
  react.exports.useEffect(function() {
    if (ref.current) {
      reflow(ref.current);
    }
    setIsShow(didMount);
  }, [didMount, ref]);
  return {
    didMount,
    isShow
  };
}
function useQuickReplies() {
  var initialState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var _useState = react.exports.useState(initialState), _useState2 = _slicedToArray(_useState, 2), quickReplies = _useState2[0], setQuickReplies = _useState2[1];
  var _useState3 = react.exports.useState(true), _useState4 = _slicedToArray(_useState3, 2), visible = _useState4[0], setVisible = _useState4[1];
  var savedRef = react.exports.useRef();
  var stashRef = react.exports.useRef();
  react.exports.useEffect(function() {
    savedRef.current = quickReplies;
  }, [quickReplies]);
  var prepend = function prepend2(list) {
    setQuickReplies(function(prev) {
      return [].concat(_toConsumableArray(list), _toConsumableArray(prev));
    });
  };
  var save = function save2() {
    stashRef.current = savedRef.current;
  };
  var pop = function pop2() {
    if (stashRef.current) {
      setQuickReplies(stashRef.current);
    }
  };
  return {
    quickReplies,
    prepend,
    replace: setQuickReplies,
    visible,
    setVisible,
    save,
    pop
  };
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
var _excluded$H = ["FallbackComponent", "children"];
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var ErrorBoundary$1 = /* @__PURE__ */ function(_React$Component) {
  _inherits(ErrorBoundary2, _React$Component);
  var _super = _createSuper(ErrorBoundary2);
  function ErrorBoundary2(props) {
    var _this;
    _classCallCheck(this, ErrorBoundary2);
    _this = _super.call(this, props);
    _this.state = {
      error: null,
      errorInfo: null
    };
    return _this;
  }
  _createClass(ErrorBoundary2, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      var onError = this.props.onError;
      if (onError) {
        onError(error, errorInfo);
      }
      this.setState({
        error,
        errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props, FallbackComponent = _this$props.FallbackComponent, children = _this$props.children, rest = _objectWithoutProperties(_this$props, _excluded$H);
      var _this$state = this.state, error = _this$state.error, errorInfo = _this$state.errorInfo;
      if (errorInfo) {
        if (FallbackComponent) {
          return /* @__PURE__ */ React.createElement(FallbackComponent, _extends({
            error,
            errorInfo
          }, rest));
        }
        return null;
      }
      return children;
    }
  }]);
  return ErrorBoundary2;
}(React.Component);
var _excluded$G = ["component", "onError", "fallback"];
var SuspenseWrap = function SuspenseWrap2(props) {
  var Comp = props.component, onError = props.onError, fallback = props.fallback, rest = _objectWithoutProperties(props, _excluded$G);
  return Comp ? /* @__PURE__ */ React.createElement(ErrorBoundary$1, {
    onError
  }, /* @__PURE__ */ React.createElement(react.exports.Suspense, {
    fallback: fallback || null
  }, /* @__PURE__ */ React.createElement(Comp, rest))) : null;
};
var ComponentsContext = /* @__PURE__ */ React.createContext({
  addComponent: function addComponent() {
  },
  hasComponent: function hasComponent() {
    return false;
  },
  getComponent: function getComponent() {
    return null;
  }
});
function useComponents$1() {
  return React.useContext(ComponentsContext);
}
var _excluded$F = ["code", "fallback", "onLoad", "onError"], _excluded2$1 = ["component", "code", "onLoad"];
var LazyComponentWithCode = function LazyComponentWithCode2(props) {
  var code = props.code, fallback = props.fallback, onLoad = props.onLoad, onError = props.onError, rest = _objectWithoutProperties(props, _excluded$F);
  var _useComponents = useComponents$1(), getComponent2 = _useComponents.getComponent;
  var Comp = getComponent2(code, function(res) {
    if ("async" in res && onLoad) {
      onLoad(res);
    } else if ("errCode" in res && onError) {
      onError(new Error(res.errCode));
    }
  });
  return /* @__PURE__ */ React.createElement(SuspenseWrap, _extends({
    component: Comp,
    onError,
    fallback
  }, rest));
};
var LazyComponent$1 = function LazyComponent2(props) {
  var component = props.component, code = props.code, onLoad = props.onLoad, rest = _objectWithoutProperties(props, _excluded2$1);
  if (component) {
    if (onLoad) {
      onLoad({
        async: false,
        component
      });
    }
    return /* @__PURE__ */ React.createElement(SuspenseWrap, _extends({
      component
    }, rest));
  }
  return /* @__PURE__ */ React.createElement(LazyComponentWithCode, _extends({
    code,
    onLoad
  }, rest));
};
function ownKeys$5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols2 = symbols2.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$5(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var ComponentsProvider$1 = function ComponentsProvider2(props) {
  var components2 = props.components, children = props.children;
  var componentsRef = React.useRef(_objectSpread$5({}, components2));
  react.exports.useEffect(function() {
    componentsRef.current = _objectSpread$5(_objectSpread$5({}, components2), componentsRef.current);
  }, [components2]);
  function addComponent2(code, val) {
    componentsRef.current[code] = val;
  }
  function hasComponent2(code) {
    return componentsRef.current.hasOwnProperty(code);
  }
  function getComponent2(code) {
    var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    };
    var comp = componentsRef.current[code];
    if (!comp) {
      callback({
        code,
        errCode: "NO_CODE"
      });
      return null;
    }
    if ("component" in comp) {
      if (comp.type !== "decorator") {
        callback({
          code,
          async: false,
          component: comp.component
        });
      }
      return comp.component;
    }
    if ("decorator" in comp) {
      var component = function component2(compProps) {
        return /* @__PURE__ */ React.createElement(LazyComponentWithCode, _extends({
          code: comp.decorator,
          decoratorData: comp.data,
          onLoad: callback
        }, compProps));
      };
      componentsRef.current[code] = {
        component,
        type: "decorator"
      };
      return component;
    }
    if ("url" in comp) {
      var _component = lazyComponent(comp.url, comp.name, function() {
        componentsRef.current[code] = {
          component: _component
        };
        callback({
          code,
          async: true,
          component: _component
        });
      }, function() {
        callback({
          code,
          errCode: "ERR_IMPORT_SCRIPT"
        });
      });
      return _component;
    }
    callback({
      code,
      errCode: "NO_HANDLER"
    });
    return null;
  }
  return /* @__PURE__ */ React.createElement(ComponentsContext.Provider, {
    value: {
      addComponent: addComponent2,
      hasComponent: hasComponent2,
      getComponent: getComponent2
    }
  }, children);
};
var Avatar$1 = function Avatar2(props) {
  var className = props.className, src = props.src, alt = props.alt, url = props.url, _props$size = props.size, size = _props$size === void 0 ? "md" : _props$size, _props$shape = props.shape, shape = _props$shape === void 0 ? "circle" : _props$shape, children = props.children;
  var Element2 = url ? "a" : "span";
  return /* @__PURE__ */ React.createElement(Element2, {
    className: clsx("Avatar", "Avatar--".concat(size), "Avatar--".concat(shape), className),
    href: url
  }, src ? /* @__PURE__ */ React.createElement("img", {
    src,
    alt
  }) : children);
};
var _excluded$E = ["className", "active", "onClick"];
var Backdrop = function Backdrop2(props) {
  var className = props.className, active = props.active, onClick = props.onClick, rest = _objectWithoutProperties(props, _excluded$E);
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("Backdrop", className, {
      active
    }),
    onClick,
    role: "button",
    tabIndex: -1,
    "aria-hidden": true
  }, rest));
};
var _excluded$D = ["type", "content", "children"];
var Bubble$1 = function Bubble2(props) {
  var _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, content = props.content, children = props.children, other = _objectWithoutProperties(props, _excluded$D);
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: "Bubble ".concat(type),
    "data-type": type
  }, other), content && /* @__PURE__ */ React.createElement("p", null, content), children);
};
var _excluded$C = ["type", "className", "spin", "name"];
var Icon$1 = function Icon2(props) {
  var type = props.type, className = props.className, spin = props.spin, name = props.name, other = _objectWithoutProperties(props, _excluded$C);
  var ariaProps = typeof name === "string" ? {
    "aria-label": name
  } : {
    "aria-hidden": true
  };
  return /* @__PURE__ */ React.createElement("svg", _extends({
    className: clsx("Icon", {
      "is-spin": spin
    }, className)
  }, ariaProps, other), /* @__PURE__ */ React.createElement("use", {
    xlinkHref: "#icon-".concat(type)
  }));
};
var _excluded$B = ["className", "label", "color", "variant", "size", "icon", "loading", "block", "disabled", "children", "onClick"];
function composeClass(type) {
  return type && "Btn--".concat(type);
}
var Button$1 = function Button2(props) {
  var className = props.className, label = props.label, color = props.color, variant = props.variant, oSize = props.size, oIcon = props.icon, loading2 = props.loading, block = props.block, disabled = props.disabled, children = props.children, onClick = props.onClick, other = _objectWithoutProperties(props, _excluded$B);
  var icon = oIcon || loading2 && "spinner";
  var size = oSize || (block ? "lg" : "");
  function handleClick(e) {
    if (!disabled && !loading2 && onClick) {
      onClick(e);
    }
  }
  return /* @__PURE__ */ React.createElement("button", _extends({
    className: clsx("Btn", composeClass(color), composeClass(variant), composeClass(size), {
      "Btn--block": block
    }, className),
    type: "button",
    disabled,
    onClick: handleClick
  }, other), icon && /* @__PURE__ */ React.createElement("span", {
    className: "Btn-icon"
  }, /* @__PURE__ */ React.createElement(Icon$1, {
    type: icon,
    spin: loading2
  })), label || children);
};
var _excluded$A = ["className", "size", "fluid", "children"];
var Card$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var className = props.className, size = props.size, fluid = props.fluid, children = props.children, other = _objectWithoutProperties(props, _excluded$A);
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("Card", size && "Card--".concat(size), {
      "Card--fluid": fluid
    }, className),
    "data-fluid": fluid
  }, other, {
    ref
  }), children);
});
var _excluded$z = ["as", "className", "inline", "center", "direction", "wrap", "justifyContent", "justify", "alignItems", "align", "children"];
var mapDirection = {
  row: "Flex--d-r",
  "row-reverse": "Flex--d-rr",
  column: "Flex--d-c",
  "column-reverse": "Flex--d-cr"
};
var mapWrap = {
  nowrap: "Flex--w-n",
  wrap: "Flex--w-w",
  "wrap-reverse": "Flex--w-wr"
};
var mapJustify = {
  "flex-start": "Flex--jc-fs",
  "flex-end": "Flex--jc-fe",
  center: "Flex--jc-c",
  "space-between": "Flex--jc-sb",
  "space-around": "Flex--jc-sa"
};
var mapAlign = {
  "flex-start": "Flex--ai-fs",
  "flex-end": "Flex--ai-fe",
  center: "Flex--ai-c"
};
var Flex$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var _props$as = props.as, Element2 = _props$as === void 0 ? "div" : _props$as, className = props.className, inline = props.inline, center = props.center, direction = props.direction, wrap = props.wrap, justifyContent = props.justifyContent, _props$justify = props.justify, justify = _props$justify === void 0 ? justifyContent : _props$justify, alignItems = props.alignItems, _props$align = props.align, align = _props$align === void 0 ? alignItems : _props$align, children = props.children, other = _objectWithoutProperties(props, _excluded$z);
  return /* @__PURE__ */ React.createElement(Element2, _extends({
    className: clsx("Flex", direction && mapDirection[direction], justify && mapJustify[justify], align && mapAlign[align], wrap && mapWrap[wrap], {
      "Flex--inline": inline,
      "Flex--center": center
    }, className),
    ref
  }, other), children);
});
var _excluded$y = ["className", "flex", "alignSelf", "order", "style", "children"];
function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols2 = symbols2.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$4(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var FlexItem = function FlexItem2(props) {
  var className = props.className, flex = props.flex, alignSelf = props.alignSelf, order = props.order, style2 = props.style, children = props.children, other = _objectWithoutProperties(props, _excluded$y);
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("FlexItem", className),
    style: _objectSpread$4(_objectSpread$4({}, style2), {}, {
      flex,
      alignSelf,
      order
    })
  }, other), children);
};
var _excluded$x = ["className", "aspectRatio", "color", "image", "children"];
var CardMedia = function CardMedia2(props) {
  var className = props.className, _props$aspectRatio = props.aspectRatio, aspectRatio = _props$aspectRatio === void 0 ? "square" : _props$aspectRatio, color = props.color, image = props.image, children = props.children, other = _objectWithoutProperties(props, _excluded$x);
  var bgStyle = {
    backgroundColor: color || void 0,
    backgroundImage: typeof image === "string" ? "url('".concat(image, "')") : void 0
  };
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("CardMedia", {
      "CardMedia--wide": aspectRatio === "wide",
      "CardMedia--square": aspectRatio === "square"
    }, className),
    style: bgStyle
  }, other), children && /* @__PURE__ */ React.createElement(Flex$1, {
    className: "CardMedia-content",
    direction: "column",
    center: true
  }, children));
};
var _excluded$w = ["className", "children"];
var CardContent = function CardContent2(props) {
  var className = props.className, children = props.children, other = _objectWithoutProperties(props, _excluded$w);
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("CardContent", className)
  }, other), children);
};
var _excluded$v = ["className", "title", "subtitle", "center", "children"];
var CardTitle = function CardTitle2(props) {
  var className = props.className, title = props.title, subtitle = props.subtitle, center = props.center, children = props.children, other = _objectWithoutProperties(props, _excluded$v);
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("CardTitle", {
      "CardTitle--center": center
    }, className)
  }, other), title && /* @__PURE__ */ React.createElement("h5", {
    className: "CardTitle-title"
  }, title), children && typeof children === "string" && /* @__PURE__ */ React.createElement("h5", {
    className: "CardTitle-title"
  }, children), subtitle && /* @__PURE__ */ React.createElement("p", {
    className: "CardTitle-subtitle"
  }, subtitle), children && typeof children !== "string" && children);
};
var _excluded$u = ["className", "children"];
var CardText = function CardText2(props) {
  var className = props.className, children = props.children, other = _objectWithoutProperties(props, _excluded$u);
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("CardText", className)
  }, other), typeof children === "string" ? /* @__PURE__ */ React.createElement("p", null, children) : children);
};
var _excluded$t = ["children", "className", "direction"];
var CardActions = function CardActions2(props) {
  var children = props.children, className = props.className, direction = props.direction, other = _objectWithoutProperties(props, _excluded$t);
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("CardActions", className, direction && "CardActions--".concat(direction))
  }, other), children);
};
var CarouselItem = function CarouselItem2(props) {
  var width = props.width, children = props.children;
  return /* @__PURE__ */ React.createElement("div", {
    className: "Carousel-item",
    style: {
      width
    }
  }, children);
};
var setTransform = function setTransform2(el, value) {
  el.style.transform = value;
  el.style.webkitTransform = value;
};
var setTransition = function setTransition2(el, value) {
  el.style.transition = value;
  el.style.webkitTransition = value;
};
var testCache = {
  passiveListener: function passiveListener() {
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty({}, "passive", {
        get: function get() {
          supportsPassive = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e) {
    }
    return supportsPassive;
  },
  smoothScroll: function smoothScroll2() {
    return "scrollBehavior" in document.documentElement.style;
  },
  touch: function touch() {
    return "ontouchstart" in window;
  }
};
function canUse(name) {
  return testCache[name]();
}
var formElements = ["TEXTAREA", "OPTION", "INPUT", "SELECT"];
var canTouch$1 = canUse("touch");
var Carousel$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var className = props.className, _props$startIndex = props.startIndex, startIndex = _props$startIndex === void 0 ? 0 : _props$startIndex, _props$draggable = props.draggable, draggable = _props$draggable === void 0 ? true : _props$draggable, _props$duration = props.duration, duration = _props$duration === void 0 ? 300 : _props$duration, _props$easing = props.easing, easing = _props$easing === void 0 ? "ease" : _props$easing, _props$threshold = props.threshold, threshold = _props$threshold === void 0 ? 20 : _props$threshold, _props$clickDragThres = props.clickDragThreshold, clickDragThreshold = _props$clickDragThres === void 0 ? 10 : _props$clickDragThres, _props$loop = props.loop, loop = _props$loop === void 0 ? true : _props$loop, _props$rtl = props.rtl, rtl = _props$rtl === void 0 ? false : _props$rtl, _props$autoPlay = props.autoPlay, autoPlay = _props$autoPlay === void 0 ? props.autoplay || false : _props$autoPlay, _props$interval = props.interval, interval = _props$interval === void 0 ? props.autoplaySpeed || 4e3 : _props$interval, _props$dots = props.dots, dots = _props$dots === void 0 ? props.indicators || true : _props$dots, onChange = props.onChange, children = props.children;
  var count = React.Children.count(children);
  var itemWith = "".concat(100 / count, "%");
  var wrapperRef = react.exports.useRef(null);
  var innerRef = react.exports.useRef(null);
  var autoPlayTimerRef = react.exports.useRef(null);
  var stateRef = react.exports.useRef({
    first: true,
    wrapWidth: 0,
    hover: false,
    startX: 0,
    endX: 0,
    startY: 0,
    canMove: null,
    pressDown: false
  });
  var getIndex = react.exports.useCallback(function(idx) {
    return loop ? idx % count : Math.max(0, Math.min(idx, count - 1));
  }, [count, loop]);
  var _useState = react.exports.useState(getIndex(startIndex)), _useState2 = _slicedToArray(_useState, 2), activeIndex = _useState2[0], setActiveIndex = _useState2[1];
  var _useState3 = react.exports.useState(false), _useState4 = _slicedToArray(_useState3, 2), isDragging = _useState4[0], setDragging = _useState4[1];
  var enableTransition = react.exports.useCallback(function() {
    setTransition(innerRef.current, "transform ".concat(duration, "ms ").concat(easing));
  }, [duration, easing]);
  var disableTransition = function disableTransition2() {
    setTransition(innerRef.current, "transform 0s");
  };
  var moveX = function moveX2(x2) {
    setTransform(innerRef.current, "translate3d(".concat(x2, "px, 0, 0)"));
  };
  var slideTo = react.exports.useCallback(function(idx, smooth) {
    var nextIndex = loop ? idx + 1 : idx;
    var offset = (rtl ? 1 : -1) * nextIndex * stateRef.current.wrapWidth;
    if (smooth) {
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          enableTransition();
          moveX(offset);
        });
      });
    } else {
      moveX(offset);
    }
  }, [enableTransition, loop, rtl]);
  var goTo = react.exports.useCallback(function(idx) {
    if (count <= 1) {
      return;
    }
    var nextIndex = getIndex(idx);
    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  }, [activeIndex, count, getIndex]);
  var prev = react.exports.useCallback(function() {
    if (count <= 1) {
      return;
    }
    var nextIndex = activeIndex - 1;
    if (loop) {
      if (nextIndex < 0) {
        var state = stateRef.current;
        var moveTo = count + 1;
        var offset = (rtl ? 1 : -1) * moveTo * state.wrapWidth;
        var dragDist = draggable ? state.endX - state.startX : 0;
        disableTransition();
        moveX(offset + dragDist);
        nextIndex = count - 1;
      }
    } else {
      nextIndex = Math.max(nextIndex, 0);
    }
    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  }, [activeIndex, count, draggable, loop, rtl]);
  var next = react.exports.useCallback(function() {
    if (count <= 1) {
      return;
    }
    var nextIndex = activeIndex + 1;
    if (loop) {
      var isClone = nextIndex > count - 1;
      if (isClone) {
        nextIndex = 0;
        var state = stateRef.current;
        var dragDist = draggable ? state.endX - state.startX : 0;
        disableTransition();
        moveX(dragDist);
      }
    } else {
      nextIndex = Math.min(nextIndex, count - 1);
    }
    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  }, [activeIndex, count, draggable, loop]);
  var doAutoPlay = react.exports.useCallback(function() {
    if (!autoPlay || stateRef.current.hover) {
      return;
    }
    autoPlayTimerRef.current = setTimeout(function() {
      enableTransition();
      next();
    }, interval);
  }, [autoPlay, interval, enableTransition, next]);
  var clearAutoPlay = function clearAutoPlay2() {
    clearTimeout(autoPlayTimerRef.current);
  };
  var resetToCurrent = function resetToCurrent2() {
    slideTo(activeIndex, true);
    doAutoPlay();
  };
  var updateAfterDrag = function updateAfterDrag2() {
    var state = stateRef.current;
    var offset = (rtl ? -1 : 1) * (state.endX - state.startX);
    var offsetDist = Math.abs(offset);
    var isClone1 = offset > 0 && activeIndex - 1 < 0;
    var isClone2 = offset < 0 && activeIndex + 1 > count - 1;
    if (isClone1 || isClone2) {
      if (loop) {
        if (isClone1) {
          prev();
        } else {
          next();
        }
      } else {
        resetToCurrent();
      }
    } else if (offset > 0 && offsetDist > threshold && count > 1) {
      prev();
    } else if (offset < 0 && offsetDist > threshold && count > 1) {
      next();
    } else {
      resetToCurrent();
    }
  };
  var resetDrag = function resetDrag2() {
    var state = stateRef.current;
    state.startX = 0;
    state.endX = 0;
    state.startY = 0;
    state.canMove = null;
    state.pressDown = false;
  };
  var dragStart = function dragStart2(e) {
    if (formElements.includes(e.target.nodeName)) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    var ev = "touches" in e ? e.touches[0] : e;
    var state = stateRef.current;
    state.pressDown = true;
    state.startX = ev.pageX;
    state.startY = ev.pageY;
    clearAutoPlay();
  };
  var dragMove = function dragMove2(e) {
    e.stopPropagation();
    var ev = "touches" in e ? e.touches[0] : e;
    var state = stateRef.current;
    if (state.pressDown) {
      if ("touches" in e) {
        if (state.canMove === null) {
          state.canMove = Math.abs(state.startY - ev.pageY) < Math.abs(state.startX - ev.pageX);
        }
        if (!state.canMove) {
          return;
        }
      }
      e.preventDefault();
      disableTransition();
      state.endX = ev.pageX;
      var nextIndex = loop ? activeIndex + 1 : activeIndex;
      var nextOffset = nextIndex * state.wrapWidth;
      var dragOffset = state.endX - state.startX;
      if (!isDragging && Math.abs(dragOffset) > clickDragThreshold) {
        setDragging(true);
      }
      var offset = rtl ? nextOffset + dragOffset : dragOffset - nextOffset;
      moveX(offset);
    }
  };
  var dragEnd = function dragEnd2(e) {
    e.stopPropagation();
    var state = stateRef.current;
    state.pressDown = false;
    setDragging(false);
    enableTransition();
    if (state.endX) {
      updateAfterDrag();
    } else {
      doAutoPlay();
    }
    resetDrag();
  };
  var onMouseEnter = function onMouseEnter2() {
    stateRef.current.hover = true;
    clearAutoPlay();
  };
  var onMouseLeave = function onMouseLeave2(e) {
    var state = stateRef.current;
    state.hover = false;
    if (state.pressDown) {
      state.pressDown = false;
      state.endX = e.pageX;
      enableTransition();
      updateAfterDrag();
      resetDrag();
    }
    doAutoPlay();
  };
  var handleClickDot = function handleClickDot2(e) {
    var i = e.currentTarget.dataset.slideTo;
    if (i) {
      var idx = parseInt(i, 10);
      goTo(idx);
    }
    e.preventDefault();
  };
  react.exports.useImperativeHandle(ref, function() {
    return {
      goTo,
      prev,
      next
    };
  }, [goTo, prev, next]);
  react.exports.useEffect(function() {
    function handleResize() {
      stateRef.current.wrapWidth = wrapperRef.current.offsetWidth;
      slideTo(activeIndex);
    }
    if (stateRef.current.first) {
      handleResize();
    }
    window.addEventListener("resize", handleResize);
    return function() {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex, slideTo]);
  react.exports.useEffect(function() {
    if (onChange && !stateRef.current.first) {
      onChange(activeIndex);
    }
  }, [activeIndex, onChange]);
  react.exports.useEffect(function() {
    if (stateRef.current.first) {
      slideTo(activeIndex);
      stateRef.current.first = false;
    } else {
      slideTo(activeIndex, true);
    }
  }, [activeIndex, slideTo]);
  react.exports.useEffect(function() {
    doAutoPlay();
    return function() {
      clearAutoPlay();
    };
  }, [autoPlay, activeIndex, doAutoPlay]);
  var events;
  if (draggable) {
    events = canTouch$1 ? {
      onTouchStart: dragStart,
      onTouchMove: dragMove,
      onTouchEnd: dragEnd
    } : {
      onMouseDown: dragStart,
      onMouseMove: dragMove,
      onMouseUp: dragEnd,
      onMouseEnter,
      onMouseLeave
    };
  } else {
    events = {
      onMouseEnter,
      onMouseLeave
    };
  }
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("Carousel", {
      "Carousel--draggable": draggable,
      "Carousel--rtl": rtl,
      "Carousel--dragging": isDragging
    }, className),
    ref: wrapperRef
  }, events), /* @__PURE__ */ React.createElement("div", {
    className: "Carousel-inner",
    style: {
      width: "".concat(loop ? count + 2 : count, "00%")
    },
    ref: innerRef
  }, loop && /* @__PURE__ */ React.createElement(CarouselItem, {
    width: itemWith
  }, React.Children.toArray(children)[count - 1]), React.Children.map(children, function(item, i) {
    return /* @__PURE__ */ React.createElement(CarouselItem, {
      width: itemWith,
      key: i
    }, item);
  }), loop && /* @__PURE__ */ React.createElement(CarouselItem, {
    width: itemWith
  }, React.Children.toArray(children)[0])), dots && /* @__PURE__ */ React.createElement("ol", {
    className: "Carousel-dots"
  }, React.Children.map(children, function(_, i) {
    return /* @__PURE__ */ React.createElement("li", {
      key: i
    }, /* @__PURE__ */ React.createElement("button", {
      className: clsx("Carousel-dot", {
        active: activeIndex === i
      }),
      type: "button",
      "aria-label": "Go to slide ".concat(i + 1),
      "data-slide-to": i,
      onClick: handleClickDot
    }));
  })));
});
var _excluded$s = ["className", "label", "checked", "disabled", "onChange"];
var Checkbox$1 = function Checkbox2(props) {
  var className = props.className, label = props.label, checked = props.checked, disabled = props.disabled, onChange = props.onChange, other = _objectWithoutProperties(props, _excluded$s);
  return /* @__PURE__ */ React.createElement("label", {
    className: clsx("Checkbox", className, {
      "Checkbox--checked": checked,
      "Checkbox--disabled": disabled
    })
  }, /* @__PURE__ */ React.createElement("input", _extends({
    type: "checkbox",
    className: "Checkbox-input",
    checked,
    disabled,
    onChange
  }, other)), /* @__PURE__ */ React.createElement("span", {
    className: "Checkbox-text"
  }, label));
};
var CheckboxGroup = function CheckboxGroup2(props) {
  var className = props.className, options2 = props.options, value = props.value, name = props.name, disabled = props.disabled, block = props.block, onChange = props.onChange;
  function handleChange(val, e) {
    var newValue = e.target.checked ? value.concat(val) : value.filter(function(item) {
      return item !== val;
    });
    onChange(newValue, e);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("CheckboxGroup", {
      "CheckboxGroup--block": block
    }, className)
  }, options2.map(function(item) {
    return /* @__PURE__ */ React.createElement(Checkbox$1, {
      label: item.label || item.value,
      value: item.value,
      name,
      checked: value.includes(item.value),
      disabled: "disabled" in item ? item.disabled : disabled,
      onChange: function onChange2(e) {
        handleChange(item.value, e);
      },
      key: item.value
    });
  }));
};
var _excluded$r = ["children", "onClick", "mouseEvent"];
var doc = document;
var html$1 = doc.documentElement;
var ClickOutside = function ClickOutside2(props) {
  var children = props.children, onClick = props.onClick, _props$mouseEvent = props.mouseEvent, mouseEvent = _props$mouseEvent === void 0 ? "mouseup" : _props$mouseEvent, others = _objectWithoutProperties(props, _excluded$r);
  var wrapper = react.exports.useRef(null);
  function handleClick(e) {
    if (!wrapper.current)
      return;
    if (html$1.contains(e.target) && !wrapper.current.contains(e.target)) {
      onClick(e);
    }
  }
  react.exports.useEffect(function() {
    if (mouseEvent) {
      doc.addEventListener(mouseEvent, handleClick);
    }
    return function() {
      doc.removeEventListener(mouseEvent, handleClick);
    };
  });
  return /* @__PURE__ */ React.createElement("div", _extends({
    ref: wrapper
  }, others), children);
};
var _excluded$q = ["className", "position", "children"];
var Divider$1 = function Divider2(props) {
  var className = props.className, _props$position = props.position, position = _props$position === void 0 ? "center" : _props$position, children = props.children, other = _objectWithoutProperties(props, _excluded$q);
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("Divider", !!children && "Divider--text-".concat(position), className),
    role: "separator"
  }, other), children);
};
var IMAGE_EMPTY = "//gw.alicdn.com/tfs/TB1fnnLRkvoK1RjSZFDXXXY3pXa-300-250.svg";
var IMAGE_OOPS = "//gw.alicdn.com/tfs/TB1lRjJRbvpK1RjSZPiXXbmwXXa-300-250.svg";
var Empty$1 = function Empty2(props) {
  var className = props.className, type = props.type, image = props.image, tip = props.tip, children = props.children;
  var imgUrl = image || (type === "error" ? IMAGE_OOPS : IMAGE_EMPTY);
  return /* @__PURE__ */ React.createElement(Flex$1, {
    className: clsx("Empty", className),
    direction: "column",
    center: true
  }, /* @__PURE__ */ React.createElement("img", {
    className: "Empty-img",
    src: imgUrl,
    alt: tip
  }), tip && /* @__PURE__ */ React.createElement("p", {
    className: "Empty-tip"
  }, tip), children);
};
var _excluded$p = ["className", "theme", "children"];
var ThemeContext = /* @__PURE__ */ React.createContext("");
var Form$1 = function Form2(props) {
  var className = props.className, _props$theme = props.theme, theme = _props$theme === void 0 ? "" : _props$theme, children = props.children, other = _objectWithoutProperties(props, _excluded$p);
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: theme
  }, /* @__PURE__ */ React.createElement("form", _extends({
    className: clsx("Form", {
      "is-light": theme === "light"
    }, className)
  }, other), children));
};
var _excluded$o = ["children"];
var Label = function Label2(props) {
  var children = props.children, other = _objectWithoutProperties(props, _excluded$o);
  return /* @__PURE__ */ React.createElement("label", _extends({
    className: "Label"
  }, other), children);
};
var _excluded$n = ["children"];
var HelpText = function HelpText2(props) {
  var children = props.children, others = _objectWithoutProperties(props, _excluded$n);
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: "HelpText"
  }, others), children);
};
var FormItem = function FormItem2(props) {
  var label = props.label, help = props.help, required = props.required, invalid = props.invalid, hidden = props.hidden, children = props.children;
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("FormItem", {
      required,
      "is-invalid": invalid
    }),
    hidden
  }, label && /* @__PURE__ */ React.createElement(Label, null, label), children, help && /* @__PURE__ */ React.createElement(HelpText, null, help));
};
var _excluded$m = ["children"];
var FormActions = function FormActions2(props) {
  var children = props.children, other = _objectWithoutProperties(props, _excluded$m);
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("FormActions")
  }, other), children);
};
var _excluded$l = ["className", "icon", "img"];
var IconButton = function IconButton2(props) {
  var className = props.className, icon = props.icon, img2 = props.img, other = _objectWithoutProperties(props, _excluded$l);
  return /* @__PURE__ */ React.createElement(Button$1, _extends({
    className: clsx("IconBtn", className)
  }, other), icon && /* @__PURE__ */ React.createElement(Icon$1, {
    type: icon
  }), !icon && img2 && /* @__PURE__ */ React.createElement("img", {
    src: img2,
    alt: ""
  }));
};
var _excluded$k = ["className", "src", "lazy", "fluid", "children"];
var Image$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var className = props.className, oSrc = props.src, lazy = props.lazy, fluid = props.fluid;
  props.children;
  var other = _objectWithoutProperties(props, _excluded$k);
  var _useState = react.exports.useState(""), _useState2 = _slicedToArray(_useState, 2), src = _useState2[0], setSrc = _useState2[1];
  var imgRef = useForwardRef(ref);
  var savedSrc = react.exports.useRef("");
  var lazyLoaded = react.exports.useRef(false);
  react.exports.useEffect(function() {
    if (!lazy)
      return void 0;
    var observer = new IntersectionObserver(function(_ref2) {
      var _ref22 = _slicedToArray(_ref2, 1), entry = _ref22[0];
      if (entry.isIntersecting) {
        setSrc(savedSrc.current);
        lazyLoaded.current = true;
        observer.unobserve(entry.target);
      }
    });
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return function() {
      observer.disconnect();
    };
  }, [imgRef, lazy]);
  react.exports.useEffect(function() {
    savedSrc.current = oSrc;
    setSrc(lazy && !lazyLoaded.current ? "" : oSrc);
  }, [lazy, oSrc]);
  return /* @__PURE__ */ React.createElement("img", _extends({
    className: clsx("Image", {
      "Image--fluid": fluid
    }, className),
    src,
    alt: "",
    ref: imgRef
  }, other));
});
function getToBottom(el) {
  return el.scrollHeight - el.scrollTop - el.offsetHeight;
}
var _excluded$j = ["className", "disabled", "distance", "children", "onLoadMore", "onScroll"];
var InfiniteScroll$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var className = props.className, disabled = props.disabled, _props$distance = props.distance, distance = _props$distance === void 0 ? 0 : _props$distance, children = props.children, onLoadMore = props.onLoadMore, onScroll = props.onScroll, other = _objectWithoutProperties(props, _excluded$j);
  var wrapperRef = useForwardRef(ref);
  function handleScroll(e) {
    if (onScroll) {
      onScroll(e);
    }
    var el = wrapperRef.current;
    if (!el)
      return;
    var nearBottom = getToBottom(el) <= distance;
    if (nearBottom) {
      onLoadMore();
    }
  }
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("InfiniteScroll", className),
    role: "feed",
    onScroll: !disabled ? handleScroll : void 0,
    ref: wrapperRef
  }, other), children);
});
var _excluded$i = ["className", "type", "variant", "value", "placeholder", "rows", "minRows", "maxRows", "maxLength", "showCount", "multiline", "autoSize", "onChange"];
function getCount(value, maxLength) {
  return "".concat("".concat(value).length).concat(maxLength ? "/".concat(maxLength) : "");
}
var Input$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var className = props.className, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, oVariant = props.variant, value = props.value, placeholder = props.placeholder, _props$rows = props.rows, oRows = _props$rows === void 0 ? 1 : _props$rows, _props$minRows = props.minRows, minRows = _props$minRows === void 0 ? oRows : _props$minRows, _props$maxRows = props.maxRows, maxRows = _props$maxRows === void 0 ? 5 : _props$maxRows, maxLength = props.maxLength, _props$showCount = props.showCount, showCount = _props$showCount === void 0 ? !!maxLength : _props$showCount, multiline = props.multiline, autoSize = props.autoSize, onChange = props.onChange, other = _objectWithoutProperties(props, _excluded$i);
  var initialRows = oRows;
  if (initialRows < minRows) {
    initialRows = minRows;
  } else if (initialRows > maxRows) {
    initialRows = maxRows;
  }
  var _useState = react.exports.useState(initialRows), _useState2 = _slicedToArray(_useState, 2), rows = _useState2[0], setRows = _useState2[1];
  var _useState3 = react.exports.useState(21), _useState4 = _slicedToArray(_useState3, 2), lineHeight = _useState4[0], setLineHeight = _useState4[1];
  var inputRef = useForwardRef(ref);
  var theme = react.exports.useContext(ThemeContext);
  var variant = oVariant || (theme === "light" ? "flushed" : "outline");
  var isMultiline = multiline || autoSize || oRows > 1;
  var Element2 = isMultiline ? "textarea" : "input";
  react.exports.useEffect(function() {
    if (!inputRef.current)
      return;
    var lhStr = getComputedStyle(inputRef.current, null).lineHeight;
    var lh2 = Number(lhStr.replace("px", ""));
    if (lh2 !== lineHeight) {
      setLineHeight(lh2);
    }
  }, [inputRef, lineHeight]);
  var updateRow = react.exports.useCallback(function() {
    if (!autoSize || !inputRef.current)
      return;
    var target = inputRef.current;
    var prevRows = target.rows;
    target.rows = minRows;
    if (placeholder) {
      target.placeholder = "";
    }
    var currentRows = ~~(target.scrollHeight / lineHeight);
    if (currentRows === prevRows) {
      target.rows = currentRows;
    }
    if (currentRows >= maxRows) {
      target.rows = maxRows;
      target.scrollTop = target.scrollHeight;
    }
    setRows(currentRows < maxRows ? currentRows : maxRows);
    if (placeholder) {
      target.placeholder = placeholder;
    }
  }, [autoSize, inputRef, lineHeight, maxRows, minRows, placeholder]);
  react.exports.useEffect(function() {
    if (value === "") {
      setRows(initialRows);
    } else {
      updateRow();
    }
  }, [initialRows, updateRow, value]);
  var handleChange = react.exports.useCallback(function(e) {
    updateRow();
    if (onChange) {
      var valueFromEvent = e.target.value;
      var shouldTrim = maxLength && valueFromEvent.length > maxLength;
      var val = shouldTrim ? valueFromEvent.substr(0, maxLength) : valueFromEvent;
      onChange(val, e);
    }
  }, [maxLength, onChange, updateRow]);
  var input = /* @__PURE__ */ React.createElement(Element2, _extends({
    className: clsx("Input", "Input--".concat(variant), className),
    type,
    value,
    placeholder,
    maxLength,
    ref: inputRef,
    rows,
    onChange: handleChange
  }, other));
  if (showCount) {
    return /* @__PURE__ */ React.createElement("div", {
      className: clsx("InputWrapper", {
        "has-counter": showCount
      })
    }, input, showCount && /* @__PURE__ */ React.createElement("div", {
      className: "Input-counter"
    }, getCount(value, maxLength)));
  }
  return input;
});
var List$1 = function List2(props) {
  var _props$bordered = props.bordered, bordered = _props$bordered === void 0 ? false : _props$bordered, className = props.className, children = props.children;
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("List", {
      "List--bordered": bordered
    }, className),
    role: "list"
  }, children);
};
var _excluded$h = ["className", "as", "content", "rightIcon", "children", "onClick"];
var ListItem = function ListItem2(props) {
  var className = props.className, _props$as = props.as, Element2 = _props$as === void 0 ? "div" : _props$as, content = props.content, rightIcon = props.rightIcon, children = props.children, onClick = props.onClick, other = _objectWithoutProperties(props, _excluded$h);
  return /* @__PURE__ */ React.createElement(Element2, _extends({
    className: clsx("ListItem", className),
    onClick,
    role: "listitem"
  }, other), /* @__PURE__ */ React.createElement("div", {
    className: "ListItem-content"
  }, content || children), rightIcon && /* @__PURE__ */ React.createElement(Icon$1, {
    type: rightIcon
  }));
};
var Loading$1 = function Loading2(props) {
  var tip = props.tip, children = props.children;
  return /* @__PURE__ */ React.createElement(Flex$1, {
    className: "Loading",
    center: true
  }, /* @__PURE__ */ React.createElement(Icon$1, {
    type: "spinner",
    spin: true
  }), tip && /* @__PURE__ */ React.createElement("p", {
    className: "Loading-tip"
  }, tip), children);
};
var arEG = {
  BackBottom: {
    newMsgOne: "{n} \u0631\u0633\u0627\u0644\u0629 \u062C\u062F\u064A\u062F\u0629",
    newMsgOther: "{n} \u0631\u0633\u0627\u0644\u0629 \u062C\u062F\u064A\u062F\u0629",
    bottom: "\u0627\u0644\u0623\u0633\u0641\u0644"
  },
  Time: {
    weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"),
    formats: {
      LT: "HH:mm",
      lll: "YYYY/M/D HH:mm",
      WT: "HH:mm dddd",
      YT: "HH:mm \u0623\u0645\u0633"
    }
  },
  Composer: {
    send: "\u0625\u0631\u0633\u0627\u0644"
  },
  SendConfirm: {
    title: "\u0625\u0631\u0633\u0627\u0644 \u0635\u0648\u0631\u0629",
    send: "\u0623\u0631\u0633\u0644",
    cancel: "\u0625\u0644\u063A\u0627\u0621"
  },
  RateActions: {
    up: "\u0627\u0644\u062A\u0635\u0648\u064A\u062A",
    down: "\u062A\u0635\u0648\u064A\u062A \u0633\u0644\u0628\u064A"
  },
  Recorder: {
    hold2talk: "\u0623\u0633\u062A\u0645\u0631 \u0628\u0627\u0644\u0636\u063A\u0637 \u0644\u062A\u062A\u062D\u062F\u062B",
    release2send: "\u062D\u0631\u0631 \u0644\u0644\u0625\u0631\u0633\u0627\u0644",
    releaseOrSwipe: "\u062D\u0631\u0631 \u0644\u0644\u0625\u0631\u0633\u0627\u0644 \u060C \u0627\u0633\u062D\u0628 \u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0625\u0644\u063A\u0627\u0621",
    release2cancel: "\u062D\u0631\u0631 \u0644\u0644\u0625\u0644\u063A\u0627\u0621"
  },
  Search: {
    search: "\u064A\u0628\u062D\u062B"
  }
};
var enUS = {
  BackBottom: {
    newMsgOne: "{n} new message",
    newMsgOther: "{n} new messages",
    bottom: "Bottom"
  },
  Time: {
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    formats: {
      LT: "HH:mm",
      lll: "M/D/YYYY HH:mm",
      WT: "dddd HH:mm",
      YT: "Yesterday HH:mm"
    }
  },
  Composer: {
    send: "Send"
  },
  SendConfirm: {
    title: "Send photo",
    send: "Send",
    cancel: "Cancel"
  },
  RateActions: {
    up: "Up vote",
    down: "Down vote"
  },
  Recorder: {
    hold2talk: "Hold to Talk",
    release2send: "Release to Send",
    releaseOrSwipe: "Release to send, swipe up to cancel",
    release2cancel: "Release to cancel"
  },
  Search: {
    search: "Search"
  }
};
var frFR = {
  BackBottom: {
    newMsgOne: "{n}\xA0nouveau message",
    newMsgOther: "{n}\xA0nouveau messages",
    bottom: "Fond"
  },
  Time: {
    weekdays: "Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split("_"),
    formats: {
      LT: "HH:mm",
      lll: "D/M/YYYY HH:mm",
      WT: "dddd HH:mm",
      YT: "Hier HH:mm"
    }
  },
  Composer: {
    send: "Envoyer"
  },
  SendConfirm: {
    title: "Envoyer une photo",
    send: "Envoyer",
    cancel: "Annuler"
  },
  RateActions: {
    up: "Voter pour",
    down: "Vote n\xE9gatif"
  },
  Recorder: {
    hold2talk: "Tenir pour parler",
    release2send: "Lib\xE9rer pour envoyer",
    releaseOrSwipe: "Rel\xE2chez pour envoyer, balayez vers le haut pour annuler",
    release2cancel: "Rel\xE2cher pour annuler"
  },
  Search: {
    search: "Chercher"
  }
};
var zhCN = {
  BackBottom: {
    newMsgOne: "{n}\u6761\u65B0\u6D88\u606F",
    newMsgOther: "{n}\u6761\u65B0\u6D88\u606F",
    bottom: "\u56DE\u5230\u5E95\u90E8"
  },
  Time: {
    weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),
    formats: {
      LT: "HH:mm",
      lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
      WT: "dddd HH:mm",
      YT: "\u6628\u5929 HH:mm"
    }
  },
  Composer: {
    send: "\u53D1\u9001"
  },
  SendConfirm: {
    title: "\u53D1\u9001\u56FE\u7247",
    send: "\u53D1\u9001",
    cancel: "\u53D6\u6D88"
  },
  RateActions: {
    up: "\u8D5E\u540C",
    down: "\u53CD\u5BF9"
  },
  Recorder: {
    hold2talk: "\u6309\u4F4F \u8BF4\u8BDD",
    release2send: "\u677E\u5F00 \u53D1\u9001",
    releaseOrSwipe: "\u677E\u5F00\u53D1\u9001\uFF0C\u4E0A\u6ED1\u53D6\u6D88",
    release2cancel: "\u677E\u5F00\u624B\u6307\uFF0C\u53D6\u6D88\u53D1\u9001"
  },
  Search: {
    search: "\u641C\u7D22"
  }
};
var defaultLocales = {
  "ar-EG": arEG,
  "fr-FR": frFR,
  "en-US": enUS,
  "zh-CN": zhCN
};
function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols2 = symbols2.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$3(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var LocaleContext = /* @__PURE__ */ React.createContext(void 0);
var DEFAULT_LOCALE = "en-US";
var LocaleProvider = function LocaleProvider2(_ref2) {
  var locale = _ref2.locale, locales = _ref2.locales, children = _ref2.children;
  return /* @__PURE__ */ React.createElement(LocaleContext.Provider, {
    value: {
      locale,
      locales
    }
  }, children);
};
LocaleProvider.defaultProps = {
  locale: DEFAULT_LOCALE
};
var useLocale = function useLocale2(comp, fallback) {
  var localeContext = react.exports.useContext(LocaleContext);
  var _ref2 = localeContext || {}, locale = _ref2.locale, locales = _ref2.locales;
  var defaultStrings = locale && defaultLocales[locale] || defaultLocales[DEFAULT_LOCALE];
  var strings = locales ? _objectSpread$3(_objectSpread$3({}, defaultStrings), locales) : defaultStrings;
  if (!localeContext && fallback) {
    strings = fallback;
  } else if (comp) {
    strings = strings[comp] || {};
  }
  return {
    locale,
    trans: function trans(key) {
      return key ? strings[key] : strings;
    }
  };
};
var MediaObject$1 = function MediaObject2(props) {
  var className = props.className, picUrl2 = props.picUrl, picSize = props.picSize, title = props.title, picAlt = props.picAlt, meta = props.meta;
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("MediaObject", className)
  }, picUrl2 && /* @__PURE__ */ React.createElement("div", {
    className: clsx("MediaObject-pic", picSize && "MediaObject-pic--".concat(picSize))
  }, /* @__PURE__ */ React.createElement("img", {
    src: picUrl2,
    alt: picAlt || title
  })), /* @__PURE__ */ React.createElement("div", {
    className: "MediaObject-info"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "MediaObject-title"
  }, title), /* @__PURE__ */ React.createElement("div", {
    className: "MediaObject-meta"
  }, meta)));
};
var SystemMessage$1 = function SystemMessage2(props) {
  var className = props.className, content = props.content, action = props.action;
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("Message SystemMessage", className)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "SystemMessage-inner"
  }, /* @__PURE__ */ React.createElement("span", null, content), action && /* @__PURE__ */ React.createElement("a", {
    href: "javascript:;",
    onClick: action.onClick
  }, action.text)));
};
var REGEX_FORMAT = /YYYY|M|D|dddd|HH|mm/g;
var MS_A_DAY$1 = 24 * 60 * 60 * 1e3;
var MS_A_WEEK$1 = MS_A_DAY$1 * 7;
var parseDate = function parseDate2(date) {
  if (date instanceof Date) {
    return date;
  }
  return new Date(date);
};
var getWeeHours = function getWeeHours2() {
  return new Date(new Date().setHours(0, 0, 0, 0));
};
var padStart = function padStart2(n2) {
  return (n2 <= 9 ? "0" : "") + n2;
};
var getFormat = function getFormat2(date) {
  var diff = getWeeHours().getTime() - date.getTime();
  if (diff < 0) {
    return "LT";
  }
  if (diff < MS_A_DAY$1) {
    return "YT";
  }
  if (diff < MS_A_WEEK$1) {
    return "WT";
  }
  return "lll";
};
function formatDate(date, locale) {
  var $d2 = parseDate(date);
  var format = locale.formats[getFormat($d2)];
  var dates = {
    YYYY: "".concat($d2.getFullYear()),
    M: "".concat($d2.getMonth() + 1),
    D: "".concat($d2.getDate()),
    dddd: locale.weekdays[$d2.getDay()],
    HH: padStart($d2.getHours()),
    mm: padStart($d2.getMinutes())
  };
  return format.replace(REGEX_FORMAT, function(match) {
    return dates[match];
  });
}
var Time$1 = function Time2(_ref2) {
  var date = _ref2.date;
  var _useLocale = useLocale("Time"), trans = _useLocale.trans;
  return /* @__PURE__ */ React.createElement("time", {
    className: "Time",
    dateTime: new Date(date).toJSON()
  }, formatDate(date, trans()));
};
function Typing$1() {
  return /* @__PURE__ */ React.createElement(Bubble$1, {
    type: "typing"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Typing",
    "aria-busy": "true"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Typing-dot"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "Typing-dot"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "Typing-dot"
  })));
}
var _excluded$g = ["renderMessageContent"];
var Message = function Message2(props) {
  var _props$renderMessageC = props.renderMessageContent, renderMessageContent = _props$renderMessageC === void 0 ? function() {
    return null;
  } : _props$renderMessageC, msg = _objectWithoutProperties(props, _excluded$g);
  var type = msg.type, content = msg.content, _msg$user = msg.user, user = _msg$user === void 0 ? {} : _msg$user, id2 = msg._id, _msg$position = msg.position, position = _msg$position === void 0 ? "left" : _msg$position, _msg$hasTime = msg.hasTime, hasTime = _msg$hasTime === void 0 ? true : _msg$hasTime, createdAt = msg.createdAt;
  var name = user.name, avatar = user.avatar;
  if (type === "system") {
    return /* @__PURE__ */ React.createElement(SystemMessage$1, {
      content: content.text,
      action: content.action
    });
  }
  var isRL = position === "right" || position === "left";
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("Message", position),
    "data-id": id2,
    "data-type": type
  }, hasTime && createdAt && /* @__PURE__ */ React.createElement("div", {
    className: "Message-meta"
  }, /* @__PURE__ */ React.createElement(Time$1, {
    date: createdAt
  })), /* @__PURE__ */ React.createElement("div", {
    className: "Message-main"
  }, isRL && avatar && /* @__PURE__ */ React.createElement(Avatar$1, {
    src: avatar,
    alt: name,
    url: user.url
  }), /* @__PURE__ */ React.createElement("div", {
    className: "Message-inner"
  }, isRL && name && /* @__PURE__ */ React.createElement("div", {
    className: "Message-author"
  }, name), /* @__PURE__ */ React.createElement("div", {
    className: "Message-content",
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "false"
  }, type === "typing" ? /* @__PURE__ */ React.createElement(Typing$1, null) : renderMessageContent(msg)))));
};
var Message$1 = /* @__PURE__ */ React.memo(Message);
var MessageStatus$1 = function MessageStatus2(_ref2) {
  var status = _ref2.status, _ref$delay = _ref2.delay, delay = _ref$delay === void 0 ? 1500 : _ref$delay, _ref$maxDelay = _ref2.maxDelay, maxDelay = _ref$maxDelay === void 0 ? 5e3 : _ref$maxDelay, onRetry = _ref2.onRetry, onChange = _ref2.onChange;
  var _useState = react.exports.useState(""), _useState2 = _slicedToArray(_useState, 2), type = _useState2[0], setType = _useState2[1];
  var loadingTimerRef = react.exports.useRef();
  var failTimerRef = react.exports.useRef();
  var doTimeout = react.exports.useCallback(function() {
    loadingTimerRef.current = setTimeout(function() {
      setType("loading");
    }, delay);
    failTimerRef.current = setTimeout(function() {
      setType("fail");
    }, maxDelay);
  }, [delay, maxDelay]);
  function clear() {
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
    }
    if (failTimerRef.current) {
      clearTimeout(failTimerRef.current);
    }
  }
  react.exports.useEffect(function() {
    clear();
    if (status === "pending") {
      doTimeout();
    } else if (status === "sent") {
      setType("");
    } else if (status === "fail") {
      setType("fail");
    }
    return clear;
  }, [status, doTimeout]);
  react.exports.useEffect(function() {
    if (onChange) {
      onChange(type);
    }
  }, [onChange, type]);
  function handleRetry() {
    setType("loading");
    doTimeout();
    if (onRetry) {
      onRetry();
    }
  }
  if (type) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "MessageStatus",
      "data-status": type
    }, type === "fail" ? /* @__PURE__ */ React.createElement(IconButton, {
      icon: "warning-circle-fill",
      onClick: handleRetry
    }) : /* @__PURE__ */ React.createElement(Icon$1, {
      type: "spinner",
      spin: true,
      onClick: handleRetry
    }));
  }
  return null;
};
var nextId = 0;
var getNextId = function getNextId2() {
  return nextId++;
};
function useNextId() {
  var prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "id-";
  var idRef = react.exports.useRef("".concat(prefix).concat(getNextId()));
  return idRef.current;
}
var toggleClass = function(className, flag) {
  var el = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document.body;
  el.classList[flag ? "add" : "remove"](className);
};
function clearModal() {
  if (!document.querySelector(".Modal") && !document.querySelector(".Popup")) {
    toggleClass("S--modalOpen", false);
  }
}
var Base = function Base2(props) {
  var baseClass = props.baseClass, active = props.active, className = props.className, title = props.title, _props$showClose = props.showClose, showClose = _props$showClose === void 0 ? true : _props$showClose, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus, _props$backdrop = props.backdrop, backdrop = _props$backdrop === void 0 ? true : _props$backdrop, height = props.height, overflow = props.overflow, actions = props.actions, _props$vertical = props.vertical, vertical = _props$vertical === void 0 ? true : _props$vertical, btnVariant = props.btnVariant, bgColor = props.bgColor, children = props.children, onBackdropClick = props.onBackdropClick, onClose = props.onClose;
  var mid = useNextId("modal-");
  var titleId = props.titleId || mid;
  var wrapper = react.exports.useRef(null);
  var _useMount = useMount({
    active,
    ref: wrapper
  }), didMount = _useMount.didMount, isShow = _useMount.isShow;
  react.exports.useEffect(function() {
    setTimeout(function() {
      if (autoFocus && wrapper.current) {
        wrapper.current.focus();
      }
    });
  }, [autoFocus]);
  react.exports.useEffect(function() {
    if (isShow) {
      toggleClass("S--modalOpen", isShow);
    }
  }, [isShow]);
  react.exports.useEffect(function() {
    if (!active && !didMount) {
      clearModal();
    }
  }, [active, didMount]);
  react.exports.useEffect(function() {
    return function() {
      clearModal();
    };
  }, []);
  if (!didMount)
    return null;
  var isPopup = baseClass === "Popup";
  return /* @__PURE__ */ reactDom.exports.createPortal(/* @__PURE__ */ React.createElement("div", {
    className: clsx(baseClass, className, {
      active: isShow
    }),
    ref: wrapper,
    tabIndex: -1
  }, backdrop && /* @__PURE__ */ React.createElement(Backdrop, {
    active: isShow,
    onClick: backdrop === true ? onBackdropClick || onClose : void 0
  }), /* @__PURE__ */ React.createElement("div", {
    className: clsx("".concat(baseClass, "-dialog"), {
      "pb-safe": isPopup && !actions
    }),
    "data-bg-color": bgColor,
    "data-height": isPopup && height ? height : void 0,
    role: "dialog",
    "aria-labelledby": titleId,
    "aria-modal": true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "".concat(baseClass, "-content")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "".concat(baseClass, "-header")
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "".concat(baseClass, "-title"),
    id: titleId
  }, title), showClose && onClose && /* @__PURE__ */ React.createElement(IconButton, {
    className: "".concat(baseClass, "-close"),
    icon: "close",
    size: "lg",
    onClick: onClose,
    "aria-label": "\u5173\u95ED"
  })), /* @__PURE__ */ React.createElement("div", {
    className: clsx("".concat(baseClass, "-body"), {
      overflow
    })
  }, children), actions && /* @__PURE__ */ React.createElement("div", {
    className: "".concat(baseClass, "-footer ").concat(baseClass, "-footer--").concat(vertical ? "v" : "h"),
    "data-variant": btnVariant || "round"
  }, actions.map(function(item) {
    return /* @__PURE__ */ React.createElement(Button$1, _extends({
      size: "lg",
      block: isPopup,
      variant: btnVariant
    }, item, {
      key: item.label
    }));
  }))))), document.body);
};
var Modal$1 = function Modal2(props) {
  return /* @__PURE__ */ React.createElement(Base, _extends({
    baseClass: "Modal",
    btnVariant: props.vertical === false ? void 0 : "outline"
  }, props));
};
var _excluded$f = ["className"];
var Confirm$1 = function Confirm2(_ref2) {
  var className = _ref2.className, other = _objectWithoutProperties(_ref2, _excluded$f);
  return /* @__PURE__ */ React.createElement(Base, _extends({
    baseClass: "Modal",
    className: clsx("Confirm", className),
    showClose: false,
    btnVariant: "outline"
  }, other));
};
var Popup$1 = function Popup2(props) {
  return /* @__PURE__ */ React.createElement(Base, _extends({
    baseClass: "Popup",
    overflow: true
  }, props));
};
var Navbar$1 = function Navbar2(props) {
  var className = props.className, title = props.title, logo = props.logo, leftContent = props.leftContent, _props$rightContent = props.rightContent, rightContent = _props$rightContent === void 0 ? [] : _props$rightContent;
  return /* @__PURE__ */ React.createElement("header", {
    className: clsx("Navbar", className)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Navbar-left"
  }, leftContent && /* @__PURE__ */ React.createElement(IconButton, _extends({
    size: "lg"
  }, leftContent))), /* @__PURE__ */ React.createElement("div", {
    className: "Navbar-main"
  }, logo ? /* @__PURE__ */ React.createElement("img", {
    className: "Navbar-logo",
    src: logo,
    alt: title
  }) : /* @__PURE__ */ React.createElement("h2", {
    className: "Navbar-title"
  }, title)), /* @__PURE__ */ React.createElement("div", {
    className: "Navbar-right"
  }, rightContent.map(function(item) {
    return /* @__PURE__ */ React.createElement(IconButton, _extends({
      size: "lg"
    }, item, {
      key: item.icon
    }));
  })));
};
var _excluded$e = ["as", "className", "align", "breakWord", "truncate", "children"];
var Text$1 = function Text2(props) {
  var _props$as = props.as, Element2 = _props$as === void 0 ? "div" : _props$as, className = props.className, align = props.align, breakWord = props.breakWord, truncate = props.truncate, children = props.children, other = _objectWithoutProperties(props, _excluded$e);
  var ellipsis = Number.isInteger(truncate);
  var cls = clsx(align && "Text--".concat(align), {
    "Text--break": breakWord,
    "Text--truncate": truncate === true,
    "Text--ellipsis": ellipsis
  }, className);
  var style2 = ellipsis ? {
    WebkitLineClamp: truncate
  } : null;
  return /* @__PURE__ */ React.createElement(Element2, _extends({
    className: cls,
    style: style2
  }, other), children);
};
var Notice$1 = function Notice2(props) {
  var content = props.content, _props$closable = props.closable, closable = _props$closable === void 0 ? true : _props$closable, _props$leftIcon = props.leftIcon, leftIcon = _props$leftIcon === void 0 ? "bullhorn" : _props$leftIcon, onClick = props.onClick, onClose = props.onClose;
  return /* @__PURE__ */ React.createElement("div", {
    className: "Notice",
    role: "alert",
    "aria-atomic": true,
    "aria-live": "assertive"
  }, leftIcon && /* @__PURE__ */ React.createElement(Icon$1, {
    className: "Notice-icon",
    type: leftIcon
  }), /* @__PURE__ */ React.createElement("div", {
    className: "Notice-content",
    onClick
  }, /* @__PURE__ */ React.createElement(Text$1, {
    className: "Notice-text",
    truncate: true
  }, content)), closable && /* @__PURE__ */ React.createElement(IconButton, {
    className: "Notice-close",
    icon: "close",
    onClick: onClose,
    "aria-label": "\u5173\u95ED\u901A\u77E5"
  }));
};
function getEl(el) {
  if (!el)
    return null;
  if (el instanceof Element) {
    return el;
  }
  return typeof el === "function" ? el() : el.current || el;
}
var Portal$1 = function Portal2(props) {
  var children = props.children, _props$container = props.container, container = _props$container === void 0 ? document.body : _props$container, onRendered = props.onRendered;
  var _useState = react.exports.useState(null), _useState2 = _slicedToArray(_useState, 2), mountNode = _useState2[0], setMountNode = _useState2[1];
  react.exports.useEffect(function() {
    setMountNode(getEl(container));
  }, [container]);
  react.exports.useLayoutEffect(function() {
    if (onRendered && mountNode) {
      onRendered();
    }
  }, [mountNode, onRendered]);
  return mountNode ? /* @__PURE__ */ reactDom.exports.createPortal(children, mountNode) : mountNode;
};
var _excluded$d = ["className", "price", "currency", "locale", "original"];
var canFormat = "Intl" in window && typeof Intl.NumberFormat.prototype.formatToParts === "function";
var Price$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var className = props.className, price = props.price, currency = props.currency, locale = props.locale, original = props.original, other = _objectWithoutProperties(props, _excluded$d);
  var parts = [];
  if (locale && currency && canFormat) {
    parts = new Intl.NumberFormat(locale, {
      style: "currency",
      currency
    }).formatToParts(price);
  } else {
    parts = void 0;
  }
  if (!parts) {
    var decimal = ".";
    var _$split = "".concat(price).split(decimal), _$split2 = _slicedToArray(_$split, 2), integer = _$split2[0], fraction = _$split2[1];
    parts = [{
      type: "currency",
      value: currency
    }, {
      type: "integer",
      value: integer
    }, {
      type: "decimal",
      value: fraction && decimal
    }, {
      type: "fraction",
      value: fraction
    }];
  }
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("Price", {
      "Price--original": original
    }, className),
    ref
  }, other), parts.map(function(t2, i) {
    return t2.value ? /* @__PURE__ */ React.createElement("span", {
      className: "Price-".concat(t2.type),
      key: i
    }, t2.value) : null;
  }));
});
var _excluded$c = ["className", "value", "status", "children"];
var Progress$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var className = props.className, value = props.value, status = props.status, children = props.children, other = _objectWithoutProperties(props, _excluded$c);
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("Progress", status && "Progress--".concat(status), className),
    ref
  }, other), /* @__PURE__ */ React.createElement("div", {
    className: "Progress-bar",
    role: "progressbar",
    style: {
      width: "".concat(value, "%")
    },
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, children));
});
var rAF = requestAnimationFrame;
function smoothScroll(_ref2) {
  var el = _ref2.el, to = _ref2.to, _ref$duration = _ref2.duration, duration = _ref$duration === void 0 ? 300 : _ref$duration, x2 = _ref2.x;
  var count = 0;
  var attr = x2 ? "scrollLeft" : "scrollTop";
  var from = el[attr];
  var frames = Math.round(duration / 16);
  var step = (to - from) / frames;
  if (!rAF) {
    el[attr] = to;
    return;
  }
  function animate() {
    el[attr] += step;
    if (++count < frames) {
      rAF(animate);
    }
  }
  animate();
}
var canPassive$1 = canUse("passiveListener");
var listenerOpts$2 = canPassive$1 ? {
  passive: true
} : false;
var listenerOptsWithoutPassive$1 = canPassive$1 ? {
  passive: false
} : false;
var PullToRefresh$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var _props$distance = props.distance, oDistance = _props$distance === void 0 ? 30 : _props$distance, _props$loadingDistanc = props.loadingDistance, loadingDistance = _props$loadingDistanc === void 0 ? 30 : _props$loadingDistanc, maxDistance = props.maxDistance, _props$distanceRatio = props.distanceRatio, distanceRatio = _props$distanceRatio === void 0 ? 2 : _props$distanceRatio, _props$loadMoreText = props.loadMoreText, loadMoreText = _props$loadMoreText === void 0 ? "\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A" : _props$loadMoreText, children = props.children, onScroll = props.onScroll, onRefresh = props.onRefresh, _props$renderIndicato = props.renderIndicator, renderIndicator = _props$renderIndicato === void 0 ? function(status2) {
    if (status2 === "active" || status2 === "loading") {
      return /* @__PURE__ */ React.createElement(Icon$1, {
        className: "PullToRefresh-spinner",
        type: "spinner",
        spin: true
      });
    }
    return null;
  } : _props$renderIndicato;
  var wrapperRef = react.exports.useRef(null);
  var contentRef = react.exports.useRef(null);
  var _useState = react.exports.useState(0), _useState2 = _slicedToArray(_useState, 2), distance = _useState2[0], setDistance = _useState2[1];
  var _useState3 = react.exports.useState("pending"), _useState4 = _slicedToArray(_useState3, 2), status = _useState4[0], setStatus = _useState4[1];
  var _useState5 = react.exports.useState(false), _useState6 = _slicedToArray(_useState5, 2), dropped = _useState6[0], setDropped = _useState6[1];
  var _useState7 = react.exports.useState(!props.onRefresh), _useState8 = _slicedToArray(_useState7, 2), disabled = _useState8[0], setDisabled = _useState8[1];
  var sharedRef = react.exports.useRef({});
  var statusRef = react.exports.useRef(status);
  var timer1 = react.exports.useRef();
  var timer2 = react.exports.useRef();
  var useFallback = !canUse("touch");
  react.exports.useEffect(function() {
    statusRef.current = status;
  }, [status]);
  var setContentStyle = function setContentStyle2(y2) {
    var content = contentRef.current;
    if (content) {
      setTransform(content, "translate3d(0px,".concat(y2, "px,0)"));
    }
  };
  var scrollTo = function scrollTo2(_ref2) {
    var y2 = _ref2.y, _ref$animated = _ref2.animated, animated = _ref$animated === void 0 ? true : _ref$animated;
    var scroller = wrapperRef.current;
    if (!scroller)
      return;
    var offsetTop = y2 === "100%" ? scroller.scrollHeight - scroller.offsetHeight : y2;
    if (animated) {
      smoothScroll({
        el: scroller,
        to: offsetTop,
        x: false
      });
    } else {
      scroller.scrollTop = offsetTop;
    }
  };
  var scrollToEnd = react.exports.useCallback(function() {
    var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$animated = _ref2.animated, animated = _ref2$animated === void 0 ? true : _ref2$animated;
    scrollTo({
      y: "100%",
      animated
    });
  }, []);
  var reset = react.exports.useCallback(function() {
    setDistance(0);
    setStatus("pending");
    setContentStyle(0);
  }, []);
  var handleLoadMore = react.exports.useCallback(function() {
    var scroller = wrapperRef.current;
    if (!scroller)
      return;
    setStatus("loading");
    try {
      var sh2 = scroller.scrollHeight;
      onRefresh().then(function(res) {
        var handleOffset = function handleOffset2() {
          scrollTo({
            y: scroller.scrollHeight - sh2 - 50,
            animated: false
          });
        };
        clearTimeout(timer1.current);
        clearTimeout(timer2.current);
        handleOffset();
        timer1.current = setTimeout(handleOffset, 150);
        timer2.current = setTimeout(handleOffset, 250);
        reset();
        if (res && res.noMore) {
          setDisabled(true);
        }
      });
    } catch (ex) {
      console.error(ex);
      reset();
    }
  }, [onRefresh, reset]);
  var touchStart = function touchStart2(e) {
    sharedRef.current.startY = e.touches[0].clientY;
    sharedRef.current.canPull = wrapperRef.current && wrapperRef.current.scrollTop <= 0;
    if (sharedRef.current.canPull) {
      setStatus("pull");
      setDropped(false);
    }
  };
  var touchMove = react.exports.useCallback(function(e) {
    var currentY = e.touches[0].clientY;
    var _sharedRef$current = sharedRef.current, canPull = _sharedRef$current.canPull, startY2 = _sharedRef$current.startY;
    if (!canPull || currentY < startY2 || statusRef.current === "loading")
      return;
    var dist = (currentY - startY2) / distanceRatio;
    if (maxDistance && dist > maxDistance) {
      dist = maxDistance;
    }
    if (dist > 0) {
      if (e.cancelable) {
        e.preventDefault();
      }
      e.stopPropagation();
      setContentStyle(dist);
      setDistance(dist);
      setStatus(dist >= oDistance ? "active" : "pull");
    }
  }, [distanceRatio, maxDistance, oDistance]);
  var touchEnd = react.exports.useCallback(function() {
    setDropped(true);
    if (statusRef.current === "active") {
      handleLoadMore();
    } else {
      reset();
    }
  }, [handleLoadMore, reset]);
  react.exports.useEffect(function() {
    var wrapper = wrapperRef.current;
    if (!wrapper || useFallback)
      return;
    if (disabled) {
      wrapper.removeEventListener("touchstart", touchStart);
      wrapper.removeEventListener("touchmove", touchMove);
      wrapper.removeEventListener("touchend", touchEnd);
      wrapper.removeEventListener("touchcancel", touchEnd);
    } else {
      wrapper.addEventListener("touchstart", touchStart, listenerOpts$2);
      wrapper.addEventListener("touchmove", touchMove, listenerOptsWithoutPassive$1);
      wrapper.addEventListener("touchend", touchEnd);
      wrapper.addEventListener("touchcancel", touchEnd);
    }
  }, [disabled, touchEnd, touchMove, useFallback]);
  react.exports.useEffect(function() {
    if (status === "loading" && !useFallback) {
      setContentStyle(loadingDistance);
    }
  }, [loadingDistance, status, useFallback]);
  react.exports.useImperativeHandle(ref, function() {
    return {
      scrollTo,
      scrollToEnd,
      wrapperRef
    };
  }, [scrollToEnd]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "PullToRefresh",
    ref: wrapperRef,
    onScroll
  }, /* @__PURE__ */ React.createElement("div", {
    className: "PullToRefresh-inner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: clsx("PullToRefresh-content", {
      "PullToRefresh-transition": dropped
    }),
    ref: contentRef
  }, /* @__PURE__ */ React.createElement("div", {
    className: "PullToRefresh-indicator"
  }, renderIndicator(status, distance)), !disabled && useFallback && /* @__PURE__ */ React.createElement(Flex$1, {
    className: "PullToRefresh-fallback",
    center: true
  }, renderIndicator(status, oDistance), /* @__PURE__ */ React.createElement(Button$1, {
    className: "PullToRefresh-loadMore",
    variant: "text",
    onClick: handleLoadMore
  }, loadMoreText)), React.Children.only(children))));
});
var observerOptions = {
  threshold: [0, 0.1]
};
var Item = function Item2(props) {
  var item = props.item, effect = props.effect, children = props.children, onIntersect = props.onIntersect;
  var itemRef = react.exports.useRef(null);
  react.exports.useEffect(function() {
    if (!onIntersect)
      return void 0;
    var observer = new IntersectionObserver(function(_ref2) {
      var _ref22 = _slicedToArray(_ref2, 1), entry = _ref22[0];
      if (entry.intersectionRatio > 0) {
        if (!onIntersect(item, entry)) {
          observer.unobserve(entry.target);
        }
      }
    }, observerOptions);
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    return function() {
      observer.disconnect();
    };
  }, [item, onIntersect]);
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("ScrollView-item", {
      "slide-in-right-item": effect === "slide",
      "A-fadeIn": effect === "fade"
    }),
    ref: itemRef
  }, children);
};
var _excluded$b = ["className", "fullWidth", "scrollX", "effect", "data", "itemKey", "renderItem", "onIntersect", "onScroll", "children"];
var hasControls = !canUse("touch");
var ScrollView$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var className = props.className, fullWidth = props.fullWidth, _props$scrollX = props.scrollX, scrollX = _props$scrollX === void 0 ? true : _props$scrollX, _props$effect = props.effect, effect = _props$effect === void 0 ? "slide" : _props$effect, data = props.data, itemKey = props.itemKey, renderItem = props.renderItem, onIntersect = props.onIntersect, onScroll = props.onScroll, children = props.children, other = _objectWithoutProperties(props, _excluded$b);
  var scrollerRef = react.exports.useRef(null);
  function handlePrev() {
    var el = scrollerRef.current;
    el.scrollLeft -= el.offsetWidth;
  }
  function handleNext() {
    var el = scrollerRef.current;
    el.scrollLeft += el.offsetWidth;
  }
  var getItemKey = react.exports.useCallback(function(item, index2) {
    var key;
    if (itemKey) {
      key = typeof itemKey === "function" ? itemKey(item, index2) : item[itemKey];
    }
    return key || index2;
  }, [itemKey]);
  react.exports.useImperativeHandle(ref, function() {
    return {
      scrollTo: function scrollTo(_ref2) {
        var x2 = _ref2.x, y2 = _ref2.y;
        if (x2 != null) {
          scrollerRef.current.scrollLeft = x2;
        }
        if (y2 != null) {
          scrollerRef.current.scrollTop = y2;
        }
      }
    };
  });
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("ScrollView", {
      "ScrollView--fullWidth": fullWidth,
      "ScrollView--x": scrollX,
      "ScrollView--hasControls": hasControls
    }, className),
    ref
  }, other), hasControls && /* @__PURE__ */ React.createElement(IconButton, {
    className: "ScrollView-control",
    icon: "chevron-left",
    "aria-label": "Previous",
    onClick: handlePrev
  }), /* @__PURE__ */ React.createElement("div", {
    className: "ScrollView-scroller",
    ref: scrollerRef,
    onScroll
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ScrollView-inner"
  }, data.map(function(item, i) {
    return /* @__PURE__ */ React.createElement(Item, {
      item,
      effect: item.effect || effect,
      onIntersect,
      key: getItemKey(item, i)
    }, renderItem(item, i));
  }), children ? /* @__PURE__ */ React.createElement(Item, {
    item: {},
    effect,
    onIntersect
  }, children) : null)), hasControls && /* @__PURE__ */ React.createElement(IconButton, {
    className: "ScrollView-control",
    icon: "chevron-right",
    "aria-label": "Next",
    onClick: handleNext
  }));
});
var QuickReply = function QuickReply2(props) {
  var item = props.item, index2 = props.index, onClick = props.onClick;
  function handleClick() {
    onClick(item, index2);
  }
  return /* @__PURE__ */ React.createElement("button", {
    className: clsx("QuickReply", {
      new: item.isNew,
      highlight: item.isHighlight
    }),
    type: "button",
    "data-code": item.code,
    "aria-label": "\u5FEB\u6377\u77ED\u8BED: ".concat(item.name, "\uFF0C\u53CC\u51FB\u53D1\u9001"),
    onClick: handleClick
  }, /* @__PURE__ */ React.createElement("div", {
    className: "QuickReply-inner"
  }, item.icon && /* @__PURE__ */ React.createElement(Icon$1, {
    type: item.icon
  }), item.img && /* @__PURE__ */ React.createElement("img", {
    className: "QuickReply-img",
    src: item.img,
    alt: ""
  }), /* @__PURE__ */ React.createElement("span", null, item.name)));
};
var QuickReplies = function QuickReplies2(props) {
  var items = props.items, visible = props.visible, onClick = props.onClick, onScroll = props.onScroll;
  var scroller = react.exports.useRef(null);
  var _useState = react.exports.useState(!!onScroll), _useState2 = _slicedToArray(_useState, 2), scrollEvent = _useState2[0], setScrollEvent = _useState2[1];
  react.exports.useLayoutEffect(function() {
    var timer;
    if (scroller.current) {
      setScrollEvent(false);
      scroller.current.scrollTo({
        x: 0,
        y: 0
      });
      timer = setTimeout(function() {
        setScrollEvent(true);
      }, 500);
    }
    return function() {
      clearTimeout(timer);
    };
  }, [items]);
  if (!items.length)
    return null;
  return /* @__PURE__ */ React.createElement(ScrollView$1, {
    className: "QuickReplies",
    data: items,
    itemKey: "name",
    ref: scroller,
    "data-visible": visible,
    onScroll: scrollEvent ? onScroll : void 0,
    renderItem: function renderItem(item, index2) {
      return /* @__PURE__ */ React.createElement(QuickReply, {
        item,
        index: index2,
        onClick,
        key: item.name
      });
    }
  });
};
QuickReplies.defaultProps = {
  items: [],
  visible: true
};
var QuickReplies$1 = /* @__PURE__ */ React.memo(QuickReplies);
var _excluded$a = ["className", "label", "checked", "disabled", "onChange"];
var Radio$1 = function Radio2(props) {
  var className = props.className, label = props.label, checked = props.checked, disabled = props.disabled, onChange = props.onChange, other = _objectWithoutProperties(props, _excluded$a);
  return /* @__PURE__ */ React.createElement("label", {
    className: clsx("Radio", className, {
      "Radio--checked": checked,
      "Radio--disabled": disabled
    })
  }, /* @__PURE__ */ React.createElement("input", _extends({
    type: "radio",
    className: "Radio-input",
    checked,
    disabled,
    onChange
  }, other)), /* @__PURE__ */ React.createElement("span", {
    className: "Radio-text"
  }, label));
};
var RadioGroup = function RadioGroup2(props) {
  var className = props.className, options2 = props.options, value = props.value, name = props.name, disabled = props.disabled, block = props.block, _onChange = props.onChange;
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("RadioGroup", {
      "RadioGroup--block": block
    }, className)
  }, options2.map(function(item) {
    return /* @__PURE__ */ React.createElement(Radio$1, {
      label: item.label || item.value,
      value: item.value,
      name,
      checked: value === item.value,
      disabled: "disabled" in item ? item.disabled : disabled,
      onChange: function onChange(e) {
        _onChange(item.value, e);
      },
      key: item.value
    });
  }));
};
var UP = "up";
var DOWN = "down";
var RateActions$1 = function RateActions2(props) {
  var _useLocale = useLocale("RateActions", {
    up: "\u8D5E\u540C",
    down: "\u53CD\u5BF9"
  }), trans = _useLocale.trans;
  var _props$upTitle = props.upTitle, upTitle = _props$upTitle === void 0 ? trans("up") : _props$upTitle, _props$downTitle = props.downTitle, downTitle = _props$downTitle === void 0 ? trans("down") : _props$downTitle, onClick = props.onClick;
  var _useState = react.exports.useState(""), _useState2 = _slicedToArray(_useState, 2), value = _useState2[0], setValue = _useState2[1];
  function handleClick(val) {
    if (!value) {
      setValue(val);
      onClick(val);
    }
  }
  function handleUpClick() {
    handleClick(UP);
  }
  function handleDownClick() {
    handleClick(DOWN);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "RateActions"
  }, value !== DOWN && /* @__PURE__ */ React.createElement(IconButton, {
    className: clsx("RateBtn", {
      active: value === UP
    }),
    title: upTitle,
    "data-type": UP,
    icon: "thumbs-up",
    onClick: handleUpClick
  }), value !== UP && /* @__PURE__ */ React.createElement(IconButton, {
    className: clsx("RateBtn", {
      active: value === DOWN
    }),
    title: downTitle,
    "data-type": DOWN,
    icon: "thumbs-down",
    onClick: handleDownClick
  }));
};
purify.addHook("beforeSanitizeAttributes", function(node) {
  if (node instanceof HTMLElement && node.hasAttribute("href")) {
    var href = node.getAttribute("href");
    if (href) {
      node.dataset.cuiHref = href;
    }
    if (node.getAttribute("target") === "_blank") {
      node.dataset.cuiTarget = "1";
    }
  }
});
purify.addHook("afterSanitizeAttributes", function(node) {
  if (node instanceof HTMLElement) {
    if (node.dataset.cuiHref && node.hasAttribute("href")) {
      node.removeAttribute("data-cui-href");
    }
    if (node.dataset.cuiTarget) {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener noreferrer");
      node.removeAttribute("data-cui-target");
    }
  }
});
var _excluded$9 = ["className", "content", "options"];
var RichText$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var className = props.className, content = props.content, _props$options = props.options, options2 = _props$options === void 0 ? {} : _props$options, other = _objectWithoutProperties(props, _excluded$9);
  var html2 = {
    __html: purify.sanitize(content, options2)
  };
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("RichText", className),
    dangerouslySetInnerHTML: html2,
    ref
  }, other));
});
var _excluded$8 = ["className", "onSearch", "onChange", "onClear", "value", "clearable", "showSearch"];
var Search$1 = function Search2(_ref2) {
  var className = _ref2.className, onSearch = _ref2.onSearch, onChange = _ref2.onChange, onClear = _ref2.onClear, value = _ref2.value, _ref$clearable = _ref2.clearable, clearable = _ref$clearable === void 0 ? true : _ref$clearable, _ref$showSearch = _ref2.showSearch, showSearch = _ref$showSearch === void 0 ? true : _ref$showSearch, other = _objectWithoutProperties(_ref2, _excluded$8);
  var _useState = react.exports.useState(value || ""), _useState2 = _slicedToArray(_useState, 2), query = _useState2[0], setQuery = _useState2[1];
  var _useLocale = useLocale("Search"), trans = _useLocale.trans;
  var handleChange = function handleChange2(val) {
    setQuery(val);
    if (onChange) {
      onChange(val);
    }
  };
  var handleClear = function handleClear2() {
    setQuery("");
    if (onClear) {
      onClear();
    }
  };
  var handleKeyDown = function handleKeyDown2(e) {
    if (e.keyCode === 13) {
      if (onSearch) {
        onSearch(query, e);
      }
      e.preventDefault();
    }
  };
  var handleSearchClick = function handleSearchClick2(e) {
    if (onSearch) {
      onSearch(query, e);
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("Search", className)
  }, /* @__PURE__ */ React.createElement(Icon$1, {
    className: "Search-icon",
    type: "search"
  }), /* @__PURE__ */ React.createElement(Input$1, _extends({
    className: "Search-input",
    type: "search",
    value: query,
    enterKeyHint: "search",
    onChange: handleChange,
    onKeyDown: handleKeyDown
  }, other)), clearable && query && /* @__PURE__ */ React.createElement(IconButton, {
    className: "Search-clear",
    icon: "x-circle-fill",
    onClick: handleClear
  }), showSearch && /* @__PURE__ */ React.createElement(Button$1, {
    className: "Search-btn",
    color: "primary",
    onClick: handleSearchClick
  }, trans("search")));
};
var _excluded$7 = ["className", "placeholder", "variant", "children"];
var Select$1 = /* @__PURE__ */ React.forwardRef(function(_ref2, ref) {
  var className = _ref2.className, placeholder = _ref2.placeholder, _ref$variant = _ref2.variant, variant = _ref$variant === void 0 ? "outline" : _ref$variant, children = _ref2.children, rest = _objectWithoutProperties(_ref2, _excluded$7);
  return /* @__PURE__ */ React.createElement("select", _extends({
    className: clsx("Input Select", "Input--".concat(variant), className)
  }, rest, {
    ref
  }), placeholder && /* @__PURE__ */ React.createElement("option", {
    value: ""
  }, placeholder), children);
});
var _excluded$6 = ["className", "current", "status", "inverted", "children"];
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols2 = symbols2.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var Stepper$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var className = props.className, _props$current = props.current, current = _props$current === void 0 ? 0 : _props$current, status = props.status, inverted = props.inverted, children = props.children, other = _objectWithoutProperties(props, _excluded$6);
  var childrenArray = React.Children.toArray(children);
  var steps = childrenArray.map(function(child, index2) {
    var state = {
      index: index2,
      active: false,
      completed: false,
      disabled: false
    };
    if (current === index2) {
      state.active = true;
      state.status = status;
    } else if (current > index2) {
      state.completed = true;
    } else {
      state.disabled = !inverted;
      state.completed = inverted;
    }
    return /* @__PURE__ */ React.isValidElement(child) ? /* @__PURE__ */ React.cloneElement(child, _objectSpread$2(_objectSpread$2({}, state), child.props)) : null;
  });
  return /* @__PURE__ */ React.createElement("ul", _extends({
    className: clsx("Stepper", className),
    ref
  }, other), steps);
});
var _excluded$5 = ["className", "active", "completed", "disabled", "status", "index", "title", "subTitle", "desc", "children"];
function renderDot(status) {
  if (status) {
    var iconMap = {
      success: "check-circle-fill",
      fail: "warning-circle-fill",
      abort: "dash-circle-fill"
    };
    return /* @__PURE__ */ React.createElement(Icon$1, {
      type: iconMap[status]
    });
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "Step-dot"
  });
}
var Step = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var className = props.className, _props$active = props.active, active = _props$active === void 0 ? false : _props$active, _props$completed = props.completed, completed = _props$completed === void 0 ? false : _props$completed, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, status = props.status;
  props.index;
  var title = props.title, subTitle = props.subTitle, desc = props.desc, children = props.children, other = _objectWithoutProperties(props, _excluded$5);
  return /* @__PURE__ */ React.createElement("li", _extends({
    className: clsx("Step", {
      "Step--active": active,
      "Step--completed": completed,
      "Step--disabled": disabled
    }, className),
    ref,
    "data-status": status
  }, other), /* @__PURE__ */ React.createElement("div", {
    className: "Step-icon"
  }, renderDot(status)), /* @__PURE__ */ React.createElement("div", {
    className: "Step-line"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "Step-content"
  }, title && /* @__PURE__ */ React.createElement("div", {
    className: "Step-title"
  }, title && /* @__PURE__ */ React.createElement("span", null, title), subTitle && /* @__PURE__ */ React.createElement("small", null, subTitle)), desc && /* @__PURE__ */ React.createElement("div", {
    className: "Step-desc"
  }, desc), children));
});
var _excluded$4 = ["active", "index", "children", "onClick"], _excluded2 = ["active", "children"];
var TabItem = function TabItem2(props) {
  var active = props.active, index2 = props.index, children = props.children, onClick = props.onClick, others = _objectWithoutProperties(props, _excluded$4);
  function handleClick(e) {
    onClick(index2, e);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "Tabs-navItem"
  }, /* @__PURE__ */ React.createElement("button", _extends({
    className: clsx("Tabs-navLink", {
      active
    }),
    type: "button",
    role: "tab",
    "aria-selected": active,
    onClick: handleClick
  }, others), /* @__PURE__ */ React.createElement("span", null, children)));
};
var TabsPane = function TabsPane2(props) {
  var active = props.active, children = props.children, others = _objectWithoutProperties(props, _excluded2);
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: clsx("Tabs-pane", {
      active
    })
  }, others, {
    role: "tabpanel"
  }), children);
};
var Tabs$1 = function Tabs2(props) {
  var className = props.className, _props$index = props.index, oIndex = _props$index === void 0 ? 0 : _props$index, scrollable = props.scrollable, hideNavIfOnlyOne = props.hideNavIfOnlyOne, children = props.children, onChange = props.onChange;
  var _useState = react.exports.useState({}), _useState2 = _slicedToArray(_useState, 2), pointerStyles = _useState2[0], setPointerStyles = _useState2[1];
  var _useState3 = react.exports.useState(oIndex || 0), _useState4 = _slicedToArray(_useState3, 2), index2 = _useState4[0], setIndex = _useState4[1];
  var indexRef = react.exports.useRef(index2);
  var navRef = react.exports.useRef(null);
  var headers = [];
  var contents = [];
  var tabPaneId = useNextId("tabs-");
  function handleIndexChange(idx, e) {
    setIndex(idx);
    if (onChange) {
      onChange(idx, e);
    }
  }
  React.Children.forEach(children, function(item, idx) {
    if (!item)
      return;
    var active = index2 === idx;
    var id2 = "".concat(tabPaneId, "-").concat(idx);
    headers.push(/* @__PURE__ */ React.createElement(TabItem, {
      active,
      index: idx,
      key: id2,
      onClick: handleIndexChange,
      "aria-controls": id2,
      tabIndex: active ? -1 : 0
    }, item.props.label));
    if (item.props.children) {
      contents.push(/* @__PURE__ */ React.createElement(TabsPane, {
        active,
        key: id2,
        id: id2
      }, item.props.children));
    }
  });
  react.exports.useEffect(function() {
    setIndex(oIndex);
  }, [oIndex]);
  var movePointer = react.exports.useCallback(function() {
    var nav = navRef.current;
    if (!nav)
      return;
    var currentNav = nav.children[indexRef.current];
    if (!currentNav)
      return;
    var text2 = currentNav.querySelector("span");
    if (!text2)
      return;
    var _ref2 = currentNav, navWidth = _ref2.offsetWidth, navOffsetLeft = _ref2.offsetLeft;
    var _text$getBoundingClie = text2.getBoundingClientRect(), textWidth = _text$getBoundingClie.width;
    var pointerWidth = Math.max(textWidth - 16, 26);
    var offsetLeftOfCenter = navOffsetLeft + navWidth / 2;
    setPointerStyles({
      transform: "translateX(".concat(offsetLeftOfCenter - pointerWidth / 2, "px)"),
      width: "".concat(pointerWidth, "px")
    });
    if (scrollable) {
      smoothScroll({
        el: nav,
        to: offsetLeftOfCenter - nav.offsetWidth / 2,
        x: true
      });
    }
  }, [scrollable]);
  react.exports.useEffect(function() {
    var nav = navRef.current;
    var ro;
    if (nav && "ResizeObserver" in window) {
      ro = new ResizeObserver(movePointer);
      ro.observe(nav);
    }
    return function() {
      if (ro && nav) {
        ro.unobserve(nav);
      }
    };
  }, [movePointer]);
  react.exports.useEffect(function() {
    indexRef.current = index2;
    movePointer();
  }, [index2, movePointer]);
  var needNav = headers.length > (hideNavIfOnlyOne ? 1 : 0);
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("Tabs", {
      "Tabs--scrollable": scrollable
    }, className)
  }, needNav && /* @__PURE__ */ React.createElement("div", {
    className: "Tabs-nav",
    role: "tablist",
    ref: navRef
  }, headers, /* @__PURE__ */ React.createElement("span", {
    className: "Tabs-navPointer",
    style: pointerStyles
  })), /* @__PURE__ */ React.createElement("div", {
    className: "Tabs-content"
  }, contents));
};
var Tab = function Tab2(_ref2) {
  var children = _ref2.children;
  return /* @__PURE__ */ React.createElement("div", null, children);
};
var _excluded$3 = ["as", "className", "color", "children"];
var Tag$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var _props$as = props.as, Element2 = _props$as === void 0 ? "span" : _props$as, className = props.className, color = props.color, children = props.children, other = _objectWithoutProperties(props, _excluded$3);
  return /* @__PURE__ */ React.createElement(Element2, _extends({
    className: clsx("Tag", color && "Tag--".concat(color), className),
    ref
  }, other), children);
});
function renderIcon(type) {
  switch (type) {
    case "success":
      return /* @__PURE__ */ React.createElement(Icon$1, {
        type: "check-circle"
      });
    case "error":
      return /* @__PURE__ */ React.createElement(Icon$1, {
        type: "warning-circle"
      });
    case "loading":
      return /* @__PURE__ */ React.createElement(Icon$1, {
        type: "spinner",
        spin: true
      });
    default:
      return null;
  }
}
var Toast$1 = function Toast2(props) {
  var content = props.content, type = props.type, duration = props.duration, onUnmount = props.onUnmount;
  var _useState = react.exports.useState(false), _useState2 = _slicedToArray(_useState, 2), show2 = _useState2[0], setShow = _useState2[1];
  react.exports.useEffect(function() {
    setShow(true);
    if (duration !== -1) {
      setTimeout(function() {
        setShow(false);
      }, duration);
      setTimeout(function() {
        if (onUnmount) {
          onUnmount();
        }
      }, duration + 300);
    }
  }, [duration, onUnmount]);
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("Toast", {
      show: show2
    }),
    "data-type": type,
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Toast-content",
    role: "presentation"
  }, renderIcon(type), /* @__PURE__ */ React.createElement("p", {
    className: "Toast-message"
  }, content)));
};
function show(content, type) {
  var duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 2e3;
  mountComponent(/* @__PURE__ */ React.createElement(Toast$1, {
    content,
    type,
    duration
  }));
}
var toast = {
  show,
  success: function success(content, duration) {
    show(content, "success", duration);
  },
  fail: function fail(content, duration) {
    show(content, "error", duration);
  },
  loading: function loading(content, duration) {
    show(content, "loading", duration);
  }
};
var ToolbarButton = function ToolbarButton2(props) {
  var item = props.item, _onClick = props.onClick;
  var type = item.type, icon = item.icon, img2 = item.img, title = item.title;
  return /* @__PURE__ */ React.createElement("div", {
    className: "Toolbar-item",
    "data-type": type
  }, /* @__PURE__ */ React.createElement(Button$1, {
    className: "Toolbar-btn",
    onClick: function onClick(e) {
      return _onClick(item, e);
    }
  }, /* @__PURE__ */ React.createElement("span", {
    className: "Toolbar-btnIcon"
  }, icon && /* @__PURE__ */ React.createElement(Icon$1, {
    type: icon
  }), img2 && /* @__PURE__ */ React.createElement("img", {
    className: "Toolbar-img",
    src: img2,
    alt: ""
  })), /* @__PURE__ */ React.createElement("span", {
    className: "Toolbar-btnText"
  }, title)));
};
var Toolbar = function Toolbar2(props) {
  var items = props.items, onClick = props.onClick;
  return /* @__PURE__ */ React.createElement("div", {
    className: "Toolbar"
  }, items.map(function(item) {
    return /* @__PURE__ */ React.createElement(ToolbarButton, {
      item,
      onClick,
      key: item.type
    });
  }));
};
var Tree = function Tree2(props) {
  var className = props.className, children = props.children;
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("Tree", className),
    role: "tree"
  }, children);
};
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols2 = symbols2.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var TreeNode = function TreeNode2(props) {
  var title = props.title, content = props.content, link = props.link, _props$children = props.children, children = _props$children === void 0 ? [] : _props$children, _onClick = props.onClick, onExpand = props.onExpand;
  var _useState = react.exports.useState(false), _useState2 = _slicedToArray(_useState, 2), expand = _useState2[0], setExpand = _useState2[1];
  var hasChildren = children.length > 0;
  function handleTitleClick() {
    if (hasChildren) {
      setExpand(!expand);
      onExpand(title, !expand);
    } else {
      _onClick({
        title,
        content,
        link
      });
    }
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "TreeNode",
    role: "treeitem",
    "aria-expanded": expand
  }, /* @__PURE__ */ React.createElement("div", {
    className: "TreeNode-title",
    onClick: handleTitleClick,
    role: "treeitem",
    "aria-expanded": expand,
    tabIndex: 0
  }, /* @__PURE__ */ React.createElement("span", {
    className: "TreeNode-title-text"
  }, title), hasChildren ? /* @__PURE__ */ React.createElement(Icon$1, {
    className: "TreeNode-title-icon",
    type: expand ? "chevron-up" : "chevron-down"
  }) : null), hasChildren ? children.map(function(t2, j) {
    return /* @__PURE__ */ React.createElement("div", {
      className: clsx("TreeNode-children", {
        "TreeNode-children-active": expand
      }),
      key: j
    }, /* @__PURE__ */ React.createElement("div", {
      className: "TreeNode-title TreeNode-children-title",
      onClick: function onClick() {
        return _onClick(_objectSpread$1(_objectSpread$1({}, t2), {
          index: j
        }));
      },
      role: "treeitem"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "TreeNode-title-text"
    }, t2.title)));
  }) : null);
};
var _excluded$2 = ["className", "src", "cover", "duration", "onClick", "onCoverLoad", "style", "videoRef", "children"];
var Video$1 = function Video2(props) {
  var className = props.className, src = props.src, cover = props.cover, duration = props.duration, onClick = props.onClick, onCoverLoad = props.onCoverLoad, style2 = props.style, outerVideoRef = props.videoRef, children = props.children, other = _objectWithoutProperties(props, _excluded$2);
  var localVideoRef = react.exports.useRef(null);
  var videoRef = outerVideoRef || localVideoRef;
  var _useState = react.exports.useState(false), _useState2 = _slicedToArray(_useState, 2), isPlayed = _useState2[0], setIsPlayed = _useState2[1];
  var _useState3 = react.exports.useState(true), _useState4 = _slicedToArray(_useState3, 2), paused = _useState4[0], setPaused = _useState4[1];
  function handleClick(e) {
    setIsPlayed(true);
    var video = videoRef.current;
    if (video) {
      if (video.ended || video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
    if (onClick) {
      onClick(paused, e);
    }
  }
  function handlePlay() {
    setPaused(false);
  }
  function handlePause() {
    setPaused(true);
  }
  var hasCover = !isPlayed && !!cover;
  var hasDuration = hasCover && !!duration;
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("Video", "Video--".concat(paused ? "paused" : "playing"), className),
    style: style2
  }, hasCover && /* @__PURE__ */ React.createElement("img", {
    className: "Video-cover",
    src: cover,
    onLoad: onCoverLoad,
    alt: ""
  }), hasDuration && /* @__PURE__ */ React.createElement("span", {
    className: "Video-duration"
  }, duration), /* @__PURE__ */ React.createElement("video", _extends({
    className: "Video-video",
    src,
    ref: videoRef,
    hidden: hasCover,
    controls: true,
    onPlay: handlePlay,
    onPause: handlePause,
    onEnded: handlePause
  }, other), children), hasCover && /* @__PURE__ */ React.createElement("button", {
    className: clsx("Video-playBtn", {
      paused
    }),
    type: "button",
    onClick: handleClick
  }, /* @__PURE__ */ React.createElement("span", {
    className: "Video-playIcon"
  })));
};
var style = {
  position: "absolute",
  height: "1px",
  width: "1px",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  margin: "-1px",
  whiteSpace: "nowrap"
};
var VisuallyHidden$1 = function VisuallyHidden2(props) {
  return /* @__PURE__ */ React.createElement("span", _extends({
    style
  }, props));
};
var getExtName = function(str) {
  return str.slice((str.lastIndexOf(".") - 1 >>> 0) + 2);
};
var UNITS = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
var k = 1024;
var prettyBytes = function(bytes, decimals) {
  if (bytes < 1) {
    return "".concat(bytes, " ").concat(UNITS[0]);
  }
  var dm = decimals || 2;
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return "".concat(parseFloat((bytes / Math.pow(k, i)).toFixed(dm)), " ").concat(UNITS[i]);
};
var FileCard$1 = function FileCard2(props) {
  var className = props.className, file2 = props.file, extension = props.extension, children = props.children;
  var name = file2.name, size = file2.size;
  var ext = extension || getExtName(name);
  return /* @__PURE__ */ React.createElement(Card$1, {
    className: clsx("FileCard", className),
    size: "xl"
  }, /* @__PURE__ */ React.createElement(Flex$1, null, /* @__PURE__ */ React.createElement("div", {
    className: "FileCard-icon",
    "data-type": ext
  }, /* @__PURE__ */ React.createElement(Icon$1, {
    type: "file"
  }), /* @__PURE__ */ React.createElement(Text$1, {
    truncate: true,
    as: "span",
    className: "FileCard-ext"
  }, ext)), /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement(Text$1, {
    truncate: 2,
    breakWord: true,
    className: "FileCard-name"
  }, name), /* @__PURE__ */ React.createElement("div", {
    className: "FileCard-meta"
  }, size != null && /* @__PURE__ */ React.createElement("span", {
    className: "FileCard-size"
  }, prettyBytes(size)), children))));
};
var _excluded$1 = ["className", "type", "img", "name", "desc", "tags", "locale", "currency", "price", "count", "unit", "action", "children", "originalPrice", "meta", "status"];
var Goods$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var className = props.className, type = props.type, img2 = props.img, name = props.name, desc = props.desc, _props$tags = props.tags, tags = _props$tags === void 0 ? [] : _props$tags, locale = props.locale, currency = props.currency, price = props.price, count = props.count, unit = props.unit, action = props.action, children = props.children, originalPrice = props.originalPrice, meta = props.meta, status = props.status, other = _objectWithoutProperties(props, _excluded$1);
  var isOrder = type === "order";
  var infos = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text$1, {
    as: "h4",
    truncate: isOrder ? 2 : true,
    className: "Goods-name"
  }, name), /* @__PURE__ */ React.createElement(Text$1, {
    className: "Goods-desc"
  }, desc), /* @__PURE__ */ React.createElement("div", {
    className: "Goods-tags"
  }, tags.map(function(t2) {
    return /* @__PURE__ */ React.createElement(Tag$1, {
      color: "primary",
      key: t2.name
    }, t2.name);
  })));
  var priceProps = {
    currency,
    locale
  };
  var priceCont = price != null && /* @__PURE__ */ React.createElement(Price$1, _extends({
    price
  }, priceProps));
  var countUnit = /* @__PURE__ */ React.createElement("div", {
    className: "Goods-countUnit"
  }, count && /* @__PURE__ */ React.createElement("span", {
    className: "Goods-count"
  }, "\xD7", count), unit && /* @__PURE__ */ React.createElement("span", {
    className: "Goods-unit"
  }, unit));
  var mainCont = isOrder ? infos : /* @__PURE__ */ React.createElement(React.Fragment, null, action && /* @__PURE__ */ React.createElement(IconButton, _extends({
    className: "Goods-buyBtn",
    icon: "cart"
  }, action)), infos, /* @__PURE__ */ React.createElement(Flex$1, {
    alignItems: "flex-end"
  }, /* @__PURE__ */ React.createElement(FlexItem, null, priceCont, originalPrice && /* @__PURE__ */ React.createElement(Price$1, _extends({
    price: originalPrice,
    original: true
  }, priceProps)), meta && /* @__PURE__ */ React.createElement("span", {
    className: "Goods-meta"
  }, meta)), countUnit));
  return /* @__PURE__ */ React.createElement(Flex$1, _extends({
    className: clsx("Goods", className),
    "data-type": type,
    ref
  }, other), img2 && /* @__PURE__ */ React.createElement("img", {
    className: "Goods-img",
    src: img2,
    alt: name
  }), /* @__PURE__ */ React.createElement(FlexItem, {
    className: "Goods-main"
  }, mainCont, children), isOrder && /* @__PURE__ */ React.createElement("div", {
    className: "Goods-aside"
  }, priceCont, countUnit, /* @__PURE__ */ React.createElement("span", {
    className: "Goods-status"
  }, status), action && /* @__PURE__ */ React.createElement(Button$1, _extends({
    className: "Goods-detailBtn"
  }, action))));
});
var BackBottom = function BackBottom2(_ref2) {
  var count = _ref2.count, onClick = _ref2.onClick, onDidMount = _ref2.onDidMount;
  var _useLocale = useLocale("BackBottom"), trans = _useLocale.trans;
  var text2 = trans("bottom");
  if (count) {
    text2 = trans(count === 1 ? "newMsgOne" : "newMsgOther").replace("{n}", count);
  }
  react.exports.useEffect(function() {
    if (onDidMount) {
      onDidMount();
    }
  }, [onDidMount]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "BackBottom"
  }, /* @__PURE__ */ React.createElement(Button$1, {
    className: "slide-in-right-item",
    onClick
  }, text2, /* @__PURE__ */ React.createElement(Icon$1, {
    type: "chevron-double-down"
  })));
};
function throttle(fn) {
  var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 300;
  var ready = true;
  return function() {
    if (!ready) {
      return;
    }
    ready = false;
    fn.apply(void 0, arguments);
    setTimeout(function() {
      ready = true;
    }, delay);
  };
}
var listenerOpts$1 = canUse("passiveListener") ? {
  passive: true
} : false;
function isNearBottom(el, n2) {
  var offsetHeight = Math.max(el.offsetHeight, 600);
  return getToBottom(el) < offsetHeight * n2;
}
var MessageContainer = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var messages = props.messages, loadMoreText = props.loadMoreText, onRefresh = props.onRefresh, onScroll = props.onScroll, renderBeforeMessageList = props.renderBeforeMessageList, renderMessageContent = props.renderMessageContent, onBackBottomShow = props.onBackBottomShow, onBackBottomClick = props.onBackBottomClick;
  var _useState = react.exports.useState(false), _useState2 = _slicedToArray(_useState, 2), showBackBottom = _useState2[0], setShowBackBottom = _useState2[1];
  var _useState3 = react.exports.useState(0), _useState4 = _slicedToArray(_useState3, 2), newCount = _useState4[0], setNewCount = _useState4[1];
  var showBackBottomtRef = react.exports.useRef(showBackBottom);
  var newCountRef = react.exports.useRef(newCount);
  var messagesRef = react.exports.useRef(null);
  var scrollerRef = react.exports.useRef(null);
  var lastMessage = messages[messages.length - 1];
  var clearBackBottom = function clearBackBottom2() {
    setNewCount(0);
    setShowBackBottom(false);
  };
  var scrollToEnd = react.exports.useCallback(function(opts) {
    if (scrollerRef.current) {
      if (!showBackBottomtRef.current || opts && opts.force) {
        scrollerRef.current.scrollToEnd(opts);
        if (showBackBottomtRef.current) {
          clearBackBottom();
        }
      }
    }
  }, []);
  var handleBackBottomClick = function handleBackBottomClick2() {
    scrollToEnd({
      animated: false,
      force: true
    });
    if (onBackBottomClick) {
      onBackBottomClick();
    }
  };
  var checkShowBottomRef = react.exports.useRef(throttle(function(el) {
    if (isNearBottom(el, 3)) {
      if (newCountRef.current) {
        if (isNearBottom(el, 0.5)) {
          clearBackBottom();
        }
      } else {
        setShowBackBottom(false);
      }
    } else {
      setShowBackBottom(true);
    }
  }));
  var handleScroll = function handleScroll2(e) {
    checkShowBottomRef.current(e.target);
    if (onScroll) {
      onScroll(e);
    }
  };
  react.exports.useEffect(function() {
    newCountRef.current = newCount;
  }, [newCount]);
  react.exports.useEffect(function() {
    showBackBottomtRef.current = showBackBottom;
  }, [showBackBottom]);
  react.exports.useEffect(function() {
    var scroller = scrollerRef.current;
    var wrapper = scroller && scroller.wrapperRef.current;
    if (!wrapper || !lastMessage || lastMessage.position === "pop") {
      return;
    }
    if (lastMessage.position === "right") {
      scrollToEnd({
        force: true
      });
    } else if (isNearBottom(wrapper, 2)) {
      var animated = !!wrapper.scrollTop;
      scrollToEnd({
        animated,
        force: true
      });
    } else {
      setNewCount(function(c) {
        return c + 1;
      });
      setShowBackBottom(true);
    }
  }, [lastMessage, scrollToEnd]);
  react.exports.useEffect(function() {
    var wrapper = messagesRef.current;
    var needBlur = false;
    var startY2 = 0;
    function reset() {
      needBlur = false;
      startY2 = 0;
    }
    function touchStart(e) {
      var _document = document, activeElement = _document.activeElement;
      if (activeElement && activeElement.nodeName === "TEXTAREA") {
        needBlur = true;
        startY2 = e.touches[0].clientY;
      }
    }
    function touchMove(e) {
      if (needBlur && Math.abs(e.touches[0].clientY - startY2) > 20) {
        document.activeElement.blur();
        reset();
      }
    }
    wrapper.addEventListener("touchstart", touchStart, listenerOpts$1);
    wrapper.addEventListener("touchmove", touchMove, listenerOpts$1);
    wrapper.addEventListener("touchend", reset);
    wrapper.addEventListener("touchcancel", reset);
    return function() {
      wrapper.removeEventListener("touchstart", touchStart);
      wrapper.removeEventListener("touchmove", touchMove);
      wrapper.removeEventListener("touchend", reset);
      wrapper.removeEventListener("touchcancel", reset);
    };
  }, []);
  react.exports.useImperativeHandle(ref, function() {
    return {
      ref: messagesRef,
      scrollToEnd
    };
  }, [scrollToEnd]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "MessageContainer",
    ref: messagesRef,
    tabIndex: -1
  }, renderBeforeMessageList && renderBeforeMessageList(), /* @__PURE__ */ React.createElement(PullToRefresh$1, {
    onRefresh,
    onScroll: handleScroll,
    loadMoreText,
    ref: scrollerRef
  }, /* @__PURE__ */ React.createElement("div", {
    className: "MessageList"
  }, messages.map(function(msg) {
    return /* @__PURE__ */ React.createElement(Message$1, _extends({}, msg, {
      renderMessageContent,
      key: msg._id
    }));
  }))), showBackBottom && /* @__PURE__ */ React.createElement(BackBottom, {
    count: newCount,
    onClick: handleBackBottomClick,
    onDidMount: onBackBottomShow
  }));
});
var canPassive = canUse("passiveListener");
var listenerOpts = canPassive ? {
  passive: true
} : false;
var listenerOptsWithoutPassive = canPassive ? {
  passive: false
} : false;
var MOVE_INTERVAL = 80;
var btnTextMap = {
  inited: "hold2talk",
  recording: "release2send",
  willCancel: "release2send"
};
var ts = 0;
var startY = 0;
var Recorder = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var volume = props.volume, onStart = props.onStart, onEnd = props.onEnd, onCancel = props.onCancel;
  var _useState = react.exports.useState("inited"), _useState2 = _slicedToArray(_useState, 2), status = _useState2[0], setStatus = _useState2[1];
  var btnRef = react.exports.useRef(null);
  var _useLocale = useLocale("Recorder"), trans = _useLocale.trans;
  var doEnd = react.exports.useCallback(function() {
    var duration = Date.now() - ts;
    if (onEnd) {
      onEnd({
        duration
      });
    }
  }, [onEnd]);
  react.exports.useImperativeHandle(ref, function() {
    return {
      stop: function stop() {
        setStatus("inited");
        doEnd();
        ts = 0;
      }
    };
  });
  react.exports.useEffect(function() {
    var wrapper = btnRef.current;
    function handleTouchStart(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
      var touch0 = e.touches[0];
      startY = touch0.pageY;
      ts = Date.now();
      setStatus("recording");
      if (onStart) {
        onStart();
      }
    }
    function handleTouchMove(e) {
      if (!ts)
        return;
      var nowY = e.touches[0].pageY;
      var isCancel2 = startY - nowY > MOVE_INTERVAL;
      setStatus(isCancel2 ? "willCancel" : "recording");
    }
    function handleTouchEnd(e) {
      if (!ts)
        return;
      var endY = e.changedTouches[0].pageY;
      var isRecording = startY - endY < MOVE_INTERVAL;
      setStatus("inited");
      if (isRecording) {
        doEnd();
      } else if (onCancel) {
        onCancel();
      }
    }
    wrapper.addEventListener("touchstart", handleTouchStart, listenerOptsWithoutPassive);
    wrapper.addEventListener("touchmove", handleTouchMove, listenerOpts);
    wrapper.addEventListener("touchend", handleTouchEnd);
    wrapper.addEventListener("touchcancel", handleTouchEnd);
    return function() {
      wrapper.removeEventListener("touchstart", handleTouchStart);
      wrapper.removeEventListener("touchmove", handleTouchMove);
      wrapper.removeEventListener("touchend", handleTouchEnd);
      wrapper.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [doEnd, onCancel, onStart]);
  var isCancel = status === "willCancel";
  var wavesStyle = {
    transform: "scale(".concat((volume || 1) / 100 + 1, ")")
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("Recorder", {
      "Recorder--cancel": isCancel
    }),
    ref: btnRef
  }, status !== "inited" && /* @__PURE__ */ React.createElement(Flex$1, {
    className: "RecorderToast",
    direction: "column",
    center: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "RecorderToast-waves",
    hidden: status !== "recording",
    style: wavesStyle
  }, /* @__PURE__ */ React.createElement(Icon$1, {
    className: "RecorderToast-wave-1",
    type: "hexagon"
  }), /* @__PURE__ */ React.createElement(Icon$1, {
    className: "RecorderToast-wave-2",
    type: "hexagon"
  }), /* @__PURE__ */ React.createElement(Icon$1, {
    className: "RecorderToast-wave-3",
    type: "hexagon"
  })), /* @__PURE__ */ React.createElement(Icon$1, {
    className: "RecorderToast-icon",
    type: isCancel ? "cancel" : "mic"
  }), /* @__PURE__ */ React.createElement("span", null, trans(isCancel ? "release2cancel" : "releaseOrSwipe"))), /* @__PURE__ */ React.createElement("div", {
    className: "Recorder-btn",
    role: "button",
    "aria-label": trans("hold2talk")
  }, /* @__PURE__ */ React.createElement("span", null, trans(btnTextMap[status]))));
});
var AccessoryWrap = function AccessoryWrap2(_ref2) {
  var onClickOutside = _ref2.onClickOutside, children = _ref2.children;
  return /* @__PURE__ */ React.createElement(ClickOutside, {
    onClick: onClickOutside
  }, children);
};
function useWindowResize(handler) {
  var running = react.exports.useRef(false);
  react.exports.useEffect(function() {
    function runCallback() {
      handler();
      running.current = false;
    }
    function resizeThrottler() {
      if (!running.current) {
        running.current = true;
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(runCallback);
        } else {
          setTimeout(runCallback, 66);
        }
      }
    }
    window.addEventListener("resize", resizeThrottler);
    return function() {
      window.removeEventListener("resize", resizeThrottler);
    };
  }, [handler]);
}
var Popover = function Popover2(props) {
  var className = props.className, active = props.active, target = props.target, children = props.children, onClose = props.onClose;
  var wrapper = useClickOutside(onClose, "mousedown");
  var _useMount = useMount({
    active,
    ref: wrapper
  }), didMount = _useMount.didMount, isShow = _useMount.isShow;
  var _useState = react.exports.useState({}), _useState2 = _slicedToArray(_useState, 2), style2 = _useState2[0], setStyle = _useState2[1];
  var updatePos = react.exports.useCallback(function() {
    if (!wrapper.current)
      return;
    var targetRect = target.getBoundingClientRect();
    var rect = wrapper.current.getBoundingClientRect();
    setStyle({
      top: "".concat(targetRect.top - rect.height, "px"),
      left: "".concat(targetRect.left, "px")
    });
  }, [target, wrapper]);
  react.exports.useEffect(function() {
    if (wrapper.current) {
      wrapper.current.focus();
      updatePos();
    }
  }, [didMount, updatePos, wrapper]);
  useWindowResize(updatePos);
  if (!didMount)
    return null;
  return /* @__PURE__ */ reactDom.exports.createPortal(/* @__PURE__ */ React.createElement("div", {
    className: clsx("Popover", className, {
      active: isShow
    }),
    ref: wrapper,
    style: style2
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Popover-body"
  }, children), /* @__PURE__ */ React.createElement("svg", {
    className: "Popover-arrow",
    viewBox: "0 0 9 5"
  }, /* @__PURE__ */ React.createElement("polygon", {
    points: "0,0 5,5, 9,0"
  }))), document.body);
};
var Action = function Action2(props) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "Composer-actions",
    "data-action-icon": props.icon
  }, /* @__PURE__ */ React.createElement(IconButton, _extends({
    size: "lg"
  }, props)));
};
var ToolbarItem = function ToolbarItem2(props) {
  var item = props.item, onClick = props.onClick;
  return /* @__PURE__ */ React.createElement(Action, {
    icon: item.icon,
    img: item.img,
    "data-icon": item.icon,
    "data-tooltip": item.title || null,
    "aria-label": item.title,
    onClick
  });
};
var SendConfirm = function SendConfirm2(props) {
  var file2 = props.file, onCancel = props.onCancel, onSend = props.onSend;
  var _useState = react.exports.useState(""), _useState2 = _slicedToArray(_useState, 2), img2 = _useState2[0], setImg = _useState2[1];
  var _useLocale = useLocale("SendConfirm"), trans = _useLocale.trans;
  react.exports.useEffect(function() {
    var reader = new FileReader();
    reader.onload = function(e) {
      if (e.target) {
        setImg(e.target.result);
      }
    };
    reader.readAsDataURL(file2);
  }, [file2]);
  return /* @__PURE__ */ React.createElement(Modal$1, {
    className: "SendConfirm",
    title: trans("title"),
    active: !!img2,
    vertical: false,
    actions: [{
      label: trans("cancel"),
      onClick: onCancel
    }, {
      label: trans("send"),
      color: "primary",
      onClick: onSend
    }]
  }, /* @__PURE__ */ React.createElement(Flex$1, {
    className: "SendConfirm-inner",
    center: true
  }, /* @__PURE__ */ React.createElement("img", {
    src: img2,
    alt: ""
  })));
};
var ua = navigator.userAgent;
var iOS = /iPad|iPhone|iPod/.test(ua);
function uaIncludes(str) {
  return ua.indexOf(str) !== -1;
}
function testScrollType() {
  if (iOS) {
    if (uaIncludes("Safari/") || /OS 11_[0-3]\D/.test(ua)) {
      return 0;
    }
    return 1;
  }
  return 2;
}
function riseInput(input, target) {
  var scrollType = testScrollType();
  var scrollTimer;
  if (!target) {
    target = input;
  }
  var scrollIntoView = function scrollIntoView2() {
    if (scrollType === 0)
      return;
    if (scrollType === 1) {
      document.body.scrollTop = document.body.scrollHeight;
    } else {
      target.scrollIntoView(false);
    }
  };
  input.addEventListener("focus", function() {
    setTimeout(scrollIntoView, 300);
    scrollTimer = setTimeout(scrollIntoView, 1e3);
  });
  input.addEventListener("blur", function() {
    clearTimeout(scrollTimer);
    if (scrollType && iOS) {
      setTimeout(function() {
        document.body.scrollIntoView();
      });
    }
  });
}
function parseDataTransfer(e, callback) {
  var items = e.clipboardData.items;
  if (items && items.length) {
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.type.indexOf("image") !== -1) {
        var _file = item.getAsFile();
        if (_file) {
          callback(_file);
        }
        e.preventDefault();
        break;
      }
    }
  }
}
var _excluded = ["inputRef", "invisible", "onImageSend"];
var canTouch = canUse("touch");
var ComposerInput = function ComposerInput2(_ref2) {
  var inputRef = _ref2.inputRef, invisible = _ref2.invisible, onImageSend = _ref2.onImageSend, rest = _objectWithoutProperties(_ref2, _excluded);
  var _useState = react.exports.useState(null), _useState2 = _slicedToArray(_useState, 2), pastedImage = _useState2[0], setPastedImage = _useState2[1];
  var wrapRef = react.exports.useRef(null);
  var handlePaste = react.exports.useCallback(function(e) {
    parseDataTransfer(e, setPastedImage);
  }, []);
  var handleImageCancel = react.exports.useCallback(function() {
    setPastedImage(null);
  }, []);
  var handleImageSend = react.exports.useCallback(function() {
    if (onImageSend && pastedImage) {
      Promise.resolve(onImageSend(pastedImage)).then(function() {
        setPastedImage(null);
      });
    }
  }, [onImageSend, pastedImage]);
  react.exports.useEffect(function() {
    if (canTouch && inputRef.current && wrapRef.current) {
      riseInput(inputRef.current, wrapRef.current);
    }
  }, [inputRef]);
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx({
      "S--invisible": invisible
    }),
    ref: wrapRef
  }, /* @__PURE__ */ React.createElement(Input$1, _extends({
    className: "Composer-input",
    rows: 1,
    autoSize: true,
    enterKeyHint: "send",
    onPaste: onImageSend ? handlePaste : void 0,
    ref: inputRef
  }, rest)), pastedImage && /* @__PURE__ */ React.createElement(SendConfirm, {
    file: pastedImage,
    onCancel: handleImageCancel,
    onSend: handleImageSend
  }));
};
var SendButton = function SendButton2(_ref2) {
  var disabled = _ref2.disabled, onClick = _ref2.onClick;
  var _useLocale = useLocale("Composer"), trans = _useLocale.trans;
  return /* @__PURE__ */ React.createElement("div", {
    className: "Composer-actions"
  }, /* @__PURE__ */ React.createElement(Button$1, {
    className: "Composer-sendBtn",
    disabled,
    onMouseDown: onClick,
    color: "primary"
  }, trans("send")));
};
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols2 = symbols2.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var CLASS_NAME_FOCUSING = "S--focusing";
var Composer = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var _props$text = props.text, initialText = _props$text === void 0 ? "" : _props$text, _props$inputType = props.inputType, initialInputType = _props$inputType === void 0 ? "text" : _props$inputType, wideBreakpoint = props.wideBreakpoint, _props$placeholder = props.placeholder, placeholder = _props$placeholder === void 0 ? "\u8BF7\u8F93\u5165..." : _props$placeholder, _props$recorder = props.recorder, recorder = _props$recorder === void 0 ? {} : _props$recorder, onInputTypeChange = props.onInputTypeChange, onFocus = props.onFocus, onBlur = props.onBlur, onChange = props.onChange, onSend = props.onSend, onImageSend = props.onImageSend, onAccessoryToggle = props.onAccessoryToggle, _props$toolbar = props.toolbar, toolbar2 = _props$toolbar === void 0 ? [] : _props$toolbar, onToolbarClick = props.onToolbarClick, rightAction = props.rightAction, inputOptions = props.inputOptions;
  var _useState = react.exports.useState(initialText), _useState2 = _slicedToArray(_useState, 2), text2 = _useState2[0], setText = _useState2[1];
  var _useState3 = react.exports.useState(initialInputType || "text"), _useState4 = _slicedToArray(_useState3, 2), inputType = _useState4[0], setInputType = _useState4[1];
  var _useState5 = react.exports.useState(false), _useState6 = _slicedToArray(_useState5, 2), isAccessoryOpen = _useState6[0], setAccessoryOpen = _useState6[1];
  var _useState7 = react.exports.useState(""), _useState8 = _slicedToArray(_useState7, 2), accessoryContent = _useState8[0], setAccessoryContent = _useState8[1];
  var inputRef = react.exports.useRef(null);
  var focused = react.exports.useRef(false);
  var blurTimer = react.exports.useRef();
  var popoverTarget = react.exports.useRef();
  var isMountRef = react.exports.useRef(false);
  var _useState9 = react.exports.useState(false), _useState10 = _slicedToArray(_useState9, 2), isWide = _useState10[0], setWide = _useState10[1];
  react.exports.useEffect(function() {
    var mq = wideBreakpoint && window.matchMedia ? window.matchMedia("(min-width: ".concat(wideBreakpoint, ")")) : false;
    function handleMq(e) {
      setWide(e.matches);
    }
    setWide(mq && mq.matches);
    if (mq) {
      mq.addListener(handleMq);
    }
    return function() {
      if (mq) {
        mq.removeListener(handleMq);
      }
    };
  }, [wideBreakpoint]);
  react.exports.useEffect(function() {
    toggleClass("S--wide", isWide);
    if (!isWide) {
      setAccessoryContent("");
    }
  }, [isWide]);
  react.exports.useEffect(function() {
    if (isMountRef.current && onAccessoryToggle) {
      onAccessoryToggle(isAccessoryOpen);
    }
  }, [isAccessoryOpen, onAccessoryToggle]);
  react.exports.useEffect(function() {
    isMountRef.current = true;
  }, []);
  react.exports.useImperativeHandle(ref, function() {
    return {
      setText
    };
  });
  var handleInputTypeChange = react.exports.useCallback(function() {
    var isVoice = inputType === "voice";
    var nextType = isVoice ? "text" : "voice";
    setInputType(nextType);
    if (isVoice) {
      var input = inputRef.current;
      input.focus();
      input.selectionStart = input.selectionEnd = input.value.length;
    }
    if (onInputTypeChange) {
      onInputTypeChange(nextType);
    }
  }, [inputType, onInputTypeChange]);
  var handleInputFocus = react.exports.useCallback(function(e) {
    clearTimeout(blurTimer.current);
    toggleClass(CLASS_NAME_FOCUSING, true);
    focused.current = true;
    if (onFocus) {
      onFocus(e);
    }
  }, [onFocus]);
  var handleInputBlur = react.exports.useCallback(function(e) {
    blurTimer.current = setTimeout(function() {
      toggleClass(CLASS_NAME_FOCUSING, false);
      focused.current = false;
    }, 0);
    if (onBlur) {
      onBlur(e);
    }
  }, [onBlur]);
  var send = react.exports.useCallback(function() {
    onSend("text", text2);
    setText("");
    if (focused.current) {
      inputRef.current.focus();
    }
  }, [onSend, text2]);
  var handleInputKeyDown = react.exports.useCallback(function(e) {
    if (!e.shiftKey && e.keyCode === 13) {
      send();
      e.preventDefault();
    }
  }, [send]);
  var handleTextChange = react.exports.useCallback(function(value, e) {
    setText(value);
    if (onChange) {
      onChange(value, e);
    }
  }, [onChange]);
  var handleSendBtnClick = react.exports.useCallback(function(e) {
    send();
    e.preventDefault();
  }, [send]);
  var handleAccessoryToggle = react.exports.useCallback(function() {
    setAccessoryOpen(!isAccessoryOpen);
  }, [isAccessoryOpen]);
  var handleAccessoryBlur = react.exports.useCallback(function() {
    setTimeout(function() {
      setAccessoryOpen(false);
      setAccessoryContent("");
    });
  }, []);
  var handleToolbarClick = react.exports.useCallback(function(item, e) {
    if (onToolbarClick) {
      onToolbarClick(item, e);
    }
    if (item.render) {
      popoverTarget.current = e.currentTarget;
      setAccessoryContent(item.render);
    }
  }, [onToolbarClick]);
  var handlePopoverClose = react.exports.useCallback(function() {
    setAccessoryContent("");
  }, []);
  var isInputText = inputType === "text";
  var inputTypeIcon = isInputText ? "volume-circle" : "keyboard-circle";
  var hasToolbar = toolbar2.length > 0;
  var inputProps = _objectSpread(_objectSpread({}, inputOptions), {}, {
    value: text2,
    inputRef,
    placeholder,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onKeyDown: handleInputKeyDown,
    onChange: handleTextChange,
    onImageSend
  });
  if (isWide) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "Composer Composer--lg"
    }, hasToolbar && toolbar2.map(function(item) {
      return /* @__PURE__ */ React.createElement(ToolbarItem, {
        item,
        onClick: function onClick(e) {
          return handleToolbarClick(item, e);
        },
        key: item.type
      });
    }), accessoryContent && /* @__PURE__ */ React.createElement(Popover, {
      active: !!accessoryContent,
      target: popoverTarget.current,
      onClose: handlePopoverClose
    }, accessoryContent), /* @__PURE__ */ React.createElement("div", {
      className: "Composer-inputWrap"
    }, /* @__PURE__ */ React.createElement(ComposerInput, _extends({
      invisible: false
    }, inputProps))), /* @__PURE__ */ React.createElement(SendButton, {
      onClick: handleSendBtnClick,
      disabled: !text2
    }));
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "Composer"
  }, recorder.canRecord && /* @__PURE__ */ React.createElement(Action, {
    className: "Composer-inputTypeBtn",
    "data-icon": inputTypeIcon,
    icon: inputTypeIcon,
    onClick: handleInputTypeChange,
    "aria-label": isInputText ? "\u5207\u6362\u5230\u8BED\u97F3\u8F93\u5165" : "\u5207\u6362\u5230\u952E\u76D8\u8F93\u5165"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "Composer-inputWrap"
  }, /* @__PURE__ */ React.createElement(ComposerInput, _extends({
    invisible: !isInputText
  }, inputProps)), !isInputText && /* @__PURE__ */ React.createElement(Recorder, recorder)), !text2 && rightAction && /* @__PURE__ */ React.createElement(Action, rightAction), hasToolbar && /* @__PURE__ */ React.createElement(Action, {
    className: clsx("Composer-toggleBtn", {
      active: isAccessoryOpen
    }),
    icon: "plus-circle",
    onClick: handleAccessoryToggle,
    "aria-label": isAccessoryOpen ? "\u5173\u95ED\u5DE5\u5177\u680F" : "\u5C55\u5F00\u5DE5\u5177\u680F"
  }), text2 && /* @__PURE__ */ React.createElement(SendButton, {
    onClick: handleSendBtnClick,
    disabled: false
  })), isAccessoryOpen && /* @__PURE__ */ React.createElement(AccessoryWrap, {
    onClickOutside: handleAccessoryBlur
  }, accessoryContent || /* @__PURE__ */ React.createElement(Toolbar, {
    items: toolbar2,
    onClick: handleToolbarClick
  })));
});
var isSafari = function() {
  return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
};
var Chat$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var wideBreakpoint = props.wideBreakpoint, _props$locale = props.locale, locale = _props$locale === void 0 ? "zh-CN" : _props$locale, locales = props.locales, navbar = props.navbar, renderNavbar = props.renderNavbar, loadMoreText = props.loadMoreText, renderBeforeMessageList = props.renderBeforeMessageList, messagesRef = props.messagesRef, onRefresh = props.onRefresh, onScroll = props.onScroll, _props$messages = props.messages, messages = _props$messages === void 0 ? [] : _props$messages, renderMessageContent = props.renderMessageContent, onBackBottomShow = props.onBackBottomShow, onBackBottomClick = props.onBackBottomClick, _props$quickReplies = props.quickReplies, quickReplies = _props$quickReplies === void 0 ? [] : _props$quickReplies, quickRepliesVisible = props.quickRepliesVisible, _props$onQuickReplyCl = props.onQuickReplyClick, onQuickReplyClick = _props$onQuickReplyCl === void 0 ? function() {
  } : _props$onQuickReplyCl, onQuickReplyScroll = props.onQuickReplyScroll, renderQuickReplies = props.renderQuickReplies, text2 = props.text, placeholder = props.placeholder, onInputFocus = props.onInputFocus, onInputChange = props.onInputChange, onInputBlur = props.onInputBlur, onSend = props.onSend, onImageSend = props.onImageSend, inputOptions = props.inputOptions, composerRef = props.composerRef, inputType = props.inputType, onInputTypeChange = props.onInputTypeChange, recorder = props.recorder, toolbar2 = props.toolbar, onToolbarClick = props.onToolbarClick, onAccessoryToggle = props.onAccessoryToggle, rightAction = props.rightAction, _props$Composer = props.Composer, Composer$1 = _props$Composer === void 0 ? Composer : _props$Composer;
  function handleInputFocus(e) {
    if (messagesRef && messagesRef.current) {
      messagesRef.current.scrollToEnd({
        animated: false,
        force: true
      });
    }
    if (onInputFocus) {
      onInputFocus(e);
    }
  }
  react.exports.useEffect(function() {
    if (isSafari()) {
      document.documentElement.dataset.safari = "";
    }
  }, []);
  return /* @__PURE__ */ React.createElement(LocaleProvider, {
    locale,
    locales
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ChatApp",
    ref
  }, renderNavbar ? renderNavbar() : navbar && /* @__PURE__ */ React.createElement(Navbar$1, navbar), /* @__PURE__ */ React.createElement(MessageContainer, {
    ref: messagesRef,
    loadMoreText,
    messages,
    renderBeforeMessageList,
    renderMessageContent,
    onRefresh,
    onScroll,
    onBackBottomShow,
    onBackBottomClick
  }), /* @__PURE__ */ React.createElement("div", {
    className: "ChatFooter"
  }, renderQuickReplies ? renderQuickReplies() : /* @__PURE__ */ React.createElement(QuickReplies$1, {
    items: quickReplies,
    visible: quickRepliesVisible,
    onClick: onQuickReplyClick,
    onScroll: onQuickReplyScroll
  }), /* @__PURE__ */ React.createElement(Composer$1, {
    wideBreakpoint,
    ref: composerRef,
    inputType,
    text: text2,
    inputOptions,
    placeholder,
    onAccessoryToggle,
    recorder,
    toolbar: toolbar2,
    onToolbarClick,
    onInputTypeChange,
    onFocus: handleInputFocus,
    onChange: onInputChange,
    onBlur: onInputBlur,
    onSend,
    onImageSend,
    rightAction
  }))));
});
var ChatUI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx,
  DOMPurify: purify,
  importScript,
  lazyComponent,
  mountComponent,
  useClickOutside,
  useForwardRef,
  useMessages,
  useMount,
  useQuickReplies,
  ComponentsProvider: ComponentsProvider$1,
  useComponents: useComponents$1,
  LazyComponent: LazyComponent$1,
  Avatar: Avatar$1,
  Backdrop,
  Bubble: Bubble$1,
  Button: Button$1,
  Card: Card$1,
  CardMedia,
  CardTitle,
  CardContent,
  CardText,
  CardActions,
  Carousel: Carousel$1,
  Checkbox: Checkbox$1,
  CheckboxGroup,
  ClickOutside,
  Divider: Divider$1,
  Empty: Empty$1,
  ErrorBoundary: ErrorBoundary$1,
  Flex: Flex$1,
  FlexItem,
  Form: Form$1,
  FormActions,
  FormItem,
  Icon: Icon$1,
  IconButton,
  Image: Image$1,
  InfiniteScroll: InfiniteScroll$1,
  Input: Input$1,
  List: List$1,
  ListItem,
  Loading: Loading$1,
  LocaleProvider,
  LocaleContext,
  useLocale,
  MediaObject: MediaObject$1,
  Message: Message$1,
  SystemMessage: SystemMessage$1,
  MessageStatus: MessageStatus$1,
  Modal: Modal$1,
  Confirm: Confirm$1,
  Popup: Popup$1,
  Navbar: Navbar$1,
  Notice: Notice$1,
  Portal: Portal$1,
  Price: Price$1,
  Progress: Progress$1,
  PullToRefresh: PullToRefresh$1,
  QuickReplies: QuickReplies$1,
  Radio: Radio$1,
  RadioGroup,
  RateActions: RateActions$1,
  RichText: RichText$1,
  ScrollView: ScrollView$1,
  Search: Search$1,
  Select: Select$1,
  Stepper: Stepper$1,
  Step,
  Tabs: Tabs$1,
  Tab,
  Tag: Tag$1,
  Text: Text$1,
  Time: Time$1,
  Toast: Toast$1,
  toast,
  Toolbar,
  Tree,
  TreeNode,
  Typing: Typing$1,
  Video: Video$1,
  VisuallyHidden: VisuallyHidden$1,
  FileCard: FileCard$1,
  Goods: Goods$1,
  "default": Chat$1
}, Symbol.toStringTag, { value: "Module" }));
const img = "//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg";
var Avatar = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5934\u50CF\u5C3A\u5BF8"
}, /* @__PURE__ */ React.createElement(Avatar$1, {
  src: img,
  size: "sm"
}), /* @__PURE__ */ React.createElement(Avatar$1, {
  src: img
}), /* @__PURE__ */ React.createElement(Avatar$1, {
  src: img,
  size: "lg"
})), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5934\u50CF\u5F62\u72B6"
}, /* @__PURE__ */ React.createElement(Avatar$1, {
  src: img,
  size: "sm",
  shape: "square"
}), /* @__PURE__ */ React.createElement(Avatar$1, {
  src: img,
  shape: "square"
}), /* @__PURE__ */ React.createElement(Avatar$1, {
  src: img,
  size: "lg",
  shape: "square"
})));
var Bubble = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u6587\u672C\u6C14\u6CE1"
}, /* @__PURE__ */ React.createElement("div", {
  className: "Message left"
}, /* @__PURE__ */ React.createElement("div", {
  className: "Message-content"
}, /* @__PURE__ */ React.createElement(Bubble$1, {
  type: "text"
}, /* @__PURE__ */ React.createElement("p", null, "\u5DE6\u8FB9\u6C14\u6CE1\u5185\u5BB9")))), /* @__PURE__ */ React.createElement("div", {
  className: "Message right"
}, /* @__PURE__ */ React.createElement("div", {
  className: "Message-content"
}, /* @__PURE__ */ React.createElement(Bubble$1, {
  content: "\u53F3\u8FB9\u6C14\u6CE1\u5185\u5BB9"
})))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u56FE\u7247\u6C14\u6CE1"
}, /* @__PURE__ */ React.createElement("div", {
  className: "Message left"
}, /* @__PURE__ */ React.createElement("div", {
  className: "Message-content"
}, /* @__PURE__ */ React.createElement(Bubble$1, {
  type: "image"
}, /* @__PURE__ */ React.createElement("img", {
  src: "https://gw.alicdn.com/tfs/TB1HURhcBCw3KVjSZR0XXbcUpXa-750-364.png",
  alt: ""
})))), /* @__PURE__ */ React.createElement("div", {
  className: "Message right"
}, /* @__PURE__ */ React.createElement("div", {
  className: "Message-content"
}, /* @__PURE__ */ React.createElement(Bubble$1, {
  type: "image"
}, /* @__PURE__ */ React.createElement("img", {
  src: "https://gw.alicdn.com/tfs/TB1I6i2vhD1gK0jSZFsXXbldVXa-620-320.jpg",
  alt: ""
}))))));
var Button = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u6309\u94AE\u989C\u8272"
}, /* @__PURE__ */ React.createElement(Button$1, {
  color: "primary"
}, "\u4E3B\u8981\u6309\u94AE"), /* @__PURE__ */ React.createElement(Button$1, null, "\u9ED8\u8BA4\u6309\u94AE")), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u7981\u7528\u72B6\u6001"
}, /* @__PURE__ */ React.createElement(Button$1, {
  color: "primary",
  disabled: true
}, "\u4E3B\u8981\u6309\u94AE"), /* @__PURE__ */ React.createElement(Button$1, {
  disabled: true
}, "\u9ED8\u8BA4\u6309\u94AE")), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u52A0\u8F7D\u72B6\u6001"
}, /* @__PURE__ */ React.createElement(Button$1, {
  color: "primary",
  loading: true
}, "\u4E3B\u8981\u6309\u94AE"), /* @__PURE__ */ React.createElement(Button$1, {
  loading: true
}, "\u9ED8\u8BA4\u6309\u94AE")), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u56FE\u6807"
}, /* @__PURE__ */ React.createElement(Button$1, {
  color: "primary",
  icon: "search"
}, "\u4E3B\u8981\u6309\u94AE"), /* @__PURE__ */ React.createElement(Button$1, {
  icon: "search"
}, "\u9ED8\u8BA4\u6309\u94AE")), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u6309\u94AE\u5C3A\u5BF8"
}, /* @__PURE__ */ React.createElement("div", {
  className: "demo-row"
}, /* @__PURE__ */ React.createElement(Button$1, {
  color: "primary",
  size: "sm"
}, "\u5C0F\u53F7\u6309\u94AE"), /* @__PURE__ */ React.createElement(Button$1, {
  color: "primary"
}, "\u666E\u901A\u6309\u94AE"), /* @__PURE__ */ React.createElement(Button$1, {
  color: "primary",
  size: "lg"
}, "\u5927\u53F7\u6309\u94AE")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button$1, {
  size: "sm"
}, "\u5C0F\u53F7\u6309\u94AE"), /* @__PURE__ */ React.createElement(Button$1, null, "\u666E\u901A\u6309\u94AE"), /* @__PURE__ */ React.createElement(Button$1, {
  size: "lg"
}, "\u5927\u53F7\u6309\u94AE"))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u6309\u94AE\u53D8\u4F53"
}, /* @__PURE__ */ React.createElement(Button$1, {
  variant: "outline",
  color: "primary"
}, "outline variant"), /* @__PURE__ */ React.createElement(Button$1, {
  variant: "text"
}, "text variant")), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u56FE\u6807\u6309\u94AE"
}, /* @__PURE__ */ React.createElement(IconButton, {
  icon: "image"
}), /* @__PURE__ */ React.createElement(IconButton, {
  icon: "volume-circle"
}), /* @__PURE__ */ React.createElement(IconButton, {
  icon: "plus-circle",
  size: "lg"
})), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5757\u7EA7\u5143\u7D20"
}, /* @__PURE__ */ React.createElement("div", {
  className: "demo-row"
}, /* @__PURE__ */ React.createElement(Button$1, {
  color: "primary",
  block: true
}, "\u5757\u7EA7\u5143\u7D20")), /* @__PURE__ */ React.createElement(Button$1, {
  block: true
}, "\u5757\u7EA7\u5143\u7D20")));
var Card = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(Card$1, {
  size: "xl"
}, /* @__PURE__ */ React.createElement(CardMedia, {
  image: "//gw.alicdn.com/tfs/TB1Xv5_vlr0gK0jSZFnXXbRRXXa-427-240.png"
}), /* @__PURE__ */ React.createElement(CardTitle, {
  subtitle: "subtitle"
}, "Card title"), /* @__PURE__ */ React.createElement(CardText, null, "Card content"), /* @__PURE__ */ React.createElement(CardContent, null, "Card content"), /* @__PURE__ */ React.createElement(CardActions, null, /* @__PURE__ */ React.createElement(Button$1, null, "Default button"), /* @__PURE__ */ React.createElement(Button$1, {
  color: "primary"
}, "Primary button"))), /* @__PURE__ */ React.createElement(Card$1, {
  fluid: true
}, /* @__PURE__ */ React.createElement(CardMedia, {
  aspectRatio: "wide",
  image: "//gw.alicdn.com/tfs/TB1pLWVTAT2gK0jSZFkXXcIQFXa-620-320.jpg"
}), /* @__PURE__ */ React.createElement(CardTitle, null, "\u6211\u7684\u6807\u9898\u6211\u7684\u6807\u9898\u6211\u7684\u6807\u9898\u6211\u7684\u6807\u9898"), /* @__PURE__ */ React.createElement(CardText, null, "\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5"), /* @__PURE__ */ React.createElement(CardActions, null, /* @__PURE__ */ React.createElement(Button$1, null, "\u524D\u53BB\u7559\u8A00"), /* @__PURE__ */ React.createElement(Button$1, {
  color: "primary"
}, "\u63D0\u4EA4\u8BC4\u4EF7"))), /* @__PURE__ */ React.createElement(Card$1, {
  fluid: true
}, /* @__PURE__ */ React.createElement(CardTitle, null, "\u6211\u7684\u6807\u9898\u6211\u7684\u6807\u9898\u6211\u7684\u6807\u9898\u6211\u7684\u6807\u9898"), /* @__PURE__ */ React.createElement(CardText, null, "\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5"), /* @__PURE__ */ React.createElement(CardActions, null, /* @__PURE__ */ React.createElement(Button$1, null, "\u524D\u53BB\u7559\u8A00"), /* @__PURE__ */ React.createElement(Button$1, {
  color: "primary"
}, "\u63D0\u4EA4\u8BC4\u4EF7"))), /* @__PURE__ */ React.createElement(Card$1, {
  fluid: true
}, /* @__PURE__ */ React.createElement(CardText, null, "\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5"), /* @__PURE__ */ React.createElement(CardActions, null, /* @__PURE__ */ React.createElement(Button$1, null, "\u524D\u53BB\u7559\u8A00"), /* @__PURE__ */ React.createElement(Button$1, {
  color: "primary"
}, "\u63D0\u4EA4\u8BC4\u4EF7")))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5361\u7247\u5C3A\u5BF8"
}, /* @__PURE__ */ React.createElement("div", {
  className: "demo-row"
}, /* @__PURE__ */ React.createElement(Card$1, {
  size: "xs"
}, /* @__PURE__ */ React.createElement(CardText, null, "xs"))), /* @__PURE__ */ React.createElement("div", {
  className: "demo-row"
}, /* @__PURE__ */ React.createElement(Card$1, {
  size: "sm"
}, /* @__PURE__ */ React.createElement(CardText, null, "sm"))), /* @__PURE__ */ React.createElement("div", {
  className: "demo-row"
}, /* @__PURE__ */ React.createElement(Card$1, {
  size: "md"
}, /* @__PURE__ */ React.createElement(CardText, null, "md"))), /* @__PURE__ */ React.createElement("div", {
  className: "demo-row"
}, /* @__PURE__ */ React.createElement(Card$1, {
  size: "lg"
}, /* @__PURE__ */ React.createElement(CardText, null, "lg"))), /* @__PURE__ */ React.createElement("div", {
  className: "demo-row"
}, /* @__PURE__ */ React.createElement(Card$1, {
  size: "xl"
}, /* @__PURE__ */ React.createElement(CardText, null, "xl")))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u81EA\u9002\u5E94\u5BBD\u5EA6"
}, /* @__PURE__ */ React.createElement("div", {
  className: "demo-row"
}, /* @__PURE__ */ React.createElement(Card$1, {
  fluid: true
}, /* @__PURE__ */ React.createElement(CardText, null, "fluid")))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u6309\u94AE\u7AD6\u6392"
}, /* @__PURE__ */ React.createElement(Card$1, {
  size: "xl"
}, /* @__PURE__ */ React.createElement(CardText, null, "\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5"), /* @__PURE__ */ React.createElement(CardActions, {
  direction: "column"
}, /* @__PURE__ */ React.createElement(Button$1, {
  color: "primary"
}, "\u5F3A\u6309\u94AE"), /* @__PURE__ */ React.createElement(Button$1, null, "\u5F31\u6309\u94AE")))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u6309\u94AE\u7981\u7528"
}, /* @__PURE__ */ React.createElement(Card$1, {
  size: "xl"
}, /* @__PURE__ */ React.createElement(CardText, null, "\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5\u6C14\u6CE1\u5185\u5BB9\u8BE6\u60C5"), /* @__PURE__ */ React.createElement(CardActions, {
  direction: "column"
}, /* @__PURE__ */ React.createElement(Button$1, {
  color: "primary",
  disabled: true
}, "\u5F3A\u6309\u94AE"), /* @__PURE__ */ React.createElement(Button$1, {
  disabled: true
}, "\u5F31\u6309\u94AE")))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5361\u7247\u5A92\u4F53"
}, /* @__PURE__ */ React.createElement("div", {
  className: "demo-row"
}, /* @__PURE__ */ React.createElement(Card$1, {
  size: "xl"
}, /* @__PURE__ */ React.createElement(CardMedia, {
  image: "//gw.alicdn.com/tfs/TB1pLWVTAT2gK0jSZFkXXcIQFXa-620-320.jpg"
}), /* @__PURE__ */ React.createElement(CardTitle, null, "aspectRatio: square"))), /* @__PURE__ */ React.createElement("div", {
  className: "demo-row"
}, /* @__PURE__ */ React.createElement(Card$1, {
  size: "xl"
}, /* @__PURE__ */ React.createElement(CardMedia, {
  aspectRatio: "wide",
  image: "//gw.alicdn.com/tfs/TB1pLWVTAT2gK0jSZFkXXcIQFXa-620-320.jpg"
}), /* @__PURE__ */ React.createElement(CardTitle, null, "aspectRatio: wide")))));
const imgs$1 = [
  "//gw.alicdn.com/tfs/TB1GRW3voY1gK0jSZFMXXaWcVXa-620-320.jpg",
  "//gw.alicdn.com/tfs/TB1I6i2vhD1gK0jSZFsXXbldVXa-620-320.jpg",
  "//gw.alicdn.com/tfs/TB1XCq4veH2gK0jSZFEXXcqMpXa-620-320.jpg",
  "//gw.alicdn.com/tfs/TB1dzG8vbj1gK0jSZFuXXcrHpXa-620-319.jpg"
];
var Carousel = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(Carousel$1, {
  autoPlay: true
}, imgs$1.map((img2, i) => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, i), /* @__PURE__ */ React.createElement(Image$1, {
  key: img2,
  src: img2,
  fluid: true
}))))));
var chatAvatar = "/assets/avatar.png";
var meAvatar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAA8gSURBVFiFtZlbjGRHecd/dTnXvpzumeme2ZmdvXl3vTZ7w1cQFkaWI0wuElIS5YWHKHkIEYsET0TKY16IoohIgIQJeeMlAitIiQSJCMGsbSCGgB3L68va3lnvzM7Mzs50T3efPreqykP3LLvrNYnjpKR+aemc+p2v/vV9Vf9P8D6Gc64FfBz4GHAUmJv+9gNXgK3p7yLwQ+CfhRC99zPnewZ0zn3GOXfeOVe69zZK59y/TZ9vvde5xXuArANfAM4BexMN8qoa5kURlobd0hI7J5rOWR9hCiXFridkqpVoBn6QBVrVgcb02R7wFeAvhRDD/zNY59zvAV8GFgAqY9eGWeaysuxWVekJIXEOxlnFYDDE05JmEiOFpN/vYa0jDJv4QVA242CzHvvCV2px+vp14LNCiG+/L9hpNP8K+PQUcqM/zl2WpwvGehRZyeWVyzzz3DOUVcbbb71Ga26B7e0enlZkaYr2FHef/ACerDM70+HU6buZnZ2lWQ/Xk9gXnlLz0+m+BnxeCJG9Z9gp6HeBRxyko8zsDLNyyVQF4/GQa1t93l65zN9+/WtUecnG5lWOHT/I2tp10tGYpFajPTdHf9int3OdJJmlM7fAgSNH+cQTj3Pm9EkqKpJatNqMw7ZAxMAzwCfeTRZ3hJ2CPg+ccM71rg9zURkS5xyb1zZZu7rBU9/+Fv/x7z9ltNOnKArKMkdJQ7uzgKd9mvUm/d0+axtXERZ8Hz722OMcOHqGeiSZaSWcfehhOp0E31P9bpI4KUQLeAV48E7A+tdE9IS1tr+TpljnEiGgv9NnfWOLIAhZW32T0bCP1pNXhGGIEAKTG1yVk+mM7e11bJnirMNZyQ++/y8svPgSM90O9z30IXKnOH36JElSSxyu120mfSXlCeC7zrnfuF0S74BlotFHnHO9nTTFWNcSQmCripU3L3Pl6lWstWxvbuKsAaUJwoCiKCjyAs/T1OMEayzNpEFRZFhrcdZhTMXm5jq9/jYXX71Af7fHkeMf4A//6I/56GMfbVlUb1/S6EkhHgG+BPzpu8pguuu/5SDdHo5KY22CAGccTz31ba6vb4NSvPb6Gzz/7L9SGUcUNRmnY7IsQ4jJ67SnCcMARIE1FUoptK8Z7AwoqxJrLA6Hcw6hAqJ6g0PH7+bc58/x4H339fe3Ek9ADPz+zVlC3rb8XwZI83zHuAmoqTQvvvIG8cwiM/tmufTWRd68cAHfMySNiNAPKIocnMMag6lGZOMddnubDHp9irxACEGWZkglwe19TIjDYcoxNk85sXyI0GpU6ZLhuNiZYn1pynUrLJOEv1BZuzHKiyUc4EAIQztp8LOf/IRvfOPr/Pi5Z+j1trBWopSPlBKBwDpDZTKENPieQEmHLySecVT9HtoZXFURhiG+7+NpDyHE5EOylB+d/wEbV68glWA3K5dKYzeYlO0v3KLZaek7B7CbZe5maUjhaDcaNOsx0jqwhizL0FpRlgZrMrRSGANCOsJAcXDpAJEOqdebCGfJR0P6WcpgPCYtDHmeI7UkjmPSUYpzju3rGzz34/P81u/8NsZBL81dpxEBnHPO/bUQore3wT4FtCpj1ipjFm+Gtc6wvb3JK6/8kuubPUI/xA8btD1FFPsIDYuNFrs9hxIRdx3fx4njdzHfaqO9GkVRkI522Ont8PbqNVY2xlzt9xgXOVEQUeQFZVninOPlCy+T5imeX6eo8oXC+GvTSvcp4Ct7sH8AMCqKW6IKUJaOF3/5EutX1rGmwPdialHMqbv2cejAPEqU1OI2VVGxtXWdg0f3s2+hS6g9bGnIspRxQ9Dptlg+uEzyyiWqCyUr6ynGGqI4otqtcA6urq7x/M9+wUc+/AhOwDAbu5laHeB3ga/oqQQ+BAwKY7o3csQUuzKCZ8//mPXL64AhCCRHDy7w8Ml7iCOJ51dEUQvP85H3Hsb5PtoLUCpEFAOgQIoAYyo8z+PQ/gVWrmyytqVBCYSd6NZZRz1s8I9PfYeHH/gw2oNxWXSBAZNU2pLAE4DOq2ronPNuj6ynNQ4wwhKHMQvtmHuPzyC9AlSJH3h4vocfhMTxDGGjQ1ifQQpJVVaARHk1tBcQeh6deo17DyxysB2hlaIsJhJwOPo7W2xtrO7NDC7wssIMp3vrCQk8ClAYE94OOtl8JfuXFpFS4nmaZiMh8iJwDi01SmqUkujAQ3oCz/MBgdIaFcR4UR2tFEr6SOmhw4BktkWSJBRFgXHmxir6fkCj3kQqiZtWgLy6wfWoZHLCxxizeydYrUF7EmstUkpsaZDlrzKec+6GbpxyVGYSKSEEwosQKkAqhRAahIfQHn7k0+nOIaVCConDgYAgCKk3mreUqtLYPa6jmsk1hMq5+BbK6QPGGpy2WGkQUpKmKWmaEgYCE3hYJ5FKonRI4DWRUpGZkkophr2UsrRkuSQY53jSYa2hEQtmmx6J7+OqiizLcM4xTEeceuhhpCiRYhIQ60wMIcDcDVjrXPNOkcVBp9vF8zyklJS2YpSPiGwDWUiCRhMjYpwMEIGPlAo3rrh48SKXX7/M2uoqUU0jckfga+YXu7SbAUmSUG9ojI7pDwYktZDSOppJgpmu4nTl9rjmNJMqAc75d2IVUrB/aYlW0qIcDREyYmfQYzDK0V5Mkb9FEAScuf8MJ043EVpicPiBz+G7DrN8cJntwTbFqKR3fYcr6z2atUWajRbL+7ts/ucbRGHA4489wkuvXpqcGay9WWZ7XPs1k2vFAkIUOBfcCbjRbFBv1igFeEHC5kZBtvM284v76C4tstTRuPE66XaXpNEldJr5Vsiu2CUdjzm40MLzPLRYphiUZNkueenTChPycY6wjsP79nH/6bPowca0DEuEAOdcAQTAlRuwUohd61zndlApJHEUE4QB65dWmWs0aTZrnDr2QRaWl3FhSDv2EA5GO31Cv0ZlSsrcsrKywvnzz/HoYx9npubhK0E7mcULamTXMjxPoJWHczDbSJidX0DF9RsSABBC7AIdYEsyudejhUjvLFlH4AUsLOxD6gDhHAeW51mYn+XnP/85T/7dN/Fbi0hdRxrLbv86zlUEQUzSanHg0BH2L9/N3EwX5Rx+IPF9DykFcc3H9wKcE9T8gLjW5MCh47fAekrtca1rJgbE40qpJsa8U7MInFDs23eYZv1VlNY02y2CmuTsmZOcPHsfSahxsoHGYWyGrhSmNBw+cIzFhYMEoUbLBmGjhnERotoiDgNaQcjBhQaN9iz7jh5ju8gIfH8igWk6VELsbbBLGnga+LSvVDa+Q2Sl8AmjGseOHee1F3+BTQf4WhFFCTOdOn5URziIazE7m1dRGqznYUxFI2nRas9iBEhhcdZSZBVZpRBKUTnHfKfDqbNnqbIUpXzEXlSnqTPw/b2rzdMS+B5QBVrXhRDlOyIrPKIwpjM3x/LyAlKBrxW1cIZmfZZ6rUYcxzhnKPMUYwxVVVBVY4ypJgXB83A6QGgPyJASpJLklcFXHnNJG8oCZaEqS5yze3otA63rQAV8T069p58ADV+pzXeGNkcrS7ud0KxFtOMaVkikqpDS4k0P0s5aqsoQxrN44eQONur3EFWJthbtLNJZwFFVFVVREijJbL1OUosI6j5ZlVFV1bQqgq/1JhMH5xkhRG9PyX8PUPP9O17NlVLU6w3ajTqtdhMQVM5hJ18PQFUZrDVIJdC+h+9HVGXKcLCNKSuEA+z0EOBASkkUhIRRhPZ8kApjJbVmGykVt/E8Bb+63X4T+Aut1KJWar0yZuFWWI9Gs0m3M0OkHHmWk1WG+iQRYp0lzcbkRcG1tasEUUg6SgnCgoarUZUlwoGxFcZUYMHTHmEYsrrR4/xzPyWKIqKFw9znhQgEWql1PTl496Z8E1ghRM8591Xgz5thKLZHo1t1Ky1RKOksHyEKQrLeNuloh7yh8bypvrA0GpPDSSNp0ZpfwJQ5VmjKqsRYgzUFFCVCOpTvIYIA7cesrV6jtBUfOf5BsCXg0QzDvah+dc8mvfnC+EVgXUs5X/P9VZAINNNVxvM9ZueXePXi2/T7I8bjEcPdPtmoR56mVEVBGCiSZo16HNHwYyLtI21FkW6TprtYU1KVxWQrCIGwE0PPTf4gmUkQnqIWBqtayXkmHu8X9wBvmBxCiKFz7rPAt+IgaBeV7FsnE6TF2smRL6y3GZeCjUsrnD61RD4eIeoaYyTDXh9cTj5oku9m5IUlS3cx5Bg1Jm53mZ3t3Dg+AlRZRTpIcThqSZ3uYgcvCvq1MGhPsT5/s410c2SZGgpPCohbsXaQ94yxNyZIahEHDy4zTMdkuUOrBlUREdQj8KDf32FrY4NBnlMEPl4Q0J6Zp3vgXmbm9mOMmKa2inGW08vG5IALY8LlI8zM7ustNhpuanA8ebsNeif76HPASSHER9px2N9J056ZutTa85idm6WyjiuX10hqdYaDXcJGSCtp0ow9At3GixqIMCZys1hnKJRCYsiqCmsMVWXo7fQY9nc5cuIeDp24l7nDh3v3Hj4opBAJ8OyU45bxDlghROacewJ4Xkp5YqZW622nad9YmwjlM9ddJGl3uLr6Bs16yFInJNzR+J5PEDSIojpBFIH2cE5TFBlVVaLsGFuMKIuSra0t1tfWmO8ucOyBB7nn7P39xU6bKegrwBN38mnl7X/s6Rd4EHhWCNGaqdW8mh+vKqlZOnyYxz/5SaJ2hxdefpOLKz221q9T5hWmNBhjcIDWGiEnqc0VOflom8HgOpdWLrPy5pvMLy5Ri2KO3XVkdakz403tzmd5F7vz3WRwA9g59zjwNwL+pBaoONByQ8q6u+fMBxauvvUg//QP3+HC61eoBgPORiFNWUf7BaGzGGswVUlZ5OTjMbu7Q1579Q2yYZ/u4n4OH79n/YGP/aZozs4tTad8Evjcr3O+3xV2CpwBn3bOfR/4slZiodOMaIZq7cxDD7gf/fCH3arf92a687z8yqucPHU32o/xsgzhwOUZ2XDA5rVNLry+yuzMXPmhRx/dPPvIE6LdXdxzfq4w2fXvr6dw85i6eX8GfIZpt8YYM3jphReGw40r4ebVld3XLrwQd+c6zfZs11dBrRBC7Uol0yCMmnefvT9bOnhXXUh5c7fmq8AX/6fdmvc8pn2wc9N+1v+2D3bu/7UP9m7gTBydR/nvO4xPA997Px3G/wKPynFhnQvl+wAAAABJRU5ErkJggg==";
var guessImg = "/assets/guess.png";
var functionImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAfXSURBVFiF7Zfrj15VFcafZ+1z3vtc3pkObW0HelXphEZQFIgfWgVREvnWxpjoN7/oH0Eb/wK/KUZiTIyxNX4wCJiITEnAqFiU0GnptEBpmRnauV/ey3nPXo8f3mlL27lgQBMTd7LPPsk5a6/fWWvvZ+0D/L/9jzV+HGNJBE4aRsc4CuDQoQMCjjhJ/deAJBHTv6thoXUQS5f2e75yl8HKLglMl6zQM9Wp3TOeFtpnOHy0+R8F0tQfqvnspYdt4e0vYeVKxfNOEQLNrA0LbdAcAGAJULunYfW7XwG2vs79T7Q/cSBNPjcUr7z+TS5c3IXYKKM8OMjq3Xdp/vwssqVphMIyzDq3GIWqVN83Hqr3Ps/9Tyx+YkAaf67XF1//FhbO73BnX9j95APY9sgI01pJZ595UVOvvmWWrDgt3m5rTIWhkbfRc/9vuftwazNfyaYwEuMbP34sLI5vdyvUwn3ff5T1e/fr6t/Ox8t/fIPL704iFJoOOowAulm7MahDzJzdY4XBhwG89LGBMPHyTi6cG/FcqY1854vo+/RenX3mVU2cGiOTBQtp5qRMhLsTIGAU7ENUsU2fH39Is6+d5sAXFjZyZxs9lETMn7kf2Tww8NkhDN1/UJdfGNOVly4abdmSpOMGwEAPMpBmJCEYXISTgAFmQONKgvnxg5t9/4ZAOHnSvDU3jEDa1of3oNOKuvLiOIwNN4sePSCPCfxmd8QE8gBDAGk34ABgeXJYx45t6HNjoD1zhrxdMxhR3tKP5sT7yOZmwNABLIAsgChBLEMsg1ZyZwlEwd1TIAZQBtEMIrJ2L556akOXG6+hbCWxxM3dYed+dso9TwFGMJikCqEgIHB1twqSQRGwHEQOWsfdo5G5ywDPi3by5IY7e5NFvROuWQNi8NZMB3JCLIJegKsoqWSm1KUUgADLBWYA2ga2YWobmDlg5jG3wE1lZmOgYQDvxwAxdaloUglAWZ73weMWynvhXjTRAECGSFrDoy0qpDOULYNsGqwFGlwKLw+NfZwI9ZbheQBVMFdZVA15vt2Qb4V7BWQqKcF1gRVc7jXS+wmvOwuTsDBDiiBgsVM6tGt3AiBfz+O6i1qv/SSNs+NfRnOmClcJUBWxM0zvDEveJ6AGeRVABa4qXFVIVVIVSDW5D1hs34OY3yV5DUDJW9f6sYyHpBNhPb93hE8SceHXe+Lye4c1P77PvF1BjD2M+aekbBegGoQSoRRSAsKkG/MIgAPMSbZFtgBbVFJ6BxamAS6HYs9SrO19s1XY8WJt5OjUhkASiPO/fBDTp7/mzWtlkEV57IG8bnnrM5IPgCjDvQQgAREg8BYc0glFiTm6QA1Z8gFC8V2ACwxcgtBCz44F2/LQr7j3yffWT9nUy1t85p9f9fZ0CslMSghPTXk/oCqgAlwFdNdeAsEAWXe36/p9EJCASkikoApU3geoSkMKMAFpWJmo+tL4N3Ti1vTdCtS8vBvt6QJcBGGOmEhM3b0PUncyKAAIAAiKq1G+2alu6QCDXCm7i74IjzUJBUCJQwGKRGNiKx4f6VsfqJ0HGNB1REI0QAkVy4ICoEB231hVwju3sLrPiC6suvABiGWQiVwJRDM3QiIaM+tHqFHdfglJPV6fGEYCNBIBWNWam6q8rp4IogSyG0EDZJISSYEkQdEDieq2WWybml0XqDL82KT33/dnS/tXzzbdRAi3Hdr/3ZO4QFulAwCjAaVtLRvc9Tx59JZD3S3CSFLSS6dwEfOYv/yIZ8u7LW85NJNBK9cnX31ZN+9vb1y9XB9hUNqTq9TvDIXlWBw854WtfyruHHv7dtM7lJo8nJ84cuQfR3749fNZzOtqdrYnWfPbAa3vkQwCA2mr2svVTH6ITAIgQjJBKaAAgZ3irmezUP+7lQqXavXqBK6dWgaevuOT1gy+JI6dPJ5ur28vd0qNwXL23kh1/vTTkG/7COa3AhLyUPvL0tBXfuSoXARtIq9W57ceLLVuTxewQem4OgbPfDEPodT26q6JmA6cAJDd6Xit/uGWzGW1vc+FpDRXDHGlk3eyzlvTDoytmfC1gUgcOnBGzcKW2AqxZQxLjb4Hfu9J7QVsUBhvbwIbWXnHb1qVfec6zvk82kqxXcwWsRiPH1/bZs0idxwAR45y+L4KBlaECDFnUejZfiG0ZhLz9n5sdFIgBIbZvLr7F83+z71iSTqZEtOWthaXwrbW3seH8sOHf+AfGQgARkdH9eij3+WDtoSrFlExSFbMY/XuC5E2FvLlGuUDuBllAcxFW4hJ/6lG/cGf57W9Z4DiZCJca1ljoV6pNHqVdY7/9B0fHR1dM2UbKkq3ip8wjK6kC8lUuYFyT6kc+phpAKb+QvODIWtd3Uu1+wXK0+pMp7TzsoeeJZgtBPhslvucCukCs9LKlnpPGwfGcvLYmtHZFAgAJWF0dDQcwrvJXE9WjI1GpZAUqp6gpuhVh8ppCEn03ESLJs9MoRE9rtB8OemEleZgaA5hKMOBsRw4JnJdBdv0R1EkKSECJzTz/Gn1lQfjYtLbrqO4vNTKS5XeQsK2J86EhbzjTsvznFkhKbQ7qbXnVc92NudyfH4sbgYDbPYbdAMKAo/6vr8OdoaAVms+WalaspikvTO+mE17beCDpNo/5b2Fq3NZnBnYgrl5Npdmrr7ZutAe6+DZyUge881gAOBfP94fiGH9yCMAAAAASUVORK5CYII=";
var loginImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAXHSURBVFiF7Zfba1zXFca/tfa5SZrRSIol1dFgx66apDQxKXYvxvWDe0tvcS5FgYTmoZg8hGIolEJLKChQmj+gpC6ElLakFEJDIQ+BmlBMS0Li2BEkthMTx7HjxJYtWRdrxhrN2Xt9fThybbljjSVD2wcvWHAu+6z922sv1rcPcNNu2v+H6aLfsMmNfn/XzmcHsoG+7QDQODf1z0MvPX4OAP8XQHLv7uc2Rf337LGoYwsAaN444E8efuJvv3vs7dVCrRZIvvXjV77ce2v1NwHpJlLVgkFIE5+/PT15+olXfr3j9f8WkD78i5e3atfa32vSt9GCKigIPhRvCZPmhY/RnHj0hae/+hpWmCm3UpgHfrb365XBu5/XqHu9MFaymE9FISIgKHBJhVHvzg2bv//W+6+tPwHsu26oFQCNuAd++vMHB27b8IfA8iApQgqMtmRUASiAaGci4b7BYR4/MXb+KHDCWsddFdCoPvTkffd3D31xT5DymqYKSIFQQAFEFZcyRRIGBRkjREkWl/p3DN/92WPv77/96PVkqi3QyMiI+/yuXSNZV+8eTUr9BimKggB4Of6VQMWVgTQRlY4sS7+2bsvGU8eqs+/iyJFloZYFGhkZcXLnDx7v6r/jtxp3dXsobDEcYTAxgAKBgHYlEAEJBSQhpmmnSzu+u65rzcTxWzm2HNQ1gYa/vTv91Jd2/airb+iXGneWQMBMoDA4eAgBpUBoAAJEWGTFAoAAWpFLFYJ0ADSipNvXyp3zycz5sampY+G6gYaHd6fbH9q8u3tw01OSVLpFBCCgLkYWR+iIBLGLEbsIsXOII4ckjpAmMZI0RprGiGKHOHYgDT44kAowy7Is+Up5DeZ1zh1sBdWqD8nOp/7+naENG/8cmJZJRUYiimLU6oa86UETGAmjwQxX1JLCTBdrjBAJcBHgVDA7PQtDJ8AAWm1uYvzUI/uf+97LuKpPtRTESl//NpNSiVCIAFkSYfr8DBr1iwi5wUxgFBAKUkE6kK54HgQMAprCB0NjoYl6bQ6VShcEAoiDSblULvdtazV3S6AadXyOrgk6xprgQo0IIQYkg4lDgF0qWIBFzRR+qdUEAI3iHQG4BD44ZBlg1mBTFpoLbI5fLxCPHzjwIhq1MTHvhcHyPJhATQATyKLD8O97mJJByVCMWXRZHEu1PJilUbCIDW8Lc2PnPnj3xau3C1hGy+7d9czwYPWOhzsq/ZtrHFjDJT0HIC0VQdLTHcVRDEkuesuDhrMXo3owb8KcJla0AMtAI6qV8cnjRw8dPPPJhy+89dLosVbzthNXefKZ/VvfmxnYUSTTA1CQJn0defTgN4a2fnoo+0zwvv7RuWimXvcXPjjdnDj03tSpWo4GFFA1wBI0c4+7Ntg/nv7hH18FRq8pI+1OeRzomAa9i+hdTGNsISQISNbf0hy4Z2PnlpJIGi3krjt27ERTqiVLB7utU5DGYhLTGNMkFkgUaeKXgwGAqA0QnHNL9llESTMweJIkpBBTlSDi1HJVBBe1zjxD22Nu+3OwB6BXDDODCHh2Yn7yncMfHWzM53VSFrz3uQ/MZ2u+NjPn6y1jiWur+G0zJOrmNfJgMCHBS0uYyHvt+b3113t6Th+K4lhyQ/CedqHmFrw5gzYur0GbFAHNWVu1bwtk0BApJA9LF+ctEQ9wfhpzQF5EMgUsQaEz/nIMMygkQkDbDLXdsvMnD37Sm6ULumBLdUevcivwoRcBbS4Zmnrl2kqpUZt+52S7+dqfqUn5ybNnvnlmfOoLTYkdAAlUEVEWQvafpqqFlIkRMCbCcNu6/jd/9Vjf3sVjwTWtfVGL8Mhf/7Kv2jn5RrWSz/ZknqWIWnZeSgnYyrucSSmi9mXGaiWarfZMvjH25p/2tYMBVvDXMTo6qofnt5V7Kt2DHb23JGoW5ZSWC4pzmqn38/Vmc2Z24uznOl6dGx1dvv+sGOgGvln1X+xNu2mrsX8BzBX2nxw/s34AAAAASUVORK5CYII=";
var questionImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAbsSURBVFiF7VdrjFVXFf7W2vuce+f9YGYQ5FHK04rQlrTwSyamKSGpjx+iJbb1lfijiYmJ4YfVHzfRpCaamlRJzWjioyEqE5NqkyalxU6riAJhCoRpAa08BxiGmeE+z2Pvtfxx4c6dF69of/HdrJyTe9Ze69vf2muffYB7uId7+P+CPqw8L/zyheXr161fOP1BidPi/qOHzz3/tedGAaidMVRBG3/6pZawmGTuNnuyJIz/+a+VReRyAgAvvvqbR3o/ufnpK40TsU7zbfRA7/1bxs+fHfvFy7kfj9QTos/86bmezuPd39BP6VNE1Ha3hMDkVq11r5vNz38/fDseeXj9hi2cCV1iJREBiKnGi0Ccacx2blqzbt7LwCShrS9+M+xeM+/nnMUTTMwgmllOvj0+BAIQfMXArFr2hTV9lz5aWnCVi+UVbnGcpGlzOSlKXVCNo3j0yOnjwwBQI9SwovUhWLsJKlYJINUpCQiA8Vy9JzNd+aqf6uQkiNDa1LB60cKl2xXJRQeJE/HNR44MHvzLW2+eg3hvAysk5E8fHRre+7u9xSmEbGvYQKBmAFBR1IWGAaEz7EB32IasyarV2QkB10tBSKGITJstpChb9QgDEI3HBV60auXabW2d2Vd373qt73s/GwMg9RHMjZvFjz24oGlh63ZPaRZQQG8Y0GnbsKL9fiQ+gldPSgIPTzPNkdMUXiVV0kgJeSLkrUHeAJFhm3BA6Jg/r3vdAxs+Unj0yrtD/UNTJldbFZePnxz2cVKAKkQEXjzEe6h36AraUYjH4cghpRQVRDSXRRxLglhSpOLJO2ecgtUrk6YZJy4ruMxXvW23K57pfqZjusa1krU99ugFCE6KmMWAByBQAFDAEAMKyFR1Z4cSCAqjFFtlH0iQEFgNG2EwPDwZGFLxlC9XFgEYnVWhgbchUSEaEjFarZZCVKEAnDjobf9ElNQbYgG4YsnGROQMpra6MBAAl6bPZ7KRczlRh32SOu+9wovUbKR8DRF5QHErEwBCQAJCagxFbDhiZgeQVAVX9fAal5Ly0MGhsbkJARibGHtPFSnqWl6hiNL4RgFvCiIoVFUFnsAlgFICPAQpgWv1JhDFqT+Zy+XS6TGmvDrCM3Ii05i/4trMEtcw2feJJmBleD9jfA2GjChBlCmFIlaSCERlECWGIQZGACAQw82lIDh5+v0PZoszRaHK2DGvzh+AKvS6QRWpOFSSSAnsCeQBeBCq10lTKByDUyZOCeQNU2qYHF8ncwMKpO/s23ehensTQgO5AQfSg6oqIgJRgVdBpBGKaUkCsSl7dlBNIXBQpFAkAGIAFQJFoQblkIKiMaakSCPVKAXU38hBIJW8O/ufY2NXbqkQAJwZfG83R3I+rADwClGBg0O5UpaAw2JAtmhNWLLGlqyxZQNbtjBly7Zg2RaYeJzAeasmHwZhbNg6ruswFaULZ89fG/jVr+PZCM04fgx855UzT/Yve6qho+mlxOhyCZREE5Sjgg9g82w4MexnRiKKiCDW2HzGhOMZbsgb0siy8QZ2khCEro5f/Tdo9i6ZeR4C9PfbfvLXx3/0+MbyvPlrw3mNGfEqpqHVZnrCL5qMuS8xbnIcVxcPKUXGkLDVcmioYi2VQubEwNbYc4ksKr54at/7p2cjMxchAMCeHXtKAA7U/cWP/G19633rVn/OmMQAADHXbXZwIPXMqbdsXQCKA1jHmPQxMZnKRPzB8KlTU3bn2yJ0HfWy+kN/PPxGT1NHpnFZT68hI1LtriohqZ4PiANtMRntsVkjUBDYQ1UJLCi7E28NHnqtv79/lprXJnaH6O213/3Wpxc0dXa0JEkCxM65wKtPXS1WCzLobG5SnxjbnLGBeCSRpIXBP+wb6evrm3szw60VmoFv925o//zGrduLLVg4YeN4dHjkzTO/3b/3B7lcvZoKADv37HpwzbINnx2x+W4ludj4dEt/X1/fyZvFNzd7OB25XI43bd381cb5LR1juBZdS8eliVuWNy3tGnnlpV2X63137t7ZvPLhh758Pj/ME1RwJalkexq7Pt6zbPHgP14fiObKcUcKTWCiledne47qOQsVgIDm8Ypti7AIwNF639Zs6yrN+I7KAhOBDQBINp+1H1u7YjGAif8JoXa0lzM+KC1EpjOPSCIkGmZC6m7uKaO6Hmtla822XuKyxgGJ81liWMCLR3H02pxkgNv+jqgil8slpujfWIIe6eRmzrDlhDB6YP87hzDtvTT498FLTXH2WEexgcOUfBMylFTiocKJKxduluPOu2wDgt0//POCpqWdq8fSYnTp/LHDO7bsKM3m2vvstuZnn/z6A2kXdxVd+dzFT7x7PEe52zh23h0+rM/we5iC/wLSCaqcVUOCJgAAAABJRU5ErkJggg==";
var moreImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAdHSURBVFiF7ZdJjFxHGcf/X9Wr97p7elZ71ngFkzg2CjhAWBQEhJNzQREyCgeELCHDBc5ckNsXTkhICAlwhOSDhSImIQICRjHLYAY7MkwWhxg7EzvGnoztGff09HTP6371qr6PQ78Zz54xyQnlk75eXi3fr76lqh7wvmws9B6Ol3c516oJNy0llNSdJz8z0D0wtDu2jsrT09WHB3a9MfPahC+NfMG/G7h7Bjp48PfRgf07j7ZH3YcjU+xm0hCAUavOOG68aoM7Z5yXP16beuPSjRtXk5GREmeAm4K8J6BDhw7pfduOlXL53u8GOgoCFUCgWpZSC4DBqskCcRA90Wy6V9JUn568fXH0tbfO3Xz8vK2UUOL3DOibh3+5b9fgIy/kgsH73nGoQAQaHiTWl+PEzo9L7dZvK7WJs1cqf33p1Kkf3QFoldeCzeOUVGdbz5NEGFwKw8KQFdEgEISFBB5EigLkijoMD1BX+0OF7g/ODwx96upHPnD5FxPVZ0+ePPnlm0vHqs3iHDyIYqHQ8UURKM8ei+ozdS1l5sU2Zg/v0wxRAzrSivIdger6aKHQ+f0d/Xt/9Z1v/eXDyxezjhw58jPz1S89uqV/S2+7yestU7fV3iv/LvzYgdu8EiinQH65p0CAIsB5IGkASarAouFcEwADnFtiwQFipZFOvHDp/M+fGD73wwawdsjoqad+3Xdg3yMfD3XYlzroG/+ZDeN68JigUCAQwK3CIaUgIiAiqMzZRAyjFAKj0K4JtkmoVADn1yg0IgLkobBv924AF9cEGh29VFRu8LHKnXyRSJNSCkp1Sb3eeJA9CFAIlkSaqOUlRlY80voHMNgBgSF0dgQoT6cQtbTAPACP1CXtItK/LpBBxwOJD4pQCqDMsEUuiTFEC9vJPWx7LIIwChAYhSRt5dPd1NXQiFJNuXih/zKgUqmkqrEZ0mygSS8mSFLDHknCDhj/P+/BURSgaRuAECBRBqZhKN+szs3OLvRbVmVHjx5FzqAATgEAoiCiILW67GzVctZRABGBMG9KnWcEppXgDA0WyZThPN+Kmub6mkDHj49poyXH3i8+E4FKrNwvIrTsABBpQW1CF8aIaAirJW3g1PnL2LbNLthbFrJ83oScGjLagFtV7BtN7rWp3dEqrk3GK+vG0BBRgBBEAPYMImptEWCAHGJXOzc8/JVFD6xKamYA0ItOqNeTAUCC7CxYrKq7rqKsr7R+3f3IulD2LWD2AAikCABDxCeV6sxoNkDWBFoqkYfmutnL/m2ttEbNhtBikFMhSJWhgzm4dAiQCNY3YAwjNAlsmgdR12rHSSvm4gBrUzQajfFEb//XktVtDOTBWgc8+PnHt0pnl6F/nG/iyiULZTw+/Wg/egf78Mo/gatvJghDwWc/14nebQovv5ji6uUl4RWCgMDM2V7YgnPOnRkeHnZLbW54lrkgNcVem486NBIGdu3Kw0QxilsaaNsawJLBwP0KLl9Fz3ag0BsiThmDu0M4SuHYZZUk8F5BWMCewcwQkZRhf4MV15ENPaTZ+LnplKduM4KAUJvxEGcQz4UolwUUOFTLCpQUMF9lzFYYzILyLQfJ7o2t20Br3SwMRQosAkitWp4Zf2mlzQ2BjCjnbVS7cLaKXJtGvZqCfB7JXBsunG0iKjrUy3motBPxzAxeHp1FGGnMVQTgCFi4mCyWvSBlB6UUSDXPXp/9w9w9AaUaKHbr5+euRw8069ImBEBUq1xjQdxAqyxJAB9hfg6YByArphVpAsLwrCAeaCbCzuVPjY0d9yttbphDTKD2HjXRO9D+E2Py45DQi2gIsQg0REIICYS49TtTiF4+kVgwLCAazBo2xtTbk7f/Dqw+iJYBeT/jg8iL983sAUAM6tiK8Z0fMj+9byg3nG/Dq5aadWZhxSY7m7CxqgjsF70mSRpfuDL+u2trAS27oImIenFk+mv1ei7U1L6sjQiU8whTsI5TLsxWZG9cpX1xbLennnsUkQJAAiFaee8jIGlaTE46eCfx5OS1bzz7508+vRbQyhySujOzyuT64FY0CKShkAAKYaTirQMYpSH8zVpl5ut2qHbb7qo33MOxd9vJmzDk0IAAIZDXCrV6ApE3k8TNPF3m555bC2YVEBHh9OnpKoA+ZoZS66cYZW8/UaScMbkbfUVzjZQ+02TXU6v6gbkKdnjP/dZKH2sb3EqmL87Pzz6j3rp1cmTsRLrevKs8xGyviE/3kADMoPWgiO/GRQHiAq0AgHRQ6dgSzHT24nVxrDynuthZmZq+OPb8D545nKznmQXRKx/s2dNR7+naqU2u2K8MAYrBPgbBQmsFIt5QU3HQygmUA2nPIFubvPP6n779vSdW7TmbAhoZGZEH92+9uW3n/iloJ6K8L+asMXlmiBOlU15PA5NyrkAe2sWpNGaF7PgNO3X264c+Ud0MDPDOb67UOqFBJ06MhFr3rFrASmk0UnvkyMf8sWPHUCpt/Nr8vvxfyH8Bh0ZXehV6KdQAAAAASUVORK5CYII=";
var robotImg = "/assets/robot.png";
var OrderSelector = () => {
  const [active, setActive] = react.exports.useState(true);
  const [open, setOpen] = react.exports.useState(false);
  const [tabIndex, setTabIndex] = react.exports.useState(0);
  return /* @__PURE__ */ React.createElement(Popup$1, {
    className: "OrdderSelector",
    active,
    onClose: () => {
      setActive(false);
    },
    title: "\u8BF7\u9009\u62E9\u60A8\u8981\u54A8\u8BE2\u7684\u8BA2\u5355",
    actions: [{ label: "\u6CA1\u6709\u5BF9\u5E94\u8BA2\u5355" }]
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Tabs$1, {
    index: tabIndex,
    onChange: setTabIndex
  }, /* @__PURE__ */ React.createElement(Tab, {
    label: "\u5DF2\u8D2D\u4E70"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Search$1, {
    placeholder: "\u8F93\u5165\u5B9D\u8D1D\u5173\u952E\u8BCD\u7B49",
    onSearch: (q2) => {
      console.log(q2);
    },
    onClear: () => {
      console.log("cancel");
    }
  }), /* @__PURE__ */ React.createElement(Card$1, {
    className: "OrderGroup"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "OrderGroup-header"
  }, /* @__PURE__ */ React.createElement("h3", null, "\u8010\u514B\u5B98\u65B9\u65D7\u8230\u5E97\u6700\u591A\u5B57\u6570\u2026"), /* @__PURE__ */ React.createElement("span", {
    className: "OrderGroup-status"
  }, "\u4EA4\u6613\u72B6\u6001")), /* @__PURE__ */ React.createElement("div", {
    className: "OrderGroup-list"
  }, /* @__PURE__ */ React.createElement(Goods$1, {
    type: "order",
    img: "//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png",
    name: "Air Joden2019\u9650\u5B9A\u5012\u52FE\u68D5\u8272\u9AD8\u5E2E\u7BEE\u7403\u978B\u6700\u591A\u5B57\u2026",
    desc: "\u989C\u8272\u5206\u7C7B\uFF1A\u68D5\u8272\uFF1B42\u7801",
    currency: "\xA5",
    price: 30000.04,
    count: 1,
    onClick: () => {
      setOpen(true);
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "OrderGroup-actions"
  }, /* @__PURE__ */ React.createElement(Button$1, {
    size: "sm"
  }, "\u8BA2\u5355\u8BE6\u60C5"), /* @__PURE__ */ React.createElement(Button$1, {
    color: "primary",
    size: "sm"
  }, "\u53D1\u9001"))))), /* @__PURE__ */ React.createElement(Tab, {
    label: "\u8D2D\u7269\u8F66"
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB92")), /* @__PURE__ */ React.createElement(Tab, {
    label: "\u6536\u85CF\u5939"
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB93")), /* @__PURE__ */ React.createElement(Tab, {
    label: "\u8DB3\u8FF9"
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB93"))), /* @__PURE__ */ React.createElement(Confirm$1, {
    active: open,
    title: "\u786E\u8BA4\u8981\u53D1\u9001\u5417\uFF1F",
    onClose: () => {
      setOpen(false);
    },
    actions: [
      {
        label: "\u786E\u8BA4",
        color: "primary"
      },
      {
        label: "\u53D6\u6D88"
      }
    ]
  }, /* @__PURE__ */ React.createElement("div", null, "Content 1"))));
};
const skillArr = [
  {
    title: "\u767B\u5F55\u95EE\u9898",
    src: loginImg
  },
  {
    title: "\u529F\u80FD\u95EE\u9898",
    src: functionImg
  },
  {
    title: "\u95EE\u9898\u5206\u7C7B",
    src: questionImg
  },
  {
    title: "\u66F4\u591A\u95EE\u9898",
    src: moreImg
  }
];
const initialMessages = [
  {
    type: "help",
    content: { text: "88VIP\u4E13\u5C5E\u667A\u80FD\u5BA2\u670D\u5C0F\u871C \u4E3A\u60A8\u670D\u52A1" }
  },
  {
    type: "skill-cards"
  },
  {
    type: "guess-you",
    user: {
      avatar: chatAvatar
    },
    createdAt: Date.now(),
    hasTime: true
  },
  {
    type: "text",
    content: { text: "\u5C0F\u871C\u6211\u8981\u67E5\u770B\u6211\u7684\u7269\u6D41\u4FE1\u606F" },
    position: "right",
    user: {
      avatar: meAvatar
    }
  },
  {
    type: "system",
    content: {
      text: "\u7531\u4E8E\u60A8\u957F\u65F6\u95F4\u672A\u8BF4\u8BDD\u6216\u9000\u51FA\u5C0F\u871C\uFF08\u79BB\u5F00\u9875\u9762\u3001\u9501\u5C4F\u7B49\uFF09\u5DF2\u81EA\u52A8\u7ED3\u675F\u672C\u6B21\u670D\u52A1"
    }
  }
];
const defaultQuickReplies = [
  {
    icon: "keyboard-circle",
    name: "\u670D\u52A1\u8BC4\u4EF7",
    code: "evaluation",
    isHighlight: true
  }
];
const toolbar = [
  {
    type: "smile",
    icon: "smile",
    title: "\u8868\u60C5"
  },
  {
    type: "orderSelector",
    icon: "shopping-bag",
    title: "\u5B9D\u8D1D"
  },
  {
    type: "image",
    icon: "image",
    title: "\u56FE\u7247"
  },
  {
    type: "camera",
    icon: "camera",
    title: "\u62CD\u7167"
  },
  {
    type: "photo",
    title: "Photo",
    img: "https://gw.alicdn.com/tfs/TB1eDjNj.T1gK0jSZFrXXcNCXXa-80-80.png"
  }
];
var Chat = () => {
  const { messages, appendMsg, setTyping, prependMsgs } = useMessages(initialMessages);
  const { quickReplies, replace } = useQuickReplies(defaultQuickReplies);
  const msgRef = React.useRef(null);
  const navigate = useNavigate();
  window.appendMsg = appendMsg;
  window.msgRef = msgRef;
  function handleSend(type, val) {
    if (type === "text" && val.trim()) {
      appendMsg({
        type: "text",
        content: { text: val },
        position: "right"
      });
      setTimeout(() => {
        setTyping(true);
      }, 10);
      setTimeout(() => {
        appendMsg({
          type: "text",
          content: { text: "\u6682\u65F6\u65E0\u6CD5\u89E3\u7B54\uFF0C\u60A8\u53EF\u4EE5\u53CD\u9988\u95EE\u9898\uFF0C\u5F00\u53D1\u4F1A\u53CA\u65F6\u5E2E\u60A8\u89E3\u51B3" }
        });
      }, 1e3);
    }
  }
  function handleQuickReplyClick(item) {
    handleSend("text", item.name);
    if (item.code === "q1") {
      replace([
        {
          name: "\u77ED\u8BEDa",
          code: "qa",
          isHighlight: true
        },
        {
          name: "\u77ED\u8BEDb",
          code: "qb"
        }
      ]);
    } else if (item.code === "orderSelector") {
      appendMsg({
        type: "order-selector",
        content: {}
      });
    }
  }
  function handleRefresh() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const now2 = Date.now();
        prependMsgs([
          {
            _id: now2 + "1111",
            type: "text",
            content: {
              text: "11111Hi\uFF0C\u6211\u662F\u4F60\u7684\u4E13\u5C5E\u667A\u80FD\u52A9\u7406\u5C0F\u871C\uFF0C\u6709\u95EE\u9898\u8BF7\u968F\u65F6\u627E\u6211\u54E6~"
            },
            user: {
              avatar: "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg"
            }
          },
          {
            _id: now2 + "2222",
            type: "text",
            content: {
              text: "22222 Hi\uFF0C\u6211\u662F\u4F60\u7684\u4E13\u5C5E\u667A\u80FD\u52A9\u7406\u5C0F\u871C\uFF0C\u6709\u95EE\u9898\u8BF7\u968F\u65F6\u627E\u6211\u54E6~"
            },
            user: {
              avatar: "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg"
            }
          },
          {
            _id: now2 + "3333",
            type: "text",
            content: {
              text: "333 Hi\uFF0C\u6211\u662F\u4F60\u7684\u4E13\u5C5E\u667A\u80FD\u52A9\u7406\u5C0F\u871C\uFF0C\u6709\u95EE\u9898\u8BF7\u968F\u65F6\u627E\u6211\u54E6~"
            },
            user: {
              avatar: "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg"
            }
          },
          {
            _id: now2 + "4444",
            type: "text",
            content: {
              text: "444 Hi\uFF0C\u6211\u662F\u4F60\u7684\u4E13\u5C5E\u667A\u80FD\u52A9\u7406\u5C0F\u871C\uFF0C\u6709\u95EE\u9898\u8BF7\u968F\u65F6\u627E\u6211\u54E6~"
            },
            user: {
              avatar: "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg"
            }
          },
          {
            _id: now2 + "5555",
            type: "text",
            content: {
              text: "555 Hi\uFF0C\u6211\u662F\u4F60\u7684\u4E13\u5C5E\u667A\u80FD\u52A9\u7406\u5C0F\u871C\uFF0C\u6709\u95EE\u9898\u8BF7\u968F\u65F6\u627E\u6211\u54E6~"
            },
            user: {
              avatar: "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg"
            }
          },
          {
            _id: now2 + "6666",
            type: "text",
            content: {
              text: "666 Hi\uFF0C\u6211\u662F\u4F60\u7684\u4E13\u5C5E\u667A\u80FD\u52A9\u7406\u5C0F\u871C\uFF0C\u6709\u95EE\u9898\u8BF7\u968F\u65F6\u627E\u6211\u54E6~"
            },
            user: {
              avatar: "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg"
            }
          },
          {
            _id: now2 + "7777",
            type: "text",
            content: {
              text: "777 Hi\uFF0C\u6211\u662F\u4F60\u7684\u4E13\u5C5E\u667A\u80FD\u52A9\u7406\u5C0F\u871C\uFF0C\u6709\u95EE\u9898\u8BF7\u968F\u65F6\u627E\u6211\u54E6~"
            },
            user: {
              avatar: "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg"
            }
          }
        ]);
        resolve({});
      }, 800);
    });
  }
  function handleToolbarClick(item) {
    if (item.type === "orderSelector") {
      appendMsg({
        type: "order-selector",
        content: {}
      });
    }
  }
  function renderMessageContent(msg) {
    const { type, content } = msg;
    switch (type) {
      case "help":
        return /* @__PURE__ */ React.createElement("div", {
          style: {
            display: "flex",
            width: "100%",
            alignContent: "center",
            justifyContent: "space-between"
          }
        }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
          style: {
            fontSize: 16
          }
        }, "\u60A8\u597D\uFF0C\u8BF7\u95EE\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u52A9\u60A8\uFF1F"), /* @__PURE__ */ React.createElement("span", {
          style: {
            fontSize: 14,
            color: "#777"
          }
        }, "\u667A\u80FD\u5C0F\u6B4C\u4E3A\u60A8")), /* @__PURE__ */ React.createElement(Image$1, {
          src: robotImg
        }));
      case "text":
        return /* @__PURE__ */ React.createElement(Bubble$1, {
          content: content.text
        });
      case "guess-you":
        return /* @__PURE__ */ React.createElement(Card$1, {
          fluid: true
        }, /* @__PURE__ */ React.createElement(Flex$1, null, /* @__PURE__ */ React.createElement("div", {
          className: "guess-you-aside"
        }, /* @__PURE__ */ React.createElement("h1", null, "\u731C\u4F60\u60F3\u95EE"), /* @__PURE__ */ React.createElement(Image$1, {
          className: "guess-you-aside-img",
          src: guessImg,
          alt: "\u56FE\u7247\u540D"
        })), /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement(List$1, null, /* @__PURE__ */ React.createElement(ListItem, {
          content: "\u767B\u5F55\u9047\u5230\u95EE\u9898",
          as: "a",
          rightIcon: "chevron-right"
        }), /* @__PURE__ */ React.createElement(ListItem, {
          content: "\u767B\u5F55\u9047\u5230\u95EE\u9898",
          as: "a",
          rightIcon: "chevron-right"
        }), /* @__PURE__ */ React.createElement(ListItem, {
          content: "\u767B\u5F55\u9047\u5230\u95EE\u9898",
          as: "a",
          rightIcon: "chevron-right"
        }), /* @__PURE__ */ React.createElement(ListItem, {
          content: "\u6211\u9047\u5230\u4E86\u5176\u4ED6\u95EE\u9898",
          as: "a",
          rightIcon: "chevron-right"
        }), /* @__PURE__ */ React.createElement(ListItem, {
          content: "\u6211\u9047\u5230\u4E86\u5176\u4ED6\u95EE\u9898",
          as: "a",
          rightIcon: "chevron-right"
        })))));
      case "skill-cards":
        return /* @__PURE__ */ React.createElement(Card$1, {
          className: "skill-chat-cards"
        }, skillArr.map((val) => {
          return /* @__PURE__ */ React.createElement("div", {
            className: "skill-chat-card"
          }, /* @__PURE__ */ React.createElement(CardMedia, {
            className: "card-media",
            image: val.src
          }), /* @__PURE__ */ React.createElement(CardTitle, null, val.title));
        }));
      case "order-selector":
        return /* @__PURE__ */ React.createElement(OrderSelector, null);
      case "image":
        return /* @__PURE__ */ React.createElement(Bubble$1, {
          type: "image"
        }, /* @__PURE__ */ React.createElement("img", {
          src: content.picUrl,
          alt: ""
        }));
      default:
        return null;
    }
  }
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement("div", {
    style: { height: "calc(100vh - 48px)" }
  }, /* @__PURE__ */ React.createElement(Chat$1, {
    onRefresh: handleRefresh,
    navbar: {
      leftContent: {
        icon: "chevron-left",
        title: "Back"
      },
      rightContent: [
        {
          icon: "apps",
          title: "Applications"
        },
        {
          icon: "ellipsis-h",
          title: "More"
        }
      ],
      title: "\u667A\u80FD\u5BA2\u670D"
    },
    rightAction: {
      icon: "compass",
      onClick: (e) => {
        navigate("/suggestion");
      }
    },
    toolbar,
    messagesRef: msgRef,
    onToolbarClick: handleToolbarClick,
    recorder: { canRecord: true },
    wideBreakpoint: "600px",
    messages,
    renderMessageContent,
    quickReplies,
    onQuickReplyClick: handleQuickReplyClick,
    onSend: handleSend,
    onImageSend: () => Promise.resolve()
  })));
};
const Suggestion = () => {
  return /* @__PURE__ */ React.createElement("div", null, "Suggestion");
};
const options$1 = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear", disabled: true },
  { label: "Orange", value: "Orange" },
  { label: "Banana", value: "Banana" }
];
var Checkbox = () => {
  const [value1, setValue] = react.exports.useState(["Apple"]);
  const [value2, setValue2] = react.exports.useState([]);
  const [checked, setChecked] = react.exports.useState(false);
  function handleChange(val) {
    setValue(val);
  }
  function handleChange2(val) {
    setValue2(val);
  }
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5",
    bg: "gray"
  }, /* @__PURE__ */ React.createElement(Checkbox$1, {
    value: "abc",
    label: "ABC",
    checked,
    onChange: () => setChecked(!checked)
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u7981\u7528\u72B6\u6001",
    bg: "gray"
  }, /* @__PURE__ */ React.createElement(Checkbox$1, {
    value: "abc",
    label: "ABC",
    disabled: true
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u590D\u9009\u6846\u7EC4",
    bg: "gray"
  }, /* @__PURE__ */ React.createElement(CheckboxGroup, {
    value: value1,
    options: options$1,
    onChange: handleChange
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u5757\u7EA7\u663E\u793A",
    bg: "gray"
  }, /* @__PURE__ */ React.createElement(CheckboxGroup, {
    value: value2,
    options: options$1,
    onChange: handleChange2,
    block: true
  })));
};
const { ComponentsProvider, LazyComponent, useComponents } = ChatUI;
window.React = React;
window.ChatUI = ChatUI;
const ctx = {
  ui: {
    scrollToEnd: () => {
    }
  },
  log: {
    expo: () => {
    }
  }
};
const components = {
  slot: {
    name: "AlimeComponentSlot",
    url: "//g.alicdn.com/alime-components/slot/0.1.3/index.js"
  },
  "error-url": {
    name: "AlimeComponentPromptAccess",
    url: "//g.alicdn.com/alime-components/slot/0.1.3/no-index.js"
  },
  "local-component": {
    component: ({ data }) => /* @__PURE__ */ React.createElement("p", null, "local component: ", data)
  },
  "my-decorator": {
    component: (props) => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "`my-decorator`"), /* @__PURE__ */ React.createElement("p", null, "props:"), /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(props, null, 4)))
  },
  "test-decorator": {
    decorator: "my-decorator",
    data: {
      jsonUrl: "this is a url",
      d1: "d1",
      d2: "d2"
    }
  },
  "test-async-decorator": {
    decorator: "slot",
    data: {
      jsonUrl: "this is a url",
      d1: "d1",
      d2: "d2"
    }
  }
};
function TestLocalComponent() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Example:"), /* @__PURE__ */ React.createElement(LazyComponent, {
    code: "local-component",
    data: "11",
    onLoad: (a) => console.log("onLoad:", a)
  }));
}
function LazySlot() {
  const data = { list: [{ title: "item-1" }, { title: "item-2" }] };
  return /* @__PURE__ */ React.createElement(LazyComponent, {
    code: "slot",
    data,
    meta: {},
    ctx,
    onLoad: (r2) => console.log("slot - onLoad:", r2)
  });
}
function LazyRecommend() {
  const data = {
    recommends: [
      {
        knowledgeId: "q1",
        title: "Question 1"
      },
      {
        knowledgeId: "q2",
        title: "Question 2"
      },
      {
        knowledgeId: "q3",
        title: "Question 3"
      }
    ]
  };
  return /* @__PURE__ */ React.createElement(LazyComponent, {
    code: "recommend",
    data,
    meta: {},
    ctx,
    onLoad: (r2) => console.log("recommend - onLoad:", r2),
    onError: (e) => console.log("recommend - onError:", e)
  });
}
function TestNotFoundCode() {
  const [errMsg, setErrMsg] = React.useState("");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Example:"), /* @__PURE__ */ React.createElement(LazyComponent, {
    code: "no-code",
    onError: (err) => {
      setErrMsg(err.message);
    }
  }), errMsg && /* @__PURE__ */ React.createElement("pre", null, "Error message: ", errMsg));
}
function TestComponentHasError() {
  const [errMsg, setErrMsg] = React.useState("");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Example:"), /* @__PURE__ */ React.createElement(LazyComponent, {
    code: "slot",
    onError: (err, errInfo) => {
      setErrMsg(err.message);
      console.log(222, err, errInfo);
    }
  }), errMsg && /* @__PURE__ */ React.createElement("pre", null, "Error message: ", errMsg));
}
function TestErrorUrl() {
  const [errMsg, setErrMsg] = React.useState("");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Example:"), /* @__PURE__ */ React.createElement(LazyComponent, {
    code: "error-url",
    onError: (err) => {
      setErrMsg(err.message);
      console.log(222, err.message);
    }
  }), errMsg && /* @__PURE__ */ React.createElement("pre", null, "Error message: ", errMsg));
}
function TestDecorator() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Example:"), /* @__PURE__ */ React.createElement(LazyComponent, {
    code: "test-decorator",
    data1: "foo",
    data2: "bar",
    onLoad: (r2) => {
      console.log("decorator onLoad", r2);
    }
  }));
}
function TestAsyncDecorator() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Example:"), /* @__PURE__ */ React.createElement(LazyComponent, {
    code: "test-async-decorator",
    data: { list: [{ title: "item-1" }, { title: "item-2" }] },
    meta: {},
    ctx,
    onLoad: (r2) => {
      console.log("async decorator onLoad", r2);
    }
  }));
}
function useForceUpdate() {
  const [, forceUpdate] = React.useState(false);
  return React.useCallback(() => {
    forceUpdate((s) => !s);
  }, []);
}
function TestAddComponent() {
  const { addComponent: addComponent2, hasComponent: hasComponent2 } = useComponents();
  const forceUpdate = useForceUpdate();
  function addRecommend() {
    if (!hasComponent2("recommend")) {
      addComponent2("recommend", {
        name: "AlimeComponentRecommend",
        url: "//g.alicdn.com/alime-components/recommend/0.1.0/index.js"
      });
    }
  }
  const onClick = React.useCallback(() => {
    forceUpdate();
  }, [forceUpdate]);
  function handleImgLoad(e) {
    console.log("img load", e);
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    onLoad: handleImgLoad,
    src: "11",
    alt: ""
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick
  }, "update inner"), /* @__PURE__ */ React.createElement("button", {
    onClick: addRecommend
  }, "add recommend"), /* @__PURE__ */ React.createElement(LazyRecommend, null));
}
function AddComponent() {
  const forceUpdate = useForceUpdate();
  const renderCount = React.useRef(0);
  React.useEffect(() => {
    renderCount.current += 1;
  });
  const onClick = React.useCallback(() => {
    forceUpdate();
  }, [forceUpdate]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick
  }, "update"), /* @__PURE__ */ React.createElement("div", null, "Render count: ", renderCount.current), /* @__PURE__ */ React.createElement(ComponentsProvider, {
    components
  }, /* @__PURE__ */ React.createElement(TestAddComponent, null)), /* @__PURE__ */ React.createElement(ComponentsProvider, {
    components
  }, /* @__PURE__ */ React.createElement(LazySlot, null)));
}
const MutableComponents = () => {
  const [myComponents, setMyMyComponents] = React.useState({});
  const forceUpdate = useForceUpdate();
  function addSlot() {
    setMyMyComponents({
      ...myComponents,
      slot: {
        name: "AlimeComponentSlot",
        url: "//g.alicdn.com/alime-components/slot/0.1.3/index.js"
      }
    });
  }
  function addRecommend() {
    setMyMyComponents({
      ...myComponents,
      recommend: {
        name: "AlimeComponentRecommend",
        url: "//g.alicdn.com/alime-components/recommend/0.1.0/index.js"
      }
    });
  }
  const onClick = React.useCallback(() => {
    forceUpdate();
  }, [forceUpdate]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick
  }, "update"), /* @__PURE__ */ React.createElement("button", {
    onClick: addSlot
  }, "add slot"), /* @__PURE__ */ React.createElement("button", {
    onClick: addRecommend
  }, "add recommend"), /* @__PURE__ */ React.createElement(ComponentsProvider, {
    components: myComponents
  }, /* @__PURE__ */ React.createElement(LazySlot, null), /* @__PURE__ */ React.createElement(LazyRecommend, null)));
};
var ComponentProvider = () => {
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u672C\u5730\u52A0\u8F7D"
  }, /* @__PURE__ */ React.createElement(ComponentsProvider, {
    components
  }, /* @__PURE__ */ React.createElement(TestLocalComponent, null))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u5F02\u6B65\u52A0\u8F7D slot"
  }, /* @__PURE__ */ React.createElement(ComponentsProvider, {
    components
  }, /* @__PURE__ */ React.createElement(LazySlot, null))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u627E\u4E0D\u5230 code"
  }, /* @__PURE__ */ React.createElement(ComponentsProvider, {
    components
  }, /* @__PURE__ */ React.createElement(TestNotFoundCode, null))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u7EC4\u4EF6\u62A5\u9519"
  }, /* @__PURE__ */ React.createElement(ComponentsProvider, {
    components
  }, /* @__PURE__ */ React.createElement(TestComponentHasError, null))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "URL \u6709\u8BEF"
  }, /* @__PURE__ */ React.createElement(ComponentsProvider, {
    components
  }, /* @__PURE__ */ React.createElement(TestErrorUrl, null))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "Decorator"
  }, /* @__PURE__ */ React.createElement(ComponentsProvider, {
    components
  }, /* @__PURE__ */ React.createElement(TestDecorator, null))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u5F02\u6B65 Decorator"
  }, /* @__PURE__ */ React.createElement(ComponentsProvider, {
    components
  }, /* @__PURE__ */ React.createElement(TestAsyncDecorator, null))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "AddComponent"
  }, /* @__PURE__ */ React.createElement(ComponentsProvider, {
    components
  }, /* @__PURE__ */ React.createElement(AddComponent, null))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "MutableComponents"
  }, /* @__PURE__ */ React.createElement(ComponentsProvider, {
    components
  }, /* @__PURE__ */ React.createElement(MutableComponents, null))));
};
var Confirm = () => {
  const [open1, setOpen1] = react.exports.useState(false);
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /* @__PURE__ */ React.createElement(Card$1, null, /* @__PURE__ */ React.createElement(List$1, null, /* @__PURE__ */ React.createElement(ListItem, {
    content: "\u5C55\u793A\u5F39\u51FA\u5C42",
    as: "button",
    onClick: () => {
      setOpen1(true);
    },
    rightIcon: "chevron-right"
  })))), /* @__PURE__ */ React.createElement(Confirm$1, {
    active: open1,
    title: "\u6807\u9898",
    onClose: () => {
      setOpen1(false);
    },
    actions: [
      {
        label: "\u786E\u8BA4",
        color: "primary"
      }
    ]
  }, /* @__PURE__ */ React.createElement("div", null, "\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5")));
};
var Divider = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(Divider$1, null)), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5C55\u793A\u6587\u5B57"
}, /* @__PURE__ */ React.createElement(Divider$1, null, "\u6587\u672C")), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5185\u5BB9\u4F4D\u7F6E"
}, /* @__PURE__ */ React.createElement(Divider$1, null, "\u6587\u672C"), /* @__PURE__ */ React.createElement(Divider$1, {
  position: "left"
}, "\u5DE6\u6587\u672C"), /* @__PURE__ */ React.createElement(Divider$1, {
  position: "right"
}, "\u53F3\u6587\u672C")));
var Empty = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(Empty$1, {
  tip: "\u6682\u65E0\u6570\u636E"
})), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5B9A\u5236\u5185\u5BB9"
}, /* @__PURE__ */ React.createElement(Empty$1, {
  type: "error",
  tip: "oops..\u52A0\u8F7D\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u8BD5"
}, /* @__PURE__ */ React.createElement(Button$1, {
  color: "primary"
}, "\u5237\u65B0"))));
function BuggyCounter() {
  const [counter, setCounter] = react.exports.useState(0);
  function handleClick() {
    setCounter((s) => s + 1);
  }
  if (counter === 5) {
    throw new Error("I crashed!");
  }
  return /* @__PURE__ */ React.createElement("button", {
    onClick: handleClick,
    type: "button"
  }, counter);
}
function ErrorFallback({ error, errorInfo }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Something went wrong."), /* @__PURE__ */ React.createElement("details", {
    style: { whiteSpace: "pre-wrap" }
  }, error && error.toString(), /* @__PURE__ */ React.createElement("br", null), errorInfo.componentStack));
}
var ErrorBoundary = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(ErrorBoundary$1, null, /* @__PURE__ */ React.createElement(BuggyCounter, null))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "FallbackComponent"
}, /* @__PURE__ */ React.createElement(ErrorBoundary$1, {
  FallbackComponent: ErrorFallback
}, /* @__PURE__ */ React.createElement("p", null, "These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them."), /* @__PURE__ */ React.createElement(BuggyCounter, null), /* @__PURE__ */ React.createElement(BuggyCounter, null))));
const file = new File(["foo"], "foo.txt", {
  type: "text/plain"
});
var FileCard = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(FileCard$1, {
  file
})), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u6307\u5B9A\u62D3\u5C55\u540D"
}, /* @__PURE__ */ React.createElement(FileCard$1, {
  file,
  extension: "pdf"
})), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u989D\u5916\u5185\u5BB9"
}, /* @__PURE__ */ React.createElement(FileCard$1, {
  file
}, /* @__PURE__ */ React.createElement("a", {
  href: "https://chatui.io/"
}, "\u4E0B\u8F7D"))));
function FluidLayout({ n: n2 }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h5", null, `${n2}\u4E2A`), /* @__PURE__ */ React.createElement(Flex$1, {
    wrap: "wrap",
    style: {
      width: "200px",
      height: "150px",
      background: "black",
      alignContent: "flex-start"
    }
  }, Array.from(Array(n2)).map((t2, i) => /* @__PURE__ */ React.createElement(FlexItem, {
    flex: "0 0 25%",
    style: {
      boxSizing: "border-box",
      height: "50px",
      border: "1px solid red",
      background: "white"
    },
    key: i
  }))));
}
var Flex = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u672C\u7F51\u683C\u5E03\u5C40"
}, /* @__PURE__ */ React.createElement(Flex$1, null, /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement("p", null, "1/2")), /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement("p", null, "1/2"))), /* @__PURE__ */ React.createElement(Flex$1, null, /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement("p", null, "1/3")), /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement("p", null, "1/3")), /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement("p", null, "1/3"))), /* @__PURE__ */ React.createElement(Flex$1, null, /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement("p", null, "1/4")), /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement("p", null, "1/4")), /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement("p", null, "1/4")), /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement("p", null, "1/4")))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u767E\u5206\u6BD4\u5E03\u5C40"
}, /* @__PURE__ */ React.createElement(Flex$1, null, /* @__PURE__ */ React.createElement(FlexItem, {
  flex: "0 0 50%"
}, /* @__PURE__ */ React.createElement("p", null, "1/2")), /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement("p", null, "auto")), /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement("p", null, "auto"))), /* @__PURE__ */ React.createElement(Flex$1, null, /* @__PURE__ */ React.createElement(FlexItem, {
  flex: "0 0 25%"
}, /* @__PURE__ */ React.createElement("p", null, "1/4")), /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement("p", null, "auto")), /* @__PURE__ */ React.createElement(FlexItem, {
  flex: "0 0 33.3333%"
}, /* @__PURE__ */ React.createElement("p", null, "1/3"))), /* @__PURE__ */ React.createElement(Flex$1, null, /* @__PURE__ */ React.createElement(FlexItem, {
  flex: "0 0 25%"
}, /* @__PURE__ */ React.createElement("p", null, "1/4")), /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement("p", null, "auto")), /* @__PURE__ */ React.createElement(FlexItem, {
  flex: "0 0 33.3333%"
}, /* @__PURE__ */ React.createElement("p", null, "1/3")))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5723\u676F\u5E03\u5C40"
}, /* @__PURE__ */ React.createElement(Flex$1, {
  direction: "column"
}, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("p", null, "Header")), /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement(Flex$1, null, /* @__PURE__ */ React.createElement(FlexItem, {
  flex: "1"
}, /* @__PURE__ */ React.createElement("p", null, "Center")), /* @__PURE__ */ React.createElement(FlexItem, {
  flex: "0 0 150px",
  order: -1
}, /* @__PURE__ */ React.createElement("p", null, "Left")), /* @__PURE__ */ React.createElement(FlexItem, {
  flex: "0 0 150px"
}, /* @__PURE__ */ React.createElement("p", null, "Right")))), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("p", null, "Footer")))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "Media object"
}, /* @__PURE__ */ React.createElement(Flex$1, null, /* @__PURE__ */ React.createElement("svg", {
  width: "100",
  height: "100",
  xmlns: "http://www.w3.org/2000/svg",
  style: { textAnchor: "middle" }
}, /* @__PURE__ */ React.createElement("rect", {
  width: "100%",
  height: "100%",
  fill: "#e5e5e5"
}), /* @__PURE__ */ React.createElement("text", {
  x: "50%",
  y: "50%",
  fill: "#999",
  dy: ".3em"
}, "Image")), /* @__PURE__ */ React.createElement(FlexItem, null, /* @__PURE__ */ React.createElement("div", {
  style: { marginLeft: "1rem" }
}, "This is some content from a media component. You can replace this with any content and adjust it as needed.")))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u6D41\u5F0F\u5E03\u5C40"
}, /* @__PURE__ */ React.createElement(FluidLayout, {
  n: 8
}), /* @__PURE__ */ React.createElement(FluidLayout, {
  n: 9
}), /* @__PURE__ */ React.createElement(FluidLayout, {
  n: 10
})));
var Form = () => {
  const [usename, setUsername] = react.exports.useState("");
  const [theme, setTheme] = react.exports.useState("");
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /* @__PURE__ */ React.createElement(Form$1, {
    theme
  }, /* @__PURE__ */ React.createElement(FormItem, null, /* @__PURE__ */ React.createElement(Input$1, {
    value: usename,
    placeholder: "\u7528\u6237\u540D",
    onChange: setUsername,
    maxLength: 6
  })), /* @__PURE__ */ React.createElement(FormItem, null, /* @__PURE__ */ React.createElement(Input$1, {
    value: "",
    placeholder: "\u5BC6\u7801"
  })), /* @__PURE__ */ React.createElement(FormActions, null, /* @__PURE__ */ React.createElement(Button$1, {
    color: "primary"
  }, "\u786E\u8BA4")))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u663E\u793A\u6807\u7B7E"
  }, /* @__PURE__ */ React.createElement(Form$1, {
    theme
  }, /* @__PURE__ */ React.createElement(FormItem, {
    label: "\u9009\u62E9\u4E3B\u9898\u98CE\u683C"
  }, /* @__PURE__ */ React.createElement(RadioGroup, {
    options: [{ value: "", label: "default" }, { value: "light" }],
    value: theme,
    onChange: (val) => {
      setTheme(val);
    }
  })), /* @__PURE__ */ React.createElement(FormItem, {
    label: "\u7528\u6237\u540D"
  }, /* @__PURE__ */ React.createElement(Input$1, {
    value: "",
    placeholder: "\u7528\u6237\u540D"
  })), /* @__PURE__ */ React.createElement(FormItem, {
    label: "\u5BC6\u7801"
  }, /* @__PURE__ */ React.createElement(Input$1, {
    value: "",
    placeholder: "\u5BC6\u7801"
  })))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u63D0\u793A\u6587\u6848"
  }, /* @__PURE__ */ React.createElement(Form$1, {
    theme
  }, /* @__PURE__ */ React.createElement(FormItem, {
    label: "\u7528\u6237\u540D",
    help: "\u6700\u591A6\u4E2A\u5B57"
  }, /* @__PURE__ */ React.createElement(Input$1, {
    value: "",
    placeholder: "\u7528\u6237\u540D"
  })), /* @__PURE__ */ React.createElement(FormItem, {
    label: "\u5BC6\u7801"
  }, /* @__PURE__ */ React.createElement(Input$1, {
    value: "",
    placeholder: "\u5BC6\u7801"
  })))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u9519\u8BEF\u63D0\u793A"
  }, /* @__PURE__ */ React.createElement(Form$1, {
    theme
  }, /* @__PURE__ */ React.createElement(FormItem, {
    label: "\u7528\u6237\u540D",
    help: "\u6700\u591A6\u4E2A\u5B57",
    invalid: true
  }, /* @__PURE__ */ React.createElement(Input$1, {
    value: "",
    placeholder: "\u7528\u6237\u540D"
  })), /* @__PURE__ */ React.createElement(FormItem, {
    label: "\u5BC6\u7801"
  }, /* @__PURE__ */ React.createElement(Input$1, {
    value: "",
    placeholder: "\u5BC6\u7801"
  })))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u663E\u793A\u5FC5\u586B"
  }, /* @__PURE__ */ React.createElement(Form$1, {
    theme
  }, /* @__PURE__ */ React.createElement(FormItem, {
    label: "\u7528\u6237\u540D",
    required: true
  }, /* @__PURE__ */ React.createElement(Input$1, {
    value: "",
    placeholder: "\u7528\u6237\u540D"
  })), /* @__PURE__ */ React.createElement(FormItem, {
    label: "\u5BC6\u7801",
    required: true
  }, /* @__PURE__ */ React.createElement(Input$1, {
    value: "",
    placeholder: "\u5BC6\u7801"
  })))));
};
var Goods = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(Card$1, {
  size: "xl"
}, /* @__PURE__ */ React.createElement(Goods$1, {
  img: "//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png",
  name: "\u8FD9\u4E2A\u5546\u54C1\u540D\u79F0\u975E\u5E38\u975E\u5E38\u957F\u957F\u5230\u4F1A\u6362\u884C",
  desc: "\u5546\u54C1\u63CF\u8FF0",
  tags: [
    { name: "3\u4E2A\u6708\u514D\u606F" },
    { name: "4.1\u6298" },
    { name: "\u9ED1\u5361\u518D\u770133.96" }
  ],
  currency: "\xA5",
  price: 849,
  originalPrice: 1999,
  meta: "7\u4EBA\u4ED8\u6B3E",
  count: 6,
  unit: "kg",
  action: {
    onClick(e) {
      console.log(e);
      e.stopPropagation();
    }
  }
}))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u8BA2\u5355"
}, /* @__PURE__ */ React.createElement(Card$1, {
  size: "xl"
}, /* @__PURE__ */ React.createElement(Goods$1, {
  type: "order",
  img: "//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png",
  name: "Air Joden2019\u9650\u5B9A\u5012\u52FE\u68D5\u8272\u9AD8\u5E2E\u7BEE\u7403\u978B\u6700\u591A\u5B57\u2026",
  desc: "\u989C\u8272\u5206\u7C7B\uFF1A\u68D5\u8272\uFF1B42\u7801",
  currency: "\xA5",
  price: 30000.04,
  status: "\u4EA4\u6613\u5173\u95ED",
  count: 1
}))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u6E32\u67D3 children"
}, /* @__PURE__ */ React.createElement(Card$1, {
  size: "xl"
}, /* @__PURE__ */ React.createElement(Goods$1, {
  type: "order",
  img: "//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png",
  name: "Air Joden2019\u9650\u5B9A\u5012\u52FE\u68D5\u8272\u9AD8\u5E2E\u7BEE\u7403\u978B\u6700\u591A\u5B57\u2026",
  desc: "\u989C\u8272\u5206\u7C7B\uFF1A\u68D5\u8272\uFF1B42\u7801",
  currency: "\xA5",
  price: 30000.04,
  status: "\u4EA4\u6613\u5173\u95ED",
  count: 1,
  onClick: () => {
    console.log(111);
  }
}, /* @__PURE__ */ React.createElement("div", null, "children content")))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u8BA2\u5355\u5217\u8868"
}, /* @__PURE__ */ React.createElement(Card$1, {
  size: "xl"
}, /* @__PURE__ */ React.createElement(Goods$1, {
  type: "order",
  img: "//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png",
  name: "\u5546\u54C1\u540D\u79F0",
  desc: "\u5546\u54C1\u63CF\u8FF0",
  tags: [{ name: "3\u4E2A\u6708\u514D\u606F" }, { name: "4.1\u6298" }],
  currency: "\xA5",
  price: 300,
  count: 8,
  unit: "kg",
  status: "\u4EA4\u6613\u5173\u95ED",
  action: {
    label: "\u8BE6\u60C5",
    onClick(e) {
      console.log(e);
      e.stopPropagation();
    }
  }
}), /* @__PURE__ */ React.createElement(Goods$1, {
  type: "order",
  img: "//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png",
  name: "\u8FD9\u4E2A\u5546\u54C1\u540D\u79F0\u975E\u5E38\u975E\u5E38\u957F\u957F\u5230\u4F1A\u6362\u884C",
  desc: "\u5546\u54C1\u63CF\u8FF0",
  tags: [
    { name: "3\u4E2A\u6708\u514D\u606F" },
    { name: "4.1\u6298" },
    { name: "\u9ED1\u5361\u518D\u770133.96" }
  ],
  currency: "$",
  price: 300,
  count: 8,
  unit: "kg",
  action: {
    label: "\u8BE6\u60C5",
    onClick(e) {
      console.log(e);
      e.stopPropagation();
    }
  }
}))));
const symbols = ((_a = document.getElementById("__CHATUI_ICONS__")) == null ? void 0 : _a.querySelectorAll("symbol")) || [];
var Icon = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(Icon$1, {
  type: "bullhorn"
})), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u65CB\u8F6C\u52A8\u753B"
}, /* @__PURE__ */ React.createElement("div", {
  style: { fontSize: "64px" }
}, /* @__PURE__ */ React.createElement(Icon$1, {
  type: "spinner",
  spin: true
}))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u65CB\u8F6C\u52A8\u753B"
}, /* @__PURE__ */ React.createElement("div", {
  className: "icon-list"
}, Array.from(symbols).map((item) => {
  const icon = item.id.replace("icon-", "");
  return /* @__PURE__ */ React.createElement("div", {
    className: "icon-box",
    key: icon
  }, /* @__PURE__ */ React.createElement(Icon$1, {
    type: icon
  }), /* @__PURE__ */ React.createElement("span", null, icon));
}))));
const picUrl = "//gw.alicdn.com/tfs/TB1GRW3voY1gK0jSZFMXXaWcVXa-620-320.jpg";
const imgs = [
  "//gw.alicdn.com/tfs/TB1yGi2vfb2gK0jSZK9XXaEgFXa-320-240.png",
  "//gw.alicdn.com/tfs/TB1I6i2vhD1gK0jSZFsXXbldVXa-620-320.jpg",
  "//gw.alicdn.com/tfs/TB1GRW3voY1gK0jSZFMXXaWcVXa-620-320.jpg",
  "//gw.alicdn.com/tfs/TB1XCq4veH2gK0jSZFEXXcqMpXa-620-320.jpg",
  "//gw.alicdn.com/tfs/TB1dzG8vbj1gK0jSZFuXXcrHpXa-620-319.jpg"
];
var Image = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(Image$1, {
  src: picUrl,
  width: "299",
  height: "200",
  alt: "\u56FE\u7247\u540D"
})), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u54CD\u5E94\u5F0F\u56FE\u7247"
}, /* @__PURE__ */ React.createElement(Image$1, {
  src: picUrl,
  alt: "Responsive image",
  fluid: true
})), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u61D2\u52A0\u8F7D"
}, imgs.map((img2) => /* @__PURE__ */ React.createElement("div", {
  key: img2
}, /* @__PURE__ */ React.createElement("p", {
  style: { margin: "120px 0", background: "#eee" }
}, "placeholder"), /* @__PURE__ */ React.createElement(Image$1, {
  src: img2,
  style: { minWidth: "10px", minHeight: "200px" },
  lazy: true,
  fluid: true,
  key: img2
})))));
var InfiniteScroll = () => {
  const [list, setList] = react.exports.useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [disabled, setDisabled] = react.exports.useState(false);
  function handleLoadMore() {
    if (list.length > 50) {
      setDisabled(true);
      return;
    }
    for (let i = 0; i < 10; i += 1) {
      setList((s) => [...s, s.length + 1]);
    }
  }
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setDisabled((s) => !s),
    type: "button"
  }, "Toggle"), ` : ${disabled}`, /* @__PURE__ */ React.createElement(InfiniteScroll$1, {
    style: { height: "200px" },
    disabled,
    onLoadMore: handleLoadMore
  }, /* @__PURE__ */ React.createElement("ul", null, list.map((t2) => /* @__PURE__ */ React.createElement("li", {
    key: t2
  }, t2))))));
};
var Input = () => {
  const [value1, setValue1] = react.exports.useState("");
  const [value2, setValue2] = react.exports.useState("");
  const [value3, setValue3] = react.exports.useState("");
  const [value4, setValue4] = react.exports.useState("");
  const [value5, setValue5] = react.exports.useState("");
  const [value6, setValue6] = react.exports.useState("");
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /* @__PURE__ */ React.createElement(Input$1, {
    value: value1,
    onChange: setValue1,
    placeholder: "\u8BF7\u8F93\u5165..."
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u591A\u884C\u8F93\u5165"
  }, /* @__PURE__ */ React.createElement(Input$1, {
    rows: 3,
    value: value2,
    onChange: setValue2,
    placeholder: "\u8BF7\u8F93\u5165..."
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u9AD8\u5EA6\u81EA\u9002\u5E94"
  }, /* @__PURE__ */ React.createElement(Input$1, {
    autoSize: true,
    value: value3,
    onChange: setValue3,
    placeholder: "\u8BF7\u8F93\u5165..."
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u9650\u5236\u5B57\u6570"
  }, /* @__PURE__ */ React.createElement(Input$1, {
    maxLength: 20,
    value: value4,
    onChange: setValue4,
    placeholder: "\u8BF7\u8F93\u5165..."
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u9650\u5236\u5B57\u6570\uFF08\u4E0D\u663E\u793A\uFF09"
  }, /* @__PURE__ */ React.createElement(Input$1, {
    maxLength: 10,
    value: value5,
    onChange: setValue5,
    placeholder: "\u8BF7\u8F93\u5165...",
    showCount: false
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u663E\u793A\u5B57\u6570"
  }, /* @__PURE__ */ React.createElement(Input$1, {
    value: value6,
    onChange: setValue6,
    placeholder: "\u8BF7\u8F93\u5165...",
    showCount: true
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u53D8\u4F53"
  }, /* @__PURE__ */ React.createElement(Input$1, {
    placeholder: "Default (Outline)"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Input$1, {
    placeholder: "Outline",
    variant: "outline"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Input$1, {
    placeholder: "Filled",
    variant: "filled"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Input$1, {
    placeholder: "Flushed",
    variant: "flushed"
  })));
};
var List = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5",
  bg: "gray"
}, /* @__PURE__ */ React.createElement(List$1, null, /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5185\u5BB91"
}), /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5185\u5BB92"
}), /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5185\u5BB93"
}))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u8FB9\u6846",
  bg: "gray"
}, /* @__PURE__ */ React.createElement(List$1, {
  bordered: true
}, /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5185\u5BB91"
}), /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5185\u5BB92"
}), /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5185\u5BB93"
}))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u56FE\u6807",
  bg: "gray"
}, /* @__PURE__ */ React.createElement(List$1, null, /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5185\u5BB91",
  rightIcon: "chevron-right"
}), /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5185\u5BB92",
  rightIcon: "chevron-right"
}), /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5185\u5BB93",
  rightIcon: "chevron-right"
}))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "Card + as=a + \u56FE\u6807",
  bg: "gray"
}, /* @__PURE__ */ React.createElement(Card$1, null, /* @__PURE__ */ React.createElement(List$1, null, /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5185\u5BB91",
  as: "a",
  href: "/",
  rightIcon: "chevron-right"
}), /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5185\u5BB92",
  as: "a",
  rightIcon: "chevron-right"
}), /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5185\u5BB93",
  as: "a",
  rightIcon: "chevron-right"
})))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "Card + as=button + \u56FE\u6807",
  bg: "gray"
}, /* @__PURE__ */ React.createElement(Card$1, null, /* @__PURE__ */ React.createElement(List$1, null, /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5185\u5BB91",
  as: "button",
  rightIcon: "chevron-right"
}), /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5185\u5BB92",
  as: "button",
  rightIcon: "chevron-right"
}), /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5185\u5BB93",
  as: "button",
  rightIcon: "chevron-right"
})))));
var Loading = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(Loading$1, null)), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u52A0\u8F7D\u6587\u6848"
}, /* @__PURE__ */ React.createElement(Loading$1, {
  tip: "\u52A0\u8F7D\u4E2D..."
})));
var MediaObject = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(MediaObject$1, {
  picUrl: "https://gw.alicdn.com/tfs/TB17TaySSzqK1RjSZFHXXb3CpXa-80-80.svg",
  picAlt: "ChatUI",
  picSize: "lg",
  title: "ChatUI",
  meta: "\u670D\u52A1\u4E8E\u5BF9\u8BDD\u9886\u57DF\u7684\u8BBE\u8BA1\u548C\u5F00\u53D1\u4F53\u7CFB\uFF0C\u52A9\u529B\u667A\u80FD\u5BF9\u8BDD\u673A\u5668\u4EBA\u7684\u642D\u5EFA"
})));
var MessageStatus = () => {
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5\uFF081.5\u79D2\u540E\u51FA loading\uFF0C5\u79D2\u540E\u5931\u8D25\uFF09"
  }, /* @__PURE__ */ React.createElement(MessageStatus$1, {
    status: "pending"
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u53D1\u9001\u6210\u529F"
  }, /* @__PURE__ */ React.createElement(MessageStatus$1, {
    status: "sent"
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u53D1\u9001\u5931\u8D25"
  }, /* @__PURE__ */ React.createElement(MessageStatus$1, {
    status: "fail"
  })));
};
function MainContent() {
  return /* @__PURE__ */ React.createElement("div", null, "\u4EB2\uFF0C\u9009\u62E9\u4FDD\u6301\u6392\u961F\u540E\uFF0C\u8BF7\u5728 10\u5206\u949F \u5185\u8FD4\u56DE\u5BF9\u8BDD\u9875\u9762\u8FDB\u884C\u54A8\u8BE2\uFF0C\u5426\u5219\u7CFB\u7EDF\u5C06\u4F1A\u81EA\u52A8\u7ED3\u675F\u672C\u6B21\u901A\u8BDD\u54E6~");
}
var Modal = () => {
  const [open1, setOpen1] = react.exports.useState(false);
  const [open2, setOpen2] = react.exports.useState(false);
  const [open3, setOpen3] = react.exports.useState(false);
  const [open4, setOpen4] = react.exports.useState(false);
  const [open5, setOpen5] = react.exports.useState(false);
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /* @__PURE__ */ React.createElement(Card$1, null, /* @__PURE__ */ React.createElement(List$1, null, /* @__PURE__ */ React.createElement(ListItem, {
    content: "\u5C55\u793A\u5F39\u51FA\u5C42",
    as: "button",
    onClick: () => {
      setOpen1(true);
    },
    rightIcon: "chevron-right"
  }), /* @__PURE__ */ React.createElement(ListItem, {
    content: "\u80CC\u666F\u4E0D\u53EF\u70B9\u51FB",
    as: "button",
    onClick: () => {
      setOpen2(true);
    },
    rightIcon: "chevron-right"
  }), /* @__PURE__ */ React.createElement(ListItem, {
    content: "\u7AD6\u6392\u6309\u94AE",
    as: "button",
    onClick: () => {
      setOpen4(true);
    },
    rightIcon: "chevron-right"
  }), /* @__PURE__ */ React.createElement(ListItem, {
    content: "\u6A2A\u6392\u6309\u94AE",
    as: "button",
    onClick: () => {
      setOpen5(true);
    },
    rightIcon: "chevron-right"
  })))), /* @__PURE__ */ React.createElement(Modal$1, {
    active: open1,
    title: "\u6807\u9898",
    onClose: () => {
      setOpen1(false);
    }
  }, /* @__PURE__ */ React.createElement(MainContent, null)), /* @__PURE__ */ React.createElement(Modal$1, {
    active: open2,
    title: "\u6807\u9898",
    onClose: () => {
      setOpen2(false);
    },
    backdrop: "static"
  }, /* @__PURE__ */ React.createElement(MainContent, null)), /* @__PURE__ */ React.createElement(Modal$1, {
    active: open3,
    title: "\u6807\u9898",
    onClose: () => {
      setOpen3(false);
    },
    showClose: false
  }, /* @__PURE__ */ React.createElement(MainContent, null)), /* @__PURE__ */ React.createElement(Modal$1, {
    active: open4,
    title: "\u6807\u9898",
    onClose: () => {
      setOpen4(false);
    },
    actions: [{ label: "\u786E\u8BA4", color: "primary" }, { label: "\u53D6\u6D88" }]
  }, /* @__PURE__ */ React.createElement(MainContent, null)), /* @__PURE__ */ React.createElement(Modal$1, {
    active: open5,
    title: "\u9700\u8981\u4FDD\u6301\u6392\u961F\u5417?",
    onClose: () => {
      setOpen5(false);
    },
    actions: [
      { label: "\u7ED3\u675F\u6392\u961F" },
      { label: "\u4FDD\u6301\u6392\u961F", color: "primary" }
    ],
    vertical: false
  }, /* @__PURE__ */ React.createElement(MainContent, null)));
};
var Navbar = () => {
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /* @__PURE__ */ React.createElement(Navbar$1, {
    title: "\u5BA2\u670D\u5C0F\u871C"
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u8FD4\u56DE\u4E0A\u7EA7"
  }, /* @__PURE__ */ React.createElement(Navbar$1, {
    title: "\u5BA2\u670D\u5C0F\u871C",
    leftContent: { icon: "chevron-left" }
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u53F3\u4FA7\u6309\u94AE"
  }, /* @__PURE__ */ React.createElement(Navbar$1, {
    title: "\u5BA2\u670D\u5C0F\u871C",
    rightContent: [{ icon: "apps" }, { icon: "ellipsis-h" }]
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "LOGO"
  }, /* @__PURE__ */ React.createElement(Navbar$1, {
    title: "\u5BA2\u670D\u5C0F\u871C",
    logo: "//alime-base.oss-cn-beijing.aliyuncs.com/avatar/alime-base.oss-cn-beijing-internal.aliyuncs.com1636689421751-\u5C0F\u871C\u5934\u50CF.png",
    leftContent: { icon: "chevron-left" },
    rightContent: [{ icon: "apps" }, { icon: "ellipsis-h" }]
  })));
};
var Notice = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5",
  bg: "gray"
}, /* @__PURE__ */ React.createElement("div", {
  style: { position: "relative", height: "60px" }
}, /* @__PURE__ */ React.createElement(Notice$1, {
  content: "\u5C0F\u871C\u516C\u544A\u5185\u5BB9\u5C0F\u871C\u516C\u544A\u5185\u5BB9\u5C0F\u871C\u516C\u544A\u5185\u5BB9\u5C0F\u871C\u516C\u544A\u5185\u5BB9\u5C0F\u871C\u516C\u544A\u5185\u5BB9\u5C0F\u871C\u516C\u544A\u5185\u5BB9\u5C0F\u871C\u516C\u544A\u5185\u5BB9"
}))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u6CA1\u6709\u5173\u95ED",
  bg: "gray"
}, /* @__PURE__ */ React.createElement("div", {
  style: { position: "relative", height: "60px" }
}, /* @__PURE__ */ React.createElement(Notice$1, {
  closable: false,
  content: "\u5C0F\u871C\u516C\u544A\u5185\u5BB9\u5C0F\u871C\u516C\u544A\u5185\u5BB9\u5C0F\u871C\u516C\u544A\u5185\u5BB9\u5C0F\u871C\u516C\u544A\u5185\u5BB9\u5C0F\u871C\u516C\u544A\u5185\u5BB9\u5C0F\u871C\u516C\u544A\u5185\u5BB9\u5C0F\u871C\u516C\u544A\u5185\u5BB9"
}))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u77ED\u6587\u5B57",
  bg: "gray"
}, /* @__PURE__ */ React.createElement("div", {
  style: { position: "relative", height: "60px" }
}, /* @__PURE__ */ React.createElement(Notice$1, {
  content: "\u5C0F\u871C\u516C\u544A\u5185\u5BB9\u5C0F\u871C\u516C\u544A\u5185\u5BB9"
}))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5DE6\u6309\u94AE",
  bg: "gray"
}, /* @__PURE__ */ React.createElement("div", {
  style: { position: "relative", height: "60px" }
}, /* @__PURE__ */ React.createElement(Notice$1, {
  content: "\u5C0F\u871C\u516C\u544A\u5185\u5BB9",
  leftIcon: "warning-circle-fill"
}))));
var Popup = () => {
  const [open1, setOpen1] = react.exports.useState(false);
  const [open2, setOpen2] = react.exports.useState(false);
  const [open3, setOpen3] = react.exports.useState(false);
  const [open4, setOpen4] = react.exports.useState(false);
  const [open5, setOpen5] = react.exports.useState(false);
  const [open6, setOpen6] = react.exports.useState(false);
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /* @__PURE__ */ React.createElement(Card$1, null, /* @__PURE__ */ React.createElement(List$1, null, /* @__PURE__ */ React.createElement(ListItem, {
    content: "\u5C55\u793A\u5F39\u51FA\u5C42",
    as: "button",
    onClick: () => {
      setOpen1(true);
    },
    rightIcon: "chevron-right"
  }), /* @__PURE__ */ React.createElement(ListItem, {
    content: "\u80CC\u666F\u4E0D\u53EF\u70B9\u51FB",
    as: "button",
    onClick: () => {
      setOpen2(true);
    },
    rightIcon: "chevron-right"
  }), /* @__PURE__ */ React.createElement(ListItem, {
    content: "\u4E0D\u663E\u793A\u5173\u95ED\u6309\u94AE",
    as: "button",
    onClick: () => {
      setOpen3(true);
    },
    rightIcon: "chevron-right"
  }), /* @__PURE__ */ React.createElement(ListItem, {
    content: "\u5E26\u6309\u94AE",
    as: "button",
    onClick: () => {
      setOpen4(true);
    },
    rightIcon: "chevron-right"
  }), /* @__PURE__ */ React.createElement(ListItem, {
    content: "\u5E26\u6309\u94AE 80 \u9AD8",
    as: "button",
    onClick: () => {
      setOpen5(true);
    },
    rightIcon: "chevron-right"
  }), /* @__PURE__ */ React.createElement(ListItem, {
    content: "\u7070\u8272\u80CC\u666F",
    as: "button",
    onClick: () => {
      setOpen6(true);
    },
    rightIcon: "chevron-right"
  })))), /* @__PURE__ */ React.createElement(Popup$1, {
    active: open1,
    title: "\u6807\u9898",
    onClose: () => {
      setOpen1(false);
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: { padding: "0px 15px" }
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5"))), /* @__PURE__ */ React.createElement(Popup$1, {
    active: open2,
    title: "\u6807\u9898",
    onClose: () => {
      setOpen2(false);
    },
    backdrop: "static"
  }, /* @__PURE__ */ React.createElement("div", {
    style: { padding: "0px 15px" }
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5"))), /* @__PURE__ */ React.createElement(Popup$1, {
    active: open3,
    title: "\u6807\u9898",
    onClose: () => {
      setOpen3(false);
    },
    showClose: false
  }, /* @__PURE__ */ React.createElement("div", {
    style: { padding: "0px 15px" }
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5"))), /* @__PURE__ */ React.createElement(Popup$1, {
    active: open4,
    title: "\u6807\u9898",
    onClose: () => {
      setOpen4(false);
    },
    actions: [
      { label: "\u4E3B\u8981\u6309\u94AE", color: "primary" },
      { label: "\u6B21\u8981\u6309\u94AE" }
    ]
  }, /* @__PURE__ */ React.createElement("div", {
    style: { padding: "15px" }
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5"))), /* @__PURE__ */ React.createElement(Popup$1, {
    active: open5,
    title: "\u6807\u9898",
    onClose: () => {
      setOpen5(false);
    },
    height: 80,
    actions: [
      { label: "\u4E3B\u8981\u6309\u94AE", color: "primary" },
      { label: "\u6B21\u8981\u6309\u94AE" }
    ]
  }, /* @__PURE__ */ React.createElement("div", {
    style: { padding: "15px" }
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5"))), /* @__PURE__ */ React.createElement(Popup$1, {
    active: open6,
    title: "\u6807\u9898",
    onClose: () => {
      setOpen6(false);
    },
    bgColor: "gray"
  }, /* @__PURE__ */ React.createElement("div", {
    style: { padding: "15px" }
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5\u5185\u5BB9\u8BE6\u60C5"))));
};
var Portal = () => {
  const containerRef = react.exports.useRef(null);
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /* @__PURE__ */ React.createElement(Portal$1, null, /* @__PURE__ */ React.createElement("p", null, "\u51FA\u73B0\u5230 `document.body`"))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u6307\u5B9A\u5BB9\u5668\uFF08ref\uFF09"
  }, /* @__PURE__ */ React.createElement("div", {
    ref: containerRef
  }), /* @__PURE__ */ React.createElement(Portal$1, {
    container: containerRef
  }, /* @__PURE__ */ React.createElement("p", null, "\u51FA\u73B0\u5230\u6307\u5B9A `ref`"))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u6307\u5B9A\u5BB9\u5668\uFF08\u5143\u7D20\uFF09"
  }, /* @__PURE__ */ React.createElement(Portal$1, {
    container: document.querySelector("#root")
  }, /* @__PURE__ */ React.createElement("p", null, "\u51FA\u73B0\u5230\u6307\u5B9A\u5143\u7D20"))));
};
const number = 123456789e-2;
var Price = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(Price$1, {
  price: 123.45
})), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u8D27\u5E01\u7B26\u53F7"
}, /* @__PURE__ */ React.createElement(Price$1, {
  price: 123.45,
  currency: "$"
})), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u539F\u4EF7"
}, /* @__PURE__ */ React.createElement(Price$1, {
  price: 123.45,
  original: true
})), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u56FD\u9645\u5316"
}, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "\u4EBA\u6C11\u5E01\uFF1A"), /* @__PURE__ */ React.createElement(Price$1, {
  price: number,
  locale: "zh-CN",
  currency: "CNY"
})), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "\u6E2F\u5143\uFF1A"), /* @__PURE__ */ React.createElement(Price$1, {
  price: number,
  locale: "zh-HK",
  currency: "HKD"
})), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "\u7F8E\u5143\uFF1A"), /* @__PURE__ */ React.createElement(Price$1, {
  price: number,
  locale: "en-US",
  currency: "USD"
})), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "\u6B27\u5143\uFF1A"), /* @__PURE__ */ React.createElement(Price$1, {
  price: number,
  locale: "de-DE",
  currency: "EUR"
})), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "\u82F1\u9551\uFF1A"), /* @__PURE__ */ React.createElement(Price$1, {
  price: number,
  locale: "en-GB",
  currency: "GBP"
})), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "\u65E5\u5706\uFF1A"), /* @__PURE__ */ React.createElement(Price$1, {
  price: number,
  locale: "ja-JP",
  currency: "JPY"
})), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "\u6CF0\u94E2\uFF1A"), /* @__PURE__ */ React.createElement(Price$1, {
  price: number,
  locale: "th-TH",
  currency: "THB"
}))));
var Progress = () => {
  const [percentage, setPercentage] = react.exports.useState(20);
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /* @__PURE__ */ React.createElement(Progress$1, {
    value: percentage
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Button$1, {
    onClick: () => setPercentage(percentage - 10)
  }, "\u51CF\u5C11"), /* @__PURE__ */ React.createElement(Button$1, {
    onClick: () => setPercentage(percentage + 10),
    color: "primary"
  }, "\u589E\u52A0")), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u72B6\u6001\u663E\u793A: active"
  }, /* @__PURE__ */ React.createElement(Progress$1, {
    value: 30,
    status: "active"
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u72B6\u6001\u663E\u793A: success"
  }, /* @__PURE__ */ React.createElement(Progress$1, {
    value: 40,
    status: "success"
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u72B6\u6001\u663E\u793A: error"
  }, /* @__PURE__ */ React.createElement(Progress$1, {
    value: 50,
    status: "error"
  })));
};
var PullToRefresh = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement("div", {
  style: { height: "300px", padding: "12px", border: "1px solid #ccc" }
}, /* @__PURE__ */ React.createElement(PullToRefresh$1, {
  onRefresh: () => Promise.resolve({})
}, /* @__PURE__ */ React.createElement("div", null, "list")))));
const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear", disabled: true },
  { label: "Orange", value: "Orange" },
  { label: "Banana", value: "Banana" }
];
var Radio = () => {
  const [value, setValue] = react.exports.useState("a");
  function handleChange(val) {
    setValue(val);
  }
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5",
    bg: "gray"
  }, /* @__PURE__ */ React.createElement(Radio$1, {
    label: "\u5907\u9009\u9879A",
    value: "a"
  }), /* @__PURE__ */ React.createElement(Radio$1, {
    label: "\u5907\u9009\u9879B",
    value: "b",
    checked: true
  }), /* @__PURE__ */ React.createElement(Radio$1, {
    label: "\u5907\u9009\u9879C",
    value: "c",
    disabled: true
  })), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u5355\u9009\u6846\u7EC4",
    bg: "gray"
  }, /* @__PURE__ */ React.createElement(RadioGroup, {
    value,
    options,
    onChange: handleChange
  })));
};
var RateActions = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5",
  bg: "gray"
}, /* @__PURE__ */ React.createElement(RateActions$1, {
  onClick: (val) => {
    console.log(val);
  }
})), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u591A\u8BED\u8A00\uFF08\u82F1\u6587\uFF09",
  bg: "gray"
}, /* @__PURE__ */ React.createElement(LocaleProvider, {
  locale: "en-US"
}, /* @__PURE__ */ React.createElement(RateActions$1, {
  onClick: (val) => {
    console.log(val);
  }
}))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u4FEE\u6539 title",
  bg: "gray"
}, /* @__PURE__ */ React.createElement(LocaleProvider, {
  locale: "en-US"
}, /* @__PURE__ */ React.createElement(RateActions$1, {
  upTitle: "Like",
  downTitle: "Unlike",
  onClick: (val) => {
    console.log(val);
  }
}))));
const html = "<div><h1>H1\u6807\u9898</h1><p>\u8FD9\u662F\u6BB5\u843D<em>em\u6807\u7B7E</em><strong>strong\u6807\u7B7E</strong></p></div>";
var RichText = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(RichText$1, {
  content: html
})));
var ScrollView = () => {
  const [list, setList] = React.useState([
    { text: "\u5185\u5BB91" },
    { text: "\u5185\u5BB92" },
    { text: "\u5185\u5BB93" }
  ]);
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => setList((s) => [
      ...s,
      { text: "\u5185\u5BB94" },
      { text: "\u5185\u5BB95" },
      { text: "\u5185\u5BB96" }
    ])
  }, "add"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => setList([{ text: "\u5185\u5BB91" }, { text: "\u5185\u5BB92" }, { text: "\u5185\u5BB93" }])
  }, "add"), /* @__PURE__ */ React.createElement(ScrollView$1, {
    data: list,
    renderItem: (item) => /* @__PURE__ */ React.createElement(Button$1, {
      label: item.text
    })
  })));
};
var Search = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(Search$1, {
  placeholder: "\u8F93\u5165\u5B9D\u8D1D\u5173\u952E\u8BCD\u7B49"
})), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u7981\u7528\u72B6\u6001"
}, /* @__PURE__ */ React.createElement(Search$1, {
  disabled: true,
  "aria-label": "Search"
})), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u4E0D\u542F\u7528\u6E05\u9664\u56FE\u6807"
}, /* @__PURE__ */ React.createElement(Search$1, {
  clearable: false
})));
var Select = () => {
  const [value1, setValue1] = react.exports.useState("");
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /* @__PURE__ */ React.createElement(Select$1, {
    placeholder: "Select option"
  }, /* @__PURE__ */ React.createElement("option", {
    value: "option1"
  }, "Option 1"), /* @__PURE__ */ React.createElement("option", {
    value: "option2"
  }, "Option 2"), /* @__PURE__ */ React.createElement("option", {
    value: "option3"
  }, "Option 3"))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u7981\u7528\u72B6\u6001"
  }, /* @__PURE__ */ React.createElement(Select$1, {
    placeholder: "Select option",
    disabled: true
  }, /* @__PURE__ */ React.createElement("option", {
    value: "option1"
  }, "Option 1"), /* @__PURE__ */ React.createElement("option", {
    value: "option2"
  }, "Option 2"), /* @__PURE__ */ React.createElement("option", {
    value: "option3"
  }, "Option 3")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Select$1, {
    placeholder: "Pick one"
  }, /* @__PURE__ */ React.createElement("option", {
    value: "react"
  }, "React"), /* @__PURE__ */ React.createElement("option", {
    value: "vue"
  }, "Vue"), /* @__PURE__ */ React.createElement("option", {
    value: "ng",
    disabled: true
  }, "Angular"), /* @__PURE__ */ React.createElement("option", {
    value: "svelte"
  }, "Svelte"))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u53D7\u63A7\u7684"
  }, /* @__PURE__ */ React.createElement(Select$1, {
    value: value1,
    placeholder: "Select option",
    onChange: (e) => {
      setValue1(e.target.value);
    }
  }, /* @__PURE__ */ React.createElement("option", {
    value: "option1"
  }, "Option 1"), /* @__PURE__ */ React.createElement("option", {
    value: "option2"
  }, "Option 2"), /* @__PURE__ */ React.createElement("option", {
    value: "option3"
  }, "Option 3"))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u53D8\u4F53"
  }, /* @__PURE__ */ React.createElement(Select$1, {
    placeholder: "Default (Outline)"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Select$1, {
    placeholder: "Outline",
    variant: "outline"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Select$1, {
    placeholder: "Filled",
    variant: "filled"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Select$1, {
    placeholder: "Flushed",
    variant: "flushed"
  })));
};
var Stepper = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(Stepper$1, {
  current: 3
}, /* @__PURE__ */ React.createElement(Step, {
  title: "\u4E70\u5BB6\u7533\u8BF7\u9000\u6B3E\u9000\u8D27",
  desc: "\u6628\u5929 12:00"
}), /* @__PURE__ */ React.createElement(Step, {
  title: "\u5356\u5BB6\u5904\u7406\u7533\u8BF7",
  desc: "\u5356\u5BB6\u8FD8\u670922\u5C0F\u65F622\u520622\u79D2\u5904\u7406"
}), /* @__PURE__ */ React.createElement(Step, {
  title: "\u4E70\u5BB6\u586B\u5199\u9000\u8D27\u5E76\u586B\u5199\u7269\u6D41\u4FE1\u606F",
  desc: "\u6628\u5929 15:00"
}), /* @__PURE__ */ React.createElement(Step, {
  title: "\u5356\u5BB6\u786E\u8BA4\u6536\u8D27\u5E76\u9000\u6B3E",
  desc: "\u6628\u5929 16:00"
}), /* @__PURE__ */ React.createElement(Step, {
  title: "\u9000\u6B3E\u6210\u529F"
}))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5012\u5E8F"
}, /* @__PURE__ */ React.createElement(Stepper$1, {
  inverted: true
}, /* @__PURE__ */ React.createElement(Step, {
  title: "\u5B98\u65B9\u5BA2\u670D\u5904\u7406\u4E2D",
  subTitle: "05-23 11:23",
  desc: "\u5BA2\u670D\u5C06\u572824\u5C0F\u65F6\u5185\u8054\u7CFB\u60A8\u6838\u5B9E\u95EE\u9898\uFF0C\u8BF7\u6CE8\u610F\u63A5\u542C\u3002"
}), /* @__PURE__ */ React.createElement(Step, {
  title: "\u60A8\u53D1\u8D77\u6295\u8BC9",
  subTitle: "05-23 11:23",
  desc: /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, "\u6295\u8BC9\u539F\u56E0\uFF1A\u7269\u6D41\u95EE\u9898\uFF0C\u672A\u653E\u6307\u5B9A\u4EE3\u6536\u70B9\u3002"), /* @__PURE__ */ React.createElement("div", null, "\u6295\u8BC9\u8BF4\u660E\uFF1A\u90FD\u8BF4\u4E86\u5F88\u591A\u904D\u4E0D\u8981\u653E\u9A7F\u7AD9\uFF0C\u8FD8\u662F\u653E\u4E86\u3002"))
}))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5012\u5E8F&\u6210\u529F"
}, /* @__PURE__ */ React.createElement(Stepper$1, {
  inverted: true,
  status: "success"
}, /* @__PURE__ */ React.createElement(Step, {
  title: "\u5B98\u65B9\u5BA2\u670D\u5224\u51B3\uFF0C\u6295\u8BC9\u6210\u7ACB",
  subTitle: "05-23 11:23",
  desc: "\u5BA2\u670D\u5C06\u572824\u5C0F\u65F6\u5185\u8054\u7CFB\u60A8\u6838\u5B9E\u95EE\u9898\uFF0C\u8BF7\u6CE8\u610F\u63A5\u542C\u3002"
}), /* @__PURE__ */ React.createElement(Step, {
  title: "\u60A8\u8865\u5145\u7559\u8A00",
  subTitle: "05-23 11:23",
  desc: "\u5356\u5BB6\u8BF4\u597D\u8981\u53D1\u8D27\u600E\u4E48\u4E0D\u53D1\u8D27\uFF0C\u6001\u5EA6\u592A\u5DEE\u4E86\uFF01\uFF01"
}), /* @__PURE__ */ React.createElement(Step, {
  title: "\u4E70\u5BB6\u586B\u5199\u9000\u8D27\u5E76\u586B\u5199\u7269\u6D41\u4FE1\u606F",
  subTitle: "\u6628\u5929 15:00"
}), /* @__PURE__ */ React.createElement(Step, {
  title: "\u5356\u5BB6\u786E\u8BA4\u6536\u8D27\u5E76\u9000\u6B3E",
  subTitle: "\u6628\u5929 16:00"
}), /* @__PURE__ */ React.createElement(Step, {
  title: "\u9000\u6B3E\u6210\u529F"
}))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5012\u5E8F&\u5931\u8D25"
}, /* @__PURE__ */ React.createElement(Stepper$1, {
  inverted: true,
  status: "fail"
}, /* @__PURE__ */ React.createElement(Step, {
  title: "\u5B98\u65B9\u5BA2\u670D\u5224\u51B3\uFF0C\u6295\u8BC9\u4E0D\u6210\u7ACB",
  subTitle: "05-23 11:23",
  desc: "\u539F\u56E0\uFF1A\u6838\u5B9E\u8BA2\u5355\u8FD8\u5728\u7EA6\u5B9A\u53D1\u8D27\u65F6\u6548\u5185\uFF0C\u5DF2\u50AC\u4FC3\u5356\u5BB6\u53D1\u8D27\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85\u3002"
}), /* @__PURE__ */ React.createElement(Step, {
  title: "\u5B98\u65B9\u5BA2\u670D\u5904\u7406\u4E2D",
  subTitle: "05-23 11:23",
  desc: "\u5BA2\u670D\u5C06\u572824\u5C0F\u65F6\u5185\u8054\u7CFB\u60A8\u6838\u5B9E\u95EE\u9898\uFF0C\u8BF7\u6CE8\u610F\u63A5\u542C\u3002"
}), /* @__PURE__ */ React.createElement(Step, {
  title: "\u60A8\u53D1\u8D77\u6295\u8BC9",
  subTitle: "05-23 11:23",
  desc: /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, "\u6295\u8BC9\u539F\u56E0\uFF1A\u7269\u6D41\u95EE\u9898\uFF0C\u672A\u653E\u6307\u5B9A\u4EE3\u6536\u70B9\u3002"), /* @__PURE__ */ React.createElement("div", null, "\u6295\u8BC9\u8BF4\u660E\uFF1A\u90FD\u8BF4\u4E86\u5F88\u591A\u904D\u4E0D\u8981\u653E\u9A7F\u7AD9\uFF0C\u8FD8\u662F\u653E\u4E86\u3002"))
}))), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5012\u5E8F&\u53D6\u6D88"
}, /* @__PURE__ */ React.createElement(Stepper$1, {
  inverted: true,
  status: "abort"
}, /* @__PURE__ */ React.createElement(Step, {
  title: "\u60A8\u64A4\u9500\u6295\u8BC9",
  subTitle: "05-23 11:23",
  desc: "\u82E5\u540E\u7EED\u9047\u5230\u6709\u95EE\u9898\uFF0C\u60A8\u53EF\u8054\u7CFB\u5BA2\u670D\u3002"
}), /* @__PURE__ */ React.createElement(Step, {
  title: "\u5B98\u65B9\u5BA2\u670D\u5904\u7406\u4E2D",
  subTitle: "05-23 11:23",
  desc: "\u5BA2\u670D\u5C06\u572824\u5C0F\u65F6\u5185\u8054\u7CFB\u60A8\u6838\u5B9E\u95EE\u9898\uFF0C\u8BF7\u6CE8\u610F\u63A5\u542C\u3002"
}), /* @__PURE__ */ React.createElement(Step, {
  title: "\u60A8\u53D1\u8D77\u6295\u8BC9",
  subTitle: "05-23 11:23",
  desc: /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, "\u6295\u8BC9\u539F\u56E0\uFF1A\u7269\u6D41\u95EE\u9898\uFF0C\u672A\u653E\u6307\u5B9A\u4EE3\u6536\u70B9\u3002"), /* @__PURE__ */ React.createElement("div", null, "\u6295\u8BC9\u8BF4\u660E\uFF1A\u90FD\u8BF4\u4E86\u5F88\u591A\u904D\u4E0D\u8981\u653E\u9A7F\u7AD9\uFF0C\u8FD8\u662F\u653E\u4E86\u3002"))
}))));
var SystemMessage = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(SystemMessage$1, {
  content: "88VIP\u4E13\u5C5E\u667A\u80FD\u5BA2\u670D\u5C0F\u871C \u4E3A\u60A8\u670D\u52A1"
})));
var Tabs = () => {
  const [tabIndex, setTabIndex] = react.exports.useState(0);
  const [tabIndex2, setTabIndex2] = react.exports.useState(0);
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /* @__PURE__ */ React.createElement(Tabs$1, {
    index: tabIndex,
    onChange: setTabIndex
  }, /* @__PURE__ */ React.createElement(Tab, {
    label: "\u6807\u7B7E1"
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB91")), /* @__PURE__ */ React.createElement(Tab, {
    label: "\u6807\u7B7E2"
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB92")), /* @__PURE__ */ React.createElement(Tab, {
    label: "\u6807\u7B7E3"
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB93")))), /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u81EA\u52A8\u6EDA\u52A8"
  }, /* @__PURE__ */ React.createElement(Tabs$1, {
    index: tabIndex2,
    scrollable: true,
    onChange: setTabIndex2
  }, /* @__PURE__ */ React.createElement(Tab, {
    label: "\u6807\u7B7E1"
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB91")), /* @__PURE__ */ React.createElement(Tab, {
    label: "\u6807\u7B7E2"
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB92")), /* @__PURE__ */ React.createElement(Tab, {
    label: "\u6807\u7B7E3"
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB93")), /* @__PURE__ */ React.createElement(Tab, {
    label: "\u6807\u7B7E4"
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB94")), /* @__PURE__ */ React.createElement(Tab, {
    label: "\u6807\u7B7E5"
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB95")), /* @__PURE__ */ React.createElement(Tab, {
    label: "\u6807\u7B7E6"
  }, /* @__PURE__ */ React.createElement("p", null, "\u5185\u5BB96")))));
};
var Tag = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(Tag$1, null, "\u9ED8\u8BA4\u6807\u7B7E"), /* @__PURE__ */ React.createElement(Tag$1, {
  color: "primary"
}, "\u5546\u54C1\u6807\u7B7E"), /* @__PURE__ */ React.createElement(Tag$1, {
  color: "success"
}, "\u6210\u529F\u72B6\u6001"), /* @__PURE__ */ React.createElement(Tag$1, {
  color: "danger"
}, "\u5931\u8D25\u72B6\u6001"), /* @__PURE__ */ React.createElement(Tag$1, {
  color: "warning"
}, "\u8B66\u6212\u72B6\u6001")));
var Text = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(Text$1, null, "\u6587\u672C\u5185\u5BB9")), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5355\u884C\u663E\u793A"
}, /* @__PURE__ */ React.createElement(Text$1, {
  truncate: true
}, "\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u957F\u7684\u6587\u672C\u5185\u5BB9")), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u591A\u884C\u663E\u793A"
}, /* @__PURE__ */ React.createElement(Text$1, {
  truncate: 2
}, "\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u957F\u7684\u6587\u672C\u5185\u5BB9")), /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u5355\u8BCD\u6362\u884C"
}, /* @__PURE__ */ React.createElement(Text$1, {
  breakWord: true
}, "ThisIsVeryVeryVeryVeryVeryVeryVeryLongEnglishWord")));
const now = Date.now();
const MS_A_DAY = 24 * 60 * 60 * 1e3;
const MS_A_WEEK = MS_A_DAY * 7;
var Time = () => {
  const [lang, setLang] = react.exports.useState("zh-CN");
  return /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /* @__PURE__ */ React.createElement(LocaleProvider, {
    locale: lang
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "\u73B0\u5728\uFF1A"), /* @__PURE__ */ React.createElement(Time$1, {
    date: now
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "\u521A\u624D\uFF1A"), /* @__PURE__ */ React.createElement(Time$1, {
    date: now - 12e4
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "\u6628\u5929\uFF1A"), /* @__PURE__ */ React.createElement(Time$1, {
    date: now - MS_A_DAY
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "\u524D\u5929\uFF1A"), /* @__PURE__ */ React.createElement(Time$1, {
    date: now - MS_A_DAY * 2
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, "\u4E0A\u4E0A\u5468\uFF1A"), /* @__PURE__ */ React.createElement(Time$1, {
    date: now - MS_A_WEEK * 2
  })))));
};
var Toast = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(Card$1, null, /* @__PURE__ */ React.createElement(List$1, null, /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u6587\u5B57\u63D0\u793A",
  as: "button",
  onClick: () => {
    toast.show("\u63D0\u793A\u5185\u5BB9", "success");
  },
  rightIcon: "chevron-right"
}), /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u6210\u529F\u63D0\u793A",
  as: "button",
  onClick: () => {
    toast.success("\u64CD\u4F5C\u6210\u529F");
  },
  rightIcon: "chevron-right"
}), /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u5931\u8D25\u63D0\u793A",
  as: "button",
  onClick: () => {
    toast.fail("\u64CD\u4F5C\u5931\u8D25");
  },
  rightIcon: "chevron-right"
}), /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u52A0\u8F7D\u63D0\u793A",
  as: "button",
  onClick: () => {
    toast.loading("\u52A0\u8F7D\u4E2D...", -1);
  },
  rightIcon: "chevron-right"
}), /* @__PURE__ */ React.createElement(ListItem, {
  content: "\u957F\u6587\u6848",
  as: "button",
  onClick: () => {
    toast.success(
      "\u5F88\u9AD8\u5174\u80FD\u5E2E\u52A9\u5230\u60A8\u6587\u6848\uFF0C\u5230\u60A8\u6587\u6848\u60A8\u6587\u6848\u5230\u60A8\u6587\u6848\u5230\u60A8\u6587\u6848"
    );
  },
  rightIcon: "chevron-right"
})))));
var Typing = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement("div", {
  className: "Message left"
}, /* @__PURE__ */ React.createElement(Typing$1, null))));
var Video = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement(Video$1, {
  cover: "//img.alicdn.com/imgextra/i1/6000000000012/O1CN01vlHyZv1BxXNDA564X_!!6000000000012-0-tbvideo.jpg",
  src: "//cloud.video.taobao.com/play/u/3544775890/p/1/e/6/t/1/277895493609.mp4",
  duration: "46"
})));
var VisuallyHidden = () => /* @__PURE__ */ React.createElement(DemoPage, null, /* @__PURE__ */ React.createElement(DemoSection, {
  title: "\u57FA\u7840\u7528\u6CD5"
}, /* @__PURE__ */ React.createElement("button", {
  type: "button"
}, /* @__PURE__ */ React.createElement(VisuallyHidden$1, null, "Save"), /* @__PURE__ */ React.createElement("svg", {
  "aria-hidden": true,
  width: "32",
  height: "32"
}, /* @__PURE__ */ React.createElement("path", {
  d: "M16 18l8-8h-6v-8h-4v8h-6zM23.273 14.727l-2.242 2.242 8.128 3.031-13.158 4.907-13.158-4.907 8.127-3.031-2.242-2.242-8.727 3.273v8l16 6 16-6v-8z"
})))));
var demos = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar,
  Bubble,
  Button,
  Card,
  Carousel,
  Chat,
  Suggestion,
  Checkbox,
  ComponentProvider,
  Confirm,
  Divider,
  Empty,
  ErrorBoundary,
  FileCard,
  Flex,
  Form,
  Goods,
  Icon,
  Image,
  InfiniteScroll,
  Input,
  List,
  Loading,
  MediaObject,
  MessageStatus,
  Modal,
  Navbar,
  Notice,
  Popup,
  Portal,
  Price,
  Progress,
  PullToRefresh,
  Radio,
  RateActions,
  RichText,
  ScrollView,
  Search,
  Select,
  Stepper,
  SystemMessage,
  Tabs,
  Tag,
  Text,
  Time,
  Toast,
  Typing,
  Video,
  VisuallyHidden
}, Symbol.toStringTag, { value: "Module" }));
const routes = navConfig.reduce((prev, current) => [...prev, ...current.list], []);
function App() {
  const routesConfig = routes.map((route) => {
    const Comp = demos[toPascalCase(route.code)];
    return { path: `/${route.code}`, element: /* @__PURE__ */ React.createElement(Comp, null) };
  });
  const element = useRoutes([{ path: "/", element: /* @__PURE__ */ React.createElement(DemoIndex, null) }, ...routesConfig]);
  return element;
}
ReactDOM.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(App, null))),
  document.getElementById("root")
);
