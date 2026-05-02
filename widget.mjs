var pl = Object.defineProperty;
var wl = (e, A, t) => A in e ? pl(e, A, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[A] = t;
var V = (e, A, t) => wl(e, typeof A != "symbol" ? A + "" : A, t);
/*! @license DOMPurify 3.4.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.1/LICENSE */
const {
  entries: Oo,
  setPrototypeOf: ii,
  isFrozen: dl,
  getPrototypeOf: Ql,
  getOwnPropertyDescriptor: Cl
} = Object;
let {
  freeze: mA,
  seal: DA,
  create: Ge
} = Object, {
  apply: Vn,
  construct: $n
} = typeof Reflect < "u" && Reflect;
mA || (mA = function(A) {
  return A;
});
DA || (DA = function(A) {
  return A;
});
Vn || (Vn = function(A, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    n[s - 2] = arguments[s];
  return A.apply(t, n);
});
$n || ($n = function(A) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return new A(...r);
});
const et = sA(Array.prototype.forEach), Ul = sA(Array.prototype.lastIndexOf), oi = sA(Array.prototype.pop), tt = sA(Array.prototype.push), Fl = sA(Array.prototype.splice), CA = Array.isArray, ut = sA(String.prototype.toLowerCase), fn = sA(String.prototype.toString), ai = sA(String.prototype.match), De = sA(String.prototype.replace), li = sA(String.prototype.indexOf), ml = sA(String.prototype.trim), El = sA(Number.prototype.toString), vl = sA(Boolean.prototype.toString), Bi = typeof BigInt > "u" ? null : sA(BigInt.prototype.toString), ci = typeof Symbol > "u" ? null : sA(Symbol.prototype.toString), j = sA(Object.prototype.hasOwnProperty), rt = sA(Object.prototype.toString), cA = sA(RegExp.prototype.test), $t = yl(TypeError);
function sA(e) {
  return function(A) {
    A instanceof RegExp && (A.lastIndex = 0);
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      r[n - 1] = arguments[n];
    return Vn(e, A, r);
  };
}
function yl(e) {
  return function() {
    for (var A = arguments.length, t = new Array(A), r = 0; r < A; r++)
      t[r] = arguments[r];
    return $n(e, t);
  };
}
function x(e, A) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ut;
  if (ii && ii(e, null), !CA(A))
    return e;
  let r = A.length;
  for (; r--; ) {
    let n = A[r];
    if (typeof n == "string") {
      const s = t(n);
      s !== n && (dl(A) || (A[r] = s), n = s);
    }
    e[n] = !0;
  }
  return e;
}
function Hl(e) {
  for (let A = 0; A < e.length; A++)
    j(e, A) || (e[A] = null);
  return e;
}
function vA(e) {
  const A = Ge(null);
  for (const [t, r] of Oo(e))
    j(e, t) && (CA(r) ? A[t] = Hl(r) : r && typeof r == "object" && r.constructor === Object ? A[t] = vA(r) : A[t] = r);
  return A;
}
function Il(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return El(e);
    case "boolean":
      return vl(e);
    case "bigint":
      return Bi ? Bi(e) : "0";
    case "symbol":
      return ci ? ci(e) : "Symbol()";
    case "undefined":
      return rt(e);
    case "function":
    case "object": {
      if (e === null)
        return rt(e);
      const A = e, t = Pe(A, "toString");
      if (typeof t == "function") {
        const r = t(A);
        return typeof r == "string" ? r : rt(r);
      }
      return rt(e);
    }
    default:
      return rt(e);
  }
}
function Pe(e, A) {
  for (; e !== null; ) {
    const r = Cl(e, A);
    if (r) {
      if (r.get)
        return sA(r.get);
      if (typeof r.value == "function")
        return sA(r.value);
    }
    e = Ql(e);
  }
  function t() {
    return null;
  }
  return t;
}
function bl(e) {
  try {
    return cA(e, ""), !0;
  } catch {
    return !1;
  }
}
const ui = mA(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), pn = mA(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), wn = mA(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), xl = mA(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), dn = mA(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Tl = mA(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), gi = mA(["#text"]), hi = mA(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Qn = mA(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), fi = mA(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Xt = mA(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ll = DA(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Sl = DA(/<%[\w\W]*|[\w\W]*%>/gm), Kl = DA(/\$\{[\w\W]*/gm), Dl = DA(/^data-[\-\w.\u00B7-\uFFFF]+$/), Rl = DA(/^aria-[\-\w]+$/), Mo = DA(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), kl = DA(/^(?:\w+script|data):/i), _l = DA(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), No = DA(/^html$/i), Ol = DA(/^[a-z][.\w]*(-[.\w]+)+$/i);
var pi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Rl,
  ATTR_WHITESPACE: _l,
  CUSTOM_ELEMENT: Ol,
  DATA_ATTR: Dl,
  DOCTYPE_NAME: No,
  ERB_EXPR: Sl,
  IS_ALLOWED_URI: Mo,
  IS_SCRIPT_OR_DATA: kl,
  MUSTACHE_EXPR: Ll,
  TMPLIT_EXPR: Kl
});
const nt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Ml = function() {
  return typeof window > "u" ? null : window;
}, Nl = function(A, t) {
  if (typeof A != "object" || typeof A.createPolicy != "function")
    return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  t && t.hasAttribute(n) && (r = t.getAttribute(n));
  const s = "dompurify" + (r ? "#" + r : "");
  try {
    return A.createPolicy(s, {
      createHTML(i) {
        return i;
      },
      createScriptURL(i) {
        return i;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, wi = function() {
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
function Go() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ml();
  const A = (y) => Go(y);
  if (A.version = "3.4.1", A.removed = [], !e || !e.document || e.document.nodeType !== nt.document || !e.Element)
    return A.isSupported = !1, A;
  let {
    document: t
  } = e;
  const r = t, n = r.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: i,
    Node: o,
    Element: a,
    NodeFilter: l,
    NamedNodeMap: B = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: c,
    DOMParser: g,
    trustedTypes: f
  } = e, h = a.prototype, w = Pe(h, "cloneNode"), I = Pe(h, "remove"), F = Pe(h, "nextSibling"), C = Pe(h, "childNodes"), T = Pe(h, "parentNode");
  if (typeof i == "function") {
    const y = t.createElement("template");
    y.content && y.content.ownerDocument && (t = y.content.ownerDocument);
  }
  let E, v = "";
  const {
    implementation: d,
    createNodeIterator: b,
    createDocumentFragment: L,
    getElementsByTagName: H
  } = t, {
    importNode: Z
  } = r;
  let k = wi();
  A.isSupported = typeof Oo == "function" && typeof T == "function" && d && d.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: aA,
    ERB_EXPR: K,
    TMPLIT_EXPR: q,
    DATA_ATTR: NA,
    ARIA_ATTR: hA,
    IS_SCRIPT_OR_DATA: fA,
    ATTR_WHITESPACE: GA,
    CUSTOM_ELEMENT: IA
  } = pi;
  let {
    IS_ALLOWED_URI: RA
  } = pi, $ = null;
  const PA = x({}, [...ui, ...pn, ...wn, ...dn, ...gi]);
  let P = null;
  const VA = x({}, [...hi, ...Qn, ...fi, ...Xt]);
  let R = Object.seal(Ge(null, {
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
  })), bA = null, $A = null;
  const se = Object.seal(Ge(null, {
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
  let Os = !0, An = !0, Ms = !1, Ns = !0, we = !1, qe = !0, de = !1, en = !1, tn = !1, Te = !1, Nt = !1, Gt = !1, Gs = !0, Ps = !1;
  const Vs = "user-content-";
  let rn = !0, je = !1, Le = {}, XA = null;
  const nn = x({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let $s = null;
  const Xs = x({}, ["audio", "video", "img", "source", "image", "track"]);
  let sn = null;
  const Js = x({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Pt = "http://www.w3.org/1998/Math/MathML", Vt = "http://www.w3.org/2000/svg", JA = "http://www.w3.org/1999/xhtml";
  let Se = JA, on = !1, an = null;
  const ll = x({}, [Pt, Vt, JA], fn);
  let ln = x({}, ["mi", "mo", "mn", "ms", "mtext"]), Bn = x({}, ["annotation-xml"]);
  const Bl = x({}, ["title", "style", "font", "a", "script"]);
  let At = null;
  const cl = ["application/xhtml+xml", "text/html"], ul = "text/html";
  let iA = null, Ke = null;
  const gl = t.createElement("form"), Ws = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, cn = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ke && Ke === u)
      return;
    (!u || typeof u != "object") && (u = {}), u = vA(u), At = // eslint-disable-next-line unicorn/prefer-includes
    cl.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? ul : u.PARSER_MEDIA_TYPE, iA = At === "application/xhtml+xml" ? fn : ut, $ = j(u, "ALLOWED_TAGS") && CA(u.ALLOWED_TAGS) ? x({}, u.ALLOWED_TAGS, iA) : PA, P = j(u, "ALLOWED_ATTR") && CA(u.ALLOWED_ATTR) ? x({}, u.ALLOWED_ATTR, iA) : VA, an = j(u, "ALLOWED_NAMESPACES") && CA(u.ALLOWED_NAMESPACES) ? x({}, u.ALLOWED_NAMESPACES, fn) : ll, sn = j(u, "ADD_URI_SAFE_ATTR") && CA(u.ADD_URI_SAFE_ATTR) ? x(vA(Js), u.ADD_URI_SAFE_ATTR, iA) : Js, $s = j(u, "ADD_DATA_URI_TAGS") && CA(u.ADD_DATA_URI_TAGS) ? x(vA(Xs), u.ADD_DATA_URI_TAGS, iA) : Xs, XA = j(u, "FORBID_CONTENTS") && CA(u.FORBID_CONTENTS) ? x({}, u.FORBID_CONTENTS, iA) : nn, bA = j(u, "FORBID_TAGS") && CA(u.FORBID_TAGS) ? x({}, u.FORBID_TAGS, iA) : vA({}), $A = j(u, "FORBID_ATTR") && CA(u.FORBID_ATTR) ? x({}, u.FORBID_ATTR, iA) : vA({}), Le = j(u, "USE_PROFILES") ? u.USE_PROFILES && typeof u.USE_PROFILES == "object" ? vA(u.USE_PROFILES) : u.USE_PROFILES : !1, Os = u.ALLOW_ARIA_ATTR !== !1, An = u.ALLOW_DATA_ATTR !== !1, Ms = u.ALLOW_UNKNOWN_PROTOCOLS || !1, Ns = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, we = u.SAFE_FOR_TEMPLATES || !1, qe = u.SAFE_FOR_XML !== !1, de = u.WHOLE_DOCUMENT || !1, Te = u.RETURN_DOM || !1, Nt = u.RETURN_DOM_FRAGMENT || !1, Gt = u.RETURN_TRUSTED_TYPE || !1, tn = u.FORCE_BODY || !1, Gs = u.SANITIZE_DOM !== !1, Ps = u.SANITIZE_NAMED_PROPS || !1, rn = u.KEEP_CONTENT !== !1, je = u.IN_PLACE || !1, RA = bl(u.ALLOWED_URI_REGEXP) ? u.ALLOWED_URI_REGEXP : Mo, Se = typeof u.NAMESPACE == "string" ? u.NAMESPACE : JA, ln = j(u, "MATHML_TEXT_INTEGRATION_POINTS") && u.MATHML_TEXT_INTEGRATION_POINTS && typeof u.MATHML_TEXT_INTEGRATION_POINTS == "object" ? vA(u.MATHML_TEXT_INTEGRATION_POINTS) : x({}, ["mi", "mo", "mn", "ms", "mtext"]), Bn = j(u, "HTML_INTEGRATION_POINTS") && u.HTML_INTEGRATION_POINTS && typeof u.HTML_INTEGRATION_POINTS == "object" ? vA(u.HTML_INTEGRATION_POINTS) : x({}, ["annotation-xml"]);
    const p = j(u, "CUSTOM_ELEMENT_HANDLING") && u.CUSTOM_ELEMENT_HANDLING && typeof u.CUSTOM_ELEMENT_HANDLING == "object" ? vA(u.CUSTOM_ELEMENT_HANDLING) : Ge(null);
    if (R = Ge(null), j(p, "tagNameCheck") && Ws(p.tagNameCheck) && (R.tagNameCheck = p.tagNameCheck), j(p, "attributeNameCheck") && Ws(p.attributeNameCheck) && (R.attributeNameCheck = p.attributeNameCheck), j(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (R.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), we && (An = !1), Nt && (Te = !0), Le && ($ = x({}, gi), P = Ge(null), Le.html === !0 && (x($, ui), x(P, hi)), Le.svg === !0 && (x($, pn), x(P, Qn), x(P, Xt)), Le.svgFilters === !0 && (x($, wn), x(P, Qn), x(P, Xt)), Le.mathMl === !0 && (x($, dn), x(P, fi), x(P, Xt))), se.tagCheck = null, se.attributeCheck = null, j(u, "ADD_TAGS") && (typeof u.ADD_TAGS == "function" ? se.tagCheck = u.ADD_TAGS : CA(u.ADD_TAGS) && ($ === PA && ($ = vA($)), x($, u.ADD_TAGS, iA))), j(u, "ADD_ATTR") && (typeof u.ADD_ATTR == "function" ? se.attributeCheck = u.ADD_ATTR : CA(u.ADD_ATTR) && (P === VA && (P = vA(P)), x(P, u.ADD_ATTR, iA))), j(u, "ADD_URI_SAFE_ATTR") && CA(u.ADD_URI_SAFE_ATTR) && x(sn, u.ADD_URI_SAFE_ATTR, iA), j(u, "FORBID_CONTENTS") && CA(u.FORBID_CONTENTS) && (XA === nn && (XA = vA(XA)), x(XA, u.FORBID_CONTENTS, iA)), j(u, "ADD_FORBID_CONTENTS") && CA(u.ADD_FORBID_CONTENTS) && (XA === nn && (XA = vA(XA)), x(XA, u.ADD_FORBID_CONTENTS, iA)), rn && ($["#text"] = !0), de && x($, ["html", "head", "body"]), $.table && (x($, ["tbody"]), delete bA.tbody), u.TRUSTED_TYPES_POLICY) {
      if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw $t('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw $t('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      E = u.TRUSTED_TYPES_POLICY, v = E.createHTML("");
    } else
      E === void 0 && (E = Nl(f, n)), E !== null && typeof v == "string" && (v = E.createHTML(""));
    mA && mA(u), Ke = u;
  }, Ys = x({}, [...pn, ...wn, ...xl]), zs = x({}, [...dn, ...Tl]), hl = function(u) {
    let p = T(u);
    (!p || !p.tagName) && (p = {
      namespaceURI: Se,
      tagName: "template"
    });
    const m = ut(u.tagName), Y = ut(p.tagName);
    return an[u.namespaceURI] ? u.namespaceURI === Vt ? p.namespaceURI === JA ? m === "svg" : p.namespaceURI === Pt ? m === "svg" && (Y === "annotation-xml" || ln[Y]) : !!Ys[m] : u.namespaceURI === Pt ? p.namespaceURI === JA ? m === "math" : p.namespaceURI === Vt ? m === "math" && Bn[Y] : !!zs[m] : u.namespaceURI === JA ? p.namespaceURI === Vt && !Bn[Y] || p.namespaceURI === Pt && !ln[Y] ? !1 : !zs[m] && (Bl[m] || !Ys[m]) : !!(At === "application/xhtml+xml" && an[u.namespaceURI]) : !1;
  }, kA = function(u) {
    tt(A.removed, {
      element: u
    });
    try {
      T(u).removeChild(u);
    } catch {
      I(u);
    }
  }, Qe = function(u, p) {
    try {
      tt(A.removed, {
        attribute: p.getAttributeNode(u),
        from: p
      });
    } catch {
      tt(A.removed, {
        attribute: null,
        from: p
      });
    }
    if (p.removeAttribute(u), u === "is")
      if (Te || Nt)
        try {
          kA(p);
        } catch {
        }
      else
        try {
          p.setAttribute(u, "");
        } catch {
        }
  }, Zs = function(u) {
    let p = null, m = null;
    if (tn)
      u = "<remove></remove>" + u;
    else {
      const tA = ai(u, /^[\r\n\t ]+/);
      m = tA && tA[0];
    }
    At === "application/xhtml+xml" && Se === JA && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const Y = E ? E.createHTML(u) : u;
    if (Se === JA)
      try {
        p = new g().parseFromString(Y, At);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = d.createDocument(Se, "template", null);
      try {
        p.documentElement.innerHTML = on ? v : Y;
      } catch {
      }
    }
    const pA = p.body || p.documentElement;
    return u && m && pA.insertBefore(t.createTextNode(m), pA.childNodes[0] || null), Se === JA ? H.call(p, de ? "html" : "body")[0] : de ? p.documentElement : pA;
  }, qs = function(u) {
    return b.call(
      u.ownerDocument || u,
      u,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, un = function(u) {
    return u instanceof c && (typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || !(u.attributes instanceof B) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function");
  }, gn = function(u) {
    return typeof o == "function" && u instanceof o;
  };
  function qA(y, u, p) {
    et(y, (m) => {
      m.call(A, u, p, Ke);
    });
  }
  const js = function(u) {
    let p = null;
    if (qA(k.beforeSanitizeElements, u, null), un(u))
      return kA(u), !0;
    const m = iA(u.nodeName);
    if (qA(k.uponSanitizeElement, u, {
      tagName: m,
      allowedTags: $
    }), qe && u.hasChildNodes() && !gn(u.firstElementChild) && cA(/<[/\w!]/g, u.innerHTML) && cA(/<[/\w!]/g, u.textContent) || qe && u.namespaceURI === JA && m === "style" && gn(u.firstElementChild) || u.nodeType === nt.progressingInstruction || qe && u.nodeType === nt.comment && cA(/<[/\w]/g, u.data))
      return kA(u), !0;
    if (bA[m] || !(se.tagCheck instanceof Function && se.tagCheck(m)) && !$[m]) {
      if (!bA[m] && ei(m) && (R.tagNameCheck instanceof RegExp && cA(R.tagNameCheck, m) || R.tagNameCheck instanceof Function && R.tagNameCheck(m)))
        return !1;
      if (rn && !XA[m]) {
        const Y = T(u) || u.parentNode, pA = C(u) || u.childNodes;
        if (pA && Y) {
          const tA = pA.length;
          for (let EA = tA - 1; EA >= 0; --EA) {
            const xA = w(pA[EA], !0);
            Y.insertBefore(xA, F(u));
          }
        }
      }
      return kA(u), !0;
    }
    return u instanceof a && !hl(u) || (m === "noscript" || m === "noembed" || m === "noframes") && cA(/<\/no(script|embed|frames)/i, u.innerHTML) ? (kA(u), !0) : (we && u.nodeType === nt.text && (p = u.textContent, et([aA, K, q], (Y) => {
      p = De(p, Y, " ");
    }), u.textContent !== p && (tt(A.removed, {
      element: u.cloneNode()
    }), u.textContent = p)), qA(k.afterSanitizeElements, u, null), !1);
  }, Ai = function(u, p, m) {
    if ($A[p] || Gs && (p === "id" || p === "name") && (m in t || m in gl))
      return !1;
    if (!(An && !$A[p] && cA(NA, p))) {
      if (!(Os && cA(hA, p))) {
        if (!(se.attributeCheck instanceof Function && se.attributeCheck(p, u))) {
          if (!P[p] || $A[p]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(ei(u) && (R.tagNameCheck instanceof RegExp && cA(R.tagNameCheck, u) || R.tagNameCheck instanceof Function && R.tagNameCheck(u)) && (R.attributeNameCheck instanceof RegExp && cA(R.attributeNameCheck, p) || R.attributeNameCheck instanceof Function && R.attributeNameCheck(p, u)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              p === "is" && R.allowCustomizedBuiltInElements && (R.tagNameCheck instanceof RegExp && cA(R.tagNameCheck, m) || R.tagNameCheck instanceof Function && R.tagNameCheck(m)))
            ) return !1;
          } else if (!sn[p]) {
            if (!cA(RA, De(m, GA, ""))) {
              if (!((p === "src" || p === "xlink:href" || p === "href") && u !== "script" && li(m, "data:") === 0 && $s[u])) {
                if (!(Ms && !cA(fA, De(m, GA, "")))) {
                  if (m)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, fl = x({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ei = function(u) {
    return !fl[ut(u)] && cA(IA, u);
  }, ti = function(u) {
    qA(k.beforeSanitizeAttributes, u, null);
    const {
      attributes: p
    } = u;
    if (!p || un(u))
      return;
    const m = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: P,
      forceKeepAttr: void 0
    };
    let Y = p.length;
    for (; Y--; ) {
      const pA = p[Y], {
        name: tA,
        namespaceURI: EA,
        value: xA
      } = pA, _A = iA(tA), hn = xA;
      let lA = tA === "value" ? hn : ml(hn);
      if (m.attrName = _A, m.attrValue = lA, m.keepAttr = !0, m.forceKeepAttr = void 0, qA(k.uponSanitizeAttribute, u, m), lA = m.attrValue, Ps && (_A === "id" || _A === "name") && li(lA, Vs) !== 0 && (Qe(tA, u), lA = Vs + lA), qe && cA(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, lA)) {
        Qe(tA, u);
        continue;
      }
      if (_A === "attributename" && ai(lA, "href")) {
        Qe(tA, u);
        continue;
      }
      if (m.forceKeepAttr)
        continue;
      if (!m.keepAttr) {
        Qe(tA, u);
        continue;
      }
      if (!Ns && cA(/\/>/i, lA)) {
        Qe(tA, u);
        continue;
      }
      we && et([aA, K, q], (si) => {
        lA = De(lA, si, " ");
      });
      const ni = iA(u.nodeName);
      if (!Ai(ni, _A, lA)) {
        Qe(tA, u);
        continue;
      }
      if (E && typeof f == "object" && typeof f.getAttributeType == "function" && !EA)
        switch (f.getAttributeType(ni, _A)) {
          case "TrustedHTML": {
            lA = E.createHTML(lA);
            break;
          }
          case "TrustedScriptURL": {
            lA = E.createScriptURL(lA);
            break;
          }
        }
      if (lA !== hn)
        try {
          EA ? u.setAttributeNS(EA, tA, lA) : u.setAttribute(tA, lA), un(u) ? kA(u) : oi(A.removed);
        } catch {
          Qe(tA, u);
        }
    }
    qA(k.afterSanitizeAttributes, u, null);
  }, ri = function(u) {
    let p = null;
    const m = qs(u);
    for (qA(k.beforeSanitizeShadowDOM, u, null); p = m.nextNode(); )
      qA(k.uponSanitizeShadowNode, p, null), js(p), ti(p), p.content instanceof s && ri(p.content);
    qA(k.afterSanitizeShadowDOM, u, null);
  };
  return A.sanitize = function(y) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, m = null, Y = null, pA = null;
    if (on = !y, on && (y = "<!-->"), typeof y != "string" && !gn(y) && (y = Il(y), typeof y != "string"))
      throw $t("dirty is not a string, aborting");
    if (!A.isSupported)
      return y;
    if (en || cn(u), A.removed = [], typeof y == "string" && (je = !1), je) {
      const xA = y.nodeName;
      if (typeof xA == "string") {
        const _A = iA(xA);
        if (!$[_A] || bA[_A])
          throw $t("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (y instanceof o)
      p = Zs("<!---->"), m = p.ownerDocument.importNode(y, !0), m.nodeType === nt.element && m.nodeName === "BODY" || m.nodeName === "HTML" ? p = m : p.appendChild(m);
    else {
      if (!Te && !we && !de && // eslint-disable-next-line unicorn/prefer-includes
      y.indexOf("<") === -1)
        return E && Gt ? E.createHTML(y) : y;
      if (p = Zs(y), !p)
        return Te ? null : Gt ? v : "";
    }
    p && tn && kA(p.firstChild);
    const tA = qs(je ? y : p);
    for (; Y = tA.nextNode(); )
      js(Y), ti(Y), Y.content instanceof s && ri(Y.content);
    if (je)
      return y;
    if (Te) {
      if (we) {
        p.normalize();
        let xA = p.innerHTML;
        et([aA, K, q], (_A) => {
          xA = De(xA, _A, " ");
        }), p.innerHTML = xA;
      }
      if (Nt)
        for (pA = L.call(p.ownerDocument); p.firstChild; )
          pA.appendChild(p.firstChild);
      else
        pA = p;
      return (P.shadowroot || P.shadowrootmode) && (pA = Z.call(r, pA, !0)), pA;
    }
    let EA = de ? p.outerHTML : p.innerHTML;
    return de && $["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && cA(No, p.ownerDocument.doctype.name) && (EA = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + EA), we && et([aA, K, q], (xA) => {
      EA = De(EA, xA, " ");
    }), E && Gt ? E.createHTML(EA) : EA;
  }, A.setConfig = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    cn(y), en = !0;
  }, A.clearConfig = function() {
    Ke = null, en = !1;
  }, A.isValidAttribute = function(y, u, p) {
    Ke || cn({});
    const m = iA(y), Y = iA(u);
    return Ai(m, Y, p);
  }, A.addHook = function(y, u) {
    typeof u == "function" && tt(k[y], u);
  }, A.removeHook = function(y, u) {
    if (u !== void 0) {
      const p = Ul(k[y], u);
      return p === -1 ? void 0 : Fl(k[y], p, 1)[0];
    }
    return oi(k[y]);
  }, A.removeHooks = function(y) {
    k[y] = [];
  }, A.removeAllHooks = function() {
    k = wi();
  }, A;
}
var Gl = Go();
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Xn = function(e, A) {
  return Xn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, Xn(e, A);
};
function MA(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  Xn(e, A);
  function t() {
    this.constructor = e;
  }
  e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var Jn = function() {
  return Jn = Object.assign || function(A) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (A[s] = t[s]);
    }
    return A;
  }, Jn.apply(this, arguments);
};
function UA(e, A, t, r) {
  function n(s) {
    return s instanceof t ? s : new t(function(i) {
      i(s);
    });
  }
  return new (t || (t = Promise))(function(s, i) {
    function o(B) {
      try {
        l(r.next(B));
      } catch (c) {
        i(c);
      }
    }
    function a(B) {
      try {
        l(r.throw(B));
      } catch (c) {
        i(c);
      }
    }
    function l(B) {
      B.done ? s(B.value) : n(B.value).then(o, a);
    }
    l((r = r.apply(e, [])).next());
  });
}
function dA(e, A) {
  var t = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, n, s, i;
  return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function o(l) {
    return function(B) {
      return a([l, B]);
    };
  }
  function a(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (r = 1, n && (s = l[0] & 2 ? n.return : l[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, l[1])).done) return s;
      switch (n = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
        case 0:
        case 1:
          s = l;
          break;
        case 4:
          return t.label++, { value: l[1], done: !1 };
        case 5:
          t.label++, n = l[1], l = [0];
          continue;
        case 7:
          l = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (s = t.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            t = 0;
            continue;
          }
          if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
            t.label = l[1];
            break;
          }
          if (l[0] === 6 && t.label < s[1]) {
            t.label = s[1], s = l;
            break;
          }
          if (s && t.label < s[2]) {
            t.label = s[2], t.ops.push(l);
            break;
          }
          s[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      l = A.call(e, t);
    } catch (B) {
      l = [6, B], n = 0;
    } finally {
      r = s = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Jt(e, A, t) {
  if (arguments.length === 2) for (var r = 0, n = A.length, s; r < n; r++)
    (s || !(r in A)) && (s || (s = Array.prototype.slice.call(A, 0, r)), s[r] = A[r]);
  return e.concat(s || A);
}
var ne = (
  /** @class */
  (function() {
    function e(A, t, r, n) {
      this.left = A, this.top = t, this.width = r, this.height = n;
    }
    return e.prototype.add = function(A, t, r, n) {
      return new e(this.left + A, this.top + t, this.width + r, this.height + n);
    }, e.fromClientRect = function(A, t) {
      return new e(t.left + A.windowBounds.left, t.top + A.windowBounds.top, t.width, t.height);
    }, e.fromDOMRectList = function(A, t) {
      var r = Array.from(t).find(function(n) {
        return n.width !== 0;
      });
      return r ? new e(r.left + A.windowBounds.left, r.top + A.windowBounds.top, r.width, r.height) : e.EMPTY;
    }, e.EMPTY = new e(0, 0, 0, 0), e;
  })()
), Nr = function(e, A) {
  return ne.fromClientRect(e, A.getBoundingClientRect());
}, Pl = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), n = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new ne(0, 0, r, n);
}, Gr = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = e.charCodeAt(t++);
      (s & 64512) === 56320 ? A.push(((n & 1023) << 10) + (s & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, eA = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], n = -1, s = ""; ++n < t; ) {
    var i = e[n];
    i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (s += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return s;
}, di = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Vl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Wt = 0; Wt < di.length; Wt++)
  Vl[di.charCodeAt(Wt)] = Wt;
var Qi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", gt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Yt = 0; Yt < Qi.length; Yt++)
  gt[Qi.charCodeAt(Yt)] = Yt;
var $l = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, s, i, o, a;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), B = Array.isArray(l) ? l : new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    s = gt[e.charCodeAt(r)], i = gt[e.charCodeAt(r + 1)], o = gt[e.charCodeAt(r + 2)], a = gt[e.charCodeAt(r + 3)], B[n++] = s << 2 | i >> 4, B[n++] = (i & 15) << 4 | o >> 2, B[n++] = (o & 3) << 6 | a & 63;
  return l;
}, Xl = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, Jl = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, ve = 5, Qs = 11, Cn = 2, Wl = Qs - ve, Po = 65536 >> ve, Yl = 1 << ve, Un = Yl - 1, zl = 1024 >> ve, Zl = Po + zl, ql = Zl, jl = 32, AB = ql + jl, eB = 65536 >> Qs, tB = 1 << Wl, rB = tB - 1, Ci = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, nB = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, sB = function(e, A) {
  var t = $l(e), r = Array.isArray(t) ? Jl(t) : new Uint32Array(t), n = Array.isArray(t) ? Xl(t) : new Uint16Array(t), s = 24, i = Ci(n, s / 2, r[4] / 2), o = r[5] === 2 ? Ci(n, (s + r[4]) / 2) : nB(r, Math.ceil((s + r[4]) / 4));
  return new iB(r[0], r[1], r[2], r[3], i, o);
}, iB = (
  /** @class */
  (function() {
    function e(A, t, r, n, s, i) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = s, this.data = i;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> ve], t = (t << Cn) + (A & Un), this.data[t];
        if (A <= 65535)
          return t = this.index[Po + (A - 55296 >> ve)], t = (t << Cn) + (A & Un), this.data[t];
        if (A < this.highStart)
          return t = AB - eB + (A >> Qs), t = this.index[t], t += A >> ve & rB, t = this.index[t], t = (t << Cn) + (A & Un), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  })()
), Ui = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", oB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var zt = 0; zt < Ui.length; zt++)
  oB[Ui.charCodeAt(zt)] = zt;
var aB = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Fi = 50, lB = 1, Vo = 2, $o = 3, BB = 4, cB = 5, mi = 7, Xo = 8, Ei = 9, Be = 10, Wn = 11, vi = 12, Yn = 13, uB = 14, ht = 15, zn = 16, Zt = 17, st = 18, gB = 19, yi = 20, Zn = 21, it = 22, Fn = 23, Re = 24, HA = 25, ft = 26, pt = 27, ke = 28, hB = 29, Fe = 30, fB = 31, qt = 32, jt = 33, qn = 34, jn = 35, As = 36, xt = 37, es = 38, Cr = 39, Ur = 40, mn = 41, Jo = 42, pB = 43, wB = [9001, 65288], Wo = "!", S = "×", Ar = "÷", ts = sB(aB), jA = [Fe, As], rs = [lB, Vo, $o, cB], Yo = [Be, Xo], Hi = [pt, ft], dB = rs.concat(Yo), Ii = [es, Cr, Ur, qn, jn], QB = [ht, Yn], CB = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], n = [];
  return e.forEach(function(s, i) {
    var o = ts.get(s);
    if (o > Fi ? (n.push(!0), o -= Fi) : n.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(s) !== -1)
      return r.push(i), t.push(zn);
    if (o === BB || o === Wn) {
      if (i === 0)
        return r.push(i), t.push(Fe);
      var a = t[i - 1];
      return dB.indexOf(a) === -1 ? (r.push(r[i - 1]), t.push(a)) : (r.push(i), t.push(Fe));
    }
    if (r.push(i), o === fB)
      return t.push(A === "strict" ? Zn : xt);
    if (o === Jo || o === hB)
      return t.push(Fe);
    if (o === pB)
      return s >= 131072 && s <= 196605 || s >= 196608 && s <= 262141 ? t.push(xt) : t.push(Fe);
    t.push(o);
  }), [r, t, n];
}, En = function(e, A, t, r) {
  var n = r[t];
  if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
    for (var s = t; s <= r.length; ) {
      s++;
      var i = r[s];
      if (i === A)
        return !0;
      if (i !== Be)
        break;
    }
  if (n === Be)
    for (var s = t; s > 0; ) {
      s--;
      var o = r[s];
      if (Array.isArray(e) ? e.indexOf(o) !== -1 : e === o)
        for (var a = t; a <= r.length; ) {
          a++;
          var i = r[a];
          if (i === A)
            return !0;
          if (i !== Be)
            break;
        }
      if (o !== Be)
        break;
    }
  return !1;
}, bi = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r === Be)
      t--;
    else
      return r;
  }
  return 0;
}, UB = function(e, A, t, r, n) {
  if (t[r] === 0)
    return S;
  var s = r - 1;
  if (Array.isArray(n) && n[s] === !0)
    return S;
  var i = s - 1, o = s + 1, a = A[s], l = i >= 0 ? A[i] : 0, B = A[o];
  if (a === Vo && B === $o)
    return S;
  if (rs.indexOf(a) !== -1)
    return Wo;
  if (rs.indexOf(B) !== -1 || Yo.indexOf(B) !== -1)
    return S;
  if (bi(s, A) === Xo)
    return Ar;
  if (ts.get(e[s]) === Wn || (a === qt || a === jt) && ts.get(e[o]) === Wn || a === mi || B === mi || a === Ei || [Be, Yn, ht].indexOf(a) === -1 && B === Ei || [Zt, st, gB, Re, ke].indexOf(B) !== -1 || bi(s, A) === it || En(Fn, it, s, A) || En([Zt, st], Zn, s, A) || En(vi, vi, s, A))
    return S;
  if (a === Be)
    return Ar;
  if (a === Fn || B === Fn)
    return S;
  if (B === zn || a === zn)
    return Ar;
  if ([Yn, ht, Zn].indexOf(B) !== -1 || a === uB || l === As && QB.indexOf(a) !== -1 || a === ke && B === As || B === yi || jA.indexOf(B) !== -1 && a === HA || jA.indexOf(a) !== -1 && B === HA || a === pt && [xt, qt, jt].indexOf(B) !== -1 || [xt, qt, jt].indexOf(a) !== -1 && B === ft || jA.indexOf(a) !== -1 && Hi.indexOf(B) !== -1 || Hi.indexOf(a) !== -1 && jA.indexOf(B) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [pt, ft].indexOf(a) !== -1 && (B === HA || [it, ht].indexOf(B) !== -1 && A[o + 1] === HA) || // ( OP | HY ) × NU
  [it, ht].indexOf(a) !== -1 && B === HA || // NU ×	(NU | SY | IS)
  a === HA && [HA, ke, Re].indexOf(B) !== -1)
    return S;
  if ([HA, ke, Re, Zt, st].indexOf(B) !== -1)
    for (var c = s; c >= 0; ) {
      var g = A[c];
      if (g === HA)
        return S;
      if ([ke, Re].indexOf(g) !== -1)
        c--;
      else
        break;
    }
  if ([pt, ft].indexOf(B) !== -1)
    for (var c = [Zt, st].indexOf(a) !== -1 ? i : s; c >= 0; ) {
      var g = A[c];
      if (g === HA)
        return S;
      if ([ke, Re].indexOf(g) !== -1)
        c--;
      else
        break;
    }
  if (es === a && [es, Cr, qn, jn].indexOf(B) !== -1 || [Cr, qn].indexOf(a) !== -1 && [Cr, Ur].indexOf(B) !== -1 || [Ur, jn].indexOf(a) !== -1 && B === Ur || Ii.indexOf(a) !== -1 && [yi, ft].indexOf(B) !== -1 || Ii.indexOf(B) !== -1 && a === pt || jA.indexOf(a) !== -1 && jA.indexOf(B) !== -1 || a === Re && jA.indexOf(B) !== -1 || jA.concat(HA).indexOf(a) !== -1 && B === it && wB.indexOf(e[o]) === -1 || jA.concat(HA).indexOf(B) !== -1 && a === st)
    return S;
  if (a === mn && B === mn) {
    for (var f = t[s], h = 1; f > 0 && (f--, A[f] === mn); )
      h++;
    if (h % 2 !== 0)
      return S;
  }
  return a === qt && B === jt ? S : Ar;
}, FB = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = CB(e, A.lineBreak), r = t[0], n = t[1], s = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function(o) {
    return [HA, Fe, Jo].indexOf(o) !== -1 ? xt : o;
  }));
  var i = A.wordBreak === "keep-all" ? s.map(function(o, a) {
    return o && e[a] >= 19968 && e[a] <= 40959;
  }) : void 0;
  return [r, n, i];
}, mB = (
  /** @class */
  (function() {
    function e(A, t, r, n) {
      this.codePoints = A, this.required = t === Wo, this.start = r, this.end = n;
    }
    return e.prototype.slice = function() {
      return eA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  })()
), EB = function(e, A) {
  var t = Gr(e), r = FB(t, A), n = r[0], s = r[1], i = r[2], o = t.length, a = 0, l = 0;
  return {
    next: function() {
      if (l >= o)
        return { done: !0, value: null };
      for (var B = S; l < o && (B = UB(t, s, n, ++l, i)) === S; )
        ;
      if (B !== S || l === o) {
        var c = new mB(t, B, a, l);
        return a = l, { value: c, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, vB = 1, yB = 2, Rt = 4, xi = 8, yr = 10, Ti = 47, Ct = 92, HB = 9, IB = 32, er = 34, ot = 61, bB = 35, xB = 36, TB = 37, tr = 39, rr = 40, at = 41, LB = 95, yA = 45, SB = 33, KB = 60, DB = 62, RB = 64, kB = 91, _B = 93, OB = 61, MB = 123, nr = 63, NB = 125, Li = 124, GB = 126, PB = 128, Si = 65533, vn = 42, me = 43, VB = 44, $B = 58, XB = 59, Tt = 46, JB = 0, WB = 8, YB = 11, zB = 14, ZB = 31, qB = 127, WA = -1, zo = 48, Zo = 97, qo = 101, jB = 102, Ac = 117, ec = 122, jo = 65, Aa = 69, ea = 70, tc = 85, rc = 90, QA = function(e) {
  return e >= zo && e <= 57;
}, nc = function(e) {
  return e >= 55296 && e <= 57343;
}, _e = function(e) {
  return QA(e) || e >= jo && e <= ea || e >= Zo && e <= jB;
}, sc = function(e) {
  return e >= Zo && e <= ec;
}, ic = function(e) {
  return e >= jo && e <= rc;
}, oc = function(e) {
  return sc(e) || ic(e);
}, ac = function(e) {
  return e >= PB;
}, sr = function(e) {
  return e === yr || e === HB || e === IB;
}, Hr = function(e) {
  return oc(e) || ac(e) || e === LB;
}, Ki = function(e) {
  return Hr(e) || QA(e) || e === yA;
}, lc = function(e) {
  return e >= JB && e <= WB || e === YB || e >= zB && e <= ZB || e === qB;
}, ae = function(e, A) {
  return e !== Ct ? !1 : A !== yr;
}, ir = function(e, A, t) {
  return e === yA ? Hr(A) || ae(A, t) : Hr(e) ? !0 : !!(e === Ct && ae(e, A));
}, yn = function(e, A, t) {
  return e === me || e === yA ? QA(A) ? !0 : A === Tt && QA(t) : QA(e === Tt ? A : e);
}, Bc = function(e) {
  var A = 0, t = 1;
  (e[A] === me || e[A] === yA) && (e[A] === yA && (t = -1), A++);
  for (var r = []; QA(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt(eA.apply(void 0, r), 10) : 0;
  e[A] === Tt && A++;
  for (var s = []; QA(e[A]); )
    s.push(e[A++]);
  var i = s.length, o = i ? parseInt(eA.apply(void 0, s), 10) : 0;
  (e[A] === Aa || e[A] === qo) && A++;
  var a = 1;
  (e[A] === me || e[A] === yA) && (e[A] === yA && (a = -1), A++);
  for (var l = []; QA(e[A]); )
    l.push(e[A++]);
  var B = l.length ? parseInt(eA.apply(void 0, l), 10) : 0;
  return t * (n + o * Math.pow(10, -i)) * Math.pow(10, a * B);
}, cc = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, uc = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, gc = {
  type: 4
  /* COMMA_TOKEN */
}, hc = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, fc = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, pc = {
  type: 21
  /* COLUMN_TOKEN */
}, wc = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, dc = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, Qc = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, Cc = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, Uc = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, or = {
  type: 23
  /* BAD_URL_TOKEN */
}, Fc = {
  type: 1
  /* BAD_STRING_TOKEN */
}, mc = {
  type: 25
  /* CDO_TOKEN */
}, Ec = {
  type: 24
  /* CDC_TOKEN */
}, vc = {
  type: 26
  /* COLON_TOKEN */
}, yc = {
  type: 27
  /* SEMICOLON_TOKEN */
}, Hc = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, Ic = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, bc = {
  type: 31
  /* WHITESPACE_TOKEN */
}, ns = {
  type: 32
  /* EOF_TOKEN */
}, ta = (
  /** @class */
  (function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(Gr(A));
    }, e.prototype.read = function() {
      for (var A = [], t = this.consumeToken(); t !== ns; )
        A.push(t), t = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case er:
          return this.consumeStringToken(er);
        case bB:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (Ki(t) || ae(r, n)) {
            var s = ir(t, r, n) ? yB : vB, i = this.consumeName();
            return { type: 5, value: i, flags: s };
          }
          break;
        case xB:
          if (this.peekCodePoint(0) === ot)
            return this.consumeCodePoint(), hc;
          break;
        case tr:
          return this.consumeStringToken(tr);
        case rr:
          return cc;
        case at:
          return uc;
        case vn:
          if (this.peekCodePoint(0) === ot)
            return this.consumeCodePoint(), Uc;
          break;
        case me:
          if (yn(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case VB:
          return gc;
        case yA:
          var o = A, a = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (yn(o, a, l))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (ir(o, a, l))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (a === yA && l === DB)
            return this.consumeCodePoint(), this.consumeCodePoint(), Ec;
          break;
        case Tt:
          if (yn(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Ti:
          if (this.peekCodePoint(0) === vn)
            for (this.consumeCodePoint(); ; ) {
              var B = this.consumeCodePoint();
              if (B === vn && (B = this.consumeCodePoint(), B === Ti))
                return this.consumeToken();
              if (B === WA)
                return this.consumeToken();
            }
          break;
        case $B:
          return vc;
        case XB:
          return yc;
        case KB:
          if (this.peekCodePoint(0) === SB && this.peekCodePoint(1) === yA && this.peekCodePoint(2) === yA)
            return this.consumeCodePoint(), this.consumeCodePoint(), mc;
          break;
        case RB:
          var c = this.peekCodePoint(0), g = this.peekCodePoint(1), f = this.peekCodePoint(2);
          if (ir(c, g, f)) {
            var i = this.consumeName();
            return { type: 7, value: i };
          }
          break;
        case kB:
          return Hc;
        case Ct:
          if (ae(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case _B:
          return Ic;
        case OB:
          if (this.peekCodePoint(0) === ot)
            return this.consumeCodePoint(), fc;
          break;
        case MB:
          return Qc;
        case NB:
          return Cc;
        case Ac:
        case tc:
          var h = this.peekCodePoint(0), w = this.peekCodePoint(1);
          return h === me && (_e(w) || w === nr) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case Li:
          if (this.peekCodePoint(0) === ot)
            return this.consumeCodePoint(), wc;
          if (this.peekCodePoint(0) === Li)
            return this.consumeCodePoint(), pc;
          break;
        case GB:
          if (this.peekCodePoint(0) === ot)
            return this.consumeCodePoint(), dc;
          break;
        case WA:
          return ns;
      }
      return sr(A) ? (this.consumeWhiteSpace(), bc) : QA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Hr(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: eA(A) };
    }, e.prototype.consumeCodePoint = function() {
      var A = this._value.shift();
      return typeof A > "u" ? -1 : A;
    }, e.prototype.reconsumeCodePoint = function(A) {
      this._value.unshift(A);
    }, e.prototype.peekCodePoint = function(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, e.prototype.consumeUnicodeRangeToken = function() {
      for (var A = [], t = this.consumeCodePoint(); _e(t) && A.length < 6; )
        A.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === nr && A.length < 6; )
        A.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var n = parseInt(eA.apply(void 0, A.map(function(a) {
          return a === nr ? zo : a;
        })), 16), s = parseInt(eA.apply(void 0, A.map(function(a) {
          return a === nr ? ea : a;
        })), 16);
        return { type: 30, start: n, end: s };
      }
      var i = parseInt(eA.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === yA && _e(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var o = []; _e(t) && o.length < 6; )
          o.push(t), t = this.consumeCodePoint();
        var s = parseInt(eA.apply(void 0, o), 16);
        return { type: 30, start: i, end: s };
      } else
        return { type: 30, start: i, end: i };
    }, e.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === rr ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === rr ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === WA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === tr || t === er) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === WA || this.peekCodePoint(0) === at) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), or);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === WA || n === at)
          return { type: 22, value: eA.apply(void 0, A) };
        if (sr(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === WA || this.peekCodePoint(0) === at ? (this.consumeCodePoint(), { type: 22, value: eA.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), or);
        if (n === er || n === tr || n === rr || lc(n))
          return this.consumeBadUrlRemnants(), or;
        if (n === Ct)
          if (ae(n, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), or;
        else
          A.push(n);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; sr(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === at || A === WA)
          return;
        ae(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, e.prototype.consumeStringSlice = function(A) {
      for (var t = 5e4, r = ""; A > 0; ) {
        var n = Math.min(t, A);
        r += eA.apply(void 0, this._value.splice(0, n)), A -= n;
      }
      return this._value.shift(), r;
    }, e.prototype.consumeStringToken = function(A) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === WA || n === void 0 || n === A)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (n === yr)
          return this._value.splice(0, r), Fc;
        if (n === Ct) {
          var s = this._value[r + 1];
          s !== WA && s !== void 0 && (s === yr ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : ae(n, s) && (t += this.consumeStringSlice(r), t += eA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = Rt, r = this.peekCodePoint(0);
      for ((r === me || r === yA) && A.push(this.consumeCodePoint()); QA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Tt && QA(n))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = xi; QA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var s = this.peekCodePoint(2);
      if ((r === Aa || r === qo) && ((n === me || n === yA) && QA(s) || QA(n)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = xi; QA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [Bc(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), s = this.peekCodePoint(1), i = this.peekCodePoint(2);
      if (ir(n, s, i)) {
        var o = this.consumeName();
        return { type: 15, number: t, flags: r, unit: o };
      }
      return n === TB ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (_e(A)) {
        for (var t = eA(A); _e(this.peekCodePoint(0)) && t.length < 6; )
          t += eA(this.consumeCodePoint());
        sr(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || nc(r) || r > 1114111 ? Si : r;
      }
      return A === WA ? Si : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (Ki(t))
          A += eA(t);
        else if (ae(t, this.peekCodePoint(0)))
          A += eA(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), A;
      }
    }, e;
  })()
), ra = (
  /** @class */
  (function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var t = new ta();
      return t.write(A), new e(t.read());
    }, e.parseValue = function(A) {
      return e.create(A).parseComponentValue();
    }, e.parseValues = function(A) {
      return e.create(A).parseComponentValues();
    }, e.prototype.parseComponentValue = function() {
      for (var A = this.consumeToken(); A.type === 31; )
        A = this.consumeToken();
      if (A.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(A);
      var t = this.consumeComponentValue();
      do
        A = this.consumeToken();
      while (A.type === 31);
      if (A.type === 32)
        return t;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, e.prototype.parseComponentValues = function() {
      for (var A = []; ; ) {
        var t = this.consumeComponentValue();
        if (t.type === 32)
          return A;
        A.push(t), A.push();
      }
    }, e.prototype.consumeComponentValue = function() {
      var A = this.consumeToken();
      switch (A.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(A.type);
        case 19:
          return this.consumeFunction(A);
      }
      return A;
    }, e.prototype.consumeSimpleBlock = function(A) {
      for (var t = { type: A, values: [] }, r = this.consumeToken(); ; ) {
        if (r.type === 32 || Tc(r, A))
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue()), r = this.consumeToken();
      }
    }, e.prototype.consumeFunction = function(A) {
      for (var t = {
        name: A.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var r = this.consumeToken();
        if (r.type === 32 || r.type === 3)
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
      }
    }, e.prototype.consumeToken = function() {
      var A = this._tokens.shift();
      return typeof A > "u" ? ns : A;
    }, e.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, e;
  })()
), kt = function(e) {
  return e.type === 15;
}, Ze = function(e) {
  return e.type === 17;
}, G = function(e) {
  return e.type === 20;
}, xc = function(e) {
  return e.type === 0;
}, ss = function(e, A) {
  return G(e) && e.value === A;
}, na = function(e) {
  return e.type !== 31;
}, Ye = function(e) {
  return e.type !== 31 && e.type !== 4;
}, zA = function(e) {
  var A = [], t = [];
  return e.forEach(function(r) {
    if (r.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      A.push(t), t = [];
      return;
    }
    r.type !== 31 && t.push(r);
  }), t.length && A.push(t), A;
}, Tc = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, pe = function(e) {
  return e.type === 17 || e.type === 15;
}, rA = function(e) {
  return e.type === 16 || pe(e);
}, sa = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, gA = {
  type: 17,
  number: 0,
  flags: Rt
}, Cs = {
  type: 16,
  number: 50,
  flags: Rt
}, ce = {
  type: 16,
  number: 100,
  flags: Rt
}, wt = function(e, A, t) {
  var r = e[0], n = e[1];
  return [X(r, A), X(typeof n < "u" ? n : r, t)];
}, X = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (kt(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      // TODO use correct font-size
      case "px":
      default:
        return e.number;
    }
  return e.number;
}, ia = "deg", oa = "grad", aa = "rad", la = "turn", Pr = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case ia:
          return Math.PI * A.number / 180;
        case oa:
          return Math.PI / 200 * A.number;
        case aa:
          return A.number;
        case la:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Ba = function(e) {
  return e.type === 15 && (e.unit === ia || e.unit === oa || e.unit === aa || e.unit === la);
}, ca = function(e) {
  var A = e.filter(G).map(function(t) {
    return t.value;
  }).join(" ");
  switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [gA, gA];
    case "to top":
    case "bottom":
      return SA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [gA, ce];
    case "to right":
    case "left":
      return SA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [ce, ce];
    case "to bottom":
    case "top":
      return SA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [ce, gA];
    case "to left":
    case "right":
      return SA(270);
  }
  return 0;
}, SA = function(e) {
  return Math.PI * e / 180;
}, ge = {
  name: "color",
  parse: function(e, A) {
    if (A.type === 18) {
      var t = Lc[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return t(e, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3);
        return ue(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), 1);
      }
      if (A.value.length === 4) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3), i = A.value.substring(3, 4);
        return ue(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), parseInt(i + i, 16) / 255);
      }
      if (A.value.length === 6) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6);
        return ue(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), 1);
      }
      if (A.value.length === 8) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6), i = A.value.substring(6, 8);
        return ue(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), parseInt(i, 16) / 255);
      }
    }
    if (A.type === 20) {
      var o = re[A.value.toUpperCase()];
      if (typeof o < "u")
        return o;
    }
    return re.TRANSPARENT;
  }
}, he = function(e) {
  return (255 & e) === 0;
}, BA = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, n = 255 & e >> 24;
  return A < 255 ? "rgba(" + n + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, ue = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, Di = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, Ri = function(e, A) {
  var t = A.filter(Ye);
  if (t.length === 3) {
    var r = t.map(Di), n = r[0], s = r[1], i = r[2];
    return ue(n, s, i, 1);
  }
  if (t.length === 4) {
    var o = t.map(Di), n = o[0], s = o[1], i = o[2], a = o[3];
    return ue(n, s, i, a);
  }
  return 0;
};
function Hn(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var ki = function(e, A) {
  var t = A.filter(Ye), r = t[0], n = t[1], s = t[2], i = t[3], o = (r.type === 17 ? SA(r.number) : Pr.parse(e, r)) / (Math.PI * 2), a = rA(n) ? n.number / 100 : 0, l = rA(s) ? s.number / 100 : 0, B = typeof i < "u" && rA(i) ? X(i, 1) : 1;
  if (a === 0)
    return ue(l * 255, l * 255, l * 255, 1);
  var c = l <= 0.5 ? l * (a + 1) : l + a - l * a, g = l * 2 - c, f = Hn(g, c, o + 1 / 3), h = Hn(g, c, o), w = Hn(g, c, o - 1 / 3);
  return ue(f * 255, h * 255, w * 255, B);
}, Lc = {
  hsl: ki,
  hsla: ki,
  rgb: Ri,
  rgba: Ri
}, Ut = function(e, A) {
  return ge.parse(e, ra.create(A).parseComponentValue());
}, re = {
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
}, Sc = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (G(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Kc = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Vr = function(e, A) {
  var t = ge.parse(e, A[0]), r = A[1];
  return r && rA(r) ? { color: t, stop: r } : { color: t, stop: null };
}, _i = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = gA), r.stop === null && (r.stop = ce);
  for (var n = [], s = 0, i = 0; i < e.length; i++) {
    var o = e[i].stop;
    if (o !== null) {
      var a = X(o, A);
      a > s ? n.push(a) : n.push(s), s = a;
    } else
      n.push(null);
  }
  for (var l = null, i = 0; i < n.length; i++) {
    var B = n[i];
    if (B === null)
      l === null && (l = i);
    else if (l !== null) {
      for (var c = i - l, g = n[l - 1], f = (B - g) / (c + 1), h = 1; h <= c; h++)
        n[l + h - 1] = f * h;
      l = null;
    }
  }
  return e.map(function(w, I) {
    var F = w.color;
    return { color: F, stop: Math.max(Math.min(1, n[I] / A), 0) };
  });
}, Dc = function(e, A, t) {
  var r = A / 2, n = t / 2, s = X(e[0], A) - r, i = n - X(e[1], t);
  return (Math.atan2(i, s) + Math.PI * 2) % (Math.PI * 2);
}, Rc = function(e, A, t) {
  var r = typeof e == "number" ? e : Dc(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), s = A / 2, i = t / 2, o = n / 2, a = Math.sin(r - Math.PI / 2) * o, l = Math.cos(r - Math.PI / 2) * o;
  return [n, s - l, s + l, i - a, i + a];
}, OA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, Oi = function(e, A, t, r, n) {
  var s = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return s.reduce(function(i, o) {
    var a = o[0], l = o[1], B = OA(t - a, r - l);
    return (n ? B < i.optimumDistance : B > i.optimumDistance) ? {
      optimumCorner: o,
      optimumDistance: B
    } : i;
  }, {
    optimumDistance: n ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, kc = function(e, A, t, r, n) {
  var s = 0, i = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? s = i = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (s = Math.min(Math.abs(A), Math.abs(A - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (e.shape === 0)
        s = i = Math.min(OA(A, t), OA(A, t - n), OA(A - r, t), OA(A - r, t - n));
      else if (e.shape === 1) {
        var o = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(A), Math.abs(A - r)), a = Oi(r, n, A, t, !0), l = a[0], B = a[1];
        s = OA(l - A, (B - t) / o), i = o * s;
      }
      break;
    case 1:
      e.shape === 0 ? s = i = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (s = Math.max(Math.abs(A), Math.abs(A - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (e.shape === 0)
        s = i = Math.max(OA(A, t), OA(A, t - n), OA(A - r, t), OA(A - r, t - n));
      else if (e.shape === 1) {
        var o = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(A), Math.abs(A - r)), c = Oi(r, n, A, t, !1), l = c[0], B = c[1];
        s = OA(l - A, (B - t) / o), i = o * s;
      }
      break;
  }
  return Array.isArray(e.size) && (s = X(e.size[0], r), i = e.size.length === 2 ? X(e.size[1], n) : s), [s, i];
}, _c = function(e, A) {
  var t = SA(180), r = [];
  return zA(A).forEach(function(n, s) {
    if (s === 0) {
      var i = n[0];
      if (i.type === 20 && i.value === "to") {
        t = ca(n);
        return;
      } else if (Ba(i)) {
        t = Pr.parse(e, i);
        return;
      }
    }
    var o = Vr(e, n);
    r.push(o);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, ar = function(e, A) {
  var t = SA(180), r = [];
  return zA(A).forEach(function(n, s) {
    if (s === 0) {
      var i = n[0];
      if (i.type === 20 && ["top", "left", "right", "bottom"].indexOf(i.value) !== -1) {
        t = ca(n);
        return;
      } else if (Ba(i)) {
        t = (Pr.parse(e, i) + SA(270)) % SA(360);
        return;
      }
    }
    var o = Vr(e, n);
    r.push(o);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Oc = function(e, A) {
  var t = SA(180), r = [], n = 1, s = 0, i = 3, o = [];
  return zA(A).forEach(function(a, l) {
    var B = a[0];
    if (l === 0) {
      if (G(B) && B.value === "linear") {
        n = 1;
        return;
      } else if (G(B) && B.value === "radial") {
        n = 2;
        return;
      }
    }
    if (B.type === 18) {
      if (B.name === "from") {
        var c = ge.parse(e, B.values[0]);
        r.push({ stop: gA, color: c });
      } else if (B.name === "to") {
        var c = ge.parse(e, B.values[0]);
        r.push({ stop: ce, color: c });
      } else if (B.name === "color-stop") {
        var g = B.values.filter(Ye);
        if (g.length === 2) {
          var c = ge.parse(e, g[1]), f = g[0];
          Ze(f) && r.push({
            stop: { type: 16, number: f.number * 100, flags: f.flags },
            color: c
          });
        }
      }
    }
  }), n === 1 ? {
    angle: (t + SA(180)) % SA(360),
    stops: r,
    type: n
  } : { size: i, shape: s, stops: r, position: o, type: n };
}, ua = "closest-side", ga = "farthest-side", ha = "closest-corner", fa = "farthest-corner", pa = "circle", wa = "ellipse", da = "cover", Qa = "contain", Mc = function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return zA(A).forEach(function(i, o) {
    var a = !0;
    if (o === 0) {
      var l = !1;
      a = i.reduce(function(c, g) {
        if (l)
          if (G(g))
            switch (g.value) {
              case "center":
                return s.push(Cs), c;
              case "top":
              case "left":
                return s.push(gA), c;
              case "right":
              case "bottom":
                return s.push(ce), c;
            }
          else (rA(g) || pe(g)) && s.push(g);
        else if (G(g))
          switch (g.value) {
            case pa:
              return t = 0, !1;
            case wa:
              return t = 1, !1;
            case "at":
              return l = !0, !1;
            case ua:
              return r = 0, !1;
            case da:
            case ga:
              return r = 1, !1;
            case Qa:
            case ha:
              return r = 2, !1;
            case fa:
              return r = 3, !1;
          }
        else if (pe(g) || rA(g))
          return Array.isArray(r) || (r = []), r.push(g), !1;
        return c;
      }, a);
    }
    if (a) {
      var B = Vr(e, i);
      n.push(B);
    }
  }), {
    size: r,
    shape: t,
    stops: n,
    position: s,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, lr = function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return zA(A).forEach(function(i, o) {
    var a = !0;
    if (o === 0 ? a = i.reduce(function(B, c) {
      if (G(c))
        switch (c.value) {
          case "center":
            return s.push(Cs), !1;
          case "top":
          case "left":
            return s.push(gA), !1;
          case "right":
          case "bottom":
            return s.push(ce), !1;
        }
      else if (rA(c) || pe(c))
        return s.push(c), !1;
      return B;
    }, a) : o === 1 && (a = i.reduce(function(B, c) {
      if (G(c))
        switch (c.value) {
          case pa:
            return t = 0, !1;
          case wa:
            return t = 1, !1;
          case Qa:
          case ua:
            return r = 0, !1;
          case ga:
            return r = 1, !1;
          case ha:
            return r = 2, !1;
          case da:
          case fa:
            return r = 3, !1;
        }
      else if (pe(c) || rA(c))
        return Array.isArray(r) || (r = []), r.push(c), !1;
      return B;
    }, a)), a) {
      var l = Vr(e, i);
      n.push(l);
    }
  }), {
    size: r,
    shape: t,
    stops: n,
    position: s,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Nc = function(e) {
  return e.type === 1;
}, Gc = function(e) {
  return e.type === 2;
}, Us = {
  name: "image",
  parse: function(e, A) {
    if (A.type === 22) {
      var t = {
        url: A.value,
        type: 0
        /* URL */
      };
      return e.cache.addImage(A.value), t;
    }
    if (A.type === 18) {
      var r = Ca[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function Pc(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Ca[e.name]);
}
var Ca = {
  "linear-gradient": _c,
  "-moz-linear-gradient": ar,
  "-ms-linear-gradient": ar,
  "-o-linear-gradient": ar,
  "-webkit-linear-gradient": ar,
  "radial-gradient": Mc,
  "-moz-radial-gradient": lr,
  "-ms-radial-gradient": lr,
  "-o-radial-gradient": lr,
  "-webkit-radial-gradient": lr,
  "-webkit-gradient": Oc
}, Vc = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
      return Ye(r) && Pc(r);
    }).map(function(r) {
      return Us.parse(e, r);
    });
  }
}, $c = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (G(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Xc = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return zA(A).map(function(t) {
      return t.filter(rA);
    }).map(sa);
  }
}, Jc = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return zA(A).map(function(t) {
      return t.filter(G).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(Wc);
  }
}, Wc = function(e) {
  switch (e) {
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
}, We;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(We || (We = {}));
var Yc = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return zA(A).map(function(t) {
      return t.filter(zc);
    });
  }
}, zc = function(e) {
  return G(e) || rA(e);
}, $r = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, Zc = $r("top"), qc = $r("right"), jc = $r("bottom"), Au = $r("left"), Xr = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return sa(t.filter(rA));
    }
  };
}, eu = Xr("top-left"), tu = Xr("top-right"), ru = Xr("bottom-right"), nu = Xr("bottom-left"), Jr = function(e) {
  return {
    name: "border-" + e + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(A, t) {
      switch (t) {
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
  };
}, su = Jr("top"), iu = Jr("right"), ou = Jr("bottom"), au = Jr("left"), Wr = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return kt(t) ? t.number : 0;
    }
  };
}, lu = Wr("top"), Bu = Wr("right"), cu = Wr("bottom"), uu = Wr("left"), gu = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, hu = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, fu = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(G).reduce(
      function(t, r) {
        return t | pu(r.value);
      },
      0
      /* NONE */
    );
  }
}, pu = function(e) {
  switch (e) {
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
}, wu = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
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
}, du = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
  }
}, Ir;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(Ir || (Ir = {}));
var Qu = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "strict":
        return Ir.STRICT;
      case "normal":
      default:
        return Ir.NORMAL;
    }
  }
}, Cu = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, Mi = function(e, A) {
  return G(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : rA(e) ? X(e, A) : A;
}, Uu = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : Us.parse(e, A);
  }
}, Fu = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, is = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
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
        return 22;
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
}, Yr = function(e) {
  return {
    name: "margin-" + e,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, mu = Yr("top"), Eu = Yr("right"), vu = Yr("bottom"), yu = Yr("left"), Hu = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(G).map(function(t) {
      switch (t.value) {
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
    });
  }
}, Iu = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, zr = function(e) {
  return {
    name: "padding-" + e,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, bu = zr("top"), xu = zr("right"), Tu = zr("bottom"), Lu = zr("left"), Su = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
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
}, Ku = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
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
}, Du = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && ss(A[0], "none") ? [] : zA(A).map(function(t) {
      for (var r = {
        color: re.TRANSPARENT,
        offsetX: gA,
        offsetY: gA,
        blur: gA
      }, n = 0, s = 0; s < t.length; s++) {
        var i = t[s];
        pe(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : r.blur = i, n++) : r.color = ge.parse(e, i);
      }
      return r;
    });
  }
}, Ru = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
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
}, ku = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var t = Mu[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return t(A.values);
    }
    return null;
  }
}, _u = function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, Ou = function(e) {
  var A = e.filter(function(a) {
    return a.type === 17;
  }).map(function(a) {
    return a.number;
  }), t = A[0], r = A[1];
  A[2], A[3];
  var n = A[4], s = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var i = A[12], o = A[13];
  return A[14], A[15], A.length === 16 ? [t, r, n, s, i, o] : null;
}, Mu = {
  matrix: _u,
  matrix3d: Ou
}, Ni = {
  type: 16,
  number: 50,
  flags: Rt
}, Nu = [Ni, Ni], Gu = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter(rA);
    return t.length !== 2 ? Nu : [t[0], t[1]];
  }
}, Pu = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
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
}, Ft;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(Ft || (Ft = {}));
var Vu = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-all":
        return Ft.BREAK_ALL;
      case "keep-all":
        return Ft.KEEP_ALL;
      case "normal":
      default:
        return Ft.NORMAL;
    }
  }
}, $u = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (Ze(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, Ua = {
  name: "time",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit.toLowerCase()) {
        case "s":
          return 1e3 * A.number;
        case "ms":
          return A.number;
      }
    throw new Error("Unsupported time type");
  }
}, Xu = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return Ze(A) ? A.number : 1;
  }
}, Ju = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Wu = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(G).map(function(t) {
      switch (t.value) {
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
    }).filter(function(t) {
      return t !== 0;
    });
  }
}, Yu = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    var t = [], r = [];
    return A.forEach(function(n) {
      switch (n.type) {
        case 20:
        case 0:
          t.push(n.value);
          break;
        case 17:
          t.push(n.number.toString());
          break;
        case 4:
          r.push(t.join(" ")), t.length = 0;
          break;
      }
    }), t.length && r.push(t.join(" ")), r.map(function(n) {
      return n.indexOf(" ") === -1 ? n : "'" + n + "'";
    });
  }
}, zu = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, Zu = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    if (Ze(A))
      return A.number;
    if (G(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, qu = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(G).map(function(t) {
      return t.value;
    });
  }
}, ju = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
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
}, oA = function(e, A) {
  return (e & A) !== 0;
}, Ag = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A;
  }
}, eg = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return null;
    var t = A[0];
    if (t.type === 20 && t.value === "none")
      return null;
    for (var r = [], n = A.filter(na), s = 0; s < n.length; s++) {
      var i = n[s], o = n[s + 1];
      if (i.type === 20) {
        var a = o && Ze(o) ? o.number : 1;
        r.push({ counter: i.value, increment: a });
      }
    }
    return r;
  }
}, tg = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var t = [], r = A.filter(na), n = 0; n < r.length; n++) {
      var s = r[n], i = r[n + 1];
      if (G(s) && s.value !== "none") {
        var o = i && Ze(i) ? i.number : 0;
        t.push({ counter: s.value, reset: o });
      }
    }
    return t;
  }
}, rg = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(kt).map(function(t) {
      return Ua.parse(e, t);
    });
  }
}, ng = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return null;
    var t = A[0];
    if (t.type === 20 && t.value === "none")
      return null;
    var r = [], n = A.filter(xc);
    if (n.length % 2 !== 0)
      return null;
    for (var s = 0; s < n.length; s += 2) {
      var i = n[s].value, o = n[s + 1].value;
      r.push({ open: i, close: o });
    }
    return r;
  }
}, Gi = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, sg = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && ss(A[0], "none") ? [] : zA(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: gA,
        offsetY: gA,
        blur: gA,
        spread: gA,
        inset: !1
      }, n = 0, s = 0; s < t.length; s++) {
        var i = t[s];
        ss(i, "inset") ? r.inset = !0 : pe(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : n === 2 ? r.blur = i : r.spread = i, n++) : r.color = ge.parse(e, i);
      }
      return r;
    });
  }
}, ig = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    var t = [
      0,
      1,
      2
      /* MARKERS */
    ], r = [];
    return A.filter(G).forEach(function(n) {
      switch (n.value) {
        case "stroke":
          r.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          r.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          r.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), t.forEach(function(n) {
      r.indexOf(n) === -1 && r.push(n);
    }), r;
  }
}, og = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, ag = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return kt(A) ? A.number : 0;
  }
}, lg = (
  /** @class */
  (function() {
    function e(A, t) {
      var r, n;
      this.animationDuration = U(A, rg, t.animationDuration), this.backgroundClip = U(A, Sc, t.backgroundClip), this.backgroundColor = U(A, Kc, t.backgroundColor), this.backgroundImage = U(A, Vc, t.backgroundImage), this.backgroundOrigin = U(A, $c, t.backgroundOrigin), this.backgroundPosition = U(A, Xc, t.backgroundPosition), this.backgroundRepeat = U(A, Jc, t.backgroundRepeat), this.backgroundSize = U(A, Yc, t.backgroundSize), this.borderTopColor = U(A, Zc, t.borderTopColor), this.borderRightColor = U(A, qc, t.borderRightColor), this.borderBottomColor = U(A, jc, t.borderBottomColor), this.borderLeftColor = U(A, Au, t.borderLeftColor), this.borderTopLeftRadius = U(A, eu, t.borderTopLeftRadius), this.borderTopRightRadius = U(A, tu, t.borderTopRightRadius), this.borderBottomRightRadius = U(A, ru, t.borderBottomRightRadius), this.borderBottomLeftRadius = U(A, nu, t.borderBottomLeftRadius), this.borderTopStyle = U(A, su, t.borderTopStyle), this.borderRightStyle = U(A, iu, t.borderRightStyle), this.borderBottomStyle = U(A, ou, t.borderBottomStyle), this.borderLeftStyle = U(A, au, t.borderLeftStyle), this.borderTopWidth = U(A, lu, t.borderTopWidth), this.borderRightWidth = U(A, Bu, t.borderRightWidth), this.borderBottomWidth = U(A, cu, t.borderBottomWidth), this.borderLeftWidth = U(A, uu, t.borderLeftWidth), this.boxShadow = U(A, sg, t.boxShadow), this.color = U(A, gu, t.color), this.direction = U(A, hu, t.direction), this.display = U(A, fu, t.display), this.float = U(A, wu, t.cssFloat), this.fontFamily = U(A, Yu, t.fontFamily), this.fontSize = U(A, zu, t.fontSize), this.fontStyle = U(A, ju, t.fontStyle), this.fontVariant = U(A, qu, t.fontVariant), this.fontWeight = U(A, Zu, t.fontWeight), this.letterSpacing = U(A, du, t.letterSpacing), this.lineBreak = U(A, Qu, t.lineBreak), this.lineHeight = U(A, Cu, t.lineHeight), this.listStyleImage = U(A, Uu, t.listStyleImage), this.listStylePosition = U(A, Fu, t.listStylePosition), this.listStyleType = U(A, is, t.listStyleType), this.marginTop = U(A, mu, t.marginTop), this.marginRight = U(A, Eu, t.marginRight), this.marginBottom = U(A, vu, t.marginBottom), this.marginLeft = U(A, yu, t.marginLeft), this.opacity = U(A, Xu, t.opacity);
      var s = U(A, Hu, t.overflow);
      this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = U(A, Iu, t.overflowWrap), this.paddingTop = U(A, bu, t.paddingTop), this.paddingRight = U(A, xu, t.paddingRight), this.paddingBottom = U(A, Tu, t.paddingBottom), this.paddingLeft = U(A, Lu, t.paddingLeft), this.paintOrder = U(A, ig, t.paintOrder), this.position = U(A, Ku, t.position), this.textAlign = U(A, Su, t.textAlign), this.textDecorationColor = U(A, Ju, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = U(A, Wu, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = U(A, Du, t.textShadow), this.textTransform = U(A, Ru, t.textTransform), this.transform = U(A, ku, t.transform), this.transformOrigin = U(A, Gu, t.transformOrigin), this.visibility = U(A, Pu, t.visibility), this.webkitTextStrokeColor = U(A, og, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = U(A, ag, t.webkitTextStrokeWidth), this.wordBreak = U(A, Vu, t.wordBreak), this.zIndex = U(A, $u, t.zIndex);
    }
    return e.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, e.prototype.isTransparent = function() {
      return he(this.backgroundColor);
    }, e.prototype.isTransformed = function() {
      return this.transform !== null;
    }, e.prototype.isPositioned = function() {
      return this.position !== 0;
    }, e.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, e.prototype.isFloating = function() {
      return this.float !== 0;
    }, e.prototype.isInlineLevel = function() {
      return oA(
        this.display,
        4
        /* INLINE */
      ) || oA(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || oA(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || oA(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || oA(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || oA(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, e;
  })()
), Bg = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.content = U(A, Ag, t.content), this.quotes = U(A, ng, t.quotes);
    }
    return e;
  })()
), Pi = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.counterIncrement = U(A, eg, t.counterIncrement), this.counterReset = U(A, tg, t.counterReset);
    }
    return e;
  })()
), U = function(e, A, t) {
  var r = new ta(), n = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(n);
  var s = new ra(r.read());
  switch (A.type) {
    case 2:
      var i = s.parseComponentValue();
      return A.parse(e, G(i) ? i.value : A.initialValue);
    case 0:
      return A.parse(e, s.parseComponentValue());
    case 1:
      return A.parse(e, s.parseComponentValues());
    case 4:
      return s.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return Pr.parse(e, s.parseComponentValue());
        case "color":
          return ge.parse(e, s.parseComponentValue());
        case "image":
          return Us.parse(e, s.parseComponentValue());
        case "length":
          var o = s.parseComponentValue();
          return pe(o) ? o : gA;
        case "length-percentage":
          var a = s.parseComponentValue();
          return rA(a) ? a : gA;
        case "time":
          return Ua.parse(e, s.parseComponentValue());
      }
      break;
  }
}, cg = "data-html2canvas-debug", ug = function(e) {
  var A = e.getAttribute(cg);
  switch (A) {
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
}, os = function(e, A) {
  var t = ug(e);
  return t === 1 || A === t;
}, ZA = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, os(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new lg(A, window.getComputedStyle(t, null)), Bs(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Nr(this.context, t), os(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  })()
), gg = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Vi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", dt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Br = 0; Br < Vi.length; Br++)
  dt[Vi.charCodeAt(Br)] = Br;
var hg = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, s, i, o, a;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), B = Array.isArray(l) ? l : new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    s = dt[e.charCodeAt(r)], i = dt[e.charCodeAt(r + 1)], o = dt[e.charCodeAt(r + 2)], a = dt[e.charCodeAt(r + 3)], B[n++] = s << 2 | i >> 4, B[n++] = (i & 15) << 4 | o >> 2, B[n++] = (o & 3) << 6 | a & 63;
  return l;
}, fg = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, pg = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, ye = 5, Fs = 11, In = 2, wg = Fs - ye, Fa = 65536 >> ye, dg = 1 << ye, bn = dg - 1, Qg = 1024 >> ye, Cg = Fa + Qg, Ug = Cg, Fg = 32, mg = Ug + Fg, Eg = 65536 >> Fs, vg = 1 << wg, yg = vg - 1, $i = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Hg = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, Ig = function(e, A) {
  var t = hg(e), r = Array.isArray(t) ? pg(t) : new Uint32Array(t), n = Array.isArray(t) ? fg(t) : new Uint16Array(t), s = 24, i = $i(n, s / 2, r[4] / 2), o = r[5] === 2 ? $i(n, (s + r[4]) / 2) : Hg(r, Math.ceil((s + r[4]) / 4));
  return new bg(r[0], r[1], r[2], r[3], i, o);
}, bg = (
  /** @class */
  (function() {
    function e(A, t, r, n, s, i) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = s, this.data = i;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> ye], t = (t << In) + (A & bn), this.data[t];
        if (A <= 65535)
          return t = this.index[Fa + (A - 55296 >> ye)], t = (t << In) + (A & bn), this.data[t];
        if (A < this.highStart)
          return t = mg - Eg + (A >> Fs), t = this.index[t], t += A >> ye & yg, t = this.index[t], t = (t << In) + (A & bn), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  })()
), Xi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", xg = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var cr = 0; cr < Xi.length; cr++)
  xg[Xi.charCodeAt(cr)] = cr;
