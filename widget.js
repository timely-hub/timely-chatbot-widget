var TimelyChatbot=(function(zA){"use strict";var zw=Object.defineProperty;var Ww=(zA,RA,fe)=>RA in zA?zw(zA,RA,{enumerable:!0,configurable:!0,writable:!0,value:fe}):zA[RA]=fe;var P=(zA,RA,fe)=>Ww(zA,typeof RA!="symbol"?RA+"":RA,fe);/*! @license DOMPurify 3.4.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.2/LICENSE */var Vn;const{entries:RA,setPrototypeOf:fe,isFrozen:Gl,getPrototypeOf:Vl,getOwnPropertyDescriptor:Xl}=Object;let{freeze:pA,seal:yA,create:Ke}=Object,{apply:Cs,construct:ms}=typeof Reflect<"u"&&Reflect;pA||(pA=function(A){return A}),yA||(yA=function(A){return A}),Cs||(Cs=function(A,e){for(var r=arguments.length,s=new Array(r>2?r-2:0),n=2;n<r;n++)s[n-2]=arguments[n];return A.apply(e,s)}),ms||(ms=function(A){for(var e=arguments.length,r=new Array(e>1?e-1:0),s=1;s<e;s++)r[s-1]=arguments[s];return new A(...r)});const nt=eA(Array.prototype.forEach),zl=eA(Array.prototype.lastIndexOf),ai=eA(Array.prototype.pop),it=eA(Array.prototype.push),Wl=eA(Array.prototype.splice),wA=Array.isArray,ot=eA(String.prototype.toLowerCase),Us=eA(String.prototype.toString),li=eA(String.prototype.match),Me=eA(String.prototype.replace),ci=eA(String.prototype.indexOf),Jl=eA(String.prototype.trim),Yl=eA(Number.prototype.toString),Zl=eA(Boolean.prototype.toString),hi=typeof BigInt>"u"?null:eA(BigInt.prototype.toString),Bi=typeof Symbol>"u"?null:eA(Symbol.prototype.toString),Y=eA(Object.prototype.hasOwnProperty),at=eA(Object.prototype.toString),lA=eA(RegExp.prototype.test),jt=ql(TypeError);function eA(t){return function(A){A instanceof RegExp&&(A.lastIndex=0);for(var e=arguments.length,r=new Array(e>1?e-1:0),s=1;s<e;s++)r[s-1]=arguments[s];return Cs(t,A,r)}}function ql(t){return function(){for(var A=arguments.length,e=new Array(A),r=0;r<A;r++)e[r]=arguments[r];return ms(t,e)}}function S(t,A){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ot;if(fe&&fe(t,null),!wA(A))return t;let r=A.length;for(;r--;){let s=A[r];if(typeof s=="string"){const n=e(s);n!==s&&(Gl(A)||(A[r]=n),s=n)}t[s]=!0}return t}function jl(t){for(let A=0;A<t.length;A++)Y(t,A)||(t[A]=null);return t}function CA(t){const A=Ke(null);for(const[e,r]of RA(t))Y(t,e)&&(wA(r)?A[e]=jl(r):r&&typeof r=="object"&&r.constructor===Object?A[e]=CA(r):A[e]=r);return A}function Ac(t){switch(typeof t){case"string":return t;case"number":return Yl(t);case"boolean":return Zl(t);case"bigint":return hi?hi(t):"0";case"symbol":return Bi?Bi(t):"Symbol()";case"undefined":return at(t);case"function":case"object":{if(t===null)return at(t);const A=t,e=Re(A,"toString");if(typeof e=="function"){const r=e(A);return typeof r=="string"?r:at(r)}return at(t)}default:return at(t)}}function Re(t,A){for(;t!==null;){const r=Xl(t,A);if(r){if(r.get)return eA(r.get);if(typeof r.value=="function")return eA(r.value)}t=Vl(t)}function e(){return null}return e}function ec(t){try{return lA(t,""),!0}catch{return!1}}const gi=pA(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Fs=pA(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),xs=pA(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),tc=pA(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),bs=pA(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),rc=pA(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ui=pA(["#text"]),di=pA(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Es=pA(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),fi=pA(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ar=pA(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),sc=yA(/\{\{[\w\W]*|[\w\W]*\}\}/gm),nc=yA(/<%[\w\W]*|[\w\W]*%>/gm),ic=yA(/\$\{[\w\W]*/gm),oc=yA(/^data-[\-\w.\u00B7-\uFFFF]+$/),ac=yA(/^aria-[\-\w]+$/),pi=yA(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),lc=yA(/^(?:\w+script|data):/i),cc=yA(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),wi=yA(/^html$/i),hc=yA(/^[a-z][.\w]*(-[.\w]+)+$/i);var Qi=Object.freeze({__proto__:null,ARIA_ATTR:ac,ATTR_WHITESPACE:cc,CUSTOM_ELEMENT:hc,DATA_ATTR:oc,DOCTYPE_NAME:wi,ERB_EXPR:nc,IS_ALLOWED_URI:pi,IS_SCRIPT_OR_DATA:lc,MUSTACHE_EXPR:sc,TMPLIT_EXPR:ic});const lt={element:1,text:3,progressingInstruction:7,comment:8,document:9},Bc=function(){return typeof window>"u"?null:window},gc=function(A,e){if(typeof A!="object"||typeof A.createPolicy!="function")return null;let r=null;const s="data-tt-policy-suffix";e&&e.hasAttribute(s)&&(r=e.getAttribute(s));const n="dompurify"+(r?"#"+r:"");try{return A.createPolicy(n,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return console.warn("TrustedTypes policy "+n+" could not be created."),null}},Ci=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function mi(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Bc();const A=I=>mi(I);if(A.version="3.4.2",A.removed=[],!t||!t.document||t.document.nodeType!==lt.document||!t.Element)return A.isSupported=!1,A;let{document:e}=t;const r=e,s=r.currentScript,{DocumentFragment:n,HTMLTemplateElement:i,Node:o,Element:a,NodeFilter:c,NamedNodeMap:l=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:h,DOMParser:g,trustedTypes:u}=t,d=a.prototype,f=Re(d,"cloneNode"),U=Re(d,"remove"),y=Re(d,"nextSibling"),Q=Re(d,"childNodes"),x=Re(d,"parentNode");if(typeof i=="function"){const I=e.createElement("template");I.content&&I.content.ownerDocument&&(e=I.content.ownerDocument)}let E,b="";const{implementation:D,createNodeIterator:J,createDocumentFragment:BA,getElementsByTagName:z}=e,{importNode:ue}=r;let nA=Ci();A.isSupported=typeof RA=="function"&&typeof x=="function"&&D&&D.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:DA,ERB_EXPR:Ae,TMPLIT_EXPR:Le,DATA_ATTR:us,ARIA_ATTR:Mw,IS_SCRIPT_OR_DATA:Rw,ATTR_WHITESPACE:Ql,CUSTOM_ELEMENT:Ow}=Qi;let{IS_ALLOWED_URI:Cl}=Qi,oA=null;const ml=S({},[...gi,...Fs,...xs,...bs,...ui]);let gA=null;const Ul=S({},[...di,...Es,...fi,...Ar]);let AA=Object.seal(Ke(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Jt=null,ds=null;const de=Object.seal(Ke(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Fl=!0,Xn=!0,xl=!1,bl=!0,ve=!1,Yt=!0,ke=!1,zn=!1,Wn=!1,et=!1,fs=!1,ps=!1,El=!0,yl=!1;const Il="user-content-";let Jn=!0,Zt=!1,tt={},VA=null;const Yn=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Hl=null;const Tl=S({},["audio","video","img","source","image","track"]);let Zn=null;const Sl=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ws="http://www.w3.org/1998/Math/MathML",Qs="http://www.w3.org/2000/svg",XA="http://www.w3.org/1999/xhtml";let rt=XA,qn=!1,jn=null;const _w=S({},[ws,Qs,XA],Us);let Ai=S({},["mi","mo","mn","ms","mtext"]),ei=S({},["annotation-xml"]);const Nw=S({},["title","style","font","a","script"]);let qt=null;const $w=["application/xhtml+xml","text/html"],Pw="text/html";let iA=null,st=null;const Gw=e.createElement("form"),Ll=function(B){return B instanceof RegExp||B instanceof Function},ti=function(){let B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(st&&st===B)return;(!B||typeof B!="object")&&(B={}),B=CA(B),qt=$w.indexOf(B.PARSER_MEDIA_TYPE)===-1?Pw:B.PARSER_MEDIA_TYPE,iA=qt==="application/xhtml+xml"?Us:ot,oA=Y(B,"ALLOWED_TAGS")&&wA(B.ALLOWED_TAGS)?S({},B.ALLOWED_TAGS,iA):ml,gA=Y(B,"ALLOWED_ATTR")&&wA(B.ALLOWED_ATTR)?S({},B.ALLOWED_ATTR,iA):Ul,jn=Y(B,"ALLOWED_NAMESPACES")&&wA(B.ALLOWED_NAMESPACES)?S({},B.ALLOWED_NAMESPACES,Us):_w,Zn=Y(B,"ADD_URI_SAFE_ATTR")&&wA(B.ADD_URI_SAFE_ATTR)?S(CA(Sl),B.ADD_URI_SAFE_ATTR,iA):Sl,Hl=Y(B,"ADD_DATA_URI_TAGS")&&wA(B.ADD_DATA_URI_TAGS)?S(CA(Tl),B.ADD_DATA_URI_TAGS,iA):Tl,VA=Y(B,"FORBID_CONTENTS")&&wA(B.FORBID_CONTENTS)?S({},B.FORBID_CONTENTS,iA):Yn,Jt=Y(B,"FORBID_TAGS")&&wA(B.FORBID_TAGS)?S({},B.FORBID_TAGS,iA):CA({}),ds=Y(B,"FORBID_ATTR")&&wA(B.FORBID_ATTR)?S({},B.FORBID_ATTR,iA):CA({}),tt=Y(B,"USE_PROFILES")?B.USE_PROFILES&&typeof B.USE_PROFILES=="object"?CA(B.USE_PROFILES):B.USE_PROFILES:!1,Fl=B.ALLOW_ARIA_ATTR!==!1,Xn=B.ALLOW_DATA_ATTR!==!1,xl=B.ALLOW_UNKNOWN_PROTOCOLS||!1,bl=B.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ve=B.SAFE_FOR_TEMPLATES||!1,Yt=B.SAFE_FOR_XML!==!1,ke=B.WHOLE_DOCUMENT||!1,et=B.RETURN_DOM||!1,fs=B.RETURN_DOM_FRAGMENT||!1,ps=B.RETURN_TRUSTED_TYPE||!1,Wn=B.FORCE_BODY||!1,El=B.SANITIZE_DOM!==!1,yl=B.SANITIZE_NAMED_PROPS||!1,Jn=B.KEEP_CONTENT!==!1,Zt=B.IN_PLACE||!1,Cl=ec(B.ALLOWED_URI_REGEXP)?B.ALLOWED_URI_REGEXP:pi,rt=typeof B.NAMESPACE=="string"?B.NAMESPACE:XA,Ai=Y(B,"MATHML_TEXT_INTEGRATION_POINTS")&&B.MATHML_TEXT_INTEGRATION_POINTS&&typeof B.MATHML_TEXT_INTEGRATION_POINTS=="object"?CA(B.MATHML_TEXT_INTEGRATION_POINTS):S({},["mi","mo","mn","ms","mtext"]),ei=Y(B,"HTML_INTEGRATION_POINTS")&&B.HTML_INTEGRATION_POINTS&&typeof B.HTML_INTEGRATION_POINTS=="object"?CA(B.HTML_INTEGRATION_POINTS):S({},["annotation-xml"]);const p=Y(B,"CUSTOM_ELEMENT_HANDLING")&&B.CUSTOM_ELEMENT_HANDLING&&typeof B.CUSTOM_ELEMENT_HANDLING=="object"?CA(B.CUSTOM_ELEMENT_HANDLING):Ke(null);if(AA=Ke(null),Y(p,"tagNameCheck")&&Ll(p.tagNameCheck)&&(AA.tagNameCheck=p.tagNameCheck),Y(p,"attributeNameCheck")&&Ll(p.attributeNameCheck)&&(AA.attributeNameCheck=p.attributeNameCheck),Y(p,"allowCustomizedBuiltInElements")&&typeof p.allowCustomizedBuiltInElements=="boolean"&&(AA.allowCustomizedBuiltInElements=p.allowCustomizedBuiltInElements),ve&&(Xn=!1),fs&&(et=!0),tt&&(oA=S({},ui),gA=Ke(null),tt.html===!0&&(S(oA,gi),S(gA,di)),tt.svg===!0&&(S(oA,Fs),S(gA,Es),S(gA,Ar)),tt.svgFilters===!0&&(S(oA,xs),S(gA,Es),S(gA,Ar)),tt.mathMl===!0&&(S(oA,bs),S(gA,fi),S(gA,Ar))),de.tagCheck=null,de.attributeCheck=null,Y(B,"ADD_TAGS")&&(typeof B.ADD_TAGS=="function"?de.tagCheck=B.ADD_TAGS:wA(B.ADD_TAGS)&&(oA===ml&&(oA=CA(oA)),S(oA,B.ADD_TAGS,iA))),Y(B,"ADD_ATTR")&&(typeof B.ADD_ATTR=="function"?de.attributeCheck=B.ADD_ATTR:wA(B.ADD_ATTR)&&(gA===Ul&&(gA=CA(gA)),S(gA,B.ADD_ATTR,iA))),Y(B,"ADD_URI_SAFE_ATTR")&&wA(B.ADD_URI_SAFE_ATTR)&&S(Zn,B.ADD_URI_SAFE_ATTR,iA),Y(B,"FORBID_CONTENTS")&&wA(B.FORBID_CONTENTS)&&(VA===Yn&&(VA=CA(VA)),S(VA,B.FORBID_CONTENTS,iA)),Y(B,"ADD_FORBID_CONTENTS")&&wA(B.ADD_FORBID_CONTENTS)&&(VA===Yn&&(VA=CA(VA)),S(VA,B.ADD_FORBID_CONTENTS,iA)),Jn&&(oA["#text"]=!0),ke&&S(oA,["html","head","body"]),oA.table&&(S(oA,["tbody"]),delete Jt.tbody),B.TRUSTED_TYPES_POLICY){if(typeof B.TRUSTED_TYPES_POLICY.createHTML!="function")throw jt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof B.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw jt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');E=B.TRUSTED_TYPES_POLICY,b=E.createHTML("")}else E===void 0&&(E=gc(u,s)),E!==null&&typeof b=="string"&&(b=E.createHTML(""));pA&&pA(B),st=B},vl=S({},[...Fs,...xs,...tc]),kl=S({},[...bs,...rc]),Vw=function(B){let p=x(B);(!p||!p.tagName)&&(p={namespaceURI:rt,tagName:"template"});const F=ot(B.tagName),V=ot(p.tagName);return jn[B.namespaceURI]?B.namespaceURI===Qs?p.namespaceURI===XA?F==="svg":p.namespaceURI===ws?F==="svg"&&(V==="annotation-xml"||Ai[V]):!!vl[F]:B.namespaceURI===ws?p.namespaceURI===XA?F==="math":p.namespaceURI===Qs?F==="math"&&ei[V]:!!kl[F]:B.namespaceURI===XA?p.namespaceURI===Qs&&!ei[V]||p.namespaceURI===ws&&!Ai[V]?!1:!kl[F]&&(Nw[F]||!vl[F]):!!(qt==="application/xhtml+xml"&&jn[B.namespaceURI]):!1},KA=function(B){it(A.removed,{element:B});try{x(B).removeChild(B)}catch{U(B)}},De=function(B,p){try{it(A.removed,{attribute:p.getAttributeNode(B),from:p})}catch{it(A.removed,{attribute:null,from:p})}if(p.removeAttribute(B),B==="is")if(et||fs)try{KA(p)}catch{}else try{p.setAttribute(B,"")}catch{}},Dl=function(B){let p=null,F=null;if(Wn)B="<remove></remove>"+B;else{const sA=li(B,/^[\r\n\t ]+/);F=sA&&sA[0]}qt==="application/xhtml+xml"&&rt===XA&&(B='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+B+"</body></html>");const V=E?E.createHTML(B):B;if(rt===XA)try{p=new g().parseFromString(V,qt)}catch{}if(!p||!p.documentElement){p=D.createDocument(rt,"template",null);try{p.documentElement.innerHTML=qn?b:V}catch{}}const fA=p.body||p.documentElement;return B&&F&&fA.insertBefore(e.createTextNode(F),fA.childNodes[0]||null),rt===XA?z.call(p,ke?"html":"body")[0]:ke?p.documentElement:fA},Kl=function(B){return J.call(B.ownerDocument||B,B,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},ri=function(B){return B instanceof h&&(typeof B.nodeName!="string"||typeof B.textContent!="string"||typeof B.removeChild!="function"||!(B.attributes instanceof l)||typeof B.removeAttribute!="function"||typeof B.setAttribute!="function"||typeof B.namespaceURI!="string"||typeof B.insertBefore!="function"||typeof B.hasChildNodes!="function")},si=function(B){return typeof o=="function"&&B instanceof o};function ee(I,B,p){nt(I,F=>{F.call(A,B,p,st)})}const Ml=function(B){let p=null;if(ee(nA.beforeSanitizeElements,B,null),ri(B))return KA(B),!0;const F=iA(B.nodeName);if(ee(nA.uponSanitizeElement,B,{tagName:F,allowedTags:oA}),Yt&&B.hasChildNodes()&&!si(B.firstElementChild)&&lA(/<[/\w!]/g,B.innerHTML)&&lA(/<[/\w!]/g,B.textContent)||Yt&&B.namespaceURI===XA&&F==="style"&&si(B.firstElementChild)||B.nodeType===lt.progressingInstruction||Yt&&B.nodeType===lt.comment&&lA(/<[/\w]/g,B.data))return KA(B),!0;if(Jt[F]||!(de.tagCheck instanceof Function&&de.tagCheck(F))&&!oA[F]){if(!Jt[F]&&Ol(F)&&(AA.tagNameCheck instanceof RegExp&&lA(AA.tagNameCheck,F)||AA.tagNameCheck instanceof Function&&AA.tagNameCheck(F)))return!1;if(Jn&&!VA[F]){const V=x(B)||B.parentNode,fA=Q(B)||B.childNodes;if(fA&&V){const sA=fA.length;for(let xA=sA-1;xA>=0;--xA){const SA=f(fA[xA],!0);V.insertBefore(SA,y(B))}}}return KA(B),!0}return B instanceof a&&!Vw(B)||(F==="noscript"||F==="noembed"||F==="noframes")&&lA(/<\/no(script|embed|frames)/i,B.innerHTML)?(KA(B),!0):(ve&&B.nodeType===lt.text&&(p=B.textContent,nt([DA,Ae,Le],V=>{p=Me(p,V," ")}),B.textContent!==p&&(it(A.removed,{element:B.cloneNode()}),B.textContent=p)),ee(nA.afterSanitizeElements,B,null),!1)},Rl=function(B,p,F){if(ds[p]||El&&(p==="id"||p==="name")&&(F in e||F in Gw))return!1;const V=gA[p]||de.attributeCheck instanceof Function&&de.attributeCheck(p,B);if(!(Xn&&!ds[p]&&lA(us,p))){if(!(Fl&&lA(Mw,p))){if(!V||ds[p]){if(!(Ol(B)&&(AA.tagNameCheck instanceof RegExp&&lA(AA.tagNameCheck,B)||AA.tagNameCheck instanceof Function&&AA.tagNameCheck(B))&&(AA.attributeNameCheck instanceof RegExp&&lA(AA.attributeNameCheck,p)||AA.attributeNameCheck instanceof Function&&AA.attributeNameCheck(p,B))||p==="is"&&AA.allowCustomizedBuiltInElements&&(AA.tagNameCheck instanceof RegExp&&lA(AA.tagNameCheck,F)||AA.tagNameCheck instanceof Function&&AA.tagNameCheck(F))))return!1}else if(!Zn[p]){if(!lA(Cl,Me(F,Ql,""))){if(!((p==="src"||p==="xlink:href"||p==="href")&&B!=="script"&&ci(F,"data:")===0&&Hl[B])){if(!(xl&&!lA(Rw,Me(F,Ql,"")))){if(F)return!1}}}}}}return!0},Xw=S({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Ol=function(B){return!Xw[ot(B)]&&lA(Ow,B)},_l=function(B){ee(nA.beforeSanitizeAttributes,B,null);const{attributes:p}=B;if(!p||ri(B))return;const F={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:gA,forceKeepAttr:void 0};let V=p.length;for(;V--;){const fA=p[V],{name:sA,namespaceURI:xA,value:SA}=fA,MA=iA(sA),ni=SA;let aA=sA==="value"?ni:Jl(ni);if(F.attrName=MA,F.attrValue=aA,F.keepAttr=!0,F.forceKeepAttr=void 0,ee(nA.uponSanitizeAttribute,B,F),aA=F.attrValue,yl&&(MA==="id"||MA==="name")&&ci(aA,Il)!==0&&(De(sA,B),aA=Il+aA),Yt&&lA(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,aA)){De(sA,B);continue}if(MA==="attributename"&&li(aA,"href")){De(sA,B);continue}if(F.forceKeepAttr)continue;if(!F.keepAttr){De(sA,B);continue}if(!bl&&lA(/\/>/i,aA)){De(sA,B);continue}ve&&nt([DA,Ae,Le],Pl=>{aA=Me(aA,Pl," ")});const $l=iA(B.nodeName);if(!Rl($l,MA,aA)){De(sA,B);continue}if(E&&typeof u=="object"&&typeof u.getAttributeType=="function"&&!xA)switch(u.getAttributeType($l,MA)){case"TrustedHTML":{aA=E.createHTML(aA);break}case"TrustedScriptURL":{aA=E.createScriptURL(aA);break}}if(aA!==ni)try{xA?B.setAttributeNS(xA,sA,aA):B.setAttribute(sA,aA),ri(B)?KA(B):ai(A.removed)}catch{De(sA,B)}}ee(nA.afterSanitizeAttributes,B,null)},Nl=function(B){let p=null;const F=Kl(B);for(ee(nA.beforeSanitizeShadowDOM,B,null);p=F.nextNode();)ee(nA.uponSanitizeShadowNode,p,null),Ml(p),_l(p),p.content instanceof n&&Nl(p.content);ee(nA.afterSanitizeShadowDOM,B,null)};return A.sanitize=function(I){let B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p=null,F=null,V=null,fA=null;if(qn=!I,qn&&(I="<!-->"),typeof I!="string"&&!si(I)&&(I=Ac(I),typeof I!="string"))throw jt("dirty is not a string, aborting");if(!A.isSupported)return I;if(zn||ti(B),A.removed=[],typeof I=="string"&&(Zt=!1),Zt){const SA=I.nodeName;if(typeof SA=="string"){const MA=iA(SA);if(!oA[MA]||Jt[MA])throw jt("root node is forbidden and cannot be sanitized in-place")}}else if(I instanceof o)p=Dl("<!---->"),F=p.ownerDocument.importNode(I,!0),F.nodeType===lt.element&&F.nodeName==="BODY"||F.nodeName==="HTML"?p=F:p.appendChild(F);else{if(!et&&!ve&&!ke&&I.indexOf("<")===-1)return E&&ps?E.createHTML(I):I;if(p=Dl(I),!p)return et?null:ps?b:""}p&&Wn&&KA(p.firstChild);const sA=Kl(Zt?I:p);for(;V=sA.nextNode();)Ml(V),_l(V),V.content instanceof n&&Nl(V.content);if(Zt)return I;if(et){if(ve){p.normalize();let SA=p.innerHTML;nt([DA,Ae,Le],MA=>{SA=Me(SA,MA," ")}),p.innerHTML=SA}if(fs)for(fA=BA.call(p.ownerDocument);p.firstChild;)fA.appendChild(p.firstChild);else fA=p;return(gA.shadowroot||gA.shadowrootmode)&&(fA=ue.call(r,fA,!0)),fA}let xA=ke?p.outerHTML:p.innerHTML;return ke&&oA["!doctype"]&&p.ownerDocument&&p.ownerDocument.doctype&&p.ownerDocument.doctype.name&&lA(wi,p.ownerDocument.doctype.name)&&(xA="<!DOCTYPE "+p.ownerDocument.doctype.name+`>
`+xA),ve&&nt([DA,Ae,Le],SA=>{xA=Me(xA,SA," ")}),E&&ps?E.createHTML(xA):xA},A.setConfig=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ti(I),zn=!0},A.clearConfig=function(){st=null,zn=!1},A.isValidAttribute=function(I,B,p){st||ti({});const F=iA(I),V=iA(B);return Rl(F,V,p)},A.addHook=function(I,B){typeof B=="function"&&it(nA[I],B)},A.removeHook=function(I,B){if(B!==void 0){const p=zl(nA[I],B);return p===-1?void 0:Wl(nA[I],p,1)[0]}return ai(nA[I])},A.removeHooks=function(I){nA[I]=[]},A.removeAllHooks=function(){nA=Ci()},A}var Ui=mi();/*!
 * html2canvas-pro 2.0.2 <https://yorickshan.github.io/html2canvas-pro/>
 * Copyright (c) 2024-present yorickshan and html2canvas-pro contributors
 * Released under MIT License
 */class uA{constructor(A,e,r,s){this.left=A,this.top=e,this.width=r,this.height=s}add(A,e,r,s){return new uA(this.left+A,this.top+e,this.width+r,this.height+s)}static fromClientRect(A,e){return new uA(e.left+A.windowBounds.left,e.top+A.windowBounds.top,e.width,e.height)}static fromDOMRectList(A,e){const r=Array.from(e);let s=r.find(n=>n.width!==0);return s||(s=r.find(n=>n.height!==0)),!s&&r.length>0&&(s=r[0]),s?new uA(s.left+A.windowBounds.left,s.top+A.windowBounds.top,s.width,s.height):uA.EMPTY}}uA.EMPTY=new uA(0,0,0,0);const er=(t,A)=>uA.fromClientRect(t,A.getBoundingClientRect()),uc=t=>{const A=t.body,e=t.documentElement;if(!A||!e)throw new Error("Unable to get document size");const r=Math.max(Math.max(A.scrollWidth,e.scrollWidth),Math.max(A.offsetWidth,e.offsetWidth),Math.max(A.clientWidth,e.clientWidth)),s=Math.max(Math.max(A.scrollHeight,e.scrollHeight),Math.max(A.offsetHeight,e.offsetHeight),Math.max(A.clientHeight,e.clientHeight));return new uA(0,0,r,s)};for(var tr=function(t){for(var A=[],e=0,r=t.length;e<r;){var s=t.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=t.charCodeAt(e++);(n&64512)===56320?A.push(((s&1023)<<10)+(n&1023)+65536):(A.push(s),e--)}else A.push(s)}return A},q=function(){for(var t=[],A=0;A<arguments.length;A++)t[A]=arguments[A];if(String.fromCodePoint)return String.fromCodePoint.apply(String,t);var e=t.length;if(!e)return"";for(var r=[],s=-1,n="";++s<e;){var i=t[s];i<=65535?r.push(i):(i-=65536,r.push((i>>10)+55296,i%1024+56320)),(s+1===e||r.length>16384)&&(n+=String.fromCharCode.apply(String,r),r.length=0)}return n},Fi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",dc=typeof Uint8Array>"u"?[]:new Uint8Array(256),rr=0;rr<Fi.length;rr++)dc[Fi.charCodeAt(rr)]=rr;for(var xi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ct=typeof Uint8Array>"u"?[]:new Uint8Array(256),sr=0;sr<xi.length;sr++)ct[xi.charCodeAt(sr)]=sr;for(var fc=function(t){var A=t.length*.75,e=t.length,r,s=0,n,i,o,a;t[t.length-1]==="="&&(A--,t[t.length-2]==="="&&A--);var c=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(A):new Array(A),l=Array.isArray(c)?c:new Uint8Array(c);for(r=0;r<e;r+=4)n=ct[t.charCodeAt(r)],i=ct[t.charCodeAt(r+1)],o=ct[t.charCodeAt(r+2)],a=ct[t.charCodeAt(r+3)],l[s++]=n<<2|i>>4,l[s++]=(i&15)<<4|o>>2,l[s++]=(o&3)<<6|a&63;return c},pc=function(t){for(var A=t.length,e=[],r=0;r<A;r+=2)e.push(t[r+1]<<8|t[r]);return e},wc=function(t){for(var A=t.length,e=[],r=0;r<A;r+=4)e.push(t[r+3]<<24|t[r+2]<<16|t[r+1]<<8|t[r]);return e},pe=5,ys=11,Is=2,Qc=ys-pe,bi=65536>>pe,Cc=1<<pe,Hs=Cc-1,mc=1024>>pe,Uc=bi+mc,Fc=Uc,xc=32,bc=Fc+xc,Ec=65536>>ys,yc=1<<Qc,Ic=yc-1,Ei=function(t,A,e){return t.slice?t.slice(A,e):new Uint16Array(Array.prototype.slice.call(t,A,e))},Hc=function(t,A,e){return t.slice?t.slice(A,e):new Uint32Array(Array.prototype.slice.call(t,A,e))},Tc=function(t,A){var e=fc(t),r=Array.isArray(e)?wc(e):new Uint32Array(e),s=Array.isArray(e)?pc(e):new Uint16Array(e),n=24,i=Ei(s,n/2,r[4]/2),o=r[5]===2?Ei(s,(n+r[4])/2):Hc(r,Math.ceil((n+r[4])/4));return new Sc(r[0],r[1],r[2],r[3],i,o)},Sc=(function(){function t(A,e,r,s,n,i){this.initialValue=A,this.errorValue=e,this.highStart=r,this.highValueIndex=s,this.index=n,this.data=i}return t.prototype.get=function(A){var e;if(A>=0){if(A<55296||A>56319&&A<=65535)return e=this.index[A>>pe],e=(e<<Is)+(A&Hs),this.data[e];if(A<=65535)return e=this.index[bi+(A-55296>>pe)],e=(e<<Is)+(A&Hs),this.data[e];if(A<this.highStart)return e=bc-Ec+(A>>ys),e=this.index[e],e+=A>>pe&Ic,e=this.index[e],e=(e<<Is)+(A&Hs),this.data[e];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},t})(),yi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Lc=typeof Uint8Array>"u"?[]:new Uint8Array(256),nr=0;nr<yi.length;nr++)Lc[yi.charCodeAt(nr)]=nr;var vc="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",Ii=50,kc=1,Hi=2,Ti=3,Dc=4,Kc=5,Si=7,Li=8,vi=9,te=10,Ts=11,ki=12,Ss=13,Mc=14,ht=15,Ls=16,ir=17,Bt=18,Rc=19,Di=20,vs=21,gt=22,ks=23,Oe=24,bA=25,ut=26,dt=27,_e=28,Oc=29,we=30,_c=31,or=32,ar=33,Ds=34,Ks=35,Ms=36,ft=37,Rs=38,lr=39,cr=40,Os=41,Ki=42,Nc=43,$c=[9001,65288],Mi="!",k="×",hr="÷",_s=Tc(vc),WA=[we,Ms],Ns=[kc,Hi,Ti,Kc],Ri=[te,Li],Oi=[dt,ut],Pc=Ns.concat(Ri),_i=[Rs,lr,cr,Ds,Ks],Gc=[ht,Ss],Vc=function(t,A){A===void 0&&(A="strict");var e=[],r=[],s=[];return t.forEach(function(n,i){var o=_s.get(n);if(o>Ii?(s.push(!0),o-=Ii):s.push(!1),["normal","auto","loose"].indexOf(A)!==-1&&[8208,8211,12316,12448].indexOf(n)!==-1)return r.push(i),e.push(Ls);if(o===Dc||o===Ts){if(i===0)return r.push(i),e.push(we);var a=e[i-1];return Pc.indexOf(a)===-1?(r.push(r[i-1]),e.push(a)):(r.push(i),e.push(we))}if(r.push(i),o===_c)return e.push(A==="strict"?vs:ft);if(o===Ki||o===Oc)return e.push(we);if(o===Nc)return n>=131072&&n<=196605||n>=196608&&n<=262141?e.push(ft):e.push(we);e.push(o)}),[r,e,s]},$s=function(t,A,e,r){var s=r[e];if(Array.isArray(t)?t.indexOf(s)!==-1:t===s)for(var n=e;n<=r.length;){n++;var i=r[n];if(i===A)return!0;if(i!==te)break}if(s===te)for(var n=e;n>0;){n--;var o=r[n];if(Array.isArray(t)?t.indexOf(o)!==-1:t===o)for(var a=e;a<=r.length;){a++;var i=r[a];if(i===A)return!0;if(i!==te)break}if(o!==te)break}return!1},Ni=function(t,A){for(var e=t;e>=0;){var r=A[e];if(r===te)e--;else return r}return 0},Xc=function(t,A,e,r,s){if(e[r]===0)return k;var n=r-1;if(Array.isArray(s)&&s[n]===!0)return k;var i=n-1,o=n+1,a=A[n],c=i>=0?A[i]:0,l=A[o];if(a===Hi&&l===Ti)return k;if(Ns.indexOf(a)!==-1)return Mi;if(Ns.indexOf(l)!==-1||Ri.indexOf(l)!==-1)return k;if(Ni(n,A)===Li)return hr;if(_s.get(t[n])===Ts||(a===or||a===ar)&&_s.get(t[o])===Ts||a===Si||l===Si||a===vi||[te,Ss,ht].indexOf(a)===-1&&l===vi||[ir,Bt,Rc,Oe,_e].indexOf(l)!==-1||Ni(n,A)===gt||$s(ks,gt,n,A)||$s([ir,Bt],vs,n,A)||$s(ki,ki,n,A))return k;if(a===te)return hr;if(a===ks||l===ks)return k;if(l===Ls||a===Ls)return hr;if([Ss,ht,vs].indexOf(l)!==-1||a===Mc||c===Ms&&Gc.indexOf(a)!==-1||a===_e&&l===Ms||l===Di||WA.indexOf(l)!==-1&&a===bA||WA.indexOf(a)!==-1&&l===bA||a===dt&&[ft,or,ar].indexOf(l)!==-1||[ft,or,ar].indexOf(a)!==-1&&l===ut||WA.indexOf(a)!==-1&&Oi.indexOf(l)!==-1||Oi.indexOf(a)!==-1&&WA.indexOf(l)!==-1||[dt,ut].indexOf(a)!==-1&&(l===bA||[gt,ht].indexOf(l)!==-1&&A[o+1]===bA)||[gt,ht].indexOf(a)!==-1&&l===bA||a===bA&&[bA,_e,Oe].indexOf(l)!==-1)return k;if([bA,_e,Oe,ir,Bt].indexOf(l)!==-1)for(var h=n;h>=0;){var g=A[h];if(g===bA)return k;if([_e,Oe].indexOf(g)!==-1)h--;else break}if([dt,ut].indexOf(l)!==-1)for(var h=[ir,Bt].indexOf(a)!==-1?i:n;h>=0;){var g=A[h];if(g===bA)return k;if([_e,Oe].indexOf(g)!==-1)h--;else break}if(Rs===a&&[Rs,lr,Ds,Ks].indexOf(l)!==-1||[lr,Ds].indexOf(a)!==-1&&[lr,cr].indexOf(l)!==-1||[cr,Ks].indexOf(a)!==-1&&l===cr||_i.indexOf(a)!==-1&&[Di,ut].indexOf(l)!==-1||_i.indexOf(l)!==-1&&a===dt||WA.indexOf(a)!==-1&&WA.indexOf(l)!==-1||a===Oe&&WA.indexOf(l)!==-1||WA.concat(bA).indexOf(a)!==-1&&l===gt&&$c.indexOf(t[o])===-1||WA.concat(bA).indexOf(l)!==-1&&a===Bt)return k;if(a===Os&&l===Os){for(var u=e[n],d=1;u>0&&(u--,A[u]===Os);)d++;if(d%2!==0)return k}return a===or&&l===ar?k:hr},zc=function(t,A){A||(A={lineBreak:"normal",wordBreak:"normal"});var e=Vc(t,A.lineBreak),r=e[0],s=e[1],n=e[2];(A.wordBreak==="break-all"||A.wordBreak==="break-word")&&(s=s.map(function(o){return[bA,we,Ki].indexOf(o)!==-1?ft:o}));var i=A.wordBreak==="keep-all"?n.map(function(o,a){return o&&t[a]>=19968&&t[a]<=40959}):void 0;return[r,s,i]},Wc=(function(){function t(A,e,r,s){this.codePoints=A,this.required=e===Mi,this.start=r,this.end=s}return t.prototype.slice=function(){return q.apply(void 0,this.codePoints.slice(this.start,this.end))},t})(),Jc=function(t,A){var e=tr(t),r=zc(e,A),s=r[0],n=r[1],i=r[2],o=e.length,a=0,c=0;return{next:function(){if(c>=o)return{done:!0,value:null};for(var l=k;c<o&&(l=Xc(e,n,s,++c,i))===k;);if(l!==k||c===o){var h=new Wc(e,l,a,c);return a=c,{value:h,done:!1}}return{done:!0,value:null}}}};const Yc=1,Zc=2,Ne=4,$i=8,Br=10,Pi=47,pt=92,qc=9,jc=32,gr=34,wt=61,Ah=35,eh=36,th=37,ur=39,dr=40,Qt=41,rh=95,mA=45,sh=33,nh=60,ih=62,oh=64,ah=91,lh=93,ch=61,hh=123,fr=63,Bh=125,Gi=124,gh=126,uh=128,Vi=65533,Ps=42,Qe=43,dh=44,fh=58,ph=59,Ct=46,wh=0,Qh=8,Ch=11,mh=14,Uh=31,Fh=127,OA=-1,Xi=48,zi=97,Wi=101,xh=102,bh=117,Eh=122,Ji=65,Yi=69,Zi=70,yh=85,Ih=90,dA=t=>t>=Xi&&t<=57,Hh=t=>t>=55296&&t<=57343,$e=t=>dA(t)||t>=Ji&&t<=Zi||t>=zi&&t<=xh,Th=t=>t>=zi&&t<=Eh,Sh=t=>t>=Ji&&t<=Ih,Lh=t=>Th(t)||Sh(t),vh=t=>t>=uh,pr=t=>t===Br||t===qc||t===jc,wr=t=>Lh(t)||vh(t)||t===rh,qi=t=>wr(t)||dA(t)||t===mA,kh=t=>t>=wh&&t<=Qh||t===Ch||t>=mh&&t<=Uh||t===Fh,re=(t,A)=>t!==pt?!1:A!==Br,Qr=(t,A,e)=>t===mA?wr(A)||re(A,e):wr(t)?!0:!!(t===pt&&re(t,A)),Gs=(t,A,e)=>t===Qe||t===mA?dA(A)?!0:A===Ct&&dA(e):dA(t===Ct?A:t),Dh=t=>{let A=0,e=1;(t[A]===Qe||t[A]===mA)&&(t[A]===mA&&(e=-1),A++);const r=[];for(;dA(t[A]);)r.push(t[A++]);const s=r.length?parseInt(q(...r),10):0;t[A]===Ct&&A++;const n=[];for(;dA(t[A]);)n.push(t[A++]);const i=n.length,o=i?parseInt(q(...n),10):0;(t[A]===Yi||t[A]===Wi)&&A++;let a=1;(t[A]===Qe||t[A]===mA)&&(t[A]===mA&&(a=-1),A++);const c=[];for(;dA(t[A]);)c.push(t[A++]);const l=c.length?parseInt(q(...c),10):0;return e*(s+o*Math.pow(10,-i))*Math.pow(10,a*l)},Kh={type:2},Mh={type:3},Rh={type:4},Oh={type:13},_h={type:8},Nh={type:21},$h={type:9},Ph={type:10},Gh={type:11},Vh={type:12},Xh={type:14},Cr={type:23},zh={type:1},Wh={type:25},Jh={type:24},Yh={type:26},Zh={type:27},qh={type:28},jh={type:29},AB={type:31},Vs={type:32};class ji{constructor(){this._value=[]}write(A){this._value=this._value.concat(tr(A))}read(){const A=[];let e=this.consumeToken();for(;e!==Vs;)A.push(e),e=this.consumeToken();return A}consumeToken(){const A=this.consumeCodePoint();switch(A){case gr:return this.consumeStringToken(gr);case Ah:const e=this.peekCodePoint(0),r=this.peekCodePoint(1),s=this.peekCodePoint(2);if(qi(e)||re(r,s)){const u=Qr(e,r,s)?Zc:Yc;return{type:5,value:this.consumeName(),flags:u}}break;case eh:if(this.peekCodePoint(0)===wt)return this.consumeCodePoint(),Oh;break;case ur:return this.consumeStringToken(ur);case dr:return Kh;case Qt:return Mh;case Ps:if(this.peekCodePoint(0)===wt)return this.consumeCodePoint(),Xh;break;case Qe:if(Gs(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case dh:return Rh;case mA:const n=A,i=this.peekCodePoint(0),o=this.peekCodePoint(1);if(Gs(n,i,o))return this.reconsumeCodePoint(A),this.consumeNumericToken();if(Qr(n,i,o))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();if(i===mA&&o===ih)return this.consumeCodePoint(),this.consumeCodePoint(),Jh;break;case Ct:if(Gs(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case Pi:if(this.peekCodePoint(0)===Ps)for(this.consumeCodePoint();;){let u=this.consumeCodePoint();if(u===Ps&&(u=this.consumeCodePoint(),u===Pi))return this.consumeToken();if(u===OA)return this.consumeToken()}break;case fh:return Yh;case ph:return Zh;case nh:if(this.peekCodePoint(0)===sh&&this.peekCodePoint(1)===mA&&this.peekCodePoint(2)===mA)return this.consumeCodePoint(),this.consumeCodePoint(),Wh;break;case oh:const a=this.peekCodePoint(0),c=this.peekCodePoint(1),l=this.peekCodePoint(2);if(Qr(a,c,l))return{type:7,value:this.consumeName()};break;case ah:return qh;case pt:if(re(A,this.peekCodePoint(0)))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();break;case lh:return jh;case ch:if(this.peekCodePoint(0)===wt)return this.consumeCodePoint(),_h;break;case hh:return Gh;case Bh:return Vh;case bh:case yh:const h=this.peekCodePoint(0),g=this.peekCodePoint(1);return h===Qe&&($e(g)||g===fr)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(A),this.consumeIdentLikeToken();case Gi:if(this.peekCodePoint(0)===wt)return this.consumeCodePoint(),$h;if(this.peekCodePoint(0)===Gi)return this.consumeCodePoint(),Nh;break;case gh:if(this.peekCodePoint(0)===wt)return this.consumeCodePoint(),Ph;break;case OA:return Vs}return pr(A)?(this.consumeWhiteSpace(),AB):dA(A)?(this.reconsumeCodePoint(A),this.consumeNumericToken()):wr(A)?(this.reconsumeCodePoint(A),this.consumeIdentLikeToken()):{type:6,value:q(A)}}consumeCodePoint(){const A=this._value.shift();return typeof A>"u"?-1:A}reconsumeCodePoint(A){this._value.unshift(A)}peekCodePoint(A){return A>=this._value.length?-1:this._value[A]}consumeUnicodeRangeToken(){const A=[];let e=this.consumeCodePoint();for(;$e(e)&&A.length<6;)A.push(e),e=this.consumeCodePoint();let r=!1;for(;e===fr&&A.length<6;)A.push(e),e=this.consumeCodePoint(),r=!0;if(r){const n=parseInt(q(...A.map(o=>o===fr?Xi:o)),16),i=parseInt(q(...A.map(o=>o===fr?Zi:o)),16);return{type:30,start:n,end:i}}const s=parseInt(q(...A),16);if(this.peekCodePoint(0)===mA&&$e(this.peekCodePoint(1))){this.consumeCodePoint(),e=this.consumeCodePoint();const n=[];for(;$e(e)&&n.length<6;)n.push(e),e=this.consumeCodePoint();const i=parseInt(q(...n),16);return{type:30,start:s,end:i}}else return{type:30,start:s,end:s}}consumeIdentLikeToken(){const A=this.consumeName();return A.toLowerCase()==="url"&&this.peekCodePoint(0)===dr?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===dr?(this.consumeCodePoint(),{type:19,value:A}):{type:20,value:A}}consumeUrlToken(){const A=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===OA)return{type:22,value:""};const e=this.peekCodePoint(0);if(e===ur||e===gr){const r=this.consumeStringToken(this.consumeCodePoint());return r.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===OA||this.peekCodePoint(0)===Qt)?(this.consumeCodePoint(),{type:22,value:r.value}):(this.consumeBadUrlRemnants(),Cr)}for(;;){const r=this.consumeCodePoint();if(r===OA||r===Qt)return{type:22,value:q(...A)};if(pr(r))return this.consumeWhiteSpace(),this.peekCodePoint(0)===OA||this.peekCodePoint(0)===Qt?(this.consumeCodePoint(),{type:22,value:q(...A)}):(this.consumeBadUrlRemnants(),Cr);if(r===gr||r===ur||r===dr||kh(r))return this.consumeBadUrlRemnants(),Cr;if(r===pt)if(re(r,this.peekCodePoint(0)))A.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),Cr;else A.push(r)}}consumeWhiteSpace(){for(;pr(this.peekCodePoint(0));)this.consumeCodePoint()}consumeBadUrlRemnants(){for(;;){const A=this.consumeCodePoint();if(A===Qt||A===OA)return;re(A,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}}consumeStringSlice(A){let r="";for(;A>0;){const s=Math.min(5e4,A);r+=q(...this._value.splice(0,s)),A-=s}return this._value.shift(),r}consumeStringToken(A){let e="",r=0;do{const s=this._value[r];if(s===OA||s===void 0||s===A)return e+=this.consumeStringSlice(r),{type:0,value:e};if(s===Br)return this._value.splice(0,r),zh;if(s===pt){const n=this._value[r+1];n!==OA&&n!==void 0&&(n===Br?(e+=this.consumeStringSlice(r),r=-1,this._value.shift()):re(s,n)&&(e+=this.consumeStringSlice(r),e+=q(this.consumeEscapedCodePoint()),r=-1))}r++}while(!0)}consumeNumber(){const A=[];let e=Ne,r=this.peekCodePoint(0);for((r===Qe||r===mA)&&A.push(this.consumeCodePoint());dA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());r=this.peekCodePoint(0);let s=this.peekCodePoint(1);if(r===Ct&&dA(s))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=$i;dA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());r=this.peekCodePoint(0),s=this.peekCodePoint(1);const n=this.peekCodePoint(2);if((r===Yi||r===Wi)&&((s===Qe||s===mA)&&dA(n)||dA(s)))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=$i;dA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());return[Dh(A),e]}consumeNumericToken(){const[A,e]=this.consumeNumber(),r=this.peekCodePoint(0),s=this.peekCodePoint(1),n=this.peekCodePoint(2);if(Qr(r,s,n)){const i=this.consumeName();return{type:15,number:A,flags:e,unit:i}}return r===th?(this.consumeCodePoint(),{type:16,number:A,flags:e}):{type:17,number:A,flags:e}}consumeEscapedCodePoint(){const A=this.consumeCodePoint();if($e(A)){let e=q(A);for(;$e(this.peekCodePoint(0))&&e.length<6;)e+=q(this.consumeCodePoint());pr(this.peekCodePoint(0))&&this.consumeCodePoint();const r=parseInt(e,16);return r===0||Hh(r)||r>1114111?Vi:r}return A===OA?Vi:A}consumeName(){let A="";for(;;){const e=this.consumeCodePoint();if(qi(e))A+=q(e);else if(re(e,this.peekCodePoint(0)))A+=q(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(e),A}}}class Pe{constructor(A){this._tokens=A}static create(A){const e=new ji;return e.write(A),new Pe(e.read())}static parseValue(A){return Pe.create(A).parseComponentValue()}static parseValues(A){return Pe.create(A).parseComponentValues()}parseComponentValue(){let A=this.consumeToken();for(;A.type===31;)A=this.consumeToken();if(A.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(A);const e=this.consumeComponentValue();do A=this.consumeToken();while(A.type===31);if(A.type===32)return e;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")}parseComponentValues(){const A=[];for(;;){const e=this.consumeComponentValue();if(e.type===32)return A;A.push(e),A.push()}}consumeComponentValue(){const A=this.consumeToken();switch(A.type){case 11:case 28:case 2:return this.consumeSimpleBlock(A.type);case 19:return this.consumeFunction(A)}return A}consumeSimpleBlock(A){const e={type:A,values:[]};let r=this.consumeToken();for(;;){if(r.type===32||tB(r,A))return e;this.reconsumeToken(r),e.values.push(this.consumeComponentValue()),r=this.consumeToken()}}consumeFunction(A){const e={name:A.value,values:[],type:18};for(;;){const r=this.consumeToken();if(r.type===32||r.type===3)return e;this.reconsumeToken(r),e.values.push(this.consumeComponentValue())}}consumeToken(){const A=this._tokens.shift();return typeof A>"u"?Vs:A}reconsumeToken(A){this._tokens.unshift(A)}}const _A=t=>t.type===15,tA=t=>t.type===17,T=t=>t.type===20,eB=t=>t.type===0,mt=(t,A)=>T(t)&&t.value===A,mr=t=>t.type!==31,cA=t=>t.type!==31&&t.type!==4,LA=t=>{const A=[];let e=[];return t.forEach(r=>{if(r.type===4){if(e.length===0)throw new Error("Error parsing function args, zero tokens for arg");A.push(e),e=[];return}r.type!==31&&e.push(r)}),e.length&&A.push(e),A},tB=(t,A)=>A===11&&t.type===12||A===28&&t.type===29?!0:A===2&&t.type===3,Z=(t,A,e)=>Math.min(Math.max(t,A),e),UA=(t,A)=>[t[0]*A[0]+t[1]*A[1]+t[2]*A[2],t[3]*A[0]+t[4]*A[1]+t[5]*A[2],t[6]*A[0]+t[7]*A[1]+t[8]*A[2]],se=t=>UA([3.2409699419045226,-1.537383177570094,-.4986107602930034,-.9692436362808796,1.8759675015077202,.04155505740717559,.05563007969699366,-.20397695888897652,1.0569715142428786],t),Xs=t=>UA([.41239079926595934,.357584339383878,.1804807884018343,.21263900587151027,.715168678767756,.07219231536073371,.01933081871559182,.11919477979462598,.9505321522496607],t),Ce=t=>t.map(A=>{const e=A<0?-1:1,r=Math.abs(A);return r>.0031308?e*(1.055*r**(1/2.4)-.055):12.92*A}),zs=t=>t.map(A=>{const e=A<0?-1:1,r=Math.abs(A);return r<=.04045?A/12.92:e*((r+.055)/1.055)**2.4}),rB=t=>{const[A,e,r]=Ce(se([t[0],t[1],t[2]]));return[A,e,r,t[3]]},sB=t=>{const[A,e,r]=se([t[0],t[1],t[2]]);return[Z(Math.round(A*255),0,255),Z(Math.round(e*255),0,255),Z(Math.round(r*255),0,255),t[3]]},ne=t=>t.type===17||t.type===15,_=t=>t.type===16||ne(t),nB=t=>t.type===18&&t.name==="calc",iB=(t,A=0)=>{const e=r=>{let s="";for(const n of r)if(n.type!==31){if(n.type===18)if(n.name==="calc"){const i=e(n.values);if(i===null)return null;s+=`(${i})`}else return null;else if(n.type===17)s+=n.number.toString();else if(n.type===15)n.unit==="px"?s+=n.number.toString():n.unit==="rem"||n.unit==="em"?s+=(n.number*16).toString():s+=n.number.toString();else if(n.type===16)s+=(n.number/100*A).toString();else if(n.type===6){const i=n.value;i==="+"||i==="-"||i==="*"||i==="/"?s+=` ${i} `:i==="("?s+="(":i===")"&&(s+=")")}}return s};try{const r=e(t.values);if(r===null||r.trim()==="")return null;const s=new Function("return "+r)();if(typeof s=="number"&&!isNaN(s))return{type:17,number:s,flags:Ne}}catch{return null}return null},Ao=t=>t.length>1?[t[0],t[1]]:[t[0]],rA={type:17,number:0,flags:Ne},me={type:16,number:50,flags:Ne},NA={type:16,number:100,flags:Ne},Ut=(t,A,e)=>{const[r,s]=t;return[H(r,A),H(typeof s<"u"?s:r,e)]},H=(t,A)=>{if(t.type===16)return t.number/100*A;if(_A(t))switch(t.unit){case"rem":case"em":return 16*t.number;case"px":default:return t.number}return t.number},eo="deg",to="grad",ro="rad",so="turn",Ge={name:"angle",parse:(t,A)=>{if(A.type===15)switch(A.unit){case eo:return Math.PI*A.number/180;case to:return Math.PI/200*A.number;case ro:return A.number;case so:return Math.PI*2*A.number}throw new Error("Unsupported angle type")}},no=t=>t.type===15&&(t.unit===eo||t.unit===to||t.unit===ro||t.unit===so),io=t=>{switch(t.filter(T).map(e=>e.value).join(" ")){case"to bottom right":case"to right bottom":case"left top":case"top left":return[rA,rA];case"to top":case"bottom":return IA(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[rA,NA];case"to right":case"left":return IA(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[NA,NA];case"to bottom":case"top":return IA(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[NA,rA];case"to left":case"right":return IA(270)}return 0},IA=t=>Math.PI*t/180,ie=t=>(255&t)===0,G=t=>{const A=255&t,e=255&t>>8,r=255&t>>16,s=255&t>>24;return A<255?`rgba(${s},${r},${e},${A/255})`:`rgb(${s},${r},${e})`},vA=(t,A,e,r)=>(t<<24|A<<16|e<<8|Math.round(r*255)<<0)>>>0,oe=(t,A)=>{if(t.type===17)return t.number;if(t.type===16){const e=A===3?1:255;return A===3?t.number/100*e:Math.round(t.number/100*e)}return 0},Ue=t=>(t[0].type===20?t[0].value:"unknown")==="from",oB=t=>vA(Z(Math.round(t[0]*255),0,255),Z(Math.round(t[1]*255),0,255),Z(Math.round(t[2]*255),0,255),Z(t[3],0,1)),Ws=([t,A,e,r])=>{const s=Ce([t,A,e]);return vA(Z(Math.round(s[0]*255),0,255),Z(Math.round(s[1]*255),0,255),Z(Math.round(s[2]*255),0,255),r)},Ft=t=>{const A=se([t[0],t[1],t[2]]);return Ws([A[0],A[1],A[2],t[3]])},aB=(t,A)=>{if(Ue(A.filter(cA)))throw new Error("Relative color not supported for lab()");const[e,r,s,n]=Ur(A),i=Ce(se(br([e,r,s])));return vA(Z(Math.round(i[0]*255),0,255),Z(Math.round(i[1]*255),0,255),Z(Math.round(i[2]*255),0,255),n)},lB=(t,A)=>{if(Ue(A.filter(cA)))throw new Error("Relative color not supported for oklab()");const[e,r,s,n]=Ur(A),i=Ce(se(xr([e,r,s])));return vA(Z(Math.round(i[0]*255),0,255),Z(Math.round(i[1]*255),0,255),Z(Math.round(i[2]*255),0,255),n)},cB=(t,A)=>{if(Ue(A.filter(cA)))throw new Error("Relative color not supported for oklch()");const[e,r,s,n]=co(A),i=Ce(se(xr(Fr([e,r,s]))));return vA(Z(Math.round(i[0]*255),0,255),Z(Math.round(i[1]*255),0,255),Z(Math.round(i[2]*255),0,255),n)},hB=(t,A)=>{if(Ue(A.filter(cA)))throw new Error("Relative color not supported for lch()");const[e,r,s,n]=lo(A),i=Ce(se(br(Fr([e,r,s]))));return vA(Z(Math.round(i[0]*255),0,255),Z(Math.round(i[1]*255),0,255),Z(Math.round(i[2]*255),0,255),n)},oo=(t,A)=>{const e=A.filter(cA),[r,s,n,i]=e,o=(r.type===17?IA(r.number):Ge.parse(t,r))/(Math.PI*2),a=_(s)?s.number/100:0,c=_(n)?n.number/100:0,l=typeof i<"u"&&_(i)?H(i,1):1;return[o,a,c,l]},ao=(t,A)=>{if(Ue(A))throw new Error("Relative color not supported for hsl()");const[e,r,s,n]=oo(t,A),i=Bo([e,r,s]);return vA(i[0]*255,i[1]*255,i[2]*255,r===0?1:n)},lo=t=>{const A=t.filter(cA),e=_(A[0])?A[0].number:0,r=_(A[1])?A[1].number:0,s=tA(A[2])||_A(A[2])?A[2].number:0,n=typeof A[4]<"u"&&_(A[4])?H(A[4],1):1;return[e,r,s,n]},Ur=t=>{const A=t.filter(cA),e=A[0].type===16?A[0].number/100:tA(A[0])?A[0].number:0,r=A[1].type===16?A[1].number/100:tA(A[1])?A[1].number:0,s=tA(A[2])||_A(A[2])?A[2].number:0,n=typeof A[4]<"u"&&_(A[4])?H(A[4],1):1;return[e,r,s,n]},co=t=>{const A=t.filter(cA),e=A[0].type===16?A[0].number/100:tA(A[0])?A[0].number:0,r=A[1].type===16?A[1].number/100:tA(A[1])?A[1].number:0,s=tA(A[2])||_A(A[2])?A[2].number:0,n=typeof A[4]<"u"&&_(A[4])?H(A[4],1):1;return[e,r,s,n]},ho=t=>UA([1.0479297925449969,.022946870601609652,-.05019226628920524,.02962780877005599,.9904344267538799,-.017073799063418826,-.009243040646204504,.015055191490298152,.7518742814281371],t),Js=t=>UA([.955473421488075,-.02309845494876471,.06325924320057072,-.0283697093338637,1.0099953980813041,.021041441191917323,.012314014864481998,-.020507649298898964,1.330365926242124],t),Ys=(t,A,e)=>(e<0&&(e+=1),e>=1&&(e-=1),e<1/6?(A-t)*e*6+t:e<1/2?A:e<2/3?(A-t)*6*(2/3-e)+t:t),Bo=([t,A,e])=>{if(A===0)return[e*255,e*255,e*255];const r=e<=.5?e*(A+1):e+A-e*A,s=e*2-r,n=Ys(s,r,t+1/3),i=Ys(s,r,t),o=Ys(s,r,t-1/3);return[n,i,o]},Fr=([t,A,e])=>(A<0&&(A=0),isNaN(e)&&(e=0),[t,A*Math.cos(e*Math.PI/180),A*Math.sin(e*Math.PI/180)]),xr=t=>{const A=UA([1,.3963377773761749,.2158037573099136,1,-.1055613458156586,-.0638541728258133,1,-.0894841775298119,-1.2914855480194092],t),e=A.map(r=>r**3);return UA([1.2268798758459243,-.5578149944602171,.2813910456659647,-.0405757452148008,1.112286803280317,-.0717110580655164,-.0763729366746601,-.4214933324022432,1.5869240198367816],e)},br=t=>{const A=(t[0]+16)/116,e=t[1]/500+A,r=A-t[2]/200,s=24389/27,n=24/116,i=[(e>n?e**3:(116*e-16)/s)*.3457/.3585,t[0]>8?A**3:t[0]/s,(r>n?r**3:(116*r-16)/s)*(1-.3457-.3585)/.3585];return Js([i[0],i[1],i[2]])},BB=(t,A)=>{const e=A.filter(cA);if(e.length===3){const[r,s,n]=e.map(oe),i=zs([r/255,s/255,n/255]),[o,a,c]=Xs([i[0],i[1],i[2]]);return[o,a,c,1]}if(e.length===4){const[r,s,n,i]=e.map(oe),o=zs([r/255,s/255,n/255]),[a,c,l]=Xs([o[0],o[1],o[2]]);return[a,c,l,i]}return[0,0,0,1]},gB=(t,A)=>{const[e,r,s,n]=oo(t,A),i=zs(Bo([e,r,s])),[o,a,c]=Xs([i[0],i[1],i[2]]);return[o,a,c,n]},uB=(t,A)=>{const[e,r,s,n]=Ur(A),[i,o,a]=br([e,r,s]);return[i,o,a,n]},dB=(t,A)=>{const[e,r,s,n]=lo(A),[i,o,a]=br(Fr([e,r,s]));return[i,o,a,n]},fB=(t,A)=>{const[e,r,s,n]=co(A),[i,o,a]=xr(Fr([e,r,s]));return[i,o,a,n]},pB=(t,A)=>{const[e,r,s,n]=Ur(A),[i,o,a]=xr([e,r,s]);return[i,o,a,n]},wB=t=>Js([t[0],t[1],t[2]]),go=t=>t,QB=t=>{const[A,e,r]=ho([t[0],t[2],t[3]]);return[A,e,r,t[3]]},uo=t=>Ft([t[0],t[1],t[2],t[3]]),CB=t=>{const A=wB([t[0],t[1],t[2]]);return Ft([A[0],A[1],A[2],t[3]])},mB=t=>UA([.4865709486482162,.26566769316909306,.1982172852343625,.2289745640697488,.6917385218365064,.079286914093745,0,.04511338185890264,1.043944368900976],t),UB=t=>UA([2.493496911941425,-.9313836179191239,-.40271078445071684,-.8294889695615747,1.7626640603183463,.023624685841943577,.03584583024378447,-.07617238926804182,.9568845240076872],t),FB=t=>t.map(A=>{const e=A<0?-1:1;return A*e<=.04045?A/12.92:e*((A+.055)/1.055)**2.4||0}),xB=t=>Ce(t),bB=t=>{const A=FB([t[0],t[1],t[2]]);return mB([A[0],A[1],A[2]])},EB=t=>{const[A,e,r]=xB(UB([t[0],t[1],t[2]]));return[A,e,r,t[3]]},yB=t=>{const A=bB([t[0],t[1],t[2]]);return Ft([A[0],A[1],A[2],t[3]])},IB=t=>UA([2.0415879038107465,-.5650069742788596,-.34473135077832956,-.9692436362808795,1.8759675015077202,.04155505740717557,.013444280632031142,-.11836239223101838,1.0151749943912054],t),HB=t=>UA([.5766690429101305,.1855582379065463,.1882286462349947,.29734497525053605,.6273635662554661,.0752914584939978,.02703136138641234,.07068885253582723,.9913375368376388],t),TB=t=>{const A=t.map(e=>{const r=e<0?-1:1,s=Math.abs(e);return r*s**2.19921875});return[A[0],A[1],A[2]]},SB=t=>{const A=t.map(e=>{const r=e<0?-1:1,s=Math.abs(e);return r*s**.4547069271758437});return[A[0],A[1],A[2]]},LB=t=>{const[A,e,r]=SB(IB([t[0],t[1],t[2]]));return[A,e,r,t[3]]},vB=t=>{const A=se(HB(TB([t[0],t[1],t[2]])));return Ws([A[0],A[1],A[2],t[3]])},kB=t=>UA([.7977666449006423,.13518129740053308,.0313477341283922,.2880748288194013,.711835234241873,8993693872564e-17,0,0,.8251046025104602],t),DB=t=>UA([1.3457868816471583,-.25557208737979464,-.05110186497554526,-.5446307051249019,1.5082477428451468,.02052744743642139,0,0,1.2119675456389452],t),KB=t=>t.map(A=>A<16/512?A/16:A**1.8),MB=t=>t.map(A=>A>1/512?A**(1/1.8):A*16),RB=t=>{const A=KB([t[0],t[1],t[2]]);return Js(kB([A[0],A[1],A[2]]))},OB=t=>{const[A,e,r]=MB(DB(ho([t[0],t[1],t[2]])));return[A,e,r,t[3]]},_B=t=>{const A=RB([t[0],t[1],t[2]]);return Ft([A[0],A[1],A[2],t[3]])},Er=1.09929682680944,fo=.018053968510807,NB=t=>t.map(function(A){return A<fo*4.5?A/4.5:Math.pow((A+Er-1)/Er,1/.45)}),$B=t=>t.map(function(A){return A>=fo?Er*Math.pow(A,.45)-(Er-1):4.5*A}),PB=t=>UA([.6369580483012914,.14461690358620832,.1688809751641721,.2627002120112671,.6779980715188708,.05930171646986196,0,.028072693049087428,1.060985057710791],t),GB=t=>UA([1.716651187971268,-.355670783776392,-.25336628137366,-.666684351832489,1.616481236634939,.0157685458139111,.017639857445311,-.042770613257809,.942103121235474],t),VB=t=>{const A=NB([t[0],t[1],t[2]]);return PB([A[0],A[1],A[2]])},XB=t=>{const[A,e,r]=$B(GB([t[0],t[1],t[2]]));return[A,e,r,t[3]]},zB=t=>{const A=VB([t[0],t[1],t[2]]);return Ft([A[0],A[1],A[2],t[3]])},ae={name:"color",parse:(t,A)=>{if(A.type===18){const e=ZB[A.name];if(typeof e>"u")throw new Error(`Attempting to parse an unsupported color function "${A.name}"`);return e(t,A.values)}if(A.type===5){const[e,r,s,n]=po(A);return vA(e,r,s,n)}if(A.type===20){const e=$A[A.value.toUpperCase()];if(typeof e<"u")return e}return $A.TRANSPARENT}},po=t=>{if(t.value.length===3){const A=t.value.substring(0,1),e=t.value.substring(1,2),r=t.value.substring(2,3);return[parseInt(A+A,16),parseInt(e+e,16),parseInt(r+r,16),1]}if(t.value.length===4){const A=t.value.substring(0,1),e=t.value.substring(1,2),r=t.value.substring(2,3),s=t.value.substring(3,4);return[parseInt(A+A,16),parseInt(e+e,16),parseInt(r+r,16),parseInt(s+s,16)/255]}if(t.value.length===6){const A=t.value.substring(0,2),e=t.value.substring(2,4),r=t.value.substring(4,6);return[parseInt(A,16),parseInt(e,16),parseInt(r,16),1]}if(t.value.length===8){const A=t.value.substring(0,2),e=t.value.substring(2,4),r=t.value.substring(4,6),s=t.value.substring(6,8);return[parseInt(A,16),parseInt(e,16),parseInt(r,16),parseInt(s,16)/255]}return[0,0,0,1]},wo=(t,A)=>{const e=A.filter(cA);if(Ue(e))throw new Error("Relative color not supported for rgb()");if(e.length===3){const[r,s,n]=e.map(oe);return vA(r,s,n,1)}if(e.length===4){const[r,s,n,i]=e.map(oe);return vA(r,s,n,i)}if(e.length===5&&e[3].type===6&&e[3].value==="/"){const r=oe(e[0],0),s=oe(e[1],1),n=oe(e[2],2),i=oe(e[4],3);return vA(r,s,n,i)}return 0},WB=(t,A)=>{const e=A.filter(cA),r=e[0].type===20?e[0].value:"unknown";if(!Ue(e)){const n=r,i=Qo[n];if(typeof i>"u")throw new Error(`Attempting to parse an unsupported color space "${n}" for color() function`);const o=tA(e[1])?e[1].number:0,a=tA(e[2])?e[2].number:0,c=tA(e[3])?e[3].number:0,l=e.length>4&&e[4].type===6&&e[4].value==="/"&&tA(e[5])?e[5].number:1;return i([o,a,c,l])}else{const n=(Q,x)=>{if(tA(x))return x.number;const E=D=>D==="r"||D==="x"?0:D==="g"||D==="y"?1:2;if(T(x)){const D=E(x.value);return Q[D]}const b=D=>{const J=D.filter(cA);let BA="(";for(const z of J)BA+=z.type===18&&z.name==="calc"?b(z.values):tA(z)?z.number:z.type===6||T(z)?z.value:"";return BA+=")",BA};if(x.type===18){const D=x.values.filter(cA);if(x.name==="calc"){const J=b(D).replace(/r|x/,Q[0].toString()).replace(/g|y/,Q[1].toString()).replace(/b|z/,Q[2].toString());return new Function("return "+J)()}}return null},i=e[1].type===18?e[1].name:T(e[1])||e[1].type===5?"rgb":"unknown",o=T(e[2])?e[2].value:"unknown";let a=e[1].type===18?e[1].values:T(e[1])?[e[1]]:[];if(T(e[1])){if(typeof $A[e[1].value.toUpperCase()]>"u")throw new Error("Attempting to use unknown color in relative color 'from'");{const x=Ve(t,e[1].value),E=255&x,b=255&x>>8,D=255&x>>16;a=[{type:17,number:255&x>>24,flags:1},{type:17,number:D,flags:1},{type:17,number:b,flags:1},{type:17,number:E>1?E/255:E,flags:1}]}}else if(e[1].type===5){const[Q,x,E,b]=po(e[1]);a=[{type:17,number:Q,flags:1},{type:17,number:x,flags:1},{type:17,number:E,flags:1},{type:17,number:b>1?b/255:b,flags:1}]}if(a.length===0)throw new Error("Attempting to use unknown color in relative color 'from'");if(o==="unknown")throw new Error("Attempting to use unknown colorspace in relative color 'to'");const c=JB[i],l=YB[o],h=Qo[o];if(typeof c>"u")throw new Error(`Attempting to parse an unsupported color space "${i}" for color() function`);if(typeof l>"u")throw new Error(`Attempting to parse an unsupported color space "${o}" for color() function`);const g=c(t,a),u=l(g),d=n(u,e[3]),f=n(u,e[4]),U=n(u,e[5]),y=e.length>6&&e[6].type===6&&e[6].value==="/"&&tA(e[7])?e[7].number:1;if(d===null||f===null||U===null)throw new Error("Invalid relative color in color() function");return h([d,f,U,y])}},Qo={srgb:oB,"srgb-linear":Ws,"display-p3":yB,"a98-rgb":vB,"prophoto-rgb":_B,xyz:uo,"xyz-d50":CB,"xyz-d65":uo,rec2020:zB},JB={rgb:BB,hsl:gB,lab:uB,lch:dB,oklab:pB,oklch:fB},YB={srgb:rB,"srgb-linear":sB,"display-p3":EB,"a98-rgb":LB,"prophoto-rgb":OB,xyz:go,"xyz-d50":QB,"xyz-d65":go,rec2020:XB},ZB={hsl:ao,hsla:ao,rgb:wo,rgba:wo,lch:hB,oklch:cB,oklab:lB,lab:aB,color:WB},Ve=(t,A)=>ae.parse(t,Pe.create(A).parseComponentValue()),$A={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},qB={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:(t,A)=>A.map(e=>{if(T(e))switch(e.value){case"padding-box":return 1;case"content-box":return 2}return 0})},jB={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},yr=(t,A)=>{const e=ae.parse(t,A[0]),r=A[1];return r&&_(r)?{color:e,stop:r}:{color:e,stop:null}},Co=(t,A)=>{const e=t[0],r=t[t.length-1];e.stop===null&&(e.stop=rA),r.stop===null&&(r.stop=NA);const s=[];let n=0;for(let o=0;o<t.length;o++){const a=t[o].stop;if(a!==null){const c=H(a,A);c>n?s.push(c):s.push(n),n=c}else s.push(null)}let i=null;for(let o=0;o<s.length;o++){const a=s[o];if(a===null)i===null&&(i=o);else if(i!==null){const c=o-i,l=s[i-1],h=(a-l)/(c+1);for(let g=1;g<=c;g++)s[i+g-1]=h*g;i=null}}return t.map(({color:o},a)=>({color:o,stop:Math.max(Math.min(1,s[a]/A),0)}))},Ag=(t,A,e)=>{const r=A/2,s=e/2,n=H(t[0],A)-r,i=s-H(t[1],e);return(Math.atan2(i,n)+Math.PI*2)%(Math.PI*2)},eg=(t,A,e)=>{const r=typeof t=="number"?t:Ag(t,A,e),s=Math.abs(A*Math.sin(r))+Math.abs(e*Math.cos(r)),n=A/2,i=e/2,o=s/2,a=Math.sin(r-Math.PI/2)*o,c=Math.cos(r-Math.PI/2)*o;return[s,n-c,n+c,i-a,i+a]},kA=(t,A)=>Math.sqrt(t*t+A*A),mo=(t,A,e,r,s)=>[[0,0],[0,A],[t,0],[t,A]].reduce((i,o)=>{const[a,c]=o,l=kA(e-a,r-c);return(s?l<i.optimumDistance:l>i.optimumDistance)?{optimumCorner:o,optimumDistance:l}:i},{optimumDistance:s?1/0:-1/0,optimumCorner:null}).optimumCorner,tg=(t,A,e,r,s)=>{let n=0,i=0;switch(t.size){case 0:t.shape===0?n=i=Math.min(Math.abs(A),Math.abs(A-r),Math.abs(e),Math.abs(e-s)):t.shape===1&&(n=Math.min(Math.abs(A),Math.abs(A-r)),i=Math.min(Math.abs(e),Math.abs(e-s)));break;case 2:if(t.shape===0)n=i=Math.min(kA(A,e),kA(A,e-s),kA(A-r,e),kA(A-r,e-s));else if(t.shape===1){const o=Math.min(Math.abs(e),Math.abs(e-s))/Math.min(Math.abs(A),Math.abs(A-r)),[a,c]=mo(r,s,A,e,!0);n=kA(a-A,(c-e)/o),i=o*n}break;case 1:t.shape===0?n=i=Math.max(Math.abs(A),Math.abs(A-r),Math.abs(e),Math.abs(e-s)):t.shape===1&&(n=Math.max(Math.abs(A),Math.abs(A-r)),i=Math.max(Math.abs(e),Math.abs(e-s)));break;case 3:if(t.shape===0)n=i=Math.max(kA(A,e),kA(A,e-s),kA(A-r,e),kA(A-r,e-s));else if(t.shape===1){const o=Math.max(Math.abs(e),Math.abs(e-s))/Math.max(Math.abs(A),Math.abs(A-r)),[a,c]=mo(r,s,A,e,!1);n=kA(a-A,(c-e)/o),i=o*n}break}return Array.isArray(t.size)&&(n=H(t.size[0],r),i=t.size.length===2?H(t.size[1],s):n),[n,i]},rg=(t,A)=>{let e=IA(180);const r=[];return LA(A).forEach((s,n)=>{if(n===0){const o=s[0];if(o.type===20&&o.value==="to"){e=io(s);return}else if(no(o)){e=Ge.parse(t,o);return}}const i=yr(t,s);r.push(i)}),{angle:e,stops:r,type:1}},Ir=(t,A)=>{let e=IA(180);const r=[];return LA(A).forEach((s,n)=>{if(n===0){const o=s[0];if(o.type===20&&["top","left","right","bottom"].indexOf(o.value)!==-1){e=io(s);return}else if(no(o)){e=(Ge.parse(t,o)+IA(270))%IA(360);return}}const i=yr(t,s);r.push(i)}),{angle:e,stops:r,type:1}},sg=(t,A)=>{const e=IA(180),r=[];let s=1;const n=0,i=3,o=[];return LA(A).forEach((a,c)=>{const l=a[0];if(c===0){if(T(l)&&l.value==="linear"){s=1;return}else if(T(l)&&l.value==="radial"){s=2;return}}if(l.type===18){if(l.name==="from"){const h=ae.parse(t,l.values[0]);r.push({stop:rA,color:h})}else if(l.name==="to"){const h=ae.parse(t,l.values[0]);r.push({stop:NA,color:h})}else if(l.name==="color-stop"){const h=l.values.filter(cA);if(h.length===2){const g=ae.parse(t,h[1]),u=h[0];tA(u)&&r.push({stop:{type:16,number:u.number*100,flags:u.flags},color:g})}}}}),s===1?{angle:(e+IA(180))%IA(360),stops:r,type:s}:{size:i,shape:n,stops:r,position:o,type:s}},Uo="closest-side",Fo="farthest-side",xo="closest-corner",bo="farthest-corner",Eo="circle",yo="ellipse",Io="cover",Ho="contain",ng=(t,A)=>{let e=0,r=3;const s=[],n=[];return LA(A).forEach((i,o)=>{let a=!0;if(o===0){let c=!1;a=i.reduce((l,h)=>{if(c)if(T(h))switch(h.value){case"center":return n.push(me),l;case"top":case"left":return n.push(rA),l;case"right":case"bottom":return n.push(NA),l}else(_(h)||ne(h))&&n.push(h);else if(T(h))switch(h.value){case Eo:return e=0,!1;case yo:return e=1,!1;case"at":return c=!0,!1;case Uo:return r=0,!1;case Io:case Fo:return r=1,!1;case Ho:case xo:return r=2,!1;case bo:return r=3,!1}else if(ne(h)||_(h))return Array.isArray(r)||(r=[]),r.push(h),!1;return l},a)}if(a){const c=yr(t,i);s.push(c)}}),{size:r,shape:e,stops:s,position:n,type:2}},Hr=(t,A)=>{let e=0,r=3;const s=[],n=[];return LA(A).forEach((i,o)=>{let a=!0;if(o===0?a=i.reduce((c,l)=>{if(T(l))switch(l.value){case"center":return n.push(me),!1;case"top":case"left":return n.push(rA),!1;case"right":case"bottom":return n.push(NA),!1}else if(_(l)||ne(l))return n.push(l),!1;return c},a):o===1&&(a=i.reduce((c,l)=>{if(T(l))switch(l.value){case Eo:return e=0,!1;case yo:return e=1,!1;case Ho:case Uo:return r=0,!1;case Fo:return r=1,!1;case xo:return r=2,!1;case Io:case bo:return r=3,!1}else if(ne(l)||_(l))return Array.isArray(r)||(r=[]),r.push(l),!1;return c},a)),a){const c=yr(t,i);s.push(c)}}),{size:r,shape:e,stops:s,position:n,type:2}},ig=t=>t.type===1,og=t=>t.type===2,Zs={name:"image",parse:(t,A)=>{if(A.type===22){const e={url:A.value,type:0};return t.cache.addImage(A.value),e}if(A.type===18){const e=To[A.name];if(typeof e>"u")throw new Error(`Attempting to parse an unsupported image function "${A.name}"`);return e(t,A.values)}throw new Error(`Unsupported image type ${A.type}`)}};function ag(t){return!(t.type===20&&t.value==="none")&&(t.type!==18||!!To[t.name])}const To={"linear-gradient":rg,"-moz-linear-gradient":Ir,"-ms-linear-gradient":Ir,"-o-linear-gradient":Ir,"-webkit-linear-gradient":Ir,"radial-gradient":ng,"-moz-radial-gradient":Hr,"-ms-radial-gradient":Hr,"-o-radial-gradient":Hr,"-webkit-radial-gradient":Hr,"-webkit-gradient":sg},lg={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:(t,A)=>{if(A.length===0)return[];const e=A[0];return e.type===20&&e.value==="none"?[]:A.filter(r=>cA(r)&&ag(r)).map(r=>Zs.parse(t,r))}},cg={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:(t,A)=>A.map(e=>{if(T(e))switch(e.value){case"padding-box":return 1;case"content-box":return 2}return 0})},hg={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:(t,A)=>LA(A).map(e=>e.map(r=>nB(r)?iB(r,0):_(r)?r:null).filter(r=>r!==null)).map(Ao)},Bg={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:(t,A)=>LA(A).map(e=>e.filter(T).map(r=>r.value).join(" ")).map(gg)},gg=t=>{switch(t){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}};var Xe;(function(t){t.AUTO="auto",t.CONTAIN="contain",t.COVER="cover"})(Xe||(Xe={}));const ug={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:(t,A)=>LA(A).map(e=>e.filter(dg))},dg=t=>T(t)||_(t),Tr=t=>({name:`border-${t}-color`,initialValue:"transparent",prefix:!1,type:3,format:"color"}),fg=Tr("top"),pg=Tr("right"),wg=Tr("bottom"),Qg=Tr("left"),Sr=t=>({name:`border-radius-${t}`,initialValue:"0 0",prefix:!1,type:1,parse:(A,e)=>Ao(e.filter(_))}),Cg=Sr("top-left"),mg=Sr("top-right"),Ug=Sr("bottom-right"),Fg=Sr("bottom-left"),Lr=t=>({name:`border-${t}-style`,initialValue:"solid",prefix:!1,type:2,parse:(A,e)=>{switch(e){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}),xg=Lr("top"),bg=Lr("right"),Eg=Lr("bottom"),yg=Lr("left"),vr=t=>({name:`border-${t}-width`,initialValue:"0",type:0,prefix:!1,parse:(A,e)=>_A(e)?e.number:0}),Ig=vr("top"),Hg=vr("right"),Tg=vr("bottom"),Sg=vr("left"),qs={type:0},js=t=>{const[A]=t;return A?T(A)?A.value==="farthest-side"?"farthest-side":"closest-side":_(A)?A:"closest-side":"closest-side"},So=t=>{let A=null,e=null;for(const r of t)if(T(r))switch(r.value){case"left":A=rA;break;case"right":A=NA;break;case"top":e=rA;break;case"bottom":e=NA;break;case"center":A===null?A=me:e===null&&(e=me);break}else _(r)&&(A===null?A=r:e===null&&(e=r));return{cx:A??me,cy:e??me}},Lg=t=>{const A=[];for(const i of t)if(i.type!==31){if(T(i)&&i.value==="round")break;_(i)&&A.push(i)}const e=A[0]??rA,r=A[1]??e,s=A[2]??e,n=A[3]??r;return{type:1,top:e,right:r,bottom:s,left:n}},vg=t=>{const A=t.filter(mr),e=A.findIndex(n=>mt(n,"at")),r=e===-1?A:A.slice(0,e),s=e===-1?[]:A.slice(e+1);return{type:2,radius:js(r),...So(s)}},kg=t=>{const A=t.filter(mr),e=A.findIndex(n=>mt(n,"at")),r=e===-1?A:A.slice(0,e),s=e===-1?[]:A.slice(e+1);return{type:3,rx:js(r.slice(0,1)),ry:js(r.slice(1,2)),...So(s)}},Dg=t=>{const A=LA(t),e=[];for(const r of A){if(r.length===1&&T(r[0]))continue;const s=r.filter(_);s.length>=2&&e.push([s[0],s[1]])}return{type:4,points:e}},Kg=t=>{const A=t.find(e=>e.type===0);return A?{type:5,d:A.value}:qs},Mg={name:"clip-path",initialValue:"none",prefix:!1,type:0,parse:(t,A)=>{if(T(A)&&A.value==="none")return qs;if(A.type===18)switch(A.name){case"inset":return Lg(A.values);case"circle":return vg(A.values);case"ellipse":return kg(A.values);case"polygon":return Dg(A.values);case"path":return Kg(A.values)}return qs}},Rg={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Og={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:(t,A)=>{switch(A){case"rtl":return 1;case"ltr":default:return 0}}},_g={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:(t,A)=>A.filter(T).reduce((e,r)=>e|Ng(r.value),0)},Ng=t=>{switch(t){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},$g={name:"float",initialValue:"none",prefix:!1,type:2,parse:(t,A)=>{switch(A){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},Pg={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:(t,A)=>A.type===20&&A.value==="normal"?0:A.type===17||A.type===15?A.number:0};var kr;(function(t){t.NORMAL="normal",t.STRICT="strict"})(kr||(kr={}));const Gg={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:(t,A)=>{switch(A){case"strict":return kr.STRICT;case"normal":default:return kr.NORMAL}}},Vg={name:"line-height",initialValue:"normal",prefix:!1,type:4},Lo=(t,A)=>T(t)&&t.value==="normal"?1.2*A:t.type===17?A*t.number:_(t)?H(t,A):A,Xg={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:(t,A)=>A.type===20&&A.value==="none"?null:Zs.parse(t,A)},zg={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:(t,A)=>{switch(A){case"inside":return 0;case"outside":default:return 1}}},An={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:(t,A)=>{switch(A){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 52;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},Dr=t=>({name:`margin-${t}`,initialValue:"0",prefix:!1,type:4}),Wg=Dr("top"),Jg=Dr("right"),Yg=Dr("bottom"),Zg=Dr("left"),qg={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:(t,A)=>A.filter(T).map(e=>{switch(e.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})},jg={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:(t,A)=>{switch(A){case"break-word":return"break-word";case"normal":default:return"normal"}}},Kr=t=>({name:`padding-${t}`,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}),Au=Kr("top"),eu=Kr("right"),tu=Kr("bottom"),ru=Kr("left"),su={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:(t,A)=>{switch(A){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},nu={name:"position",initialValue:"static",prefix:!1,type:2,parse:(t,A)=>{switch(A){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},iu={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:(t,A)=>A.length===1&&mt(A[0],"none")?[]:LA(A).map(e=>{const r={color:$A.TRANSPARENT,offsetX:rA,offsetY:rA,blur:rA};let s=0;for(let n=0;n<e.length;n++){const i=e[n];ne(i)?(s===0?r.offsetX=i:s===1?r.offsetY=i:r.blur=i,s++):r.color=ae.parse(t,i)}return r})},ou={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:(t,A)=>{switch(A){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},au={name:"transform",initialValue:"none",prefix:!0,type:0,parse:(t,A)=>{if(A.type===20&&A.value==="none")return null;if(A.type===18){const e=lu[A.name];if(typeof e>"u")throw new Error(`Attempting to parse an unsupported transform function "${A.name}"`);return e(t,A.values)}return null}},lu={matrix:(t,A)=>{const e=A.filter(r=>r.type===17).map(r=>r.number);return e.length===6?e:null},matrix3d:(t,A)=>{const e=A.filter(c=>c.type===17).map(c=>c.number),[r,s,{},{},n,i,{},{},{},{},{},{},o,a]=e;return e.length===16?[r,s,n,i,o,a]:null},rotate:(t,A)=>{if(A.length!==1)return null;const e=A[0];let r=0;if(e.type===17&&e.number===0)r=0;else if(e.type===15)r=Ge.parse(t,e);else return null;const s=Math.cos(r),n=Math.sin(r);return[s,n,-n,s,0,0]}},vo={type:16,number:50,flags:Ne},cu=[vo,vo],hu={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:(t,A)=>{const e=A.filter(_);return e.length!==2?cu:[e[0],e[1]]}},Bu={name:"rotate",initialValue:"none",prefix:!1,type:0,parse:(t,A)=>A.type===20&&A.value==="none"?null:A.type===17&&A.number===0?0:A.type===15?Ge.parse(t,A)*180/Math.PI:null},gu={name:"visible",initialValue:"none",prefix:!1,type:2,parse:(t,A)=>{switch(A){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}};var xt;(function(t){t.NORMAL="normal",t.BREAK_ALL="break-all",t.KEEP_ALL="keep-all"})(xt||(xt={}));const uu={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:(t,A)=>{switch(A){case"break-all":return xt.BREAK_ALL;case"keep-all":return xt.KEEP_ALL;case"normal":default:return xt.NORMAL}}},du={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:(t,A)=>{if(A.type===20)return{auto:!0,order:0};if(tA(A))return{auto:!1,order:A.number};throw new Error("Invalid z-index number parsed")}},ko={name:"time",parse:(t,A)=>{if(A.type===15)switch(A.unit.toLowerCase()){case"s":return 1e3*A.number;case"ms":return A.number}throw new Error("Unsupported time type")}},fu={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:(t,A)=>tA(A)?A.number:1},pu={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},wu={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:(t,A)=>A.filter(T).map(e=>{switch(e.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(e=>e!==0)},Qu={name:"text-decoration-style",initialValue:"solid",prefix:!1,type:2,parse:(t,A)=>{switch(A){case"double":return 1;case"dotted":return 2;case"dashed":return 3;case"wavy":return 4;case"solid":default:return 0}}},Cu={name:"text-decoration-thickness",initialValue:"auto",prefix:!1,type:0,parse:(t,A)=>{if(T(A))switch(A.value){case"auto":return"auto";case"from-font":return"from-font"}return _A(A)?A.number:"auto"}},mu={name:"text-underline-offset",initialValue:"auto",prefix:!1,type:0,parse:(t,A)=>T(A)&&A.value==="auto"?"auto":_A(A)?A.number:"auto"},Uu={name:"font-family",initialValue:"",prefix:!1,type:1,parse:(t,A)=>{const e=[],r=[];return A.forEach(s=>{switch(s.type){case 20:case 0:e.push(s.value);break;case 17:e.push(s.number.toString());break;case 4:r.push(e.join(" ")),e.length=0;break}}),e.length&&r.push(e.join(" ")),r.map(s=>s.indexOf(" ")===-1?s:`'${s}'`)}},Fu={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},xu={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:(t,A)=>{if(tA(A))return A.number;if(T(A))switch(A.value){case"bold":return 700;case"normal":default:return 400}return 400}},bu={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:(t,A)=>A.filter(T).map(e=>e.value)},Eu={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:(t,A)=>{switch(A){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},W=(t,A)=>(t&A)!==0,yu={name:"content",initialValue:"none",type:1,prefix:!1,parse:(t,A)=>{if(A.length===0)return[];const e=A[0];return e.type===20&&e.value==="none"?[]:A}},Iu={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:(t,A)=>{if(A.length===0)return null;const e=A[0];if(e.type===20&&e.value==="none")return null;const r=[],s=A.filter(mr);for(let n=0;n<s.length;n++){const i=s[n],o=s[n+1];if(i.type===20){const a=o&&tA(o)?o.number:1;r.push({counter:i.value,increment:a})}}return r}},Hu={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:(t,A)=>{if(A.length===0)return[];const e=[],r=A.filter(mr);for(let s=0;s<r.length;s++){const n=r[s],i=r[s+1];if(T(n)&&n.value!=="none"){const o=i&&tA(i)?i.number:0;e.push({counter:n.value,reset:o})}}return e}},Tu={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:(t,A)=>A.filter(_A).map(e=>ko.parse(t,e))},Su={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:(t,A)=>{if(A.length===0)return null;const e=A[0];if(e.type===20&&e.value==="none")return null;const r=[],s=A.filter(eB);if(s.length%2!==0)return null;for(let n=0;n<s.length;n+=2){const i=s[n].value,o=s[n+1].value;r.push({open:i,close:o})}return r}},Do=(t,A,e)=>{if(!t)return"";const r=t[Math.min(A,t.length-1)];return r?e?r.open:r.close:""},Lu={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:(t,A)=>A.length===1&&mt(A[0],"none")?[]:LA(A).map(e=>{const r={color:255,offsetX:rA,offsetY:rA,blur:rA,spread:rA,inset:!1};let s=0;for(let n=0;n<e.length;n++){const i=e[n];mt(i,"inset")?r.inset=!0:ne(i)?(s===0?r.offsetX=i:s===1?r.offsetY=i:s===2?r.blur=i:r.spread=i,s++):r.color=ae.parse(t,i)}return r})},vu={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:(t,A)=>{const e=[0,1,2],r=[];return A.filter(T).forEach(s=>{switch(s.value){case"stroke":r.push(1);break;case"fill":r.push(0);break;case"markers":r.push(2);break}}),e.forEach(s=>{r.indexOf(s)===-1&&r.push(s)}),r}},ku={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},Du={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:(t,A)=>_A(A)?A.number:0},Ku={name:"-webkit-line-clamp",initialValue:"none",prefix:!0,type:0,parse:(t,A)=>A.type===20&&A.value==="none"?0:A.type===17?Math.max(0,Math.floor(A.number)):0},Mu={name:"objectFit",initialValue:"fill",prefix:!1,type:1,parse:(t,A)=>A.filter(T).reduce((e,r)=>e|Ru(r.value),0)},Ru=t=>{switch(t){case"contain":return 2;case"cover":return 4;case"none":return 8;case"scale-down":return 16}return 0},Ou={name:"text-overflow",initialValue:"clip",prefix:!1,type:2,parse:(t,A)=>{switch(A){case"ellipsis":return 1;case"clip":default:return 0}}};var EA;(function(t){t[t.AUTO=0]="AUTO",t[t.CRISP_EDGES=1]="CRISP_EDGES",t[t.PIXELATED=2]="PIXELATED",t[t.SMOOTH=3]="SMOOTH"})(EA||(EA={}));const _u={name:"image-rendering",initialValue:"auto",prefix:!1,type:2,parse:(t,A)=>{switch(A.toLowerCase()){case"crisp-edges":case"-webkit-crisp-edges":case"-moz-crisp-edges":return EA.CRISP_EDGES;case"pixelated":case"-webkit-optimize-contrast":return EA.PIXELATED;case"smooth":case"high-quality":return EA.SMOOTH;case"auto":default:return EA.AUTO}}};class Nu{constructor(A,e){this.animationDuration=w(A,Tu,e.animationDuration),this.backgroundClip=w(A,qB,e.backgroundClip),this.backgroundColor=w(A,jB,e.backgroundColor),this.backgroundImage=w(A,lg,e.backgroundImage),this.backgroundOrigin=w(A,cg,e.backgroundOrigin),this.backgroundPosition=w(A,hg,e.backgroundPosition),this.backgroundRepeat=w(A,Bg,e.backgroundRepeat),this.backgroundSize=w(A,ug,e.backgroundSize),this.borderTopColor=w(A,fg,e.borderTopColor),this.borderRightColor=w(A,pg,e.borderRightColor),this.borderBottomColor=w(A,wg,e.borderBottomColor),this.borderLeftColor=w(A,Qg,e.borderLeftColor),this.borderTopLeftRadius=w(A,Cg,e.borderTopLeftRadius),this.borderTopRightRadius=w(A,mg,e.borderTopRightRadius),this.borderBottomRightRadius=w(A,Ug,e.borderBottomRightRadius),this.borderBottomLeftRadius=w(A,Fg,e.borderBottomLeftRadius),this.borderTopStyle=w(A,xg,e.borderTopStyle),this.borderRightStyle=w(A,bg,e.borderRightStyle),this.borderBottomStyle=w(A,Eg,e.borderBottomStyle),this.borderLeftStyle=w(A,yg,e.borderLeftStyle),this.borderTopWidth=w(A,Ig,e.borderTopWidth),this.borderRightWidth=w(A,Hg,e.borderRightWidth),this.borderBottomWidth=w(A,Tg,e.borderBottomWidth),this.borderLeftWidth=w(A,Sg,e.borderLeftWidth),this.boxShadow=w(A,Lu,e.boxShadow),this.clipPath=w(A,Mg,e.clipPath),this.color=w(A,Rg,e.color),this.direction=w(A,Og,e.direction),this.display=w(A,_g,e.display),this.float=w(A,$g,e.cssFloat),this.fontFamily=w(A,Uu,e.fontFamily),this.fontSize=w(A,Fu,e.fontSize),this.fontStyle=w(A,Eu,e.fontStyle),this.fontVariant=w(A,bu,e.fontVariant),this.fontWeight=w(A,xu,e.fontWeight),this.letterSpacing=w(A,Pg,e.letterSpacing),this.lineBreak=w(A,Gg,e.lineBreak),this.lineHeight=w(A,Vg,e.lineHeight),this.listStyleImage=w(A,Xg,e.listStyleImage),this.listStylePosition=w(A,zg,e.listStylePosition),this.listStyleType=w(A,An,e.listStyleType),this.marginTop=w(A,Wg,e.marginTop),this.marginRight=w(A,Jg,e.marginRight),this.marginBottom=w(A,Yg,e.marginBottom),this.marginLeft=w(A,Zg,e.marginLeft),this.opacity=w(A,fu,e.opacity);const r=w(A,qg,e.overflow);this.overflowX=r[0],this.overflowY=r[r.length>1?1:0],this.overflowWrap=w(A,jg,e.overflowWrap),this.paddingTop=w(A,Au,e.paddingTop),this.paddingRight=w(A,eu,e.paddingRight),this.paddingBottom=w(A,tu,e.paddingBottom),this.paddingLeft=w(A,ru,e.paddingLeft),this.paintOrder=w(A,vu,e.paintOrder),this.position=w(A,nu,e.position),this.textAlign=w(A,su,e.textAlign),this.textDecorationColor=w(A,pu,e.textDecorationColor??e.color),this.textDecorationLine=w(A,wu,e.textDecorationLine??e.textDecoration),this.textDecorationStyle=w(A,Qu,e.textDecorationStyle),this.textDecorationThickness=w(A,Cu,e.textDecorationThickness),this.textUnderlineOffset=w(A,mu,e.textUnderlineOffset),this.textShadow=w(A,iu,e.textShadow),this.textTransform=w(A,ou,e.textTransform),this.textOverflow=w(A,Ou,e.textOverflow),this.transform=w(A,au,e.transform),this.transformOrigin=w(A,hu,e.transformOrigin),this.rotate=w(A,Bu,e.rotate),this.visibility=w(A,gu,e.visibility),this.webkitTextStrokeColor=w(A,ku,e.webkitTextStrokeColor),this.webkitTextStrokeWidth=w(A,Du,e.webkitTextStrokeWidth),this.webkitLineClamp=w(A,Ku,e.webkitLineClamp),this.wordBreak=w(A,uu,e.wordBreak),this.zIndex=w(A,du,e.zIndex),this.objectFit=w(A,Mu,e.objectFit),this.imageRendering=w(A,_u,e.imageRendering)}isVisible(){return this.display>0&&this.opacity>0&&this.visibility===0}isTransparent(){return ie(this.backgroundColor)}isTransformed(){return this.transform!==null||this.rotate!==null}isPositioned(){return this.position!==0}isPositionedWithZIndex(){return this.isPositioned()&&!this.zIndex.auto}isFloating(){return this.float!==0}isInlineLevel(){return W(this.display,4)||W(this.display,33554432)||W(this.display,268435456)||W(this.display,536870912)||W(this.display,67108864)||W(this.display,134217728)}}class $u{constructor(A,e){this.content=w(A,yu,e.content),this.quotes=w(A,Su,e.quotes)}}class Ko{constructor(A,e){this.counterIncrement=w(A,Iu,e.counterIncrement),this.counterReset=w(A,Hu,e.counterReset)}}const w=(t,A,e)=>{const r=new ji,s=e!==null&&typeof e<"u"?e.toString():A.initialValue;r.write(s);const n=new Pe(r.read());switch(A.type){case 2:const i=n.parseComponentValue();return A.parse(t,T(i)?i.value:A.initialValue);case 0:return A.parse(t,n.parseComponentValue());case 1:return A.parse(t,n.parseComponentValues());case 4:return n.parseComponentValue();case 3:switch(A.format){case"angle":return Ge.parse(t,n.parseComponentValue());case"color":return ae.parse(t,n.parseComponentValue());case"image":return Zs.parse(t,n.parseComponentValue());case"length":const o=n.parseComponentValue();return ne(o)?o:rA;case"length-percentage":const a=n.parseComponentValue();return _(a)?a:rA;case"time":return ko.parse(t,n.parseComponentValue())}break}},JA=t=>t.nodeType===Node.ELEMENT_NODE,Mo=t=>t.nodeType===Node.TEXT_NODE,ze=t=>typeof t.className=="object",bt=t=>JA(t)&&typeof t.style<"u"&&!ze(t),Pu=t=>t.tagName==="LI",Gu=t=>t.tagName==="OL",Ro=t=>!ze(t)&&t.tagName.indexOf("-")>0,Vu="data-html2canvas-debug",Xu=t=>{if(typeof t.getAttribute!="function")return 0;switch(t.getAttribute(Vu)){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},en=(t,A)=>{const e=Xu(t);return e===1||A===e};class Oo{static normalizeElement(A,e){const r={};return bt(A)&&(e.animationDuration.some(s=>s>0)&&(r.animationDuration=A.style.animationDuration,A.style.animationDuration="0s"),e.transform!==null&&(r.transform=A.style.transform,A.style.transform="translate(0, 0)"),e.rotate!==null&&(r.rotate=A.style.rotate,A.style.rotate="0deg",r.transform===void 0&&(r.transform=A.style.transform,A.style.transform="translate(0, 0)"))),r}static restoreElement(A,e){bt(A)&&(e.animationDuration!==void 0&&(A.style.animationDuration=e.animationDuration),e.transform!==void 0&&(A.style.transform=e.transform),e.rotate!==void 0&&(A.style.rotate=e.rotate))}}class PA{constructor(A,e,r={}){if(this.context=A,this.textNodes=[],this.elements=[],this.flags=0,en(e,3))debugger;this.styles=new Nu(A,A.config.window.getComputedStyle(e,null)),r.normalizeDom!==!1&&bt(e)&&(this.originalStyles=Oo.normalizeElement(e,this.styles),this.originalElement=e),this.bounds=er(this.context,e),en(e,4)&&(this.flags|=16)}restore(){this.originalStyles&&this.originalElement&&(Oo.restoreElement(this.originalElement,this.originalStyles),this.originalStyles=void 0,this.originalElement=void 0)}restoreTree(){this.restore();for(const A of this.elements)A.restoreTree()}}for(var zu="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",_o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Et=typeof Uint8Array>"u"?[]:new Uint8Array(256),Mr=0;Mr<_o.length;Mr++)Et[_o.charCodeAt(Mr)]=Mr;for(var Wu=function(t){var A=t.length*.75,e=t.length,r,s=0,n,i,o,a;t[t.length-1]==="="&&(A--,t[t.length-2]==="="&&A--);var c=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(A):new Array(A),l=Array.isArray(c)?c:new Uint8Array(c);for(r=0;r<e;r+=4)n=Et[t.charCodeAt(r)],i=Et[t.charCodeAt(r+1)],o=Et[t.charCodeAt(r+2)],a=Et[t.charCodeAt(r+3)],l[s++]=n<<2|i>>4,l[s++]=(i&15)<<4|o>>2,l[s++]=(o&3)<<6|a&63;return c},Ju=function(t){for(var A=t.length,e=[],r=0;r<A;r+=2)e.push(t[r+1]<<8|t[r]);return e},Yu=function(t){for(var A=t.length,e=[],r=0;r<A;r+=4)e.push(t[r+3]<<24|t[r+2]<<16|t[r+1]<<8|t[r]);return e},Fe=5,tn=11,rn=2,Zu=tn-Fe,No=65536>>Fe,qu=1<<Fe,sn=qu-1,ju=1024>>Fe,Ad=No+ju,ed=Ad,td=32,rd=ed+td,sd=65536>>tn,nd=1<<Zu,id=nd-1,$o=function(t,A,e){return t.slice?t.slice(A,e):new Uint16Array(Array.prototype.slice.call(t,A,e))},od=function(t,A,e){return t.slice?t.slice(A,e):new Uint32Array(Array.prototype.slice.call(t,A,e))},ad=function(t,A){var e=Wu(t),r=Array.isArray(e)?Yu(e):new Uint32Array(e),s=Array.isArray(e)?Ju(e):new Uint16Array(e),n=24,i=$o(s,n/2,r[4]/2),o=r[5]===2?$o(s,(n+r[4])/2):od(r,Math.ceil((n+r[4])/4));return new ld(r[0],r[1],r[2],r[3],i,o)},ld=(function(){function t(A,e,r,s,n,i){this.initialValue=A,this.errorValue=e,this.highStart=r,this.highValueIndex=s,this.index=n,this.data=i}return t.prototype.get=function(A){var e;if(A>=0){if(A<55296||A>56319&&A<=65535)return e=this.index[A>>Fe],e=(e<<rn)+(A&sn),this.data[e];if(A<=65535)return e=this.index[No+(A-55296>>Fe)],e=(e<<rn)+(A&sn),this.data[e];if(A<this.highStart)return e=rd-sd+(A>>tn),e=this.index[e],e+=A>>Fe&id,e=this.index[e],e=(e<<rn)+(A&sn),this.data[e];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},t})(),Po="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",cd=typeof Uint8Array>"u"?[]:new Uint8Array(256),Rr=0;Rr<Po.length;Rr++)cd[Po.charCodeAt(Rr)]=Rr;var hd=1,nn=2,on=3,Go=4,Vo=5,Bd=7,Xo=8,an=9,ln=10,zo=11,Wo=12,Jo=13,Yo=14,cn=15,gd=function(t){for(var A=[],e=0,r=t.length;e<r;){var s=t.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=t.charCodeAt(e++);(n&64512)===56320?A.push(((s&1023)<<10)+(n&1023)+65536):(A.push(s),e--)}else A.push(s)}return A},ud=function(){for(var t=[],A=0;A<arguments.length;A++)t[A]=arguments[A];if(String.fromCodePoint)return String.fromCodePoint.apply(String,t);var e=t.length;if(!e)return"";for(var r=[],s=-1,n="";++s<e;){var i=t[s];i<=65535?r.push(i):(i-=65536,r.push((i>>10)+55296,i%1024+56320)),(s+1===e||r.length>16384)&&(n+=String.fromCharCode.apply(String,r),r.length=0)}return n},dd=ad(zu),HA="×",hn="÷",fd=function(t){return dd.get(t)},pd=function(t,A,e){var r=e-2,s=A[r],n=A[e-1],i=A[e];if(n===nn&&i===on)return HA;if(n===nn||n===on||n===Go||i===nn||i===on||i===Go)return hn;if(n===Xo&&[Xo,an,zo,Wo].indexOf(i)!==-1||(n===zo||n===an)&&(i===an||i===ln)||(n===Wo||n===ln)&&i===ln||i===Jo||i===Vo||i===Bd||n===hd)return HA;if(n===Jo&&i===Yo){for(;s===Vo;)s=A[--r];if(s===Yo)return HA}if(n===cn&&i===cn){for(var o=0;s===cn;)o++,s=A[--r];if(o%2===0)return HA}return hn},wd=function(t){var A=gd(t),e=A.length,r=0,s=0,n=A.map(fd);return{next:function(){if(r>=e)return{done:!0,value:null};for(var i=HA;r<e&&(i=pd(A,n,++r))===HA;);if(i!==HA||r===e){var o=ud.apply(null,A.slice(s,r));return s=r,{value:o,done:!1}}return{done:!0,value:null}}}},Qd=function(t){for(var A=wd(t),e=[],r;!(r=A.next()).done;)r.value&&e.push(r.value.slice());return e};const Cd=t=>{if(t.createRange){const e=t.createRange();if(e.getBoundingClientRect){const r=t.createElement("boundtest");r.style.height="123px",r.style.display="block",t.body.appendChild(r),e.selectNode(r);const s=e.getBoundingClientRect(),n=Math.round(s.height);if(t.body.removeChild(r),n===123)return!0}}return!1},md=t=>{const A=t.createElement("boundtest");A.style.width="50px",A.style.display="block",A.style.fontSize="12px",A.style.letterSpacing="0px",A.style.wordSpacing="0px",t.body.appendChild(A);const e=t.createRange();A.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";const r=A.firstChild,s=tr(r.data).map(a=>q(a));let n=0,i={};const o=s.every((a,c)=>{e.setStart(r,n),e.setEnd(r,n+a.length);const l=e.getBoundingClientRect();n+=a.length;const h=l.x>i.x||l.y>i.y;return i=l,c===0?!0:h});return t.body.removeChild(A),o},Ud=()=>typeof new Image().crossOrigin<"u",Fd=()=>typeof new XMLHttpRequest().responseType=="string",xd=t=>{const A=new Image,e=t.createElement("canvas"),r=e.getContext("2d");if(!r)return!1;A.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{r.drawImage(A,0,0),e.toDataURL()}catch{return!1}return!0},Zo=t=>t[0]===0&&t[1]===255&&t[2]===0&&t[3]===255,bd=t=>{const A=t.createElement("canvas"),e=100;A.width=e,A.height=e;const r=A.getContext("2d");if(!r)return Promise.reject(!1);r.fillStyle="rgb(0, 255, 0)",r.fillRect(0,0,e,e);const s=new Image,n=A.toDataURL();s.src=n;const i=Bn(e,e,0,0,s);return r.fillStyle="red",r.fillRect(0,0,e,e),qo(i).then(o=>{r.drawImage(o,0,0);const a=r.getImageData(0,0,e,e).data;r.fillStyle="red",r.fillRect(0,0,e,e);const c=t.createElement("div");return c.style.backgroundImage=`url(${n})`,c.style.height=`${e}px`,Zo(a)?qo(Bn(e,e,0,0,c)):Promise.reject(!1)}).then(o=>(r.drawImage(o,0,0),Zo(r.getImageData(0,0,e,e).data))).catch(()=>!1)},Bn=(t,A,e,r,s)=>{const n="http://www.w3.org/2000/svg",i=document.createElementNS(n,"svg"),o=document.createElementNS(n,"foreignObject");return i.setAttributeNS(null,"width",t.toString()),i.setAttributeNS(null,"height",A.toString()),o.setAttributeNS(null,"width","100%"),o.setAttributeNS(null,"height","100%"),o.setAttributeNS(null,"x",e.toString()),o.setAttributeNS(null,"y",r.toString()),o.setAttributeNS(null,"externalResourcesRequired","true"),i.appendChild(o),o.appendChild(s),i},qo=t=>new Promise((A,e)=>{const r=new Image;r.onload=()=>A(r),r.onerror=e,r.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(t))}`}),hA={get SUPPORT_RANGE_BOUNDS(){const t=Cd(document);return Object.defineProperty(hA,"SUPPORT_RANGE_BOUNDS",{value:t}),t},get SUPPORT_WORD_BREAKING(){const t=hA.SUPPORT_RANGE_BOUNDS&&md(document);return Object.defineProperty(hA,"SUPPORT_WORD_BREAKING",{value:t}),t},get SUPPORT_SVG_DRAWING(){const t=xd(document);return Object.defineProperty(hA,"SUPPORT_SVG_DRAWING",{value:t}),t},get SUPPORT_FOREIGNOBJECT_DRAWING(){const t=typeof Array.from=="function"&&typeof window.fetch=="function"?bd(document):Promise.resolve(!1);return Object.defineProperty(hA,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:t}),t},get SUPPORT_CORS_IMAGES(){const t=Ud();return Object.defineProperty(hA,"SUPPORT_CORS_IMAGES",{value:t}),t},get SUPPORT_RESPONSE_TYPE(){const t=Fd();return Object.defineProperty(hA,"SUPPORT_RESPONSE_TYPE",{value:t}),t},get SUPPORT_CORS_XHR(){const t="withCredentials"in new XMLHttpRequest;return Object.defineProperty(hA,"SUPPORT_CORS_XHR",{value:t}),t},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){const t=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(hA,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:t}),t}};class xe{constructor(A,e){this.text=A,this.bounds=e}}const Ed=(t,A,e,r)=>{const s=Hd(A,e),n=[];let i=0;return s.forEach(o=>{if(e.textDecorationLine.length||o.trim().length>0)if(hA.SUPPORT_RANGE_BOUNDS){const a=jo(r,i,o.length).getClientRects();if(a.length>1){const c=Or(o);let l=0;c.forEach(h=>{n.push(new xe(h,uA.fromDOMRectList(t,jo(r,l+i,h.length).getClientRects()))),l+=h.length})}else n.push(new xe(o,uA.fromDOMRectList(t,a)))}else{const a=r.splitText(o.length);n.push(new xe(o,yd(t,r))),r=a}else hA.SUPPORT_RANGE_BOUNDS||(r=r.splitText(o.length));i+=o.length}),n},yd=(t,A)=>{const e=A.ownerDocument;if(e){const r=e.createElement("html2canvaswrapper");r.appendChild(A.cloneNode(!0));const s=A.parentNode;if(s){s.replaceChild(r,A);const n=er(t,r);return r.firstChild&&s.replaceChild(r.firstChild,r),n}}return uA.EMPTY},jo=(t,A,e)=>{const r=t.ownerDocument;if(!r)throw new Error("Node has no owner document");const s=r.createRange();return s.setStart(t,A),s.setEnd(t,A+e),s},Or=t=>{if(hA.SUPPORT_NATIVE_TEXT_SEGMENTATION){const A=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(A.segment(t)).map(e=>e.segment)}return Qd(t)},Id=(t,A)=>{if(hA.SUPPORT_NATIVE_TEXT_SEGMENTATION){const e=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(e.segment(t)).map(r=>r.segment)}return Sd(t,A)},Hd=(t,A)=>A.letterSpacing!==0?Or(t):Id(t,A),Td=[32,160,4961,65792,65793,4153,4241],Sd=(t,A)=>{const e=Jc(t,{lineBreak:A.lineBreak,wordBreak:A.overflowWrap==="break-word"?"break-word":A.wordBreak}),r=[];let s;for(;!(s=e.next()).done;)if(s.value){const n=s.value.slice(),i=tr(n);let o="";i.forEach(a=>{Td.indexOf(a)===-1?o+=q(a):(o.length&&r.push(o),r.push(q(a)),o="")}),o.length&&r.push(o)}return r};class Ld{constructor(A,e,r){this.text=vd(e.data,r.textTransform),this.textBounds=Ed(A,this.text,r,e)}}const vd=(t,A)=>{switch(A){case 1:return t.toLowerCase();case 3:return t.replace(kd,Dd);case 2:return t.toUpperCase();default:return t}},kd=/(^|\s|:|-|\(|\))([a-z])/g,Dd=(t,A,e)=>t.length>0?A+e.toUpperCase():t;class Aa extends PA{constructor(A,e){super(A,e),this.src=e.currentSrc||e.src,this.intrinsicWidth=e.naturalWidth,this.intrinsicHeight=e.naturalHeight,this.context.cache.addImage(this.src)}}class ea extends PA{constructor(A,e){super(A,e),this.canvas=e,this.intrinsicWidth=e.width,this.intrinsicHeight=e.height}}class ta extends PA{constructor(A,e){super(A,e);const r=new XMLSerializer,s=er(A,e);e.setAttribute("width",`${s.width}px`),e.setAttribute("height",`${s.height}px`),this.svg=`data:image/svg+xml,${encodeURIComponent(r.serializeToString(e))}`,this.intrinsicWidth=e.width.baseVal.value,this.intrinsicHeight=e.height.baseVal.value,this.context.cache.addImage(this.svg)}}class ra extends PA{constructor(A,e){super(A,e),this.value=e.value}}class gn extends PA{constructor(A,e){super(A,e),this.start=e.start,this.reversed=typeof e.reversed=="boolean"&&e.reversed===!0}}const Kd=[{type:15,flags:0,unit:"px",number:3}],Md=[{type:16,flags:0,number:50}],Rd=t=>t.width>t.height?new uA(t.left+(t.width-t.height)/2,t.top,t.height,t.height):t.width<t.height?new uA(t.left,t.top+(t.height-t.width)/2,t.width,t.width):t,Od=t=>{const A=t.type===Nd?new Array(t.value.length+1).join("•"):t.value;return A.length===0?t.placeholder||"":A},_d=t=>t.value.length===0&&!!t.placeholder,_r="checkbox",Nr="radio",Nd="password",sa=707406591,$d=1970632191;class yt extends PA{constructor(A,e){switch(super(A,e),this.type=e.type.toLowerCase(),this.checked=e.checked,this.value=Od(e),this.isPlaceholder=_d(e),(this.type===_r||this.type===Nr)&&(this.styles.backgroundColor=3739148031,this.styles.borderTopColor=this.styles.borderRightColor=this.styles.borderBottomColor=this.styles.borderLeftColor=2779096575,this.styles.borderTopWidth=this.styles.borderRightWidth=this.styles.borderBottomWidth=this.styles.borderLeftWidth=1,this.styles.borderTopStyle=this.styles.borderRightStyle=this.styles.borderBottomStyle=this.styles.borderLeftStyle=1,this.styles.backgroundClip=[0],this.styles.backgroundOrigin=[0],this.bounds=Rd(this.bounds)),this.type){case _r:this.styles.borderTopRightRadius=this.styles.borderTopLeftRadius=this.styles.borderBottomRightRadius=this.styles.borderBottomLeftRadius=Kd;break;case Nr:this.styles.borderTopRightRadius=this.styles.borderTopLeftRadius=this.styles.borderBottomRightRadius=this.styles.borderBottomLeftRadius=Md;break}}}class na extends PA{constructor(A,e){super(A,e);const r=e.options[e.selectedIndex||0];this.value=r&&r.text||""}}class ia extends PA{constructor(A,e){super(A,e),this.value=e.value}}class oa extends PA{constructor(A,e,r){super(A,e),this.src=e.src,this.width=parseInt(e.width,10)||0,this.height=parseInt(e.height,10)||0,this.backgroundColor=this.styles.backgroundColor,this.parseTreeFn=r;try{if(e.contentWindow&&e.contentWindow.document&&e.contentWindow.document.documentElement&&this.parseTreeFn){this.tree=this.parseTreeFn(A,e.contentWindow.document.documentElement);const s=e.contentWindow.document.documentElement?Ve(A,getComputedStyle(e.contentWindow.document.documentElement).backgroundColor):$A.TRANSPARENT,n=e.contentWindow.document.body?Ve(A,getComputedStyle(e.contentWindow.document.body).backgroundColor):$A.TRANSPARENT;this.backgroundColor=ie(s)?ie(n)?this.styles.backgroundColor:n:s}}catch{}}}const Pd=["OL","UL","MENU"],$r=(t,A,e,r)=>{for(let s=A.firstChild,n;s;s=n)if(n=s.nextSibling,Mo(s)&&s.data.length>0)e.textNodes.push(new Ld(t,s,e.styles));else if(JA(s))if(It(s)&&s.assignedNodes)s.assignedNodes().forEach(i=>$r(t,i,e,r));else{const i=aa(t,s);i.styles.isVisible()&&(Gd(s,i,r)?i.flags|=4:Vd(i.styles)&&(i.flags|=2),Pd.indexOf(s.tagName)!==-1&&(i.flags|=8),e.elements.push(i),s.slot,s.shadowRoot?$r(t,s.shadowRoot,i,r):!Pr(s)&&!ca(s)&&!Gr(s)&&$r(t,s,i,r))}},aa=(t,A)=>dn(A)?new Aa(t,A):ha(A)?new ea(t,A):ca(A)?new ta(t,A):Pu(A)?new ra(t,A):Gu(A)?new gn(t,A):Xd(A)?new yt(t,A):Gr(A)?new na(t,A):Pr(A)?new ia(t,A):ga(A)?new oa(t,A,la):new PA(t,A),la=(t,A)=>{const e=aa(t,A);return e.flags|=4,$r(t,A,e,e),e},Gd=(t,A,e)=>A.styles.isPositionedWithZIndex()||A.styles.opacity<1||A.styles.isTransformed()||un(t)&&e.styles.isTransparent(),Vd=t=>t.isPositioned()||t.isFloating()?!0:W(t.display,268435456)||W(t.display,33554432)||W(t.display,536870912)||W(t.display,134217728),Xd=t=>t.tagName==="INPUT",zd=t=>t.tagName==="HTML",ca=t=>t.tagName==="svg",un=t=>t.tagName==="BODY",ha=t=>t.tagName==="CANVAS",Ba=t=>t.tagName==="VIDEO",dn=t=>t.tagName==="IMG",ga=t=>t.tagName==="IFRAME",fn=t=>t.tagName==="STYLE",ua=t=>t.tagName==="SCRIPT",Pr=t=>t.tagName==="TEXTAREA",Gr=t=>t.tagName==="SELECT",It=t=>t.tagName==="SLOT";class Wd{constructor(){this.counters={}}getCounterValue(A){const e=this.counters[A];return e&&e.length?e[e.length-1]:1}getCounterValues(A){const e=this.counters[A];return e||[]}pop(A){A.forEach(e=>this.counters[e].pop())}parse(A){const e=A.counterIncrement,r=A.counterReset;let s=!0;e!==null&&e.forEach(i=>{const o=this.counters[i.counter];o&&i.increment!==0&&(s=!1,o.length||o.push(1),o[Math.max(0,o.length-1)]+=i.increment)});const n=[];return s&&r.forEach(i=>{let o=this.counters[i.counter];n.push(i.counter),o||(o=this.counters[i.counter]=[]),o.push(i.reset)}),n}}const da={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},fa={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},Jd={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},Yd={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},We=(t,A,e,r,s,n)=>t<A||t>e?Tt(t,s,n.length>0):r.integers.reduce((i,o,a)=>{for(;t>=o;)t-=o,i+=r.values[a];return i},"")+n,pa=(t,A,e,r)=>{let s="";do e||t--,s=r(t)+s,t/=A;while(t*A>=A);return s},j=(t,A,e,r,s)=>{const n=e-A+1;return(t<0?"-":"")+(pa(Math.abs(t),n,r,i=>q(Math.floor(i%n)+A))+s)},be=(t,A,e=". ")=>{const r=A.length;return pa(Math.abs(t),r,!1,s=>A[Math.floor(s%r)])+e},Je=1,le=2,ce=4,Ht=8,YA=(t,A,e,r,s,n)=>{if(t<-9999||t>9999)return Tt(t,4,s.length>0);let i=Math.abs(t),o=s;if(i===0)return A[0]+o;for(let a=0;i>0&&a<=4;a++){const c=i%10;c===0&&W(n,Je)&&o!==""?o=A[c]+o:c>1||c===1&&a===0||c===1&&a===1&&W(n,le)||c===1&&a===1&&W(n,ce)&&t>100||c===1&&a>1&&W(n,Ht)?o=A[c]+(a>0?e[a-1]:"")+o:c===1&&a>0&&(o=e[a-1]+o),i=Math.floor(i/10)}return(t<0?r:"")+o},wa="十百千萬",Qa="拾佰仟萬",Ca="マイナス",pn="마이너스",Tt=(t,A,e)=>{const r=e?". ":"",s=e?"、":"",n=e?", ":"",i=e?" ":"";switch(A){case 0:return"•"+i;case 1:return"◦"+i;case 2:return"◾"+i;case 5:const o=j(t,48,57,!0,r);return o.length<4?`0${o}`:o;case 4:return be(t,"〇一二三四五六七八九",s);case 6:return We(t,1,3999,da,3,r).toLowerCase();case 7:return We(t,1,3999,da,3,r);case 8:return j(t,945,969,!1,r);case 9:return j(t,97,122,!1,r);case 10:return j(t,65,90,!1,r);case 11:return j(t,1632,1641,!0,r);case 12:case 49:return We(t,1,9999,fa,3,r);case 35:return We(t,1,9999,fa,3,r).toLowerCase();case 13:return j(t,2534,2543,!0,r);case 14:case 30:return j(t,6112,6121,!0,r);case 15:return be(t,"子丑寅卯辰巳午未申酉戌亥",s);case 16:return be(t,"甲乙丙丁戊己庚辛壬癸",s);case 17:case 48:return YA(t,"零一二三四五六七八九",wa,"負",s,le|ce|Ht);case 47:return YA(t,"零壹貳參肆伍陸柒捌玖",Qa,"負",s,Je|le|ce|Ht);case 42:return YA(t,"零一二三四五六七八九",wa,"负",s,le|ce|Ht);case 41:return YA(t,"零壹贰叁肆伍陆柒捌玖",Qa,"负",s,Je|le|ce|Ht);case 26:return YA(t,"〇一二三四五六七八九","十百千万",Ca,s,0);case 25:return YA(t,"零壱弐参四伍六七八九","拾百千万",Ca,s,Je|le|ce);case 31:return YA(t,"영일이삼사오육칠팔구","십백천만",pn,n,Je|le|ce);case 33:return YA(t,"零一二三四五六七八九","十百千萬",pn,n,0);case 32:return YA(t,"零壹貳參四五六七八九","拾百千",pn,n,Je|le|ce);case 18:return j(t,2406,2415,!0,r);case 20:return We(t,1,19999,Yd,3,r);case 21:return j(t,2790,2799,!0,r);case 22:return j(t,2662,2671,!0,r);case 52:return We(t,1,10999,Jd,3,r);case 23:return be(t,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return be(t,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return j(t,3302,3311,!0,r);case 28:return be(t,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",s);case 29:return be(t,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",s);case 34:return j(t,3792,3801,!0,r);case 37:return j(t,6160,6169,!0,r);case 38:return j(t,4160,4169,!0,r);case 39:return j(t,2918,2927,!0,r);case 40:return j(t,1776,1785,!0,r);case 43:return j(t,3046,3055,!0,r);case 44:return j(t,3174,3183,!0,r);case 45:return j(t,3664,3673,!0,r);case 46:return j(t,3872,3881,!0,r);case 3:default:return j(t,48,57,!0,r)}},wn="data-html2canvas-ignore",Zd=t=>{let A=t;for(;A;){if(A.parentNode&&A.parentNode.host)return A.parentNode;const e=A.getRootNode();if(e&&e!==A.ownerDocument&&e.host)return e;A=A.parentNode}return null};class ma{constructor(A,e,r){if(this.context=A,this.options=r,this.scrolledElements=[],this.referenceElement=e,this.counters=new Wd,this.quoteDepth=0,!e.ownerDocument)throw new Error("Cloned element does not have an owner document");if(!this.options.iframeContainer){const s=Zd(e);s&&(this.options.iframeContainer=s)}this.documentElement=this.cloneNode(e.ownerDocument.documentElement,!1)}toIFrame(A,e){const r=qd(A,e,this.options.iframeContainer);if(!r.contentWindow)throw new Error("Unable to find iframe window");const s=A.defaultView.pageXOffset,n=A.defaultView.pageYOffset,i=r.contentWindow,o=i.document,a=ef(r).then(async()=>{this.scrolledElements.forEach(nf),i&&(i.scrollTo(e.left,e.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(i.scrollY!==e.top||i.scrollX!==e.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(i.scrollX-e.left,i.scrollY-e.top,0,0)));const g=this.options.onclone,u=this.clonedReferenceElement;if(typeof u>"u")throw new Error(`Error finding the ${this.referenceElement.nodeName} in the cloned document`);return o.fonts&&o.fonts.ready&&await o.fonts.ready,/(AppleWebKit)/g.test(navigator.userAgent)&&await Af(o),typeof g=="function"?Promise.resolve().then(()=>g(o,u)).then(()=>r):r}),c=o.baseURI;o.open();const l=rf(document.doctype)+"<html></html>";try{const g=this.referenceElement.ownerDocument?.defaultView,u=g&&g.trustedTypes;let d=u?.getPolicy?.("html2canvas-pro");!d&&u&&(d=u.createPolicy("html2canvas-pro",{createHTML:f=>f})),d?o.write(d.createHTML(l)):o.write(l)}catch{o.write(l)}sf(this.referenceElement.ownerDocument,s,n),o.close();const h=o.adoptNode(this.documentElement);return hf(h,c),o.replaceChild(h,o.documentElement),a}createElementClone(A){if(en(A,2))debugger;if(ha(A))return this.createCanvasClone(A);if(Ba(A))return this.createVideoClone(A);if(fn(A))return this.createStyleClone(A);const e=A.cloneNode(!1);return dn(e)&&(dn(A)&&A.currentSrc&&A.currentSrc!==A.src&&(e.src=A.currentSrc,e.srcset=""),e.loading==="lazy"&&(e.loading="eager")),Ro(e)&&!ze(e)?this.createCustomElementClone(e):e}createCustomElementClone(A){const e=document.createElement("div");if(e.className=A.className,Qn(A.style,e),A.shadowRoot)try{e.attachShadow({mode:"open"})}catch(r){this.context.logger.error("Failed to attach shadow root to custom element clone:",r)}return e}createStyleClone(A){try{const r=A.sheet;if(r&&r.cssRules){const s=[].slice.call(r.cssRules,0).reduce((i,o)=>o&&typeof o.cssText=="string"?i+o.cssText:i,""),n=A.cloneNode(!1);return n.textContent=s,this.options.cspNonce&&(n.nonce=this.options.cspNonce),n}}catch(r){if(this.context.logger.error("Unable to access cssRules property",r),r.name!=="SecurityError")throw r}const e=A.cloneNode(!1);return this.options.cspNonce&&(e.nonce=this.options.cspNonce),e}createCanvasClone(A){if(this.options.inlineImages&&A.ownerDocument){const r=A.ownerDocument.createElement("img");try{return r.src=A.toDataURL(),r}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",A)}}const e=A.cloneNode(!1);try{e.width=A.width,e.height=A.height;const r=A.getContext("2d"),s=e.getContext("2d",{willReadFrequently:!0});if(s)if(!this.options.allowTaint&&r)s.putImageData(r.getImageData(0,0,A.width,A.height),0,0);else{const n=A.getContext("webgl2")??A.getContext("webgl");n&&n.getContextAttributes()?.preserveDrawingBuffer===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",A),s.drawImage(A,0,0)}return e}catch{this.context.logger.info("Unable to clone canvas as it is tainted",A)}return e}createVideoClone(A){const e=A.ownerDocument.createElement("canvas");e.width=A.offsetWidth,e.height=A.offsetHeight;const r=e.getContext("2d");try{return r&&(r.drawImage(A,0,0,e.width,e.height),this.options.allowTaint||r.getImageData(0,0,e.width,e.height)),e}catch{this.context.logger.info("Unable to clone video as it is tainted",A)}const s=A.ownerDocument.createElement("canvas");return s.width=A.offsetWidth,s.height=A.offsetHeight,s}appendChildNode(A,e,r){(!JA(e)||!ua(e)&&!e.hasAttribute(wn)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(e)))&&(!this.options.copyStyles||!JA(e)||!fn(e))&&A.appendChild(this.cloneNode(e,r))}shouldCloneChild(A){return!JA(A)||!ua(A)&&!A.hasAttribute(wn)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(A))}shouldCloneStyleElement(A){return!this.options.copyStyles||!JA(A)||!fn(A)}safeAppendClonedChild(A,e,r){this.shouldCloneChild(e)&&this.shouldCloneStyleElement(e)&&A.appendChild(this.cloneNode(e,r))}cloneAssignedNodes(A,e,r){A.forEach(s=>{this.safeAppendClonedChild(e,s,r)})}cloneSlotFallbackContent(A,e,r){for(let s=A.firstChild;s;s=s.nextSibling)this.safeAppendClonedChild(e,s,r)}cloneSlotElement(A,e,r){if(!It(A))return;const s=A;if(typeof s.assignedNodes!="function"){this.context.logger.warn("HTMLSlotElement.assignedNodes is not available",A),this.cloneSlotFallbackContent(A,e,r);return}const n=s.assignedNodes();if(!n||!Array.isArray(n)){this.context.logger.warn("assignedNodes() did not return a valid array",A),this.cloneSlotFallbackContent(A,e,r);return}n.length>0?this.cloneAssignedNodes(n,e,r):this.cloneSlotFallbackContent(A,e,r)}cloneShadowDOMChildren(A,e,r){for(let s=A.firstChild;s;s=s.nextSibling)JA(s)&&It(s)?this.cloneSlotElement(s,e,r):this.safeAppendClonedChild(e,s,r)}cloneLightDOMChildren(A,e,r){for(let s=A.firstChild;s;s=s.nextSibling)this.appendChildNode(e,s,r)}cloneSlotElementAsLightDOM(A,e,r){if(!It(A))return;const s=A;if(typeof s.assignedNodes!="function"){for(let i=A.firstChild;i;i=i.nextSibling)this.appendChildNode(e,i,r);return}const n=s.assignedNodes();if(n&&Array.isArray(n)&&n.length>0)n.forEach(i=>this.appendChildNode(e,i,r));else for(let i=A.firstChild;i;i=i.nextSibling)this.appendChildNode(e,i,r)}cloneShadowDOMAsLightDOM(A,e,r){for(let s=A.firstChild;s;s=s.nextSibling)JA(s)&&It(s)?this.cloneSlotElementAsLightDOM(s,e,r):this.appendChildNode(e,s,r)}cloneChildNodes(A,e,r){A.shadowRoot&&e.shadowRoot?(this.cloneShadowDOMChildren(A.shadowRoot,e.shadowRoot,r),this.cloneLightDOMChildren(A,e,r)):A.shadowRoot&&!e.shadowRoot?this.cloneShadowDOMAsLightDOM(A.shadowRoot,e,r):this.cloneLightDOMChildren(A,e,r)}cloneNode(A,e){if(Mo(A))return document.createTextNode(A.data);if(!A.ownerDocument)return A.cloneNode(!1);const r=A.ownerDocument.defaultView;if(r&&JA(A)&&(bt(A)||ze(A))){const s=this.createElementClone(A);s.style.transitionProperty="none";const n=r.getComputedStyle(A),i=r.getComputedStyle(A,":before"),o=r.getComputedStyle(A,":after");this.referenceElement===A&&bt(s)&&(this.clonedReferenceElement=s),un(s)&&lf(s,this.options.cspNonce);const a=this.counters.parse(new Ko(this.context,n)),c=this.resolvePseudoContent(A,s,i,St.BEFORE);Ro(A)&&(e=!0),Ba(A)||this.cloneChildNodes(A,s,e),c&&s.insertBefore(c,s.firstChild);const l=this.resolvePseudoContent(A,s,o,St.AFTER);return l&&s.appendChild(l),this.counters.pop(a),(n&&(this.options.copyStyles||ze(A))&&!ga(A)||e)&&Qn(n,s),(A.scrollTop!==0||A.scrollLeft!==0)&&this.scrolledElements.push([s,A.scrollLeft,A.scrollTop]),(Pr(A)||Gr(A))&&(Pr(s)||Gr(s))&&(s.value=A.value),s}return A.cloneNode(!1)}resolvePseudoContent(A,e,r,s){if(!r)return;const n=r.content,i=e.ownerDocument;if(!i||!n||n==="none"||n==="-moz-alt-content"||r.display==="none")return;this.counters.parse(new Ko(this.context,r));const o=new $u(this.context,r),a=i.createElement("html2canvaspseudoelement");Qn(r,a),o.content.forEach(l=>{if(l.type===0)a.appendChild(i.createTextNode(l.value));else if(l.type===22){const h=i.createElement("img");h.src=l.value,h.style.opacity="1",a.appendChild(h)}else if(l.type===18){if(l.name==="attr"){const h=l.values.filter(T);h.length&&a.appendChild(i.createTextNode(A.getAttribute(h[0].value)||""))}else if(l.name==="counter"){const[h,g]=l.values.filter(cA);if(h&&T(h)){const u=this.counters.getCounterValue(h.value),d=g&&T(g)?An.parse(this.context,g.value):3;a.appendChild(i.createTextNode(Tt(u,d,!1)))}}else if(l.name==="counters"){const[h,g,u]=l.values.filter(cA);if(h&&T(h)){const d=this.counters.getCounterValues(h.value),f=u&&T(u)?An.parse(this.context,u.value):3,U=g&&g.type===0?g.value:"",y=d.map(Q=>Tt(Q,f,!1)).join(U);a.appendChild(i.createTextNode(y))}}}else if(l.type===20)switch(l.value){case"open-quote":a.appendChild(i.createTextNode(Do(o.quotes,this.quoteDepth++,!0)));break;case"close-quote":a.appendChild(i.createTextNode(Do(o.quotes,--this.quoteDepth,!1)));break;default:a.appendChild(i.createTextNode(l.value))}}),a.className=`${Cn} ${mn}`;const c=s===St.BEFORE?` ${Cn}`:` ${mn}`;return ze(e)?e.className.baseValue+=c:e.className+=c,a}static destroy(A){return A.parentNode?(A.parentNode.removeChild(A),!0):!1}}var St;(function(t){t[t.BEFORE=0]="BEFORE",t[t.AFTER=1]="AFTER"})(St||(St={}));const qd=(t,A,e)=>{const r=t.createElement("iframe");return r.className="html2canvas-container",r.style.visibility="hidden",r.style.position="fixed",r.style.left="-10000px",r.style.top="0px",r.style.border="0",r.width=A.width.toString(),r.height=A.height.toString(),r.scrolling="no",r.setAttribute(wn,"true"),(e||t.body).appendChild(r),r},jd=t=>new Promise(A=>{if(t.complete){A();return}if(!t.src){A();return}t.onload=A,t.onerror=A}),Af=t=>Promise.all([].slice.call(t.images,0).map(jd)),ef=t=>new Promise((A,e)=>{const r=t.contentWindow;if(!r)return e("No window assigned for iframe");const s=r.document;r.onload=t.onload=()=>{r.onload=t.onload=null;const n=setInterval(()=>{s.body.childNodes.length>0&&s.readyState==="complete"&&(clearInterval(n),A(t))},50)}}),tf=["all","d","content"],Qn=(t,A)=>{for(let e=t.length-1;e>=0;e--){const r=t.item(e);tf.indexOf(r)===-1&&!r.startsWith("--")&&A.style.setProperty(r,t.getPropertyValue(r))}return A},rf=t=>{let A="";return t&&(A+="<!DOCTYPE ",t.name&&(A+=t.name),t.internalSubset&&(A+=" "+t.internalSubset.replace(/"/g,"&quot;").replace(/>/g,"&gt;")),t.publicId?(A+=' PUBLIC "'+t.publicId.replace(/"/g,"&quot;")+'"',t.systemId&&(A+=' "'+t.systemId.replace(/"/g,"&quot;")+'"')):t.systemId&&(A+=' SYSTEM "'+t.systemId.replace(/"/g,"&quot;")+'"'),A+=">"),A},sf=(t,A,e)=>{t&&t.defaultView&&(A!==t.defaultView.pageXOffset||e!==t.defaultView.pageYOffset)&&t.defaultView.scrollTo(A,e)},nf=([t,A,e])=>{t.scrollLeft=A,t.scrollTop=e},of=":before",af=":after",Cn="___html2canvas___pseudoelement_before",mn="___html2canvas___pseudoelement_after",Ua=`{
    content: "" !important;
    display: none !important;
}`,lf=(t,A)=>{cf(t,`.${Cn}${of}${Ua}
         .${mn}${af}${Ua}`,A)},cf=(t,A,e)=>{const r=t.ownerDocument;if(r){const s=r.createElement("style");s.textContent=A,e&&(s.nonce=e),t.appendChild(s)}},hf=(t,A)=>{const e=t.ownerDocument.createElement("base");e.href=A;const r=t.getElementsByTagName("head").item(0);r?.insertBefore(e,r?.firstChild??null)};class C{constructor(A,e){this.type=0,this.x=A,this.y=e}add(A,e){return new C(this.x+A,this.y+e)}}const Ye=(t,A,e)=>new C(t.x+(A.x-t.x)*e,t.y+(A.y-t.y)*e);class ZA{constructor(A,e,r,s){this.type=1,this.start=A,this.startControl=e,this.endControl=r,this.end=s}subdivide(A,e){const r=Ye(this.start,this.startControl,A),s=Ye(this.startControl,this.endControl,A),n=Ye(this.endControl,this.end,A),i=Ye(r,s,A),o=Ye(s,n,A),a=Ye(i,o,A);return e?new ZA(this.start,r,i,a):new ZA(a,o,n,this.end)}add(A,e){return new ZA(this.start.add(A,e),this.startControl.add(A,e),this.endControl.add(A,e),this.end.add(A,e))}reverse(){return new ZA(this.end,this.endControl,this.startControl,this.start)}}const FA=t=>t.type===1;class Bf{constructor(A){const e=A.styles,r=A.bounds;let[s,n]=Ut(e.borderTopLeftRadius,r.width,r.height),[i,o]=Ut(e.borderTopRightRadius,r.width,r.height),[a,c]=Ut(e.borderBottomRightRadius,r.width,r.height),[l,h]=Ut(e.borderBottomLeftRadius,r.width,r.height);const g=[];g.push((s+i)/r.width),g.push((l+a)/r.width),g.push((n+h)/r.height),g.push((o+c)/r.height);const u=Math.max(...g);u>1&&(s/=u,n/=u,i/=u,o/=u,a/=u,c/=u,l/=u,h/=u);const d=r.width-i,f=r.height-c,U=r.width-a,y=r.height-h,Q=e.borderTopWidth,x=e.borderRightWidth,E=e.borderBottomWidth,b=e.borderLeftWidth,D=H(e.paddingTop,A.bounds.width),J=H(e.paddingRight,A.bounds.width),BA=H(e.paddingBottom,A.bounds.width),z=H(e.paddingLeft,A.bounds.width);this.topLeftBorderDoubleOuterBox=s>0||n>0?X(r.left+b/3,r.top+Q/3,s-b/3,n-Q/3,R.TOP_LEFT):new C(r.left+b/3,r.top+Q/3),this.topRightBorderDoubleOuterBox=s>0||n>0?X(r.left+d,r.top+Q/3,i-x/3,o-Q/3,R.TOP_RIGHT):new C(r.left+r.width-x/3,r.top+Q/3),this.bottomRightBorderDoubleOuterBox=a>0||c>0?X(r.left+U,r.top+f,a-x/3,c-E/3,R.BOTTOM_RIGHT):new C(r.left+r.width-x/3,r.top+r.height-E/3),this.bottomLeftBorderDoubleOuterBox=l>0||h>0?X(r.left+b/3,r.top+y,l-b/3,h-E/3,R.BOTTOM_LEFT):new C(r.left+b/3,r.top+r.height-E/3),this.topLeftBorderDoubleInnerBox=s>0||n>0?X(r.left+b*2/3,r.top+Q*2/3,s-b*2/3,n-Q*2/3,R.TOP_LEFT):new C(r.left+b*2/3,r.top+Q*2/3),this.topRightBorderDoubleInnerBox=s>0||n>0?X(r.left+d,r.top+Q*2/3,i-x*2/3,o-Q*2/3,R.TOP_RIGHT):new C(r.left+r.width-x*2/3,r.top+Q*2/3),this.bottomRightBorderDoubleInnerBox=a>0||c>0?X(r.left+U,r.top+f,a-x*2/3,c-E*2/3,R.BOTTOM_RIGHT):new C(r.left+r.width-x*2/3,r.top+r.height-E*2/3),this.bottomLeftBorderDoubleInnerBox=l>0||h>0?X(r.left+b*2/3,r.top+y,l-b*2/3,h-E*2/3,R.BOTTOM_LEFT):new C(r.left+b*2/3,r.top+r.height-E*2/3),this.topLeftBorderStroke=s>0||n>0?X(r.left+b/2,r.top+Q/2,s-b/2,n-Q/2,R.TOP_LEFT):new C(r.left+b/2,r.top+Q/2),this.topRightBorderStroke=s>0||n>0?X(r.left+d,r.top+Q/2,i-x/2,o-Q/2,R.TOP_RIGHT):new C(r.left+r.width-x/2,r.top+Q/2),this.bottomRightBorderStroke=a>0||c>0?X(r.left+U,r.top+f,a-x/2,c-E/2,R.BOTTOM_RIGHT):new C(r.left+r.width-x/2,r.top+r.height-E/2),this.bottomLeftBorderStroke=l>0||h>0?X(r.left+b/2,r.top+y,l-b/2,h-E/2,R.BOTTOM_LEFT):new C(r.left+b/2,r.top+r.height-E/2),this.topLeftBorderBox=s>0||n>0?X(r.left,r.top,s,n,R.TOP_LEFT):new C(r.left,r.top),this.topRightBorderBox=i>0||o>0?X(r.left+d,r.top,i,o,R.TOP_RIGHT):new C(r.left+r.width,r.top),this.bottomRightBorderBox=a>0||c>0?X(r.left+U,r.top+f,a,c,R.BOTTOM_RIGHT):new C(r.left+r.width,r.top+r.height),this.bottomLeftBorderBox=l>0||h>0?X(r.left,r.top+y,l,h,R.BOTTOM_LEFT):new C(r.left,r.top+r.height),this.topLeftPaddingBox=s>0||n>0?X(r.left+b,r.top+Q,Math.max(0,s-b),Math.max(0,n-Q),R.TOP_LEFT):new C(r.left+b,r.top+Q),this.topRightPaddingBox=i>0||o>0?X(r.left+Math.min(d,r.width-x),r.top+Q,d>r.width+x?0:Math.max(0,i-x),Math.max(0,o-Q),R.TOP_RIGHT):new C(r.left+r.width-x,r.top+Q),this.bottomRightPaddingBox=a>0||c>0?X(r.left+Math.min(U,r.width-b),r.top+Math.min(f,r.height-E),Math.max(0,a-x),Math.max(0,c-E),R.BOTTOM_RIGHT):new C(r.left+r.width-x,r.top+r.height-E),this.bottomLeftPaddingBox=l>0||h>0?X(r.left+b,r.top+Math.min(y,r.height-E),Math.max(0,l-b),Math.max(0,h-E),R.BOTTOM_LEFT):new C(r.left+b,r.top+r.height-E),this.topLeftContentBox=s>0||n>0?X(r.left+b+z,r.top+Q+D,Math.max(0,s-(b+z)),Math.max(0,n-(Q+D)),R.TOP_LEFT):new C(r.left+b+z,r.top+Q+D),this.topRightContentBox=i>0||o>0?X(r.left+Math.min(d,r.width+b+z),r.top+Q+D,d>r.width+b+z?0:i-b+z,o-(Q+D),R.TOP_RIGHT):new C(r.left+r.width-(x+J),r.top+Q+D),this.bottomRightContentBox=a>0||c>0?X(r.left+Math.min(U,r.width-(b+z)),r.top+Math.min(f,r.height+Q+D),Math.max(0,a-(x+J)),c-(E+BA),R.BOTTOM_RIGHT):new C(r.left+r.width-(x+J),r.top+r.height-(E+BA)),this.bottomLeftContentBox=l>0||h>0?X(r.left+b+z,r.top+y,Math.max(0,l-(b+z)),h-(E+BA),R.BOTTOM_LEFT):new C(r.left+b+z,r.top+r.height-(E+BA))}}var R;(function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=1]="TOP_RIGHT",t[t.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",t[t.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(R||(R={}));const X=(t,A,e,r,s)=>{const n=4*((Math.sqrt(2)-1)/3),i=e*n,o=r*n,a=t+e,c=A+r;switch(s){case R.TOP_LEFT:return new ZA(new C(t,c),new C(t,c-o),new C(a-i,A),new C(a,A));case R.TOP_RIGHT:return new ZA(new C(t,A),new C(t+i,A),new C(a,c-o),new C(a,c));case R.BOTTOM_RIGHT:return new ZA(new C(a,A),new C(a,A+o),new C(t+i,c),new C(t,c));case R.BOTTOM_LEFT:default:return new ZA(new C(a,c),new C(a-i,c),new C(t,A+o),new C(t,A))}},Vr=t=>[t.topLeftBorderBox,t.topRightBorderBox,t.bottomRightBorderBox,t.bottomLeftBorderBox],gf=t=>[t.topLeftContentBox,t.topRightContentBox,t.bottomRightContentBox,t.bottomLeftContentBox],Xr=t=>[t.topLeftPaddingBox,t.topRightPaddingBox,t.bottomRightPaddingBox,t.bottomLeftPaddingBox];class Fa{constructor(A,e,r){this.offsetX=A,this.offsetY=e,this.matrix=r,this.type=0,this.target=6}}class zr{constructor(A,e){this.path=A,this.target=e,this.type=1}}class uf{constructor(A){this.opacity=A,this.type=2,this.target=6}}class Lt{constructor(A){this.applyClip=A,this.type=3,this.target=6}}const df=t=>t.type===0,xa=t=>t.type===1,ff=t=>t.type===2,pf=t=>t.type===3,ba=(t,A)=>t.length===A.length?t.some((e,r)=>e===A[r]):!1,wf=(t,A,e,r,s)=>t.map((n,i)=>{switch(i){case 0:return n.add(A,e);case 1:return n.add(A+r,e);case 2:return n.add(A+r,e+s);case 3:return n.add(A,e+s)}return n});class Ea{constructor(A){this.element=A,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}}class ya{constructor(A,e){if(this.container=A,this.parent=e,this.effects=[],this.curves=new Bf(this.container),this.container.styles.opacity<1&&this.effects.push(new uf(this.container.styles.opacity)),this.container.styles.rotate!==null){const r=this.container.styles.transformOrigin,s=this.container.bounds.left+H(r[0],this.container.bounds.width),n=this.container.bounds.top+H(r[1],this.container.bounds.height),o=this.container.styles.rotate*Math.PI/180,a=Math.cos(o),c=Math.sin(o),l=[a,c,-c,a,0,0];this.effects.push(new Fa(s,n,l))}if(this.container.styles.transform!==null){const r=this.container.styles.transformOrigin,s=this.container.bounds.left+H(r[0],this.container.bounds.width),n=this.container.bounds.top+H(r[1],this.container.bounds.height),i=this.container.styles.transform;this.effects.push(new Fa(s,n,i))}if(this.container.styles.overflowX!==0){const r=Vr(this.curves),s=Xr(this.curves);ba(r,s)?this.effects.push(new zr(r,6)):(this.effects.push(new zr(r,2)),this.effects.push(new zr(s,4)))}if(this.container.styles.clipPath.type!==0){const r=Qf(this.container.styles.clipPath,this.container.bounds);r&&this.effects.push(r)}}getEffects(A){let e=[2,3].indexOf(this.container.styles.position)===-1,r=this.parent;const s=this.effects.slice(0);for(;r;){const n=r.effects.filter(i=>!xa(i));if(e||r.container.styles.position!==0||!r.parent){if(e=[2,3].indexOf(r.container.styles.position)===-1,r.container.styles.overflowX!==0){const i=Vr(r.curves),o=Xr(r.curves);ba(i,o)||s.unshift(new zr(o,6))}s.unshift(...n)}else s.unshift(...n);r=r.parent}return s.filter(n=>W(n.target,A))}}const Ia=(t,A,e,r,s)=>t==="closest-side"?Math.min(A-e,r-A):t==="farthest-side"?Math.max(A-e,r-A):H(t,s),Qf=(t,A)=>{const{left:e,top:r,width:s,height:n}=A;switch(t.type){case 1:{const i=H(t.left,s),o=H(t.top,n),a=e+i,c=r+o,l=Math.max(0,s-i-H(t.right,s)),h=Math.max(0,n-o-H(t.bottom,n));return new Lt(g=>{g.beginPath(),g.rect(a,c,l,h),g.clip()})}case 2:{const i=e+H(t.cx,s),o=r+H(t.cy,n);let a;return t.radius==="closest-side"?a=Math.min(i-e,o-r,e+s-i,r+n-o):t.radius==="farthest-side"?a=Math.max(i-e,o-r,e+s-i,r+n-o):a=H(t.radius,Math.sqrt(s*s+n*n)/Math.SQRT2),new Lt(c=>{c.beginPath(),c.arc(i,o,Math.max(0,a),0,Math.PI*2),c.clip()})}case 3:{const i=e+H(t.cx,s),o=r+H(t.cy,n),a=Ia(t.rx,i,e,e+s,s),c=Ia(t.ry,o,r,r+n,n);return new Lt(l=>{l.beginPath(),l.ellipse(i,o,Math.max(0,a),Math.max(0,c),0,0,Math.PI*2),l.clip()})}case 4:{const i=t.points.map(([o,a])=>[e+H(o,s),r+H(a,n)]);return new Lt(o=>{if(o.beginPath(),i.length>0){o.moveTo(i[0][0],i[0][1]);for(let a=1;a<i.length;a++)o.lineTo(i[a][0],i[a][1]);o.closePath()}o.clip()})}case 5:{const{d:i}=t;return new Lt(o=>{try{const a=o.getTransform();o.translate(e,r),o.clip(new Path2D(i)),o.setTransform(a)}catch{}})}case 0:return null;default:return null}},Un=(t,A,e,r)=>{t.container.elements.forEach(s=>{const n=W(s.flags,4),i=W(s.flags,2),o=new ya(s,t);W(s.styles.display,2048)&&r.push(o);const a=W(s.flags,8)?[]:r;if(n||i){const c=n||s.styles.isPositioned()?e:A,l=new Ea(o);if(s.styles.isPositioned()||s.styles.opacity<1||s.styles.isTransformed()){const h=s.styles.zIndex.order;if(h<0){let g=0;c.negativeZIndex.some((u,d)=>h>u.element.container.styles.zIndex.order?(g=d,!1):g>0),c.negativeZIndex.splice(g,0,l)}else if(h>0){let g=0;c.positiveZIndex.some((u,d)=>h>=u.element.container.styles.zIndex.order?(g=d+1,!1):g>0),c.positiveZIndex.splice(g,0,l)}else c.zeroOrAutoZIndexOrTransformedOrOpacity.push(l)}else s.styles.isFloating()?c.nonPositionedFloats.push(l):c.nonPositionedInlineLevel.push(l);Un(o,l,n?l:e,a)}else s.styles.isInlineLevel()?A.inlineLevel.push(o):A.nonInlineLevel.push(o),Un(o,A,e,a);W(s.flags,8)&&Ha(s,a)})},Ha=(t,A)=>{let e=t instanceof gn?t.start:1;const r=t instanceof gn?t.reversed:!1;for(let s=0;s<A.length;s++){const n=A[s];n.container instanceof ra&&typeof n.container.value=="number"&&n.container.value!==0&&(e=n.container.value),n.listValue=Tt(e,n.container.styles.listStyleType,!0),e+=r?-1:1}},Cf=t=>{const A=new ya(t,null),e=new Ea(A),r=[];return Un(A,e,e,r),Ha(A.container,r),e},Ta=t=>{const A=t.bounds,e=t.styles;return A.add(e.borderLeftWidth,e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth),-(e.borderTopWidth+e.borderBottomWidth))},vt=t=>{const A=t.styles,e=t.bounds,r=H(A.paddingLeft,e.width),s=H(A.paddingRight,e.width),n=H(A.paddingTop,e.width),i=H(A.paddingBottom,e.width);return e.add(r+A.borderLeftWidth,n+A.borderTopWidth,-(A.borderRightWidth+A.borderLeftWidth+r+s),-(A.borderTopWidth+A.borderBottomWidth+n+i))},mf=(t,A)=>t===0?A.bounds:t===2?vt(A):Ta(A),Uf=(t,A)=>t===0?A.bounds:t===2?vt(A):Ta(A),Fn=(t,A,e)=>{const r=mf(qe(t.styles.backgroundOrigin,A),t),s=Uf(qe(t.styles.backgroundClip,A),t),n=Ff(qe(t.styles.backgroundSize,A),e,r);let[i,o]=n;const a=Ut(qe(t.styles.backgroundPosition,A),r.width-i,r.height-o),c=xf(qe(t.styles.backgroundRepeat,A),a,n,r,s),l=Math.round(r.left+a[0]),h=Math.round(r.top+a[1]);return i=Math.max(1,i),o=Math.max(1,o),[c,l,h,i,o]},Ze=t=>T(t)&&t.value===Xe.AUTO,Wr=t=>typeof t=="number",Ff=(t,[A,e,r],s)=>{const[n,i]=t;if(!n)return[0,0];if(_(n)&&i&&_(i))return[H(n,s.width),H(i,s.height)];const o=Wr(r);if(T(n)&&(n.value===Xe.CONTAIN||n.value===Xe.COVER))return Wr(r)?s.width/s.height<r!=(n.value===Xe.COVER)?[s.width,s.width/r]:[s.height*r,s.height]:[s.width,s.height];const a=Wr(A),c=Wr(e),l=a||c;if(Ze(n)&&(!i||Ze(i))){if(a&&c)return[A,e];if(!o&&!l)return[s.width,s.height];if(l&&o){const f=a?A:e*r,U=c?e:A/r;return[f,U]}const u=a?A:s.width,d=c?e:s.height;return[u,d]}if(o){let u=0,d=0;return _(n)?u=H(n,s.width):_(i)&&(d=H(i,s.height)),Ze(n)?u=d*r:(!i||Ze(i))&&(d=u/r),[u,d]}let h=null,g=null;if(_(n)?h=H(n,s.width):i&&_(i)&&(g=H(i,s.height)),h!==null&&(!i||Ze(i))&&(g=a&&c?h/A*e:s.height),g!==null&&Ze(n)&&(h=a&&c?g/e*A:s.width),h!==null&&g!==null)return[h,g];throw new Error("Unable to calculate background-size for element")},qe=(t,A)=>{const e=t[A];return typeof e>"u"?t[0]:e},xf=(t,[A,e],[r,s],n,i)=>{switch(t){case 2:return[new C(Math.round(n.left),Math.round(n.top+e)),new C(Math.round(n.left+n.width),Math.round(n.top+e)),new C(Math.round(n.left+n.width),Math.round(s+n.top+e)),new C(Math.round(n.left),Math.round(s+n.top+e))];case 3:return[new C(Math.round(n.left+A),Math.round(n.top)),new C(Math.round(n.left+A+r),Math.round(n.top)),new C(Math.round(n.left+A+r),Math.round(n.height+n.top)),new C(Math.round(n.left+A),Math.round(n.height+n.top))];case 1:return[new C(Math.round(n.left+A),Math.round(n.top+e)),new C(Math.round(n.left+A+r),Math.round(n.top+e)),new C(Math.round(n.left+A+r),Math.round(n.top+e+s)),new C(Math.round(n.left+A),Math.round(n.top+e+s))];default:return[new C(Math.round(i.left),Math.round(i.top)),new C(Math.round(i.left+i.width),Math.round(i.top)),new C(Math.round(i.left+i.width),Math.round(i.height+i.top)),new C(Math.round(i.left),Math.round(i.height+i.top))]}},bf="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Sa="Hidden Text";class Ef{constructor(A){this._data={},this._document=A}parseMetrics(A,e){const r=this._document.createElement("div"),s=this._document.createElement("img"),n=this._document.createElement("span"),i=this._document.body;r.style.visibility="hidden",r.style.fontFamily=A,r.style.fontSize=e,r.style.margin="0",r.style.padding="0",r.style.whiteSpace="nowrap",i.appendChild(r),s.src=bf,s.width=1,s.height=1,s.style.margin="0",s.style.padding="0",s.style.verticalAlign="baseline",n.style.fontFamily=A,n.style.fontSize=e,n.style.margin="0",n.style.padding="0",n.appendChild(this._document.createTextNode(Sa)),r.appendChild(n),r.appendChild(s);const o=s.offsetTop-n.offsetTop+2;r.removeChild(n),r.appendChild(this._document.createTextNode(Sa)),r.style.lineHeight="normal",s.style.verticalAlign="super";const a=s.offsetTop-r.offsetTop+2;return i.removeChild(r),{baseline:o,middle:a}}getMetrics(A,e){const r=`${A} ${e}`;return typeof this._data[r]>"u"&&(this._data[r]=this.parseMetrics(A,e)),this._data[r]}}class La{constructor(A,e){this.context=A,this.options=e}}class yf{constructor(A){this.ctx=A.ctx,this.context=A.context,this.canvas=A.canvas}async renderBackgroundImage(A){let e=A.styles.backgroundImage.length-1;for(const r of A.styles.backgroundImage.slice(0).reverse())r.type===0?await this.renderBackgroundURLImage(A,r,e):ig(r)?this.renderLinearGradient(A,r,e):og(r)&&this.renderRadialGradient(A,r,e),e--}async renderBackgroundURLImage(A,e,r){let s;const n=e.url;try{s=await this.context.cache.match(n)}catch{this.context.logger.error(`Error loading background-image ${n}`)}if(s){const i=isNaN(s.width)||s.width===0?1:s.width,o=isNaN(s.height)||s.height===0?1:s.height,[a,c,l,h,g]=Fn(A,r,[i,o,i/o]),u=this.ctx.createPattern(this.resizeImage(s,h,g,A.styles.imageRendering),"repeat");this.renderRepeat(a,u,c,l)}}renderLinearGradient(A,e,r){const[s,n,i,o,a]=Fn(A,r,[null,null,null]),[c,l,h,g,u]=eg(e.angle,o,a),f=(this.canvas.ownerDocument??document).createElement("canvas");f.width=o,f.height=a;const U=f.getContext("2d"),y=U.createLinearGradient(l,g,h,u);if(Co(e.stops,c||1).forEach(Q=>y.addColorStop(Q.stop,G(Q.color))),U.fillStyle=y,U.fillRect(0,0,o,a),o>0&&a>0){const Q=this.ctx.createPattern(f,"repeat");this.renderRepeat(s,Q,n,i)}}renderRadialGradient(A,e,r){const[s,n,i,o,a]=Fn(A,r,[null,null,null]),c=e.position.length===0?[me]:e.position,l=H(c[0],o),h=H(c[c.length-1],a);let[g,u]=tg(e,l,h,o,a);if((g===0||u===0)&&(g=Math.max(g,.01),u=Math.max(u,.01)),g>0&&u>0){const d=this.ctx.createRadialGradient(n+l,i+h,0,n+l,i+h,g);if(Co(e.stops,g*2).forEach(f=>d.addColorStop(f.stop,G(f.color))),this.path(s),this.ctx.fillStyle=d,g!==u){const f=A.bounds.left+.5*A.bounds.width,U=A.bounds.top+.5*A.bounds.height,y=u/g,Q=1/y;this.ctx.save(),this.ctx.translate(f,U),this.ctx.transform(1,0,0,y,0,0),this.ctx.translate(-f,-U),this.ctx.fillRect(n,Q*(i-U)+U,o,a*Q),this.ctx.restore()}else this.ctx.fill()}}renderRepeat(A,e,r,s){this.path(A),this.ctx.fillStyle=e,this.ctx.translate(r,s),this.ctx.fill(),this.ctx.translate(-r,-s)}resizeImage(A,e,r,s){const i=(this.canvas.ownerDocument??document).createElement("canvas");i.width=Math.max(1,e),i.height=Math.max(1,r);const o=i.getContext("2d");return s===EA.PIXELATED||s===EA.CRISP_EDGES?(this.context.logger.debug("Disabling image smoothing for background image due to CSS image-rendering"),o.imageSmoothingEnabled=!1):s===EA.SMOOTH?(this.context.logger.debug("Enabling image smoothing for background image due to CSS image-rendering: smooth"),o.imageSmoothingEnabled=!0):o.imageSmoothingEnabled=this.ctx.imageSmoothingEnabled,this.ctx.imageSmoothingQuality&&(o.imageSmoothingQuality=this.ctx.imageSmoothingQuality),o.drawImage(A,0,0,A.width,A.height,0,0,e,r),i}path(A){this.ctx.beginPath(),this.formatPath(A),this.ctx.closePath()}formatPath(A){A.forEach((e,r)=>{const s=FA(e)?e.start:e;r===0?this.ctx.moveTo(s.x,s.y):this.ctx.lineTo(s.x,s.y),FA(e)&&this.ctx.bezierCurveTo(e.startControl.x,e.startControl.y,e.endControl.x,e.endControl.y,e.end.x,e.end.y)})}}const va=(t,A)=>{switch(A){case 0:return TA(t.topLeftBorderBox,t.topLeftPaddingBox,t.topRightBorderBox,t.topRightPaddingBox);case 1:return TA(t.topRightBorderBox,t.topRightPaddingBox,t.bottomRightBorderBox,t.bottomRightPaddingBox);case 2:return TA(t.bottomRightBorderBox,t.bottomRightPaddingBox,t.bottomLeftBorderBox,t.bottomLeftPaddingBox);case 3:default:return TA(t.bottomLeftBorderBox,t.bottomLeftPaddingBox,t.topLeftBorderBox,t.topLeftPaddingBox)}},If=(t,A)=>{switch(A){case 0:return TA(t.topLeftBorderBox,t.topLeftBorderDoubleOuterBox,t.topRightBorderBox,t.topRightBorderDoubleOuterBox);case 1:return TA(t.topRightBorderBox,t.topRightBorderDoubleOuterBox,t.bottomRightBorderBox,t.bottomRightBorderDoubleOuterBox);case 2:return TA(t.bottomRightBorderBox,t.bottomRightBorderDoubleOuterBox,t.bottomLeftBorderBox,t.bottomLeftBorderDoubleOuterBox);case 3:default:return TA(t.bottomLeftBorderBox,t.bottomLeftBorderDoubleOuterBox,t.topLeftBorderBox,t.topLeftBorderDoubleOuterBox)}},Hf=(t,A)=>{switch(A){case 0:return TA(t.topLeftBorderDoubleInnerBox,t.topLeftPaddingBox,t.topRightBorderDoubleInnerBox,t.topRightPaddingBox);case 1:return TA(t.topRightBorderDoubleInnerBox,t.topRightPaddingBox,t.bottomRightBorderDoubleInnerBox,t.bottomRightPaddingBox);case 2:return TA(t.bottomRightBorderDoubleInnerBox,t.bottomRightPaddingBox,t.bottomLeftBorderDoubleInnerBox,t.bottomLeftPaddingBox);case 3:default:return TA(t.bottomLeftBorderDoubleInnerBox,t.bottomLeftPaddingBox,t.topLeftBorderDoubleInnerBox,t.topLeftPaddingBox)}},Tf=(t,A)=>{switch(A){case 0:return Jr(t.topLeftBorderStroke,t.topRightBorderStroke);case 1:return Jr(t.topRightBorderStroke,t.bottomRightBorderStroke);case 2:return Jr(t.bottomRightBorderStroke,t.bottomLeftBorderStroke);case 3:default:return Jr(t.bottomLeftBorderStroke,t.topLeftBorderStroke)}},Jr=(t,A)=>{const e=[];return FA(t)?e.push(t.subdivide(.5,!1)):e.push(t),FA(A)?e.push(A.subdivide(.5,!0)):e.push(A),e},TA=(t,A,e,r)=>{const s=[];return FA(t)?s.push(t.subdivide(.5,!1)):s.push(t),FA(e)?s.push(e.subdivide(.5,!0)):s.push(e),FA(r)?s.push(r.subdivide(.5,!0).reverse()):s.push(r),FA(A)?s.push(A.subdivide(.5,!1).reverse()):s.push(A),s};class Sf{constructor(A,e){this.ctx=A.ctx,this.pathCallbacks=e}async renderSolidBorder(A,e,r){this.pathCallbacks.path(va(r,e)),this.ctx.fillStyle=G(A),this.ctx.fill()}async renderDoubleBorder(A,e,r,s){if(e<3){await this.renderSolidBorder(A,r,s);return}const n=If(s,r);this.pathCallbacks.path(n),this.ctx.fillStyle=G(A),this.ctx.fill();const i=Hf(s,r);this.pathCallbacks.path(i),this.ctx.fill()}async renderDashedDottedBorder(A,e,r,s,n){this.ctx.save();const i=Tf(s,r),o=va(s,r);n===2&&(this.pathCallbacks.path(o),this.ctx.clip());let a,c,l,h;FA(o[0])?(a=o[0].start.x,c=o[0].start.y):(a=o[0].x,c=o[0].y),FA(o[1])?(l=o[1].end.x,h=o[1].end.y):(l=o[1].x,h=o[1].y);let g;r===0||r===2?g=Math.abs(a-l):g=Math.abs(c-h),this.ctx.beginPath(),n===3?this.pathCallbacks.formatPath(i):this.pathCallbacks.formatPath(o.slice(0,2));let u=e<3?e*3:e*2,d=e<3?e*2:e;n===3&&(u=e,d=e);let f=!0;if(g<=u*2)f=!1;else if(g<=u*2+d){const U=g/(2*u+d);u*=U,d*=U}else{const U=Math.floor((g+d)/(u+d)),y=(g-U*u)/(U-1),Q=(g-(U+1)*u)/U;d=Q<=0||Math.abs(d-y)<Math.abs(d-Q)?y:Q}if(f&&(n===3?this.ctx.setLineDash([0,u+d]):this.ctx.setLineDash([u,d])),n===3?(this.ctx.lineCap="round",this.ctx.lineWidth=e):this.ctx.lineWidth=e*2+1.1,this.ctx.strokeStyle=G(A),this.ctx.stroke(),this.ctx.setLineDash([]),n===2){if(FA(o[0])){const U=o[3],y=o[0];this.ctx.beginPath(),this.pathCallbacks.formatPath([new C(U.end.x,U.end.y),new C(y.start.x,y.start.y)]),this.ctx.stroke()}if(FA(o[1])){const U=o[1],y=o[2];this.ctx.beginPath(),this.pathCallbacks.formatPath([new C(U.end.x,U.end.y),new C(y.start.x,y.start.y)]),this.ctx.stroke()}}this.ctx.restore()}}class Lf{constructor(A,e){this.activeEffects=[],this.ctx=A.ctx,this.pathCallback=e}applyEffects(A){for(;this.activeEffects.length;)this.popEffect();A.forEach(e=>this.applyEffect(e))}applyEffect(A){this.ctx.save(),ff(A)?this.ctx.globalAlpha=A.opacity:df(A)?(this.ctx.translate(A.offsetX,A.offsetY),this.ctx.transform(A.matrix[0],A.matrix[1],A.matrix[2],A.matrix[3],A.matrix[4],A.matrix[5]),this.ctx.translate(-A.offsetX,-A.offsetY)):xa(A)?(this.pathCallback.path(A.path),this.ctx.clip()):pf(A)&&A.applyClip(this.ctx),this.activeEffects.push(A)}popEffect(){this.activeEffects.pop(),this.ctx.restore()}getActiveEffectCount(){return this.activeEffects.length}hasActiveEffects(){return this.activeEffects.length>0}}const vf=["-apple-system","system-ui"],kf=/[\u2E80-\u2FFF\u3000-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF\uFF01-\uFFEF]/,Df=t=>kf.test(t),Kf=()=>{if(typeof navigator>"u")return null;const t=navigator.userAgent,A=/iPhone|iPad|iPod/.test(t),e=/Macintosh/.test(t)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>1;if(!A&&!e)return null;const r=[/(?:iPhone|CPU(?:\siPhone)?)\sOS\s(\d+)[\._](\d+)/,/Version\/(\d+)\.(\d+)/];for(const s of r){const n=t.match(s);if(n&&n[1])return parseInt(n[1],10)}return null},Mf=t=>{const A=Kf();return A!==null&&A>=15&&A<17?t.map(e=>vf.indexOf(e)!==-1?'-apple-system, "Helvetica Neue", Arial, sans-serif':e):t};class Rf{constructor(A){this.ctx=A.ctx,this.options=A.options}iterateLettersWithLetterSpacing(A,e,r,s){const n=Or(A.text),i=A.bounds.top+r;let o=A.bounds.left;for(const a of n){if(Df(a)){const c=this.ctx.textBaseline;this.ctx.textBaseline="ideographic",s(a,o,i),this.ctx.textBaseline=c}else s(a,o,i);o+=this.ctx.measureText(a).width+e}}renderTextWithLetterSpacing(A,e,r){e===0?this.ctx.fillText(A.text,A.bounds.left,A.bounds.top+r):this.iterateLettersWithLetterSpacing(A,e,r,(s,n,i)=>{this.ctx.fillText(s,n,i)})}renderTextBoundWithPaintOrder(A,e,r){r.forEach(s=>{switch(s){case 0:this.ctx.fillStyle=G(e.color),this.renderTextWithLetterSpacing(A,e.letterSpacing,e.fontSize.number);break;case 1:e.webkitTextStrokeWidth&&A.text.trim().length&&(this.ctx.strokeStyle=G(e.webkitTextStrokeColor),this.ctx.lineWidth=e.webkitTextStrokeWidth,this.ctx.lineJoin=typeof window<"u"&&window.chrome?"miter":"round",e.letterSpacing===0?this.ctx.strokeText(A.text,A.bounds.left,A.bounds.top+e.fontSize.number):this.iterateLettersWithLetterSpacing(A,e.letterSpacing,e.fontSize.number,(n,i,o)=>this.ctx.strokeText(n,i,o)),this.ctx.strokeStyle="",this.ctx.lineWidth=0,this.ctx.lineJoin="miter");break}})}renderTextDecoration(A,e){this.ctx.fillStyle=G(e.textDecorationColor||e.color);let r=1;typeof e.textDecorationThickness=="number"?r=e.textDecorationThickness:e.textDecorationThickness==="from-font"&&(r=Math.max(1,Math.floor(e.fontSize.number*.05)));let s=0;typeof e.textUnderlineOffset=="number"&&(s=e.textUnderlineOffset);const n=e.textDecorationStyle;e.textDecorationLine.forEach(i=>{let o=0;switch(i){case 1:o=A.top+A.height-r+s;break;case 2:o=A.top;break;case 3:o=A.top+(A.height/2-r/2);break;default:return}this.drawDecorationLine(A.left,o,A.width,r,n)})}drawDecorationLine(A,e,r,s,n){switch(n){case 0:this.ctx.fillRect(A,e,r,s);break;case 1:const i=Math.max(1,s);this.ctx.fillRect(A,e,r,s),this.ctx.fillRect(A,e+s+i,r,s);break;case 2:this.ctx.save(),this.ctx.beginPath(),this.ctx.setLineDash([s,s*2]),this.ctx.lineWidth=s,this.ctx.strokeStyle=this.ctx.fillStyle,this.ctx.moveTo(A,e+s/2),this.ctx.lineTo(A+r,e+s/2),this.ctx.stroke(),this.ctx.restore();break;case 3:this.ctx.save(),this.ctx.beginPath(),this.ctx.setLineDash([s*3,s*2]),this.ctx.lineWidth=s,this.ctx.strokeStyle=this.ctx.fillStyle,this.ctx.moveTo(A,e+s/2),this.ctx.lineTo(A+r,e+s/2),this.ctx.stroke(),this.ctx.restore();break;case 4:this.ctx.save(),this.ctx.beginPath(),this.ctx.lineWidth=s,this.ctx.strokeStyle=this.ctx.fillStyle;const o=s*2,a=s*4;let c=A;for(this.ctx.moveTo(c,e+s/2);c<A+r;){const l=Math.min(c+a/2,A+r);if(this.ctx.quadraticCurveTo(c+a/4,e+s/2-o,l,e+s/2),c=l,c<A+r){const h=Math.min(c+a/2,A+r);this.ctx.quadraticCurveTo(c+a/4,e+s/2+o,h,e+s/2),c=h}}this.ctx.stroke(),this.ctx.restore();break;default:this.ctx.fillRect(A,e,r,s)}}truncateTextWithEllipsis(A,e,r){const n=this.ctx.measureText("…").width,i=Or(A);if(r===0){const o=l=>this.ctx.measureText(i.slice(0,l).join("")).width+n<=e;let a=0,c=i.length;for(;a<c;){const l=a+c+1>>1;o(l)?a=l:c=l-1}return i.slice(0,a).join("")+"…"}else{let o=n;const a=[];for(const c of i){const l=this.ctx.measureText(c).width;if(o+l>e)break;a.push(c),o+=l+r}return a.join("")+"…"}}createFontStyle(A){const e=A.fontVariant.filter(n=>n==="normal"||n==="small-caps").join(""),r=Mf(A.fontFamily).join(", "),s=_A(A.fontSize)?`${A.fontSize.number}${A.fontSize.unit}`:`${A.fontSize.number}px`;return[[A.fontStyle,e,A.fontWeight,s,r].join(" "),r,s]}async renderTextNode(A,e,r){const[s]=this.createFontStyle(e);this.ctx.font=s,this.ctx.direction=e.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic";const n=e.paintOrder,i=e.fontSize.number*1.5;if(e.webkitLineClamp>0&&(e.display&2)!==0&&e.overflowY===1&&A.textBounds.length>0){const h=[];let g=[],u=A.textBounds[0].bounds.top;A.textBounds.forEach(f=>{Math.abs(f.bounds.top-u)>=i*.5?(g.length>0&&h.push(g),g=[f],u=f.bounds.top):g.push(f)}),g.length>0&&h.push(g);const d=e.webkitLineClamp;if(h.length>d){for(let U=0;U<d-1;U++)h[U].forEach(y=>{this.renderTextBoundWithPaintOrder(y,e,n)});const f=h[d-1];if(f&&f.length>0&&r){const U=f.map(b=>b.text).join(""),y=f[0],Q=r.width-(y.bounds.left-r.left),x=this.truncateTextWithEllipsis(U,Q,e.letterSpacing),E=new xe(x,y.bounds);n.forEach(b=>{switch(b){case 0:this.ctx.fillStyle=G(e.color),e.letterSpacing===0?this.ctx.fillText(x,y.bounds.left,y.bounds.top+e.fontSize.number):this.iterateLettersWithLetterSpacing(E,e.letterSpacing,e.fontSize.number,(D,J,BA)=>this.ctx.fillText(D,J,BA));break;case 1:e.webkitTextStrokeWidth&&x.trim().length&&(this.ctx.strokeStyle=G(e.webkitTextStrokeColor),this.ctx.lineWidth=e.webkitTextStrokeWidth,this.ctx.lineJoin=typeof window<"u"&&window.chrome?"miter":"round",e.letterSpacing===0?this.ctx.strokeText(x,y.bounds.left,y.bounds.top+e.fontSize.number):this.iterateLettersWithLetterSpacing(E,e.letterSpacing,e.fontSize.number,(D,J,BA)=>this.ctx.strokeText(D,J,BA)),this.ctx.strokeStyle="",this.ctx.lineWidth=0,this.ctx.lineJoin="miter");break}})}return}}const a=e.textOverflow===1&&r&&e.overflowX===1&&A.textBounds.length>0;let c=!1,l="";if(a){const h=A.textBounds[0].bounds.top;if(A.textBounds.every(u=>Math.abs(u.bounds.top-h)<i*.5)){let u=A.textBounds.map(U=>U.text).join("");u=u.replace(/\s+/g," ").trim();const d=this.ctx.measureText(u).width,f=r.width;d>f&&(c=!0,l=this.truncateTextWithEllipsis(u,f,e.letterSpacing))}}if(c){const h=A.textBounds[0],g=new xe(l,h.bounds);n.forEach(u=>{switch(u){case 0:{this.ctx.fillStyle=G(e.color),e.letterSpacing===0?this.ctx.fillText(l,h.bounds.left,h.bounds.top+e.fontSize.number):this.iterateLettersWithLetterSpacing(g,e.letterSpacing,e.fontSize.number,(f,U,y)=>this.ctx.fillText(f,U,y));const d=e.textShadow;d.length&&l.trim().length&&(d.slice(0).reverse().forEach(f=>{this.ctx.shadowColor=G(f.color),this.ctx.shadowOffsetX=f.offsetX.number*this.options.scale,this.ctx.shadowOffsetY=f.offsetY.number*this.options.scale,this.ctx.shadowBlur=f.blur.number,e.letterSpacing===0?this.ctx.fillText(l,h.bounds.left,h.bounds.top+e.fontSize.number):this.iterateLettersWithLetterSpacing(g,e.letterSpacing,e.fontSize.number,(U,y,Q)=>this.ctx.fillText(U,y,Q))}),this.ctx.shadowColor="",this.ctx.shadowOffsetX=0,this.ctx.shadowOffsetY=0,this.ctx.shadowBlur=0);break}case 1:e.webkitTextStrokeWidth&&l.trim().length&&(this.ctx.strokeStyle=G(e.webkitTextStrokeColor),this.ctx.lineWidth=e.webkitTextStrokeWidth,this.ctx.lineJoin=typeof window<"u"&&window.chrome?"miter":"round",e.letterSpacing===0?this.ctx.strokeText(l,h.bounds.left,h.bounds.top+e.fontSize.number):this.iterateLettersWithLetterSpacing(g,e.letterSpacing,e.fontSize.number,(d,f,U)=>this.ctx.strokeText(d,f,U)),this.ctx.strokeStyle="",this.ctx.lineWidth=0,this.ctx.lineJoin="miter");break}});return}A.textBounds.forEach(h=>{n.forEach(g=>{switch(g){case 0:{this.ctx.fillStyle=G(e.color),this.renderTextWithLetterSpacing(h,e.letterSpacing,e.fontSize.number);const u=e.textShadow;u.length&&h.text.trim().length&&(u.slice(0).reverse().forEach(d=>{this.ctx.shadowColor=G(d.color),this.ctx.shadowOffsetX=d.offsetX.number*this.options.scale,this.ctx.shadowOffsetY=d.offsetY.number*this.options.scale,this.ctx.shadowBlur=d.blur.number,this.renderTextWithLetterSpacing(h,e.letterSpacing,e.fontSize.number)}),this.ctx.shadowColor="",this.ctx.shadowOffsetX=0,this.ctx.shadowOffsetY=0,this.ctx.shadowBlur=0),e.textDecorationLine.length&&this.renderTextDecoration(h.bounds,e);break}case 1:{if(e.webkitTextStrokeWidth&&h.text.trim().length){this.ctx.strokeStyle=G(e.webkitTextStrokeColor),this.ctx.lineWidth=e.webkitTextStrokeWidth,this.ctx.lineJoin=typeof window<"u"&&window.chrome?"miter":"round";const u=e.fontSize.number;e.letterSpacing===0?this.ctx.strokeText(h.text,h.bounds.left,h.bounds.top+u):this.iterateLettersWithLetterSpacing(h,e.letterSpacing,u,(d,f,U)=>this.ctx.strokeText(d,f,U)),this.ctx.strokeStyle="",this.ctx.lineWidth=0,this.ctx.lineJoin="miter"}break}}})})}}const Of=1e4;class xn extends La{constructor(A,e){super(A,e),this.canvas=e.canvas?e.canvas:document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),e.canvas||(this.canvas.width=Math.floor(e.width*e.scale),this.canvas.height=Math.floor(e.height*e.scale),this.canvas.style.width=`${e.width}px`,this.canvas.style.height=`${e.height}px`),this.fontMetrics=new Ef(document),this.ctx.scale(this.options.scale,this.options.scale),this.ctx.translate(-e.x,-e.y),this.ctx.textBaseline="bottom",e.imageSmoothing!==void 0&&(this.ctx.imageSmoothingEnabled=e.imageSmoothing),e.imageSmoothingQuality&&(this.ctx.imageSmoothingQuality=e.imageSmoothingQuality),this.backgroundRenderer=new yf({ctx:this.ctx,context:this.context,canvas:this.canvas,options:{width:e.width,height:e.height,scale:e.scale}}),this.borderRenderer=new Sf({ctx:this.ctx},{path:r=>this.path(r),formatPath:r=>this.formatPath(r)}),this.effectsRenderer=new Lf({ctx:this.ctx},{path:r=>this.path(r)}),this.textRenderer=new Rf({ctx:this.ctx,context:this.context,options:{scale:e.scale}}),this.context.logger.debug(`Canvas renderer initialized (${e.width}x${e.height}) with scale ${e.scale}`)}async renderStack(A){A.element.container.styles.isVisible()&&await this.renderStackContent(A)}async renderNode(A){if(W(A.container.flags,16))debugger;A.container.styles.isVisible()&&(await this.renderNodeBackgroundAndBorders(A),await this.renderNodeContent(A))}renderReplacedElement(A,e,r){const s=r.naturalWidth||A.intrinsicWidth,n=r.naturalHeight||A.intrinsicHeight;if(r&&s>0&&n>0){const i=vt(A),o=Xr(e);this.path(o),this.ctx.save(),this.ctx.clip();let a=0,c=0,l=s,h=n,g=i.left,u=i.top,d=i.width,f=i.height;const{objectFit:U}=A.styles,y=d/f,Q=l/h;if(U===2)Q>y?(f=d/Q,u+=(i.height-f)/2):(d=f*Q,g+=(i.width-d)/2);else if(U===4)Q>y?(l=h*y,a+=(s-l)/2):(h=l/y,c+=(n-h)/2);else if(U===8)l>d?(a+=(l-d)/2,l=d):(g+=(d-l)/2,d=l),h>f?(c+=(h-f)/2,h=f):(u+=(f-h)/2,f=h);else if(U===16){const x=Q>y?d:f*Q,E=l>d?l:d;x<E?Q>y?(f=d/Q,u+=(i.height-f)/2):(d=f*Q,g+=(i.width-d)/2):(l>d?(a+=(l-d)/2,l=d):(g+=(d-l)/2,d=l),h>f?(c+=(h-f)/2,h=f):(u+=(f-h)/2,f=h))}this.ctx.drawImage(r,a,c,l,h,g,u,d,f),this.ctx.restore()}}async renderNodeContent(A){this.effectsRenderer.applyEffects(A.getEffects(4));const e=A.container,r=A.curves,s=e.styles,n=vt(e);for(const i of e.textNodes)await this.textRenderer.renderTextNode(i,s,n);if(e instanceof Aa)try{const i=await this.context.cache.match(e.src),o=this.ctx.imageSmoothingEnabled;s.imageRendering===EA.PIXELATED||s.imageRendering===EA.CRISP_EDGES?(this.context.logger.debug(`Disabling image smoothing for ${e.src} due to CSS image-rendering: ${s.imageRendering===EA.PIXELATED?"pixelated":"crisp-edges"}`),this.ctx.imageSmoothingEnabled=!1):s.imageRendering===EA.SMOOTH&&(this.context.logger.debug(`Enabling image smoothing for ${e.src} due to CSS image-rendering: smooth`),this.ctx.imageSmoothingEnabled=!0),this.renderReplacedElement(e,r,i),this.ctx.imageSmoothingEnabled=o}catch{this.context.logger.error(`Error loading image ${e.src}`)}if(e instanceof ea&&this.renderReplacedElement(e,r,e.canvas),e instanceof ta)try{const i=await this.context.cache.match(e.svg);this.renderReplacedElement(e,r,i)}catch{this.context.logger.error(`Error loading svg ${e.svg.substring(0,255)}`)}if(e instanceof oa&&e.tree){const o=await new xn(this.context,{scale:this.options.scale,backgroundColor:e.backgroundColor,x:0,y:0,width:e.width,height:e.height}).render(e.tree);e.width&&e.height&&this.ctx.drawImage(o,0,0,e.width,e.height,e.bounds.left,e.bounds.top,e.bounds.width,e.bounds.height)}if(e instanceof yt){const i=Math.min(e.bounds.width,e.bounds.height);e.type===_r?e.checked&&(this.ctx.save(),this.path([new C(e.bounds.left+i*.39363,e.bounds.top+i*.79),new C(e.bounds.left+i*.16,e.bounds.top+i*.5549),new C(e.bounds.left+i*.27347,e.bounds.top+i*.44071),new C(e.bounds.left+i*.39694,e.bounds.top+i*.5649),new C(e.bounds.left+i*.72983,e.bounds.top+i*.23),new C(e.bounds.left+i*.84,e.bounds.top+i*.34085),new C(e.bounds.left+i*.39363,e.bounds.top+i*.79)]),this.ctx.fillStyle=G(sa),this.ctx.fill(),this.ctx.restore()):e.type===Nr&&e.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(e.bounds.left+i/2,e.bounds.top+i/2,i/4,0,Math.PI*2,!0),this.ctx.fillStyle=G(sa),this.ctx.fill(),this.ctx.restore())}if(_f(e)&&e.value.length){const[i,o,a]=this.textRenderer.createFontStyle(s),{baseline:c}=this.fontMetrics.getMetrics(o,a);this.ctx.font=i;const l=e instanceof yt&&e.isPlaceholder;this.ctx.fillStyle=G(l?$d:s.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=$f(e.styles.textAlign);const h=vt(e);let g=0;switch(e.styles.textAlign){case 1:g+=h.width/2;break;case 2:g+=h.width;break}let u=0;if(e instanceof yt){const f=H(s.fontSize,0);u=(h.height-f)/2}const d=h.add(g,u,0,0);this.ctx.save(),this.path([new C(h.left,h.top),new C(h.left+h.width,h.top),new C(h.left+h.width,h.top+h.height),new C(h.left,h.top+h.height)]),this.ctx.clip(),this.textRenderer.renderTextWithLetterSpacing(new xe(e.value,d),s.letterSpacing,c),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(W(e.styles.display,2048)){if(e.styles.listStyleImage!==null){const i=e.styles.listStyleImage;if(i.type===0){let o;const a=i.url;try{o=await this.context.cache.match(a),this.ctx.drawImage(o,e.bounds.left-(o.width+10),e.bounds.top)}catch{this.context.logger.error(`Error loading list-style-image ${a}`)}}}else if(A.listValue&&e.styles.listStyleType!==-1){const[i]=this.textRenderer.createFontStyle(s);this.ctx.font=i,this.ctx.fillStyle=G(s.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right";const o=new uA(e.bounds.left,e.bounds.top+H(e.styles.paddingTop,e.bounds.width),e.bounds.width,Lo(s.lineHeight,s.fontSize.number)/2+1);this.textRenderer.renderTextWithLetterSpacing(new xe(A.listValue,o),s.letterSpacing,Lo(s.lineHeight,s.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"}}}async renderStackContent(A){if(W(A.element.container.flags,16))debugger;await this.renderNodeBackgroundAndBorders(A.element);for(const e of A.negativeZIndex)await this.renderStack(e);await this.renderNodeContent(A.element);for(const e of A.nonInlineLevel)await this.renderNode(e);for(const e of A.nonPositionedFloats)await this.renderStack(e);for(const e of A.nonPositionedInlineLevel)await this.renderStack(e);for(const e of A.inlineLevel)await this.renderNode(e);for(const e of A.zeroOrAutoZIndexOrTransformedOrOpacity)await this.renderStack(e);for(const e of A.positiveZIndex)await this.renderStack(e)}mask(A){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.options.width,0),this.ctx.lineTo(this.options.width,this.options.height),this.ctx.lineTo(0,this.options.height),this.ctx.lineTo(0,0),this.formatPath(A.slice(0).reverse()),this.ctx.closePath()}path(A){this.ctx.beginPath(),this.formatPath(A),this.ctx.closePath()}formatPath(A){A.forEach((e,r)=>{const s=FA(e)?e.start:e;r===0?this.ctx.moveTo(s.x,s.y):this.ctx.lineTo(s.x,s.y),FA(e)&&this.ctx.bezierCurveTo(e.startControl.x,e.startControl.y,e.endControl.x,e.endControl.y,e.end.x,e.end.y)})}async renderNodeBackgroundAndBorders(A){this.effectsRenderer.applyEffects(A.getEffects(2));const e=A.container.styles,r=!ie(e.backgroundColor)||e.backgroundImage.length,s=[{style:e.borderTopStyle,color:e.borderTopColor,width:e.borderTopWidth},{style:e.borderRightStyle,color:e.borderRightColor,width:e.borderRightWidth},{style:e.borderBottomStyle,color:e.borderBottomColor,width:e.borderBottomWidth},{style:e.borderLeftStyle,color:e.borderLeftColor,width:e.borderLeftWidth}],n=Nf(qe(e.backgroundClip,0),A.curves);(r||e.boxShadow.length)&&(this.ctx.save(),this.path(n),this.ctx.clip(),ie(e.backgroundColor)||(this.ctx.fillStyle=G(e.backgroundColor),this.ctx.fill()),await this.backgroundRenderer.renderBackgroundImage(A.container),this.ctx.restore(),e.boxShadow.slice(0).reverse().forEach(o=>{this.ctx.save();const a=Vr(A.curves),c=o.inset?0:Of,l=wf(a,-c+(o.inset?1:-1)*o.spread.number,(o.inset?1:-1)*o.spread.number,o.spread.number*(o.inset?-2:2),o.spread.number*(o.inset?-2:2));o.inset?(this.path(a),this.ctx.clip(),this.mask(l)):(this.mask(a),this.ctx.clip(),this.path(l)),this.ctx.shadowOffsetX=o.offsetX.number+c,this.ctx.shadowOffsetY=o.offsetY.number,this.ctx.shadowColor=G(o.color),this.ctx.shadowBlur=o.blur.number,this.ctx.fillStyle=o.inset?G(o.color):"rgba(0,0,0,1)",this.ctx.fill(),this.ctx.restore()}));let i=0;for(const o of s)o.style!==0&&!ie(o.color)&&o.width>0&&(o.style===2?await this.borderRenderer.renderDashedDottedBorder(o.color,o.width,i,A.curves,2):o.style===3?await this.borderRenderer.renderDashedDottedBorder(o.color,o.width,i,A.curves,3):o.style===4?await this.borderRenderer.renderDoubleBorder(o.color,o.width,i,A.curves):await this.borderRenderer.renderSolidBorder(o.color,i,A.curves)),i++}async render(A){this.options.backgroundColor&&(this.ctx.fillStyle=G(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height));const e=Cf(A);return await this.renderStack(e),this.effectsRenderer.applyEffects([]),this.canvas}}const _f=t=>t instanceof ia||t instanceof na?!0:t instanceof yt&&t.type!==Nr&&t.type!==_r,Nf=(t,A)=>{switch(t){case 0:return Vr(A);case 2:return gf(A);case 1:default:return Xr(A)}},$f=t=>{switch(t){case 1:return"center";case 2:return"right";case 0:default:return"left"}};class Pf extends La{constructor(A,e){super(A,e),this.canvas=e.canvas?e.canvas:document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.options=e,this.canvas.width=Math.floor(e.width*e.scale),this.canvas.height=Math.floor(e.height*e.scale),this.canvas.style.width=`${e.width}px`,this.canvas.style.height=`${e.height}px`,this.ctx.scale(this.options.scale,this.options.scale),this.ctx.translate(-e.x,-e.y),this.context.logger.debug(`EXPERIMENTAL ForeignObject renderer initialized (${e.width}x${e.height} at ${e.x},${e.y}) with scale ${e.scale}`)}async render(A){const e=Bn(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,A),r=await Gf(e);return this.options.backgroundColor&&(this.ctx.fillStyle=G(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(r,-this.options.x*this.options.scale,-this.options.y*this.options.scale),this.canvas}}const Gf=t=>new Promise((A,e)=>{const r=new Image;r.onload=()=>{A(r)},r.onerror=e,r.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(t))}`});class ka{constructor({id:A,enabled:e}){this.id=A,this.enabled=e,this.start=Date.now()}debug(...A){this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug(this.id,`${this.getTime()}ms`,...A):this.info(...A))}getTime(){return Date.now()-this.start}info(...A){this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info(this.id,`${this.getTime()}ms`,...A)}warn(...A){this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn(this.id,`${this.getTime()}ms`,...A):this.info(...A))}error(...A){this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error(this.id,`${this.getTime()}ms`,...A):this.info(...A))}}ka.instances={};class Vf{constructor(A,e){if(this.context=A,this._options=e,this._cache=new Map,this._pendingOperations=new Map,this.maxSize=e.maxCacheSize??100,this.maxSize<1)throw new Error("Cache maxSize must be at least 1");this.maxSize>1e4&&this.context.logger.warn(`Cache maxSize ${this.maxSize} is very large and may cause memory issues. Consider using a smaller value (recommended: 100-1000).`)}addImage(A){const e=this._pendingOperations.get(A);if(e)return e;if(this.has(A)){const r=this._cache.get(A);return r&&(r.lastAccessed=Date.now()),Promise.resolve()}if(En(A)||Jf(A)){const r=this._addImageInternal(A);return this._pendingOperations.set(A,r),r.finally(()=>{this._pendingOperations.delete(A)}),r}return Promise.resolve()}async _addImageInternal(A){const e=this._options.imageTimeout??15e3,r=new Promise((n,i)=>{setTimeout(()=>{i(new Error(`Image load timeout after ${e}ms: ${A}`))},e)}),s=Promise.race([this.loadImage(A),r]);s.catch(n=>{this.context.logger.error(`Failed to load image ${A}: ${n instanceof Error?n.message:"Unknown error"}`)}),this.set(A,s)}match(A){const e=this._cache.get(A);if(e)return e.lastAccessed=Date.now(),e.value}set(A,e){if(this._cache.has(A)){const r=this._cache.get(A);r.value=e,r.lastAccessed=Date.now();return}this._cache.size>=this.maxSize&&this.evictLRU(),this._cache.set(A,{value:e,lastAccessed:Date.now()})}evictLRU(){let A=null,e=1/0;for(const[r,s]of this._cache.entries())s.lastAccessed<e&&(e=s.lastAccessed,A=r);A&&(this._cache.delete(A),this.context.logger.debug(`Cache: Evicted LRU entry: ${A}`))}size(){return this._cache.size}getMaxSize(){return this.maxSize}clear(){this._cache.clear()}async loadImage(A){const e=this.context.originChecker,r=a=>e.isSameOrigin(a),s=typeof this._options.customIsSameOrigin=="function"?await this._options.customIsSameOrigin(A,r):r(A),n=!bn(A)&&this._options.useCORS===!0&&hA.SUPPORT_CORS_IMAGES&&!s,i=!bn(A)&&!s&&!En(A)&&typeof this._options.proxy=="string"&&hA.SUPPORT_CORS_XHR&&!n;if(!s&&this._options.allowTaint===!1&&!bn(A)&&!En(A)&&!i&&!n)return;let o=A;return i&&(o=await this.proxy(o)),this.context.logger.debug(`Added image ${A.substring(0,256)}`),await new Promise((a,c)=>{const l=new Image;l.onload=()=>a(l),l.onerror=c,(Yf(o)||n)&&(l.crossOrigin="anonymous"),l.src=o,l.complete===!0&&setTimeout(()=>a(l),500),this._options.imageTimeout>0&&setTimeout(()=>c(`Timed out (${this._options.imageTimeout}ms) loading image`),this._options.imageTimeout)})}has(A){return this._cache.has(A)}keys(){return Promise.resolve(Object.keys(this._cache))}proxy(A){const e=this._options.proxy;if(!e)throw new Error("No proxy defined");const r=A.substring(0,256);return new Promise((s,n)=>{const i=hA.SUPPORT_RESPONSE_TYPE?"blob":"text",o=new XMLHttpRequest;o.onload=()=>{if(o.status===200)if(i==="text")s(o.response);else{const c=new FileReader;c.addEventListener("load",()=>s(c.result),!1),c.addEventListener("error",l=>n(l),!1),c.readAsDataURL(o.response)}else n(`Failed to proxy resource ${r} with status code ${o.status}`)},o.onerror=n;const a=e.indexOf("?")>-1?"&":"?";if(o.open("GET",`${e}${a}url=${encodeURIComponent(A)}&responseType=${i}`),i!=="text"&&o instanceof XMLHttpRequest&&(o.responseType=i),this._options.imageTimeout){const c=this._options.imageTimeout;o.timeout=c,o.ontimeout=()=>n(`Timed out (${c}ms) proxying ${r}`)}o.send()})}}const Xf=/^data:image\/svg\+xml/i,zf=/^data:image\/.*;base64,/i,Wf=/^data:image\/.*/i,Jf=t=>hA.SUPPORT_SVG_DRAWING||!Zf(t),bn=t=>Wf.test(t),Yf=t=>zf.test(t),En=t=>t.substr(0,4)==="blob",Zf=t=>t.substr(-3).toLowerCase()==="svg"||Xf.test(t);class qf{constructor(A){if(!A||!A.document)throw new Error("Valid window object required for OriginChecker");if(!A.location||!A.location.href)throw new Error("Window object must have valid location");this.link=A.document.createElement("a"),this.origin=this.getOrigin(A.location.href)}getOrigin(A){return this.link.href=A,this.link.href=this.link.href,this.link.protocol+this.link.hostname+this.link.port}isSameOrigin(A){return this.getOrigin(A)===this.origin}getContextOrigin(){return this.origin}}class Yr{constructor(A,e,r){this.windowBounds=e,this.instanceName=`#${Yr.instanceCount++}`,this.config=r,this.logger=new ka({id:this.instanceName,enabled:A.logging}),this.originChecker=new qf(r.window),this.cache=A.cache??r.cache??new Vf(this,A)}}Yr.instanceCount=1;class kt{constructor(A={}){if(this.window=A.window||(typeof window<"u"?window:null),!this.window)throw new Error("Window object is required but not available");this.cspNonce=A.cspNonce,this.cache=A.cache}static fromElement(A,e={}){const r=A.ownerDocument;if(!r)throw new Error("Element is not attached to a document");const s=r.defaultView;if(!s)throw new Error("Document is not attached to a window");return new kt({window:s,...e})}clone(A={}){return new kt({window:A.window||this.window,cspNonce:A.cspNonce??this.cspNonce,cache:A.cache??this.cache})}}function jf(t){console.warn("[html2canvas-pro] setDefaultConfig is deprecated. Pass configuration to html2canvas directly.")}class Ap{constructor(A={}){this.config={maxImageTimeout:3e5,allowDataUrls:!0,...A}}validateUrl(A,e="general"){if(!A||typeof A!="string")return{valid:!1,error:"URL must be a non-empty string"};if(A.startsWith("data:"))return this.config.allowDataUrls?{valid:!0,sanitized:A}:{valid:!1,error:"Data URLs are not allowed"};if(A.startsWith("blob:"))return{valid:!0,sanitized:A};try{const r=new URL(A);if(!["http:","https:"].includes(r.protocol))return{valid:!1,error:`Protocol ${r.protocol} is not allowed. Only http and https are permitted.`};if(e==="proxy"&&this.config.allowedProxyDomains&&this.config.allowedProxyDomains.length>0){const s=r.hostname.toLowerCase();if(!this.config.allowedProxyDomains.some(i=>{const o=i.toLowerCase();return s===o||s.endsWith("."+o)}))return{valid:!1,error:`Proxy domain ${r.hostname} is not in the allowed list`}}if(e==="proxy"){if(!this.config.allowLocalhostProxy){const s=r.hostname.toLowerCase();if(s==="localhost"||s==="127.0.0.1"||s==="::1")return{valid:!1,error:"Localhost is not allowed for proxy URLs"};if(this.isPrivateIP(s))return{valid:!1,error:"Private IP addresses are not allowed for proxy URLs"};if(s.startsWith("169.254.")||s.startsWith("fe80:"))return{valid:!1,error:"Link-local addresses are not allowed for proxy URLs"}}return{valid:!0,sanitized:A,requiresRuntimeCheck:!0}}return{valid:!0,sanitized:A}}catch(r){return{valid:!1,error:`Invalid URL format: ${r instanceof Error?r.message:"Unknown error"}`}}}isPrivateIP(A){return[/^0\./,/^10\./,/^100\.(6[4-9]|[7-9][0-9]|1[0-1][0-9]|12[0-7])\./,/^127\./,/^169\.254\./,/^172\.(1[6-9]|2[0-9]|3[0-1])\./,/^192\.0\.0\./,/^192\.0\.2\./,/^192\.168\./,/^198\.(1[8-9])\./,/^198\.51\.100\./,/^203\.0\.113\./,/^2(2[4-9]|3[0-9])\./,/^24[0-9]\./,/^255\.255\.255\.255$/].some(r=>r.test(A))?!0:A.includes(":")?this.isPrivateIPv6(A):!1}isPrivateIPv6(A){const s=A.toLowerCase().trim().replace(/^\[|\]$/g,"").split("%")[0];if(/^(0:){7}1$/.test(s)||s==="::1"||/^(0:){7}0$/.test(s)||s==="::")return!0;const n=this.expandIPv6(s);if(!n)return this.isPrivateIPv6Prefix(s);const i=parseInt(n.substring(0,2),16);if(i>=252&&i<=253)return!0;if(i===254){const o=parseInt(n.substring(2,4),16);if(o>=128&&o<=191)return!0}return i===255}expandIPv6(A){try{if(A.includes("::")){const e=A.split("::");if(e.length>2)return null;const r=e[0]?e[0].split(":"):[],s=e[1]?e[1].split(":"):[],n=8-r.length-s.length;if(n<0)return null;const i=Array(n).fill("0000");return[...r,...i,...s].map(a=>a.padStart(4,"0")).join(":")}else{const e=A.split(":");return e.length!==8?null:e.map(r=>r.padStart(4,"0")).join(":")}}catch{return null}}isPrivateIPv6Prefix(A){return!!(/^fc[0-9a-f]{0,2}:?/i.test(A)||/^fd[0-9a-f]{0,2}:?/i.test(A)||/^fe[89ab][0-9a-f]:?/i.test(A)||/^ff[0-9a-f]{0,2}:?/i.test(A))}validateCspNonce(A){return!A||typeof A!="string"?{valid:!1,error:"CSP nonce must be a non-empty string"}:A.length<16?{valid:!1,error:"CSP nonce is too short (minimum 16 characters recommended)"}:/^[A-Za-z0-9+/=_-]+$/.test(A)?{valid:!0,sanitized:A}:{valid:!1,error:"CSP nonce contains invalid characters"}}validateImageTimeout(A){return typeof A!="number"||isNaN(A)?{valid:!1,error:"Image timeout must be a number"}:A<0?{valid:!1,error:"Image timeout cannot be negative"}:this.config.maxImageTimeout&&A>this.config.maxImageTimeout?{valid:!1,error:`Image timeout ${A}ms exceeds maximum allowed ${this.config.maxImageTimeout}ms`}:{valid:!0,sanitized:A}}validateDimensions(A,e){if(typeof A!="number"||typeof e!="number")return{valid:!1,error:"Dimensions must be numbers"};if(isNaN(A)||isNaN(e))return{valid:!1,error:"Dimensions cannot be NaN"};if(A<=0||e<=0)return{valid:!1,error:"Dimensions must be positive"};const r=32767;return A>r||e>r?{valid:!1,error:`Dimensions exceed maximum allowed (${r}px)`}:{valid:!0,sanitized:{width:A,height:e}}}validateScale(A){return typeof A!="number"||isNaN(A)?{valid:!1,error:"Scale must be a number"}:A<=0?{valid:!1,error:"Scale must be positive"}:A>10?{valid:!1,error:"Scale factor too large (maximum 10x)"}:{valid:!0,sanitized:A}}validateElement(A){return A?typeof A!="object"?{valid:!1,error:"Element must be an object"}:typeof HTMLElement<"u"&&A instanceof HTMLElement?A.ownerDocument?{valid:!0}:{valid:!1,error:"Element must be attached to a document"}:A.ownerDocument?A.ownerDocument.defaultView?{valid:!0}:{valid:!1,error:"Document must be attached to a window (ownerDocument.defaultView required)"}:{valid:!1,error:"Element must be attached to a document (ownerDocument required)"}:{valid:!1,error:"Element is required"}}validateOptions(A){const e=[],r=A.proxy;if(r!=null&&typeof r=="string"&&r.length>0){const s=this.validateUrl(r,"proxy");s.valid||e.push(`Proxy: ${s.error}`)}if(A.imageTimeout!==void 0){const s=this.validateImageTimeout(A.imageTimeout);s.valid||e.push(`Image timeout: ${s.error}`)}if(A.width!==void 0||A.height!==void 0){const s=A.width??800,n=A.height??600,i=this.validateDimensions(s,n);i.valid||e.push(`Dimensions: ${i.error}`)}if(A.scale!==void 0){const s=this.validateScale(A.scale);s.valid||e.push(`Scale: ${s.error}`)}if(A.cspNonce!==void 0){const s=this.validateCspNonce(A.cspNonce);s.valid||e.push(`CSP nonce: ${s.error}`)}if(this.config.customValidator){const s=this.config.customValidator(A,"options");s.valid||e.push(`Custom validation: ${s.error}`)}return e.length>0?{valid:!1,error:e.join("; ")}:{valid:!0}}}function ep(t={}){return new Ap({allowDataUrls:!0,maxImageTimeout:3e5,...t})}class tp{constructor(A,e=!0){this.context=A,this.activeMetrics=new Map,this.completedMetrics=[],this.enabled=e,this.getTime=typeof performance<"u"&&typeof performance.now=="function"?()=>performance.now():()=>Date.now()}start(A,e){this.enabled&&(this.activeMetrics.has(A)&&this.context?.logger.warn(`Performance metric '${A}' already started. Overwriting.`),this.activeMetrics.set(A,{name:A,startTime:this.getTime(),metadata:e}))}end(A){if(!this.enabled)return;const e=this.activeMetrics.get(A);if(!e){this.context?.logger.warn(`Performance metric '${A}' not found. Was start() called?`);return}return e.endTime=this.getTime(),e.duration=e.endTime-e.startTime,this.completedMetrics.push(e),this.activeMetrics.delete(A),this.context?.logger.debug(`⏱️  ${A}: ${e.duration.toFixed(2)}ms`,e.metadata),e}measure(A,e,r){this.start(A,r);try{const s=e();return this.end(A),s}catch(s){throw this.end(A),s}}async measureAsync(A,e,r){this.start(A,r);try{const s=await e();return this.end(A),s}catch(s){throw this.end(A),s}}getMetrics(){return[...this.completedMetrics]}getMetric(A){return this.completedMetrics.find(e=>e.name===A)}getSummary(){const A=this.completedMetrics.reduce((r,s)=>r+(s.duration||0),0),e=this.completedMetrics.map(r=>({name:r.name,duration:r.duration||0,percentage:A>0?((r.duration||0)/A*100).toFixed(1)+"%":"0%"}));return{totalDuration:A,metrics:this.getMetrics(),breakdown:e}}logSummary(){if(!this.enabled||this.completedMetrics.length===0||!this.context)return;const A=this.getSummary();this.context.logger.info(`
📊 Performance Summary (Total: ${A.totalDuration.toFixed(2)}ms):`),A.breakdown.sort((e,r)=>r.duration-e.duration).forEach(e=>{this.context.logger.info(`  ${e.name.padEnd(20)} ${e.duration.toFixed(2).padStart(8)}ms  ${e.percentage.padStart(6)}`)})}clear(){this.activeMetrics.clear(),this.completedMetrics.splice(0)}isEnabled(){return this.enabled}getActiveMetrics(){return Array.from(this.activeMetrics.keys())}}const yn=(t,A={},e)=>{const r=e||kt.fromElement(t,{cspNonce:A.cspNonce,cache:A.cache});return np(t,A,r)},rp=t=>{console.warn('[html2canvas-pro] setCspNonce is deprecated. Pass cspNonce in options instead: html2canvas(element, { cspNonce: "..." })'),typeof window<"u"&&jf(new kt({window,cspNonce:t}))};yn.setCspNonce=rp;const sp=t=>{["scale","width","height","imageTimeout","x","y","windowWidth","windowHeight","scrollX","scrollY"].forEach(e=>{const r=t[e];if(r!=null&&typeof r!="number"){const s=Number(r);Number.isNaN(s)||(t[e]=s)}})},np=async(t,A,e)=>{if(sp(A),!A.skipValidation){const Ae=A.validator||ep(),Le=Ae.validateElement(t);if(!Le.valid)throw new Error(Le.error);const us=Ae.validateOptions(A);if(!us.valid)throw new Error(`Invalid options: ${us.error}`)}if(!t||typeof t!="object")throw new Error("Invalid element provided as first argument");const r=t.ownerDocument;if(!r)throw new Error("Element is not attached to a Document");const s=r.defaultView;if(!s)throw new Error("Document is not attached to a Window");const n={allowTaint:A.allowTaint??!1,imageTimeout:A.imageTimeout??15e3,proxy:A.proxy,useCORS:A.useCORS??!1,customIsSameOrigin:A.customIsSameOrigin},i={logging:A.logging??!0,cache:A.cache??e.cache,...n},o=800,a=600,c=0,l=s,h={windowWidth:A.windowWidth??l.innerWidth??o,windowHeight:A.windowHeight??l.innerHeight??a,scrollX:A.scrollX??l.pageXOffset??c,scrollY:A.scrollY??l.pageYOffset??c},g=new uA(h.scrollX,h.scrollY,h.windowWidth,h.windowHeight),u=new Yr(i,g,e),d=A.enablePerformanceMonitoring??A.logging??!1,f=new tp(u,d);f.start("total",{width:h.windowWidth,height:h.windowHeight});const U=A.foreignObjectRendering??!1,y={allowTaint:A.allowTaint??!1,onclone:A.onclone,ignoreElements:A.ignoreElements,iframeContainer:A.iframeContainer,inlineImages:U,copyStyles:U,cspNonce:A.cspNonce??e.cspNonce};u.logger.debug(`Starting document clone with size ${g.width}x${g.height} scrolled to ${-g.left},${-g.top}`),f.start("clone");const Q=new ma(u,t,y),x=Q.clonedReferenceElement;if(!x)throw new Error("Unable to find element in cloned iframe");const E=await Q.toIFrame(r,g);f.end("clone");const{width:b,height:D,left:J,top:BA}=un(x)||zd(x)?uc(x.ownerDocument):er(u,x),z=ip(u,x,A.backgroundColor),ue={canvas:A.canvas,backgroundColor:z,scale:A.scale??s.devicePixelRatio??1,x:(A.x??0)+J,y:(A.y??0)+BA,width:A.width??Math.ceil(b),height:A.height??Math.ceil(D),imageSmoothing:A.imageSmoothing,imageSmoothingQuality:A.imageSmoothingQuality};let nA,DA;try{return U?(u.logger.debug("Document cloned, using foreign object rendering"),f.start("render-foreignobject"),nA=await new Pf(u,ue).render(x),f.end("render-foreignobject")):(u.logger.debug(`Document cloned, element located at ${J},${BA} with size ${b}x${D} using computed rendering`),u.logger.debug("Starting DOM parsing"),f.start("parse"),DA=la(u,x),f.end("parse"),z===DA.styles.backgroundColor&&(DA.styles.backgroundColor=$A.TRANSPARENT),u.logger.debug(`Starting renderer for element at ${ue.x},${ue.y} with size ${ue.width}x${ue.height}`),f.start("render"),nA=await new xn(u,ue).render(DA),f.end("render")),f.start("cleanup"),(A.removeContainer??!0)&&(ma.destroy(E)||u.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),f.end("cleanup"),f.end("total"),u.logger.debug("Finished rendering"),d&&f.logSummary(),nA}finally{DA&&DA.restoreTree()}},ip=(t,A,e)=>{const r=A.ownerDocument,s=r.documentElement?Ve(t,getComputedStyle(r.documentElement).backgroundColor):$A.TRANSPARENT,n=r.body?Ve(t,getComputedStyle(r.body).backgroundColor):$A.TRANSPARENT,i=typeof e=="string"?Ve(t,e):e===null?$A.TRANSPARENT:4294967295;return A===r.documentElement?ie(s)?ie(n)?i:n:s:i};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zr=globalThis,In=Zr.ShadowRoot&&(Zr.ShadyCSS===void 0||Zr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hn=Symbol(),Da=new WeakMap;let Ka=class{constructor(A,e,r){if(this._$cssResult$=!0,r!==Hn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=A,this.t=e}get styleSheet(){let A=this.o;const e=this.t;if(In&&A===void 0){const r=e!==void 0&&e.length===1;r&&(A=Da.get(e)),A===void 0&&((this.o=A=new CSSStyleSheet).replaceSync(this.cssText),r&&Da.set(e,A))}return A}toString(){return this.cssText}};const op=t=>new Ka(typeof t=="string"?t:t+"",void 0,Hn),ap=(t,...A)=>{const e=t.length===1?t[0]:A.reduce((r,s,n)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new Ka(e,t,Hn)},lp=(t,A)=>{if(In)t.adoptedStyleSheets=A.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of A){const r=document.createElement("style"),s=Zr.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,t.appendChild(r)}},Ma=In?t=>t:t=>t instanceof CSSStyleSheet?(A=>{let e="";for(const r of A.cssRules)e+=r.cssText;return op(e)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:cp,defineProperty:hp,getOwnPropertyDescriptor:Bp,getOwnPropertyNames:gp,getOwnPropertySymbols:up,getPrototypeOf:dp}=Object,he=globalThis,Ra=he.trustedTypes,fp=Ra?Ra.emptyScript:"",pp=he.reactiveElementPolyfillSupport,Dt=(t,A)=>t,qr={toAttribute(t,A){switch(A){case Boolean:t=t?fp:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,A){let e=t;switch(A){case Boolean:e=t!==null;break;case Number:e=t===null?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch{e=null}}return e}},Tn=(t,A)=>!cp(t,A),Oa={attribute:!0,type:String,converter:qr,reflect:!1,useDefault:!1,hasChanged:Tn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),he.litPropertyMetadata??(he.litPropertyMetadata=new WeakMap);let je=class extends HTMLElement{static addInitializer(A){this._$Ei(),(this.l??(this.l=[])).push(A)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(A,e=Oa){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(A)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(A,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(A,r,e);s!==void 0&&hp(this.prototype,A,s)}}static getPropertyDescriptor(A,e,r){const{get:s,set:n}=Bp(this.prototype,A)??{get(){return this[e]},set(i){this[e]=i}};return{get:s,set(i){const o=s?.call(this);n?.call(this,i),this.requestUpdate(A,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(A){return this.elementProperties.get(A)??Oa}static _$Ei(){if(this.hasOwnProperty(Dt("elementProperties")))return;const A=dp(this);A.finalize(),A.l!==void 0&&(this.l=[...A.l]),this.elementProperties=new Map(A.elementProperties)}static finalize(){if(this.hasOwnProperty(Dt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Dt("properties"))){const e=this.properties,r=[...gp(e),...up(e)];for(const s of r)this.createProperty(s,e[s])}const A=this[Symbol.metadata];if(A!==null){const e=litPropertyMetadata.get(A);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(A){const e=[];if(Array.isArray(A)){const r=new Set(A.flat(1/0).reverse());for(const s of r)e.unshift(Ma(s))}else A!==void 0&&e.push(Ma(A));return e}static _$Eu(A,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof A=="string"?A.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(A=>this.enableUpdating=A),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(A=>A(this))}addController(A){(this._$EO??(this._$EO=new Set)).add(A),this.renderRoot!==void 0&&this.isConnected&&A.hostConnected?.()}removeController(A){this._$EO?.delete(A)}_$E_(){const A=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(A.set(r,this[r]),delete this[r]);A.size>0&&(this._$Ep=A)}createRenderRoot(){const A=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lp(A,this.constructor.elementStyles),A}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(A=>A.hostConnected?.())}enableUpdating(A){}disconnectedCallback(){this._$EO?.forEach(A=>A.hostDisconnected?.())}attributeChangedCallback(A,e,r){this._$AK(A,r)}_$ET(A,e){const r=this.constructor.elementProperties.get(A),s=this.constructor._$Eu(A,r);if(s!==void 0&&r.reflect===!0){const n=(r.converter?.toAttribute!==void 0?r.converter:qr).toAttribute(e,r.type);this._$Em=A,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(A,e){const r=this.constructor,s=r._$Eh.get(A);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),i=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:qr;this._$Em=s;const o=i.fromAttribute(e,n.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(A,e,r,s=!1,n){if(A!==void 0){const i=this.constructor;if(s===!1&&(n=this[A]),r??(r=i.getPropertyOptions(A)),!((r.hasChanged??Tn)(n,e)||r.useDefault&&r.reflect&&n===this._$Ej?.get(A)&&!this.hasAttribute(i._$Eu(A,r))))return;this.C(A,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(A,e,{useDefault:r,reflect:s,wrapped:n},i){r&&!(this._$Ej??(this._$Ej=new Map)).has(A)&&(this._$Ej.set(A,i??e??this[A]),n!==!0||i!==void 0)||(this._$AL.has(A)||(this.hasUpdated||r||(e=void 0),this._$AL.set(A,e)),s===!0&&this._$Em!==A&&(this._$Eq??(this._$Eq=new Set)).add(A))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const A=this.scheduleUpdate();return A!=null&&await A,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,n]of r){const{wrapped:i}=n,o=this[s];i!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,n,o)}}let A=!1;const e=this._$AL;try{A=this.shouldUpdate(e),A?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw A=!1,this._$EM(),r}A&&this._$AE(e)}willUpdate(A){}_$AE(A){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(A)),this.updated(A)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(A){return!0}update(A){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(A){}firstUpdated(A){}};je.elementStyles=[],je.shadowRootOptions={mode:"open"},je[Dt("elementProperties")]=new Map,je[Dt("finalized")]=new Map,pp?.({ReactiveElement:je}),(he.reactiveElementVersions??(he.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=globalThis,_a=t=>t,jr=Kt.trustedTypes,Na=jr?jr.createPolicy("lit-html",{createHTML:t=>t}):void 0,$a="$lit$",Be=`lit$${Math.random().toFixed(9).slice(2)}$`,Pa="?"+Be,wp=`<${Pa}>`,Ee=document,Mt=()=>Ee.createComment(""),Rt=t=>t===null||typeof t!="object"&&typeof t!="function",Sn=Array.isArray,Qp=t=>Sn(t)||typeof t?.[Symbol.iterator]=="function",Ln=`[ 	
\f\r]`,Ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ga=/-->/g,Va=/>/g,ye=RegExp(`>|${Ln}(?:([^\\s"'>=/]+)(${Ln}*=${Ln}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xa=/'/g,za=/"/g,Wa=/^(?:script|style|textarea|title)$/i,Ja=t=>(A,...e)=>({_$litType$:t,strings:A,values:e}),m=Ja(1),M=Ja(2),Ie=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),Ya=new WeakMap,He=Ee.createTreeWalker(Ee,129);function Za(t,A){if(!Sn(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Na!==void 0?Na.createHTML(A):A}const Cp=(t,A)=>{const e=t.length-1,r=[];let s,n=A===2?"<svg>":A===3?"<math>":"",i=Ot;for(let o=0;o<e;o++){const a=t[o];let c,l,h=-1,g=0;for(;g<a.length&&(i.lastIndex=g,l=i.exec(a),l!==null);)g=i.lastIndex,i===Ot?l[1]==="!--"?i=Ga:l[1]!==void 0?i=Va:l[2]!==void 0?(Wa.test(l[2])&&(s=RegExp("</"+l[2],"g")),i=ye):l[3]!==void 0&&(i=ye):i===ye?l[0]===">"?(i=s??Ot,h=-1):l[1]===void 0?h=-2:(h=i.lastIndex-l[2].length,c=l[1],i=l[3]===void 0?ye:l[3]==='"'?za:Xa):i===za||i===Xa?i=ye:i===Ga||i===Va?i=Ot:(i=ye,s=void 0);const u=i===ye&&t[o+1].startsWith("/>")?" ":"";n+=i===Ot?a+wp:h>=0?(r.push(c),a.slice(0,h)+$a+a.slice(h)+Be+u):a+Be+(h===-2?o:u)}return[Za(t,n+(t[e]||"<?>")+(A===2?"</svg>":A===3?"</math>":"")),r]};class _t{constructor({strings:A,_$litType$:e},r){let s;this.parts=[];let n=0,i=0;const o=A.length-1,a=this.parts,[c,l]=Cp(A,e);if(this.el=_t.createElement(c,r),He.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=He.nextNode())!==null&&a.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith($a)){const g=l[i++],u=s.getAttribute(h).split(Be),d=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:d[2],strings:u,ctor:d[1]==="."?Up:d[1]==="?"?Fp:d[1]==="@"?xp:As}),s.removeAttribute(h)}else h.startsWith(Be)&&(a.push({type:6,index:n}),s.removeAttribute(h));if(Wa.test(s.tagName)){const h=s.textContent.split(Be),g=h.length-1;if(g>0){s.textContent=jr?jr.emptyScript:"";for(let u=0;u<g;u++)s.append(h[u],Mt()),He.nextNode(),a.push({type:2,index:++n});s.append(h[g],Mt())}}}else if(s.nodeType===8)if(s.data===Pa)a.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(Be,h+1))!==-1;)a.push({type:7,index:n}),h+=Be.length-1}n++}}static createElement(A,e){const r=Ee.createElement("template");return r.innerHTML=A,r}}function At(t,A,e=t,r){if(A===Ie)return A;let s=r!==void 0?e._$Co?.[r]:e._$Cl;const n=Rt(A)?void 0:A._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(A=At(t,s._$AS(t,A.values),s,r)),A}class mp{constructor(A,e){this._$AV=[],this._$AN=void 0,this._$AD=A,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(A){const{el:{content:e},parts:r}=this._$AD,s=(A?.creationScope??Ee).importNode(e,!0);He.currentNode=s;let n=He.nextNode(),i=0,o=0,a=r[0];for(;a!==void 0;){if(i===a.index){let c;a.type===2?c=new Nt(n,n.nextSibling,this,A):a.type===1?c=new a.ctor(n,a.name,a.strings,this,A):a.type===6&&(c=new bp(n,this,A)),this._$AV.push(c),a=r[++o]}i!==a?.index&&(n=He.nextNode(),i++)}return He.currentNode=Ee,s}p(A){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(A,r,e),e+=r.strings.length-2):r._$AI(A[e])),e++}}class Nt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(A,e,r,s){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=A,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let A=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&A?.nodeType===11&&(A=e.parentNode),A}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(A,e=this){A=At(this,A,e),Rt(A)?A===N||A==null||A===""?(this._$AH!==N&&this._$AR(),this._$AH=N):A!==this._$AH&&A!==Ie&&this._(A):A._$litType$!==void 0?this.$(A):A.nodeType!==void 0?this.T(A):Qp(A)?this.k(A):this._(A)}O(A){return this._$AA.parentNode.insertBefore(A,this._$AB)}T(A){this._$AH!==A&&(this._$AR(),this._$AH=this.O(A))}_(A){this._$AH!==N&&Rt(this._$AH)?this._$AA.nextSibling.data=A:this.T(Ee.createTextNode(A)),this._$AH=A}$(A){const{values:e,_$litType$:r}=A,s=typeof r=="number"?this._$AC(A):(r.el===void 0&&(r.el=_t.createElement(Za(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(e);else{const n=new mp(s,this),i=n.u(this.options);n.p(e),this.T(i),this._$AH=n}}_$AC(A){let e=Ya.get(A.strings);return e===void 0&&Ya.set(A.strings,e=new _t(A)),e}k(A){Sn(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const n of A)s===e.length?e.push(r=new Nt(this.O(Mt()),this.O(Mt()),this,this.options)):r=e[s],r._$AI(n),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(A=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);A!==this._$AB;){const r=_a(A).nextSibling;_a(A).remove(),A=r}}setConnected(A){this._$AM===void 0&&(this._$Cv=A,this._$AP?.(A))}}class As{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(A,e,r,s,n){this.type=1,this._$AH=N,this._$AN=void 0,this.element=A,this.name=e,this._$AM=s,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=N}_$AI(A,e=this,r,s){const n=this.strings;let i=!1;if(n===void 0)A=At(this,A,e,0),i=!Rt(A)||A!==this._$AH&&A!==Ie,i&&(this._$AH=A);else{const o=A;let a,c;for(A=n[0],a=0;a<n.length-1;a++)c=At(this,o[r+a],e,a),c===Ie&&(c=this._$AH[a]),i||(i=!Rt(c)||c!==this._$AH[a]),c===N?A=N:A!==N&&(A+=(c??"")+n[a+1]),this._$AH[a]=c}i&&!s&&this.j(A)}j(A){A===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,A??"")}}class Up extends As{constructor(){super(...arguments),this.type=3}j(A){this.element[this.name]=A===N?void 0:A}}class Fp extends As{constructor(){super(...arguments),this.type=4}j(A){this.element.toggleAttribute(this.name,!!A&&A!==N)}}class xp extends As{constructor(A,e,r,s,n){super(A,e,r,s,n),this.type=5}_$AI(A,e=this){if((A=At(this,A,e,0)??N)===Ie)return;const r=this._$AH,s=A===N&&r!==N||A.capture!==r.capture||A.once!==r.once||A.passive!==r.passive,n=A!==N&&(r===N||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,A),this._$AH=A}handleEvent(A){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,A):this._$AH.handleEvent(A)}}class bp{constructor(A,e,r){this.element=A,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(A){At(this,A)}}const Ep=Kt.litHtmlPolyfillSupport;Ep?.(_t,Nt),(Kt.litHtmlVersions??(Kt.litHtmlVersions=[])).push("3.3.2");const yp=(t,A,e)=>{const r=e?.renderBefore??A;let s=r._$litPart$;if(s===void 0){const n=e?.renderBefore??null;r._$litPart$=s=new Nt(A.insertBefore(Mt(),n),n,void 0,e??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=globalThis;let Pt=class extends je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const A=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=A.firstChild),A}update(A){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(A),this._$Do=yp(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ie}};Pt._$litElement$=!0,Pt.finalized=!0,$t.litElementHydrateSupport?.({LitElement:Pt});const Ip=$t.litElementPolyfillSupport;Ip?.({LitElement:Pt}),($t.litElementVersions??($t.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hp=t=>(A,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(t,A)}):customElements.define(t,A)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tp={attribute:!0,type:String,converter:qr,reflect:!1,hasChanged:Tn},Sp=(t=Tp,A,e)=>{const{kind:r,metadata:s}=e;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(e.name,t),r==="accessor"){const{name:i}=e;return{set(o){const a=A.get.call(this);A.set.call(this,o),this.requestUpdate(i,a,t,!0,o)},init(o){return o!==void 0&&this.C(i,void 0,t,o),o}}}if(r==="setter"){const{name:i}=e;return function(o){const a=this[i];A.call(this,o),this.requestUpdate(i,a,t,!0,o)}}throw Error("Unsupported decorator location: "+r)};function ge(t){return(A,e)=>typeof e=="object"?Sp(t,A,e):((r,s,n)=>{const i=s.hasOwnProperty(n);return s.constructor.createProperty(n,r),i?Object.getOwnPropertyDescriptor(s,n):void 0})(t,A,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(t){return ge({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lp=(t,A,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof A!="object"&&Object.defineProperty(t,A,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vp(t,A){return(e,r,s)=>{const n=i=>i.renderRoot?.querySelector(t)??null;return Lp(e,r,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kp={CHILD:2},Dp=t=>(...A)=>({_$litDirective$:t,values:A});class Kp{constructor(A){}get _$AU(){return this._$AM._$AU}_$AT(A,e,r){this._$Ct=A,this._$AM=e,this._$Ci=r}_$AS(A,e){return this.update(A,e)}update(A,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vn extends Kp{constructor(A){if(super(A),this.it=N,A.type!==kp.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(A){if(A===N||A==null)return this._t=void 0,this.it=A;if(A===Ie)return A;if(typeof A!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(A===this.it)return this._t;this.it=A;const e=[A];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}vn.directiveName="unsafeHTML",vn.resultType=1;const qa=Dp(vn);function kn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Te=kn();function ja(t){Te=t}var Gt={exec:()=>null};function O(t,A=""){let e=typeof t=="string"?t:t.source;const r={replace:(s,n)=>{let i=typeof n=="string"?n:n.source;return i=i.replace(QA.caret,"$1"),e=e.replace(s,i),r},getRegex:()=>new RegExp(e,A)};return r}var QA={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},Mp=/^(?:[ \t]*(?:\n|$))+/,Rp=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Op=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Vt=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,_p=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Dn=/(?:[*+-]|\d{1,9}[.)])/,Al=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,el=O(Al).replace(/bull/g,Dn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Np=O(Al).replace(/bull/g,Dn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Kn=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,$p=/^[^\n]+/,Mn=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Pp=O(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Mn).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Gp=O(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Dn).getRegex(),es="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Rn=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Vp=O("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Rn).replace("tag",es).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),tl=O(Kn).replace("hr",Vt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",es).getRegex(),Xp=O(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",tl).getRegex(),On={blockquote:Xp,code:Rp,def:Pp,fences:Op,heading:_p,hr:Vt,html:Vp,lheading:el,list:Gp,newline:Mp,paragraph:tl,table:Gt,text:$p},rl=O("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Vt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",es).getRegex(),zp={...On,lheading:Np,table:rl,paragraph:O(Kn).replace("hr",Vt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",rl).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",es).getRegex()},Wp={...On,html:O(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Rn).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Gt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:O(Kn).replace("hr",Vt).replace("heading",` *#{1,6} *[^
]`).replace("lheading",el).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Jp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Yp=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,sl=/^( {2,}|\\)\n(?!\s*$)/,Zp=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ts=/[\p{P}\p{S}]/u,_n=/[\s\p{P}\p{S}]/u,nl=/[^\s\p{P}\p{S}]/u,qp=O(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,_n).getRegex(),il=/(?!~)[\p{P}\p{S}]/u,jp=/(?!~)[\s\p{P}\p{S}]/u,Aw=/(?:[^\s\p{P}\p{S}]|~)/u,ew=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ol=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,tw=O(ol,"u").replace(/punct/g,ts).getRegex(),rw=O(ol,"u").replace(/punct/g,il).getRegex(),al="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",sw=O(al,"gu").replace(/notPunctSpace/g,nl).replace(/punctSpace/g,_n).replace(/punct/g,ts).getRegex(),nw=O(al,"gu").replace(/notPunctSpace/g,Aw).replace(/punctSpace/g,jp).replace(/punct/g,il).getRegex(),iw=O("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,nl).replace(/punctSpace/g,_n).replace(/punct/g,ts).getRegex(),ow=O(/\\(punct)/,"gu").replace(/punct/g,ts).getRegex(),aw=O(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),lw=O(Rn).replace("(?:-->|$)","-->").getRegex(),cw=O("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",lw).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),rs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,hw=O(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",rs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ll=O(/^!?\[(label)\]\[(ref)\]/).replace("label",rs).replace("ref",Mn).getRegex(),cl=O(/^!?\[(ref)\](?:\[\])?/).replace("ref",Mn).getRegex(),Bw=O("reflink|nolink(?!\\()","g").replace("reflink",ll).replace("nolink",cl).getRegex(),Nn={_backpedal:Gt,anyPunctuation:ow,autolink:aw,blockSkip:ew,br:sl,code:Yp,del:Gt,emStrongLDelim:tw,emStrongRDelimAst:sw,emStrongRDelimUnd:iw,escape:Jp,link:hw,nolink:cl,punctuation:qp,reflink:ll,reflinkSearch:Bw,tag:cw,text:Zp,url:Gt},gw={...Nn,link:O(/^!?\[(label)\]\((.*?)\)/).replace("label",rs).getRegex(),reflink:O(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",rs).getRegex()},$n={...Nn,emStrongRDelimAst:nw,emStrongLDelim:rw,url:O(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},uw={...$n,br:O(sl).replace("{2,}","*").getRegex(),text:O($n.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ss={normal:On,gfm:zp,pedantic:Wp},Xt={normal:Nn,gfm:$n,breaks:uw,pedantic:gw},dw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},hl=t=>dw[t];function GA(t,A){if(A){if(QA.escapeTest.test(t))return t.replace(QA.escapeReplace,hl)}else if(QA.escapeTestNoEncode.test(t))return t.replace(QA.escapeReplaceNoEncode,hl);return t}function Bl(t){try{t=encodeURI(t).replace(QA.percentDecode,"%")}catch{return null}return t}function gl(t,A){const e=t.replace(QA.findPipe,(n,i,o)=>{let a=!1,c=i;for(;--c>=0&&o[c]==="\\";)a=!a;return a?"|":" |"}),r=e.split(QA.splitPipe);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),A)if(r.length>A)r.splice(A);else for(;r.length<A;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(QA.slashPipe,"|");return r}function zt(t,A,e){const r=t.length;if(r===0)return"";let s=0;for(;s<r&&t.charAt(r-s-1)===A;)s++;return t.slice(0,r-s)}function fw(t,A){if(t.indexOf(A[1])===-1)return-1;let e=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===A[0])e++;else if(t[r]===A[1]&&(e--,e<0))return r;return e>0?-2:-1}function ul(t,A,e,r,s){const n=A.href,i=A.title||null,o=t[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;const a={type:t[0].charAt(0)==="!"?"image":"link",raw:e,href:n,title:i,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,a}function pw(t,A,e){const r=t.match(e.other.indentCodeCompensation);if(r===null)return A;const s=r[1];return A.split(`
`).map(n=>{const i=n.match(e.other.beginningSpace);if(i===null)return n;const[o]=i;return o.length>=s.length?n.slice(s.length):n}).join(`
`)}var ns=class{constructor(t){P(this,"options");P(this,"rules");P(this,"lexer");this.options=t||Te}space(t){const A=this.rules.block.newline.exec(t);if(A&&A[0].length>0)return{type:"space",raw:A[0]}}code(t){const A=this.rules.block.code.exec(t);if(A){const e=A[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:A[0],codeBlockStyle:"indented",text:this.options.pedantic?e:zt(e,`
`)}}}fences(t){const A=this.rules.block.fences.exec(t);if(A){const e=A[0],r=pw(e,A[3]||"",this.rules);return{type:"code",raw:e,lang:A[2]?A[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):A[2],text:r}}}heading(t){const A=this.rules.block.heading.exec(t);if(A){let e=A[2].trim();if(this.rules.other.endingHash.test(e)){const r=zt(e,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(e=r.trim())}return{type:"heading",raw:A[0],depth:A[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(t){const A=this.rules.block.hr.exec(t);if(A)return{type:"hr",raw:zt(A[0],`
`)}}blockquote(t){const A=this.rules.block.blockquote.exec(t);if(A){let e=zt(A[0],`
`).split(`
`),r="",s="";const n=[];for(;e.length>0;){let i=!1;const o=[];let a;for(a=0;a<e.length;a++)if(this.rules.other.blockquoteStart.test(e[a]))o.push(e[a]),i=!0;else if(!i)o.push(e[a]);else break;e=e.slice(a);const c=o.join(`
`),l=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${c}`:c,s=s?`${s}
${l}`:l;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(l,n,!0),this.lexer.state.top=h,e.length===0)break;const g=n.at(-1);if(g?.type==="code")break;if(g?.type==="blockquote"){const u=g,d=u.raw+`
`+e.join(`
`),f=this.blockquote(d);n[n.length-1]=f,r=r.substring(0,r.length-u.raw.length)+f.raw,s=s.substring(0,s.length-u.text.length)+f.text;break}else if(g?.type==="list"){const u=g,d=u.raw+`
`+e.join(`
`),f=this.list(d);n[n.length-1]=f,r=r.substring(0,r.length-g.raw.length)+f.raw,s=s.substring(0,s.length-u.raw.length)+f.raw,e=d.substring(n.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:n,text:s}}}list(t){let A=this.rules.block.list.exec(t);if(A){let e=A[1].trim();const r=e.length>1,s={type:"list",raw:"",ordered:r,start:r?+e.slice(0,-1):"",loose:!1,items:[]};e=r?`\\d{1,9}\\${e.slice(-1)}`:`\\${e}`,this.options.pedantic&&(e=r?e:"[*+-]");const n=this.rules.other.listItemRegex(e);let i=!1;for(;t;){let a=!1,c="",l="";if(!(A=n.exec(t))||this.rules.block.hr.test(t))break;c=A[0],t=t.substring(c.length);let h=A[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,y=>" ".repeat(3*y.length)),g=t.split(`
`,1)[0],u=!h.trim(),d=0;if(this.options.pedantic?(d=2,l=h.trimStart()):u?d=A[1].length+1:(d=A[2].search(this.rules.other.nonSpaceChar),d=d>4?1:d,l=h.slice(d),d+=A[1].length),u&&this.rules.other.blankLine.test(g)&&(c+=g+`
`,t=t.substring(g.length+1),a=!0),!a){const y=this.rules.other.nextBulletRegex(d),Q=this.rules.other.hrRegex(d),x=this.rules.other.fencesBeginRegex(d),E=this.rules.other.headingBeginRegex(d),b=this.rules.other.htmlBeginRegex(d);for(;t;){const D=t.split(`
`,1)[0];let J;if(g=D,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),J=g):J=g.replace(this.rules.other.tabCharGlobal,"    "),x.test(g)||E.test(g)||b.test(g)||y.test(g)||Q.test(g))break;if(J.search(this.rules.other.nonSpaceChar)>=d||!g.trim())l+=`
`+J.slice(d);else{if(u||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||x.test(h)||E.test(h)||Q.test(h))break;l+=`
`+g}!u&&!g.trim()&&(u=!0),c+=D+`
`,t=t.substring(D.length+1),h=J.slice(d)}}s.loose||(i?s.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(i=!0));let f=null,U;this.options.gfm&&(f=this.rules.other.listIsTask.exec(l),f&&(U=f[0]!=="[ ] ",l=l.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:c,task:!!f,checked:U,loose:!1,text:l,tokens:[]}),s.raw+=c}const o=s.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let a=0;a<s.items.length;a++)if(this.lexer.state.top=!1,s.items[a].tokens=this.lexer.blockTokens(s.items[a].text,[]),!s.loose){const c=s.items[a].tokens.filter(h=>h.type==="space"),l=c.length>0&&c.some(h=>this.rules.other.anyLine.test(h.raw));s.loose=l}if(s.loose)for(let a=0;a<s.items.length;a++)s.items[a].loose=!0;return s}}html(t){const A=this.rules.block.html.exec(t);if(A)return{type:"html",block:!0,raw:A[0],pre:A[1]==="pre"||A[1]==="script"||A[1]==="style",text:A[0]}}def(t){const A=this.rules.block.def.exec(t);if(A){const e=A[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=A[2]?A[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=A[3]?A[3].substring(1,A[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):A[3];return{type:"def",tag:e,raw:A[0],href:r,title:s}}}table(t){const A=this.rules.block.table.exec(t);if(!A||!this.rules.other.tableDelimiter.test(A[2]))return;const e=gl(A[1]),r=A[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=A[3]?.trim()?A[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],n={type:"table",raw:A[0],header:[],align:[],rows:[]};if(e.length===r.length){for(const i of r)this.rules.other.tableAlignRight.test(i)?n.align.push("right"):this.rules.other.tableAlignCenter.test(i)?n.align.push("center"):this.rules.other.tableAlignLeft.test(i)?n.align.push("left"):n.align.push(null);for(let i=0;i<e.length;i++)n.header.push({text:e[i],tokens:this.lexer.inline(e[i]),header:!0,align:n.align[i]});for(const i of s)n.rows.push(gl(i,n.header.length).map((o,a)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:n.align[a]})));return n}}lheading(t){const A=this.rules.block.lheading.exec(t);if(A)return{type:"heading",raw:A[0],depth:A[2].charAt(0)==="="?1:2,text:A[1],tokens:this.lexer.inline(A[1])}}paragraph(t){const A=this.rules.block.paragraph.exec(t);if(A){const e=A[1].charAt(A[1].length-1)===`
`?A[1].slice(0,-1):A[1];return{type:"paragraph",raw:A[0],text:e,tokens:this.lexer.inline(e)}}}text(t){const A=this.rules.block.text.exec(t);if(A)return{type:"text",raw:A[0],text:A[0],tokens:this.lexer.inline(A[0])}}escape(t){const A=this.rules.inline.escape.exec(t);if(A)return{type:"escape",raw:A[0],text:A[1]}}tag(t){const A=this.rules.inline.tag.exec(t);if(A)return!this.lexer.state.inLink&&this.rules.other.startATag.test(A[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(A[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(A[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(A[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:A[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:A[0]}}link(t){const A=this.rules.inline.link.exec(t);if(A){const e=A[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;const n=zt(e.slice(0,-1),"\\");if((e.length-n.length)%2===0)return}else{const n=fw(A[2],"()");if(n===-2)return;if(n>-1){const o=(A[0].indexOf("!")===0?5:4)+A[1].length+n;A[2]=A[2].substring(0,n),A[0]=A[0].substring(0,o).trim(),A[3]=""}}let r=A[2],s="";if(this.options.pedantic){const n=this.rules.other.pedanticHrefTitle.exec(r);n&&(r=n[1],s=n[3])}else s=A[3]?A[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?r=r.slice(1):r=r.slice(1,-1)),ul(A,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},A[0],this.lexer,this.rules)}}reflink(t,A){let e;if((e=this.rules.inline.reflink.exec(t))||(e=this.rules.inline.nolink.exec(t))){const r=(e[2]||e[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=A[r.toLowerCase()];if(!s){const n=e[0].charAt(0);return{type:"text",raw:n,text:n}}return ul(e,s,e[0],this.lexer,this.rules)}}emStrong(t,A,e=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!r||r[3]&&e.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!e||this.rules.inline.punctuation.exec(e)){const n=[...r[0]].length-1;let i,o,a=n,c=0;const l=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(l.lastIndex=0,A=A.slice(-1*t.length+n);(r=l.exec(A))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(o=[...i].length,r[3]||r[4]){a+=o;continue}else if((r[5]||r[6])&&n%3&&!((n+o)%3)){c+=o;continue}if(a-=o,a>0)continue;o=Math.min(o,o+a+c);const h=[...r[0]][0].length,g=t.slice(0,n+r.index+h+o);if(Math.min(n,o)%2){const d=g.slice(1,-1);return{type:"em",raw:g,text:d,tokens:this.lexer.inlineTokens(d)}}const u=g.slice(2,-2);return{type:"strong",raw:g,text:u,tokens:this.lexer.inlineTokens(u)}}}}codespan(t){const A=this.rules.inline.code.exec(t);if(A){let e=A[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(e),s=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return r&&s&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:A[0],text:e}}}br(t){const A=this.rules.inline.br.exec(t);if(A)return{type:"br",raw:A[0]}}del(t){const A=this.rules.inline.del.exec(t);if(A)return{type:"del",raw:A[0],text:A[2],tokens:this.lexer.inlineTokens(A[2])}}autolink(t){const A=this.rules.inline.autolink.exec(t);if(A){let e,r;return A[2]==="@"?(e=A[1],r="mailto:"+e):(e=A[1],r=e),{type:"link",raw:A[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(t){let A;if(A=this.rules.inline.url.exec(t)){let e,r;if(A[2]==="@")e=A[0],r="mailto:"+e;else{let s;do s=A[0],A[0]=this.rules.inline._backpedal.exec(A[0])?.[0]??"";while(s!==A[0]);e=A[0],A[1]==="www."?r="http://"+A[0]:r=A[0]}return{type:"link",raw:A[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(t){const A=this.rules.inline.text.exec(t);if(A){const e=this.lexer.state.inRawBlock;return{type:"text",raw:A[0],text:A[0],escaped:e}}}},qA=class ii{constructor(A){P(this,"tokens");P(this,"options");P(this,"state");P(this,"tokenizer");P(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=A||Te,this.options.tokenizer=this.options.tokenizer||new ns,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={other:QA,block:ss.normal,inline:Xt.normal};this.options.pedantic?(e.block=ss.pedantic,e.inline=Xt.pedantic):this.options.gfm&&(e.block=ss.gfm,this.options.breaks?e.inline=Xt.breaks:e.inline=Xt.gfm),this.tokenizer.rules=e}static get rules(){return{block:ss,inline:Xt}}static lex(A,e){return new ii(e).lex(A)}static lexInline(A,e){return new ii(e).inlineTokens(A)}lex(A){A=A.replace(QA.carriageReturn,`
`),this.blockTokens(A,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const r=this.inlineQueue[e];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(A,e=[],r=!1){for(this.options.pedantic&&(A=A.replace(QA.tabCharGlobal,"    ").replace(QA.spaceLine,""));A;){let s;if(this.options.extensions?.block?.some(i=>(s=i.call({lexer:this},A,e))?(A=A.substring(s.raw.length),e.push(s),!0):!1))continue;if(s=this.tokenizer.space(A)){A=A.substring(s.raw.length);const i=e.at(-1);s.raw.length===1&&i!==void 0?i.raw+=`
`:e.push(s);continue}if(s=this.tokenizer.code(A)){A=A.substring(s.raw.length);const i=e.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue.at(-1).src=i.text):e.push(s);continue}if(s=this.tokenizer.fences(A)){A=A.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.heading(A)){A=A.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.hr(A)){A=A.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.blockquote(A)){A=A.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.list(A)){A=A.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.html(A)){A=A.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.def(A)){A=A.substring(s.raw.length);const i=e.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=`
`+s.raw,i.text+=`
`+s.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(A)){A=A.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.lheading(A)){A=A.substring(s.raw.length),e.push(s);continue}let n=A;if(this.options.extensions?.startBlock){let i=1/0;const o=A.slice(1);let a;this.options.extensions.startBlock.forEach(c=>{a=c.call({lexer:this},o),typeof a=="number"&&a>=0&&(i=Math.min(i,a))}),i<1/0&&i>=0&&(n=A.substring(0,i+1))}if(this.state.top&&(s=this.tokenizer.paragraph(n))){const i=e.at(-1);r&&i?.type==="paragraph"?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):e.push(s),r=n.length!==A.length,A=A.substring(s.raw.length);continue}if(s=this.tokenizer.text(A)){A=A.substring(s.raw.length);const i=e.at(-1);i?.type==="text"?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):e.push(s);continue}if(A){const i="Infinite loop on byte: "+A.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,e}inline(A,e=[]){return this.inlineQueue.push({src:A,tokens:e}),e}inlineTokens(A,e=[]){let r=A,s=null;if(this.tokens.links){const o=Object.keys(this.tokens.links);if(o.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)o.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let n=!1,i="";for(;A;){n||(i=""),n=!1;let o;if(this.options.extensions?.inline?.some(c=>(o=c.call({lexer:this},A,e))?(A=A.substring(o.raw.length),e.push(o),!0):!1))continue;if(o=this.tokenizer.escape(A)){A=A.substring(o.raw.length),e.push(o);continue}if(o=this.tokenizer.tag(A)){A=A.substring(o.raw.length),e.push(o);continue}if(o=this.tokenizer.link(A)){A=A.substring(o.raw.length),e.push(o);continue}if(o=this.tokenizer.reflink(A,this.tokens.links)){A=A.substring(o.raw.length);const c=e.at(-1);o.type==="text"&&c?.type==="text"?(c.raw+=o.raw,c.text+=o.text):e.push(o);continue}if(o=this.tokenizer.emStrong(A,r,i)){A=A.substring(o.raw.length),e.push(o);continue}if(o=this.tokenizer.codespan(A)){A=A.substring(o.raw.length),e.push(o);continue}if(o=this.tokenizer.br(A)){A=A.substring(o.raw.length),e.push(o);continue}if(o=this.tokenizer.del(A)){A=A.substring(o.raw.length),e.push(o);continue}if(o=this.tokenizer.autolink(A)){A=A.substring(o.raw.length),e.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(A))){A=A.substring(o.raw.length),e.push(o);continue}let a=A;if(this.options.extensions?.startInline){let c=1/0;const l=A.slice(1);let h;this.options.extensions.startInline.forEach(g=>{h=g.call({lexer:this},l),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(a=A.substring(0,c+1))}if(o=this.tokenizer.inlineText(a)){A=A.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(i=o.raw.slice(-1)),n=!0;const c=e.at(-1);c?.type==="text"?(c.raw+=o.raw,c.text+=o.text):e.push(o);continue}if(A){const c="Infinite loop on byte: "+A.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return e}},is=class{constructor(t){P(this,"options");P(this,"parser");this.options=t||Te}space(t){return""}code({text:t,lang:A,escaped:e}){const r=(A||"").match(QA.notSpaceStart)?.[0],s=t.replace(QA.endingNewline,"")+`
`;return r?'<pre><code class="language-'+GA(r)+'">'+(e?s:GA(s,!0))+`</code></pre>
`:"<pre><code>"+(e?s:GA(s,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:A}){return`<h${A}>${this.parser.parseInline(t)}</h${A}>
`}hr(t){return`<hr>
`}list(t){const A=t.ordered,e=t.start;let r="";for(let i=0;i<t.items.length;i++){const o=t.items[i];r+=this.listitem(o)}const s=A?"ol":"ul",n=A&&e!==1?' start="'+e+'"':"";return"<"+s+n+`>
`+r+"</"+s+`>
`}listitem(t){let A="";if(t.task){const e=this.checkbox({checked:!!t.checked});t.loose?t.tokens[0]?.type==="paragraph"?(t.tokens[0].text=e+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=e+" "+GA(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:e+" ",text:e+" ",escaped:!0}):A+=e+" "}return A+=this.parser.parse(t.tokens,!!t.loose),`<li>${A}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let A="",e="";for(let s=0;s<t.header.length;s++)e+=this.tablecell(t.header[s]);A+=this.tablerow({text:e});let r="";for(let s=0;s<t.rows.length;s++){const n=t.rows[s];e="";for(let i=0;i<n.length;i++)e+=this.tablecell(n[i]);r+=this.tablerow({text:e})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+A+`</thead>
`+r+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){const A=this.parser.parseInline(t.tokens),e=t.header?"th":"td";return(t.align?`<${e} align="${t.align}">`:`<${e}>`)+A+`</${e}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${GA(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:A,tokens:e}){const r=this.parser.parseInline(e),s=Bl(t);if(s===null)return r;t=s;let n='<a href="'+t+'"';return A&&(n+=' title="'+GA(A)+'"'),n+=">"+r+"</a>",n}image({href:t,title:A,text:e,tokens:r}){r&&(e=this.parser.parseInline(r,this.parser.textRenderer));const s=Bl(t);if(s===null)return GA(e);t=s;let n=`<img src="${t}" alt="${e}"`;return A&&(n+=` title="${GA(A)}"`),n+=">",n}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:GA(t.text)}},Pn=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},jA=class oi{constructor(A){P(this,"options");P(this,"renderer");P(this,"textRenderer");this.options=A||Te,this.options.renderer=this.options.renderer||new is,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Pn}static parse(A,e){return new oi(e).parse(A)}static parseInline(A,e){return new oi(e).parseInline(A)}parse(A,e=!0){let r="";for(let s=0;s<A.length;s++){const n=A[s];if(this.options.extensions?.renderers?.[n.type]){const o=n,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){r+=a||"";continue}}const i=n;switch(i.type){case"space":{r+=this.renderer.space(i);continue}case"hr":{r+=this.renderer.hr(i);continue}case"heading":{r+=this.renderer.heading(i);continue}case"code":{r+=this.renderer.code(i);continue}case"table":{r+=this.renderer.table(i);continue}case"blockquote":{r+=this.renderer.blockquote(i);continue}case"list":{r+=this.renderer.list(i);continue}case"html":{r+=this.renderer.html(i);continue}case"paragraph":{r+=this.renderer.paragraph(i);continue}case"text":{let o=i,a=this.renderer.text(o);for(;s+1<A.length&&A[s+1].type==="text";)o=A[++s],a+=`
`+this.renderer.text(o);e?r+=this.renderer.paragraph({type:"paragraph",raw:a,text:a,tokens:[{type:"text",raw:a,text:a,escaped:!0}]}):r+=a;continue}default:{const o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}parseInline(A,e=this.renderer){let r="";for(let s=0;s<A.length;s++){const n=A[s];if(this.options.extensions?.renderers?.[n.type]){const o=this.options.extensions.renderers[n.type].call({parser:this},n);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)){r+=o||"";continue}}const i=n;switch(i.type){case"escape":{r+=e.text(i);break}case"html":{r+=e.html(i);break}case"link":{r+=e.link(i);break}case"image":{r+=e.image(i);break}case"strong":{r+=e.strong(i);break}case"em":{r+=e.em(i);break}case"codespan":{r+=e.codespan(i);break}case"br":{r+=e.br(i);break}case"del":{r+=e.del(i);break}case"text":{r+=e.text(i);break}default:{const o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}},os=(Vn=class{constructor(t){P(this,"options");P(this,"block");this.options=t||Te}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?qA.lex:qA.lexInline}provideParser(){return this.block?jA.parse:jA.parseInline}},P(Vn,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Vn),ww=class{constructor(...t){P(this,"defaults",kn());P(this,"options",this.setOptions);P(this,"parse",this.parseMarkdown(!0));P(this,"parseInline",this.parseMarkdown(!1));P(this,"Parser",jA);P(this,"Renderer",is);P(this,"TextRenderer",Pn);P(this,"Lexer",qA);P(this,"Tokenizer",ns);P(this,"Hooks",os);this.use(...t)}walkTokens(t,A){let e=[];for(const r of t)switch(e=e.concat(A.call(this,r)),r.type){case"table":{const s=r;for(const n of s.header)e=e.concat(this.walkTokens(n.tokens,A));for(const n of s.rows)for(const i of n)e=e.concat(this.walkTokens(i.tokens,A));break}case"list":{const s=r;e=e.concat(this.walkTokens(s.items,A));break}default:{const s=r;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(n=>{const i=s[n].flat(1/0);e=e.concat(this.walkTokens(i,A))}):s.tokens&&(e=e.concat(this.walkTokens(s.tokens,A)))}}return e}use(...t){const A=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(e=>{const r={...e};if(r.async=this.defaults.async||r.async||!1,e.extensions&&(e.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const n=A.renderers[s.name];n?A.renderers[s.name]=function(...i){let o=s.renderer.apply(this,i);return o===!1&&(o=n.apply(this,i)),o}:A.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const n=A[s.level];n?n.unshift(s.tokenizer):A[s.level]=[s.tokenizer],s.start&&(s.level==="block"?A.startBlock?A.startBlock.push(s.start):A.startBlock=[s.start]:s.level==="inline"&&(A.startInline?A.startInline.push(s.start):A.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(A.childTokens[s.name]=s.childTokens)}),r.extensions=A),e.renderer){const s=this.defaults.renderer||new is(this.defaults);for(const n in e.renderer){if(!(n in s))throw new Error(`renderer '${n}' does not exist`);if(["options","parser"].includes(n))continue;const i=n,o=e.renderer[i],a=s[i];s[i]=(...c)=>{let l=o.apply(s,c);return l===!1&&(l=a.apply(s,c)),l||""}}r.renderer=s}if(e.tokenizer){const s=this.defaults.tokenizer||new ns(this.defaults);for(const n in e.tokenizer){if(!(n in s))throw new Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;const i=n,o=e.tokenizer[i],a=s[i];s[i]=(...c)=>{let l=o.apply(s,c);return l===!1&&(l=a.apply(s,c)),l}}r.tokenizer=s}if(e.hooks){const s=this.defaults.hooks||new os;for(const n in e.hooks){if(!(n in s))throw new Error(`hook '${n}' does not exist`);if(["options","block"].includes(n))continue;const i=n,o=e.hooks[i],a=s[i];os.passThroughHooks.has(n)?s[i]=c=>{if(this.defaults.async)return Promise.resolve(o.call(s,c)).then(h=>a.call(s,h));const l=o.call(s,c);return a.call(s,l)}:s[i]=(...c)=>{let l=o.apply(s,c);return l===!1&&(l=a.apply(s,c)),l}}r.hooks=s}if(e.walkTokens){const s=this.defaults.walkTokens,n=e.walkTokens;r.walkTokens=function(i){let o=[];return o.push(n.call(this,i)),s&&(o=o.concat(s.call(this,i))),o}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,A){return qA.lex(t,A??this.defaults)}parser(t,A){return jA.parse(t,A??this.defaults)}parseMarkdown(t){return(e,r)=>{const s={...r},n={...this.defaults,...s},i=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&s.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));n.hooks&&(n.hooks.options=n,n.hooks.block=t);const o=n.hooks?n.hooks.provideLexer():t?qA.lex:qA.lexInline,a=n.hooks?n.hooks.provideParser():t?jA.parse:jA.parseInline;if(n.async)return Promise.resolve(n.hooks?n.hooks.preprocess(e):e).then(c=>o(c,n)).then(c=>n.hooks?n.hooks.processAllTokens(c):c).then(c=>n.walkTokens?Promise.all(this.walkTokens(c,n.walkTokens)).then(()=>c):c).then(c=>a(c,n)).then(c=>n.hooks?n.hooks.postprocess(c):c).catch(i);try{n.hooks&&(e=n.hooks.preprocess(e));let c=o(e,n);n.hooks&&(c=n.hooks.processAllTokens(c)),n.walkTokens&&this.walkTokens(c,n.walkTokens);let l=a(c,n);return n.hooks&&(l=n.hooks.postprocess(l)),l}catch(c){return i(c)}}}onError(t,A){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const r="<p>An error occurred:</p><pre>"+GA(e.message+"",!0)+"</pre>";return A?Promise.resolve(r):r}if(A)return Promise.reject(e);throw e}}},Se=new ww;function K(t,A){return Se.parse(t,A)}K.options=K.setOptions=function(t){return Se.setOptions(t),K.defaults=Se.defaults,ja(K.defaults),K},K.getDefaults=kn,K.defaults=Te,K.use=function(...t){return Se.use(...t),K.defaults=Se.defaults,ja(K.defaults),K},K.walkTokens=function(t,A){return Se.walkTokens(t,A)},K.parseInline=Se.parseInline,K.Parser=jA,K.parser=jA.parse,K.Renderer=is,K.TextRenderer=Pn,K.Lexer=qA,K.lexer=qA.lex,K.Tokenizer=ns,K.Hooks=os,K.parse=K,K.options,K.setOptions,K.use,K.walkTokens,K.parseInline,jA.parse,qA.lex;var Qw=Object.defineProperty,Cw=Object.getOwnPropertyDescriptor,v=(t,A,e,r)=>{for(var s=r>1?void 0:r?Cw(A,e):A,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(r?i(A,e,s):i(s))||s);return r&&s&&Qw(A,e,s),s};class as extends Error{constructor(A,e,r,s){super(A),this.status=e,this.code=r,this.source=s}}function mw(t){const A=t instanceof as?t.code??"":"",e=t instanceof as?t.status:void 0;return A.endsWith("RATE_LIMIT")||A.endsWith("LOCKED")||e===429?{kind:"wait",title:"잠깐만요, 질문이 너무 빨라요",desc:A.endsWith("LOCKED")?"잠시 동안 질문을 받을 수 없어요. 몇 분 뒤에 다시 물어봐 주세요.":"잠시 뒤에 다시 물어봐 주세요."}:A==="CHAT.MESSAGE_TOO_LONG"?{kind:"error",title:"질문이 너무 길어요",desc:"조금 줄여서 다시 보내 주세요."}:A.startsWith("PROJECT.")||A==="ORGANIZATION.NO_CREDIT"||e===402?{kind:"stop",title:"지금은 상담을 받을 수 없어요",desc:"잠시 뒤에 다시 와 주세요. 급한 내용은 문의로 남겨 주시면 답해 드려요.",inquiry:!0}:e===403||A.startsWith("ORGANIZATION.")||A.startsWith("GUEST.")?{kind:"stop",title:"지금은 상담을 받을 수 없어요",desc:"이 사이트에서는 지금 챗봇을 쓸 수 없어요."}:e===401?{kind:"error",title:"다시 연결해야 해요",desc:"페이지를 새로고침한 뒤 다시 물어봐 주세요."}:{kind:"error",title:"연결이 잠깐 끊겼어요",desc:"인터넷 연결을 확인하고 다시 시도해 주세요.",retry:!0}}const dl={thinking:"응답 준비",tool_start:"자료 검색 시작",tool_progress:"자료 검색 진행",tool_done:"검색 완료",generating:"답변 작성",streaming:"답변 작성"};function Uw(t){const A=new Map;for(const e of t){if(!e||typeof e!="object")continue;const{filename:r,score:s}=e;if(typeof r!="string"||!r.trim())continue;const n=r.startsWith("FAQ: ")?`자주 묻는 질문: ${r.slice(5)}`:r,i=typeof s=="number"?s:0,o=A.get(n);(o===void 0||o<i)&&A.set(n,i)}return[...A.entries()].sort((e,r)=>r[1]-e[1]).slice(0,3).map(([e])=>e)}function Fw(t){return t<1024?`${t}B`:t<1048576?`${Math.round(t/1024)}KB`:`${(t/1024/1024).toFixed(1)}MB`}const xw={incorrect:"내용이 틀렸어요",harmful:"유해/공격적이에요","off-topic":"주제와 무관해요",privacy:"개인정보가 노출됐어요",other:"기타"},bw={incorrect:"내용이 틀렸어요",harmful:"불쾌하거나 공격적이에요","off-topic":"질문과 상관없어요",privacy:"개인정보가 보여요",other:"기타"},ls={question:"질문",request:"요청",bug:"오류 신고",other:"기타"},Ew=["n","s","e","w","nw","ne","sw","se"],cs=280,hs=360,yw=360,Iw=520,Hw=72,Bs=24;K.setOptions({gfm:!0,breaks:!0}),K.use({tokenizer:{del:()=>{}}});const Tw=/[가-힣ㄱ-ㅎㅏ-ㅣ]/,Sw=/[/?#&=+%~-]/;K.use({tokenizer:{url(t){const A=this.rules.inline.url.exec(t);if(!A||A[2]==="@")return!1;let e=A[0];const r=e.search(Tw);r>0&&!Sw.test(e.charAt(r-1))&&(e=e.slice(0,r));let s;do s=e,e=this.rules.inline._backpedal.exec(e)?.[0]??"";while(s!==e);if(!e)return;const n=A[1]==="www."?`http://${e}`:e;return{type:"link",raw:e,text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}});const Gn=5e4;function Lw(){try{const t=document.body.cloneNode(!0);t.querySelectorAll('script, style, noscript, iframe, nav, footer, header, aside, [aria-hidden="true"], timely-chatbot').forEach(i=>i.remove());const A=t.querySelector("article"),e=t.querySelector("main"),r=A instanceof HTMLElement?A:e instanceof HTMLElement?e:t,n=(r.innerText??r.textContent??"").toString().replace(/ /g," ").split(/\n+/).map(i=>i.replace(/[ \t]+/g," ").trim()).filter(i=>i.length>0).join(`
`);return n.length>Gn?n.slice(0,Gn)+`

…(이하 ${n.length-Gn}자 생략)`:n}catch{return""}}Ui.addHook("afterSanitizeAttributes",t=>{t.nodeName==="A"&&t.getAttribute("href")&&(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer"))});function fl(t){const A=K.parse(t,{async:!1});return Ui.sanitize(A,{ALLOWED_TAGS:["p","br","strong","em","b","i","u","s","del","a","code","pre","blockquote","ul","ol","li","h1","h2","h3","h4","h5","h6","table","thead","tbody","tr","th","td","hr","span","div"],ALLOWED_ATTR:["href","title","target","rel","class"]})}function gs(t){const A=t.trim();let e=0,r=0,s=0;if(A.startsWith("#")){const i=A.slice(1);if(i.length===3)e=parseInt(i[0]+i[0],16),r=parseInt(i[1]+i[1],16),s=parseInt(i[2]+i[2],16);else if(i.length===6)e=parseInt(i.slice(0,2),16),r=parseInt(i.slice(2,4),16),s=parseInt(i.slice(4,6),16);else return null;if([e,r,s].some(o=>Number.isNaN(o)))return null}else{const i=A.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,[^)]*)?\)$/i);if(!i)return null;e=Number(i[1]),r=Number(i[2]),s=Number(i[3])}const n=i=>{const o=i/255;return o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4)};return .2126*n(e)+.7152*n(r)+.0722*n(s)}function vw(t){return t instanceof DOMException?t.name==="QuotaExceededError"||t.name==="NS_ERROR_DOM_QUOTA_REACHED"||t.code===22||t.code===1014:!1}function Wt(t){const A=gs(t);return A===null?"#ffffff":A>.5?"#111111":"#ffffff"}function kw(t,A){const e=gs(t),r=gs(A);if(e===null||r===null)return null;const s=Math.max(e,r),n=Math.min(e,r);return(s+.05)/(n+.05)}let L=class extends Pt{constructor(){super(...arguments),this.apiKey="",this.browserId="",this.apiBaseUrl="",this.previewMode=!1,this.inline=!1,this.open=!1,this.fullscreen=!1,this.messages=[],this.input="",this.streaming=!1,this.theme={},this.maxUserMessageChars=2e3,this.rect=null,this.reportingMessageId=null,this.resetConfirmOpen=!1,this.reportReason="incorrect",this.reportDetail="",this.reportSubmitting=!1,this.reportError="",this.inquiryOpen=!1,this.inquiryCategory="question",this.inquirySubject="",this.inquiryBody="",this.inquiryContact="",this.inquirySubmitting=!1,this.inquiryError="",this.inquirySuccess=!1,this.menuOpen=!1,this.lastFailed=null,this.inflight=null,this.pendingAttachments=[],this.capturing=!1,this.regionCapturing=!1,this.selectionTimer=null,this.widgetInteractionAt=0,this.regionRect=null,this.regionStart=null,this.toggleMenu=()=>{this.menuOpen=!this.menuOpen},this.closeMenu=()=>{this.menuOpen=!1},this.askSuggested=async t=>{this.streaming||this.previewMode||(this.input=t,await this.updateComplete,this.renderRoot.querySelector("form")?.requestSubmit())},this.updatePageScrollbarOffset=()=>{const t=window.innerWidth-(document.documentElement?.clientWidth??window.innerWidth);this.style.setProperty("--page-scrollbar-w",`${Math.max(0,t)}px`),this.updateLauncherClearance()},this.handleDocPointerDown=t=>{const A=t.target;A&&(A===this||this.contains(A))&&(this.widgetInteractionAt=Date.now())},this.handleSelectionChange=()=>{this.selectionTimer!=null&&window.clearTimeout(this.selectionTimer),this.selectionTimer=window.setTimeout(()=>{this.selectionTimer=null,this.syncSelectionAttachment()},200)},this.startDrag=t=>{if(this.fullscreen||!this.rect||t.target?.closest("button"))return;t.preventDefault();const e={...this.rect},r=t.clientX,s=t.clientY,n=o=>{const a=o.clientX-r,c=o.clientY-s;let l=e.left+a,h=e.top+c;const g=window.innerWidth,u=window.innerHeight;l=Math.max(0,Math.min(l,g-e.width)),h=Math.max(0,Math.min(h,u-e.height)),this.rect={left:l,top:h,width:e.width,height:e.height}},i=()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",i)};window.addEventListener("pointermove",n),window.addEventListener("pointerup",i)},this.closeReport=()=>{this.reportSubmitting||(this.reportingMessageId=null,this.reportError="")},this.submitReport=async()=>{const t=this.reportingMessageId;if(t){this.reportSubmitting=!0,this.reportError="";try{const e={"Content-Type":"application/json",Authorization:`Bearer ${await this.ensureJwt()}`};this.browserId&&(e["X-Browser-Id"]=this.browserId);const r=await fetch(`${this.apiBaseUrl}/widget/messages/${encodeURIComponent(t)}/report`,{method:"POST",headers:e,body:JSON.stringify({reason:this.reportReason,detail:this.reportDetail.trim()||void 0})});if(!r.ok)throw new Error(`http ${r.status}`);const s=this.messages.find(n=>n.id===t);s&&(s.reported=!0,this.requestUpdate()),this.reportingMessageId=null,this.persistSession()}catch(A){this.reportError=this.isModern?"보내지 못했어요. 잠시 뒤에 다시 시도해 주세요.":A instanceof Error?A.message:"신고 전송 실패"}finally{this.reportSubmitting=!1}}},this.resetConversation=()=>{this.streaming||this.messages.length!==0&&(this.resetConfirmOpen=!0)},this.confirmReset=()=>{this.messages=[],this.sessionId=void 0,this.clearPersistedSession(),this.resetConfirmOpen=!1},this.cancelReset=()=>{this.resetConfirmOpen=!1},this.openInquiry=()=>{this.inquiryOpen=!0,this.inquiryCategory="question",this.inquirySubject="",this.inquiryBody="",this.inquiryContact="",this.inquiryError="",this.inquirySuccess=!1},this.openInquiryFor=t=>{this.openInquiry();const A=t.replace(/\s+/g," ").trim();this.inquirySubject=A.length>120?`${A.slice(0,120)}…`:A},this.closeInquiry=()=>{this.inquirySubmitting||(this.inquiryOpen=!1,this.inquiryError="",this.inquirySuccess=!1)},this.submitInquiry=async()=>{const t=this.inquirySubject.trim(),A=this.inquiryBody.trim();if(!(!t||!A)){this.inquirySubmitting=!0,this.inquiryError="";try{const r={"Content-Type":"application/json",Authorization:`Bearer ${await this.ensureJwt()}`};this.browserId&&(r["X-Browser-Id"]=this.browserId);const s=await fetch(`${this.apiBaseUrl}/widget/inquiries`,{method:"POST",headers:r,body:JSON.stringify({sessionId:this.sessionId,category:this.inquiryCategory,subject:t,body:A,contact:this.inquiryContact.trim()||void 0})});if(!s.ok)throw new Error(`http ${s.status}`);this.inquirySuccess=!0}catch(e){this.inquiryError=this.isModern?"보내지 못했어요. 잠시 뒤에 다시 시도해 주세요.":e instanceof Error?e.message:"문의 전송 실패"}finally{this.inquirySubmitting=!1}}},this.fileUrls=new Map,this.fileUrlPending=new Set,this.openAttachment=async t=>{const A=await this.resolveFileUrl(t.id);A&&window.open(A,"_blank","noopener,noreferrer")},this.captureViewport=async()=>{if(!(this.capturing||this.pendingAttachments.length>=4)){this.capturing=!0;try{const t=document.body,e=(await yn(t,{useCORS:!0,logging:!1,ignoreElements:n=>(n.tagName??"").toLowerCase()==="timely-chatbot"})).toDataURL("image/png"),r=e.split(",")[1]??"",s=Math.round(r.length*3/4/1024);this.pendingAttachments=[...this.pendingAttachments,{kind:"image",mediaType:"image/png",data:r,previewUrl:e,label:`현재 화면 (${s}KB)`}]}catch(t){console.error("[chatbot-widget] capture failed",t),window.alert(`스크린샷 실패: ${t instanceof Error?t.message:"unknown"}`)}finally{this.capturing=!1}}},this.startRegionCapture=()=>{this.streaming||this.capturing||this.regionCapturing||this.pendingAttachments.length>=4||(this.regionCapturing=!0,this.regionStart=null,this.regionRect=null,window.addEventListener("keydown",this.regionKeyHandler))},this.cancelRegionCapture=()=>{this.regionCapturing=!1,this.regionStart=null,this.regionRect=null,window.removeEventListener("keydown",this.regionKeyHandler)},this.regionKeyHandler=t=>{t.key==="Escape"&&(t.preventDefault(),this.cancelRegionCapture())},this.regionPointerDown=t=>{t.preventDefault(),t.currentTarget.setPointerCapture?.(t.pointerId),this.regionStart={x:t.clientX,y:t.clientY},this.regionRect={x:t.clientX,y:t.clientY,w:0,h:0}},this.regionPointerMove=t=>{if(!this.regionStart)return;const A=this.regionStart.x,e=this.regionStart.y,r=t.clientX,s=t.clientY;this.regionRect={x:Math.min(A,r),y:Math.min(e,s),w:Math.abs(r-A),h:Math.abs(s-e)}},this.regionPointerUp=async t=>{t.preventDefault();const A=this.regionRect,e=this.regionStart;if(this.regionStart=null,!A||!e||A.w<12||A.h<12){this.cancelRegionCapture();return}window.removeEventListener("keydown",this.regionKeyHandler),this.regionCapturing=!1,this.regionRect=null,this.capturing=!0;try{const s=(await yn(document.body,{x:A.x+window.scrollX,y:A.y+window.scrollY,width:A.w,height:A.h,useCORS:!0,logging:!1,ignoreElements:o=>(o.tagName??"").toLowerCase()==="timely-chatbot"})).toDataURL("image/png"),n=s.split(",")[1]??"",i=Math.round(n.length*3/4/1024);this.pendingAttachments=[...this.pendingAttachments,{kind:"image",mediaType:"image/png",data:n,previewUrl:s,label:`영역 ${A.w}×${A.h} (${i}KB)`}]}catch(r){console.error("[chatbot-widget] region capture failed",r),window.alert(`영역 캡처 실패: ${r instanceof Error?r.message:"unknown"}`)}finally{this.capturing=!1}},this.removeAttachment=t=>{const A=this.pendingAttachments[t];if(this.pendingAttachments=this.pendingAttachments.filter((e,r)=>r!==t),A&&A.kind==="text"&&A.source==="selection")try{window.getSelection()?.removeAllRanges()}catch{}},this.onComposerInput=t=>{const A=t.target;this.input=A.value,A.style.height="auto",A.style.height=`${A.scrollHeight}px`},this.onComposerKeydown=t=>{if(t.key!=="Enter"||t.shiftKey||t.isComposing)return;t.preventDefault(),t.target.closest("form")?.requestSubmit()},this.retryLast=async()=>{const t=this.lastFailed;if(!t||this.streaming||this.previewMode)return;this.lastFailed=null;const A={role:"assistant",content:"",progress:{stage:"thinking",text:"응답 준비",history:[]}};this.messages=this.messages.map(e=>e===t.assistant?A:e),this.streaming=!0,await this.streamReply(t.text,t.attachments,A)}}render(){const t=this.fullscreen?"panel fullscreen":"panel",A=this.regionCapturing?`${t} region-hidden`:t,e=this.theme.title||"챗봇",r=!!this.theme.iconUrl,s=!!(this.theme.iconUrl&&this.theme.launcherIconOnly),n=["toggle",this.regionCapturing?"region-hidden":"",s?"icon-only":"",r&&this.open?"icon-active":""].filter(Boolean).join(" "),i=(this.theme.launcherLabel??"").trim(),o=this.theme.launcherLabelMode==="hover",a=this.isModern,c=["launcher-wrap",this.regionCapturing?"region-hidden":"",this.open?"is-open":""].filter(Boolean).join(" ");return m`
      ${this.regionCapturing?this.renderRegionCaptureOverlay():null}
      <div class=${c}>
        <button
          class=${n}
          @click=${this.toggle}
          aria-label=${this.open?"닫기":i||"챗봇 열기"}
        >
          ${this.open&&!r?M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>`:this.renderToggleIcon()}
        </button>
        ${i?m`<span
              class=${o?"launcher-label tip":"launcher-label"}
              >${i}</span
            >`:null}
      </div>
      ${this.open?m`
            <div class=${A} style=${this.panelStyle()}>
              ${this.fullscreen?null:Ew.map(l=>m`
                      <div
                        class=${`rh ${l}`}
                        @pointerdown=${h=>this.startResize(h,l)}
                      ></div>
                    `)}
              ${a?this.renderModernHeader(e):m`<div class="header" @pointerdown=${this.startDrag}>
                ${this.theme.headerIconUrl?m`<img
                      class="header-icon"
                      src=${this.theme.headerIconUrl}
                      alt=""
                    />`:null}
                <span class="title">${e}</span>
                <button
                  type="button"
                  @click=${this.resetConversation}
                  title="대화 초기화"
                  aria-label="대화 초기화"
                  ?disabled=${this.streaming||this.messages.length===0}
                >
                  ${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15.5-6.36L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.36L3 16"/><path d="M3 21v-5h5"/></svg>`}
                </button>
                <button
                  type="button"
                  @click=${this.openInquiry}
                  title="문의하기"
                  aria-label="문의하기"
                >
                  ${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`}
                </button>
                <button
                  type="button"
                  class="fs-btn"
                  @click=${this.toggleFullscreen}
                  title=${this.fullscreen?"축소":"전체화면"}
                  aria-label=${this.fullscreen?"축소":"전체화면"}
                >
                  ${this.fullscreen?M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 9H4M4 9V4M4 9L9 4M15 9h5M20 9V4M20 9l-5-5M9 15H4M4 15v5M4 15l5 5M15 15h5M20 15v5M20 15l-5 5"/></svg>`:M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8V4h4M16 4h4v4M4 16v4h4M16 20h4v-4"/></svg>`}
                </button>
                <button
                  type="button"
                  class="close-btn"
                  @click=${this.close}
                  title="닫기"
                  aria-label="닫기"
                >
                  ${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>`}
                </button>
              </div>`}
              ${a&&this.menuOpen?this.renderMenu():null}
              <div class="messages">
                ${this.theme.welcomeMessage?.trim()?m`<div class="msg assistant">
                      ${qa(fl(this.theme.welcomeMessage))}
                    </div>`:null}
                ${a?this.renderSuggestions():null}
                ${this.messages.map(l=>l.role==="assistant"?m`<div class="msg-wrap assistant">
                        ${l.progress&&l.progress.history.length>0?m`<ul class="progress-history">
                              ${l.progress.history.map(h=>m`<li>
                                    ${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`}
                                    <span>${h}</span>
                                  </li>`)}
                            </ul>`:null}
                        ${l.progress&&l.progress.text?m`<div class="progress-line">
                              <span class="progress-spinner"></span>
                              <span>${l.progress.text}</span>
                            </div>`:null}
                        ${a&&!l.content&&(l.progress||l.notice)?null:m`<div class="msg assistant">
                              ${l.content?qa(fl(l.content)):l.progress?m`<span class="progress-placeholder"
                                      >${l.progress.text||dl[l.progress.stage]||"응답 준비"}</span
                                    >`:m`<span class="typing"
                                      ><span></span><span></span><span></span
                                    ></span>`}
                            </div>`}
                        ${l.files&&l.files.length>0?this.renderAttachments(l.files):null}
                        ${a&&l.content&&l.sources&&l.sources.length>0?m`<div class="sources" aria-label="출처">
                              ${l.sources.map(h=>m`<span class="source-chip" title=${h}
                                    >${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v5h5"/><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/></svg>`}<span
                                      >${h}</span
                                    ></span
                                  >`)}
                            </div>`:null}
                        ${a&&l.hint&&l.content&&l===this.messages[this.messages.length-1]?this.renderHint(l,l.hint):null}
                        ${a&&l.notice?this.renderNotice(l):null}
                        ${l.id&&l.content?m`<div class="reactions">
                              <button
                                type="button"
                                class=${l.reaction===1?"react on":"react"}
                                @click=${()=>this.toggleReaction(l,1)}
                                aria-label="좋아요"
                                title="도움이 됐어요"
                              >
                                ${M`<svg viewBox="0 0 24 24" fill="${l.reaction===1?"currentColor":"none"}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zM7 11l5-8a2 2 0 0 1 2 2v3h5a2 2 0 0 1 2 2.4l-1.5 7A2 2 0 0 1 17.5 19H7"/></svg>`}
                              </button>
                              <button
                                type="button"
                                class=${l.reaction===-1?"react on":"react"}
                                @click=${()=>this.toggleReaction(l,-1)}
                                aria-label="별로예요"
                                title="별로였어요"
                              >
                                ${M`<svg viewBox="0 0 24 24" fill="${l.reaction===-1?"currentColor":"none"}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 13V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zM17 13l-5 8a2 2 0 0 1-2-2v-3H5a2 2 0 0 1-2-2.4l1.5-7A2 2 0 0 1 6.5 5H17"/></svg>`}
                              </button>
                              <button
                                type="button"
                                class=${l.reported?"react reported":"react"}
                                @click=${()=>this.openReport(l)}
                                ?disabled=${l.reported}
                                aria-label="신고"
                                title=${l.reported?"신고 접수됨":"신고하기"}
                              >
                                ${M`<svg viewBox="0 0 24 24" fill="${l.reported?"currentColor":"none"}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h13l-2 4 2 4H4"/></svg>`}
                              </button>
                              ${a&&l.reported?m`<span class="reported-note"
                                    >신고를 받았어요</span
                                  >`:null}
                            </div>`:null}
                      </div>`:m`<div class="msg user">${l.content}</div>`)}
              </div>
              ${!a&&this.pendingAttachments.length>0?m`<div class="pending-attachments">
                    ${this.renderPendingChips()}
                  </div>`:null}
              ${a?this.renderModernComposer():m`<form @submit=${this.send}>
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
                    ${this.theme.captureEnabled!==!1?m`<button
                          type="button"
                          class="cap-btn"
                          @click=${this.captureViewport}
                          ?disabled=${this.streaming||this.capturing||this.pendingAttachments.length>=4}
                          title="현재 화면 캡처"
                          aria-label="현재 화면 캡처"
                        >
                          ${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`}
                        </button>`:null}
                    ${this.theme.regionCaptureEnabled!==!1?m`<button
                          type="button"
                          class="cap-btn"
                          @click=${this.startRegionCapture}
                          ?disabled=${this.streaming||this.capturing||this.regionCapturing||this.pendingAttachments.length>=4}
                          title="영역 선택 캡처, 드래그한 부분만 이미지로 첨부"
                          aria-label="영역 선택 캡처"
                        >
                          ${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7V5a2 2 0 0 1 2-2h2"/><path d="M15 3h2a2 2 0 0 1 2 2v2"/><path d="M19 15v2a2 2 0 0 1-2 2h-2"/><path d="M9 21H7a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6"/></svg>`}
                        </button>`:null}
                    <div class="spacer"></div>
                    ${this.input.length>=this.maxUserMessageChars*.8?m`<span
                          class=${`char-counter ${this.input.length>=this.maxUserMessageChars*.95?"near-limit":""}`}
                          aria-live="polite"
                        >
                          ${this.input.length}/${this.maxUserMessageChars}
                        </span>`:null}
                    <button
                      type="submit"
                      ?disabled=${this.streaming||!this.input.trim()}
                    >
                      전송
                    </button>
                  </div>
                </div>
              </form>`}
              ${this.reportingMessageId?this.renderReportModal():null}
              ${this.inquiryOpen?this.renderInquiryModal():null}
              ${this.resetConfirmOpen?this.renderResetConfirmModal():null}
            </div>
          `:null}
    `}get isModern(){return this.theme.design==="modern"}renderModernHeader(t){const A=this.theme.headerSubtitle===void 0?"보통 몇 초 안에 답해요":this.theme.headerSubtitle.trim();return m`<div class="header" @pointerdown=${this.startDrag}>
      <span class="avatar" aria-hidden="true">
        ${this.theme.headerIconUrl?m`<img src=${this.theme.headerIconUrl} alt="" />`:M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-12.5 6.6L4 20l1.4-4.5A8 8 0 1 1 21 12Z"/></svg>`}
      </span>
      <span class="heading">
        <span class="title">${t}</span>
        ${A?m`<span class="subtitle">${A}</span>`:null}
      </span>
      <button
        type="button"
        @click=${this.toggleMenu}
        title="메뉴"
        aria-label="메뉴"
        aria-haspopup="menu"
        aria-expanded=${this.menuOpen?"true":"false"}
      >
        ${M`<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8"/></svg>`}
      </button>
      <button
        type="button"
        class="close-btn"
        @click=${this.close}
        title="닫기"
        aria-label="닫기"
      >
        ${M`<svg class="icon-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>`}
        ${M`<svg class="icon-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`}
      </button>
    </div>`}renderMenu(){return m`
      <div class="menu-backdrop" @click=${this.closeMenu}></div>
      <div class="menu" role="menu" aria-label="위젯 메뉴">
        <button
          type="button"
          role="menuitem"
          ?disabled=${this.streaming||this.messages.length===0}
          @click=${()=>{this.menuOpen=!1,this.resetConversation()}}
        >
          ${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>`}
          새 대화 시작
        </button>
        <button
          type="button"
          role="menuitem"
          class="menu-full"
          @click=${()=>{this.menuOpen=!1,this.toggleFullscreen()}}
        >
          ${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>`}
          ${this.fullscreen?"작게 보기":"크게 보기"}
        </button>
      </div>
    `}renderNotice(t){const A=t.notice;if(!A)return null;const e=!!A.retry&&this.lastFailed?.assistant===t&&!this.streaming,r=A.kind==="wait"?M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`:A.kind==="stop"?M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M10 9v6M14 9v6"/></svg>`:M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>`;return m`<div class=${`notice ${A.kind}`} role="status">
      <div class="notice-body">
        <span class="notice-icon" aria-hidden="true">${r}</span>
        <span class="notice-text">
          <span class="notice-title">${A.title}</span>
          <span class="notice-desc">${A.desc}</span>
        </span>
      </div>
      ${e?m`<button
            type="button"
            class="notice-btn"
            @click=${()=>void this.retryLast()}
          >
            다시 시도
          </button>`:null}
      ${A.inquiry?m`<button type="button" class="notice-btn" @click=${this.openInquiry}>
            문의 남기기
          </button>`:null}
    </div>`}renderPendingChips(){return this.pendingAttachments.map((t,A)=>m`<div class="att-chip" title=${t.label}>
          ${t.kind==="image"?m`<img src=${t.previewUrl} alt="" />`:m`<span class="att-icon">${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v5h5"/><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/></svg>`}</span>`}
          <span class="att-label">${t.label}</span>
          <button
            type="button"
            class="att-remove"
            @click=${()=>this.removeAttachment(A)}
            aria-label="첨부 제거"
          >
            ×
          </button>
        </div>`)}renderSuggestions(){const t=(this.theme.suggestedQuestions??[]).map(e=>e.trim()).filter(Boolean).slice(0,4),A=this.messages.some(e=>e.role==="user");return t.length===0||A&&!this.previewMode?null:m`<div class="suggestions" role="group" aria-label="추천 질문">
      ${t.map(e=>m`<button
            type="button"
            class="suggestion"
            ?disabled=${this.streaming}
            @click=${()=>void this.askSuggested(e)}
          >
            ${e}
          </button>`)}
    </div>`}renderHint(t,A){return m`<div class="hint">
      ${A.suggestions.length>0?m`<div class="hint-sugs" role="group" aria-label="혹시 이걸 찾으셨나요?">
            <span class="hint-label">혹시 이걸 찾으셨나요?</span>
            ${A.suggestions.map(e=>m`<button
                  type="button"
                  class="suggestion hint-sug"
                  ?disabled=${this.streaming}
                  @click=${()=>void this.askSuggested(e)}
                >
                  ${e}
                </button>`)}
          </div>`:null}
      ${A.handoff?m`<button
            type="button"
            class="hint-handoff"
            @click=${()=>this.openInquiryFor(this.questionBefore(t))}
          >
            ${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16v12H8l-4 4Z"/></svg>`}
            담당자에게 문의 남기기
          </button>`:null}
    </div>`}questionBefore(t){const A=this.messages.indexOf(t);for(let e=A-1;e>=0;e--){const r=this.messages[e];if(r.role==="user")return r.content}return""}renderModernComposer(){const t=this.maxUserMessageChars,A=this.input.length,e=this.streaming||this.capturing||this.pendingAttachments.length>=4,r=this.theme.captureEnabled!==!1,s=this.theme.regionCaptureEnabled!==!1;return m`<form @submit=${this.send}>
      <div class="m-tools">
        ${r||s?m`<span class="m-caps">
              ${r?m`<button
                    type="button"
                    class="cap-btn"
                    @click=${this.captureViewport}
                    ?disabled=${e}
                    title="현재 화면 캡처"
                    aria-label="현재 화면 캡처"
                  >
                    ${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`}
                  </button>`:null}
              ${s?m`<button
                    type="button"
                    class="cap-btn"
                    @click=${this.startRegionCapture}
                    ?disabled=${e||this.regionCapturing}
                    title="영역 선택 캡처, 드래그한 부분만 이미지로 첨부"
                    aria-label="영역 선택 캡처"
                  >
                    ${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7V5a2 2 0 0 1 2-2h2"/><path d="M15 3h2a2 2 0 0 1 2 2v2"/><path d="M19 15v2a2 2 0 0 1-2 2h-2"/><path d="M9 21H7a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6"/></svg>`}
                  </button>`:null}
            </span>`:m`<span class="m-inquiry-hint">답이 부족하면 담당자에게</span>`}
        <button
          type="button"
          class="m-inquiry-btn"
          @click=${this.openInquiry}
          title="담당자에게 문의 남기기"
        >
          ${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16v12H8l-4 4Z"/></svg>`}
          문의 남기기
        </button>
      </div>
      ${this.pendingAttachments.length>0?m`<div class="m-chips">${this.renderPendingChips()}</div>`:null}
      <div class="m-row">
        <div class="m-input">
          <textarea
            rows="1"
            .value=${this.input}
            @input=${this.onComposerInput}
            @keydown=${this.onComposerKeydown}
            ?disabled=${this.streaming}
            maxlength=${t}
            placeholder=${this.streaming?"답을 쓰는 중이에요":"궁금한 걸 물어보세요"}
            aria-label="질문"
          ></textarea>
        </div>
        <button
          type="submit"
          class="m-send"
          ?disabled=${this.streaming||!this.input.trim()}
          title="보내기"
          aria-label="보내기"
        >
          ${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>`}
        </button>
      </div>
      ${A>=t*.8?m`<span
            class=${`m-counter ${A>=t*.95?"near-limit":""}`}
            aria-live="polite"
            >${A.toLocaleString()} / ${t.toLocaleString()}</span
          >`:null}
    </form>`}renderReportModal(){const t=this.isModern,A=t?bw:xw;return m`
      <div class="report-overlay" @click=${this.closeReport}>
        <div
          class="report-modal"
          role=${t?"dialog":N}
          aria-modal=${t?"true":N}
          @click=${e=>e.stopPropagation()}
        >
          <header>
            <p class="title">${t?"이 답을 신고할까요?":"메시지 신고"}</p>
            <p class="subtitle">
              ${t?"이유를 알려 주시면 확인하고 고칠게요.":"사유를 알려주시면 검토 후 개선에 반영합니다."}
            </p>
          </header>
          <ul class="report-reasons">
            ${Object.keys(A).map(e=>m`
                <li>
                  <label>
                    <input
                      type="radio"
                      name="reportReason"
                      value=${e}
                      .checked=${this.reportReason===e}
                      @change=${()=>this.reportReason=e}
                    />
                    <span>${A[e]}</span>
                  </label>
                </li>
              `)}
          </ul>
          <textarea
            class="report-detail"
            placeholder=${t?"더 알려 줄 내용 (선택)":"추가 설명 (선택)"}
            rows="3"
            maxlength="2000"
            .value=${this.reportDetail}
            @input=${e=>this.reportDetail=e.target.value}
          ></textarea>
          ${this.reportError?m`<p class="report-error">${this.reportError}</p>`:null}
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
              ${this.reportSubmitting?"전송 중…":"신고하기"}
            </button>
          </div>
        </div>
      </div>
    `}renderRegionCaptureOverlay(){const t=this.regionRect;return m`
      <div
        class="region-overlay"
        @pointerdown=${this.regionPointerDown}
        @pointermove=${this.regionPointerMove}
        @pointerup=${this.regionPointerUp}
      >
        ${t&&t.w>0&&t.h>0?m`
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
                style=${`top:${t.y}px;left:${t.x+t.w}px;right:0;height:${t.h}px`}
              ></div>
              <div
                class="region-dim"
                style=${`top:${t.y+t.h}px;left:0;right:0;bottom:0`}
              ></div>
              <div
                class="region-rect"
                style=${`left:${t.x}px;top:${t.y}px;width:${t.w}px;height:${t.h}px`}
              ></div>
              <div
                class="region-size"
                style=${`left:${t.x}px;top:${t.y+t.h+6}px`}
              >
                ${t.w} × ${t.h}
              </div>
            `:m`<div class="region-dim region-dim-full"></div>`}
        <div class="region-hint">
          ${t&&t.w>0?"드래그해서 영역 조정 → 떼면 캡처":"캡처할 영역을 드래그하세요. ESC로 취소"}
        </div>
      </div>
    `}renderResetConfirmModal(){const t=this.isModern;return m`
      <div class="report-overlay" @click=${this.cancelReset}>
        <div
          class="report-modal reset-modal"
          role=${t?"dialog":N}
          aria-modal=${t?"true":N}
          @click=${A=>A.stopPropagation()}
        >
          <header>
            <p class="title">
              ${t?"새 대화를 시작할까요?":"대화를 초기화할까요?"}
            </p>
            <p class="subtitle">
              ${t?"지금까지 나눈 대화가 이 창에서 지워져요.":"지금까지의 대화 기록이 모두 사라지고 새 세션이 시작돼요."}
            </p>
          </header>
          <div class="report-actions">
            <button type="button" class="ghost" @click=${this.cancelReset}>
              그대로 두기
            </button>
            <button
              type="button"
              class=${t?"primary danger":"primary"}
              @click=${this.confirmReset}
            >
              ${t?"새로 시작":"초기화"}
            </button>
          </div>
        </div>
      </div>
    `}renderInquiryModal(){const t=this.isModern;return this.inquirySuccess?m`
        <div class="report-overlay" @click=${this.closeInquiry}>
          <div
            class="report-modal"
            role=${t?"dialog":N}
            aria-modal=${t?"true":N}
            @click=${A=>A.stopPropagation()}
          >
            <header>
              <p class="title">
                ${t?"문의를 받았어요":"문의가 접수되었어요"}
              </p>
              <p class="subtitle">
                ${t?"담당자가 확인하고 남겨 주신 연락처로 답해 드려요.":"담당자가 확인 후 회신드릴게요."}
              </p>
            </header>
            <div class="report-actions">
              <button type="button" class="primary" @click=${this.closeInquiry}>
                닫기
              </button>
            </div>
          </div>
        </div>
      `:m`
      <div class="report-overlay" @click=${this.closeInquiry}>
        <div
          class="report-modal"
          role=${t?"dialog":N}
          aria-modal=${t?"true":N}
          @click=${A=>A.stopPropagation()}
        >
          <header>
            <p class="title">${t?"담당자에게 문의 남기기":"문의하기"}</p>
            <p class="subtitle">
              ${t?"챗봇이 답하기 어려운 내용도 괜찮아요. 확인하고 답해 드려요.":"챗봇이 답하기 어려운 내용도 남겨주세요."}
            </p>
          </header>
          ${t?m`<div class="cat-chips" role="radiogroup" aria-label="문의 유형">
                ${Object.keys(ls).map(A=>m`<button
                      type="button"
                      role="radio"
                      aria-checked=${this.inquiryCategory===A?"true":"false"}
                      @click=${()=>this.inquiryCategory=A}
                    >
                      ${ls[A]}
                    </button>`)}
              </div>`:m`<div class="inquiry-row">
                <label>유형</label>
                <select
                  .value=${this.inquiryCategory}
                  @change=${A=>this.inquiryCategory=A.target.value}
                >
                  ${Object.keys(ls).map(A=>m`<option value=${A}>
                        ${ls[A]}
                      </option>`)}
                </select>
              </div>`}
          <input
            type="text"
            class="inquiry-subject"
            placeholder="제목"
            maxlength="255"
            .value=${this.inquirySubject}
            @input=${A=>this.inquirySubject=A.target.value}
          />
          <textarea
            class="report-detail"
            placeholder=${t?"내용을 자세히 적어 주세요":"내용을 자세히 적어주세요"}
            rows="5"
            maxlength="8000"
            .value=${this.inquiryBody}
            @input=${A=>this.inquiryBody=A.target.value}
          ></textarea>
          <input
            type="text"
            class="inquiry-subject"
            placeholder=${t?"답을 받을 연락처 (선택, 이메일이나 전화)":"회신받을 연락처 (선택, 이메일/전화 등)"}
            maxlength="255"
            .value=${this.inquiryContact}
            @input=${A=>this.inquiryContact=A.target.value}
          />
          ${this.inquiryError?m`<p class="report-error">${this.inquiryError}</p>`:null}
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
              ?disabled=${this.inquirySubmitting||!this.inquirySubject.trim()||!this.inquiryBody.trim()}
            >
              ${this.inquirySubmitting?"전송 중…":"문의 보내기"}
            </button>
          </div>
        </div>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.previewMode?this.setupPreviewMode():(this.applyThemeOverride(),this.loadCachedTheme(),this.fetchInit()),this.inline&&(this.open=!0),document.addEventListener("selectionchange",this.handleSelectionChange),document.addEventListener("pointerdown",this.handleDocPointerDown,!0),this.updatePageScrollbarOffset(),window.addEventListener("resize",this.updatePageScrollbarOffset)}setupPreviewMode(){this.open=!0,this.syncPreviewMessages()}syncPreviewMessages(){const t=[];this.theme.welcomeMessage?.trim()||t.push({id:"preview-a-1",role:"assistant",content:"안녕하세요! 무엇을 도와드릴까요?"}),t.push({id:"preview-u-1",role:"user",content:"샘플 사용자 메시지입니다."},{id:"preview-a-2",role:"assistant",content:"테마가 적용된 모습이 이렇게 보입니다."}),this.messages=t}setPreviewTheme(t){this.theme=t,this.applyTheme(),this.previewMode&&this.syncPreviewMessages()}disconnectedCallback(){document.removeEventListener("selectionchange",this.handleSelectionChange),document.removeEventListener("pointerdown",this.handleDocPointerDown,!0),window.removeEventListener("resize",this.updatePageScrollbarOffset),this.selectionTimer!=null&&(window.clearTimeout(this.selectionTimer),this.selectionTimer=null),super.disconnectedCallback()}updateLauncherClearance(){const A=this.shadowRoot?.querySelector(".launcher-wrap")?.getBoundingClientRect().height??0;A>0&&this.style.setProperty("--launcher-clear",`${16+A+12}px`)}storageKey(){return this.projectId?`timely-chatbot:session:${this.projectId}`:null}loadPersistedSession(){const t=this.storageKey();if(!(!t||this.previewMode))try{const A=sessionStorage.getItem(t);if(!A)return;const e=JSON.parse(A);if(e.v!==1||!Array.isArray(e.messages))return;this.messages=e.messages.map(r=>{const s={role:r.role,content:r.content};return r.id&&(s.id=r.id),r.reaction!==void 0&&(s.reaction=r.reaction),r.reported&&(s.reported=r.reported),r.notice&&(s.notice={...r.notice,retry:!1}),r.files&&r.files.length>0&&(s.files=r.files),Array.isArray(r.sources)&&r.sources.length>0&&(s.sources=r.sources),s}),e.sessionId&&(this.sessionId=e.sessionId)}catch{}}persistSession(){const t=this.storageKey();if(!t||this.previewMode)return;let A=this.messages.filter(e=>!(e.role==="assistant"&&!e.content&&!e.id&&!e.notice)).map(e=>{const r={role:e.role,content:e.content};return e.id&&(r.id=e.id),e.reaction!==void 0&&(r.reaction=e.reaction),e.reported&&(r.reported=e.reported),e.files&&e.files.length>0&&(r.files=e.files),e.sources&&e.sources.length>0&&(r.sources=e.sources),e.notice&&(r.notice={...e.notice,retry:!1}),r});for(let e=0;e<4;e++)try{sessionStorage.setItem(t,JSON.stringify({v:1,messages:A,sessionId:this.sessionId}));return}catch(r){if(!vw(r)||A.length<=2)return;const s=Math.max(2,Math.floor(A.length*.2));A=A.slice(s)}}clearPersistedSession(){const t=this.storageKey();if(t)try{sessionStorage.removeItem(t)}catch{}}syncSelectionAttachment(){if(this.regionCapturing||this.streaming||this.theme.selectionMirrorEnabled===!1)return;const t=window.getSelection?.(),A=t?.toString().trim()??"",e=(()=>{if(!t||t.rangeCount===0)return!1;const i=t.anchorNode;return i?i===this||this.contains(i)&&i!==document.body:!1})(),r=this.pendingAttachments.findIndex(i=>i.kind==="text"&&i.source==="selection");if(!A||e){const i=document.activeElement===this,o=Date.now()-this.widgetInteractionAt;if(i||o<500)return;r>=0&&(this.pendingAttachments=this.pendingAttachments.filter((a,c)=>c!==r));return}if(A.length>2e4)return;const s=A.length>60?`${A.slice(0,60)}…`:A,n={kind:"text",source:"selection",text:A,label:`선택: "${s}"`,pageUrl:window.location.href,pageTitle:document.title};if(r>=0){const i=[...this.pendingAttachments];i[r]=n,this.pendingAttachments=i;return}this.pendingAttachments.length>=4||(this.pendingAttachments=[...this.pendingAttachments,n])}async fetchInit(){if(!(!this.apiBaseUrl||!this.apiKey))try{const t=await fetch(`${this.apiBaseUrl}/widget/init`,{headers:{"X-API-Key":this.apiKey}});if(!t.ok)return;const A=await t.json();A.projectId&&(this.projectId=A.projectId),typeof A.maxUserMessageChars=="number"&&(this.maxUserMessageChars=A.maxUserMessageChars),this.theme={...A.theme??{},...this.themeOverride??{}},this.applyTheme(),this.saveCachedTheme(A.theme??{}),this.loadPersistedSession()}catch{}}themeCacheKey(){return this.apiKey?`timely-chatbot:theme:${this.apiKey}`:null}applyThemeOverride(){this.themeOverride&&(this.theme={...this.theme,...this.themeOverride},this.applyTheme())}loadCachedTheme(){const t=this.themeCacheKey();if(!(!t||this.previewMode))try{const A=localStorage.getItem(t);if(!A)return;const e=JSON.parse(A);if(e.v!==1||!e.theme)return;this.theme={...e.theme,...this.themeOverride??{}},this.applyTheme()}catch{}}saveCachedTheme(t){const A=this.themeCacheKey();if(!(!A||this.previewMode))try{localStorage.setItem(A,JSON.stringify({v:1,theme:t}))}catch{}}applyTheme(){const t=this.theme,A=(h,g)=>{g?this.style.setProperty(h,g):this.style.removeProperty(h)};A("--launcher-bg",t.launcherBg),A("--panel-bg",t.panelBg),A("--header-bg",t.headerBg),A("--user-bg",t.userBg),A("--user-text",t.userText),A("--assistant-bg",t.assistantBg),A("--assistant-text",t.assistantText),A("--send-bg",t.sendBg),A("--send-text",t.sendText),A("--launcher-fg",t.launcherBg?Wt(t.launcherBg):void 0);const e=h=>typeof h=="number"?`${h}px`:void 0;A("--header-title-size",e(t.headerTitleSize)),A("--message-size",e(t.messageSize)),A("--input-size",e(t.inputSize)),A("--launcher-size",e(t.launcherSize)),A("--launcher-size-mobile",e(t.launcherSizeMobile)),A("--launcher-icon-size",e(t.launcherIconSize)),A("--launcher-svg-size",e(t.launcherSvgSize)),A("--launcher-label-color",t.launcherLabelColor),A("--launcher-label-size",e(t.launcherLabelSize)),requestAnimationFrame(()=>this.updateLauncherClearance());const r=t.design==="modern";if(r?this.setAttribute("data-design","modern"):this.removeAttribute("data-design"),!r){this.menuOpen=!1;for(const h of["--header-fg","--header-avatar-bg","--header-avatar-fg","--accent","--assistant-border"])this.style.removeProperty(h);return}const s=t.launcherBg||"#1f2937",n=t.headerBg||s,i=Wt(n),o=i==="#ffffff";A("--header-fg",i),A("--header-avatar-bg",o?"rgba(255, 255, 255, 0.16)":s),A("--header-avatar-fg",o?"#ffffff":Wt(s)),t.userText||A("--user-text",Wt(t.userBg||s)),t.sendText||A("--send-text",Wt(t.sendBg||s));const a=t.assistantBg||"#ffffff",c=kw(s,a);A("--accent",c!==null&&c>=3?s:t.assistantText||"#171717");const l=gs(a);A("--assistant-border",l!==null&&l<.4?"rgba(255, 255, 255, 0.14)":"rgba(0, 0, 0, 0.08)")}renderToggleIcon(){return this.theme.iconUrl?m`<img class="custom-icon" src=${this.theme.iconUrl} alt="" />`:M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-12.5 6.6L4 20l1.4-4.5A8 8 0 1 1 21 12Z"/></svg>`}ensureRect(){if(this.rect)return;const t=yw,A=Iw,e=Math.max(Bs,window.innerHeight-this.launcherGap()-A),s=this.dataset.position==="bottom-left"?Bs:Math.max(Bs,window.innerWidth-Bs-t);this.rect={left:s,top:e,width:t,height:A}}launcherGap(){const A=this.shadowRoot?.querySelector(".launcher-wrap")?.getBoundingClientRect().height??0;return A>0?A+16:Hw}panelStyle(){if(this.inline||this.fullscreen)return"";const t=this.rect;return t?`left:${t.left}px;top:${t.top}px;width:${t.width}px;height:${t.height}px;`:""}startResize(t,A){if(this.fullscreen||!this.rect)return;t.preventDefault();const e={...this.rect},r=t.clientX,s=t.clientY,n=o=>{const a=o.clientX-r,c=o.clientY-s;let{left:l,top:h,width:g,height:u}=e;A.includes("e")&&(g=e.width+a),A.includes("w")&&(g=e.width-a,l=e.left+a),A.includes("s")&&(u=e.height+c),A.includes("n")&&(u=e.height-c,h=e.top+c),g<cs&&(A.includes("w")&&(l=e.left+(e.width-cs)),g=cs),u<hs&&(A.includes("n")&&(h=e.top+(e.height-hs)),u=hs);const d=window.innerWidth,f=window.innerHeight;l<0&&(g+=l,l=0),h<0&&(u+=h,h=0),l+g>d&&(g=d-l),h+u>f&&(u=f-h),g=Math.max(cs,g),u=Math.max(hs,u),this.rect={left:l,top:h,width:g,height:u}},i=()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",i)};window.addEventListener("pointermove",n),window.addEventListener("pointerup",i)}toggleFullscreen(){this.fullscreen=!this.fullscreen}close(){this.open=!1,this.fullscreen=!1,this.menuOpen=!1}async toggle(){this.open=!this.open,this.open||(this.menuOpen=!1),this.open&&(this.updateLauncherClearance(),this.ensureRect(),await this.updateComplete,this.composerTextarea?.focus(),this.scrollToBottom())}updated(){this.open&&this.scrollToBottom()}scrollToBottom(){const t=this.renderRoot.querySelector(".messages");t&&(t.scrollTop=t.scrollHeight)}openReport(t){!t.id||t.reported||(this.reportingMessageId=t.id,this.reportReason="incorrect",this.reportDetail="",this.reportError="")}async resolveFileUrl(t){const A=this.fileUrls.get(t);if(A)return A;try{const e=await this.ensureJwt(),r=await fetch(`${this.apiBaseUrl}/widget/files/${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${e}`}});if(!r.ok)return null;const s=await r.json();return s.url?(this.fileUrls.set(t,s.url),s.url):null}catch{return null}}ensureFileUrl(t){const A=this.fileUrls.get(t);return A||(this.fileUrlPending.has(t)||(this.fileUrlPending.add(t),this.resolveFileUrl(t).then(()=>{this.fileUrlPending.delete(t),this.requestUpdate()})),null)}renderAttachments(t){return m`<div class="attachments">
      ${t.map(A=>{if(A.isImage){const e=this.ensureFileUrl(A.id);return m`<figure class="att-image">
            ${e?m`<img
                  src=${e}
                  alt=${A.label||A.name}
                  loading="lazy"
                  @click=${()=>void this.openAttachment(A)}
                />`:m`<div class="att-image-loading"></div>`}
            ${A.label&&A.label!==A.name?m`<figcaption>${A.label}</figcaption>`:null}
          </figure>`}return m`<button
          type="button"
          class="att-file"
          @click=${()=>void this.openAttachment(A)}
          title=${`${A.name} 내려받기`}
        >
          ${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`}
          <span class="att-file-text">
            <span class="att-file-name">${A.label||A.name}</span>
            <span class="att-file-meta">${Fw(A.size)} 내려받기</span>
          </span>
          ${M`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 11l5 5 5-5"/><path d="M4 20h16"/></svg>`}
        </button>`})}
    </div>`}async toggleReaction(t,A){if(!t.id)return;const e=t.reaction===A?0:A,r=t.reaction;t.reaction=e===0?void 0:e,this.requestUpdate();try{const s=await this.ensureJwt(),n=await fetch(`${this.apiBaseUrl}/widget/messages/${encodeURIComponent(t.id)}/reaction`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({reaction:e})});if(!n.ok)throw new Error(`http ${n.status}`);this.persistSession()}catch{t.reaction=r,this.requestUpdate(),this.persistSession()}}async ensureJwt(){if(this.jwt)return this.jwt;if(this.getAccessToken){const e=await this.getAccessToken();if(!e)throw new Error("getAccessToken returned empty token");return this.jwt=e,e}if(!this.apiKey)throw new Error("TimelyChatbot.init: apiKey + getAccessToken? 중 최소 apiKey 필요");const t=await fetch(`${this.apiBaseUrl}/widget/guest-jwt`,{method:"POST",headers:{"X-API-Key":this.apiKey,"X-Browser-Id":this.browserId}});if(!t.ok){let e=`guest jwt 발급 실패 (HTTP ${t.status})`,r;try{const s=await t.json();s?.message&&(e=s.message),typeof s?.code=="string"&&(r=s.code)}catch{}throw new as(e,t.status,r,"token")}const A=await t.json();return this.jwt=A.jwt,this.jwt}invalidateJwt(){this.jwt=void 0}async send(t){if(t.preventDefault(),this.previewMode)return;const A=this.input.trim();if(!A||this.streaming)return;const e=this.pendingAttachments,r=e.length>0?`${A}

${e.map(i=>`[첨부] ${i.label}`).join(`
`)}`:A;if(this.messages=[...this.messages,{role:"user",content:r}],this.input="",requestAnimationFrame(()=>{this.composerTextarea&&(this.composerTextarea.style.height="")}),this.pendingAttachments=[],e.some(i=>i.kind==="text"&&i.source==="selection"))try{window.getSelection()?.removeAllRanges()}catch{}this.streaming=!0;let s={role:"assistant",content:"",progress:{stage:"thinking",text:"응답 준비",history:[]}};this.messages=[...this.messages,s],this.persistSession();const n=e.map(i=>i.kind==="image"?{kind:"image",data:i.data,mediaType:i.mediaType,label:i.label}:{kind:"text",text:i.text,label:i.label,...i.source?{source:i.source}:{},...i.pageUrl?{pageUrl:i.pageUrl}:{},...i.pageTitle?{pageTitle:i.pageTitle}:{}});await this.streamReply(A,n,s)}async streamReply(t,A,e){this.inflight={text:t,attachments:A};const r={url:window.location.href,title:document.title,mainText:Lw()};try{let s;for(let a=0;a<2;a++){const c=await this.ensureJwt();if(s=await fetch(`${this.apiBaseUrl}/widget/chat`,{method:"POST",headers:{"Content-Type":"application/json","X-Browser-Id":this.browserId,Authorization:`Bearer ${c}`},body:JSON.stringify({sessionId:this.sessionId,message:t,...A.length>0?{attachments:A}:{},pageContext:r})}),s.status!==401)break;this.invalidateJwt()}if(!s)throw new Error("요청 실패");if(!s.ok){let a=`요청 실패 (HTTP ${s.status})`,c;try{const l=await s.json();l&&typeof l.message=="string"&&l.message&&(a=l.message),l&&typeof l.code=="string"&&(c=l.code)}catch{}throw new as(a,s.status,c)}if(!s.body)throw new Error("스트림을 받을 수 없습니다");const n=s.body.getReader(),i=new TextDecoder;let o="";for(;;){const{value:a,done:c}=await n.read();if(c)break;o+=i.decode(a,{stream:!0});const l=o.split(`

`);o=l.pop()??"";for(const h of l)this.handleSse(h,e)}}catch(s){this.isModern?(e.notice=mw(s),this.lastFailed=e.notice.retry?{assistant:e,text:t,attachments:A}:null):e.content=`[오류: ${s instanceof Error?s.message:"unknown"}]`,e.progress&&(e.progress={...e.progress,stage:"error",text:""}),this.requestUpdate(),this.persistSession()}finally{this.inflight=null,this.streaming=!1,await this.updateComplete,this.composerTextarea?.focus()}}handleSse(t,A){const e=t.split(`
`);let r="message",s="";for(const n of e)n.startsWith("event:")?r=n.slice(6).trim():n.startsWith("data:")&&(s+=n.slice(5).trim());if(s)try{const n=JSON.parse(s);if(r==="session")this.sessionId=n.sessionId,this.persistSession();else if(r==="delta")A.progress&&(A.progress={...A.progress,stage:"streaming",text:""}),A.content+=n.text,this.requestUpdate();else if(r==="progress"){const i=String(n.stage??""),a=(typeof n.detail=="string"?n.detail:"")||dl[i]||i,l=(A.progress??{stage:"",text:"",history:[]}).history.slice();if(i==="tool_done"){const h=typeof n.query=="string"?n.query:"",g=typeof n.citationsCount=="number"?n.citationsCount:null;l.push(g!=null?`"${h}" 검색 결과 ${g}건`:h?`"${h}" 검색 완료`:"검색 완료")}A.progress={stage:i,text:a,history:l},this.requestUpdate()}else if(r==="files")Array.isArray(n.files)&&(A.files=n.files,this.requestUpdate());else if(r==="tool"){if(n.name==="search_documents"&&!A.progress){const i=n.query??"";A.progress={stage:"tool_start",text:`자료 검색: "${i}"`,history:[]},this.requestUpdate()}}else if(r==="done"){if(typeof n.messageId=="string"&&(A.id=n.messageId),Array.isArray(n.files)&&!A.files&&(A.files=n.files),Array.isArray(n.citations)){const i=Uw(n.citations);i.length>0&&(A.sources=i)}A.progress&&(A.progress={...A.progress,stage:"done",text:""}),this.requestUpdate(),this.persistSession()}else if(r==="hint"){if(typeof n.messageId=="string"&&A.id&&n.messageId!==A.id)return;const i=Array.isArray(n.suggestions)?n.suggestions.filter(a=>typeof a=="string"&&a.trim()!=="").slice(0,3):[],o=n.handoff===!0;(o||i.length>0)&&(A.hint={handoff:o,suggestions:i},this.requestUpdate(),this.persistSession())}else r==="error"&&(this.isModern?(A.notice={kind:"error",title:"답을 쓰다가 문제가 생겼어요",desc:"잠시 뒤에 다시 시도해 주세요.",retry:!0},this.inflight&&(this.lastFailed={assistant:A,...this.inflight})):A.content+=`
[오류: ${n.error}]`,A.progress&&(A.progress={...A.progress,stage:"error",text:""}),this.requestUpdate(),this.persistSession())}catch{}}};L.styles=ap`
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
    .m-tools {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      min-height: 28px;
    }
    .m-caps {
      display: flex;
      align-items: center;
      gap: 2px;
      /* 아이콘이 입력칸 왼쪽 곡선과 줄을 맞추도록 버튼 여백만큼 당긴다. */
      margin-left: -4px;
    }
    .m-inquiry-hint {
      min-width: 0;
      padding-left: 4px;
      font-size: 12px;
      color: #737373;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .m-inquiry-btn {
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      height: 28px;
      padding: 0 10px;
      border: 1px solid #e5e5e5;
      border-radius: 999px;
      background: #ffffff;
      color: #262626;
      font: inherit;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
    .m-inquiry-btn:hover {
      border-color: #a3a3a3;
    }
    .m-inquiry-btn svg {
      width: 12px;
      height: 12px;
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
    :host([data-design="modern"]) .cap-btn {
      width: 32px;
      height: 28px;
      border-radius: 8px;
      color: #737373;
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
  `,v([ge({attribute:"api-key"})],L.prototype,"apiKey",2),v([ge({attribute:"browser-id"})],L.prototype,"browserId",2),v([ge({attribute:"api-base-url"})],L.prototype,"apiBaseUrl",2),v([ge({attribute:!1})],L.prototype,"getAccessToken",2),v([ge({attribute:"preview-mode",type:Boolean})],L.prototype,"previewMode",2),v([ge({attribute:"inline",type:Boolean,reflect:!0})],L.prototype,"inline",2),v([ge({attribute:!1})],L.prototype,"themeOverride",2),v([$()],L.prototype,"open",2),v([$()],L.prototype,"fullscreen",2),v([$()],L.prototype,"messages",2),v([$()],L.prototype,"input",2),v([$()],L.prototype,"streaming",2),v([$()],L.prototype,"sessionId",2),v([$()],L.prototype,"theme",2),v([$()],L.prototype,"maxUserMessageChars",2),v([$()],L.prototype,"rect",2),v([$()],L.prototype,"reportingMessageId",2),v([$()],L.prototype,"resetConfirmOpen",2),v([$()],L.prototype,"reportReason",2),v([$()],L.prototype,"reportDetail",2),v([$()],L.prototype,"reportSubmitting",2),v([$()],L.prototype,"reportError",2),v([$()],L.prototype,"inquiryOpen",2),v([$()],L.prototype,"inquiryCategory",2),v([$()],L.prototype,"inquirySubject",2),v([$()],L.prototype,"inquiryBody",2),v([$()],L.prototype,"inquiryContact",2),v([$()],L.prototype,"inquirySubmitting",2),v([$()],L.prototype,"inquiryError",2),v([$()],L.prototype,"inquirySuccess",2),v([$()],L.prototype,"menuOpen",2),v([$()],L.prototype,"pendingAttachments",2),v([$()],L.prototype,"capturing",2),v([$()],L.prototype,"regionCapturing",2),v([$()],L.prototype,"regionRect",2),v([vp("form textarea")],L.prototype,"composerTextarea",2),L=v([Hp("timely-chatbot")],L);const pl="timely-chatbot-bid",Dw="http://localhost:3410";function Kw(){try{const t=localStorage.getItem(pl);if(t)return t;const A=`tc-${crypto.randomUUID()}`;return localStorage.setItem(pl,A),A}catch{return`tc-${crypto.randomUUID()}`}}function wl(t){if(!t.apiKey)throw new Error("TimelyChatbot.init: apiKey가 필요합니다");const A=document.createElement("timely-chatbot");return A.apiBaseUrl=t.apiBaseUrl??Dw,A.apiKey=t.apiKey,A.browserId=Kw(),t.getAccessToken&&(A.getAccessToken=t.getAccessToken),t.position==="bottom-left"&&(A.dataset.position="bottom-left"),t.theme&&(A.themeOverride=t.theme),(t.mountTo??document.body).appendChild(A),{destroy:()=>A.remove()}}return window.TimelyChatbot={init:wl},zA.init=wl,Object.defineProperty(zA,Symbol.toStringTag,{value:"Module"}),zA})({});
//# sourceMappingURL=widget.js.map
