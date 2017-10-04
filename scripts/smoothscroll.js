// Smooth scroll
! function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports && "object" == typeof module ? module.exports = t() : e.smoothScroll = t()
}(this, function() {
    "use strict";
    if ("object" == typeof window && void 0 !== document.querySelectorAll && void 0 !== window.pageYOffset && void 0 !== history.pushState) {
        var e = function(e) {
                return "HTML" === e.nodeName ? -window.pageYOffset : e.getBoundingClientRect().top + window.pageYOffset
            },
            t = function(e) {
                return .5 > e ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
            },
            n = function(e, n, o, i) {
                return o > i ? n : e + (n - e) * t(o / i)
            },
            o = function(t, o, i, r) {
                o = o || 500, r = r || window;
                var u = window.pageYOffset;
                if ("number" == typeof t) var a = parseInt(t);
                else var a = e(t);
                var d = Date.now(),
                    f = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 15)
                    },
                    s = function() {
                        var e = Date.now() - d;
                        r !== window ? r.scrollTop = n(u, a, e, o) : window.scroll(0, n(u, a, e, o)), e > o ? "function" == typeof i && i(t) : f(s)
                    };
                s()
            },
            i = function(e) {
                e.preventDefault(), location.hash !== this.hash && window.history.pushState(null, null, this.hash), o(document.getElementById(this.hash.substring(1)), 500, function(e) {
                    location.replace("#" + e.id)
                })
            };
        return document.addEventListener("DOMContentLoaded", function() {
            for (var e, t = document.querySelectorAll('a[href^="#"]:not([href="#"])'), n = t.length; e = t[--n];) e.addEventListener("click", i, !1)
        }), o
    }
});
