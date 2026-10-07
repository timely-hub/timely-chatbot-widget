var Ac = Object.defineProperty;
var ec = (t, A, e) => A in t ? Ac(t, A, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[A] = e;
var P = (t, A, e) => ec(t, typeof A != "symbol" ? A + "" : A, e);
/*! @license DOMPurify 3.4.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.2/LICENSE */
const {
  entries: da,
  setPrototypeOf: Si,
  isFrozen: tc,
  getPrototypeOf: rc,
  getOwnPropertyDescriptor: sc
} = Object;
let {
  freeze: QA,
  seal: SA,
  create: Ve
} = Object, {
  apply: ln,
  construct: cn
} = typeof Reflect < "u" && Reflect;
QA || (QA = function(A) {
  return A;
});
SA || (SA = function(A) {
  return A;
});
ln || (ln = function(A, e) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
    s[n - 2] = arguments[n];
  return A.apply(e, s);
});
cn || (cn = function(A) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
    r[s - 1] = arguments[s];
  return new A(...r);
});
const ot = sA(Array.prototype.forEach), nc = sA(Array.prototype.lastIndexOf), vi = sA(Array.prototype.pop), at = sA(Array.prototype.push), ic = sA(Array.prototype.splice), fA = Array.isArray, Ct = sA(String.prototype.toLowerCase), vs = sA(String.prototype.toString), Li = sA(String.prototype.match), Re = sA(String.prototype.replace), ki = sA(String.prototype.indexOf), oc = sA(String.prototype.trim), ac = sA(Number.prototype.toString), lc = sA(Boolean.prototype.toString), Di = typeof BigInt > "u" ? null : sA(BigInt.prototype.toString), Ki = typeof Symbol > "u" ? null : sA(Symbol.prototype.toString), Y = sA(Object.prototype.hasOwnProperty), lt = sA(Object.prototype.toString), hA = sA(RegExp.prototype.test), rr = cc(TypeError);
function sA(t) {
  return function(A) {
    A instanceof RegExp && (A.lastIndex = 0);
    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
      r[s - 1] = arguments[s];
    return ln(t, A, r);
  };
}
function cc(t) {
  return function() {
    for (var A = arguments.length, e = new Array(A), r = 0; r < A; r++)
      e[r] = arguments[r];
    return cn(t, e);
  };
}
function v(t, A) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ct;
  if (Si && Si(t, null), !fA(A))
    return t;
  let r = A.length;
  for (; r--; ) {
    let s = A[r];
    if (typeof s == "string") {
      const n = e(s);
      n !== s && (tc(A) || (A[r] = n), s = n);
    }
    t[s] = !0;
  }
  return t;
}
function hc(t) {
  for (let A = 0; A < t.length; A++)
    Y(t, A) || (t[A] = null);
  return t;
}
function mA(t) {
  const A = Ve(null);
  for (const [e, r] of da(t))
    Y(t, e) && (fA(r) ? A[e] = hc(r) : r && typeof r == "object" && r.constructor === Object ? A[e] = mA(r) : A[e] = r);
  return A;
}
function Bc(t) {
  switch (typeof t) {
    case "string":
      return t;
    case "number":
      return ac(t);
    case "boolean":
      return lc(t);
    case "bigint":
      return Di ? Di(t) : "0";
    case "symbol":
      return Ki ? Ki(t) : "Symbol()";
    case "undefined":
      return lt(t);
    case "function":
    case "object": {
      if (t === null)
        return lt(t);
      const A = t, e = Xe(A, "toString");
      if (typeof e == "function") {
        const r = e(A);
        return typeof r == "string" ? r : lt(r);
      }
      return lt(t);
    }
    default:
      return lt(t);
  }
}
function Xe(t, A) {
  for (; t !== null; ) {
    const r = sc(t, A);
    if (r) {
      if (r.get)
        return sA(r.get);
      if (typeof r.value == "function")
        return sA(r.value);
    }
    t = rc(t);
  }
  function e() {
    return null;
  }
  return e;
}
function uc(t) {
  try {
    return hA(t, ""), !0;
  } catch {
    return !1;
  }
}
const Mi = QA(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ls = QA(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ks = QA(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), gc = QA(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ds = QA(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), dc = QA(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ri = QA(["#text"]), Oi = QA(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ks = QA(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), _i = QA(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), sr = QA(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), pc = SA(/\{\{[\w\W]*|[\w\W]*\}\}/gm), fc = SA(/<%[\w\W]*|[\w\W]*%>/gm), wc = SA(/\$\{[\w\W]*/gm), Qc = SA(/^data-[\-\w.\u00B7-\uFFFF]+$/), Cc = SA(/^aria-[\-\w]+$/), pa = SA(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), mc = SA(/^(?:\w+script|data):/i), Uc = SA(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), fa = SA(/^html$/i), Fc = SA(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ni = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Cc,
  ATTR_WHITESPACE: Uc,
  CUSTOM_ELEMENT: Fc,
  DATA_ATTR: Qc,
  DOCTYPE_NAME: fa,
  ERB_EXPR: fc,
  IS_ALLOWED_URI: pa,
  IS_SCRIPT_OR_DATA: mc,
  MUSTACHE_EXPR: pc,
  TMPLIT_EXPR: wc
});
const ct = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, xc = function() {
  return typeof window > "u" ? null : window;
}, bc = function(A, e) {
  if (typeof A != "object" || typeof A.createPolicy != "function")
    return null;
  let r = null;
  const s = "data-tt-policy-suffix";
  e && e.hasAttribute(s) && (r = e.getAttribute(s));
  const n = "dompurify" + (r ? "#" + r : "");
  try {
    return A.createPolicy(n, {
      createHTML(i) {
        return i;
      },
      createScriptURL(i) {
        return i;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + n + " could not be created."), null;
  }
}, $i = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function wa() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xc();
  const A = (I) => wa(I);
  if (A.version = "3.4.2", A.removed = [], !t || !t.document || t.document.nodeType !== ct.document || !t.Element)
    return A.isSupported = !1, A;
  let {
    document: e
  } = t;
  const r = e, s = r.currentScript, {
    DocumentFragment: n,
    HTMLTemplateElement: i,
    Node: o,
    Element: a,
    NodeFilter: c,
    NamedNodeMap: l = t.NamedNodeMap || t.MozNamedAttrMap,
    HTMLFormElement: h,
    DOMParser: u,
    trustedTypes: g
  } = t, d = a.prototype, p = Xe(d, "cloneNode"), U = Xe(d, "remove"), y = Xe(d, "nextSibling"), C = Xe(d, "childNodes"), x = Xe(d, "parentNode");
  if (typeof i == "function") {
    const I = e.createElement("template");
    I.content && I.content.ownerDocument && (e = I.content.ownerDocument);
  }
  let E, b = "";
  const {
    implementation: K,
    createNodeIterator: W,
    createDocumentFragment: lA,
    getElementsByTagName: X
  } = e, {
    importNode: Ae
  } = r;
  let nA = $i();
  A.isSupported = typeof da == "function" && typeof x == "function" && K && K.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: vA,
    ERB_EXPR: XA,
    TMPLIT_EXPR: ge,
    DATA_ATTR: Zt,
    ARIA_ATTR: Gl,
    IS_SCRIPT_OR_DATA: Vl,
    ATTR_WHITESPACE: ii,
    CUSTOM_ELEMENT: Xl
  } = Ni;
  let {
    IS_ALLOWED_URI: oi
  } = Ni, oA = null;
  const ai = v({}, [...Mi, ...Ls, ...ks, ...Ds, ...Ri]);
  let cA = null;
  const li = v({}, [...Oi, ...Ks, ..._i, ...sr]);
  let q = Object.seal(Ve(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), rt = null, qt = null;
  const ee = Object.seal(Ve(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let ci = !0, ws = !0, hi = !1, Bi = !0, de = !1, st = !0, pe = !1, Qs = !1, Cs = !1, ke = !1, jt = !1, Ar = !1, ui = !0, gi = !1;
  const di = "user-content-";
  let ms = !0, nt = !1, De = {}, RA = null;
  const Us = v({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let pi = null;
  const fi = v({}, ["audio", "video", "img", "source", "image", "track"]);
  let Fs = null;
  const wi = v({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), er = "http://www.w3.org/1998/Math/MathML", tr = "http://www.w3.org/2000/svg", OA = "http://www.w3.org/1999/xhtml";
  let Ke = OA, xs = !1, bs = null;
  const zl = v({}, [er, tr, OA], vs);
  let Es = v({}, ["mi", "mo", "mn", "ms", "mtext"]), ys = v({}, ["annotation-xml"]);
  const Wl = v({}, ["title", "style", "font", "a", "script"]);
  let it = null;
  const Jl = ["application/xhtml+xml", "text/html"], Yl = "text/html";
  let iA = null, Me = null;
  const Zl = e.createElement("form"), Qi = function(B) {
    return B instanceof RegExp || B instanceof Function;
  }, Is = function() {
    let B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Me && Me === B)
      return;
    (!B || typeof B != "object") && (B = {}), B = mA(B), it = // eslint-disable-next-line unicorn/prefer-includes
    Jl.indexOf(B.PARSER_MEDIA_TYPE) === -1 ? Yl : B.PARSER_MEDIA_TYPE, iA = it === "application/xhtml+xml" ? vs : Ct, oA = Y(B, "ALLOWED_TAGS") && fA(B.ALLOWED_TAGS) ? v({}, B.ALLOWED_TAGS, iA) : ai, cA = Y(B, "ALLOWED_ATTR") && fA(B.ALLOWED_ATTR) ? v({}, B.ALLOWED_ATTR, iA) : li, bs = Y(B, "ALLOWED_NAMESPACES") && fA(B.ALLOWED_NAMESPACES) ? v({}, B.ALLOWED_NAMESPACES, vs) : zl, Fs = Y(B, "ADD_URI_SAFE_ATTR") && fA(B.ADD_URI_SAFE_ATTR) ? v(mA(wi), B.ADD_URI_SAFE_ATTR, iA) : wi, pi = Y(B, "ADD_DATA_URI_TAGS") && fA(B.ADD_DATA_URI_TAGS) ? v(mA(fi), B.ADD_DATA_URI_TAGS, iA) : fi, RA = Y(B, "FORBID_CONTENTS") && fA(B.FORBID_CONTENTS) ? v({}, B.FORBID_CONTENTS, iA) : Us, rt = Y(B, "FORBID_TAGS") && fA(B.FORBID_TAGS) ? v({}, B.FORBID_TAGS, iA) : mA({}), qt = Y(B, "FORBID_ATTR") && fA(B.FORBID_ATTR) ? v({}, B.FORBID_ATTR, iA) : mA({}), De = Y(B, "USE_PROFILES") ? B.USE_PROFILES && typeof B.USE_PROFILES == "object" ? mA(B.USE_PROFILES) : B.USE_PROFILES : !1, ci = B.ALLOW_ARIA_ATTR !== !1, ws = B.ALLOW_DATA_ATTR !== !1, hi = B.ALLOW_UNKNOWN_PROTOCOLS || !1, Bi = B.ALLOW_SELF_CLOSE_IN_ATTR !== !1, de = B.SAFE_FOR_TEMPLATES || !1, st = B.SAFE_FOR_XML !== !1, pe = B.WHOLE_DOCUMENT || !1, ke = B.RETURN_DOM || !1, jt = B.RETURN_DOM_FRAGMENT || !1, Ar = B.RETURN_TRUSTED_TYPE || !1, Cs = B.FORCE_BODY || !1, ui = B.SANITIZE_DOM !== !1, gi = B.SANITIZE_NAMED_PROPS || !1, ms = B.KEEP_CONTENT !== !1, nt = B.IN_PLACE || !1, oi = uc(B.ALLOWED_URI_REGEXP) ? B.ALLOWED_URI_REGEXP : pa, Ke = typeof B.NAMESPACE == "string" ? B.NAMESPACE : OA, Es = Y(B, "MATHML_TEXT_INTEGRATION_POINTS") && B.MATHML_TEXT_INTEGRATION_POINTS && typeof B.MATHML_TEXT_INTEGRATION_POINTS == "object" ? mA(B.MATHML_TEXT_INTEGRATION_POINTS) : v({}, ["mi", "mo", "mn", "ms", "mtext"]), ys = Y(B, "HTML_INTEGRATION_POINTS") && B.HTML_INTEGRATION_POINTS && typeof B.HTML_INTEGRATION_POINTS == "object" ? mA(B.HTML_INTEGRATION_POINTS) : v({}, ["annotation-xml"]);
    const f = Y(B, "CUSTOM_ELEMENT_HANDLING") && B.CUSTOM_ELEMENT_HANDLING && typeof B.CUSTOM_ELEMENT_HANDLING == "object" ? mA(B.CUSTOM_ELEMENT_HANDLING) : Ve(null);
    if (q = Ve(null), Y(f, "tagNameCheck") && Qi(f.tagNameCheck) && (q.tagNameCheck = f.tagNameCheck), Y(f, "attributeNameCheck") && Qi(f.attributeNameCheck) && (q.attributeNameCheck = f.attributeNameCheck), Y(f, "allowCustomizedBuiltInElements") && typeof f.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = f.allowCustomizedBuiltInElements), de && (ws = !1), jt && (ke = !0), De && (oA = v({}, Ri), cA = Ve(null), De.html === !0 && (v(oA, Mi), v(cA, Oi)), De.svg === !0 && (v(oA, Ls), v(cA, Ks), v(cA, sr)), De.svgFilters === !0 && (v(oA, ks), v(cA, Ks), v(cA, sr)), De.mathMl === !0 && (v(oA, Ds), v(cA, _i), v(cA, sr))), ee.tagCheck = null, ee.attributeCheck = null, Y(B, "ADD_TAGS") && (typeof B.ADD_TAGS == "function" ? ee.tagCheck = B.ADD_TAGS : fA(B.ADD_TAGS) && (oA === ai && (oA = mA(oA)), v(oA, B.ADD_TAGS, iA))), Y(B, "ADD_ATTR") && (typeof B.ADD_ATTR == "function" ? ee.attributeCheck = B.ADD_ATTR : fA(B.ADD_ATTR) && (cA === li && (cA = mA(cA)), v(cA, B.ADD_ATTR, iA))), Y(B, "ADD_URI_SAFE_ATTR") && fA(B.ADD_URI_SAFE_ATTR) && v(Fs, B.ADD_URI_SAFE_ATTR, iA), Y(B, "FORBID_CONTENTS") && fA(B.FORBID_CONTENTS) && (RA === Us && (RA = mA(RA)), v(RA, B.FORBID_CONTENTS, iA)), Y(B, "ADD_FORBID_CONTENTS") && fA(B.ADD_FORBID_CONTENTS) && (RA === Us && (RA = mA(RA)), v(RA, B.ADD_FORBID_CONTENTS, iA)), ms && (oA["#text"] = !0), pe && v(oA, ["html", "head", "body"]), oA.table && (v(oA, ["tbody"]), delete rt.tbody), B.TRUSTED_TYPES_POLICY) {
      if (typeof B.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw rr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof B.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw rr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      E = B.TRUSTED_TYPES_POLICY, b = E.createHTML("");
    } else
      E === void 0 && (E = bc(g, s)), E !== null && typeof b == "string" && (b = E.createHTML(""));
    QA && QA(B), Me = B;
  }, Ci = v({}, [...Ls, ...ks, ...gc]), mi = v({}, [...Ds, ...dc]), ql = function(B) {
    let f = x(B);
    (!f || !f.tagName) && (f = {
      namespaceURI: Ke,
      tagName: "template"
    });
    const F = Ct(B.tagName), G = Ct(f.tagName);
    return bs[B.namespaceURI] ? B.namespaceURI === tr ? f.namespaceURI === OA ? F === "svg" : f.namespaceURI === er ? F === "svg" && (G === "annotation-xml" || Es[G]) : !!Ci[F] : B.namespaceURI === er ? f.namespaceURI === OA ? F === "math" : f.namespaceURI === tr ? F === "math" && ys[G] : !!mi[F] : B.namespaceURI === OA ? f.namespaceURI === tr && !ys[G] || f.namespaceURI === er && !Es[G] ? !1 : !mi[F] && (Wl[F] || !Ci[F]) : !!(it === "application/xhtml+xml" && bs[B.namespaceURI]) : !1;
  }, LA = function(B) {
    at(A.removed, {
      element: B
    });
    try {
      x(B).removeChild(B);
    } catch {
      U(B);
    }
  }, fe = function(B, f) {
    try {
      at(A.removed, {
        attribute: f.getAttributeNode(B),
        from: f
      });
    } catch {
      at(A.removed, {
        attribute: null,
        from: f
      });
    }
    if (f.removeAttribute(B), B === "is")
      if (ke || jt)
        try {
          LA(f);
        } catch {
        }
      else
        try {
          f.setAttribute(B, "");
        } catch {
        }
  }, Ui = function(B) {
    let f = null, F = null;
    if (Cs)
      B = "<remove></remove>" + B;
    else {
      const eA = Li(B, /^[\r\n\t ]+/);
      F = eA && eA[0];
    }
    it === "application/xhtml+xml" && Ke === OA && (B = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + B + "</body></html>");
    const G = E ? E.createHTML(B) : B;
    if (Ke === OA)
      try {
        f = new u().parseFromString(G, it);
      } catch {
      }
    if (!f || !f.documentElement) {
      f = K.createDocument(Ke, "template", null);
      try {
        f.documentElement.innerHTML = xs ? b : G;
      } catch {
      }
    }
    const gA = f.body || f.documentElement;
    return B && F && gA.insertBefore(e.createTextNode(F), gA.childNodes[0] || null), Ke === OA ? X.call(f, pe ? "html" : "body")[0] : pe ? f.documentElement : gA;
  }, Fi = function(B) {
    return W.call(
      B.ownerDocument || B,
      B,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Hs = function(B) {
    return B instanceof h && (typeof B.nodeName != "string" || typeof B.textContent != "string" || typeof B.removeChild != "function" || !(B.attributes instanceof l) || typeof B.removeAttribute != "function" || typeof B.setAttribute != "function" || typeof B.namespaceURI != "string" || typeof B.insertBefore != "function" || typeof B.hasChildNodes != "function");
  }, Ts = function(B) {
    return typeof o == "function" && B instanceof o;
  };
  function zA(I, B, f) {
    ot(I, (F) => {
      F.call(A, B, f, Me);
    });
  }
  const xi = function(B) {
    let f = null;
    if (zA(nA.beforeSanitizeElements, B, null), Hs(B))
      return LA(B), !0;
    const F = iA(B.nodeName);
    if (zA(nA.uponSanitizeElement, B, {
      tagName: F,
      allowedTags: oA
    }), st && B.hasChildNodes() && !Ts(B.firstElementChild) && hA(/<[/\w!]/g, B.innerHTML) && hA(/<[/\w!]/g, B.textContent) || st && B.namespaceURI === OA && F === "style" && Ts(B.firstElementChild) || B.nodeType === ct.progressingInstruction || st && B.nodeType === ct.comment && hA(/<[/\w]/g, B.data))
      return LA(B), !0;
    if (rt[F] || !(ee.tagCheck instanceof Function && ee.tagCheck(F)) && !oA[F]) {
      if (!rt[F] && Ei(F) && (q.tagNameCheck instanceof RegExp && hA(q.tagNameCheck, F) || q.tagNameCheck instanceof Function && q.tagNameCheck(F)))
        return !1;
      if (ms && !RA[F]) {
        const G = x(B) || B.parentNode, gA = C(B) || B.childNodes;
        if (gA && G) {
          const eA = gA.length;
          for (let CA = eA - 1; CA >= 0; --CA) {
            const yA = p(gA[CA], !0);
            G.insertBefore(yA, y(B));
          }
        }
      }
      return LA(B), !0;
    }
    return B instanceof a && !ql(B) || (F === "noscript" || F === "noembed" || F === "noframes") && hA(/<\/no(script|embed|frames)/i, B.innerHTML) ? (LA(B), !0) : (de && B.nodeType === ct.text && (f = B.textContent, ot([vA, XA, ge], (G) => {
      f = Re(f, G, " ");
    }), B.textContent !== f && (at(A.removed, {
      element: B.cloneNode()
    }), B.textContent = f)), zA(nA.afterSanitizeElements, B, null), !1);
  }, bi = function(B, f, F) {
    if (qt[f] || ui && (f === "id" || f === "name") && (F in e || F in Zl))
      return !1;
    const G = cA[f] || ee.attributeCheck instanceof Function && ee.attributeCheck(f, B);
    if (!(ws && !qt[f] && hA(Zt, f))) {
      if (!(ci && hA(Gl, f))) {
        if (!G || qt[f]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ei(B) && (q.tagNameCheck instanceof RegExp && hA(q.tagNameCheck, B) || q.tagNameCheck instanceof Function && q.tagNameCheck(B)) && (q.attributeNameCheck instanceof RegExp && hA(q.attributeNameCheck, f) || q.attributeNameCheck instanceof Function && q.attributeNameCheck(f, B)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            f === "is" && q.allowCustomizedBuiltInElements && (q.tagNameCheck instanceof RegExp && hA(q.tagNameCheck, F) || q.tagNameCheck instanceof Function && q.tagNameCheck(F)))
          ) return !1;
        } else if (!Fs[f]) {
          if (!hA(oi, Re(F, ii, ""))) {
            if (!((f === "src" || f === "xlink:href" || f === "href") && B !== "script" && ki(F, "data:") === 0 && pi[B])) {
              if (!(hi && !hA(Vl, Re(F, ii, "")))) {
                if (F)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, jl = v({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ei = function(B) {
    return !jl[Ct(B)] && hA(Xl, B);
  }, yi = function(B) {
    zA(nA.beforeSanitizeAttributes, B, null);
    const {
      attributes: f
    } = B;
    if (!f || Hs(B))
      return;
    const F = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: cA,
      forceKeepAttr: void 0
    };
    let G = f.length;
    for (; G--; ) {
      const gA = f[G], {
        name: eA,
        namespaceURI: CA,
        value: yA
      } = gA, kA = iA(eA), Ss = yA;
      let aA = eA === "value" ? Ss : oc(Ss);
      if (F.attrName = kA, F.attrValue = aA, F.keepAttr = !0, F.forceKeepAttr = void 0, zA(nA.uponSanitizeAttribute, B, F), aA = F.attrValue, gi && (kA === "id" || kA === "name") && ki(aA, di) !== 0 && (fe(eA, B), aA = di + aA), st && hA(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, aA)) {
        fe(eA, B);
        continue;
      }
      if (kA === "attributename" && Li(aA, "href")) {
        fe(eA, B);
        continue;
      }
      if (F.forceKeepAttr)
        continue;
      if (!F.keepAttr) {
        fe(eA, B);
        continue;
      }
      if (!Bi && hA(/\/>/i, aA)) {
        fe(eA, B);
        continue;
      }
      de && ot([vA, XA, ge], (Ti) => {
        aA = Re(aA, Ti, " ");
      });
      const Hi = iA(B.nodeName);
      if (!bi(Hi, kA, aA)) {
        fe(eA, B);
        continue;
      }
      if (E && typeof g == "object" && typeof g.getAttributeType == "function" && !CA)
        switch (g.getAttributeType(Hi, kA)) {
          case "TrustedHTML": {
            aA = E.createHTML(aA);
            break;
          }
          case "TrustedScriptURL": {
            aA = E.createScriptURL(aA);
            break;
          }
        }
      if (aA !== Ss)
        try {
          CA ? B.setAttributeNS(CA, eA, aA) : B.setAttribute(eA, aA), Hs(B) ? LA(B) : vi(A.removed);
        } catch {
          fe(eA, B);
        }
    }
    zA(nA.afterSanitizeAttributes, B, null);
  }, Ii = function(B) {
    let f = null;
    const F = Fi(B);
    for (zA(nA.beforeSanitizeShadowDOM, B, null); f = F.nextNode(); )
      zA(nA.uponSanitizeShadowNode, f, null), xi(f), yi(f), f.content instanceof n && Ii(f.content);
    zA(nA.afterSanitizeShadowDOM, B, null);
  };
  return A.sanitize = function(I) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f = null, F = null, G = null, gA = null;
    if (xs = !I, xs && (I = "<!-->"), typeof I != "string" && !Ts(I) && (I = Bc(I), typeof I != "string"))
      throw rr("dirty is not a string, aborting");
    if (!A.isSupported)
      return I;
    if (Qs || Is(B), A.removed = [], typeof I == "string" && (nt = !1), nt) {
      const yA = I.nodeName;
      if (typeof yA == "string") {
        const kA = iA(yA);
        if (!oA[kA] || rt[kA])
          throw rr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (I instanceof o)
      f = Ui("<!---->"), F = f.ownerDocument.importNode(I, !0), F.nodeType === ct.element && F.nodeName === "BODY" || F.nodeName === "HTML" ? f = F : f.appendChild(F);
    else {
      if (!ke && !de && !pe && // eslint-disable-next-line unicorn/prefer-includes
      I.indexOf("<") === -1)
        return E && Ar ? E.createHTML(I) : I;
      if (f = Ui(I), !f)
        return ke ? null : Ar ? b : "";
    }
    f && Cs && LA(f.firstChild);
    const eA = Fi(nt ? I : f);
    for (; G = eA.nextNode(); )
      xi(G), yi(G), G.content instanceof n && Ii(G.content);
    if (nt)
      return I;
    if (ke) {
      if (de) {
        f.normalize();
        let yA = f.innerHTML;
        ot([vA, XA, ge], (kA) => {
          yA = Re(yA, kA, " ");
        }), f.innerHTML = yA;
      }
      if (jt)
        for (gA = lA.call(f.ownerDocument); f.firstChild; )
          gA.appendChild(f.firstChild);
      else
        gA = f;
      return (cA.shadowroot || cA.shadowrootmode) && (gA = Ae.call(r, gA, !0)), gA;
    }
    let CA = pe ? f.outerHTML : f.innerHTML;
    return pe && oA["!doctype"] && f.ownerDocument && f.ownerDocument.doctype && f.ownerDocument.doctype.name && hA(fa, f.ownerDocument.doctype.name) && (CA = "<!DOCTYPE " + f.ownerDocument.doctype.name + `>
` + CA), de && ot([vA, XA, ge], (yA) => {
      CA = Re(CA, yA, " ");
    }), E && Ar ? E.createHTML(CA) : CA;
  }, A.setConfig = function() {
    let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Is(I), Qs = !0;
  }, A.clearConfig = function() {
    Me = null, Qs = !1;
  }, A.isValidAttribute = function(I, B, f) {
    Me || Is({});
    const F = iA(I), G = iA(B);
    return bi(F, G, f);
  }, A.addHook = function(I, B) {
    typeof B == "function" && at(nA[I], B);
  }, A.removeHook = function(I, B) {
    if (B !== void 0) {
      const f = nc(nA[I], B);
      return f === -1 ? void 0 : ic(nA[I], f, 1)[0];
    }
    return vi(nA[I]);
  }, A.removeHooks = function(I) {
    nA[I] = [];
  }, A.removeAllHooks = function() {
    nA = $i();
  }, A;
}
var Qa = wa();
/*!
 * html2canvas-pro 2.0.2 <https://yorickshan.github.io/html2canvas-pro/>
 * Copyright (c) 2024-present yorickshan and html2canvas-pro contributors
 * Released under MIT License
 */
class pA {
  constructor(A, e, r, s) {
    this.left = A, this.top = e, this.width = r, this.height = s;
  }
  add(A, e, r, s) {
    return new pA(this.left + A, this.top + e, this.width + r, this.height + s);
  }
  static fromClientRect(A, e) {
    return new pA(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height);
  }
  static fromDOMRectList(A, e) {
    const r = Array.from(e);
    let s = r.find((n) => n.width !== 0);
    return s || (s = r.find((n) => n.height !== 0)), !s && r.length > 0 && (s = r[0]), s ? new pA(s.left + A.windowBounds.left, s.top + A.windowBounds.top, s.width, s.height) : pA.EMPTY;
  }
}
pA.EMPTY = new pA(0, 0, 0, 0);
const As = (t, A) => pA.fromClientRect(t, A.getBoundingClientRect()), Ec = (t) => {
  const A = t.body, e = t.documentElement;
  if (!A || !e)
    throw new Error("Unable to get document size");
  const r = Math.max(Math.max(A.scrollWidth, e.scrollWidth), Math.max(A.offsetWidth, e.offsetWidth), Math.max(A.clientWidth, e.clientWidth)), s = Math.max(Math.max(A.scrollHeight, e.scrollHeight), Math.max(A.offsetHeight, e.offsetHeight), Math.max(A.clientHeight, e.clientHeight));
  return new pA(0, 0, r, s);
};
var es = function(t) {
  for (var A = [], e = 0, r = t.length; e < r; ) {
    var s = t.charCodeAt(e++);
    if (s >= 55296 && s <= 56319 && e < r) {
      var n = t.charCodeAt(e++);
      (n & 64512) === 56320 ? A.push(((s & 1023) << 10) + (n & 1023) + 65536) : (A.push(s), e--);
    } else
      A.push(s);
  }
  return A;
}, AA = function() {
  for (var t = [], A = 0; A < arguments.length; A++)
    t[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, t);
  var e = t.length;
  if (!e)
    return "";
  for (var r = [], s = -1, n = ""; ++s < e; ) {
    var i = t[s];
    i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (s + 1 === e || r.length > 16384) && (n += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return n;
}, Pi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", yc = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var nr = 0; nr < Pi.length; nr++)
  yc[Pi.charCodeAt(nr)] = nr;
var Gi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ir = 0; ir < Gi.length; ir++)
  mt[Gi.charCodeAt(ir)] = ir;
var Ic = function(t) {
  var A = t.length * 0.75, e = t.length, r, s = 0, n, i, o, a;
  t[t.length - 1] === "=" && (A--, t[t.length - 2] === "=" && A--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), l = Array.isArray(c) ? c : new Uint8Array(c);
  for (r = 0; r < e; r += 4)
    n = mt[t.charCodeAt(r)], i = mt[t.charCodeAt(r + 1)], o = mt[t.charCodeAt(r + 2)], a = mt[t.charCodeAt(r + 3)], l[s++] = n << 2 | i >> 4, l[s++] = (i & 15) << 4 | o >> 2, l[s++] = (o & 3) << 6 | a & 63;
  return c;
}, Hc = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 2)
    e.push(t[r + 1] << 8 | t[r]);
  return e;
}, Tc = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 4)
    e.push(t[r + 3] << 24 | t[r + 2] << 16 | t[r + 1] << 8 | t[r]);
  return e;
}, be = 5, _n = 11, Ms = 2, Sc = _n - be, Ca = 65536 >> be, vc = 1 << be, Rs = vc - 1, Lc = 1024 >> be, kc = Ca + Lc, Dc = kc, Kc = 32, Mc = Dc + Kc, Rc = 65536 >> _n, Oc = 1 << Sc, _c = Oc - 1, Vi = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, Nc = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, $c = function(t, A) {
  var e = Ic(t), r = Array.isArray(e) ? Tc(e) : new Uint32Array(e), s = Array.isArray(e) ? Hc(e) : new Uint16Array(e), n = 24, i = Vi(s, n / 2, r[4] / 2), o = r[5] === 2 ? Vi(s, (n + r[4]) / 2) : Nc(r, Math.ceil((n + r[4]) / 4));
  return new Pc(r[0], r[1], r[2], r[3], i, o);
}, Pc = (
  /** @class */
  (function() {
    function t(A, e, r, s, n, i) {
      this.initialValue = A, this.errorValue = e, this.highStart = r, this.highValueIndex = s, this.index = n, this.data = i;
    }
    return t.prototype.get = function(A) {
      var e;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return e = this.index[A >> be], e = (e << Ms) + (A & Rs), this.data[e];
        if (A <= 65535)
          return e = this.index[Ca + (A - 55296 >> be)], e = (e << Ms) + (A & Rs), this.data[e];
        if (A < this.highStart)
          return e = Mc - Rc + (A >> _n), e = this.index[e], e += A >> be & _c, e = this.index[e], e = (e << Ms) + (A & Rs), this.data[e];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, t;
  })()
), Xi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Gc = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var or = 0; or < Xi.length; or++)
  Gc[Xi.charCodeAt(or)] = or;
var Vc = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", zi = 50, Xc = 1, ma = 2, Ua = 3, zc = 4, Wc = 5, Wi = 7, Fa = 8, Ji = 9, oe = 10, hn = 11, Yi = 12, Bn = 13, Jc = 14, Ut = 15, un = 16, ar = 17, ht = 18, Yc = 19, Zi = 20, gn = 21, Bt = 22, Os = 23, Oe = 24, bA = 25, Ft = 26, xt = 27, _e = 28, Zc = 29, Ce = 30, qc = 31, lr = 32, cr = 33, dn = 34, pn = 35, fn = 36, Ot = 37, wn = 38, Sr = 39, vr = 40, _s = 41, xa = 42, jc = 43, Ah = [9001, 65288], ba = "!", D = "×", hr = "÷", Qn = $c(Vc), WA = [Ce, fn], Cn = [Xc, ma, Ua, Wc], Ea = [oe, Fa], qi = [xt, Ft], eh = Cn.concat(Ea), ji = [wn, Sr, vr, dn, pn], th = [Ut, Bn], rh = function(t, A) {
  A === void 0 && (A = "strict");
  var e = [], r = [], s = [];
  return t.forEach(function(n, i) {
    var o = Qn.get(n);
    if (o > zi ? (s.push(!0), o -= zi) : s.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(n) !== -1)
      return r.push(i), e.push(un);
    if (o === zc || o === hn) {
      if (i === 0)
        return r.push(i), e.push(Ce);
      var a = e[i - 1];
      return eh.indexOf(a) === -1 ? (r.push(r[i - 1]), e.push(a)) : (r.push(i), e.push(Ce));
    }
    if (r.push(i), o === qc)
      return e.push(A === "strict" ? gn : Ot);
    if (o === xa || o === Zc)
      return e.push(Ce);
    if (o === jc)
      return n >= 131072 && n <= 196605 || n >= 196608 && n <= 262141 ? e.push(Ot) : e.push(Ce);
    e.push(o);
  }), [r, e, s];
}, Ns = function(t, A, e, r) {
  var s = r[e];
  if (Array.isArray(t) ? t.indexOf(s) !== -1 : t === s)
    for (var n = e; n <= r.length; ) {
      n++;
      var i = r[n];
      if (i === A)
        return !0;
      if (i !== oe)
        break;
    }
  if (s === oe)
    for (var n = e; n > 0; ) {
      n--;
      var o = r[n];
      if (Array.isArray(t) ? t.indexOf(o) !== -1 : t === o)
        for (var a = e; a <= r.length; ) {
          a++;
          var i = r[a];
          if (i === A)
            return !0;
          if (i !== oe)
            break;
        }
      if (o !== oe)
        break;
    }
  return !1;
}, Ao = function(t, A) {
  for (var e = t; e >= 0; ) {
    var r = A[e];
    if (r === oe)
      e--;
    else
      return r;
  }
  return 0;
}, sh = function(t, A, e, r, s) {
  if (e[r] === 0)
    return D;
  var n = r - 1;
  if (Array.isArray(s) && s[n] === !0)
    return D;
  var i = n - 1, o = n + 1, a = A[n], c = i >= 0 ? A[i] : 0, l = A[o];
  if (a === ma && l === Ua)
    return D;
  if (Cn.indexOf(a) !== -1)
    return ba;
  if (Cn.indexOf(l) !== -1 || Ea.indexOf(l) !== -1)
    return D;
  if (Ao(n, A) === Fa)
    return hr;
  if (Qn.get(t[n]) === hn || (a === lr || a === cr) && Qn.get(t[o]) === hn || a === Wi || l === Wi || a === Ji || [oe, Bn, Ut].indexOf(a) === -1 && l === Ji || [ar, ht, Yc, Oe, _e].indexOf(l) !== -1 || Ao(n, A) === Bt || Ns(Os, Bt, n, A) || Ns([ar, ht], gn, n, A) || Ns(Yi, Yi, n, A))
    return D;
  if (a === oe)
    return hr;
  if (a === Os || l === Os)
    return D;
  if (l === un || a === un)
    return hr;
  if ([Bn, Ut, gn].indexOf(l) !== -1 || a === Jc || c === fn && th.indexOf(a) !== -1 || a === _e && l === fn || l === Zi || WA.indexOf(l) !== -1 && a === bA || WA.indexOf(a) !== -1 && l === bA || a === xt && [Ot, lr, cr].indexOf(l) !== -1 || [Ot, lr, cr].indexOf(a) !== -1 && l === Ft || WA.indexOf(a) !== -1 && qi.indexOf(l) !== -1 || qi.indexOf(a) !== -1 && WA.indexOf(l) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [xt, Ft].indexOf(a) !== -1 && (l === bA || [Bt, Ut].indexOf(l) !== -1 && A[o + 1] === bA) || // ( OP | HY ) × NU
  [Bt, Ut].indexOf(a) !== -1 && l === bA || // NU ×	(NU | SY | IS)
  a === bA && [bA, _e, Oe].indexOf(l) !== -1)
    return D;
  if ([bA, _e, Oe, ar, ht].indexOf(l) !== -1)
    for (var h = n; h >= 0; ) {
      var u = A[h];
      if (u === bA)
        return D;
      if ([_e, Oe].indexOf(u) !== -1)
        h--;
      else
        break;
    }
  if ([xt, Ft].indexOf(l) !== -1)
    for (var h = [ar, ht].indexOf(a) !== -1 ? i : n; h >= 0; ) {
      var u = A[h];
      if (u === bA)
        return D;
      if ([_e, Oe].indexOf(u) !== -1)
        h--;
      else
        break;
    }
  if (wn === a && [wn, Sr, dn, pn].indexOf(l) !== -1 || [Sr, dn].indexOf(a) !== -1 && [Sr, vr].indexOf(l) !== -1 || [vr, pn].indexOf(a) !== -1 && l === vr || ji.indexOf(a) !== -1 && [Zi, Ft].indexOf(l) !== -1 || ji.indexOf(l) !== -1 && a === xt || WA.indexOf(a) !== -1 && WA.indexOf(l) !== -1 || a === Oe && WA.indexOf(l) !== -1 || WA.concat(bA).indexOf(a) !== -1 && l === Bt && Ah.indexOf(t[o]) === -1 || WA.concat(bA).indexOf(l) !== -1 && a === ht)
    return D;
  if (a === _s && l === _s) {
    for (var g = e[n], d = 1; g > 0 && (g--, A[g] === _s); )
      d++;
    if (d % 2 !== 0)
      return D;
  }
  return a === lr && l === cr ? D : hr;
}, nh = function(t, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var e = rh(t, A.lineBreak), r = e[0], s = e[1], n = e[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (s = s.map(function(o) {
    return [bA, Ce, xa].indexOf(o) !== -1 ? Ot : o;
  }));
  var i = A.wordBreak === "keep-all" ? n.map(function(o, a) {
    return o && t[a] >= 19968 && t[a] <= 40959;
  }) : void 0;
  return [r, s, i];
}, ih = (
  /** @class */
  (function() {
    function t(A, e, r, s) {
      this.codePoints = A, this.required = e === ba, this.start = r, this.end = s;
    }
    return t.prototype.slice = function() {
      return AA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, t;
  })()
), oh = function(t, A) {
  var e = es(t), r = nh(e, A), s = r[0], n = r[1], i = r[2], o = e.length, a = 0, c = 0;
  return {
    next: function() {
      if (c >= o)
        return { done: !0, value: null };
      for (var l = D; c < o && (l = sh(e, n, s, ++c, i)) === D; )
        ;
      if (l !== D || c === o) {
        var h = new ih(e, l, a, c);
        return a = c, { value: h, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
};
const ah = 1, lh = 2, et = 4, eo = 8, Kr = 10, to = 47, Ht = 92, ch = 9, hh = 32, Br = 34, ut = 61, Bh = 35, uh = 36, gh = 37, ur = 39, gr = 40, gt = 41, dh = 95, UA = 45, ph = 33, fh = 60, wh = 62, Qh = 64, Ch = 91, mh = 93, Uh = 61, Fh = 123, dr = 63, xh = 125, ro = 124, bh = 126, Eh = 128, so = 65533, $s = 42, me = 43, yh = 44, Ih = 58, Hh = 59, _t = 46, Th = 0, Sh = 8, vh = 11, Lh = 14, kh = 31, Dh = 127, _A = -1, ya = 48, Ia = 97, Ha = 101, Kh = 102, Mh = 117, Rh = 122, Ta = 65, Sa = 69, va = 70, Oh = 85, _h = 90, dA = (t) => t >= ya && t <= 57, Nh = (t) => t >= 55296 && t <= 57343, Ne = (t) => dA(t) || t >= Ta && t <= va || t >= Ia && t <= Kh, $h = (t) => t >= Ia && t <= Rh, Ph = (t) => t >= Ta && t <= _h, Gh = (t) => $h(t) || Ph(t), Vh = (t) => t >= Eh, pr = (t) => t === Kr || t === ch || t === hh, Mr = (t) => Gh(t) || Vh(t) || t === dh, no = (t) => Mr(t) || dA(t) || t === UA, Xh = (t) => t >= Th && t <= Sh || t === vh || t >= Lh && t <= kh || t === Dh, se = (t, A) => t !== Ht ? !1 : A !== Kr, fr = (t, A, e) => t === UA ? Mr(A) || se(A, e) : Mr(t) ? !0 : !!(t === Ht && se(t, A)), Ps = (t, A, e) => t === me || t === UA ? dA(A) ? !0 : A === _t && dA(e) : dA(t === _t ? A : t), zh = (t) => {
  let A = 0, e = 1;
  (t[A] === me || t[A] === UA) && (t[A] === UA && (e = -1), A++);
  const r = [];
  for (; dA(t[A]); )
    r.push(t[A++]);
  const s = r.length ? parseInt(AA(...r), 10) : 0;
  t[A] === _t && A++;
  const n = [];
  for (; dA(t[A]); )
    n.push(t[A++]);
  const i = n.length, o = i ? parseInt(AA(...n), 10) : 0;
  (t[A] === Sa || t[A] === Ha) && A++;
  let a = 1;
  (t[A] === me || t[A] === UA) && (t[A] === UA && (a = -1), A++);
  const c = [];
  for (; dA(t[A]); )
    c.push(t[A++]);
  const l = c.length ? parseInt(AA(...c), 10) : 0;
  return e * (s + o * Math.pow(10, -i)) * Math.pow(10, a * l);
}, Wh = {
  type: 2
  /* TokenType.LEFT_PARENTHESIS_TOKEN */
}, Jh = {
  type: 3
  /* TokenType.RIGHT_PARENTHESIS_TOKEN */
}, Yh = {
  type: 4
  /* TokenType.COMMA_TOKEN */
}, Zh = {
  type: 13
  /* TokenType.SUFFIX_MATCH_TOKEN */
}, qh = {
  type: 8
  /* TokenType.PREFIX_MATCH_TOKEN */
}, jh = {
  type: 21
  /* TokenType.COLUMN_TOKEN */
}, AB = {
  type: 9
  /* TokenType.DASH_MATCH_TOKEN */
}, eB = {
  type: 10
  /* TokenType.INCLUDE_MATCH_TOKEN */
}, tB = {
  type: 11
  /* TokenType.LEFT_CURLY_BRACKET_TOKEN */
}, rB = {
  type: 12
  /* TokenType.RIGHT_CURLY_BRACKET_TOKEN */
}, sB = {
  type: 14
  /* TokenType.SUBSTRING_MATCH_TOKEN */
}, wr = {
  type: 23
  /* TokenType.BAD_URL_TOKEN */
}, nB = {
  type: 1
  /* TokenType.BAD_STRING_TOKEN */
}, iB = {
  type: 25
  /* TokenType.CDO_TOKEN */
}, oB = {
  type: 24
  /* TokenType.CDC_TOKEN */
}, aB = {
  type: 26
  /* TokenType.COLON_TOKEN */
}, lB = {
  type: 27
  /* TokenType.SEMICOLON_TOKEN */
}, cB = {
  type: 28
  /* TokenType.LEFT_SQUARE_BRACKET_TOKEN */
}, hB = {
  type: 29
  /* TokenType.RIGHT_SQUARE_BRACKET_TOKEN */
}, BB = {
  type: 31
  /* TokenType.WHITESPACE_TOKEN */
}, mn = {
  type: 32
  /* TokenType.EOF_TOKEN */
};
class La {
  constructor() {
    this._value = [];
  }
  write(A) {
    this._value = this._value.concat(es(A));
  }
  read() {
    const A = [];
    let e = this.consumeToken();
    for (; e !== mn; )
      A.push(e), e = this.consumeToken();
    return A;
  }
  consumeToken() {
    const A = this.consumeCodePoint();
    switch (A) {
      case Br:
        return this.consumeStringToken(Br);
      case Bh:
        const e = this.peekCodePoint(0), r = this.peekCodePoint(1), s = this.peekCodePoint(2);
        if (no(e) || se(r, s)) {
          const g = fr(e, r, s) ? lh : ah;
          return { type: 5, value: this.consumeName(), flags: g };
        }
        break;
      case uh:
        if (this.peekCodePoint(0) === ut)
          return this.consumeCodePoint(), Zh;
        break;
      case ur:
        return this.consumeStringToken(ur);
      case gr:
        return Wh;
      case gt:
        return Jh;
      case $s:
        if (this.peekCodePoint(0) === ut)
          return this.consumeCodePoint(), sB;
        break;
      case me:
        if (Ps(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case yh:
        return Yh;
      case UA:
        const n = A, i = this.peekCodePoint(0), o = this.peekCodePoint(1);
        if (Ps(n, i, o))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (fr(n, i, o))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (i === UA && o === wh)
          return this.consumeCodePoint(), this.consumeCodePoint(), oB;
        break;
      case _t:
        if (Ps(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case to:
        if (this.peekCodePoint(0) === $s)
          for (this.consumeCodePoint(); ; ) {
            let g = this.consumeCodePoint();
            if (g === $s && (g = this.consumeCodePoint(), g === to))
              return this.consumeToken();
            if (g === _A)
              return this.consumeToken();
          }
        break;
      case Ih:
        return aB;
      case Hh:
        return lB;
      case fh:
        if (this.peekCodePoint(0) === ph && this.peekCodePoint(1) === UA && this.peekCodePoint(2) === UA)
          return this.consumeCodePoint(), this.consumeCodePoint(), iB;
        break;
      case Qh:
        const a = this.peekCodePoint(0), c = this.peekCodePoint(1), l = this.peekCodePoint(2);
        if (fr(a, c, l))
          return { type: 7, value: this.consumeName() };
        break;
      case Ch:
        return cB;
      case Ht:
        if (se(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case mh:
        return hB;
      case Uh:
        if (this.peekCodePoint(0) === ut)
          return this.consumeCodePoint(), qh;
        break;
      case Fh:
        return tB;
      case xh:
        return rB;
      case Mh:
      case Oh:
        const h = this.peekCodePoint(0), u = this.peekCodePoint(1);
        return h === me && (Ne(u) || u === dr) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case ro:
        if (this.peekCodePoint(0) === ut)
          return this.consumeCodePoint(), AB;
        if (this.peekCodePoint(0) === ro)
          return this.consumeCodePoint(), jh;
        break;
      case bh:
        if (this.peekCodePoint(0) === ut)
          return this.consumeCodePoint(), eB;
        break;
      case _A:
        return mn;
    }
    return pr(A) ? (this.consumeWhiteSpace(), BB) : dA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Mr(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: AA(A) };
  }
  consumeCodePoint() {
    const A = this._value.shift();
    return typeof A > "u" ? -1 : A;
  }
  reconsumeCodePoint(A) {
    this._value.unshift(A);
  }
  peekCodePoint(A) {
    return A >= this._value.length ? -1 : this._value[A];
  }
  consumeUnicodeRangeToken() {
    const A = [];
    let e = this.consumeCodePoint();
    for (; Ne(e) && A.length < 6; )
      A.push(e), e = this.consumeCodePoint();
    let r = !1;
    for (; e === dr && A.length < 6; )
      A.push(e), e = this.consumeCodePoint(), r = !0;
    if (r) {
      const n = parseInt(AA(...A.map((o) => o === dr ? ya : o)), 16), i = parseInt(AA(...A.map((o) => o === dr ? va : o)), 16);
      return { type: 30, start: n, end: i };
    }
    const s = parseInt(AA(...A), 16);
    if (this.peekCodePoint(0) === UA && Ne(this.peekCodePoint(1))) {
      this.consumeCodePoint(), e = this.consumeCodePoint();
      const n = [];
      for (; Ne(e) && n.length < 6; )
        n.push(e), e = this.consumeCodePoint();
      const i = parseInt(AA(...n), 16);
      return { type: 30, start: s, end: i };
    } else
      return { type: 30, start: s, end: s };
  }
  consumeIdentLikeToken() {
    const A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === gr ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === gr ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }
  consumeUrlToken() {
    const A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === _A)
      return { type: 22, value: "" };
    const e = this.peekCodePoint(0);
    if (e === ur || e === Br) {
      const r = this.consumeStringToken(this.consumeCodePoint());
      return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === _A || this.peekCodePoint(0) === gt) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), wr);
    }
    for (; ; ) {
      const r = this.consumeCodePoint();
      if (r === _A || r === gt)
        return { type: 22, value: AA(...A) };
      if (pr(r))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === _A || this.peekCodePoint(0) === gt ? (this.consumeCodePoint(), { type: 22, value: AA(...A) }) : (this.consumeBadUrlRemnants(), wr);
      if (r === Br || r === ur || r === gr || Xh(r))
        return this.consumeBadUrlRemnants(), wr;
      if (r === Ht)
        if (se(r, this.peekCodePoint(0)))
          A.push(this.consumeEscapedCodePoint());
        else
          return this.consumeBadUrlRemnants(), wr;
      else
        A.push(r);
    }
  }
  consumeWhiteSpace() {
    for (; pr(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }
  consumeBadUrlRemnants() {
    for (; ; ) {
      const A = this.consumeCodePoint();
      if (A === gt || A === _A)
        return;
      se(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }
  consumeStringSlice(A) {
    let r = "";
    for (; A > 0; ) {
      const s = Math.min(5e4, A);
      r += AA(...this._value.splice(0, s)), A -= s;
    }
    return this._value.shift(), r;
  }
  consumeStringToken(A) {
    let e = "", r = 0;
    do {
      const s = this._value[r];
      if (s === _A || s === void 0 || s === A)
        return e += this.consumeStringSlice(r), { type: 0, value: e };
      if (s === Kr)
        return this._value.splice(0, r), nB;
      if (s === Ht) {
        const n = this._value[r + 1];
        n !== _A && n !== void 0 && (n === Kr ? (e += this.consumeStringSlice(r), r = -1, this._value.shift()) : se(s, n) && (e += this.consumeStringSlice(r), e += AA(this.consumeEscapedCodePoint()), r = -1));
      }
      r++;
    } while (!0);
  }
  consumeNumber() {
    const A = [];
    let e = et, r = this.peekCodePoint(0);
    for ((r === me || r === UA) && A.push(this.consumeCodePoint()); dA(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    r = this.peekCodePoint(0);
    let s = this.peekCodePoint(1);
    if (r === _t && dA(s))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = eo; dA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    r = this.peekCodePoint(0), s = this.peekCodePoint(1);
    const n = this.peekCodePoint(2);
    if ((r === Sa || r === Ha) && ((s === me || s === UA) && dA(n) || dA(s)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = eo; dA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [zh(A), e];
  }
  consumeNumericToken() {
    const [A, e] = this.consumeNumber(), r = this.peekCodePoint(0), s = this.peekCodePoint(1), n = this.peekCodePoint(2);
    if (fr(r, s, n)) {
      const i = this.consumeName();
      return { type: 15, number: A, flags: e, unit: i };
    }
    return r === gh ? (this.consumeCodePoint(), { type: 16, number: A, flags: e }) : { type: 17, number: A, flags: e };
  }
  consumeEscapedCodePoint() {
    const A = this.consumeCodePoint();
    if (Ne(A)) {
      let e = AA(A);
      for (; Ne(this.peekCodePoint(0)) && e.length < 6; )
        e += AA(this.consumeCodePoint());
      pr(this.peekCodePoint(0)) && this.consumeCodePoint();
      const r = parseInt(e, 16);
      return r === 0 || Nh(r) || r > 1114111 ? so : r;
    }
    return A === _A ? so : A;
  }
  consumeName() {
    let A = "";
    for (; ; ) {
      const e = this.consumeCodePoint();
      if (no(e))
        A += AA(e);
      else if (se(e, this.peekCodePoint(0)))
        A += AA(this.consumeEscapedCodePoint());
      else
        return this.reconsumeCodePoint(e), A;
    }
  }
}
class Ze {
  constructor(A) {
    this._tokens = A;
  }
  static create(A) {
    const e = new La();
    return e.write(A), new Ze(e.read());
  }
  static parseValue(A) {
    return Ze.create(A).parseComponentValue();
  }
  static parseValues(A) {
    return Ze.create(A).parseComponentValues();
  }
  parseComponentValue() {
    let A = this.consumeToken();
    for (; A.type === 31; )
      A = this.consumeToken();
    if (A.type === 32)
      throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
    this.reconsumeToken(A);
    const e = this.consumeComponentValue();
    do
      A = this.consumeToken();
    while (A.type === 31);
    if (A.type === 32)
      return e;
    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
  }
  parseComponentValues() {
    const A = [];
    for (; ; ) {
      const e = this.consumeComponentValue();
      if (e.type === 32)
        return A;
      A.push(e), A.push();
    }
  }
  consumeComponentValue() {
    const A = this.consumeToken();
    switch (A.type) {
      case 11:
      case 28:
      case 2:
        return this.consumeSimpleBlock(A.type);
      case 19:
        return this.consumeFunction(A);
    }
    return A;
  }
  consumeSimpleBlock(A) {
    const e = { type: A, values: [] };
    let r = this.consumeToken();
    for (; ; ) {
      if (r.type === 32 || gB(r, A))
        return e;
      this.reconsumeToken(r), e.values.push(this.consumeComponentValue()), r = this.consumeToken();
    }
  }
  consumeFunction(A) {
    const e = {
      name: A.value,
      values: [],
      type: 18
      /* TokenType.FUNCTION */
    };
    for (; ; ) {
      const r = this.consumeToken();
      if (r.type === 32 || r.type === 3)
        return e;
      this.reconsumeToken(r), e.values.push(this.consumeComponentValue());
    }
  }
  consumeToken() {
    const A = this._tokens.shift();
    return typeof A > "u" ? mn : A;
  }
  reconsumeToken(A) {
    this._tokens.unshift(A);
  }
}
const GA = (t) => t.type === 15, tA = (t) => t.type === 17, T = (t) => t.type === 20, uB = (t) => t.type === 0, Nt = (t, A) => T(t) && t.value === A, ts = (t) => t.type !== 31, uA = (t) => t.type !== 31 && t.type !== 4, MA = (t) => {
  const A = [];
  let e = [];
  return t.forEach((r) => {
    if (r.type === 4) {
      if (e.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      A.push(e), e = [];
      return;
    }
    r.type !== 31 && e.push(r);
  }), e.length && A.push(e), A;
}, gB = (t, A) => A === 11 && t.type === 12 || A === 28 && t.type === 29 ? !0 : A === 2 && t.type === 3, Z = (t, A, e) => Math.min(Math.max(t, A), e), xA = (t, A) => [
  t[0] * A[0] + t[1] * A[1] + t[2] * A[2],
  t[3] * A[0] + t[4] * A[1] + t[5] * A[2],
  t[6] * A[0] + t[7] * A[1] + t[8] * A[2]
], Be = (t) => xA([
  3.2409699419045226,
  -1.537383177570094,
  -0.4986107602930034,
  -0.9692436362808796,
  1.8759675015077202,
  0.04155505740717559,
  0.05563007969699366,
  -0.20397695888897652,
  1.0569715142428786
], t), Un = (t) => xA([
  0.41239079926595934,
  0.357584339383878,
  0.1804807884018343,
  0.21263900587151027,
  0.715168678767756,
  0.07219231536073371,
  0.01933081871559182,
  0.11919477979462598,
  0.9505321522496607
], t), Se = (t) => t.map((A) => {
  const e = A < 0 ? -1 : 1, r = Math.abs(A);
  return r > 31308e-7 ? e * (1.055 * r ** (1 / 2.4) - 0.055) : 12.92 * A;
}), Fn = (t) => t.map((A) => {
  const e = A < 0 ? -1 : 1, r = Math.abs(A);
  return r <= 0.04045 ? A / 12.92 : e * ((r + 0.055) / 1.055) ** 2.4;
}), dB = (t) => {
  const [A, e, r] = Se(Be([t[0], t[1], t[2]]));
  return [A, e, r, t[3]];
}, pB = (t) => {
  const [A, e, r] = Be([t[0], t[1], t[2]]);
  return [
    Z(Math.round(A * 255), 0, 255),
    Z(Math.round(e * 255), 0, 255),
    Z(Math.round(r * 255), 0, 255),
    t[3]
  ];
}, he = (t) => t.type === 17 || t.type === 15, N = (t) => t.type === 16 || he(t), fB = (t) => t.type === 18 && t.name === "calc", wB = (t, A = 0) => {
  const e = (r) => {
    let s = "";
    for (const n of r)
      if (n.type !== 31) {
        if (n.type === 18)
          if (n.name === "calc") {
            const i = e(n.values);
            if (i === null)
              return null;
            s += `(${i})`;
          } else
            return null;
        else if (n.type === 17)
          s += n.number.toString();
        else if (n.type === 15)
          n.unit === "px" ? s += n.number.toString() : n.unit === "rem" || n.unit === "em" ? s += (n.number * 16).toString() : s += n.number.toString();
        else if (n.type === 16)
          s += (n.number / 100 * A).toString();
        else if (n.type === 6) {
          const i = n.value;
          i === "+" || i === "-" || i === "*" || i === "/" ? s += ` ${i} ` : i === "(" ? s += "(" : i === ")" && (s += ")");
        }
      }
    return s;
  };
  try {
    const r = e(t.values);
    if (r === null || r.trim() === "")
      return null;
    const s = new Function("return " + r)();
    if (typeof s == "number" && !isNaN(s))
      return {
        type: 17,
        number: s,
        flags: et
      };
  } catch {
    return null;
  }
  return null;
}, ka = (t) => t.length > 1 ? [t[0], t[1]] : [t[0]], rA = {
  type: 17,
  number: 0,
  flags: et
}, Ue = {
  type: 16,
  number: 50,
  flags: et
}, $A = {
  type: 16,
  number: 100,
  flags: et
}, bt = (t, A, e) => {
  const [r, s] = t;
  return [H(r, A), H(typeof s < "u" ? s : r, e)];
}, H = (t, A) => {
  if (t.type === 16)
    return t.number / 100 * A;
  if (GA(t))
    switch (t.unit) {
      case "rem":
      case "em":
        return 16 * t.number;
      // TODO use correct font-size
      case "px":
      default:
        return t.number;
    }
  return t.number;
}, Da = "deg", Ka = "grad", Ma = "rad", Ra = "turn", tt = {
  name: "angle",
  parse: (t, A) => {
    if (A.type === 15)
      switch (A.unit) {
        case Da:
          return Math.PI * A.number / 180;
        case Ka:
          return Math.PI / 200 * A.number;
        case Ma:
          return A.number;
        case Ra:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Oa = (t) => t.type === 15 && (t.unit === Da || t.unit === Ka || t.unit === Ma || t.unit === Ra), _a = (t) => {
  switch (t.filter(T).map((e) => e.value).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [rA, rA];
    case "to top":
    case "bottom":
      return HA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [rA, $A];
    case "to right":
    case "left":
      return HA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [$A, $A];
    case "to bottom":
    case "top":
      return HA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [$A, rA];
    case "to left":
    case "right":
      return HA(270);
  }
  return 0;
}, HA = (t) => Math.PI * t / 180, ae = (t) => (255 & t) === 0, V = (t) => {
  const A = 255 & t, e = 255 & t >> 8, r = 255 & t >> 16, s = 255 & t >> 24;
  return A < 255 ? `rgba(${s},${r},${e},${A / 255})` : `rgb(${s},${r},${e})`;
}, KA = (t, A, e, r) => (t << 24 | A << 16 | e << 8 | Math.round(r * 255) << 0) >>> 0, ne = (t, A) => {
  if (t.type === 17)
    return t.number;
  if (t.type === 16) {
    const e = A === 3 ? 1 : 255;
    return A === 3 ? t.number / 100 * e : Math.round(t.number / 100 * e);
  }
  return 0;
}, ve = (t) => (t[0].type === 20 ? t[0].value : "unknown") === "from", QB = (t) => KA(Z(Math.round(t[0] * 255), 0, 255), Z(Math.round(t[1] * 255), 0, 255), Z(Math.round(t[2] * 255), 0, 255), Z(t[3], 0, 1)), Nn = ([t, A, e, r]) => {
  const s = Se([t, A, e]);
  return KA(Z(Math.round(s[0] * 255), 0, 255), Z(Math.round(s[1] * 255), 0, 255), Z(Math.round(s[2] * 255), 0, 255), r);
}, Wt = (t) => {
  const A = Be([t[0], t[1], t[2]]);
  return Nn([A[0], A[1], A[2], t[3]]);
}, CB = (t, A) => {
  if (ve(A.filter(uA)))
    throw new Error("Relative color not supported for lab()");
  const [e, r, s, n] = rs(A), i = Se(Be(is([e, r, s])));
  return KA(Z(Math.round(i[0] * 255), 0, 255), Z(Math.round(i[1] * 255), 0, 255), Z(Math.round(i[2] * 255), 0, 255), n);
}, mB = (t, A) => {
  if (ve(A.filter(uA)))
    throw new Error("Relative color not supported for oklab()");
  const [e, r, s, n] = rs(A), i = Se(Be(ns([e, r, s])));
  return KA(Z(Math.round(i[0] * 255), 0, 255), Z(Math.round(i[1] * 255), 0, 255), Z(Math.round(i[2] * 255), 0, 255), n);
}, UB = (t, A) => {
  if (ve(A.filter(uA)))
    throw new Error("Relative color not supported for oklch()");
  const [e, r, s, n] = Pa(A), i = Se(Be(ns(ss([e, r, s]))));
  return KA(Z(Math.round(i[0] * 255), 0, 255), Z(Math.round(i[1] * 255), 0, 255), Z(Math.round(i[2] * 255), 0, 255), n);
}, FB = (t, A) => {
  if (ve(A.filter(uA)))
    throw new Error("Relative color not supported for lch()");
  const [e, r, s, n] = $a(A), i = Se(Be(is(ss([e, r, s]))));
  return KA(Z(Math.round(i[0] * 255), 0, 255), Z(Math.round(i[1] * 255), 0, 255), Z(Math.round(i[2] * 255), 0, 255), n);
}, Na = (t, A) => {
  const e = A.filter(uA), [r, s, n, i] = e, o = (r.type === 17 ? HA(r.number) : tt.parse(t, r)) / (Math.PI * 2), a = N(s) ? s.number / 100 : 0, c = N(n) ? n.number / 100 : 0, l = typeof i < "u" && N(i) ? H(i, 1) : 1;
  return [o, a, c, l];
}, io = (t, A) => {
  if (ve(A))
    throw new Error("Relative color not supported for hsl()");
  const [e, r, s, n] = Na(t, A), i = Va([e, r, s]);
  return KA(i[0] * 255, i[1] * 255, i[2] * 255, r === 0 ? 1 : n);
}, $a = (t) => {
  const A = t.filter(uA), e = N(A[0]) ? A[0].number : 0, r = N(A[1]) ? A[1].number : 0, s = tA(A[2]) || GA(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && N(A[4]) ? H(A[4], 1) : 1;
  return [e, r, s, n];
}, rs = (t) => {
  const A = t.filter(uA), e = A[0].type === 16 ? A[0].number / 100 : tA(A[0]) ? A[0].number : 0, r = A[1].type === 16 ? A[1].number / 100 : tA(A[1]) ? A[1].number : 0, s = tA(A[2]) || GA(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && N(A[4]) ? H(A[4], 1) : 1;
  return [e, r, s, n];
}, Pa = (t) => {
  const A = t.filter(uA), e = A[0].type === 16 ? A[0].number / 100 : tA(A[0]) ? A[0].number : 0, r = A[1].type === 16 ? A[1].number / 100 : tA(A[1]) ? A[1].number : 0, s = tA(A[2]) || GA(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && N(A[4]) ? H(A[4], 1) : 1;
  return [e, r, s, n];
}, Ga = (t) => xA([
  1.0479297925449969,
  0.022946870601609652,
  -0.05019226628920524,
  0.02962780877005599,
  0.9904344267538799,
  -0.017073799063418826,
  -0.009243040646204504,
  0.015055191490298152,
  0.7518742814281371
], t), $n = (t) => xA([
  0.955473421488075,
  -0.02309845494876471,
  0.06325924320057072,
  -0.0283697093338637,
  1.0099953980813041,
  0.021041441191917323,
  0.012314014864481998,
  -0.020507649298898964,
  1.330365926242124
], t), Gs = (t, A, e) => (e < 0 && (e += 1), e >= 1 && (e -= 1), e < 1 / 6 ? (A - t) * e * 6 + t : e < 1 / 2 ? A : e < 2 / 3 ? (A - t) * 6 * (2 / 3 - e) + t : t), Va = ([t, A, e]) => {
  if (A === 0)
    return [e * 255, e * 255, e * 255];
  const r = e <= 0.5 ? e * (A + 1) : e + A - e * A, s = e * 2 - r, n = Gs(s, r, t + 1 / 3), i = Gs(s, r, t), o = Gs(s, r, t - 1 / 3);
  return [n, i, o];
}, ss = ([t, A, e]) => (A < 0 && (A = 0), isNaN(e) && (e = 0), [t, A * Math.cos(e * Math.PI / 180), A * Math.sin(e * Math.PI / 180)]), ns = (t) => {
  const A = xA([
    1,
    0.3963377773761749,
    0.2158037573099136,
    1,
    -0.1055613458156586,
    -0.0638541728258133,
    1,
    -0.0894841775298119,
    -1.2914855480194092
  ], t), e = A.map((r) => r ** 3);
  return xA([
    1.2268798758459243,
    -0.5578149944602171,
    0.2813910456659647,
    -0.0405757452148008,
    1.112286803280317,
    -0.0717110580655164,
    -0.0763729366746601,
    -0.4214933324022432,
    1.5869240198367816
  ], e);
}, is = (t) => {
  const A = (t[0] + 16) / 116, e = t[1] / 500 + A, r = A - t[2] / 200, s = 24389 / 27, n = 24 / 116, i = [
    (e > n ? e ** 3 : (116 * e - 16) / s) * 0.3457 / 0.3585,
    t[0] > 8 ? A ** 3 : t[0] / s,
    (r > n ? r ** 3 : (116 * r - 16) / s) * (1 - 0.3457 - 0.3585) / 0.3585
  ];
  return $n([i[0], i[1], i[2]]);
}, xB = (t, A) => {
  const e = A.filter(uA);
  if (e.length === 3) {
    const [r, s, n] = e.map(ne), i = Fn([r / 255, s / 255, n / 255]), [o, a, c] = Un([i[0], i[1], i[2]]);
    return [o, a, c, 1];
  }
  if (e.length === 4) {
    const [r, s, n, i] = e.map(ne), o = Fn([r / 255, s / 255, n / 255]), [a, c, l] = Un([o[0], o[1], o[2]]);
    return [a, c, l, i];
  }
  return [0, 0, 0, 1];
}, bB = (t, A) => {
  const [e, r, s, n] = Na(t, A), i = Fn(Va([e, r, s])), [o, a, c] = Un([i[0], i[1], i[2]]);
  return [o, a, c, n];
}, EB = (t, A) => {
  const [e, r, s, n] = rs(A), [i, o, a] = is([e, r, s]);
  return [i, o, a, n];
}, yB = (t, A) => {
  const [e, r, s, n] = $a(A), [i, o, a] = is(ss([e, r, s]));
  return [i, o, a, n];
}, IB = (t, A) => {
  const [e, r, s, n] = Pa(A), [i, o, a] = ns(ss([e, r, s]));
  return [i, o, a, n];
}, HB = (t, A) => {
  const [e, r, s, n] = rs(A), [i, o, a] = ns([e, r, s]);
  return [i, o, a, n];
}, TB = (t) => $n([t[0], t[1], t[2]]), oo = (t) => t, SB = (t) => {
  const [A, e, r] = Ga([t[0], t[2], t[3]]);
  return [A, e, r, t[3]];
}, ao = (t) => Wt([t[0], t[1], t[2], t[3]]), vB = (t) => {
  const A = TB([t[0], t[1], t[2]]);
  return Wt([A[0], A[1], A[2], t[3]]);
}, LB = (t) => xA([
  0.4865709486482162,
  0.26566769316909306,
  0.1982172852343625,
  0.2289745640697488,
  0.6917385218365064,
  0.079286914093745,
  0,
  0.04511338185890264,
  1.043944368900976
], t), kB = (t) => xA([
  2.493496911941425,
  -0.9313836179191239,
  -0.40271078445071684,
  -0.8294889695615747,
  1.7626640603183463,
  0.023624685841943577,
  0.03584583024378447,
  -0.07617238926804182,
  0.9568845240076872
], t), DB = (t) => t.map((A) => {
  const e = A < 0 ? -1 : 1;
  return A * e <= 0.04045 ? A / 12.92 : e * ((A + 0.055) / 1.055) ** 2.4 || 0;
}), KB = (t) => Se(t), MB = (t) => {
  const A = DB([t[0], t[1], t[2]]);
  return LB([A[0], A[1], A[2]]);
}, RB = (t) => {
  const [A, e, r] = KB(kB([t[0], t[1], t[2]]));
  return [A, e, r, t[3]];
}, OB = (t) => {
  const A = MB([t[0], t[1], t[2]]);
  return Wt([A[0], A[1], A[2], t[3]]);
}, _B = (t) => xA([
  2.0415879038107465,
  -0.5650069742788596,
  -0.34473135077832956,
  -0.9692436362808795,
  1.8759675015077202,
  0.04155505740717557,
  0.013444280632031142,
  -0.11836239223101838,
  1.0151749943912054
], t), NB = (t) => xA([
  0.5766690429101305,
  0.1855582379065463,
  0.1882286462349947,
  0.29734497525053605,
  0.6273635662554661,
  0.0752914584939978,
  0.02703136138641234,
  0.07068885253582723,
  0.9913375368376388
], t), $B = (t) => {
  const A = t.map((e) => {
    const r = e < 0 ? -1 : 1, s = Math.abs(e);
    return r * s ** 2.19921875;
  });
  return [A[0], A[1], A[2]];
}, PB = (t) => {
  const A = t.map((e) => {
    const r = e < 0 ? -1 : 1, s = Math.abs(e);
    return r * s ** 0.4547069271758437;
  });
  return [A[0], A[1], A[2]];
}, GB = (t) => {
  const [A, e, r] = PB(_B([t[0], t[1], t[2]]));
  return [A, e, r, t[3]];
}, VB = (t) => {
  const A = Be(NB($B([t[0], t[1], t[2]])));
  return Nn([A[0], A[1], A[2], t[3]]);
}, XB = (t) => xA([
  0.7977666449006423,
  0.13518129740053308,
  0.0313477341283922,
  0.2880748288194013,
  0.711835234241873,
  8993693872564e-17,
  0,
  0,
  0.8251046025104602
], t), zB = (t) => xA([
  1.3457868816471583,
  -0.25557208737979464,
  -0.05110186497554526,
  -0.5446307051249019,
  1.5082477428451468,
  0.02052744743642139,
  0,
  0,
  1.2119675456389452
], t), WB = (t) => t.map((A) => A < 16 / 512 ? A / 16 : A ** 1.8), JB = (t) => t.map((A) => A > 1 / 512 ? A ** (1 / 1.8) : A * 16), YB = (t) => {
  const A = WB([t[0], t[1], t[2]]);
  return $n(XB([A[0], A[1], A[2]]));
}, ZB = (t) => {
  const [A, e, r] = JB(zB(Ga([t[0], t[1], t[2]])));
  return [A, e, r, t[3]];
}, qB = (t) => {
  const A = YB([t[0], t[1], t[2]]);
  return Wt([A[0], A[1], A[2], t[3]]);
}, Rr = 1.09929682680944, Xa = 0.018053968510807, jB = (t) => t.map(function(A) {
  return A < Xa * 4.5 ? A / 4.5 : Math.pow((A + Rr - 1) / Rr, 1 / 0.45);
}), Au = (t) => t.map(function(A) {
  return A >= Xa ? Rr * Math.pow(A, 0.45) - (Rr - 1) : 4.5 * A;
}), eu = (t) => xA([
  0.6369580483012914,
  0.14461690358620832,
  0.1688809751641721,
  0.2627002120112671,
  0.6779980715188708,
  0.05930171646986196,
  0,
  0.028072693049087428,
  1.060985057710791
], t), tu = (t) => xA([
  1.716651187971268,
  -0.355670783776392,
  -0.25336628137366,
  -0.666684351832489,
  1.616481236634939,
  0.0157685458139111,
  0.017639857445311,
  -0.042770613257809,
  0.942103121235474
], t), ru = (t) => {
  const A = jB([t[0], t[1], t[2]]);
  return eu([A[0], A[1], A[2]]);
}, su = (t) => {
  const [A, e, r] = Au(tu([t[0], t[1], t[2]]));
  return [A, e, r, t[3]];
}, nu = (t) => {
  const A = ru([t[0], t[1], t[2]]);
  return Wt([A[0], A[1], A[2], t[3]]);
}, le = {
  name: "color",
  parse: (t, A) => {
    if (A.type === 18) {
      const e = lu[A.name];
      if (typeof e > "u")
        throw new Error(`Attempting to parse an unsupported color function "${A.name}"`);
      return e(t, A.values);
    }
    if (A.type === 5) {
      const [e, r, s, n] = za(A);
      return KA(e, r, s, n);
    }
    if (A.type === 20) {
      const e = PA[A.value.toUpperCase()];
      if (typeof e < "u")
        return e;
    }
    return PA.TRANSPARENT;
  }
}, za = (t) => {
  if (t.value.length === 3) {
    const A = t.value.substring(0, 1), e = t.value.substring(1, 2), r = t.value.substring(2, 3);
    return [parseInt(A + A, 16), parseInt(e + e, 16), parseInt(r + r, 16), 1];
  }
  if (t.value.length === 4) {
    const A = t.value.substring(0, 1), e = t.value.substring(1, 2), r = t.value.substring(2, 3), s = t.value.substring(3, 4);
    return [parseInt(A + A, 16), parseInt(e + e, 16), parseInt(r + r, 16), parseInt(s + s, 16) / 255];
  }
  if (t.value.length === 6) {
    const A = t.value.substring(0, 2), e = t.value.substring(2, 4), r = t.value.substring(4, 6);
    return [parseInt(A, 16), parseInt(e, 16), parseInt(r, 16), 1];
  }
  if (t.value.length === 8) {
    const A = t.value.substring(0, 2), e = t.value.substring(2, 4), r = t.value.substring(4, 6), s = t.value.substring(6, 8);
    return [parseInt(A, 16), parseInt(e, 16), parseInt(r, 16), parseInt(s, 16) / 255];
  }
  return [0, 0, 0, 1];
}, lo = (t, A) => {
  const e = A.filter(uA);
  if (ve(e))
    throw new Error("Relative color not supported for rgb()");
  if (e.length === 3) {
    const [r, s, n] = e.map(ne);
    return KA(r, s, n, 1);
  }
  if (e.length === 4) {
    const [r, s, n, i] = e.map(ne);
    return KA(r, s, n, i);
  }
  if (e.length === 5 && e[3].type === 6 && e[3].value === "/") {
    const r = ne(e[0], 0), s = ne(e[1], 1), n = ne(e[2], 2), i = ne(e[4], 3);
    return KA(r, s, n, i);
  }
  return 0;
}, iu = (t, A) => {
  const e = A.filter(uA), r = e[0].type === 20 ? e[0].value : "unknown";
  if (!ve(e)) {
    const n = r, i = co[n];
    if (typeof i > "u")
      throw new Error(`Attempting to parse an unsupported color space "${n}" for color() function`);
    const o = tA(e[1]) ? e[1].number : 0, a = tA(e[2]) ? e[2].number : 0, c = tA(e[3]) ? e[3].number : 0, l = e.length > 4 && e[4].type === 6 && e[4].value === "/" && tA(e[5]) ? e[5].number : 1;
    return i([o, a, c, l]);
  } else {
    const n = (C, x) => {
      if (tA(x))
        return x.number;
      const E = (K) => K === "r" || K === "x" ? 0 : K === "g" || K === "y" ? 1 : 2;
      if (T(x)) {
        const K = E(x.value);
        return C[K];
      }
      const b = (K) => {
        const W = K.filter(uA);
        let lA = "(";
        for (const X of W)
          lA += X.type === 18 && X.name === "calc" ? b(X.values) : tA(X) ? X.number : X.type === 6 || T(X) ? X.value : "";
        return lA += ")", lA;
      };
      if (x.type === 18) {
        const K = x.values.filter(uA);
        if (x.name === "calc") {
          const W = b(K).replace(/r|x/, C[0].toString()).replace(/g|y/, C[1].toString()).replace(/b|z/, C[2].toString());
          return new Function("return " + W)();
        }
      }
      return null;
    }, i = e[1].type === 18 ? e[1].name : T(e[1]) || e[1].type === 5 ? "rgb" : "unknown", o = T(e[2]) ? e[2].value : "unknown";
    let a = e[1].type === 18 ? e[1].values : T(e[1]) ? [e[1]] : [];
    if (T(e[1])) {
      if (typeof PA[e[1].value.toUpperCase()] > "u")
        throw new Error("Attempting to use unknown color in relative color 'from'");
      {
        const x = qe(t, e[1].value), E = 255 & x, b = 255 & x >> 8, K = 255 & x >> 16;
        a = [
          { type: 17, number: 255 & x >> 24, flags: 1 },
          { type: 17, number: K, flags: 1 },
          { type: 17, number: b, flags: 1 },
          { type: 17, number: E > 1 ? E / 255 : E, flags: 1 }
        ];
      }
    } else if (e[1].type === 5) {
      const [C, x, E, b] = za(e[1]);
      a = [
        { type: 17, number: C, flags: 1 },
        { type: 17, number: x, flags: 1 },
        { type: 17, number: E, flags: 1 },
        { type: 17, number: b > 1 ? b / 255 : b, flags: 1 }
      ];
    }
    if (a.length === 0)
      throw new Error("Attempting to use unknown color in relative color 'from'");
    if (o === "unknown")
      throw new Error("Attempting to use unknown colorspace in relative color 'to'");
    const c = ou[i], l = au[o], h = co[o];
    if (typeof c > "u")
      throw new Error(`Attempting to parse an unsupported color space "${i}" for color() function`);
    if (typeof l > "u")
      throw new Error(`Attempting to parse an unsupported color space "${o}" for color() function`);
    const u = c(t, a), g = l(u), d = n(g, e[3]), p = n(g, e[4]), U = n(g, e[5]), y = e.length > 6 && e[6].type === 6 && e[6].value === "/" && tA(e[7]) ? e[7].number : 1;
    if (d === null || p === null || U === null)
      throw new Error("Invalid relative color in color() function");
    return h([d, p, U, y]);
  }
}, co = {
  srgb: QB,
  "srgb-linear": Nn,
  "display-p3": OB,
  "a98-rgb": VB,
  "prophoto-rgb": qB,
  xyz: ao,
  "xyz-d50": vB,
  "xyz-d65": ao,
  rec2020: nu
}, ou = {
  rgb: xB,
  hsl: bB,
  lab: EB,
  lch: yB,
  oklab: HB,
  oklch: IB
}, au = {
  srgb: dB,
  "srgb-linear": pB,
  "display-p3": RB,
  "a98-rgb": GB,
  "prophoto-rgb": ZB,
  xyz: oo,
  "xyz-d50": SB,
  "xyz-d65": oo,
  rec2020: su
}, lu = {
  hsl: io,
  hsla: io,
  rgb: lo,
  rgba: lo,
  lch: FB,
  oklch: UB,
  oklab: mB,
  lab: CB,
  color: iu
}, qe = (t, A) => le.parse(t, Ze.create(A).parseComponentValue()), PA = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
}, cu = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: (t, A) => A.map((e) => {
    if (T(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  })
}, hu = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, os = (t, A) => {
  const e = le.parse(t, A[0]), r = A[1];
  return r && N(r) ? { color: e, stop: r } : { color: e, stop: null };
}, ho = (t, A) => {
  const e = t[0], r = t[t.length - 1];
  e.stop === null && (e.stop = rA), r.stop === null && (r.stop = $A);
  const s = [];
  let n = 0;
  for (let o = 0; o < t.length; o++) {
    const a = t[o].stop;
    if (a !== null) {
      const c = H(a, A);
      c > n ? s.push(c) : s.push(n), n = c;
    } else
      s.push(null);
  }
  let i = null;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    if (a === null)
      i === null && (i = o);
    else if (i !== null) {
      const c = o - i, l = s[i - 1], h = (a - l) / (c + 1);
      for (let u = 1; u <= c; u++)
        s[i + u - 1] = h * u;
      i = null;
    }
  }
  return t.map(({ color: o }, a) => ({ color: o, stop: Math.max(Math.min(1, s[a] / A), 0) }));
}, Bu = (t, A, e) => {
  const r = A / 2, s = e / 2, n = H(t[0], A) - r, i = s - H(t[1], e);
  return (Math.atan2(i, n) + Math.PI * 2) % (Math.PI * 2);
}, uu = (t, A, e) => {
  const r = typeof t == "number" ? t : Bu(t, A, e), s = Math.abs(A * Math.sin(r)) + Math.abs(e * Math.cos(r)), n = A / 2, i = e / 2, o = s / 2, a = Math.sin(r - Math.PI / 2) * o, c = Math.cos(r - Math.PI / 2) * o;
  return [s, n - c, n + c, i - a, i + a];
}, DA = (t, A) => Math.sqrt(t * t + A * A), Bo = (t, A, e, r, s) => [
  [0, 0],
  [0, A],
  [t, 0],
  [t, A]
].reduce((i, o) => {
  const [a, c] = o, l = DA(e - a, r - c);
  return (s ? l < i.optimumDistance : l > i.optimumDistance) ? {
    optimumCorner: o,
    optimumDistance: l
  } : i;
}, {
  optimumDistance: s ? 1 / 0 : -1 / 0,
  optimumCorner: null
}).optimumCorner, gu = (t, A, e, r, s) => {
  let n = 0, i = 0;
  switch (t.size) {
    case 0:
      t.shape === 0 ? n = i = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(e), Math.abs(e - s)) : t.shape === 1 && (n = Math.min(Math.abs(A), Math.abs(A - r)), i = Math.min(Math.abs(e), Math.abs(e - s)));
      break;
    case 2:
      if (t.shape === 0)
        n = i = Math.min(DA(A, e), DA(A, e - s), DA(A - r, e), DA(A - r, e - s));
      else if (t.shape === 1) {
        const o = Math.min(Math.abs(e), Math.abs(e - s)) / Math.min(Math.abs(A), Math.abs(A - r)), [a, c] = Bo(r, s, A, e, !0);
        n = DA(a - A, (c - e) / o), i = o * n;
      }
      break;
    case 1:
      t.shape === 0 ? n = i = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(e), Math.abs(e - s)) : t.shape === 1 && (n = Math.max(Math.abs(A), Math.abs(A - r)), i = Math.max(Math.abs(e), Math.abs(e - s)));
      break;
    case 3:
      if (t.shape === 0)
        n = i = Math.max(DA(A, e), DA(A, e - s), DA(A - r, e), DA(A - r, e - s));
      else if (t.shape === 1) {
        const o = Math.max(Math.abs(e), Math.abs(e - s)) / Math.max(Math.abs(A), Math.abs(A - r)), [a, c] = Bo(r, s, A, e, !1);
        n = DA(a - A, (c - e) / o), i = o * n;
      }
      break;
  }
  return Array.isArray(t.size) && (n = H(t.size[0], r), i = t.size.length === 2 ? H(t.size[1], s) : n), [n, i];
}, du = (t, A) => {
  let e = HA(180);
  const r = [];
  return MA(A).forEach((s, n) => {
    if (n === 0) {
      const o = s[0];
      if (o.type === 20 && o.value === "to") {
        e = _a(s);
        return;
      } else if (Oa(o)) {
        e = tt.parse(t, o);
        return;
      }
    }
    const i = os(t, s);
    r.push(i);
  }), {
    angle: e,
    stops: r,
    type: 1
    /* CSSImageType.LINEAR_GRADIENT */
  };
}, Qr = (t, A) => {
  let e = HA(180);
  const r = [];
  return MA(A).forEach((s, n) => {
    if (n === 0) {
      const o = s[0];
      if (o.type === 20 && ["top", "left", "right", "bottom"].indexOf(o.value) !== -1) {
        e = _a(s);
        return;
      } else if (Oa(o)) {
        e = (tt.parse(t, o) + HA(270)) % HA(360);
        return;
      }
    }
    const i = os(t, s);
    r.push(i);
  }), {
    angle: e,
    stops: r,
    type: 1
    /* CSSImageType.LINEAR_GRADIENT */
  };
}, pu = (t, A) => {
  const e = HA(180), r = [];
  let s = 1;
  const n = 0, i = 3, o = [];
  return MA(A).forEach((a, c) => {
    const l = a[0];
    if (c === 0) {
      if (T(l) && l.value === "linear") {
        s = 1;
        return;
      } else if (T(l) && l.value === "radial") {
        s = 2;
        return;
      }
    }
    if (l.type === 18) {
      if (l.name === "from") {
        const h = le.parse(t, l.values[0]);
        r.push({ stop: rA, color: h });
      } else if (l.name === "to") {
        const h = le.parse(t, l.values[0]);
        r.push({ stop: $A, color: h });
      } else if (l.name === "color-stop") {
        const h = l.values.filter(uA);
        if (h.length === 2) {
          const u = le.parse(t, h[1]), g = h[0];
          tA(g) && r.push({
            stop: { type: 16, number: g.number * 100, flags: g.flags },
            color: u
          });
        }
      }
    }
  }), s === 1 ? {
    angle: (e + HA(180)) % HA(360),
    stops: r,
    type: s
  } : { size: i, shape: n, stops: r, position: o, type: s };
}, Wa = "closest-side", Ja = "farthest-side", Ya = "closest-corner", Za = "farthest-corner", qa = "circle", ja = "ellipse", Al = "cover", el = "contain", fu = (t, A) => {
  let e = 0, r = 3;
  const s = [], n = [];
  return MA(A).forEach((i, o) => {
    let a = !0;
    if (o === 0) {
      let c = !1;
      a = i.reduce((l, h) => {
        if (c)
          if (T(h))
            switch (h.value) {
              case "center":
                return n.push(Ue), l;
              case "top":
              case "left":
                return n.push(rA), l;
              case "right":
              case "bottom":
                return n.push($A), l;
            }
          else (N(h) || he(h)) && n.push(h);
        else if (T(h))
          switch (h.value) {
            case qa:
              return e = 0, !1;
            case ja:
              return e = 1, !1;
            case "at":
              return c = !0, !1;
            case Wa:
              return r = 0, !1;
            case Al:
            case Ja:
              return r = 1, !1;
            case el:
            case Ya:
              return r = 2, !1;
            case Za:
              return r = 3, !1;
          }
        else if (he(h) || N(h))
          return Array.isArray(r) || (r = []), r.push(h), !1;
        return l;
      }, a);
    }
    if (a) {
      const c = os(t, i);
      s.push(c);
    }
  }), {
    size: r,
    shape: e,
    stops: s,
    position: n,
    type: 2
    /* CSSImageType.RADIAL_GRADIENT */
  };
}, Cr = (t, A) => {
  let e = 0, r = 3;
  const s = [], n = [];
  return MA(A).forEach((i, o) => {
    let a = !0;
    if (o === 0 ? a = i.reduce((c, l) => {
      if (T(l))
        switch (l.value) {
          case "center":
            return n.push(Ue), !1;
          case "top":
          case "left":
            return n.push(rA), !1;
          case "right":
          case "bottom":
            return n.push($A), !1;
        }
      else if (N(l) || he(l))
        return n.push(l), !1;
      return c;
    }, a) : o === 1 && (a = i.reduce((c, l) => {
      if (T(l))
        switch (l.value) {
          case qa:
            return e = 0, !1;
          case ja:
            return e = 1, !1;
          case el:
          case Wa:
            return r = 0, !1;
          case Ja:
            return r = 1, !1;
          case Ya:
            return r = 2, !1;
          case Al:
          case Za:
            return r = 3, !1;
        }
      else if (he(l) || N(l))
        return Array.isArray(r) || (r = []), r.push(l), !1;
      return c;
    }, a)), a) {
      const c = os(t, i);
      s.push(c);
    }
  }), {
    size: r,
    shape: e,
    stops: s,
    position: n,
    type: 2
    /* CSSImageType.RADIAL_GRADIENT */
  };
}, wu = (t) => t.type === 1, Qu = (t) => t.type === 2, Pn = {
  name: "image",
  parse: (t, A) => {
    if (A.type === 22) {
      const e = {
        url: A.value,
        type: 0
        /* CSSImageType.URL */
      };
      return t.cache.addImage(A.value), e;
    }
    if (A.type === 18) {
      const e = tl[A.name];
      if (typeof e > "u")
        throw new Error(`Attempting to parse an unsupported image function "${A.name}"`);
      return e(t, A.values);
    }
    throw new Error(`Unsupported image type ${A.type}`);
  }
};
function Cu(t) {
  return !(t.type === 20 && t.value === "none") && (t.type !== 18 || !!tl[t.name]);
}
const tl = {
  "linear-gradient": du,
  "-moz-linear-gradient": Qr,
  "-ms-linear-gradient": Qr,
  "-o-linear-gradient": Qr,
  "-webkit-linear-gradient": Qr,
  "radial-gradient": fu,
  "-moz-radial-gradient": Cr,
  "-ms-radial-gradient": Cr,
  "-o-radial-gradient": Cr,
  "-webkit-radial-gradient": Cr,
  "-webkit-gradient": pu
}, mu = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (t, A) => {
    if (A.length === 0)
      return [];
    const e = A[0];
    return e.type === 20 && e.value === "none" ? [] : A.filter((r) => uA(r) && Cu(r)).map((r) => Pn.parse(t, r));
  }
}, Uu = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: (t, A) => A.map((e) => {
    if (T(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  })
}, Fu = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: (t, A) => MA(A).map((e) => e.map((r) => fB(r) ? wB(r, 0) : N(r) ? r : null).filter((r) => r !== null)).map(ka)
}, xu = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: (t, A) => MA(A).map((e) => e.filter(T).map((r) => r.value).join(" ")).map(bu)
}, bu = (t) => {
  switch (t) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
};
var je;
(function(t) {
  t.AUTO = "auto", t.CONTAIN = "contain", t.COVER = "cover";
})(je || (je = {}));
const Eu = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: (t, A) => MA(A).map((e) => e.filter(yu))
}, yu = (t) => T(t) || N(t), as = (t) => ({
  name: `border-${t}-color`,
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}), Iu = as("top"), Hu = as("right"), Tu = as("bottom"), Su = as("left"), ls = (t) => ({
  name: `border-radius-${t}`,
  initialValue: "0 0",
  prefix: !1,
  type: 1,
  parse: (A, e) => ka(e.filter(N))
}), vu = ls("top-left"), Lu = ls("top-right"), ku = ls("bottom-right"), Du = ls("bottom-left"), cs = (t) => ({
  name: `border-${t}-style`,
  initialValue: "solid",
  prefix: !1,
  type: 2,
  parse: (A, e) => {
    switch (e) {
      case "none":
        return 0;
      case "dashed":
        return 2;
      case "dotted":
        return 3;
      case "double":
        return 4;
    }
    return 1;
  }
}), Ku = cs("top"), Mu = cs("right"), Ru = cs("bottom"), Ou = cs("left"), hs = (t) => ({
  name: `border-${t}-width`,
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: (A, e) => GA(e) ? e.number : 0
}), _u = hs("top"), Nu = hs("right"), $u = hs("bottom"), Pu = hs("left"), xn = {
  type: 0
  /* CLIP_PATH_TYPE.NONE */
}, bn = (t) => {
  const [A] = t;
  return A ? T(A) ? A.value === "farthest-side" ? "farthest-side" : "closest-side" : N(A) ? A : "closest-side" : "closest-side";
}, rl = (t) => {
  let A = null, e = null;
  for (const r of t)
    if (T(r))
      switch (r.value) {
        case "left":
          A = rA;
          break;
        case "right":
          A = $A;
          break;
        case "top":
          e = rA;
          break;
        case "bottom":
          e = $A;
          break;
        case "center":
          A === null ? A = Ue : e === null && (e = Ue);
          break;
      }
    else N(r) && (A === null ? A = r : e === null && (e = r));
  return { cx: A ?? Ue, cy: e ?? Ue };
}, Gu = (t) => {
  const A = [];
  for (const i of t)
    if (i.type !== 31) {
      if (T(i) && i.value === "round")
        break;
      N(i) && A.push(i);
    }
  const e = A[0] ?? rA, r = A[1] ?? e, s = A[2] ?? e, n = A[3] ?? r;
  return { type: 1, top: e, right: r, bottom: s, left: n };
}, Vu = (t) => {
  const A = t.filter(ts), e = A.findIndex((n) => Nt(n, "at")), r = e === -1 ? A : A.slice(0, e), s = e === -1 ? [] : A.slice(e + 1);
  return {
    type: 2,
    radius: bn(r),
    ...rl(s)
  };
}, Xu = (t) => {
  const A = t.filter(ts), e = A.findIndex((n) => Nt(n, "at")), r = e === -1 ? A : A.slice(0, e), s = e === -1 ? [] : A.slice(e + 1);
  return {
    type: 3,
    rx: bn(r.slice(0, 1)),
    ry: bn(r.slice(1, 2)),
    ...rl(s)
  };
}, zu = (t) => {
  const A = MA(t), e = [];
  for (const r of A) {
    if (r.length === 1 && T(r[0]))
      continue;
    const s = r.filter(N);
    s.length >= 2 && e.push([s[0], s[1]]);
  }
  return { type: 4, points: e };
}, Wu = (t) => {
  const A = t.find(
    (e) => e.type === 0
    /* TokenType.STRING_TOKEN */
  );
  return A ? { type: 5, d: A.value } : xn;
}, Ju = {
  name: "clip-path",
  initialValue: "none",
  prefix: !1,
  type: 0,
  parse: (t, A) => {
    if (T(A) && A.value === "none")
      return xn;
    if (A.type === 18)
      switch (A.name) {
        case "inset":
          return Gu(A.values);
        case "circle":
          return Vu(A.values);
        case "ellipse":
          return Xu(A.values);
        case "polygon":
          return zu(A.values);
        case "path":
          return Wu(A.values);
      }
    return xn;
  }
}, Yu = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Zu = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, qu = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: (t, A) => A.filter(T).reduce(
    (e, r) => e | ju(r.value),
    0
    /* DISPLAY.NONE */
  )
}, ju = (t) => {
  switch (t) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, Ag = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
}, eg = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: (t, A) => A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0
};
var Or;
(function(t) {
  t.NORMAL = "normal", t.STRICT = "strict";
})(Or || (Or = {}));
const tg = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "strict":
        return Or.STRICT;
      case "normal":
      default:
        return Or.NORMAL;
    }
  }
}, rg = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* PropertyDescriptorParsingType.TOKEN_VALUE */
}, uo = (t, A) => T(t) && t.value === "normal" ? 1.2 * A : t.type === 17 ? A * t.number : N(t) ? H(t, A) : A, sg = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: (t, A) => A.type === 20 && A.value === "none" ? null : Pn.parse(t, A)
}, ng = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, En = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 52;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
}, Bs = (t) => ({
  name: `margin-${t}`,
  initialValue: "0",
  prefix: !1,
  type: 4
  /* PropertyDescriptorParsingType.TOKEN_VALUE */
}), ig = Bs("top"), og = Bs("right"), ag = Bs("bottom"), lg = Bs("left"), cg = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: (t, A) => A.filter(T).map((e) => {
    switch (e.value) {
      case "hidden":
        return 1;
      case "scroll":
        return 2;
      case "clip":
        return 3;
      case "auto":
        return 4;
      case "visible":
      default:
        return 0;
    }
  })
}, hg = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, us = (t) => ({
  name: `padding-${t}`,
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length-percentage"
}), Bg = us("top"), ug = us("right"), gg = us("bottom"), dg = us("left"), pg = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
}, fg = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
}, wg = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (t, A) => A.length === 1 && Nt(A[0], "none") ? [] : MA(A).map((e) => {
    const r = {
      color: PA.TRANSPARENT,
      offsetX: rA,
      offsetY: rA,
      blur: rA
    };
    let s = 0;
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      he(i) ? (s === 0 ? r.offsetX = i : s === 1 ? r.offsetY = i : r.blur = i, s++) : r.color = le.parse(t, i);
    }
    return r;
  })
}, Qg = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, Cg = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: (t, A) => {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      const e = xg[A.name];
      if (typeof e > "u")
        throw new Error(`Attempting to parse an unsupported transform function "${A.name}"`);
      return e(t, A.values);
    }
    return null;
  }
}, mg = (t, A) => {
  const e = A.filter(
    (r) => r.type === 17
    /* TokenType.NUMBER_TOKEN */
  ).map((r) => r.number);
  return e.length === 6 ? e : null;
}, Ug = (t, A) => {
  const e = A.filter(
    (c) => c.type === 17
    /* TokenType.NUMBER_TOKEN */
  ).map((c) => c.number), [r, s, {}, {}, n, i, {}, {}, {}, {}, {}, {}, o, a] = e;
  return e.length === 16 ? [r, s, n, i, o, a] : null;
}, Fg = (t, A) => {
  if (A.length !== 1)
    return null;
  const e = A[0];
  let r = 0;
  if (e.type === 17 && e.number === 0)
    r = 0;
  else if (e.type === 15)
    r = tt.parse(t, e);
  else
    return null;
  const s = Math.cos(r), n = Math.sin(r);
  return [s, n, -n, s, 0, 0];
}, xg = {
  matrix: mg,
  matrix3d: Ug,
  rotate: Fg
}, go = {
  type: 16,
  number: 50,
  flags: et
}, bg = [go, go], Eg = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: (t, A) => {
    const e = A.filter(N);
    return e.length !== 2 ? bg : [e[0], e[1]];
  }
}, yg = {
  name: "rotate",
  initialValue: "none",
  prefix: !1,
  type: 0,
  parse: (t, A) => A.type === 20 && A.value === "none" ? null : A.type === 17 && A.number === 0 ? 0 : A.type === 15 ? tt.parse(t, A) * 180 / Math.PI : null
}, Ig = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
};
var Tt;
(function(t) {
  t.NORMAL = "normal", t.BREAK_ALL = "break-all", t.KEEP_ALL = "keep-all";
})(Tt || (Tt = {}));
const Hg = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "break-all":
        return Tt.BREAK_ALL;
      case "keep-all":
        return Tt.KEEP_ALL;
      case "normal":
      default:
        return Tt.NORMAL;
    }
  }
}, Tg = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (t, A) => {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (tA(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, sl = {
  name: "time",
  parse: (t, A) => {
    if (A.type === 15)
      switch (A.unit.toLowerCase()) {
        case "s":
          return 1e3 * A.number;
        case "ms":
          return A.number;
      }
    throw new Error("Unsupported time type");
  }
}, Sg = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: (t, A) => tA(A) ? A.number : 1
}, vg = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Lg = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: (t, A) => A.filter(T).map((e) => {
    switch (e.value) {
      case "underline":
        return 1;
      case "overline":
        return 2;
      case "line-through":
        return 3;
      case "none":
        return 4;
    }
    return 0;
  }).filter(
    (e) => e !== 0
    /* TEXT_DECORATION_LINE.NONE */
  )
}, kg = {
  name: "text-decoration-style",
  initialValue: "solid",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "double":
        return 1;
      case "dotted":
        return 2;
      case "dashed":
        return 3;
      case "wavy":
        return 4;
      case "solid":
      default:
        return 0;
    }
  }
}, Dg = {
  name: "text-decoration-thickness",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (t, A) => {
    if (T(A))
      switch (A.value) {
        case "auto":
          return "auto";
        case "from-font":
          return "from-font";
      }
    return GA(A) ? A.number : "auto";
  }
}, Kg = {
  name: "text-underline-offset",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (t, A) => T(A) && A.value === "auto" ? "auto" : GA(A) ? A.number : "auto"
}, Mg = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: (t, A) => {
    const e = [], r = [];
    return A.forEach((s) => {
      switch (s.type) {
        case 20:
        case 0:
          e.push(s.value);
          break;
        case 17:
          e.push(s.number.toString());
          break;
        case 4:
          r.push(e.join(" ")), e.length = 0;
          break;
      }
    }), e.length && r.push(e.join(" ")), r.map((s) => s.indexOf(" ") === -1 ? s : `'${s}'`);
  }
}, Rg = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, Og = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: (t, A) => {
    if (tA(A))
      return A.number;
    if (T(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, _g = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (t, A) => A.filter(T).map((e) => e.value)
}, Ng = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, J = (t, A) => (t & A) !== 0, $g = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (t, A) => {
    if (A.length === 0)
      return [];
    const e = A[0];
    return e.type === 20 && e.value === "none" ? [] : A;
  }
}, Pg = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: (t, A) => {
    if (A.length === 0)
      return null;
    const e = A[0];
    if (e.type === 20 && e.value === "none")
      return null;
    const r = [], s = A.filter(ts);
    for (let n = 0; n < s.length; n++) {
      const i = s[n], o = s[n + 1];
      if (i.type === 20) {
        const a = o && tA(o) ? o.number : 1;
        r.push({ counter: i.value, increment: a });
      }
    }
    return r;
  }
}, Gg = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: (t, A) => {
    if (A.length === 0)
      return [];
    const e = [], r = A.filter(ts);
    for (let s = 0; s < r.length; s++) {
      const n = r[s], i = r[s + 1];
      if (T(n) && n.value !== "none") {
        const o = i && tA(i) ? i.number : 0;
        e.push({ counter: n.value, reset: o });
      }
    }
    return e;
  }
}, Vg = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: (t, A) => A.filter(GA).map((e) => sl.parse(t, e))
}, Xg = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: (t, A) => {
    if (A.length === 0)
      return null;
    const e = A[0];
    if (e.type === 20 && e.value === "none")
      return null;
    const r = [], s = A.filter(uB);
    if (s.length % 2 !== 0)
      return null;
    for (let n = 0; n < s.length; n += 2) {
      const i = s[n].value, o = s[n + 1].value;
      r.push({ open: i, close: o });
    }
    return r;
  }
}, po = (t, A, e) => {
  if (!t)
    return "";
  const r = t[Math.min(A, t.length - 1)];
  return r ? e ? r.open : r.close : "";
}, zg = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (t, A) => A.length === 1 && Nt(A[0], "none") ? [] : MA(A).map((e) => {
    const r = {
      color: 255,
      offsetX: rA,
      offsetY: rA,
      blur: rA,
      spread: rA,
      inset: !1
    };
    let s = 0;
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      Nt(i, "inset") ? r.inset = !0 : he(i) ? (s === 0 ? r.offsetX = i : s === 1 ? r.offsetY = i : s === 2 ? r.blur = i : r.spread = i, s++) : r.color = le.parse(t, i);
    }
    return r;
  })
}, Wg = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: (t, A) => {
    const e = [
      0,
      1,
      2
      /* PAINT_ORDER_LAYER.MARKERS */
    ], r = [];
    return A.filter(T).forEach((s) => {
      switch (s.value) {
        case "stroke":
          r.push(
            1
            /* PAINT_ORDER_LAYER.STROKE */
          );
          break;
        case "fill":
          r.push(
            0
            /* PAINT_ORDER_LAYER.FILL */
          );
          break;
        case "markers":
          r.push(
            2
            /* PAINT_ORDER_LAYER.MARKERS */
          );
          break;
      }
    }), e.forEach((s) => {
      r.indexOf(s) === -1 && r.push(s);
    }), r;
  }
}, Jg = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Yg = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: (t, A) => GA(A) ? A.number : 0
}, Zg = {
  name: "-webkit-line-clamp",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: (t, A) => A.type === 20 && A.value === "none" ? 0 : A.type === 17 ? Math.max(0, Math.floor(A.number)) : 0
}, qg = {
  name: "objectFit",
  initialValue: "fill",
  prefix: !1,
  type: 1,
  parse: (t, A) => A.filter(T).reduce(
    (e, r) => e | jg(r.value),
    0
    /* OBJECT_FIT.FILL */
  )
}, jg = (t) => {
  switch (t) {
    case "contain":
      return 2;
    case "cover":
      return 4;
    case "none":
      return 8;
    case "scale-down":
      return 16;
  }
  return 0;
}, Ad = {
  name: "text-overflow",
  initialValue: "clip",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "ellipsis":
        return 1;
      case "clip":
      default:
        return 0;
    }
  }
};
var EA;
(function(t) {
  t[t.AUTO = 0] = "AUTO", t[t.CRISP_EDGES = 1] = "CRISP_EDGES", t[t.PIXELATED = 2] = "PIXELATED", t[t.SMOOTH = 3] = "SMOOTH";
})(EA || (EA = {}));
const ed = {
  name: "image-rendering",
  initialValue: "auto",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A.toLowerCase()) {
      case "crisp-edges":
      case "-webkit-crisp-edges":
      case "-moz-crisp-edges":
        return EA.CRISP_EDGES;
      case "pixelated":
      case "-webkit-optimize-contrast":
        return EA.PIXELATED;
      case "smooth":
      case "high-quality":
        return EA.SMOOTH;
      case "auto":
      default:
        return EA.AUTO;
    }
  }
};
class td {
  constructor(A, e) {
    this.animationDuration = Q(A, Vg, e.animationDuration), this.backgroundClip = Q(A, cu, e.backgroundClip), this.backgroundColor = Q(A, hu, e.backgroundColor), this.backgroundImage = Q(A, mu, e.backgroundImage), this.backgroundOrigin = Q(A, Uu, e.backgroundOrigin), this.backgroundPosition = Q(A, Fu, e.backgroundPosition), this.backgroundRepeat = Q(A, xu, e.backgroundRepeat), this.backgroundSize = Q(A, Eu, e.backgroundSize), this.borderTopColor = Q(A, Iu, e.borderTopColor), this.borderRightColor = Q(A, Hu, e.borderRightColor), this.borderBottomColor = Q(A, Tu, e.borderBottomColor), this.borderLeftColor = Q(A, Su, e.borderLeftColor), this.borderTopLeftRadius = Q(A, vu, e.borderTopLeftRadius), this.borderTopRightRadius = Q(A, Lu, e.borderTopRightRadius), this.borderBottomRightRadius = Q(A, ku, e.borderBottomRightRadius), this.borderBottomLeftRadius = Q(A, Du, e.borderBottomLeftRadius), this.borderTopStyle = Q(A, Ku, e.borderTopStyle), this.borderRightStyle = Q(A, Mu, e.borderRightStyle), this.borderBottomStyle = Q(A, Ru, e.borderBottomStyle), this.borderLeftStyle = Q(A, Ou, e.borderLeftStyle), this.borderTopWidth = Q(A, _u, e.borderTopWidth), this.borderRightWidth = Q(A, Nu, e.borderRightWidth), this.borderBottomWidth = Q(A, $u, e.borderBottomWidth), this.borderLeftWidth = Q(A, Pu, e.borderLeftWidth), this.boxShadow = Q(A, zg, e.boxShadow), this.clipPath = Q(A, Ju, e.clipPath), this.color = Q(A, Yu, e.color), this.direction = Q(A, Zu, e.direction), this.display = Q(A, qu, e.display), this.float = Q(A, Ag, e.cssFloat), this.fontFamily = Q(A, Mg, e.fontFamily), this.fontSize = Q(A, Rg, e.fontSize), this.fontStyle = Q(A, Ng, e.fontStyle), this.fontVariant = Q(A, _g, e.fontVariant), this.fontWeight = Q(A, Og, e.fontWeight), this.letterSpacing = Q(A, eg, e.letterSpacing), this.lineBreak = Q(A, tg, e.lineBreak), this.lineHeight = Q(A, rg, e.lineHeight), this.listStyleImage = Q(A, sg, e.listStyleImage), this.listStylePosition = Q(A, ng, e.listStylePosition), this.listStyleType = Q(A, En, e.listStyleType), this.marginTop = Q(A, ig, e.marginTop), this.marginRight = Q(A, og, e.marginRight), this.marginBottom = Q(A, ag, e.marginBottom), this.marginLeft = Q(A, lg, e.marginLeft), this.opacity = Q(A, Sg, e.opacity);
    const r = Q(A, cg, e.overflow);
    this.overflowX = r[0], this.overflowY = r[r.length > 1 ? 1 : 0], this.overflowWrap = Q(A, hg, e.overflowWrap), this.paddingTop = Q(A, Bg, e.paddingTop), this.paddingRight = Q(A, ug, e.paddingRight), this.paddingBottom = Q(A, gg, e.paddingBottom), this.paddingLeft = Q(A, dg, e.paddingLeft), this.paintOrder = Q(A, Wg, e.paintOrder), this.position = Q(A, fg, e.position), this.textAlign = Q(A, pg, e.textAlign), this.textDecorationColor = Q(A, vg, e.textDecorationColor ?? e.color), this.textDecorationLine = Q(A, Lg, e.textDecorationLine ?? e.textDecoration), this.textDecorationStyle = Q(A, kg, e.textDecorationStyle), this.textDecorationThickness = Q(A, Dg, e.textDecorationThickness), this.textUnderlineOffset = Q(A, Kg, e.textUnderlineOffset), this.textShadow = Q(A, wg, e.textShadow), this.textTransform = Q(A, Qg, e.textTransform), this.textOverflow = Q(A, Ad, e.textOverflow), this.transform = Q(A, Cg, e.transform), this.transformOrigin = Q(A, Eg, e.transformOrigin), this.rotate = Q(A, yg, e.rotate), this.visibility = Q(A, Ig, e.visibility), this.webkitTextStrokeColor = Q(A, Jg, e.webkitTextStrokeColor), this.webkitTextStrokeWidth = Q(A, Yg, e.webkitTextStrokeWidth), this.webkitLineClamp = Q(A, Zg, e.webkitLineClamp), this.wordBreak = Q(A, Hg, e.wordBreak), this.zIndex = Q(A, Tg, e.zIndex), this.objectFit = Q(A, qg, e.objectFit), this.imageRendering = Q(A, ed, e.imageRendering);
  }
  isVisible() {
    return this.display > 0 && this.opacity > 0 && this.visibility === 0;
  }
  isTransparent() {
    return ae(this.backgroundColor);
  }
  isTransformed() {
    return this.transform !== null || this.rotate !== null;
  }
  isPositioned() {
    return this.position !== 0;
  }
  isPositionedWithZIndex() {
    return this.isPositioned() && !this.zIndex.auto;
  }
  isFloating() {
    return this.float !== 0;
  }
  isInlineLevel() {
    return J(
      this.display,
      4
      /* DISPLAY.INLINE */
    ) || J(
      this.display,
      33554432
      /* DISPLAY.INLINE_BLOCK */
    ) || J(
      this.display,
      268435456
      /* DISPLAY.INLINE_FLEX */
    ) || J(
      this.display,
      536870912
      /* DISPLAY.INLINE_GRID */
    ) || J(
      this.display,
      67108864
      /* DISPLAY.INLINE_LIST_ITEM */
    ) || J(
      this.display,
      134217728
      /* DISPLAY.INLINE_TABLE */
    );
  }
}
class rd {
  constructor(A, e) {
    this.content = Q(A, $g, e.content), this.quotes = Q(A, Xg, e.quotes);
  }
}
class fo {
  constructor(A, e) {
    this.counterIncrement = Q(A, Pg, e.counterIncrement), this.counterReset = Q(A, Gg, e.counterReset);
  }
}
const Q = (t, A, e) => {
  const r = new La(), s = e !== null && typeof e < "u" ? e.toString() : A.initialValue;
  r.write(s);
  const n = new Ze(r.read());
  switch (A.type) {
    case 2:
      const i = n.parseComponentValue();
      return A.parse(t, T(i) ? i.value : A.initialValue);
    case 0:
      return A.parse(t, n.parseComponentValue());
    case 1:
      return A.parse(t, n.parseComponentValues());
    case 4:
      return n.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return tt.parse(t, n.parseComponentValue());
        case "color":
          return le.parse(t, n.parseComponentValue());
        case "image":
          return Pn.parse(t, n.parseComponentValue());
        case "length":
          const o = n.parseComponentValue();
          return he(o) ? o : rA;
        case "length-percentage":
          const a = n.parseComponentValue();
          return N(a) ? a : rA;
        case "time":
          return sl.parse(t, n.parseComponentValue());
      }
      break;
  }
}, YA = (t) => t.nodeType === Node.ELEMENT_NODE, nl = (t) => t.nodeType === Node.TEXT_NODE, Ye = (t) => typeof t.className == "object", $t = (t) => YA(t) && typeof t.style < "u" && !Ye(t), sd = (t) => t.tagName === "LI", nd = (t) => t.tagName === "OL", wo = (t) => !Ye(t) && t.tagName.indexOf("-") > 0, id = "data-html2canvas-debug", od = (t) => {
  if (typeof t.getAttribute != "function")
    return 0;
  switch (t.getAttribute(id)) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
}, yn = (t, A) => {
  const e = od(t);
  return e === 1 || A === e;
};
class Qo {
  /**
   * Normalize a single element and return original styles.
   *
   * ## Why we replace transforms with an identity value instead of "none"
   *
   * `getBoundingClientRect()` returns visual (post-transform) coordinates, so we
   * must neutralize any active transform before measuring element bounds.
   *
   * The naive approach of setting `transform: none` (or `rotate: none`) has a
   * critical side-effect: per **CSS Transforms Level 2**, an element whose
   * `transform` is non-none automatically becomes the **containing block** for
   * all of its `position: absolute` *and* `position: fixed` descendants.
   * Setting it to `none` destroys that role, causing children to resolve their
   * percentage dimensions and offsets against an unintended ancestor — which
   * produces completely wrong bounds.
   *
   * Solution: instead of removing the transform, we replace it with a visually
   * inert identity value:
   *
   * - `transform: scale(0.5)` → `transform: translate(0, 0)`
   *   - `translate(0, 0)` is an identity transform (no visual change, no layout shift).
   *   - `getBoundingClientRect()` returns the same layout-space coordinates as
   *     if there were no transform at all.
   *   - Because the value is still non-none, the element **remains a containing
   *     block** for both `position: absolute` and `position: fixed` descendants.
   *
   * - `rotate: 45deg` → `rotate: 0deg`
   *   - `0deg` is the identity rotation; `0deg ≠ none`, so the same containing-
   *     block guarantee holds.
   *
   * @param element - Element to normalize
   * @param styles - Parsed CSS styles
   * @returns Original styles map for restoration
   */
  static normalizeElement(A, e) {
    const r = {};
    return $t(A) && (e.animationDuration.some((s) => s > 0) && (r.animationDuration = A.style.animationDuration, A.style.animationDuration = "0s"), e.transform !== null && (r.transform = A.style.transform, A.style.transform = "translate(0, 0)"), e.rotate !== null && (r.rotate = A.style.rotate, A.style.rotate = "0deg", r.transform === void 0 && (r.transform = A.style.transform, A.style.transform = "translate(0, 0)"))), r;
  }
  /**
   * Restore element styles after rendering.
   *
   * @param element - Element to restore
   * @param originalStyles - Original styles to restore
   */
  static restoreElement(A, e) {
    $t(A) && (e.animationDuration !== void 0 && (A.style.animationDuration = e.animationDuration), e.transform !== void 0 && (A.style.transform = e.transform), e.rotate !== void 0 && (A.style.rotate = e.rotate));
  }
}
class VA {
  constructor(A, e, r = {}) {
    if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, yn(
      e,
      3
      /* DebuggerType.PARSE */
    ))
      debugger;
    this.styles = new td(A, A.config.window.getComputedStyle(e, null)), r.normalizeDom !== !1 && $t(e) && (this.originalStyles = Qo.normalizeElement(e, this.styles), this.originalElement = e), this.bounds = As(this.context, e), yn(
      e,
      4
      /* DebuggerType.RENDER */
    ) && (this.flags |= 16);
  }
  /**
   * Restore original element styles (if normalized)
   * Call this after rendering is complete to clean up DOM state
   */
  restore() {
    this.originalStyles && this.originalElement && (Qo.restoreElement(this.originalElement, this.originalStyles), this.originalStyles = void 0, this.originalElement = void 0);
  }
  /**
   * Recursively restore all elements in the tree
   * Call this on the root container after rendering is complete
   */
  restoreTree() {
    this.restore();
    for (const A of this.elements)
      A.restoreTree();
  }
}
var ad = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Co = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Et = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var mr = 0; mr < Co.length; mr++)
  Et[Co.charCodeAt(mr)] = mr;
var ld = function(t) {
  var A = t.length * 0.75, e = t.length, r, s = 0, n, i, o, a;
  t[t.length - 1] === "=" && (A--, t[t.length - 2] === "=" && A--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), l = Array.isArray(c) ? c : new Uint8Array(c);
  for (r = 0; r < e; r += 4)
    n = Et[t.charCodeAt(r)], i = Et[t.charCodeAt(r + 1)], o = Et[t.charCodeAt(r + 2)], a = Et[t.charCodeAt(r + 3)], l[s++] = n << 2 | i >> 4, l[s++] = (i & 15) << 4 | o >> 2, l[s++] = (o & 3) << 6 | a & 63;
  return c;
}, cd = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 2)
    e.push(t[r + 1] << 8 | t[r]);
  return e;
}, hd = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 4)
    e.push(t[r + 3] << 24 | t[r + 2] << 16 | t[r + 1] << 8 | t[r]);
  return e;
}, Ee = 5, Gn = 11, Vs = 2, Bd = Gn - Ee, il = 65536 >> Ee, ud = 1 << Ee, Xs = ud - 1, gd = 1024 >> Ee, dd = il + gd, pd = dd, fd = 32, wd = pd + fd, Qd = 65536 >> Gn, Cd = 1 << Bd, md = Cd - 1, mo = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, Ud = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, Fd = function(t, A) {
  var e = ld(t), r = Array.isArray(e) ? hd(e) : new Uint32Array(e), s = Array.isArray(e) ? cd(e) : new Uint16Array(e), n = 24, i = mo(s, n / 2, r[4] / 2), o = r[5] === 2 ? mo(s, (n + r[4]) / 2) : Ud(r, Math.ceil((n + r[4]) / 4));
  return new xd(r[0], r[1], r[2], r[3], i, o);
}, xd = (
  /** @class */
  (function() {
    function t(A, e, r, s, n, i) {
      this.initialValue = A, this.errorValue = e, this.highStart = r, this.highValueIndex = s, this.index = n, this.data = i;
    }
    return t.prototype.get = function(A) {
      var e;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return e = this.index[A >> Ee], e = (e << Vs) + (A & Xs), this.data[e];
        if (A <= 65535)
          return e = this.index[il + (A - 55296 >> Ee)], e = (e << Vs) + (A & Xs), this.data[e];
        if (A < this.highStart)
          return e = wd - Qd + (A >> Gn), e = this.index[e], e += A >> Ee & md, e = this.index[e], e = (e << Vs) + (A & Xs), this.data[e];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, t;
  })()
), Uo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bd = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ur = 0; Ur < Uo.length; Ur++)
  bd[Uo.charCodeAt(Ur)] = Ur;
var Ed = 1, zs = 2, Ws = 3, Fo = 4, xo = 5, yd = 7, bo = 8, Js = 9, Ys = 10, Eo = 11, yo = 12, Io = 13, Ho = 14, Zs = 15, Id = function(t) {
  for (var A = [], e = 0, r = t.length; e < r; ) {
    var s = t.charCodeAt(e++);
    if (s >= 55296 && s <= 56319 && e < r) {
      var n = t.charCodeAt(e++);
      (n & 64512) === 56320 ? A.push(((s & 1023) << 10) + (n & 1023) + 65536) : (A.push(s), e--);
    } else
      A.push(s);
  }
  return A;
}, Hd = function() {
  for (var t = [], A = 0; A < arguments.length; A++)
    t[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, t);
  var e = t.length;
  if (!e)
    return "";
  for (var r = [], s = -1, n = ""; ++s < e; ) {
    var i = t[s];
    i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (s + 1 === e || r.length > 16384) && (n += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return n;
}, Td = Fd(ad), IA = "×", qs = "÷", Sd = function(t) {
  return Td.get(t);
}, vd = function(t, A, e) {
  var r = e - 2, s = A[r], n = A[e - 1], i = A[e];
  if (n === zs && i === Ws)
    return IA;
  if (n === zs || n === Ws || n === Fo || i === zs || i === Ws || i === Fo)
    return qs;
  if (n === bo && [bo, Js, Eo, yo].indexOf(i) !== -1 || (n === Eo || n === Js) && (i === Js || i === Ys) || (n === yo || n === Ys) && i === Ys || i === Io || i === xo || i === yd || n === Ed)
    return IA;
  if (n === Io && i === Ho) {
    for (; s === xo; )
      s = A[--r];
    if (s === Ho)
      return IA;
  }
  if (n === Zs && i === Zs) {
    for (var o = 0; s === Zs; )
      o++, s = A[--r];
    if (o % 2 === 0)
      return IA;
  }
  return qs;
}, Ld = function(t) {
  var A = Id(t), e = A.length, r = 0, s = 0, n = A.map(Sd);
  return {
    next: function() {
      if (r >= e)
        return { done: !0, value: null };
      for (var i = IA; r < e && (i = vd(A, n, ++r)) === IA; )
        ;
      if (i !== IA || r === e) {
        var o = Hd.apply(null, A.slice(s, r));
        return s = r, { value: o, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, kd = function(t) {
  for (var A = Ld(t), e = [], r; !(r = A.next()).done; )
    r.value && e.push(r.value.slice());
  return e;
};
const Dd = (t) => {
  if (t.createRange) {
    const e = t.createRange();
    if (e.getBoundingClientRect) {
      const r = t.createElement("boundtest");
      r.style.height = "123px", r.style.display = "block", t.body.appendChild(r), e.selectNode(r);
      const s = e.getBoundingClientRect(), n = Math.round(s.height);
      if (t.body.removeChild(r), n === 123)
        return !0;
    }
  }
  return !1;
}, Kd = (t) => {
  const A = t.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", t.body.appendChild(A);
  const e = t.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  const r = A.firstChild, s = es(r.data).map((a) => AA(a));
  let n = 0, i = {};
  const o = s.every((a, c) => {
    e.setStart(r, n), e.setEnd(r, n + a.length);
    const l = e.getBoundingClientRect();
    n += a.length;
    const h = l.x > i.x || l.y > i.y;
    return i = l, c === 0 ? !0 : h;
  });
  return t.body.removeChild(A), o;
}, Md = () => typeof new Image().crossOrigin < "u", Rd = () => typeof new XMLHttpRequest().responseType == "string", Od = (t) => {
  const A = new Image(), e = t.createElement("canvas"), r = e.getContext("2d");
  if (!r)
    return !1;
  A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(A, 0, 0), e.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, To = (t) => t[0] === 0 && t[1] === 255 && t[2] === 0 && t[3] === 255, _d = (t) => {
  const A = t.createElement("canvas"), e = 100;
  A.width = e, A.height = e;
  const r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, e, e);
  const s = new Image(), n = A.toDataURL();
  s.src = n;
  const i = In(e, e, 0, 0, s);
  return r.fillStyle = "red", r.fillRect(0, 0, e, e), So(i).then((o) => {
    r.drawImage(o, 0, 0);
    const a = r.getImageData(0, 0, e, e).data;
    r.fillStyle = "red", r.fillRect(0, 0, e, e);
    const c = t.createElement("div");
    return c.style.backgroundImage = `url(${n})`, c.style.height = `${e}px`, To(a) ? So(In(e, e, 0, 0, c)) : Promise.reject(!1);
  }).then((o) => (r.drawImage(o, 0, 0), To(r.getImageData(0, 0, e, e).data))).catch(() => !1);
}, In = (t, A, e, r, s) => {
  const n = "http://www.w3.org/2000/svg", i = document.createElementNS(n, "svg"), o = document.createElementNS(n, "foreignObject");
  return i.setAttributeNS(null, "width", t.toString()), i.setAttributeNS(null, "height", A.toString()), o.setAttributeNS(null, "width", "100%"), o.setAttributeNS(null, "height", "100%"), o.setAttributeNS(null, "x", e.toString()), o.setAttributeNS(null, "y", r.toString()), o.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(o), o.appendChild(s), i;
}, So = (t) => new Promise((A, e) => {
  const r = new Image();
  r.onload = () => A(r), r.onerror = e, r.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(t))}`;
}), BA = {
  get SUPPORT_RANGE_BOUNDS() {
    const t = Dd(document);
    return Object.defineProperty(BA, "SUPPORT_RANGE_BOUNDS", { value: t }), t;
  },
  get SUPPORT_WORD_BREAKING() {
    const t = BA.SUPPORT_RANGE_BOUNDS && Kd(document);
    return Object.defineProperty(BA, "SUPPORT_WORD_BREAKING", { value: t }), t;
  },
  get SUPPORT_SVG_DRAWING() {
    const t = Od(document);
    return Object.defineProperty(BA, "SUPPORT_SVG_DRAWING", { value: t }), t;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    const t = typeof Array.from == "function" && typeof window.fetch == "function" ? _d(document) : Promise.resolve(!1);
    return Object.defineProperty(BA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: t }), t;
  },
  get SUPPORT_CORS_IMAGES() {
    const t = Md();
    return Object.defineProperty(BA, "SUPPORT_CORS_IMAGES", { value: t }), t;
  },
  get SUPPORT_RESPONSE_TYPE() {
    const t = Rd();
    return Object.defineProperty(BA, "SUPPORT_RESPONSE_TYPE", { value: t }), t;
  },
  get SUPPORT_CORS_XHR() {
    const t = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(BA, "SUPPORT_CORS_XHR", { value: t }), t;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    const t = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(BA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: t }), t;
  }
};
class ye {
  constructor(A, e) {
    this.text = A, this.bounds = e;
  }
}
const Nd = (t, A, e, r) => {
  const s = Gd(A, e), n = [];
  let i = 0;
  return s.forEach((o) => {
    if (e.textDecorationLine.length || o.trim().length > 0)
      if (BA.SUPPORT_RANGE_BOUNDS) {
        const a = vo(r, i, o.length).getClientRects();
        if (a.length > 1) {
          const c = _r(o);
          let l = 0;
          c.forEach((h) => {
            n.push(new ye(h, pA.fromDOMRectList(t, vo(r, l + i, h.length).getClientRects()))), l += h.length;
          });
        } else
          n.push(new ye(o, pA.fromDOMRectList(t, a)));
      } else {
        const a = r.splitText(o.length);
        n.push(new ye(o, $d(t, r))), r = a;
      }
    else BA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(o.length));
    i += o.length;
  }), n;
}, $d = (t, A) => {
  const e = A.ownerDocument;
  if (e) {
    const r = e.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    const s = A.parentNode;
    if (s) {
      s.replaceChild(r, A);
      const n = As(t, r);
      return r.firstChild && s.replaceChild(r.firstChild, r), n;
    }
  }
  return pA.EMPTY;
}, vo = (t, A, e) => {
  const r = t.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  const s = r.createRange();
  return s.setStart(t, A), s.setEnd(t, A + e), s;
}, _r = (t) => {
  if (BA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    const A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(t)).map((e) => e.segment);
  }
  return kd(t);
}, Pd = (t, A) => {
  if (BA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    const e = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(e.segment(t)).map((r) => r.segment);
  }
  return Xd(t, A);
}, Gd = (t, A) => A.letterSpacing !== 0 ? _r(t) : Pd(t, A), Vd = [32, 160, 4961, 65792, 65793, 4153, 4241], Xd = (t, A) => {
  const e = oh(t, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [];
  let s;
  for (; !(s = e.next()).done; )
    if (s.value) {
      const n = s.value.slice(), i = es(n);
      let o = "";
      i.forEach((a) => {
        Vd.indexOf(a) === -1 ? o += AA(a) : (o.length && r.push(o), r.push(AA(a)), o = "");
      }), o.length && r.push(o);
    }
  return r;
};
class zd {
  constructor(A, e, r) {
    this.text = Wd(e.data, r.textTransform), this.textBounds = Nd(A, this.text, r, e);
  }
}
const Wd = (t, A) => {
  switch (A) {
    case 1:
      return t.toLowerCase();
    case 3:
      return t.replace(Jd, Yd);
    case 2:
      return t.toUpperCase();
    default:
      return t;
  }
}, Jd = /(^|\s|:|-|\(|\))([a-z])/g, Yd = (t, A, e) => t.length > 0 ? A + e.toUpperCase() : t;
class ol extends VA {
  constructor(A, e) {
    super(A, e), this.src = e.currentSrc || e.src, this.intrinsicWidth = e.naturalWidth, this.intrinsicHeight = e.naturalHeight, this.context.cache.addImage(this.src);
  }
}
class al extends VA {
  constructor(A, e) {
    super(A, e), this.canvas = e, this.intrinsicWidth = e.width, this.intrinsicHeight = e.height;
  }
}
class ll extends VA {
  constructor(A, e) {
    super(A, e);
    const r = new XMLSerializer(), s = As(A, e);
    e.setAttribute("width", `${s.width}px`), e.setAttribute("height", `${s.height}px`), this.svg = `data:image/svg+xml,${encodeURIComponent(r.serializeToString(e))}`, this.intrinsicWidth = e.width.baseVal.value, this.intrinsicHeight = e.height.baseVal.value, this.context.cache.addImage(this.svg);
  }
}
class cl extends VA {
  constructor(A, e) {
    super(A, e), this.value = e.value;
  }
}
class Hn extends VA {
  constructor(A, e) {
    super(A, e), this.start = e.start, this.reversed = typeof e.reversed == "boolean" && e.reversed === !0;
  }
}
const Zd = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], qd = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], jd = (t) => t.width > t.height ? new pA(t.left + (t.width - t.height) / 2, t.top, t.height, t.height) : t.width < t.height ? new pA(t.left, t.top + (t.height - t.width) / 2, t.width, t.width) : t, Ap = (t) => {
  const A = t.type === tp ? new Array(t.value.length + 1).join("•") : t.value;
  return A.length === 0 ? t.placeholder || "" : A;
}, ep = (t) => t.value.length === 0 && !!t.placeholder, Nr = "checkbox", $r = "radio", tp = "password", Lo = 707406591, rp = 1970632191;
class St extends VA {
  constructor(A, e) {
    switch (super(A, e), this.type = e.type.toLowerCase(), this.checked = e.checked, this.value = Ap(e), this.isPlaceholder = ep(e), (this.type === Nr || this.type === $r) && (this.styles.backgroundColor = 3739148031, this.styles.borderTopColor = this.styles.borderRightColor = this.styles.borderBottomColor = this.styles.borderLeftColor = 2779096575, this.styles.borderTopWidth = this.styles.borderRightWidth = this.styles.borderBottomWidth = this.styles.borderLeftWidth = 1, this.styles.borderTopStyle = this.styles.borderRightStyle = this.styles.borderBottomStyle = this.styles.borderLeftStyle = 1, this.styles.backgroundClip = [
      0
      /* BACKGROUND_CLIP.BORDER_BOX */
    ], this.styles.backgroundOrigin = [
      0
      /* BACKGROUND_ORIGIN.BORDER_BOX */
    ], this.bounds = jd(this.bounds)), this.type) {
      case Nr:
        this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = Zd;
        break;
      case $r:
        this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = qd;
        break;
    }
  }
}
class hl extends VA {
  constructor(A, e) {
    super(A, e);
    const r = e.options[e.selectedIndex || 0];
    this.value = r && r.text || "";
  }
}
class Bl extends VA {
  constructor(A, e) {
    super(A, e), this.value = e.value;
  }
}
class ul extends VA {
  constructor(A, e, r) {
    super(A, e), this.src = e.src, this.width = parseInt(e.width, 10) || 0, this.height = parseInt(e.height, 10) || 0, this.backgroundColor = this.styles.backgroundColor, this.parseTreeFn = r;
    try {
      if (e.contentWindow && e.contentWindow.document && e.contentWindow.document.documentElement && this.parseTreeFn) {
        this.tree = this.parseTreeFn(A, e.contentWindow.document.documentElement);
        const s = e.contentWindow.document.documentElement ? qe(A, getComputedStyle(e.contentWindow.document.documentElement).backgroundColor) : PA.TRANSPARENT, n = e.contentWindow.document.body ? qe(A, getComputedStyle(e.contentWindow.document.body).backgroundColor) : PA.TRANSPARENT;
        this.backgroundColor = ae(s) ? ae(n) ? this.styles.backgroundColor : n : s;
      }
    } catch {
    }
  }
}
const sp = ["OL", "UL", "MENU"], Lr = (t, A, e, r) => {
  for (let s = A.firstChild, n; s; s = n)
    if (n = s.nextSibling, nl(s) && s.data.length > 0)
      e.textNodes.push(new zd(t, s, e.styles));
    else if (YA(s))
      if (yt(s) && s.assignedNodes)
        s.assignedNodes().forEach((i) => Lr(t, i, e, r));
      else {
        const i = gl(t, s);
        i.styles.isVisible() && (np(s, i, r) ? i.flags |= 4 : ip(i.styles) && (i.flags |= 2), sp.indexOf(s.tagName) !== -1 && (i.flags |= 8), e.elements.push(i), s.slot, s.shadowRoot ? Lr(t, s.shadowRoot, i, r) : !Pr(s) && !pl(s) && !Gr(s) && Lr(t, s, i, r));
      }
}, gl = (t, A) => Tn(A) ? new ol(t, A) : fl(A) ? new al(t, A) : pl(A) ? new ll(t, A) : sd(A) ? new cl(t, A) : nd(A) ? new Hn(t, A) : op(A) ? new St(t, A) : Gr(A) ? new hl(t, A) : Pr(A) ? new Bl(t, A) : wl(A) ? new ul(t, A, dl) : new VA(t, A), dl = (t, A) => {
  const e = gl(t, A);
  return e.flags |= 4, Lr(t, A, e, e), e;
}, np = (t, A, e) => A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || Vn(t) && e.styles.isTransparent(), ip = (t) => t.isPositioned() || t.isFloating() ? !0 : J(
  t.display,
  268435456
  /* DISPLAY.INLINE_FLEX */
) || J(
  t.display,
  33554432
  /* DISPLAY.INLINE_BLOCK */
) || J(
  t.display,
  536870912
  /* DISPLAY.INLINE_GRID */
) || J(
  t.display,
  134217728
  /* DISPLAY.INLINE_TABLE */
), op = (t) => t.tagName === "INPUT", ap = (t) => t.tagName === "HTML", pl = (t) => t.tagName === "svg", Vn = (t) => t.tagName === "BODY", fl = (t) => t.tagName === "CANVAS", ko = (t) => t.tagName === "VIDEO", Tn = (t) => t.tagName === "IMG", wl = (t) => t.tagName === "IFRAME", js = (t) => t.tagName === "STYLE", Do = (t) => t.tagName === "SCRIPT", Pr = (t) => t.tagName === "TEXTAREA", Gr = (t) => t.tagName === "SELECT", yt = (t) => t.tagName === "SLOT";
class lp {
  constructor() {
    this.counters = {};
  }
  getCounterValue(A) {
    const e = this.counters[A];
    return e && e.length ? e[e.length - 1] : 1;
  }
  getCounterValues(A) {
    const e = this.counters[A];
    return e || [];
  }
  pop(A) {
    A.forEach((e) => this.counters[e].pop());
  }
  parse(A) {
    const e = A.counterIncrement, r = A.counterReset;
    let s = !0;
    e !== null && e.forEach((i) => {
      const o = this.counters[i.counter];
      o && i.increment !== 0 && (s = !1, o.length || o.push(1), o[Math.max(0, o.length - 1)] += i.increment);
    });
    const n = [];
    return s && r.forEach((i) => {
      let o = this.counters[i.counter];
      n.push(i.counter), o || (o = this.counters[i.counter] = []), o.push(i.reset);
    }), n;
  }
}
const Ko = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Mo = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
}, cp = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
}, hp = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
}, $e = (t, A, e, r, s, n) => t < A || t > e ? Pt(t, s, n.length > 0) : r.integers.reduce((i, o, a) => {
  for (; t >= o; )
    t -= o, i += r.values[a];
  return i;
}, "") + n, Ql = (t, A, e, r) => {
  let s = "";
  do
    e || t--, s = r(t) + s, t /= A;
  while (t * A >= A);
  return s;
}, j = (t, A, e, r, s) => {
  const n = e - A + 1;
  return (t < 0 ? "-" : "") + (Ql(Math.abs(t), n, r, (i) => AA(Math.floor(i % n) + A)) + s);
}, we = (t, A, e = ". ") => {
  const r = A.length;
  return Ql(Math.abs(t), r, !1, (s) => A[Math.floor(s % r)]) + e;
}, ze = 1, te = 2, re = 4, It = 8, JA = (t, A, e, r, s, n) => {
  if (t < -9999 || t > 9999)
    return Pt(t, 4, s.length > 0);
  let i = Math.abs(t), o = s;
  if (i === 0)
    return A[0] + o;
  for (let a = 0; i > 0 && a <= 4; a++) {
    const c = i % 10;
    c === 0 && J(n, ze) && o !== "" ? o = A[c] + o : c > 1 || c === 1 && a === 0 || c === 1 && a === 1 && J(n, te) || c === 1 && a === 1 && J(n, re) && t > 100 || c === 1 && a > 1 && J(n, It) ? o = A[c] + (a > 0 ? e[a - 1] : "") + o : c === 1 && a > 0 && (o = e[a - 1] + o), i = Math.floor(i / 10);
  }
  return (t < 0 ? r : "") + o;
}, Ro = "十百千萬", Oo = "拾佰仟萬", _o = "マイナス", An = "마이너스", Pt = (t, A, e) => {
  const r = e ? ". " : "", s = e ? "、" : "", n = e ? ", " : "", i = e ? " " : "";
  switch (A) {
    case 0:
      return "•" + i;
    case 1:
      return "◦" + i;
    case 2:
      return "◾" + i;
    case 5:
      const o = j(t, 48, 57, !0, r);
      return o.length < 4 ? `0${o}` : o;
    case 4:
      return we(t, "〇一二三四五六七八九", s);
    case 6:
      return $e(t, 1, 3999, Ko, 3, r).toLowerCase();
    case 7:
      return $e(t, 1, 3999, Ko, 3, r);
    case 8:
      return j(t, 945, 969, !1, r);
    case 9:
      return j(t, 97, 122, !1, r);
    case 10:
      return j(t, 65, 90, !1, r);
    case 11:
      return j(t, 1632, 1641, !0, r);
    case 12:
    case 49:
      return $e(t, 1, 9999, Mo, 3, r);
    case 35:
      return $e(t, 1, 9999, Mo, 3, r).toLowerCase();
    case 13:
      return j(t, 2534, 2543, !0, r);
    case 14:
    case 30:
      return j(t, 6112, 6121, !0, r);
    case 15:
      return we(t, "子丑寅卯辰巳午未申酉戌亥", s);
    case 16:
      return we(t, "甲乙丙丁戊己庚辛壬癸", s);
    case 17:
    case 48:
      return JA(t, "零一二三四五六七八九", Ro, "負", s, te | re | It);
    case 47:
      return JA(t, "零壹貳參肆伍陸柒捌玖", Oo, "負", s, ze | te | re | It);
    case 42:
      return JA(t, "零一二三四五六七八九", Ro, "负", s, te | re | It);
    case 41:
      return JA(t, "零壹贰叁肆伍陆柒捌玖", Oo, "负", s, ze | te | re | It);
    case 26:
      return JA(t, "〇一二三四五六七八九", "十百千万", _o, s, 0);
    case 25:
      return JA(t, "零壱弐参四伍六七八九", "拾百千万", _o, s, ze | te | re);
    case 31:
      return JA(t, "영일이삼사오육칠팔구", "십백천만", An, n, ze | te | re);
    case 33:
      return JA(t, "零一二三四五六七八九", "十百千萬", An, n, 0);
    case 32:
      return JA(t, "零壹貳參四五六七八九", "拾百千", An, n, ze | te | re);
    case 18:
      return j(t, 2406, 2415, !0, r);
    case 20:
      return $e(t, 1, 19999, hp, 3, r);
    case 21:
      return j(t, 2790, 2799, !0, r);
    case 22:
      return j(t, 2662, 2671, !0, r);
    case 52:
      return $e(t, 1, 10999, cp, 3, r);
    case 23:
      return we(t, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return we(t, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return j(t, 3302, 3311, !0, r);
    case 28:
      return we(t, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", s);
    case 29:
      return we(t, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", s);
    case 34:
      return j(t, 3792, 3801, !0, r);
    case 37:
      return j(t, 6160, 6169, !0, r);
    case 38:
      return j(t, 4160, 4169, !0, r);
    case 39:
      return j(t, 2918, 2927, !0, r);
    case 40:
      return j(t, 1776, 1785, !0, r);
    case 43:
      return j(t, 3046, 3055, !0, r);
    case 44:
      return j(t, 3174, 3183, !0, r);
    case 45:
      return j(t, 3664, 3673, !0, r);
    case 46:
      return j(t, 3872, 3881, !0, r);
    case 3:
    default:
      return j(t, 48, 57, !0, r);
  }
}, Sn = "data-html2canvas-ignore", Bp = (t) => {
  let A = t;
  for (; A; ) {
    if (A.parentNode && A.parentNode.host)
      return A.parentNode;
    const e = A.getRootNode();
    if (e && e !== A.ownerDocument && e.host)
      return e;
    A = A.parentNode;
  }
  return null;
};
class No {
  constructor(A, e, r) {
    if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = e, this.counters = new lp(), this.quoteDepth = 0, !e.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    if (!this.options.iframeContainer) {
      const s = Bp(e);
      s && (this.options.iframeContainer = s);
    }
    this.documentElement = this.cloneNode(e.ownerDocument.documentElement, !1);
  }
  toIFrame(A, e) {
    const r = up(A, e, this.options.iframeContainer);
    if (!r.contentWindow)
      throw new Error("Unable to find iframe window");
    const s = A.defaultView.pageXOffset, n = A.defaultView.pageYOffset, i = r.contentWindow, o = i.document, a = pp(r).then(async () => {
      this.scrolledElements.forEach(Cp), i && (i.scrollTo(e.left, e.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (i.scrollY !== e.top || i.scrollX !== e.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(i.scrollX - e.left, i.scrollY - e.top, 0, 0)));
      const u = this.options.onclone, g = this.clonedReferenceElement;
      if (typeof g > "u")
        throw new Error(`Error finding the ${this.referenceElement.nodeName} in the cloned document`);
      return o.fonts && o.fonts.ready && await o.fonts.ready, /(AppleWebKit)/g.test(navigator.userAgent) && await dp(o), typeof u == "function" ? Promise.resolve().then(() => u(o, g)).then(() => r) : r;
    }), c = o.baseURI;
    o.open();
    const l = wp(document.doctype) + "<html></html>";
    try {
      const u = this.referenceElement.ownerDocument?.defaultView, g = u && u.trustedTypes;
      let d = g?.getPolicy?.("html2canvas-pro");
      !d && g && (d = g.createPolicy("html2canvas-pro", {
        createHTML: (p) => p
      })), d ? o.write(d.createHTML(l)) : o.write(l);
    } catch {
      o.write(l);
    }
    Qp(this.referenceElement.ownerDocument, s, n), o.close();
    const h = o.adoptNode(this.documentElement);
    return bp(h, c), o.replaceChild(h, o.documentElement), a;
  }
  createElementClone(A) {
    if (yn(
      A,
      2
      /* DebuggerType.CLONE */
    ))
      debugger;
    if (fl(A))
      return this.createCanvasClone(A);
    if (ko(A))
      return this.createVideoClone(A);
    if (js(A))
      return this.createStyleClone(A);
    const e = A.cloneNode(!1);
    return Tn(e) && (Tn(A) && A.currentSrc && A.currentSrc !== A.src && (e.src = A.currentSrc, e.srcset = ""), e.loading === "lazy" && (e.loading = "eager")), wo(e) && !Ye(e) ? this.createCustomElementClone(e) : e;
  }
  createCustomElementClone(A) {
    const e = document.createElement("div");
    if (e.className = A.className, en(A.style, e), A.shadowRoot)
      try {
        e.attachShadow({ mode: "open" });
      } catch (r) {
        this.context.logger.error("Failed to attach shadow root to custom element clone:", r);
      }
    return e;
  }
  createStyleClone(A) {
    try {
      const r = A.sheet;
      if (r && r.cssRules) {
        const s = [].slice.call(r.cssRules, 0).reduce((i, o) => o && typeof o.cssText == "string" ? i + o.cssText : i, ""), n = A.cloneNode(!1);
        return n.textContent = s, this.options.cspNonce && (n.nonce = this.options.cspNonce), n;
      }
    } catch (r) {
      if (this.context.logger.error("Unable to access cssRules property", r), r.name !== "SecurityError")
        throw r;
    }
    const e = A.cloneNode(!1);
    return this.options.cspNonce && (e.nonce = this.options.cspNonce), e;
  }
  createCanvasClone(A) {
    if (this.options.inlineImages && A.ownerDocument) {
      const r = A.ownerDocument.createElement("img");
      try {
        return r.src = A.toDataURL(), r;
      } catch {
        this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
      }
    }
    const e = A.cloneNode(!1);
    try {
      e.width = A.width, e.height = A.height;
      const r = A.getContext("2d"), s = e.getContext("2d", { willReadFrequently: !0 });
      if (s)
        if (!this.options.allowTaint && r)
          s.putImageData(r.getImageData(0, 0, A.width, A.height), 0, 0);
        else {
          const n = A.getContext("webgl2") ?? A.getContext("webgl");
          n && n.getContextAttributes()?.preserveDrawingBuffer === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A), s.drawImage(A, 0, 0);
        }
      return e;
    } catch {
      this.context.logger.info("Unable to clone canvas as it is tainted", A);
    }
    return e;
  }
  createVideoClone(A) {
    const e = A.ownerDocument.createElement("canvas");
    e.width = A.offsetWidth, e.height = A.offsetHeight;
    const r = e.getContext("2d");
    try {
      return r && (r.drawImage(A, 0, 0, e.width, e.height), this.options.allowTaint || r.getImageData(0, 0, e.width, e.height)), e;
    } catch {
      this.context.logger.info("Unable to clone video as it is tainted", A);
    }
    const s = A.ownerDocument.createElement("canvas");
    return s.width = A.offsetWidth, s.height = A.offsetHeight, s;
  }
  appendChildNode(A, e, r) {
    (!YA(e) || !Do(e) && !e.hasAttribute(Sn) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(e))) && (!this.options.copyStyles || !YA(e) || !js(e)) && A.appendChild(this.cloneNode(e, r));
  }
  /**
   * Check if a child node should be cloned based on filtering rules
   * Filters out: scripts, ignored elements, and optionally styles
   */
  shouldCloneChild(A) {
    return !YA(A) || !Do(A) && !A.hasAttribute(Sn) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(A));
  }
  /**
   * Check if a style element should be cloned based on copyStyles option
   */
  shouldCloneStyleElement(A) {
    return !this.options.copyStyles || !YA(A) || !js(A);
  }
  /**
   * Safely append a cloned child to a target, applying all filtering rules
   */
  safeAppendClonedChild(A, e, r) {
    this.shouldCloneChild(e) && this.shouldCloneStyleElement(e) && A.appendChild(this.cloneNode(e, r));
  }
  /**
   * Clone assigned nodes from a slot element to the target
   */
  cloneAssignedNodes(A, e, r) {
    A.forEach((s) => {
      this.safeAppendClonedChild(e, s, r);
    });
  }
  /**
   * Clone fallback content from a slot element when no nodes are assigned
   */
  cloneSlotFallbackContent(A, e, r) {
    for (let s = A.firstChild; s; s = s.nextSibling)
      this.safeAppendClonedChild(e, s, r);
  }
  /**
   * Handle cloning of a slot element, including assigned nodes or fallback content
   */
  cloneSlotElement(A, e, r) {
    if (!yt(A))
      return;
    const s = A;
    if (typeof s.assignedNodes != "function") {
      this.context.logger.warn("HTMLSlotElement.assignedNodes is not available", A), this.cloneSlotFallbackContent(A, e, r);
      return;
    }
    const n = s.assignedNodes();
    if (!n || !Array.isArray(n)) {
      this.context.logger.warn("assignedNodes() did not return a valid array", A), this.cloneSlotFallbackContent(A, e, r);
      return;
    }
    n.length > 0 ? this.cloneAssignedNodes(n, e, r) : this.cloneSlotFallbackContent(A, e, r);
  }
  /**
   * Clone shadow DOM children to the target shadow root
   */
  cloneShadowDOMChildren(A, e, r) {
    for (let s = A.firstChild; s; s = s.nextSibling)
      YA(s) && yt(s) ? this.cloneSlotElement(s, e, r) : this.safeAppendClonedChild(e, s, r);
  }
  /**
   * Clone light DOM children to the target element
   */
  cloneLightDOMChildren(A, e, r) {
    for (let s = A.firstChild; s; s = s.nextSibling)
      this.appendChildNode(e, s, r);
  }
  /**
   * Clone slot element as light DOM when shadow root creation failed
   */
  cloneSlotElementAsLightDOM(A, e, r) {
    if (!yt(A))
      return;
    const s = A;
    if (typeof s.assignedNodes != "function") {
      for (let i = A.firstChild; i; i = i.nextSibling)
        this.appendChildNode(e, i, r);
      return;
    }
    const n = s.assignedNodes();
    if (n && Array.isArray(n) && n.length > 0)
      n.forEach((i) => this.appendChildNode(e, i, r));
    else
      for (let i = A.firstChild; i; i = i.nextSibling)
        this.appendChildNode(e, i, r);
  }
  /**
   * Clone shadow DOM content as light DOM when shadow root creation failed
   * This is a fallback mechanism to ensure content is not lost
   */
  cloneShadowDOMAsLightDOM(A, e, r) {
    for (let s = A.firstChild; s; s = s.nextSibling)
      YA(s) && yt(s) ? this.cloneSlotElementAsLightDOM(s, e, r) : this.appendChildNode(e, s, r);
  }
  /**
   * Clone child nodes from source element to clone element
   * Handles shadow DOM, slots, and light DOM appropriately
   */
  cloneChildNodes(A, e, r) {
    A.shadowRoot && e.shadowRoot ? (this.cloneShadowDOMChildren(A.shadowRoot, e.shadowRoot, r), this.cloneLightDOMChildren(A, e, r)) : A.shadowRoot && !e.shadowRoot ? this.cloneShadowDOMAsLightDOM(A.shadowRoot, e, r) : this.cloneLightDOMChildren(A, e, r);
  }
  cloneNode(A, e) {
    if (nl(A))
      return document.createTextNode(A.data);
    if (!A.ownerDocument)
      return A.cloneNode(!1);
    const r = A.ownerDocument.defaultView;
    if (r && YA(A) && ($t(A) || Ye(A))) {
      const s = this.createElementClone(A);
      s.style.transitionProperty = "none";
      const n = r.getComputedStyle(A), i = r.getComputedStyle(A, ":before"), o = r.getComputedStyle(A, ":after");
      this.referenceElement === A && $t(s) && (this.clonedReferenceElement = s), Vn(s) && Fp(s, this.options.cspNonce);
      const a = this.counters.parse(new fo(this.context, n)), c = this.resolvePseudoContent(A, s, i, vt.BEFORE);
      wo(A) && (e = !0), ko(A) || this.cloneChildNodes(A, s, e), c && s.insertBefore(c, s.firstChild);
      const l = this.resolvePseudoContent(A, s, o, vt.AFTER);
      return l && s.appendChild(l), this.counters.pop(a), (n && (this.options.copyStyles || Ye(A)) && !wl(A) || e) && en(n, s), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([s, A.scrollLeft, A.scrollTop]), (Pr(A) || Gr(A)) && (Pr(s) || Gr(s)) && (s.value = A.value), s;
    }
    return A.cloneNode(!1);
  }
  resolvePseudoContent(A, e, r, s) {
    if (!r)
      return;
    const n = r.content, i = e.ownerDocument;
    if (!i || !n || n === "none" || n === "-moz-alt-content" || r.display === "none")
      return;
    this.counters.parse(new fo(this.context, r));
    const o = new rd(this.context, r), a = i.createElement("html2canvaspseudoelement");
    en(r, a), o.content.forEach((l) => {
      if (l.type === 0)
        a.appendChild(i.createTextNode(l.value));
      else if (l.type === 22) {
        const h = i.createElement("img");
        h.src = l.value, h.style.opacity = "1", a.appendChild(h);
      } else if (l.type === 18) {
        if (l.name === "attr") {
          const h = l.values.filter(T);
          h.length && a.appendChild(i.createTextNode(A.getAttribute(h[0].value) || ""));
        } else if (l.name === "counter") {
          const [h, u] = l.values.filter(uA);
          if (h && T(h)) {
            const g = this.counters.getCounterValue(h.value), d = u && T(u) ? En.parse(this.context, u.value) : 3;
            a.appendChild(i.createTextNode(Pt(g, d, !1)));
          }
        } else if (l.name === "counters") {
          const [h, u, g] = l.values.filter(uA);
          if (h && T(h)) {
            const d = this.counters.getCounterValues(h.value), p = g && T(g) ? En.parse(this.context, g.value) : 3, U = u && u.type === 0 ? u.value : "", y = d.map((C) => Pt(C, p, !1)).join(U);
            a.appendChild(i.createTextNode(y));
          }
        }
      } else if (l.type === 20)
        switch (l.value) {
          case "open-quote":
            a.appendChild(i.createTextNode(po(o.quotes, this.quoteDepth++, !0)));
            break;
          case "close-quote":
            a.appendChild(i.createTextNode(po(o.quotes, --this.quoteDepth, !1)));
            break;
          default:
            a.appendChild(i.createTextNode(l.value));
        }
    }), a.className = `${vn} ${Ln}`;
    const c = s === vt.BEFORE ? ` ${vn}` : ` ${Ln}`;
    return Ye(e) ? e.className.baseValue += c : e.className += c, a;
  }
  static destroy(A) {
    return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
  }
}
var vt;
(function(t) {
  t[t.BEFORE = 0] = "BEFORE", t[t.AFTER = 1] = "AFTER";
})(vt || (vt = {}));
const up = (t, A, e) => {
  const r = t.createElement("iframe");
  return r.className = "html2canvas-container", r.style.visibility = "hidden", r.style.position = "fixed", r.style.left = "-10000px", r.style.top = "0px", r.style.border = "0", r.width = A.width.toString(), r.height = A.height.toString(), r.scrolling = "no", r.setAttribute(Sn, "true"), (e || t.body).appendChild(r), r;
}, gp = (t) => new Promise((A) => {
  if (t.complete) {
    A();
    return;
  }
  if (!t.src) {
    A();
    return;
  }
  t.onload = A, t.onerror = A;
}), dp = (t) => Promise.all([].slice.call(t.images, 0).map(gp)), pp = (t) => new Promise((A, e) => {
  const r = t.contentWindow;
  if (!r)
    return e("No window assigned for iframe");
  const s = r.document;
  r.onload = t.onload = () => {
    r.onload = t.onload = null;
    const n = setInterval(() => {
      s.body.childNodes.length > 0 && s.readyState === "complete" && (clearInterval(n), A(t));
    }, 50);
  };
}), fp = [
  "all",
  // #2476
  "d",
  // #2483
  "content"
  // Safari shows pseudoelements if content is set
], en = (t, A) => {
  for (let e = t.length - 1; e >= 0; e--) {
    const r = t.item(e);
    fp.indexOf(r) === -1 && !r.startsWith("--") && A.style.setProperty(r, t.getPropertyValue(r));
  }
  return A;
}, wp = (t) => {
  let A = "";
  return t && (A += "<!DOCTYPE ", t.name && (A += t.name), t.internalSubset && (A += " " + t.internalSubset.replace(/"/g, "&quot;").replace(/>/g, "&gt;")), t.publicId ? (A += ' PUBLIC "' + t.publicId.replace(/"/g, "&quot;") + '"', t.systemId && (A += ' "' + t.systemId.replace(/"/g, "&quot;") + '"')) : t.systemId && (A += ' SYSTEM "' + t.systemId.replace(/"/g, "&quot;") + '"'), A += ">"), A;
}, Qp = (t, A, e) => {
  t && t.defaultView && (A !== t.defaultView.pageXOffset || e !== t.defaultView.pageYOffset) && t.defaultView.scrollTo(A, e);
}, Cp = ([t, A, e]) => {
  t.scrollLeft = A, t.scrollTop = e;
}, mp = ":before", Up = ":after", vn = "___html2canvas___pseudoelement_before", Ln = "___html2canvas___pseudoelement_after", $o = `{
    content: "" !important;
    display: none !important;
}`, Fp = (t, A) => {
  xp(t, `.${vn}${mp}${$o}
         .${Ln}${Up}${$o}`, A);
}, xp = (t, A, e) => {
  const r = t.ownerDocument;
  if (r) {
    const s = r.createElement("style");
    s.textContent = A, e && (s.nonce = e), t.appendChild(s);
  }
}, bp = (t, A) => {
  const e = t.ownerDocument.createElement("base");
  e.href = A;
  const r = t.getElementsByTagName("head").item(0);
  r?.insertBefore(e, r?.firstChild ?? null);
};
class m {
  constructor(A, e) {
    this.type = 0, this.x = A, this.y = e;
  }
  add(A, e) {
    return new m(this.x + A, this.y + e);
  }
}
const Pe = (t, A, e) => new m(t.x + (A.x - t.x) * e, t.y + (A.y - t.y) * e);
class ZA {
  constructor(A, e, r, s) {
    this.type = 1, this.start = A, this.startControl = e, this.endControl = r, this.end = s;
  }
  subdivide(A, e) {
    const r = Pe(this.start, this.startControl, A), s = Pe(this.startControl, this.endControl, A), n = Pe(this.endControl, this.end, A), i = Pe(r, s, A), o = Pe(s, n, A), a = Pe(i, o, A);
    return e ? new ZA(this.start, r, i, a) : new ZA(a, o, n, this.end);
  }
  add(A, e) {
    return new ZA(this.start.add(A, e), this.startControl.add(A, e), this.endControl.add(A, e), this.end.add(A, e));
  }
  reverse() {
    return new ZA(this.end, this.endControl, this.startControl, this.start);
  }
}
const FA = (t) => t.type === 1;
class Ep {
  constructor(A) {
    const e = A.styles, r = A.bounds;
    let [s, n] = bt(e.borderTopLeftRadius, r.width, r.height), [i, o] = bt(e.borderTopRightRadius, r.width, r.height), [a, c] = bt(e.borderBottomRightRadius, r.width, r.height), [l, h] = bt(e.borderBottomLeftRadius, r.width, r.height);
    const u = [];
    u.push((s + i) / r.width), u.push((l + a) / r.width), u.push((n + h) / r.height), u.push((o + c) / r.height);
    const g = Math.max(...u);
    g > 1 && (s /= g, n /= g, i /= g, o /= g, a /= g, c /= g, l /= g, h /= g);
    const d = r.width - i, p = r.height - c, U = r.width - a, y = r.height - h, C = e.borderTopWidth, x = e.borderRightWidth, E = e.borderBottomWidth, b = e.borderLeftWidth, K = H(e.paddingTop, A.bounds.width), W = H(e.paddingRight, A.bounds.width), lA = H(e.paddingBottom, A.bounds.width), X = H(e.paddingLeft, A.bounds.width);
    this.topLeftBorderDoubleOuterBox = s > 0 || n > 0 ? z(r.left + b / 3, r.top + C / 3, s - b / 3, n - C / 3, O.TOP_LEFT) : new m(r.left + b / 3, r.top + C / 3), this.topRightBorderDoubleOuterBox = s > 0 || n > 0 ? z(r.left + d, r.top + C / 3, i - x / 3, o - C / 3, O.TOP_RIGHT) : new m(r.left + r.width - x / 3, r.top + C / 3), this.bottomRightBorderDoubleOuterBox = a > 0 || c > 0 ? z(r.left + U, r.top + p, a - x / 3, c - E / 3, O.BOTTOM_RIGHT) : new m(r.left + r.width - x / 3, r.top + r.height - E / 3), this.bottomLeftBorderDoubleOuterBox = l > 0 || h > 0 ? z(r.left + b / 3, r.top + y, l - b / 3, h - E / 3, O.BOTTOM_LEFT) : new m(r.left + b / 3, r.top + r.height - E / 3), this.topLeftBorderDoubleInnerBox = s > 0 || n > 0 ? z(r.left + b * 2 / 3, r.top + C * 2 / 3, s - b * 2 / 3, n - C * 2 / 3, O.TOP_LEFT) : new m(r.left + b * 2 / 3, r.top + C * 2 / 3), this.topRightBorderDoubleInnerBox = s > 0 || n > 0 ? z(r.left + d, r.top + C * 2 / 3, i - x * 2 / 3, o - C * 2 / 3, O.TOP_RIGHT) : new m(r.left + r.width - x * 2 / 3, r.top + C * 2 / 3), this.bottomRightBorderDoubleInnerBox = a > 0 || c > 0 ? z(r.left + U, r.top + p, a - x * 2 / 3, c - E * 2 / 3, O.BOTTOM_RIGHT) : new m(r.left + r.width - x * 2 / 3, r.top + r.height - E * 2 / 3), this.bottomLeftBorderDoubleInnerBox = l > 0 || h > 0 ? z(r.left + b * 2 / 3, r.top + y, l - b * 2 / 3, h - E * 2 / 3, O.BOTTOM_LEFT) : new m(r.left + b * 2 / 3, r.top + r.height - E * 2 / 3), this.topLeftBorderStroke = s > 0 || n > 0 ? z(r.left + b / 2, r.top + C / 2, s - b / 2, n - C / 2, O.TOP_LEFT) : new m(r.left + b / 2, r.top + C / 2), this.topRightBorderStroke = s > 0 || n > 0 ? z(r.left + d, r.top + C / 2, i - x / 2, o - C / 2, O.TOP_RIGHT) : new m(r.left + r.width - x / 2, r.top + C / 2), this.bottomRightBorderStroke = a > 0 || c > 0 ? z(r.left + U, r.top + p, a - x / 2, c - E / 2, O.BOTTOM_RIGHT) : new m(r.left + r.width - x / 2, r.top + r.height - E / 2), this.bottomLeftBorderStroke = l > 0 || h > 0 ? z(r.left + b / 2, r.top + y, l - b / 2, h - E / 2, O.BOTTOM_LEFT) : new m(r.left + b / 2, r.top + r.height - E / 2), this.topLeftBorderBox = s > 0 || n > 0 ? z(r.left, r.top, s, n, O.TOP_LEFT) : new m(r.left, r.top), this.topRightBorderBox = i > 0 || o > 0 ? z(r.left + d, r.top, i, o, O.TOP_RIGHT) : new m(r.left + r.width, r.top), this.bottomRightBorderBox = a > 0 || c > 0 ? z(r.left + U, r.top + p, a, c, O.BOTTOM_RIGHT) : new m(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = l > 0 || h > 0 ? z(r.left, r.top + y, l, h, O.BOTTOM_LEFT) : new m(r.left, r.top + r.height), this.topLeftPaddingBox = s > 0 || n > 0 ? z(r.left + b, r.top + C, Math.max(0, s - b), Math.max(0, n - C), O.TOP_LEFT) : new m(r.left + b, r.top + C), this.topRightPaddingBox = i > 0 || o > 0 ? z(r.left + Math.min(d, r.width - x), r.top + C, d > r.width + x ? 0 : Math.max(0, i - x), Math.max(0, o - C), O.TOP_RIGHT) : new m(r.left + r.width - x, r.top + C), this.bottomRightPaddingBox = a > 0 || c > 0 ? z(r.left + Math.min(U, r.width - b), r.top + Math.min(p, r.height - E), Math.max(0, a - x), Math.max(0, c - E), O.BOTTOM_RIGHT) : new m(r.left + r.width - x, r.top + r.height - E), this.bottomLeftPaddingBox = l > 0 || h > 0 ? z(r.left + b, r.top + Math.min(y, r.height - E), Math.max(0, l - b), Math.max(0, h - E), O.BOTTOM_LEFT) : new m(r.left + b, r.top + r.height - E), this.topLeftContentBox = s > 0 || n > 0 ? z(r.left + b + X, r.top + C + K, Math.max(0, s - (b + X)), Math.max(0, n - (C + K)), O.TOP_LEFT) : new m(r.left + b + X, r.top + C + K), this.topRightContentBox = i > 0 || o > 0 ? z(r.left + Math.min(d, r.width + b + X), r.top + C + K, d > r.width + b + X ? 0 : i - b + X, o - (C + K), O.TOP_RIGHT) : new m(r.left + r.width - (x + W), r.top + C + K), this.bottomRightContentBox = a > 0 || c > 0 ? z(r.left + Math.min(U, r.width - (b + X)), r.top + Math.min(p, r.height + C + K), Math.max(0, a - (x + W)), c - (E + lA), O.BOTTOM_RIGHT) : new m(r.left + r.width - (x + W), r.top + r.height - (E + lA)), this.bottomLeftContentBox = l > 0 || h > 0 ? z(r.left + b + X, r.top + y, Math.max(0, l - (b + X)), h - (E + lA), O.BOTTOM_LEFT) : new m(r.left + b + X, r.top + r.height - (E + lA));
  }
}
var O;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 1] = "TOP_RIGHT", t[t.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", t[t.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(O || (O = {}));
const z = (t, A, e, r, s) => {
  const n = 4 * ((Math.sqrt(2) - 1) / 3), i = e * n, o = r * n, a = t + e, c = A + r;
  switch (s) {
    case O.TOP_LEFT:
      return new ZA(new m(t, c), new m(t, c - o), new m(a - i, A), new m(a, A));
    case O.TOP_RIGHT:
      return new ZA(new m(t, A), new m(t + i, A), new m(a, c - o), new m(a, c));
    case O.BOTTOM_RIGHT:
      return new ZA(new m(a, A), new m(a, A + o), new m(t + i, c), new m(t, c));
    case O.BOTTOM_LEFT:
    default:
      return new ZA(new m(a, c), new m(a - i, c), new m(t, A + o), new m(t, A));
  }
}, Vr = (t) => [t.topLeftBorderBox, t.topRightBorderBox, t.bottomRightBorderBox, t.bottomLeftBorderBox], yp = (t) => [
  t.topLeftContentBox,
  t.topRightContentBox,
  t.bottomRightContentBox,
  t.bottomLeftContentBox
], Xr = (t) => [
  t.topLeftPaddingBox,
  t.topRightPaddingBox,
  t.bottomRightPaddingBox,
  t.bottomLeftPaddingBox
];
class Po {
  constructor(A, e, r) {
    this.offsetX = A, this.offsetY = e, this.matrix = r, this.type = 0, this.target = 6;
  }
}
class Fr {
  constructor(A, e) {
    this.path = A, this.target = e, this.type = 1;
  }
}
class Ip {
  constructor(A) {
    this.opacity = A, this.type = 2, this.target = 6;
  }
}
class dt {
  constructor(A) {
    this.applyClip = A, this.type = 3, this.target = 6;
  }
}
const Hp = (t) => t.type === 0, Cl = (t) => t.type === 1, Tp = (t) => t.type === 2, Sp = (t) => t.type === 3, Go = (t, A) => t.length === A.length ? t.some((e, r) => e === A[r]) : !1, vp = (t, A, e, r, s) => t.map((n, i) => {
  switch (i) {
    case 0:
      return n.add(A, e);
    case 1:
      return n.add(A + r, e);
    case 2:
      return n.add(A + r, e + s);
    case 3:
      return n.add(A, e + s);
  }
  return n;
});
class ml {
  constructor(A) {
    this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
  }
}
class Ul {
  constructor(A, e) {
    if (this.container = A, this.parent = e, this.effects = [], this.curves = new Ep(this.container), this.container.styles.opacity < 1 && this.effects.push(new Ip(this.container.styles.opacity)), this.container.styles.rotate !== null) {
      const r = this.container.styles.transformOrigin, s = this.container.bounds.left + H(r[0], this.container.bounds.width), n = this.container.bounds.top + H(r[1], this.container.bounds.height), o = this.container.styles.rotate * Math.PI / 180, a = Math.cos(o), c = Math.sin(o), l = [a, c, -c, a, 0, 0];
      this.effects.push(new Po(s, n, l));
    }
    if (this.container.styles.transform !== null) {
      const r = this.container.styles.transformOrigin, s = this.container.bounds.left + H(r[0], this.container.bounds.width), n = this.container.bounds.top + H(r[1], this.container.bounds.height), i = this.container.styles.transform;
      this.effects.push(new Po(s, n, i));
    }
    if (this.container.styles.overflowX !== 0) {
      const r = Vr(this.curves), s = Xr(this.curves);
      Go(r, s) ? this.effects.push(new Fr(
        r,
        6
        /* EffectTarget.CONTENT */
      )) : (this.effects.push(new Fr(
        r,
        2
        /* EffectTarget.BACKGROUND_BORDERS */
      )), this.effects.push(new Fr(
        s,
        4
        /* EffectTarget.CONTENT */
      )));
    }
    if (this.container.styles.clipPath.type !== 0) {
      const r = Lp(this.container.styles.clipPath, this.container.bounds);
      r && this.effects.push(r);
    }
  }
  getEffects(A) {
    let e = [
      2,
      3
      /* POSITION.FIXED */
    ].indexOf(this.container.styles.position) === -1, r = this.parent;
    const s = this.effects.slice(0);
    for (; r; ) {
      const n = r.effects.filter((i) => !Cl(i));
      if (e || r.container.styles.position !== 0 || !r.parent) {
        if (e = [
          2,
          3
          /* POSITION.FIXED */
        ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
          const i = Vr(r.curves), o = Xr(r.curves);
          Go(i, o) || s.unshift(new Fr(
            o,
            6
            /* EffectTarget.CONTENT */
          ));
        }
        s.unshift(...n);
      } else
        s.unshift(...n);
      r = r.parent;
    }
    return s.filter((n) => J(n.target, A));
  }
}
const Vo = (t, A, e, r, s) => t === "closest-side" ? Math.min(A - e, r - A) : t === "farthest-side" ? Math.max(A - e, r - A) : H(t, s), Lp = (t, A) => {
  const { left: e, top: r, width: s, height: n } = A;
  switch (t.type) {
    case 1: {
      const i = H(t.left, s), o = H(t.top, n), a = e + i, c = r + o, l = Math.max(0, s - i - H(t.right, s)), h = Math.max(0, n - o - H(t.bottom, n));
      return new dt((u) => {
        u.beginPath(), u.rect(a, c, l, h), u.clip();
      });
    }
    case 2: {
      const i = e + H(t.cx, s), o = r + H(t.cy, n);
      let a;
      return t.radius === "closest-side" ? a = Math.min(i - e, o - r, e + s - i, r + n - o) : t.radius === "farthest-side" ? a = Math.max(i - e, o - r, e + s - i, r + n - o) : a = H(t.radius, Math.sqrt(s * s + n * n) / Math.SQRT2), new dt((c) => {
        c.beginPath(), c.arc(i, o, Math.max(0, a), 0, Math.PI * 2), c.clip();
      });
    }
    case 3: {
      const i = e + H(t.cx, s), o = r + H(t.cy, n), a = Vo(t.rx, i, e, e + s, s), c = Vo(t.ry, o, r, r + n, n);
      return new dt((l) => {
        l.beginPath(), l.ellipse(i, o, Math.max(0, a), Math.max(0, c), 0, 0, Math.PI * 2), l.clip();
      });
    }
    case 4: {
      const i = t.points.map(([o, a]) => [e + H(o, s), r + H(a, n)]);
      return new dt((o) => {
        if (o.beginPath(), i.length > 0) {
          o.moveTo(i[0][0], i[0][1]);
          for (let a = 1; a < i.length; a++)
            o.lineTo(i[a][0], i[a][1]);
          o.closePath();
        }
        o.clip();
      });
    }
    case 5: {
      const { d: i } = t;
      return new dt((o) => {
        try {
          const a = o.getTransform();
          o.translate(e, r), o.clip(new Path2D(i)), o.setTransform(a);
        } catch {
        }
      });
    }
    case 0:
      return null;
    default:
      return null;
  }
}, kn = (t, A, e, r) => {
  t.container.elements.forEach((s) => {
    const n = J(
      s.flags,
      4
      /* FLAGS.CREATES_REAL_STACKING_CONTEXT */
    ), i = J(
      s.flags,
      2
      /* FLAGS.CREATES_STACKING_CONTEXT */
    ), o = new Ul(s, t);
    J(
      s.styles.display,
      2048
      /* DISPLAY.LIST_ITEM */
    ) && r.push(o);
    const a = J(
      s.flags,
      8
      /* FLAGS.IS_LIST_OWNER */
    ) ? [] : r;
    if (n || i) {
      const c = n || s.styles.isPositioned() ? e : A, l = new ml(o);
      if (s.styles.isPositioned() || s.styles.opacity < 1 || s.styles.isTransformed()) {
        const h = s.styles.zIndex.order;
        if (h < 0) {
          let u = 0;
          c.negativeZIndex.some((g, d) => h > g.element.container.styles.zIndex.order ? (u = d, !1) : u > 0), c.negativeZIndex.splice(u, 0, l);
        } else if (h > 0) {
          let u = 0;
          c.positiveZIndex.some((g, d) => h >= g.element.container.styles.zIndex.order ? (u = d + 1, !1) : u > 0), c.positiveZIndex.splice(u, 0, l);
        } else
          c.zeroOrAutoZIndexOrTransformedOrOpacity.push(l);
      } else
        s.styles.isFloating() ? c.nonPositionedFloats.push(l) : c.nonPositionedInlineLevel.push(l);
      kn(o, l, n ? l : e, a);
    } else
      s.styles.isInlineLevel() ? A.inlineLevel.push(o) : A.nonInlineLevel.push(o), kn(o, A, e, a);
    J(
      s.flags,
      8
      /* FLAGS.IS_LIST_OWNER */
    ) && Fl(s, a);
  });
}, Fl = (t, A) => {
  let e = t instanceof Hn ? t.start : 1;
  const r = t instanceof Hn ? t.reversed : !1;
  for (let s = 0; s < A.length; s++) {
    const n = A[s];
    n.container instanceof cl && typeof n.container.value == "number" && n.container.value !== 0 && (e = n.container.value), n.listValue = Pt(e, n.container.styles.listStyleType, !0), e += r ? -1 : 1;
  }
}, kp = (t) => {
  const A = new Ul(t, null), e = new ml(A), r = [];
  return kn(A, e, e, r), Fl(A.container, r), e;
}, xl = (t) => {
  const A = t.bounds, e = t.styles;
  return A.add(e.borderLeftWidth, e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth), -(e.borderTopWidth + e.borderBottomWidth));
}, Lt = (t) => {
  const A = t.styles, e = t.bounds, r = H(A.paddingLeft, e.width), s = H(A.paddingRight, e.width), n = H(A.paddingTop, e.width), i = H(A.paddingBottom, e.width);
  return e.add(r + A.borderLeftWidth, n + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + s), -(A.borderTopWidth + A.borderBottomWidth + n + i));
}, Dp = (t, A) => t === 0 ? A.bounds : t === 2 ? Lt(A) : xl(A), Kp = (t, A) => t === 0 ? A.bounds : t === 2 ? Lt(A) : xl(A), tn = (t, A, e) => {
  const r = Dp(We(t.styles.backgroundOrigin, A), t), s = Kp(We(t.styles.backgroundClip, A), t), n = Mp(We(t.styles.backgroundSize, A), e, r);
  let [i, o] = n;
  const a = bt(We(t.styles.backgroundPosition, A), r.width - i, r.height - o), c = Rp(We(t.styles.backgroundRepeat, A), a, n, r, s), l = Math.round(r.left + a[0]), h = Math.round(r.top + a[1]);
  return i = Math.max(1, i), o = Math.max(1, o), [c, l, h, i, o];
}, Ge = (t) => T(t) && t.value === je.AUTO, xr = (t) => typeof t == "number", Mp = (t, [A, e, r], s) => {
  const [n, i] = t;
  if (!n)
    return [0, 0];
  if (N(n) && i && N(i))
    return [H(n, s.width), H(i, s.height)];
  const o = xr(r);
  if (T(n) && (n.value === je.CONTAIN || n.value === je.COVER))
    return xr(r) ? s.width / s.height < r != (n.value === je.COVER) ? [s.width, s.width / r] : [s.height * r, s.height] : [s.width, s.height];
  const a = xr(A), c = xr(e), l = a || c;
  if (Ge(n) && (!i || Ge(i))) {
    if (a && c)
      return [A, e];
    if (!o && !l)
      return [s.width, s.height];
    if (l && o) {
      const p = a ? A : e * r, U = c ? e : A / r;
      return [p, U];
    }
    const g = a ? A : s.width, d = c ? e : s.height;
    return [g, d];
  }
  if (o) {
    let g = 0, d = 0;
    return N(n) ? g = H(n, s.width) : N(i) && (d = H(i, s.height)), Ge(n) ? g = d * r : (!i || Ge(i)) && (d = g / r), [g, d];
  }
  let h = null, u = null;
  if (N(n) ? h = H(n, s.width) : i && N(i) && (u = H(i, s.height)), h !== null && (!i || Ge(i)) && (u = a && c ? h / A * e : s.height), u !== null && Ge(n) && (h = a && c ? u / e * A : s.width), h !== null && u !== null)
    return [h, u];
  throw new Error("Unable to calculate background-size for element");
}, We = (t, A) => {
  const e = t[A];
  return typeof e > "u" ? t[0] : e;
}, Rp = (t, [A, e], [r, s], n, i) => {
  switch (t) {
    case 2:
      return [
        new m(Math.round(n.left), Math.round(n.top + e)),
        new m(Math.round(n.left + n.width), Math.round(n.top + e)),
        new m(Math.round(n.left + n.width), Math.round(s + n.top + e)),
        new m(Math.round(n.left), Math.round(s + n.top + e))
      ];
    case 3:
      return [
        new m(Math.round(n.left + A), Math.round(n.top)),
        new m(Math.round(n.left + A + r), Math.round(n.top)),
        new m(Math.round(n.left + A + r), Math.round(n.height + n.top)),
        new m(Math.round(n.left + A), Math.round(n.height + n.top))
      ];
    case 1:
      return [
        new m(Math.round(n.left + A), Math.round(n.top + e)),
        new m(Math.round(n.left + A + r), Math.round(n.top + e)),
        new m(Math.round(n.left + A + r), Math.round(n.top + e + s)),
        new m(Math.round(n.left + A), Math.round(n.top + e + s))
      ];
    default:
      return [
        new m(Math.round(i.left), Math.round(i.top)),
        new m(Math.round(i.left + i.width), Math.round(i.top)),
        new m(Math.round(i.left + i.width), Math.round(i.height + i.top)),
        new m(Math.round(i.left), Math.round(i.height + i.top))
      ];
  }
}, Op = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Xo = "Hidden Text";
class _p {
  constructor(A) {
    this._data = {}, this._document = A;
  }
  parseMetrics(A, e) {
    const r = this._document.createElement("div"), s = this._document.createElement("img"), n = this._document.createElement("span"), i = this._document.body;
    r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = e, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), s.src = Op, s.width = 1, s.height = 1, s.style.margin = "0", s.style.padding = "0", s.style.verticalAlign = "baseline", n.style.fontFamily = A, n.style.fontSize = e, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode(Xo)), r.appendChild(n), r.appendChild(s);
    const o = s.offsetTop - n.offsetTop + 2;
    r.removeChild(n), r.appendChild(this._document.createTextNode(Xo)), r.style.lineHeight = "normal", s.style.verticalAlign = "super";
    const a = s.offsetTop - r.offsetTop + 2;
    return i.removeChild(r), { baseline: o, middle: a };
  }
  getMetrics(A, e) {
    const r = `${A} ${e}`;
    return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, e)), this._data[r];
  }
}
class bl {
  constructor(A, e) {
    this.context = A, this.options = e;
  }
}
class Np {
  constructor(A) {
    this.ctx = A.ctx, this.context = A.context, this.canvas = A.canvas;
  }
  /**
   * Render background images for a container
   * Supports URL images, linear gradients, and radial gradients
   *
   * @param container - Element container with background styles
   */
  async renderBackgroundImage(A) {
    let e = A.styles.backgroundImage.length - 1;
    for (const r of A.styles.backgroundImage.slice(0).reverse())
      r.type === 0 ? await this.renderBackgroundURLImage(A, r, e) : wu(r) ? this.renderLinearGradient(A, r, e) : Qu(r) && this.renderRadialGradient(A, r, e), e--;
  }
  /**
   * Render a URL-based background image
   */
  async renderBackgroundURLImage(A, e, r) {
    let s;
    const n = e.url;
    try {
      s = await this.context.cache.match(n);
    } catch {
      this.context.logger.error(`Error loading background-image ${n}`);
    }
    if (s) {
      const i = isNaN(s.width) || s.width === 0 ? 1 : s.width, o = isNaN(s.height) || s.height === 0 ? 1 : s.height, [a, c, l, h, u] = tn(A, r, [
        i,
        o,
        i / o
      ]), g = this.ctx.createPattern(this.resizeImage(s, h, u, A.styles.imageRendering), "repeat");
      this.renderRepeat(a, g, c, l);
    }
  }
  /**
   * Render a linear gradient background
   */
  renderLinearGradient(A, e, r) {
    const [s, n, i, o, a] = tn(A, r, [null, null, null]), [c, l, h, u, g] = uu(e.angle, o, a), p = (this.canvas.ownerDocument ?? document).createElement("canvas");
    p.width = o, p.height = a;
    const U = p.getContext("2d"), y = U.createLinearGradient(l, u, h, g);
    if (ho(e.stops, c || 1).forEach((C) => y.addColorStop(C.stop, V(C.color))), U.fillStyle = y, U.fillRect(0, 0, o, a), o > 0 && a > 0) {
      const C = this.ctx.createPattern(p, "repeat");
      this.renderRepeat(s, C, n, i);
    }
  }
  /**
   * Render a radial gradient background
   */
  renderRadialGradient(A, e, r) {
    const [s, n, i, o, a] = tn(A, r, [null, null, null]), c = e.position.length === 0 ? [Ue] : e.position, l = H(c[0], o), h = H(c[c.length - 1], a);
    let [u, g] = gu(e, l, h, o, a);
    if ((u === 0 || g === 0) && (u = Math.max(u, 0.01), g = Math.max(g, 0.01)), u > 0 && g > 0) {
      const d = this.ctx.createRadialGradient(n + l, i + h, 0, n + l, i + h, u);
      if (ho(e.stops, u * 2).forEach((p) => d.addColorStop(p.stop, V(p.color))), this.path(s), this.ctx.fillStyle = d, u !== g) {
        const p = A.bounds.left + 0.5 * A.bounds.width, U = A.bounds.top + 0.5 * A.bounds.height, y = g / u, C = 1 / y;
        this.ctx.save(), this.ctx.translate(p, U), this.ctx.transform(1, 0, 0, y, 0, 0), this.ctx.translate(-p, -U), this.ctx.fillRect(n, C * (i - U) + U, o, a * C), this.ctx.restore();
      } else
        this.ctx.fill();
    }
  }
  /**
   * Render a repeating pattern with offset
   *
   * @param path - Path to fill
   * @param pattern - Canvas pattern or gradient
   * @param offsetX - X offset for pattern
   * @param offsetY - Y offset for pattern
   */
  renderRepeat(A, e, r, s) {
    this.path(A), this.ctx.fillStyle = e, this.ctx.translate(r, s), this.ctx.fill(), this.ctx.translate(-r, -s);
  }
  /**
   * Resize an image to target dimensions
   *
   * @param image - Source image
   * @param width - Target width
   * @param height - Target height
   * @param imageRendering - CSS image-rendering property value
   * @returns Resized canvas or original image
   */
  resizeImage(A, e, r, s) {
    const i = (this.canvas.ownerDocument ?? document).createElement("canvas");
    i.width = Math.max(1, e), i.height = Math.max(1, r);
    const o = i.getContext("2d");
    return s === EA.PIXELATED || s === EA.CRISP_EDGES ? (this.context.logger.debug("Disabling image smoothing for background image due to CSS image-rendering"), o.imageSmoothingEnabled = !1) : s === EA.SMOOTH ? (this.context.logger.debug("Enabling image smoothing for background image due to CSS image-rendering: smooth"), o.imageSmoothingEnabled = !0) : o.imageSmoothingEnabled = this.ctx.imageSmoothingEnabled, this.ctx.imageSmoothingQuality && (o.imageSmoothingQuality = this.ctx.imageSmoothingQuality), o.drawImage(A, 0, 0, A.width, A.height, 0, 0, e, r), i;
  }
  /**
   * Create a canvas path from path array
   *
   * @param paths - Array of path points
   */
  path(A) {
    this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath();
  }
  /**
   * Format path points into canvas path
   *
   * @param paths - Array of path points
   */
  formatPath(A) {
    A.forEach((e, r) => {
      const s = FA(e) ? e.start : e;
      r === 0 ? this.ctx.moveTo(s.x, s.y) : this.ctx.lineTo(s.x, s.y), FA(e) && this.ctx.bezierCurveTo(e.startControl.x, e.startControl.y, e.endControl.x, e.endControl.y, e.end.x, e.end.y);
    });
  }
}
const zo = (t, A) => {
  switch (A) {
    case 0:
      return TA(t.topLeftBorderBox, t.topLeftPaddingBox, t.topRightBorderBox, t.topRightPaddingBox);
    case 1:
      return TA(t.topRightBorderBox, t.topRightPaddingBox, t.bottomRightBorderBox, t.bottomRightPaddingBox);
    case 2:
      return TA(t.bottomRightBorderBox, t.bottomRightPaddingBox, t.bottomLeftBorderBox, t.bottomLeftPaddingBox);
    case 3:
    default:
      return TA(t.bottomLeftBorderBox, t.bottomLeftPaddingBox, t.topLeftBorderBox, t.topLeftPaddingBox);
  }
}, $p = (t, A) => {
  switch (A) {
    case 0:
      return TA(t.topLeftBorderBox, t.topLeftBorderDoubleOuterBox, t.topRightBorderBox, t.topRightBorderDoubleOuterBox);
    case 1:
      return TA(t.topRightBorderBox, t.topRightBorderDoubleOuterBox, t.bottomRightBorderBox, t.bottomRightBorderDoubleOuterBox);
    case 2:
      return TA(t.bottomRightBorderBox, t.bottomRightBorderDoubleOuterBox, t.bottomLeftBorderBox, t.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return TA(t.bottomLeftBorderBox, t.bottomLeftBorderDoubleOuterBox, t.topLeftBorderBox, t.topLeftBorderDoubleOuterBox);
  }
}, Pp = (t, A) => {
  switch (A) {
    case 0:
      return TA(t.topLeftBorderDoubleInnerBox, t.topLeftPaddingBox, t.topRightBorderDoubleInnerBox, t.topRightPaddingBox);
    case 1:
      return TA(t.topRightBorderDoubleInnerBox, t.topRightPaddingBox, t.bottomRightBorderDoubleInnerBox, t.bottomRightPaddingBox);
    case 2:
      return TA(t.bottomRightBorderDoubleInnerBox, t.bottomRightPaddingBox, t.bottomLeftBorderDoubleInnerBox, t.bottomLeftPaddingBox);
    case 3:
    default:
      return TA(t.bottomLeftBorderDoubleInnerBox, t.bottomLeftPaddingBox, t.topLeftBorderDoubleInnerBox, t.topLeftPaddingBox);
  }
}, Gp = (t, A) => {
  switch (A) {
    case 0:
      return br(t.topLeftBorderStroke, t.topRightBorderStroke);
    case 1:
      return br(t.topRightBorderStroke, t.bottomRightBorderStroke);
    case 2:
      return br(t.bottomRightBorderStroke, t.bottomLeftBorderStroke);
    case 3:
    default:
      return br(t.bottomLeftBorderStroke, t.topLeftBorderStroke);
  }
}, br = (t, A) => {
  const e = [];
  return FA(t) ? e.push(t.subdivide(0.5, !1)) : e.push(t), FA(A) ? e.push(A.subdivide(0.5, !0)) : e.push(A), e;
}, TA = (t, A, e, r) => {
  const s = [];
  return FA(t) ? s.push(t.subdivide(0.5, !1)) : s.push(t), FA(e) ? s.push(e.subdivide(0.5, !0)) : s.push(e), FA(r) ? s.push(r.subdivide(0.5, !0).reverse()) : s.push(r), FA(A) ? s.push(A.subdivide(0.5, !1).reverse()) : s.push(A), s;
};
class Vp {
  constructor(A, e) {
    this.ctx = A.ctx, this.pathCallbacks = e;
  }
  /**
   * Render a solid border
   *
   * @param color - Border color
   * @param side - Border side (0=top, 1=right, 2=bottom, 3=left)
   * @param curvePoints - Border curve points
   */
  async renderSolidBorder(A, e, r) {
    this.pathCallbacks.path(zo(r, e)), this.ctx.fillStyle = V(A), this.ctx.fill();
  }
  /**
   * Render a double border
   * Falls back to solid border if width is too small
   *
   * @param color - Border color
   * @param width - Border width
   * @param side - Border side (0=top, 1=right, 2=bottom, 3=left)
   * @param curvePoints - Border curve points
   */
  async renderDoubleBorder(A, e, r, s) {
    if (e < 3) {
      await this.renderSolidBorder(A, r, s);
      return;
    }
    const n = $p(s, r);
    this.pathCallbacks.path(n), this.ctx.fillStyle = V(A), this.ctx.fill();
    const i = Pp(s, r);
    this.pathCallbacks.path(i), this.ctx.fill();
  }
  /**
   * Render a dashed or dotted border
   *
   * @param color - Border color
   * @param width - Border width
   * @param side - Border side (0=top, 1=right, 2=bottom, 3=left)
   * @param curvePoints - Border curve points
   * @param style - Border style (DASHED or DOTTED)
   */
  async renderDashedDottedBorder(A, e, r, s, n) {
    this.ctx.save();
    const i = Gp(s, r), o = zo(s, r);
    n === 2 && (this.pathCallbacks.path(o), this.ctx.clip());
    let a, c, l, h;
    FA(o[0]) ? (a = o[0].start.x, c = o[0].start.y) : (a = o[0].x, c = o[0].y), FA(o[1]) ? (l = o[1].end.x, h = o[1].end.y) : (l = o[1].x, h = o[1].y);
    let u;
    r === 0 || r === 2 ? u = Math.abs(a - l) : u = Math.abs(c - h), this.ctx.beginPath(), n === 3 ? this.pathCallbacks.formatPath(i) : this.pathCallbacks.formatPath(o.slice(0, 2));
    let g = e < 3 ? e * 3 : e * 2, d = e < 3 ? e * 2 : e;
    n === 3 && (g = e, d = e);
    let p = !0;
    if (u <= g * 2)
      p = !1;
    else if (u <= g * 2 + d) {
      const U = u / (2 * g + d);
      g *= U, d *= U;
    } else {
      const U = Math.floor((u + d) / (g + d)), y = (u - U * g) / (U - 1), C = (u - (U + 1) * g) / U;
      d = C <= 0 || Math.abs(d - y) < Math.abs(d - C) ? y : C;
    }
    if (p && (n === 3 ? this.ctx.setLineDash([0, g + d]) : this.ctx.setLineDash([g, d])), n === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = e) : this.ctx.lineWidth = e * 2 + 1.1, this.ctx.strokeStyle = V(A), this.ctx.stroke(), this.ctx.setLineDash([]), n === 2) {
      if (FA(o[0])) {
        const U = o[3], y = o[0];
        this.ctx.beginPath(), this.pathCallbacks.formatPath([
          new m(U.end.x, U.end.y),
          new m(y.start.x, y.start.y)
        ]), this.ctx.stroke();
      }
      if (FA(o[1])) {
        const U = o[1], y = o[2];
        this.ctx.beginPath(), this.pathCallbacks.formatPath([
          new m(U.end.x, U.end.y),
          new m(y.start.x, y.start.y)
        ]), this.ctx.stroke();
      }
    }
    this.ctx.restore();
  }
}
class Xp {
  constructor(A, e) {
    this.activeEffects = [], this.ctx = A.ctx, this.pathCallback = e;
  }
  /**
   * Apply multiple effects
   * Clears existing effects and applies new ones
   *
   * @param effects - Array of effects to apply
   */
  applyEffects(A) {
    for (; this.activeEffects.length; )
      this.popEffect();
    A.forEach((e) => this.applyEffect(e));
  }
  /**
   * Apply a single effect
   *
   * @param effect - Effect to apply
   */
  applyEffect(A) {
    this.ctx.save(), Tp(A) ? this.ctx.globalAlpha = A.opacity : Hp(A) ? (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)) : Cl(A) ? (this.pathCallback.path(A.path), this.ctx.clip()) : Sp(A) && A.applyClip(this.ctx), this.activeEffects.push(A);
  }
  /**
   * Remove the most recent effect
   * Restores the canvas state before the effect was applied
   */
  popEffect() {
    this.activeEffects.pop(), this.ctx.restore();
  }
  /**
   * Get the current number of active effects
   *
   * @returns Number of active effects
   */
  getActiveEffectCount() {
    return this.activeEffects.length;
  }
  /**
   * Check if there are any active effects
   *
   * @returns True if there are active effects
   */
  hasActiveEffects() {
    return this.activeEffects.length > 0;
  }
}
const zp = ["-apple-system", "system-ui"], Wp = /[\u2E80-\u2FFF\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF\uFF01-\uFFEF]/, Jp = (t) => Wp.test(t), Yp = () => {
  if (typeof navigator > "u")
    return null;
  const t = navigator.userAgent, A = /iPhone|iPad|iPod/.test(t), e = /Macintosh/.test(t) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
  if (!A && !e)
    return null;
  const r = [
    /(?:iPhone|CPU(?:\siPhone)?)\sOS\s(\d+)[\._](\d+)/,
    // iPhone OS, CPU OS, CPU iPhone OS
    /Version\/(\d+)\.(\d+)/
    // Version/15.0 (iPadOS)
  ];
  for (const s of r) {
    const n = t.match(s);
    if (n && n[1])
      return parseInt(n[1], 10);
  }
  return null;
}, Zp = (t) => {
  const A = Yp();
  return A !== null && A >= 15 && A < 17 ? t.map((e) => zp.indexOf(e) !== -1 ? '-apple-system, "Helvetica Neue", Arial, sans-serif' : e) : t;
};
class qp {
  constructor(A) {
    this.ctx = A.ctx, this.options = A.options;
  }
  /**
   * Iterate grapheme clusters one-by-one, applying correct letter-spacing and
   * per-script baseline for each character.
   *
   * Issue #73: When letter-spacing is non-zero, text must be rendered character by
   * character. This helper centralises two fixes applied during that iteration:
   *   1. Add `letterSpacing` to each character's advance width (was previously
   *      omitted, causing characters to render without any spacing).
   *   2. Switch to the ideographic baseline for CJK glyphs so their vertical
   *      position matches how browsers lay them out in the DOM.
   *
   * The `renderFn` callback receives (letter, x, y) and performs the actual draw
   * call (fillText or strokeText), allowing fill and stroke paths to share one
   * implementation.
   */
  iterateLettersWithLetterSpacing(A, e, r, s) {
    const n = _r(A.text), i = A.bounds.top + r;
    let o = A.bounds.left;
    for (const a of n) {
      if (Jp(a)) {
        const c = this.ctx.textBaseline;
        this.ctx.textBaseline = "ideographic", s(a, o, i), this.ctx.textBaseline = c;
      } else
        s(a, o, i);
      o += this.ctx.measureText(a).width + e;
    }
  }
  /**
   * Render text with letter-spacing applied (fill pass).
   * When letterSpacing is 0 the whole string is drawn in one call; otherwise each
   * grapheme is drawn individually so spacing and CJK baseline are applied correctly.
   */
  renderTextWithLetterSpacing(A, e, r) {
    e === 0 ? this.ctx.fillText(A.text, A.bounds.left, A.bounds.top + r) : this.iterateLettersWithLetterSpacing(A, e, r, (s, n, i) => {
      this.ctx.fillText(s, n, i);
    });
  }
  /**
   * Helper method to render text with paint order support
   * Reduces code duplication in line-clamp and normal rendering
   */
  renderTextBoundWithPaintOrder(A, e, r) {
    r.forEach((s) => {
      switch (s) {
        case 0:
          this.ctx.fillStyle = V(e.color), this.renderTextWithLetterSpacing(A, e.letterSpacing, e.fontSize.number);
          break;
        case 1:
          e.webkitTextStrokeWidth && A.text.trim().length && (this.ctx.strokeStyle = V(e.webkitTextStrokeColor), this.ctx.lineWidth = e.webkitTextStrokeWidth, this.ctx.lineJoin = typeof window < "u" && window.chrome ? "miter" : "round", e.letterSpacing === 0 ? this.ctx.strokeText(A.text, A.bounds.left, A.bounds.top + e.fontSize.number) : this.iterateLettersWithLetterSpacing(A, e.letterSpacing, e.fontSize.number, (n, i, o) => this.ctx.strokeText(n, i, o)), this.ctx.strokeStyle = "", this.ctx.lineWidth = 0, this.ctx.lineJoin = "miter");
          break;
      }
    });
  }
  renderTextDecoration(A, e) {
    this.ctx.fillStyle = V(e.textDecorationColor || e.color);
    let r = 1;
    typeof e.textDecorationThickness == "number" ? r = e.textDecorationThickness : e.textDecorationThickness === "from-font" && (r = Math.max(1, Math.floor(e.fontSize.number * 0.05)));
    let s = 0;
    typeof e.textUnderlineOffset == "number" && (s = e.textUnderlineOffset);
    const n = e.textDecorationStyle;
    e.textDecorationLine.forEach((i) => {
      let o = 0;
      switch (i) {
        case 1:
          o = A.top + A.height - r + s;
          break;
        case 2:
          o = A.top;
          break;
        case 3:
          o = A.top + (A.height / 2 - r / 2);
          break;
        default:
          return;
      }
      this.drawDecorationLine(A.left, o, A.width, r, n);
    });
  }
  drawDecorationLine(A, e, r, s, n) {
    switch (n) {
      case 0:
        this.ctx.fillRect(A, e, r, s);
        break;
      case 1:
        const i = Math.max(1, s);
        this.ctx.fillRect(A, e, r, s), this.ctx.fillRect(A, e + s + i, r, s);
        break;
      case 2:
        this.ctx.save(), this.ctx.beginPath(), this.ctx.setLineDash([s, s * 2]), this.ctx.lineWidth = s, this.ctx.strokeStyle = this.ctx.fillStyle, this.ctx.moveTo(A, e + s / 2), this.ctx.lineTo(A + r, e + s / 2), this.ctx.stroke(), this.ctx.restore();
        break;
      case 3:
        this.ctx.save(), this.ctx.beginPath(), this.ctx.setLineDash([s * 3, s * 2]), this.ctx.lineWidth = s, this.ctx.strokeStyle = this.ctx.fillStyle, this.ctx.moveTo(A, e + s / 2), this.ctx.lineTo(A + r, e + s / 2), this.ctx.stroke(), this.ctx.restore();
        break;
      case 4:
        this.ctx.save(), this.ctx.beginPath(), this.ctx.lineWidth = s, this.ctx.strokeStyle = this.ctx.fillStyle;
        const o = s * 2, a = s * 4;
        let c = A;
        for (this.ctx.moveTo(c, e + s / 2); c < A + r; ) {
          const l = Math.min(c + a / 2, A + r);
          if (this.ctx.quadraticCurveTo(c + a / 4, e + s / 2 - o, l, e + s / 2), c = l, c < A + r) {
            const h = Math.min(c + a / 2, A + r);
            this.ctx.quadraticCurveTo(c + a / 4, e + s / 2 + o, h, e + s / 2), c = h;
          }
        }
        this.ctx.stroke(), this.ctx.restore();
        break;
      default:
        this.ctx.fillRect(A, e, r, s);
    }
  }
  // Helper method to truncate text and add ellipsis if needed
  truncateTextWithEllipsis(A, e, r) {
    const n = this.ctx.measureText("…").width, i = _r(A);
    if (r === 0) {
      const o = (l) => this.ctx.measureText(i.slice(0, l).join("")).width + n <= e;
      let a = 0, c = i.length;
      for (; a < c; ) {
        const l = a + c + 1 >> 1;
        o(l) ? a = l : c = l - 1;
      }
      return i.slice(0, a).join("") + "…";
    } else {
      let o = n;
      const a = [];
      for (const c of i) {
        const l = this.ctx.measureText(c).width;
        if (o + l > e)
          break;
        a.push(c), o += l + r;
      }
      return a.join("") + "…";
    }
  }
  /**
   * Create font style array
   * Public method used by list rendering
   */
  createFontStyle(A) {
    const e = A.fontVariant.filter((n) => n === "normal" || n === "small-caps").join(""), r = Zp(A.fontFamily).join(", "), s = GA(A.fontSize) ? `${A.fontSize.number}${A.fontSize.unit}` : `${A.fontSize.number}px`;
    return [
      [A.fontStyle, e, A.fontWeight, s, r].join(" "),
      r,
      s
    ];
  }
  async renderTextNode(A, e, r) {
    const [s] = this.createFontStyle(e);
    this.ctx.font = s, this.ctx.direction = e.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic";
    const n = e.paintOrder, i = e.fontSize.number * 1.5;
    if (e.webkitLineClamp > 0 && (e.display & 2) !== 0 && e.overflowY === 1 && A.textBounds.length > 0) {
      const h = [];
      let u = [], g = A.textBounds[0].bounds.top;
      A.textBounds.forEach((p) => {
        Math.abs(p.bounds.top - g) >= i * 0.5 ? (u.length > 0 && h.push(u), u = [p], g = p.bounds.top) : u.push(p);
      }), u.length > 0 && h.push(u);
      const d = e.webkitLineClamp;
      if (h.length > d) {
        for (let U = 0; U < d - 1; U++)
          h[U].forEach((y) => {
            this.renderTextBoundWithPaintOrder(y, e, n);
          });
        const p = h[d - 1];
        if (p && p.length > 0 && r) {
          const U = p.map((b) => b.text).join(""), y = p[0], C = r.width - (y.bounds.left - r.left), x = this.truncateTextWithEllipsis(U, C, e.letterSpacing), E = new ye(x, y.bounds);
          n.forEach((b) => {
            switch (b) {
              case 0:
                this.ctx.fillStyle = V(e.color), e.letterSpacing === 0 ? this.ctx.fillText(x, y.bounds.left, y.bounds.top + e.fontSize.number) : this.iterateLettersWithLetterSpacing(E, e.letterSpacing, e.fontSize.number, (K, W, lA) => this.ctx.fillText(K, W, lA));
                break;
              case 1:
                e.webkitTextStrokeWidth && x.trim().length && (this.ctx.strokeStyle = V(e.webkitTextStrokeColor), this.ctx.lineWidth = e.webkitTextStrokeWidth, this.ctx.lineJoin = typeof window < "u" && window.chrome ? "miter" : "round", e.letterSpacing === 0 ? this.ctx.strokeText(x, y.bounds.left, y.bounds.top + e.fontSize.number) : this.iterateLettersWithLetterSpacing(E, e.letterSpacing, e.fontSize.number, (K, W, lA) => this.ctx.strokeText(K, W, lA)), this.ctx.strokeStyle = "", this.ctx.lineWidth = 0, this.ctx.lineJoin = "miter");
                break;
            }
          });
        }
        return;
      }
    }
    const a = e.textOverflow === 1 && r && e.overflowX === 1 && A.textBounds.length > 0;
    let c = !1, l = "";
    if (a) {
      const h = A.textBounds[0].bounds.top;
      if (A.textBounds.every((g) => Math.abs(g.bounds.top - h) < i * 0.5)) {
        let g = A.textBounds.map((U) => U.text).join("");
        g = g.replace(/\s+/g, " ").trim();
        const d = this.ctx.measureText(g).width, p = r.width;
        d > p && (c = !0, l = this.truncateTextWithEllipsis(g, p, e.letterSpacing));
      }
    }
    if (c) {
      const h = A.textBounds[0], u = new ye(l, h.bounds);
      n.forEach((g) => {
        switch (g) {
          case 0: {
            this.ctx.fillStyle = V(e.color), e.letterSpacing === 0 ? this.ctx.fillText(l, h.bounds.left, h.bounds.top + e.fontSize.number) : this.iterateLettersWithLetterSpacing(u, e.letterSpacing, e.fontSize.number, (p, U, y) => this.ctx.fillText(p, U, y));
            const d = e.textShadow;
            d.length && l.trim().length && (d.slice(0).reverse().forEach((p) => {
              this.ctx.shadowColor = V(p.color), this.ctx.shadowOffsetX = p.offsetX.number * this.options.scale, this.ctx.shadowOffsetY = p.offsetY.number * this.options.scale, this.ctx.shadowBlur = p.blur.number, e.letterSpacing === 0 ? this.ctx.fillText(l, h.bounds.left, h.bounds.top + e.fontSize.number) : this.iterateLettersWithLetterSpacing(u, e.letterSpacing, e.fontSize.number, (U, y, C) => this.ctx.fillText(U, y, C));
            }), this.ctx.shadowColor = "", this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.shadowBlur = 0);
            break;
          }
          case 1:
            e.webkitTextStrokeWidth && l.trim().length && (this.ctx.strokeStyle = V(e.webkitTextStrokeColor), this.ctx.lineWidth = e.webkitTextStrokeWidth, this.ctx.lineJoin = typeof window < "u" && window.chrome ? "miter" : "round", e.letterSpacing === 0 ? this.ctx.strokeText(l, h.bounds.left, h.bounds.top + e.fontSize.number) : this.iterateLettersWithLetterSpacing(u, e.letterSpacing, e.fontSize.number, (d, p, U) => this.ctx.strokeText(d, p, U)), this.ctx.strokeStyle = "", this.ctx.lineWidth = 0, this.ctx.lineJoin = "miter");
            break;
        }
      });
      return;
    }
    A.textBounds.forEach((h) => {
      n.forEach((u) => {
        switch (u) {
          case 0: {
            this.ctx.fillStyle = V(e.color), this.renderTextWithLetterSpacing(h, e.letterSpacing, e.fontSize.number);
            const g = e.textShadow;
            g.length && h.text.trim().length && (g.slice(0).reverse().forEach((d) => {
              this.ctx.shadowColor = V(d.color), this.ctx.shadowOffsetX = d.offsetX.number * this.options.scale, this.ctx.shadowOffsetY = d.offsetY.number * this.options.scale, this.ctx.shadowBlur = d.blur.number, this.renderTextWithLetterSpacing(h, e.letterSpacing, e.fontSize.number);
            }), this.ctx.shadowColor = "", this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.shadowBlur = 0), e.textDecorationLine.length && this.renderTextDecoration(h.bounds, e);
            break;
          }
          case 1: {
            if (e.webkitTextStrokeWidth && h.text.trim().length) {
              this.ctx.strokeStyle = V(e.webkitTextStrokeColor), this.ctx.lineWidth = e.webkitTextStrokeWidth, this.ctx.lineJoin = typeof window < "u" && window.chrome ? "miter" : "round";
              const g = e.fontSize.number;
              e.letterSpacing === 0 ? this.ctx.strokeText(h.text, h.bounds.left, h.bounds.top + g) : this.iterateLettersWithLetterSpacing(h, e.letterSpacing, g, (d, p, U) => this.ctx.strokeText(d, p, U)), this.ctx.strokeStyle = "", this.ctx.lineWidth = 0, this.ctx.lineJoin = "miter";
            }
            break;
          }
        }
      });
    });
  }
}
const jp = 1e4;
class Xn extends bl {
  constructor(A, e) {
    super(A, e), this.canvas = e.canvas ? e.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), e.canvas || (this.canvas.width = Math.floor(e.width * e.scale), this.canvas.height = Math.floor(e.height * e.scale), this.canvas.style.width = `${e.width}px`, this.canvas.style.height = `${e.height}px`), this.fontMetrics = new _p(document), this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-e.x, -e.y), this.ctx.textBaseline = "bottom", e.imageSmoothing !== void 0 && (this.ctx.imageSmoothingEnabled = e.imageSmoothing), e.imageSmoothingQuality && (this.ctx.imageSmoothingQuality = e.imageSmoothingQuality), this.backgroundRenderer = new Np({
      ctx: this.ctx,
      context: this.context,
      canvas: this.canvas,
      options: {
        width: e.width,
        height: e.height,
        scale: e.scale
      }
    }), this.borderRenderer = new Vp({ ctx: this.ctx }, {
      path: (r) => this.path(r),
      formatPath: (r) => this.formatPath(r)
    }), this.effectsRenderer = new Xp({ ctx: this.ctx }, { path: (r) => this.path(r) }), this.textRenderer = new qp({
      ctx: this.ctx,
      context: this.context,
      options: { scale: e.scale }
    }), this.context.logger.debug(`Canvas renderer initialized (${e.width}x${e.height}) with scale ${e.scale}`);
  }
  async renderStack(A) {
    A.element.container.styles.isVisible() && await this.renderStackContent(A);
  }
  async renderNode(A) {
    if (J(
      A.container.flags,
      16
      /* FLAGS.DEBUG_RENDER */
    ))
      debugger;
    A.container.styles.isVisible() && (await this.renderNodeBackgroundAndBorders(A), await this.renderNodeContent(A));
  }
  /**
   * Helper method to render text with paint order support
   * Reduces code duplication in line-clamp and normal rendering
   */
  // Helper method to truncate text and add ellipsis if needed
  renderReplacedElement(A, e, r) {
    const s = r.naturalWidth || A.intrinsicWidth, n = r.naturalHeight || A.intrinsicHeight;
    if (r && s > 0 && n > 0) {
      const i = Lt(A), o = Xr(e);
      this.path(o), this.ctx.save(), this.ctx.clip();
      let a = 0, c = 0, l = s, h = n, u = i.left, g = i.top, d = i.width, p = i.height;
      const { objectFit: U } = A.styles, y = d / p, C = l / h;
      if (U === 2)
        C > y ? (p = d / C, g += (i.height - p) / 2) : (d = p * C, u += (i.width - d) / 2);
      else if (U === 4)
        C > y ? (l = h * y, a += (s - l) / 2) : (h = l / y, c += (n - h) / 2);
      else if (U === 8)
        l > d ? (a += (l - d) / 2, l = d) : (u += (d - l) / 2, d = l), h > p ? (c += (h - p) / 2, h = p) : (g += (p - h) / 2, p = h);
      else if (U === 16) {
        const x = C > y ? d : p * C, E = l > d ? l : d;
        x < E ? C > y ? (p = d / C, g += (i.height - p) / 2) : (d = p * C, u += (i.width - d) / 2) : (l > d ? (a += (l - d) / 2, l = d) : (u += (d - l) / 2, d = l), h > p ? (c += (h - p) / 2, h = p) : (g += (p - h) / 2, p = h));
      }
      this.ctx.drawImage(r, a, c, l, h, u, g, d, p), this.ctx.restore();
    }
  }
  async renderNodeContent(A) {
    this.effectsRenderer.applyEffects(A.getEffects(
      4
      /* EffectTarget.CONTENT */
    ));
    const e = A.container, r = A.curves, s = e.styles, n = Lt(e);
    for (const i of e.textNodes)
      await this.textRenderer.renderTextNode(i, s, n);
    if (e instanceof ol)
      try {
        const i = await this.context.cache.match(e.src), o = this.ctx.imageSmoothingEnabled;
        s.imageRendering === EA.PIXELATED || s.imageRendering === EA.CRISP_EDGES ? (this.context.logger.debug(`Disabling image smoothing for ${e.src} due to CSS image-rendering: ${s.imageRendering === EA.PIXELATED ? "pixelated" : "crisp-edges"}`), this.ctx.imageSmoothingEnabled = !1) : s.imageRendering === EA.SMOOTH && (this.context.logger.debug(`Enabling image smoothing for ${e.src} due to CSS image-rendering: smooth`), this.ctx.imageSmoothingEnabled = !0), this.renderReplacedElement(e, r, i), this.ctx.imageSmoothingEnabled = o;
      } catch {
        this.context.logger.error(`Error loading image ${e.src}`);
      }
    if (e instanceof al && this.renderReplacedElement(e, r, e.canvas), e instanceof ll)
      try {
        const i = await this.context.cache.match(e.svg);
        this.renderReplacedElement(e, r, i);
      } catch {
        this.context.logger.error(`Error loading svg ${e.svg.substring(0, 255)}`);
      }
    if (e instanceof ul && e.tree) {
      const o = await new Xn(this.context, {
        scale: this.options.scale,
        backgroundColor: e.backgroundColor,
        x: 0,
        y: 0,
        width: e.width,
        height: e.height
      }).render(e.tree);
      e.width && e.height && this.ctx.drawImage(o, 0, 0, e.width, e.height, e.bounds.left, e.bounds.top, e.bounds.width, e.bounds.height);
    }
    if (e instanceof St) {
      const i = Math.min(e.bounds.width, e.bounds.height);
      e.type === Nr ? e.checked && (this.ctx.save(), this.path([
        new m(e.bounds.left + i * 0.39363, e.bounds.top + i * 0.79),
        new m(e.bounds.left + i * 0.16, e.bounds.top + i * 0.5549),
        new m(e.bounds.left + i * 0.27347, e.bounds.top + i * 0.44071),
        new m(e.bounds.left + i * 0.39694, e.bounds.top + i * 0.5649),
        new m(e.bounds.left + i * 0.72983, e.bounds.top + i * 0.23),
        new m(e.bounds.left + i * 0.84, e.bounds.top + i * 0.34085),
        new m(e.bounds.left + i * 0.39363, e.bounds.top + i * 0.79)
      ]), this.ctx.fillStyle = V(Lo), this.ctx.fill(), this.ctx.restore()) : e.type === $r && e.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(e.bounds.left + i / 2, e.bounds.top + i / 2, i / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = V(Lo), this.ctx.fill(), this.ctx.restore());
    }
    if (Af(e) && e.value.length) {
      const [i, o, a] = this.textRenderer.createFontStyle(s), { baseline: c } = this.fontMetrics.getMetrics(o, a);
      this.ctx.font = i;
      const l = e instanceof St && e.isPlaceholder;
      this.ctx.fillStyle = V(l ? rp : s.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = tf(e.styles.textAlign);
      const h = Lt(e);
      let u = 0;
      switch (e.styles.textAlign) {
        case 1:
          u += h.width / 2;
          break;
        case 2:
          u += h.width;
          break;
      }
      let g = 0;
      if (e instanceof St) {
        const p = H(s.fontSize, 0);
        g = (h.height - p) / 2;
      }
      const d = h.add(u, g, 0, 0);
      this.ctx.save(), this.path([
        new m(h.left, h.top),
        new m(h.left + h.width, h.top),
        new m(h.left + h.width, h.top + h.height),
        new m(h.left, h.top + h.height)
      ]), this.ctx.clip(), this.textRenderer.renderTextWithLetterSpacing(new ye(e.value, d), s.letterSpacing, c), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
    }
    if (J(
      e.styles.display,
      2048
      /* DISPLAY.LIST_ITEM */
    )) {
      if (e.styles.listStyleImage !== null) {
        const i = e.styles.listStyleImage;
        if (i.type === 0) {
          let o;
          const a = i.url;
          try {
            o = await this.context.cache.match(a), this.ctx.drawImage(o, e.bounds.left - (o.width + 10), e.bounds.top);
          } catch {
            this.context.logger.error(`Error loading list-style-image ${a}`);
          }
        }
      } else if (A.listValue && e.styles.listStyleType !== -1) {
        const [i] = this.textRenderer.createFontStyle(s);
        this.ctx.font = i, this.ctx.fillStyle = V(s.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right";
        const o = new pA(e.bounds.left, e.bounds.top + H(e.styles.paddingTop, e.bounds.width), e.bounds.width, uo(s.lineHeight, s.fontSize.number) / 2 + 1);
        this.textRenderer.renderTextWithLetterSpacing(new ye(A.listValue, o), s.letterSpacing, uo(s.lineHeight, s.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left";
      }
    }
  }
  async renderStackContent(A) {
    if (J(
      A.element.container.flags,
      16
      /* FLAGS.DEBUG_RENDER */
    ))
      debugger;
    await this.renderNodeBackgroundAndBorders(A.element);
    for (const e of A.negativeZIndex)
      await this.renderStack(e);
    await this.renderNodeContent(A.element);
    for (const e of A.nonInlineLevel)
      await this.renderNode(e);
    for (const e of A.nonPositionedFloats)
      await this.renderStack(e);
    for (const e of A.nonPositionedInlineLevel)
      await this.renderStack(e);
    for (const e of A.inlineLevel)
      await this.renderNode(e);
    for (const e of A.zeroOrAutoZIndexOrTransformedOrOpacity)
      await this.renderStack(e);
    for (const e of A.positiveZIndex)
      await this.renderStack(e);
  }
  mask(A) {
    this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.options.width, 0), this.ctx.lineTo(this.options.width, this.options.height), this.ctx.lineTo(0, this.options.height), this.ctx.lineTo(0, 0), this.formatPath(A.slice(0).reverse()), this.ctx.closePath();
  }
  path(A) {
    this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath();
  }
  formatPath(A) {
    A.forEach((e, r) => {
      const s = FA(e) ? e.start : e;
      r === 0 ? this.ctx.moveTo(s.x, s.y) : this.ctx.lineTo(s.x, s.y), FA(e) && this.ctx.bezierCurveTo(e.startControl.x, e.startControl.y, e.endControl.x, e.endControl.y, e.end.x, e.end.y);
    });
  }
  async renderNodeBackgroundAndBorders(A) {
    this.effectsRenderer.applyEffects(A.getEffects(
      2
      /* EffectTarget.BACKGROUND_BORDERS */
    ));
    const e = A.container.styles, r = !ae(e.backgroundColor) || e.backgroundImage.length, s = [
      { style: e.borderTopStyle, color: e.borderTopColor, width: e.borderTopWidth },
      { style: e.borderRightStyle, color: e.borderRightColor, width: e.borderRightWidth },
      { style: e.borderBottomStyle, color: e.borderBottomColor, width: e.borderBottomWidth },
      { style: e.borderLeftStyle, color: e.borderLeftColor, width: e.borderLeftWidth }
    ], n = ef(We(e.backgroundClip, 0), A.curves);
    (r || e.boxShadow.length) && (this.ctx.save(), this.path(n), this.ctx.clip(), ae(e.backgroundColor) || (this.ctx.fillStyle = V(e.backgroundColor), this.ctx.fill()), await this.backgroundRenderer.renderBackgroundImage(A.container), this.ctx.restore(), e.boxShadow.slice(0).reverse().forEach((o) => {
      this.ctx.save();
      const a = Vr(A.curves), c = o.inset ? 0 : jp, l = vp(a, -c + (o.inset ? 1 : -1) * o.spread.number, (o.inset ? 1 : -1) * o.spread.number, o.spread.number * (o.inset ? -2 : 2), o.spread.number * (o.inset ? -2 : 2));
      o.inset ? (this.path(a), this.ctx.clip(), this.mask(l)) : (this.mask(a), this.ctx.clip(), this.path(l)), this.ctx.shadowOffsetX = o.offsetX.number + c, this.ctx.shadowOffsetY = o.offsetY.number, this.ctx.shadowColor = V(o.color), this.ctx.shadowBlur = o.blur.number, this.ctx.fillStyle = o.inset ? V(o.color) : "rgba(0,0,0,1)", this.ctx.fill(), this.ctx.restore();
    }));
    let i = 0;
    for (const o of s)
      o.style !== 0 && !ae(o.color) && o.width > 0 && (o.style === 2 ? await this.borderRenderer.renderDashedDottedBorder(
        o.color,
        o.width,
        i,
        A.curves,
        2
        /* BORDER_STYLE.DASHED */
      ) : o.style === 3 ? await this.borderRenderer.renderDashedDottedBorder(
        o.color,
        o.width,
        i,
        A.curves,
        3
        /* BORDER_STYLE.DOTTED */
      ) : o.style === 4 ? await this.borderRenderer.renderDoubleBorder(o.color, o.width, i, A.curves) : await this.borderRenderer.renderSolidBorder(o.color, i, A.curves)), i++;
  }
  async render(A) {
    this.options.backgroundColor && (this.ctx.fillStyle = V(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height));
    const e = kp(A);
    return await this.renderStack(e), this.effectsRenderer.applyEffects([]), this.canvas;
  }
}
const Af = (t) => t instanceof Bl || t instanceof hl ? !0 : t instanceof St && t.type !== $r && t.type !== Nr, ef = (t, A) => {
  switch (t) {
    case 0:
      return Vr(A);
    case 2:
      return yp(A);
    case 1:
    default:
      return Xr(A);
  }
}, tf = (t) => {
  switch (t) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
};
class rf extends bl {
  constructor(A, e) {
    super(A, e), this.canvas = e.canvas ? e.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.options = e, this.canvas.width = Math.floor(e.width * e.scale), this.canvas.height = Math.floor(e.height * e.scale), this.canvas.style.width = `${e.width}px`, this.canvas.style.height = `${e.height}px`, this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-e.x, -e.y), this.context.logger.debug(`EXPERIMENTAL ForeignObject renderer initialized (${e.width}x${e.height} at ${e.x},${e.y}) with scale ${e.scale}`);
  }
  async render(A) {
    const e = In(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A), r = await sf(e);
    return this.options.backgroundColor && (this.ctx.fillStyle = V(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(r, -this.options.x * this.options.scale, -this.options.y * this.options.scale), this.canvas;
  }
}
const sf = (t) => new Promise((A, e) => {
  const r = new Image();
  r.onload = () => {
    A(r);
  }, r.onerror = e, r.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(t))}`;
});
class El {
  constructor({ id: A, enabled: e }) {
    this.id = A, this.enabled = e, this.start = Date.now();
  }
  debug(...A) {
    this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug(this.id, `${this.getTime()}ms`, ...A) : this.info(...A));
  }
  getTime() {
    return Date.now() - this.start;
  }
  info(...A) {
    this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info(this.id, `${this.getTime()}ms`, ...A);
  }
  warn(...A) {
    this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn(this.id, `${this.getTime()}ms`, ...A) : this.info(...A));
  }
  error(...A) {
    this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error(this.id, `${this.getTime()}ms`, ...A) : this.info(...A));
  }
}
El.instances = {};
class nf {
  constructor(A, e) {
    if (this.context = A, this._options = e, this._cache = /* @__PURE__ */ new Map(), this._pendingOperations = /* @__PURE__ */ new Map(), this.maxSize = e.maxCacheSize ?? 100, this.maxSize < 1)
      throw new Error("Cache maxSize must be at least 1");
    this.maxSize > 1e4 && this.context.logger.warn(`Cache maxSize ${this.maxSize} is very large and may cause memory issues. Consider using a smaller value (recommended: 100-1000).`);
  }
  addImage(A) {
    const e = this._pendingOperations.get(A);
    if (e)
      return e;
    if (this.has(A)) {
      const r = this._cache.get(A);
      return r && (r.lastAccessed = Date.now()), Promise.resolve();
    }
    if (sn(A) || cf(A)) {
      const r = this._addImageInternal(A);
      return this._pendingOperations.set(A, r), r.finally(() => {
        this._pendingOperations.delete(A);
      }), r;
    }
    return Promise.resolve();
  }
  async _addImageInternal(A) {
    const e = this._options.imageTimeout ?? 15e3, r = new Promise((n, i) => {
      setTimeout(() => {
        i(new Error(`Image load timeout after ${e}ms: ${A}`));
      }, e);
    }), s = Promise.race([this.loadImage(A), r]);
    s.catch((n) => {
      this.context.logger.error(`Failed to load image ${A}: ${n instanceof Error ? n.message : "Unknown error"}`);
    }), this.set(A, s);
  }
  match(A) {
    const e = this._cache.get(A);
    if (e)
      return e.lastAccessed = Date.now(), e.value;
  }
  /**
   * Set a value in cache with LRU eviction
   */
  set(A, e) {
    if (this._cache.has(A)) {
      const r = this._cache.get(A);
      r.value = e, r.lastAccessed = Date.now();
      return;
    }
    this._cache.size >= this.maxSize && this.evictLRU(), this._cache.set(A, {
      value: e,
      lastAccessed: Date.now()
    });
  }
  /**
   * Evict least recently used entry
   */
  evictLRU() {
    let A = null, e = 1 / 0;
    for (const [r, s] of this._cache.entries())
      s.lastAccessed < e && (e = s.lastAccessed, A = r);
    A && (this._cache.delete(A), this.context.logger.debug(`Cache: Evicted LRU entry: ${A}`));
  }
  /**
   * Get cache size
   */
  size() {
    return this._cache.size;
  }
  /**
   * Get max cache size
   */
  getMaxSize() {
    return this.maxSize;
  }
  /**
   * Clear all cache entries
   */
  clear() {
    this._cache.clear();
  }
  async loadImage(A) {
    const e = this.context.originChecker, r = (a) => e.isSameOrigin(a), s = typeof this._options.customIsSameOrigin == "function" ? await this._options.customIsSameOrigin(A, r) : r(A), n = !rn(A) && this._options.useCORS === !0 && BA.SUPPORT_CORS_IMAGES && !s, i = !rn(A) && !s && !sn(A) && typeof this._options.proxy == "string" && BA.SUPPORT_CORS_XHR && !n;
    if (!s && this._options.allowTaint === !1 && !rn(A) && !sn(A) && !i && !n)
      return;
    let o = A;
    return i && (o = await this.proxy(o)), this.context.logger.debug(`Added image ${A.substring(0, 256)}`), await new Promise((a, c) => {
      const l = new Image();
      l.onload = () => a(l), l.onerror = c, (hf(o) || n) && (l.crossOrigin = "anonymous"), l.src = o, l.complete === !0 && setTimeout(() => a(l), 500), this._options.imageTimeout > 0 && setTimeout(() => c(`Timed out (${this._options.imageTimeout}ms) loading image`), this._options.imageTimeout);
    });
  }
  has(A) {
    return this._cache.has(A);
  }
  keys() {
    return Promise.resolve(Object.keys(this._cache));
  }
  proxy(A) {
    const e = this._options.proxy;
    if (!e)
      throw new Error("No proxy defined");
    const r = A.substring(0, 256);
    return new Promise((s, n) => {
      const i = BA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", o = new XMLHttpRequest();
      o.onload = () => {
        if (o.status === 200)
          if (i === "text")
            s(o.response);
          else {
            const c = new FileReader();
            c.addEventListener("load", () => s(c.result), !1), c.addEventListener("error", (l) => n(l), !1), c.readAsDataURL(o.response);
          }
        else
          n(`Failed to proxy resource ${r} with status code ${o.status}`);
      }, o.onerror = n;
      const a = e.indexOf("?") > -1 ? "&" : "?";
      if (o.open("GET", `${e}${a}url=${encodeURIComponent(A)}&responseType=${i}`), i !== "text" && o instanceof XMLHttpRequest && (o.responseType = i), this._options.imageTimeout) {
        const c = this._options.imageTimeout;
        o.timeout = c, o.ontimeout = () => n(`Timed out (${c}ms) proxying ${r}`);
      }
      o.send();
    });
  }
}
const of = /^data:image\/svg\+xml/i, af = /^data:image\/.*;base64,/i, lf = /^data:image\/.*/i, cf = (t) => BA.SUPPORT_SVG_DRAWING || !Bf(t), rn = (t) => lf.test(t), hf = (t) => af.test(t), sn = (t) => t.substr(0, 4) === "blob", Bf = (t) => t.substr(-3).toLowerCase() === "svg" || of.test(t);
class uf {
  constructor(A) {
    if (!A || !A.document)
      throw new Error("Valid window object required for OriginChecker");
    if (!A.location || !A.location.href)
      throw new Error("Window object must have valid location");
    this.link = A.document.createElement("a"), this.origin = this.getOrigin(A.location.href);
  }
  /**
   * Get the origin (protocol + hostname + port) of a URL
   *
   * @param url - URL to parse
   * @returns Origin string (e.g., "https://example.com:8080")
   */
  getOrigin(A) {
    return this.link.href = A, this.link.href = this.link.href, this.link.protocol + this.link.hostname + this.link.port;
  }
  /**
   * Check if a URL is from the same origin as the context
   *
   * @param src - URL to check
   * @returns true if same origin, false otherwise
   */
  isSameOrigin(A) {
    return this.getOrigin(A) === this.origin;
  }
  /**
   * Get the current context origin
   *
   * @returns The origin of the context window
   */
  getContextOrigin() {
    return this.origin;
  }
}
class gs {
  constructor(A, e, r) {
    this.windowBounds = e, this.instanceName = `#${gs.instanceCount++}`, this.config = r, this.logger = new El({ id: this.instanceName, enabled: A.logging }), this.originChecker = new uf(r.window), this.cache = A.cache ?? r.cache ?? new nf(this, A);
  }
}
gs.instanceCount = 1;
class Gt {
  constructor(A = {}) {
    if (this.window = A.window || (typeof window < "u" ? window : null), !this.window)
      throw new Error("Window object is required but not available");
    this.cspNonce = A.cspNonce, this.cache = A.cache;
  }
  /**
   * Create configuration from an element
   * Extracts window from element's owner document
   */
  static fromElement(A, e = {}) {
    const r = A.ownerDocument;
    if (!r)
      throw new Error("Element is not attached to a document");
    const s = r.defaultView;
    if (!s)
      throw new Error("Document is not attached to a window");
    return new Gt({
      window: s,
      ...e
    });
  }
  /**
   * Clone configuration with override options
   */
  clone(A = {}) {
    return new Gt({
      window: A.window || this.window,
      cspNonce: A.cspNonce ?? this.cspNonce,
      cache: A.cache ?? this.cache
    });
  }
}
function gf(t) {
  console.warn("[html2canvas-pro] setDefaultConfig is deprecated. Pass configuration to html2canvas directly.");
}
class df {
  constructor(A = {}) {
    this.config = {
      maxImageTimeout: 3e5,
      // 5 minutes default
      allowDataUrls: !0,
      ...A
    };
  }
  /**
   * Validate a URL
   *
   * @param url - URL to validate
   * @param context - Context for validation (e.g., 'proxy', 'image')
   * @returns Validation result
   */
  validateUrl(A, e = "general") {
    if (!A || typeof A != "string")
      return {
        valid: !1,
        error: "URL must be a non-empty string"
      };
    if (A.startsWith("data:"))
      return this.config.allowDataUrls ? { valid: !0, sanitized: A } : {
        valid: !1,
        error: "Data URLs are not allowed"
      };
    if (A.startsWith("blob:"))
      return { valid: !0, sanitized: A };
    try {
      const r = new URL(A);
      if (!["http:", "https:"].includes(r.protocol))
        return {
          valid: !1,
          error: `Protocol ${r.protocol} is not allowed. Only http and https are permitted.`
        };
      if (e === "proxy" && this.config.allowedProxyDomains && this.config.allowedProxyDomains.length > 0) {
        const s = r.hostname.toLowerCase();
        if (!this.config.allowedProxyDomains.some((i) => {
          const o = i.toLowerCase();
          return s === o || s.endsWith("." + o);
        }))
          return {
            valid: !1,
            error: `Proxy domain ${r.hostname} is not in the allowed list`
          };
      }
      if (e === "proxy") {
        if (!this.config.allowLocalhostProxy) {
          const s = r.hostname.toLowerCase();
          if (s === "localhost" || s === "127.0.0.1" || s === "::1")
            return {
              valid: !1,
              error: "Localhost is not allowed for proxy URLs"
            };
          if (this.isPrivateIP(s))
            return {
              valid: !1,
              error: "Private IP addresses are not allowed for proxy URLs"
            };
          if (s.startsWith("169.254.") || s.startsWith("fe80:"))
            return {
              valid: !1,
              error: "Link-local addresses are not allowed for proxy URLs"
            };
        }
        return {
          valid: !0,
          sanitized: A,
          requiresRuntimeCheck: !0
        };
      }
      return { valid: !0, sanitized: A };
    } catch (r) {
      return {
        valid: !1,
        error: `Invalid URL format: ${r instanceof Error ? r.message : "Unknown error"}`
      };
    }
  }
  /**
   * Check if a hostname is a private IP address
   */
  isPrivateIP(A) {
    return [
      /^0\./,
      // 0.0.0.0/8 (This network)
      /^10\./,
      // 10.0.0.0/8 (Private)
      /^100\.(6[4-9]|[7-9][0-9]|1[0-1][0-9]|12[0-7])\./,
      // 100.64.0.0/10 (CGNAT)
      /^127\./,
      // 127.0.0.0/8 (Loopback)
      /^169\.254\./,
      // 169.254.0.0/16 (Link-local)
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
      // 172.16.0.0/12 (Private)
      /^192\.0\.0\./,
      // 192.0.0.0/24 (IETF Protocol Assignments)
      /^192\.0\.2\./,
      // 192.0.2.0/24 (TEST-NET-1)
      /^192\.168\./,
      // 192.168.0.0/16 (Private)
      /^198\.(1[8-9])\./,
      // 198.18.0.0/15 (Network benchmark)
      /^198\.51\.100\./,
      // 198.51.100.0/24 (TEST-NET-2)
      /^203\.0\.113\./,
      // 203.0.113.0/24 (TEST-NET-3)
      /^2(2[4-9]|3[0-9])\./,
      // 224.0.0.0/4 (Multicast)
      /^24[0-9]\./,
      // 240.0.0.0/4 (Reserved)
      /^255\.255\.255\.255$/
      // 255.255.255.255/32 (Broadcast)
    ].some((r) => r.test(A)) ? !0 : A.includes(":") ? this.isPrivateIPv6(A) : !1;
  }
  /**
   * Check if an IPv6 address is private or special
   * Handles compressed IPv6 addresses (e.g., ::1, fc00::1)
   */
  isPrivateIPv6(A) {
    const s = A.toLowerCase().trim().replace(/^\[|\]$/g, "").split("%")[0];
    if (/^(0:){7}1$/.test(s) || s === "::1" || /^(0:){7}0$/.test(s) || s === "::")
      return !0;
    const n = this.expandIPv6(s);
    if (!n)
      return this.isPrivateIPv6Prefix(s);
    const i = parseInt(n.substring(0, 2), 16);
    if (i >= 252 && i <= 253)
      return !0;
    if (i === 254) {
      const o = parseInt(n.substring(2, 4), 16);
      if (o >= 128 && o <= 191)
        return !0;
    }
    return i === 255;
  }
  /**
   * Expand compressed IPv6 address to full form
   * e.g., "::1" -> "0000:0000:0000:0000:0000:0000:0000:0001"
   */
  expandIPv6(A) {
    try {
      if (A.includes("::")) {
        const e = A.split("::");
        if (e.length > 2)
          return null;
        const r = e[0] ? e[0].split(":") : [], s = e[1] ? e[1].split(":") : [], n = 8 - r.length - s.length;
        if (n < 0)
          return null;
        const i = Array(n).fill("0000");
        return [...r, ...i, ...s].map((a) => a.padStart(4, "0")).join(":");
      } else {
        const e = A.split(":");
        return e.length !== 8 ? null : e.map((r) => r.padStart(4, "0")).join(":");
      }
    } catch {
      return null;
    }
  }
  /**
   * Fallback prefix matching for IPv6 when expansion fails
   */
  isPrivateIPv6Prefix(A) {
    return !!(/^fc[0-9a-f]{0,2}:?/i.test(A) || /^fd[0-9a-f]{0,2}:?/i.test(A) || /^fe[89ab][0-9a-f]:?/i.test(A) || /^ff[0-9a-f]{0,2}:?/i.test(A));
  }
  /**
   * Validate CSP nonce
   *
   * @param nonce - CSP nonce to validate
   * @returns Validation result
   */
  validateCspNonce(A) {
    return !A || typeof A != "string" ? {
      valid: !1,
      error: "CSP nonce must be a non-empty string"
    } : A.length < 16 ? {
      valid: !1,
      error: "CSP nonce is too short (minimum 16 characters recommended)"
    } : /^[A-Za-z0-9+/=_-]+$/.test(A) ? { valid: !0, sanitized: A } : {
      valid: !1,
      error: "CSP nonce contains invalid characters"
    };
  }
  /**
   * Validate image timeout
   *
   * @param timeout - Timeout in milliseconds
   * @returns Validation result
   */
  validateImageTimeout(A) {
    return typeof A != "number" || isNaN(A) ? {
      valid: !1,
      error: "Image timeout must be a number"
    } : A < 0 ? {
      valid: !1,
      error: "Image timeout cannot be negative"
    } : this.config.maxImageTimeout && A > this.config.maxImageTimeout ? {
      valid: !1,
      error: `Image timeout ${A}ms exceeds maximum allowed ${this.config.maxImageTimeout}ms`
    } : { valid: !0, sanitized: A };
  }
  /**
   * Validate window dimensions
   *
   * @param width - Window width
   * @param height - Window height
   * @returns Validation result
   */
  validateDimensions(A, e) {
    if (typeof A != "number" || typeof e != "number")
      return {
        valid: !1,
        error: "Dimensions must be numbers"
      };
    if (isNaN(A) || isNaN(e))
      return {
        valid: !1,
        error: "Dimensions cannot be NaN"
      };
    if (A <= 0 || e <= 0)
      return {
        valid: !1,
        error: "Dimensions must be positive"
      };
    const r = 32767;
    return A > r || e > r ? {
      valid: !1,
      error: `Dimensions exceed maximum allowed (${r}px)`
    } : { valid: !0, sanitized: { width: A, height: e } };
  }
  /**
   * Validate scale factor
   *
   * @param scale - Scale factor
   * @returns Validation result
   */
  validateScale(A) {
    return typeof A != "number" || isNaN(A) ? {
      valid: !1,
      error: "Scale must be a number"
    } : A <= 0 ? {
      valid: !1,
      error: "Scale must be positive"
    } : A > 10 ? {
      valid: !1,
      error: "Scale factor too large (maximum 10x)"
    } : { valid: !0, sanitized: A };
  }
  /**
   * Validate HTML element
   *
   * @param element - Element to validate
   * @returns Validation result
   */
  validateElement(A) {
    return A ? typeof A != "object" ? {
      valid: !1,
      error: "Element must be an object"
    } : typeof HTMLElement < "u" && A instanceof HTMLElement ? A.ownerDocument ? { valid: !0 } : { valid: !1, error: "Element must be attached to a document" } : A.ownerDocument ? A.ownerDocument.defaultView ? { valid: !0 } : {
      valid: !1,
      error: "Document must be attached to a window (ownerDocument.defaultView required)"
    } : {
      valid: !1,
      error: "Element must be attached to a document (ownerDocument required)"
    } : {
      valid: !1,
      error: "Element is required"
    };
  }
  /**
   * Validate entire options object
   *
   * @param options - Options to validate
   * @returns Validation result with all errors
   */
  validateOptions(A) {
    const e = [], r = A.proxy;
    if (r != null && typeof r == "string" && r.length > 0) {
      const s = this.validateUrl(r, "proxy");
      s.valid || e.push(`Proxy: ${s.error}`);
    }
    if (A.imageTimeout !== void 0) {
      const s = this.validateImageTimeout(A.imageTimeout);
      s.valid || e.push(`Image timeout: ${s.error}`);
    }
    if (A.width !== void 0 || A.height !== void 0) {
      const s = A.width ?? 800, n = A.height ?? 600, i = this.validateDimensions(s, n);
      i.valid || e.push(`Dimensions: ${i.error}`);
    }
    if (A.scale !== void 0) {
      const s = this.validateScale(A.scale);
      s.valid || e.push(`Scale: ${s.error}`);
    }
    if (A.cspNonce !== void 0) {
      const s = this.validateCspNonce(A.cspNonce);
      s.valid || e.push(`CSP nonce: ${s.error}`);
    }
    if (this.config.customValidator) {
      const s = this.config.customValidator(A, "options");
      s.valid || e.push(`Custom validation: ${s.error}`);
    }
    return e.length > 0 ? {
      valid: !1,
      error: e.join("; ")
    } : { valid: !0 };
  }
}
function pf(t = {}) {
  return new df({
    allowDataUrls: !0,
    maxImageTimeout: 3e5,
    // 5 minutes
    ...t
  });
}
class ff {
  constructor(A, e = !0) {
    this.context = A, this.activeMetrics = /* @__PURE__ */ new Map(), this.completedMetrics = [], this.enabled = e, this.getTime = typeof performance < "u" && typeof performance.now == "function" ? () => performance.now() : () => Date.now();
  }
  /**
   * Start measuring a performance metric
   *
   * @param name - Unique name for this metric
   * @param metadata - Optional metadata to attach
   */
  start(A, e) {
    this.enabled && (this.activeMetrics.has(A) && this.context?.logger.warn(`Performance metric '${A}' already started. Overwriting.`), this.activeMetrics.set(A, {
      name: A,
      startTime: this.getTime(),
      metadata: e
    }));
  }
  /**
   * End measuring a performance metric
   *
   * @param name - Name of the metric to end
   * @returns The completed metric, or undefined if not found
   */
  end(A) {
    if (!this.enabled)
      return;
    const e = this.activeMetrics.get(A);
    if (!e) {
      this.context?.logger.warn(`Performance metric '${A}' not found. Was start() called?`);
      return;
    }
    return e.endTime = this.getTime(), e.duration = e.endTime - e.startTime, this.completedMetrics.push(e), this.activeMetrics.delete(A), this.context?.logger.debug(`⏱️  ${A}: ${e.duration.toFixed(2)}ms`, e.metadata), e;
  }
  /**
   * Measure a synchronous function
   *
   * @param name - Name for this measurement
   * @param fn - Function to measure
   * @param metadata - Optional metadata
   * @returns The function's return value
   */
  measure(A, e, r) {
    this.start(A, r);
    try {
      const s = e();
      return this.end(A), s;
    } catch (s) {
      throw this.end(A), s;
    }
  }
  /**
   * Measure an asynchronous function
   *
   * @param name - Name for this measurement
   * @param fn - Async function to measure
   * @param metadata - Optional metadata
   * @returns Promise resolving to the function's return value
   */
  async measureAsync(A, e, r) {
    this.start(A, r);
    try {
      const s = await e();
      return this.end(A), s;
    } catch (s) {
      throw this.end(A), s;
    }
  }
  /**
   * Get all completed metrics
   *
   * @returns Array of completed performance metrics
   */
  getMetrics() {
    return [...this.completedMetrics];
  }
  /**
   * Get a specific metric by name
   *
   * @param name - Metric name
   * @returns The metric, or undefined if not found
   */
  getMetric(A) {
    return this.completedMetrics.find((e) => e.name === A);
  }
  /**
   * Get performance summary
   *
   * @returns Aggregated performance data
   */
  getSummary() {
    const A = this.completedMetrics.reduce((r, s) => r + (s.duration || 0), 0), e = this.completedMetrics.map((r) => ({
      name: r.name,
      duration: r.duration || 0,
      percentage: A > 0 ? ((r.duration || 0) / A * 100).toFixed(1) + "%" : "0%"
    }));
    return {
      totalDuration: A,
      metrics: this.getMetrics(),
      breakdown: e
    };
  }
  /**
   * Log performance summary to console
   */
  logSummary() {
    if (!this.enabled || this.completedMetrics.length === 0 || !this.context)
      return;
    const A = this.getSummary();
    this.context.logger.info(`
📊 Performance Summary (Total: ${A.totalDuration.toFixed(2)}ms):`), A.breakdown.sort((e, r) => r.duration - e.duration).forEach((e) => {
      this.context.logger.info(`  ${e.name.padEnd(20)} ${e.duration.toFixed(2).padStart(8)}ms  ${e.percentage.padStart(6)}`);
    });
  }
  /**
   * Clear all metrics
   */
  clear() {
    this.activeMetrics.clear(), this.completedMetrics.splice(0);
  }
  /**
   * Check if monitoring is enabled
   */
  isEnabled() {
    return this.enabled;
  }
  /**
   * Get active (uncompleted) metrics
   * Useful for debugging leaked measurements
   */
  getActiveMetrics() {
    return Array.from(this.activeMetrics.keys());
  }
}
const Dn = (t, A = {}, e) => {
  const r = e || Gt.fromElement(t, {
    cspNonce: A.cspNonce,
    cache: A.cache
  });
  return Cf(t, A, r);
}, wf = (t) => {
  console.warn('[html2canvas-pro] setCspNonce is deprecated. Pass cspNonce in options instead: html2canvas(element, { cspNonce: "..." })'), typeof window < "u" && gf(new Gt({ window, cspNonce: t }));
};
Dn.setCspNonce = wf;
const Qf = (t) => {
  [
    "scale",
    "width",
    "height",
    "imageTimeout",
    "x",
    "y",
    "windowWidth",
    "windowHeight",
    "scrollX",
    "scrollY"
  ].forEach((e) => {
    const r = t[e];
    if (r != null && typeof r != "number") {
      const s = Number(r);
      Number.isNaN(s) || (t[e] = s);
    }
  });
}, Cf = async (t, A, e) => {
  if (Qf(A), !A.skipValidation) {
    const XA = A.validator || pf(), ge = XA.validateElement(t);
    if (!ge.valid)
      throw new Error(ge.error);
    const Zt = XA.validateOptions(A);
    if (!Zt.valid)
      throw new Error(`Invalid options: ${Zt.error}`);
  }
  if (!t || typeof t != "object")
    throw new Error("Invalid element provided as first argument");
  const r = t.ownerDocument;
  if (!r)
    throw new Error("Element is not attached to a Document");
  const s = r.defaultView;
  if (!s)
    throw new Error("Document is not attached to a Window");
  const n = {
    allowTaint: A.allowTaint ?? !1,
    imageTimeout: A.imageTimeout ?? 15e3,
    proxy: A.proxy,
    useCORS: A.useCORS ?? !1,
    customIsSameOrigin: A.customIsSameOrigin
  }, i = {
    logging: A.logging ?? !0,
    cache: A.cache ?? e.cache,
    ...n
  }, o = 800, a = 600, c = 0, l = s, h = {
    windowWidth: A.windowWidth ?? l.innerWidth ?? o,
    windowHeight: A.windowHeight ?? l.innerHeight ?? a,
    scrollX: A.scrollX ?? l.pageXOffset ?? c,
    scrollY: A.scrollY ?? l.pageYOffset ?? c
  }, u = new pA(h.scrollX, h.scrollY, h.windowWidth, h.windowHeight), g = new gs(i, u, e), d = A.enablePerformanceMonitoring ?? A.logging ?? !1, p = new ff(g, d);
  p.start("total", {
    width: h.windowWidth,
    height: h.windowHeight
  });
  const U = A.foreignObjectRendering ?? !1, y = {
    allowTaint: A.allowTaint ?? !1,
    onclone: A.onclone,
    ignoreElements: A.ignoreElements,
    iframeContainer: A.iframeContainer,
    inlineImages: U,
    copyStyles: U,
    cspNonce: A.cspNonce ?? e.cspNonce
  };
  g.logger.debug(`Starting document clone with size ${u.width}x${u.height} scrolled to ${-u.left},${-u.top}`), p.start("clone");
  const C = new No(g, t, y), x = C.clonedReferenceElement;
  if (!x)
    throw new Error("Unable to find element in cloned iframe");
  const E = await C.toIFrame(r, u);
  p.end("clone");
  const { width: b, height: K, left: W, top: lA } = Vn(x) || ap(x) ? Ec(x.ownerDocument) : As(g, x), X = mf(g, x, A.backgroundColor), Ae = {
    canvas: A.canvas,
    backgroundColor: X,
    scale: A.scale ?? s.devicePixelRatio ?? 1,
    x: (A.x ?? 0) + W,
    y: (A.y ?? 0) + lA,
    width: A.width ?? Math.ceil(b),
    height: A.height ?? Math.ceil(K),
    imageSmoothing: A.imageSmoothing,
    imageSmoothingQuality: A.imageSmoothingQuality
  };
  let nA, vA;
  try {
    return U ? (g.logger.debug("Document cloned, using foreign object rendering"), p.start("render-foreignobject"), nA = await new rf(g, Ae).render(x), p.end("render-foreignobject")) : (g.logger.debug(`Document cloned, element located at ${W},${lA} with size ${b}x${K} using computed rendering`), g.logger.debug("Starting DOM parsing"), p.start("parse"), vA = dl(g, x), p.end("parse"), X === vA.styles.backgroundColor && (vA.styles.backgroundColor = PA.TRANSPARENT), g.logger.debug(`Starting renderer for element at ${Ae.x},${Ae.y} with size ${Ae.width}x${Ae.height}`), p.start("render"), nA = await new Xn(g, Ae).render(vA), p.end("render")), p.start("cleanup"), (A.removeContainer ?? !0) && (No.destroy(E) || g.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), p.end("cleanup"), p.end("total"), g.logger.debug("Finished rendering"), d && p.logSummary(), nA;
  } finally {
    vA && vA.restoreTree();
  }
}, mf = (t, A, e) => {
  const r = A.ownerDocument, s = r.documentElement ? qe(t, getComputedStyle(r.documentElement).backgroundColor) : PA.TRANSPARENT, n = r.body ? qe(t, getComputedStyle(r.body).backgroundColor) : PA.TRANSPARENT, i = typeof e == "string" ? qe(t, e) : e === null ? PA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? ae(s) ? ae(n) ? i : n : s : i;
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const kr = globalThis, zn = kr.ShadowRoot && (kr.ShadyCSS === void 0 || kr.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Wn = Symbol(), Wo = /* @__PURE__ */ new WeakMap();
let yl = class {
  constructor(A, e, r) {
    if (this._$cssResult$ = !0, r !== Wn) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = A, this.t = e;
  }
  get styleSheet() {
    let A = this.o;
    const e = this.t;
    if (zn && A === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (A = Wo.get(e)), A === void 0 && ((this.o = A = new CSSStyleSheet()).replaceSync(this.cssText), r && Wo.set(e, A));
    }
    return A;
  }
  toString() {
    return this.cssText;
  }
};
const Uf = (t) => new yl(typeof t == "string" ? t : t + "", void 0, Wn), Ff = (t, ...A) => {
  const e = t.length === 1 ? t[0] : A.reduce((r, s, n) => r + ((i) => {
    if (i._$cssResult$ === !0) return i.cssText;
    if (typeof i == "number") return i;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + i + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + t[n + 1], t[0]);
  return new yl(e, t, Wn);
}, xf = (t, A) => {
  if (zn) t.adoptedStyleSheets = A.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of A) {
    const r = document.createElement("style"), s = kr.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = e.cssText, t.appendChild(r);
  }
}, Jo = zn ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((A) => {
  let e = "";
  for (const r of A.cssRules) e += r.cssText;
  return Uf(e);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: bf, defineProperty: Ef, getOwnPropertyDescriptor: yf, getOwnPropertyNames: If, getOwnPropertySymbols: Hf, getPrototypeOf: Tf } = Object, ce = globalThis, Yo = ce.trustedTypes, Sf = Yo ? Yo.emptyScript : "", vf = ce.reactiveElementPolyfillSupport, kt = (t, A) => t, zr = { toAttribute(t, A) {
  switch (A) {
    case Boolean:
      t = t ? Sf : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, A) {
  let e = t;
  switch (A) {
    case Boolean:
      e = t !== null;
      break;
    case Number:
      e = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(t);
      } catch {
        e = null;
      }
  }
  return e;
} }, Jn = (t, A) => !bf(t, A), Zo = { attribute: !0, type: String, converter: zr, reflect: !1, useDefault: !1, hasChanged: Jn };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), ce.litPropertyMetadata ?? (ce.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Je = class extends HTMLElement {
  static addInitializer(A) {
    this._$Ei(), (this.l ?? (this.l = [])).push(A);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(A, e = Zo) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(A) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(A, e), !e.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(A, r, e);
      s !== void 0 && Ef(this.prototype, A, s);
    }
  }
  static getPropertyDescriptor(A, e, r) {
    const { get: s, set: n } = yf(this.prototype, A) ?? { get() {
      return this[e];
    }, set(i) {
      this[e] = i;
    } };
    return { get: s, set(i) {
      const o = s?.call(this);
      n?.call(this, i), this.requestUpdate(A, o, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(A) {
    return this.elementProperties.get(A) ?? Zo;
  }
  static _$Ei() {
    if (this.hasOwnProperty(kt("elementProperties"))) return;
    const A = Tf(this);
    A.finalize(), A.l !== void 0 && (this.l = [...A.l]), this.elementProperties = new Map(A.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(kt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(kt("properties"))) {
      const e = this.properties, r = [...If(e), ...Hf(e)];
      for (const s of r) this.createProperty(s, e[s]);
    }
    const A = this[Symbol.metadata];
    if (A !== null) {
      const e = litPropertyMetadata.get(A);
      if (e !== void 0) for (const [r, s] of e) this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const s = this._$Eu(e, r);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(A) {
    const e = [];
    if (Array.isArray(A)) {
      const r = new Set(A.flat(1 / 0).reverse());
      for (const s of r) e.unshift(Jo(s));
    } else A !== void 0 && e.push(Jo(A));
    return e;
  }
  static _$Eu(A, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof A == "string" ? A.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((A) => this.enableUpdating = A), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((A) => A(this));
  }
  addController(A) {
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(A), this.renderRoot !== void 0 && this.isConnected && A.hostConnected?.();
  }
  removeController(A) {
    this._$EO?.delete(A);
  }
  _$E_() {
    const A = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const r of e.keys()) this.hasOwnProperty(r) && (A.set(r, this[r]), delete this[r]);
    A.size > 0 && (this._$Ep = A);
  }
  createRenderRoot() {
    const A = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return xf(A, this.constructor.elementStyles), A;
  }
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), this._$EO?.forEach((A) => A.hostConnected?.());
  }
  enableUpdating(A) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((A) => A.hostDisconnected?.());
  }
  attributeChangedCallback(A, e, r) {
    this._$AK(A, r);
  }
  _$ET(A, e) {
    const r = this.constructor.elementProperties.get(A), s = this.constructor._$Eu(A, r);
    if (s !== void 0 && r.reflect === !0) {
      const n = (r.converter?.toAttribute !== void 0 ? r.converter : zr).toAttribute(e, r.type);
      this._$Em = A, n == null ? this.removeAttribute(s) : this.setAttribute(s, n), this._$Em = null;
    }
  }
  _$AK(A, e) {
    const r = this.constructor, s = r._$Eh.get(A);
    if (s !== void 0 && this._$Em !== s) {
      const n = r.getPropertyOptions(s), i = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : zr;
      this._$Em = s;
      const o = i.fromAttribute(e, n.type);
      this[s] = o ?? this._$Ej?.get(s) ?? o, this._$Em = null;
    }
  }
  requestUpdate(A, e, r, s = !1, n) {
    if (A !== void 0) {
      const i = this.constructor;
      if (s === !1 && (n = this[A]), r ?? (r = i.getPropertyOptions(A)), !((r.hasChanged ?? Jn)(n, e) || r.useDefault && r.reflect && n === this._$Ej?.get(A) && !this.hasAttribute(i._$Eu(A, r)))) return;
      this.C(A, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(A, e, { useDefault: r, reflect: s, wrapped: n }, i) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(A) && (this._$Ej.set(A, i ?? e ?? this[A]), n !== !0 || i !== void 0) || (this._$AL.has(A) || (this.hasUpdated || r || (e = void 0), this._$AL.set(A, e)), s === !0 && this._$Em !== A && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(A));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const A = this.scheduleUpdate();
    return A != null && await A, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [s, n] of this._$Ep) this[s] = n;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [s, n] of r) {
        const { wrapped: i } = n, o = this[s];
        i !== !0 || this._$AL.has(s) || o === void 0 || this.C(s, void 0, n, o);
      }
    }
    let A = !1;
    const e = this._$AL;
    try {
      A = this.shouldUpdate(e), A ? (this.willUpdate(e), this._$EO?.forEach((r) => r.hostUpdate?.()), this.update(e)) : this._$EM();
    } catch (r) {
      throw A = !1, this._$EM(), r;
    }
    A && this._$AE(e);
  }
  willUpdate(A) {
  }
  _$AE(A) {
    this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(A)), this.updated(A);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(A) {
    return !0;
  }
  update(A) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(A) {
  }
  firstUpdated(A) {
  }
};
Je.elementStyles = [], Je.shadowRootOptions = { mode: "open" }, Je[kt("elementProperties")] = /* @__PURE__ */ new Map(), Je[kt("finalized")] = /* @__PURE__ */ new Map(), vf?.({ ReactiveElement: Je }), (ce.reactiveElementVersions ?? (ce.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Dt = globalThis, qo = (t) => t, Wr = Dt.trustedTypes, jo = Wr ? Wr.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, Il = "$lit$", ie = `lit$${Math.random().toFixed(9).slice(2)}$`, Hl = "?" + ie, Lf = `<${Hl}>`, Ie = document, Vt = () => Ie.createComment(""), Xt = (t) => t === null || typeof t != "object" && typeof t != "function", Yn = Array.isArray, kf = (t) => Yn(t) || typeof t?.[Symbol.iterator] == "function", nn = `[ 	
\f\r]`, pt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Aa = /-->/g, ea = />/g, Qe = RegExp(`>|${nn}(?:([^\\s"'>=/]+)(${nn}*=${nn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ta = /'/g, ra = /"/g, Tl = /^(?:script|style|textarea|title)$/i, Sl = (t) => (A, ...e) => ({ _$litType$: t, strings: A, values: e }), w = Sl(1), k = Sl(2), He = Symbol.for("lit-noChange"), $ = Symbol.for("lit-nothing"), sa = /* @__PURE__ */ new WeakMap(), Fe = Ie.createTreeWalker(Ie, 129);
function vl(t, A) {
  if (!Yn(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return jo !== void 0 ? jo.createHTML(A) : A;
}
const Df = (t, A) => {
  const e = t.length - 1, r = [];
  let s, n = A === 2 ? "<svg>" : A === 3 ? "<math>" : "", i = pt;
  for (let o = 0; o < e; o++) {
    const a = t[o];
    let c, l, h = -1, u = 0;
    for (; u < a.length && (i.lastIndex = u, l = i.exec(a), l !== null); ) u = i.lastIndex, i === pt ? l[1] === "!--" ? i = Aa : l[1] !== void 0 ? i = ea : l[2] !== void 0 ? (Tl.test(l[2]) && (s = RegExp("</" + l[2], "g")), i = Qe) : l[3] !== void 0 && (i = Qe) : i === Qe ? l[0] === ">" ? (i = s ?? pt, h = -1) : l[1] === void 0 ? h = -2 : (h = i.lastIndex - l[2].length, c = l[1], i = l[3] === void 0 ? Qe : l[3] === '"' ? ra : ta) : i === ra || i === ta ? i = Qe : i === Aa || i === ea ? i = pt : (i = Qe, s = void 0);
    const g = i === Qe && t[o + 1].startsWith("/>") ? " " : "";
    n += i === pt ? a + Lf : h >= 0 ? (r.push(c), a.slice(0, h) + Il + a.slice(h) + ie + g) : a + ie + (h === -2 ? o : g);
  }
  return [vl(t, n + (t[e] || "<?>") + (A === 2 ? "</svg>" : A === 3 ? "</math>" : "")), r];
};
class zt {
  constructor({ strings: A, _$litType$: e }, r) {
    let s;
    this.parts = [];
    let n = 0, i = 0;
    const o = A.length - 1, a = this.parts, [c, l] = Df(A, e);
    if (this.el = zt.createElement(c, r), Fe.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (s = Fe.nextNode()) !== null && a.length < o; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const h of s.getAttributeNames()) if (h.endsWith(Il)) {
          const u = l[i++], g = s.getAttribute(h).split(ie), d = /([.?@])?(.*)/.exec(u);
          a.push({ type: 1, index: n, name: d[2], strings: g, ctor: d[1] === "." ? Mf : d[1] === "?" ? Rf : d[1] === "@" ? Of : ds }), s.removeAttribute(h);
        } else h.startsWith(ie) && (a.push({ type: 6, index: n }), s.removeAttribute(h));
        if (Tl.test(s.tagName)) {
          const h = s.textContent.split(ie), u = h.length - 1;
          if (u > 0) {
            s.textContent = Wr ? Wr.emptyScript : "";
            for (let g = 0; g < u; g++) s.append(h[g], Vt()), Fe.nextNode(), a.push({ type: 2, index: ++n });
            s.append(h[u], Vt());
          }
        }
      } else if (s.nodeType === 8) if (s.data === Hl) a.push({ type: 2, index: n });
      else {
        let h = -1;
        for (; (h = s.data.indexOf(ie, h + 1)) !== -1; ) a.push({ type: 7, index: n }), h += ie.length - 1;
      }
      n++;
    }
  }
  static createElement(A, e) {
    const r = Ie.createElement("template");
    return r.innerHTML = A, r;
  }
}
function At(t, A, e = t, r) {
  if (A === He) return A;
  let s = r !== void 0 ? e._$Co?.[r] : e._$Cl;
  const n = Xt(A) ? void 0 : A._$litDirective$;
  return s?.constructor !== n && (s?._$AO?.(!1), n === void 0 ? s = void 0 : (s = new n(t), s._$AT(t, e, r)), r !== void 0 ? (e._$Co ?? (e._$Co = []))[r] = s : e._$Cl = s), s !== void 0 && (A = At(t, s._$AS(t, A.values), s, r)), A;
}
class Kf {
  constructor(A, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = A, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(A) {
    const { el: { content: e }, parts: r } = this._$AD, s = (A?.creationScope ?? Ie).importNode(e, !0);
    Fe.currentNode = s;
    let n = Fe.nextNode(), i = 0, o = 0, a = r[0];
    for (; a !== void 0; ) {
      if (i === a.index) {
        let c;
        a.type === 2 ? c = new Jt(n, n.nextSibling, this, A) : a.type === 1 ? c = new a.ctor(n, a.name, a.strings, this, A) : a.type === 6 && (c = new _f(n, this, A)), this._$AV.push(c), a = r[++o];
      }
      i !== a?.index && (n = Fe.nextNode(), i++);
    }
    return Fe.currentNode = Ie, s;
  }
  p(A) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(A, r, e), e += r.strings.length - 2) : r._$AI(A[e])), e++;
  }
}
class Jt {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(A, e, r, s) {
    this.type = 2, this._$AH = $, this._$AN = void 0, this._$AA = A, this._$AB = e, this._$AM = r, this.options = s, this._$Cv = s?.isConnected ?? !0;
  }
  get parentNode() {
    let A = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && A?.nodeType === 11 && (A = e.parentNode), A;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(A, e = this) {
    A = At(this, A, e), Xt(A) ? A === $ || A == null || A === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : A !== this._$AH && A !== He && this._(A) : A._$litType$ !== void 0 ? this.$(A) : A.nodeType !== void 0 ? this.T(A) : kf(A) ? this.k(A) : this._(A);
  }
  O(A) {
    return this._$AA.parentNode.insertBefore(A, this._$AB);
  }
  T(A) {
    this._$AH !== A && (this._$AR(), this._$AH = this.O(A));
  }
  _(A) {
    this._$AH !== $ && Xt(this._$AH) ? this._$AA.nextSibling.data = A : this.T(Ie.createTextNode(A)), this._$AH = A;
  }
  $(A) {
    const { values: e, _$litType$: r } = A, s = typeof r == "number" ? this._$AC(A) : (r.el === void 0 && (r.el = zt.createElement(vl(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === s) this._$AH.p(e);
    else {
      const n = new Kf(s, this), i = n.u(this.options);
      n.p(e), this.T(i), this._$AH = n;
    }
  }
  _$AC(A) {
    let e = sa.get(A.strings);
    return e === void 0 && sa.set(A.strings, e = new zt(A)), e;
  }
  k(A) {
    Yn(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, s = 0;
    for (const n of A) s === e.length ? e.push(r = new Jt(this.O(Vt()), this.O(Vt()), this, this.options)) : r = e[s], r._$AI(n), s++;
    s < e.length && (this._$AR(r && r._$AB.nextSibling, s), e.length = s);
  }
  _$AR(A = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); A !== this._$AB; ) {
      const r = qo(A).nextSibling;
      qo(A).remove(), A = r;
    }
  }
  setConnected(A) {
    this._$AM === void 0 && (this._$Cv = A, this._$AP?.(A));
  }
}
class ds {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(A, e, r, s, n) {
    this.type = 1, this._$AH = $, this._$AN = void 0, this.element = A, this.name = e, this._$AM = s, this.options = n, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = $;
  }
  _$AI(A, e = this, r, s) {
    const n = this.strings;
    let i = !1;
    if (n === void 0) A = At(this, A, e, 0), i = !Xt(A) || A !== this._$AH && A !== He, i && (this._$AH = A);
    else {
      const o = A;
      let a, c;
      for (A = n[0], a = 0; a < n.length - 1; a++) c = At(this, o[r + a], e, a), c === He && (c = this._$AH[a]), i || (i = !Xt(c) || c !== this._$AH[a]), c === $ ? A = $ : A !== $ && (A += (c ?? "") + n[a + 1]), this._$AH[a] = c;
    }
    i && !s && this.j(A);
  }
  j(A) {
    A === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, A ?? "");
  }
}
class Mf extends ds {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(A) {
    this.element[this.name] = A === $ ? void 0 : A;
  }
}
class Rf extends ds {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(A) {
    this.element.toggleAttribute(this.name, !!A && A !== $);
  }
}
class Of extends ds {
  constructor(A, e, r, s, n) {
    super(A, e, r, s, n), this.type = 5;
  }
  _$AI(A, e = this) {
    if ((A = At(this, A, e, 0) ?? $) === He) return;
    const r = this._$AH, s = A === $ && r !== $ || A.capture !== r.capture || A.once !== r.once || A.passive !== r.passive, n = A !== $ && (r === $ || s);
    s && this.element.removeEventListener(this.name, this, r), n && this.element.addEventListener(this.name, this, A), this._$AH = A;
  }
  handleEvent(A) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, A) : this._$AH.handleEvent(A);
  }
}
class _f {
  constructor(A, e, r) {
    this.element = A, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(A) {
    At(this, A);
  }
}
const Nf = Dt.litHtmlPolyfillSupport;
Nf?.(zt, Jt), (Dt.litHtmlVersions ?? (Dt.litHtmlVersions = [])).push("3.3.2");
const $f = (t, A, e) => {
  const r = e?.renderBefore ?? A;
  let s = r._$litPart$;
  if (s === void 0) {
    const n = e?.renderBefore ?? null;
    r._$litPart$ = s = new Jt(A.insertBefore(Vt(), n), n, void 0, e ?? {});
  }
  return s._$AI(t), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Kt = globalThis;
let Mt = class extends Je {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const A = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = A.firstChild), A;
  }
  update(A) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(A), this._$Do = $f(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return He;
  }
};
Mt._$litElement$ = !0, Mt.finalized = !0, Kt.litElementHydrateSupport?.({ LitElement: Mt });
const Pf = Kt.litElementPolyfillSupport;
Pf?.({ LitElement: Mt });
(Kt.litElementVersions ?? (Kt.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Gf = (t) => (A, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(t, A);
  }) : customElements.define(t, A);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vf = { attribute: !0, type: String, converter: zr, reflect: !1, hasChanged: Jn }, Xf = (t = Vf, A, e) => {
  const { kind: r, metadata: s } = e;
  let n = globalThis.litPropertyMetadata.get(s);
  if (n === void 0 && globalThis.litPropertyMetadata.set(s, n = /* @__PURE__ */ new Map()), r === "setter" && ((t = Object.create(t)).wrapped = !0), n.set(e.name, t), r === "accessor") {
    const { name: i } = e;
    return { set(o) {
      const a = A.get.call(this);
      A.set.call(this, o), this.requestUpdate(i, a, t, !0, o);
    }, init(o) {
      return o !== void 0 && this.C(i, void 0, t, o), o;
    } };
  }
  if (r === "setter") {
    const { name: i } = e;
    return function(o) {
      const a = this[i];
      A.call(this, o), this.requestUpdate(i, a, t, !0, o);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function ue(t) {
  return (A, e) => typeof e == "object" ? Xf(t, A, e) : ((r, s, n) => {
    const i = s.hasOwnProperty(n);
    return s.constructor.createProperty(n, r), i ? Object.getOwnPropertyDescriptor(s, n) : void 0;
  })(t, A, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function R(t) {
  return ue({ ...t, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const zf = (t, A, e) => (e.configurable = !0, e.enumerable = !0, Reflect.decorate && typeof A != "object" && Object.defineProperty(t, A, e), e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Wf(t, A) {
  return (e, r, s) => {
    const n = (i) => i.renderRoot?.querySelector(t) ?? null;
    return zf(e, r, { get() {
      return n(this);
    } });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jf = { CHILD: 2 }, Yf = (t) => (...A) => ({ _$litDirective$: t, values: A });
class Zf {
  constructor(A) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(A, e, r) {
    this._$Ct = A, this._$AM = e, this._$Ci = r;
  }
  _$AS(A, e) {
    return this.update(A, e);
  }
  update(A, e) {
    return this.render(...e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Kn extends Zf {
  constructor(A) {
    if (super(A), this.it = $, A.type !== Jf.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(A) {
    if (A === $ || A == null) return this._t = void 0, this.it = A;
    if (A === He) return A;
    if (typeof A != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (A === this.it) return this._t;
    this.it = A;
    const e = [A];
    return e.raw = e, this._t = { _$litType$: this.constructor.resultType, strings: e, values: [] };
  }
}
Kn.directiveName = "unsafeHTML", Kn.resultType = 1;
const na = Yf(Kn);
function Zn() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
var Le = Zn();
function Ll(t) {
  Le = t;
}
var Rt = { exec: () => null };
function _(t, A = "") {
  let e = typeof t == "string" ? t : t.source;
  const r = {
    replace: (s, n) => {
      let i = typeof n == "string" ? n : n.source;
      return i = i.replace(wA.caret, "$1"), e = e.replace(s, i), r;
    },
    getRegex: () => new RegExp(e, A)
  };
  return r;
}
var wA = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (t) => new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}#`),
  htmlBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}<(?:[a-z].*>|!--)`, "i")
}, qf = /^(?:[ \t]*(?:\n|$))+/, jf = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Aw = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Yt = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ew = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, qn = /(?:[*+-]|\d{1,9}[.)])/, kl = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Dl = _(kl).replace(/bull/g, qn).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), tw = _(kl).replace(/bull/g, qn).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), jn = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, rw = /^[^\n]+/, Ai = /(?!\s*\])(?:\\.|[^\[\]\\])+/, sw = _(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Ai).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), nw = _(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, qn).getRegex(), ps = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ei = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, iw = _(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", ei).replace("tag", ps).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Kl = _(jn).replace("hr", Yt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ps).getRegex(), ow = _(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Kl).getRegex(), ti = {
  blockquote: ow,
  code: jf,
  def: sw,
  fences: Aw,
  heading: ew,
  hr: Yt,
  html: iw,
  lheading: Dl,
  list: nw,
  newline: qf,
  paragraph: Kl,
  table: Rt,
  text: rw
}, ia = _(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", Yt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ps).getRegex(), aw = {
  ...ti,
  lheading: tw,
  table: ia,
  paragraph: _(jn).replace("hr", Yt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ia).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ps).getRegex()
}, lw = {
  ...ti,
  html: _(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", ei).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Rt,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: _(jn).replace("hr", Yt).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Dl).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, cw = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, hw = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Ml = /^( {2,}|\\)\n(?!\s*$)/, Bw = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, fs = /[\p{P}\p{S}]/u, ri = /[\s\p{P}\p{S}]/u, Rl = /[^\s\p{P}\p{S}]/u, uw = _(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ri).getRegex(), Ol = /(?!~)[\p{P}\p{S}]/u, gw = /(?!~)[\s\p{P}\p{S}]/u, dw = /(?:[^\s\p{P}\p{S}]|~)/u, pw = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, _l = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, fw = _(_l, "u").replace(/punct/g, fs).getRegex(), ww = _(_l, "u").replace(/punct/g, Ol).getRegex(), Nl = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Qw = _(Nl, "gu").replace(/notPunctSpace/g, Rl).replace(/punctSpace/g, ri).replace(/punct/g, fs).getRegex(), Cw = _(Nl, "gu").replace(/notPunctSpace/g, dw).replace(/punctSpace/g, gw).replace(/punct/g, Ol).getRegex(), mw = _(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, Rl).replace(/punctSpace/g, ri).replace(/punct/g, fs).getRegex(), Uw = _(/\\(punct)/, "gu").replace(/punct/g, fs).getRegex(), Fw = _(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), xw = _(ei).replace("(?:-->|$)", "-->").getRegex(), bw = _(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", xw).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Jr = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Ew = _(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Jr).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), $l = _(/^!?\[(label)\]\[(ref)\]/).replace("label", Jr).replace("ref", Ai).getRegex(), Pl = _(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ai).getRegex(), yw = _("reflink|nolink(?!\\()", "g").replace("reflink", $l).replace("nolink", Pl).getRegex(), si = {
  _backpedal: Rt,
  // only used for GFM url
  anyPunctuation: Uw,
  autolink: Fw,
  blockSkip: pw,
  br: Ml,
  code: hw,
  del: Rt,
  emStrongLDelim: fw,
  emStrongRDelimAst: Qw,
  emStrongRDelimUnd: mw,
  escape: cw,
  link: Ew,
  nolink: Pl,
  punctuation: uw,
  reflink: $l,
  reflinkSearch: yw,
  tag: bw,
  text: Bw,
  url: Rt
}, Iw = {
  ...si,
  link: _(/^!?\[(label)\]\((.*?)\)/).replace("label", Jr).getRegex(),
  reflink: _(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Jr).getRegex()
}, Mn = {
  ...si,
  emStrongRDelimAst: Cw,
  emStrongLDelim: ww,
  url: _(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Hw = {
  ...Mn,
  br: _(Ml).replace("{2,}", "*").getRegex(),
  text: _(Mn.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Er = {
  normal: ti,
  gfm: aw,
  pedantic: lw
}, ft = {
  normal: si,
  gfm: Mn,
  breaks: Hw,
  pedantic: Iw
}, Tw = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, oa = (t) => Tw[t];
function NA(t, A) {
  if (A) {
    if (wA.escapeTest.test(t))
      return t.replace(wA.escapeReplace, oa);
  } else if (wA.escapeTestNoEncode.test(t))
    return t.replace(wA.escapeReplaceNoEncode, oa);
  return t;
}
function aa(t) {
  try {
    t = encodeURI(t).replace(wA.percentDecode, "%");
  } catch {
    return null;
  }
  return t;
}
function la(t, A) {
  const e = t.replace(wA.findPipe, (n, i, o) => {
    let a = !1, c = i;
    for (; --c >= 0 && o[c] === "\\"; ) a = !a;
    return a ? "|" : " |";
  }), r = e.split(wA.splitPipe);
  let s = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), A)
    if (r.length > A)
      r.splice(A);
    else
      for (; r.length < A; ) r.push("");
  for (; s < r.length; s++)
    r[s] = r[s].trim().replace(wA.slashPipe, "|");
  return r;
}
function wt(t, A, e) {
  const r = t.length;
  if (r === 0)
    return "";
  let s = 0;
  for (; s < r && t.charAt(r - s - 1) === A; )
    s++;
  return t.slice(0, r - s);
}
function Sw(t, A) {
  if (t.indexOf(A[1]) === -1)
    return -1;
  let e = 0;
  for (let r = 0; r < t.length; r++)
    if (t[r] === "\\")
      r++;
    else if (t[r] === A[0])
      e++;
    else if (t[r] === A[1] && (e--, e < 0))
      return r;
  return e > 0 ? -2 : -1;
}
function ca(t, A, e, r, s) {
  const n = A.href, i = A.title || null, o = t[1].replace(s.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  const a = {
    type: t[0].charAt(0) === "!" ? "image" : "link",
    raw: e,
    href: n,
    title: i,
    text: o,
    tokens: r.inlineTokens(o)
  };
  return r.state.inLink = !1, a;
}
function vw(t, A, e) {
  const r = t.match(e.other.indentCodeCompensation);
  if (r === null)
    return A;
  const s = r[1];
  return A.split(`
`).map((n) => {
    const i = n.match(e.other.beginningSpace);
    if (i === null)
      return n;
    const [o] = i;
    return o.length >= s.length ? n.slice(s.length) : n;
  }).join(`
`);
}
var Yr = class {
  // set by the lexer
  constructor(t) {
    P(this, "options");
    P(this, "rules");
    // set by the lexer
    P(this, "lexer");
    this.options = t || Le;
  }
  space(t) {
    const A = this.rules.block.newline.exec(t);
    if (A && A[0].length > 0)
      return {
        type: "space",
        raw: A[0]
      };
  }
  code(t) {
    const A = this.rules.block.code.exec(t);
    if (A) {
      const e = A[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: A[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? e : wt(e, `
`)
      };
    }
  }
  fences(t) {
    const A = this.rules.block.fences.exec(t);
    if (A) {
      const e = A[0], r = vw(e, A[3] || "", this.rules);
      return {
        type: "code",
        raw: e,
        lang: A[2] ? A[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : A[2],
        text: r
      };
    }
  }
  heading(t) {
    const A = this.rules.block.heading.exec(t);
    if (A) {
      let e = A[2].trim();
      if (this.rules.other.endingHash.test(e)) {
        const r = wt(e, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (e = r.trim());
      }
      return {
        type: "heading",
        raw: A[0],
        depth: A[1].length,
        text: e,
        tokens: this.lexer.inline(e)
      };
    }
  }
  hr(t) {
    const A = this.rules.block.hr.exec(t);
    if (A)
      return {
        type: "hr",
        raw: wt(A[0], `
`)
      };
  }
  blockquote(t) {
    const A = this.rules.block.blockquote.exec(t);
    if (A) {
      let e = wt(A[0], `
`).split(`
`), r = "", s = "";
      const n = [];
      for (; e.length > 0; ) {
        let i = !1;
        const o = [];
        let a;
        for (a = 0; a < e.length; a++)
          if (this.rules.other.blockquoteStart.test(e[a]))
            o.push(e[a]), i = !0;
          else if (!i)
            o.push(e[a]);
          else
            break;
        e = e.slice(a);
        const c = o.join(`
`), l = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${c}` : c, s = s ? `${s}
${l}` : l;
        const h = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(l, n, !0), this.lexer.state.top = h, e.length === 0)
          break;
        const u = n.at(-1);
        if (u?.type === "code")
          break;
        if (u?.type === "blockquote") {
          const g = u, d = g.raw + `
` + e.join(`
`), p = this.blockquote(d);
          n[n.length - 1] = p, r = r.substring(0, r.length - g.raw.length) + p.raw, s = s.substring(0, s.length - g.text.length) + p.text;
          break;
        } else if (u?.type === "list") {
          const g = u, d = g.raw + `
` + e.join(`
`), p = this.list(d);
          n[n.length - 1] = p, r = r.substring(0, r.length - u.raw.length) + p.raw, s = s.substring(0, s.length - g.raw.length) + p.raw, e = d.substring(n.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: r,
        tokens: n,
        text: s
      };
    }
  }
  list(t) {
    let A = this.rules.block.list.exec(t);
    if (A) {
      let e = A[1].trim();
      const r = e.length > 1, s = {
        type: "list",
        raw: "",
        ordered: r,
        start: r ? +e.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      e = r ? `\\d{1,9}\\${e.slice(-1)}` : `\\${e}`, this.options.pedantic && (e = r ? e : "[*+-]");
      const n = this.rules.other.listItemRegex(e);
      let i = !1;
      for (; t; ) {
        let a = !1, c = "", l = "";
        if (!(A = n.exec(t)) || this.rules.block.hr.test(t))
          break;
        c = A[0], t = t.substring(c.length);
        let h = A[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (y) => " ".repeat(3 * y.length)), u = t.split(`
`, 1)[0], g = !h.trim(), d = 0;
        if (this.options.pedantic ? (d = 2, l = h.trimStart()) : g ? d = A[1].length + 1 : (d = A[2].search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, l = h.slice(d), d += A[1].length), g && this.rules.other.blankLine.test(u) && (c += u + `
`, t = t.substring(u.length + 1), a = !0), !a) {
          const y = this.rules.other.nextBulletRegex(d), C = this.rules.other.hrRegex(d), x = this.rules.other.fencesBeginRegex(d), E = this.rules.other.headingBeginRegex(d), b = this.rules.other.htmlBeginRegex(d);
          for (; t; ) {
            const K = t.split(`
`, 1)[0];
            let W;
            if (u = K, this.options.pedantic ? (u = u.replace(this.rules.other.listReplaceNesting, "  "), W = u) : W = u.replace(this.rules.other.tabCharGlobal, "    "), x.test(u) || E.test(u) || b.test(u) || y.test(u) || C.test(u))
              break;
            if (W.search(this.rules.other.nonSpaceChar) >= d || !u.trim())
              l += `
` + W.slice(d);
            else {
              if (g || h.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || x.test(h) || E.test(h) || C.test(h))
                break;
              l += `
` + u;
            }
            !g && !u.trim() && (g = !0), c += K + `
`, t = t.substring(K.length + 1), h = W.slice(d);
          }
        }
        s.loose || (i ? s.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (i = !0));
        let p = null, U;
        this.options.gfm && (p = this.rules.other.listIsTask.exec(l), p && (U = p[0] !== "[ ] ", l = l.replace(this.rules.other.listReplaceTask, ""))), s.items.push({
          type: "list_item",
          raw: c,
          task: !!p,
          checked: U,
          loose: !1,
          text: l,
          tokens: []
        }), s.raw += c;
      }
      const o = s.items.at(-1);
      if (o)
        o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
      else
        return;
      s.raw = s.raw.trimEnd();
      for (let a = 0; a < s.items.length; a++)
        if (this.lexer.state.top = !1, s.items[a].tokens = this.lexer.blockTokens(s.items[a].text, []), !s.loose) {
          const c = s.items[a].tokens.filter((h) => h.type === "space"), l = c.length > 0 && c.some((h) => this.rules.other.anyLine.test(h.raw));
          s.loose = l;
        }
      if (s.loose)
        for (let a = 0; a < s.items.length; a++)
          s.items[a].loose = !0;
      return s;
    }
  }
  html(t) {
    const A = this.rules.block.html.exec(t);
    if (A)
      return {
        type: "html",
        block: !0,
        raw: A[0],
        pre: A[1] === "pre" || A[1] === "script" || A[1] === "style",
        text: A[0]
      };
  }
  def(t) {
    const A = this.rules.block.def.exec(t);
    if (A) {
      const e = A[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = A[2] ? A[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", s = A[3] ? A[3].substring(1, A[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : A[3];
      return {
        type: "def",
        tag: e,
        raw: A[0],
        href: r,
        title: s
      };
    }
  }
  table(t) {
    const A = this.rules.block.table.exec(t);
    if (!A || !this.rules.other.tableDelimiter.test(A[2]))
      return;
    const e = la(A[1]), r = A[2].replace(this.rules.other.tableAlignChars, "").split("|"), s = A[3]?.trim() ? A[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], n = {
      type: "table",
      raw: A[0],
      header: [],
      align: [],
      rows: []
    };
    if (e.length === r.length) {
      for (const i of r)
        this.rules.other.tableAlignRight.test(i) ? n.align.push("right") : this.rules.other.tableAlignCenter.test(i) ? n.align.push("center") : this.rules.other.tableAlignLeft.test(i) ? n.align.push("left") : n.align.push(null);
      for (let i = 0; i < e.length; i++)
        n.header.push({
          text: e[i],
          tokens: this.lexer.inline(e[i]),
          header: !0,
          align: n.align[i]
        });
      for (const i of s)
        n.rows.push(la(i, n.header.length).map((o, a) => ({
          text: o,
          tokens: this.lexer.inline(o),
          header: !1,
          align: n.align[a]
        })));
      return n;
    }
  }
  lheading(t) {
    const A = this.rules.block.lheading.exec(t);
    if (A)
      return {
        type: "heading",
        raw: A[0],
        depth: A[2].charAt(0) === "=" ? 1 : 2,
        text: A[1],
        tokens: this.lexer.inline(A[1])
      };
  }
  paragraph(t) {
    const A = this.rules.block.paragraph.exec(t);
    if (A) {
      const e = A[1].charAt(A[1].length - 1) === `
` ? A[1].slice(0, -1) : A[1];
      return {
        type: "paragraph",
        raw: A[0],
        text: e,
        tokens: this.lexer.inline(e)
      };
    }
  }
  text(t) {
    const A = this.rules.block.text.exec(t);
    if (A)
      return {
        type: "text",
        raw: A[0],
        text: A[0],
        tokens: this.lexer.inline(A[0])
      };
  }
  escape(t) {
    const A = this.rules.inline.escape.exec(t);
    if (A)
      return {
        type: "escape",
        raw: A[0],
        text: A[1]
      };
  }
  tag(t) {
    const A = this.rules.inline.tag.exec(t);
    if (A)
      return !this.lexer.state.inLink && this.rules.other.startATag.test(A[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(A[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(A[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(A[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: A[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: A[0]
      };
  }
  link(t) {
    const A = this.rules.inline.link.exec(t);
    if (A) {
      const e = A[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
        if (!this.rules.other.endAngleBracket.test(e))
          return;
        const n = wt(e.slice(0, -1), "\\");
        if ((e.length - n.length) % 2 === 0)
          return;
      } else {
        const n = Sw(A[2], "()");
        if (n === -2)
          return;
        if (n > -1) {
          const o = (A[0].indexOf("!") === 0 ? 5 : 4) + A[1].length + n;
          A[2] = A[2].substring(0, n), A[0] = A[0].substring(0, o).trim(), A[3] = "";
        }
      }
      let r = A[2], s = "";
      if (this.options.pedantic) {
        const n = this.rules.other.pedanticHrefTitle.exec(r);
        n && (r = n[1], s = n[3]);
      } else
        s = A[3] ? A[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? r = r.slice(1) : r = r.slice(1, -1)), ca(A, {
        href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
        title: s && s.replace(this.rules.inline.anyPunctuation, "$1")
      }, A[0], this.lexer, this.rules);
    }
  }
  reflink(t, A) {
    let e;
    if ((e = this.rules.inline.reflink.exec(t)) || (e = this.rules.inline.nolink.exec(t))) {
      const r = (e[2] || e[1]).replace(this.rules.other.multipleSpaceGlobal, " "), s = A[r.toLowerCase()];
      if (!s) {
        const n = e[0].charAt(0);
        return {
          type: "text",
          raw: n,
          text: n
        };
      }
      return ca(e, s, e[0], this.lexer, this.rules);
    }
  }
  emStrong(t, A, e = "") {
    let r = this.rules.inline.emStrongLDelim.exec(t);
    if (!r || r[3] && e.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(r[1] || r[2] || "") || !e || this.rules.inline.punctuation.exec(e)) {
      const n = [...r[0]].length - 1;
      let i, o, a = n, c = 0;
      const l = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (l.lastIndex = 0, A = A.slice(-1 * t.length + n); (r = l.exec(A)) != null; ) {
        if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i) continue;
        if (o = [...i].length, r[3] || r[4]) {
          a += o;
          continue;
        } else if ((r[5] || r[6]) && n % 3 && !((n + o) % 3)) {
          c += o;
          continue;
        }
        if (a -= o, a > 0) continue;
        o = Math.min(o, o + a + c);
        const h = [...r[0]][0].length, u = t.slice(0, n + r.index + h + o);
        if (Math.min(n, o) % 2) {
          const d = u.slice(1, -1);
          return {
            type: "em",
            raw: u,
            text: d,
            tokens: this.lexer.inlineTokens(d)
          };
        }
        const g = u.slice(2, -2);
        return {
          type: "strong",
          raw: u,
          text: g,
          tokens: this.lexer.inlineTokens(g)
        };
      }
    }
  }
  codespan(t) {
    const A = this.rules.inline.code.exec(t);
    if (A) {
      let e = A[2].replace(this.rules.other.newLineCharGlobal, " ");
      const r = this.rules.other.nonSpaceChar.test(e), s = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
      return r && s && (e = e.substring(1, e.length - 1)), {
        type: "codespan",
        raw: A[0],
        text: e
      };
    }
  }
  br(t) {
    const A = this.rules.inline.br.exec(t);
    if (A)
      return {
        type: "br",
        raw: A[0]
      };
  }
  del(t) {
    const A = this.rules.inline.del.exec(t);
    if (A)
      return {
        type: "del",
        raw: A[0],
        text: A[2],
        tokens: this.lexer.inlineTokens(A[2])
      };
  }
  autolink(t) {
    const A = this.rules.inline.autolink.exec(t);
    if (A) {
      let e, r;
      return A[2] === "@" ? (e = A[1], r = "mailto:" + e) : (e = A[1], r = e), {
        type: "link",
        raw: A[0],
        text: e,
        href: r,
        tokens: [
          {
            type: "text",
            raw: e,
            text: e
          }
        ]
      };
    }
  }
  url(t) {
    let A;
    if (A = this.rules.inline.url.exec(t)) {
      let e, r;
      if (A[2] === "@")
        e = A[0], r = "mailto:" + e;
      else {
        let s;
        do
          s = A[0], A[0] = this.rules.inline._backpedal.exec(A[0])?.[0] ?? "";
        while (s !== A[0]);
        e = A[0], A[1] === "www." ? r = "http://" + A[0] : r = A[0];
      }
      return {
        type: "link",
        raw: A[0],
        text: e,
        href: r,
        tokens: [
          {
            type: "text",
            raw: e,
            text: e
          }
        ]
      };
    }
  }
  inlineText(t) {
    const A = this.rules.inline.text.exec(t);
    if (A) {
      const e = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: A[0],
        text: A[0],
        escaped: e
      };
    }
  }
}, qA = class Rn {
  constructor(A) {
    P(this, "tokens");
    P(this, "options");
    P(this, "state");
    P(this, "tokenizer");
    P(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = A || Le, this.options.tokenizer = this.options.tokenizer || new Yr(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const e = {
      other: wA,
      block: Er.normal,
      inline: ft.normal
    };
    this.options.pedantic ? (e.block = Er.pedantic, e.inline = ft.pedantic) : this.options.gfm && (e.block = Er.gfm, this.options.breaks ? e.inline = ft.breaks : e.inline = ft.gfm), this.tokenizer.rules = e;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Er,
      inline: ft
    };
  }
  /**
   * Static Lex Method
   */
  static lex(A, e) {
    return new Rn(e).lex(A);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(A, e) {
    return new Rn(e).inlineTokens(A);
  }
  /**
   * Preprocessing
   */
  lex(A) {
    A = A.replace(wA.carriageReturn, `
`), this.blockTokens(A, this.tokens);
    for (let e = 0; e < this.inlineQueue.length; e++) {
      const r = this.inlineQueue[e];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(A, e = [], r = !1) {
    for (this.options.pedantic && (A = A.replace(wA.tabCharGlobal, "    ").replace(wA.spaceLine, "")); A; ) {
      let s;
      if (this.options.extensions?.block?.some((i) => (s = i.call({ lexer: this }, A, e)) ? (A = A.substring(s.raw.length), e.push(s), !0) : !1))
        continue;
      if (s = this.tokenizer.space(A)) {
        A = A.substring(s.raw.length);
        const i = e.at(-1);
        s.raw.length === 1 && i !== void 0 ? i.raw += `
` : e.push(s);
        continue;
      }
      if (s = this.tokenizer.code(A)) {
        A = A.substring(s.raw.length);
        const i = e.at(-1);
        i?.type === "paragraph" || i?.type === "text" ? (i.raw += `
` + s.raw, i.text += `
` + s.text, this.inlineQueue.at(-1).src = i.text) : e.push(s);
        continue;
      }
      if (s = this.tokenizer.fences(A)) {
        A = A.substring(s.raw.length), e.push(s);
        continue;
      }
      if (s = this.tokenizer.heading(A)) {
        A = A.substring(s.raw.length), e.push(s);
        continue;
      }
      if (s = this.tokenizer.hr(A)) {
        A = A.substring(s.raw.length), e.push(s);
        continue;
      }
      if (s = this.tokenizer.blockquote(A)) {
        A = A.substring(s.raw.length), e.push(s);
        continue;
      }
      if (s = this.tokenizer.list(A)) {
        A = A.substring(s.raw.length), e.push(s);
        continue;
      }
      if (s = this.tokenizer.html(A)) {
        A = A.substring(s.raw.length), e.push(s);
        continue;
      }
      if (s = this.tokenizer.def(A)) {
        A = A.substring(s.raw.length);
        const i = e.at(-1);
        i?.type === "paragraph" || i?.type === "text" ? (i.raw += `
` + s.raw, i.text += `
` + s.raw, this.inlineQueue.at(-1).src = i.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = {
          href: s.href,
          title: s.title
        });
        continue;
      }
      if (s = this.tokenizer.table(A)) {
        A = A.substring(s.raw.length), e.push(s);
        continue;
      }
      if (s = this.tokenizer.lheading(A)) {
        A = A.substring(s.raw.length), e.push(s);
        continue;
      }
      let n = A;
      if (this.options.extensions?.startBlock) {
        let i = 1 / 0;
        const o = A.slice(1);
        let a;
        this.options.extensions.startBlock.forEach((c) => {
          a = c.call({ lexer: this }, o), typeof a == "number" && a >= 0 && (i = Math.min(i, a));
        }), i < 1 / 0 && i >= 0 && (n = A.substring(0, i + 1));
      }
      if (this.state.top && (s = this.tokenizer.paragraph(n))) {
        const i = e.at(-1);
        r && i?.type === "paragraph" ? (i.raw += `
` + s.raw, i.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = i.text) : e.push(s), r = n.length !== A.length, A = A.substring(s.raw.length);
        continue;
      }
      if (s = this.tokenizer.text(A)) {
        A = A.substring(s.raw.length);
        const i = e.at(-1);
        i?.type === "text" ? (i.raw += `
` + s.raw, i.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = i.text) : e.push(s);
        continue;
      }
      if (A) {
        const i = "Infinite loop on byte: " + A.charCodeAt(0);
        if (this.options.silent) {
          console.error(i);
          break;
        } else
          throw new Error(i);
      }
    }
    return this.state.top = !0, e;
  }
  inline(A, e = []) {
    return this.inlineQueue.push({ src: A, tokens: e }), e;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(A, e = []) {
    let r = A, s = null;
    if (this.tokens.links) {
      const o = Object.keys(this.tokens.links);
      if (o.length > 0)
        for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; )
          o.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; )
      r = r.slice(0, s.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
      r = r.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let n = !1, i = "";
    for (; A; ) {
      n || (i = ""), n = !1;
      let o;
      if (this.options.extensions?.inline?.some((c) => (o = c.call({ lexer: this }, A, e)) ? (A = A.substring(o.raw.length), e.push(o), !0) : !1))
        continue;
      if (o = this.tokenizer.escape(A)) {
        A = A.substring(o.raw.length), e.push(o);
        continue;
      }
      if (o = this.tokenizer.tag(A)) {
        A = A.substring(o.raw.length), e.push(o);
        continue;
      }
      if (o = this.tokenizer.link(A)) {
        A = A.substring(o.raw.length), e.push(o);
        continue;
      }
      if (o = this.tokenizer.reflink(A, this.tokens.links)) {
        A = A.substring(o.raw.length);
        const c = e.at(-1);
        o.type === "text" && c?.type === "text" ? (c.raw += o.raw, c.text += o.text) : e.push(o);
        continue;
      }
      if (o = this.tokenizer.emStrong(A, r, i)) {
        A = A.substring(o.raw.length), e.push(o);
        continue;
      }
      if (o = this.tokenizer.codespan(A)) {
        A = A.substring(o.raw.length), e.push(o);
        continue;
      }
      if (o = this.tokenizer.br(A)) {
        A = A.substring(o.raw.length), e.push(o);
        continue;
      }
      if (o = this.tokenizer.del(A)) {
        A = A.substring(o.raw.length), e.push(o);
        continue;
      }
      if (o = this.tokenizer.autolink(A)) {
        A = A.substring(o.raw.length), e.push(o);
        continue;
      }
      if (!this.state.inLink && (o = this.tokenizer.url(A))) {
        A = A.substring(o.raw.length), e.push(o);
        continue;
      }
      let a = A;
      if (this.options.extensions?.startInline) {
        let c = 1 / 0;
        const l = A.slice(1);
        let h;
        this.options.extensions.startInline.forEach((u) => {
          h = u.call({ lexer: this }, l), typeof h == "number" && h >= 0 && (c = Math.min(c, h));
        }), c < 1 / 0 && c >= 0 && (a = A.substring(0, c + 1));
      }
      if (o = this.tokenizer.inlineText(a)) {
        A = A.substring(o.raw.length), o.raw.slice(-1) !== "_" && (i = o.raw.slice(-1)), n = !0;
        const c = e.at(-1);
        c?.type === "text" ? (c.raw += o.raw, c.text += o.text) : e.push(o);
        continue;
      }
      if (A) {
        const c = "Infinite loop on byte: " + A.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        } else
          throw new Error(c);
      }
    }
    return e;
  }
}, Zr = class {
  // set by the parser
  constructor(t) {
    P(this, "options");
    P(this, "parser");
    this.options = t || Le;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: A, escaped: e }) {
    const r = (A || "").match(wA.notSpaceStart)?.[0], s = t.replace(wA.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + NA(r) + '">' + (e ? s : NA(s, !0)) + `</code></pre>
` : "<pre><code>" + (e ? s : NA(s, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  heading({ tokens: t, depth: A }) {
    return `<h${A}>${this.parser.parseInline(t)}</h${A}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    const A = t.ordered, e = t.start;
    let r = "";
    for (let i = 0; i < t.items.length; i++) {
      const o = t.items[i];
      r += this.listitem(o);
    }
    const s = A ? "ol" : "ul", n = A && e !== 1 ? ' start="' + e + '"' : "";
    return "<" + s + n + `>
` + r + "</" + s + `>
`;
  }
  listitem(t) {
    let A = "";
    if (t.task) {
      const e = this.checkbox({ checked: !!t.checked });
      t.loose ? t.tokens[0]?.type === "paragraph" ? (t.tokens[0].text = e + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = e + " " + NA(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
        type: "text",
        raw: e + " ",
        text: e + " ",
        escaped: !0
      }) : A += e + " ";
    }
    return A += this.parser.parse(t.tokens, !!t.loose), `<li>${A}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let A = "", e = "";
    for (let s = 0; s < t.header.length; s++)
      e += this.tablecell(t.header[s]);
    A += this.tablerow({ text: e });
    let r = "";
    for (let s = 0; s < t.rows.length; s++) {
      const n = t.rows[s];
      e = "";
      for (let i = 0; i < n.length; i++)
        e += this.tablecell(n[i]);
      r += this.tablerow({ text: e });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + A + `</thead>
` + r + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    const A = this.parser.parseInline(t.tokens), e = t.header ? "th" : "td";
    return (t.align ? `<${e} align="${t.align}">` : `<${e}>`) + A + `</${e}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${NA(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: A, tokens: e }) {
    const r = this.parser.parseInline(e), s = aa(t);
    if (s === null)
      return r;
    t = s;
    let n = '<a href="' + t + '"';
    return A && (n += ' title="' + NA(A) + '"'), n += ">" + r + "</a>", n;
  }
  image({ href: t, title: A, text: e, tokens: r }) {
    r && (e = this.parser.parseInline(r, this.parser.textRenderer));
    const s = aa(t);
    if (s === null)
      return NA(e);
    t = s;
    let n = `<img src="${t}" alt="${e}"`;
    return A && (n += ` title="${NA(A)}"`), n += ">", n;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : NA(t.text);
  }
}, ni = class {
  // no need for block level renderers
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}, jA = class On {
  constructor(A) {
    P(this, "options");
    P(this, "renderer");
    P(this, "textRenderer");
    this.options = A || Le, this.options.renderer = this.options.renderer || new Zr(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new ni();
  }
  /**
   * Static Parse Method
   */
  static parse(A, e) {
    return new On(e).parse(A);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(A, e) {
    return new On(e).parseInline(A);
  }
  /**
   * Parse Loop
   */
  parse(A, e = !0) {
    let r = "";
    for (let s = 0; s < A.length; s++) {
      const n = A[s];
      if (this.options.extensions?.renderers?.[n.type]) {
        const o = n, a = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (a !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(o.type)) {
          r += a || "";
          continue;
        }
      }
      const i = n;
      switch (i.type) {
        case "space": {
          r += this.renderer.space(i);
          continue;
        }
        case "hr": {
          r += this.renderer.hr(i);
          continue;
        }
        case "heading": {
          r += this.renderer.heading(i);
          continue;
        }
        case "code": {
          r += this.renderer.code(i);
          continue;
        }
        case "table": {
          r += this.renderer.table(i);
          continue;
        }
        case "blockquote": {
          r += this.renderer.blockquote(i);
          continue;
        }
        case "list": {
          r += this.renderer.list(i);
          continue;
        }
        case "html": {
          r += this.renderer.html(i);
          continue;
        }
        case "paragraph": {
          r += this.renderer.paragraph(i);
          continue;
        }
        case "text": {
          let o = i, a = this.renderer.text(o);
          for (; s + 1 < A.length && A[s + 1].type === "text"; )
            o = A[++s], a += `
` + this.renderer.text(o);
          e ? r += this.renderer.paragraph({
            type: "paragraph",
            raw: a,
            text: a,
            tokens: [{ type: "text", raw: a, text: a, escaped: !0 }]
          }) : r += a;
          continue;
        }
        default: {
          const o = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return r;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(A, e = this.renderer) {
    let r = "";
    for (let s = 0; s < A.length; s++) {
      const n = A[s];
      if (this.options.extensions?.renderers?.[n.type]) {
        const o = this.options.extensions.renderers[n.type].call({ parser: this }, n);
        if (o !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(n.type)) {
          r += o || "";
          continue;
        }
      }
      const i = n;
      switch (i.type) {
        case "escape": {
          r += e.text(i);
          break;
        }
        case "html": {
          r += e.html(i);
          break;
        }
        case "link": {
          r += e.link(i);
          break;
        }
        case "image": {
          r += e.image(i);
          break;
        }
        case "strong": {
          r += e.strong(i);
          break;
        }
        case "em": {
          r += e.em(i);
          break;
        }
        case "codespan": {
          r += e.codespan(i);
          break;
        }
        case "br": {
          r += e.br(i);
          break;
        }
        case "del": {
          r += e.del(i);
          break;
        }
        case "text": {
          r += e.text(i);
          break;
        }
        default: {
          const o = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return r;
  }
}, an, Dr = (an = class {
  constructor(t) {
    P(this, "options");
    P(this, "block");
    this.options = t || Le;
  }
  /**
   * Process markdown before marked
   */
  preprocess(t) {
    return t;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(t) {
    return t;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(t) {
    return t;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? qA.lex : qA.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? jA.parse : jA.parseInline;
  }
}, P(an, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
])), an), Lw = class {
  constructor(...t) {
    P(this, "defaults", Zn());
    P(this, "options", this.setOptions);
    P(this, "parse", this.parseMarkdown(!0));
    P(this, "parseInline", this.parseMarkdown(!1));
    P(this, "Parser", jA);
    P(this, "Renderer", Zr);
    P(this, "TextRenderer", ni);
    P(this, "Lexer", qA);
    P(this, "Tokenizer", Yr);
    P(this, "Hooks", Dr);
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, A) {
    let e = [];
    for (const r of t)
      switch (e = e.concat(A.call(this, r)), r.type) {
        case "table": {
          const s = r;
          for (const n of s.header)
            e = e.concat(this.walkTokens(n.tokens, A));
          for (const n of s.rows)
            for (const i of n)
              e = e.concat(this.walkTokens(i.tokens, A));
          break;
        }
        case "list": {
          const s = r;
          e = e.concat(this.walkTokens(s.items, A));
          break;
        }
        default: {
          const s = r;
          this.defaults.extensions?.childTokens?.[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((n) => {
            const i = s[n].flat(1 / 0);
            e = e.concat(this.walkTokens(i, A));
          }) : s.tokens && (e = e.concat(this.walkTokens(s.tokens, A)));
        }
      }
    return e;
  }
  use(...t) {
    const A = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((e) => {
      const r = { ...e };
      if (r.async = this.defaults.async || r.async || !1, e.extensions && (e.extensions.forEach((s) => {
        if (!s.name)
          throw new Error("extension name required");
        if ("renderer" in s) {
          const n = A.renderers[s.name];
          n ? A.renderers[s.name] = function(...i) {
            let o = s.renderer.apply(this, i);
            return o === !1 && (o = n.apply(this, i)), o;
          } : A.renderers[s.name] = s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const n = A[s.level];
          n ? n.unshift(s.tokenizer) : A[s.level] = [s.tokenizer], s.start && (s.level === "block" ? A.startBlock ? A.startBlock.push(s.start) : A.startBlock = [s.start] : s.level === "inline" && (A.startInline ? A.startInline.push(s.start) : A.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (A.childTokens[s.name] = s.childTokens);
      }), r.extensions = A), e.renderer) {
        const s = this.defaults.renderer || new Zr(this.defaults);
        for (const n in e.renderer) {
          if (!(n in s))
            throw new Error(`renderer '${n}' does not exist`);
          if (["options", "parser"].includes(n))
            continue;
          const i = n, o = e.renderer[i], a = s[i];
          s[i] = (...c) => {
            let l = o.apply(s, c);
            return l === !1 && (l = a.apply(s, c)), l || "";
          };
        }
        r.renderer = s;
      }
      if (e.tokenizer) {
        const s = this.defaults.tokenizer || new Yr(this.defaults);
        for (const n in e.tokenizer) {
          if (!(n in s))
            throw new Error(`tokenizer '${n}' does not exist`);
          if (["options", "rules", "lexer"].includes(n))
            continue;
          const i = n, o = e.tokenizer[i], a = s[i];
          s[i] = (...c) => {
            let l = o.apply(s, c);
            return l === !1 && (l = a.apply(s, c)), l;
          };
        }
        r.tokenizer = s;
      }
      if (e.hooks) {
        const s = this.defaults.hooks || new Dr();
        for (const n in e.hooks) {
          if (!(n in s))
            throw new Error(`hook '${n}' does not exist`);
          if (["options", "block"].includes(n))
            continue;
          const i = n, o = e.hooks[i], a = s[i];
          Dr.passThroughHooks.has(n) ? s[i] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(o.call(s, c)).then((h) => a.call(s, h));
            const l = o.call(s, c);
            return a.call(s, l);
          } : s[i] = (...c) => {
            let l = o.apply(s, c);
            return l === !1 && (l = a.apply(s, c)), l;
          };
        }
        r.hooks = s;
      }
      if (e.walkTokens) {
        const s = this.defaults.walkTokens, n = e.walkTokens;
        r.walkTokens = function(i) {
          let o = [];
          return o.push(n.call(this, i)), s && (o = o.concat(s.call(this, i))), o;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, A) {
    return qA.lex(t, A ?? this.defaults);
  }
  parser(t, A) {
    return jA.parse(t, A ?? this.defaults);
  }
  parseMarkdown(t) {
    return (e, r) => {
      const s = { ...r }, n = { ...this.defaults, ...s }, i = this.onError(!!n.silent, !!n.async);
      if (this.defaults.async === !0 && s.async === !1)
        return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null)
        return i(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string")
        return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      n.hooks && (n.hooks.options = n, n.hooks.block = t);
      const o = n.hooks ? n.hooks.provideLexer() : t ? qA.lex : qA.lexInline, a = n.hooks ? n.hooks.provideParser() : t ? jA.parse : jA.parseInline;
      if (n.async)
        return Promise.resolve(n.hooks ? n.hooks.preprocess(e) : e).then((c) => o(c, n)).then((c) => n.hooks ? n.hooks.processAllTokens(c) : c).then((c) => n.walkTokens ? Promise.all(this.walkTokens(c, n.walkTokens)).then(() => c) : c).then((c) => a(c, n)).then((c) => n.hooks ? n.hooks.postprocess(c) : c).catch(i);
      try {
        n.hooks && (e = n.hooks.preprocess(e));
        let c = o(e, n);
        n.hooks && (c = n.hooks.processAllTokens(c)), n.walkTokens && this.walkTokens(c, n.walkTokens);
        let l = a(c, n);
        return n.hooks && (l = n.hooks.postprocess(l)), l;
      } catch (c) {
        return i(c);
      }
    };
  }
  onError(t, A) {
    return (e) => {
      if (e.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const r = "<p>An error occurred:</p><pre>" + NA(e.message + "", !0) + "</pre>";
        return A ? Promise.resolve(r) : r;
      }
      if (A)
        return Promise.reject(e);
      throw e;
    };
  }
}, Te = new Lw();
function M(t, A) {
  return Te.parse(t, A);
}
M.options = M.setOptions = function(t) {
  return Te.setOptions(t), M.defaults = Te.defaults, Ll(M.defaults), M;
};
M.getDefaults = Zn;
M.defaults = Le;
M.use = function(...t) {
  return Te.use(...t), M.defaults = Te.defaults, Ll(M.defaults), M;
};
M.walkTokens = function(t, A) {
  return Te.walkTokens(t, A);
};
M.parseInline = Te.parseInline;
M.Parser = jA;
M.parser = jA.parse;
M.Renderer = Zr;
M.TextRenderer = ni;
M.Lexer = qA;
M.lexer = qA.lex;
M.Tokenizer = Yr;
M.Hooks = Dr;
M.parse = M;
M.options;
M.setOptions;
M.use;
M.walkTokens;
M.parseInline;
jA.parse;
qA.lex;
var kw = Object.defineProperty, Dw = Object.getOwnPropertyDescriptor, L = (t, A, e, r) => {
  for (var s = r > 1 ? void 0 : r ? Dw(A, e) : A, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (s = (r ? i(A, e, s) : i(s)) || s);
  return r && s && kw(A, e, s), s;
};
function ha(t, A) {
  const e = t.trim().slice(-1), r = e.charCodeAt(0);
  let s = !1, n = !1;
  if (r >= 44032 && r <= 55203) {
    const i = (r - 44032) % 28;
    s = i !== 0, n = i === 8;
  } else /[0-9]/.test(e) && (s = "013678".includes(e), n = "178".includes(e));
  return A === "을를" ? t + (s ? "을" : "를") : t + (s && !n ? "으로" : "로");
}
class qr extends Error {
  constructor(A, e, r, s) {
    super(A), this.status = e, this.code = r, this.source = s;
  }
}
function Kw(t) {
  const A = t instanceof qr ? t.code ?? "" : "", e = t instanceof qr ? t.status : void 0;
  return A.endsWith("RATE_LIMIT") || A.endsWith("LOCKED") || e === 429 ? {
    kind: "wait",
    title: "잠깐만요, 질문이 너무 빨라요",
    desc: A.endsWith("LOCKED") ? "잠시 동안 질문을 받을 수 없어요. 몇 분 뒤에 다시 물어봐 주세요." : "잠시 뒤에 다시 물어봐 주세요."
  } : A === "CHAT.MESSAGE_TOO_LONG" ? {
    kind: "error",
    title: "질문이 너무 길어요",
    desc: "조금 줄여서 다시 보내 주세요."
  } : A.startsWith("PROJECT.") || A === "ORGANIZATION.NO_CREDIT" || e === 402 ? {
    kind: "stop",
    title: "지금은 상담을 받을 수 없어요",
    desc: "잠시 뒤에 다시 와 주세요. 급한 내용은 문의로 남겨 주시면 답해 드려요.",
    inquiry: !0
  } : e === 403 || A.startsWith("ORGANIZATION.") || A.startsWith("GUEST.") ? {
    kind: "stop",
    title: "지금은 상담을 받을 수 없어요",
    desc: "이 사이트에서는 지금 챗봇을 쓸 수 없어요."
  } : e === 401 ? {
    kind: "error",
    title: "다시 연결해야 해요",
    desc: "페이지를 새로고침한 뒤 다시 물어봐 주세요."
  } : {
    kind: "error",
    title: "연결이 잠깐 끊겼어요",
    desc: "인터넷 연결을 확인하고 다시 시도해 주세요.",
    retry: !0
  };
}
const xe = {
  thinking: "질문을 살펴보고 있어요",
  tool_start: "관련 자료를 찾고 있어요",
  tool_progress: "관련 자료를 찾고 있어요",
  tool_done: "찾은 자료로 답을 쓰고 있어요",
  generating: "찾은 자료로 답을 쓰고 있어요",
  streaming: "답을 쓰고 있어요"
};
function Mw(t) {
  return t.stage === "tool_done" ? xe.tool_done : t.text || xe[t.stage] || xe.thinking;
}
function Ba(t) {
  const A = [];
  return t.documents > 0 && A.push(`문서 조회 ${t.documents}회`), t.faqs > 0 && A.push(`질문 조회 ${t.faqs}회`), A.join(" · ");
}
function Rw(t) {
  const A = /* @__PURE__ */ new Map();
  for (const e of t) {
    if (!e || typeof e != "object") continue;
    const { filename: r, score: s } = e;
    if (typeof r != "string" || !r.trim()) continue;
    const n = r.startsWith("FAQ: ") ? `자주 묻는 질문: ${r.slice(5)}` : r, i = typeof s == "number" ? s : 0, o = A.get(n);
    (o === void 0 || o < i) && A.set(n, i);
  }
  return [...A.entries()].sort((e, r) => r[1] - e[1]).slice(0, 3).map(([e]) => e);
}
function Ow(t) {
  return t < 1024 ? `${t}B` : t < 1024 * 1024 ? `${Math.round(t / 1024)}KB` : `${(t / 1024 / 1024).toFixed(1)}MB`;
}
const _w = {
  incorrect: "내용이 틀렸어요",
  harmful: "유해/공격적이에요",
  "off-topic": "주제와 무관해요",
  privacy: "개인정보가 노출됐어요",
  other: "기타"
}, Nw = {
  incorrect: "내용이 틀렸어요",
  harmful: "불쾌하거나 공격적이에요",
  "off-topic": "질문과 상관없어요",
  privacy: "개인정보가 보여요",
  other: "기타"
}, yr = {
  question: "질문",
  request: "요청",
  bug: "오류 신고",
  other: "기타"
}, $w = ["n", "s", "e", "w", "nw", "ne", "sw", "se"], Ir = 280, Hr = 360, Pw = 360, Gw = 520, Vw = 72, Tr = 24;
M.setOptions({ gfm: !0, breaks: !0 });
M.use({ tokenizer: { del: () => {
} } });
const Xw = /[가-힣ㄱ-ㅎㅏ-ㅣ]/, zw = /[/?#&=+%~-]/;
M.use({
  tokenizer: {
    url(t) {
      const A = this.rules.inline.url.exec(t);
      if (!A || A[2] === "@") return !1;
      let e = A[0];
      const r = e.search(Xw);
      r > 0 && !zw.test(e.charAt(r - 1)) && (e = e.slice(0, r));
      let s;
      do
        s = e, e = this.rules.inline._backpedal.exec(e)?.[0] ?? "";
      while (s !== e);
      if (!e) return;
      const n = A[1] === "www." ? `http://${e}` : e;
      return {
        type: "link",
        raw: e,
        text: e,
        href: n,
        tokens: [{ type: "text", raw: e, text: e }]
      };
    }
  }
});
const on = 5e4;
function Ww() {
  try {
    const t = document.body.cloneNode(!0);
    t.querySelectorAll(
      'script, style, noscript, iframe, nav, footer, header, aside, [aria-hidden="true"], timely-chatbot'
    ).forEach((i) => i.remove());
    const A = t.querySelector("article"), e = t.querySelector("main"), r = A instanceof HTMLElement ? A : e instanceof HTMLElement ? e : t, n = (r.innerText ?? r.textContent ?? "").toString().replace(/ /g, " ").split(/\n+/).map((i) => i.replace(/[ \t]+/g, " ").trim()).filter((i) => i.length > 0).join(`
`);
    return n.length > on ? n.slice(0, on) + `

…(이하 ${n.length - on}자 생략)` : n;
  } catch {
    return "";
  }
}
Qa.addHook("afterSanitizeAttributes", (t) => {
  t.nodeName === "A" && t.getAttribute("href") && (t.setAttribute("target", "_blank"), t.setAttribute("rel", "noopener noreferrer"));
});
function ua(t) {
  const A = M.parse(t, { async: !1 });
  return Qa.sanitize(A, {
    // 안전한 inline tag만 허용. <script>, <iframe>, on* 핸들러 모두 차단.
    ALLOWED_TAGS: [
      "p",
      "br",
      "strong",
      "em",
      "b",
      "i",
      "u",
      "s",
      "del",
      "a",
      "code",
      "pre",
      "blockquote",
      "ul",
      "ol",
      "li",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "hr",
      "span",
      "div"
    ],
    ALLOWED_ATTR: ["href", "title", "target", "rel", "class"]
  });
}
function jr(t) {
  const A = t.trim();
  let e = 0, r = 0, s = 0;
  if (A.startsWith("#")) {
    const i = A.slice(1);
    if (i.length === 3)
      e = parseInt(i[0] + i[0], 16), r = parseInt(i[1] + i[1], 16), s = parseInt(i[2] + i[2], 16);
    else if (i.length === 6)
      e = parseInt(i.slice(0, 2), 16), r = parseInt(i.slice(2, 4), 16), s = parseInt(i.slice(4, 6), 16);
    else
      return null;
    if ([e, r, s].some((o) => Number.isNaN(o))) return null;
  } else {
    const i = A.match(
      /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,[^)]*)?\)$/i
    );
    if (!i) return null;
    e = Number(i[1]), r = Number(i[2]), s = Number(i[3]);
  }
  const n = (i) => {
    const o = i / 255;
    return o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * n(e) + 0.7152 * n(r) + 0.0722 * n(s);
}
function Jw(t) {
  return t instanceof DOMException ? t.name === "QuotaExceededError" || t.name === "NS_ERROR_DOM_QUOTA_REACHED" || t.code === 22 || t.code === 1014 : !1;
}
function Qt(t) {
  const A = jr(t);
  return A === null ? "#ffffff" : A > 0.5 ? "#111111" : "#ffffff";
}
function Yw(t, A) {
  const e = jr(t), r = jr(A);
  if (e === null || r === null) return null;
  const s = Math.max(e, r), n = Math.min(e, r);
  return (s + 0.05) / (n + 0.05);
}
let S = class extends Mt {
  constructor() {
    super(...arguments), this.apiKey = "", this.browserId = "", this.apiBaseUrl = "", this.previewMode = !1, this.inline = !1, this.open = !1, this.fullscreen = !1, this.messages = [], this.input = "", this.streaming = !1, this.atBottom = !0, this.intake = null, this.intakeRequest = null, this.theme = {}, this.maxUserMessageChars = 2e3, this.rect = null, this.reportingMessageId = null, this.resetConfirmOpen = !1, this.reportReason = "incorrect", this.reportDetail = "", this.reportSubmitting = !1, this.reportError = "", this.inquiryOpen = !1, this.inquiryCategory = "question", this.inquirySubject = "", this.inquiryBody = "", this.inquiryContact = "", this.inquirySubmitting = !1, this.inquiryError = "", this.inquirySuccess = !1, this.menuOpen = !1, this.capMenuOpen = !1, this.lastFailed = null, this.inflight = null, this.pendingAttachments = [], this.capturing = !1, this.regionCapturing = !1, this.selectionTimer = null, this.widgetInteractionAt = 0, this.regionRect = null, this.regionStart = null, this.toggleMenu = () => {
      this.menuOpen = !this.menuOpen, this.menuOpen && (this.capMenuOpen = !1);
    }, this.closeMenu = () => {
      this.menuOpen = !1;
    }, this.askSuggested = async (t) => {
      this.streaming || this.previewMode || (this.input = t, await this.updateComplete, this.renderRoot.querySelector("form")?.requestSubmit());
    }, this.toggleCapMenu = () => {
      this.capMenuOpen = !this.capMenuOpen, this.capMenuOpen && (this.menuOpen = !1);
    }, this.closeCapMenu = () => {
      this.capMenuOpen = !1;
    }, this.pickViewportCapture = () => {
      this.capMenuOpen = !1, this.captureViewport();
    }, this.pickRegionCapture = () => {
      this.capMenuOpen = !1, this.startRegionCapture();
    }, this.onPanelKeydown = (t) => {
      t.key !== "Escape" || !this.menuOpen && !this.capMenuOpen || (t.stopPropagation(), this.menuOpen = !1, this.capMenuOpen = !1);
    }, this.updatePageScrollbarOffset = () => {
      const t = window.innerWidth - (document.documentElement?.clientWidth ?? window.innerWidth);
      this.style.setProperty("--page-scrollbar-w", `${Math.max(0, t)}px`), this.updateLauncherClearance();
    }, this.handleDocPointerDown = (t) => {
      const A = t.target;
      A && (A === this || this.contains(A)) && (this.widgetInteractionAt = Date.now());
    }, this.handleSelectionChange = () => {
      this.selectionTimer != null && window.clearTimeout(this.selectionTimer), this.selectionTimer = window.setTimeout(() => {
        this.selectionTimer = null, this.syncSelectionAttachment();
      }, 200);
    }, this.startDrag = (t) => {
      if (this.fullscreen || !this.rect || t.target?.closest("button")) return;
      t.preventDefault();
      const e = { ...this.rect }, r = t.clientX, s = t.clientY, n = (o) => {
        const a = o.clientX - r, c = o.clientY - s;
        let l = e.left + a, h = e.top + c;
        const u = window.innerWidth, g = window.innerHeight;
        l = Math.max(0, Math.min(l, u - e.width)), h = Math.max(0, Math.min(h, g - e.height)), this.rect = {
          left: l,
          top: h,
          width: e.width,
          height: e.height
        };
      }, i = () => {
        window.removeEventListener("pointermove", n), window.removeEventListener("pointerup", i);
      };
      window.addEventListener("pointermove", n), window.addEventListener("pointerup", i);
    }, this.onMessagesScroll = (t) => {
      const A = t.currentTarget, e = A.scrollHeight - A.scrollTop - A.clientHeight < 48;
      e !== this.atBottom && (this.atBottom = e);
    }, this.jumpToBottom = () => {
      this.atBottom = !0, this.scrollToBottom(!0);
    }, this.closeReport = () => {
      this.reportSubmitting || (this.reportingMessageId = null, this.reportError = "");
    }, this.submitReport = async () => {
      const t = this.reportingMessageId;
      if (t) {
        this.reportSubmitting = !0, this.reportError = "";
        try {
          const e = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${await this.ensureJwt()}`
          };
          this.browserId && (e["X-Browser-Id"] = this.browserId);
          const r = await fetch(
            `${this.apiBaseUrl}/widget/messages/${encodeURIComponent(t)}/report`,
            {
              method: "POST",
              headers: e,
              body: JSON.stringify({
                reason: this.reportReason,
                detail: this.reportDetail.trim() || void 0
              })
            }
          );
          if (!r.ok) throw new Error(`http ${r.status}`);
          const s = this.messages.find((n) => n.id === t);
          s && (s.reported = !0, this.requestUpdate()), this.reportingMessageId = null, this.persistSession();
        } catch (A) {
          this.reportError = this.isModern ? "보내지 못했어요. 잠시 뒤에 다시 시도해 주세요." : A instanceof Error ? A.message : "신고 전송 실패";
        } finally {
          this.reportSubmitting = !1;
        }
      }
    }, this.resetConversation = () => {
      this.streaming || this.messages.length !== 0 && (this.resetConfirmOpen = !0);
    }, this.confirmReset = () => {
      this.messages = [], this.sessionId = void 0, this.clearPersistedSession(), this.resetConfirmOpen = !1, this.intake = null, this.intakeRequest = null, this.loadIntake();
    }, this.cancelReset = () => {
      this.resetConfirmOpen = !1;
    }, this.openInquiry = () => {
      this.inquiryOpen = !0, this.inquiryCategory = "question", this.inquirySubject = "", this.inquiryBody = "", this.inquiryContact = "", this.inquiryError = "", this.inquirySuccess = !1;
    }, this.openInquiryFor = (t) => {
      this.openInquiry();
      const A = t.replace(/\s+/g, " ").trim();
      this.inquirySubject = A.length > 120 ? `${A.slice(0, 120)}…` : A;
    }, this.closeInquiry = () => {
      this.inquirySubmitting || (this.inquiryOpen = !1, this.inquiryError = "", this.inquirySuccess = !1);
    }, this.submitInquiry = async () => {
      const t = this.inquirySubject.trim(), A = this.inquiryBody.trim();
      if (!(!t || !A)) {
        this.inquirySubmitting = !0, this.inquiryError = "";
        try {
          const r = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${await this.ensureJwt()}`
          };
          this.browserId && (r["X-Browser-Id"] = this.browserId);
          const s = await fetch(`${this.apiBaseUrl}/widget/inquiries`, {
            method: "POST",
            headers: r,
            body: JSON.stringify({
              sessionId: this.sessionId,
              category: this.inquiryCategory,
              subject: t,
              body: A,
              contact: this.inquiryContact.trim() || void 0
            })
          });
          if (!s.ok) throw new Error(`http ${s.status}`);
          this.inquirySuccess = !0;
        } catch (e) {
          this.inquiryError = this.isModern ? "보내지 못했어요. 잠시 뒤에 다시 시도해 주세요." : e instanceof Error ? e.message : "문의 전송 실패";
        } finally {
          this.inquirySubmitting = !1;
        }
      }
    }, this.fileUrls = /* @__PURE__ */ new Map(), this.fileUrlPending = /* @__PURE__ */ new Set(), this.openAttachment = async (t) => {
      const A = await this.resolveFileUrl(t.id);
      A && window.open(A, "_blank", "noopener,noreferrer");
    }, this.captureViewport = async () => {
      if (!(this.capturing || this.pendingAttachments.length >= 4)) {
        this.capturing = !0;
        try {
          const t = document.body, e = (await Dn(t, {
            useCORS: !0,
            logging: !1,
            ignoreElements: (n) => (n.tagName ?? "").toLowerCase() === "timely-chatbot"
          })).toDataURL("image/png"), r = e.split(",")[1] ?? "", s = Math.round(r.length * 3 / 4 / 1024);
          this.pendingAttachments = [
            ...this.pendingAttachments,
            {
              kind: "image",
              mediaType: "image/png",
              data: r,
              previewUrl: e,
              label: `현재 화면 (${s}KB)`
            }
          ];
        } catch (t) {
          console.error("[chatbot-widget] capture failed", t), window.alert(
            `스크린샷 실패: ${t instanceof Error ? t.message : "unknown"}`
          );
        } finally {
          this.capturing = !1;
        }
      }
    }, this.startRegionCapture = () => {
      this.streaming || this.capturing || this.regionCapturing || this.pendingAttachments.length >= 4 || (this.regionCapturing = !0, this.regionStart = null, this.regionRect = null, window.addEventListener("keydown", this.regionKeyHandler));
    }, this.cancelRegionCapture = () => {
      this.regionCapturing = !1, this.regionStart = null, this.regionRect = null, window.removeEventListener("keydown", this.regionKeyHandler);
    }, this.regionKeyHandler = (t) => {
      t.key === "Escape" && (t.preventDefault(), this.cancelRegionCapture());
    }, this.regionPointerDown = (t) => {
      t.preventDefault(), t.currentTarget.setPointerCapture?.(t.pointerId), this.regionStart = { x: t.clientX, y: t.clientY }, this.regionRect = { x: t.clientX, y: t.clientY, w: 0, h: 0 };
    }, this.regionPointerMove = (t) => {
      if (!this.regionStart) return;
      const A = this.regionStart.x, e = this.regionStart.y, r = t.clientX, s = t.clientY;
      this.regionRect = {
        x: Math.min(A, r),
        y: Math.min(e, s),
        w: Math.abs(r - A),
        h: Math.abs(s - e)
      };
    }, this.regionPointerUp = async (t) => {
      t.preventDefault();
      const A = this.regionRect, e = this.regionStart;
      if (this.regionStart = null, !A || !e || A.w < 12 || A.h < 12) {
        this.cancelRegionCapture();
        return;
      }
      window.removeEventListener("keydown", this.regionKeyHandler), this.regionCapturing = !1, this.regionRect = null, this.capturing = !0;
      try {
        const s = (await Dn(document.body, {
          x: A.x + window.scrollX,
          y: A.y + window.scrollY,
          width: A.w,
          height: A.h,
          useCORS: !0,
          logging: !1,
          ignoreElements: (o) => (o.tagName ?? "").toLowerCase() === "timely-chatbot"
        })).toDataURL("image/png"), n = s.split(",")[1] ?? "", i = Math.round(n.length * 3 / 4 / 1024);
        this.pendingAttachments = [
          ...this.pendingAttachments,
          {
            kind: "image",
            mediaType: "image/png",
            data: n,
            previewUrl: s,
            label: `영역 ${A.w}×${A.h} (${i}KB)`
          }
        ];
      } catch (r) {
        console.error("[chatbot-widget] region capture failed", r), window.alert(
          `영역 캡처 실패: ${r instanceof Error ? r.message : "unknown"}`
        );
      } finally {
        this.capturing = !1;
      }
    }, this.removeAttachment = (t) => {
      const A = this.pendingAttachments[t];
      if (this.pendingAttachments = this.pendingAttachments.filter(
        (e, r) => r !== t
      ), A && A.kind === "text" && A.source === "selection")
        try {
          window.getSelection()?.removeAllRanges();
        } catch {
        }
    }, this.onComposerInput = (t) => {
      const A = t.target;
      this.input = A.value, A.style.height = "auto", A.style.height = `${A.scrollHeight}px`;
    }, this.onComposerKeydown = (t) => {
      if (t.key !== "Enter" || t.shiftKey || t.isComposing) return;
      t.preventDefault(), t.target.closest("form")?.requestSubmit();
    }, this.retryLast = async () => {
      const t = this.lastFailed;
      if (!t || this.streaming || this.previewMode) return;
      this.lastFailed = null;
      const A = {
        role: "assistant",
        content: "",
        progress: { stage: "thinking", text: xe.thinking, history: [] }
      };
      this.messages = this.messages.map(
        (e) => e === t.assistant ? A : e
      ), this.streaming = !0, this.atBottom = !0, await this.streamReply(t.text, t.attachments, A);
    };
  }
  render() {
    const t = this.fullscreen ? "panel fullscreen" : "panel", A = this.regionCapturing ? `${t} region-hidden` : t, e = this.theme.title || "챗봇", r = !!this.theme.iconUrl, s = !!(this.theme.iconUrl && this.theme.launcherIconOnly), n = [
      "toggle",
      this.regionCapturing ? "region-hidden" : "",
      s ? "icon-only" : "",
      // 아이콘이 유지되는 모드(=커스텀 아이콘)는 열림을 opacity/축소로 표시.
      r && this.open ? "icon-active" : ""
    ].filter(Boolean).join(" "), i = (this.theme.launcherLabel ?? "").trim(), o = this.theme.launcherLabelMode === "hover", a = this.isModern, c = [
      "launcher-wrap",
      this.regionCapturing ? "region-hidden" : "",
      // modern 모바일은 패널이 화면을 다 덮으므로 열린 동안 런처를 숨긴다 (CSS 가 처리).
      this.open ? "is-open" : ""
    ].filter(Boolean).join(" ");
    return w`
      ${this.regionCapturing ? this.renderRegionCaptureOverlay() : null}
      <div class=${c}>
        <button
          class=${n}
          @click=${this.toggle}
          aria-label=${this.open ? "닫기" : i || "챗봇 열기"}
        >
          ${this.open && !r ? k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>` : this.renderToggleIcon()}
        </button>
        ${i ? w`<span
              class=${o ? "launcher-label tip" : "launcher-label"}
              >${i}</span
            >` : null}
      </div>
      ${this.open ? w`
            <div
              class=${A}
              style=${this.panelStyle()}
              @keydown=${this.onPanelKeydown}
            >
              ${this.fullscreen ? null : $w.map(
      (l) => w`
                      <div
                        class=${`rh ${l}`}
                        @pointerdown=${(h) => this.startResize(h, l)}
                      ></div>
                    `
    )}
              ${a ? this.renderModernHeader(e) : w`<div class="header" @pointerdown=${this.startDrag}>
                ${this.theme.headerIconUrl ? w`<img
                      class="header-icon"
                      src=${this.theme.headerIconUrl}
                      alt=""
                    />` : null}
                <span class="title">${e}</span>
                <button
                  type="button"
                  @click=${this.resetConversation}
                  title="대화 초기화"
                  aria-label="대화 초기화"
                  ?disabled=${this.streaming || this.messages.length === 0}
                >
                  ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15.5-6.36L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.36L3 16"/><path d="M3 21v-5h5"/></svg>`}
                </button>
                <button
                  type="button"
                  @click=${this.openInquiry}
                  title="문의하기"
                  aria-label="문의하기"
                >
                  ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`}
                </button>
                <button
                  type="button"
                  class="fs-btn"
                  @click=${this.toggleFullscreen}
                  title=${this.fullscreen ? "축소" : "전체화면"}
                  aria-label=${this.fullscreen ? "축소" : "전체화면"}
                >
                  ${this.fullscreen ? k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 9H4M4 9V4M4 9L9 4M15 9h5M20 9V4M20 9l-5-5M9 15H4M4 15v5M4 15l5 5M15 15h5M20 15v5M20 15l-5 5"/></svg>` : k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8V4h4M16 4h4v4M4 16v4h4M16 20h4v-4"/></svg>`}
                </button>
                <button
                  type="button"
                  class="close-btn"
                  @click=${this.close}
                  title="닫기"
                  aria-label="닫기"
                >
                  ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>`}
                </button>
              </div>`}
              ${a && this.menuOpen ? this.renderMenu() : null}
              ${a && this.capMenuOpen ? w`<div class="menu-backdrop" @click=${this.closeCapMenu}></div>` : null}
              <div class="messages-wrap">
              <div class="messages" @scroll=${this.onMessagesScroll}>
                ${this.theme.welcomeMessage?.trim() ? w`<div class="msg assistant">
                      ${na(ua(this.theme.welcomeMessage))}
                    </div>` : null}
                ${this.intake ? this.renderIntake(this.intake) : null}
                ${a && (!this.intake || this.intake.complete) ? this.renderSuggestions() : null}
                ${this.messages.map(
      (l) => l.note ? w`<div class="intake-note" role="status">
                        ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`}<span
                          >${l.content}</span
                        >
                      </div>` : l.role === "assistant" ? w`<div class="msg-wrap assistant">
                        ${!a && l.progress && l.progress.history.length > 0 ? w`<ul class="progress-history">
                              ${l.progress.history.map(
        (h) => w`<li>
                                    ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`}
                                    <span>${h}</span>
                                  </li>`
      )}
                            </ul>` : null}
                        ${!a && l.progress && l.progress.text ? w`<div class="progress-line">
                              <span class="progress-spinner"></span>
                              <span>${l.progress.text}</span>
                            </div>` : null}
                        ${a && !l.content && (l.progress || l.notice) ? (
        // modern: 진행 중엔 회색 진행 줄이, 실패하면 안내 카드가 대신한다.
        // (classic 은 같은 문구를 빈 말풍선에도 한 번 더 보여 줬다.)
        null
      ) : w`<div class="msg assistant">
                              ${l.content ? na(ua(l.content)) : l.progress ? w`<span class="progress-placeholder"
                                      >${l.progress.text || xe[l.progress.stage] || "응답 준비"}</span
                                    >` : w`<span class="typing"
                                      ><span></span><span></span><span></span
                                    ></span>`}
                            </div>`}
                        ${a && l.progress && l.progress.text && !l.notice ? w`<div class="wait-line" role="status">
                              ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-4.3-4.3"/></svg>`}
                              <span class="shimmer">${Mw(l.progress)}</span>
                            </div>` : null}
                        ${l.files && l.files.length > 0 ? this.renderAttachments(l.files) : null}
                        ${a && l.content && l.sources && l.sources.length > 0 ? w`<div class="sources" aria-label="출처">
                              ${l.sources.map(
        (h) => w`<span class="source-chip" title=${h}
                                    >${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v5h5"/><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/></svg>`}<span
                                      >${h}</span
                                    ></span
                                  >`
      )}
                            </div>` : null}
                        ${a && l.content && l.lookups && Ba(l.lookups) ? w`<span class="lookups"
                              >${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-4.3-4.3"/></svg>`}${Ba(l.lookups)}</span
                            >` : null}
                        ${a && l.hint && l.content && l === this.messages[this.messages.length - 1] ? this.renderHint(l, l.hint) : null}
                        ${a && l.notice ? this.renderNotice(l) : null}
                        ${l.id && l.content ? w`<div class="reactions">
                              <button
                                type="button"
                                class=${l.reaction === 1 ? "react on" : "react"}
                                @click=${() => this.toggleReaction(l, 1)}
                                aria-label="좋아요"
                                title="도움이 됐어요"
                              >
                                ${k`<svg viewBox="0 0 24 24" fill="${l.reaction === 1 ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zM7 11l5-8a2 2 0 0 1 2 2v3h5a2 2 0 0 1 2 2.4l-1.5 7A2 2 0 0 1 17.5 19H7"/></svg>`}
                              </button>
                              <button
                                type="button"
                                class=${l.reaction === -1 ? "react on" : "react"}
                                @click=${() => this.toggleReaction(l, -1)}
                                aria-label="별로예요"
                                title="별로였어요"
                              >
                                ${k`<svg viewBox="0 0 24 24" fill="${l.reaction === -1 ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 13V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zM17 13l-5 8a2 2 0 0 1-2-2v-3H5a2 2 0 0 1-2-2.4l1.5-7A2 2 0 0 1 6.5 5H17"/></svg>`}
                              </button>
                              <button
                                type="button"
                                class=${l.reported ? "react reported" : "react"}
                                @click=${() => this.openReport(l)}
                                ?disabled=${l.reported}
                                aria-label="신고"
                                title=${l.reported ? "신고 접수됨" : "신고하기"}
                              >
                                ${k`<svg viewBox="0 0 24 24" fill="${l.reported ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h13l-2 4 2 4H4"/></svg>`}
                              </button>
                              ${a && l.reported ? w`<span class="reported-note"
                                    >신고를 받았어요</span
                                  >` : null}
                            </div>` : null}
                      </div>` : w`<div class="msg user">${l.content}</div>`
    )}
              </div>
              ${!this.atBottom && this.messages.length > 0 ? w`<button
                    type="button"
                    class="jump-bottom"
                    @click=${this.jumpToBottom}
                    aria-label="맨 아래로"
                  >
                    ${this.streaming ? w`<span class="shimmer">답을 쓰고 있어요</span>` : null}
                    ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg>`}
                    <span>맨 아래로</span>
                  </button>` : null}
              </div>
              ${!a && this.pendingAttachments.length > 0 ? w`<div class="pending-attachments">
                    ${this.renderPendingChips()}
                  </div>` : null}
              ${a ? this.renderModernComposer() : w`<form @submit=${this.send}>
                <div class="composer">
                  <textarea
                    rows="1"
                    .value=${this.input}
                    @input=${this.onComposerInput}
                    @keydown=${this.onComposerKeydown}
                    ?disabled=${this.streaming}
                    maxlength=${this.maxUserMessageChars}
                    placeholder=${this.intake && !this.intake.complete ? "알려 줄 정보를 적어 주세요" : "메시지를 입력하세요..."}
                  ></textarea>
                  <div class="composer-toolbar">
                    ${this.theme.captureEnabled !== !1 ? w`<button
                          type="button"
                          class="cap-btn"
                          @click=${this.captureViewport}
                          ?disabled=${this.streaming || this.capturing || this.pendingAttachments.length >= 4}
                          title="현재 화면 캡처"
                          aria-label="현재 화면 캡처"
                        >
                          ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`}
                        </button>` : null}
                    ${this.theme.regionCaptureEnabled !== !1 ? w`<button
                          type="button"
                          class="cap-btn"
                          @click=${this.startRegionCapture}
                          ?disabled=${this.streaming || this.capturing || this.regionCapturing || this.pendingAttachments.length >= 4}
                          title="영역 선택 캡처, 드래그한 부분만 이미지로 첨부"
                          aria-label="영역 선택 캡처"
                        >
                          ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7V5a2 2 0 0 1 2-2h2"/><path d="M15 3h2a2 2 0 0 1 2 2v2"/><path d="M19 15v2a2 2 0 0 1-2 2h-2"/><path d="M9 21H7a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6"/></svg>`}
                        </button>` : null}
                    <div class="spacer"></div>
                    ${this.input.length >= this.maxUserMessageChars * 0.8 ? w`<span
                          class=${`char-counter ${this.input.length >= this.maxUserMessageChars * 0.95 ? "near-limit" : ""}`}
                          aria-live="polite"
                        >
                          ${this.input.length}/${this.maxUserMessageChars}
                        </span>` : null}
                    <button
                      type="submit"
                      ?disabled=${this.streaming || !this.input.trim()}
                    >
                      전송
                    </button>
                  </div>
                </div>
              </form>`}
              ${this.reportingMessageId ? this.renderReportModal() : null}
              ${this.inquiryOpen ? this.renderInquiryModal() : null}
              ${this.resetConfirmOpen ? this.renderResetConfirmModal() : null}
            </div>
          ` : null}
    `;
  }
  /** theme.design === "modern" (새 디자인). 미지정·"classic" 이면 종전 모양. */
  get isModern() {
    return this.theme.design === "modern";
  }
  /**
   * modern 머리글: 아바타, 제목, 안내 문구, 더보기 메뉴(문의 남기기·새 대화·크게 보기), 닫기.
   * 안내 문구는 theme.headerSubtitle (미지정이면 기본 문구, 빈 문자열이면 숨김).
   */
  renderModernHeader(t) {
    const A = this.theme.headerSubtitle === void 0 ? "보통 몇 초 안에 답해요" : this.theme.headerSubtitle.trim();
    return w`<div class="header" @pointerdown=${this.startDrag}>
      <span class="avatar" aria-hidden="true">
        ${this.theme.headerIconUrl ? w`<img src=${this.theme.headerIconUrl} alt="" />` : k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-12.5 6.6L4 20l1.4-4.5A8 8 0 1 1 21 12Z"/></svg>`}
      </span>
      <span class="heading">
        <span class="title">${t}</span>
        ${A ? w`<span class="subtitle">${A}</span>` : null}
      </span>
      <button
        type="button"
        @click=${this.toggleMenu}
        title="메뉴"
        aria-label="메뉴"
        aria-haspopup="menu"
        aria-expanded=${this.menuOpen ? "true" : "false"}
      >
        ${k`<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8"/></svg>`}
      </button>
      <button
        type="button"
        class="close-btn"
        @click=${this.close}
        title="닫기"
        aria-label="닫기"
      >
        ${k`<svg class="icon-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>`}
        ${k`<svg class="icon-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`}
      </button>
    </div>`;
  }
  renderMenu() {
    return w`
      <div class="menu-backdrop" @click=${this.closeMenu}></div>
      <div class="menu" role="menu" aria-label="위젯 메뉴">
        <button
          type="button"
          role="menuitem"
          @click=${() => {
      this.menuOpen = !1, this.openInquiry();
    }}
        >
          ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v12H8l-4 4Z"/></svg>`}
          문의 남기기
        </button>
        <button
          type="button"
          role="menuitem"
          ?disabled=${this.streaming || this.messages.length === 0}
          @click=${() => {
      this.menuOpen = !1, this.resetConversation();
    }}
        >
          ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>`}
          새 대화 시작
        </button>
        <button
          type="button"
          role="menuitem"
          class="menu-full"
          @click=${() => {
      this.menuOpen = !1, this.toggleFullscreen();
    }}
        >
          ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>`}
          ${this.fullscreen ? "작게 보기" : "크게 보기"}
        </button>
      </div>
    `;
  }
  /** modern 오류 안내 카드. "다시 시도"는 마지막으로 실패한 답에만, 답을 받는 중이 아닐 때만. */
  renderNotice(t) {
    const A = t.notice;
    if (!A) return null;
    const e = !!A.retry && this.lastFailed?.assistant === t && !this.streaming, r = A.kind === "wait" ? k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>` : A.kind === "stop" ? k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M10 9v6M14 9v6"/></svg>` : k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>`;
    return w`<div class=${`notice ${A.kind}`} role="status">
      <div class="notice-body">
        <span class="notice-icon" aria-hidden="true">${r}</span>
        <span class="notice-text">
          <span class="notice-title">${A.title}</span>
          <span class="notice-desc">${A.desc}</span>
        </span>
      </div>
      ${e ? w`<button
            type="button"
            class="notice-btn"
            @click=${() => void this.retryLast()}
          >
            다시 시도
          </button>` : null}
      ${A.inquiry ? w`<button type="button" class="notice-btn" @click=${this.openInquiry}>
            문의 남기기
          </button>` : null}
    </div>`;
  }
  /** 보내기 전 첨부 칩. classic 은 입력창 위 줄에, modern 은 입력 영역 안에 놓는다. */
  renderPendingChips() {
    return this.pendingAttachments.map(
      (t, A) => w`<div class="att-chip" title=${t.label}>
          ${t.kind === "image" ? w`<img src=${t.previewUrl} alt="" />` : w`<span class="att-icon">${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v5h5"/><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/></svg>`}</span>`}
          <span class="att-label">${t.label}</span>
          <button
            type="button"
            class="att-remove"
            @click=${() => this.removeAttachment(A)}
            aria-label="첨부 제거"
          >
            ×
          </button>
        </div>`
    );
  }
  /** modern 추천 질문. 첫 질문을 보내기 전까지만 보인다 (대시보드 미리보기에선 늘 보여 준다). */
  /** 처음 묻는 말, 받는 동안의 항목 칩, 다 받은 뒤의 "알려 준 정보" 카드 */
  renderIntake(t) {
    const A = t.fields.filter((e) => t.values[e.key]).map((e) => t.values[e.key] === "모름" ? `${e.label} 모름` : t.values[e.key]).join(" · ");
    return w`<div class="msg assistant intake-ask">${t.message}</div>
      ${t.complete ? w`<div class="intake-summary">
            <span class="intake-summary-title"
              >${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>`}알려 준 정보</span
            >
            <span class="intake-summary-values">${A}</span>
          </div>` : w`<div class="intake-chips" role="list" aria-label="받을 정보">
            ${t.fields.map((e) => {
      const r = !!t.values[e.key];
      return w`<span role="listitem" class=${r ? "intake-chip done" : "intake-chip"}
                >${r ? k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>` : null}${e.label}${e.required ? "" : " (선택)"}</span
              >`;
    })}
          </div>`}`;
  }
  /**
   * 대화 전에 받을 정보를 불러온다 (열 때, 새 대화를 시작할 때). 이어 쓰는 대화면 받은 값도 함께 온다.
   * 실패해도 대화는 된다: 서버가 대화 중에 같은 규칙으로 정보를 먼저 묻는다.
   */
  loadIntake() {
    return this.previewMode ? Promise.resolve() : this.intakeRequest ? this.intakeRequest : (this.intakeRequest = (async () => {
      try {
        const t = this.sessionId ? `?sessionId=${encodeURIComponent(this.sessionId)}` : "";
        let A;
        for (let r = 0; r < 2; r++) {
          const s = await this.ensureJwt();
          if (A = await fetch(`${this.apiBaseUrl}/widget/intake${t}`, {
            headers: { Authorization: `Bearer ${s}`, "X-Browser-Id": this.browserId }
          }), A.status !== 401) break;
          this.jwt = void 0;
        }
        if (!A || !A.ok) return;
        const e = await A.json();
        this.intake = e.intake ? {
          message: e.intake.message,
          fields: e.intake.fields,
          values: e.values ?? {},
          complete: e.complete === !0
        } : null;
      } catch {
      }
    })(), this.intakeRequest);
  }
  renderSuggestions() {
    const t = (this.theme.suggestedQuestions ?? []).map((e) => e.trim()).filter(Boolean).slice(0, 4), A = this.messages.some((e) => e.role === "user");
    return t.length === 0 || A && !this.previewMode ? null : w`<div class="suggestions" role="group" aria-label="추천 질문">
      ${t.map(
      (e) => w`<button
            type="button"
            class="suggestion"
            ?disabled=${this.streaming}
            @click=${() => void this.askSuggested(e)}
          >
            ${e}
          </button>`
    )}
    </div>`;
  }
  /**
   * modern 답 뒤 칩 (서버의 답 확인이 고른 것). 마지막 답에만 그린다.
   * FAQ 질문은 처음 추천 질문처럼 누르면 그대로 보내고, 담당자 칩은 방금 질문을 제목에 채워 문의 시트를 연다.
   */
  renderHint(t, A) {
    return w`<div class="hint">
      ${A.suggestions.length > 0 ? w`<div class="hint-sugs" role="group" aria-label="혹시 이걸 찾으셨나요?">
            <span class="hint-label">혹시 이걸 찾으셨나요?</span>
            ${A.suggestions.map(
      (e) => w`<button
                  type="button"
                  class="suggestion hint-sug"
                  ?disabled=${this.streaming}
                  @click=${() => void this.askSuggested(e)}
                >
                  ${e}
                </button>`
    )}
          </div>` : null}
      ${A.handoff ? w`<button
            type="button"
            class="hint-handoff"
            @click=${() => this.openInquiryFor(this.questionBefore(t))}
          >
            ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16v12H8l-4 4Z"/></svg>`}
            담당자에게 문의 남기기
          </button>` : null}
    </div>`;
  }
  /** 이 답 바로 앞의 방문자 질문. */
  questionBefore(t) {
    const A = this.messages.indexOf(t);
    for (let e = A - 1; e >= 0; e--) {
      const r = this.messages[e];
      if (r.role === "user") return r.content;
    }
    return "";
  }
  /**
   * modern 입력: 왼쪽에 + 버튼(화면 캡처 메뉴), 가운데 둥근 입력칸, 오른쪽에 동그란 보내기.
   * 문의 남기기는 더보기 메뉴 맨 위에 있다 (renderMenu). 글자 수는 80%부터 보이고 95%부터 빨갛다.
   */
  renderModernComposer() {
    const t = this.maxUserMessageChars, A = this.input.length;
    return w`<form @submit=${this.send}>
      ${this.pendingAttachments.length > 0 ? w`<div class="m-chips">${this.renderPendingChips()}</div>` : null}
      <div class="m-row">
        ${this.renderCaptureButton()}
        <div class="m-input">
          <textarea
            rows="1"
            .value=${this.input}
            @input=${this.onComposerInput}
            @keydown=${this.onComposerKeydown}
            ?disabled=${this.streaming}
            maxlength=${t}
            placeholder=${this.streaming ? "답을 쓰는 중이에요" : this.intake && !this.intake.complete ? "알려 줄 정보를 적어 주세요" : "궁금한 걸 물어보세요"}
            aria-label="질문"
          ></textarea>
        </div>
        <button
          type="submit"
          class="m-send"
          ?disabled=${this.streaming || !this.input.trim()}
          title="보내기"
          aria-label="보내기"
        >
          ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>`}
        </button>
      </div>
      ${A >= t * 0.8 ? w`<span
            class=${`m-counter ${A >= t * 0.95 ? "near-limit" : ""}`}
            aria-live="polite"
            >${A.toLocaleString()} / ${t.toLocaleString()}</span
          >` : null}
    </form>`;
  }
  /**
   * modern 입력칸 왼쪽 + 버튼. 누르면 켜 둔 캡처(지금 화면 / 영역 골라)를 고르는 메뉴가 위로 열린다.
   * 카메라 모양은 사진 올리기로 읽혀서 + 로 두고, 캡처를 하나만 켜 두어도 메뉴를 열어 무엇을 하는지 보여 준다.
   * 둘 다 끄면 버튼이 없다.
   */
  renderCaptureButton() {
    const t = this.theme.captureEnabled !== !1, A = this.theme.regionCaptureEnabled !== !1;
    if (!t && !A) return null;
    const e = this.streaming || this.capturing || this.pendingAttachments.length >= 4;
    return w`<span class="m-cap">
      <button
        type="button"
        class=${this.capMenuOpen ? "m-cap-btn on" : "m-cap-btn"}
        @click=${this.toggleCapMenu}
        ?disabled=${e}
        title="화면 캡처 붙이기"
        aria-label="화면 캡처 붙이기"
        aria-haspopup="menu"
        aria-expanded=${this.capMenuOpen ? "true" : "false"}
      >
        ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>`}
      </button>
      ${this.capMenuOpen ? w`<div class="cap-menu" role="menu" aria-label="화면 캡처">
            ${t ? w`<button
                  type="button"
                  role="menuitem"
                  @click=${this.pickViewportCapture}
                >
                  ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4Z"/><circle cx="12" cy="13" r="3.5"/></svg>`}
                  <span class="cap-menu-text">
                    <span class="cap-menu-title">지금 화면 캡처</span>
                    <span class="cap-menu-sub">보이는 화면 전체를 붙여요</span>
                  </span>
                </button>` : null}
            ${A ? w`<button
                  type="button"
                  role="menuitem"
                  ?disabled=${this.regionCapturing}
                  @click=${this.pickRegionCapture}
                >
                  ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4"/></svg>`}
                  <span class="cap-menu-text">
                    <span class="cap-menu-title">영역 골라 캡처</span>
                    <span class="cap-menu-sub">드래그한 부분만 붙여요</span>
                  </span>
                </button>` : null}
          </div>` : null}
    </span>`;
  }
  renderReportModal() {
    const t = this.isModern, A = t ? Nw : _w;
    return w`
      <div class="report-overlay" @click=${this.closeReport}>
        <div
          class="report-modal"
          role=${t ? "dialog" : $}
          aria-modal=${t ? "true" : $}
          @click=${(e) => e.stopPropagation()}
        >
          <header>
            <p class="title">${t ? "이 답을 신고할까요?" : "메시지 신고"}</p>
            <p class="subtitle">
              ${t ? "이유를 알려 주시면 확인하고 고칠게요." : "사유를 알려주시면 검토 후 개선에 반영합니다."}
            </p>
          </header>
          <ul class="report-reasons">
            ${Object.keys(A).map(
      (e) => w`
                <li>
                  <label>
                    <input
                      type="radio"
                      name="reportReason"
                      value=${e}
                      .checked=${this.reportReason === e}
                      @change=${() => this.reportReason = e}
                    />
                    <span>${A[e]}</span>
                  </label>
                </li>
              `
    )}
          </ul>
          <textarea
            class="report-detail"
            placeholder=${t ? "더 알려 줄 내용 (선택)" : "추가 설명 (선택)"}
            rows="3"
            maxlength="2000"
            .value=${this.reportDetail}
            @input=${(e) => this.reportDetail = e.target.value}
          ></textarea>
          ${this.reportError ? w`<p class="report-error">${this.reportError}</p>` : null}
          <div class="report-actions">
            <button
              type="button"
              class="ghost"
              @click=${this.closeReport}
              ?disabled=${this.reportSubmitting}
            >
              취소
            </button>
            <button
              type="button"
              class="primary"
              @click=${this.submitReport}
              ?disabled=${this.reportSubmitting}
            >
              ${this.reportSubmitting ? "전송 중…" : "신고하기"}
            </button>
          </div>
        </div>
      </div>
    `;
  }
  renderRegionCaptureOverlay() {
    const t = this.regionRect;
    return w`
      <div
        class="region-overlay"
        @pointerdown=${this.regionPointerDown}
        @pointermove=${this.regionPointerMove}
        @pointerup=${this.regionPointerUp}
      >
        ${t && t.w > 0 && t.h > 0 ? w`
              <div
                class="region-dim"
                style=${`top:0;left:0;right:0;height:${t.y}px`}
              ></div>
              <div
                class="region-dim"
                style=${`top:${t.y}px;left:0;width:${t.x}px;height:${t.h}px`}
              ></div>
              <div
                class="region-dim"
                style=${`top:${t.y}px;left:${t.x + t.w}px;right:0;height:${t.h}px`}
              ></div>
              <div
                class="region-dim"
                style=${`top:${t.y + t.h}px;left:0;right:0;bottom:0`}
              ></div>
              <div
                class="region-rect"
                style=${`left:${t.x}px;top:${t.y}px;width:${t.w}px;height:${t.h}px`}
              ></div>
              <div
                class="region-size"
                style=${`left:${t.x}px;top:${t.y + t.h + 6}px`}
              >
                ${t.w} × ${t.h}
              </div>
            ` : w`<div class="region-dim region-dim-full"></div>`}
        <div class="region-hint">
          ${t && t.w > 0 ? "드래그로 영역을 맞추고 손을 떼면 캡처해요" : "캡처할 영역을 드래그하세요. ESC로 취소"}
        </div>
      </div>
    `;
  }
  /**
   * 대화 초기화 확인 모달: 인-위젯 스타일, 테마 컬러(--launcher-bg) 사용해 호스트 페이지에
   * 자연스럽게 녹아듦. 기존 report-modal 스타일 재사용 + reset 전용 actions만.
   */
  renderResetConfirmModal() {
    const t = this.isModern;
    return w`
      <div class="report-overlay" @click=${this.cancelReset}>
        <div
          class="report-modal reset-modal"
          role=${t ? "dialog" : $}
          aria-modal=${t ? "true" : $}
          @click=${(A) => A.stopPropagation()}
        >
          <header>
            <p class="title">
              ${t ? "새 대화를 시작할까요?" : "대화를 초기화할까요?"}
            </p>
            <p class="subtitle">
              ${t ? this.intake ? "지금까지 나눈 대화와 알려 준 정보가 이 창에서 지워져요." : "지금까지 나눈 대화가 이 창에서 지워져요." : "지금까지의 대화 기록이 모두 사라지고 새 세션이 시작돼요."}
            </p>
          </header>
          <div class="report-actions">
            <button type="button" class="ghost" @click=${this.cancelReset}>
              그대로 두기
            </button>
            <button
              type="button"
              class=${t ? "primary danger" : "primary"}
              @click=${this.confirmReset}
            >
              ${t ? "새로 시작" : "초기화"}
            </button>
          </div>
        </div>
      </div>
    `;
  }
  renderInquiryModal() {
    const t = this.isModern;
    return this.inquirySuccess ? w`
        <div class="report-overlay" @click=${this.closeInquiry}>
          <div
            class="report-modal"
            role=${t ? "dialog" : $}
            aria-modal=${t ? "true" : $}
            @click=${(A) => A.stopPropagation()}
          >
            <header>
              <p class="title">
                ${t ? "문의를 받았어요" : "문의가 접수되었어요"}
              </p>
              <p class="subtitle">
                ${t ? "담당자가 확인하고 남겨 주신 연락처로 답해 드려요." : "담당자가 확인 후 회신드릴게요."}
              </p>
            </header>
            <div class="report-actions">
              <button type="button" class="primary" @click=${this.closeInquiry}>
                닫기
              </button>
            </div>
          </div>
        </div>
      ` : w`
      <div class="report-overlay" @click=${this.closeInquiry}>
        <div
          class="report-modal"
          role=${t ? "dialog" : $}
          aria-modal=${t ? "true" : $}
          @click=${(A) => A.stopPropagation()}
        >
          <header>
            <p class="title">${t ? "담당자에게 문의 남기기" : "문의하기"}</p>
            <p class="subtitle">
              ${t ? "챗봇이 답하기 어려운 내용도 괜찮아요. 확인하고 답해 드려요." : "챗봇이 답하기 어려운 내용도 남겨주세요."}
            </p>
          </header>
          ${t ? w`<div class="cat-chips" role="radiogroup" aria-label="문의 유형">
                ${Object.keys(yr).map(
      (A) => w`<button
                      type="button"
                      role="radio"
                      aria-checked=${this.inquiryCategory === A ? "true" : "false"}
                      @click=${() => this.inquiryCategory = A}
                    >
                      ${yr[A]}
                    </button>`
    )}
              </div>` : w`<div class="inquiry-row">
                <label>유형</label>
                <select
                  .value=${this.inquiryCategory}
                  @change=${(A) => this.inquiryCategory = A.target.value}
                >
                  ${Object.keys(yr).map(
      (A) => w`<option value=${A}>
                        ${yr[A]}
                      </option>`
    )}
                </select>
              </div>`}
          <input
            type="text"
            class="inquiry-subject"
            placeholder="제목"
            maxlength="255"
            .value=${this.inquirySubject}
            @input=${(A) => this.inquirySubject = A.target.value}
          />
          <textarea
            class="report-detail"
            placeholder=${t ? "내용을 자세히 적어 주세요" : "내용을 자세히 적어주세요"}
            rows="5"
            maxlength="8000"
            .value=${this.inquiryBody}
            @input=${(A) => this.inquiryBody = A.target.value}
          ></textarea>
          <input
            type="text"
            class="inquiry-subject"
            placeholder=${t ? "답을 받을 연락처 (선택, 이메일이나 전화)" : "회신받을 연락처 (선택, 이메일/전화 등)"}
            maxlength="255"
            .value=${this.inquiryContact}
            @input=${(A) => this.inquiryContact = A.target.value}
          />
          ${this.inquiryError ? w`<p class="report-error">${this.inquiryError}</p>` : null}
          <div class="report-actions">
            <button
              type="button"
              class="ghost"
              @click=${this.closeInquiry}
              ?disabled=${this.inquirySubmitting}
            >
              취소
            </button>
            <button
              type="button"
              class="primary"
              @click=${this.submitInquiry}
              ?disabled=${this.inquirySubmitting || !this.inquirySubject.trim() || !this.inquiryBody.trim()}
            >
              ${this.inquirySubmitting ? "전송 중…" : "문의 보내기"}
            </button>
          </div>
        </div>
      </div>
    `;
  }
  connectedCallback() {
    super.connectedCallback(), this.previewMode ? this.setupPreviewMode() : (this.applyThemeOverride(), this.loadCachedTheme(), this.fetchInit()), this.inline && (this.open = !0, this.loadIntake()), document.addEventListener("selectionchange", this.handleSelectionChange), document.addEventListener("pointerdown", this.handleDocPointerDown, !0), this.updatePageScrollbarOffset(), window.addEventListener("resize", this.updatePageScrollbarOffset);
  }
  /**
   * 미리보기 모드 셋업: panel 자동 open + 더미 메시지. 네트워크 호출 0.
   * dashboard의 라이브 프리뷰에서 외형/테마 검증용.
   */
  setupPreviewMode() {
    this.open = !0, this.syncPreviewMessages();
  }
  /**
   * 프리뷰 더미 메시지: welcomeMessage가 설정되면 상단에 웰컴 말풍선이 별도 렌더되므로
   * 더미 인사말은 빼서 인사가 두 번 보이는 것 방지.
   */
  syncPreviewMessages() {
    const t = [];
    this.theme.welcomeMessage?.trim() || t.push({
      id: "preview-a-1",
      role: "assistant",
      content: "안녕하세요! 무엇을 도와드릴까요?"
    }), t.push(
      {
        id: "preview-u-1",
        role: "user",
        content: "샘플 사용자 메시지입니다."
      },
      {
        id: "preview-a-2",
        role: "assistant",
        content: "테마가 적용된 모습이 이렇게 보입니다."
      }
    ), this.messages = t;
  }
  /**
   * 미리보기 모드에서 외부(dashboard)가 theme prop을 즉시 갱신할 때 사용.
   * 일반 모드에선 fetchInit이 theme를 채움, 이 메서드는 호출 안 함.
   */
  setPreviewTheme(t) {
    this.theme = t, this.applyTheme(), this.previewMode && this.syncPreviewMessages();
  }
  disconnectedCallback() {
    document.removeEventListener("selectionchange", this.handleSelectionChange), document.removeEventListener(
      "pointerdown",
      this.handleDocPointerDown,
      !0
    ), window.removeEventListener("resize", this.updatePageScrollbarOffset), this.selectionTimer != null && (window.clearTimeout(this.selectionTimer), this.selectionTimer = null), super.disconnectedCallback();
  }
  /**
   * 모바일(≤640px) classic 패널이 런처를 덮지 않게, 런처 스택(버튼 + always 라벨) 높이를 재서
   * 패널 아래 여백(--launcher-clear)으로 쓴다. 16 = 모바일 host 아래 여백, 12 = 패널과의 틈.
   * 종전엔 80px 고정이라 큰 런처나 라벨이 패널 밑에 깔렸다. 런처가 없으면(inline) 그대로 둔다.
   */
  updateLauncherClearance() {
    const A = this.shadowRoot?.querySelector(".launcher-wrap")?.getBoundingClientRect().height ?? 0;
    A > 0 && this.style.setProperty("--launcher-clear", `${16 + A + 12}px`);
  }
  // ──────────── sessionStorage persistence ────────────
  /*
   * 같은 탭 안에서 새로고침/네비게이션 후에도 대화 복원.
   * 탭을 닫으면 자동 정리: localStorage와 달리 공용 PC에서 흔적 안 남김.
   *
   * 키: `timely-chatbot:session:<projectId>`, projectId 없으면(/init 실패) persist 안 함.
   * 페이로드: 메시지 배열 + sessionId. transient 필드(progress)는 제외.
   * 실패(QuotaExceeded, Safari private mode 등)는 모두 silent, 기능 부재로 떨어짐.
   */
  storageKey() {
    return this.projectId ? `timely-chatbot:session:${this.projectId}` : null;
  }
  loadPersistedSession() {
    const t = this.storageKey();
    if (!(!t || this.previewMode))
      try {
        const A = sessionStorage.getItem(t);
        if (!A) return;
        const e = JSON.parse(A);
        if (e.v !== 1 || !Array.isArray(e.messages)) return;
        this.messages = e.messages.map((r) => {
          const s = { role: r.role, content: r.content };
          return r.id && (s.id = r.id), r.reaction !== void 0 && (s.reaction = r.reaction), r.reported && (s.reported = r.reported), r.notice && (s.notice = { ...r.notice, retry: !1 }), r.files && r.files.length > 0 && (s.files = r.files), Array.isArray(r.sources) && r.sources.length > 0 && (s.sources = r.sources), r.note && (s.note = !0), s;
        }), e.sessionId && (this.sessionId = e.sessionId);
      } catch {
      }
  }
  persistSession() {
    const t = this.storageKey();
    if (!t || this.previewMode) return;
    let A = this.messages.filter(
      (e) => !(e.role === "assistant" && !e.content && !e.id && !e.notice)
    ).map((e) => {
      const r = { role: e.role, content: e.content };
      return e.id && (r.id = e.id), e.reaction !== void 0 && (r.reaction = e.reaction), e.reported && (r.reported = e.reported), e.files && e.files.length > 0 && (r.files = e.files), e.sources && e.sources.length > 0 && (r.sources = e.sources), e.note && (r.note = !0), e.notice && (r.notice = { ...e.notice, retry: !1 }), r;
    });
    for (let e = 0; e < 4; e++)
      try {
        sessionStorage.setItem(
          t,
          JSON.stringify({ v: 1, messages: A, sessionId: this.sessionId })
        );
        return;
      } catch (r) {
        if (!Jw(r) || A.length <= 2)
          return;
        const s = Math.max(2, Math.floor(A.length * 0.2));
        A = A.slice(s);
      }
  }
  clearPersistedSession() {
    const t = this.storageKey();
    if (t)
      try {
        sessionStorage.removeItem(t);
      } catch {
      }
  }
  syncSelectionAttachment() {
    if (this.regionCapturing || this.streaming || this.theme.selectionMirrorEnabled === !1) return;
    const t = window.getSelection?.(), A = t?.toString().trim() ?? "", e = (() => {
      if (!t || t.rangeCount === 0) return !1;
      const i = t.anchorNode;
      return i ? i === this || this.contains(i) && i !== document.body : !1;
    })(), r = this.pendingAttachments.findIndex(
      (i) => i.kind === "text" && i.source === "selection"
    );
    if (!A || e) {
      const i = document.activeElement === this, o = Date.now() - this.widgetInteractionAt;
      if (i || o < 500) return;
      r >= 0 && (this.pendingAttachments = this.pendingAttachments.filter(
        (a, c) => c !== r
      ));
      return;
    }
    if (A.length > 2e4) return;
    const s = A.length > 60 ? `${A.slice(0, 60)}…` : A, n = {
      kind: "text",
      source: "selection",
      text: A,
      label: `선택: "${s}"`,
      pageUrl: window.location.href,
      pageTitle: document.title
    };
    if (r >= 0) {
      const i = [...this.pendingAttachments];
      i[r] = n, this.pendingAttachments = i;
      return;
    }
    this.pendingAttachments.length >= 4 || (this.pendingAttachments = [...this.pendingAttachments, n]);
  }
  async fetchInit() {
    if (!(!this.apiBaseUrl || !this.apiKey))
      try {
        const t = await fetch(`${this.apiBaseUrl}/widget/init`, {
          headers: { "X-API-Key": this.apiKey }
        });
        if (!t.ok) return;
        const A = await t.json();
        A.projectId && (this.projectId = A.projectId), typeof A.maxUserMessageChars == "number" && (this.maxUserMessageChars = A.maxUserMessageChars), this.theme = { ...A.theme ?? {}, ...this.themeOverride ?? {} }, this.applyTheme(), this.saveCachedTheme(A.theme ?? {}), this.loadPersistedSession();
      } catch {
      }
  }
  // ──────────── theme 캐시 (localStorage) ────────────
  /*
   * /widget/init 응답 전에 캐시된 테마를 즉시 적용해 런처 크기/색 점프(FOUC)를 없앰.
   * 키: `timely-chatbot:theme:<apiKey>`, apiKey 없으면 캐시 안 함.
   * projectId는 /init 전엔 모르므로 apiKey를 키로 사용 (호스트 origin별로 localStorage 분리됨).
   * 최신성: 매 로드 /init을 여전히 호출해 fresh 값으로 갱신+재캐싱 → 테마 변경 후 1회만 stale.
   */
  themeCacheKey() {
    return this.apiKey ? `timely-chatbot:theme:${this.apiKey}` : null;
  }
  /** host script 의 themeOverride 를 현재 theme 위에 즉시 병합 (서버 응답 불필요). */
  applyThemeOverride() {
    this.themeOverride && (this.theme = { ...this.theme, ...this.themeOverride }, this.applyTheme());
  }
  loadCachedTheme() {
    const t = this.themeCacheKey();
    if (!(!t || this.previewMode))
      try {
        const A = localStorage.getItem(t);
        if (!A) return;
        const e = JSON.parse(A);
        if (e.v !== 1 || !e.theme) return;
        this.theme = { ...e.theme, ...this.themeOverride ?? {} }, this.applyTheme();
      } catch {
      }
  }
  saveCachedTheme(t) {
    const A = this.themeCacheKey();
    if (!(!A || this.previewMode))
      try {
        localStorage.setItem(A, JSON.stringify({ v: 1, theme: t }));
      } catch {
      }
  }
  /**
   * theme를 host element에 적용 (CSS variables).
   *
   * launcherBg가 밝은 색일 경우 SVG 아이콘(닫기/chat fallback)이 white 위에 white로
   * 사라지는 문제 방지: launcherBg의 상대 휘도를 계산해 --launcher-fg 자동 설정.
   * 사용자 업로드 이미지 아이콘은 영향 없음(img는 색상 무관).
   */
  applyTheme() {
    const t = this.theme, A = (h, u) => {
      u ? this.style.setProperty(h, u) : this.style.removeProperty(h);
    };
    A("--launcher-bg", t.launcherBg), A("--panel-bg", t.panelBg), A("--header-bg", t.headerBg), A("--user-bg", t.userBg), A("--user-text", t.userText), A("--assistant-bg", t.assistantBg), A("--assistant-text", t.assistantText), A("--send-bg", t.sendBg), A("--send-text", t.sendText), A(
      "--launcher-fg",
      t.launcherBg ? Qt(t.launcherBg) : void 0
    );
    const e = (h) => typeof h == "number" ? `${h}px` : void 0;
    A("--header-title-size", e(t.headerTitleSize)), A("--message-size", e(t.messageSize)), A("--input-size", e(t.inputSize)), A("--launcher-size", e(t.launcherSize)), A("--launcher-size-mobile", e(t.launcherSizeMobile)), A("--launcher-icon-size", e(t.launcherIconSize)), A("--launcher-svg-size", e(t.launcherSvgSize)), A("--launcher-label-color", t.launcherLabelColor), A("--launcher-label-size", e(t.launcherLabelSize)), requestAnimationFrame(() => this.updateLauncherClearance());
    const r = t.design === "modern";
    if (r ? this.setAttribute("data-design", "modern") : this.removeAttribute("data-design"), !r) {
      this.menuOpen = !1, this.capMenuOpen = !1;
      for (const h of [
        "--header-fg",
        "--header-avatar-bg",
        "--header-avatar-fg",
        "--accent",
        "--assistant-border"
      ])
        this.style.removeProperty(h);
      return;
    }
    const s = t.launcherBg || "#1f2937", n = t.headerBg || s, i = Qt(n), o = i === "#ffffff";
    A("--header-fg", i), A("--header-avatar-bg", o ? "rgba(255, 255, 255, 0.16)" : s), A("--header-avatar-fg", o ? "#ffffff" : Qt(s)), t.userText || A("--user-text", Qt(t.userBg || s)), t.sendText || A("--send-text", Qt(t.sendBg || s));
    const a = t.assistantBg || "#ffffff", c = Yw(s, a);
    A(
      "--accent",
      c !== null && c >= 3 ? s : t.assistantText || "#171717"
    );
    const l = jr(a);
    A(
      "--assistant-border",
      l !== null && l < 0.4 ? "rgba(255, 255, 255, 0.14)" : "rgba(0, 0, 0, 0.08)"
    );
  }
  renderToggleIcon() {
    return this.theme.iconUrl ? w`<img class="custom-icon" src=${this.theme.iconUrl} alt="" />` : k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-12.5 6.6L4 20l1.4-4.5A8 8 0 1 1 21 12Z"/></svg>`;
  }
  /**
   * open 시 첫 호출: default panel rect 계산.
   *
   * 위치는 host element의 data-position 속성 기준 (host script가 설정).
   * 미설정 시 우측 하단 default.
   */
  ensureRect() {
    if (this.rect) return;
    const t = Pw, A = Gw, e = Math.max(
      Tr,
      window.innerHeight - this.launcherGap() - A
    ), s = this.dataset.position === "bottom-left" ? Tr : Math.max(Tr, window.innerWidth - Tr - t);
    this.rect = { left: s, top: e, width: t, height: A };
  }
  /**
   * panel 하단이 런처 위로 얼마나 떠야 하는지, 런처 스택(버튼 + always 라벨)의
   * 실측 높이 + 여백. PANEL_GAP(56+16 하드코딩) 은 기본 크기 전제라 큰 launcherSize
   * 나 always 라벨에서 panel 이 런처를 덮었다. 실측 실패 시 기존 상수로 폴백.
   */
  launcherGap() {
    const A = this.shadowRoot?.querySelector(".launcher-wrap")?.getBoundingClientRect().height ?? 0;
    return A > 0 ? A + 16 : Vw;
  }
  panelStyle() {
    if (this.inline || this.fullscreen) return "";
    const t = this.rect;
    return t ? `left:${t.left}px;top:${t.top}px;width:${t.width}px;height:${t.height}px;` : "";
  }
  startResize(t, A) {
    if (this.fullscreen || !this.rect) return;
    t.preventDefault();
    const e = { ...this.rect }, r = t.clientX, s = t.clientY, n = (o) => {
      const a = o.clientX - r, c = o.clientY - s;
      let { left: l, top: h, width: u, height: g } = e;
      A.includes("e") && (u = e.width + a), A.includes("w") && (u = e.width - a, l = e.left + a), A.includes("s") && (g = e.height + c), A.includes("n") && (g = e.height - c, h = e.top + c), u < Ir && (A.includes("w") && (l = e.left + (e.width - Ir)), u = Ir), g < Hr && (A.includes("n") && (h = e.top + (e.height - Hr)), g = Hr);
      const d = window.innerWidth, p = window.innerHeight;
      l < 0 && (u += l, l = 0), h < 0 && (g += h, h = 0), l + u > d && (u = d - l), h + g > p && (g = p - h), u = Math.max(Ir, u), g = Math.max(Hr, g), this.rect = { left: l, top: h, width: u, height: g };
    }, i = () => {
      window.removeEventListener("pointermove", n), window.removeEventListener("pointerup", i);
    };
    window.addEventListener("pointermove", n), window.addEventListener("pointerup", i);
  }
  toggleFullscreen() {
    this.fullscreen = !this.fullscreen;
  }
  close() {
    this.open = !1, this.fullscreen = !1, this.menuOpen = !1, this.capMenuOpen = !1;
  }
  async toggle() {
    this.open = !this.open, this.open || (this.menuOpen = !1, this.capMenuOpen = !1), this.open && (this.updateLauncherClearance(), this.ensureRect(), await this.updateComplete, this.composerTextarea?.focus(), this.atBottom = !0, this.scrollToBottom(), this.loadIntake());
  }
  updated() {
    this.open && this.atBottom && this.scrollToBottom();
  }
  scrollToBottom(t = !1) {
    const A = this.renderRoot.querySelector(".messages");
    A && (t ? A.scrollTo({ top: A.scrollHeight, behavior: "smooth" }) : A.scrollTop = A.scrollHeight);
  }
  openReport(t) {
    !t.id || t.reported || (this.reportingMessageId = t.id, this.reportReason = "incorrect", this.reportDetail = "", this.reportError = "");
  }
  async resolveFileUrl(t) {
    const A = this.fileUrls.get(t);
    if (A) return A;
    try {
      const e = await this.ensureJwt(), r = await fetch(
        `${this.apiBaseUrl}/widget/files/${encodeURIComponent(t)}`,
        { headers: { Authorization: `Bearer ${e}` } }
      );
      if (!r.ok) return null;
      const s = await r.json();
      return s.url ? (this.fileUrls.set(t, s.url), s.url) : null;
    } catch {
      return null;
    }
  }
  /** 이미지 렌더용: URL 을 받아오고 도착하면 다시 그린다. */
  ensureFileUrl(t) {
    const A = this.fileUrls.get(t);
    return A || (this.fileUrlPending.has(t) || (this.fileUrlPending.add(t), this.resolveFileUrl(t).then(() => {
      this.fileUrlPending.delete(t), this.requestUpdate();
    })), null);
  }
  /** 답변에 딸린 파일. 이미지는 바로 보여주고 그 외는 내려받기 카드로. */
  renderAttachments(t) {
    return w`<div class="attachments">
      ${t.map((A) => {
      if (A.isImage) {
        const e = this.ensureFileUrl(A.id);
        return w`<figure class="att-image">
            ${e ? w`<img
                  src=${e}
                  alt=${A.label || A.name}
                  loading="lazy"
                  @click=${() => void this.openAttachment(A)}
                />` : w`<div class="att-image-loading"></div>`}
            ${A.label && A.label !== A.name ? w`<figcaption>${A.label}</figcaption>` : null}
          </figure>`;
      }
      return w`<button
          type="button"
          class="att-file"
          @click=${() => void this.openAttachment(A)}
          title=${`${A.name} 내려받기`}
        >
          ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`}
          <span class="att-file-text">
            <span class="att-file-name">${A.label || A.name}</span>
            <span class="att-file-meta">${Ow(A.size)} 내려받기</span>
          </span>
          ${k`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 11l5 5 5-5"/><path d="M4 20h16"/></svg>`}
        </button>`;
    })}
    </div>`;
  }
  async toggleReaction(t, A) {
    if (!t.id) return;
    const e = t.reaction === A ? 0 : A, r = t.reaction;
    t.reaction = e === 0 ? void 0 : e, this.requestUpdate();
    try {
      const s = await this.ensureJwt(), n = await fetch(
        `${this.apiBaseUrl}/widget/messages/${encodeURIComponent(t.id)}/reaction`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${s}`
          },
          body: JSON.stringify({ reaction: e })
        }
      );
      if (!n.ok) throw new Error(`http ${n.status}`);
      this.persistSession();
    } catch {
      t.reaction = r, this.requestUpdate(), this.persistSession();
    }
  }
  async ensureJwt() {
    if (this.jwt) return this.jwt;
    if (this.getAccessToken) {
      const e = await this.getAccessToken();
      if (!e) throw new Error("getAccessToken returned empty token");
      return this.jwt = e, e;
    }
    if (!this.apiKey)
      throw new Error(
        "TimelyChatbot.init: apiKey + getAccessToken? 중 최소 apiKey 필요"
      );
    const t = await fetch(`${this.apiBaseUrl}/widget/guest-jwt`, {
      method: "POST",
      headers: {
        "X-API-Key": this.apiKey,
        "X-Browser-Id": this.browserId
      }
    });
    if (!t.ok) {
      let e = `guest jwt 발급 실패 (HTTP ${t.status})`, r;
      try {
        const s = await t.json();
        s?.message && (e = s.message), typeof s?.code == "string" && (r = s.code);
      } catch {
      }
      throw new qr(e, t.status, r, "token");
    }
    const A = await t.json();
    return this.jwt = A.jwt, this.jwt;
  }
  /** 401 시 무효화. 게스트 모드는 다음 호출에서 자동 재발급. 인증 모드는 호스트가 setAccessToken 호출 필요. */
  invalidateJwt() {
    this.jwt = void 0;
  }
  async send(t) {
    if (t.preventDefault(), this.previewMode) return;
    const A = this.input.trim();
    if (!A || this.streaming) return;
    const e = this.pendingAttachments, r = e.length > 0 ? `${A}

${e.map((i) => `[첨부] ${i.label}`).join(`
`)}` : A;
    if (this.messages = [
      ...this.messages,
      { role: "user", content: r }
    ], this.input = "", requestAnimationFrame(() => {
      this.composerTextarea && (this.composerTextarea.style.height = "");
    }), this.pendingAttachments = [], e.some(
      (i) => i.kind === "text" && i.source === "selection"
    ))
      try {
        window.getSelection()?.removeAllRanges();
      } catch {
      }
    this.streaming = !0, this.atBottom = !0;
    let s = {
      role: "assistant",
      content: "",
      progress: { stage: "thinking", text: xe.thinking, history: [] }
    };
    this.messages = [...this.messages, s], this.persistSession();
    const n = e.map(
      (i) => i.kind === "image" ? {
        kind: "image",
        data: i.data,
        mediaType: i.mediaType,
        label: i.label
      } : {
        kind: "text",
        text: i.text,
        label: i.label,
        ...i.source ? { source: i.source } : {},
        ...i.pageUrl ? { pageUrl: i.pageUrl } : {},
        ...i.pageTitle ? { pageTitle: i.pageTitle } : {}
      }
    );
    await this.streamReply(A, n, s);
  }
  /**
   * 질문 하나를 보내고 답 스트림을 assistant 말풍선에 채운다. send 와 modern 의 "다시 시도"가 함께 쓴다.
   * 호출 전에 streaming = true 와 assistant placeholder 가 준비돼 있어야 한다.
   */
  async streamReply(t, A, e) {
    this.inflight = { text: t, attachments: A };
    const r = {
      url: window.location.href,
      title: document.title,
      mainText: Ww()
    };
    try {
      let s;
      for (let a = 0; a < 2; a++) {
        const c = await this.ensureJwt();
        if (s = await fetch(`${this.apiBaseUrl}/widget/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Browser-Id": this.browserId,
            Authorization: `Bearer ${c}`
          },
          body: JSON.stringify({
            sessionId: this.sessionId,
            message: t,
            ...A.length > 0 ? { attachments: A } : {},
            pageContext: r
          })
        }), s.status !== 401) break;
        this.invalidateJwt();
      }
      if (!s) throw new Error("요청 실패");
      if (!s.ok) {
        let a = `요청 실패 (HTTP ${s.status})`, c;
        try {
          const l = await s.json();
          l && typeof l.message == "string" && l.message && (a = l.message), l && typeof l.code == "string" && (c = l.code);
        } catch {
        }
        throw new qr(a, s.status, c);
      }
      if (!s.body) throw new Error("스트림을 받을 수 없습니다");
      const n = s.body.getReader(), i = new TextDecoder();
      let o = "";
      for (; ; ) {
        const { value: a, done: c } = await n.read();
        if (c) break;
        o += i.decode(a, { stream: !0 });
        const l = o.split(`

`);
        o = l.pop() ?? "";
        for (const h of l)
          this.handleSse(h, e);
      }
    } catch (s) {
      this.isModern ? (e.notice = Kw(s), this.lastFailed = e.notice.retry ? { assistant: e, text: t, attachments: A } : null) : e.content = `[오류: ${s instanceof Error ? s.message : "unknown"}]`, e.progress && (e.progress = {
        ...e.progress,
        stage: "error",
        text: ""
      }), this.requestUpdate(), this.persistSession();
    } finally {
      this.inflight = null, this.streaming = !1, await this.updateComplete, this.composerTextarea?.focus();
    }
  }
  handleSse(t, A) {
    const e = t.split(`
`);
    let r = "message", s = "";
    for (const n of e)
      n.startsWith("event:") ? r = n.slice(6).trim() : n.startsWith("data:") && (s += n.slice(5).trim());
    if (s)
      try {
        const n = JSON.parse(s);
        if (r === "session")
          this.sessionId = n.sessionId, this.persistSession();
        else if (r === "delta")
          A.progress && (A.progress = {
            ...A.progress,
            stage: "streaming",
            text: ""
          }), A.content += n.text, this.requestUpdate();
        else if (r === "progress") {
          const i = String(n.stage ?? ""), a = (typeof n.detail == "string" ? n.detail : "") || xe[i] || i, l = (A.progress ?? { stage: "", text: "", history: [] }).history.slice();
          if (i === "tool_done") {
            const h = typeof n.query == "string" ? n.query : "", u = typeof n.citationsCount == "number" ? n.citationsCount : null;
            l.push(
              u != null ? `"${h}" 검색 결과 ${u}건` : h ? `"${h}" 검색 완료` : "검색 완료"
            );
          }
          A.progress = { stage: i, text: a, history: l }, this.requestUpdate();
        } else if (r === "intake") {
          if (this.intake) {
            const a = n.values && typeof n.values == "object" ? n.values : this.intake.values;
            this.intake = { ...this.intake, values: a, complete: n.complete === !0 };
          }
          const o = (Array.isArray(n.changed) ? n.changed : []).filter((a) => typeof a.label == "string" && typeof a.value == "string").map((a) => `${ha(a.label, "을를")} ${ha(a.value, "으로")}`);
          if (o.length > 0) {
            const a = { role: "assistant", content: `${o.join(", ")} 바꿨어요`, note: !0 }, c = this.messages.indexOf(A);
            this.messages = c >= 0 ? [...this.messages.slice(0, c), a, ...this.messages.slice(c)] : [...this.messages, a];
          }
          this.requestUpdate();
        } else if (r === "files")
          Array.isArray(n.files) && (A.files = n.files, this.requestUpdate());
        else if (r === "tool") {
          if (n.name === "search_documents" && !A.progress) {
            const i = n.query ?? "";
            A.progress = {
              stage: "tool_start",
              text: `자료 검색: "${i}"`,
              history: []
            }, this.requestUpdate();
          }
        } else if (r === "done") {
          if (typeof n.messageId == "string" && (A.id = n.messageId), Array.isArray(n.files) && !A.files && (A.files = n.files), Array.isArray(n.citations)) {
            const i = Rw(n.citations);
            i.length > 0 && (A.sources = i);
          }
          if (n.lookups && typeof n.lookups == "object") {
            const i = Number(n.lookups.documents) || 0, o = Number(n.lookups.faqs) || 0;
            (i > 0 || o > 0) && (A.lookups = { documents: i, faqs: o });
          }
          A.progress && (A.progress = {
            ...A.progress,
            stage: "done",
            text: ""
          }), this.requestUpdate(), this.persistSession();
        } else if (r === "hint") {
          if (typeof n.messageId == "string" && A.id && n.messageId !== A.id)
            return;
          const i = Array.isArray(n.suggestions) ? n.suggestions.filter((a) => typeof a == "string" && a.trim() !== "").slice(0, 3) : [], o = n.handoff === !0;
          (o || i.length > 0) && (A.hint = { handoff: o, suggestions: i }, this.requestUpdate(), this.persistSession());
        } else r === "error" && (this.isModern ? (A.notice = {
          kind: "error",
          title: "답을 쓰다가 문제가 생겼어요",
          desc: "잠시 뒤에 다시 시도해 주세요.",
          retry: !0
        }, this.inflight && (this.lastFailed = { assistant: A, ...this.inflight })) : A.content += `
[오류: ${n.error}]`, A.progress && (A.progress = {
          ...A.progress,
          stage: "error",
          text: ""
        }), this.requestUpdate(), this.persistSession());
      } catch {
      }
  }
};
S.styles = Ff`
    :host {
      /* default 색상: applyTheme에서 inline style로 override. */
      --launcher-bg: #1f2937;
      --panel-bg: #ffffff;
      --header-bg: #f9fafb;
      --user-bg: var(--launcher-bg);
      --user-text: #ffffff;
      --assistant-bg: #f3f4f6;
      --assistant-text: #111111;
      --send-bg: var(--launcher-bg);
      --send-text: #ffffff;
      position: fixed;
      bottom: 24px;
      right: 24px;
      left: auto;
      z-index: 999999;
      font-family:
        system-ui,
        -apple-system,
        "Segoe UI",
        sans-serif;
    }
    :host([data-position="bottom-left"]) {
      left: 24px;
      right: auto;
    }
    /*
     * inline 모드: host element 자체가 panel 컨테이너 역할.
     * dashboard 라이브 프리뷰 등 임의 위치에 panel만 inline으로 노출하고 싶을 때.
     * 호스트가 외부에서 width/height 부여 → panel이 100% 채움.
     */
    :host([inline]) {
      position: relative;
      bottom: auto;
      right: auto;
      left: auto;
      display: block;
      width: 100%;
      height: 100%;
      z-index: auto;
    }
    :host([inline]) .toggle {
      display: none !important;
    }
    :host([inline]) .panel {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      border-radius: inherit;
    }
    :host([inline]) .rh,
    :host([inline]) .rw,
    :host([inline]) .rwh {
      display: none !important;
    }
    /* inline 에는 다시 열 런처가 없고 전체화면도 의미가 없어서 두 버튼을 숨긴다 (두 디자인 공통). */
    :host([inline]) .header .close-btn,
    :host([inline]) .header .fs-btn {
      display: none;
    }
    /* 모바일에선 launcher 약간 안쪽으로 + 살짝 작게 */
    @media (max-width: 640px) {
      :host {
        bottom: 16px;
        right: 16px;
      }
      :host([data-position="bottom-left"]) {
        left: 16px;
      }
    }
    /*
     * launcher(버튼) + 라벨을 세로로 묶는 래퍼. host가 bottom 고정이므로 라벨은
     * 아래에 붙고 버튼이 그만큼 위로 올라간다. hover 툴팁의 위치 기준(relative).
     */
    .launcher-wrap {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      position: relative;
    }
    :host([inline]) .launcher-wrap {
      display: none !important;
    }
    .launcher-label {
      font-size: var(--launcher-label-size, 12px);
      line-height: 1.25;
      font-weight: 600;
      color: var(--launcher-label-color, var(--launcher-bg));
      max-width: 96px;
      text-align: center;
      /* 한국어는 어절 단위로 끊어야 읽힌다. */
      word-break: keep-all;
      /* 호스트 배경색을 모르므로 최소한의 분리감 확보. */
      text-shadow: 0 1px 2px rgba(255, 255, 255, 0.65);
      pointer-events: none;
      user-select: none;
    }
    /*
     * hover 모드: 레이아웃을 밀지 않는 툴팁. 런처 옆에 띄운다 (위/아래는 열린
     * panel 이나 viewport 하단 경계와 겹침).
     */
    .launcher-label.tip {
      position: absolute;
      top: 50%;
      right: calc(100% + 10px);
      transform: translateY(-50%);
      white-space: nowrap;
      max-width: none;
      background: #111827;
      color: #ffffff;
      padding: 5px 9px;
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
      text-shadow: none;
      opacity: 0;
      transition: opacity 0.15s ease;
    }
    :host([data-position="bottom-left"]) .launcher-label.tip {
      right: auto;
      left: calc(100% + 10px);
    }
    .launcher-wrap:hover .launcher-label.tip,
    .toggle:focus-visible ~ .launcher-label.tip {
      opacity: 1;
    }
    .toggle {
      width: var(--launcher-size, 56px);
      height: var(--launcher-size, 56px);
      padding: 0;
      border-radius: 50%;
      border: none;
      background: var(--launcher-bg);
      /* SVG는 currentColor 사용: launcherBg 명도에 따라 자동 대비(applyTheme에서 계산). */
      color: var(--launcher-fg, white);
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .toggle svg {
      width: var(--launcher-svg-size, 24px);
      height: var(--launcher-svg-size, 24px);
    }
    /* 사용자 업로드 이미지 아이콘. circular toggle 안에 정원 형태로 fit. */
    .toggle img.custom-icon {
      width: var(--launcher-icon-size, 36px);
      height: var(--launcher-icon-size, 36px);
      object-fit: cover;
      border-radius: 50%;
      display: block;
      transition:
        opacity 0.15s ease,
        transform 0.15s ease;
    }
    /*
     * 모바일 launcher 크기 override, 반드시 base .toggle 규칙 "뒤"에 위치.
     * @media는 specificity를 올리지 않으므로, 소스 순서상 뒤에 와야 데스크톱 값을 덮어씀.
     */
    @media (max-width: 640px) {
      .toggle {
        width: var(--launcher-size-mobile, 52px);
        height: var(--launcher-size-mobile, 52px);
      }
    }
    /*
     * icon-only 모드: 배경 원/그림자 제거, 업로드 이미지가 버튼 전체를 채움.
     * 원형 crop 없이 contain: 투명 PNG 로고 등 비정형 아이콘 그대로 노출.
     * drop-shadow는 이미지 알파 윤곽을 따라가므로 "배경" 느낌 없이 페이지와 분리만 해줌.
     */
    .toggle.icon-only {
      background: transparent;
      box-shadow: none;
    }
    .toggle.icon-only img.custom-icon {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 0;
      filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.25));
    }
    /*
     * 업로드 아이콘은 열려도 X로 바뀌지 않고 그대로 유지(브랜드 유지). 대신 열림
     * (active) 상태를 opacity/축소로 표시. 살짝 흐려지고 작아져 "지금 열려있음"을
     * 은근히 알림. icon-only(배경 원 없음)와 원형 배경 모드 모두 동일 적용.
     */
    .toggle.icon-active img.custom-icon {
      opacity: 0.6;
      transform: scale(0.92);
    }
    /* hover는 active보다 뒤: 열린 상태에서 hover 시 살짝 되살아나는 피드백. */
    .toggle:hover img.custom-icon {
      opacity: 0.85;
    }
    /*
     * panel은 viewport 기준 fixed로 floating.
     * left/top/width/height는 inline style로 동적 적용 (resize state).
     * fullscreen이면 inset:0로 viewport 전체 차지, resize handle 비활성.
     */
    .panel {
      position: fixed;
      background: var(--panel-bg);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .panel.fullscreen {
      /*
       * inset으로 우측을 scrollbar 폭만큼 안쪽으로, panel 우측 padding이 호스트 페이지
       * scrollbar 뒤에 깔리는 문제 방지. --page-scrollbar-w는 widget이 JS로 측정해 set.
       * scrollbar가 없는 페이지(or overlay scrollbar OS)에선 0px로 떨어지므로 영향 없음.
       */
      top: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
      right: var(--page-scrollbar-w, 0px) !important;
      width: auto !important;
      height: auto !important;
      border-radius: 0;
    }
    /* 모바일: 작은 viewport에선 panel을 거의 화면 가득. 사용자 inline style 무시(!important) */
    @media (max-width: 640px) {
      .panel {
        left: 8px !important;
        right: 8px !important;
        top: 8px !important;
        /* 런처 위로 띄운다. 기본 52px 런처면 80px 로 종전과 같고, 큰 런처·라벨이면 더 올라간다. */
        bottom: var(--launcher-clear, 80px) !important;
        width: auto !important;
        height: auto !important;
        max-width: none !important;
        max-height: none !important;
      }
      .rh {
        display: none !important;
      }
      .header {
        cursor: default !important;
      }
    }
    /* 8방향 resize handle: invisible. 가장자리 안쪽에 absolute. */
    .rh {
      position: absolute;
      z-index: 1;
      touch-action: none;
    }
    .rh.n {
      top: 0;
      left: 12px;
      right: 12px;
      height: 6px;
      cursor: n-resize;
    }
    .rh.s {
      bottom: 0;
      left: 12px;
      right: 12px;
      height: 6px;
      cursor: s-resize;
    }
    .rh.w {
      left: 0;
      top: 12px;
      bottom: 12px;
      width: 6px;
      cursor: w-resize;
    }
    .rh.e {
      right: 0;
      top: 12px;
      bottom: 12px;
      width: 6px;
      cursor: e-resize;
    }
    .rh.nw {
      top: 0;
      left: 0;
      width: 12px;
      height: 12px;
      cursor: nw-resize;
    }
    .rh.ne {
      top: 0;
      right: 0;
      width: 12px;
      height: 12px;
      cursor: ne-resize;
    }
    .rh.sw {
      bottom: 0;
      left: 0;
      width: 12px;
      height: 12px;
      cursor: sw-resize;
    }
    .rh.se {
      bottom: 0;
      right: 0;
      width: 12px;
      height: 12px;
      cursor: se-resize;
    }
    .panel.fullscreen .rh {
      display: none;
    }
    .header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      border-bottom: 1px solid #e5e7eb;
      background: var(--header-bg);
      cursor: move;
      user-select: none;
      touch-action: none;
    }
    .panel.fullscreen .header {
      cursor: default;
    }
    .header .title {
      flex: 1;
      font-size: var(--header-title-size, 14px);
      font-weight: 600;
      color: #111;
    }
    /* 헤더 아이콘: 제목 좌측에 작은 정사각형 이미지. */
    .header .header-icon {
      width: 20px;
      height: 20px;
      object-fit: contain;
      border-radius: 4px;
      flex-shrink: 0;
    }
    .header button {
      background: transparent;
      border: none;
      cursor: pointer;
      width: 28px;
      height: 28px;
      border-radius: 6px;
      color: #4b5563;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
    .header button:hover:not(:disabled) {
      background: #e5e7eb;
      color: #111;
    }
    .header button:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
    .header button svg {
      width: 16px;
      height: 16px;
    }
    /* 맨 아래로 버튼을 대화 목록 위에 띄우려고 감싼다 */
    .messages-wrap {
      position: relative;
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
    }
    .messages {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 16px;
    }
    .jump-bottom {
      position: absolute;
      left: 50%;
      bottom: 10px;
      transform: translateX(-50%);
      z-index: 3;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 32px;
      box-sizing: border-box;
      padding: 0 12px;
      border: 1px solid #e5e5e5;
      border-radius: 999px;
      background: #ffffff;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
      font: inherit;
      font-size: 12px;
      font-weight: 600;
      color: #262626;
      white-space: nowrap;
      cursor: pointer;
    }
    .jump-bottom svg {
      width: 13px;
      height: 13px;
      flex-shrink: 0;
    }
    /* 지금 하는 일을 반짝이는 글자로. 움직임을 줄이는 설정이면 회색 글자만 */
    .shimmer {
      background: linear-gradient(90deg, #a3a3a3 30%, #171717 50%, #a3a3a3 70%);
      background-size: 200% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      animation: shimmer 1.4s linear infinite;
    }
    @keyframes shimmer {
      0% {
        background-position: 100% 0;
      }
      100% {
        background-position: -100% 0;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .shimmer {
        animation: none;
        background: none;
        color: #525252;
      }
    }
    .wait-line {
      display: flex;
      align-items: center;
      gap: 8px;
      min-height: 26px;
      margin: 2px 0 8px;
      padding: 0 2px;
      font-size: 13px;
      font-weight: 600;
    }
    .wait-line svg {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
      color: #737373;
    }
    /* 대화 전에 정보 받기 */
    .intake-ask {
      white-space: pre-line;
    }
    .intake-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: -4px 0 12px;
    }
    .intake-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 24px;
      box-sizing: border-box;
      padding: 0 9px;
      border: 1px dashed #d4d4d4;
      border-radius: 999px;
      background: #ffffff;
      color: #737373;
      font-size: 12px;
      font-weight: 600;
    }
    .intake-chip.done {
      border: 1px solid #b7ecd2;
      background: #ecfbf3;
      color: #1a6e4a;
    }
    .intake-chip svg {
      width: 11px;
      height: 11px;
    }
    .intake-summary {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin: -4px 0 12px;
      padding: 10px 12px;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      background: #ffffff;
    }
    .intake-summary-title {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 700;
      color: #525252;
    }
    .intake-summary-title svg {
      width: 13px;
      height: 13px;
    }
    .intake-summary-values {
      font-size: 13px;
      line-height: 1.5;
      color: #171717;
    }
    .intake-note {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      width: fit-content;
      max-width: 92%;
      margin: 0 auto 12px;
      padding: 5px 10px;
      border-radius: 999px;
      background: #f0f0f0;
      font-size: 12px;
      line-height: 1.5;
      color: #404040;
    }
    .intake-note svg {
      width: 12px;
      height: 12px;
      flex-shrink: 0;
    }
    .lookups {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      margin: 2px 0 4px;
      font-size: 11px;
      color: #737373;
    }
    .lookups svg {
      width: 11px;
      height: 11px;
      flex-shrink: 0;
    }
    .msg {
      margin-bottom: 12px;
      padding: 8px 12px;
      border-radius: 8px;
      /*
       * content 폭 기준으로 줄어들되 80%/720px 중 작은 값으로 cap.
       * fullscreen(viewport 가득)에서 80%가 1500px+가 되어 짧은 "네" 메시지가
       * 통째로 늘어나던 문제 방지.
       */
      width: fit-content;
      max-width: min(80%, 720px);
      font-size: var(--message-size, 14px);
      line-height: 1.5;
    }
    .msg.user {
      background: var(--user-bg);
      color: var(--user-text);
      /* fit-content + margin-left: auto → 우측 anchored. */
      margin-left: auto;
      /* 여러 줄 질문과 [첨부] 줄이 한 줄로 뭉개지지 않게. 긴 URL 은 줄 안에서 꺾는다. */
      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }
    .msg.assistant {
      background: var(--assistant-bg);
      color: var(--assistant-text);
      /* 좌측 default: margin-right: auto 명시 (fit-content와 결합 시 안전). */
      margin-right: auto;
    }
    /* assistant markdown 렌더 */
    .msg.assistant p {
      margin: 0 0 8px 0;
    }
    .msg.assistant p:last-child {
      margin-bottom: 0;
    }
    .msg.assistant ul,
    .msg.assistant ol {
      margin: 4px 0 8px 0;
      padding-left: 20px;
    }
    .msg.assistant li {
      margin-bottom: 2px;
    }
    .msg.assistant code {
      background: #e5e7eb;
      padding: 1px 4px;
      border-radius: 3px;
      font-size: 12px;
      font-family: ui-monospace, "SF Mono", Menlo, monospace;
    }
    .msg.assistant pre {
      background: #1f2937;
      color: #f9fafb;
      padding: 8px 10px;
      border-radius: 6px;
      overflow-x: auto;
      margin: 6px 0;
      font-size: 12px;
    }
    .msg.assistant pre code {
      background: transparent;
      padding: 0;
      color: inherit;
    }
    .msg.assistant blockquote {
      border-left: 3px solid #9ca3af;
      margin: 6px 0;
      padding: 0 8px;
      color: #4b5563;
    }
    .msg.assistant a {
      color: #1d4ed8;
      text-decoration: underline;
    }
    .msg.assistant h1,
    .msg.assistant h2,
    .msg.assistant h3,
    .msg.assistant h4 {
      margin: 6px 0 4px 0;
      font-weight: 600;
    }
    .msg.assistant h1 {
      font-size: 16px;
    }
    .msg.assistant h2 {
      font-size: 15px;
    }
    .msg.assistant h3 {
      font-size: 14px;
    }
    .msg.assistant h4 {
      font-size: 13px;
    }
    .msg.assistant table {
      border-collapse: collapse;
      margin: 6px 0;
      font-size: 12px;
    }
    .msg.assistant th,
    .msg.assistant td {
      border: 1px solid #d1d5db;
      padding: 4px 8px;
      text-align: left;
    }
    .msg.assistant th {
      background: #e5e7eb;
    }
    .msg.assistant hr {
      border: none;
      border-top: 1px solid #d1d5db;
      margin: 8px 0;
    }
    .msg-wrap.assistant {
      margin-bottom: 12px;
    }
    .msg-wrap.assistant .msg.assistant {
      margin-bottom: 4px;
    }
    .reactions {
      display: flex;
      gap: 4px;
      padding-left: 4px;
    }
    .reactions .react {
      background: transparent;
      border: none;
      color: #9ca3af;
      cursor: pointer;
      padding: 2px 4px;
      border-radius: 4px;
      display: inline-flex;
      align-items: center;
    }
    .reactions .react svg {
      width: 14px;
      height: 14px;
    }
    .reactions .react:hover {
      background: rgba(0, 0, 0, 0.05);
      color: #4b5563;
    }
    .reactions .react.on {
      color: var(--launcher-bg);
    }
    .reactions .react.reported {
      color: #ef4444;
      cursor: default;
    }
    .region-hidden {
      visibility: hidden !important;
      pointer-events: none !important;
    }
    .region-overlay {
      position: fixed;
      inset: 0;
      z-index: 2147483647;
      cursor: crosshair;
      user-select: none;
    }
    .region-dim {
      position: absolute;
      background: rgba(0, 0, 0, 0.45);
      pointer-events: none;
    }
    .region-dim-full {
      inset: 0;
    }
    .region-rect {
      position: absolute;
      border: 2px solid #ffffff;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
      pointer-events: none;
    }
    .region-size {
      position: absolute;
      padding: 2px 6px;
      background: #111827;
      color: #ffffff;
      font-size: 11px;
      border-radius: 4px;
      pointer-events: none;
      white-space: nowrap;
    }
    .region-hint {
      position: fixed;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      padding: 6px 14px;
      background: #111827;
      color: #ffffff;
      font-size: 13px;
      border-radius: 999px;
      pointer-events: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    .progress-line {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      margin-bottom: 6px;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 999px;
      color: #1d4ed8;
      font-size: 12px;
    }
    .progress-spinner {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid #bfdbfe;
      border-top-color: #1d4ed8;
      animation: progress-spin 0.7s linear infinite;
      flex-shrink: 0;
    }
    @keyframes progress-spin {
      to {
        transform: rotate(360deg);
      }
    }
    .progress-placeholder {
      color: #6b7280;
      font-size: 13px;
      font-style: italic;
    }
    .progress-history {
      list-style: none;
      padding: 0;
      margin: 0 0 6px;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .progress-history li {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 2px 8px;
      font-size: 11px;
      color: #4b5563;
    }
    .progress-history li svg {
      width: 12px;
      height: 12px;
      color: #10b981;
      flex-shrink: 0;
    }
    /* 답변에 첨부된 파일. 이미지는 그대로, 그 외는 내려받기 카드. */
    .attachments {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin: 6px 0 0;
    }
    .att-image {
      margin: 0;
      max-width: 100%;
    }
    .att-image img {
      display: block;
      max-width: 100%;
      max-height: 320px;
      width: auto;
      border-radius: 8px;
      border: 1px solid #e5e7eb;
      cursor: zoom-in;
    }
    .att-image figcaption {
      margin-top: 4px;
      font-size: 11px;
      color: #6b7280;
    }
    .att-image-loading {
      width: 160px;
      height: 96px;
      border-radius: 8px;
      background: #f3f4f6;
    }
    .att-file {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 8px 10px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      background: #fff;
      cursor: pointer;
      text-align: left;
      font: inherit;
      color: #111827;
      transition: background 0.15s;
    }
    .att-file:hover {
      background: #f9fafb;
    }
    .att-file svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: #6b7280;
    }
    .att-file-text {
      display: flex;
      flex-direction: column;
      min-width: 0;
      flex: 1;
    }
    .att-file-name {
      font-size: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .att-file-meta {
      font-size: 11px;
      color: #6b7280;
    }
    .reactions .react:disabled {
      cursor: default;
    }
    .report-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.45);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      z-index: 10;
    }
    .report-modal {
      background: #ffffff;
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      width: 100%;
      max-width: 320px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-height: 100%;
      overflow-y: auto;
    }
    .report-modal header .title {
      font-size: 14px;
      font-weight: 600;
      color: #111827;
      margin: 0;
    }
    .report-modal header .subtitle {
      font-size: 12px;
      color: #6b7280;
      margin: 2px 0 0;
    }
    .report-reasons {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .report-reasons label {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      font-size: 13px;
      color: #1f2937;
      padding: 4px 6px;
      border-radius: 4px;
    }
    .report-reasons label:hover {
      background: #f3f4f6;
    }
    .report-detail {
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      padding: 6px 8px;
      font: inherit;
      font-size: 13px;
      color: #1f2937;
      resize: vertical;
      min-height: 60px;
    }
    .report-error {
      font-size: 12px;
      color: #dc2626;
      margin: 0;
    }
    .report-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .report-actions button {
      font: inherit;
      font-size: 13px;
      padding: 6px 12px;
      border-radius: 6px;
      border: 1px solid transparent;
      cursor: pointer;
    }
    .report-actions button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .report-actions .ghost {
      background: transparent;
      color: #4b5563;
      border-color: #d1d5db;
    }
    .report-actions .ghost:hover:not(:disabled) {
      background: #f3f4f6;
    }
    .report-actions .primary {
      background: var(--launcher-bg);
      color: #ffffff;
    }
    .report-actions .primary:hover:not(:disabled) {
      filter: brightness(0.95);
    }
    .inquiry-row {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: #1f2937;
    }
    .inquiry-row label {
      flex-shrink: 0;
    }
    .inquiry-row select {
      flex: 1;
      font: inherit;
      font-size: 13px;
      padding: 6px 8px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      background: #ffffff;
      color: #1f2937;
    }
    .inquiry-subject {
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      padding: 6px 8px;
      font: inherit;
      font-size: 13px;
      color: #1f2937;
    }
    /* streaming 시작 전 빈 응답 동안 표시되는 dots */
    .typing {
      display: inline-flex;
      gap: 3px;
      padding: 2px 0;
    }
    .typing span {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #9ca3af;
      animation: typing-bounce 1.2s infinite ease-in-out;
    }
    .typing span:nth-child(2) {
      animation-delay: 0.15s;
    }
    .typing span:nth-child(3) {
      animation-delay: 0.3s;
    }
    @keyframes typing-bounce {
      0%,
      60%,
      100% {
        transform: translateY(0);
        opacity: 0.5;
      }
      30% {
        transform: translateY(-4px);
        opacity: 1;
      }
    }
    form {
      padding: 12px;
      border-top: 1px solid #e5e7eb;
    }
    /*
     * composer: textarea + toolbar(캡처 버튼들/전송) 묶음.
     * 입력 폰트 사이즈가 커져도 border 안에서 자연스럽게 늘어남.
     */
    .composer {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 6px 8px 8px;
      border: 1px solid #d1d5db;
      border-radius: 12px;
      background: #ffffff;
      transition:
        border-color 0.15s ease,
        box-shadow 0.15s ease;
    }
    .composer:focus-within {
      border-color: #9ca3af;
      box-shadow: 0 0 0 1px rgba(156, 163, 175, 0.25);
    }
    .composer textarea {
      width: 100%;
      box-sizing: border-box;
      border: none;
      outline: none;
      background: transparent;
      padding: 4px 2px;
      resize: none;
      font: inherit;
      font-family: inherit;
      color: inherit;
      font-size: var(--input-size, 14px);
      line-height: 1.4;
      max-height: 160px;
      overflow-y: auto;
    }
    .composer textarea:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .composer-toolbar {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .composer-toolbar .spacer {
      flex: 1;
    }
    /* char counter: 한계 근처(80%+)에서만 노출. 95%+는 경고색. */
    .composer-toolbar .char-counter {
      font-size: 11px;
      color: #6b7280;
      font-variant-numeric: tabular-nums;
      padding: 0 4px;
    }
    .composer-toolbar .char-counter.near-limit {
      color: #b45309;
      font-weight: 500;
    }
    .cap-btn {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      padding: 0;
      border: none;
      background: transparent;
      color: #6b7280;
      border-radius: 6px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .cap-btn svg {
      width: 16px;
      height: 16px;
    }
    .cap-btn:hover:not(:disabled) {
      background: #f3f4f6;
      color: #111827;
    }
    .cap-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
    button[type="submit"] {
      padding: 6px 12px;
      border: none;
      background: var(--send-bg);
      color: var(--send-text);
      border-radius: 6px;
      cursor: pointer;
      font: inherit;
      font-size: 13px;
    }
    button[type="submit"]:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    /* 보내기 전 첨부 칩 줄(classic). 답 첨부(.attachments)와 이름이 겹쳐 답 첨부에 위 선이 붙던 문제를 피해 따로 둔다. */
    .pending-attachments {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 6px 12px 0;
      border-top: 1px solid #e5e7eb;
    }
    .att-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      max-width: 220px;
      padding: 2px 4px 2px 2px;
      background: #f3f4f6;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 11px;
      color: #1f2937;
    }
    .att-chip img {
      width: 32px;
      height: 32px;
      object-fit: cover;
      border-radius: 4px;
    }
    .att-chip .att-icon {
      width: 32px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #e5e7eb;
      border-radius: 4px;
      color: #6b7280;
    }
    .att-chip .att-icon svg {
      width: 16px;
      height: 16px;
    }
    .att-chip .att-label {
      max-width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .att-chip .att-remove {
      background: transparent;
      border: none;
      color: #6b7280;
      cursor: pointer;
      font-size: 16px;
      line-height: 1;
      padding: 0 2px;
    }
    .att-chip .att-remove:hover {
      color: #dc2626;
    }

    /*
     * ───────── 새 디자인 (theme.design === "modern") ─────────
     * applyTheme 이 host 에 data-design="modern" 을 붙일 때만 켜진다. 모든 규칙을 이 선택자
     * 아래에 둬서 classic 사이트(값 없음)의 모양은 한 픽셀도 바뀌지 않는다.
     * 색 기본값: 머리글은 브랜드 색(launcherBg), 대화 바탕은 아주 연한 회색, 답은 흰 카드.
     * 머리글 글자색·아바타·강조색·답 테두리는 applyTheme 이 바탕 명도로 계산해 넣는다.
     */
    :host([data-design="modern"]) {
      --panel-bg: #fafafa;
      --header-bg: var(--launcher-bg);
      --assistant-bg: #ffffff;
      --assistant-text: #171717;
    }
    :host([data-design="modern"]) .panel {
      border-radius: 16px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.14);
    }
    :host([data-design="modern"]) .panel.fullscreen {
      border-radius: 0;
      border: none;
    }
    :host([data-design="modern"]) .header {
      gap: 10px;
      min-height: 60px;
      box-sizing: border-box;
      padding: 0 6px 0 14px;
      border-bottom: none;
      color: var(--header-fg, #ffffff);
    }
    :host([data-design="modern"]) .header .avatar {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--header-avatar-bg, rgba(255, 255, 255, 0.16));
      color: var(--header-avatar-fg, #ffffff);
    }
    :host([data-design="modern"]) .header .avatar svg {
      width: 16px;
      height: 16px;
    }
    :host([data-design="modern"]) .header .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    :host([data-design="modern"]) .header .heading {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 1px;
    }
    :host([data-design="modern"]) .header .title {
      color: var(--header-fg, #ffffff);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    :host([data-design="modern"]) .header .subtitle {
      font-size: 11px;
      color: var(--header-fg, #ffffff);
      opacity: 0.72;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    :host([data-design="modern"]) .header button {
      width: 34px;
      height: 34px;
      border-radius: 8px;
      color: var(--header-fg, #ffffff);
      opacity: 0.85;
    }
    :host([data-design="modern"]) .header button:hover:not(:disabled) {
      background: rgba(127, 127, 127, 0.18);
      color: var(--header-fg, #ffffff);
      opacity: 1;
    }
    :host([data-design="modern"]) .header button svg {
      width: 18px;
      height: 18px;
    }
    :host([data-design="modern"]) .header .icon-down {
      display: none;
    }
    .suggestions {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      margin: -4px 0 12px;
    }
    .suggestion {
      max-width: 100%;
      height: 32px;
      padding: 0 12px;
      border-radius: 999px;
      border: 1px solid #e5e5e5;
      background: #ffffff;
      color: var(--accent, #171717);
      font: inherit;
      font-size: 13px;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    .suggestion:hover:not(:disabled) {
      border-color: #a3a3a3;
    }
    .suggestion:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .hint {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      margin: 4px 0 2px;
    }
    .hint-sugs {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      max-width: 100%;
    }
    .hint-label {
      font-size: 12px;
      font-weight: 600;
      color: #737373;
    }
    /* FAQ 질문은 길어서 처음 추천 질문과 달리 줄을 바꾼다. */
    .suggestion.hint-sug {
      height: auto;
      min-height: 32px;
      padding: 6px 12px;
      border-radius: 16px;
      line-height: 1.45;
      white-space: normal;
    }
    .hint-handoff {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 32px;
      padding: 0 12px;
      border-radius: 999px;
      border: 1px solid #e5e5e5;
      background: #ffffff;
      color: var(--accent, #171717);
      font: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }
    .hint-handoff:hover {
      border-color: #a3a3a3;
    }
    .hint-handoff svg {
      width: 13px;
      height: 13px;
    }
    .sources {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: 2px 0 4px;
    }
    .source-chip {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      max-width: 100%;
      height: 22px;
      padding: 0 8px;
      border-radius: 4px;
      background: #f0f0f0;
      color: #525252;
      font-size: 11px;
    }
    .source-chip svg {
      flex-shrink: 0;
      width: 11px;
      height: 11px;
    }
    .source-chip span {
      max-width: 220px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .menu-backdrop {
      position: absolute;
      inset: 0;
      z-index: 5;
    }
    .menu {
      position: absolute;
      top: 56px;
      right: 10px;
      z-index: 6;
      width: 196px;
      padding: 4px;
      background: #ffffff;
      border: 1px solid #e5e5e5;
      border-radius: 10px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      display: flex;
      flex-direction: column;
    }
    .menu button {
      display: flex;
      align-items: center;
      gap: 10px;
      height: 36px;
      padding: 0 10px;
      border: none;
      border-radius: 6px;
      background: transparent;
      font: inherit;
      font-size: 13px;
      color: #262626;
      text-align: left;
      cursor: pointer;
    }
    .menu button:hover:not(:disabled) {
      background: #f5f5f5;
    }
    .menu button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
    .menu button svg {
      width: 15px;
      height: 15px;
      flex-shrink: 0;
      color: #525252;
    }
    :host([inline]) .menu .menu-full {
      display: none;
    }
    :host([data-design="modern"]) .messages {
      padding: 16px 14px;
    }
    :host([data-design="modern"]) .msg {
      padding: 10px 12px;
      line-height: 1.6;
    }
    :host([data-design="modern"]) .msg.user {
      border-radius: 14px 4px 14px 14px;
      max-width: min(85%, 720px);
    }
    :host([data-design="modern"]) .msg.assistant {
      border-radius: 4px 14px 14px 14px;
      border: 1px solid var(--assistant-border, rgba(0, 0, 0, 0.08));
      max-width: min(88%, 720px);
    }
    :host([data-design="modern"]) .msg.assistant a {
      color: var(--accent, #171717);
    }
    :host([data-design="modern"]) .progress-line {
      height: 32px;
      box-sizing: border-box;
      gap: 8px;
      padding: 0 12px;
      background: #ffffff;
      border-color: #e5e5e5;
      color: #525252;
    }
    :host([data-design="modern"]) .progress-spinner {
      border-color: #e5e5e5;
      border-top-color: #737373;
    }
    :host([data-design="modern"]) .progress-history li {
      padding: 2px 0;
      color: #737373;
    }
    :host([data-design="modern"]) .progress-history li svg {
      color: #737373;
    }
    :host([data-design="modern"]) .reactions {
      align-items: center;
      gap: 2px;
      padding-left: 0;
      margin-left: -4px;
    }
    :host([data-design="modern"]) .reactions .react {
      width: 30px;
      height: 30px;
      padding: 0;
      border-radius: 8px;
      justify-content: center;
      color: #a3a3a3;
    }
    :host([data-design="modern"]) .reactions .react:hover {
      background: #f0f0f0;
      color: #525252;
    }
    :host([data-design="modern"]) .reactions .react.on {
      color: var(--accent, #171717);
    }
    :host([data-design="modern"]) .reactions .react.reported {
      color: #b91c1c;
    }
    .reported-note {
      margin-left: 4px;
      font-size: 11px;
      color: #737373;
    }
    .notice {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 4px;
      padding: 12px 14px;
      border-radius: 12px;
      background: #ffffff;
      border: 1px solid #e5e5e5;
    }
    .notice.error {
      background: #fef2f2;
      border-color: #fecaca;
    }
    .notice-body {
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }
    .notice-icon {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #f5f5f5;
      color: #525252;
    }
    .notice.error .notice-icon {
      background: #ffffff;
      color: #b91c1c;
    }
    .notice-icon svg {
      width: 15px;
      height: 15px;
    }
    .notice-text {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .notice-title {
      font-size: 13px;
      font-weight: 600;
      color: #171717;
    }
    .notice-desc {
      font-size: 12px;
      line-height: 1.5;
      color: #525252;
    }
    .notice-btn {
      align-self: flex-start;
      height: 32px;
      padding: 0 12px;
      border-radius: 8px;
      border: 1px solid var(--send-bg);
      background: var(--send-bg);
      color: var(--send-text);
      font: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }
    .notice.error .notice-btn {
      border-color: #171717;
      background: #171717;
      color: #ffffff;
    }
    :host([data-design="modern"]) form {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 10px 10px 12px;
      border-top: 1px solid #f0f0f0;
      background: #ffffff;
    }
    .m-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .m-cap {
      position: relative;
      flex-shrink: 0;
      display: flex;
    }
    .m-cap-btn {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      padding: 0;
      border: 1px solid #e5e5e5;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      color: #525252;
      cursor: pointer;
    }
    .m-cap-btn svg {
      width: 18px;
      height: 18px;
    }
    .m-cap-btn:hover:not(:disabled),
    .m-cap-btn.on {
      background: #f0f0f0;
      color: #171717;
    }
    .m-cap-btn:disabled {
      color: #d4d4d4;
      cursor: not-allowed;
    }
    /* 캡처 버튼 바로 위로 열린다. 바깥을 누르면 닫히는 막은 패널에 깐다 (menu-backdrop). */
    .cap-menu {
      position: absolute;
      left: 0;
      bottom: calc(100% + 6px);
      z-index: 6;
      width: 210px;
      padding: 4px;
      display: flex;
      flex-direction: column;
      background: #ffffff;
      border: 1px solid #e5e5e5;
      border-radius: 10px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }
    .cap-menu button {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 10px;
      border: none;
      border-radius: 6px;
      background: transparent;
      font: inherit;
      font-size: 13px;
      color: #262626;
      text-align: left;
      cursor: pointer;
    }
    .cap-menu button:hover:not(:disabled) {
      background: #f5f5f5;
    }
    .cap-menu button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
    .cap-menu button svg {
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      color: #525252;
    }
    .cap-menu-text {
      display: flex;
      flex-direction: column;
      gap: 1px;
      min-width: 0;
    }
    .cap-menu-title {
      font-weight: 600;
    }
    .cap-menu-sub {
      font-size: 11px;
      color: #737373;
    }
    .m-row {
      display: flex;
      align-items: flex-end;
      gap: 8px;
    }
    .m-input {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      padding: 0 14px;
      border: 1px solid #e5e5e5;
      border-radius: 20px;
      background: #fafafa;
      transition:
        border-color 0.15s ease,
        background 0.15s ease;
    }
    .m-input:focus-within {
      border-color: #a3a3a3;
      background: #ffffff;
    }
    .m-input textarea {
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: 10px 0;
      border: none;
      outline: none;
      background: transparent;
      resize: none;
      font: inherit;
      font-size: var(--input-size, 14px);
      line-height: 1.4;
      color: #171717;
      /* 4줄까지 늘어나고 그 뒤로는 안에서 스크롤. */
      max-height: 104px;
      overflow-y: auto;
    }
    .m-input textarea:disabled {
      color: #a3a3a3;
      cursor: not-allowed;
    }
    :host([data-design="modern"]) .m-send {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      padding: 0;
      border: none;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--send-bg);
      color: var(--send-text);
      cursor: pointer;
    }
    :host([data-design="modern"]) .m-send svg {
      width: 16px;
      height: 16px;
    }
    :host([data-design="modern"]) .m-send:disabled {
      opacity: 1;
      background: #f0f0f0;
      color: #a3a3a3;
      cursor: not-allowed;
    }
    .m-counter {
      align-self: flex-end;
      font-size: 11px;
      color: #737373;
      font-variant-numeric: tabular-nums;
    }
    .m-counter.near-limit {
      color: #b91c1c;
      font-weight: 600;
    }
    :host([data-design="modern"]) .att-chip {
      background: #fafafa;
      border-color: #e5e5e5;
      color: #404040;
    }
    :host([data-design="modern"]) .report-overlay {
      align-items: flex-end;
      padding: 0;
      background: rgba(0, 0, 0, 0.35);
    }
    :host([data-design="modern"]) .report-modal {
      max-width: none;
      max-height: 90%;
      gap: 12px;
      padding: 8px 16px 16px;
      border-radius: 16px 16px 0 0;
      box-shadow: none;
    }
    :host([data-design="modern"]) .report-modal::before {
      content: "";
      flex-shrink: 0;
      align-self: center;
      width: 36px;
      height: 4px;
      border-radius: 999px;
      background: #e5e5e5;
    }
    :host([data-design="modern"]) .report-modal header .title {
      font-size: 16px;
      font-weight: 700;
      color: #171717;
    }
    :host([data-design="modern"]) .report-modal header .subtitle {
      margin-top: 4px;
      font-size: 13px;
      line-height: 1.55;
      color: #525252;
    }
    :host([data-design="modern"]) .report-actions button {
      flex: 1;
      height: 42px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
    }
    :host([data-design="modern"]) .report-actions .ghost {
      border-color: #e5e5e5;
      background: #ffffff;
      color: #262626;
    }
    :host([data-design="modern"]) .report-actions .primary {
      background: var(--send-bg);
      color: var(--send-text);
    }
    :host([data-design="modern"]) .report-actions .danger {
      background: #dc2626;
      color: #ffffff;
    }
    :host([data-design="modern"]) .report-detail,
    :host([data-design="modern"]) .inquiry-subject {
      padding: 10px 12px;
      border-color: #e5e5e5;
      border-radius: 10px;
      font-size: 14px;
    }
    :host([data-design="modern"]) .report-reasons label:hover {
      background: #f5f5f5;
    }
    .cat-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .cat-chips button {
      height: 32px;
      padding: 0 12px;
      border-radius: 999px;
      border: 1px solid #e5e5e5;
      background: #ffffff;
      font: inherit;
      font-size: 13px;
      color: #404040;
      cursor: pointer;
    }
    .cat-chips button[aria-checked="true"] {
      border-color: #171717;
      background: #171717;
      color: #ffffff;
      font-weight: 600;
    }
    /* 모바일: 화면 전체로 열고, 열린 동안 런처는 숨긴다(창이 런처를 덮던 문제). */
    @media (max-width: 640px) {
      :host([data-design="modern"]) .panel {
        left: 0 !important;
        right: 0 !important;
        top: 0 !important;
        bottom: 0 !important;
        border-radius: 0;
        border: none;
      }
      :host([data-design="modern"]) .launcher-wrap.is-open {
        display: none;
      }
      :host([data-design="modern"]) .header .icon-x {
        display: none;
      }
      :host([data-design="modern"]) .header .icon-down {
        display: inline;
      }
      .menu .menu-full {
        display: none;
      }
    }
  `;
L([
  ue({ attribute: "api-key" })
], S.prototype, "apiKey", 2);
L([
  ue({ attribute: "browser-id" })
], S.prototype, "browserId", 2);
L([
  ue({ attribute: "api-base-url" })
], S.prototype, "apiBaseUrl", 2);
L([
  ue({ attribute: !1 })
], S.prototype, "getAccessToken", 2);
L([
  ue({ attribute: "preview-mode", type: Boolean })
], S.prototype, "previewMode", 2);
L([
  ue({ attribute: "inline", type: Boolean, reflect: !0 })
], S.prototype, "inline", 2);
L([
  ue({ attribute: !1 })
], S.prototype, "themeOverride", 2);
L([
  R()
], S.prototype, "open", 2);
L([
  R()
], S.prototype, "fullscreen", 2);
L([
  R()
], S.prototype, "messages", 2);
L([
  R()
], S.prototype, "input", 2);
L([
  R()
], S.prototype, "streaming", 2);
L([
  R()
], S.prototype, "atBottom", 2);
L([
  R()
], S.prototype, "intake", 2);
L([
  R()
], S.prototype, "sessionId", 2);
L([
  R()
], S.prototype, "theme", 2);
L([
  R()
], S.prototype, "maxUserMessageChars", 2);
L([
  R()
], S.prototype, "rect", 2);
L([
  R()
], S.prototype, "reportingMessageId", 2);
L([
  R()
], S.prototype, "resetConfirmOpen", 2);
L([
  R()
], S.prototype, "reportReason", 2);
L([
  R()
], S.prototype, "reportDetail", 2);
L([
  R()
], S.prototype, "reportSubmitting", 2);
L([
  R()
], S.prototype, "reportError", 2);
L([
  R()
], S.prototype, "inquiryOpen", 2);
L([
  R()
], S.prototype, "inquiryCategory", 2);
L([
  R()
], S.prototype, "inquirySubject", 2);
L([
  R()
], S.prototype, "inquiryBody", 2);
L([
  R()
], S.prototype, "inquiryContact", 2);
L([
  R()
], S.prototype, "inquirySubmitting", 2);
L([
  R()
], S.prototype, "inquiryError", 2);
L([
  R()
], S.prototype, "inquirySuccess", 2);
L([
  R()
], S.prototype, "menuOpen", 2);
L([
  R()
], S.prototype, "capMenuOpen", 2);
L([
  R()
], S.prototype, "pendingAttachments", 2);
L([
  R()
], S.prototype, "capturing", 2);
L([
  R()
], S.prototype, "regionCapturing", 2);
L([
  R()
], S.prototype, "regionRect", 2);
L([
  Wf("form textarea")
], S.prototype, "composerTextarea", 2);
S = L([
  Gf("timely-chatbot")
], S);
const ga = "timely-chatbot-bid", Zw = "http://localhost:3410";
function qw() {
  try {
    const t = localStorage.getItem(ga);
    if (t) return t;
    const A = `tc-${crypto.randomUUID()}`;
    return localStorage.setItem(ga, A), A;
  } catch {
    return `tc-${crypto.randomUUID()}`;
  }
}
function jw(t) {
  if (!t.apiKey) throw new Error("TimelyChatbot.init: apiKey가 필요합니다");
  const A = document.createElement("timely-chatbot");
  return A.apiBaseUrl = t.apiBaseUrl ?? Zw, A.apiKey = t.apiKey, A.browserId = qw(), t.getAccessToken && (A.getAccessToken = t.getAccessToken), t.position === "bottom-left" && (A.dataset.position = "bottom-left"), t.theme && (A.themeOverride = t.theme), (t.mountTo ?? document.body).appendChild(A), {
    destroy: () => A.remove()
  };
}
window.TimelyChatbot = { init: jw };
export {
  jw as init
};
//# sourceMappingURL=widget.mjs.map
