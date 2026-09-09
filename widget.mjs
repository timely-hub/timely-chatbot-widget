var Jc = Object.defineProperty;
var Yc = (t, A, e) => A in t ? Jc(t, A, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[A] = e;
var O = (t, A, e) => Yc(t, typeof A != "symbol" ? A + "" : A, e);
/*! @license DOMPurify 3.4.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.2/LICENSE */
const {
  entries: Ba,
  setPrototypeOf: xi,
  isFrozen: Zc,
  getPrototypeOf: qc,
  getOwnPropertyDescriptor: jc
} = Object;
let {
  freeze: QA,
  seal: SA,
  create: Ge
} = Object, {
  apply: rn,
  construct: sn
} = typeof Reflect < "u" && Reflect;
QA || (QA = function(A) {
  return A;
});
SA || (SA = function(A) {
  return A;
});
rn || (rn = function(A, e) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
    s[n - 2] = arguments[n];
  return A.apply(e, s);
});
sn || (sn = function(A) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
    r[s - 1] = arguments[s];
  return new A(...r);
});
const it = rA(Array.prototype.forEach), Al = rA(Array.prototype.lastIndexOf), yi = rA(Array.prototype.pop), ot = rA(Array.prototype.push), el = rA(Array.prototype.splice), pA = Array.isArray, wt = rA(String.prototype.toLowerCase), ys = rA(String.prototype.toString), Ii = rA(String.prototype.match), Re = rA(String.prototype.replace), Hi = rA(String.prototype.indexOf), tl = rA(String.prototype.trim), rl = rA(Number.prototype.toString), sl = rA(Boolean.prototype.toString), Ti = typeof BigInt > "u" ? null : rA(BigInt.prototype.toString), Si = typeof Symbol > "u" ? null : rA(Symbol.prototype.toString), z = rA(Object.prototype.hasOwnProperty), at = rA(Object.prototype.toString), lA = rA(RegExp.prototype.test), er = nl(TypeError);
function rA(t) {
  return function(A) {
    A instanceof RegExp && (A.lastIndex = 0);
    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
      r[s - 1] = arguments[s];
    return rn(t, A, r);
  };
}
function nl(t) {
  return function() {
    for (var A = arguments.length, e = new Array(A), r = 0; r < A; r++)
      e[r] = arguments[r];
    return sn(t, e);
  };
}
function T(t, A) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wt;
  if (xi && xi(t, null), !pA(A))
    return t;
  let r = A.length;
  for (; r--; ) {
    let s = A[r];
    if (typeof s == "string") {
      const n = e(s);
      n !== s && (Zc(A) || (A[r] = n), s = n);
    }
    t[s] = !0;
  }
  return t;
}
function il(t) {
  for (let A = 0; A < t.length; A++)
    z(t, A) || (t[A] = null);
  return t;
}
function UA(t) {
  const A = Ge(null);
  for (const [e, r] of Ba(t))
    z(t, e) && (pA(r) ? A[e] = il(r) : r && typeof r == "object" && r.constructor === Object ? A[e] = UA(r) : A[e] = r);
  return A;
}
function ol(t) {
  switch (typeof t) {
    case "string":
      return t;
    case "number":
      return rl(t);
    case "boolean":
      return sl(t);
    case "bigint":
      return Ti ? Ti(t) : "0";
    case "symbol":
      return Si ? Si(t) : "Symbol()";
    case "undefined":
      return at(t);
    case "function":
    case "object": {
      if (t === null)
        return at(t);
      const A = t, e = Ve(A, "toString");
      if (typeof e == "function") {
        const r = e(A);
        return typeof r == "string" ? r : at(r);
      }
      return at(t);
    }
    default:
      return at(t);
  }
}
function Ve(t, A) {
  for (; t !== null; ) {
    const r = jc(t, A);
    if (r) {
      if (r.get)
        return rA(r.get);
      if (typeof r.value == "function")
        return rA(r.value);
    }
    t = qc(t);
  }
  function e() {
    return null;
  }
  return e;
}
function al(t) {
  try {
    return lA(t, ""), !0;
  } catch {
    return !1;
  }
}
const Li = QA(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Is = QA(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Hs = QA(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), cl = QA(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ts = QA(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ll = QA(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), vi = QA(["#text"]), Di = QA(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ss = QA(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ki = QA(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), tr = QA(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Bl = SA(/\{\{[\w\W]*|[\w\W]*\}\}/gm), hl = SA(/<%[\w\W]*|[\w\W]*%>/gm), gl = SA(/\$\{[\w\W]*/gm), ul = SA(/^data-[\-\w.\u00B7-\uFFFF]+$/), fl = SA(/^aria-[\-\w]+$/), ha = SA(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), dl = SA(/^(?:\w+script|data):/i), pl = SA(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ga = SA(/^html$/i), wl = SA(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ki = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: fl,
  ATTR_WHITESPACE: pl,
  CUSTOM_ELEMENT: wl,
  DATA_ATTR: ul,
  DOCTYPE_NAME: ga,
  ERB_EXPR: hl,
  IS_ALLOWED_URI: ha,
  IS_SCRIPT_OR_DATA: dl,
  MUSTACHE_EXPR: Bl,
  TMPLIT_EXPR: gl
});
const ct = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Ql = function() {
  return typeof window > "u" ? null : window;
}, Cl = function(A, e) {
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
}, Ri = function() {
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
function ua() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ql();
  const A = (y) => ua(y);
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
    HTMLFormElement: B,
    DOMParser: g,
    trustedTypes: u
  } = t, f = a.prototype, d = Ve(f, "cloneNode"), U = Ve(f, "remove"), x = Ve(f, "nextSibling"), Q = Ve(f, "childNodes"), F = Ve(f, "parentNode");
  if (typeof i == "function") {
    const y = e.createElement("template");
    y.content && y.content.ownerDocument && (e = y.content.ownerDocument);
  }
  let b, E = "";
  const {
    implementation: K,
    createNodeIterator: X,
    createDocumentFragment: aA,
    getElementsByTagName: G
  } = e, {
    importNode: Ae
  } = r;
  let sA = Ri();
  A.isSupported = typeof Ba == "function" && typeof F == "function" && K && K.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: LA,
    ERB_EXPR: XA,
    TMPLIT_EXPR: ue,
    DATA_ATTR: Jt,
    ARIA_ATTR: _c,
    IS_SCRIPT_OR_DATA: Oc,
    ATTR_WHITESPACE: ei,
    CUSTOM_ELEMENT: Nc
  } = ki;
  let {
    IS_ALLOWED_URI: ti
  } = ki, iA = null;
  const ri = T({}, [...Li, ...Is, ...Hs, ...Ts, ...vi]);
  let cA = null;
  const si = T({}, [...Di, ...Ss, ...Ki, ...tr]);
  let Y = Object.seal(Ge(null, {
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
  })), tt = null, Yt = null;
  const ee = Object.seal(Ge(null, {
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
  let ni = !0, gs = !0, ii = !1, oi = !0, fe = !1, rt = !0, de = !1, us = !1, fs = !1, ve = !1, Zt = !1, qt = !1, ai = !0, ci = !1;
  const li = "user-content-";
  let ds = !0, st = !1, De = {}, MA = null;
  const ps = T({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Bi = null;
  const hi = T({}, ["audio", "video", "img", "source", "image", "track"]);
  let ws = null;
  const gi = T({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), jt = "http://www.w3.org/1998/Math/MathML", Ar = "http://www.w3.org/2000/svg", _A = "http://www.w3.org/1999/xhtml";
  let Ke = _A, Qs = !1, Cs = null;
  const Pc = T({}, [jt, Ar, _A], ys);
  let Us = T({}, ["mi", "mo", "mn", "ms", "mtext"]), ms = T({}, ["annotation-xml"]);
  const $c = T({}, ["title", "style", "font", "a", "script"]);
  let nt = null;
  const Gc = ["application/xhtml+xml", "text/html"], Vc = "text/html";
  let nA = null, ke = null;
  const Xc = e.createElement("form"), ui = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, Fs = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ke && ke === h)
      return;
    (!h || typeof h != "object") && (h = {}), h = UA(h), nt = // eslint-disable-next-line unicorn/prefer-includes
    Gc.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? Vc : h.PARSER_MEDIA_TYPE, nA = nt === "application/xhtml+xml" ? ys : wt, iA = z(h, "ALLOWED_TAGS") && pA(h.ALLOWED_TAGS) ? T({}, h.ALLOWED_TAGS, nA) : ri, cA = z(h, "ALLOWED_ATTR") && pA(h.ALLOWED_ATTR) ? T({}, h.ALLOWED_ATTR, nA) : si, Cs = z(h, "ALLOWED_NAMESPACES") && pA(h.ALLOWED_NAMESPACES) ? T({}, h.ALLOWED_NAMESPACES, ys) : Pc, ws = z(h, "ADD_URI_SAFE_ATTR") && pA(h.ADD_URI_SAFE_ATTR) ? T(UA(gi), h.ADD_URI_SAFE_ATTR, nA) : gi, Bi = z(h, "ADD_DATA_URI_TAGS") && pA(h.ADD_DATA_URI_TAGS) ? T(UA(hi), h.ADD_DATA_URI_TAGS, nA) : hi, MA = z(h, "FORBID_CONTENTS") && pA(h.FORBID_CONTENTS) ? T({}, h.FORBID_CONTENTS, nA) : ps, tt = z(h, "FORBID_TAGS") && pA(h.FORBID_TAGS) ? T({}, h.FORBID_TAGS, nA) : UA({}), Yt = z(h, "FORBID_ATTR") && pA(h.FORBID_ATTR) ? T({}, h.FORBID_ATTR, nA) : UA({}), De = z(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? UA(h.USE_PROFILES) : h.USE_PROFILES : !1, ni = h.ALLOW_ARIA_ATTR !== !1, gs = h.ALLOW_DATA_ATTR !== !1, ii = h.ALLOW_UNKNOWN_PROTOCOLS || !1, oi = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, fe = h.SAFE_FOR_TEMPLATES || !1, rt = h.SAFE_FOR_XML !== !1, de = h.WHOLE_DOCUMENT || !1, ve = h.RETURN_DOM || !1, Zt = h.RETURN_DOM_FRAGMENT || !1, qt = h.RETURN_TRUSTED_TYPE || !1, fs = h.FORCE_BODY || !1, ai = h.SANITIZE_DOM !== !1, ci = h.SANITIZE_NAMED_PROPS || !1, ds = h.KEEP_CONTENT !== !1, st = h.IN_PLACE || !1, ti = al(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : ha, Ke = typeof h.NAMESPACE == "string" ? h.NAMESPACE : _A, Us = z(h, "MATHML_TEXT_INTEGRATION_POINTS") && h.MATHML_TEXT_INTEGRATION_POINTS && typeof h.MATHML_TEXT_INTEGRATION_POINTS == "object" ? UA(h.MATHML_TEXT_INTEGRATION_POINTS) : T({}, ["mi", "mo", "mn", "ms", "mtext"]), ms = z(h, "HTML_INTEGRATION_POINTS") && h.HTML_INTEGRATION_POINTS && typeof h.HTML_INTEGRATION_POINTS == "object" ? UA(h.HTML_INTEGRATION_POINTS) : T({}, ["annotation-xml"]);
    const p = z(h, "CUSTOM_ELEMENT_HANDLING") && h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING == "object" ? UA(h.CUSTOM_ELEMENT_HANDLING) : Ge(null);
    if (Y = Ge(null), z(p, "tagNameCheck") && ui(p.tagNameCheck) && (Y.tagNameCheck = p.tagNameCheck), z(p, "attributeNameCheck") && ui(p.attributeNameCheck) && (Y.attributeNameCheck = p.attributeNameCheck), z(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (Y.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), fe && (gs = !1), Zt && (ve = !0), De && (iA = T({}, vi), cA = Ge(null), De.html === !0 && (T(iA, Li), T(cA, Di)), De.svg === !0 && (T(iA, Is), T(cA, Ss), T(cA, tr)), De.svgFilters === !0 && (T(iA, Hs), T(cA, Ss), T(cA, tr)), De.mathMl === !0 && (T(iA, Ts), T(cA, Ki), T(cA, tr))), ee.tagCheck = null, ee.attributeCheck = null, z(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? ee.tagCheck = h.ADD_TAGS : pA(h.ADD_TAGS) && (iA === ri && (iA = UA(iA)), T(iA, h.ADD_TAGS, nA))), z(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? ee.attributeCheck = h.ADD_ATTR : pA(h.ADD_ATTR) && (cA === si && (cA = UA(cA)), T(cA, h.ADD_ATTR, nA))), z(h, "ADD_URI_SAFE_ATTR") && pA(h.ADD_URI_SAFE_ATTR) && T(ws, h.ADD_URI_SAFE_ATTR, nA), z(h, "FORBID_CONTENTS") && pA(h.FORBID_CONTENTS) && (MA === ps && (MA = UA(MA)), T(MA, h.FORBID_CONTENTS, nA)), z(h, "ADD_FORBID_CONTENTS") && pA(h.ADD_FORBID_CONTENTS) && (MA === ps && (MA = UA(MA)), T(MA, h.ADD_FORBID_CONTENTS, nA)), ds && (iA["#text"] = !0), de && T(iA, ["html", "head", "body"]), iA.table && (T(iA, ["tbody"]), delete tt.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw er('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw er('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      b = h.TRUSTED_TYPES_POLICY, E = b.createHTML("");
    } else
      b === void 0 && (b = Cl(u, s)), b !== null && typeof E == "string" && (E = b.createHTML(""));
    QA && QA(h), ke = h;
  }, fi = T({}, [...Is, ...Hs, ...cl]), di = T({}, [...Ts, ...ll]), Wc = function(h) {
    let p = F(h);
    (!p || !p.tagName) && (p = {
      namespaceURI: Ke,
      tagName: "template"
    });
    const m = wt(h.tagName), P = wt(p.tagName);
    return Cs[h.namespaceURI] ? h.namespaceURI === Ar ? p.namespaceURI === _A ? m === "svg" : p.namespaceURI === jt ? m === "svg" && (P === "annotation-xml" || Us[P]) : !!fi[m] : h.namespaceURI === jt ? p.namespaceURI === _A ? m === "math" : p.namespaceURI === Ar ? m === "math" && ms[P] : !!di[m] : h.namespaceURI === _A ? p.namespaceURI === Ar && !ms[P] || p.namespaceURI === jt && !Us[P] ? !1 : !di[m] && ($c[m] || !fi[m]) : !!(nt === "application/xhtml+xml" && Cs[h.namespaceURI]) : !1;
  }, vA = function(h) {
    ot(A.removed, {
      element: h
    });
    try {
      F(h).removeChild(h);
    } catch {
      U(h);
    }
  }, pe = function(h, p) {
    try {
      ot(A.removed, {
        attribute: p.getAttributeNode(h),
        from: p
      });
    } catch {
      ot(A.removed, {
        attribute: null,
        from: p
      });
    }
    if (p.removeAttribute(h), h === "is")
      if (ve || Zt)
        try {
          vA(p);
        } catch {
        }
      else
        try {
          p.setAttribute(h, "");
        } catch {
        }
  }, pi = function(h) {
    let p = null, m = null;
    if (fs)
      h = "<remove></remove>" + h;
    else {
      const j = Ii(h, /^[\r\n\t ]+/);
      m = j && j[0];
    }
    nt === "application/xhtml+xml" && Ke === _A && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const P = b ? b.createHTML(h) : h;
    if (Ke === _A)
      try {
        p = new g().parseFromString(P, nt);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = K.createDocument(Ke, "template", null);
      try {
        p.documentElement.innerHTML = Qs ? E : P;
      } catch {
      }
    }
    const gA = p.body || p.documentElement;
    return h && m && gA.insertBefore(e.createTextNode(m), gA.childNodes[0] || null), Ke === _A ? G.call(p, de ? "html" : "body")[0] : de ? p.documentElement : gA;
  }, wi = function(h) {
    return X.call(
      h.ownerDocument || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Es = function(h) {
    return h instanceof B && (typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || !(h.attributes instanceof l) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function");
  }, bs = function(h) {
    return typeof o == "function" && h instanceof o;
  };
  function WA(y, h, p) {
    it(y, (m) => {
      m.call(A, h, p, ke);
    });
  }
  const Qi = function(h) {
    let p = null;
    if (WA(sA.beforeSanitizeElements, h, null), Es(h))
      return vA(h), !0;
    const m = nA(h.nodeName);
    if (WA(sA.uponSanitizeElement, h, {
      tagName: m,
      allowedTags: iA
    }), rt && h.hasChildNodes() && !bs(h.firstElementChild) && lA(/<[/\w!]/g, h.innerHTML) && lA(/<[/\w!]/g, h.textContent) || rt && h.namespaceURI === _A && m === "style" && bs(h.firstElementChild) || h.nodeType === ct.progressingInstruction || rt && h.nodeType === ct.comment && lA(/<[/\w]/g, h.data))
      return vA(h), !0;
    if (tt[m] || !(ee.tagCheck instanceof Function && ee.tagCheck(m)) && !iA[m]) {
      if (!tt[m] && Ui(m) && (Y.tagNameCheck instanceof RegExp && lA(Y.tagNameCheck, m) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(m)))
        return !1;
      if (ds && !MA[m]) {
        const P = F(h) || h.parentNode, gA = Q(h) || h.childNodes;
        if (gA && P) {
          const j = gA.length;
          for (let CA = j - 1; CA >= 0; --CA) {
            const yA = d(gA[CA], !0);
            P.insertBefore(yA, x(h));
          }
        }
      }
      return vA(h), !0;
    }
    return h instanceof a && !Wc(h) || (m === "noscript" || m === "noembed" || m === "noframes") && lA(/<\/no(script|embed|frames)/i, h.innerHTML) ? (vA(h), !0) : (fe && h.nodeType === ct.text && (p = h.textContent, it([LA, XA, ue], (P) => {
      p = Re(p, P, " ");
    }), h.textContent !== p && (ot(A.removed, {
      element: h.cloneNode()
    }), h.textContent = p)), WA(sA.afterSanitizeElements, h, null), !1);
  }, Ci = function(h, p, m) {
    if (Yt[p] || ai && (p === "id" || p === "name") && (m in e || m in Xc))
      return !1;
    const P = cA[p] || ee.attributeCheck instanceof Function && ee.attributeCheck(p, h);
    if (!(gs && !Yt[p] && lA(Jt, p))) {
      if (!(ni && lA(_c, p))) {
        if (!P || Yt[p]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ui(h) && (Y.tagNameCheck instanceof RegExp && lA(Y.tagNameCheck, h) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(h)) && (Y.attributeNameCheck instanceof RegExp && lA(Y.attributeNameCheck, p) || Y.attributeNameCheck instanceof Function && Y.attributeNameCheck(p, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            p === "is" && Y.allowCustomizedBuiltInElements && (Y.tagNameCheck instanceof RegExp && lA(Y.tagNameCheck, m) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(m)))
          ) return !1;
        } else if (!ws[p]) {
          if (!lA(ti, Re(m, ei, ""))) {
            if (!((p === "src" || p === "xlink:href" || p === "href") && h !== "script" && Hi(m, "data:") === 0 && Bi[h])) {
              if (!(ii && !lA(Oc, Re(m, ei, "")))) {
                if (m)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, zc = T({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ui = function(h) {
    return !zc[wt(h)] && lA(Nc, h);
  }, mi = function(h) {
    WA(sA.beforeSanitizeAttributes, h, null);
    const {
      attributes: p
    } = h;
    if (!p || Es(h))
      return;
    const m = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: cA,
      forceKeepAttr: void 0
    };
    let P = p.length;
    for (; P--; ) {
      const gA = p[P], {
        name: j,
        namespaceURI: CA,
        value: yA
      } = gA, DA = nA(j), xs = yA;
      let oA = j === "value" ? xs : tl(xs);
      if (m.attrName = DA, m.attrValue = oA, m.keepAttr = !0, m.forceKeepAttr = void 0, WA(sA.uponSanitizeAttribute, h, m), oA = m.attrValue, ci && (DA === "id" || DA === "name") && Hi(oA, li) !== 0 && (pe(j, h), oA = li + oA), rt && lA(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, oA)) {
        pe(j, h);
        continue;
      }
      if (DA === "attributename" && Ii(oA, "href")) {
        pe(j, h);
        continue;
      }
      if (m.forceKeepAttr)
        continue;
      if (!m.keepAttr) {
        pe(j, h);
        continue;
      }
      if (!oi && lA(/\/>/i, oA)) {
        pe(j, h);
        continue;
      }
      fe && it([LA, XA, ue], (bi) => {
        oA = Re(oA, bi, " ");
      });
      const Ei = nA(h.nodeName);
      if (!Ci(Ei, DA, oA)) {
        pe(j, h);
        continue;
      }
      if (b && typeof u == "object" && typeof u.getAttributeType == "function" && !CA)
        switch (u.getAttributeType(Ei, DA)) {
          case "TrustedHTML": {
            oA = b.createHTML(oA);
            break;
          }
          case "TrustedScriptURL": {
            oA = b.createScriptURL(oA);
            break;
          }
        }
      if (oA !== xs)
        try {
          CA ? h.setAttributeNS(CA, j, oA) : h.setAttribute(j, oA), Es(h) ? vA(h) : yi(A.removed);
        } catch {
          pe(j, h);
        }
    }
    WA(sA.afterSanitizeAttributes, h, null);
  }, Fi = function(h) {
    let p = null;
    const m = wi(h);
    for (WA(sA.beforeSanitizeShadowDOM, h, null); p = m.nextNode(); )
      WA(sA.uponSanitizeShadowNode, p, null), Qi(p), mi(p), p.content instanceof n && Fi(p.content);
    WA(sA.afterSanitizeShadowDOM, h, null);
  };
  return A.sanitize = function(y) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, m = null, P = null, gA = null;
    if (Qs = !y, Qs && (y = "<!-->"), typeof y != "string" && !bs(y) && (y = ol(y), typeof y != "string"))
      throw er("dirty is not a string, aborting");
    if (!A.isSupported)
      return y;
    if (us || Fs(h), A.removed = [], typeof y == "string" && (st = !1), st) {
      const yA = y.nodeName;
      if (typeof yA == "string") {
        const DA = nA(yA);
        if (!iA[DA] || tt[DA])
          throw er("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (y instanceof o)
      p = pi("<!---->"), m = p.ownerDocument.importNode(y, !0), m.nodeType === ct.element && m.nodeName === "BODY" || m.nodeName === "HTML" ? p = m : p.appendChild(m);
    else {
      if (!ve && !fe && !de && // eslint-disable-next-line unicorn/prefer-includes
      y.indexOf("<") === -1)
        return b && qt ? b.createHTML(y) : y;
      if (p = pi(y), !p)
        return ve ? null : qt ? E : "";
    }
    p && fs && vA(p.firstChild);
    const j = wi(st ? y : p);
    for (; P = j.nextNode(); )
      Qi(P), mi(P), P.content instanceof n && Fi(P.content);
    if (st)
      return y;
    if (ve) {
      if (fe) {
        p.normalize();
        let yA = p.innerHTML;
        it([LA, XA, ue], (DA) => {
          yA = Re(yA, DA, " ");
        }), p.innerHTML = yA;
      }
      if (Zt)
        for (gA = aA.call(p.ownerDocument); p.firstChild; )
          gA.appendChild(p.firstChild);
      else
        gA = p;
      return (cA.shadowroot || cA.shadowrootmode) && (gA = Ae.call(r, gA, !0)), gA;
    }
    let CA = de ? p.outerHTML : p.innerHTML;
    return de && iA["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && lA(ga, p.ownerDocument.doctype.name) && (CA = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + CA), fe && it([LA, XA, ue], (yA) => {
      CA = Re(CA, yA, " ");
    }), b && qt ? b.createHTML(CA) : CA;
  }, A.setConfig = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Fs(y), us = !0;
  }, A.clearConfig = function() {
    ke = null, us = !1;
  }, A.isValidAttribute = function(y, h, p) {
    ke || Fs({});
    const m = nA(y), P = nA(h);
    return Ci(m, P, p);
  }, A.addHook = function(y, h) {
    typeof h == "function" && ot(sA[y], h);
  }, A.removeHook = function(y, h) {
    if (h !== void 0) {
      const p = Al(sA[y], h);
      return p === -1 ? void 0 : el(sA[y], p, 1)[0];
    }
    return yi(sA[y]);
  }, A.removeHooks = function(y) {
    sA[y] = [];
  }, A.removeAllHooks = function() {
    sA = Ri();
  }, A;
}
var Ul = ua();
/*!
 * html2canvas-pro 2.0.2 <https://yorickshan.github.io/html2canvas-pro/>
 * Copyright (c) 2024-present yorickshan and html2canvas-pro contributors
 * Released under MIT License
 */
class dA {
  constructor(A, e, r, s) {
    this.left = A, this.top = e, this.width = r, this.height = s;
  }
  add(A, e, r, s) {
    return new dA(this.left + A, this.top + e, this.width + r, this.height + s);
  }
  static fromClientRect(A, e) {
    return new dA(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height);
  }
  static fromDOMRectList(A, e) {
    const r = Array.from(e);
    let s = r.find((n) => n.width !== 0);
    return s || (s = r.find((n) => n.height !== 0)), !s && r.length > 0 && (s = r[0]), s ? new dA(s.left + A.windowBounds.left, s.top + A.windowBounds.top, s.width, s.height) : dA.EMPTY;
  }
}
dA.EMPTY = new dA(0, 0, 0, 0);
const Jr = (t, A) => dA.fromClientRect(t, A.getBoundingClientRect()), ml = (t) => {
  const A = t.body, e = t.documentElement;
  if (!A || !e)
    throw new Error("Unable to get document size");
  const r = Math.max(Math.max(A.scrollWidth, e.scrollWidth), Math.max(A.offsetWidth, e.offsetWidth), Math.max(A.clientWidth, e.clientWidth)), s = Math.max(Math.max(A.scrollHeight, e.scrollHeight), Math.max(A.offsetHeight, e.offsetHeight), Math.max(A.clientHeight, e.clientHeight));
  return new dA(0, 0, r, s);
};
var Yr = function(t) {
  for (var A = [], e = 0, r = t.length; e < r; ) {
    var s = t.charCodeAt(e++);
    if (s >= 55296 && s <= 56319 && e < r) {
      var n = t.charCodeAt(e++);
      (n & 64512) === 56320 ? A.push(((s & 1023) << 10) + (n & 1023) + 65536) : (A.push(s), e--);
    } else
      A.push(s);
  }
  return A;
}, q = function() {
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
}, Mi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Fl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var rr = 0; rr < Mi.length; rr++)
  Fl[Mi.charCodeAt(rr)] = rr;
var _i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Qt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var sr = 0; sr < _i.length; sr++)
  Qt[_i.charCodeAt(sr)] = sr;
var El = function(t) {
  var A = t.length * 0.75, e = t.length, r, s = 0, n, i, o, a;
  t[t.length - 1] === "=" && (A--, t[t.length - 2] === "=" && A--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), l = Array.isArray(c) ? c : new Uint8Array(c);
  for (r = 0; r < e; r += 4)
    n = Qt[t.charCodeAt(r)], i = Qt[t.charCodeAt(r + 1)], o = Qt[t.charCodeAt(r + 2)], a = Qt[t.charCodeAt(r + 3)], l[s++] = n << 2 | i >> 4, l[s++] = (i & 15) << 4 | o >> 2, l[s++] = (o & 3) << 6 | a & 63;
  return c;
}, bl = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 2)
    e.push(t[r + 1] << 8 | t[r]);
  return e;
}, xl = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 4)
    e.push(t[r + 3] << 24 | t[r + 2] << 16 | t[r + 1] << 8 | t[r]);
  return e;
}, Ee = 5, Kn = 11, Ls = 2, yl = Kn - Ee, fa = 65536 >> Ee, Il = 1 << Ee, vs = Il - 1, Hl = 1024 >> Ee, Tl = fa + Hl, Sl = Tl, Ll = 32, vl = Sl + Ll, Dl = 65536 >> Kn, Kl = 1 << yl, kl = Kl - 1, Oi = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, Rl = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, Ml = function(t, A) {
  var e = El(t), r = Array.isArray(e) ? xl(e) : new Uint32Array(e), s = Array.isArray(e) ? bl(e) : new Uint16Array(e), n = 24, i = Oi(s, n / 2, r[4] / 2), o = r[5] === 2 ? Oi(s, (n + r[4]) / 2) : Rl(r, Math.ceil((n + r[4]) / 4));
  return new _l(r[0], r[1], r[2], r[3], i, o);
}, _l = (
  /** @class */
  (function() {
    function t(A, e, r, s, n, i) {
      this.initialValue = A, this.errorValue = e, this.highStart = r, this.highValueIndex = s, this.index = n, this.data = i;
    }
    return t.prototype.get = function(A) {
      var e;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return e = this.index[A >> Ee], e = (e << Ls) + (A & vs), this.data[e];
        if (A <= 65535)
          return e = this.index[fa + (A - 55296 >> Ee)], e = (e << Ls) + (A & vs), this.data[e];
        if (A < this.highStart)
          return e = vl - Dl + (A >> Kn), e = this.index[e], e += A >> Ee & kl, e = this.index[e], e = (e << Ls) + (A & vs), this.data[e];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, t;
  })()
), Ni = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ol = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var nr = 0; nr < Ni.length; nr++)
  Ol[Ni.charCodeAt(nr)] = nr;
var Nl = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Pi = 50, Pl = 1, da = 2, pa = 3, $l = 4, Gl = 5, $i = 7, wa = 8, Gi = 9, oe = 10, nn = 11, Vi = 12, on = 13, Vl = 14, Ct = 15, an = 16, ir = 17, lt = 18, Xl = 19, Xi = 20, cn = 21, Bt = 22, Ds = 23, Me = 24, bA = 25, Ut = 26, mt = 27, _e = 28, Wl = 29, Ce = 30, zl = 31, or = 32, ar = 33, ln = 34, Bn = 35, hn = 36, Rt = 37, gn = 38, Ir = 39, Hr = 40, Ks = 41, Qa = 42, Jl = 43, Yl = [9001, 65288], Ca = "!", v = "×", cr = "÷", un = Ml(Nl), zA = [Ce, hn], fn = [Pl, da, pa, Gl], Ua = [oe, wa], Wi = [mt, Ut], Zl = fn.concat(Ua), zi = [gn, Ir, Hr, ln, Bn], ql = [Ct, on], jl = function(t, A) {
  A === void 0 && (A = "strict");
  var e = [], r = [], s = [];
  return t.forEach(function(n, i) {
    var o = un.get(n);
    if (o > Pi ? (s.push(!0), o -= Pi) : s.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(n) !== -1)
      return r.push(i), e.push(an);
    if (o === $l || o === nn) {
      if (i === 0)
        return r.push(i), e.push(Ce);
      var a = e[i - 1];
      return Zl.indexOf(a) === -1 ? (r.push(r[i - 1]), e.push(a)) : (r.push(i), e.push(Ce));
    }
    if (r.push(i), o === zl)
      return e.push(A === "strict" ? cn : Rt);
    if (o === Qa || o === Wl)
      return e.push(Ce);
    if (o === Jl)
      return n >= 131072 && n <= 196605 || n >= 196608 && n <= 262141 ? e.push(Rt) : e.push(Ce);
    e.push(o);
  }), [r, e, s];
}, ks = function(t, A, e, r) {
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
}, Ji = function(t, A) {
  for (var e = t; e >= 0; ) {
    var r = A[e];
    if (r === oe)
      e--;
    else
      return r;
  }
  return 0;
}, AB = function(t, A, e, r, s) {
  if (e[r] === 0)
    return v;
  var n = r - 1;
  if (Array.isArray(s) && s[n] === !0)
    return v;
  var i = n - 1, o = n + 1, a = A[n], c = i >= 0 ? A[i] : 0, l = A[o];
  if (a === da && l === pa)
    return v;
  if (fn.indexOf(a) !== -1)
    return Ca;
  if (fn.indexOf(l) !== -1 || Ua.indexOf(l) !== -1)
    return v;
  if (Ji(n, A) === wa)
    return cr;
  if (un.get(t[n]) === nn || (a === or || a === ar) && un.get(t[o]) === nn || a === $i || l === $i || a === Gi || [oe, on, Ct].indexOf(a) === -1 && l === Gi || [ir, lt, Xl, Me, _e].indexOf(l) !== -1 || Ji(n, A) === Bt || ks(Ds, Bt, n, A) || ks([ir, lt], cn, n, A) || ks(Vi, Vi, n, A))
    return v;
  if (a === oe)
    return cr;
  if (a === Ds || l === Ds)
    return v;
  if (l === an || a === an)
    return cr;
  if ([on, Ct, cn].indexOf(l) !== -1 || a === Vl || c === hn && ql.indexOf(a) !== -1 || a === _e && l === hn || l === Xi || zA.indexOf(l) !== -1 && a === bA || zA.indexOf(a) !== -1 && l === bA || a === mt && [Rt, or, ar].indexOf(l) !== -1 || [Rt, or, ar].indexOf(a) !== -1 && l === Ut || zA.indexOf(a) !== -1 && Wi.indexOf(l) !== -1 || Wi.indexOf(a) !== -1 && zA.indexOf(l) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [mt, Ut].indexOf(a) !== -1 && (l === bA || [Bt, Ct].indexOf(l) !== -1 && A[o + 1] === bA) || // ( OP | HY ) × NU
  [Bt, Ct].indexOf(a) !== -1 && l === bA || // NU ×	(NU | SY | IS)
  a === bA && [bA, _e, Me].indexOf(l) !== -1)
    return v;
  if ([bA, _e, Me, ir, lt].indexOf(l) !== -1)
    for (var B = n; B >= 0; ) {
      var g = A[B];
      if (g === bA)
        return v;
      if ([_e, Me].indexOf(g) !== -1)
        B--;
      else
        break;
    }
  if ([mt, Ut].indexOf(l) !== -1)
    for (var B = [ir, lt].indexOf(a) !== -1 ? i : n; B >= 0; ) {
      var g = A[B];
      if (g === bA)
        return v;
      if ([_e, Me].indexOf(g) !== -1)
        B--;
      else
        break;
    }
  if (gn === a && [gn, Ir, ln, Bn].indexOf(l) !== -1 || [Ir, ln].indexOf(a) !== -1 && [Ir, Hr].indexOf(l) !== -1 || [Hr, Bn].indexOf(a) !== -1 && l === Hr || zi.indexOf(a) !== -1 && [Xi, Ut].indexOf(l) !== -1 || zi.indexOf(l) !== -1 && a === mt || zA.indexOf(a) !== -1 && zA.indexOf(l) !== -1 || a === Me && zA.indexOf(l) !== -1 || zA.concat(bA).indexOf(a) !== -1 && l === Bt && Yl.indexOf(t[o]) === -1 || zA.concat(bA).indexOf(l) !== -1 && a === lt)
    return v;
  if (a === Ks && l === Ks) {
    for (var u = e[n], f = 1; u > 0 && (u--, A[u] === Ks); )
      f++;
    if (f % 2 !== 0)
      return v;
  }
  return a === or && l === ar ? v : cr;
}, eB = function(t, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var e = jl(t, A.lineBreak), r = e[0], s = e[1], n = e[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (s = s.map(function(o) {
    return [bA, Ce, Qa].indexOf(o) !== -1 ? Rt : o;
  }));
  var i = A.wordBreak === "keep-all" ? n.map(function(o, a) {
    return o && t[a] >= 19968 && t[a] <= 40959;
  }) : void 0;
  return [r, s, i];
}, tB = (
  /** @class */
  (function() {
    function t(A, e, r, s) {
      this.codePoints = A, this.required = e === Ca, this.start = r, this.end = s;
    }
    return t.prototype.slice = function() {
      return q.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, t;
  })()
), rB = function(t, A) {
  var e = Yr(t), r = eB(e, A), s = r[0], n = r[1], i = r[2], o = e.length, a = 0, c = 0;
  return {
    next: function() {
      if (c >= o)
        return { done: !0, value: null };
      for (var l = v; c < o && (l = AB(e, n, s, ++c, i)) === v; )
        ;
      if (l !== v || c === o) {
        var B = new tB(e, l, a, c);
        return a = c, { value: B, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
};
const sB = 1, nB = 2, At = 4, Yi = 8, vr = 10, Zi = 47, yt = 92, iB = 9, oB = 32, lr = 34, ht = 61, aB = 35, cB = 36, lB = 37, Br = 39, hr = 40, gt = 41, BB = 95, mA = 45, hB = 33, gB = 60, uB = 62, fB = 64, dB = 91, pB = 93, wB = 61, QB = 123, gr = 63, CB = 125, qi = 124, UB = 126, mB = 128, ji = 65533, Rs = 42, Ue = 43, FB = 44, EB = 58, bB = 59, Mt = 46, xB = 0, yB = 8, IB = 11, HB = 14, TB = 31, SB = 127, OA = -1, ma = 48, Fa = 97, Ea = 101, LB = 102, vB = 117, DB = 122, ba = 65, xa = 69, ya = 70, KB = 85, kB = 90, fA = (t) => t >= ma && t <= 57, RB = (t) => t >= 55296 && t <= 57343, Oe = (t) => fA(t) || t >= ba && t <= ya || t >= Fa && t <= LB, MB = (t) => t >= Fa && t <= DB, _B = (t) => t >= ba && t <= kB, OB = (t) => MB(t) || _B(t), NB = (t) => t >= mB, ur = (t) => t === vr || t === iB || t === oB, Dr = (t) => OB(t) || NB(t) || t === BB, Ao = (t) => Dr(t) || fA(t) || t === mA, PB = (t) => t >= xB && t <= yB || t === IB || t >= HB && t <= TB || t === SB, se = (t, A) => t !== yt ? !1 : A !== vr, fr = (t, A, e) => t === mA ? Dr(A) || se(A, e) : Dr(t) ? !0 : !!(t === yt && se(t, A)), Ms = (t, A, e) => t === Ue || t === mA ? fA(A) ? !0 : A === Mt && fA(e) : fA(t === Mt ? A : t), $B = (t) => {
  let A = 0, e = 1;
  (t[A] === Ue || t[A] === mA) && (t[A] === mA && (e = -1), A++);
  const r = [];
  for (; fA(t[A]); )
    r.push(t[A++]);
  const s = r.length ? parseInt(q(...r), 10) : 0;
  t[A] === Mt && A++;
  const n = [];
  for (; fA(t[A]); )
    n.push(t[A++]);
  const i = n.length, o = i ? parseInt(q(...n), 10) : 0;
  (t[A] === xa || t[A] === Ea) && A++;
  let a = 1;
  (t[A] === Ue || t[A] === mA) && (t[A] === mA && (a = -1), A++);
  const c = [];
  for (; fA(t[A]); )
    c.push(t[A++]);
  const l = c.length ? parseInt(q(...c), 10) : 0;
  return e * (s + o * Math.pow(10, -i)) * Math.pow(10, a * l);
}, GB = {
  type: 2
  /* TokenType.LEFT_PARENTHESIS_TOKEN */
}, VB = {
  type: 3
  /* TokenType.RIGHT_PARENTHESIS_TOKEN */
}, XB = {
  type: 4
  /* TokenType.COMMA_TOKEN */
}, WB = {
  type: 13
  /* TokenType.SUFFIX_MATCH_TOKEN */
}, zB = {
  type: 8
  /* TokenType.PREFIX_MATCH_TOKEN */
}, JB = {
  type: 21
  /* TokenType.COLUMN_TOKEN */
}, YB = {
  type: 9
  /* TokenType.DASH_MATCH_TOKEN */
}, ZB = {
  type: 10
  /* TokenType.INCLUDE_MATCH_TOKEN */
}, qB = {
  type: 11
  /* TokenType.LEFT_CURLY_BRACKET_TOKEN */
}, jB = {
  type: 12
  /* TokenType.RIGHT_CURLY_BRACKET_TOKEN */
}, Ah = {
  type: 14
  /* TokenType.SUBSTRING_MATCH_TOKEN */
}, dr = {
  type: 23
  /* TokenType.BAD_URL_TOKEN */
}, eh = {
  type: 1
  /* TokenType.BAD_STRING_TOKEN */
}, th = {
  type: 25
  /* TokenType.CDO_TOKEN */
}, rh = {
  type: 24
  /* TokenType.CDC_TOKEN */
}, sh = {
  type: 26
  /* TokenType.COLON_TOKEN */
}, nh = {
  type: 27
  /* TokenType.SEMICOLON_TOKEN */
}, ih = {
  type: 28
  /* TokenType.LEFT_SQUARE_BRACKET_TOKEN */
}, oh = {
  type: 29
  /* TokenType.RIGHT_SQUARE_BRACKET_TOKEN */
}, ah = {
  type: 31
  /* TokenType.WHITESPACE_TOKEN */
}, dn = {
  type: 32
  /* TokenType.EOF_TOKEN */
};
class Ia {
  constructor() {
    this._value = [];
  }
  write(A) {
    this._value = this._value.concat(Yr(A));
  }
  read() {
    const A = [];
    let e = this.consumeToken();
    for (; e !== dn; )
      A.push(e), e = this.consumeToken();
    return A;
  }
  consumeToken() {
    const A = this.consumeCodePoint();
    switch (A) {
      case lr:
        return this.consumeStringToken(lr);
      case aB:
        const e = this.peekCodePoint(0), r = this.peekCodePoint(1), s = this.peekCodePoint(2);
        if (Ao(e) || se(r, s)) {
          const u = fr(e, r, s) ? nB : sB;
          return { type: 5, value: this.consumeName(), flags: u };
        }
        break;
      case cB:
        if (this.peekCodePoint(0) === ht)
          return this.consumeCodePoint(), WB;
        break;
      case Br:
        return this.consumeStringToken(Br);
      case hr:
        return GB;
      case gt:
        return VB;
      case Rs:
        if (this.peekCodePoint(0) === ht)
          return this.consumeCodePoint(), Ah;
        break;
      case Ue:
        if (Ms(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case FB:
        return XB;
      case mA:
        const n = A, i = this.peekCodePoint(0), o = this.peekCodePoint(1);
        if (Ms(n, i, o))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (fr(n, i, o))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (i === mA && o === uB)
          return this.consumeCodePoint(), this.consumeCodePoint(), rh;
        break;
      case Mt:
        if (Ms(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case Zi:
        if (this.peekCodePoint(0) === Rs)
          for (this.consumeCodePoint(); ; ) {
            let u = this.consumeCodePoint();
            if (u === Rs && (u = this.consumeCodePoint(), u === Zi))
              return this.consumeToken();
            if (u === OA)
              return this.consumeToken();
          }
        break;
      case EB:
        return sh;
      case bB:
        return nh;
      case gB:
        if (this.peekCodePoint(0) === hB && this.peekCodePoint(1) === mA && this.peekCodePoint(2) === mA)
          return this.consumeCodePoint(), this.consumeCodePoint(), th;
        break;
      case fB:
        const a = this.peekCodePoint(0), c = this.peekCodePoint(1), l = this.peekCodePoint(2);
        if (fr(a, c, l))
          return { type: 7, value: this.consumeName() };
        break;
      case dB:
        return ih;
      case yt:
        if (se(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case pB:
        return oh;
      case wB:
        if (this.peekCodePoint(0) === ht)
          return this.consumeCodePoint(), zB;
        break;
      case QB:
        return qB;
      case CB:
        return jB;
      case vB:
      case KB:
        const B = this.peekCodePoint(0), g = this.peekCodePoint(1);
        return B === Ue && (Oe(g) || g === gr) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case qi:
        if (this.peekCodePoint(0) === ht)
          return this.consumeCodePoint(), YB;
        if (this.peekCodePoint(0) === qi)
          return this.consumeCodePoint(), JB;
        break;
      case UB:
        if (this.peekCodePoint(0) === ht)
          return this.consumeCodePoint(), ZB;
        break;
      case OA:
        return dn;
    }
    return ur(A) ? (this.consumeWhiteSpace(), ah) : fA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Dr(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: q(A) };
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
    for (; Oe(e) && A.length < 6; )
      A.push(e), e = this.consumeCodePoint();
    let r = !1;
    for (; e === gr && A.length < 6; )
      A.push(e), e = this.consumeCodePoint(), r = !0;
    if (r) {
      const n = parseInt(q(...A.map((o) => o === gr ? ma : o)), 16), i = parseInt(q(...A.map((o) => o === gr ? ya : o)), 16);
      return { type: 30, start: n, end: i };
    }
    const s = parseInt(q(...A), 16);
    if (this.peekCodePoint(0) === mA && Oe(this.peekCodePoint(1))) {
      this.consumeCodePoint(), e = this.consumeCodePoint();
      const n = [];
      for (; Oe(e) && n.length < 6; )
        n.push(e), e = this.consumeCodePoint();
      const i = parseInt(q(...n), 16);
      return { type: 30, start: s, end: i };
    } else
      return { type: 30, start: s, end: s };
  }
  consumeIdentLikeToken() {
    const A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === hr ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === hr ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }
  consumeUrlToken() {
    const A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === OA)
      return { type: 22, value: "" };
    const e = this.peekCodePoint(0);
    if (e === Br || e === lr) {
      const r = this.consumeStringToken(this.consumeCodePoint());
      return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === OA || this.peekCodePoint(0) === gt) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), dr);
    }
    for (; ; ) {
      const r = this.consumeCodePoint();
      if (r === OA || r === gt)
        return { type: 22, value: q(...A) };
      if (ur(r))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === OA || this.peekCodePoint(0) === gt ? (this.consumeCodePoint(), { type: 22, value: q(...A) }) : (this.consumeBadUrlRemnants(), dr);
      if (r === lr || r === Br || r === hr || PB(r))
        return this.consumeBadUrlRemnants(), dr;
      if (r === yt)
        if (se(r, this.peekCodePoint(0)))
          A.push(this.consumeEscapedCodePoint());
        else
          return this.consumeBadUrlRemnants(), dr;
      else
        A.push(r);
    }
  }
  consumeWhiteSpace() {
    for (; ur(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }
  consumeBadUrlRemnants() {
    for (; ; ) {
      const A = this.consumeCodePoint();
      if (A === gt || A === OA)
        return;
      se(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }
  consumeStringSlice(A) {
    let r = "";
    for (; A > 0; ) {
      const s = Math.min(5e4, A);
      r += q(...this._value.splice(0, s)), A -= s;
    }
    return this._value.shift(), r;
  }
  consumeStringToken(A) {
    let e = "", r = 0;
    do {
      const s = this._value[r];
      if (s === OA || s === void 0 || s === A)
        return e += this.consumeStringSlice(r), { type: 0, value: e };
      if (s === vr)
        return this._value.splice(0, r), eh;
      if (s === yt) {
        const n = this._value[r + 1];
        n !== OA && n !== void 0 && (n === vr ? (e += this.consumeStringSlice(r), r = -1, this._value.shift()) : se(s, n) && (e += this.consumeStringSlice(r), e += q(this.consumeEscapedCodePoint()), r = -1));
      }
      r++;
    } while (!0);
  }
  consumeNumber() {
    const A = [];
    let e = At, r = this.peekCodePoint(0);
    for ((r === Ue || r === mA) && A.push(this.consumeCodePoint()); fA(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    r = this.peekCodePoint(0);
    let s = this.peekCodePoint(1);
    if (r === Mt && fA(s))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = Yi; fA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    r = this.peekCodePoint(0), s = this.peekCodePoint(1);
    const n = this.peekCodePoint(2);
    if ((r === xa || r === Ea) && ((s === Ue || s === mA) && fA(n) || fA(s)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = Yi; fA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [$B(A), e];
  }
  consumeNumericToken() {
    const [A, e] = this.consumeNumber(), r = this.peekCodePoint(0), s = this.peekCodePoint(1), n = this.peekCodePoint(2);
    if (fr(r, s, n)) {
      const i = this.consumeName();
      return { type: 15, number: A, flags: e, unit: i };
    }
    return r === lB ? (this.consumeCodePoint(), { type: 16, number: A, flags: e }) : { type: 17, number: A, flags: e };
  }
  consumeEscapedCodePoint() {
    const A = this.consumeCodePoint();
    if (Oe(A)) {
      let e = q(A);
      for (; Oe(this.peekCodePoint(0)) && e.length < 6; )
        e += q(this.consumeCodePoint());
      ur(this.peekCodePoint(0)) && this.consumeCodePoint();
      const r = parseInt(e, 16);
      return r === 0 || RB(r) || r > 1114111 ? ji : r;
    }
    return A === OA ? ji : A;
  }
  consumeName() {
    let A = "";
    for (; ; ) {
      const e = this.consumeCodePoint();
      if (Ao(e))
        A += q(e);
      else if (se(e, this.peekCodePoint(0)))
        A += q(this.consumeEscapedCodePoint());
      else
        return this.reconsumeCodePoint(e), A;
    }
  }
}
class Ye {
  constructor(A) {
    this._tokens = A;
  }
  static create(A) {
    const e = new Ia();
    return e.write(A), new Ye(e.read());
  }
  static parseValue(A) {
    return Ye.create(A).parseComponentValue();
  }
  static parseValues(A) {
    return Ye.create(A).parseComponentValues();
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
      if (r.type === 32 || lh(r, A))
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
    return typeof A > "u" ? dn : A;
  }
  reconsumeToken(A) {
    this._tokens.unshift(A);
  }
}
const GA = (t) => t.type === 15, AA = (t) => t.type === 17, H = (t) => t.type === 20, ch = (t) => t.type === 0, _t = (t, A) => H(t) && t.value === A, Zr = (t) => t.type !== 31, hA = (t) => t.type !== 31 && t.type !== 4, RA = (t) => {
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
}, lh = (t, A) => A === 11 && t.type === 12 || A === 28 && t.type === 29 ? !0 : A === 2 && t.type === 3, J = (t, A, e) => Math.min(Math.max(t, A), e), EA = (t, A) => [
  t[0] * A[0] + t[1] * A[1] + t[2] * A[2],
  t[3] * A[0] + t[4] * A[1] + t[5] * A[2],
  t[6] * A[0] + t[7] * A[1] + t[8] * A[2]
], he = (t) => EA([
  3.2409699419045226,
  -1.537383177570094,
  -0.4986107602930034,
  -0.9692436362808796,
  1.8759675015077202,
  0.04155505740717559,
  0.05563007969699366,
  -0.20397695888897652,
  1.0569715142428786
], t), pn = (t) => EA([
  0.41239079926595934,
  0.357584339383878,
  0.1804807884018343,
  0.21263900587151027,
  0.715168678767756,
  0.07219231536073371,
  0.01933081871559182,
  0.11919477979462598,
  0.9505321522496607
], t), Te = (t) => t.map((A) => {
  const e = A < 0 ? -1 : 1, r = Math.abs(A);
  return r > 31308e-7 ? e * (1.055 * r ** (1 / 2.4) - 0.055) : 12.92 * A;
}), wn = (t) => t.map((A) => {
  const e = A < 0 ? -1 : 1, r = Math.abs(A);
  return r <= 0.04045 ? A / 12.92 : e * ((r + 0.055) / 1.055) ** 2.4;
}), Bh = (t) => {
  const [A, e, r] = Te(he([t[0], t[1], t[2]]));
  return [A, e, r, t[3]];
}, hh = (t) => {
  const [A, e, r] = he([t[0], t[1], t[2]]);
  return [
    J(Math.round(A * 255), 0, 255),
    J(Math.round(e * 255), 0, 255),
    J(Math.round(r * 255), 0, 255),
    t[3]
  ];
}, Be = (t) => t.type === 17 || t.type === 15, _ = (t) => t.type === 16 || Be(t), gh = (t) => t.type === 18 && t.name === "calc", uh = (t, A = 0) => {
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
        flags: At
      };
  } catch {
    return null;
  }
  return null;
}, Ha = (t) => t.length > 1 ? [t[0], t[1]] : [t[0]], tA = {
  type: 17,
  number: 0,
  flags: At
}, me = {
  type: 16,
  number: 50,
  flags: At
}, PA = {
  type: 16,
  number: 100,
  flags: At
}, Ft = (t, A, e) => {
  const [r, s] = t;
  return [I(r, A), I(typeof s < "u" ? s : r, e)];
}, I = (t, A) => {
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
}, Ta = "deg", Sa = "grad", La = "rad", va = "turn", et = {
  name: "angle",
  parse: (t, A) => {
    if (A.type === 15)
      switch (A.unit) {
        case Ta:
          return Math.PI * A.number / 180;
        case Sa:
          return Math.PI / 200 * A.number;
        case La:
          return A.number;
        case va:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Da = (t) => t.type === 15 && (t.unit === Ta || t.unit === Sa || t.unit === La || t.unit === va), Ka = (t) => {
  switch (t.filter(H).map((e) => e.value).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [tA, tA];
    case "to top":
    case "bottom":
      return HA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [tA, PA];
    case "to right":
    case "left":
      return HA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [PA, PA];
    case "to bottom":
    case "top":
      return HA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [PA, tA];
    case "to left":
    case "right":
      return HA(270);
  }
  return 0;
}, HA = (t) => Math.PI * t / 180, ae = (t) => (255 & t) === 0, $ = (t) => {
  const A = 255 & t, e = 255 & t >> 8, r = 255 & t >> 16, s = 255 & t >> 24;
  return A < 255 ? `rgba(${s},${r},${e},${A / 255})` : `rgb(${s},${r},${e})`;
}, kA = (t, A, e, r) => (t << 24 | A << 16 | e << 8 | Math.round(r * 255) << 0) >>> 0, ne = (t, A) => {
  if (t.type === 17)
    return t.number;
  if (t.type === 16) {
    const e = A === 3 ? 1 : 255;
    return A === 3 ? t.number / 100 * e : Math.round(t.number / 100 * e);
  }
  return 0;
}, Se = (t) => (t[0].type === 20 ? t[0].value : "unknown") === "from", fh = (t) => kA(J(Math.round(t[0] * 255), 0, 255), J(Math.round(t[1] * 255), 0, 255), J(Math.round(t[2] * 255), 0, 255), J(t[3], 0, 1)), kn = ([t, A, e, r]) => {
  const s = Te([t, A, e]);
  return kA(J(Math.round(s[0] * 255), 0, 255), J(Math.round(s[1] * 255), 0, 255), J(Math.round(s[2] * 255), 0, 255), r);
}, Xt = (t) => {
  const A = he([t[0], t[1], t[2]]);
  return kn([A[0], A[1], A[2], t[3]]);
}, dh = (t, A) => {
  if (Se(A.filter(hA)))
    throw new Error("Relative color not supported for lab()");
  const [e, r, s, n] = qr(A), i = Te(he(es([e, r, s])));
  return kA(J(Math.round(i[0] * 255), 0, 255), J(Math.round(i[1] * 255), 0, 255), J(Math.round(i[2] * 255), 0, 255), n);
}, ph = (t, A) => {
  if (Se(A.filter(hA)))
    throw new Error("Relative color not supported for oklab()");
  const [e, r, s, n] = qr(A), i = Te(he(As([e, r, s])));
  return kA(J(Math.round(i[0] * 255), 0, 255), J(Math.round(i[1] * 255), 0, 255), J(Math.round(i[2] * 255), 0, 255), n);
}, wh = (t, A) => {
  if (Se(A.filter(hA)))
    throw new Error("Relative color not supported for oklch()");
  const [e, r, s, n] = Ma(A), i = Te(he(As(jr([e, r, s]))));
  return kA(J(Math.round(i[0] * 255), 0, 255), J(Math.round(i[1] * 255), 0, 255), J(Math.round(i[2] * 255), 0, 255), n);
}, Qh = (t, A) => {
  if (Se(A.filter(hA)))
    throw new Error("Relative color not supported for lch()");
  const [e, r, s, n] = Ra(A), i = Te(he(es(jr([e, r, s]))));
  return kA(J(Math.round(i[0] * 255), 0, 255), J(Math.round(i[1] * 255), 0, 255), J(Math.round(i[2] * 255), 0, 255), n);
}, ka = (t, A) => {
  const e = A.filter(hA), [r, s, n, i] = e, o = (r.type === 17 ? HA(r.number) : et.parse(t, r)) / (Math.PI * 2), a = _(s) ? s.number / 100 : 0, c = _(n) ? n.number / 100 : 0, l = typeof i < "u" && _(i) ? I(i, 1) : 1;
  return [o, a, c, l];
}, eo = (t, A) => {
  if (Se(A))
    throw new Error("Relative color not supported for hsl()");
  const [e, r, s, n] = ka(t, A), i = Oa([e, r, s]);
  return kA(i[0] * 255, i[1] * 255, i[2] * 255, r === 0 ? 1 : n);
}, Ra = (t) => {
  const A = t.filter(hA), e = _(A[0]) ? A[0].number : 0, r = _(A[1]) ? A[1].number : 0, s = AA(A[2]) || GA(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && _(A[4]) ? I(A[4], 1) : 1;
  return [e, r, s, n];
}, qr = (t) => {
  const A = t.filter(hA), e = A[0].type === 16 ? A[0].number / 100 : AA(A[0]) ? A[0].number : 0, r = A[1].type === 16 ? A[1].number / 100 : AA(A[1]) ? A[1].number : 0, s = AA(A[2]) || GA(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && _(A[4]) ? I(A[4], 1) : 1;
  return [e, r, s, n];
}, Ma = (t) => {
  const A = t.filter(hA), e = A[0].type === 16 ? A[0].number / 100 : AA(A[0]) ? A[0].number : 0, r = A[1].type === 16 ? A[1].number / 100 : AA(A[1]) ? A[1].number : 0, s = AA(A[2]) || GA(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && _(A[4]) ? I(A[4], 1) : 1;
  return [e, r, s, n];
}, _a = (t) => EA([
  1.0479297925449969,
  0.022946870601609652,
  -0.05019226628920524,
  0.02962780877005599,
  0.9904344267538799,
  -0.017073799063418826,
  -0.009243040646204504,
  0.015055191490298152,
  0.7518742814281371
], t), Rn = (t) => EA([
  0.955473421488075,
  -0.02309845494876471,
  0.06325924320057072,
  -0.0283697093338637,
  1.0099953980813041,
  0.021041441191917323,
  0.012314014864481998,
  -0.020507649298898964,
  1.330365926242124
], t), _s = (t, A, e) => (e < 0 && (e += 1), e >= 1 && (e -= 1), e < 1 / 6 ? (A - t) * e * 6 + t : e < 1 / 2 ? A : e < 2 / 3 ? (A - t) * 6 * (2 / 3 - e) + t : t), Oa = ([t, A, e]) => {
  if (A === 0)
    return [e * 255, e * 255, e * 255];
  const r = e <= 0.5 ? e * (A + 1) : e + A - e * A, s = e * 2 - r, n = _s(s, r, t + 1 / 3), i = _s(s, r, t), o = _s(s, r, t - 1 / 3);
  return [n, i, o];
}, jr = ([t, A, e]) => (A < 0 && (A = 0), isNaN(e) && (e = 0), [t, A * Math.cos(e * Math.PI / 180), A * Math.sin(e * Math.PI / 180)]), As = (t) => {
  const A = EA([
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
  return EA([
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
}, es = (t) => {
  const A = (t[0] + 16) / 116, e = t[1] / 500 + A, r = A - t[2] / 200, s = 24389 / 27, n = 24 / 116, i = [
    (e > n ? e ** 3 : (116 * e - 16) / s) * 0.3457 / 0.3585,
    t[0] > 8 ? A ** 3 : t[0] / s,
    (r > n ? r ** 3 : (116 * r - 16) / s) * (1 - 0.3457 - 0.3585) / 0.3585
  ];
  return Rn([i[0], i[1], i[2]]);
}, Ch = (t, A) => {
  const e = A.filter(hA);
  if (e.length === 3) {
    const [r, s, n] = e.map(ne), i = wn([r / 255, s / 255, n / 255]), [o, a, c] = pn([i[0], i[1], i[2]]);
    return [o, a, c, 1];
  }
  if (e.length === 4) {
    const [r, s, n, i] = e.map(ne), o = wn([r / 255, s / 255, n / 255]), [a, c, l] = pn([o[0], o[1], o[2]]);
    return [a, c, l, i];
  }
  return [0, 0, 0, 1];
}, Uh = (t, A) => {
  const [e, r, s, n] = ka(t, A), i = wn(Oa([e, r, s])), [o, a, c] = pn([i[0], i[1], i[2]]);
  return [o, a, c, n];
}, mh = (t, A) => {
  const [e, r, s, n] = qr(A), [i, o, a] = es([e, r, s]);
  return [i, o, a, n];
}, Fh = (t, A) => {
  const [e, r, s, n] = Ra(A), [i, o, a] = es(jr([e, r, s]));
  return [i, o, a, n];
}, Eh = (t, A) => {
  const [e, r, s, n] = Ma(A), [i, o, a] = As(jr([e, r, s]));
  return [i, o, a, n];
}, bh = (t, A) => {
  const [e, r, s, n] = qr(A), [i, o, a] = As([e, r, s]);
  return [i, o, a, n];
}, xh = (t) => Rn([t[0], t[1], t[2]]), to = (t) => t, yh = (t) => {
  const [A, e, r] = _a([t[0], t[2], t[3]]);
  return [A, e, r, t[3]];
}, ro = (t) => Xt([t[0], t[1], t[2], t[3]]), Ih = (t) => {
  const A = xh([t[0], t[1], t[2]]);
  return Xt([A[0], A[1], A[2], t[3]]);
}, Hh = (t) => EA([
  0.4865709486482162,
  0.26566769316909306,
  0.1982172852343625,
  0.2289745640697488,
  0.6917385218365064,
  0.079286914093745,
  0,
  0.04511338185890264,
  1.043944368900976
], t), Th = (t) => EA([
  2.493496911941425,
  -0.9313836179191239,
  -0.40271078445071684,
  -0.8294889695615747,
  1.7626640603183463,
  0.023624685841943577,
  0.03584583024378447,
  -0.07617238926804182,
  0.9568845240076872
], t), Sh = (t) => t.map((A) => {
  const e = A < 0 ? -1 : 1;
  return A * e <= 0.04045 ? A / 12.92 : e * ((A + 0.055) / 1.055) ** 2.4 || 0;
}), Lh = (t) => Te(t), vh = (t) => {
  const A = Sh([t[0], t[1], t[2]]);
  return Hh([A[0], A[1], A[2]]);
}, Dh = (t) => {
  const [A, e, r] = Lh(Th([t[0], t[1], t[2]]));
  return [A, e, r, t[3]];
}, Kh = (t) => {
  const A = vh([t[0], t[1], t[2]]);
  return Xt([A[0], A[1], A[2], t[3]]);
}, kh = (t) => EA([
  2.0415879038107465,
  -0.5650069742788596,
  -0.34473135077832956,
  -0.9692436362808795,
  1.8759675015077202,
  0.04155505740717557,
  0.013444280632031142,
  -0.11836239223101838,
  1.0151749943912054
], t), Rh = (t) => EA([
  0.5766690429101305,
  0.1855582379065463,
  0.1882286462349947,
  0.29734497525053605,
  0.6273635662554661,
  0.0752914584939978,
  0.02703136138641234,
  0.07068885253582723,
  0.9913375368376388
], t), Mh = (t) => {
  const A = t.map((e) => {
    const r = e < 0 ? -1 : 1, s = Math.abs(e);
    return r * s ** 2.19921875;
  });
  return [A[0], A[1], A[2]];
}, _h = (t) => {
  const A = t.map((e) => {
    const r = e < 0 ? -1 : 1, s = Math.abs(e);
    return r * s ** 0.4547069271758437;
  });
  return [A[0], A[1], A[2]];
}, Oh = (t) => {
  const [A, e, r] = _h(kh([t[0], t[1], t[2]]));
  return [A, e, r, t[3]];
}, Nh = (t) => {
  const A = he(Rh(Mh([t[0], t[1], t[2]])));
  return kn([A[0], A[1], A[2], t[3]]);
}, Ph = (t) => EA([
  0.7977666449006423,
  0.13518129740053308,
  0.0313477341283922,
  0.2880748288194013,
  0.711835234241873,
  8993693872564e-17,
  0,
  0,
  0.8251046025104602
], t), $h = (t) => EA([
  1.3457868816471583,
  -0.25557208737979464,
  -0.05110186497554526,
  -0.5446307051249019,
  1.5082477428451468,
  0.02052744743642139,
  0,
  0,
  1.2119675456389452
], t), Gh = (t) => t.map((A) => A < 16 / 512 ? A / 16 : A ** 1.8), Vh = (t) => t.map((A) => A > 1 / 512 ? A ** (1 / 1.8) : A * 16), Xh = (t) => {
  const A = Gh([t[0], t[1], t[2]]);
  return Rn(Ph([A[0], A[1], A[2]]));
}, Wh = (t) => {
  const [A, e, r] = Vh($h(_a([t[0], t[1], t[2]])));
  return [A, e, r, t[3]];
}, zh = (t) => {
  const A = Xh([t[0], t[1], t[2]]);
  return Xt([A[0], A[1], A[2], t[3]]);
}, Kr = 1.09929682680944, Na = 0.018053968510807, Jh = (t) => t.map(function(A) {
  return A < Na * 4.5 ? A / 4.5 : Math.pow((A + Kr - 1) / Kr, 1 / 0.45);
}), Yh = (t) => t.map(function(A) {
  return A >= Na ? Kr * Math.pow(A, 0.45) - (Kr - 1) : 4.5 * A;
}), Zh = (t) => EA([
  0.6369580483012914,
  0.14461690358620832,
  0.1688809751641721,
  0.2627002120112671,
  0.6779980715188708,
  0.05930171646986196,
  0,
  0.028072693049087428,
  1.060985057710791
], t), qh = (t) => EA([
  1.716651187971268,
  -0.355670783776392,
  -0.25336628137366,
  -0.666684351832489,
  1.616481236634939,
  0.0157685458139111,
  0.017639857445311,
  -0.042770613257809,
  0.942103121235474
], t), jh = (t) => {
  const A = Jh([t[0], t[1], t[2]]);
  return Zh([A[0], A[1], A[2]]);
}, Ag = (t) => {
  const [A, e, r] = Yh(qh([t[0], t[1], t[2]]));
  return [A, e, r, t[3]];
}, eg = (t) => {
  const A = jh([t[0], t[1], t[2]]);
  return Xt([A[0], A[1], A[2], t[3]]);
}, ce = {
  name: "color",
  parse: (t, A) => {
    if (A.type === 18) {
      const e = ng[A.name];
      if (typeof e > "u")
        throw new Error(`Attempting to parse an unsupported color function "${A.name}"`);
      return e(t, A.values);
    }
    if (A.type === 5) {
      const [e, r, s, n] = Pa(A);
      return kA(e, r, s, n);
    }
    if (A.type === 20) {
      const e = $A[A.value.toUpperCase()];
      if (typeof e < "u")
        return e;
    }
    return $A.TRANSPARENT;
  }
}, Pa = (t) => {
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
}, so = (t, A) => {
  const e = A.filter(hA);
  if (Se(e))
    throw new Error("Relative color not supported for rgb()");
  if (e.length === 3) {
    const [r, s, n] = e.map(ne);
    return kA(r, s, n, 1);
  }
  if (e.length === 4) {
    const [r, s, n, i] = e.map(ne);
    return kA(r, s, n, i);
  }
  if (e.length === 5 && e[3].type === 6 && e[3].value === "/") {
    const r = ne(e[0], 0), s = ne(e[1], 1), n = ne(e[2], 2), i = ne(e[4], 3);
    return kA(r, s, n, i);
  }
  return 0;
}, tg = (t, A) => {
  const e = A.filter(hA), r = e[0].type === 20 ? e[0].value : "unknown";
  if (!Se(e)) {
    const n = r, i = no[n];
    if (typeof i > "u")
      throw new Error(`Attempting to parse an unsupported color space "${n}" for color() function`);
    const o = AA(e[1]) ? e[1].number : 0, a = AA(e[2]) ? e[2].number : 0, c = AA(e[3]) ? e[3].number : 0, l = e.length > 4 && e[4].type === 6 && e[4].value === "/" && AA(e[5]) ? e[5].number : 1;
    return i([o, a, c, l]);
  } else {
    const n = (Q, F) => {
      if (AA(F))
        return F.number;
      const b = (K) => K === "r" || K === "x" ? 0 : K === "g" || K === "y" ? 1 : 2;
      if (H(F)) {
        const K = b(F.value);
        return Q[K];
      }
      const E = (K) => {
        const X = K.filter(hA);
        let aA = "(";
        for (const G of X)
          aA += G.type === 18 && G.name === "calc" ? E(G.values) : AA(G) ? G.number : G.type === 6 || H(G) ? G.value : "";
        return aA += ")", aA;
      };
      if (F.type === 18) {
        const K = F.values.filter(hA);
        if (F.name === "calc") {
          const X = E(K).replace(/r|x/, Q[0].toString()).replace(/g|y/, Q[1].toString()).replace(/b|z/, Q[2].toString());
          return new Function("return " + X)();
        }
      }
      return null;
    }, i = e[1].type === 18 ? e[1].name : H(e[1]) || e[1].type === 5 ? "rgb" : "unknown", o = H(e[2]) ? e[2].value : "unknown";
    let a = e[1].type === 18 ? e[1].values : H(e[1]) ? [e[1]] : [];
    if (H(e[1])) {
      if (typeof $A[e[1].value.toUpperCase()] > "u")
        throw new Error("Attempting to use unknown color in relative color 'from'");
      {
        const F = Ze(t, e[1].value), b = 255 & F, E = 255 & F >> 8, K = 255 & F >> 16;
        a = [
          { type: 17, number: 255 & F >> 24, flags: 1 },
          { type: 17, number: K, flags: 1 },
          { type: 17, number: E, flags: 1 },
          { type: 17, number: b > 1 ? b / 255 : b, flags: 1 }
        ];
      }
    } else if (e[1].type === 5) {
      const [Q, F, b, E] = Pa(e[1]);
      a = [
        { type: 17, number: Q, flags: 1 },
        { type: 17, number: F, flags: 1 },
        { type: 17, number: b, flags: 1 },
        { type: 17, number: E > 1 ? E / 255 : E, flags: 1 }
      ];
    }
    if (a.length === 0)
      throw new Error("Attempting to use unknown color in relative color 'from'");
    if (o === "unknown")
      throw new Error("Attempting to use unknown colorspace in relative color 'to'");
    const c = rg[i], l = sg[o], B = no[o];
    if (typeof c > "u")
      throw new Error(`Attempting to parse an unsupported color space "${i}" for color() function`);
    if (typeof l > "u")
      throw new Error(`Attempting to parse an unsupported color space "${o}" for color() function`);
    const g = c(t, a), u = l(g), f = n(u, e[3]), d = n(u, e[4]), U = n(u, e[5]), x = e.length > 6 && e[6].type === 6 && e[6].value === "/" && AA(e[7]) ? e[7].number : 1;
    if (f === null || d === null || U === null)
      throw new Error("Invalid relative color in color() function");
    return B([f, d, U, x]);
  }
}, no = {
  srgb: fh,
  "srgb-linear": kn,
  "display-p3": Kh,
  "a98-rgb": Nh,
  "prophoto-rgb": zh,
  xyz: ro,
  "xyz-d50": Ih,
  "xyz-d65": ro,
  rec2020: eg
}, rg = {
  rgb: Ch,
  hsl: Uh,
  lab: mh,
  lch: Fh,
  oklab: bh,
  oklch: Eh
}, sg = {
  srgb: Bh,
  "srgb-linear": hh,
  "display-p3": Dh,
  "a98-rgb": Oh,
  "prophoto-rgb": Wh,
  xyz: to,
  "xyz-d50": yh,
  "xyz-d65": to,
  rec2020: Ag
}, ng = {
  hsl: eo,
  hsla: eo,
  rgb: so,
  rgba: so,
  lch: Qh,
  oklch: wh,
  oklab: ph,
  lab: dh,
  color: tg
}, Ze = (t, A) => ce.parse(t, Ye.create(A).parseComponentValue()), $A = {
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
}, ig = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: (t, A) => A.map((e) => {
    if (H(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  })
}, og = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, ts = (t, A) => {
  const e = ce.parse(t, A[0]), r = A[1];
  return r && _(r) ? { color: e, stop: r } : { color: e, stop: null };
}, io = (t, A) => {
  const e = t[0], r = t[t.length - 1];
  e.stop === null && (e.stop = tA), r.stop === null && (r.stop = PA);
  const s = [];
  let n = 0;
  for (let o = 0; o < t.length; o++) {
    const a = t[o].stop;
    if (a !== null) {
      const c = I(a, A);
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
      const c = o - i, l = s[i - 1], B = (a - l) / (c + 1);
      for (let g = 1; g <= c; g++)
        s[i + g - 1] = B * g;
      i = null;
    }
  }
  return t.map(({ color: o }, a) => ({ color: o, stop: Math.max(Math.min(1, s[a] / A), 0) }));
}, ag = (t, A, e) => {
  const r = A / 2, s = e / 2, n = I(t[0], A) - r, i = s - I(t[1], e);
  return (Math.atan2(i, n) + Math.PI * 2) % (Math.PI * 2);
}, cg = (t, A, e) => {
  const r = typeof t == "number" ? t : ag(t, A, e), s = Math.abs(A * Math.sin(r)) + Math.abs(e * Math.cos(r)), n = A / 2, i = e / 2, o = s / 2, a = Math.sin(r - Math.PI / 2) * o, c = Math.cos(r - Math.PI / 2) * o;
  return [s, n - c, n + c, i - a, i + a];
}, KA = (t, A) => Math.sqrt(t * t + A * A), oo = (t, A, e, r, s) => [
  [0, 0],
  [0, A],
  [t, 0],
  [t, A]
].reduce((i, o) => {
  const [a, c] = o, l = KA(e - a, r - c);
  return (s ? l < i.optimumDistance : l > i.optimumDistance) ? {
    optimumCorner: o,
    optimumDistance: l
  } : i;
}, {
  optimumDistance: s ? 1 / 0 : -1 / 0,
  optimumCorner: null
}).optimumCorner, lg = (t, A, e, r, s) => {
  let n = 0, i = 0;
  switch (t.size) {
    case 0:
      t.shape === 0 ? n = i = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(e), Math.abs(e - s)) : t.shape === 1 && (n = Math.min(Math.abs(A), Math.abs(A - r)), i = Math.min(Math.abs(e), Math.abs(e - s)));
      break;
    case 2:
      if (t.shape === 0)
        n = i = Math.min(KA(A, e), KA(A, e - s), KA(A - r, e), KA(A - r, e - s));
      else if (t.shape === 1) {
        const o = Math.min(Math.abs(e), Math.abs(e - s)) / Math.min(Math.abs(A), Math.abs(A - r)), [a, c] = oo(r, s, A, e, !0);
        n = KA(a - A, (c - e) / o), i = o * n;
      }
      break;
    case 1:
      t.shape === 0 ? n = i = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(e), Math.abs(e - s)) : t.shape === 1 && (n = Math.max(Math.abs(A), Math.abs(A - r)), i = Math.max(Math.abs(e), Math.abs(e - s)));
      break;
    case 3:
      if (t.shape === 0)
        n = i = Math.max(KA(A, e), KA(A, e - s), KA(A - r, e), KA(A - r, e - s));
      else if (t.shape === 1) {
        const o = Math.max(Math.abs(e), Math.abs(e - s)) / Math.max(Math.abs(A), Math.abs(A - r)), [a, c] = oo(r, s, A, e, !1);
        n = KA(a - A, (c - e) / o), i = o * n;
      }
      break;
  }
  return Array.isArray(t.size) && (n = I(t.size[0], r), i = t.size.length === 2 ? I(t.size[1], s) : n), [n, i];
}, Bg = (t, A) => {
  let e = HA(180);
  const r = [];
  return RA(A).forEach((s, n) => {
    if (n === 0) {
      const o = s[0];
      if (o.type === 20 && o.value === "to") {
        e = Ka(s);
        return;
      } else if (Da(o)) {
        e = et.parse(t, o);
        return;
      }
    }
    const i = ts(t, s);
    r.push(i);
  }), {
    angle: e,
    stops: r,
    type: 1
    /* CSSImageType.LINEAR_GRADIENT */
  };
}, pr = (t, A) => {
  let e = HA(180);
  const r = [];
  return RA(A).forEach((s, n) => {
    if (n === 0) {
      const o = s[0];
      if (o.type === 20 && ["top", "left", "right", "bottom"].indexOf(o.value) !== -1) {
        e = Ka(s);
        return;
      } else if (Da(o)) {
        e = (et.parse(t, o) + HA(270)) % HA(360);
        return;
      }
    }
    const i = ts(t, s);
    r.push(i);
  }), {
    angle: e,
    stops: r,
    type: 1
    /* CSSImageType.LINEAR_GRADIENT */
  };
}, hg = (t, A) => {
  const e = HA(180), r = [];
  let s = 1;
  const n = 0, i = 3, o = [];
  return RA(A).forEach((a, c) => {
    const l = a[0];
    if (c === 0) {
      if (H(l) && l.value === "linear") {
        s = 1;
        return;
      } else if (H(l) && l.value === "radial") {
        s = 2;
        return;
      }
    }
    if (l.type === 18) {
      if (l.name === "from") {
        const B = ce.parse(t, l.values[0]);
        r.push({ stop: tA, color: B });
      } else if (l.name === "to") {
        const B = ce.parse(t, l.values[0]);
        r.push({ stop: PA, color: B });
      } else if (l.name === "color-stop") {
        const B = l.values.filter(hA);
        if (B.length === 2) {
          const g = ce.parse(t, B[1]), u = B[0];
          AA(u) && r.push({
            stop: { type: 16, number: u.number * 100, flags: u.flags },
            color: g
          });
        }
      }
    }
  }), s === 1 ? {
    angle: (e + HA(180)) % HA(360),
    stops: r,
    type: s
  } : { size: i, shape: n, stops: r, position: o, type: s };
}, $a = "closest-side", Ga = "farthest-side", Va = "closest-corner", Xa = "farthest-corner", Wa = "circle", za = "ellipse", Ja = "cover", Ya = "contain", gg = (t, A) => {
  let e = 0, r = 3;
  const s = [], n = [];
  return RA(A).forEach((i, o) => {
    let a = !0;
    if (o === 0) {
      let c = !1;
      a = i.reduce((l, B) => {
        if (c)
          if (H(B))
            switch (B.value) {
              case "center":
                return n.push(me), l;
              case "top":
              case "left":
                return n.push(tA), l;
              case "right":
              case "bottom":
                return n.push(PA), l;
            }
          else (_(B) || Be(B)) && n.push(B);
        else if (H(B))
          switch (B.value) {
            case Wa:
              return e = 0, !1;
            case za:
              return e = 1, !1;
            case "at":
              return c = !0, !1;
            case $a:
              return r = 0, !1;
            case Ja:
            case Ga:
              return r = 1, !1;
            case Ya:
            case Va:
              return r = 2, !1;
            case Xa:
              return r = 3, !1;
          }
        else if (Be(B) || _(B))
          return Array.isArray(r) || (r = []), r.push(B), !1;
        return l;
      }, a);
    }
    if (a) {
      const c = ts(t, i);
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
}, wr = (t, A) => {
  let e = 0, r = 3;
  const s = [], n = [];
  return RA(A).forEach((i, o) => {
    let a = !0;
    if (o === 0 ? a = i.reduce((c, l) => {
      if (H(l))
        switch (l.value) {
          case "center":
            return n.push(me), !1;
          case "top":
          case "left":
            return n.push(tA), !1;
          case "right":
          case "bottom":
            return n.push(PA), !1;
        }
      else if (_(l) || Be(l))
        return n.push(l), !1;
      return c;
    }, a) : o === 1 && (a = i.reduce((c, l) => {
      if (H(l))
        switch (l.value) {
          case Wa:
            return e = 0, !1;
          case za:
            return e = 1, !1;
          case Ya:
          case $a:
            return r = 0, !1;
          case Ga:
            return r = 1, !1;
          case Va:
            return r = 2, !1;
          case Ja:
          case Xa:
            return r = 3, !1;
        }
      else if (Be(l) || _(l))
        return Array.isArray(r) || (r = []), r.push(l), !1;
      return c;
    }, a)), a) {
      const c = ts(t, i);
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
}, ug = (t) => t.type === 1, fg = (t) => t.type === 2, Mn = {
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
      const e = Za[A.name];
      if (typeof e > "u")
        throw new Error(`Attempting to parse an unsupported image function "${A.name}"`);
      return e(t, A.values);
    }
    throw new Error(`Unsupported image type ${A.type}`);
  }
};
function dg(t) {
  return !(t.type === 20 && t.value === "none") && (t.type !== 18 || !!Za[t.name]);
}
const Za = {
  "linear-gradient": Bg,
  "-moz-linear-gradient": pr,
  "-ms-linear-gradient": pr,
  "-o-linear-gradient": pr,
  "-webkit-linear-gradient": pr,
  "radial-gradient": gg,
  "-moz-radial-gradient": wr,
  "-ms-radial-gradient": wr,
  "-o-radial-gradient": wr,
  "-webkit-radial-gradient": wr,
  "-webkit-gradient": hg
}, pg = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (t, A) => {
    if (A.length === 0)
      return [];
    const e = A[0];
    return e.type === 20 && e.value === "none" ? [] : A.filter((r) => hA(r) && dg(r)).map((r) => Mn.parse(t, r));
  }
}, wg = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: (t, A) => A.map((e) => {
    if (H(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  })
}, Qg = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: (t, A) => RA(A).map((e) => e.map((r) => gh(r) ? uh(r, 0) : _(r) ? r : null).filter((r) => r !== null)).map(Ha)
}, Cg = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: (t, A) => RA(A).map((e) => e.filter(H).map((r) => r.value).join(" ")).map(Ug)
}, Ug = (t) => {
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
var qe;
(function(t) {
  t.AUTO = "auto", t.CONTAIN = "contain", t.COVER = "cover";
})(qe || (qe = {}));
const mg = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: (t, A) => RA(A).map((e) => e.filter(Fg))
}, Fg = (t) => H(t) || _(t), rs = (t) => ({
  name: `border-${t}-color`,
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}), Eg = rs("top"), bg = rs("right"), xg = rs("bottom"), yg = rs("left"), ss = (t) => ({
  name: `border-radius-${t}`,
  initialValue: "0 0",
  prefix: !1,
  type: 1,
  parse: (A, e) => Ha(e.filter(_))
}), Ig = ss("top-left"), Hg = ss("top-right"), Tg = ss("bottom-right"), Sg = ss("bottom-left"), ns = (t) => ({
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
}), Lg = ns("top"), vg = ns("right"), Dg = ns("bottom"), Kg = ns("left"), is = (t) => ({
  name: `border-${t}-width`,
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: (A, e) => GA(e) ? e.number : 0
}), kg = is("top"), Rg = is("right"), Mg = is("bottom"), _g = is("left"), Qn = {
  type: 0
  /* CLIP_PATH_TYPE.NONE */
}, Cn = (t) => {
  const [A] = t;
  return A ? H(A) ? A.value === "farthest-side" ? "farthest-side" : "closest-side" : _(A) ? A : "closest-side" : "closest-side";
}, qa = (t) => {
  let A = null, e = null;
  for (const r of t)
    if (H(r))
      switch (r.value) {
        case "left":
          A = tA;
          break;
        case "right":
          A = PA;
          break;
        case "top":
          e = tA;
          break;
        case "bottom":
          e = PA;
          break;
        case "center":
          A === null ? A = me : e === null && (e = me);
          break;
      }
    else _(r) && (A === null ? A = r : e === null && (e = r));
  return { cx: A ?? me, cy: e ?? me };
}, Og = (t) => {
  const A = [];
  for (const i of t)
    if (i.type !== 31) {
      if (H(i) && i.value === "round")
        break;
      _(i) && A.push(i);
    }
  const e = A[0] ?? tA, r = A[1] ?? e, s = A[2] ?? e, n = A[3] ?? r;
  return { type: 1, top: e, right: r, bottom: s, left: n };
}, Ng = (t) => {
  const A = t.filter(Zr), e = A.findIndex((n) => _t(n, "at")), r = e === -1 ? A : A.slice(0, e), s = e === -1 ? [] : A.slice(e + 1);
  return {
    type: 2,
    radius: Cn(r),
    ...qa(s)
  };
}, Pg = (t) => {
  const A = t.filter(Zr), e = A.findIndex((n) => _t(n, "at")), r = e === -1 ? A : A.slice(0, e), s = e === -1 ? [] : A.slice(e + 1);
  return {
    type: 3,
    rx: Cn(r.slice(0, 1)),
    ry: Cn(r.slice(1, 2)),
    ...qa(s)
  };
}, $g = (t) => {
  const A = RA(t), e = [];
  for (const r of A) {
    if (r.length === 1 && H(r[0]))
      continue;
    const s = r.filter(_);
    s.length >= 2 && e.push([s[0], s[1]]);
  }
  return { type: 4, points: e };
}, Gg = (t) => {
  const A = t.find(
    (e) => e.type === 0
    /* TokenType.STRING_TOKEN */
  );
  return A ? { type: 5, d: A.value } : Qn;
}, Vg = {
  name: "clip-path",
  initialValue: "none",
  prefix: !1,
  type: 0,
  parse: (t, A) => {
    if (H(A) && A.value === "none")
      return Qn;
    if (A.type === 18)
      switch (A.name) {
        case "inset":
          return Og(A.values);
        case "circle":
          return Ng(A.values);
        case "ellipse":
          return Pg(A.values);
        case "polygon":
          return $g(A.values);
        case "path":
          return Gg(A.values);
      }
    return Qn;
  }
}, Xg = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Wg = {
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
}, zg = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: (t, A) => A.filter(H).reduce(
    (e, r) => e | Jg(r.value),
    0
    /* DISPLAY.NONE */
  )
}, Jg = (t) => {
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
}, Yg = {
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
}, Zg = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: (t, A) => A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0
};
var kr;
(function(t) {
  t.NORMAL = "normal", t.STRICT = "strict";
})(kr || (kr = {}));
const qg = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "strict":
        return kr.STRICT;
      case "normal":
      default:
        return kr.NORMAL;
    }
  }
}, jg = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* PropertyDescriptorParsingType.TOKEN_VALUE */
}, ao = (t, A) => H(t) && t.value === "normal" ? 1.2 * A : t.type === 17 ? A * t.number : _(t) ? I(t, A) : A, Au = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: (t, A) => A.type === 20 && A.value === "none" ? null : Mn.parse(t, A)
}, eu = {
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
}, Un = {
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
}, os = (t) => ({
  name: `margin-${t}`,
  initialValue: "0",
  prefix: !1,
  type: 4
  /* PropertyDescriptorParsingType.TOKEN_VALUE */
}), tu = os("top"), ru = os("right"), su = os("bottom"), nu = os("left"), iu = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: (t, A) => A.filter(H).map((e) => {
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
}, ou = {
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
}, as = (t) => ({
  name: `padding-${t}`,
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length-percentage"
}), au = as("top"), cu = as("right"), lu = as("bottom"), Bu = as("left"), hu = {
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
}, gu = {
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
}, uu = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (t, A) => A.length === 1 && _t(A[0], "none") ? [] : RA(A).map((e) => {
    const r = {
      color: $A.TRANSPARENT,
      offsetX: tA,
      offsetY: tA,
      blur: tA
    };
    let s = 0;
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      Be(i) ? (s === 0 ? r.offsetX = i : s === 1 ? r.offsetY = i : r.blur = i, s++) : r.color = ce.parse(t, i);
    }
    return r;
  })
}, fu = {
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
}, du = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: (t, A) => {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      const e = Cu[A.name];
      if (typeof e > "u")
        throw new Error(`Attempting to parse an unsupported transform function "${A.name}"`);
      return e(t, A.values);
    }
    return null;
  }
}, pu = (t, A) => {
  const e = A.filter(
    (r) => r.type === 17
    /* TokenType.NUMBER_TOKEN */
  ).map((r) => r.number);
  return e.length === 6 ? e : null;
}, wu = (t, A) => {
  const e = A.filter(
    (c) => c.type === 17
    /* TokenType.NUMBER_TOKEN */
  ).map((c) => c.number), [r, s, {}, {}, n, i, {}, {}, {}, {}, {}, {}, o, a] = e;
  return e.length === 16 ? [r, s, n, i, o, a] : null;
}, Qu = (t, A) => {
  if (A.length !== 1)
    return null;
  const e = A[0];
  let r = 0;
  if (e.type === 17 && e.number === 0)
    r = 0;
  else if (e.type === 15)
    r = et.parse(t, e);
  else
    return null;
  const s = Math.cos(r), n = Math.sin(r);
  return [s, n, -n, s, 0, 0];
}, Cu = {
  matrix: pu,
  matrix3d: wu,
  rotate: Qu
}, co = {
  type: 16,
  number: 50,
  flags: At
}, Uu = [co, co], mu = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: (t, A) => {
    const e = A.filter(_);
    return e.length !== 2 ? Uu : [e[0], e[1]];
  }
}, Fu = {
  name: "rotate",
  initialValue: "none",
  prefix: !1,
  type: 0,
  parse: (t, A) => A.type === 20 && A.value === "none" ? null : A.type === 17 && A.number === 0 ? 0 : A.type === 15 ? et.parse(t, A) * 180 / Math.PI : null
}, Eu = {
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
var It;
(function(t) {
  t.NORMAL = "normal", t.BREAK_ALL = "break-all", t.KEEP_ALL = "keep-all";
})(It || (It = {}));
const bu = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A) {
      case "break-all":
        return It.BREAK_ALL;
      case "keep-all":
        return It.KEEP_ALL;
      case "normal":
      default:
        return It.NORMAL;
    }
  }
}, xu = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (t, A) => {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (AA(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, ja = {
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
}, yu = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: (t, A) => AA(A) ? A.number : 1
}, Iu = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Hu = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: (t, A) => A.filter(H).map((e) => {
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
}, Tu = {
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
}, Su = {
  name: "text-decoration-thickness",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (t, A) => {
    if (H(A))
      switch (A.value) {
        case "auto":
          return "auto";
        case "from-font":
          return "from-font";
      }
    return GA(A) ? A.number : "auto";
  }
}, Lu = {
  name: "text-underline-offset",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (t, A) => H(A) && A.value === "auto" ? "auto" : GA(A) ? A.number : "auto"
}, vu = {
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
}, Du = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, Ku = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: (t, A) => {
    if (AA(A))
      return A.number;
    if (H(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, ku = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (t, A) => A.filter(H).map((e) => e.value)
}, Ru = {
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
}, W = (t, A) => (t & A) !== 0, Mu = {
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
}, _u = {
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
    const r = [], s = A.filter(Zr);
    for (let n = 0; n < s.length; n++) {
      const i = s[n], o = s[n + 1];
      if (i.type === 20) {
        const a = o && AA(o) ? o.number : 1;
        r.push({ counter: i.value, increment: a });
      }
    }
    return r;
  }
}, Ou = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: (t, A) => {
    if (A.length === 0)
      return [];
    const e = [], r = A.filter(Zr);
    for (let s = 0; s < r.length; s++) {
      const n = r[s], i = r[s + 1];
      if (H(n) && n.value !== "none") {
        const o = i && AA(i) ? i.number : 0;
        e.push({ counter: n.value, reset: o });
      }
    }
    return e;
  }
}, Nu = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: (t, A) => A.filter(GA).map((e) => ja.parse(t, e))
}, Pu = {
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
    const r = [], s = A.filter(ch);
    if (s.length % 2 !== 0)
      return null;
    for (let n = 0; n < s.length; n += 2) {
      const i = s[n].value, o = s[n + 1].value;
      r.push({ open: i, close: o });
    }
    return r;
  }
}, lo = (t, A, e) => {
  if (!t)
    return "";
  const r = t[Math.min(A, t.length - 1)];
  return r ? e ? r.open : r.close : "";
}, $u = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (t, A) => A.length === 1 && _t(A[0], "none") ? [] : RA(A).map((e) => {
    const r = {
      color: 255,
      offsetX: tA,
      offsetY: tA,
      blur: tA,
      spread: tA,
      inset: !1
    };
    let s = 0;
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      _t(i, "inset") ? r.inset = !0 : Be(i) ? (s === 0 ? r.offsetX = i : s === 1 ? r.offsetY = i : s === 2 ? r.blur = i : r.spread = i, s++) : r.color = ce.parse(t, i);
    }
    return r;
  })
}, Gu = {
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
    return A.filter(H).forEach((s) => {
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
}, Vu = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Xu = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: (t, A) => GA(A) ? A.number : 0
}, Wu = {
  name: "-webkit-line-clamp",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: (t, A) => A.type === 20 && A.value === "none" ? 0 : A.type === 17 ? Math.max(0, Math.floor(A.number)) : 0
}, zu = {
  name: "objectFit",
  initialValue: "fill",
  prefix: !1,
  type: 1,
  parse: (t, A) => A.filter(H).reduce(
    (e, r) => e | Ju(r.value),
    0
    /* OBJECT_FIT.FILL */
  )
}, Ju = (t) => {
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
}, Yu = {
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
var xA;
(function(t) {
  t[t.AUTO = 0] = "AUTO", t[t.CRISP_EDGES = 1] = "CRISP_EDGES", t[t.PIXELATED = 2] = "PIXELATED", t[t.SMOOTH = 3] = "SMOOTH";
})(xA || (xA = {}));
const Zu = {
  name: "image-rendering",
  initialValue: "auto",
  prefix: !1,
  type: 2,
  parse: (t, A) => {
    switch (A.toLowerCase()) {
      case "crisp-edges":
      case "-webkit-crisp-edges":
      case "-moz-crisp-edges":
        return xA.CRISP_EDGES;
      case "pixelated":
      case "-webkit-optimize-contrast":
        return xA.PIXELATED;
      case "smooth":
      case "high-quality":
        return xA.SMOOTH;
      case "auto":
      default:
        return xA.AUTO;
    }
  }
};
class qu {
  constructor(A, e) {
    this.animationDuration = w(A, Nu, e.animationDuration), this.backgroundClip = w(A, ig, e.backgroundClip), this.backgroundColor = w(A, og, e.backgroundColor), this.backgroundImage = w(A, pg, e.backgroundImage), this.backgroundOrigin = w(A, wg, e.backgroundOrigin), this.backgroundPosition = w(A, Qg, e.backgroundPosition), this.backgroundRepeat = w(A, Cg, e.backgroundRepeat), this.backgroundSize = w(A, mg, e.backgroundSize), this.borderTopColor = w(A, Eg, e.borderTopColor), this.borderRightColor = w(A, bg, e.borderRightColor), this.borderBottomColor = w(A, xg, e.borderBottomColor), this.borderLeftColor = w(A, yg, e.borderLeftColor), this.borderTopLeftRadius = w(A, Ig, e.borderTopLeftRadius), this.borderTopRightRadius = w(A, Hg, e.borderTopRightRadius), this.borderBottomRightRadius = w(A, Tg, e.borderBottomRightRadius), this.borderBottomLeftRadius = w(A, Sg, e.borderBottomLeftRadius), this.borderTopStyle = w(A, Lg, e.borderTopStyle), this.borderRightStyle = w(A, vg, e.borderRightStyle), this.borderBottomStyle = w(A, Dg, e.borderBottomStyle), this.borderLeftStyle = w(A, Kg, e.borderLeftStyle), this.borderTopWidth = w(A, kg, e.borderTopWidth), this.borderRightWidth = w(A, Rg, e.borderRightWidth), this.borderBottomWidth = w(A, Mg, e.borderBottomWidth), this.borderLeftWidth = w(A, _g, e.borderLeftWidth), this.boxShadow = w(A, $u, e.boxShadow), this.clipPath = w(A, Vg, e.clipPath), this.color = w(A, Xg, e.color), this.direction = w(A, Wg, e.direction), this.display = w(A, zg, e.display), this.float = w(A, Yg, e.cssFloat), this.fontFamily = w(A, vu, e.fontFamily), this.fontSize = w(A, Du, e.fontSize), this.fontStyle = w(A, Ru, e.fontStyle), this.fontVariant = w(A, ku, e.fontVariant), this.fontWeight = w(A, Ku, e.fontWeight), this.letterSpacing = w(A, Zg, e.letterSpacing), this.lineBreak = w(A, qg, e.lineBreak), this.lineHeight = w(A, jg, e.lineHeight), this.listStyleImage = w(A, Au, e.listStyleImage), this.listStylePosition = w(A, eu, e.listStylePosition), this.listStyleType = w(A, Un, e.listStyleType), this.marginTop = w(A, tu, e.marginTop), this.marginRight = w(A, ru, e.marginRight), this.marginBottom = w(A, su, e.marginBottom), this.marginLeft = w(A, nu, e.marginLeft), this.opacity = w(A, yu, e.opacity);
    const r = w(A, iu, e.overflow);
    this.overflowX = r[0], this.overflowY = r[r.length > 1 ? 1 : 0], this.overflowWrap = w(A, ou, e.overflowWrap), this.paddingTop = w(A, au, e.paddingTop), this.paddingRight = w(A, cu, e.paddingRight), this.paddingBottom = w(A, lu, e.paddingBottom), this.paddingLeft = w(A, Bu, e.paddingLeft), this.paintOrder = w(A, Gu, e.paintOrder), this.position = w(A, gu, e.position), this.textAlign = w(A, hu, e.textAlign), this.textDecorationColor = w(A, Iu, e.textDecorationColor ?? e.color), this.textDecorationLine = w(A, Hu, e.textDecorationLine ?? e.textDecoration), this.textDecorationStyle = w(A, Tu, e.textDecorationStyle), this.textDecorationThickness = w(A, Su, e.textDecorationThickness), this.textUnderlineOffset = w(A, Lu, e.textUnderlineOffset), this.textShadow = w(A, uu, e.textShadow), this.textTransform = w(A, fu, e.textTransform), this.textOverflow = w(A, Yu, e.textOverflow), this.transform = w(A, du, e.transform), this.transformOrigin = w(A, mu, e.transformOrigin), this.rotate = w(A, Fu, e.rotate), this.visibility = w(A, Eu, e.visibility), this.webkitTextStrokeColor = w(A, Vu, e.webkitTextStrokeColor), this.webkitTextStrokeWidth = w(A, Xu, e.webkitTextStrokeWidth), this.webkitLineClamp = w(A, Wu, e.webkitLineClamp), this.wordBreak = w(A, bu, e.wordBreak), this.zIndex = w(A, xu, e.zIndex), this.objectFit = w(A, zu, e.objectFit), this.imageRendering = w(A, Zu, e.imageRendering);
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
    return W(
      this.display,
      4
      /* DISPLAY.INLINE */
    ) || W(
      this.display,
      33554432
      /* DISPLAY.INLINE_BLOCK */
    ) || W(
      this.display,
      268435456
      /* DISPLAY.INLINE_FLEX */
    ) || W(
      this.display,
      536870912
      /* DISPLAY.INLINE_GRID */
    ) || W(
      this.display,
      67108864
      /* DISPLAY.INLINE_LIST_ITEM */
    ) || W(
      this.display,
      134217728
      /* DISPLAY.INLINE_TABLE */
    );
  }
}
class ju {
  constructor(A, e) {
    this.content = w(A, Mu, e.content), this.quotes = w(A, Pu, e.quotes);
  }
}
class Bo {
  constructor(A, e) {
    this.counterIncrement = w(A, _u, e.counterIncrement), this.counterReset = w(A, Ou, e.counterReset);
  }
}
const w = (t, A, e) => {
  const r = new Ia(), s = e !== null && typeof e < "u" ? e.toString() : A.initialValue;
  r.write(s);
  const n = new Ye(r.read());
  switch (A.type) {
    case 2:
      const i = n.parseComponentValue();
      return A.parse(t, H(i) ? i.value : A.initialValue);
    case 0:
      return A.parse(t, n.parseComponentValue());
    case 1:
      return A.parse(t, n.parseComponentValues());
    case 4:
      return n.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return et.parse(t, n.parseComponentValue());
        case "color":
          return ce.parse(t, n.parseComponentValue());
        case "image":
          return Mn.parse(t, n.parseComponentValue());
        case "length":
          const o = n.parseComponentValue();
          return Be(o) ? o : tA;
        case "length-percentage":
          const a = n.parseComponentValue();
          return _(a) ? a : tA;
        case "time":
          return ja.parse(t, n.parseComponentValue());
      }
      break;
  }
}, YA = (t) => t.nodeType === Node.ELEMENT_NODE, Ac = (t) => t.nodeType === Node.TEXT_NODE, Je = (t) => typeof t.className == "object", Ot = (t) => YA(t) && typeof t.style < "u" && !Je(t), Af = (t) => t.tagName === "LI", ef = (t) => t.tagName === "OL", ho = (t) => !Je(t) && t.tagName.indexOf("-") > 0, tf = "data-html2canvas-debug", rf = (t) => {
  if (typeof t.getAttribute != "function")
    return 0;
  switch (t.getAttribute(tf)) {
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
}, mn = (t, A) => {
  const e = rf(t);
  return e === 1 || A === e;
};
class go {
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
    return Ot(A) && (e.animationDuration.some((s) => s > 0) && (r.animationDuration = A.style.animationDuration, A.style.animationDuration = "0s"), e.transform !== null && (r.transform = A.style.transform, A.style.transform = "translate(0, 0)"), e.rotate !== null && (r.rotate = A.style.rotate, A.style.rotate = "0deg", r.transform === void 0 && (r.transform = A.style.transform, A.style.transform = "translate(0, 0)"))), r;
  }
  /**
   * Restore element styles after rendering.
   *
   * @param element - Element to restore
   * @param originalStyles - Original styles to restore
   */
  static restoreElement(A, e) {
    Ot(A) && (e.animationDuration !== void 0 && (A.style.animationDuration = e.animationDuration), e.transform !== void 0 && (A.style.transform = e.transform), e.rotate !== void 0 && (A.style.rotate = e.rotate));
  }
}
class VA {
  constructor(A, e, r = {}) {
    if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, mn(
      e,
      3
      /* DebuggerType.PARSE */
    ))
      debugger;
    this.styles = new qu(A, A.config.window.getComputedStyle(e, null)), r.normalizeDom !== !1 && Ot(e) && (this.originalStyles = go.normalizeElement(e, this.styles), this.originalElement = e), this.bounds = Jr(this.context, e), mn(
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
    this.originalStyles && this.originalElement && (go.restoreElement(this.originalElement, this.originalStyles), this.originalStyles = void 0, this.originalElement = void 0);
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
var sf = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", uo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Et = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Qr = 0; Qr < uo.length; Qr++)
  Et[uo.charCodeAt(Qr)] = Qr;
var nf = function(t) {
  var A = t.length * 0.75, e = t.length, r, s = 0, n, i, o, a;
  t[t.length - 1] === "=" && (A--, t[t.length - 2] === "=" && A--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), l = Array.isArray(c) ? c : new Uint8Array(c);
  for (r = 0; r < e; r += 4)
    n = Et[t.charCodeAt(r)], i = Et[t.charCodeAt(r + 1)], o = Et[t.charCodeAt(r + 2)], a = Et[t.charCodeAt(r + 3)], l[s++] = n << 2 | i >> 4, l[s++] = (i & 15) << 4 | o >> 2, l[s++] = (o & 3) << 6 | a & 63;
  return c;
}, of = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 2)
    e.push(t[r + 1] << 8 | t[r]);
  return e;
}, af = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 4)
    e.push(t[r + 3] << 24 | t[r + 2] << 16 | t[r + 1] << 8 | t[r]);
  return e;
}, be = 5, _n = 11, Os = 2, cf = _n - be, ec = 65536 >> be, lf = 1 << be, Ns = lf - 1, Bf = 1024 >> be, hf = ec + Bf, gf = hf, uf = 32, ff = gf + uf, df = 65536 >> _n, pf = 1 << cf, wf = pf - 1, fo = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, Qf = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, Cf = function(t, A) {
  var e = nf(t), r = Array.isArray(e) ? af(e) : new Uint32Array(e), s = Array.isArray(e) ? of(e) : new Uint16Array(e), n = 24, i = fo(s, n / 2, r[4] / 2), o = r[5] === 2 ? fo(s, (n + r[4]) / 2) : Qf(r, Math.ceil((n + r[4]) / 4));
  return new Uf(r[0], r[1], r[2], r[3], i, o);
}, Uf = (
  /** @class */
  (function() {
    function t(A, e, r, s, n, i) {
      this.initialValue = A, this.errorValue = e, this.highStart = r, this.highValueIndex = s, this.index = n, this.data = i;
    }
    return t.prototype.get = function(A) {
      var e;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return e = this.index[A >> be], e = (e << Os) + (A & Ns), this.data[e];
        if (A <= 65535)
          return e = this.index[ec + (A - 55296 >> be)], e = (e << Os) + (A & Ns), this.data[e];
        if (A < this.highStart)
          return e = ff - df + (A >> _n), e = this.index[e], e += A >> be & wf, e = this.index[e], e = (e << Os) + (A & Ns), this.data[e];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, t;
  })()
), po = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mf = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Cr = 0; Cr < po.length; Cr++)
  mf[po.charCodeAt(Cr)] = Cr;
var Ff = 1, Ps = 2, $s = 3, wo = 4, Qo = 5, Ef = 7, Co = 8, Gs = 9, Vs = 10, Uo = 11, mo = 12, Fo = 13, Eo = 14, Xs = 15, bf = function(t) {
  for (var A = [], e = 0, r = t.length; e < r; ) {
    var s = t.charCodeAt(e++);
    if (s >= 55296 && s <= 56319 && e < r) {
      var n = t.charCodeAt(e++);
      (n & 64512) === 56320 ? A.push(((s & 1023) << 10) + (n & 1023) + 65536) : (A.push(s), e--);
    } else
      A.push(s);
  }
  return A;
}, xf = function() {
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
}, yf = Cf(sf), IA = "×", Ws = "÷", If = function(t) {
  return yf.get(t);
}, Hf = function(t, A, e) {
  var r = e - 2, s = A[r], n = A[e - 1], i = A[e];
  if (n === Ps && i === $s)
    return IA;
  if (n === Ps || n === $s || n === wo || i === Ps || i === $s || i === wo)
    return Ws;
  if (n === Co && [Co, Gs, Uo, mo].indexOf(i) !== -1 || (n === Uo || n === Gs) && (i === Gs || i === Vs) || (n === mo || n === Vs) && i === Vs || i === Fo || i === Qo || i === Ef || n === Ff)
    return IA;
  if (n === Fo && i === Eo) {
    for (; s === Qo; )
      s = A[--r];
    if (s === Eo)
      return IA;
  }
  if (n === Xs && i === Xs) {
    for (var o = 0; s === Xs; )
      o++, s = A[--r];
    if (o % 2 === 0)
      return IA;
  }
  return Ws;
}, Tf = function(t) {
  var A = bf(t), e = A.length, r = 0, s = 0, n = A.map(If);
  return {
    next: function() {
      if (r >= e)
        return { done: !0, value: null };
      for (var i = IA; r < e && (i = Hf(A, n, ++r)) === IA; )
        ;
      if (i !== IA || r === e) {
        var o = xf.apply(null, A.slice(s, r));
        return s = r, { value: o, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Sf = function(t) {
  for (var A = Tf(t), e = [], r; !(r = A.next()).done; )
    r.value && e.push(r.value.slice());
  return e;
};
const Lf = (t) => {
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
}, vf = (t) => {
  const A = t.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", t.body.appendChild(A);
  const e = t.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  const r = A.firstChild, s = Yr(r.data).map((a) => q(a));
  let n = 0, i = {};
  const o = s.every((a, c) => {
    e.setStart(r, n), e.setEnd(r, n + a.length);
    const l = e.getBoundingClientRect();
    n += a.length;
    const B = l.x > i.x || l.y > i.y;
    return i = l, c === 0 ? !0 : B;
  });
  return t.body.removeChild(A), o;
}, Df = () => typeof new Image().crossOrigin < "u", Kf = () => typeof new XMLHttpRequest().responseType == "string", kf = (t) => {
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
}, bo = (t) => t[0] === 0 && t[1] === 255 && t[2] === 0 && t[3] === 255, Rf = (t) => {
  const A = t.createElement("canvas"), e = 100;
  A.width = e, A.height = e;
  const r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, e, e);
  const s = new Image(), n = A.toDataURL();
  s.src = n;
  const i = Fn(e, e, 0, 0, s);
  return r.fillStyle = "red", r.fillRect(0, 0, e, e), xo(i).then((o) => {
    r.drawImage(o, 0, 0);
    const a = r.getImageData(0, 0, e, e).data;
    r.fillStyle = "red", r.fillRect(0, 0, e, e);
    const c = t.createElement("div");
    return c.style.backgroundImage = `url(${n})`, c.style.height = `${e}px`, bo(a) ? xo(Fn(e, e, 0, 0, c)) : Promise.reject(!1);
  }).then((o) => (r.drawImage(o, 0, 0), bo(r.getImageData(0, 0, e, e).data))).catch(() => !1);
}, Fn = (t, A, e, r, s) => {
  const n = "http://www.w3.org/2000/svg", i = document.createElementNS(n, "svg"), o = document.createElementNS(n, "foreignObject");
  return i.setAttributeNS(null, "width", t.toString()), i.setAttributeNS(null, "height", A.toString()), o.setAttributeNS(null, "width", "100%"), o.setAttributeNS(null, "height", "100%"), o.setAttributeNS(null, "x", e.toString()), o.setAttributeNS(null, "y", r.toString()), o.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(o), o.appendChild(s), i;
}, xo = (t) => new Promise((A, e) => {
  const r = new Image();
  r.onload = () => A(r), r.onerror = e, r.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(t))}`;
}), BA = {
  get SUPPORT_RANGE_BOUNDS() {
    const t = Lf(document);
    return Object.defineProperty(BA, "SUPPORT_RANGE_BOUNDS", { value: t }), t;
  },
  get SUPPORT_WORD_BREAKING() {
    const t = BA.SUPPORT_RANGE_BOUNDS && vf(document);
    return Object.defineProperty(BA, "SUPPORT_WORD_BREAKING", { value: t }), t;
  },
  get SUPPORT_SVG_DRAWING() {
    const t = kf(document);
    return Object.defineProperty(BA, "SUPPORT_SVG_DRAWING", { value: t }), t;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    const t = typeof Array.from == "function" && typeof window.fetch == "function" ? Rf(document) : Promise.resolve(!1);
    return Object.defineProperty(BA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: t }), t;
  },
  get SUPPORT_CORS_IMAGES() {
    const t = Df();
    return Object.defineProperty(BA, "SUPPORT_CORS_IMAGES", { value: t }), t;
  },
  get SUPPORT_RESPONSE_TYPE() {
    const t = Kf();
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
class xe {
  constructor(A, e) {
    this.text = A, this.bounds = e;
  }
}
const Mf = (t, A, e, r) => {
  const s = Nf(A, e), n = [];
  let i = 0;
  return s.forEach((o) => {
    if (e.textDecorationLine.length || o.trim().length > 0)
      if (BA.SUPPORT_RANGE_BOUNDS) {
        const a = yo(r, i, o.length).getClientRects();
        if (a.length > 1) {
          const c = Rr(o);
          let l = 0;
          c.forEach((B) => {
            n.push(new xe(B, dA.fromDOMRectList(t, yo(r, l + i, B.length).getClientRects()))), l += B.length;
          });
        } else
          n.push(new xe(o, dA.fromDOMRectList(t, a)));
      } else {
        const a = r.splitText(o.length);
        n.push(new xe(o, _f(t, r))), r = a;
      }
    else BA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(o.length));
    i += o.length;
  }), n;
}, _f = (t, A) => {
  const e = A.ownerDocument;
  if (e) {
    const r = e.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    const s = A.parentNode;
    if (s) {
      s.replaceChild(r, A);
      const n = Jr(t, r);
      return r.firstChild && s.replaceChild(r.firstChild, r), n;
    }
  }
  return dA.EMPTY;
}, yo = (t, A, e) => {
  const r = t.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  const s = r.createRange();
  return s.setStart(t, A), s.setEnd(t, A + e), s;
}, Rr = (t) => {
  if (BA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    const A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(t)).map((e) => e.segment);
  }
  return Sf(t);
}, Of = (t, A) => {
  if (BA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    const e = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(e.segment(t)).map((r) => r.segment);
  }
  return $f(t, A);
}, Nf = (t, A) => A.letterSpacing !== 0 ? Rr(t) : Of(t, A), Pf = [32, 160, 4961, 65792, 65793, 4153, 4241], $f = (t, A) => {
  const e = rB(t, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [];
  let s;
  for (; !(s = e.next()).done; )
    if (s.value) {
      const n = s.value.slice(), i = Yr(n);
      let o = "";
      i.forEach((a) => {
        Pf.indexOf(a) === -1 ? o += q(a) : (o.length && r.push(o), r.push(q(a)), o = "");
      }), o.length && r.push(o);
    }
  return r;
};
class Gf {
  constructor(A, e, r) {
    this.text = Vf(e.data, r.textTransform), this.textBounds = Mf(A, this.text, r, e);
  }
}
const Vf = (t, A) => {
  switch (A) {
    case 1:
      return t.toLowerCase();
    case 3:
      return t.replace(Xf, Wf);
    case 2:
      return t.toUpperCase();
    default:
      return t;
  }
}, Xf = /(^|\s|:|-|\(|\))([a-z])/g, Wf = (t, A, e) => t.length > 0 ? A + e.toUpperCase() : t;
class tc extends VA {
  constructor(A, e) {
    super(A, e), this.src = e.currentSrc || e.src, this.intrinsicWidth = e.naturalWidth, this.intrinsicHeight = e.naturalHeight, this.context.cache.addImage(this.src);
  }
}
class rc extends VA {
  constructor(A, e) {
    super(A, e), this.canvas = e, this.intrinsicWidth = e.width, this.intrinsicHeight = e.height;
  }
}
class sc extends VA {
  constructor(A, e) {
    super(A, e);
    const r = new XMLSerializer(), s = Jr(A, e);
    e.setAttribute("width", `${s.width}px`), e.setAttribute("height", `${s.height}px`), this.svg = `data:image/svg+xml,${encodeURIComponent(r.serializeToString(e))}`, this.intrinsicWidth = e.width.baseVal.value, this.intrinsicHeight = e.height.baseVal.value, this.context.cache.addImage(this.svg);
  }
}
class nc extends VA {
  constructor(A, e) {
    super(A, e), this.value = e.value;
  }
}
class En extends VA {
  constructor(A, e) {
    super(A, e), this.start = e.start, this.reversed = typeof e.reversed == "boolean" && e.reversed === !0;
  }
}
const zf = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], Jf = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Yf = (t) => t.width > t.height ? new dA(t.left + (t.width - t.height) / 2, t.top, t.height, t.height) : t.width < t.height ? new dA(t.left, t.top + (t.height - t.width) / 2, t.width, t.width) : t, Zf = (t) => {
  const A = t.type === jf ? new Array(t.value.length + 1).join("•") : t.value;
  return A.length === 0 ? t.placeholder || "" : A;
}, qf = (t) => t.value.length === 0 && !!t.placeholder, Mr = "checkbox", _r = "radio", jf = "password", Io = 707406591, Ad = 1970632191;
class Ht extends VA {
  constructor(A, e) {
    switch (super(A, e), this.type = e.type.toLowerCase(), this.checked = e.checked, this.value = Zf(e), this.isPlaceholder = qf(e), (this.type === Mr || this.type === _r) && (this.styles.backgroundColor = 3739148031, this.styles.borderTopColor = this.styles.borderRightColor = this.styles.borderBottomColor = this.styles.borderLeftColor = 2779096575, this.styles.borderTopWidth = this.styles.borderRightWidth = this.styles.borderBottomWidth = this.styles.borderLeftWidth = 1, this.styles.borderTopStyle = this.styles.borderRightStyle = this.styles.borderBottomStyle = this.styles.borderLeftStyle = 1, this.styles.backgroundClip = [
      0
      /* BACKGROUND_CLIP.BORDER_BOX */
    ], this.styles.backgroundOrigin = [
      0
      /* BACKGROUND_ORIGIN.BORDER_BOX */
    ], this.bounds = Yf(this.bounds)), this.type) {
      case Mr:
        this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = zf;
        break;
      case _r:
        this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = Jf;
        break;
    }
  }
}
class ic extends VA {
  constructor(A, e) {
    super(A, e);
    const r = e.options[e.selectedIndex || 0];
    this.value = r && r.text || "";
  }
}
class oc extends VA {
  constructor(A, e) {
    super(A, e), this.value = e.value;
  }
}
class ac extends VA {
  constructor(A, e, r) {
    super(A, e), this.src = e.src, this.width = parseInt(e.width, 10) || 0, this.height = parseInt(e.height, 10) || 0, this.backgroundColor = this.styles.backgroundColor, this.parseTreeFn = r;
    try {
      if (e.contentWindow && e.contentWindow.document && e.contentWindow.document.documentElement && this.parseTreeFn) {
        this.tree = this.parseTreeFn(A, e.contentWindow.document.documentElement);
        const s = e.contentWindow.document.documentElement ? Ze(A, getComputedStyle(e.contentWindow.document.documentElement).backgroundColor) : $A.TRANSPARENT, n = e.contentWindow.document.body ? Ze(A, getComputedStyle(e.contentWindow.document.body).backgroundColor) : $A.TRANSPARENT;
        this.backgroundColor = ae(s) ? ae(n) ? this.styles.backgroundColor : n : s;
      }
    } catch {
    }
  }
}
const ed = ["OL", "UL", "MENU"], Tr = (t, A, e, r) => {
  for (let s = A.firstChild, n; s; s = n)
    if (n = s.nextSibling, Ac(s) && s.data.length > 0)
      e.textNodes.push(new Gf(t, s, e.styles));
    else if (YA(s))
      if (bt(s) && s.assignedNodes)
        s.assignedNodes().forEach((i) => Tr(t, i, e, r));
      else {
        const i = cc(t, s);
        i.styles.isVisible() && (td(s, i, r) ? i.flags |= 4 : rd(i.styles) && (i.flags |= 2), ed.indexOf(s.tagName) !== -1 && (i.flags |= 8), e.elements.push(i), s.slot, s.shadowRoot ? Tr(t, s.shadowRoot, i, r) : !Or(s) && !Bc(s) && !Nr(s) && Tr(t, s, i, r));
      }
}, cc = (t, A) => bn(A) ? new tc(t, A) : hc(A) ? new rc(t, A) : Bc(A) ? new sc(t, A) : Af(A) ? new nc(t, A) : ef(A) ? new En(t, A) : sd(A) ? new Ht(t, A) : Nr(A) ? new ic(t, A) : Or(A) ? new oc(t, A) : gc(A) ? new ac(t, A, lc) : new VA(t, A), lc = (t, A) => {
  const e = cc(t, A);
  return e.flags |= 4, Tr(t, A, e, e), e;
}, td = (t, A, e) => A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || On(t) && e.styles.isTransparent(), rd = (t) => t.isPositioned() || t.isFloating() ? !0 : W(
  t.display,
  268435456
  /* DISPLAY.INLINE_FLEX */
) || W(
  t.display,
  33554432
  /* DISPLAY.INLINE_BLOCK */
) || W(
  t.display,
  536870912
  /* DISPLAY.INLINE_GRID */
) || W(
  t.display,
  134217728
  /* DISPLAY.INLINE_TABLE */
), sd = (t) => t.tagName === "INPUT", nd = (t) => t.tagName === "HTML", Bc = (t) => t.tagName === "svg", On = (t) => t.tagName === "BODY", hc = (t) => t.tagName === "CANVAS", Ho = (t) => t.tagName === "VIDEO", bn = (t) => t.tagName === "IMG", gc = (t) => t.tagName === "IFRAME", zs = (t) => t.tagName === "STYLE", To = (t) => t.tagName === "SCRIPT", Or = (t) => t.tagName === "TEXTAREA", Nr = (t) => t.tagName === "SELECT", bt = (t) => t.tagName === "SLOT";
class id {
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
const So = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Lo = {
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
}, od = {
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
}, ad = {
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
}, Ne = (t, A, e, r, s, n) => t < A || t > e ? Nt(t, s, n.length > 0) : r.integers.reduce((i, o, a) => {
  for (; t >= o; )
    t -= o, i += r.values[a];
  return i;
}, "") + n, uc = (t, A, e, r) => {
  let s = "";
  do
    e || t--, s = r(t) + s, t /= A;
  while (t * A >= A);
  return s;
}, Z = (t, A, e, r, s) => {
  const n = e - A + 1;
  return (t < 0 ? "-" : "") + (uc(Math.abs(t), n, r, (i) => q(Math.floor(i % n) + A)) + s);
}, we = (t, A, e = ". ") => {
  const r = A.length;
  return uc(Math.abs(t), r, !1, (s) => A[Math.floor(s % r)]) + e;
}, Xe = 1, te = 2, re = 4, xt = 8, JA = (t, A, e, r, s, n) => {
  if (t < -9999 || t > 9999)
    return Nt(t, 4, s.length > 0);
  let i = Math.abs(t), o = s;
  if (i === 0)
    return A[0] + o;
  for (let a = 0; i > 0 && a <= 4; a++) {
    const c = i % 10;
    c === 0 && W(n, Xe) && o !== "" ? o = A[c] + o : c > 1 || c === 1 && a === 0 || c === 1 && a === 1 && W(n, te) || c === 1 && a === 1 && W(n, re) && t > 100 || c === 1 && a > 1 && W(n, xt) ? o = A[c] + (a > 0 ? e[a - 1] : "") + o : c === 1 && a > 0 && (o = e[a - 1] + o), i = Math.floor(i / 10);
  }
  return (t < 0 ? r : "") + o;
}, vo = "十百千萬", Do = "拾佰仟萬", Ko = "マイナス", Js = "마이너스", Nt = (t, A, e) => {
  const r = e ? ". " : "", s = e ? "、" : "", n = e ? ", " : "", i = e ? " " : "";
  switch (A) {
    case 0:
      return "•" + i;
    case 1:
      return "◦" + i;
    case 2:
      return "◾" + i;
    case 5:
      const o = Z(t, 48, 57, !0, r);
      return o.length < 4 ? `0${o}` : o;
    case 4:
      return we(t, "〇一二三四五六七八九", s);
    case 6:
      return Ne(t, 1, 3999, So, 3, r).toLowerCase();
    case 7:
      return Ne(t, 1, 3999, So, 3, r);
    case 8:
      return Z(t, 945, 969, !1, r);
    case 9:
      return Z(t, 97, 122, !1, r);
    case 10:
      return Z(t, 65, 90, !1, r);
    case 11:
      return Z(t, 1632, 1641, !0, r);
    case 12:
    case 49:
      return Ne(t, 1, 9999, Lo, 3, r);
    case 35:
      return Ne(t, 1, 9999, Lo, 3, r).toLowerCase();
    case 13:
      return Z(t, 2534, 2543, !0, r);
    case 14:
    case 30:
      return Z(t, 6112, 6121, !0, r);
    case 15:
      return we(t, "子丑寅卯辰巳午未申酉戌亥", s);
    case 16:
      return we(t, "甲乙丙丁戊己庚辛壬癸", s);
    case 17:
    case 48:
      return JA(t, "零一二三四五六七八九", vo, "負", s, te | re | xt);
    case 47:
      return JA(t, "零壹貳參肆伍陸柒捌玖", Do, "負", s, Xe | te | re | xt);
    case 42:
      return JA(t, "零一二三四五六七八九", vo, "负", s, te | re | xt);
    case 41:
      return JA(t, "零壹贰叁肆伍陆柒捌玖", Do, "负", s, Xe | te | re | xt);
    case 26:
      return JA(t, "〇一二三四五六七八九", "十百千万", Ko, s, 0);
    case 25:
      return JA(t, "零壱弐参四伍六七八九", "拾百千万", Ko, s, Xe | te | re);
    case 31:
      return JA(t, "영일이삼사오육칠팔구", "십백천만", Js, n, Xe | te | re);
    case 33:
      return JA(t, "零一二三四五六七八九", "十百千萬", Js, n, 0);
    case 32:
      return JA(t, "零壹貳參四五六七八九", "拾百千", Js, n, Xe | te | re);
    case 18:
      return Z(t, 2406, 2415, !0, r);
    case 20:
      return Ne(t, 1, 19999, ad, 3, r);
    case 21:
      return Z(t, 2790, 2799, !0, r);
    case 22:
      return Z(t, 2662, 2671, !0, r);
    case 52:
      return Ne(t, 1, 10999, od, 3, r);
    case 23:
      return we(t, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return we(t, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return Z(t, 3302, 3311, !0, r);
    case 28:
      return we(t, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", s);
    case 29:
      return we(t, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", s);
    case 34:
      return Z(t, 3792, 3801, !0, r);
    case 37:
      return Z(t, 6160, 6169, !0, r);
    case 38:
      return Z(t, 4160, 4169, !0, r);
    case 39:
      return Z(t, 2918, 2927, !0, r);
    case 40:
      return Z(t, 1776, 1785, !0, r);
    case 43:
      return Z(t, 3046, 3055, !0, r);
    case 44:
      return Z(t, 3174, 3183, !0, r);
    case 45:
      return Z(t, 3664, 3673, !0, r);
    case 46:
      return Z(t, 3872, 3881, !0, r);
    case 3:
    default:
      return Z(t, 48, 57, !0, r);
  }
}, xn = "data-html2canvas-ignore", cd = (t) => {
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
class ko {
  constructor(A, e, r) {
    if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = e, this.counters = new id(), this.quoteDepth = 0, !e.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    if (!this.options.iframeContainer) {
      const s = cd(e);
      s && (this.options.iframeContainer = s);
    }
    this.documentElement = this.cloneNode(e.ownerDocument.documentElement, !1);
  }
  toIFrame(A, e) {
    const r = ld(A, e, this.options.iframeContainer);
    if (!r.contentWindow)
      throw new Error("Unable to find iframe window");
    const s = A.defaultView.pageXOffset, n = A.defaultView.pageYOffset, i = r.contentWindow, o = i.document, a = gd(r).then(async () => {
      this.scrolledElements.forEach(pd), i && (i.scrollTo(e.left, e.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (i.scrollY !== e.top || i.scrollX !== e.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(i.scrollX - e.left, i.scrollY - e.top, 0, 0)));
      const g = this.options.onclone, u = this.clonedReferenceElement;
      if (typeof u > "u")
        throw new Error(`Error finding the ${this.referenceElement.nodeName} in the cloned document`);
      return o.fonts && o.fonts.ready && await o.fonts.ready, /(AppleWebKit)/g.test(navigator.userAgent) && await hd(o), typeof g == "function" ? Promise.resolve().then(() => g(o, u)).then(() => r) : r;
    }), c = o.baseURI;
    o.open();
    const l = fd(document.doctype) + "<html></html>";
    try {
      const g = this.referenceElement.ownerDocument?.defaultView, u = g && g.trustedTypes;
      let f = u?.getPolicy?.("html2canvas-pro");
      !f && u && (f = u.createPolicy("html2canvas-pro", {
        createHTML: (d) => d
      })), f ? o.write(f.createHTML(l)) : o.write(l);
    } catch {
      o.write(l);
    }
    dd(this.referenceElement.ownerDocument, s, n), o.close();
    const B = o.adoptNode(this.documentElement);
    return md(B, c), o.replaceChild(B, o.documentElement), a;
  }
  createElementClone(A) {
    if (mn(
      A,
      2
      /* DebuggerType.CLONE */
    ))
      debugger;
    if (hc(A))
      return this.createCanvasClone(A);
    if (Ho(A))
      return this.createVideoClone(A);
    if (zs(A))
      return this.createStyleClone(A);
    const e = A.cloneNode(!1);
    return bn(e) && (bn(A) && A.currentSrc && A.currentSrc !== A.src && (e.src = A.currentSrc, e.srcset = ""), e.loading === "lazy" && (e.loading = "eager")), ho(e) && !Je(e) ? this.createCustomElementClone(e) : e;
  }
  createCustomElementClone(A) {
    const e = document.createElement("div");
    if (e.className = A.className, Ys(A.style, e), A.shadowRoot)
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
    (!YA(e) || !To(e) && !e.hasAttribute(xn) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(e))) && (!this.options.copyStyles || !YA(e) || !zs(e)) && A.appendChild(this.cloneNode(e, r));
  }
  /**
   * Check if a child node should be cloned based on filtering rules
   * Filters out: scripts, ignored elements, and optionally styles
   */
  shouldCloneChild(A) {
    return !YA(A) || !To(A) && !A.hasAttribute(xn) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(A));
  }
  /**
   * Check if a style element should be cloned based on copyStyles option
   */
  shouldCloneStyleElement(A) {
    return !this.options.copyStyles || !YA(A) || !zs(A);
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
    if (!bt(A))
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
      YA(s) && bt(s) ? this.cloneSlotElement(s, e, r) : this.safeAppendClonedChild(e, s, r);
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
    if (!bt(A))
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
      YA(s) && bt(s) ? this.cloneSlotElementAsLightDOM(s, e, r) : this.appendChildNode(e, s, r);
  }
  /**
   * Clone child nodes from source element to clone element
   * Handles shadow DOM, slots, and light DOM appropriately
   */
  cloneChildNodes(A, e, r) {
    A.shadowRoot && e.shadowRoot ? (this.cloneShadowDOMChildren(A.shadowRoot, e.shadowRoot, r), this.cloneLightDOMChildren(A, e, r)) : A.shadowRoot && !e.shadowRoot ? this.cloneShadowDOMAsLightDOM(A.shadowRoot, e, r) : this.cloneLightDOMChildren(A, e, r);
  }
  cloneNode(A, e) {
    if (Ac(A))
      return document.createTextNode(A.data);
    if (!A.ownerDocument)
      return A.cloneNode(!1);
    const r = A.ownerDocument.defaultView;
    if (r && YA(A) && (Ot(A) || Je(A))) {
      const s = this.createElementClone(A);
      s.style.transitionProperty = "none";
      const n = r.getComputedStyle(A), i = r.getComputedStyle(A, ":before"), o = r.getComputedStyle(A, ":after");
      this.referenceElement === A && Ot(s) && (this.clonedReferenceElement = s), On(s) && Cd(s, this.options.cspNonce);
      const a = this.counters.parse(new Bo(this.context, n)), c = this.resolvePseudoContent(A, s, i, Tt.BEFORE);
      ho(A) && (e = !0), Ho(A) || this.cloneChildNodes(A, s, e), c && s.insertBefore(c, s.firstChild);
      const l = this.resolvePseudoContent(A, s, o, Tt.AFTER);
      return l && s.appendChild(l), this.counters.pop(a), (n && (this.options.copyStyles || Je(A)) && !gc(A) || e) && Ys(n, s), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([s, A.scrollLeft, A.scrollTop]), (Or(A) || Nr(A)) && (Or(s) || Nr(s)) && (s.value = A.value), s;
    }
    return A.cloneNode(!1);
  }
  resolvePseudoContent(A, e, r, s) {
    if (!r)
      return;
    const n = r.content, i = e.ownerDocument;
    if (!i || !n || n === "none" || n === "-moz-alt-content" || r.display === "none")
      return;
    this.counters.parse(new Bo(this.context, r));
    const o = new ju(this.context, r), a = i.createElement("html2canvaspseudoelement");
    Ys(r, a), o.content.forEach((l) => {
      if (l.type === 0)
        a.appendChild(i.createTextNode(l.value));
      else if (l.type === 22) {
        const B = i.createElement("img");
        B.src = l.value, B.style.opacity = "1", a.appendChild(B);
      } else if (l.type === 18) {
        if (l.name === "attr") {
          const B = l.values.filter(H);
          B.length && a.appendChild(i.createTextNode(A.getAttribute(B[0].value) || ""));
        } else if (l.name === "counter") {
          const [B, g] = l.values.filter(hA);
          if (B && H(B)) {
            const u = this.counters.getCounterValue(B.value), f = g && H(g) ? Un.parse(this.context, g.value) : 3;
            a.appendChild(i.createTextNode(Nt(u, f, !1)));
          }
        } else if (l.name === "counters") {
          const [B, g, u] = l.values.filter(hA);
          if (B && H(B)) {
            const f = this.counters.getCounterValues(B.value), d = u && H(u) ? Un.parse(this.context, u.value) : 3, U = g && g.type === 0 ? g.value : "", x = f.map((Q) => Nt(Q, d, !1)).join(U);
            a.appendChild(i.createTextNode(x));
          }
        }
      } else if (l.type === 20)
        switch (l.value) {
          case "open-quote":
            a.appendChild(i.createTextNode(lo(o.quotes, this.quoteDepth++, !0)));
            break;
          case "close-quote":
            a.appendChild(i.createTextNode(lo(o.quotes, --this.quoteDepth, !1)));
            break;
          default:
            a.appendChild(i.createTextNode(l.value));
        }
    }), a.className = `${yn} ${In}`;
    const c = s === Tt.BEFORE ? ` ${yn}` : ` ${In}`;
    return Je(e) ? e.className.baseValue += c : e.className += c, a;
  }
  static destroy(A) {
    return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
  }
}
var Tt;
(function(t) {
  t[t.BEFORE = 0] = "BEFORE", t[t.AFTER = 1] = "AFTER";
})(Tt || (Tt = {}));
const ld = (t, A, e) => {
  const r = t.createElement("iframe");
  return r.className = "html2canvas-container", r.style.visibility = "hidden", r.style.position = "fixed", r.style.left = "-10000px", r.style.top = "0px", r.style.border = "0", r.width = A.width.toString(), r.height = A.height.toString(), r.scrolling = "no", r.setAttribute(xn, "true"), (e || t.body).appendChild(r), r;
}, Bd = (t) => new Promise((A) => {
  if (t.complete) {
    A();
    return;
  }
  if (!t.src) {
    A();
    return;
  }
  t.onload = A, t.onerror = A;
}), hd = (t) => Promise.all([].slice.call(t.images, 0).map(Bd)), gd = (t) => new Promise((A, e) => {
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
}), ud = [
  "all",
  // #2476
  "d",
  // #2483
  "content"
  // Safari shows pseudoelements if content is set
], Ys = (t, A) => {
  for (let e = t.length - 1; e >= 0; e--) {
    const r = t.item(e);
    ud.indexOf(r) === -1 && !r.startsWith("--") && A.style.setProperty(r, t.getPropertyValue(r));
  }
  return A;
}, fd = (t) => {
  let A = "";
  return t && (A += "<!DOCTYPE ", t.name && (A += t.name), t.internalSubset && (A += " " + t.internalSubset.replace(/"/g, "&quot;").replace(/>/g, "&gt;")), t.publicId ? (A += ' PUBLIC "' + t.publicId.replace(/"/g, "&quot;") + '"', t.systemId && (A += ' "' + t.systemId.replace(/"/g, "&quot;") + '"')) : t.systemId && (A += ' SYSTEM "' + t.systemId.replace(/"/g, "&quot;") + '"'), A += ">"), A;
}, dd = (t, A, e) => {
  t && t.defaultView && (A !== t.defaultView.pageXOffset || e !== t.defaultView.pageYOffset) && t.defaultView.scrollTo(A, e);
}, pd = ([t, A, e]) => {
  t.scrollLeft = A, t.scrollTop = e;
}, wd = ":before", Qd = ":after", yn = "___html2canvas___pseudoelement_before", In = "___html2canvas___pseudoelement_after", Ro = `{
    content: "" !important;
    display: none !important;
}`, Cd = (t, A) => {
  Ud(t, `.${yn}${wd}${Ro}
         .${In}${Qd}${Ro}`, A);
}, Ud = (t, A, e) => {
  const r = t.ownerDocument;
  if (r) {
    const s = r.createElement("style");
    s.textContent = A, e && (s.nonce = e), t.appendChild(s);
  }
}, md = (t, A) => {
  const e = t.ownerDocument.createElement("base");
  e.href = A;
  const r = t.getElementsByTagName("head").item(0);
  r?.insertBefore(e, r?.firstChild ?? null);
};
class C {
  constructor(A, e) {
    this.type = 0, this.x = A, this.y = e;
  }
  add(A, e) {
    return new C(this.x + A, this.y + e);
  }
}
const Pe = (t, A, e) => new C(t.x + (A.x - t.x) * e, t.y + (A.y - t.y) * e);
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
class Fd {
  constructor(A) {
    const e = A.styles, r = A.bounds;
    let [s, n] = Ft(e.borderTopLeftRadius, r.width, r.height), [i, o] = Ft(e.borderTopRightRadius, r.width, r.height), [a, c] = Ft(e.borderBottomRightRadius, r.width, r.height), [l, B] = Ft(e.borderBottomLeftRadius, r.width, r.height);
    const g = [];
    g.push((s + i) / r.width), g.push((l + a) / r.width), g.push((n + B) / r.height), g.push((o + c) / r.height);
    const u = Math.max(...g);
    u > 1 && (s /= u, n /= u, i /= u, o /= u, a /= u, c /= u, l /= u, B /= u);
    const f = r.width - i, d = r.height - c, U = r.width - a, x = r.height - B, Q = e.borderTopWidth, F = e.borderRightWidth, b = e.borderBottomWidth, E = e.borderLeftWidth, K = I(e.paddingTop, A.bounds.width), X = I(e.paddingRight, A.bounds.width), aA = I(e.paddingBottom, A.bounds.width), G = I(e.paddingLeft, A.bounds.width);
    this.topLeftBorderDoubleOuterBox = s > 0 || n > 0 ? V(r.left + E / 3, r.top + Q / 3, s - E / 3, n - Q / 3, R.TOP_LEFT) : new C(r.left + E / 3, r.top + Q / 3), this.topRightBorderDoubleOuterBox = s > 0 || n > 0 ? V(r.left + f, r.top + Q / 3, i - F / 3, o - Q / 3, R.TOP_RIGHT) : new C(r.left + r.width - F / 3, r.top + Q / 3), this.bottomRightBorderDoubleOuterBox = a > 0 || c > 0 ? V(r.left + U, r.top + d, a - F / 3, c - b / 3, R.BOTTOM_RIGHT) : new C(r.left + r.width - F / 3, r.top + r.height - b / 3), this.bottomLeftBorderDoubleOuterBox = l > 0 || B > 0 ? V(r.left + E / 3, r.top + x, l - E / 3, B - b / 3, R.BOTTOM_LEFT) : new C(r.left + E / 3, r.top + r.height - b / 3), this.topLeftBorderDoubleInnerBox = s > 0 || n > 0 ? V(r.left + E * 2 / 3, r.top + Q * 2 / 3, s - E * 2 / 3, n - Q * 2 / 3, R.TOP_LEFT) : new C(r.left + E * 2 / 3, r.top + Q * 2 / 3), this.topRightBorderDoubleInnerBox = s > 0 || n > 0 ? V(r.left + f, r.top + Q * 2 / 3, i - F * 2 / 3, o - Q * 2 / 3, R.TOP_RIGHT) : new C(r.left + r.width - F * 2 / 3, r.top + Q * 2 / 3), this.bottomRightBorderDoubleInnerBox = a > 0 || c > 0 ? V(r.left + U, r.top + d, a - F * 2 / 3, c - b * 2 / 3, R.BOTTOM_RIGHT) : new C(r.left + r.width - F * 2 / 3, r.top + r.height - b * 2 / 3), this.bottomLeftBorderDoubleInnerBox = l > 0 || B > 0 ? V(r.left + E * 2 / 3, r.top + x, l - E * 2 / 3, B - b * 2 / 3, R.BOTTOM_LEFT) : new C(r.left + E * 2 / 3, r.top + r.height - b * 2 / 3), this.topLeftBorderStroke = s > 0 || n > 0 ? V(r.left + E / 2, r.top + Q / 2, s - E / 2, n - Q / 2, R.TOP_LEFT) : new C(r.left + E / 2, r.top + Q / 2), this.topRightBorderStroke = s > 0 || n > 0 ? V(r.left + f, r.top + Q / 2, i - F / 2, o - Q / 2, R.TOP_RIGHT) : new C(r.left + r.width - F / 2, r.top + Q / 2), this.bottomRightBorderStroke = a > 0 || c > 0 ? V(r.left + U, r.top + d, a - F / 2, c - b / 2, R.BOTTOM_RIGHT) : new C(r.left + r.width - F / 2, r.top + r.height - b / 2), this.bottomLeftBorderStroke = l > 0 || B > 0 ? V(r.left + E / 2, r.top + x, l - E / 2, B - b / 2, R.BOTTOM_LEFT) : new C(r.left + E / 2, r.top + r.height - b / 2), this.topLeftBorderBox = s > 0 || n > 0 ? V(r.left, r.top, s, n, R.TOP_LEFT) : new C(r.left, r.top), this.topRightBorderBox = i > 0 || o > 0 ? V(r.left + f, r.top, i, o, R.TOP_RIGHT) : new C(r.left + r.width, r.top), this.bottomRightBorderBox = a > 0 || c > 0 ? V(r.left + U, r.top + d, a, c, R.BOTTOM_RIGHT) : new C(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = l > 0 || B > 0 ? V(r.left, r.top + x, l, B, R.BOTTOM_LEFT) : new C(r.left, r.top + r.height), this.topLeftPaddingBox = s > 0 || n > 0 ? V(r.left + E, r.top + Q, Math.max(0, s - E), Math.max(0, n - Q), R.TOP_LEFT) : new C(r.left + E, r.top + Q), this.topRightPaddingBox = i > 0 || o > 0 ? V(r.left + Math.min(f, r.width - F), r.top + Q, f > r.width + F ? 0 : Math.max(0, i - F), Math.max(0, o - Q), R.TOP_RIGHT) : new C(r.left + r.width - F, r.top + Q), this.bottomRightPaddingBox = a > 0 || c > 0 ? V(r.left + Math.min(U, r.width - E), r.top + Math.min(d, r.height - b), Math.max(0, a - F), Math.max(0, c - b), R.BOTTOM_RIGHT) : new C(r.left + r.width - F, r.top + r.height - b), this.bottomLeftPaddingBox = l > 0 || B > 0 ? V(r.left + E, r.top + Math.min(x, r.height - b), Math.max(0, l - E), Math.max(0, B - b), R.BOTTOM_LEFT) : new C(r.left + E, r.top + r.height - b), this.topLeftContentBox = s > 0 || n > 0 ? V(r.left + E + G, r.top + Q + K, Math.max(0, s - (E + G)), Math.max(0, n - (Q + K)), R.TOP_LEFT) : new C(r.left + E + G, r.top + Q + K), this.topRightContentBox = i > 0 || o > 0 ? V(r.left + Math.min(f, r.width + E + G), r.top + Q + K, f > r.width + E + G ? 0 : i - E + G, o - (Q + K), R.TOP_RIGHT) : new C(r.left + r.width - (F + X), r.top + Q + K), this.bottomRightContentBox = a > 0 || c > 0 ? V(r.left + Math.min(U, r.width - (E + G)), r.top + Math.min(d, r.height + Q + K), Math.max(0, a - (F + X)), c - (b + aA), R.BOTTOM_RIGHT) : new C(r.left + r.width - (F + X), r.top + r.height - (b + aA)), this.bottomLeftContentBox = l > 0 || B > 0 ? V(r.left + E + G, r.top + x, Math.max(0, l - (E + G)), B - (b + aA), R.BOTTOM_LEFT) : new C(r.left + E + G, r.top + r.height - (b + aA));
  }
}
var R;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 1] = "TOP_RIGHT", t[t.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", t[t.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(R || (R = {}));
const V = (t, A, e, r, s) => {
  const n = 4 * ((Math.sqrt(2) - 1) / 3), i = e * n, o = r * n, a = t + e, c = A + r;
  switch (s) {
    case R.TOP_LEFT:
      return new ZA(new C(t, c), new C(t, c - o), new C(a - i, A), new C(a, A));
    case R.TOP_RIGHT:
      return new ZA(new C(t, A), new C(t + i, A), new C(a, c - o), new C(a, c));
    case R.BOTTOM_RIGHT:
      return new ZA(new C(a, A), new C(a, A + o), new C(t + i, c), new C(t, c));
    case R.BOTTOM_LEFT:
    default:
      return new ZA(new C(a, c), new C(a - i, c), new C(t, A + o), new C(t, A));
  }
}, Pr = (t) => [t.topLeftBorderBox, t.topRightBorderBox, t.bottomRightBorderBox, t.bottomLeftBorderBox], Ed = (t) => [
  t.topLeftContentBox,
  t.topRightContentBox,
  t.bottomRightContentBox,
  t.bottomLeftContentBox
], $r = (t) => [
  t.topLeftPaddingBox,
  t.topRightPaddingBox,
  t.bottomRightPaddingBox,
  t.bottomLeftPaddingBox
];
class Mo {
  constructor(A, e, r) {
    this.offsetX = A, this.offsetY = e, this.matrix = r, this.type = 0, this.target = 6;
  }
}
class Ur {
  constructor(A, e) {
    this.path = A, this.target = e, this.type = 1;
  }
}
class bd {
  constructor(A) {
    this.opacity = A, this.type = 2, this.target = 6;
  }
}
class ut {
  constructor(A) {
    this.applyClip = A, this.type = 3, this.target = 6;
  }
}
const xd = (t) => t.type === 0, fc = (t) => t.type === 1, yd = (t) => t.type === 2, Id = (t) => t.type === 3, _o = (t, A) => t.length === A.length ? t.some((e, r) => e === A[r]) : !1, Hd = (t, A, e, r, s) => t.map((n, i) => {
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
class dc {
  constructor(A) {
    this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
  }
}
class pc {
  constructor(A, e) {
    if (this.container = A, this.parent = e, this.effects = [], this.curves = new Fd(this.container), this.container.styles.opacity < 1 && this.effects.push(new bd(this.container.styles.opacity)), this.container.styles.rotate !== null) {
      const r = this.container.styles.transformOrigin, s = this.container.bounds.left + I(r[0], this.container.bounds.width), n = this.container.bounds.top + I(r[1], this.container.bounds.height), o = this.container.styles.rotate * Math.PI / 180, a = Math.cos(o), c = Math.sin(o), l = [a, c, -c, a, 0, 0];
      this.effects.push(new Mo(s, n, l));
    }
    if (this.container.styles.transform !== null) {
      const r = this.container.styles.transformOrigin, s = this.container.bounds.left + I(r[0], this.container.bounds.width), n = this.container.bounds.top + I(r[1], this.container.bounds.height), i = this.container.styles.transform;
      this.effects.push(new Mo(s, n, i));
    }
    if (this.container.styles.overflowX !== 0) {
      const r = Pr(this.curves), s = $r(this.curves);
      _o(r, s) ? this.effects.push(new Ur(
        r,
        6
        /* EffectTarget.CONTENT */
      )) : (this.effects.push(new Ur(
        r,
        2
        /* EffectTarget.BACKGROUND_BORDERS */
      )), this.effects.push(new Ur(
        s,
        4
        /* EffectTarget.CONTENT */
      )));
    }
    if (this.container.styles.clipPath.type !== 0) {
      const r = Td(this.container.styles.clipPath, this.container.bounds);
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
      const n = r.effects.filter((i) => !fc(i));
      if (e || r.container.styles.position !== 0 || !r.parent) {
        if (e = [
          2,
          3
          /* POSITION.FIXED */
        ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
          const i = Pr(r.curves), o = $r(r.curves);
          _o(i, o) || s.unshift(new Ur(
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
    return s.filter((n) => W(n.target, A));
  }
}
const Oo = (t, A, e, r, s) => t === "closest-side" ? Math.min(A - e, r - A) : t === "farthest-side" ? Math.max(A - e, r - A) : I(t, s), Td = (t, A) => {
  const { left: e, top: r, width: s, height: n } = A;
  switch (t.type) {
    case 1: {
      const i = I(t.left, s), o = I(t.top, n), a = e + i, c = r + o, l = Math.max(0, s - i - I(t.right, s)), B = Math.max(0, n - o - I(t.bottom, n));
      return new ut((g) => {
        g.beginPath(), g.rect(a, c, l, B), g.clip();
      });
    }
    case 2: {
      const i = e + I(t.cx, s), o = r + I(t.cy, n);
      let a;
      return t.radius === "closest-side" ? a = Math.min(i - e, o - r, e + s - i, r + n - o) : t.radius === "farthest-side" ? a = Math.max(i - e, o - r, e + s - i, r + n - o) : a = I(t.radius, Math.sqrt(s * s + n * n) / Math.SQRT2), new ut((c) => {
        c.beginPath(), c.arc(i, o, Math.max(0, a), 0, Math.PI * 2), c.clip();
      });
    }
    case 3: {
      const i = e + I(t.cx, s), o = r + I(t.cy, n), a = Oo(t.rx, i, e, e + s, s), c = Oo(t.ry, o, r, r + n, n);
      return new ut((l) => {
        l.beginPath(), l.ellipse(i, o, Math.max(0, a), Math.max(0, c), 0, 0, Math.PI * 2), l.clip();
      });
    }
    case 4: {
      const i = t.points.map(([o, a]) => [e + I(o, s), r + I(a, n)]);
      return new ut((o) => {
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
      return new ut((o) => {
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
}, Hn = (t, A, e, r) => {
  t.container.elements.forEach((s) => {
    const n = W(
      s.flags,
      4
      /* FLAGS.CREATES_REAL_STACKING_CONTEXT */
    ), i = W(
      s.flags,
      2
      /* FLAGS.CREATES_STACKING_CONTEXT */
    ), o = new pc(s, t);
    W(
      s.styles.display,
      2048
      /* DISPLAY.LIST_ITEM */
    ) && r.push(o);
    const a = W(
      s.flags,
      8
      /* FLAGS.IS_LIST_OWNER */
    ) ? [] : r;
    if (n || i) {
      const c = n || s.styles.isPositioned() ? e : A, l = new dc(o);
      if (s.styles.isPositioned() || s.styles.opacity < 1 || s.styles.isTransformed()) {
        const B = s.styles.zIndex.order;
        if (B < 0) {
          let g = 0;
          c.negativeZIndex.some((u, f) => B > u.element.container.styles.zIndex.order ? (g = f, !1) : g > 0), c.negativeZIndex.splice(g, 0, l);
        } else if (B > 0) {
          let g = 0;
          c.positiveZIndex.some((u, f) => B >= u.element.container.styles.zIndex.order ? (g = f + 1, !1) : g > 0), c.positiveZIndex.splice(g, 0, l);
        } else
          c.zeroOrAutoZIndexOrTransformedOrOpacity.push(l);
      } else
        s.styles.isFloating() ? c.nonPositionedFloats.push(l) : c.nonPositionedInlineLevel.push(l);
      Hn(o, l, n ? l : e, a);
    } else
      s.styles.isInlineLevel() ? A.inlineLevel.push(o) : A.nonInlineLevel.push(o), Hn(o, A, e, a);
    W(
      s.flags,
      8
      /* FLAGS.IS_LIST_OWNER */
    ) && wc(s, a);
  });
}, wc = (t, A) => {
  let e = t instanceof En ? t.start : 1;
  const r = t instanceof En ? t.reversed : !1;
  for (let s = 0; s < A.length; s++) {
    const n = A[s];
    n.container instanceof nc && typeof n.container.value == "number" && n.container.value !== 0 && (e = n.container.value), n.listValue = Nt(e, n.container.styles.listStyleType, !0), e += r ? -1 : 1;
  }
}, Sd = (t) => {
  const A = new pc(t, null), e = new dc(A), r = [];
  return Hn(A, e, e, r), wc(A.container, r), e;
}, Qc = (t) => {
  const A = t.bounds, e = t.styles;
  return A.add(e.borderLeftWidth, e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth), -(e.borderTopWidth + e.borderBottomWidth));
}, St = (t) => {
  const A = t.styles, e = t.bounds, r = I(A.paddingLeft, e.width), s = I(A.paddingRight, e.width), n = I(A.paddingTop, e.width), i = I(A.paddingBottom, e.width);
  return e.add(r + A.borderLeftWidth, n + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + s), -(A.borderTopWidth + A.borderBottomWidth + n + i));
}, Ld = (t, A) => t === 0 ? A.bounds : t === 2 ? St(A) : Qc(A), vd = (t, A) => t === 0 ? A.bounds : t === 2 ? St(A) : Qc(A), Zs = (t, A, e) => {
  const r = Ld(We(t.styles.backgroundOrigin, A), t), s = vd(We(t.styles.backgroundClip, A), t), n = Dd(We(t.styles.backgroundSize, A), e, r);
  let [i, o] = n;
  const a = Ft(We(t.styles.backgroundPosition, A), r.width - i, r.height - o), c = Kd(We(t.styles.backgroundRepeat, A), a, n, r, s), l = Math.round(r.left + a[0]), B = Math.round(r.top + a[1]);
  return i = Math.max(1, i), o = Math.max(1, o), [c, l, B, i, o];
}, $e = (t) => H(t) && t.value === qe.AUTO, mr = (t) => typeof t == "number", Dd = (t, [A, e, r], s) => {
  const [n, i] = t;
  if (!n)
    return [0, 0];
  if (_(n) && i && _(i))
    return [I(n, s.width), I(i, s.height)];
  const o = mr(r);
  if (H(n) && (n.value === qe.CONTAIN || n.value === qe.COVER))
    return mr(r) ? s.width / s.height < r != (n.value === qe.COVER) ? [s.width, s.width / r] : [s.height * r, s.height] : [s.width, s.height];
  const a = mr(A), c = mr(e), l = a || c;
  if ($e(n) && (!i || $e(i))) {
    if (a && c)
      return [A, e];
    if (!o && !l)
      return [s.width, s.height];
    if (l && o) {
      const d = a ? A : e * r, U = c ? e : A / r;
      return [d, U];
    }
    const u = a ? A : s.width, f = c ? e : s.height;
    return [u, f];
  }
  if (o) {
    let u = 0, f = 0;
    return _(n) ? u = I(n, s.width) : _(i) && (f = I(i, s.height)), $e(n) ? u = f * r : (!i || $e(i)) && (f = u / r), [u, f];
  }
  let B = null, g = null;
  if (_(n) ? B = I(n, s.width) : i && _(i) && (g = I(i, s.height)), B !== null && (!i || $e(i)) && (g = a && c ? B / A * e : s.height), g !== null && $e(n) && (B = a && c ? g / e * A : s.width), B !== null && g !== null)
    return [B, g];
  throw new Error("Unable to calculate background-size for element");
}, We = (t, A) => {
  const e = t[A];
  return typeof e > "u" ? t[0] : e;
}, Kd = (t, [A, e], [r, s], n, i) => {
  switch (t) {
    case 2:
      return [
        new C(Math.round(n.left), Math.round(n.top + e)),
        new C(Math.round(n.left + n.width), Math.round(n.top + e)),
        new C(Math.round(n.left + n.width), Math.round(s + n.top + e)),
        new C(Math.round(n.left), Math.round(s + n.top + e))
      ];
    case 3:
      return [
        new C(Math.round(n.left + A), Math.round(n.top)),
        new C(Math.round(n.left + A + r), Math.round(n.top)),
        new C(Math.round(n.left + A + r), Math.round(n.height + n.top)),
        new C(Math.round(n.left + A), Math.round(n.height + n.top))
      ];
    case 1:
      return [
        new C(Math.round(n.left + A), Math.round(n.top + e)),
        new C(Math.round(n.left + A + r), Math.round(n.top + e)),
        new C(Math.round(n.left + A + r), Math.round(n.top + e + s)),
        new C(Math.round(n.left + A), Math.round(n.top + e + s))
      ];
    default:
      return [
        new C(Math.round(i.left), Math.round(i.top)),
        new C(Math.round(i.left + i.width), Math.round(i.top)),
        new C(Math.round(i.left + i.width), Math.round(i.height + i.top)),
        new C(Math.round(i.left), Math.round(i.height + i.top))
      ];
  }
}, kd = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", No = "Hidden Text";
class Rd {
  constructor(A) {
    this._data = {}, this._document = A;
  }
  parseMetrics(A, e) {
    const r = this._document.createElement("div"), s = this._document.createElement("img"), n = this._document.createElement("span"), i = this._document.body;
    r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = e, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), s.src = kd, s.width = 1, s.height = 1, s.style.margin = "0", s.style.padding = "0", s.style.verticalAlign = "baseline", n.style.fontFamily = A, n.style.fontSize = e, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode(No)), r.appendChild(n), r.appendChild(s);
    const o = s.offsetTop - n.offsetTop + 2;
    r.removeChild(n), r.appendChild(this._document.createTextNode(No)), r.style.lineHeight = "normal", s.style.verticalAlign = "super";
    const a = s.offsetTop - r.offsetTop + 2;
    return i.removeChild(r), { baseline: o, middle: a };
  }
  getMetrics(A, e) {
    const r = `${A} ${e}`;
    return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, e)), this._data[r];
  }
}
class Cc {
  constructor(A, e) {
    this.context = A, this.options = e;
  }
}
class Md {
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
      r.type === 0 ? await this.renderBackgroundURLImage(A, r, e) : ug(r) ? this.renderLinearGradient(A, r, e) : fg(r) && this.renderRadialGradient(A, r, e), e--;
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
      const i = isNaN(s.width) || s.width === 0 ? 1 : s.width, o = isNaN(s.height) || s.height === 0 ? 1 : s.height, [a, c, l, B, g] = Zs(A, r, [
        i,
        o,
        i / o
      ]), u = this.ctx.createPattern(this.resizeImage(s, B, g, A.styles.imageRendering), "repeat");
      this.renderRepeat(a, u, c, l);
    }
  }
  /**
   * Render a linear gradient background
   */
  renderLinearGradient(A, e, r) {
    const [s, n, i, o, a] = Zs(A, r, [null, null, null]), [c, l, B, g, u] = cg(e.angle, o, a), d = (this.canvas.ownerDocument ?? document).createElement("canvas");
    d.width = o, d.height = a;
    const U = d.getContext("2d"), x = U.createLinearGradient(l, g, B, u);
    if (io(e.stops, c || 1).forEach((Q) => x.addColorStop(Q.stop, $(Q.color))), U.fillStyle = x, U.fillRect(0, 0, o, a), o > 0 && a > 0) {
      const Q = this.ctx.createPattern(d, "repeat");
      this.renderRepeat(s, Q, n, i);
    }
  }
  /**
   * Render a radial gradient background
   */
  renderRadialGradient(A, e, r) {
    const [s, n, i, o, a] = Zs(A, r, [null, null, null]), c = e.position.length === 0 ? [me] : e.position, l = I(c[0], o), B = I(c[c.length - 1], a);
    let [g, u] = lg(e, l, B, o, a);
    if ((g === 0 || u === 0) && (g = Math.max(g, 0.01), u = Math.max(u, 0.01)), g > 0 && u > 0) {
      const f = this.ctx.createRadialGradient(n + l, i + B, 0, n + l, i + B, g);
      if (io(e.stops, g * 2).forEach((d) => f.addColorStop(d.stop, $(d.color))), this.path(s), this.ctx.fillStyle = f, g !== u) {
        const d = A.bounds.left + 0.5 * A.bounds.width, U = A.bounds.top + 0.5 * A.bounds.height, x = u / g, Q = 1 / x;
        this.ctx.save(), this.ctx.translate(d, U), this.ctx.transform(1, 0, 0, x, 0, 0), this.ctx.translate(-d, -U), this.ctx.fillRect(n, Q * (i - U) + U, o, a * Q), this.ctx.restore();
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
    return s === xA.PIXELATED || s === xA.CRISP_EDGES ? (this.context.logger.debug("Disabling image smoothing for background image due to CSS image-rendering"), o.imageSmoothingEnabled = !1) : s === xA.SMOOTH ? (this.context.logger.debug("Enabling image smoothing for background image due to CSS image-rendering: smooth"), o.imageSmoothingEnabled = !0) : o.imageSmoothingEnabled = this.ctx.imageSmoothingEnabled, this.ctx.imageSmoothingQuality && (o.imageSmoothingQuality = this.ctx.imageSmoothingQuality), o.drawImage(A, 0, 0, A.width, A.height, 0, 0, e, r), i;
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
const Po = (t, A) => {
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
}, _d = (t, A) => {
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
}, Od = (t, A) => {
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
}, Nd = (t, A) => {
  switch (A) {
    case 0:
      return Fr(t.topLeftBorderStroke, t.topRightBorderStroke);
    case 1:
      return Fr(t.topRightBorderStroke, t.bottomRightBorderStroke);
    case 2:
      return Fr(t.bottomRightBorderStroke, t.bottomLeftBorderStroke);
    case 3:
    default:
      return Fr(t.bottomLeftBorderStroke, t.topLeftBorderStroke);
  }
}, Fr = (t, A) => {
  const e = [];
  return FA(t) ? e.push(t.subdivide(0.5, !1)) : e.push(t), FA(A) ? e.push(A.subdivide(0.5, !0)) : e.push(A), e;
}, TA = (t, A, e, r) => {
  const s = [];
  return FA(t) ? s.push(t.subdivide(0.5, !1)) : s.push(t), FA(e) ? s.push(e.subdivide(0.5, !0)) : s.push(e), FA(r) ? s.push(r.subdivide(0.5, !0).reverse()) : s.push(r), FA(A) ? s.push(A.subdivide(0.5, !1).reverse()) : s.push(A), s;
};
class Pd {
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
    this.pathCallbacks.path(Po(r, e)), this.ctx.fillStyle = $(A), this.ctx.fill();
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
    const n = _d(s, r);
    this.pathCallbacks.path(n), this.ctx.fillStyle = $(A), this.ctx.fill();
    const i = Od(s, r);
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
    const i = Nd(s, r), o = Po(s, r);
    n === 2 && (this.pathCallbacks.path(o), this.ctx.clip());
    let a, c, l, B;
    FA(o[0]) ? (a = o[0].start.x, c = o[0].start.y) : (a = o[0].x, c = o[0].y), FA(o[1]) ? (l = o[1].end.x, B = o[1].end.y) : (l = o[1].x, B = o[1].y);
    let g;
    r === 0 || r === 2 ? g = Math.abs(a - l) : g = Math.abs(c - B), this.ctx.beginPath(), n === 3 ? this.pathCallbacks.formatPath(i) : this.pathCallbacks.formatPath(o.slice(0, 2));
    let u = e < 3 ? e * 3 : e * 2, f = e < 3 ? e * 2 : e;
    n === 3 && (u = e, f = e);
    let d = !0;
    if (g <= u * 2)
      d = !1;
    else if (g <= u * 2 + f) {
      const U = g / (2 * u + f);
      u *= U, f *= U;
    } else {
      const U = Math.floor((g + f) / (u + f)), x = (g - U * u) / (U - 1), Q = (g - (U + 1) * u) / U;
      f = Q <= 0 || Math.abs(f - x) < Math.abs(f - Q) ? x : Q;
    }
    if (d && (n === 3 ? this.ctx.setLineDash([0, u + f]) : this.ctx.setLineDash([u, f])), n === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = e) : this.ctx.lineWidth = e * 2 + 1.1, this.ctx.strokeStyle = $(A), this.ctx.stroke(), this.ctx.setLineDash([]), n === 2) {
      if (FA(o[0])) {
        const U = o[3], x = o[0];
        this.ctx.beginPath(), this.pathCallbacks.formatPath([
          new C(U.end.x, U.end.y),
          new C(x.start.x, x.start.y)
        ]), this.ctx.stroke();
      }
      if (FA(o[1])) {
        const U = o[1], x = o[2];
        this.ctx.beginPath(), this.pathCallbacks.formatPath([
          new C(U.end.x, U.end.y),
          new C(x.start.x, x.start.y)
        ]), this.ctx.stroke();
      }
    }
    this.ctx.restore();
  }
}
class $d {
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
    this.ctx.save(), yd(A) ? this.ctx.globalAlpha = A.opacity : xd(A) ? (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)) : fc(A) ? (this.pathCallback.path(A.path), this.ctx.clip()) : Id(A) && A.applyClip(this.ctx), this.activeEffects.push(A);
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
const Gd = ["-apple-system", "system-ui"], Vd = /[\u2E80-\u2FFF\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF\uFF01-\uFFEF]/, Xd = (t) => Vd.test(t), Wd = () => {
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
}, zd = (t) => {
  const A = Wd();
  return A !== null && A >= 15 && A < 17 ? t.map((e) => Gd.indexOf(e) !== -1 ? '-apple-system, "Helvetica Neue", Arial, sans-serif' : e) : t;
};
class Jd {
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
    const n = Rr(A.text), i = A.bounds.top + r;
    let o = A.bounds.left;
    for (const a of n) {
      if (Xd(a)) {
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
          this.ctx.fillStyle = $(e.color), this.renderTextWithLetterSpacing(A, e.letterSpacing, e.fontSize.number);
          break;
        case 1:
          e.webkitTextStrokeWidth && A.text.trim().length && (this.ctx.strokeStyle = $(e.webkitTextStrokeColor), this.ctx.lineWidth = e.webkitTextStrokeWidth, this.ctx.lineJoin = typeof window < "u" && window.chrome ? "miter" : "round", e.letterSpacing === 0 ? this.ctx.strokeText(A.text, A.bounds.left, A.bounds.top + e.fontSize.number) : this.iterateLettersWithLetterSpacing(A, e.letterSpacing, e.fontSize.number, (n, i, o) => this.ctx.strokeText(n, i, o)), this.ctx.strokeStyle = "", this.ctx.lineWidth = 0, this.ctx.lineJoin = "miter");
          break;
      }
    });
  }
  renderTextDecoration(A, e) {
    this.ctx.fillStyle = $(e.textDecorationColor || e.color);
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
            const B = Math.min(c + a / 2, A + r);
            this.ctx.quadraticCurveTo(c + a / 4, e + s / 2 + o, B, e + s / 2), c = B;
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
    const n = this.ctx.measureText("…").width, i = Rr(A);
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
    const e = A.fontVariant.filter((n) => n === "normal" || n === "small-caps").join(""), r = zd(A.fontFamily).join(", "), s = GA(A.fontSize) ? `${A.fontSize.number}${A.fontSize.unit}` : `${A.fontSize.number}px`;
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
      const B = [];
      let g = [], u = A.textBounds[0].bounds.top;
      A.textBounds.forEach((d) => {
        Math.abs(d.bounds.top - u) >= i * 0.5 ? (g.length > 0 && B.push(g), g = [d], u = d.bounds.top) : g.push(d);
      }), g.length > 0 && B.push(g);
      const f = e.webkitLineClamp;
      if (B.length > f) {
        for (let U = 0; U < f - 1; U++)
          B[U].forEach((x) => {
            this.renderTextBoundWithPaintOrder(x, e, n);
          });
        const d = B[f - 1];
        if (d && d.length > 0 && r) {
          const U = d.map((E) => E.text).join(""), x = d[0], Q = r.width - (x.bounds.left - r.left), F = this.truncateTextWithEllipsis(U, Q, e.letterSpacing), b = new xe(F, x.bounds);
          n.forEach((E) => {
            switch (E) {
              case 0:
                this.ctx.fillStyle = $(e.color), e.letterSpacing === 0 ? this.ctx.fillText(F, x.bounds.left, x.bounds.top + e.fontSize.number) : this.iterateLettersWithLetterSpacing(b, e.letterSpacing, e.fontSize.number, (K, X, aA) => this.ctx.fillText(K, X, aA));
                break;
              case 1:
                e.webkitTextStrokeWidth && F.trim().length && (this.ctx.strokeStyle = $(e.webkitTextStrokeColor), this.ctx.lineWidth = e.webkitTextStrokeWidth, this.ctx.lineJoin = typeof window < "u" && window.chrome ? "miter" : "round", e.letterSpacing === 0 ? this.ctx.strokeText(F, x.bounds.left, x.bounds.top + e.fontSize.number) : this.iterateLettersWithLetterSpacing(b, e.letterSpacing, e.fontSize.number, (K, X, aA) => this.ctx.strokeText(K, X, aA)), this.ctx.strokeStyle = "", this.ctx.lineWidth = 0, this.ctx.lineJoin = "miter");
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
      const B = A.textBounds[0].bounds.top;
      if (A.textBounds.every((u) => Math.abs(u.bounds.top - B) < i * 0.5)) {
        let u = A.textBounds.map((U) => U.text).join("");
        u = u.replace(/\s+/g, " ").trim();
        const f = this.ctx.measureText(u).width, d = r.width;
        f > d && (c = !0, l = this.truncateTextWithEllipsis(u, d, e.letterSpacing));
      }
    }
    if (c) {
      const B = A.textBounds[0], g = new xe(l, B.bounds);
      n.forEach((u) => {
        switch (u) {
          case 0: {
            this.ctx.fillStyle = $(e.color), e.letterSpacing === 0 ? this.ctx.fillText(l, B.bounds.left, B.bounds.top + e.fontSize.number) : this.iterateLettersWithLetterSpacing(g, e.letterSpacing, e.fontSize.number, (d, U, x) => this.ctx.fillText(d, U, x));
            const f = e.textShadow;
            f.length && l.trim().length && (f.slice(0).reverse().forEach((d) => {
              this.ctx.shadowColor = $(d.color), this.ctx.shadowOffsetX = d.offsetX.number * this.options.scale, this.ctx.shadowOffsetY = d.offsetY.number * this.options.scale, this.ctx.shadowBlur = d.blur.number, e.letterSpacing === 0 ? this.ctx.fillText(l, B.bounds.left, B.bounds.top + e.fontSize.number) : this.iterateLettersWithLetterSpacing(g, e.letterSpacing, e.fontSize.number, (U, x, Q) => this.ctx.fillText(U, x, Q));
            }), this.ctx.shadowColor = "", this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.shadowBlur = 0);
            break;
          }
          case 1:
            e.webkitTextStrokeWidth && l.trim().length && (this.ctx.strokeStyle = $(e.webkitTextStrokeColor), this.ctx.lineWidth = e.webkitTextStrokeWidth, this.ctx.lineJoin = typeof window < "u" && window.chrome ? "miter" : "round", e.letterSpacing === 0 ? this.ctx.strokeText(l, B.bounds.left, B.bounds.top + e.fontSize.number) : this.iterateLettersWithLetterSpacing(g, e.letterSpacing, e.fontSize.number, (f, d, U) => this.ctx.strokeText(f, d, U)), this.ctx.strokeStyle = "", this.ctx.lineWidth = 0, this.ctx.lineJoin = "miter");
            break;
        }
      });
      return;
    }
    A.textBounds.forEach((B) => {
      n.forEach((g) => {
        switch (g) {
          case 0: {
            this.ctx.fillStyle = $(e.color), this.renderTextWithLetterSpacing(B, e.letterSpacing, e.fontSize.number);
            const u = e.textShadow;
            u.length && B.text.trim().length && (u.slice(0).reverse().forEach((f) => {
              this.ctx.shadowColor = $(f.color), this.ctx.shadowOffsetX = f.offsetX.number * this.options.scale, this.ctx.shadowOffsetY = f.offsetY.number * this.options.scale, this.ctx.shadowBlur = f.blur.number, this.renderTextWithLetterSpacing(B, e.letterSpacing, e.fontSize.number);
            }), this.ctx.shadowColor = "", this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.shadowBlur = 0), e.textDecorationLine.length && this.renderTextDecoration(B.bounds, e);
            break;
          }
          case 1: {
            if (e.webkitTextStrokeWidth && B.text.trim().length) {
              this.ctx.strokeStyle = $(e.webkitTextStrokeColor), this.ctx.lineWidth = e.webkitTextStrokeWidth, this.ctx.lineJoin = typeof window < "u" && window.chrome ? "miter" : "round";
              const u = e.fontSize.number;
              e.letterSpacing === 0 ? this.ctx.strokeText(B.text, B.bounds.left, B.bounds.top + u) : this.iterateLettersWithLetterSpacing(B, e.letterSpacing, u, (f, d, U) => this.ctx.strokeText(f, d, U)), this.ctx.strokeStyle = "", this.ctx.lineWidth = 0, this.ctx.lineJoin = "miter";
            }
            break;
          }
        }
      });
    });
  }
}
const Yd = 1e4;
class Nn extends Cc {
  constructor(A, e) {
    super(A, e), this.canvas = e.canvas ? e.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), e.canvas || (this.canvas.width = Math.floor(e.width * e.scale), this.canvas.height = Math.floor(e.height * e.scale), this.canvas.style.width = `${e.width}px`, this.canvas.style.height = `${e.height}px`), this.fontMetrics = new Rd(document), this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-e.x, -e.y), this.ctx.textBaseline = "bottom", e.imageSmoothing !== void 0 && (this.ctx.imageSmoothingEnabled = e.imageSmoothing), e.imageSmoothingQuality && (this.ctx.imageSmoothingQuality = e.imageSmoothingQuality), this.backgroundRenderer = new Md({
      ctx: this.ctx,
      context: this.context,
      canvas: this.canvas,
      options: {
        width: e.width,
        height: e.height,
        scale: e.scale
      }
    }), this.borderRenderer = new Pd({ ctx: this.ctx }, {
      path: (r) => this.path(r),
      formatPath: (r) => this.formatPath(r)
    }), this.effectsRenderer = new $d({ ctx: this.ctx }, { path: (r) => this.path(r) }), this.textRenderer = new Jd({
      ctx: this.ctx,
      context: this.context,
      options: { scale: e.scale }
    }), this.context.logger.debug(`Canvas renderer initialized (${e.width}x${e.height}) with scale ${e.scale}`);
  }
  async renderStack(A) {
    A.element.container.styles.isVisible() && await this.renderStackContent(A);
  }
  async renderNode(A) {
    if (W(
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
      const i = St(A), o = $r(e);
      this.path(o), this.ctx.save(), this.ctx.clip();
      let a = 0, c = 0, l = s, B = n, g = i.left, u = i.top, f = i.width, d = i.height;
      const { objectFit: U } = A.styles, x = f / d, Q = l / B;
      if (U === 2)
        Q > x ? (d = f / Q, u += (i.height - d) / 2) : (f = d * Q, g += (i.width - f) / 2);
      else if (U === 4)
        Q > x ? (l = B * x, a += (s - l) / 2) : (B = l / x, c += (n - B) / 2);
      else if (U === 8)
        l > f ? (a += (l - f) / 2, l = f) : (g += (f - l) / 2, f = l), B > d ? (c += (B - d) / 2, B = d) : (u += (d - B) / 2, d = B);
      else if (U === 16) {
        const F = Q > x ? f : d * Q, b = l > f ? l : f;
        F < b ? Q > x ? (d = f / Q, u += (i.height - d) / 2) : (f = d * Q, g += (i.width - f) / 2) : (l > f ? (a += (l - f) / 2, l = f) : (g += (f - l) / 2, f = l), B > d ? (c += (B - d) / 2, B = d) : (u += (d - B) / 2, d = B));
      }
      this.ctx.drawImage(r, a, c, l, B, g, u, f, d), this.ctx.restore();
    }
  }
  async renderNodeContent(A) {
    this.effectsRenderer.applyEffects(A.getEffects(
      4
      /* EffectTarget.CONTENT */
    ));
    const e = A.container, r = A.curves, s = e.styles, n = St(e);
    for (const i of e.textNodes)
      await this.textRenderer.renderTextNode(i, s, n);
    if (e instanceof tc)
      try {
        const i = await this.context.cache.match(e.src), o = this.ctx.imageSmoothingEnabled;
        s.imageRendering === xA.PIXELATED || s.imageRendering === xA.CRISP_EDGES ? (this.context.logger.debug(`Disabling image smoothing for ${e.src} due to CSS image-rendering: ${s.imageRendering === xA.PIXELATED ? "pixelated" : "crisp-edges"}`), this.ctx.imageSmoothingEnabled = !1) : s.imageRendering === xA.SMOOTH && (this.context.logger.debug(`Enabling image smoothing for ${e.src} due to CSS image-rendering: smooth`), this.ctx.imageSmoothingEnabled = !0), this.renderReplacedElement(e, r, i), this.ctx.imageSmoothingEnabled = o;
      } catch {
        this.context.logger.error(`Error loading image ${e.src}`);
      }
    if (e instanceof rc && this.renderReplacedElement(e, r, e.canvas), e instanceof sc)
      try {
        const i = await this.context.cache.match(e.svg);
        this.renderReplacedElement(e, r, i);
      } catch {
        this.context.logger.error(`Error loading svg ${e.svg.substring(0, 255)}`);
      }
    if (e instanceof ac && e.tree) {
      const o = await new Nn(this.context, {
        scale: this.options.scale,
        backgroundColor: e.backgroundColor,
        x: 0,
        y: 0,
        width: e.width,
        height: e.height
      }).render(e.tree);
      e.width && e.height && this.ctx.drawImage(o, 0, 0, e.width, e.height, e.bounds.left, e.bounds.top, e.bounds.width, e.bounds.height);
    }
    if (e instanceof Ht) {
      const i = Math.min(e.bounds.width, e.bounds.height);
      e.type === Mr ? e.checked && (this.ctx.save(), this.path([
        new C(e.bounds.left + i * 0.39363, e.bounds.top + i * 0.79),
        new C(e.bounds.left + i * 0.16, e.bounds.top + i * 0.5549),
        new C(e.bounds.left + i * 0.27347, e.bounds.top + i * 0.44071),
        new C(e.bounds.left + i * 0.39694, e.bounds.top + i * 0.5649),
        new C(e.bounds.left + i * 0.72983, e.bounds.top + i * 0.23),
        new C(e.bounds.left + i * 0.84, e.bounds.top + i * 0.34085),
        new C(e.bounds.left + i * 0.39363, e.bounds.top + i * 0.79)
      ]), this.ctx.fillStyle = $(Io), this.ctx.fill(), this.ctx.restore()) : e.type === _r && e.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(e.bounds.left + i / 2, e.bounds.top + i / 2, i / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = $(Io), this.ctx.fill(), this.ctx.restore());
    }
    if (Zd(e) && e.value.length) {
      const [i, o, a] = this.textRenderer.createFontStyle(s), { baseline: c } = this.fontMetrics.getMetrics(o, a);
      this.ctx.font = i;
      const l = e instanceof Ht && e.isPlaceholder;
      this.ctx.fillStyle = $(l ? Ad : s.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = jd(e.styles.textAlign);
      const B = St(e);
      let g = 0;
      switch (e.styles.textAlign) {
        case 1:
          g += B.width / 2;
          break;
        case 2:
          g += B.width;
          break;
      }
      let u = 0;
      if (e instanceof Ht) {
        const d = I(s.fontSize, 0);
        u = (B.height - d) / 2;
      }
      const f = B.add(g, u, 0, 0);
      this.ctx.save(), this.path([
        new C(B.left, B.top),
        new C(B.left + B.width, B.top),
        new C(B.left + B.width, B.top + B.height),
        new C(B.left, B.top + B.height)
      ]), this.ctx.clip(), this.textRenderer.renderTextWithLetterSpacing(new xe(e.value, f), s.letterSpacing, c), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
    }
    if (W(
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
        this.ctx.font = i, this.ctx.fillStyle = $(s.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right";
        const o = new dA(e.bounds.left, e.bounds.top + I(e.styles.paddingTop, e.bounds.width), e.bounds.width, ao(s.lineHeight, s.fontSize.number) / 2 + 1);
        this.textRenderer.renderTextWithLetterSpacing(new xe(A.listValue, o), s.letterSpacing, ao(s.lineHeight, s.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left";
      }
    }
  }
  async renderStackContent(A) {
    if (W(
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
    ], n = qd(We(e.backgroundClip, 0), A.curves);
    (r || e.boxShadow.length) && (this.ctx.save(), this.path(n), this.ctx.clip(), ae(e.backgroundColor) || (this.ctx.fillStyle = $(e.backgroundColor), this.ctx.fill()), await this.backgroundRenderer.renderBackgroundImage(A.container), this.ctx.restore(), e.boxShadow.slice(0).reverse().forEach((o) => {
      this.ctx.save();
      const a = Pr(A.curves), c = o.inset ? 0 : Yd, l = Hd(a, -c + (o.inset ? 1 : -1) * o.spread.number, (o.inset ? 1 : -1) * o.spread.number, o.spread.number * (o.inset ? -2 : 2), o.spread.number * (o.inset ? -2 : 2));
      o.inset ? (this.path(a), this.ctx.clip(), this.mask(l)) : (this.mask(a), this.ctx.clip(), this.path(l)), this.ctx.shadowOffsetX = o.offsetX.number + c, this.ctx.shadowOffsetY = o.offsetY.number, this.ctx.shadowColor = $(o.color), this.ctx.shadowBlur = o.blur.number, this.ctx.fillStyle = o.inset ? $(o.color) : "rgba(0,0,0,1)", this.ctx.fill(), this.ctx.restore();
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
    this.options.backgroundColor && (this.ctx.fillStyle = $(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height));
    const e = Sd(A);
    return await this.renderStack(e), this.effectsRenderer.applyEffects([]), this.canvas;
  }
}
const Zd = (t) => t instanceof oc || t instanceof ic ? !0 : t instanceof Ht && t.type !== _r && t.type !== Mr, qd = (t, A) => {
  switch (t) {
    case 0:
      return Pr(A);
    case 2:
      return Ed(A);
    case 1:
    default:
      return $r(A);
  }
}, jd = (t) => {
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
class Ap extends Cc {
  constructor(A, e) {
    super(A, e), this.canvas = e.canvas ? e.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.options = e, this.canvas.width = Math.floor(e.width * e.scale), this.canvas.height = Math.floor(e.height * e.scale), this.canvas.style.width = `${e.width}px`, this.canvas.style.height = `${e.height}px`, this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-e.x, -e.y), this.context.logger.debug(`EXPERIMENTAL ForeignObject renderer initialized (${e.width}x${e.height} at ${e.x},${e.y}) with scale ${e.scale}`);
  }
  async render(A) {
    const e = Fn(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A), r = await ep(e);
    return this.options.backgroundColor && (this.ctx.fillStyle = $(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(r, -this.options.x * this.options.scale, -this.options.y * this.options.scale), this.canvas;
  }
}
const ep = (t) => new Promise((A, e) => {
  const r = new Image();
  r.onload = () => {
    A(r);
  }, r.onerror = e, r.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(t))}`;
});
class Uc {
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
Uc.instances = {};
class tp {
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
    if (js(A) || ip(A)) {
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
    const e = this.context.originChecker, r = (a) => e.isSameOrigin(a), s = typeof this._options.customIsSameOrigin == "function" ? await this._options.customIsSameOrigin(A, r) : r(A), n = !qs(A) && this._options.useCORS === !0 && BA.SUPPORT_CORS_IMAGES && !s, i = !qs(A) && !s && !js(A) && typeof this._options.proxy == "string" && BA.SUPPORT_CORS_XHR && !n;
    if (!s && this._options.allowTaint === !1 && !qs(A) && !js(A) && !i && !n)
      return;
    let o = A;
    return i && (o = await this.proxy(o)), this.context.logger.debug(`Added image ${A.substring(0, 256)}`), await new Promise((a, c) => {
      const l = new Image();
      l.onload = () => a(l), l.onerror = c, (op(o) || n) && (l.crossOrigin = "anonymous"), l.src = o, l.complete === !0 && setTimeout(() => a(l), 500), this._options.imageTimeout > 0 && setTimeout(() => c(`Timed out (${this._options.imageTimeout}ms) loading image`), this._options.imageTimeout);
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
const rp = /^data:image\/svg\+xml/i, sp = /^data:image\/.*;base64,/i, np = /^data:image\/.*/i, ip = (t) => BA.SUPPORT_SVG_DRAWING || !ap(t), qs = (t) => np.test(t), op = (t) => sp.test(t), js = (t) => t.substr(0, 4) === "blob", ap = (t) => t.substr(-3).toLowerCase() === "svg" || rp.test(t);
class cp {
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
class cs {
  constructor(A, e, r) {
    this.windowBounds = e, this.instanceName = `#${cs.instanceCount++}`, this.config = r, this.logger = new Uc({ id: this.instanceName, enabled: A.logging }), this.originChecker = new cp(r.window), this.cache = A.cache ?? r.cache ?? new tp(this, A);
  }
}
cs.instanceCount = 1;
class Pt {
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
    return new Pt({
      window: s,
      ...e
    });
  }
  /**
   * Clone configuration with override options
   */
  clone(A = {}) {
    return new Pt({
      window: A.window || this.window,
      cspNonce: A.cspNonce ?? this.cspNonce,
      cache: A.cache ?? this.cache
    });
  }
}
function lp(t) {
  console.warn("[html2canvas-pro] setDefaultConfig is deprecated. Pass configuration to html2canvas directly.");
}
class Bp {
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
function hp(t = {}) {
  return new Bp({
    allowDataUrls: !0,
    maxImageTimeout: 3e5,
    // 5 minutes
    ...t
  });
}
class gp {
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
const Tn = (t, A = {}, e) => {
  const r = e || Pt.fromElement(t, {
    cspNonce: A.cspNonce,
    cache: A.cache
  });
  return dp(t, A, r);
}, up = (t) => {
  console.warn('[html2canvas-pro] setCspNonce is deprecated. Pass cspNonce in options instead: html2canvas(element, { cspNonce: "..." })'), typeof window < "u" && lp(new Pt({ window, cspNonce: t }));
};
Tn.setCspNonce = up;
const fp = (t) => {
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
}, dp = async (t, A, e) => {
  if (fp(A), !A.skipValidation) {
    const XA = A.validator || hp(), ue = XA.validateElement(t);
    if (!ue.valid)
      throw new Error(ue.error);
    const Jt = XA.validateOptions(A);
    if (!Jt.valid)
      throw new Error(`Invalid options: ${Jt.error}`);
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
  }, o = 800, a = 600, c = 0, l = s, B = {
    windowWidth: A.windowWidth ?? l.innerWidth ?? o,
    windowHeight: A.windowHeight ?? l.innerHeight ?? a,
    scrollX: A.scrollX ?? l.pageXOffset ?? c,
    scrollY: A.scrollY ?? l.pageYOffset ?? c
  }, g = new dA(B.scrollX, B.scrollY, B.windowWidth, B.windowHeight), u = new cs(i, g, e), f = A.enablePerformanceMonitoring ?? A.logging ?? !1, d = new gp(u, f);
  d.start("total", {
    width: B.windowWidth,
    height: B.windowHeight
  });
  const U = A.foreignObjectRendering ?? !1, x = {
    allowTaint: A.allowTaint ?? !1,
    onclone: A.onclone,
    ignoreElements: A.ignoreElements,
    iframeContainer: A.iframeContainer,
    inlineImages: U,
    copyStyles: U,
    cspNonce: A.cspNonce ?? e.cspNonce
  };
  u.logger.debug(`Starting document clone with size ${g.width}x${g.height} scrolled to ${-g.left},${-g.top}`), d.start("clone");
  const Q = new ko(u, t, x), F = Q.clonedReferenceElement;
  if (!F)
    throw new Error("Unable to find element in cloned iframe");
  const b = await Q.toIFrame(r, g);
  d.end("clone");
  const { width: E, height: K, left: X, top: aA } = On(F) || nd(F) ? ml(F.ownerDocument) : Jr(u, F), G = pp(u, F, A.backgroundColor), Ae = {
    canvas: A.canvas,
    backgroundColor: G,
    scale: A.scale ?? s.devicePixelRatio ?? 1,
    x: (A.x ?? 0) + X,
    y: (A.y ?? 0) + aA,
    width: A.width ?? Math.ceil(E),
    height: A.height ?? Math.ceil(K),
    imageSmoothing: A.imageSmoothing,
    imageSmoothingQuality: A.imageSmoothingQuality
  };
  let sA, LA;
  try {
    return U ? (u.logger.debug("Document cloned, using foreign object rendering"), d.start("render-foreignobject"), sA = await new Ap(u, Ae).render(F), d.end("render-foreignobject")) : (u.logger.debug(`Document cloned, element located at ${X},${aA} with size ${E}x${K} using computed rendering`), u.logger.debug("Starting DOM parsing"), d.start("parse"), LA = lc(u, F), d.end("parse"), G === LA.styles.backgroundColor && (LA.styles.backgroundColor = $A.TRANSPARENT), u.logger.debug(`Starting renderer for element at ${Ae.x},${Ae.y} with size ${Ae.width}x${Ae.height}`), d.start("render"), sA = await new Nn(u, Ae).render(LA), d.end("render")), d.start("cleanup"), (A.removeContainer ?? !0) && (ko.destroy(b) || u.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), d.end("cleanup"), d.end("total"), u.logger.debug("Finished rendering"), f && d.logSummary(), sA;
  } finally {
    LA && LA.restoreTree();
  }
}, pp = (t, A, e) => {
  const r = A.ownerDocument, s = r.documentElement ? Ze(t, getComputedStyle(r.documentElement).backgroundColor) : $A.TRANSPARENT, n = r.body ? Ze(t, getComputedStyle(r.body).backgroundColor) : $A.TRANSPARENT, i = typeof e == "string" ? Ze(t, e) : e === null ? $A.TRANSPARENT : 4294967295;
  return A === r.documentElement ? ae(s) ? ae(n) ? i : n : s : i;
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Sr = globalThis, Pn = Sr.ShadowRoot && (Sr.ShadyCSS === void 0 || Sr.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $n = Symbol(), $o = /* @__PURE__ */ new WeakMap();
let mc = class {
  constructor(A, e, r) {
    if (this._$cssResult$ = !0, r !== $n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = A, this.t = e;
  }
  get styleSheet() {
    let A = this.o;
    const e = this.t;
    if (Pn && A === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (A = $o.get(e)), A === void 0 && ((this.o = A = new CSSStyleSheet()).replaceSync(this.cssText), r && $o.set(e, A));
    }
    return A;
  }
  toString() {
    return this.cssText;
  }
};
const wp = (t) => new mc(typeof t == "string" ? t : t + "", void 0, $n), Qp = (t, ...A) => {
  const e = t.length === 1 ? t[0] : A.reduce((r, s, n) => r + ((i) => {
    if (i._$cssResult$ === !0) return i.cssText;
    if (typeof i == "number") return i;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + i + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + t[n + 1], t[0]);
  return new mc(e, t, $n);
}, Cp = (t, A) => {
  if (Pn) t.adoptedStyleSheets = A.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of A) {
    const r = document.createElement("style"), s = Sr.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = e.cssText, t.appendChild(r);
  }
}, Go = Pn ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((A) => {
  let e = "";
  for (const r of A.cssRules) e += r.cssText;
  return wp(e);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Up, defineProperty: mp, getOwnPropertyDescriptor: Fp, getOwnPropertyNames: Ep, getOwnPropertySymbols: bp, getPrototypeOf: xp } = Object, le = globalThis, Vo = le.trustedTypes, yp = Vo ? Vo.emptyScript : "", Ip = le.reactiveElementPolyfillSupport, Lt = (t, A) => t, Gr = { toAttribute(t, A) {
  switch (A) {
    case Boolean:
      t = t ? yp : null;
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
} }, Gn = (t, A) => !Up(t, A), Xo = { attribute: !0, type: String, converter: Gr, reflect: !1, useDefault: !1, hasChanged: Gn };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), le.litPropertyMetadata ?? (le.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let ze = class extends HTMLElement {
  static addInitializer(A) {
    this._$Ei(), (this.l ?? (this.l = [])).push(A);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(A, e = Xo) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(A) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(A, e), !e.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(A, r, e);
      s !== void 0 && mp(this.prototype, A, s);
    }
  }
  static getPropertyDescriptor(A, e, r) {
    const { get: s, set: n } = Fp(this.prototype, A) ?? { get() {
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
    return this.elementProperties.get(A) ?? Xo;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Lt("elementProperties"))) return;
    const A = xp(this);
    A.finalize(), A.l !== void 0 && (this.l = [...A.l]), this.elementProperties = new Map(A.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Lt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Lt("properties"))) {
      const e = this.properties, r = [...Ep(e), ...bp(e)];
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
      for (const s of r) e.unshift(Go(s));
    } else A !== void 0 && e.push(Go(A));
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
    return Cp(A, this.constructor.elementStyles), A;
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
      const n = (r.converter?.toAttribute !== void 0 ? r.converter : Gr).toAttribute(e, r.type);
      this._$Em = A, n == null ? this.removeAttribute(s) : this.setAttribute(s, n), this._$Em = null;
    }
  }
  _$AK(A, e) {
    const r = this.constructor, s = r._$Eh.get(A);
    if (s !== void 0 && this._$Em !== s) {
      const n = r.getPropertyOptions(s), i = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : Gr;
      this._$Em = s;
      const o = i.fromAttribute(e, n.type);
      this[s] = o ?? this._$Ej?.get(s) ?? o, this._$Em = null;
    }
  }
  requestUpdate(A, e, r, s = !1, n) {
    if (A !== void 0) {
      const i = this.constructor;
      if (s === !1 && (n = this[A]), r ?? (r = i.getPropertyOptions(A)), !((r.hasChanged ?? Gn)(n, e) || r.useDefault && r.reflect && n === this._$Ej?.get(A) && !this.hasAttribute(i._$Eu(A, r)))) return;
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
ze.elementStyles = [], ze.shadowRootOptions = { mode: "open" }, ze[Lt("elementProperties")] = /* @__PURE__ */ new Map(), ze[Lt("finalized")] = /* @__PURE__ */ new Map(), Ip?.({ ReactiveElement: ze }), (le.reactiveElementVersions ?? (le.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vt = globalThis, Wo = (t) => t, Vr = vt.trustedTypes, zo = Vr ? Vr.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, Fc = "$lit$", ie = `lit$${Math.random().toFixed(9).slice(2)}$`, Ec = "?" + ie, Hp = `<${Ec}>`, ye = document, $t = () => ye.createComment(""), Gt = (t) => t === null || typeof t != "object" && typeof t != "function", Vn = Array.isArray, Tp = (t) => Vn(t) || typeof t?.[Symbol.iterator] == "function", An = `[ 	
\f\r]`, ft = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Jo = /-->/g, Yo = />/g, Qe = RegExp(`>|${An}(?:([^\\s"'>=/]+)(${An}*=${An}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Zo = /'/g, qo = /"/g, bc = /^(?:script|style|textarea|title)$/i, xc = (t) => (A, ...e) => ({ _$litType$: t, strings: A, values: e }), S = xc(1), uA = xc(2), Ie = Symbol.for("lit-noChange"), eA = Symbol.for("lit-nothing"), jo = /* @__PURE__ */ new WeakMap(), Fe = ye.createTreeWalker(ye, 129);
function yc(t, A) {
  if (!Vn(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return zo !== void 0 ? zo.createHTML(A) : A;
}
const Sp = (t, A) => {
  const e = t.length - 1, r = [];
  let s, n = A === 2 ? "<svg>" : A === 3 ? "<math>" : "", i = ft;
  for (let o = 0; o < e; o++) {
    const a = t[o];
    let c, l, B = -1, g = 0;
    for (; g < a.length && (i.lastIndex = g, l = i.exec(a), l !== null); ) g = i.lastIndex, i === ft ? l[1] === "!--" ? i = Jo : l[1] !== void 0 ? i = Yo : l[2] !== void 0 ? (bc.test(l[2]) && (s = RegExp("</" + l[2], "g")), i = Qe) : l[3] !== void 0 && (i = Qe) : i === Qe ? l[0] === ">" ? (i = s ?? ft, B = -1) : l[1] === void 0 ? B = -2 : (B = i.lastIndex - l[2].length, c = l[1], i = l[3] === void 0 ? Qe : l[3] === '"' ? qo : Zo) : i === qo || i === Zo ? i = Qe : i === Jo || i === Yo ? i = ft : (i = Qe, s = void 0);
    const u = i === Qe && t[o + 1].startsWith("/>") ? " " : "";
    n += i === ft ? a + Hp : B >= 0 ? (r.push(c), a.slice(0, B) + Fc + a.slice(B) + ie + u) : a + ie + (B === -2 ? o : u);
  }
  return [yc(t, n + (t[e] || "<?>") + (A === 2 ? "</svg>" : A === 3 ? "</math>" : "")), r];
};
class Vt {
  constructor({ strings: A, _$litType$: e }, r) {
    let s;
    this.parts = [];
    let n = 0, i = 0;
    const o = A.length - 1, a = this.parts, [c, l] = Sp(A, e);
    if (this.el = Vt.createElement(c, r), Fe.currentNode = this.el.content, e === 2 || e === 3) {
      const B = this.el.content.firstChild;
      B.replaceWith(...B.childNodes);
    }
    for (; (s = Fe.nextNode()) !== null && a.length < o; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const B of s.getAttributeNames()) if (B.endsWith(Fc)) {
          const g = l[i++], u = s.getAttribute(B).split(ie), f = /([.?@])?(.*)/.exec(g);
          a.push({ type: 1, index: n, name: f[2], strings: u, ctor: f[1] === "." ? vp : f[1] === "?" ? Dp : f[1] === "@" ? Kp : ls }), s.removeAttribute(B);
        } else B.startsWith(ie) && (a.push({ type: 6, index: n }), s.removeAttribute(B));
        if (bc.test(s.tagName)) {
          const B = s.textContent.split(ie), g = B.length - 1;
          if (g > 0) {
            s.textContent = Vr ? Vr.emptyScript : "";
            for (let u = 0; u < g; u++) s.append(B[u], $t()), Fe.nextNode(), a.push({ type: 2, index: ++n });
            s.append(B[g], $t());
          }
        }
      } else if (s.nodeType === 8) if (s.data === Ec) a.push({ type: 2, index: n });
      else {
        let B = -1;
        for (; (B = s.data.indexOf(ie, B + 1)) !== -1; ) a.push({ type: 7, index: n }), B += ie.length - 1;
      }
      n++;
    }
  }
  static createElement(A, e) {
    const r = ye.createElement("template");
    return r.innerHTML = A, r;
  }
}
function je(t, A, e = t, r) {
  if (A === Ie) return A;
  let s = r !== void 0 ? e._$Co?.[r] : e._$Cl;
  const n = Gt(A) ? void 0 : A._$litDirective$;
  return s?.constructor !== n && (s?._$AO?.(!1), n === void 0 ? s = void 0 : (s = new n(t), s._$AT(t, e, r)), r !== void 0 ? (e._$Co ?? (e._$Co = []))[r] = s : e._$Cl = s), s !== void 0 && (A = je(t, s._$AS(t, A.values), s, r)), A;
}
class Lp {
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
    const { el: { content: e }, parts: r } = this._$AD, s = (A?.creationScope ?? ye).importNode(e, !0);
    Fe.currentNode = s;
    let n = Fe.nextNode(), i = 0, o = 0, a = r[0];
    for (; a !== void 0; ) {
      if (i === a.index) {
        let c;
        a.type === 2 ? c = new Wt(n, n.nextSibling, this, A) : a.type === 1 ? c = new a.ctor(n, a.name, a.strings, this, A) : a.type === 6 && (c = new kp(n, this, A)), this._$AV.push(c), a = r[++o];
      }
      i !== a?.index && (n = Fe.nextNode(), i++);
    }
    return Fe.currentNode = ye, s;
  }
  p(A) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(A, r, e), e += r.strings.length - 2) : r._$AI(A[e])), e++;
  }
}
class Wt {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(A, e, r, s) {
    this.type = 2, this._$AH = eA, this._$AN = void 0, this._$AA = A, this._$AB = e, this._$AM = r, this.options = s, this._$Cv = s?.isConnected ?? !0;
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
    A = je(this, A, e), Gt(A) ? A === eA || A == null || A === "" ? (this._$AH !== eA && this._$AR(), this._$AH = eA) : A !== this._$AH && A !== Ie && this._(A) : A._$litType$ !== void 0 ? this.$(A) : A.nodeType !== void 0 ? this.T(A) : Tp(A) ? this.k(A) : this._(A);
  }
  O(A) {
    return this._$AA.parentNode.insertBefore(A, this._$AB);
  }
  T(A) {
    this._$AH !== A && (this._$AR(), this._$AH = this.O(A));
  }
  _(A) {
    this._$AH !== eA && Gt(this._$AH) ? this._$AA.nextSibling.data = A : this.T(ye.createTextNode(A)), this._$AH = A;
  }
  $(A) {
    const { values: e, _$litType$: r } = A, s = typeof r == "number" ? this._$AC(A) : (r.el === void 0 && (r.el = Vt.createElement(yc(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === s) this._$AH.p(e);
    else {
      const n = new Lp(s, this), i = n.u(this.options);
      n.p(e), this.T(i), this._$AH = n;
    }
  }
  _$AC(A) {
    let e = jo.get(A.strings);
    return e === void 0 && jo.set(A.strings, e = new Vt(A)), e;
  }
  k(A) {
    Vn(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, s = 0;
    for (const n of A) s === e.length ? e.push(r = new Wt(this.O($t()), this.O($t()), this, this.options)) : r = e[s], r._$AI(n), s++;
    s < e.length && (this._$AR(r && r._$AB.nextSibling, s), e.length = s);
  }
  _$AR(A = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); A !== this._$AB; ) {
      const r = Wo(A).nextSibling;
      Wo(A).remove(), A = r;
    }
  }
  setConnected(A) {
    this._$AM === void 0 && (this._$Cv = A, this._$AP?.(A));
  }
}
class ls {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(A, e, r, s, n) {
    this.type = 1, this._$AH = eA, this._$AN = void 0, this.element = A, this.name = e, this._$AM = s, this.options = n, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = eA;
  }
  _$AI(A, e = this, r, s) {
    const n = this.strings;
    let i = !1;
    if (n === void 0) A = je(this, A, e, 0), i = !Gt(A) || A !== this._$AH && A !== Ie, i && (this._$AH = A);
    else {
      const o = A;
      let a, c;
      for (A = n[0], a = 0; a < n.length - 1; a++) c = je(this, o[r + a], e, a), c === Ie && (c = this._$AH[a]), i || (i = !Gt(c) || c !== this._$AH[a]), c === eA ? A = eA : A !== eA && (A += (c ?? "") + n[a + 1]), this._$AH[a] = c;
    }
    i && !s && this.j(A);
  }
  j(A) {
    A === eA ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, A ?? "");
  }
}
class vp extends ls {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(A) {
    this.element[this.name] = A === eA ? void 0 : A;
  }
}
class Dp extends ls {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(A) {
    this.element.toggleAttribute(this.name, !!A && A !== eA);
  }
}
class Kp extends ls {
  constructor(A, e, r, s, n) {
    super(A, e, r, s, n), this.type = 5;
  }
  _$AI(A, e = this) {
    if ((A = je(this, A, e, 0) ?? eA) === Ie) return;
    const r = this._$AH, s = A === eA && r !== eA || A.capture !== r.capture || A.once !== r.once || A.passive !== r.passive, n = A !== eA && (r === eA || s);
    s && this.element.removeEventListener(this.name, this, r), n && this.element.addEventListener(this.name, this, A), this._$AH = A;
  }
  handleEvent(A) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, A) : this._$AH.handleEvent(A);
  }
}
class kp {
  constructor(A, e, r) {
    this.element = A, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(A) {
    je(this, A);
  }
}
const Rp = vt.litHtmlPolyfillSupport;
Rp?.(Vt, Wt), (vt.litHtmlVersions ?? (vt.litHtmlVersions = [])).push("3.3.2");
const Mp = (t, A, e) => {
  const r = e?.renderBefore ?? A;
  let s = r._$litPart$;
  if (s === void 0) {
    const n = e?.renderBefore ?? null;
    r._$litPart$ = s = new Wt(A.insertBefore($t(), n), n, void 0, e ?? {});
  }
  return s._$AI(t), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Dt = globalThis;
let Kt = class extends ze {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(A), this._$Do = Mp(e, this.renderRoot, this.renderOptions);
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
Kt._$litElement$ = !0, Kt.finalized = !0, Dt.litElementHydrateSupport?.({ LitElement: Kt });
const _p = Dt.litElementPolyfillSupport;
_p?.({ LitElement: Kt });
(Dt.litElementVersions ?? (Dt.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Op = (t) => (A, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(t, A);
  }) : customElements.define(t, A);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Np = { attribute: !0, type: String, converter: Gr, reflect: !1, hasChanged: Gn }, Pp = (t = Np, A, e) => {
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
function ge(t) {
  return (A, e) => typeof e == "object" ? Pp(t, A, e) : ((r, s, n) => {
    const i = s.hasOwnProperty(n);
    return s.constructor.createProperty(n, r), i ? Object.getOwnPropertyDescriptor(s, n) : void 0;
  })(t, A, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function N(t) {
  return ge({ ...t, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $p = (t, A, e) => (e.configurable = !0, e.enumerable = !0, Reflect.decorate && typeof A != "object" && Object.defineProperty(t, A, e), e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Gp(t, A) {
  return (e, r, s) => {
    const n = (i) => i.renderRoot?.querySelector(t) ?? null;
    return $p(e, r, { get() {
      return n(this);
    } });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vp = { CHILD: 2 }, Xp = (t) => (...A) => ({ _$litDirective$: t, values: A });
class Wp {
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
class Sn extends Wp {
  constructor(A) {
    if (super(A), this.it = eA, A.type !== Vp.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(A) {
    if (A === eA || A == null) return this._t = void 0, this.it = A;
    if (A === Ie) return A;
    if (typeof A != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (A === this.it) return this._t;
    this.it = A;
    const e = [A];
    return e.raw = e, this._t = { _$litType$: this.constructor.resultType, strings: e, values: [] };
  }
}
Sn.directiveName = "unsafeHTML", Sn.resultType = 1;
const Aa = Xp(Sn);
function Xn() {
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
var Le = Xn();
function Ic(t) {
  Le = t;
}
var kt = { exec: () => null };
function M(t, A = "") {
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
}, zp = /^(?:[ \t]*(?:\n|$))+/, Jp = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Yp = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, zt = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Zp = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Wn = /(?:[*+-]|\d{1,9}[.)])/, Hc = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Tc = M(Hc).replace(/bull/g, Wn).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), qp = M(Hc).replace(/bull/g, Wn).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), zn = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, jp = /^[^\n]+/, Jn = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Aw = M(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Jn).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), ew = M(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Wn).getRegex(), Bs = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Yn = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, tw = M(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", Yn).replace("tag", Bs).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Sc = M(zn).replace("hr", zt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Bs).getRegex(), rw = M(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Sc).getRegex(), Zn = {
  blockquote: rw,
  code: Jp,
  def: Aw,
  fences: Yp,
  heading: Zp,
  hr: zt,
  html: tw,
  lheading: Tc,
  list: ew,
  newline: zp,
  paragraph: Sc,
  table: kt,
  text: jp
}, ea = M(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", zt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Bs).getRegex(), sw = {
  ...Zn,
  lheading: qp,
  table: ea,
  paragraph: M(zn).replace("hr", zt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ea).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Bs).getRegex()
}, nw = {
  ...Zn,
  html: M(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", Yn).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: kt,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: M(zn).replace("hr", zt).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Tc).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, iw = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, ow = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Lc = /^( {2,}|\\)\n(?!\s*$)/, aw = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, hs = /[\p{P}\p{S}]/u, qn = /[\s\p{P}\p{S}]/u, vc = /[^\s\p{P}\p{S}]/u, cw = M(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, qn).getRegex(), Dc = /(?!~)[\p{P}\p{S}]/u, lw = /(?!~)[\s\p{P}\p{S}]/u, Bw = /(?:[^\s\p{P}\p{S}]|~)/u, hw = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Kc = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, gw = M(Kc, "u").replace(/punct/g, hs).getRegex(), uw = M(Kc, "u").replace(/punct/g, Dc).getRegex(), kc = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", fw = M(kc, "gu").replace(/notPunctSpace/g, vc).replace(/punctSpace/g, qn).replace(/punct/g, hs).getRegex(), dw = M(kc, "gu").replace(/notPunctSpace/g, Bw).replace(/punctSpace/g, lw).replace(/punct/g, Dc).getRegex(), pw = M(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, vc).replace(/punctSpace/g, qn).replace(/punct/g, hs).getRegex(), ww = M(/\\(punct)/, "gu").replace(/punct/g, hs).getRegex(), Qw = M(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Cw = M(Yn).replace("(?:-->|$)", "-->").getRegex(), Uw = M(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", Cw).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Xr = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, mw = M(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Xr).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Rc = M(/^!?\[(label)\]\[(ref)\]/).replace("label", Xr).replace("ref", Jn).getRegex(), Mc = M(/^!?\[(ref)\](?:\[\])?/).replace("ref", Jn).getRegex(), Fw = M("reflink|nolink(?!\\()", "g").replace("reflink", Rc).replace("nolink", Mc).getRegex(), jn = {
  _backpedal: kt,
  // only used for GFM url
  anyPunctuation: ww,
  autolink: Qw,
  blockSkip: hw,
  br: Lc,
  code: ow,
  del: kt,
  emStrongLDelim: gw,
  emStrongRDelimAst: fw,
  emStrongRDelimUnd: pw,
  escape: iw,
  link: mw,
  nolink: Mc,
  punctuation: cw,
  reflink: Rc,
  reflinkSearch: Fw,
  tag: Uw,
  text: aw,
  url: kt
}, Ew = {
  ...jn,
  link: M(/^!?\[(label)\]\((.*?)\)/).replace("label", Xr).getRegex(),
  reflink: M(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Xr).getRegex()
}, Ln = {
  ...jn,
  emStrongRDelimAst: dw,
  emStrongLDelim: uw,
  url: M(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, bw = {
  ...Ln,
  br: M(Lc).replace("{2,}", "*").getRegex(),
  text: M(Ln.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Er = {
  normal: Zn,
  gfm: sw,
  pedantic: nw
}, dt = {
  normal: jn,
  gfm: Ln,
  breaks: bw,
  pedantic: Ew
}, xw = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ta = (t) => xw[t];
function NA(t, A) {
  if (A) {
    if (wA.escapeTest.test(t))
      return t.replace(wA.escapeReplace, ta);
  } else if (wA.escapeTestNoEncode.test(t))
    return t.replace(wA.escapeReplaceNoEncode, ta);
  return t;
}
function ra(t) {
  try {
    t = encodeURI(t).replace(wA.percentDecode, "%");
  } catch {
    return null;
  }
  return t;
}
function sa(t, A) {
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
function pt(t, A, e) {
  const r = t.length;
  if (r === 0)
    return "";
  let s = 0;
  for (; s < r && t.charAt(r - s - 1) === A; )
    s++;
  return t.slice(0, r - s);
}
function yw(t, A) {
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
function na(t, A, e, r, s) {
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
function Iw(t, A, e) {
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
var Wr = class {
  // set by the lexer
  constructor(t) {
    O(this, "options");
    O(this, "rules");
    // set by the lexer
    O(this, "lexer");
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
        text: this.options.pedantic ? e : pt(e, `
`)
      };
    }
  }
  fences(t) {
    const A = this.rules.block.fences.exec(t);
    if (A) {
      const e = A[0], r = Iw(e, A[3] || "", this.rules);
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
        const r = pt(e, "#");
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
        raw: pt(A[0], `
`)
      };
  }
  blockquote(t) {
    const A = this.rules.block.blockquote.exec(t);
    if (A) {
      let e = pt(A[0], `
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
        const B = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(l, n, !0), this.lexer.state.top = B, e.length === 0)
          break;
        const g = n.at(-1);
        if (g?.type === "code")
          break;
        if (g?.type === "blockquote") {
          const u = g, f = u.raw + `
` + e.join(`
`), d = this.blockquote(f);
          n[n.length - 1] = d, r = r.substring(0, r.length - u.raw.length) + d.raw, s = s.substring(0, s.length - u.text.length) + d.text;
          break;
        } else if (g?.type === "list") {
          const u = g, f = u.raw + `
` + e.join(`
`), d = this.list(f);
          n[n.length - 1] = d, r = r.substring(0, r.length - g.raw.length) + d.raw, s = s.substring(0, s.length - u.raw.length) + d.raw, e = f.substring(n.at(-1).raw.length).split(`
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
        let B = A[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (x) => " ".repeat(3 * x.length)), g = t.split(`
`, 1)[0], u = !B.trim(), f = 0;
        if (this.options.pedantic ? (f = 2, l = B.trimStart()) : u ? f = A[1].length + 1 : (f = A[2].search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, l = B.slice(f), f += A[1].length), u && this.rules.other.blankLine.test(g) && (c += g + `
`, t = t.substring(g.length + 1), a = !0), !a) {
          const x = this.rules.other.nextBulletRegex(f), Q = this.rules.other.hrRegex(f), F = this.rules.other.fencesBeginRegex(f), b = this.rules.other.headingBeginRegex(f), E = this.rules.other.htmlBeginRegex(f);
          for (; t; ) {
            const K = t.split(`
`, 1)[0];
            let X;
            if (g = K, this.options.pedantic ? (g = g.replace(this.rules.other.listReplaceNesting, "  "), X = g) : X = g.replace(this.rules.other.tabCharGlobal, "    "), F.test(g) || b.test(g) || E.test(g) || x.test(g) || Q.test(g))
              break;
            if (X.search(this.rules.other.nonSpaceChar) >= f || !g.trim())
              l += `
` + X.slice(f);
            else {
              if (u || B.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || F.test(B) || b.test(B) || Q.test(B))
                break;
              l += `
` + g;
            }
            !u && !g.trim() && (u = !0), c += K + `
`, t = t.substring(K.length + 1), B = X.slice(f);
          }
        }
        s.loose || (i ? s.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (i = !0));
        let d = null, U;
        this.options.gfm && (d = this.rules.other.listIsTask.exec(l), d && (U = d[0] !== "[ ] ", l = l.replace(this.rules.other.listReplaceTask, ""))), s.items.push({
          type: "list_item",
          raw: c,
          task: !!d,
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
          const c = s.items[a].tokens.filter((B) => B.type === "space"), l = c.length > 0 && c.some((B) => this.rules.other.anyLine.test(B.raw));
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
    const e = sa(A[1]), r = A[2].replace(this.rules.other.tableAlignChars, "").split("|"), s = A[3]?.trim() ? A[3].replace(this.rules.other.tableRowBlankLine, "").split(`
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
        n.rows.push(sa(i, n.header.length).map((o, a) => ({
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
        const n = pt(e.slice(0, -1), "\\");
        if ((e.length - n.length) % 2 === 0)
          return;
      } else {
        const n = yw(A[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? r = r.slice(1) : r = r.slice(1, -1)), na(A, {
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
      return na(e, s, e[0], this.lexer, this.rules);
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
        const B = [...r[0]][0].length, g = t.slice(0, n + r.index + B + o);
        if (Math.min(n, o) % 2) {
          const f = g.slice(1, -1);
          return {
            type: "em",
            raw: g,
            text: f,
            tokens: this.lexer.inlineTokens(f)
          };
        }
        const u = g.slice(2, -2);
        return {
          type: "strong",
          raw: g,
          text: u,
          tokens: this.lexer.inlineTokens(u)
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
}, qA = class vn {
  constructor(A) {
    O(this, "tokens");
    O(this, "options");
    O(this, "state");
    O(this, "tokenizer");
    O(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = A || Le, this.options.tokenizer = this.options.tokenizer || new Wr(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const e = {
      other: wA,
      block: Er.normal,
      inline: dt.normal
    };
    this.options.pedantic ? (e.block = Er.pedantic, e.inline = dt.pedantic) : this.options.gfm && (e.block = Er.gfm, this.options.breaks ? e.inline = dt.breaks : e.inline = dt.gfm), this.tokenizer.rules = e;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Er,
      inline: dt
    };
  }
  /**
   * Static Lex Method
   */
  static lex(A, e) {
    return new vn(e).lex(A);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(A, e) {
    return new vn(e).inlineTokens(A);
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
        let B;
        this.options.extensions.startInline.forEach((g) => {
          B = g.call({ lexer: this }, l), typeof B == "number" && B >= 0 && (c = Math.min(c, B));
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
}, zr = class {
  // set by the parser
  constructor(t) {
    O(this, "options");
    O(this, "parser");
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
    const r = this.parser.parseInline(e), s = ra(t);
    if (s === null)
      return r;
    t = s;
    let n = '<a href="' + t + '"';
    return A && (n += ' title="' + NA(A) + '"'), n += ">" + r + "</a>", n;
  }
  image({ href: t, title: A, text: e, tokens: r }) {
    r && (e = this.parser.parseInline(r, this.parser.textRenderer));
    const s = ra(t);
    if (s === null)
      return NA(e);
    t = s;
    let n = `<img src="${t}" alt="${e}"`;
    return A && (n += ` title="${NA(A)}"`), n += ">", n;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : NA(t.text);
  }
}, Ai = class {
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
}, jA = class Dn {
  constructor(A) {
    O(this, "options");
    O(this, "renderer");
    O(this, "textRenderer");
    this.options = A || Le, this.options.renderer = this.options.renderer || new zr(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ai();
  }
  /**
   * Static Parse Method
   */
  static parse(A, e) {
    return new Dn(e).parse(A);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(A, e) {
    return new Dn(e).parseInline(A);
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
}, tn, Lr = (tn = class {
  constructor(t) {
    O(this, "options");
    O(this, "block");
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
}, O(tn, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
])), tn), Hw = class {
  constructor(...t) {
    O(this, "defaults", Xn());
    O(this, "options", this.setOptions);
    O(this, "parse", this.parseMarkdown(!0));
    O(this, "parseInline", this.parseMarkdown(!1));
    O(this, "Parser", jA);
    O(this, "Renderer", zr);
    O(this, "TextRenderer", Ai);
    O(this, "Lexer", qA);
    O(this, "Tokenizer", Wr);
    O(this, "Hooks", Lr);
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
        const s = this.defaults.renderer || new zr(this.defaults);
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
        const s = this.defaults.tokenizer || new Wr(this.defaults);
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
        const s = this.defaults.hooks || new Lr();
        for (const n in e.hooks) {
          if (!(n in s))
            throw new Error(`hook '${n}' does not exist`);
          if (["options", "block"].includes(n))
            continue;
          const i = n, o = e.hooks[i], a = s[i];
          Lr.passThroughHooks.has(n) ? s[i] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(o.call(s, c)).then((B) => a.call(s, B));
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
}, He = new Hw();
function k(t, A) {
  return He.parse(t, A);
}
k.options = k.setOptions = function(t) {
  return He.setOptions(t), k.defaults = He.defaults, Ic(k.defaults), k;
};
k.getDefaults = Xn;
k.defaults = Le;
k.use = function(...t) {
  return He.use(...t), k.defaults = He.defaults, Ic(k.defaults), k;
};
k.walkTokens = function(t, A) {
  return He.walkTokens(t, A);
};
k.parseInline = He.parseInline;
k.Parser = jA;
k.parser = jA.parse;
k.Renderer = zr;
k.TextRenderer = Ai;
k.Lexer = qA;
k.lexer = qA.lex;
k.Tokenizer = Wr;
k.Hooks = Lr;
k.parse = k;
k.options;
k.setOptions;
k.use;
k.walkTokens;
k.parseInline;
jA.parse;
qA.lex;
var Tw = Object.defineProperty, Sw = Object.getOwnPropertyDescriptor, D = (t, A, e, r) => {
  for (var s = r > 1 ? void 0 : r ? Sw(A, e) : A, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (s = (r ? i(A, e, s) : i(s)) || s);
  return r && s && Tw(A, e, s), s;
};
const ia = {
  thinking: "응답 준비",
  tool_start: "자료 검색 시작",
  tool_progress: "자료 검색 진행",
  tool_done: "검색 완료",
  generating: "답변 작성",
  streaming: "답변 작성"
};
function Lw(t) {
  return t < 1024 ? `${t}B` : t < 1024 * 1024 ? `${Math.round(t / 1024)}KB` : `${(t / 1024 / 1024).toFixed(1)}MB`;
}
const oa = {
  incorrect: "내용이 틀렸어요",
  harmful: "유해/공격적이에요",
  "off-topic": "주제와 무관해요",
  privacy: "개인정보가 노출됐어요",
  other: "기타"
}, aa = {
  question: "질문",
  request: "요청",
  bug: "오류 신고",
  other: "기타"
}, vw = ["n", "s", "e", "w", "nw", "ne", "sw", "se"], br = 280, xr = 360, Dw = 360, Kw = 520, kw = 72, yr = 24;
k.setOptions({ gfm: !0, breaks: !0 });
k.use({ tokenizer: { del: () => {
} } });
const Rw = /[가-힣ㄱ-ㅎㅏ-ㅣ]/, Mw = /[/?#&=+%~-]/;
k.use({
  tokenizer: {
    url(t) {
      const A = this.rules.inline.url.exec(t);
      if (!A || A[2] === "@") return !1;
      let e = A[0];
      const r = e.search(Rw);
      r > 0 && !Mw.test(e.charAt(r - 1)) && (e = e.slice(0, r));
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
const en = 5e4;
function _w() {
  try {
    const t = document.body.cloneNode(!0);
    t.querySelectorAll(
      'script, style, noscript, iframe, nav, footer, header, aside, [aria-hidden="true"], timely-chatbot'
    ).forEach((i) => i.remove());
    const A = t.querySelector("article"), e = t.querySelector("main"), r = A instanceof HTMLElement ? A : e instanceof HTMLElement ? e : t, n = (r.innerText ?? r.textContent ?? "").toString().replace(/ /g, " ").split(/\n+/).map((i) => i.replace(/[ \t]+/g, " ").trim()).filter((i) => i.length > 0).join(`
`);
    return n.length > en ? n.slice(0, en) + `

…(이하 ${n.length - en}자 생략)` : n;
  } catch {
    return "";
  }
}
function ca(t) {
  const A = k.parse(t, { async: !1 });
  return Ul.sanitize(A, {
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
function Ow(t) {
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
function Nw(t) {
  return t instanceof DOMException ? t.name === "QuotaExceededError" || t.name === "NS_ERROR_DOM_QUOTA_REACHED" || t.code === 22 || t.code === 1014 : !1;
}
function Pw(t) {
  const A = Ow(t);
  return A === null ? "#ffffff" : A > 0.5 ? "#111111" : "#ffffff";
}
let L = class extends Kt {
  constructor() {
    super(...arguments), this.apiKey = "", this.browserId = "", this.apiBaseUrl = "", this.previewMode = !1, this.inline = !1, this.open = !1, this.fullscreen = !1, this.messages = [], this.input = "", this.streaming = !1, this.theme = {}, this.maxUserMessageChars = 2e3, this.rect = null, this.reportingMessageId = null, this.resetConfirmOpen = !1, this.reportReason = "incorrect", this.reportDetail = "", this.reportSubmitting = !1, this.reportError = "", this.inquiryOpen = !1, this.inquiryCategory = "question", this.inquirySubject = "", this.inquiryBody = "", this.inquiryContact = "", this.inquirySubmitting = !1, this.inquiryError = "", this.inquirySuccess = !1, this.pendingAttachments = [], this.capturing = !1, this.regionCapturing = !1, this.selectionTimer = null, this.widgetInteractionAt = 0, this.regionRect = null, this.regionStart = null, this.updatePageScrollbarOffset = () => {
      const t = window.innerWidth - (document.documentElement?.clientWidth ?? window.innerWidth);
      this.style.setProperty("--page-scrollbar-w", `${Math.max(0, t)}px`);
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
        let l = e.left + a, B = e.top + c;
        const g = window.innerWidth, u = window.innerHeight;
        l = Math.max(0, Math.min(l, g - e.width)), B = Math.max(0, Math.min(B, u - e.height)), this.rect = {
          left: l,
          top: B,
          width: e.width,
          height: e.height
        };
      }, i = () => {
        window.removeEventListener("pointermove", n), window.removeEventListener("pointerup", i);
      };
      window.addEventListener("pointermove", n), window.addEventListener("pointerup", i);
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
          this.reportError = A instanceof Error ? A.message : "신고 전송 실패";
        } finally {
          this.reportSubmitting = !1;
        }
      }
    }, this.resetConversation = () => {
      this.streaming || this.messages.length !== 0 && (this.resetConfirmOpen = !0);
    }, this.confirmReset = () => {
      this.messages = [], this.sessionId = void 0, this.clearPersistedSession(), this.resetConfirmOpen = !1;
    }, this.cancelReset = () => {
      this.resetConfirmOpen = !1;
    }, this.openInquiry = () => {
      this.inquiryOpen = !0, this.inquiryCategory = "question", this.inquirySubject = "", this.inquiryBody = "", this.inquiryContact = "", this.inquiryError = "", this.inquirySuccess = !1;
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
          this.inquiryError = e instanceof Error ? e.message : "문의 전송 실패";
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
          const t = document.body, e = (await Tn(t, {
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
        const s = (await Tn(document.body, {
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
    };
  }
  render() {
    const t = this.fullscreen ? "panel fullscreen" : "panel", A = this.regionCapturing ? `${t} region-hidden` : t, e = this.theme.title || "챗봇", r = !!this.theme.iconUrl, s = !!(this.theme.iconUrl && this.theme.launcherIconOnly), n = [
      "toggle",
      this.regionCapturing ? "region-hidden" : "",
      s ? "icon-only" : "",
      // 아이콘이 유지되는 모드(=커스텀 아이콘)는 열림을 opacity/축소로 표시.
      r && this.open ? "icon-active" : ""
    ].filter(Boolean).join(" "), i = (this.theme.launcherLabel ?? "").trim(), o = this.theme.launcherLabelMode === "hover";
    return S`
      ${this.regionCapturing ? this.renderRegionCaptureOverlay() : null}
      <div
        class=${this.regionCapturing ? "launcher-wrap region-hidden" : "launcher-wrap"}
      >
        <button
          class=${n}
          @click=${this.toggle}
          aria-label=${this.open ? "닫기" : i || "챗봇 열기"}
        >
          ${this.open && !r ? uA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>` : this.renderToggleIcon()}
        </button>
        ${i ? S`<span
              class=${o ? "launcher-label tip" : "launcher-label"}
              >${i}</span
            >` : null}
      </div>
      ${this.open ? S`
            <div class=${A} style=${this.panelStyle()}>
              ${this.fullscreen ? null : vw.map(
      (a) => S`
                      <div
                        class=${`rh ${a}`}
                        @pointerdown=${(c) => this.startResize(c, a)}
                      ></div>
                    `
    )}
              <div class="header" @pointerdown=${this.startDrag}>
                ${this.theme.headerIconUrl ? S`<img
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
                  ${uA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15.5-6.36L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.36L3 16"/><path d="M3 21v-5h5"/></svg>`}
                </button>
                <button
                  type="button"
                  @click=${this.openInquiry}
                  title="문의하기"
                  aria-label="문의하기"
                >
                  ${uA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`}
                </button>
                <button
                  type="button"
                  @click=${this.toggleFullscreen}
                  title=${this.fullscreen ? "축소" : "전체화면"}
                  aria-label=${this.fullscreen ? "축소" : "전체화면"}
                >
                  ${this.fullscreen ? uA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 9H4M4 9V4M4 9L9 4M15 9h5M20 9V4M20 9l-5-5M9 15H4M4 15v5M4 15l5 5M15 15h5M20 15v5M20 15l-5 5"/></svg>` : uA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8V4h4M16 4h4v4M4 16v4h4M16 20h4v-4"/></svg>`}
                </button>
                <button
                  type="button"
                  @click=${this.close}
                  title="닫기"
                  aria-label="닫기"
                >
                  ${uA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>`}
                </button>
              </div>
              <div class="messages">
                ${this.theme.welcomeMessage?.trim() ? S`<div class="msg assistant">
                      ${Aa(ca(this.theme.welcomeMessage))}
                    </div>` : null}
                ${this.messages.map(
      (a) => a.role === "assistant" ? S`<div class="msg-wrap assistant">
                        ${a.progress && a.progress.history.length > 0 ? S`<ul class="progress-history">
                              ${a.progress.history.map(
        (c) => S`<li>
                                    ${uA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`}
                                    <span>${c}</span>
                                  </li>`
      )}
                            </ul>` : null}
                        ${a.progress && a.progress.text ? S`<div class="progress-line">
                              <span class="progress-spinner"></span>
                              <span>${a.progress.text}</span>
                            </div>` : null}
                        <div class="msg assistant">
                          ${a.content ? Aa(ca(a.content)) : a.progress ? S`<span class="progress-placeholder"
                                  >${a.progress.text || ia[a.progress.stage] || "응답 준비"}</span
                                >` : S`<span class="typing"
                                  ><span></span><span></span><span></span
                                ></span>`}
                        </div>
                        ${a.files && a.files.length > 0 ? this.renderAttachments(a.files) : null}
                        ${a.id && a.content ? S`<div class="reactions">
                              <button
                                type="button"
                                class=${a.reaction === 1 ? "react on" : "react"}
                                @click=${() => this.toggleReaction(a, 1)}
                                aria-label="좋아요"
                                title="도움이 됐어요"
                              >
                                ${uA`<svg viewBox="0 0 24 24" fill="${a.reaction === 1 ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zM7 11l5-8a2 2 0 0 1 2 2v3h5a2 2 0 0 1 2 2.4l-1.5 7A2 2 0 0 1 17.5 19H7"/></svg>`}
                              </button>
                              <button
                                type="button"
                                class=${a.reaction === -1 ? "react on" : "react"}
                                @click=${() => this.toggleReaction(a, -1)}
                                aria-label="별로예요"
                                title="별로였어요"
                              >
                                ${uA`<svg viewBox="0 0 24 24" fill="${a.reaction === -1 ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 13V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zM17 13l-5 8a2 2 0 0 1-2-2v-3H5a2 2 0 0 1-2-2.4l1.5-7A2 2 0 0 1 6.5 5H17"/></svg>`}
                              </button>
                              <button
                                type="button"
                                class=${a.reported ? "react reported" : "react"}
                                @click=${() => this.openReport(a)}
                                ?disabled=${a.reported}
                                aria-label="신고"
                                title=${a.reported ? "신고 접수됨" : "신고하기"}
                              >
                                ${uA`<svg viewBox="0 0 24 24" fill="${a.reported ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h13l-2 4 2 4H4"/></svg>`}
                              </button>
                            </div>` : null}
                      </div>` : S`<div class="msg user">${a.content}</div>`
    )}
              </div>
              ${this.pendingAttachments.length > 0 ? S`<div class="attachments">
                    ${this.pendingAttachments.map(
      (a, c) => S`<div class="att-chip" title=${a.label}>
                          ${a.kind === "image" ? S`<img src=${a.previewUrl} alt="" />` : S`<span class="att-icon">${uA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v5h5"/><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/></svg>`}</span>`}
                          <span class="att-label">${a.label}</span>
                          <button
                            type="button"
                            class="att-remove"
                            @click=${() => this.removeAttachment(c)}
                            aria-label="첨부 제거"
                          >
                            ×
                          </button>
                        </div>`
    )}
                  </div>` : null}
              <form @submit=${this.send}>
                <div class="composer">
                  <textarea
                    rows="1"
                    .value=${this.input}
                    @input=${this.onComposerInput}
                    @keydown=${this.onComposerKeydown}
                    ?disabled=${this.streaming}
                    maxlength=${this.maxUserMessageChars}
                    placeholder="메시지를 입력하세요..."
                  ></textarea>
                  <div class="composer-toolbar">
                    ${this.theme.captureEnabled !== !1 ? S`<button
                          type="button"
                          class="cap-btn"
                          @click=${this.captureViewport}
                          ?disabled=${this.streaming || this.capturing || this.pendingAttachments.length >= 4}
                          title="현재 화면 캡처"
                          aria-label="현재 화면 캡처"
                        >
                          ${uA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`}
                        </button>` : null}
                    ${this.theme.regionCaptureEnabled !== !1 ? S`<button
                          type="button"
                          class="cap-btn"
                          @click=${this.startRegionCapture}
                          ?disabled=${this.streaming || this.capturing || this.regionCapturing || this.pendingAttachments.length >= 4}
                          title="영역 선택 캡처, 드래그한 부분만 이미지로 첨부"
                          aria-label="영역 선택 캡처"
                        >
                          ${uA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7V5a2 2 0 0 1 2-2h2"/><path d="M15 3h2a2 2 0 0 1 2 2v2"/><path d="M19 15v2a2 2 0 0 1-2 2h-2"/><path d="M9 21H7a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6"/></svg>`}
                        </button>` : null}
                    <div class="spacer"></div>
                    ${this.input.length >= this.maxUserMessageChars * 0.8 ? S`<span
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
              </form>
              ${this.reportingMessageId ? this.renderReportModal() : null}
              ${this.inquiryOpen ? this.renderInquiryModal() : null}
              ${this.resetConfirmOpen ? this.renderResetConfirmModal() : null}
            </div>
          ` : null}
    `;
  }
  renderReportModal() {
    return S`
      <div class="report-overlay" @click=${this.closeReport}>
        <div class="report-modal" @click=${(t) => t.stopPropagation()}>
          <header>
            <p class="title">메시지 신고</p>
            <p class="subtitle">사유를 알려주시면 검토 후 개선에 반영합니다.</p>
          </header>
          <ul class="report-reasons">
            ${Object.keys(oa).map(
      (t) => S`
                <li>
                  <label>
                    <input
                      type="radio"
                      name="reportReason"
                      value=${t}
                      .checked=${this.reportReason === t}
                      @change=${() => this.reportReason = t}
                    />
                    <span>${oa[t]}</span>
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
            @input=${(t) => this.reportDetail = t.target.value}
          ></textarea>
          ${this.reportError ? S`<p class="report-error">${this.reportError}</p>` : null}
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
    return S`
      <div
        class="region-overlay"
        @pointerdown=${this.regionPointerDown}
        @pointermove=${this.regionPointerMove}
        @pointerup=${this.regionPointerUp}
      >
        ${t && t.w > 0 && t.h > 0 ? S`
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
            ` : S`<div class="region-dim region-dim-full"></div>`}
        <div class="region-hint">
          ${t && t.w > 0 ? "드래그해서 영역 조정 → 떼면 캡처" : "캡처할 영역을 드래그하세요. ESC로 취소"}
        </div>
      </div>
    `;
  }
  /**
   * 대화 초기화 확인 모달: 인-위젯 스타일, 테마 컬러(--launcher-bg) 사용해 호스트 페이지에
   * 자연스럽게 녹아듦. 기존 report-modal 스타일 재사용 + reset 전용 actions만.
   */
  renderResetConfirmModal() {
    return S`
      <div class="report-overlay" @click=${this.cancelReset}>
        <div
          class="report-modal reset-modal"
          @click=${(t) => t.stopPropagation()}
        >
          <header>
            <p class="title">대화를 초기화할까요?</p>
            <p class="subtitle">
              지금까지의 대화 기록이 모두 사라지고 새 세션이 시작돼요.
            </p>
          </header>
          <div class="report-actions">
            <button type="button" class="ghost" @click=${this.cancelReset}>
              그대로 두기
            </button>
            <button type="button" class="primary" @click=${this.confirmReset}>
              초기화
            </button>
          </div>
        </div>
      </div>
    `;
  }
  renderInquiryModal() {
    return this.inquirySuccess ? S`
        <div class="report-overlay" @click=${this.closeInquiry}>
          <div class="report-modal" @click=${(t) => t.stopPropagation()}>
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
      ` : S`
      <div class="report-overlay" @click=${this.closeInquiry}>
        <div class="report-modal" @click=${(t) => t.stopPropagation()}>
          <header>
            <p class="title">문의하기</p>
            <p class="subtitle">챗봇이 답하기 어려운 내용도 남겨주세요.</p>
          </header>
          <div class="inquiry-row">
            <label>유형</label>
            <select
              .value=${this.inquiryCategory}
              @change=${(t) => this.inquiryCategory = t.target.value}
            >
              ${Object.keys(aa).map(
      (t) => S`<option value=${t}>
                    ${aa[t]}
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
            @input=${(t) => this.inquirySubject = t.target.value}
          />
          <textarea
            class="report-detail"
            placeholder="내용을 자세히 적어주세요"
            rows="5"
            maxlength="8000"
            .value=${this.inquiryBody}
            @input=${(t) => this.inquiryBody = t.target.value}
          ></textarea>
          <input
            type="text"
            class="inquiry-subject"
            placeholder="회신받을 연락처 (선택, 이메일/전화 등)"
            maxlength="255"
            .value=${this.inquiryContact}
            @input=${(t) => this.inquiryContact = t.target.value}
          />
          ${this.inquiryError ? S`<p class="report-error">${this.inquiryError}</p>` : null}
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
    super.connectedCallback(), this.previewMode ? this.setupPreviewMode() : (this.applyThemeOverride(), this.loadCachedTheme(), this.fetchInit()), this.inline && (this.open = !0), document.addEventListener("selectionchange", this.handleSelectionChange), document.addEventListener("pointerdown", this.handleDocPointerDown, !0), this.updatePageScrollbarOffset(), window.addEventListener("resize", this.updatePageScrollbarOffset);
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
          return r.id && (s.id = r.id), r.reaction !== void 0 && (s.reaction = r.reaction), r.reported && (s.reported = r.reported), s;
        }), e.sessionId && (this.sessionId = e.sessionId);
      } catch {
      }
  }
  persistSession() {
    const t = this.storageKey();
    if (!t || this.previewMode) return;
    let A = this.messages.filter((e) => !(e.role === "assistant" && !e.content && !e.id)).map((e) => {
      const r = { role: e.role, content: e.content };
      return e.id && (r.id = e.id), e.reaction !== void 0 && (r.reaction = e.reaction), e.reported && (r.reported = e.reported), e.files && e.files.length > 0 && (r.files = e.files), r;
    });
    for (let e = 0; e < 4; e++)
      try {
        sessionStorage.setItem(
          t,
          JSON.stringify({ v: 1, messages: A, sessionId: this.sessionId })
        );
        return;
      } catch (r) {
        if (!Nw(r) || A.length <= 2)
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
    const t = this.theme, A = (r, s) => {
      s ? this.style.setProperty(r, s) : this.style.removeProperty(r);
    };
    A("--launcher-bg", t.launcherBg), A("--panel-bg", t.panelBg), A("--header-bg", t.headerBg), A("--user-bg", t.userBg), A("--user-text", t.userText), A("--assistant-bg", t.assistantBg), A("--assistant-text", t.assistantText), A("--send-bg", t.sendBg), A("--send-text", t.sendText), A(
      "--launcher-fg",
      t.launcherBg ? Pw(t.launcherBg) : void 0
    );
    const e = (r) => typeof r == "number" ? `${r}px` : void 0;
    A("--header-title-size", e(t.headerTitleSize)), A("--message-size", e(t.messageSize)), A("--input-size", e(t.inputSize)), A("--launcher-size", e(t.launcherSize)), A("--launcher-size-mobile", e(t.launcherSizeMobile)), A("--launcher-icon-size", e(t.launcherIconSize)), A("--launcher-svg-size", e(t.launcherSvgSize)), A("--launcher-label-color", t.launcherLabelColor), A("--launcher-label-size", e(t.launcherLabelSize));
  }
  renderToggleIcon() {
    return this.theme.iconUrl ? S`<img class="custom-icon" src=${this.theme.iconUrl} alt="" />` : uA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-12.5 6.6L4 20l1.4-4.5A8 8 0 1 1 21 12Z"/></svg>`;
  }
  /**
   * open 시 첫 호출: default panel rect 계산.
   *
   * 위치는 host element의 data-position 속성 기준 (host script가 설정).
   * 미설정 시 우측 하단 default.
   */
  ensureRect() {
    if (this.rect) return;
    const t = Dw, A = Kw, e = Math.max(
      yr,
      window.innerHeight - this.launcherGap() - A
    ), s = this.dataset.position === "bottom-left" ? yr : Math.max(yr, window.innerWidth - yr - t);
    this.rect = { left: s, top: e, width: t, height: A };
  }
  /**
   * panel 하단이 런처 위로 얼마나 떠야 하는지, 런처 스택(버튼 + always 라벨)의
   * 실측 높이 + 여백. PANEL_GAP(56+16 하드코딩) 은 기본 크기 전제라 큰 launcherSize
   * 나 always 라벨에서 panel 이 런처를 덮었다. 실측 실패 시 기존 상수로 폴백.
   */
  launcherGap() {
    const A = this.shadowRoot?.querySelector(".launcher-wrap")?.getBoundingClientRect().height ?? 0;
    return A > 0 ? A + 16 : kw;
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
      let { left: l, top: B, width: g, height: u } = e;
      A.includes("e") && (g = e.width + a), A.includes("w") && (g = e.width - a, l = e.left + a), A.includes("s") && (u = e.height + c), A.includes("n") && (u = e.height - c, B = e.top + c), g < br && (A.includes("w") && (l = e.left + (e.width - br)), g = br), u < xr && (A.includes("n") && (B = e.top + (e.height - xr)), u = xr);
      const f = window.innerWidth, d = window.innerHeight;
      l < 0 && (g += l, l = 0), B < 0 && (u += B, B = 0), l + g > f && (g = f - l), B + u > d && (u = d - B), g = Math.max(br, g), u = Math.max(xr, u), this.rect = { left: l, top: B, width: g, height: u };
    }, i = () => {
      window.removeEventListener("pointermove", n), window.removeEventListener("pointerup", i);
    };
    window.addEventListener("pointermove", n), window.addEventListener("pointerup", i);
  }
  toggleFullscreen() {
    this.fullscreen = !this.fullscreen;
  }
  close() {
    this.open = !1, this.fullscreen = !1;
  }
  async toggle() {
    this.open = !this.open, this.open && (this.ensureRect(), await this.updateComplete, this.composerTextarea?.focus(), this.scrollToBottom());
  }
  updated() {
    this.open && this.scrollToBottom();
  }
  scrollToBottom() {
    const t = this.renderRoot.querySelector(".messages");
    t && (t.scrollTop = t.scrollHeight);
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
    return S`<div class="attachments">
      ${t.map((A) => {
      if (A.isImage) {
        const e = this.ensureFileUrl(A.id);
        return S`<figure class="att-image">
            ${e ? S`<img
                  src=${e}
                  alt=${A.label || A.name}
                  loading="lazy"
                  @click=${() => void this.openAttachment(A)}
                />` : S`<div class="att-image-loading"></div>`}
            ${A.label && A.label !== A.name ? S`<figcaption>${A.label}</figcaption>` : null}
          </figure>`;
      }
      return S`<button
          type="button"
          class="att-file"
          @click=${() => void this.openAttachment(A)}
          title=${`${A.name} 내려받기`}
        >
          ${uA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`}
          <span class="att-file-text">
            <span class="att-file-name">${A.label || A.name}</span>
            <span class="att-file-meta">${Lw(A.size)} 내려받기</span>
          </span>
          ${uA`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 11l5 5 5-5"/><path d="M4 20h16"/></svg>`}
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
      let e = `guest jwt 발급 실패 (HTTP ${t.status})`;
      try {
        const r = await t.json();
        r?.message && (e = r.message);
      } catch {
      }
      throw new Error(e);
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

${e.map((o) => `[첨부] ${o.label}`).join(`
`)}` : A;
    if (this.messages = [
      ...this.messages,
      { role: "user", content: r }
    ], this.input = "", requestAnimationFrame(() => {
      this.composerTextarea && (this.composerTextarea.style.height = "");
    }), this.pendingAttachments = [], e.some(
      (o) => o.kind === "text" && o.source === "selection"
    ))
      try {
        window.getSelection()?.removeAllRanges();
      } catch {
      }
    this.streaming = !0;
    let s = {
      role: "assistant",
      content: "",
      progress: { stage: "thinking", text: "응답 준비", history: [] }
    };
    this.messages = [...this.messages, s], this.persistSession();
    const n = e.map(
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
      mainText: _w()
    };
    try {
      let o;
      for (let B = 0; B < 2; B++) {
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
            ...n.length > 0 ? { attachments: n } : {},
            pageContext: i
          })
        }), o.status !== 401) break;
        this.invalidateJwt();
      }
      if (!o) throw new Error("요청 실패");
      if (!o.ok) {
        let B = `요청 실패 (HTTP ${o.status})`;
        try {
          const g = await o.json();
          g && typeof g.message == "string" && g.message && (B = g.message);
        } catch {
        }
        throw new Error(B);
      }
      if (!o.body) throw new Error("스트림을 받을 수 없습니다");
      const a = o.body.getReader(), c = new TextDecoder();
      let l = "";
      for (; ; ) {
        const { value: B, done: g } = await a.read();
        if (g) break;
        l += c.decode(B, { stream: !0 });
        const u = l.split(`

`);
        l = u.pop() ?? "";
        for (const f of u)
          this.handleSse(f, s);
      }
    } catch (o) {
      s.content = `[오류: ${o instanceof Error ? o.message : "unknown"}]`, s.progress && (s.progress = {
        ...s.progress,
        stage: "error",
        text: ""
      }), this.requestUpdate(), this.persistSession();
    } finally {
      this.streaming = !1, await this.updateComplete, this.composerTextarea?.focus();
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
          const i = String(n.stage ?? ""), a = (typeof n.detail == "string" ? n.detail : "") || ia[i] || i, l = (A.progress ?? { stage: "", text: "", history: [] }).history.slice();
          if (i === "tool_done") {
            const B = typeof n.query == "string" ? n.query : "", g = typeof n.citationsCount == "number" ? n.citationsCount : null;
            l.push(
              g != null ? `"${B}" 검색 결과 ${g}건` : B ? `"${B}" 검색 완료` : "검색 완료"
            );
          }
          A.progress = { stage: i, text: a, history: l }, this.requestUpdate();
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
        } else r === "done" ? (typeof n.messageId == "string" && (A.id = n.messageId), Array.isArray(n.files) && !A.files && (A.files = n.files), A.progress && (A.progress = {
          ...A.progress,
          stage: "done",
          text: ""
        }), this.requestUpdate(), this.persistSession()) : r === "error" && (A.content += `
[오류: ${n.error}]`, A.progress && (A.progress = {
          ...A.progress,
          stage: "error",
          text: ""
        }), this.requestUpdate(), this.persistSession());
      } catch {
      }
  }
};
L.styles = Qp`
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
        bottom: 80px !important;
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
    .messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
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
  `;
D([
  ge({ attribute: "api-key" })
], L.prototype, "apiKey", 2);
D([
  ge({ attribute: "browser-id" })
], L.prototype, "browserId", 2);
D([
  ge({ attribute: "api-base-url" })
], L.prototype, "apiBaseUrl", 2);
D([
  ge({ attribute: !1 })
], L.prototype, "getAccessToken", 2);
D([
  ge({ attribute: "preview-mode", type: Boolean })
], L.prototype, "previewMode", 2);
D([
  ge({ attribute: "inline", type: Boolean, reflect: !0 })
], L.prototype, "inline", 2);
D([
  ge({ attribute: !1 })
], L.prototype, "themeOverride", 2);
D([
  N()
], L.prototype, "open", 2);
D([
  N()
], L.prototype, "fullscreen", 2);
D([
  N()
], L.prototype, "messages", 2);
D([
  N()
], L.prototype, "input", 2);
D([
  N()
], L.prototype, "streaming", 2);
D([
  N()
], L.prototype, "sessionId", 2);
D([
  N()
], L.prototype, "theme", 2);
D([
  N()
], L.prototype, "maxUserMessageChars", 2);
D([
  N()
], L.prototype, "rect", 2);
D([
  N()
], L.prototype, "reportingMessageId", 2);
D([
  N()
], L.prototype, "resetConfirmOpen", 2);
D([
  N()
], L.prototype, "reportReason", 2);
D([
  N()
], L.prototype, "reportDetail", 2);
D([
  N()
], L.prototype, "reportSubmitting", 2);
D([
  N()
], L.prototype, "reportError", 2);
D([
  N()
], L.prototype, "inquiryOpen", 2);
D([
  N()
], L.prototype, "inquiryCategory", 2);
D([
  N()
], L.prototype, "inquirySubject", 2);
D([
  N()
], L.prototype, "inquiryBody", 2);
D([
  N()
], L.prototype, "inquiryContact", 2);
D([
  N()
], L.prototype, "inquirySubmitting", 2);
D([
  N()
], L.prototype, "inquiryError", 2);
D([
  N()
], L.prototype, "inquirySuccess", 2);
D([
  N()
], L.prototype, "pendingAttachments", 2);
D([
  N()
], L.prototype, "capturing", 2);
D([
  N()
], L.prototype, "regionCapturing", 2);
D([
  N()
], L.prototype, "regionRect", 2);
D([
  Gp(".composer textarea")
], L.prototype, "composerTextarea", 2);
L = D([
  Op("timely-chatbot")
], L);
const la = "timely-chatbot-bid", $w = "http://localhost:3410";
function Gw() {
  try {
    const t = localStorage.getItem(la);
    if (t) return t;
    const A = `tc-${crypto.randomUUID()}`;
    return localStorage.setItem(la, A), A;
  } catch {
    return `tc-${crypto.randomUUID()}`;
  }
}
function Vw(t) {
  if (!t.apiKey) throw new Error("TimelyChatbot.init: apiKey가 필요합니다");
  const A = document.createElement("timely-chatbot");
  return A.apiBaseUrl = t.apiBaseUrl ?? $w, A.apiKey = t.apiKey, A.browserId = Gw(), t.getAccessToken && (A.getAccessToken = t.getAccessToken), t.position === "bottom-left" && (A.dataset.position = "bottom-left"), t.theme && (A.themeOverride = t.theme), (t.mountTo ?? document.body).appendChild(A), {
    destroy: () => A.remove()
  };
}
window.TimelyChatbot = { init: Vw };
export {
  Vw as init
};
//# sourceMappingURL=widget.mjs.map