var Tg = 1, xn = 2, Tn = 3, Ji = 4, Wi = 5, Lg = 7, Yi = 8, Ln = 9, Sn = 10, zi = 11, Zi = 12, qi = 13, ji = 14, Kn = 15, Sg = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = e.charCodeAt(t++);
      (s & 64512) === 56320 ? A.push(((n & 1023) << 10) + (s & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, Kg = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], n = -1, s = ""; ++n < t; ) {
    var i = e[n];
    i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (s += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return s;
}, Dg = Ig(gg), TA = "×", Dn = "÷", Rg = function(e) {
  return Dg.get(e);
}, kg = function(e, A, t) {
  var r = t - 2, n = A[r], s = A[t - 1], i = A[t];
  if (s === xn && i === Tn)
    return TA;
  if (s === xn || s === Tn || s === Ji || i === xn || i === Tn || i === Ji)
    return Dn;
  if (s === Yi && [Yi, Ln, zi, Zi].indexOf(i) !== -1 || (s === zi || s === Ln) && (i === Ln || i === Sn) || (s === Zi || s === Sn) && i === Sn || i === qi || i === Wi || i === Lg || s === Tg)
    return TA;
  if (s === qi && i === ji) {
    for (; n === Wi; )
      n = A[--r];
    if (n === ji)
      return TA;
  }
  if (s === Kn && i === Kn) {
    for (var o = 0; n === Kn; )
      o++, n = A[--r];
    if (o % 2 === 0)
      return TA;
  }
  return Dn;
}, _g = function(e) {
  var A = Sg(e), t = A.length, r = 0, n = 0, s = A.map(Rg);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var i = TA; r < t && (i = kg(A, s, ++r)) === TA; )
        ;
      if (i !== TA || r === t) {
        var o = Kg.apply(null, A.slice(n, r));
        return n = r, { value: o, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Og = function(e) {
  for (var A = _g(e), t = [], r; !(r = A.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, Mg = function(e) {
  var A = 123;
  if (e.createRange) {
    var t = e.createRange();
    if (t.getBoundingClientRect) {
      var r = e.createElement("boundtest");
      r.style.height = A + "px", r.style.display = "block", e.body.appendChild(r), t.selectNode(r);
      var n = t.getBoundingClientRect(), s = Math.round(n.height);
      if (e.body.removeChild(r), s === A)
        return !0;
    }
  }
  return !1;
}, Ng = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = A.firstChild, n = Gr(r.data).map(function(a) {
    return eA(a);
  }), s = 0, i = {}, o = n.every(function(a, l) {
    t.setStart(r, s), t.setEnd(r, s + a.length);
    var B = t.getBoundingClientRect();
    s += a.length;
    var c = B.x > i.x || B.y > i.y;
    return i = B, l === 0 ? !0 : c;
  });
  return e.body.removeChild(A), o;
}, Gg = function() {
  return typeof new Image().crossOrigin < "u";
}, Pg = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, Vg = function(e) {
  var A = new Image(), t = e.createElement("canvas"), r = t.getContext("2d");
  if (!r)
    return !1;
  A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(A, 0, 0), t.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, Ao = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, $g = function(e) {
  var A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  var r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var n = new Image(), s = A.toDataURL();
  n.src = s;
  var i = as(t, t, 0, 0, n);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), eo(i).then(function(o) {
    r.drawImage(o, 0, 0);
    var a = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var l = e.createElement("div");
    return l.style.backgroundImage = "url(" + s + ")", l.style.height = t + "px", Ao(a) ? eo(as(t, t, 0, 0, l)) : Promise.reject(!1);
  }).then(function(o) {
    return r.drawImage(o, 0, 0), Ao(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, as = function(e, A, t, r, n) {
  var s = "http://www.w3.org/2000/svg", i = document.createElementNS(s, "svg"), o = document.createElementNS(s, "foreignObject");
  return i.setAttributeNS(null, "width", e.toString()), i.setAttributeNS(null, "height", A.toString()), o.setAttributeNS(null, "width", "100%"), o.setAttributeNS(null, "height", "100%"), o.setAttributeNS(null, "x", t.toString()), o.setAttributeNS(null, "y", r.toString()), o.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(o), o.appendChild(n), i;
}, eo = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, uA = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = Mg(document);
    return Object.defineProperty(uA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = uA.SUPPORT_RANGE_BOUNDS && Ng(document);
    return Object.defineProperty(uA, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = Vg(document);
    return Object.defineProperty(uA, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? $g(document) : Promise.resolve(!1);
    return Object.defineProperty(uA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = Gg();
    return Object.defineProperty(uA, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = Pg();
    return Object.defineProperty(uA, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
  },
  get SUPPORT_CORS_XHR() {
    var e = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(uA, "SUPPORT_CORS_XHR", { value: e }), e;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var e = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(uA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
  }
}, mt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.text = A, this.bounds = t;
    }
    return e;
  })()
), Xg = function(e, A, t, r) {
  var n = Yg(A, t), s = [], i = 0;
  return n.forEach(function(o) {
    if (t.textDecorationLine.length || o.trim().length > 0)
      if (uA.SUPPORT_RANGE_BOUNDS) {
        var a = to(r, i, o.length).getClientRects();
        if (a.length > 1) {
          var l = ms(o), B = 0;
          l.forEach(function(g) {
            s.push(new mt(g, ne.fromDOMRectList(e, to(r, B + i, g.length).getClientRects()))), B += g.length;
          });
        } else
          s.push(new mt(o, ne.fromDOMRectList(e, a)));
      } else {
        var c = r.splitText(o.length);
        s.push(new mt(o, Jg(e, r))), r = c;
      }
    else uA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(o.length));
    i += o.length;
  }), s;
}, Jg = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var n = A.parentNode;
    if (n) {
      n.replaceChild(r, A);
      var s = Nr(e, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), s;
    }
  }
  return ne.EMPTY;
}, to = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(e, A), n.setEnd(e, A + t), n;
}, ms = function(e) {
  if (uA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return Og(e);
}, Wg = function(e, A) {
  if (uA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return Zg(e, A);
}, Yg = function(e, A) {
  return A.letterSpacing !== 0 ? ms(e) : Wg(e, A);
}, zg = [32, 160, 4961, 65792, 65793, 4153, 4241], Zg = function(e, A) {
  for (var t = EB(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], n, s = function() {
    if (n.value) {
      var i = n.value.slice(), o = Gr(i), a = "";
      o.forEach(function(l) {
        zg.indexOf(l) === -1 ? a += eA(l) : (a.length && r.push(a), r.push(eA(l)), a = "");
      }), a.length && r.push(a);
    }
  }; !(n = t.next()).done; )
    s();
  return r;
}, qg = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t, r) {
      this.text = jg(t.data, r.textTransform), this.textBounds = Xg(A, this.text, r, t);
    }
    return e;
  })()
), jg = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Ah, eh);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Ah = /(^|\s|:|-|\(|\))([a-z])/g, eh = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, ma = (
  /** @class */
  (function(e) {
    MA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return A;
  })(ZA)
), Ea = (
  /** @class */
  (function(e) {
    MA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return A;
  })(ZA)
), va = (
  /** @class */
  (function(e) {
    MA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, s = new XMLSerializer(), i = Nr(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return A;
  })(ZA)
), ya = (
  /** @class */
  (function(e) {
    MA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  })(ZA)
), ls = (
  /** @class */
  (function(e) {
    MA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return A;
  })(ZA)
), th = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], rh = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], nh = function(e) {
  return e.width > e.height ? new ne(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new ne(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, sh = function(e) {
  var A = e.type === ih ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, br = "checkbox", xr = "radio", ih = "password", ro = 707406591, Es = (
  /** @class */
  (function(e) {
    MA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = sh(r), (n.type === br || n.type === xr) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = nh(n.bounds)), n.type) {
        case br:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = th;
          break;
        case xr:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = rh;
          break;
      }
      return n;
    }
    return A;
  })(ZA)
), Ha = (
  /** @class */
  (function(e) {
    MA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, s = r.options[r.selectedIndex || 0];
      return n.value = s && s.text || "", n;
    }
    return A;
  })(ZA)
), Ia = (
  /** @class */
  (function(e) {
    MA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  })(ZA)
), ba = (
  /** @class */
  (function(e) {
    MA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = Ta(t, r.contentWindow.document.documentElement);
          var s = r.contentWindow.document.documentElement ? Ut(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : re.TRANSPARENT, i = r.contentWindow.document.body ? Ut(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : re.TRANSPARENT;
          n.backgroundColor = he(s) ? he(i) ? n.styles.backgroundColor : i : s;
        }
      } catch {
      }
      return n;
    }
    return A;
  })(ZA)
), oh = ["OL", "UL", "MENU"], Fr = function(e, A, t, r) {
  for (var n = A.firstChild, s = void 0; n; n = s)
    if (s = n.nextSibling, La(n) && n.data.trim().length > 0)
      t.textNodes.push(new qg(e, n, t.styles));
    else if (Je(n))
      if (Ra(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(o) {
          return Fr(e, o, t, r);
        });
      else {
        var i = xa(e, n);
        i.styles.isVisible() && (ah(n, i, r) ? i.flags |= 4 : lh(i.styles) && (i.flags |= 2), oh.indexOf(n.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), n.slot, n.shadowRoot ? Fr(e, n.shadowRoot, i, r) : !Tr(n) && !Sa(n) && !Lr(n) && Fr(e, n, i, r));
      }
}, xa = function(e, A) {
  return cs(A) ? new ma(e, A) : Ka(A) ? new Ea(e, A) : Sa(A) ? new va(e, A) : Bh(A) ? new ya(e, A) : ch(A) ? new ls(e, A) : uh(A) ? new Es(e, A) : Lr(A) ? new Ha(e, A) : Tr(A) ? new Ia(e, A) : Da(A) ? new ba(e, A) : new ZA(e, A);
}, Ta = function(e, A) {
  var t = xa(e, A);
  return t.flags |= 4, Fr(e, A, t, t), t;
}, ah = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || vs(e) && t.styles.isTransparent();
}, lh = function(e) {
  return e.isPositioned() || e.isFloating();
}, La = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, Je = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, Bs = function(e) {
  return Je(e) && typeof e.style < "u" && !mr(e);
}, mr = function(e) {
  return typeof e.className == "object";
}, Bh = function(e) {
  return e.tagName === "LI";
}, ch = function(e) {
  return e.tagName === "OL";
}, uh = function(e) {
  return e.tagName === "INPUT";
}, gh = function(e) {
  return e.tagName === "HTML";
}, Sa = function(e) {
  return e.tagName === "svg";
}, vs = function(e) {
  return e.tagName === "BODY";
}, Ka = function(e) {
  return e.tagName === "CANVAS";
}, no = function(e) {
  return e.tagName === "VIDEO";
}, cs = function(e) {
  return e.tagName === "IMG";
}, Da = function(e) {
  return e.tagName === "IFRAME";
}, so = function(e) {
  return e.tagName === "STYLE";
}, hh = function(e) {
  return e.tagName === "SCRIPT";
}, Tr = function(e) {
  return e.tagName === "TEXTAREA";
}, Lr = function(e) {
  return e.tagName === "SELECT";
}, Ra = function(e) {
  return e.tagName === "SLOT";
}, io = function(e) {
  return e.tagName.indexOf("-") > 0;
}, fh = (
  /** @class */
  (function() {
    function e() {
      this.counters = {};
    }
    return e.prototype.getCounterValue = function(A) {
      var t = this.counters[A];
      return t && t.length ? t[t.length - 1] : 1;
    }, e.prototype.getCounterValues = function(A) {
      var t = this.counters[A];
      return t || [];
    }, e.prototype.pop = function(A) {
      var t = this;
      A.forEach(function(r) {
        return t.counters[r].pop();
      });
    }, e.prototype.parse = function(A) {
      var t = this, r = A.counterIncrement, n = A.counterReset, s = !0;
      r !== null && r.forEach(function(o) {
        var a = t.counters[o.counter];
        a && o.increment !== 0 && (s = !1, a.length || a.push(1), a[Math.max(0, a.length - 1)] += o.increment);
      });
      var i = [];
      return s && n.forEach(function(o) {
        var a = t.counters[o.counter];
        i.push(o.counter), a || (a = t.counters[o.counter] = []), a.push(o.reset);
      }), i;
    }, e;
  })()
), oo = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, ao = {
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
}, ph = {
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
}, wh = {
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
}, Oe = function(e, A, t, r, n, s) {
  return e < A || e > t ? Lt(e, n, s.length > 0) : r.integers.reduce(function(i, o, a) {
    for (; e >= o; )
      e -= o, i += r.values[a];
    return i;
  }, "") + s;
}, ka = function(e, A, t, r) {
  var n = "";
  do
    t || e--, n = r(e) + n, e /= A;
  while (e * A >= A);
  return n;
}, AA = function(e, A, t, r, n) {
  var s = t - A + 1;
  return (e < 0 ? "-" : "") + (ka(Math.abs(e), s, r, function(i) {
    return eA(Math.floor(i % s) + A);
  }) + n);
}, Ce = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return ka(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, Ve = 1, ie = 2, oe = 4, Qt = 8, Ae = function(e, A, t, r, n, s) {
  if (e < -9999 || e > 9999)
    return Lt(e, 4, n.length > 0);
  var i = Math.abs(e), o = n;
  if (i === 0)
    return A[0] + o;
  for (var a = 0; i > 0 && a <= 4; a++) {
    var l = i % 10;
    l === 0 && oA(s, Ve) && o !== "" ? o = A[l] + o : l > 1 || l === 1 && a === 0 || l === 1 && a === 1 && oA(s, ie) || l === 1 && a === 1 && oA(s, oe) && e > 100 || l === 1 && a > 1 && oA(s, Qt) ? o = A[l] + (a > 0 ? t[a - 1] : "") + o : l === 1 && a > 0 && (o = t[a - 1] + o), i = Math.floor(i / 10);
  }
  return (e < 0 ? r : "") + o;
}, lo = "十百千萬", Bo = "拾佰仟萬", co = "マイナス", Rn = "마이너스", Lt = function(e, A, t) {
  var r = t ? ". " : "", n = t ? "、" : "", s = t ? ", " : "", i = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + i;
    case 1:
      return "◦" + i;
    case 2:
      return "◾" + i;
    case 5:
      var o = AA(e, 48, 57, !0, r);
      return o.length < 4 ? "0" + o : o;
    case 4:
      return Ce(e, "〇一二三四五六七八九", n);
    case 6:
      return Oe(e, 1, 3999, oo, 3, r).toLowerCase();
    case 7:
      return Oe(e, 1, 3999, oo, 3, r);
    case 8:
      return AA(e, 945, 969, !1, r);
    case 9:
      return AA(e, 97, 122, !1, r);
    case 10:
      return AA(e, 65, 90, !1, r);
    case 11:
      return AA(e, 1632, 1641, !0, r);
    case 12:
    case 49:
      return Oe(e, 1, 9999, ao, 3, r);
    case 35:
      return Oe(e, 1, 9999, ao, 3, r).toLowerCase();
    case 13:
      return AA(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return AA(e, 6112, 6121, !0, r);
    case 15:
      return Ce(e, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return Ce(e, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return Ae(e, "零一二三四五六七八九", lo, "負", n, ie | oe | Qt);
    case 47:
      return Ae(e, "零壹貳參肆伍陸柒捌玖", Bo, "負", n, Ve | ie | oe | Qt);
    case 42:
      return Ae(e, "零一二三四五六七八九", lo, "负", n, ie | oe | Qt);
    case 41:
      return Ae(e, "零壹贰叁肆伍陆柒捌玖", Bo, "负", n, Ve | ie | oe | Qt);
    case 26:
      return Ae(e, "〇一二三四五六七八九", "十百千万", co, n, 0);
    case 25:
      return Ae(e, "零壱弐参四伍六七八九", "拾百千万", co, n, Ve | ie | oe);
    case 31:
      return Ae(e, "영일이삼사오육칠팔구", "십백천만", Rn, s, Ve | ie | oe);
    case 33:
      return Ae(e, "零一二三四五六七八九", "十百千萬", Rn, s, 0);
    case 32:
      return Ae(e, "零壹貳參四五六七八九", "拾百千", Rn, s, Ve | ie | oe);
    case 18:
      return AA(e, 2406, 2415, !0, r);
    case 20:
      return Oe(e, 1, 19999, wh, 3, r);
    case 21:
      return AA(e, 2790, 2799, !0, r);
    case 22:
      return AA(e, 2662, 2671, !0, r);
    case 22:
      return Oe(e, 1, 10999, ph, 3, r);
    case 23:
      return Ce(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return Ce(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return AA(e, 3302, 3311, !0, r);
    case 28:
      return Ce(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return Ce(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
      return AA(e, 3792, 3801, !0, r);
    case 37:
      return AA(e, 6160, 6169, !0, r);
    case 38:
      return AA(e, 4160, 4169, !0, r);
    case 39:
      return AA(e, 2918, 2927, !0, r);
    case 40:
      return AA(e, 1776, 1785, !0, r);
    case 43:
      return AA(e, 3046, 3055, !0, r);
    case 44:
      return AA(e, 3174, 3183, !0, r);
    case 45:
      return AA(e, 3664, 3673, !0, r);
    case 46:
      return AA(e, 3872, 3881, !0, r);
    case 3:
    default:
      return AA(e, 48, 57, !0, r);
  }
}, _a = "data-html2canvas-ignore", uo = (
  /** @class */
  (function() {
    function e(A, t, r) {
      if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new fh(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, t) {
      var r = this, n = dh(A, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var s = A.defaultView.pageXOffset, i = A.defaultView.pageYOffset, o = n.contentWindow, a = o.document, l = Uh(n).then(function() {
        return UA(r, void 0, void 0, function() {
          var B, c;
          return dA(this, function(g) {
            switch (g.label) {
              case 0:
                return this.scrolledElements.forEach(vh), o && (o.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0))), B = this.options.onclone, c = this.clonedReferenceElement, typeof c > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : a.fonts && a.fonts.ready ? [4, a.fonts.ready] : [3, 2];
              case 1:
                g.sent(), g.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Ch(a)] : [3, 4];
              case 3:
                g.sent(), g.label = 4;
              case 4:
                return typeof B == "function" ? [2, Promise.resolve().then(function() {
                  return B(a, c);
                }).then(function() {
                  return n;
                })] : [2, n];
            }
          });
        });
      });
      return a.open(), a.write(mh(document.doctype) + "<html></html>"), Eh(this.referenceElement.ownerDocument, s, i), a.replaceChild(a.adoptNode(this.documentElement), a.documentElement), a.close(), l;
    }, e.prototype.createElementClone = function(A) {
      if (os(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (Ka(A))
        return this.createCanvasClone(A);
      if (no(A))
        return this.createVideoClone(A);
      if (so(A))
        return this.createStyleClone(A);
      var t = A.cloneNode(!1);
      return cs(t) && (cs(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), io(t) ? this.createCustomElementClone(t) : t;
    }, e.prototype.createCustomElementClone = function(A) {
      var t = document.createElement("html2canvascustomelement");
      return kn(A.style, t), t;
    }, e.prototype.createStyleClone = function(A) {
      try {
        var t = A.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(s, i) {
            return i && typeof i.cssText == "string" ? s + i.cssText : s;
          }, ""), n = A.cloneNode(!1);
          return n.textContent = r, n;
        }
      } catch (s) {
        if (this.context.logger.error("Unable to access cssRules property", s), s.name !== "SecurityError")
          throw s;
      }
      return A.cloneNode(!1);
    }, e.prototype.createCanvasClone = function(A) {
      var t;
      if (this.options.inlineImages && A.ownerDocument) {
        var r = A.ownerDocument.createElement("img");
        try {
          return r.src = A.toDataURL(), r;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
        }
      }
      var n = A.cloneNode(!1);
      try {
        n.width = A.width, n.height = A.height;
        var s = A.getContext("2d"), i = n.getContext("2d");
        if (i)
          if (!this.options.allowTaint && s)
            i.putImageData(s.getImageData(0, 0, A.width, A.height), 0, 0);
          else {
            var o = (t = A.getContext("webgl2")) !== null && t !== void 0 ? t : A.getContext("webgl");
            if (o) {
              var a = o.getContextAttributes();
              a?.preserveDrawingBuffer === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
            }
            i.drawImage(A, 0, 0);
          }
        return n;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", A);
      }
      return n;
    }, e.prototype.createVideoClone = function(A) {
      var t = A.ownerDocument.createElement("canvas");
      t.width = A.offsetWidth, t.height = A.offsetHeight;
      var r = t.getContext("2d");
      try {
        return r && (r.drawImage(A, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", A);
      }
      var n = A.ownerDocument.createElement("canvas");
      return n.width = A.offsetWidth, n.height = A.offsetHeight, n;
    }, e.prototype.appendChildNode = function(A, t, r) {
      (!Je(t) || !hh(t) && !t.hasAttribute(_a) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !Je(t) || !so(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var n = this, s = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; s; s = s.nextSibling)
        if (Je(s) && Ra(s) && typeof s.assignedNodes == "function") {
          var i = s.assignedNodes();
          i.length && i.forEach(function(o) {
            return n.appendChildNode(t, o, r);
          });
        } else
          this.appendChildNode(t, s, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (La(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && Je(A) && (Bs(A) || mr(A))) {
        var n = this.createElementClone(A);
        n.style.transitionProperty = "none";
        var s = r.getComputedStyle(A), i = r.getComputedStyle(A, ":before"), o = r.getComputedStyle(A, ":after");
        this.referenceElement === A && Bs(n) && (this.clonedReferenceElement = n), vs(n) && Ih(n);
        var a = this.counters.parse(new Pi(this.context, s)), l = this.resolvePseudoContent(A, n, i, Et.BEFORE);
        io(A) && (t = !0), no(A) || this.cloneChildNodes(A, n, t), l && n.insertBefore(l, n.firstChild);
        var B = this.resolvePseudoContent(A, n, o, Et.AFTER);
        return B && n.appendChild(B), this.counters.pop(a), (s && (this.options.copyStyles || mr(A)) && !Da(A) || t) && kn(s, n), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (Tr(A) || Lr(A)) && (Tr(n) || Lr(n)) && (n.value = A.value), n;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
      var s = this;
      if (r) {
        var i = r.content, o = t.ownerDocument;
        if (!(!o || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new Pi(this.context, r));
          var a = new Bg(this.context, r), l = o.createElement("html2canvaspseudoelement");
          kn(r, l), a.content.forEach(function(c) {
            if (c.type === 0)
              l.appendChild(o.createTextNode(c.value));
            else if (c.type === 22) {
              var g = o.createElement("img");
              g.src = c.value, g.style.opacity = "1", l.appendChild(g);
            } else if (c.type === 18) {
              if (c.name === "attr") {
                var f = c.values.filter(G);
                f.length && l.appendChild(o.createTextNode(A.getAttribute(f[0].value) || ""));
              } else if (c.name === "counter") {
                var h = c.values.filter(Ye), w = h[0], I = h[1];
                if (w && G(w)) {
                  var F = s.counters.getCounterValue(w.value), C = I && G(I) ? is.parse(s.context, I.value) : 3;
                  l.appendChild(o.createTextNode(Lt(F, C, !1)));
                }
              } else if (c.name === "counters") {
                var T = c.values.filter(Ye), w = T[0], E = T[1], I = T[2];
                if (w && G(w)) {
                  var v = s.counters.getCounterValues(w.value), d = I && G(I) ? is.parse(s.context, I.value) : 3, b = E && E.type === 0 ? E.value : "", L = v.map(function(k) {
                    return Lt(k, d, !1);
                  }).join(b);
                  l.appendChild(o.createTextNode(L));
                }
              }
            } else if (c.type === 20)
              switch (c.value) {
                case "open-quote":
                  l.appendChild(o.createTextNode(Gi(a.quotes, s.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  l.appendChild(o.createTextNode(Gi(a.quotes, --s.quoteDepth, !1)));
                  break;
                default:
                  l.appendChild(o.createTextNode(c.value));
              }
          }), l.className = us + " " + gs;
          var B = n === Et.BEFORE ? " " + us : " " + gs;
          return mr(t) ? t.className.baseValue += B : t.className += B, l;
        }
      }
    }, e.destroy = function(A) {
      return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
    }, e;
  })()
), Et;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Et || (Et = {}));
var dh = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(_a, "true"), e.body.appendChild(t), t;
}, Qh = function(e) {
  return new Promise(function(A) {
    if (e.complete) {
      A();
      return;
    }
    if (!e.src) {
      A();
      return;
    }
    e.onload = A, e.onerror = A;
  });
}, Ch = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(Qh));
}, Uh = function(e) {
  return new Promise(function(A, t) {
    var r = e.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var n = r.document;
    r.onload = e.onload = function() {
      r.onload = e.onload = null;
      var s = setInterval(function() {
        n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(s), A(e));
      }, 50);
    };
  });
}, Fh = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], kn = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    Fh.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, mh = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, Eh = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, vh = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, yh = ":before", Hh = ":after", us = "___html2canvas___pseudoelement_before", gs = "___html2canvas___pseudoelement_after", go = `{
    content: "" !important;
    display: none !important;
}`, Ih = function(e) {
  bh(e, "." + us + yh + go + `
         .` + gs + Hh + go);
}, bh = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, Oa = (
  /** @class */
  (function() {
    function e() {
    }
    return e.getOrigin = function(A) {
      var t = e._link;
      return t ? (t.href = A, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
    }, e.isSameOrigin = function(A) {
      return e.getOrigin(A) === e._origin;
    }, e.setContext = function(A) {
      e._link = A.document.createElement("a"), e._origin = e.getOrigin(A.location.href);
    }, e._origin = "about:blank", e;
  })()
), xh = (
  /** @class */
  (function() {
    function e(A, t) {
      this.context = A, this._options = t, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var t = Promise.resolve();
      return this.has(A) || (On(A) || Kh(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return UA(this, void 0, void 0, function() {
        var t, r, n, s, i = this;
        return dA(this, function(o) {
          switch (o.label) {
            case 0:
              return t = Oa.isSameOrigin(A), r = !_n(A) && this._options.useCORS === !0 && uA.SUPPORT_CORS_IMAGES && !t, n = !_n(A) && !t && !On(A) && typeof this._options.proxy == "string" && uA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !_n(A) && !On(A) && !n && !r ? [
                2
                /*return*/
              ] : (s = A, n ? [4, this.proxy(s)] : [3, 2]);
            case 1:
              s = o.sent(), o.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(a, l) {
                var B = new Image();
                B.onload = function() {
                  return a(B);
                }, B.onerror = l, (Dh(s) || r) && (B.crossOrigin = "anonymous"), B.src = s, B.complete === !0 && setTimeout(function() {
                  return a(B);
                }, 500), i._options.imageTimeout > 0 && setTimeout(function() {
                  return l("Timed out (" + i._options.imageTimeout + "ms) loading image");
                }, i._options.imageTimeout);
              })];
            case 3:
              return [2, o.sent()];
          }
        });
      });
    }, e.prototype.has = function(A) {
      return typeof this._cache[A] < "u";
    }, e.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, e.prototype.proxy = function(A) {
      var t = this, r = this._options.proxy;
      if (!r)
        throw new Error("No proxy defined");
      var n = A.substring(0, 256);
      return new Promise(function(s, i) {
        var o = uA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", a = new XMLHttpRequest();
        a.onload = function() {
          if (a.status === 200)
            if (o === "text")
              s(a.response);
            else {
              var c = new FileReader();
              c.addEventListener("load", function() {
                return s(c.result);
              }, !1), c.addEventListener("error", function(g) {
                return i(g);
              }, !1), c.readAsDataURL(a.response);
            }
          else
            i("Failed to proxy resource " + n + " with status code " + a.status);
        }, a.onerror = i;
        var l = r.indexOf("?") > -1 ? "&" : "?";
        if (a.open("GET", "" + r + l + "url=" + encodeURIComponent(A) + "&responseType=" + o), o !== "text" && a instanceof XMLHttpRequest && (a.responseType = o), t._options.imageTimeout) {
          var B = t._options.imageTimeout;
          a.timeout = B, a.ontimeout = function() {
            return i("Timed out (" + B + "ms) proxying " + n);
          };
        }
        a.send();
      });
    }, e;
  })()
), Th = /^data:image\/svg\+xml/i, Lh = /^data:image\/.*;base64,/i, Sh = /^data:image\/.*/i, Kh = function(e) {
  return uA.SUPPORT_SVG_DRAWING || !Rh(e);
}, _n = function(e) {
  return Sh.test(e);
}, Dh = function(e) {
  return Lh.test(e);
}, On = function(e) {
  return e.substr(0, 4) === "blob";
}, Rh = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || Th.test(e);
}, Q = (
  /** @class */
  (function() {
    function e(A, t) {
      this.type = 0, this.x = A, this.y = t;
    }
    return e.prototype.add = function(A, t) {
      return new e(this.x + A, this.y + t);
    }, e;
  })()
), Me = function(e, A, t) {
  return new Q(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, ur = (
  /** @class */
  (function() {
    function e(A, t, r, n) {
      this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = n;
    }
    return e.prototype.subdivide = function(A, t) {
      var r = Me(this.start, this.startControl, A), n = Me(this.startControl, this.endControl, A), s = Me(this.endControl, this.end, A), i = Me(r, n, A), o = Me(n, s, A), a = Me(i, o, A);
      return t ? new e(this.start, r, i, a) : new e(a, o, s, this.end);
    }, e.prototype.add = function(A, t) {
      return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  })()
), LA = function(e) {
  return e.type === 1;
}, kh = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A) {
      var t = A.styles, r = A.bounds, n = wt(t.borderTopLeftRadius, r.width, r.height), s = n[0], i = n[1], o = wt(t.borderTopRightRadius, r.width, r.height), a = o[0], l = o[1], B = wt(t.borderBottomRightRadius, r.width, r.height), c = B[0], g = B[1], f = wt(t.borderBottomLeftRadius, r.width, r.height), h = f[0], w = f[1], I = [];
      I.push((s + a) / r.width), I.push((h + c) / r.width), I.push((i + w) / r.height), I.push((l + g) / r.height);
      var F = Math.max.apply(Math, I);
      F > 1 && (s /= F, i /= F, a /= F, l /= F, c /= F, g /= F, h /= F, w /= F);
      var C = r.width - a, T = r.height - g, E = r.width - c, v = r.height - w, d = t.borderTopWidth, b = t.borderRightWidth, L = t.borderBottomWidth, H = t.borderLeftWidth, Z = X(t.paddingTop, A.bounds.width), k = X(t.paddingRight, A.bounds.width), aA = X(t.paddingBottom, A.bounds.width), K = X(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = s > 0 || i > 0 ? z(r.left + H / 3, r.top + d / 3, s - H / 3, i - d / 3, _.TOP_LEFT) : new Q(r.left + H / 3, r.top + d / 3), this.topRightBorderDoubleOuterBox = s > 0 || i > 0 ? z(r.left + C, r.top + d / 3, a - b / 3, l - d / 3, _.TOP_RIGHT) : new Q(r.left + r.width - b / 3, r.top + d / 3), this.bottomRightBorderDoubleOuterBox = c > 0 || g > 0 ? z(r.left + E, r.top + T, c - b / 3, g - L / 3, _.BOTTOM_RIGHT) : new Q(r.left + r.width - b / 3, r.top + r.height - L / 3), this.bottomLeftBorderDoubleOuterBox = h > 0 || w > 0 ? z(r.left + H / 3, r.top + v, h - H / 3, w - L / 3, _.BOTTOM_LEFT) : new Q(r.left + H / 3, r.top + r.height - L / 3), this.topLeftBorderDoubleInnerBox = s > 0 || i > 0 ? z(r.left + H * 2 / 3, r.top + d * 2 / 3, s - H * 2 / 3, i - d * 2 / 3, _.TOP_LEFT) : new Q(r.left + H * 2 / 3, r.top + d * 2 / 3), this.topRightBorderDoubleInnerBox = s > 0 || i > 0 ? z(r.left + C, r.top + d * 2 / 3, a - b * 2 / 3, l - d * 2 / 3, _.TOP_RIGHT) : new Q(r.left + r.width - b * 2 / 3, r.top + d * 2 / 3), this.bottomRightBorderDoubleInnerBox = c > 0 || g > 0 ? z(r.left + E, r.top + T, c - b * 2 / 3, g - L * 2 / 3, _.BOTTOM_RIGHT) : new Q(r.left + r.width - b * 2 / 3, r.top + r.height - L * 2 / 3), this.bottomLeftBorderDoubleInnerBox = h > 0 || w > 0 ? z(r.left + H * 2 / 3, r.top + v, h - H * 2 / 3, w - L * 2 / 3, _.BOTTOM_LEFT) : new Q(r.left + H * 2 / 3, r.top + r.height - L * 2 / 3), this.topLeftBorderStroke = s > 0 || i > 0 ? z(r.left + H / 2, r.top + d / 2, s - H / 2, i - d / 2, _.TOP_LEFT) : new Q(r.left + H / 2, r.top + d / 2), this.topRightBorderStroke = s > 0 || i > 0 ? z(r.left + C, r.top + d / 2, a - b / 2, l - d / 2, _.TOP_RIGHT) : new Q(r.left + r.width - b / 2, r.top + d / 2), this.bottomRightBorderStroke = c > 0 || g > 0 ? z(r.left + E, r.top + T, c - b / 2, g - L / 2, _.BOTTOM_RIGHT) : new Q(r.left + r.width - b / 2, r.top + r.height - L / 2), this.bottomLeftBorderStroke = h > 0 || w > 0 ? z(r.left + H / 2, r.top + v, h - H / 2, w - L / 2, _.BOTTOM_LEFT) : new Q(r.left + H / 2, r.top + r.height - L / 2), this.topLeftBorderBox = s > 0 || i > 0 ? z(r.left, r.top, s, i, _.TOP_LEFT) : new Q(r.left, r.top), this.topRightBorderBox = a > 0 || l > 0 ? z(r.left + C, r.top, a, l, _.TOP_RIGHT) : new Q(r.left + r.width, r.top), this.bottomRightBorderBox = c > 0 || g > 0 ? z(r.left + E, r.top + T, c, g, _.BOTTOM_RIGHT) : new Q(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = h > 0 || w > 0 ? z(r.left, r.top + v, h, w, _.BOTTOM_LEFT) : new Q(r.left, r.top + r.height), this.topLeftPaddingBox = s > 0 || i > 0 ? z(r.left + H, r.top + d, Math.max(0, s - H), Math.max(0, i - d), _.TOP_LEFT) : new Q(r.left + H, r.top + d), this.topRightPaddingBox = a > 0 || l > 0 ? z(r.left + Math.min(C, r.width - b), r.top + d, C > r.width + b ? 0 : Math.max(0, a - b), Math.max(0, l - d), _.TOP_RIGHT) : new Q(r.left + r.width - b, r.top + d), this.bottomRightPaddingBox = c > 0 || g > 0 ? z(r.left + Math.min(E, r.width - H), r.top + Math.min(T, r.height - L), Math.max(0, c - b), Math.max(0, g - L), _.BOTTOM_RIGHT) : new Q(r.left + r.width - b, r.top + r.height - L), this.bottomLeftPaddingBox = h > 0 || w > 0 ? z(r.left + H, r.top + Math.min(v, r.height - L), Math.max(0, h - H), Math.max(0, w - L), _.BOTTOM_LEFT) : new Q(r.left + H, r.top + r.height - L), this.topLeftContentBox = s > 0 || i > 0 ? z(r.left + H + K, r.top + d + Z, Math.max(0, s - (H + K)), Math.max(0, i - (d + Z)), _.TOP_LEFT) : new Q(r.left + H + K, r.top + d + Z), this.topRightContentBox = a > 0 || l > 0 ? z(r.left + Math.min(C, r.width + H + K), r.top + d + Z, C > r.width + H + K ? 0 : a - H + K, l - (d + Z), _.TOP_RIGHT) : new Q(r.left + r.width - (b + k), r.top + d + Z), this.bottomRightContentBox = c > 0 || g > 0 ? z(r.left + Math.min(E, r.width - (H + K)), r.top + Math.min(T, r.height + d + Z), Math.max(0, c - (b + k)), g - (L + aA), _.BOTTOM_RIGHT) : new Q(r.left + r.width - (b + k), r.top + r.height - (L + aA)), this.bottomLeftContentBox = h > 0 || w > 0 ? z(r.left + H + K, r.top + v, Math.max(0, h - (H + K)), w - (L + aA), _.BOTTOM_LEFT) : new Q(r.left + H + K, r.top + r.height - (L + aA));
    }
    return e;
  })()
), _;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(_ || (_ = {}));
var z = function(e, A, t, r, n) {
  var s = 4 * ((Math.sqrt(2) - 1) / 3), i = t * s, o = r * s, a = e + t, l = A + r;
  switch (n) {
    case _.TOP_LEFT:
      return new ur(new Q(e, l), new Q(e, l - o), new Q(a - i, A), new Q(a, A));
    case _.TOP_RIGHT:
      return new ur(new Q(e, A), new Q(e + i, A), new Q(a, l - o), new Q(a, l));
    case _.BOTTOM_RIGHT:
      return new ur(new Q(a, A), new Q(a, A + o), new Q(e + i, l), new Q(e, l));
    case _.BOTTOM_LEFT:
    default:
      return new ur(new Q(a, l), new Q(a - i, l), new Q(e, A + o), new Q(e, A));
  }
}, Sr = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, _h = function(e) {
  return [
    e.topLeftContentBox,
    e.topRightContentBox,
    e.bottomRightContentBox,
    e.bottomLeftContentBox
  ];
}, Kr = function(e) {
  return [
    e.topLeftPaddingBox,
    e.topRightPaddingBox,
    e.bottomRightPaddingBox,
    e.bottomLeftPaddingBox
  ];
}, Oh = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t, r) {
      this.offsetX = A, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return e;
  })()
), gr = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.path = A, this.target = t, this.type = 1;
    }
    return e;
  })()
), Mh = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  })()
), Nh = function(e) {
  return e.type === 0;
}, Ma = function(e) {
  return e.type === 1;
}, Gh = function(e) {
  return e.type === 2;
}, ho = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, Ph = function(e, A, t, r, n) {
  return e.map(function(s, i) {
    switch (i) {
      case 0:
        return s.add(A, t);
      case 1:
        return s.add(A + r, t);
      case 2:
        return s.add(A + r, t + n);
      case 3:
        return s.add(A, t + n);
    }
    return s;
  });
}, Na = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  })()
), Ga = (
  /** @class */
  (function() {
    function e(A, t) {
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new kh(this.container), this.container.styles.opacity < 1 && this.effects.push(new Mh(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, s = this.container.styles.transform;
        this.effects.push(new Oh(r, n, s));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = Sr(this.curves), o = Kr(this.curves);
        ho(i, o) ? this.effects.push(new gr(
          i,
          6
          /* CONTENT */
        )) : (this.effects.push(new gr(
          i,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new gr(
          o,
          4
          /* CONTENT */
        )));
      }
    }
    return e.prototype.getEffects = function(A) {
      for (var t = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var s = r.effects.filter(function(a) {
          return !Ma(a);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, s), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = Sr(r.curves), o = Kr(r.curves);
            ho(i, o) || n.unshift(new gr(
              o,
              6
              /* CONTENT */
            ));
          }
        } else
          n.unshift.apply(n, s);
        r = r.parent;
      }
      return n.filter(function(a) {
        return oA(a.target, A);
      });
    }, e;
  })()
), hs = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var s = oA(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), i = oA(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), o = new Ga(n, e);
    oA(
      n.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(o);
    var a = oA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (s || i) {
      var l = s || n.styles.isPositioned() ? t : A, B = new Na(o);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var c = n.styles.zIndex.order;
        if (c < 0) {
          var g = 0;
          l.negativeZIndex.some(function(h, w) {
            return c > h.element.container.styles.zIndex.order ? (g = w, !1) : g > 0;
          }), l.negativeZIndex.splice(g, 0, B);
        } else if (c > 0) {
          var f = 0;
          l.positiveZIndex.some(function(h, w) {
            return c >= h.element.container.styles.zIndex.order ? (f = w + 1, !1) : f > 0;
          }), l.positiveZIndex.splice(f, 0, B);
        } else
          l.zeroOrAutoZIndexOrTransformedOrOpacity.push(B);
      } else
        n.styles.isFloating() ? l.nonPositionedFloats.push(B) : l.nonPositionedInlineLevel.push(B);
      hs(o, B, s ? B : t, a);
    } else
      n.styles.isInlineLevel() ? A.inlineLevel.push(o) : A.nonInlineLevel.push(o), hs(o, A, t, a);
    oA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && Pa(n, a);
  });
}, Pa = function(e, A) {
  for (var t = e instanceof ls ? e.start : 1, r = e instanceof ls ? e.reversed : !1, n = 0; n < A.length; n++) {
    var s = A[n];
    s.container instanceof ya && typeof s.container.value == "number" && s.container.value !== 0 && (t = s.container.value), s.listValue = Lt(t, s.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, Vh = function(e) {
  var A = new Ga(e, null), t = new Na(A), r = [];
  return hs(A, t, t, r), Pa(A.container, r), t;
}, fo = function(e, A) {
  switch (A) {
    case 0:
      return KA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return KA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return KA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return KA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, $h = function(e, A) {
  switch (A) {
    case 0:
      return KA(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
      return KA(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
      return KA(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return KA(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
  }
}, Xh = function(e, A) {
  switch (A) {
    case 0:
      return KA(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
      return KA(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
      return KA(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return KA(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
  }
}, Jh = function(e, A) {
  switch (A) {
    case 0:
      return hr(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return hr(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return hr(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return hr(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, hr = function(e, A) {
  var t = [];
  return LA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), LA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, KA = function(e, A, t, r) {
  var n = [];
  return LA(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e), LA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), LA(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), LA(A) ? n.push(A.subdivide(0.5, !1).reverse()) : n.push(A), n;
}, Va = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Dr = function(e) {
  var A = e.styles, t = e.bounds, r = X(A.paddingLeft, t.width), n = X(A.paddingRight, t.width), s = X(A.paddingTop, t.width), i = X(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, s + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + s + i));
}, Wh = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Dr(A) : Va(A);
}, Yh = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Dr(A) : Va(A);
}, Mn = function(e, A, t) {
  var r = Wh($e(e.styles.backgroundOrigin, A), e), n = Yh($e(e.styles.backgroundClip, A), e), s = zh($e(e.styles.backgroundSize, A), t, r), i = s[0], o = s[1], a = wt($e(e.styles.backgroundPosition, A), r.width - i, r.height - o), l = Zh($e(e.styles.backgroundRepeat, A), a, s, r, n), B = Math.round(r.left + a[0]), c = Math.round(r.top + a[1]);
  return [l, B, c, i, o];
}, Ne = function(e) {
  return G(e) && e.value === We.AUTO;
}, fr = function(e) {
  return typeof e == "number";
}, zh = function(e, A, t) {
  var r = A[0], n = A[1], s = A[2], i = e[0], o = e[1];
  if (!i)
    return [0, 0];
  if (rA(i) && o && rA(o))
    return [X(i, t.width), X(o, t.height)];
  var a = fr(s);
  if (G(i) && (i.value === We.CONTAIN || i.value === We.COVER)) {
    if (fr(s)) {
      var l = t.width / t.height;
      return l < s != (i.value === We.COVER) ? [t.width, t.width / s] : [t.height * s, t.height];
    }
    return [t.width, t.height];
  }
  var B = fr(r), c = fr(n), g = B || c;
  if (Ne(i) && (!o || Ne(o))) {
    if (B && c)
      return [r, n];
    if (!a && !g)
      return [t.width, t.height];
    if (g && a) {
      var f = B ? r : n * s, h = c ? n : r / s;
      return [f, h];
    }
    var w = B ? r : t.width, I = c ? n : t.height;
    return [w, I];
  }
  if (a) {
    var F = 0, C = 0;
    return rA(i) ? F = X(i, t.width) : rA(o) && (C = X(o, t.height)), Ne(i) ? F = C * s : (!o || Ne(o)) && (C = F / s), [F, C];
  }
  var T = null, E = null;
  if (rA(i) ? T = X(i, t.width) : o && rA(o) && (E = X(o, t.height)), T !== null && (!o || Ne(o)) && (E = B && c ? T / r * n : t.height), E !== null && Ne(i) && (T = B && c ? E / n * r : t.width), T !== null && E !== null)
    return [T, E];
  throw new Error("Unable to calculate background-size for element");
}, $e = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, Zh = function(e, A, t, r, n) {
  var s = A[0], i = A[1], o = t[0], a = t[1];
  switch (e) {
    case 2:
      return [
        new Q(Math.round(r.left), Math.round(r.top + i)),
        new Q(Math.round(r.left + r.width), Math.round(r.top + i)),
        new Q(Math.round(r.left + r.width), Math.round(a + r.top + i)),
        new Q(Math.round(r.left), Math.round(a + r.top + i))
      ];
    case 3:
      return [
        new Q(Math.round(r.left + s), Math.round(r.top)),
        new Q(Math.round(r.left + s + o), Math.round(r.top)),
        new Q(Math.round(r.left + s + o), Math.round(r.height + r.top)),
        new Q(Math.round(r.left + s), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new Q(Math.round(r.left + s), Math.round(r.top + i)),
        new Q(Math.round(r.left + s + o), Math.round(r.top + i)),
        new Q(Math.round(r.left + s + o), Math.round(r.top + i + a)),
        new Q(Math.round(r.left + s), Math.round(r.top + i + a))
      ];
    default:
      return [
        new Q(Math.round(n.left), Math.round(n.top)),
        new Q(Math.round(n.left + n.width), Math.round(n.top)),
        new Q(Math.round(n.left + n.width), Math.round(n.height + n.top)),
        new Q(Math.round(n.left), Math.round(n.height + n.top))
      ];
  }
}, qh = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", po = "Hidden Text", jh = (
  /** @class */
  (function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), s = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), n.src = qh, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", s.style.fontFamily = A, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.appendChild(this._document.createTextNode(po)), r.appendChild(s), r.appendChild(n);
      var o = n.offsetTop - s.offsetTop + 2;
      r.removeChild(s), r.appendChild(this._document.createTextNode(po)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var a = n.offsetTop - r.offsetTop + 2;
      return i.removeChild(r), { baseline: o, middle: a };
    }, e.prototype.getMetrics = function(A, t) {
      var r = A + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
    }, e;
  })()
), $a = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(A, t) {
      this.context = A, this.options = t;
    }
    return e;
  })()
), Af = 1e4, ef = (
  /** @class */
  (function(e) {
    MA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new jh(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return A.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, A.prototype.applyEffect = function(t) {
      this.ctx.save(), Gh(t) && (this.ctx.globalAlpha = t.opacity), Nh(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Ma(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, A.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, A.prototype.renderStack = function(t) {
      return UA(this, void 0, void 0, function() {
        var r;
        return dA(this, function(n) {
          switch (n.label) {
            case 0:
              return r = t.element.container.styles, r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
            case 1:
              n.sent(), n.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNode = function(t) {
      return UA(this, void 0, void 0, function() {
        return dA(this, function(r) {
          switch (r.label) {
            case 0:
              if (oA(
                t.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
            case 1:
              return r.sent(), [4, this.renderNodeContent(t)];
            case 2:
              r.sent(), r.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderTextWithLetterSpacing = function(t, r, n) {
      var s = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
      else {
        var i = ms(t.text);
        i.reduce(function(o, a) {
          return s.ctx.fillText(a, o, t.bounds.top + n), o + s.ctx.measureText(a).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(i) {
        return i === "normal" || i === "small-caps";
      }).join(""), n = of(t.fontFamily).join(", "), s = kt(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, s, n].join(" "),
        n,
        s
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return UA(this, void 0, void 0, function() {
        var n, s, i, o, a, l, B, c, g = this;
        return dA(this, function(f) {
          return n = this.createFontStyle(r), s = n[0], i = n[1], o = n[2], this.ctx.font = s, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", a = this.fontMetrics.getMetrics(i, o), l = a.baseline, B = a.middle, c = r.paintOrder, t.textBounds.forEach(function(h) {
            c.forEach(function(w) {
              switch (w) {
                case 0:
                  g.ctx.fillStyle = BA(r.color), g.renderTextWithLetterSpacing(h, r.letterSpacing, l);
                  var I = r.textShadow;
                  I.length && h.text.trim().length && (I.slice(0).reverse().forEach(function(F) {
                    g.ctx.shadowColor = BA(F.color), g.ctx.shadowOffsetX = F.offsetX.number * g.options.scale, g.ctx.shadowOffsetY = F.offsetY.number * g.options.scale, g.ctx.shadowBlur = F.blur.number, g.renderTextWithLetterSpacing(h, r.letterSpacing, l);
                  }), g.ctx.shadowColor = "", g.ctx.shadowOffsetX = 0, g.ctx.shadowOffsetY = 0, g.ctx.shadowBlur = 0), r.textDecorationLine.length && (g.ctx.fillStyle = BA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(F) {
                    switch (F) {
                      case 1:
                        g.ctx.fillRect(h.bounds.left, Math.round(h.bounds.top + l), h.bounds.width, 1);
                        break;
                      case 2:
                        g.ctx.fillRect(h.bounds.left, Math.round(h.bounds.top), h.bounds.width, 1);
                        break;
                      case 3:
                        g.ctx.fillRect(h.bounds.left, Math.ceil(h.bounds.top + B), h.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && h.text.trim().length && (g.ctx.strokeStyle = BA(r.webkitTextStrokeColor), g.ctx.lineWidth = r.webkitTextStrokeWidth, g.ctx.lineJoin = window.chrome ? "miter" : "round", g.ctx.strokeText(h.text, h.bounds.left, h.bounds.top + l)), g.ctx.strokeStyle = "", g.ctx.lineWidth = 0, g.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderReplacedElement = function(t, r, n) {
      if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var s = Dr(t), i = Kr(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, s.left, s.top, s.width, s.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(t) {
      return UA(this, void 0, void 0, function() {
        var r, n, s, i, o, a, C, C, l, B, c, g, E, f, h, v, w, I, F, C, T, E, v;
        return dA(this, function(d) {
          switch (d.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, n = t.curves, s = r.styles, i = 0, o = r.textNodes, d.label = 1;
            case 1:
              return i < o.length ? (a = o[i], [4, this.renderTextNode(a, s)]) : [3, 4];
            case 2:
              d.sent(), d.label = 3;
            case 3:
              return i++, [3, 1];
            case 4:
              if (!(r instanceof ma)) return [3, 8];
              d.label = 5;
            case 5:
              return d.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return C = d.sent(), this.renderReplacedElement(r, n, C), [3, 8];
            case 7:
              return d.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof Ea && this.renderReplacedElement(r, n, r.canvas), !(r instanceof va)) return [3, 12];
              d.label = 9;
            case 9:
              return d.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return C = d.sent(), this.renderReplacedElement(r, n, C), [3, 12];
            case 11:
              return d.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof ba && r.tree ? (l = new A(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, l.render(r.tree)]) : [3, 14];
            case 13:
              B = d.sent(), r.width && r.height && this.ctx.drawImage(B, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), d.label = 14;
            case 14:
              if (r instanceof Es && (c = Math.min(r.bounds.width, r.bounds.height), r.type === br ? r.checked && (this.ctx.save(), this.path([
                new Q(r.bounds.left + c * 0.39363, r.bounds.top + c * 0.79),
                new Q(r.bounds.left + c * 0.16, r.bounds.top + c * 0.5549),
                new Q(r.bounds.left + c * 0.27347, r.bounds.top + c * 0.44071),
                new Q(r.bounds.left + c * 0.39694, r.bounds.top + c * 0.5649),
                new Q(r.bounds.left + c * 0.72983, r.bounds.top + c * 0.23),
                new Q(r.bounds.left + c * 0.84, r.bounds.top + c * 0.34085),
                new Q(r.bounds.left + c * 0.39363, r.bounds.top + c * 0.79)
              ]), this.ctx.fillStyle = BA(ro), this.ctx.fill(), this.ctx.restore()) : r.type === xr && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + c / 2, r.bounds.top + c / 2, c / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = BA(ro), this.ctx.fill(), this.ctx.restore())), tf(r) && r.value.length) {
                switch (g = this.createFontStyle(s), E = g[0], f = g[1], h = this.fontMetrics.getMetrics(E, f).baseline, this.ctx.font = E, this.ctx.fillStyle = BA(s.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = nf(r.styles.textAlign), v = Dr(r), w = 0, r.styles.textAlign) {
                  case 1:
                    w += v.width / 2;
                    break;
                  case 2:
                    w += v.width;
                    break;
                }
                I = v.add(w, 0, 0, -v.height / 2 + 1), this.ctx.save(), this.path([
                  new Q(v.left, v.top),
                  new Q(v.left + v.width, v.top),
                  new Q(v.left + v.width, v.top + v.height),
                  new Q(v.left, v.top + v.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new mt(r.value, I), s.letterSpacing, h), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!oA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (r.styles.listStyleImage === null) return [3, 19];
              if (F = r.styles.listStyleImage, F.type !== 0) return [3, 18];
              C = void 0, T = F.url, d.label = 15;
            case 15:
              return d.trys.push([15, 17, , 18]), [4, this.context.cache.match(T)];
            case 16:
              return C = d.sent(), this.ctx.drawImage(C, r.bounds.left - (C.width + 10), r.bounds.top), [3, 18];
            case 17:
              return d.sent(), this.context.logger.error("Error loading list-style-image " + T), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (E = this.createFontStyle(s)[0], this.ctx.font = E, this.ctx.fillStyle = BA(s.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", v = new ne(r.bounds.left, r.bounds.top + X(r.styles.paddingTop, r.bounds.width), r.bounds.width, Mi(s.lineHeight, s.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new mt(t.listValue, v), s.letterSpacing, Mi(s.lineHeight, s.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), d.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderStackContent = function(t) {
      return UA(this, void 0, void 0, function() {
        var r, n, F, s, i, F, o, a, F, l, B, F, c, g, F, f, h, F, w, I, F;
        return dA(this, function(C) {
          switch (C.label) {
            case 0:
              if (oA(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              C.sent(), r = 0, n = t.negativeZIndex, C.label = 2;
            case 2:
              return r < n.length ? (F = n[r], [4, this.renderStack(F)]) : [3, 5];
            case 3:
              C.sent(), C.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              C.sent(), s = 0, i = t.nonInlineLevel, C.label = 7;
            case 7:
              return s < i.length ? (F = i[s], [4, this.renderNode(F)]) : [3, 10];
            case 8:
              C.sent(), C.label = 9;
            case 9:
              return s++, [3, 7];
            case 10:
              o = 0, a = t.nonPositionedFloats, C.label = 11;
            case 11:
              return o < a.length ? (F = a[o], [4, this.renderStack(F)]) : [3, 14];
            case 12:
              C.sent(), C.label = 13;
            case 13:
              return o++, [3, 11];
            case 14:
              l = 0, B = t.nonPositionedInlineLevel, C.label = 15;
            case 15:
              return l < B.length ? (F = B[l], [4, this.renderStack(F)]) : [3, 18];
            case 16:
              C.sent(), C.label = 17;
            case 17:
              return l++, [3, 15];
            case 18:
              c = 0, g = t.inlineLevel, C.label = 19;
            case 19:
              return c < g.length ? (F = g[c], [4, this.renderNode(F)]) : [3, 22];
            case 20:
              C.sent(), C.label = 21;
            case 21:
              return c++, [3, 19];
            case 22:
              f = 0, h = t.zeroOrAutoZIndexOrTransformedOrOpacity, C.label = 23;
            case 23:
              return f < h.length ? (F = h[f], [4, this.renderStack(F)]) : [3, 26];
            case 24:
              C.sent(), C.label = 25;
            case 25:
              return f++, [3, 23];
            case 26:
              w = 0, I = t.positiveZIndex, C.label = 27;
            case 27:
              return w < I.length ? (F = I[w], [4, this.renderStack(F)]) : [3, 30];
            case 28:
              C.sent(), C.label = 29;
            case 29:
              return w++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.mask = function(t) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
    }, A.prototype.path = function(t) {
      this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
    }, A.prototype.formatPath = function(t) {
      var r = this;
      t.forEach(function(n, s) {
        var i = LA(n) ? n.start : n;
        s === 0 ? r.ctx.moveTo(i.x, i.y) : r.ctx.lineTo(i.x, i.y), LA(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
      });
    }, A.prototype.renderRepeat = function(t, r, n, s) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(n, s), this.ctx.fill(), this.ctx.translate(-n, -s);
    }, A.prototype.resizeImage = function(t, r, n) {
      var s;
      if (t.width === r && t.height === n)
        return t;
      var i = (s = this.canvas.ownerDocument) !== null && s !== void 0 ? s : document, o = i.createElement("canvas");
      o.width = Math.max(1, r), o.height = Math.max(1, n);
      var a = o.getContext("2d");
      return a.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), o;
    }, A.prototype.renderBackgroundImage = function(t) {
      return UA(this, void 0, void 0, function() {
        var r, n, s, i, o, a;
        return dA(this, function(l) {
          switch (l.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(B) {
                var c, g, f, Z, hA, fA, K, q, L, h, Z, hA, fA, K, q, w, I, F, C, T, E, v, d, b, L, H, Z, k, aA, K, q, NA, hA, fA, GA, IA, RA, $, PA, P, VA, R;
                return dA(this, function(bA) {
                  switch (bA.label) {
                    case 0:
                      if (B.type !== 0) return [3, 5];
                      c = void 0, g = B.url, bA.label = 1;
                    case 1:
                      return bA.trys.push([1, 3, , 4]), [4, s.context.cache.match(g)];
                    case 2:
                      return c = bA.sent(), [3, 4];
                    case 3:
                      return bA.sent(), s.context.logger.error("Error loading background-image " + g), [3, 4];
                    case 4:
                      return c && (f = Mn(t, r, [
                        c.width,
                        c.height,
                        c.width / c.height
                      ]), Z = f[0], hA = f[1], fA = f[2], K = f[3], q = f[4], L = s.ctx.createPattern(s.resizeImage(c, K, q), "repeat"), s.renderRepeat(Z, L, hA, fA)), [3, 6];
                    case 5:
                      Nc(B) ? (h = Mn(t, r, [null, null, null]), Z = h[0], hA = h[1], fA = h[2], K = h[3], q = h[4], w = Rc(B.angle, K, q), I = w[0], F = w[1], C = w[2], T = w[3], E = w[4], v = document.createElement("canvas"), v.width = K, v.height = q, d = v.getContext("2d"), b = d.createLinearGradient(F, T, C, E), _i(B.stops, I).forEach(function($A) {
                        return b.addColorStop($A.stop, BA($A.color));
                      }), d.fillStyle = b, d.fillRect(0, 0, K, q), K > 0 && q > 0 && (L = s.ctx.createPattern(v, "repeat"), s.renderRepeat(Z, L, hA, fA))) : Gc(B) && (H = Mn(t, r, [
                        null,
                        null,
                        null
                      ]), Z = H[0], k = H[1], aA = H[2], K = H[3], q = H[4], NA = B.position.length === 0 ? [Cs] : B.position, hA = X(NA[0], K), fA = X(NA[NA.length - 1], q), GA = kc(B, hA, fA, K, q), IA = GA[0], RA = GA[1], IA > 0 && RA > 0 && ($ = s.ctx.createRadialGradient(k + hA, aA + fA, 0, k + hA, aA + fA, IA), _i(B.stops, IA * 2).forEach(function($A) {
                        return $.addColorStop($A.stop, BA($A.color));
                      }), s.path(Z), s.ctx.fillStyle = $, IA !== RA ? (PA = t.bounds.left + 0.5 * t.bounds.width, P = t.bounds.top + 0.5 * t.bounds.height, VA = RA / IA, R = 1 / VA, s.ctx.save(), s.ctx.translate(PA, P), s.ctx.transform(1, 0, 0, VA, 0, 0), s.ctx.translate(-PA, -P), s.ctx.fillRect(k, R * (aA - P) + P, K, q * R), s.ctx.restore()) : s.ctx.fill())), bA.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, s = this, i = 0, o = t.styles.backgroundImage.slice(0).reverse(), l.label = 1;
            case 1:
              return i < o.length ? (a = o[i], [5, n(a)]) : [3, 4];
            case 2:
              l.sent(), l.label = 3;
            case 3:
              return i++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderSolidBorder = function(t, r, n) {
      return UA(this, void 0, void 0, function() {
        return dA(this, function(s) {
          return this.path(fo(n, r)), this.ctx.fillStyle = BA(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(t, r, n, s) {
      return UA(this, void 0, void 0, function() {
        var i, o;
        return dA(this, function(a) {
          switch (a.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, n, s)] : [3, 2];
            case 1:
              return a.sent(), [
                2
                /*return*/
              ];
            case 2:
              return i = $h(s, n), this.path(i), this.ctx.fillStyle = BA(t), this.ctx.fill(), o = Xh(s, n), this.path(o), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
      return UA(this, void 0, void 0, function() {
        var r, n, s, i, o, a, l, B, c = this;
        return dA(this, function(g) {
          switch (g.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, n = !he(r.backgroundColor) || r.backgroundImage.length, s = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], i = rf($e(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), he(r.backgroundColor) || (this.ctx.fillStyle = BA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              g.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(f) {
                c.ctx.save();
                var h = Sr(t.curves), w = f.inset ? 0 : Af, I = Ph(h, -w + (f.inset ? 1 : -1) * f.spread.number, (f.inset ? 1 : -1) * f.spread.number, f.spread.number * (f.inset ? -2 : 2), f.spread.number * (f.inset ? -2 : 2));
                f.inset ? (c.path(h), c.ctx.clip(), c.mask(I)) : (c.mask(h), c.ctx.clip(), c.path(I)), c.ctx.shadowOffsetX = f.offsetX.number + w, c.ctx.shadowOffsetY = f.offsetY.number, c.ctx.shadowColor = BA(f.color), c.ctx.shadowBlur = f.blur.number, c.ctx.fillStyle = f.inset ? BA(f.color) : "rgba(0,0,0,1)", c.ctx.fill(), c.ctx.restore();
              }), g.label = 2;
            case 2:
              o = 0, a = 0, l = s, g.label = 3;
            case 3:
              return a < l.length ? (B = l[a], B.style !== 0 && !he(B.color) && B.width > 0 ? B.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                B.color,
                B.width,
                o,
                t.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return g.sent(), [3, 11];
            case 5:
              return B.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                B.color,
                B.width,
                o,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return g.sent(), [3, 11];
            case 7:
              return B.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(B.color, B.width, o, t.curves)];
            case 8:
              return g.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(B.color, o, t.curves)];
            case 10:
              g.sent(), g.label = 11;
            case 11:
              o++, g.label = 12;
            case 12:
              return a++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderDashedDottedBorder = function(t, r, n, s, i) {
      return UA(this, void 0, void 0, function() {
        var o, a, l, B, c, g, f, h, w, I, F, C, T, E, v, d, v, d;
        return dA(this, function(b) {
          return this.ctx.save(), o = Jh(s, n), a = fo(s, n), i === 2 && (this.path(a), this.ctx.clip()), LA(a[0]) ? (l = a[0].start.x, B = a[0].start.y) : (l = a[0].x, B = a[0].y), LA(a[1]) ? (c = a[1].end.x, g = a[1].end.y) : (c = a[1].x, g = a[1].y), n === 0 || n === 2 ? f = Math.abs(l - c) : f = Math.abs(B - g), this.ctx.beginPath(), i === 3 ? this.formatPath(o) : this.formatPath(a.slice(0, 2)), h = r < 3 ? r * 3 : r * 2, w = r < 3 ? r * 2 : r, i === 3 && (h = r, w = r), I = !0, f <= h * 2 ? I = !1 : f <= h * 2 + w ? (F = f / (2 * h + w), h *= F, w *= F) : (C = Math.floor((f + w) / (h + w)), T = (f - C * h) / (C - 1), E = (f - (C + 1) * h) / C, w = E <= 0 || Math.abs(w - T) < Math.abs(w - E) ? T : E), I && (i === 3 ? this.ctx.setLineDash([0, h + w]) : this.ctx.setLineDash([h, w])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = BA(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (LA(a[0]) && (v = a[3], d = a[0], this.ctx.beginPath(), this.formatPath([new Q(v.end.x, v.end.y), new Q(d.start.x, d.start.y)]), this.ctx.stroke()), LA(a[1]) && (v = a[1], d = a[2], this.ctx.beginPath(), this.formatPath([new Q(v.end.x, v.end.y), new Q(d.start.x, d.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.render = function(t) {
      return UA(this, void 0, void 0, function() {
        var r;
        return dA(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = BA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = Vh(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  })($a)
), tf = function(e) {
  return e instanceof Ia || e instanceof Ha ? !0 : e instanceof Es && e.type !== xr && e.type !== br;
}, rf = function(e, A) {
  switch (e) {
    case 0:
      return Sr(A);
    case 2:
      return _h(A);
    case 1:
    default:
      return Kr(A);
  }
}, nf = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, sf = ["-apple-system", "system-ui"], of = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return sf.indexOf(A) === -1;
  }) : e;
}, af = (
  /** @class */
  (function(e) {
    MA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return A.prototype.render = function(t) {
      return UA(this, void 0, void 0, function() {
        var r, n;
        return dA(this, function(s) {
          switch (s.label) {
            case 0:
              return r = as(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, lf(r)];
            case 1:
              return n = s.sent(), this.options.backgroundColor && (this.ctx.fillStyle = BA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  })($a)
), lf = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Bf = (
  /** @class */
  (function() {
    function e(A) {
      var t = A.id, r = A.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return e.prototype.debug = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Jt([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.getTime = function() {
      return Date.now() - this.start;
    }, e.prototype.info = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Jt([this.id, this.getTime() + "ms"], A));
    }, e.prototype.warn = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Jt([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.error = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Jt([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.instances = {}, e;
  })()
), cf = (
  /** @class */
  (function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new Bf({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new xh(this, A);
    }
    return e.instanceCount = 1, e;
  })()
), wo = function(e, A) {
  return A === void 0 && (A = {}), uf(e, A);
};
typeof window < "u" && Oa.setContext(window);
var uf = function(e, A) {
  return UA(void 0, void 0, void 0, function() {
    var t, r, n, s, i, o, a, l, B, c, g, f, h, w, I, F, C, T, E, v, b, d, b, L, H, Z, k, aA, K, q, NA, hA, fA, GA, IA, RA, $, PA, P, VA;
    return dA(this, function(R) {
      switch (R.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = e.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return n = {
            allowTaint: (L = A.allowTaint) !== null && L !== void 0 ? L : !1,
            imageTimeout: (H = A.imageTimeout) !== null && H !== void 0 ? H : 15e3,
            proxy: A.proxy,
            useCORS: (Z = A.useCORS) !== null && Z !== void 0 ? Z : !1
          }, s = Jn({ logging: (k = A.logging) !== null && k !== void 0 ? k : !0, cache: A.cache }, n), i = {
            windowWidth: (aA = A.windowWidth) !== null && aA !== void 0 ? aA : r.innerWidth,
            windowHeight: (K = A.windowHeight) !== null && K !== void 0 ? K : r.innerHeight,
            scrollX: (q = A.scrollX) !== null && q !== void 0 ? q : r.pageXOffset,
            scrollY: (NA = A.scrollY) !== null && NA !== void 0 ? NA : r.pageYOffset
          }, o = new ne(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), a = new cf(s, o), l = (hA = A.foreignObjectRendering) !== null && hA !== void 0 ? hA : !1, B = {
            allowTaint: (fA = A.allowTaint) !== null && fA !== void 0 ? fA : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: l,
            copyStyles: l
          }, a.logger.debug("Starting document clone with size " + o.width + "x" + o.height + " scrolled to " + -o.left + "," + -o.top), c = new uo(a, e, B), g = c.clonedReferenceElement, g ? [4, c.toIFrame(t, o)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return f = R.sent(), h = vs(g) || gh(g) ? Pl(g.ownerDocument) : Nr(a, g), w = h.width, I = h.height, F = h.left, C = h.top, T = gf(a, g, A.backgroundColor), E = {
            canvas: A.canvas,
            backgroundColor: T,
            scale: (IA = (GA = A.scale) !== null && GA !== void 0 ? GA : r.devicePixelRatio) !== null && IA !== void 0 ? IA : 1,
            x: ((RA = A.x) !== null && RA !== void 0 ? RA : 0) + F,
            y: (($ = A.y) !== null && $ !== void 0 ? $ : 0) + C,
            width: (PA = A.width) !== null && PA !== void 0 ? PA : Math.ceil(w),
            height: (P = A.height) !== null && P !== void 0 ? P : Math.ceil(I)
          }, l ? (a.logger.debug("Document cloned, using foreign object rendering"), b = new af(a, E), [4, b.render(g)]) : [3, 3];
        case 2:
          return v = R.sent(), [3, 5];
        case 3:
          return a.logger.debug("Document cloned, element located at " + F + "," + C + " with size " + w + "x" + I + " using computed rendering"), a.logger.debug("Starting DOM parsing"), d = Ta(a, g), T === d.styles.backgroundColor && (d.styles.backgroundColor = re.TRANSPARENT), a.logger.debug("Starting renderer for element at " + E.x + "," + E.y + " with size " + E.width + "x" + E.height), b = new ef(a, E), [4, b.render(d)];
        case 4:
          v = R.sent(), R.label = 5;
        case 5:
          return (!((VA = A.removeContainer) !== null && VA !== void 0) || VA) && (uo.destroy(f) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), a.logger.debug("Finished rendering"), [2, v];
      }
    });
  });
}, gf = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? Ut(e, getComputedStyle(r.documentElement).backgroundColor) : re.TRANSPARENT, s = r.body ? Ut(e, getComputedStyle(r.body).backgroundColor) : re.TRANSPARENT, i = typeof t == "string" ? Ut(e, t) : t === null ? re.TRANSPARENT : 4294967295;
  return A === r.documentElement ? he(n) ? he(s) ? i : s : n : i;
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Er = globalThis, ys = Er.ShadowRoot && (Er.ShadyCSS === void 0 || Er.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Hs = Symbol(), Qo = /* @__PURE__ */ new WeakMap();
let Xa = class {
  constructor(A, t, r) {
    if (this._$cssResult$ = !0, r !== Hs) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = A, this.t = t;
  }
  get styleSheet() {
    let A = this.o;
    const t = this.t;
    if (ys && A === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (A = Qo.get(t)), A === void 0 && ((this.o = A = new CSSStyleSheet()).replaceSync(this.cssText), r && Qo.set(t, A));
    }
    return A;
  }
  toString() {
    return this.cssText;
  }
};
const hf = (e) => new Xa(typeof e == "string" ? e : e + "", void 0, Hs), ff = (e, ...A) => {
  const t = e.length === 1 ? e[0] : A.reduce((r, n, s) => r + ((i) => {
    if (i._$cssResult$ === !0) return i.cssText;
    if (typeof i == "number") return i;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + i + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + e[s + 1], e[0]);
  return new Xa(t, e, Hs);
}, pf = (e, A) => {
  if (ys) e.adoptedStyleSheets = A.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of A) {
    const r = document.createElement("style"), n = Er.litNonce;
    n !== void 0 && r.setAttribute("nonce", n), r.textContent = t.cssText, e.appendChild(r);
  }
}, Co = ys ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((A) => {
  let t = "";
  for (const r of A.cssRules) t += r.cssText;
  return hf(t);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: wf, defineProperty: df, getOwnPropertyDescriptor: Qf, getOwnPropertyNames: Cf, getOwnPropertySymbols: Uf, getPrototypeOf: Ff } = Object, fe = globalThis, Uo = fe.trustedTypes, mf = Uo ? Uo.emptyScript : "", Ef = fe.reactiveElementPolyfillSupport, vt = (e, A) => e, Rr = { toAttribute(e, A) {
  switch (A) {
    case Boolean:
      e = e ? mf : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, A) {
  let t = e;
  switch (A) {
    case Boolean:
      t = e !== null;
      break;
    case Number:
      t = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(e);
      } catch {
        t = null;
      }
  }
  return t;
} }, Is = (e, A) => !wf(e, A), Fo = { attribute: !0, type: String, converter: Rr, reflect: !1, useDefault: !1, hasChanged: Is };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), fe.litPropertyMetadata ?? (fe.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Xe = class extends HTMLElement {
  static addInitializer(A) {
    this._$Ei(), (this.l ?? (this.l = [])).push(A);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(A, t = Fo) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(A) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(A, t), !t.noAccessor) {
      const r = Symbol(), n = this.getPropertyDescriptor(A, r, t);
      n !== void 0 && df(this.prototype, A, n);
    }
  }
  static getPropertyDescriptor(A, t, r) {
    const { get: n, set: s } = Qf(this.prototype, A) ?? { get() {
      return this[t];
    }, set(i) {
      this[t] = i;
    } };
    return { get: n, set(i) {
      const o = n?.call(this);
      s?.call(this, i), this.requestUpdate(A, o, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(A) {
    return this.elementProperties.get(A) ?? Fo;
  }
  static _$Ei() {
    if (this.hasOwnProperty(vt("elementProperties"))) return;
    const A = Ff(this);
    A.finalize(), A.l !== void 0 && (this.l = [...A.l]), this.elementProperties = new Map(A.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(vt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(vt("properties"))) {
      const t = this.properties, r = [...Cf(t), ...Uf(t)];
      for (const n of r) this.createProperty(n, t[n]);
    }
    const A = this[Symbol.metadata];
    if (A !== null) {
      const t = litPropertyMetadata.get(A);
      if (t !== void 0) for (const [r, n] of t) this.elementProperties.set(r, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const n = this._$Eu(t, r);
      n !== void 0 && this._$Eh.set(n, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(A) {
    const t = [];
    if (Array.isArray(A)) {
      const r = new Set(A.flat(1 / 0).reverse());
      for (const n of r) t.unshift(Co(n));
    } else A !== void 0 && t.push(Co(A));
    return t;
  }
  static _$Eu(A, t) {
    const r = t.attribute;
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
    const A = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const r of t.keys()) this.hasOwnProperty(r) && (A.set(r, this[r]), delete this[r]);
    A.size > 0 && (this._$Ep = A);
  }
  createRenderRoot() {
    const A = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return pf(A, this.constructor.elementStyles), A;
  }
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), this._$EO?.forEach((A) => A.hostConnected?.());
  }
  enableUpdating(A) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((A) => A.hostDisconnected?.());
  }
  attributeChangedCallback(A, t, r) {
    this._$AK(A, r);
  }
  _$ET(A, t) {
    const r = this.constructor.elementProperties.get(A), n = this.constructor._$Eu(A, r);
    if (n !== void 0 && r.reflect === !0) {
      const s = (r.converter?.toAttribute !== void 0 ? r.converter : Rr).toAttribute(t, r.type);
      this._$Em = A, s == null ? this.removeAttribute(n) : this.setAttribute(n, s), this._$Em = null;
    }
  }
  _$AK(A, t) {
    const r = this.constructor, n = r._$Eh.get(A);
    if (n !== void 0 && this._$Em !== n) {
      const s = r.getPropertyOptions(n), i = typeof s.converter == "function" ? { fromAttribute: s.converter } : s.converter?.fromAttribute !== void 0 ? s.converter : Rr;
      this._$Em = n;
      const o = i.fromAttribute(t, s.type);
      this[n] = o ?? this._$Ej?.get(n) ?? o, this._$Em = null;
    }
  }
  requestUpdate(A, t, r, n = !1, s) {
    if (A !== void 0) {
      const i = this.constructor;
      if (n === !1 && (s = this[A]), r ?? (r = i.getPropertyOptions(A)), !((r.hasChanged ?? Is)(s, t) || r.useDefault && r.reflect && s === this._$Ej?.get(A) && !this.hasAttribute(i._$Eu(A, r)))) return;
      this.C(A, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(A, t, { useDefault: r, reflect: n, wrapped: s }, i) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(A) && (this._$Ej.set(A, i ?? t ?? this[A]), s !== !0 || i !== void 0) || (this._$AL.has(A) || (this.hasUpdated || r || (t = void 0), this._$AL.set(A, t)), n === !0 && this._$Em !== A && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(A));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
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
        for (const [n, s] of this._$Ep) this[n] = s;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [n, s] of r) {
        const { wrapped: i } = s, o = this[n];
        i !== !0 || this._$AL.has(n) || o === void 0 || this.C(n, void 0, s, o);
      }
    }
    let A = !1;
    const t = this._$AL;
    try {
      A = this.shouldUpdate(t), A ? (this.willUpdate(t), this._$EO?.forEach((r) => r.hostUpdate?.()), this.update(t)) : this._$EM();
    } catch (r) {
      throw A = !1, this._$EM(), r;
    }
    A && this._$AE(t);
  }
  willUpdate(A) {
  }
  _$AE(A) {
    this._$EO?.forEach((t) => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(A)), this.updated(A);
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(A) {
  }
  firstUpdated(A) {
  }
};
Xe.elementStyles = [], Xe.shadowRootOptions = { mode: "open" }, Xe[vt("elementProperties")] = /* @__PURE__ */ new Map(), Xe[vt("finalized")] = /* @__PURE__ */ new Map(), Ef?.({ ReactiveElement: Xe }), (fe.reactiveElementVersions ?? (fe.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yt = globalThis, mo = (e) => e, kr = yt.trustedTypes, Eo = kr ? kr.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, Ja = "$lit$", le = `lit$${Math.random().toFixed(9).slice(2)}$`, Wa = "?" + le, vf = `<${Wa}>`, He = document, St = () => He.createComment(""), Kt = (e) => e === null || typeof e != "object" && typeof e != "function", bs = Array.isArray, yf = (e) => bs(e) || typeof e?.[Symbol.iterator] == "function", Nn = `[ 	
\f\r]`, lt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, vo = /-->/g, yo = />/g, Ue = RegExp(`>|${Nn}(?:([^\\s"'>=/]+)(${Nn}*=${Nn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ho = /'/g, Io = /"/g, Ya = /^(?:script|style|textarea|title)$/i, za = (e) => (A, ...t) => ({ _$litType$: e, strings: A, values: t }), J = za(1), wA = za(2), Ie = Symbol.for("lit-noChange"), nA = Symbol.for("lit-nothing"), bo = /* @__PURE__ */ new WeakMap(), Ee = He.createTreeWalker(He, 129);
function Za(e, A) {
  if (!bs(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Eo !== void 0 ? Eo.createHTML(A) : A;
}
const Hf = (e, A) => {
  const t = e.length - 1, r = [];
  let n, s = A === 2 ? "<svg>" : A === 3 ? "<math>" : "", i = lt;
  for (let o = 0; o < t; o++) {
    const a = e[o];
    let l, B, c = -1, g = 0;
    for (; g < a.length && (i.lastIndex = g, B = i.exec(a), B !== null); ) g = i.lastIndex, i === lt ? B[1] === "!--" ? i = vo : B[1] !== void 0 ? i = yo : B[2] !== void 0 ? (Ya.test(B[2]) && (n = RegExp("</" + B[2], "g")), i = Ue) : B[3] !== void 0 && (i = Ue) : i === Ue ? B[0] === ">" ? (i = n ?? lt, c = -1) : B[1] === void 0 ? c = -2 : (c = i.lastIndex - B[2].length, l = B[1], i = B[3] === void 0 ? Ue : B[3] === '"' ? Io : Ho) : i === Io || i === Ho ? i = Ue : i === vo || i === yo ? i = lt : (i = Ue, n = void 0);
    const f = i === Ue && e[o + 1].startsWith("/>") ? " " : "";
    s += i === lt ? a + vf : c >= 0 ? (r.push(l), a.slice(0, c) + Ja + a.slice(c) + le + f) : a + le + (c === -2 ? o : f);
  }
  return [Za(e, s + (e[t] || "<?>") + (A === 2 ? "</svg>" : A === 3 ? "</math>" : "")), r];
};
class Dt {
  constructor({ strings: A, _$litType$: t }, r) {
    let n;
    this.parts = [];
    let s = 0, i = 0;
    const o = A.length - 1, a = this.parts, [l, B] = Hf(A, t);
    if (this.el = Dt.createElement(l, r), Ee.currentNode = this.el.content, t === 2 || t === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (n = Ee.nextNode()) !== null && a.length < o; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const c of n.getAttributeNames()) if (c.endsWith(Ja)) {
          const g = B[i++], f = n.getAttribute(c).split(le), h = /([.?@])?(.*)/.exec(g);
          a.push({ type: 1, index: s, name: h[2], strings: f, ctor: h[1] === "." ? bf : h[1] === "?" ? xf : h[1] === "@" ? Tf : Zr }), n.removeAttribute(c);
        } else c.startsWith(le) && (a.push({ type: 6, index: s }), n.removeAttribute(c));
        if (Ya.test(n.tagName)) {
          const c = n.textContent.split(le), g = c.length - 1;
          if (g > 0) {
            n.textContent = kr ? kr.emptyScript : "";
            for (let f = 0; f < g; f++) n.append(c[f], St()), Ee.nextNode(), a.push({ type: 2, index: ++s });
            n.append(c[g], St());
          }
        }
      } else if (n.nodeType === 8) if (n.data === Wa) a.push({ type: 2, index: s });
      else {
        let c = -1;
        for (; (c = n.data.indexOf(le, c + 1)) !== -1; ) a.push({ type: 7, index: s }), c += le.length - 1;
      }
      s++;
    }
  }
  static createElement(A, t) {
    const r = He.createElement("template");
    return r.innerHTML = A, r;
  }
}
function ze(e, A, t = e, r) {
  if (A === Ie) return A;
  let n = r !== void 0 ? t._$Co?.[r] : t._$Cl;
  const s = Kt(A) ? void 0 : A._$litDirective$;
  return n?.constructor !== s && (n?._$AO?.(!1), s === void 0 ? n = void 0 : (n = new s(e), n._$AT(e, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = n : t._$Cl = n), n !== void 0 && (A = ze(e, n._$AS(e, A.values), n, r)), A;
}
class If {
  constructor(A, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = A, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(A) {
    const { el: { content: t }, parts: r } = this._$AD, n = (A?.creationScope ?? He).importNode(t, !0);
    Ee.currentNode = n;
    let s = Ee.nextNode(), i = 0, o = 0, a = r[0];
    for (; a !== void 0; ) {
      if (i === a.index) {
        let l;
        a.type === 2 ? l = new _t(s, s.nextSibling, this, A) : a.type === 1 ? l = new a.ctor(s, a.name, a.strings, this, A) : a.type === 6 && (l = new Lf(s, this, A)), this._$AV.push(l), a = r[++o];
      }
      i !== a?.index && (s = Ee.nextNode(), i++);
    }
    return Ee.currentNode = He, n;
  }
  p(A) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(A, r, t), t += r.strings.length - 2) : r._$AI(A[t])), t++;
  }
}
class _t {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(A, t, r, n) {
    this.type = 2, this._$AH = nA, this._$AN = void 0, this._$AA = A, this._$AB = t, this._$AM = r, this.options = n, this._$Cv = n?.isConnected ?? !0;
  }
  get parentNode() {
    let A = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && A?.nodeType === 11 && (A = t.parentNode), A;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(A, t = this) {
    A = ze(this, A, t), Kt(A) ? A === nA || A == null || A === "" ? (this._$AH !== nA && this._$AR(), this._$AH = nA) : A !== this._$AH && A !== Ie && this._(A) : A._$litType$ !== void 0 ? this.$(A) : A.nodeType !== void 0 ? this.T(A) : yf(A) ? this.k(A) : this._(A);
  }
  O(A) {
    return this._$AA.parentNode.insertBefore(A, this._$AB);
  }
  T(A) {
    this._$AH !== A && (this._$AR(), this._$AH = this.O(A));
  }
  _(A) {
    this._$AH !== nA && Kt(this._$AH) ? this._$AA.nextSibling.data = A : this.T(He.createTextNode(A)), this._$AH = A;
  }
  $(A) {
    const { values: t, _$litType$: r } = A, n = typeof r == "number" ? this._$AC(A) : (r.el === void 0 && (r.el = Dt.createElement(Za(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === n) this._$AH.p(t);
    else {
      const s = new If(n, this), i = s.u(this.options);
      s.p(t), this.T(i), this._$AH = s;
    }
  }
  _$AC(A) {
    let t = bo.get(A.strings);
    return t === void 0 && bo.set(A.strings, t = new Dt(A)), t;
  }
  k(A) {
    bs(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, n = 0;
    for (const s of A) n === t.length ? t.push(r = new _t(this.O(St()), this.O(St()), this, this.options)) : r = t[n], r._$AI(s), n++;
    n < t.length && (this._$AR(r && r._$AB.nextSibling, n), t.length = n);
  }
  _$AR(A = this._$AA.nextSibling, t) {
    for (this._$AP?.(!1, !0, t); A !== this._$AB; ) {
      const r = mo(A).nextSibling;
      mo(A).remove(), A = r;
    }
  }
  setConnected(A) {
    this._$AM === void 0 && (this._$Cv = A, this._$AP?.(A));
  }
}
class Zr {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(A, t, r, n, s) {
    this.type = 1, this._$AH = nA, this._$AN = void 0, this.element = A, this.name = t, this._$AM = n, this.options = s, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = nA;
  }
  _$AI(A, t = this, r, n) {
    const s = this.strings;
    let i = !1;
    if (s === void 0) A = ze(this, A, t, 0), i = !Kt(A) || A !== this._$AH && A !== Ie, i && (this._$AH = A);
    else {
      const o = A;
      let a, l;
      for (A = s[0], a = 0; a < s.length - 1; a++) l = ze(this, o[r + a], t, a), l === Ie && (l = this._$AH[a]), i || (i = !Kt(l) || l !== this._$AH[a]), l === nA ? A = nA : A !== nA && (A += (l ?? "") + s[a + 1]), this._$AH[a] = l;
    }
    i && !n && this.j(A);
  }
  j(A) {
    A === nA ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, A ?? "");
  }
}
class bf extends Zr {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(A) {
    this.element[this.name] = A === nA ? void 0 : A;
  }
}
class xf extends Zr {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(A) {
    this.element.toggleAttribute(this.name, !!A && A !== nA);
  }
}
class Tf extends Zr {
  constructor(A, t, r, n, s) {
    super(A, t, r, n, s), this.type = 5;
  }
  _$AI(A, t = this) {
    if ((A = ze(this, A, t, 0) ?? nA) === Ie) return;
    const r = this._$AH, n = A === nA && r !== nA || A.capture !== r.capture || A.once !== r.once || A.passive !== r.passive, s = A !== nA && (r === nA || n);
    n && this.element.removeEventListener(this.name, this, r), s && this.element.addEventListener(this.name, this, A), this._$AH = A;
  }
  handleEvent(A) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, A) : this._$AH.handleEvent(A);
  }
}
class Lf {
  constructor(A, t, r) {
    this.element = A, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(A) {
    ze(this, A);
  }
}
const Sf = yt.litHtmlPolyfillSupport;
Sf?.(Dt, _t), (yt.litHtmlVersions ?? (yt.litHtmlVersions = [])).push("3.3.2");
const Kf = (e, A, t) => {
  const r = t?.renderBefore ?? A;
  let n = r._$litPart$;
  if (n === void 0) {
    const s = t?.renderBefore ?? null;
    r._$litPart$ = n = new _t(A.insertBefore(St(), s), s, void 0, t ?? {});
  }
  return n._$AI(e), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ht = globalThis;
let It = class extends Xe {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const A = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = A.firstChild), A;
  }
  update(A) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(A), this._$Do = Kf(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return Ie;
  }
};
It._$litElement$ = !0, It.finalized = !0, Ht.litElementHydrateSupport?.({ LitElement: It });
const Df = Ht.litElementPolyfillSupport;
Df?.({ LitElement: It });
(Ht.litElementVersions ?? (Ht.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Rf = (e) => (A, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(e, A);
  }) : customElements.define(e, A);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const kf = { attribute: !0, type: String, converter: Rr, reflect: !1, hasChanged: Is }, _f = (e = kf, A, t) => {
  const { kind: r, metadata: n } = t;
  let s = globalThis.litPropertyMetadata.get(n);
  if (s === void 0 && globalThis.litPropertyMetadata.set(n, s = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), s.set(t.name, e), r === "accessor") {
    const { name: i } = t;
    return { set(o) {
      const a = A.get.call(this);
      A.set.call(this, o), this.requestUpdate(i, a, e, !0, o);
    }, init(o) {
      return o !== void 0 && this.C(i, void 0, e, o), o;
    } };
  }
  if (r === "setter") {
    const { name: i } = t;
    return function(o) {
      const a = this[i];
      A.call(this, o), this.requestUpdate(i, a, e, !0, o);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function Ot(e) {
  return (A, t) => typeof t == "object" ? _f(e, A, t) : ((r, n, s) => {
    const i = n.hasOwnProperty(s);
    return n.constructor.createProperty(s, r), i ? Object.getOwnPropertyDescriptor(n, s) : void 0;
  })(e, A, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function W(e) {
  return Ot({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Of = { CHILD: 2 }, Mf = (e) => (...A) => ({ _$litDirective$: e, values: A });
class Nf {
  constructor(A) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(A, t, r) {
    this._$Ct = A, this._$AM = t, this._$Ci = r;
  }
  _$AS(A, t) {
    return this.update(A, t);
  }
  update(A, t) {
    return this.render(...t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class fs extends Nf {
  constructor(A) {
    if (super(A), this.it = nA, A.type !== Of.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(A) {
    if (A === nA || A == null) return this._t = void 0, this.it = A;
    if (A === Ie) return A;
    if (typeof A != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (A === this.it) return this._t;
    this.it = A;
    const t = [A];
    return t.raw = t, this._t = { _$litType$: this.constructor.resultType, strings: t, values: [] };
  }
}
fs.directiveName = "unsafeHTML", fs.resultType = 1;
const Gf = Mf(fs);
function xs() {
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
var xe = xs();
function qa(e) {
  xe = e;
}
var bt = { exec: () => null };
function M(e, A = "") {
  let t = typeof e == "string" ? e : e.source;
  const r = {
    replace: (n, s) => {
      let i = typeof s == "string" ? s : s.source;
      return i = i.replace(FA.caret, "$1"), t = t.replace(n, i), r;
    },
    getRegex: () => new RegExp(t, A)
  };
  return r;
}
var FA = {
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
  listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
  htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
}, Pf = /^(?:[ \t]*(?:\n|$))+/, Vf = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, $f = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Mt = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Xf = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ts = /(?:[*+-]|\d{1,9}[.)])/, ja = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Al = M(ja).replace(/bull/g, Ts).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Jf = M(ja).replace(/bull/g, Ts).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Ls = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Wf = /^[^\n]+/, Ss = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Yf = M(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Ss).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), zf = M(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ts).getRegex(), qr = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ks = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Zf = M(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", Ks).replace("tag", qr).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), el = M(Ls).replace("hr", Mt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qr).getRegex(), qf = M(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", el).getRegex(), Ds = {
  blockquote: qf,
  code: Vf,
  def: Yf,
  fences: $f,
  heading: Xf,
  hr: Mt,
  html: Zf,
  lheading: Al,
  list: zf,
  newline: Pf,
  paragraph: el,
  table: bt,
  text: Wf
}, xo = M(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", Mt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qr).getRegex(), jf = {
  ...Ds,
  lheading: Jf,
  table: xo,
  paragraph: M(Ls).replace("hr", Mt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", xo).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qr).getRegex()
}, Ap = {
  ...Ds,
  html: M(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", Ks).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: bt,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: M(Ls).replace("hr", Mt).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Al).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, ep = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, tp = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, tl = /^( {2,}|\\)\n(?!\s*$)/, rp = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, jr = /[\p{P}\p{S}]/u, Rs = /[\s\p{P}\p{S}]/u, rl = /[^\s\p{P}\p{S}]/u, np = M(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Rs).getRegex(), nl = /(?!~)[\p{P}\p{S}]/u, sp = /(?!~)[\s\p{P}\p{S}]/u, ip = /(?:[^\s\p{P}\p{S}]|~)/u, op = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, sl = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, ap = M(sl, "u").replace(/punct/g, jr).getRegex(), lp = M(sl, "u").replace(/punct/g, nl).getRegex(), il = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Bp = M(il, "gu").replace(/notPunctSpace/g, rl).replace(/punctSpace/g, Rs).replace(/punct/g, jr).getRegex(), cp = M(il, "gu").replace(/notPunctSpace/g, ip).replace(/punctSpace/g, sp).replace(/punct/g, nl).getRegex(), up = M(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, rl).replace(/punctSpace/g, Rs).replace(/punct/g, jr).getRegex(), gp = M(/\\(punct)/, "gu").replace(/punct/g, jr).getRegex(), hp = M(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), fp = M(Ks).replace("(?:-->|$)", "-->").getRegex(), pp = M(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", fp).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), _r = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, wp = M(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", _r).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ol = M(/^!?\[(label)\]\[(ref)\]/).replace("label", _r).replace("ref", Ss).getRegex(), al = M(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ss).getRegex(), dp = M("reflink|nolink(?!\\()", "g").replace("reflink", ol).replace("nolink", al).getRegex(), ks = {
  _backpedal: bt,
  // only used for GFM url
  anyPunctuation: gp,
  autolink: hp,
  blockSkip: op,
  br: tl,
  code: tp,
  del: bt,
  emStrongLDelim: ap,
  emStrongRDelimAst: Bp,
  emStrongRDelimUnd: up,
  escape: ep,
  link: wp,
  nolink: al,
  punctuation: np,
  reflink: ol,
  reflinkSearch: dp,
  tag: pp,
  text: rp,
  url: bt
}, Qp = {
  ...ks,
  link: M(/^!?\[(label)\]\((.*?)\)/).replace("label", _r).getRegex(),
  reflink: M(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _r).getRegex()
}, ps = {
  ...ks,
  emStrongRDelimAst: cp,
  emStrongLDelim: lp,
  url: M(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Cp = {
  ...ps,
  br: M(tl).replace("{2,}", "*").getRegex(),
  text: M(ps.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, pr = {
  normal: Ds,
  gfm: jf,
  pedantic: Ap
}, Bt = {
  normal: ks,
  gfm: ps,
  breaks: Cp,
  pedantic: Qp
}, Up = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, To = (e) => Up[e];
function YA(e, A) {
  if (A) {
    if (FA.escapeTest.test(e))
      return e.replace(FA.escapeReplace, To);
  } else if (FA.escapeTestNoEncode.test(e))
    return e.replace(FA.escapeReplaceNoEncode, To);
  return e;
}
function Lo(e) {
  try {
    e = encodeURI(e).replace(FA.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function So(e, A) {
  const t = e.replace(FA.findPipe, (s, i, o) => {
    let a = !1, l = i;
    for (; --l >= 0 && o[l] === "\\"; ) a = !a;
    return a ? "|" : " |";
  }), r = t.split(FA.splitPipe);
  let n = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), A)
    if (r.length > A)
      r.splice(A);
    else
      for (; r.length < A; ) r.push("");
  for (; n < r.length; n++)
    r[n] = r[n].trim().replace(FA.slashPipe, "|");
  return r;
}
function ct(e, A, t) {
  const r = e.length;
  if (r === 0)
    return "";
  let n = 0;
  for (; n < r && e.charAt(r - n - 1) === A; )
    n++;
  return e.slice(0, r - n);
}
function Fp(e, A) {
  if (e.indexOf(A[1]) === -1)
    return -1;
  let t = 0;
  for (let r = 0; r < e.length; r++)
    if (e[r] === "\\")
      r++;
    else if (e[r] === A[0])
      t++;
    else if (e[r] === A[1] && (t--, t < 0))
      return r;
  return t > 0 ? -2 : -1;
}
function Ko(e, A, t, r, n) {
  const s = A.href, i = A.title || null, o = e[1].replace(n.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  const a = {
    type: e[0].charAt(0) === "!" ? "image" : "link",
    raw: t,
    href: s,
    title: i,
    text: o,
    tokens: r.inlineTokens(o)
  };
  return r.state.inLink = !1, a;
}
function mp(e, A, t) {
  const r = e.match(t.other.indentCodeCompensation);
  if (r === null)
    return A;
  const n = r[1];
  return A.split(`
`).map((s) => {
    const i = s.match(t.other.beginningSpace);
    if (i === null)
      return s;
    const [o] = i;
    return o.length >= n.length ? s.slice(n.length) : s;
  }).join(`
`);
}
var Or = class {
  // set by the lexer
  constructor(e) {
    V(this, "options");
    V(this, "rules");
    // set by the lexer
    V(this, "lexer");
    this.options = e || xe;
  }
  space(e) {
    const A = this.rules.block.newline.exec(e);
    if (A && A[0].length > 0)
      return {
        type: "space",
        raw: A[0]
      };
  }
  code(e) {
    const A = this.rules.block.code.exec(e);
    if (A) {
      const t = A[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: A[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? t : ct(t, `
`)
      };
    }
  }
  fences(e) {
    const A = this.rules.block.fences.exec(e);
    if (A) {
      const t = A[0], r = mp(t, A[3] || "", this.rules);
      return {
        type: "code",
        raw: t,
        lang: A[2] ? A[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : A[2],
        text: r
      };
    }
  }
  heading(e) {
    const A = this.rules.block.heading.exec(e);
    if (A) {
      let t = A[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        const r = ct(t, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (t = r.trim());
      }
      return {
        type: "heading",
        raw: A[0],
        depth: A[1].length,
        text: t,
        tokens: this.lexer.inline(t)
      };
    }
  }
  hr(e) {
    const A = this.rules.block.hr.exec(e);
    if (A)
      return {
        type: "hr",
        raw: ct(A[0], `
`)
      };
  }
  blockquote(e) {
    const A = this.rules.block.blockquote.exec(e);
    if (A) {
      let t = ct(A[0], `
`).split(`
`), r = "", n = "";
      const s = [];
      for (; t.length > 0; ) {
        let i = !1;
        const o = [];
        let a;
        for (a = 0; a < t.length; a++)
          if (this.rules.other.blockquoteStart.test(t[a]))
            o.push(t[a]), i = !0;
          else if (!i)
            o.push(t[a]);
          else
            break;
        t = t.slice(a);
        const l = o.join(`
`), B = l.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${l}` : l, n = n ? `${n}
${B}` : B;
        const c = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(B, s, !0), this.lexer.state.top = c, t.length === 0)
          break;
        const g = s.at(-1);
        if (g?.type === "code")
          break;
        if (g?.type === "blockquote") {
          const f = g, h = f.raw + `
` + t.join(`
`), w = this.blockquote(h);
          s[s.length - 1] = w, r = r.substring(0, r.length - f.raw.length) + w.raw, n = n.substring(0, n.length - f.text.length) + w.text;
          break;
        } else if (g?.type === "list") {
          const f = g, h = f.raw + `
` + t.join(`
`), w = this.list(h);
          s[s.length - 1] = w, r = r.substring(0, r.length - g.raw.length) + w.raw, n = n.substring(0, n.length - f.raw.length) + w.raw, t = h.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: r,
        tokens: s,
        text: n
      };
    }
  }
  list(e) {
    let A = this.rules.block.list.exec(e);
    if (A) {
      let t = A[1].trim();
      const r = t.length > 1, n = {
        type: "list",
        raw: "",
        ordered: r,
        start: r ? +t.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      t = r ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`, this.options.pedantic && (t = r ? t : "[*+-]");
      const s = this.rules.other.listItemRegex(t);
      let i = !1;
      for (; e; ) {
        let a = !1, l = "", B = "";
        if (!(A = s.exec(e)) || this.rules.block.hr.test(e))
          break;
        l = A[0], e = e.substring(l.length);
        let c = A[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (F) => " ".repeat(3 * F.length)), g = e.split(`
`, 1)[0], f = !c.trim(), h = 0;
        if (this.options.pedantic ? (h = 2, B = c.trimStart()) : f ? h = A[1].length + 1 : (h = A[2].search(this.rules.other.nonSpaceChar), h = h > 4 ? 1 : h, B = c.slice(h), h += A[1].length), f && this.rules.other.blankLine.test(g) && (l += g + `
`, e = e.substring(g.length + 1), a = !0), !a) {
          const F = this.rules.other.nextBulletRegex(h), C = this.rules.other.hrRegex(h), T = this.rules.other.fencesBeginRegex(h), E = this.rules.other.headingBeginRegex(h), v = this.rules.other.htmlBeginRegex(h);
          for (; e; ) {
            const d = e.split(`
`, 1)[0];
            let b;
            if (g = d, this.options.pedantic ? (g = g.replace(this.rules.other.listReplaceNesting, "  "), b = g) : b = g.replace(this.rules.other.tabCharGlobal, "    "), T.test(g) || E.test(g) || v.test(g) || F.test(g) || C.test(g))
              break;
            if (b.search(this.rules.other.nonSpaceChar) >= h || !g.trim())
              B += `
` + b.slice(h);
            else {
              if (f || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || T.test(c) || E.test(c) || C.test(c))
                break;
              B += `
` + g;
            }
            !f && !g.trim() && (f = !0), l += d + `
`, e = e.substring(d.length + 1), c = b.slice(h);
          }
        }
        n.loose || (i ? n.loose = !0 : this.rules.other.doubleBlankLine.test(l) && (i = !0));
        let w = null, I;
        this.options.gfm && (w = this.rules.other.listIsTask.exec(B), w && (I = w[0] !== "[ ] ", B = B.replace(this.rules.other.listReplaceTask, ""))), n.items.push({
          type: "list_item",
          raw: l,
          task: !!w,
          checked: I,
          loose: !1,
          text: B,
          tokens: []
        }), n.raw += l;
      }
      const o = n.items.at(-1);
      if (o)
        o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
      else
        return;
      n.raw = n.raw.trimEnd();
      for (let a = 0; a < n.items.length; a++)
        if (this.lexer.state.top = !1, n.items[a].tokens = this.lexer.blockTokens(n.items[a].text, []), !n.loose) {
          const l = n.items[a].tokens.filter((c) => c.type === "space"), B = l.length > 0 && l.some((c) => this.rules.other.anyLine.test(c.raw));
          n.loose = B;
        }
      if (n.loose)
        for (let a = 0; a < n.items.length; a++)
          n.items[a].loose = !0;
      return n;
    }
  }
  html(e) {
    const A = this.rules.block.html.exec(e);
    if (A)
      return {
        type: "html",
        block: !0,
        raw: A[0],
        pre: A[1] === "pre" || A[1] === "script" || A[1] === "style",
        text: A[0]
      };
  }
  def(e) {
    const A = this.rules.block.def.exec(e);
    if (A) {
      const t = A[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = A[2] ? A[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", n = A[3] ? A[3].substring(1, A[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : A[3];
      return {
        type: "def",
        tag: t,
        raw: A[0],
        href: r,
        title: n
      };
    }
  }
  table(e) {
    const A = this.rules.block.table.exec(e);
    if (!A || !this.rules.other.tableDelimiter.test(A[2]))
      return;
    const t = So(A[1]), r = A[2].replace(this.rules.other.tableAlignChars, "").split("|"), n = A[3]?.trim() ? A[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = {
      type: "table",
      raw: A[0],
      header: [],
      align: [],
      rows: []
    };
    if (t.length === r.length) {
      for (const i of r)
        this.rules.other.tableAlignRight.test(i) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(i) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(i) ? s.align.push("left") : s.align.push(null);
      for (let i = 0; i < t.length; i++)
        s.header.push({
          text: t[i],
          tokens: this.lexer.inline(t[i]),
          header: !0,
          align: s.align[i]
        });
      for (const i of n)
        s.rows.push(So(i, s.header.length).map((o, a) => ({
          text: o,
          tokens: this.lexer.inline(o),
          header: !1,
          align: s.align[a]
        })));
      return s;
    }
  }
  lheading(e) {
    const A = this.rules.block.lheading.exec(e);
    if (A)
      return {
        type: "heading",
        raw: A[0],
        depth: A[2].charAt(0) === "=" ? 1 : 2,
        text: A[1],
        tokens: this.lexer.inline(A[1])
      };
  }
  paragraph(e) {
    const A = this.rules.block.paragraph.exec(e);
    if (A) {
      const t = A[1].charAt(A[1].length - 1) === `
` ? A[1].slice(0, -1) : A[1];
      return {
        type: "paragraph",
        raw: A[0],
        text: t,
        tokens: this.lexer.inline(t)
      };
    }
  }
  text(e) {
    const A = this.rules.block.text.exec(e);
    if (A)
      return {
        type: "text",
        raw: A[0],
        text: A[0],
        tokens: this.lexer.inline(A[0])
      };
  }
  escape(e) {
    const A = this.rules.inline.escape.exec(e);
    if (A)
      return {
        type: "escape",
        raw: A[0],
        text: A[1]
      };
  }
  tag(e) {
    const A = this.rules.inline.tag.exec(e);
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
  link(e) {
    const A = this.rules.inline.link.exec(e);
    if (A) {
      const t = A[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(t)) {
        if (!this.rules.other.endAngleBracket.test(t))
          return;
        const s = ct(t.slice(0, -1), "\\");
        if ((t.length - s.length) % 2 === 0)
          return;
      } else {
        const s = Fp(A[2], "()");
        if (s === -2)
          return;
        if (s > -1) {
          const o = (A[0].indexOf("!") === 0 ? 5 : 4) + A[1].length + s;
          A[2] = A[2].substring(0, s), A[0] = A[0].substring(0, o).trim(), A[3] = "";
        }
      }
      let r = A[2], n = "";
      if (this.options.pedantic) {
        const s = this.rules.other.pedanticHrefTitle.exec(r);
        s && (r = s[1], n = s[3]);
      } else
        n = A[3] ? A[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? r = r.slice(1) : r = r.slice(1, -1)), Ko(A, {
        href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
        title: n && n.replace(this.rules.inline.anyPunctuation, "$1")
      }, A[0], this.lexer, this.rules);
    }
  }
  reflink(e, A) {
    let t;
    if ((t = this.rules.inline.reflink.exec(e)) || (t = this.rules.inline.nolink.exec(e))) {
      const r = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), n = A[r.toLowerCase()];
      if (!n) {
        const s = t[0].charAt(0);
        return {
          type: "text",
          raw: s,
          text: s
        };
      }
      return Ko(t, n, t[0], this.lexer, this.rules);
    }
  }
  emStrong(e, A, t = "") {
    let r = this.rules.inline.emStrongLDelim.exec(e);
    if (!r || r[3] && t.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(r[1] || r[2] || "") || !t || this.rules.inline.punctuation.exec(t)) {
      const s = [...r[0]].length - 1;
      let i, o, a = s, l = 0;
      const B = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (B.lastIndex = 0, A = A.slice(-1 * e.length + s); (r = B.exec(A)) != null; ) {
        if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i) continue;
        if (o = [...i].length, r[3] || r[4]) {
          a += o;
          continue;
        } else if ((r[5] || r[6]) && s % 3 && !((s + o) % 3)) {
          l += o;
          continue;
        }
        if (a -= o, a > 0) continue;
        o = Math.min(o, o + a + l);
        const c = [...r[0]][0].length, g = e.slice(0, s + r.index + c + o);
        if (Math.min(s, o) % 2) {
          const h = g.slice(1, -1);
          return {
            type: "em",
            raw: g,
            text: h,
            tokens: this.lexer.inlineTokens(h)
          };
        }
        const f = g.slice(2, -2);
        return {
          type: "strong",
          raw: g,
          text: f,
          tokens: this.lexer.inlineTokens(f)
        };
      }
    }
  }
  codespan(e) {
    const A = this.rules.inline.code.exec(e);
    if (A) {
      let t = A[2].replace(this.rules.other.newLineCharGlobal, " ");
      const r = this.rules.other.nonSpaceChar.test(t), n = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
      return r && n && (t = t.substring(1, t.length - 1)), {
        type: "codespan",
        raw: A[0],
        text: t
      };
    }
  }
  br(e) {
    const A = this.rules.inline.br.exec(e);
    if (A)
      return {
        type: "br",
        raw: A[0]
      };
  }
  del(e) {
    const A = this.rules.inline.del.exec(e);
    if (A)
      return {
        type: "del",
        raw: A[0],
        text: A[2],
        tokens: this.lexer.inlineTokens(A[2])
      };
  }
  autolink(e) {
    const A = this.rules.inline.autolink.exec(e);
    if (A) {
      let t, r;
      return A[2] === "@" ? (t = A[1], r = "mailto:" + t) : (t = A[1], r = t), {
        type: "link",
        raw: A[0],
        text: t,
        href: r,
        tokens: [
          {
            type: "text",
            raw: t,
            text: t
          }
        ]
      };
    }
  }
  url(e) {
    let A;
    if (A = this.rules.inline.url.exec(e)) {
      let t, r;
      if (A[2] === "@")
        t = A[0], r = "mailto:" + t;
      else {
        let n;
        do
          n = A[0], A[0] = this.rules.inline._backpedal.exec(A[0])?.[0] ?? "";
        while (n !== A[0]);
        t = A[0], A[1] === "www." ? r = "http://" + A[0] : r = A[0];
      }
      return {
        type: "link",
        raw: A[0],
        text: t,
        href: r,
        tokens: [
          {
            type: "text",
            raw: t,
            text: t
          }
        ]
      };
    }
  }
  inlineText(e) {
    const A = this.rules.inline.text.exec(e);
    if (A) {
      const t = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: A[0],
        text: A[0],
        escaped: t
      };
    }
  }
}, ee = class ws {
  constructor(A) {
    V(this, "tokens");
    V(this, "options");
    V(this, "state");
    V(this, "tokenizer");
    V(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = A || xe, this.options.tokenizer = this.options.tokenizer || new Or(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      other: FA,
      block: pr.normal,
      inline: Bt.normal
    };
    this.options.pedantic ? (t.block = pr.pedantic, t.inline = Bt.pedantic) : this.options.gfm && (t.block = pr.gfm, this.options.breaks ? t.inline = Bt.breaks : t.inline = Bt.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: pr,
      inline: Bt
    };
  }
  /**
   * Static Lex Method
   */
  static lex(A, t) {
    return new ws(t).lex(A);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(A, t) {
    return new ws(t).inlineTokens(A);
  }
  /**
   * Preprocessing
   */
  lex(A) {
    A = A.replace(FA.carriageReturn, `
`), this.blockTokens(A, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const r = this.inlineQueue[t];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(A, t = [], r = !1) {
    for (this.options.pedantic && (A = A.replace(FA.tabCharGlobal, "    ").replace(FA.spaceLine, "")); A; ) {
      let n;
      if (this.options.extensions?.block?.some((i) => (n = i.call({ lexer: this }, A, t)) ? (A = A.substring(n.raw.length), t.push(n), !0) : !1))
        continue;
      if (n = this.tokenizer.space(A)) {
        A = A.substring(n.raw.length);
        const i = t.at(-1);
        n.raw.length === 1 && i !== void 0 ? i.raw += `
` : t.push(n);
        continue;
      }
      if (n = this.tokenizer.code(A)) {
        A = A.substring(n.raw.length);
        const i = t.at(-1);
        i?.type === "paragraph" || i?.type === "text" ? (i.raw += `
` + n.raw, i.text += `
` + n.text, this.inlineQueue.at(-1).src = i.text) : t.push(n);
        continue;
      }
      if (n = this.tokenizer.fences(A)) {
        A = A.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.heading(A)) {
        A = A.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.hr(A)) {
        A = A.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.blockquote(A)) {
        A = A.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.list(A)) {
        A = A.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.html(A)) {
        A = A.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.def(A)) {
        A = A.substring(n.raw.length);
        const i = t.at(-1);
        i?.type === "paragraph" || i?.type === "text" ? (i.raw += `
` + n.raw, i.text += `
` + n.raw, this.inlineQueue.at(-1).src = i.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
          href: n.href,
          title: n.title
        });
        continue;
      }
      if (n = this.tokenizer.table(A)) {
        A = A.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.lheading(A)) {
        A = A.substring(n.raw.length), t.push(n);
        continue;
      }
      let s = A;
      if (this.options.extensions?.startBlock) {
        let i = 1 / 0;
        const o = A.slice(1);
        let a;
        this.options.extensions.startBlock.forEach((l) => {
          a = l.call({ lexer: this }, o), typeof a == "number" && a >= 0 && (i = Math.min(i, a));
        }), i < 1 / 0 && i >= 0 && (s = A.substring(0, i + 1));
      }
      if (this.state.top && (n = this.tokenizer.paragraph(s))) {
        const i = t.at(-1);
        r && i?.type === "paragraph" ? (i.raw += `
` + n.raw, i.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = i.text) : t.push(n), r = s.length !== A.length, A = A.substring(n.raw.length);
        continue;
      }
      if (n = this.tokenizer.text(A)) {
        A = A.substring(n.raw.length);
        const i = t.at(-1);
        i?.type === "text" ? (i.raw += `
` + n.raw, i.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = i.text) : t.push(n);
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
    return this.state.top = !0, t;
  }
  inline(A, t = []) {
    return this.inlineQueue.push({ src: A, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(A, t = []) {
    let r = A, n = null;
    if (this.tokens.links) {
      const o = Object.keys(this.tokens.links);
      if (o.length > 0)
        for (; (n = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; )
          o.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (n = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; )
      r = r.slice(0, n.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (n = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
      r = r.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let s = !1, i = "";
    for (; A; ) {
      s || (i = ""), s = !1;
      let o;
      if (this.options.extensions?.inline?.some((l) => (o = l.call({ lexer: this }, A, t)) ? (A = A.substring(o.raw.length), t.push(o), !0) : !1))
        continue;
      if (o = this.tokenizer.escape(A)) {
        A = A.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.tag(A)) {
        A = A.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.link(A)) {
        A = A.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.reflink(A, this.tokens.links)) {
        A = A.substring(o.raw.length);
        const l = t.at(-1);
        o.type === "text" && l?.type === "text" ? (l.raw += o.raw, l.text += o.text) : t.push(o);
        continue;
      }
      if (o = this.tokenizer.emStrong(A, r, i)) {
        A = A.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.codespan(A)) {
        A = A.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.br(A)) {
        A = A.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.del(A)) {
        A = A.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.autolink(A)) {
        A = A.substring(o.raw.length), t.push(o);
        continue;
      }
      if (!this.state.inLink && (o = this.tokenizer.url(A))) {
        A = A.substring(o.raw.length), t.push(o);
        continue;
      }
      let a = A;
      if (this.options.extensions?.startInline) {
        let l = 1 / 0;
        const B = A.slice(1);
        let c;
        this.options.extensions.startInline.forEach((g) => {
          c = g.call({ lexer: this }, B), typeof c == "number" && c >= 0 && (l = Math.min(l, c));
        }), l < 1 / 0 && l >= 0 && (a = A.substring(0, l + 1));
      }
      if (o = this.tokenizer.inlineText(a)) {
        A = A.substring(o.raw.length), o.raw.slice(-1) !== "_" && (i = o.raw.slice(-1)), s = !0;
        const l = t.at(-1);
        l?.type === "text" ? (l.raw += o.raw, l.text += o.text) : t.push(o);
        continue;
      }
      if (A) {
        const l = "Infinite loop on byte: " + A.charCodeAt(0);
        if (this.options.silent) {
          console.error(l);
          break;
        } else
          throw new Error(l);
      }
    }
    return t;
  }
}, Mr = class {
  // set by the parser
  constructor(e) {
    V(this, "options");
    V(this, "parser");
    this.options = e || xe;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: A, escaped: t }) {
    const r = (A || "").match(FA.notSpaceStart)?.[0], n = e.replace(FA.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + YA(r) + '">' + (t ? n : YA(n, !0)) + `</code></pre>
` : "<pre><code>" + (t ? n : YA(n, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  heading({ tokens: e, depth: A }) {
    return `<h${A}>${this.parser.parseInline(e)}</h${A}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    const A = e.ordered, t = e.start;
    let r = "";
    for (let i = 0; i < e.items.length; i++) {
      const o = e.items[i];
      r += this.listitem(o);
    }
    const n = A ? "ol" : "ul", s = A && t !== 1 ? ' start="' + t + '"' : "";
    return "<" + n + s + `>
` + r + "</" + n + `>
`;
  }
  listitem(e) {
    let A = "";
    if (e.task) {
      const t = this.checkbox({ checked: !!e.checked });
      e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = t + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = t + " " + YA(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
        type: "text",
        raw: t + " ",
        text: t + " ",
        escaped: !0
      }) : A += t + " ";
    }
    return A += this.parser.parse(e.tokens, !!e.loose), `<li>${A}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let A = "", t = "";
    for (let n = 0; n < e.header.length; n++)
      t += this.tablecell(e.header[n]);
    A += this.tablerow({ text: t });
    let r = "";
    for (let n = 0; n < e.rows.length; n++) {
      const s = e.rows[n];
      t = "";
      for (let i = 0; i < s.length; i++)
        t += this.tablecell(s[i]);
      r += this.tablerow({ text: t });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + A + `</thead>
` + r + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    const A = this.parser.parseInline(e.tokens), t = e.header ? "th" : "td";
    return (e.align ? `<${t} align="${e.align}">` : `<${t}>`) + A + `</${t}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${YA(e, !0)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: A, tokens: t }) {
    const r = this.parser.parseInline(t), n = Lo(e);
    if (n === null)
      return r;
    e = n;
    let s = '<a href="' + e + '"';
    return A && (s += ' title="' + YA(A) + '"'), s += ">" + r + "</a>", s;
  }
  image({ href: e, title: A, text: t, tokens: r }) {
    r && (t = this.parser.parseInline(r, this.parser.textRenderer));
    const n = Lo(e);
    if (n === null)
      return YA(t);
    e = n;
    let s = `<img src="${e}" alt="${t}"`;
    return A && (s += ` title="${YA(A)}"`), s += ">", s;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : YA(e.text);
  }
}, _s = class {
  // no need for block level renderers
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
}, te = class ds {
  constructor(A) {
    V(this, "options");
    V(this, "renderer");
    V(this, "textRenderer");
    this.options = A || xe, this.options.renderer = this.options.renderer || new Mr(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new _s();
  }
  /**
   * Static Parse Method
   */
  static parse(A, t) {
    return new ds(t).parse(A);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(A, t) {
    return new ds(t).parseInline(A);
  }
  /**
   * Parse Loop
   */
  parse(A, t = !0) {
    let r = "";
    for (let n = 0; n < A.length; n++) {
      const s = A[n];
      if (this.options.extensions?.renderers?.[s.type]) {
        const o = s, a = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (a !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(o.type)) {
          r += a || "";
          continue;
        }
      }
      const i = s;
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
          for (; n + 1 < A.length && A[n + 1].type === "text"; )
            o = A[++n], a += `
` + this.renderer.text(o);
          t ? r += this.renderer.paragraph({
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
  parseInline(A, t = this.renderer) {
    let r = "";
    for (let n = 0; n < A.length; n++) {
      const s = A[n];
      if (this.options.extensions?.renderers?.[s.type]) {
        const o = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (o !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          r += o || "";
          continue;
        }
      }
      const i = s;
      switch (i.type) {
        case "escape": {
          r += t.text(i);
          break;
        }
        case "html": {
          r += t.html(i);
          break;
        }
        case "link": {
          r += t.link(i);
          break;
        }
        case "image": {
          r += t.image(i);
          break;
        }
        case "strong": {
          r += t.strong(i);
          break;
        }
        case "em": {
          r += t.em(i);
          break;
        }
        case "codespan": {
          r += t.codespan(i);
          break;
        }
        case "br": {
          r += t.br(i);
          break;
        }
        case "del": {
          r += t.del(i);
          break;
        }
        case "text": {
          r += t.text(i);
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
}, Pn, vr = (Pn = class {
  constructor(e) {
    V(this, "options");
    V(this, "block");
    this.options = e || xe;
  }
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e) {
    return e;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? ee.lex : ee.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? te.parse : te.parseInline;
  }
}, V(Pn, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
])), Pn), Ep = class {
  constructor(...e) {
    V(this, "defaults", xs());
    V(this, "options", this.setOptions);
    V(this, "parse", this.parseMarkdown(!0));
    V(this, "parseInline", this.parseMarkdown(!1));
    V(this, "Parser", te);
    V(this, "Renderer", Mr);
    V(this, "TextRenderer", _s);
    V(this, "Lexer", ee);
    V(this, "Tokenizer", Or);
    V(this, "Hooks", vr);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, A) {
    let t = [];
    for (const r of e)
      switch (t = t.concat(A.call(this, r)), r.type) {
        case "table": {
          const n = r;
          for (const s of n.header)
            t = t.concat(this.walkTokens(s.tokens, A));
          for (const s of n.rows)
            for (const i of s)
              t = t.concat(this.walkTokens(i.tokens, A));
          break;
        }
        case "list": {
          const n = r;
          t = t.concat(this.walkTokens(n.items, A));
          break;
        }
        default: {
          const n = r;
          this.defaults.extensions?.childTokens?.[n.type] ? this.defaults.extensions.childTokens[n.type].forEach((s) => {
            const i = n[s].flat(1 / 0);
            t = t.concat(this.walkTokens(i, A));
          }) : n.tokens && (t = t.concat(this.walkTokens(n.tokens, A)));
        }
      }
    return t;
  }
  use(...e) {
    const A = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((t) => {
      const r = { ...t };
      if (r.async = this.defaults.async || r.async || !1, t.extensions && (t.extensions.forEach((n) => {
        if (!n.name)
          throw new Error("extension name required");
        if ("renderer" in n) {
          const s = A.renderers[n.name];
          s ? A.renderers[n.name] = function(...i) {
            let o = n.renderer.apply(this, i);
            return o === !1 && (o = s.apply(this, i)), o;
          } : A.renderers[n.name] = n.renderer;
        }
        if ("tokenizer" in n) {
          if (!n.level || n.level !== "block" && n.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const s = A[n.level];
          s ? s.unshift(n.tokenizer) : A[n.level] = [n.tokenizer], n.start && (n.level === "block" ? A.startBlock ? A.startBlock.push(n.start) : A.startBlock = [n.start] : n.level === "inline" && (A.startInline ? A.startInline.push(n.start) : A.startInline = [n.start]));
        }
        "childTokens" in n && n.childTokens && (A.childTokens[n.name] = n.childTokens);
      }), r.extensions = A), t.renderer) {
        const n = this.defaults.renderer || new Mr(this.defaults);
        for (const s in t.renderer) {
          if (!(s in n))
            throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s))
            continue;
          const i = s, o = t.renderer[i], a = n[i];
          n[i] = (...l) => {
            let B = o.apply(n, l);
            return B === !1 && (B = a.apply(n, l)), B || "";
          };
        }
        r.renderer = n;
      }
      if (t.tokenizer) {
        const n = this.defaults.tokenizer || new Or(this.defaults);
        for (const s in t.tokenizer) {
          if (!(s in n))
            throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s))
            continue;
          const i = s, o = t.tokenizer[i], a = n[i];
          n[i] = (...l) => {
            let B = o.apply(n, l);
            return B === !1 && (B = a.apply(n, l)), B;
          };
        }
        r.tokenizer = n;
      }
      if (t.hooks) {
        const n = this.defaults.hooks || new vr();
        for (const s in t.hooks) {
          if (!(s in n))
            throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s))
            continue;
          const i = s, o = t.hooks[i], a = n[i];
          vr.passThroughHooks.has(s) ? n[i] = (l) => {
            if (this.defaults.async)
              return Promise.resolve(o.call(n, l)).then((c) => a.call(n, c));
            const B = o.call(n, l);
            return a.call(n, B);
          } : n[i] = (...l) => {
            let B = o.apply(n, l);
            return B === !1 && (B = a.apply(n, l)), B;
          };
        }
        r.hooks = n;
      }
      if (t.walkTokens) {
        const n = this.defaults.walkTokens, s = t.walkTokens;
        r.walkTokens = function(i) {
          let o = [];
          return o.push(s.call(this, i)), n && (o = o.concat(n.call(this, i))), o;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, A) {
    return ee.lex(e, A ?? this.defaults);
  }
  parser(e, A) {
    return te.parse(e, A ?? this.defaults);
  }
  parseMarkdown(e) {
    return (t, r) => {
      const n = { ...r }, s = { ...this.defaults, ...n }, i = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === !0 && n.async === !1)
        return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof t > "u" || t === null)
        return i(new Error("marked(): input parameter is undefined or null"));
      if (typeof t != "string")
        return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
      s.hooks && (s.hooks.options = s, s.hooks.block = e);
      const o = s.hooks ? s.hooks.provideLexer() : e ? ee.lex : ee.lexInline, a = s.hooks ? s.hooks.provideParser() : e ? te.parse : te.parseInline;
      if (s.async)
        return Promise.resolve(s.hooks ? s.hooks.preprocess(t) : t).then((l) => o(l, s)).then((l) => s.hooks ? s.hooks.processAllTokens(l) : l).then((l) => s.walkTokens ? Promise.all(this.walkTokens(l, s.walkTokens)).then(() => l) : l).then((l) => a(l, s)).then((l) => s.hooks ? s.hooks.postprocess(l) : l).catch(i);
      try {
        s.hooks && (t = s.hooks.preprocess(t));
        let l = o(t, s);
        s.hooks && (l = s.hooks.processAllTokens(l)), s.walkTokens && this.walkTokens(l, s.walkTokens);
        let B = a(l, s);
        return s.hooks && (B = s.hooks.postprocess(B)), B;
      } catch (l) {
        return i(l);
      }
    };
  }
  onError(e, A) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        const r = "<p>An error occurred:</p><pre>" + YA(t.message + "", !0) + "</pre>";
        return A ? Promise.resolve(r) : r;
      }
      if (A)
        return Promise.reject(t);
      throw t;
    };
  }
}, be = new Ep();
function O(e, A) {
  return be.parse(e, A);
}
O.options = O.setOptions = function(e) {
  return be.setOptions(e), O.defaults = be.defaults, qa(O.defaults), O;
};
O.getDefaults = xs;
O.defaults = xe;
O.use = function(...e) {
  return be.use(...e), O.defaults = be.defaults, qa(O.defaults), O;
};
O.walkTokens = function(e, A) {
  return be.walkTokens(e, A);
};
O.parseInline = be.parseInline;
O.Parser = te;
O.parser = te.parse;
O.Renderer = Mr;
O.TextRenderer = _s;
O.Lexer = ee;
O.lexer = ee.lex;
O.Tokenizer = Or;
O.Hooks = vr;
O.parse = O;
O.options;
O.setOptions;
O.use;
O.walkTokens;
O.parseInline;
te.parse;
ee.lex;
var vp = Object.defineProperty, yp = Object.getOwnPropertyDescriptor, N = (e, A, t, r) => {
  for (var n = r > 1 ? void 0 : r ? yp(A, t) : A, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (n = (r ? i(A, t, n) : i(n)) || n);
  return r && n && vp(A, t, n), n;
};
const Do = {
  thinking: "응답 준비",
  tool_start: "자료 검색 시작",
  tool_progress: "자료 검색 진행",
  tool_done: "검색 완료",
  generating: "답변 작성",
  streaming: "답변 작성"
}, Ro = {
  incorrect: "내용이 틀렸어요",
  harmful: "유해/공격적이에요",
  "off-topic": "주제와 무관해요",
  privacy: "개인정보가 노출됐어요",
  other: "기타"
}, ko = {
  question: "질문",
  request: "요청",
  bug: "오류 신고",
  other: "기타"
}, Hp = ["n", "s", "e", "w", "nw", "ne", "sw", "se"], wr = 280, dr = 360, Ip = 360, bp = 520, xp = 72, Qr = 24;
O.setOptions({ gfm: !0, breaks: !0 });
const Gn = 5e4;
function Tp() {
  try {
    const e = document.body.cloneNode(!0);
    e.querySelectorAll(
      'script, style, noscript, iframe, nav, footer, header, aside, [aria-hidden="true"], timely-chatbot'
    ).forEach((i) => i.remove());
    const A = e.querySelector("article"), t = e.querySelector("main"), r = A instanceof HTMLElement ? A : t instanceof HTMLElement ? t : e, s = (r.innerText ?? r.textContent ?? "").toString().replace(/ /g, " ").split(/\n+/).map((i) => i.replace(/[ \t]+/g, " ").trim()).filter((i) => i.length > 0).join(`
`);
    return s.length > Gn ? s.slice(0, Gn) + `

…(이하 ${s.length - Gn}자 생략)` : s;
  } catch {
    return "";
  }
}
function Lp(e) {
  const A = O.parse(e, { async: !1 });
  return Gl.sanitize(A, {
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
let D = class extends It {
  constructor() {
    super(...arguments), this.apiKey = "", this.browserId = "", this.apiBaseUrl = "", this.open = !1, this.fullscreen = !1, this.messages = [], this.input = "", this.streaming = !1, this.theme = {}, this.rect = null, this.reportingMessageId = null, this.reportReason = "incorrect", this.reportDetail = "", this.reportSubmitting = !1, this.reportError = "", this.inquiryOpen = !1, this.inquiryCategory = "question", this.inquirySubject = "", this.inquiryBody = "", this.inquiryContact = "", this.inquirySubmitting = !1, this.inquiryError = "", this.inquirySuccess = !1, this.pendingAttachments = [], this.capturing = !1, this.regionCapturing = !1, this.selectionTimer = null, this.widgetInteractionAt = 0, this.regionRect = null, this.regionStart = null, this.handleDocPointerDown = (e) => {
      const A = e.target;
      A && (A === this || this.contains(A)) && (this.widgetInteractionAt = Date.now());
    }, this.handleSelectionChange = () => {
      this.selectionTimer != null && window.clearTimeout(this.selectionTimer), this.selectionTimer = window.setTimeout(() => {
        this.selectionTimer = null, this.syncSelectionAttachment();
      }, 200);
    }, this.startDrag = (e) => {
      if (this.fullscreen || !this.rect || e.target?.closest("button")) return;
      e.preventDefault();
      const t = { ...this.rect }, r = e.clientX, n = e.clientY, s = (o) => {
        const a = o.clientX - r, l = o.clientY - n;
        let B = t.left + a, c = t.top + l;
        const g = window.innerWidth, f = window.innerHeight;
        B = Math.max(0, Math.min(B, g - t.width)), c = Math.max(0, Math.min(c, f - t.height)), this.rect = {
          left: B,
          top: c,
          width: t.width,
          height: t.height
        };
      }, i = () => {
        window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", i);
      };
      window.addEventListener("pointermove", s), window.addEventListener("pointerup", i);
    }, this.closeReport = () => {
      this.reportSubmitting || (this.reportingMessageId = null, this.reportError = "");
    }, this.submitReport = async () => {
      const e = this.reportingMessageId;
      if (e) {
        this.reportSubmitting = !0, this.reportError = "";
        try {
          const t = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${await this.ensureJwt()}`
          };
          this.browserId && (t["X-Browser-Id"] = this.browserId);
          const r = await fetch(
            `${this.apiBaseUrl}/widget/messages/${encodeURIComponent(e)}/report`,
            {
              method: "POST",
              headers: t,
              body: JSON.stringify({
                reason: this.reportReason,
                detail: this.reportDetail.trim() || void 0
              })
            }
          );
          if (!r.ok) throw new Error(`http ${r.status}`);
          const n = this.messages.find((s) => s.id === e);
          n && (n.reported = !0, this.requestUpdate()), this.reportingMessageId = null;
        } catch (A) {
          this.reportError = A instanceof Error ? A.message : "신고 전송 실패";
        } finally {
          this.reportSubmitting = !1;
        }
      }
    }, this.openInquiry = () => {
      this.inquiryOpen = !0, this.inquiryCategory = "question", this.inquirySubject = "", this.inquiryBody = "", this.inquiryContact = "", this.inquiryError = "", this.inquirySuccess = !1;
    }, this.closeInquiry = () => {
      this.inquirySubmitting || (this.inquiryOpen = !1, this.inquiryError = "", this.inquirySuccess = !1);
    }, this.submitInquiry = async () => {
      const e = this.inquirySubject.trim(), A = this.inquiryBody.trim();
      if (!(!e || !A)) {
        this.inquirySubmitting = !0, this.inquiryError = "";
        try {
          const r = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${await this.ensureJwt()}`
          };
          this.browserId && (r["X-Browser-Id"] = this.browserId);
          const n = await fetch(`${this.apiBaseUrl}/widget/inquiries`, {
            method: "POST",
            headers: r,
            body: JSON.stringify({
              sessionId: this.sessionId,
              category: this.inquiryCategory,
              subject: e,
              body: A,
              contact: this.inquiryContact.trim() || void 0
            })
          });
          if (!n.ok) throw new Error(`http ${n.status}`);
          this.inquirySuccess = !0;
        } catch (t) {
          this.inquiryError = t instanceof Error ? t.message : "문의 전송 실패";
        } finally {
          this.inquirySubmitting = !1;
        }
      }
    }, this.captureViewport = async () => {
      if (!(this.capturing || this.pendingAttachments.length >= 4)) {
        this.capturing = !0;
        try {
          const e = document.body, t = (await wo(e, {
            useCORS: !0,
            logging: !1,
            ignoreElements: (s) => (s.tagName ?? "").toLowerCase() === "timely-chatbot"
          })).toDataURL("image/png"), r = t.split(",")[1] ?? "", n = Math.round(r.length * 3 / 4 / 1024);
          this.pendingAttachments = [
            ...this.pendingAttachments,
            {
              kind: "image",
              mediaType: "image/png",
              data: r,
              previewUrl: t,
              label: `현재 화면 (${n}KB)`
            }
          ];
        } catch (e) {
          console.error("[chatbot-widget] capture failed", e), window.alert(
            `스크린샷 실패: ${e instanceof Error ? e.message : "unknown"}`
          );
        } finally {
          this.capturing = !1;
        }
      }
    }, this.startRegionCapture = () => {
      this.streaming || this.capturing || this.regionCapturing || this.pendingAttachments.length >= 4 || (this.regionCapturing = !0, this.regionStart = null, this.regionRect = null, window.addEventListener("keydown", this.regionKeyHandler));
    }, this.cancelRegionCapture = () => {
      this.regionCapturing = !1, this.regionStart = null, this.regionRect = null, window.removeEventListener("keydown", this.regionKeyHandler);
    }, this.regionKeyHandler = (e) => {
      e.key === "Escape" && (e.preventDefault(), this.cancelRegionCapture());
    }, this.regionPointerDown = (e) => {
      e.preventDefault(), e.currentTarget.setPointerCapture?.(e.pointerId), this.regionStart = { x: e.clientX, y: e.clientY }, this.regionRect = { x: e.clientX, y: e.clientY, w: 0, h: 0 };
    }, this.regionPointerMove = (e) => {
      if (!this.regionStart) return;
      const A = this.regionStart.x, t = this.regionStart.y, r = e.clientX, n = e.clientY;
      this.regionRect = {
        x: Math.min(A, r),
        y: Math.min(t, n),
        w: Math.abs(r - A),
        h: Math.abs(n - t)
      };
    }, this.regionPointerUp = async (e) => {
      e.preventDefault();
      const A = this.regionRect, t = this.regionStart;
      if (this.regionStart = null, !A || !t || A.w < 12 || A.h < 12) {
        this.cancelRegionCapture();
        return;
      }
      window.removeEventListener("keydown", this.regionKeyHandler), this.regionCapturing = !1, this.regionRect = null, this.capturing = !0;
      try {
        const n = (await wo(document.body, {
          x: A.x + window.scrollX,
          y: A.y + window.scrollY,
          width: A.w,
          height: A.h,
          useCORS: !0,
          logging: !1,
          ignoreElements: (o) => (o.tagName ?? "").toLowerCase() === "timely-chatbot"
        })).toDataURL("image/png"), s = n.split(",")[1] ?? "", i = Math.round(s.length * 3 / 4 / 1024);
        this.pendingAttachments = [
          ...this.pendingAttachments,
          {
            kind: "image",
            mediaType: "image/png",
            data: s,
            previewUrl: n,
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
    }, this.removeAttachment = (e) => {
      const A = this.pendingAttachments[e];
      if (this.pendingAttachments = this.pendingAttachments.filter(
        (t, r) => r !== e
      ), A && A.kind === "text" && A.source === "selection")
        try {
          window.getSelection()?.removeAllRanges();
        } catch {
        }
    };
  }
  render() {
    const e = this.fullscreen ? "panel fullscreen" : "panel", A = this.regionCapturing ? `${e} region-hidden` : e, t = this.theme.title || "챗봇";
    return J`
      ${this.regionCapturing ? this.renderRegionCaptureOverlay() : null}
      <button
        class=${this.regionCapturing ? "toggle region-hidden" : "toggle"}
        @click=${this.toggle}
        aria-label=${this.open ? "닫기" : "챗봇 열기"}
      >
        ${this.open ? wA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>` : this.renderToggleIcon()}
      </button>
      ${this.open ? J`
            <div class=${A} style=${this.panelStyle()}>
              ${this.fullscreen ? null : Hp.map((r) => J`
                <div
                  class=${`rh ${r}`}
                  @pointerdown=${(n) => this.startResize(n, r)}
                ></div>
              `)}
              <div class="header" @pointerdown=${this.startDrag}>
                <span class="title">${t}</span>
                <button
                  type="button"
                  @click=${this.openInquiry}
                  title="문의하기"
                  aria-label="문의하기"
                >
                  ${wA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`}
                </button>
                <button
                  type="button"
                  @click=${this.toggleFullscreen}
                  title=${this.fullscreen ? "축소" : "전체화면"}
                  aria-label=${this.fullscreen ? "축소" : "전체화면"}
                >
                  ${this.fullscreen ? wA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 9H4M4 9V4M4 9L9 4M15 9h5M20 9V4M20 9l-5-5M9 15H4M4 15v5M4 15l5 5M15 15h5M20 15v5M20 15l-5 5"/></svg>` : wA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8V4h4M16 4h4v4M4 16v4h4M16 20h4v-4"/></svg>`}
                </button>
                <button
                  type="button"
                  @click=${this.close}
                  title="닫기"
                  aria-label="닫기"
                >
                  ${wA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>`}
                </button>
              </div>
              <div class="messages">
                ${this.messages.map(
      (r) => r.role === "assistant" ? J`<div class="msg-wrap assistant">
                        ${r.progress && r.progress.history.length > 0 ? J`<ul class="progress-history">
                              ${r.progress.history.map(
        (n) => J`<li>
                                    ${wA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`}
                                    <span>${n}</span>
                                  </li>`
      )}
                            </ul>` : null}
                        ${r.progress && r.progress.text ? J`<div class="progress-line">
                              <span class="progress-spinner"></span>
                              <span>${r.progress.text}</span>
                            </div>` : null}
                        <div class="msg assistant">
                          ${r.content ? Gf(Lp(r.content)) : r.progress ? J`<span class="progress-placeholder"
                                  >${r.progress.text || Do[r.progress.stage] || "응답 준비"}</span
                                >` : J`<span class="typing"
                                  ><span></span><span></span><span></span
                                ></span>`}
                        </div>
                        ${r.id && r.content ? J`<div class="reactions">
                              <button
                                type="button"
                                class=${r.reaction === 1 ? "react on" : "react"}
                                @click=${() => this.toggleReaction(r, 1)}
                                aria-label="좋아요"
                                title="도움이 됐어요"
                              >
                                ${wA`<svg viewBox="0 0 24 24" fill="${r.reaction === 1 ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zM7 11l5-8a2 2 0 0 1 2 2v3h5a2 2 0 0 1 2 2.4l-1.5 7A2 2 0 0 1 17.5 19H7"/></svg>`}
                              </button>
                              <button
                                type="button"
                                class=${r.reaction === -1 ? "react on" : "react"}
                                @click=${() => this.toggleReaction(r, -1)}
                                aria-label="별로예요"
                                title="별로였어요"
                              >
                                ${wA`<svg viewBox="0 0 24 24" fill="${r.reaction === -1 ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 13V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zM17 13l-5 8a2 2 0 0 1-2-2v-3H5a2 2 0 0 1-2-2.4l1.5-7A2 2 0 0 1 6.5 5H17"/></svg>`}
                              </button>
                              <button
                                type="button"
                                class=${r.reported ? "react reported" : "react"}
                                @click=${() => this.openReport(r)}
                                ?disabled=${r.reported}
                                aria-label="신고"
                                title=${r.reported ? "신고 접수됨" : "신고하기"}
                              >
                                ${wA`<svg viewBox="0 0 24 24" fill="${r.reported ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h13l-2 4 2 4H4"/></svg>`}
                              </button>
                            </div>` : null}
                      </div>` : J`<div class="msg user">${r.content}</div>`
    )}
              </div>
              ${this.pendingAttachments.length > 0 ? J`<div class="attachments">
                    ${this.pendingAttachments.map(
      (r, n) => J`<div class="att-chip" title=${r.label}>
                        ${r.kind === "image" ? J`<img src=${r.previewUrl} alt="" />` : J`<span class="att-icon">📝</span>`}
                        <span class="att-label">${r.label}</span>
                        <button
                          type="button"
                          class="att-remove"
                          @click=${() => this.removeAttachment(n)}
                          aria-label="첨부 제거"
                        >
                          ×
                        </button>
                      </div>`
    )}
                  </div>` : null}
              <form @submit=${this.send}>
                <button
                  type="button"
                  class="cap-btn"
                  @click=${this.captureViewport}
                  ?disabled=${this.streaming || this.capturing || this.pendingAttachments.length >= 4}
                  title="현재 화면 캡처"
                  aria-label="현재 화면 캡처"
                >
                  ${wA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`}
                </button>
                <button
                  type="button"
                  class="cap-btn"
                  @click=${this.startRegionCapture}
                  ?disabled=${this.streaming || this.capturing || this.regionCapturing || this.pendingAttachments.length >= 4}
                  title="영역 선택 캡처 — 드래그한 부분만 이미지로 첨부"
                  aria-label="영역 선택 캡처"
                >
                  ${wA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7V5a2 2 0 0 1 2-2h2"/><path d="M15 3h2a2 2 0 0 1 2 2v2"/><path d="M19 15v2a2 2 0 0 1-2 2h-2"/><path d="M9 21H7a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6"/></svg>`}
                </button>
                <input
                  type="text"
                  .value=${this.input}
                  @input=${(r) => this.input = r.target.value}
                  ?disabled=${this.streaming}
                  placeholder="메시지를 입력하세요..."
                />
                <button type="submit" ?disabled=${this.streaming || !this.input}>전송</button>
              </form>
              ${this.reportingMessageId ? this.renderReportModal() : null}
              ${this.inquiryOpen ? this.renderInquiryModal() : null}
            </div>
          ` : null}
    `;
  }
  renderReportModal() {
    return J`
      <div class="report-overlay" @click=${this.closeReport}>
        <div class="report-modal" @click=${(e) => e.stopPropagation()}>
          <header>
            <p class="title">메시지 신고</p>
            <p class="subtitle">사유를 알려주시면 검토 후 개선에 반영합니다.</p>
          </header>
          <ul class="report-reasons">
            ${Object.keys(Ro).map(
      (e) => J`
                <li>
                  <label>
                    <input
                      type="radio"
                      name="reportReason"
                      value=${e}
                      .checked=${this.reportReason === e}
                      @change=${() => this.reportReason = e}
                    />
                    <span>${Ro[e]}</span>
                  </label>
                </li>
              `
    )}
          </ul>
          <textarea
            class="report-detail"
            placeholder="추가 설명 (선택)"
            rows="3"
            maxlength="2000"
            .value=${this.reportDetail}
            @input=${(e) => this.reportDetail = e.target.value}
          ></textarea>
          ${this.reportError ? J`<p class="report-error">${this.reportError}</p>` : null}
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
    const e = this.regionRect;
    return J`
      <div
        class="region-overlay"
        @pointerdown=${this.regionPointerDown}
        @pointermove=${this.regionPointerMove}
        @pointerup=${this.regionPointerUp}
      >
        ${e && e.w > 0 && e.h > 0 ? J`
              <div
                class="region-dim"
                style=${`top:0;left:0;right:0;height:${e.y}px`}
              ></div>
              <div
                class="region-dim"
                style=${`top:${e.y}px;left:0;width:${e.x}px;height:${e.h}px`}
              ></div>
              <div
                class="region-dim"
                style=${`top:${e.y}px;left:${e.x + e.w}px;right:0;height:${e.h}px`}
              ></div>
              <div
                class="region-dim"
                style=${`top:${e.y + e.h}px;left:0;right:0;bottom:0`}
              ></div>
              <div
                class="region-rect"
                style=${`left:${e.x}px;top:${e.y}px;width:${e.w}px;height:${e.h}px`}
              ></div>
              <div
                class="region-size"
                style=${`left:${e.x}px;top:${e.y + e.h + 6}px`}
              >
                ${e.w} × ${e.h}
              </div>
            ` : J`<div class="region-dim region-dim-full"></div>`}
        <div class="region-hint">
          ${e && e.w > 0 ? "드래그해서 영역 조정 → 떼면 캡처" : "캡처할 영역을 드래그하세요. ESC로 취소"}
        </div>
      </div>
    `;
  }
  renderInquiryModal() {
    return this.inquirySuccess ? J`
        <div class="report-overlay" @click=${this.closeInquiry}>
          <div class="report-modal" @click=${(e) => e.stopPropagation()}>
            <header>
              <p class="title">문의가 접수되었어요</p>
              <p class="subtitle">담당자가 확인 후 회신드릴게요.</p>
            </header>
            <div class="report-actions">
              <button type="button" class="primary" @click=${this.closeInquiry}>
                닫기
              </button>
            </div>
          </div>
        </div>
      ` : J`
      <div class="report-overlay" @click=${this.closeInquiry}>
        <div class="report-modal" @click=${(e) => e.stopPropagation()}>
          <header>
            <p class="title">문의하기</p>
            <p class="subtitle">챗봇이 답하기 어려운 내용도 남겨주세요.</p>
          </header>
          <div class="inquiry-row">
            <label>유형</label>
            <select
              .value=${this.inquiryCategory}
              @change=${(e) => this.inquiryCategory = e.target.value}
            >
              ${Object.keys(ko).map(
      (e) => J`<option value=${e}>
                    ${ko[e]}
                  </option>`
    )}
            </select>
          </div>
          <input
            type="text"
            class="inquiry-subject"
            placeholder="제목"
            maxlength="255"
            .value=${this.inquirySubject}
            @input=${(e) => this.inquirySubject = e.target.value}
          />
          <textarea
            class="report-detail"
            placeholder="내용을 자세히 적어주세요"
            rows="5"
            maxlength="8000"
            .value=${this.inquiryBody}
            @input=${(e) => this.inquiryBody = e.target.value}
          ></textarea>
          <input
            type="text"
            class="inquiry-subject"
            placeholder="회신받을 연락처 (선택, 이메일/전화 등)"
            maxlength="255"
            .value=${this.inquiryContact}
            @input=${(e) => this.inquiryContact = e.target.value}
          />
          ${this.inquiryError ? J`<p class="report-error">${this.inquiryError}</p>` : null}
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
    super.connectedCallback(), this.fetchInit(), document.addEventListener("selectionchange", this.handleSelectionChange), document.addEventListener("pointerdown", this.handleDocPointerDown, !0);
  }
  disconnectedCallback() {
    document.removeEventListener("selectionchange", this.handleSelectionChange), document.removeEventListener("pointerdown", this.handleDocPointerDown, !0), this.selectionTimer != null && (window.clearTimeout(this.selectionTimer), this.selectionTimer = null), super.disconnectedCallback();
  }
  syncSelectionAttachment() {
    if (this.regionCapturing || this.streaming) return;
    const e = window.getSelection?.(), A = e?.toString().trim() ?? "", t = (() => {
      if (!e || e.rangeCount === 0) return !1;
      const i = e.anchorNode;
      return i ? i === this || this.contains(i) && i !== document.body : !1;
    })(), r = this.pendingAttachments.findIndex(
      (i) => i.kind === "text" && i.source === "selection"
    );
    if (!A || t) {
      const i = document.activeElement === this, o = Date.now() - this.widgetInteractionAt;
      if (i || o < 500) return;
      r >= 0 && (this.pendingAttachments = this.pendingAttachments.filter(
        (a, l) => l !== r
      ));
      return;
    }
    if (A.length > 2e4) return;
    const n = A.length > 60 ? `${A.slice(0, 60)}…` : A, s = {
      kind: "text",
      source: "selection",
      text: A,
      label: `선택: "${n}"`,
      pageUrl: window.location.href,
      pageTitle: document.title
    };
    if (r >= 0) {
      const i = [...this.pendingAttachments];
      i[r] = s, this.pendingAttachments = i;
      return;
    }
    this.pendingAttachments.length >= 4 || (this.pendingAttachments = [...this.pendingAttachments, s]);
  }
  async fetchInit() {
    if (!(!this.apiBaseUrl || !this.apiKey))
      try {
        const e = await fetch(`${this.apiBaseUrl}/widget/init`, {
          headers: { "X-API-Key": this.apiKey }
        });
        if (!e.ok) return;
        const A = await e.json();
        this.theme = A.theme ?? {}, this.applyTheme();
      } catch {
      }
  }
  /** theme를 host element에 적용 (CSS variables + data-position). */
  applyTheme() {
    const e = this.theme, A = (t, r) => {
      r ? this.style.setProperty(t, r) : this.style.removeProperty(t);
    };
    A("--launcher-bg", e.launcherBg), A("--panel-bg", e.panelBg), A("--header-bg", e.headerBg), A("--user-bg", e.userBg), A("--user-text", e.userText), A("--assistant-bg", e.assistantBg), A("--assistant-text", e.assistantText), A("--send-bg", e.sendBg), A("--send-text", e.sendText), this.dataset.position = e.position ?? "bottom-right";
  }
  renderToggleIcon() {
    switch (this.theme.iconShape ?? "chat") {
      case "message":
        return wA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`;
      case "sparkle":
        return wA`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L13.8 9.2 L21 11 L13.8 12.8 L12 20 L10.2 12.8 L3 11 L10.2 9.2 Z"/></svg>`;
      case "help":
        return wA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.5 9a2.5 2.5 0 0 1 4.5 1.5c0 1.5-2 2-2 3.5"/><circle cx="12" cy="17" r="0.5" fill="currentColor"/></svg>`;
      case "headset":
        return wA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/></svg>`;
      case "chat":
      default:
        return wA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-12.5 6.6L4 20l1.4-4.5A8 8 0 1 1 21 12Z"/></svg>`;
    }
  }
  /** open 시 첫 호출 — theme position 기준 default rect 계산. */
  ensureRect() {
    if (this.rect) return;
    const e = Ip, A = bp, t = Math.max(Qr, window.innerHeight - xp - A), n = (this.theme.position ?? "bottom-right") === "bottom-left" ? Qr : Math.max(Qr, window.innerWidth - Qr - e);
    this.rect = { left: n, top: t, width: e, height: A };
  }
  panelStyle() {
    if (this.fullscreen) return "";
    const e = this.rect;
    return e ? `left:${e.left}px;top:${e.top}px;width:${e.width}px;height:${e.height}px;` : "";
  }
  startResize(e, A) {
    if (this.fullscreen || !this.rect) return;
    e.preventDefault();
    const t = { ...this.rect }, r = e.clientX, n = e.clientY, s = (o) => {
      const a = o.clientX - r, l = o.clientY - n;
      let { left: B, top: c, width: g, height: f } = t;
      A.includes("e") && (g = t.width + a), A.includes("w") && (g = t.width - a, B = t.left + a), A.includes("s") && (f = t.height + l), A.includes("n") && (f = t.height - l, c = t.top + l), g < wr && (A.includes("w") && (B = t.left + (t.width - wr)), g = wr), f < dr && (A.includes("n") && (c = t.top + (t.height - dr)), f = dr);
      const h = window.innerWidth, w = window.innerHeight;
      B < 0 && (g += B, B = 0), c < 0 && (f += c, c = 0), B + g > h && (g = h - B), c + f > w && (f = w - c), g = Math.max(wr, g), f = Math.max(dr, f), this.rect = { left: B, top: c, width: g, height: f };
    }, i = () => {
      window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", i);
    };
    window.addEventListener("pointermove", s), window.addEventListener("pointerup", i);
  }
  toggleFullscreen() {
    this.fullscreen = !this.fullscreen;
  }
  close() {
    this.open = !1, this.fullscreen = !1;
  }
  async toggle() {
    this.open = !this.open, this.open && (this.ensureRect(), await this.updateComplete, this.renderRoot.querySelector(
      'input[type="text"]'
    )?.focus(), this.scrollToBottom());
  }
  updated() {
    this.open && this.scrollToBottom();
  }
  scrollToBottom() {
    const e = this.renderRoot.querySelector(
      ".messages"
    );
    e && (e.scrollTop = e.scrollHeight);
  }
  openReport(e) {
    !e.id || e.reported || (this.reportingMessageId = e.id, this.reportReason = "incorrect", this.reportDetail = "", this.reportError = "");
  }
  async toggleReaction(e, A) {
    if (!e.id) return;
    const t = e.reaction === A ? 0 : A, r = e.reaction;
    e.reaction = t === 0 ? void 0 : t, this.requestUpdate();
    try {
      const n = await this.ensureJwt(), s = await fetch(
        `${this.apiBaseUrl}/widget/messages/${encodeURIComponent(e.id)}/reaction`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${n}`
          },
          body: JSON.stringify({ reaction: t })
        }
      );
      if (!s.ok) throw new Error(`http ${s.status}`);
    } catch {
      e.reaction = r, this.requestUpdate();
    }
  }
  async ensureJwt() {
    if (this.jwt) return this.jwt;
    if (this.getAccessToken) {
      const t = await this.getAccessToken();
      if (!t) throw new Error("getAccessToken returned empty token");
      return this.jwt = t, t;
    }
    if (!this.apiKey)
      throw new Error(
        "TimelyChatbot.init: apiKey + getAccessToken? 중 최소 apiKey 필요"
      );
    const e = await fetch(`${this.apiBaseUrl}/widget/guest-jwt`, {
      method: "POST",
      headers: {
        "X-API-Key": this.apiKey,
        "X-Browser-Id": this.browserId
      }
    });
    if (!e.ok) {
      let t = `guest jwt 발급 실패 (HTTP ${e.status})`;
      try {
        const r = await e.json();
        r?.message && (t = r.message);
      } catch {
      }
      throw new Error(t);
    }
    const A = await e.json();
    return this.jwt = A.jwt, this.jwt;
  }
  /** 401 시 무효화. 게스트 모드는 다음 호출에서 자동 재발급. 인증 모드는 호스트가 setAccessToken 호출 필요. */
  invalidateJwt() {
    this.jwt = void 0;
  }
  async send(e) {
    e.preventDefault();
    const A = this.input.trim();
    if (!A || this.streaming) return;
    const t = this.pendingAttachments, r = t.length > 0 ? `${A}

${t.map((o) => `📎 ${o.label}`).join(`
`)}` : A;
    if (this.messages = [
      ...this.messages,
      { role: "user", content: r }
    ], this.input = "", this.pendingAttachments = [], t.some(
      (o) => o.kind === "text" && o.source === "selection"
    ))
      try {
        window.getSelection()?.removeAllRanges();
      } catch {
      }
    this.streaming = !0;
    let n = {
      role: "assistant",
      content: "",
      progress: { stage: "thinking", text: "응답 준비", history: [] }
    };
    this.messages = [...this.messages, n];
    const s = t.map(
      (o) => o.kind === "image" ? {
        kind: "image",
        data: o.data,
        mediaType: o.mediaType,
        label: o.label
      } : {
        kind: "text",
        text: o.text,
        label: o.label,
        ...o.source ? { source: o.source } : {},
        ...o.pageUrl ? { pageUrl: o.pageUrl } : {},
        ...o.pageTitle ? { pageTitle: o.pageTitle } : {}
      }
    ), i = {
      url: window.location.href,
      title: document.title,
      mainText: Tp()
    };
    try {
      let o;
      for (let c = 0; c < 2; c++) {
        const g = await this.ensureJwt();
        if (o = await fetch(`${this.apiBaseUrl}/widget/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Browser-Id": this.browserId,
            Authorization: `Bearer ${g}`
          },
          body: JSON.stringify({
            sessionId: this.sessionId,
            message: A,
            ...s.length > 0 ? { attachments: s } : {},
            pageContext: i
          })
        }), o.status !== 401) break;
        this.invalidateJwt();
      }
      if (!o) throw new Error("요청 실패");
      if (!o.ok) {
        let c = `요청 실패 (HTTP ${o.status})`;
        try {
          const g = await o.json();
          g && typeof g.message == "string" && g.message && (c = g.message);
        } catch {
        }
        throw new Error(c);
      }
      if (!o.body) throw new Error("스트림을 받을 수 없습니다");
      const a = o.body.getReader(), l = new TextDecoder();
      let B = "";
      for (; ; ) {
        const { value: c, done: g } = await a.read();
        if (g) break;
        B += l.decode(c, { stream: !0 });
        const f = B.split(`

`);
        B = f.pop() ?? "";
        for (const h of f)
          this.handleSse(h, n);
      }
    } catch (o) {
      n.content = `[오류: ${o instanceof Error ? o.message : "unknown"}]`, this.requestUpdate();
    } finally {
      this.streaming = !1, await this.updateComplete, this.renderRoot.querySelector(
        'input[type="text"]'
      )?.focus();
    }
  }
  handleSse(e, A) {
    const t = e.split(`
`);
    let r = "message", n = "";
    for (const s of t)
      s.startsWith("event:") ? r = s.slice(6).trim() : s.startsWith("data:") && (n += s.slice(5).trim());
    if (n)
      try {
        const s = JSON.parse(n);
        if (r === "session")
          this.sessionId = s.sessionId;
        else if (r === "delta")
          A.progress && (A.progress = {
            ...A.progress,
            stage: "streaming",
            text: ""
          }), A.content += s.text, this.requestUpdate();
        else if (r === "progress") {
          const i = String(s.stage ?? ""), a = (typeof s.detail == "string" ? s.detail : "") || Do[i] || i, B = (A.progress ?? { stage: "", text: "", history: [] }).history.slice();
          if (i === "tool_done") {
            const c = typeof s.query == "string" ? s.query : "", g = typeof s.citationsCount == "number" ? s.citationsCount : null;
            B.push(
              g != null ? `🔍 "${c}" — ${g}건 발견` : c ? `🔍 "${c}" — 검색 완료` : "🔍 검색 완료"
            );
          }
          A.progress = { stage: i, text: a, history: B }, this.requestUpdate();
        } else if (r === "tool") {
          if (s.name === "search_documents" && !A.progress) {
            const i = s.query ?? "";
            A.progress = {
              stage: "tool_start",
              text: `자료 검색: "${i}"`,
              history: []
            }, this.requestUpdate();
          }
        } else r === "done" ? (typeof s.messageId == "string" && (A.id = s.messageId), A.progress && (A.progress = {
          ...A.progress,
          stage: "done",
          text: ""
        }), this.requestUpdate()) : r === "error" && (A.content += `
[오류: ${s.error}]`, A.progress && (A.progress = {
          ...A.progress,
          stage: "error",
          text: ""
        }), this.requestUpdate());
      } catch {
      }
  }
};
D.styles = ff`
    :host {
      /* default 색상 — applyTheme에서 inline style로 override. */
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
      font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    }
    :host([data-position='bottom-left']) {
      left: 24px;
      right: auto;
    }
    /* 모바일에선 launcher 약간 안쪽으로 + 살짝 작게 */
    @media (max-width: 640px) {
      :host {
        bottom: 16px;
        right: 16px;
      }
      :host([data-position='bottom-left']) {
        left: 16px;
      }
      .toggle {
        width: 52px;
        height: 52px;
      }
    }
    .toggle {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: none;
      background: var(--launcher-bg);
      color: white;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .toggle svg {
      width: 24px;
      height: 24px;
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
      inset: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      border-radius: 0;
    }
    /* 모바일: 작은 viewport에선 panel을 거의 화면 가득. 사용자 inline style 무시(!important) */
    @media (max-width: 640px) {
      .panel {
        left: 8px !important;
        right: 8px !important;
        top: 8px !important;
        bottom: 80px !important;
        width: auto !important;
        height: auto !important;
        max-width: none !important;
        max-height: none !important;
      }
      .rh { display: none !important; }
      .header { cursor: default !important; }
    }
    /* 8방향 resize handle — invisible. 가장자리 안쪽에 absolute. */
    .rh {
      position: absolute;
      z-index: 1;
      touch-action: none;
    }
    .rh.n { top: 0; left: 12px; right: 12px; height: 6px; cursor: n-resize; }
    .rh.s { bottom: 0; left: 12px; right: 12px; height: 6px; cursor: s-resize; }
    .rh.w { left: 0; top: 12px; bottom: 12px; width: 6px; cursor: w-resize; }
    .rh.e { right: 0; top: 12px; bottom: 12px; width: 6px; cursor: e-resize; }
    .rh.nw { top: 0; left: 0; width: 12px; height: 12px; cursor: nw-resize; }
    .rh.ne { top: 0; right: 0; width: 12px; height: 12px; cursor: ne-resize; }
    .rh.sw { bottom: 0; left: 0; width: 12px; height: 12px; cursor: sw-resize; }
    .rh.se { bottom: 0; right: 0; width: 12px; height: 12px; cursor: se-resize; }
    .panel.fullscreen .rh { display: none; }
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
      font-size: 14px;
      font-weight: 600;
      color: #111;
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
    .header button:hover {
      background: #e5e7eb;
      color: #111;
    }
    .header button svg {
      width: 16px;
      height: 16px;
    }
    .messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
    }
    .msg {
      margin-bottom: 12px;
      padding: 8px 12px;
      border-radius: 8px;
      max-width: 80%;
    }
    .msg.user {
      background: var(--user-bg);
      color: var(--user-text);
      margin-left: auto;
    }
    .msg.assistant {
      background: var(--assistant-bg);
      color: var(--assistant-text);
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
      font-family: ui-monospace, 'SF Mono', Menlo, monospace;
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
    .msg.assistant h1 { font-size: 16px; }
    .msg.assistant h2 { font-size: 15px; }
    .msg.assistant h3 { font-size: 14px; }
    .msg.assistant h4 { font-size: 13px; }
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
      to { transform: rotate(360deg); }
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
    .typing span:nth-child(2) { animation-delay: 0.15s; }
    .typing span:nth-child(3) { animation-delay: 0.3s; }
    @keyframes typing-bounce {
      0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
      30% { transform: translateY(-4px); opacity: 1; }
    }
    form {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 12px;
      border-top: 1px solid #e5e7eb;
    }
    form input[type='text'] {
      flex: 1;
      padding: 8px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 14px;
    }
    .cap-btn {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      padding: 0;
      border: 1px solid #d1d5db;
      background: #ffffff;
      color: #4b5563;
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
    button[type='submit'] {
      margin-left: 2px;
      padding: 8px 12px;
      border: none;
      background: var(--send-bg);
      color: var(--send-text);
      border-radius: 6px;
      cursor: pointer;
    }
    button[type='submit']:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .attachments {
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
      font-size: 16px;
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
  `;
N([
  Ot({ attribute: "api-key" })
], D.prototype, "apiKey", 2);
N([
  Ot({ attribute: "browser-id" })
], D.prototype, "browserId", 2);
N([
  Ot({ attribute: "api-base-url" })
], D.prototype, "apiBaseUrl", 2);
N([
  Ot({ attribute: !1 })
], D.prototype, "getAccessToken", 2);
N([
  W()
], D.prototype, "open", 2);
N([
  W()
], D.prototype, "fullscreen", 2);
N([
  W()
], D.prototype, "messages", 2);
N([
  W()
], D.prototype, "input", 2);
N([
  W()
], D.prototype, "streaming", 2);
N([
  W()
], D.prototype, "sessionId", 2);
N([
  W()
], D.prototype, "theme", 2);
N([
  W()
], D.prototype, "rect", 2);
N([
  W()
], D.prototype, "reportingMessageId", 2);
N([
  W()
], D.prototype, "reportReason", 2);
N([
  W()
], D.prototype, "reportDetail", 2);
N([
  W()
], D.prototype, "reportSubmitting", 2);
N([
  W()
], D.prototype, "reportError", 2);
N([
  W()
], D.prototype, "inquiryOpen", 2);
N([
  W()
], D.prototype, "inquiryCategory", 2);
N([
  W()
], D.prototype, "inquirySubject", 2);
N([
  W()
], D.prototype, "inquiryBody", 2);
N([
  W()
], D.prototype, "inquiryContact", 2);
N([
  W()
], D.prototype, "inquirySubmitting", 2);
N([
  W()
], D.prototype, "inquiryError", 2);
N([
  W()
], D.prototype, "inquirySuccess", 2);
N([
  W()
], D.prototype, "pendingAttachments", 2);
N([
  W()
], D.prototype, "capturing", 2);
N([
  W()
], D.prototype, "regionCapturing", 2);
N([
  W()
], D.prototype, "regionRect", 2);
D = N([
  Rf("timely-chatbot")
], D);
const _o = "timely-chatbot-bid", Sp = "http://localhost:3410";
function Kp() {
  try {
    const e = localStorage.getItem(_o);
    if (e) return e;
    const A = `tc-${crypto.randomUUID()}`;
    return localStorage.setItem(_o, A), A;
  } catch {
    return `tc-${crypto.randomUUID()}`;
  }
}
function Dp(e) {
  if (!e.apiKey) throw new Error("TimelyChatbot.init: apiKey가 필요합니다");
  const A = document.createElement("timely-chatbot");
  return A.apiBaseUrl = e.apiBaseUrl ?? Sp, A.apiKey = e.apiKey, A.browserId = Kp(), e.getAccessToken && (A.getAccessToken = e.getAccessToken), (e.mountTo ?? document.body).appendChild(A), {
    destroy: () => A.remove()
  };
}
window.TimelyChatbot = { init: Dp };
export {
  Dp as init
};
//# sourceMappingURL=widget.mjs.map
