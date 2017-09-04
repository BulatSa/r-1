!function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : t("object" == typeof exports ? require("jquery") : jQuery);
}(function(t) {
    var e, i = navigator.userAgent, n = /iphone/i.test(i), o = /chrome/i.test(i), s = /android/i.test(i);
    t.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, t.fn.extend({
        caret: function(t, e) {
            var i;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof t ? (e = "number" == typeof e ? e : t, 
            this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(t, e) : this.createTextRange && ((i = this.createTextRange()).collapse(!0), 
                i.moveEnd("character", e), i.moveStart("character", t), i.select());
            })) : (this[0].setSelectionRange ? (t = this[0].selectionStart, e = this[0].selectionEnd) : document.selection && document.selection.createRange && (i = document.selection.createRange(), 
            t = 0 - i.duplicate().moveStart("character", -1e5), e = t + i.text.length), {
                begin: t,
                end: e
            });
        },
        unmask: function() {
            return this.trigger("unmask");
        },
        mask: function(i, r) {
            var a, l, c, h, d, u, f, p;
            if (!i && this.length > 0) {
                var g = (a = t(this[0])).data(t.mask.dataName);
                return g ? g() : void 0;
            }
            return r = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, r), l = t.mask.definitions, c = [], h = f = i.length, d = null, t.each(i.split(""), function(t, e) {
                "?" == e ? (f--, h = t) : l[e] ? (c.push(new RegExp(l[e])), null === d && (d = c.length - 1), 
                h > t && (u = c.length - 1)) : c.push(null);
            }), this.trigger("unmask").each(function() {
                function a() {
                    if (r.completed) {
                        for (var t = d; u >= t; t++) if (c[t] && $[t] === g(t)) return;
                        r.completed.call(T);
                    }
                }
                function g(t) {
                    return r.placeholder.charAt(t < r.placeholder.length ? t : 0);
                }
                function m(t) {
                    for (;++t < f && !c[t]; ) ;
                    return t;
                }
                function v(t) {
                    for (;--t >= 0 && !c[t]; ) ;
                    return t;
                }
                function y(t, e) {
                    var i, n;
                    if (!(0 > t)) {
                        for (i = t, n = m(e); f > i; i++) if (c[i]) {
                            if (!(f > n && c[i].test($[n]))) break;
                            $[i] = $[n], $[n] = g(n), n = m(n);
                        }
                        E(), T.caret(Math.max(d, t));
                    }
                }
                function b(t) {
                    var e, i, n, o;
                    for (e = t, i = g(t); f > e; e++) if (c[e]) {
                        if (n = m(e), o = $[e], $[e] = i, !(f > n && c[n].test(o))) break;
                        i = o;
                    }
                }
                function x() {
                    var t = T.val(), e = T.caret();
                    if (p && p.length && p.length > t.length) {
                        for (k(!0); e.begin > 0 && !c[e.begin - 1]; ) e.begin--;
                        if (0 === e.begin) for (;e.begin < d && !c[e.begin]; ) e.begin++;
                        T.caret(e.begin, e.begin);
                    } else {
                        for (k(!0); e.begin < f && !c[e.begin]; ) e.begin++;
                        T.caret(e.begin, e.begin);
                    }
                    a();
                }
                function w() {
                    k(), T.val() != D && T.change();
                }
                function S(t) {
                    if (!T.prop("readonly")) {
                        var e, i, o, s = t.which || t.keyCode;
                        p = T.val(), 8 === s || 46 === s || n && 127 === s ? (e = T.caret(), i = e.begin, 
                        (o = e.end) - i == 0 && (i = 46 !== s ? v(i) : o = m(i - 1), o = 46 === s ? m(o) : o), 
                        P(i, o), y(i, o - 1), t.preventDefault()) : 13 === s ? w.call(this, t) : 27 === s && (T.val(D), 
                        T.caret(0, k()), t.preventDefault());
                    }
                }
                function C(e) {
                    if (!T.prop("readonly")) {
                        var i, n, o, r = e.which || e.keyCode, l = T.caret();
                        if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > r) && r && 13 !== r) {
                            if (l.end - l.begin != 0 && (P(l.begin, l.end), y(l.begin, l.end - 1)), i = m(l.begin - 1), 
                            f > i && (n = String.fromCharCode(r), c[i].test(n))) {
                                if (b(i), $[i] = n, E(), o = m(i), s) {
                                    var h = function() {
                                        t.proxy(t.fn.caret, T, o)();
                                    };
                                    setTimeout(h, 0);
                                } else T.caret(o);
                                l.begin <= u && a();
                            }
                            e.preventDefault();
                        }
                    }
                }
                function P(t, e) {
                    var i;
                    for (i = t; e > i && f > i; i++) c[i] && ($[i] = g(i));
                }
                function E() {
                    T.val($.join(""));
                }
                function k(t) {
                    var e, i, n, o = T.val(), s = -1;
                    for (e = 0, n = 0; f > e; e++) if (c[e]) {
                        for ($[e] = g(e); n++ < o.length; ) if (i = o.charAt(n - 1), c[e].test(i)) {
                            $[e] = i, s = e;
                            break;
                        }
                        if (n > o.length) {
                            P(e + 1, f);
                            break;
                        }
                    } else $[e] === o.charAt(n) && n++, h > e && (s = e);
                    return t ? E() : h > s + 1 ? r.autoclear || $.join("") === A ? (T.val() && T.val(""), 
                    P(0, f)) : E() : (E(), T.val(T.val().substring(0, s + 1))), h ? e : d;
                }
                var T = t(this), $ = t.map(i.split(""), function(t, e) {
                    return "?" != t ? l[t] ? g(e) : t : void 0;
                }), A = $.join(""), D = T.val();
                T.data(t.mask.dataName, function() {
                    return t.map($, function(t, e) {
                        return c[e] && t != g(e) ? t : null;
                    }).join("");
                }), T.one("unmask", function() {
                    T.off(".mask").removeData(t.mask.dataName);
                }).on("focus.mask", function() {
                    if (!T.prop("readonly")) {
                        clearTimeout(e);
                        var t;
                        D = T.val(), t = k(), e = setTimeout(function() {
                            T.get(0) === document.activeElement && (E(), t == i.replace("?", "").length ? T.caret(0, t) : T.caret(t));
                        }, 10);
                    }
                }).on("blur.mask", w).on("keydown.mask", S).on("keypress.mask", C).on("input.mask paste.mask", function() {
                    T.prop("readonly") || setTimeout(function() {
                        var t = k(!0);
                        T.caret(t), a();
                    }, 0);
                }), o && s && T.off("input.mask").on("input.mask", x), k();
            });
        }
    });
}), function(t, e, i, n) {
    "use strict";
    function o(t) {
        var e = t.currentTarget, n = t.data ? t.data.options : {}, o = t.data ? t.data.items : [], s = i(e).attr("data-fancybox") || "", r = 0;
        t.preventDefault(), t.stopPropagation(), s ? (o = o.length ? o.filter('[data-fancybox="' + s + '"]') : i('[data-fancybox="' + s + '"]'), 
        (r = o.index(e)) < 0 && (r = 0)) : o = [ e ], i.fancybox.open(o, n, r);
    }
    if (i) {
        if (i.fn.fancybox) return void i.error("fancyBox already initialized");
        var s = {
            loop: !1,
            margin: [ 44, 0 ],
            gutter: 50,
            keyboard: !0,
            arrows: !0,
            infobar: !1,
            toolbar: !0,
            buttons: [ "slideShow", "fullScreen", "thumbs", "close" ],
            idleTime: 4,
            smallBtn: "auto",
            protect: !1,
            modal: !1,
            image: {
                preload: "auto"
            },
            ajax: {
                settings: {
                    data: {
                        fancybox: !0
                    }
                }
            },
            iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                preload: !0,
                css: {},
                attr: {
                    scrolling: "auto"
                }
            },
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
            btnTpl: {
                slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
                thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
                smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
            },
            parentEl: "body",
            autoFocus: !0,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: {
                autoStart: !1
            },
            touch: {
                vertical: !0,
                momentum: !0
            },
            hash: null,
            media: {},
            slideShow: {
                autoStart: !1,
                speed: 4e3
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0
            },
            onInit: i.noop,
            beforeLoad: i.noop,
            afterLoad: i.noop,
            beforeShow: i.noop,
            afterShow: i.noop,
            beforeClose: i.noop,
            afterClose: i.noop,
            onActivate: i.noop,
            onDeactivate: i.noop,
            clickContent: function(t, e) {
                return "image" === t.type && "zoom";
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
                clickContent: function(t, e) {
                    return "image" === t.type && "toggleControls";
                },
                clickSlide: function(t, e) {
                    return "image" === t.type ? "toggleControls" : "close";
                },
                dblclickContent: function(t, e) {
                    return "image" === t.type && "zoom";
                },
                dblclickSlide: function(t, e) {
                    return "image" === t.type && "zoom";
                }
            },
            lang: "en",
            i18n: {
                en: {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                    PLAY_START: "Start slideshow",
                    PLAY_STOP: "Pause slideshow",
                    FULL_SCREEN: "Full screen",
                    THUMBS: "Thumbnails"
                },
                de: {
                    CLOSE: "Schliessen",
                    NEXT: "Weiter",
                    PREV: "Zurück",
                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                    PLAY_START: "Diaschau starten",
                    PLAY_STOP: "Diaschau beenden",
                    FULL_SCREEN: "Vollbild",
                    THUMBS: "Vorschaubilder"
                }
            }
        }, r = i(t), a = i(e), l = 0, c = function(t) {
            return t && t.hasOwnProperty && t instanceof i;
        }, h = function() {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60);
            };
        }(), d = function() {
            var t, i = e.createElement("fakeelement"), o = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (t in o) if (i.style[t] !== n) return o[t];
        }(), u = function(t) {
            return t && t.length && t[0].offsetHeight;
        }, f = function(t, n, o) {
            var r = this;
            r.opts = i.extend(!0, {
                index: o
            }, s, n || {}), n && i.isArray(n.buttons) && (r.opts.buttons = n.buttons), r.id = r.opts.id || ++l, 
            r.group = [], r.currIndex = parseInt(r.opts.index, 10) || 0, r.prevIndex = null, 
            r.prevPos = null, r.currPos = 0, r.firstRun = null, r.createGroup(t), r.group.length && (r.$lastFocus = i(e.activeElement).blur(), 
            r.slides = {}, r.init(t));
        };
        i.extend(f.prototype, {
            init: function() {
                var t, e, n, o = this, s = o.group[o.currIndex].opts;
                o.scrollTop = a.scrollTop(), o.scrollLeft = a.scrollLeft(), i.fancybox.getInstance() || i.fancybox.isMobile || "hidden" === i("body").css("overflow") || (t = i("body").width(), 
                i("html").addClass("fancybox-enabled"), (t = i("body").width() - t) > 1 && i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + t + "px; }</style>")), 
                n = "", i.each(s.buttons, function(t, e) {
                    n += s.btnTpl[e] || "";
                }), e = i(o.translate(o, s.baseTpl.replace("{{BUTTONS}}", n))).addClass("fancybox-is-hidden").attr("id", "fancybox-container-" + o.id).addClass(s.baseClass).data("FancyBox", o).prependTo(s.parentEl), 
                o.$refs = {
                    container: e
                }, [ "bg", "inner", "infobar", "toolbar", "stage", "caption" ].forEach(function(t) {
                    o.$refs[t] = e.find(".fancybox-" + t);
                }), (!s.arrows || o.group.length < 2) && e.find(".fancybox-navigation").remove(), 
                s.infobar || o.$refs.infobar.remove(), s.toolbar || o.$refs.toolbar.remove(), o.trigger("onInit"), 
                o.activate(), o.jumpTo(o.currIndex);
            },
            translate: function(t, e) {
                var i = t.opts.i18n[t.opts.lang];
                return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                    var o = i[e];
                    return o === n ? t : o;
                });
            },
            createGroup: function(t) {
                var e = this, o = i.makeArray(t);
                i.each(o, function(t, o) {
                    var s, r, a, l, c = {}, h = {}, d = [];
                    i.isPlainObject(o) ? (c = o, h = o.opts || o) : "object" === i.type(o) && i(o).length ? (s = i(o), 
                    d = s.data(), h = "options" in d ? d.options : {}, h = "object" === i.type(h) ? h : {}, 
                    c.src = "src" in d ? d.src : h.src || s.attr("href"), [ "width", "height", "thumb", "type", "filter" ].forEach(function(t) {
                        t in d && (h[t] = d[t]);
                    }), "srcset" in d && (h.image = {
                        srcset: d.srcset
                    }), h.$orig = s, c.type || c.src || (c.type = "inline", c.src = o)) : c = {
                        type: "html",
                        src: o + ""
                    }, c.opts = i.extend(!0, {}, e.opts, h), i.fancybox.isMobile && (c.opts = i.extend(!0, {}, c.opts, c.opts.mobile)), 
                    r = c.type || c.opts.type, a = c.src || "", !r && a && (a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? r = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? r = "pdf" : "#" === a.charAt(0) && (r = "inline")), 
                    c.type = r, c.index = e.group.length, c.opts.$orig && !c.opts.$orig.length && delete c.opts.$orig, 
                    !c.opts.$thumb && c.opts.$orig && (c.opts.$thumb = c.opts.$orig.find("img:first")), 
                    c.opts.$thumb && !c.opts.$thumb.length && delete c.opts.$thumb, "function" === i.type(c.opts.caption) ? c.opts.caption = c.opts.caption.apply(o, [ e, c ]) : "caption" in d && (c.opts.caption = d.caption), 
                    c.opts.caption = c.opts.caption === n ? "" : c.opts.caption + "", "ajax" === r && (l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), 
                    c.opts.filter = l.shift()), "auto" == c.opts.smallBtn && (i.inArray(r, [ "html", "inline", "ajax" ]) > -1 ? (c.opts.toolbar = !1, 
                    c.opts.smallBtn = !0) : c.opts.smallBtn = !1), "pdf" === r && (c.type = "iframe", 
                    c.opts.iframe.preload = !1), c.opts.modal && (c.opts = i.extend(!0, c.opts, {
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), e.group.push(c);
                });
            },
            addEvents: function() {
                var n = this;
                n.removeEvents(), n.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                    t.stopPropagation(), t.preventDefault(), n.close(t);
                }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(t) {
                    t.stopPropagation(), t.preventDefault(), n.previous();
                }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(t) {
                    t.stopPropagation(), t.preventDefault(), n.next();
                }), r.on("orientationchange.fb resize.fb", function(t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? h(function() {
                        n.update();
                    }) : (n.$refs.stage.hide(), setTimeout(function() {
                        n.$refs.stage.show(), n.update();
                    }, 500));
                }), a.on("focusin.fb", function(t) {
                    var o = i.fancybox ? i.fancybox.getInstance() : null;
                    o.isClosing || !o.current || !o.current.opts.trapFocus || i(t.target).hasClass("fancybox-container") || i(t.target).is(e) || o && "fixed" !== i(t.target).css("position") && !o.$refs.container.has(t.target).length && (t.stopPropagation(), 
                    o.focus(), r.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft));
                }), a.on("keydown.fb", function(t) {
                    var e = n.current, o = t.keyCode || t.which;
                    if (e && e.opts.keyboard && !i(t.target).is("input") && !i(t.target).is("textarea")) return 8 === o || 27 === o ? (t.preventDefault(), 
                    void n.close(t)) : 37 === o || 38 === o ? (t.preventDefault(), void n.previous()) : 39 === o || 40 === o ? (t.preventDefault(), 
                    void n.next()) : void n.trigger("afterKeydown", t, o);
                }), n.group[n.currIndex].opts.idleTime && (n.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function() {
                    n.idleSecondsCounter = 0, n.isIdle && n.showControls(), n.isIdle = !1;
                }), n.idleInterval = t.setInterval(function() {
                    ++n.idleSecondsCounter >= n.group[n.currIndex].opts.idleTime && (n.isIdle = !0, 
                    n.idleSecondsCounter = 0, n.hideControls());
                }, 1e3));
            },
            removeEvents: function() {
                var e = this;
                r.off("orientationchange.fb resize.fb"), a.off("focusin.fb keydown.fb .fb-idle"), 
                this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), 
                e.idleInterval = null);
            },
            previous: function(t) {
                return this.jumpTo(this.currPos - 1, t);
            },
            next: function(t) {
                return this.jumpTo(this.currPos + 1, t);
            },
            jumpTo: function(t, e, o) {
                var s, r, a, l, c, h, d, f = this, p = f.group.length;
                if (!(f.isSliding || f.isClosing || f.isAnimating && f.firstRun)) {
                    if (t = parseInt(t, 10), !(r = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= p)) return !1;
                    if (s = f.firstRun = null === f.firstRun, !(p < 2 && !s && f.isSliding)) {
                        if (l = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, a = f.createSlide(t), 
                        p > 1 && ((r || a.index > 0) && f.createSlide(t - 1), (r || a.index < p - 1) && f.createSlide(t + 1)), 
                        f.current = a, f.currIndex = a.index, f.currPos = a.pos, f.trigger("beforeShow", s), 
                        f.updateControls(), h = i.fancybox.getTranslate(a.$slide), a.isMoved = (0 !== h.left || 0 !== h.top) && !a.$slide.hasClass("fancybox-animated"), 
                        a.forcedDuration = n, i.isNumeric(e) ? a.forcedDuration = e : e = a.opts[s ? "animationDuration" : "transitionDuration"], 
                        e = parseInt(e, 10), s) return a.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), 
                        f.$refs.container.removeClass("fancybox-is-hidden"), u(f.$refs.container), f.$refs.container.addClass("fancybox-is-open"), 
                        a.$slide.addClass("fancybox-slide--current"), f.loadSlide(a), void f.preload();
                        i.each(f.slides, function(t, e) {
                            i.fancybox.stop(e.$slide);
                        }), a.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), 
                        a.isMoved ? (c = Math.round(a.$slide.width()), i.each(f.slides, function(t, n) {
                            var o = n.pos - a.pos;
                            i.fancybox.animate(n.$slide, {
                                top: 0,
                                left: o * c + o * n.opts.gutter
                            }, e, function() {
                                n.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), 
                                n.pos === f.currPos && (a.isMoved = !1, f.complete());
                            });
                        })) : f.$refs.stage.children().removeAttr("style"), a.isLoaded ? f.revealContent(a) : f.loadSlide(a), 
                        f.preload(), l.pos !== a.pos && (d = "fancybox-slide--" + (l.pos > a.pos ? "next" : "previous"), 
                        l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), 
                        l.isComplete = !1, e && (a.isMoved || a.opts.transitionEffect) && (a.isMoved ? l.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + a.opts.transitionEffect, 
                        i.fancybox.animate(l.$slide, d, e, function() {
                            l.$slide.removeClass(d).removeAttr("style");
                        }))));
                    }
                }
            },
            createSlide: function(t) {
                var e, n, o = this;
                return n = t % o.group.length, n = n < 0 ? o.group.length + n : n, !o.slides[t] && o.group[n] && (e = i('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage), 
                o.slides[t] = i.extend(!0, {}, o.group[n], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }), o.updateSlide(o.slides[t])), o.slides[t];
            },
            scaleToActual: function(t, e, o) {
                var s, r, a, l, c, h = this, d = h.current, u = d.$content, f = parseInt(d.$slide.width(), 10), p = parseInt(d.$slide.height(), 10), g = d.width, m = d.height;
                "image" != d.type || d.hasError || !u || h.isAnimating || (i.fancybox.stop(u), h.isAnimating = !0, 
                t = t === n ? .5 * f : t, e = e === n ? .5 * p : e, s = i.fancybox.getTranslate(u), 
                l = g / s.width, c = m / s.height, r = .5 * f - .5 * g, a = .5 * p - .5 * m, g > f && ((r = s.left * l - (t * l - t)) > 0 && (r = 0), 
                r < f - g && (r = f - g)), m > p && ((a = s.top * c - (e * c - e)) > 0 && (a = 0), 
                a < p - m && (a = p - m)), h.updateCursor(g, m), i.fancybox.animate(u, {
                    top: a,
                    left: r,
                    scaleX: l,
                    scaleY: c
                }, o || 330, function() {
                    h.isAnimating = !1;
                }), h.SlideShow && h.SlideShow.isActive && h.SlideShow.stop());
            },
            scaleToFit: function(t) {
                var e, n = this, o = n.current, s = o.$content;
                "image" != o.type || o.hasError || !s || n.isAnimating || (i.fancybox.stop(s), n.isAnimating = !0, 
                e = n.getFitPos(o), n.updateCursor(e.width, e.height), i.fancybox.animate(s, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / s.width(),
                    scaleY: e.height / s.height()
                }, t || 330, function() {
                    n.isAnimating = !1;
                }));
            },
            getFitPos: function(t) {
                var e, n, o, s, a, l = this, c = t.$content, h = t.width, d = t.height, u = t.opts.margin;
                return !(!c || !c.length || !h && !d) && ("number" === i.type(u) && (u = [ u, u ]), 
                2 == u.length && (u = [ u[0], u[1], u[0], u[1] ]), r.width() < 800 && (u = [ 0, 0, 0, 0 ]), 
                e = parseInt(l.$refs.stage.width(), 10) - (u[1] + u[3]), n = parseInt(l.$refs.stage.height(), 10) - (u[0] + u[2]), 
                o = Math.min(1, e / h, n / d), s = Math.floor(o * h), a = Math.floor(o * d), {
                    top: Math.floor(.5 * (n - a)) + u[0],
                    left: Math.floor(.5 * (e - s)) + u[3],
                    width: s,
                    height: a
                });
            },
            update: function() {
                var t = this;
                i.each(t.slides, function(e, i) {
                    t.updateSlide(i);
                });
            },
            updateSlide: function(t) {
                var e = this, n = t.$content;
                n && (t.width || t.height) && (i.fancybox.stop(n), i.fancybox.setTranslate(n, e.getFitPos(t)), 
                t.pos === e.currPos && e.updateCursor()), t.$slide.trigger("refresh"), e.trigger("onUpdate", t);
            },
            updateCursor: function(t, e) {
                var i, o = this, s = o.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                o.current && !o.isClosing && (o.isZoomable() ? (s.addClass("fancybox-is-zoomable"), 
                i = t !== n && e !== n ? t < o.current.width && e < o.current.height : o.isScaledDown(), 
                i ? s.addClass("fancybox-can-zoomIn") : o.current.opts.touch ? s.addClass("fancybox-can-drag") : s.addClass("fancybox-can-zoomOut")) : o.current.opts.touch && s.addClass("fancybox-can-drag"));
            },
            isZoomable: function() {
                var t, e = this, n = e.current;
                if (n && !e.isClosing) return !!("image" === n.type && n.isLoaded && !n.hasError && ("zoom" === n.opts.clickContent || i.isFunction(n.opts.clickContent) && "zoom" === n.opts.clickContent(n)) && (t = e.getFitPos(n), 
                n.width > t.width || n.height > t.height));
            },
            isScaledDown: function() {
                var t = this.current, e = t.$content, n = !1;
                return e && (n = i.fancybox.getTranslate(e), n = n.width < t.width || n.height < t.height), 
                n;
            },
            canPan: function() {
                var t = this, e = t.current, i = e.$content, n = !1;
                return i && (n = t.getFitPos(e), n = Math.abs(i.width() - n.width) > 1 || Math.abs(i.height() - n.height) > 1), 
                n;
            },
            loadSlide: function(t) {
                var e, n, o, s = this;
                if (!t.isLoading && !t.isLoaded) {
                    switch (t.isLoading = !0, s.trigger("beforeLoad", t), e = t.type, (n = t.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), 
                    e) {
                      case "image":
                        s.setImage(t);
                        break;

                      case "iframe":
                        s.setIframe(t);
                        break;

                      case "html":
                        s.setContent(t, t.src || t.content);
                        break;

                      case "inline":
                        i(t.src).length ? s.setContent(t, i(t.src)) : s.setError(t);
                        break;

                      case "ajax":
                        s.showLoading(t), o = i.ajax(i.extend({}, t.opts.ajax.settings, {
                            url: t.src,
                            success: function(e, i) {
                                "success" === i && s.setContent(t, e);
                            },
                            error: function(e, i) {
                                e && "abort" !== i && s.setError(t);
                            }
                        })), n.one("onReset", function() {
                            o.abort();
                        });
                        break;

                      default:
                        s.setError(t);
                    }
                    return !0;
                }
            },
            setImage: function(e) {
                var n, o, s, r, a = this, l = e.opts.image.srcset;
                if (l) {
                    s = t.devicePixelRatio || 1, r = t.innerWidth * s, (o = l.split(",").map(function(t) {
                        var e = {};
                        return t.trim().split(/\s+/).forEach(function(t, i) {
                            var n = parseInt(t.substring(0, t.length - 1), 10);
                            return 0 === i ? e.url = t : void (n && (e.value = n, e.postfix = t[t.length - 1]));
                        }), e;
                    })).sort(function(t, e) {
                        return t.value - e.value;
                    });
                    for (var c = 0; c < o.length; c++) {
                        var h = o[c];
                        if ("w" === h.postfix && h.value >= r || "x" === h.postfix && h.value >= s) {
                            n = h;
                            break;
                        }
                    }
                    !n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, 
                    e.width = n.value));
                }
                e.$content = i('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide), 
                !1 !== e.opts.preload && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, 
                e.height = e.opts.height, e.$ghost = i("<img />").one("error", function() {
                    i(this).remove(), e.$ghost = null, a.setBigImage(e);
                }).one("load", function() {
                    a.afterLoad(e), a.setBigImage(e);
                }).addClass("fancybox-image").appendTo(e.$content).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : a.setBigImage(e);
            },
            setBigImage: function(t) {
                var e = this, n = i("<img />");
                t.$image = n.one("error", function() {
                    e.setError(t);
                }).one("load", function() {
                    clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, 
                    t.height = this.naturalHeight, t.opts.image.srcset && n.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), 
                    e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function() {
                        t.timouts = null, t.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t));
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), n[0].complete ? n.trigger("load") : n[0].error ? n.trigger("error") : t.timouts = setTimeout(function() {
                    n[0].complete || t.hasError || e.showLoading(t);
                }, 100);
            },
            setIframe: function(t) {
                var e, o = this, s = t.opts.iframe, r = t.$slide;
                t.$content = i('<div class="fancybox-content' + (s.preload ? " fancybox-is-hidden" : "") + '"></div>').css(s.css).appendTo(r), 
                e = i(s.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(s.attr).appendTo(t.$content), 
                s.preload ? (o.showLoading(t), e.on("load.fb error.fb", function(e) {
                    this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t);
                }), r.on("refresh.fb", function() {
                    var i, o, r, a, l = t.$content;
                    if (1 === e[0].isReady) {
                        try {
                            i = e.contents().find("body");
                        } catch (t) {}
                        i && i.length && (s.css.width === n || s.css.height === n) && (o = e[0].contentWindow.document.documentElement.scrollWidth, 
                        r = Math.ceil(i.outerWidth(!0) + (l.width() - o)), a = Math.ceil(i.outerHeight(!0)), 
                        l.css({
                            width: s.css.width === n ? r + (l.outerWidth() - l.innerWidth()) : s.css.width,
                            height: s.css.height === n ? a + (l.outerHeight() - l.innerHeight()) : s.css.height
                        })), l.removeClass("fancybox-is-hidden");
                    }
                })) : this.afterLoad(t), e.attr("src", t.src), !0 === t.opts.smallBtn && t.$content.prepend(o.translate(t, t.opts.btnTpl.smallBtn)), 
                r.one("onReset", function() {
                    try {
                        i(this).find("iframe").hide().attr("src", "//about:blank");
                    } catch (t) {}
                    i(this).empty(), t.isLoaded = !1;
                });
            },
            setContent: function(t, e) {
                var n = this;
                n.isClosing || (n.hideLoading(t), t.$slide.empty(), c(e) && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), 
                t.$placeholder = i("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === i.type(e) && 3 === (e = i("<div>").append(i.trim(e)).contents())[0].nodeType && (e = i("<div>").html(e)), 
                t.opts.filter && (e = i("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                    t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), 
                    t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (i(this).empty(), 
                    t.isLoaded = !1);
                }), t.$content = i(e).appendTo(t.$slide), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = i(n.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), 
                this.afterLoad(t));
            },
            setError: function(t) {
                t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl));
            },
            showLoading: function(t) {
                var e = this;
                (t = t || e.current) && !t.$spinner && (t.$spinner = i(e.opts.spinnerTpl).appendTo(t.$slide));
            },
            hideLoading: function(t) {
                var e = this;
                (t = t || e.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner);
            },
            afterLoad: function(t) {
                var e = this;
                e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), 
                t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                    return 2 == t.button && t.preventDefault(), !0;
                }), "image" === t.type && i('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), 
                e.revealContent(t));
            },
            revealContent: function(t) {
                var e, o, s, r, a, l = this, c = t.$slide, h = !1;
                return e = t.opts[l.firstRun ? "animationEffect" : "transitionEffect"], s = t.opts[l.firstRun ? "animationDuration" : "transitionDuration"], 
                s = parseInt(t.forcedDuration === n ? s : t.forcedDuration, 10), !t.isMoved && t.pos === l.currPos && s || (e = !1), 
                "zoom" !== e || t.pos === l.currPos && s && "image" === t.type && !t.hasError && (h = l.getThumbPos(t)) || (e = "fade"), 
                "zoom" === e ? (a = l.getFitPos(t), a.scaleX = Math.round(a.width / h.width * 100) / 100, 
                a.scaleY = Math.round(a.height / h.height * 100) / 100, delete a.width, delete a.height, 
                "auto" == (r = t.opts.zoomOpacity) && (r = Math.abs(t.width / t.height - h.width / h.height) > .1), 
                r && (h.opacity = .1, a.opacity = 1), i.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), h), 
                u(t.$content), void i.fancybox.animate(t.$content, a, s, function() {
                    l.complete();
                })) : (l.updateSlide(t), e ? (i.fancybox.stop(c), o = "fancybox-animated fancybox-slide--" + (t.pos > l.prevPos ? "next" : "previous") + " fancybox-fx-" + e, 
                c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(o), 
                t.$content.removeClass("fancybox-is-hidden"), u(c), void i.fancybox.animate(c, "fancybox-slide--current", s, function(e) {
                    c.removeClass(o).removeAttr("style"), t.pos === l.currPos && l.complete();
                }, !0)) : (u(c), t.$content.removeClass("fancybox-is-hidden"), void (t.pos === l.currPos && l.complete())));
            },
            getThumbPos: function(n) {
                var o, s = this, r = !1, a = n.opts.$thumb, l = a ? a.offset() : 0;
                return l && a[0].ownerDocument === e && function(e) {
                    for (var n = e[0], o = n.getBoundingClientRect(), s = []; null !== n.parentElement; ) "hidden" !== i(n.parentElement).css("overflow") && "auto" !== i(n.parentElement).css("overflow") || s.push(n.parentElement.getBoundingClientRect()), 
                    n = n.parentElement;
                    return s.every(function(t) {
                        var e = Math.min(o.right, t.right) - Math.max(o.left, t.left), i = Math.min(o.bottom, t.bottom) - Math.max(o.top, t.top);
                        return e > 0 && i > 0;
                    }) && o.bottom > 0 && o.right > 0 && o.left < i(t).width() && o.top < i(t).height();
                }(a) && (o = s.$refs.stage.offset(), r = {
                    top: l.top - o.top + parseFloat(a.css("border-top-width") || 0),
                    left: l.left - o.left + parseFloat(a.css("border-left-width") || 0),
                    width: a.width(),
                    height: a.height(),
                    scaleX: 1,
                    scaleY: 1
                }), r;
            },
            complete: function() {
                var t = this, n = t.current, o = {};
                n.isMoved || !n.isLoaded || n.isComplete || (n.isComplete = !0, n.$slide.siblings().trigger("onReset"), 
                u(n.$slide), n.$slide.addClass("fancybox-slide--complete"), i.each(t.slides, function(e, n) {
                    n.pos >= t.currPos - 1 && n.pos <= t.currPos + 1 ? o[n.pos] = n : n && (i.fancybox.stop(n.$slide), 
                    n.$slide.unbind().remove());
                }), t.slides = o, t.updateCursor(), t.trigger("afterShow"), (i(e.activeElement).is("[disabled]") || n.opts.autoFocus && "image" != n.type && "iframe" !== n.type) && t.focus());
            },
            preload: function() {
                var t, e, i = this;
                i.group.length < 2 || (t = i.slides[i.currPos + 1], e = i.slides[i.currPos - 1], 
                t && "image" === t.type && i.loadSlide(t), e && "image" === e.type && i.loadSlide(e));
            },
            focus: function() {
                var t, e = this.current;
                this.isClosing || (t = e && e.isComplete ? e.$slide.find("button,:input,[tabindex],a").filter(":not([disabled]):visible:first") : null, 
                (t = t && t.length ? t : this.$refs.container).focus());
            },
            activate: function() {
                var t = this;
                i(".fancybox-container").each(function() {
                    var e = i(this).data("FancyBox");
                    e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate");
                }), t.current && (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body), 
                t.updateControls()), t.trigger("onActivate"), t.addEvents();
            },
            close: function(t, e) {
                var n, o, s, r, a, l, c = this, u = c.current, f = function() {
                    c.cleanUp(t);
                };
                return !(c.isClosing || (c.isClosing = !0, !1 === c.trigger("beforeClose", t) ? (c.isClosing = !1, 
                h(function() {
                    c.update();
                }), 1) : (c.removeEvents(), u.timouts && clearTimeout(u.timouts), s = u.$content, 
                n = u.opts.animationEffect, o = i.isNumeric(e) ? e : n ? u.opts.animationDuration : 0, 
                u.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), 
                u.$slide.siblings().trigger("onReset").remove(), o && c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), 
                c.hideLoading(u), c.hideControls(), c.updateCursor(), "zoom" !== n || !0 !== t && s && o && "image" === u.type && !u.hasError && (l = c.getThumbPos(u)) || (n = "fade"), 
                "zoom" === n ? (i.fancybox.stop(s), a = i.fancybox.getTranslate(s), a.width = a.width * a.scaleX, 
                a.height = a.height * a.scaleY, "auto" == (r = u.opts.zoomOpacity) && (r = Math.abs(u.width / u.height - l.width / l.height) > .1), 
                r && (l.opacity = 0), a.scaleX = a.width / l.width, a.scaleY = a.height / l.height, 
                a.width = l.width, a.height = l.height, i.fancybox.setTranslate(u.$content, a), 
                i.fancybox.animate(u.$content, l, o, f), 0) : (n && o ? !0 === t ? setTimeout(f, o) : i.fancybox.animate(u.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + n, o, f) : f(), 
                0))));
            },
            cleanUp: function(t) {
                var e, n = this;
                n.current.$slide.trigger("onReset"), n.$refs.container.empty().remove(), n.trigger("afterClose", t), 
                n.$lastFocus && !n.current.focusBack && n.$lastFocus.focus(), n.current = null, 
                (e = i.fancybox.getInstance()) ? e.activate() : (r.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft), 
                i("html").removeClass("fancybox-enabled"), i("#fancybox-style-noscroll").remove());
            },
            trigger: function(t, e) {
                var n, o = Array.prototype.slice.call(arguments, 1), s = this, r = e && e.opts ? e : s.current;
                return r ? o.unshift(r) : r = s, o.unshift(s), i.isFunction(r.opts[t]) && (n = r.opts[t].apply(r, o)), 
                !1 === n ? n : void ("afterClose" === t ? a.trigger(t + ".fb", o) : s.$refs.container.trigger(t + ".fb", o));
            },
            updateControls: function(t) {
                var e = this, n = e.current, o = n.index, s = n.opts, r = s.caption, a = e.$refs.caption;
                n.$slide.trigger("refresh"), e.$caption = r && r.length ? a.html(r) : null, e.isHiddenControls || e.showControls(), 
                i("[data-fancybox-count]").html(e.group.length), i("[data-fancybox-index]").html(o + 1), 
                i("[data-fancybox-prev]").prop("disabled", !s.loop && o <= 0), i("[data-fancybox-next]").prop("disabled", !s.loop && o >= e.group.length - 1);
            },
            hideControls: function() {
                this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav");
            },
            showControls: function() {
                var t = this, e = t.current ? t.current.opts : t.opts, i = t.$refs.container;
                t.isHiddenControls = !1, t.idleSecondsCounter = 0, i.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), 
                t.$caption ? i.addClass("fancybox-show-caption ") : i.removeClass("fancybox-show-caption");
            },
            toggleControls: function() {
                this.isHiddenControls ? this.showControls() : this.hideControls();
            }
        }), i.fancybox = {
            version: "3.1.20",
            defaults: s,
            getInstance: function(t) {
                var e = i('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"), n = Array.prototype.slice.call(arguments, 1);
                return e instanceof f && ("string" === i.type(t) ? e[t].apply(e, n) : "function" === i.type(t) && t.apply(e, n), 
                e);
            },
            open: function(t, e, i) {
                return new f(t, e, i);
            },
            close: function(t) {
                var e = this.getInstance();
                e && (e.close(), !0 === t && this.close());
            },
            destroy: function() {
                this.close(!0), a.off("click.fb-start");
            },
            isMobile: e.createTouch !== n && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
            use3d: function() {
                var i = e.createElement("div");
                return t.getComputedStyle && t.getComputedStyle(i).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11);
            }(),
            getTranslate: function(t) {
                var e;
                if (!t || !t.length) return !1;
                if (e = t.eq(0).css("transform"), e && -1 !== e.indexOf("matrix") ? (e = e.split("(")[1], 
                e = e.split(")")[0], e = e.split(",")) : e = [], e.length) e = e.length > 10 ? [ e[13], e[12], e[0], e[5] ] : [ e[5], e[4], e[0], e[3] ], 
                e = e.map(parseFloat); else {
                    e = [ 0, 0, 1, 1 ];
                    var i = /\.*translate\((.*)px,(.*)px\)/i.exec(t.eq(0).attr("style"));
                    i && (e[0] = parseFloat(i[2]), e[1] = parseFloat(i[1]));
                }
                return {
                    top: e[0],
                    left: e[1],
                    scaleX: e[2],
                    scaleY: e[3],
                    opacity: parseFloat(t.css("opacity")),
                    width: t.width(),
                    height: t.height()
                };
            },
            setTranslate: function(t, e) {
                var i = "", o = {};
                if (t && e) return e.left === n && e.top === n || (i = (e.left === n ? t.position().left : e.left) + "px, " + (e.top === n ? t.position().top : e.top) + "px", 
                i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), e.scaleX !== n && e.scaleY !== n && (i = (i.length ? i + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), 
                i.length && (o.transform = i), e.opacity !== n && (o.opacity = e.opacity), e.width !== n && (o.width = e.width), 
                e.height !== n && (o.height = e.height), t.css(o);
            },
            animate: function(t, e, o, s, r) {
                var a = d || "transitionend";
                i.isFunction(o) && (s = o, o = null), i.isPlainObject(e) || t.removeAttr("style"), 
                t.on(a, function(o) {
                    (!o || !o.originalEvent || t.is(o.originalEvent.target) && "z-index" != o.originalEvent.propertyName) && (t.off(a), 
                    i.isPlainObject(e) ? e.scaleX !== n && e.scaleY !== n && (t.css("transition-duration", "0ms"), 
                    e.width = t.width() * e.scaleX, e.height = t.height() * e.scaleY, e.scaleX = 1, 
                    e.scaleY = 1, i.fancybox.setTranslate(t, e)) : !0 !== r && t.removeClass(e), i.isFunction(s) && s(o));
                }), i.isNumeric(o) && t.css("transition-duration", o + "ms"), i.isPlainObject(e) ? i.fancybox.setTranslate(t, e) : t.addClass(e), 
                t.data("timer", setTimeout(function() {
                    t.trigger("transitionend");
                }, o + 16));
            },
            stop: function(t) {
                clearTimeout(t.data("timer")), t.off(d);
            }
        }, i.fn.fancybox = function(t) {
            var e;
            return t = t || {}, e = t.selector || !1, e ? i("body").off("click.fb-start", e).on("click.fb-start", e, {
                items: i(e),
                options: t
            }, o) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, o), this;
        }, a.on("click.fb-start", "[data-fancybox]", o);
    }
}(window, document, window.jQuery), function(t) {
    "use strict";
    var e = function(e, i, n) {
        if (e) return n = n || "", "object" === t.type(n) && (n = t.param(n, !0)), t.each(i, function(t, i) {
            e = e.replace("$" + t, i || "");
        }), n.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + n), e;
    }, i = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "//www.youtube.com/embed/$4",
            thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1,
                api: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        metacafe: {
            matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
            type: "iframe",
            url: "//www.metacafe.com/embed/$1/?ap=1"
        },
        dailymotion: {
            matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
            params: {
                additionalInfos: 0,
                autoStart: 1
            },
            type: "iframe",
            url: "//www.dailymotion.com/embed/video/$1"
        },
        vine: {
            matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
            type: "iframe",
            url: "//vine.co/v/$1/embed/simple"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        google_maps: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
            }
        }
    };
    t(document).on("onInit.fb", function(n, o) {
        t.each(o.group, function(n, o) {
            var s, r, a, l, c, h, d, u = o.src || "", f = !1;
            o.type || (s = t.extend(!0, {}, i, o.opts.media), t.each(s, function(i, n) {
                if (a = u.match(n.matcher), h = {}, d = i, a) {
                    if (f = n.type, n.paramPlace && a[n.paramPlace]) {
                        "?" == (c = a[n.paramPlace])[0] && (c = c.substring(1)), c = c.split("&");
                        for (var s = 0; s < c.length; ++s) {
                            var p = c[s].split("=", 2);
                            2 == p.length && (h[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " ")));
                        }
                    }
                    return l = t.extend(!0, {}, n.params, o.opts[i], h), u = "function" === t.type(n.url) ? n.url.call(this, a, l, o) : e(n.url, a, l), 
                    r = "function" === t.type(n.thumb) ? n.thumb.call(this, a, l, o) : e(n.thumb, a), 
                    "vimeo" === d && (u = u.replace("&%23", "#")), !1;
                }
            }), f ? (o.src = u, o.type = f, o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = r), 
            "iframe" === f && (t.extend(!0, o.opts, {
                iframe: {
                    preload: !1,
                    attr: {
                        scrolling: "no"
                    }
                }
            }), o.contentProvider = d, o.opts.slideClass += " fancybox-slide--" + ("google_maps" == d ? "map" : "video"))) : o.type = "image");
        });
    });
}(window.jQuery), function(t, e, i) {
    "use strict";
    var n = function() {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60);
        };
    }(), o = function() {
        return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
            t.clearTimeout(e);
        };
    }(), s = function(e) {
        var i = [];
        e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [ e ];
        for (var n in e) e[n].pageX ? i.push({
            x: e[n].pageX,
            y: e[n].pageY
        }) : e[n].clientX && i.push({
            x: e[n].clientX,
            y: e[n].clientY
        });
        return i;
    }, r = function(t, e, i) {
        return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;
    }, a = function(t) {
        if (t.is("a,button,input,select,textarea") || i.isFunction(t.get(0).onclick)) return !0;
        for (var e = 0, n = t[0].attributes, o = n.length; e < o; e++) if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return !0;
        return !1;
    }, l = function(e) {
        var i = t.getComputedStyle(e)["overflow-y"], n = t.getComputedStyle(e)["overflow-x"], o = ("scroll" === i || "auto" === i) && e.scrollHeight > e.clientHeight, s = ("scroll" === n || "auto" === n) && e.scrollWidth > e.clientWidth;
        return o || s;
    }, c = function(t) {
        for (var e = !1; !(e = l(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")); ) ;
        return e;
    }, h = function(t) {
        var e = this;
        e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, 
        e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(e, "ontouchstart"));
    };
    h.prototype.destroy = function() {
        this.$container.off(".fb.touch");
    }, h.prototype.ontouchstart = function(n) {
        var o = this, l = i(n.target), h = o.instance, d = h.current, u = d.$content, f = "touchstart" == n.type;
        if (f && o.$container.off("mousedown.fb.touch"), !d || o.instance.isAnimating || o.instance.isClosing) return n.stopPropagation(), 
        void n.preventDefault();
        if ((!n.originalEvent || 2 != n.originalEvent.button) && l.length && !a(l) && !a(l.parent()) && !(n.originalEvent.clientX > l[0].clientWidth + l.offset().left) && (o.startPoints = s(n), 
        o.startPoints && !(o.startPoints.length > 1 && h.isSliding))) {
            if (o.$target = l, o.$content = u, o.canTap = !0, i(e).off(".fb.touch"), i(e).on(f ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(o, "ontouchend")), 
            i(e).on(f ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(o, "ontouchmove")), 
            n.stopPropagation(), !h.current.opts.touch && !h.canPan() || !l.is(o.$stage) && !o.$stage.find(l).length) return void (l.is("img") && n.preventDefault());
            i.fancybox.isMobile && (c(o.$target) || c(o.$target.parent())) || n.preventDefault(), 
            o.canvasWidth = Math.round(d.$slide[0].clientWidth), o.canvasHeight = Math.round(d.$slide[0].clientHeight), 
            o.startTime = new Date().getTime(), o.distanceX = o.distanceY = o.distance = 0, 
            o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.sliderStartPos = o.sliderLastPos || {
                top: 0,
                left: 0
            }, o.contentStartPos = i.fancybox.getTranslate(o.$content), o.contentLastPos = null, 
            1 !== o.startPoints.length || o.isZooming || (o.canTap = !h.isSliding, "image" === d.type && (o.contentStartPos.width > o.canvasWidth + 1 || o.contentStartPos.height > o.canvasHeight + 1) ? (i.fancybox.stop(o.$content), 
            o.$content.css("transition-duration", "0ms"), o.isPanning = !0) : o.isSwiping = !0, 
            o.$container.addClass("fancybox-controls--isGrabbing")), 2 !== o.startPoints.length || h.isAnimating || d.hasError || "image" !== d.type || !d.isLoaded && !d.$ghost || (o.isZooming = !0, 
            o.isSwiping = !1, o.isPanning = !1, i.fancybox.stop(o.$content), o.$content.css("transition-duration", "0ms"), 
            o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - i(t).scrollLeft(), 
            o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - i(t).scrollTop(), 
            o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, 
            o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, 
            o.startDistanceBetweenFingers = r(o.startPoints[0], o.startPoints[1]));
        }
    }, h.prototype.ontouchmove = function(t) {
        var e = this;
        if (e.newPoints = s(t), i.fancybox.isMobile && (c(e.$target) || c(e.$target.parent()))) return t.stopPropagation(), 
        void (e.canTap = !1);
        if ((e.instance.current.opts.touch || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.distanceX = r(e.newPoints[0], e.startPoints[0], "x"), 
        e.distanceY = r(e.newPoints[0], e.startPoints[0], "y"), e.distance = r(e.newPoints[0], e.startPoints[0]), 
        e.distance > 0)) {
            if (!e.$target.is(e.$stage) && !e.$stage.find(e.$target).length) return;
            t.stopPropagation(), t.preventDefault(), e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom();
        }
    }, h.prototype.onSwipe = function() {
        var e, s = this, r = s.isSwiping, a = s.sliderStartPos.left || 0;
        !0 === r ? Math.abs(s.distance) > 10 && (s.canTap = !1, s.instance.group.length < 2 && s.instance.opts.touch.vertical ? s.isSwiping = "y" : s.instance.isSliding || !1 === s.instance.opts.touch.vertical || "auto" === s.instance.opts.touch.vertical && i(t).width() > 800 ? s.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), 
        s.isSwiping = e > 45 && e < 135 ? "y" : "x"), s.instance.isSliding = s.isSwiping, 
        s.startPoints = s.newPoints, i.each(s.instance.slides, function(t, e) {
            i.fancybox.stop(e.$slide), e.$slide.css("transition-duration", "0ms"), e.inTransition = !1, 
            e.pos === s.instance.current.pos && (s.sliderStartPos.left = i.fancybox.getTranslate(e.$slide).left);
        }), s.instance.SlideShow && s.instance.SlideShow.isActive && s.instance.SlideShow.stop()) : ("x" == r && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? a += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? a -= Math.pow(-s.distanceX, .8) : a += s.distanceX), 
        s.sliderLastPos = {
            top: "x" == r ? 0 : s.sliderStartPos.top + s.distanceY,
            left: a
        }, s.requestId && (o(s.requestId), s.requestId = null), s.requestId = n(function() {
            s.sliderLastPos && (i.each(s.instance.slides, function(t, e) {
                var n = e.pos - s.instance.currPos;
                i.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left: s.sliderLastPos.left + n * s.canvasWidth + n * e.opts.gutter
                });
            }), s.$container.addClass("fancybox-is-sliding"));
        }));
    }, h.prototype.onPan = function() {
        var t, e, s, r = this;
        r.canTap = !1, t = r.contentStartPos.width > r.canvasWidth ? r.contentStartPos.left + r.distanceX : r.contentStartPos.left, 
        e = r.contentStartPos.top + r.distanceY, (s = r.limitMovement(t, e, r.contentStartPos.width, r.contentStartPos.height)).scaleX = r.contentStartPos.scaleX, 
        s.scaleY = r.contentStartPos.scaleY, r.contentLastPos = s, r.requestId && (o(r.requestId), 
        r.requestId = null), r.requestId = n(function() {
            i.fancybox.setTranslate(r.$content, r.contentLastPos);
        });
    }, h.prototype.limitMovement = function(t, e, i, n) {
        var o, s, r, a, l = this, c = l.canvasWidth, h = l.canvasHeight, d = l.contentStartPos.left, u = l.contentStartPos.top, f = l.distanceX, p = l.distanceY;
        return o = Math.max(0, .5 * c - .5 * i), s = Math.max(0, .5 * h - .5 * n), r = Math.min(c - i, .5 * c - .5 * i), 
        a = Math.min(h - n, .5 * h - .5 * n), i > c && (f > 0 && t > o && (t = o - 1 + Math.pow(-o + d + f, .8) || 0), 
        f < 0 && t < r && (t = r + 1 - Math.pow(r - d - f, .8) || 0)), n > h && (p > 0 && e > s && (e = s - 1 + Math.pow(-s + u + p, .8) || 0), 
        p < 0 && e < a && (e = a + 1 - Math.pow(a - u - p, .8) || 0)), {
            top: e,
            left: t
        };
    }, h.prototype.limitPosition = function(t, e, i, n) {
        var o = this, s = o.canvasWidth, r = o.canvasHeight;
        return i > s ? (t = t > 0 ? 0 : t, t = t < s - i ? s - i : t) : t = Math.max(0, s / 2 - i / 2), 
        n > r ? (e = e > 0 ? 0 : e, e = e < r - n ? r - n : e) : e = Math.max(0, r / 2 - n / 2), 
        {
            top: e,
            left: t
        };
    }, h.prototype.onZoom = function() {
        var e = this, s = e.contentStartPos.width, a = e.contentStartPos.height, l = e.contentStartPos.left, c = e.contentStartPos.top, h = r(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers, d = Math.floor(s * h), u = Math.floor(a * h), f = (s - d) * e.percentageOfImageAtPinchPointX, p = (a - u) * e.percentageOfImageAtPinchPointY, g = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft(), m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop(), v = g - e.centerPointStartX, y = {
            top: c + (p + (m - e.centerPointStartY)),
            left: l + (f + v),
            scaleX: e.contentStartPos.scaleX * h,
            scaleY: e.contentStartPos.scaleY * h
        };
        e.canTap = !1, e.newWidth = d, e.newHeight = u, e.contentLastPos = y, e.requestId && (o(e.requestId), 
        e.requestId = null), e.requestId = n(function() {
            i.fancybox.setTranslate(e.$content, e.contentLastPos);
        });
    }, h.prototype.ontouchend = function(t) {
        var n = this, r = Math.max(new Date().getTime() - n.startTime, 1), a = n.isSwiping, l = n.isPanning, c = n.isZooming;
        return n.endPoints = s(t), n.$container.removeClass("fancybox-controls--isGrabbing"), 
        i(e).off(".fb.touch"), n.requestId && (o(n.requestId), n.requestId = null), n.isSwiping = !1, 
        n.isPanning = !1, n.isZooming = !1, n.canTap ? n.onTap(t) : (n.speed = 366, n.velocityX = n.distanceX / r * .5, 
        n.velocityY = n.distanceY / r * .5, n.speedX = Math.max(.5 * n.speed, Math.min(1.5 * n.speed, 1 / Math.abs(n.velocityX) * n.speed)), 
        void (l ? n.endPanning() : c ? n.endZooming() : n.endSwiping(a)));
    }, h.prototype.endSwiping = function(t) {
        var e = this, n = !1;
        e.instance.isSliding = !1, e.sliderLastPos = null, "y" == t && Math.abs(e.distanceY) > 50 ? (i.fancybox.animate(e.instance.current.$slide, {
            top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
            opacity: 0
        }, 150), n = e.instance.close(!0, 300)) : "x" == t && e.distanceX > 50 && e.instance.group.length > 1 ? n = e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 && e.instance.group.length > 1 && (n = e.instance.next(e.speedX)), 
        !1 !== n || "x" != t && "y" != t || e.instance.jumpTo(e.instance.current.index, 150), 
        e.$container.removeClass("fancybox-is-sliding");
    }, h.prototype.endPanning = function() {
        var t, e, n, o = this;
        o.contentLastPos && (!1 === o.instance.current.opts.touch.momentum ? (t = o.contentLastPos.left, 
        e = o.contentLastPos.top) : (t = o.contentLastPos.left + o.velocityX * o.speed, 
        e = o.contentLastPos.top + o.velocityY * o.speed), n = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height), 
        n.width = o.contentStartPos.width, n.height = o.contentStartPos.height, i.fancybox.animate(o.$content, n, 330));
    }, h.prototype.endZooming = function() {
        var t, e, n, o, s = this, r = s.instance.current, a = s.newWidth, l = s.newHeight;
        s.contentLastPos && (t = s.contentLastPos.left, e = s.contentLastPos.top, o = {
            top: e,
            left: t,
            width: a,
            height: l,
            scaleX: 1,
            scaleY: 1
        }, i.fancybox.setTranslate(s.$content, o), a < s.canvasWidth && l < s.canvasHeight ? s.instance.scaleToFit(150) : a > r.width || l > r.height ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150) : (n = s.limitPosition(t, e, a, l), 
        i.fancybox.setTranslate(s.content, i.fancybox.getTranslate(s.$content)), i.fancybox.animate(s.$content, n, 150)));
    }, h.prototype.onTap = function(t) {
        var e, n = this, o = i(t.target), r = n.instance, a = r.current, l = t && s(t) || n.startPoints, c = l[0] ? l[0].x - n.$stage.offset().left : 0, h = l[0] ? l[0].y - n.$stage.offset().top : 0, d = function(e) {
            var o = a.opts[e];
            if (i.isFunction(o) && (o = o.apply(r, [ a, t ])), o) switch (o) {
              case "close":
                r.close(n.startEvent);
                break;

              case "toggleControls":
                r.toggleControls(!0);
                break;

              case "next":
                r.next();
                break;

              case "nextOrClose":
                r.group.length > 1 ? r.next() : r.close(n.startEvent);
                break;

              case "zoom":
                "image" == a.type && (a.isLoaded || a.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(c, h) : r.group.length < 2 && r.close(n.startEvent));
            }
        };
        if (!(t.originalEvent && 2 == t.originalEvent.button || r.isSliding || c > o[0].clientWidth + o.offset().left)) {
            if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside"; else if (o.is(".fancybox-slide")) e = "Slide"; else {
                if (!r.current.$content || !r.current.$content.has(t.target).length) return;
                e = "Content";
            }
            if (n.tapped) {
                if (clearTimeout(n.tapped), n.tapped = null, Math.abs(c - n.tapX) > 50 || Math.abs(h - n.tapY) > 50 || r.isSliding) return this;
                d("dblclick" + e);
            } else n.tapX = c, n.tapY = h, a.opts["dblclick" + e] && a.opts["dblclick" + e] !== a.opts["click" + e] ? n.tapped = setTimeout(function() {
                n.tapped = null, d("click" + e);
            }, 300) : d("click" + e);
            return this;
        }
    }, i(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new h(e));
    }), i(e).on("beforeClose.fb", function(t, e) {
        e && e.Guestures && e.Guestures.destroy();
    });
}(window, document, window.jQuery), function(t, e) {
    "use strict";
    var i = function(t) {
        this.instance = t, this.init();
    };
    e.extend(i.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        speed: 3e3,
        init: function() {
            var t = this;
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle();
            }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide();
        },
        set: function() {
            var t = this;
            t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {
                t.instance.next();
            }, t.instance.current.opts.slideShow.speed || t.speed) : (t.stop(), t.instance.idleSecondsCounter = 0, 
            t.instance.showControls());
        },
        clear: function() {
            var t = this;
            clearTimeout(t.timer), t.timer = null;
        },
        start: function() {
            var t = this, e = t.instance.current;
            t.instance && e && (e.opts.loop || e.index < t.instance.group.length - 1) && (t.isActive = !0, 
            t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"), 
            e.isComplete && t.set());
        },
        stop: function() {
            var t = this, e = t.instance.current;
            t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause"), 
            t.isActive = !1;
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start();
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new i(e));
        },
        "beforeShow.fb": function(t, e, i, n) {
            var o = e && e.SlideShow;
            n ? o && i.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear();
        },
        "afterShow.fb": function(t, e, i) {
            var n = e && e.SlideShow;
            n && n.isActive && n.set();
        },
        "afterKeydown.fb": function(i, n, o, s, r) {
            var a = n && n.SlideShow;
            !a || !o.opts.slideShow || 80 !== r && 32 !== r || e(t.activeElement).is("button,a,input") || (s.preventDefault(), 
            a.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var i = e && e.SlideShow;
            i && i.stop();
        }
    }), e(t).on("visibilitychange", function() {
        var i = e.fancybox.getInstance(), n = i && i.SlideShow;
        n && n.isActive && (t.hidden ? n.clear() : n.set());
    });
}(document, window.jQuery), function(t, e) {
    "use strict";
    var i = function() {
        var e, i, n, o = [ [ "requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror" ], [ "webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror" ], [ "webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror" ], [ "mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror" ], [ "msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError" ] ], s = {};
        for (i = 0; i < o.length; i++) if ((e = o[i]) && e[1] in t) {
            for (n = 0; n < e.length; n++) s[o[0][n]] = e[n];
            return s;
        }
        return !1;
    }();
    if (i) {
        var n = {
            request: function(e) {
                (e = e || t.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
            },
            exit: function() {
                t[i.exitFullscreen]();
            },
            toggle: function(e) {
                e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e);
            },
            isFullscreen: function() {
                return Boolean(t[i.fullscreenElement]);
            },
            enabled: function() {
                return Boolean(t[i.fullscreenEnabled]);
            }
        };
        e(t).on({
            "onInit.fb": function(t, e) {
                var i, o = e.$refs.toolbar.find("[data-fancybox-fullscreen]");
                e && !e.FullScreen && e.group[e.currIndex].opts.fullScreen ? ((i = e.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                    t.stopPropagation(), t.preventDefault(), n.toggle(i[0]);
                }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && n.request(i[0]), 
                e.FullScreen = n) : o.hide();
            },
            "afterKeydown.fb": function(t, e, i, n, o) {
                e && e.FullScreen && 70 === o && (n.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]));
            },
            "beforeClose.fb": function(t) {
                t && t.FullScreen && n.exit();
            }
        }), e(t).on(i.fullscreenchange, function() {
            var t = e.fancybox.getInstance();
            t.current && "image" === t.current.type && t.isAnimating && (t.current.$content.css("transition", "none"), 
            t.isAnimating = !1, t.update(!0, !0, 0));
        });
    } else e.fancybox.defaults.btnTpl.fullScreen = !1;
}(document, window.jQuery), function(t, e) {
    "use strict";
    var i = function(t) {
        this.instance = t, this.init();
    };
    e.extend(i.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        init: function() {
            var t = this, e = t.instance.group[0], i = t.instance.group[1];
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"), t.instance.group.length > 1 && t.instance.group[t.instance.currIndex].opts.thumbs && ("image" == e.type || e.opts.thumb || e.opts.$thumb) && ("image" == i.type || i.opts.thumb || i.opts.$thumb) ? (t.$button.on("click", function() {
                t.toggle();
            }), t.isActive = !0) : (t.$button.hide(), t.isActive = !1);
        },
        create: function() {
            var t, i, n = this.instance;
            this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(n.$refs.container), 
            t = "<ul>", e.each(n.group, function(e, n) {
                (i = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null)) || "image" !== n.type || (i = n.src), 
                i && i.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + i + '" /></li>');
            }), t += "</ul>", this.$list = e(t).appendTo(this.$grid).on("click", "li", function() {
                n.jumpTo(e(this).data("index"));
            }), this.$list.find("img").hide().one("load", function() {
                var t, i, n, o, s = e(this).parent().removeClass("fancybox-thumbs-loading"), r = s.outerWidth(), a = s.outerHeight();
                t = this.naturalWidth || this.width, o = (i = this.naturalHeight || this.height) / a, 
                (n = t / r) >= 1 && o >= 1 && (n > o ? (t /= o, i = a) : (t = r, i /= n)), e(this).css({
                    width: Math.floor(t),
                    height: Math.floor(i),
                    "margin-top": Math.min(0, Math.floor(.3 * a - .3 * i)),
                    "margin-left": Math.min(0, Math.floor(.5 * r - .5 * t))
                }).show();
            }).each(function() {
                this.src = e(this).data("src");
            });
        },
        focus: function() {
            this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus();
        },
        close: function() {
            this.$grid.hide();
        },
        update: function() {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), 
            this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), 
            this.focus()) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update();
        },
        hide: function() {
            this.isVisible = !1, this.update();
        },
        show: function() {
            this.isVisible = !0, this.update();
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update();
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.Thumbs && (e.Thumbs = new i(e));
        },
        "beforeShow.fb": function(t, e, i, n) {
            var o = e && e.Thumbs;
            if (o && o.isActive) {
                if (i.modal) return o.$button.hide(), void o.hide();
                n && !0 === e.opts.thumbs.autoStart && o.show(), o.isVisible && o.focus();
            }
        },
        "afterKeydown.fb": function(t, e, i, n, o) {
            var s = e && e.Thumbs;
            s && s.isActive && 71 === o && (n.preventDefault(), s.toggle());
        },
        "beforeClose.fb": function(t, e) {
            var i = e && e.Thumbs;
            i && i.isVisible && !1 !== e.opts.thumbs.hideOnClose && i.close();
        }
    });
}(document, window.jQuery), function(t, e, i) {
    "use strict";
    function n() {
        var t = e.location.hash.substr(1), i = t.split("-"), n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) ? parseInt(i.pop(-1), 10) || 1 : 1, o = i.join("-");
        return n < 1 && (n = 1), {
            hash: t,
            index: n,
            gallery: o
        };
    }
    function o(t) {
        var e;
        "" !== t.gallery && (e = i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1), 
        e.length ? e.trigger("click") : i("#" + i.escapeSelector(t.gallery)).trigger("click"));
    }
    function s(t) {
        var e;
        return !!t && (e = t.current ? t.current.opts : t.opts, e.$orig ? e.$orig.data("fancybox") : e.hash || "");
    }
    i.escapeSelector || (i.escapeSelector = function(t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, i = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
        };
        return (t + "").replace(e, i);
    });
    var r = null, a = null;
    i(function() {
        setTimeout(function() {
            !1 !== i.fancybox.defaults.hash && (i(t).on({
                "onInit.fb": function(t, e) {
                    var i, o;
                    !1 !== e.group[e.currIndex].opts.hash && (i = n(), (o = s(e)) && i.gallery && o == i.gallery && (e.currIndex = i.index - 1));
                },
                "beforeShow.fb": function(i, n, o, l) {
                    var c;
                    !1 !== o.opts.hash && (c = s(n)) && "" !== c && (e.location.hash.indexOf(c) < 0 && (n.opts.origHash = e.location.hash), 
                    r = c + (n.group.length > 1 ? "-" + (o.index + 1) : ""), "replaceState" in e.history ? (a && clearTimeout(a), 
                    a = setTimeout(function() {
                        e.history[l ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + r), 
                        a = null;
                    }, 300)) : e.location.hash = r);
                },
                "beforeClose.fb": function(n, o, l) {
                    var c, h;
                    a && clearTimeout(a), !1 !== l.opts.hash && (c = s(o), h = o && o.opts.origHash ? o.opts.origHash : "", 
                    c && "" !== c && ("replaceState" in history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + h) : (e.location.hash = h, 
                    i(e).scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))), r = null);
                }
            }), i(e).on("hashchange.fb", function() {
                var t = n();
                i.fancybox.getInstance() ? !r || r === t.gallery + "-" + t.index || 1 === t.index && r == t.gallery || (r = null, 
                i.fancybox.close()) : "" !== t.gallery && o(t);
            }), i(e).one("unload.fb popstate.fb", function() {
                i.fancybox.getInstance("close", !0, 0);
            }), o(n()));
        }, 50);
    });
}(document, window, window.jQuery), function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", [ "jquery" ], function(i) {
        return e(t, i);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function(t, e) {
    "use strict";
    function i(i, s, a) {
        function l(t, e, n) {
            var o, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, l) {
                var c = a.data(l, i);
                if (c) {
                    var h = c[e];
                    if (h && "_" != e.charAt(0)) {
                        var d = h.apply(c, n);
                        o = void 0 === o ? d : o;
                    } else r(s + " is not a valid method");
                } else r(i + " not initialized. Cannot call methods, i.e. " + s);
            }), void 0 !== o ? o : t;
        }
        function c(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o));
            });
        }
        (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
        }), a.fn[i] = function(t) {
            return "string" == typeof t ? l(this, t, o.call(arguments, 1)) : (c(this, t), this);
        }, n(a));
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i);
    }
    var o = Array.prototype.slice, s = t.console, r = void 0 === s ? function() {} : function(t) {
        s.error(t);
    };
    return n(e || t.jQuery), i;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this;
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this;
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this;
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var s = i[o];
                n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e);
            }
            return this;
        }
    }, e.allOff = function() {
        delete this._events, delete this._onceEvents;
    }, t;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e();
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e();
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    function e() {}
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; e < c; e++) t[l[e]] = 0;
        return t;
    }
    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), 
        e;
    }
    function o() {
        if (!h) {
            h = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", 
            e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            s.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e);
        }
    }
    function s(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var s = n(e);
            if ("none" == s.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var h = a.isBorderBox = "border-box" == s.boxSizing, d = 0; d < c; d++) {
                var u = l[d], f = s[u], p = parseFloat(f);
                a[u] = isNaN(p) ? 0 : p;
            }
            var g = a.paddingLeft + a.paddingRight, m = a.paddingTop + a.paddingBottom, v = a.marginLeft + a.marginRight, y = a.marginTop + a.marginBottom, b = a.borderLeftWidth + a.borderRightWidth, x = a.borderTopWidth + a.borderBottomWidth, w = h && r, S = t(s.width);
            !1 !== S && (a.width = S + (w ? 0 : g + b));
            var C = t(s.height);
            return !1 !== C && (a.height = C + (w ? 0 : m + x)), a.innerWidth = a.width - (g + b), 
            a.innerHeight = a.height - (m + x), a.outerWidth = a.width + v, a.outerHeight = a.height + y, 
            a;
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
        console.error(t);
    }, l = [ "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth" ], c = l.length, h = !1;
    return s;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = [ "webkit", "moz", "ms", "o" ], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n]) return n;
        }
    }();
    return function(e, i) {
        return e[t](i);
    };
}), function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", [ "desandro-matches-selector/matches-selector" ], function(i) {
        return e(t, i);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t;
    }, i.modulo = function(t, e) {
        return (t % e + e) % e;
    }, i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t; else if (t && "object" == typeof t && "number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]); else e.push(t);
        return e;
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
    }, i.getParent = function(t, i) {
        for (;t.parentNode && t != document.body; ) if (t = t.parentNode, e(t, i)) return t;
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t;
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
    }, i.filterFindElements = function(t, n) {
        var o = [];
        return (t = i.makeArray(t)).forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s]);
            }
        }), o;
    }, i.debounceMethod = function(t, e, i) {
        var n = t.prototype[e], o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments, s = this;
            this[o] = setTimeout(function() {
                n.apply(s, e), delete s[o];
            }, i || 100);
        };
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i;
        }).toLowerCase();
    };
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var s = i.toDashed(o), r = "data-" + s, a = document.querySelectorAll("[" + r + "]"), l = document.querySelectorAll(".js-" + s), c = i.makeArray(a).concat(i.makeArray(l)), h = r + "-options", d = t.jQuery;
            c.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(h);
                try {
                    i = s && JSON.parse(s);
                } catch (e) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + e));
                }
                var a = new e(t, i);
                d && d.data(t, o, a);
            });
        });
    }, i;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/cell", [ "get-size/get-size" ], function(i) {
        return e(t, i);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, 
    t.Flickity.Cell = e(t, t.getSize));
}(window, function(t, e) {
    function i(t, e) {
        this.element = t, this.parent = e, this.create();
    }
    var n = i.prototype;
    return n.create = function() {
        this.element.style.position = "absolute", this.x = 0, this.shift = 0;
    }, n.destroy = function() {
        this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = "";
    }, n.getSize = function() {
        this.size = e(this.element);
    }, n.setPosition = function(t) {
        this.x = t, this.updateTarget(), this.renderPosition(t);
    }, n.updateTarget = n.setDefaultTarget = function() {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign;
    }, n.renderPosition = function(t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t);
    }, n.wrapShift = function(t) {
        this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t);
    }, n.remove = function() {
        this.element.parentNode.removeChild(this.element);
    }, i;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, 
    t.Flickity.Slide = e());
}(window, function() {
    "use strict";
    function t(t) {
        this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, 
        this.height = 0;
    }
    var e = t.prototype;
    return e.addCell = function(t) {
        if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 
        1 == this.cells.length) {
            this.x = t.x;
            var e = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = t.size[e];
        }
    }, e.updateTarget = function() {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft", e = this.getLastCell(), i = e ? e.size[t] : 0, n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
    }, e.getLastCell = function() {
        return this.cells[this.cells.length - 1];
    }, e.select = function() {
        this.changeSelectedClass("add");
    }, e.unselect = function() {
        this.changeSelectedClass("remove");
    }, e.changeSelectedClass = function(t) {
        this.cells.forEach(function(e) {
            e.element.classList[t]("is-selected");
        });
    }, e.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element;
        });
    }, t;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/animate", [ "fizzy-ui-utils/utils" ], function(i) {
        return e(t, i);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, 
    t.Flickity.animatePrototype = e(t, t.fizzyUIUtils));
}(window, function(t, e) {
    var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame, n = 0;
    i || (i = function(t) {
        var e = new Date().getTime(), i = Math.max(0, 16 - (e - n)), o = setTimeout(t, i);
        return n = e + i, o;
    });
    var o = {};
    o.startAnimation = function() {
        this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate());
    }, o.animate = function() {
        this.applyDragForce(), this.applySelectedAttraction();
        var t = this.x;
        if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
            var e = this;
            i(function() {
                e.animate();
            });
        }
    };
    var s = function() {
        return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform";
    }();
    return o.positionSlider = function() {
        var t = this.x;
        this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), 
        t -= this.slideableWidth, this.shiftWrapCells(t)), t += this.cursorPosition, t = this.options.rightToLeft && s ? -t : t;
        var i = this.getPositionValue(t);
        this.slider.style[s] = this.isAnimating ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
        var n = this.slides[0];
        if (n) {
            var o = -this.x - n.target, r = o / this.slidesWidth;
            this.dispatchEvent("scroll", null, [ r, o ]);
        }
    }, o.positionSliderAtSelected = function() {
        this.cells.length && (this.x = -this.selectedSlide.target, this.positionSlider());
    }, o.getPositionValue = function(t) {
        return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px";
    }, o.settle = function(t) {
        this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, 
        this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), 
        this.dispatchEvent("settle"));
    }, o.shiftWrapCells = function(t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1);
    }, o._shiftCells = function(t, e, i) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n], s = e > 0 ? i : 0;
            o.wrapShift(s), e -= o.size.outerWidth;
        }
    }, o._unshiftCells = function(t) {
        if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
    }, o.integratePhysics = function() {
        this.x += this.velocity, this.velocity *= this.getFrictionFactor();
    }, o.applyForce = function(t) {
        this.velocity += t;
    }, o.getFrictionFactor = function() {
        return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
    }, o.getRestingPosition = function() {
        return this.x + this.velocity / (1 - this.getFrictionFactor());
    }, o.applyDragForce = function() {
        if (this.isPointerDown) {
            var t = this.dragX - this.x - this.velocity;
            this.applyForce(t);
        }
    }, o.applySelectedAttraction = function() {
        if (!this.isPointerDown && !this.isFreeScrolling && this.cells.length) {
            var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
            this.applyForce(t);
        }
    }, o;
}), function(t, e) {
    if ("function" == typeof define && define.amd) define("flickity/js/flickity", [ "ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate" ], function(i, n, o, s, r, a) {
        return e(t, i, n, o, s, r, a);
    }); else if ("object" == typeof module && module.exports) module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate")); else {
        var i = t.Flickity;
        t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype);
    }
}(window, function(t, e, i, n, o, s, r) {
    function a(t, e) {
        for (t = n.makeArray(t); t.length; ) e.appendChild(t.shift());
    }
    function l(t, e) {
        var i = n.getQueryElement(t);
        if (i) {
            if (this.element = i, this.element.flickityGUID) {
                var o = f[this.element.flickityGUID];
                return o.option(e), o;
            }
            c && (this.$element = c(this.element)), this.options = n.extend({}, this.constructor.defaults), 
            this.option(e), this._create();
        } else d && d.error("Bad element for Flickity: " + (i || t));
    }
    var c = t.jQuery, h = t.getComputedStyle, d = t.console, u = 0, f = {};
    l.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: .075,
        friction: .28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: .025,
        setGallerySize: !0
    }, l.createMethods = [];
    var p = l.prototype;
    n.extend(p, e.prototype), p._create = function() {
        var e = this.guid = ++u;
        this.element.flickityGUID = e, f[e] = this, this.selectedIndex = 0, this.restingFrames = 0, 
        this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", 
        this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", 
        this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), 
        l.createMethods.forEach(function(t) {
            this[t]();
        }, this), this.options.watchCSS ? this.watchCSS() : this.activate();
    }, p.option = function(t) {
        n.extend(this.options, t);
    }, p.activate = function() {
        if (!this.isActive) {
            this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), 
            this.getSize(), a(this._filterFindCellElements(this.element.children), this.slider), 
            this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), 
            this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), 
            this.emitEvent("activate");
            var t, e = this.options.initialIndex;
            t = this.isInitActivated ? this.selectedIndex : void 0 !== e && this.cells[e] ? e : 0, 
            this.select(t, !1, !0), this.isInitActivated = !0;
        }
    }, p._createSlider = function() {
        var t = document.createElement("div");
        t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t;
    }, p._filterFindCellElements = function(t) {
        return n.filterFindElements(t, this.options.cellSelector);
    }, p.reloadCells = function() {
        this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), 
        this.setGallerySize();
    }, p._makeCells = function(t) {
        return this._filterFindCellElements(t).map(function(t) {
            return new o(t, this);
        }, this);
    }, p.getLastCell = function() {
        return this.cells[this.cells.length - 1];
    }, p.getLastSlide = function() {
        return this.slides[this.slides.length - 1];
    }, p.positionCells = function() {
        this._sizeCells(this.cells), this._positionCells(0);
    }, p._positionCells = function(t) {
        t = t || 0, this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
        var e = 0;
        if (t > 0) {
            var i = this.cells[t - 1];
            e = i.x + i.size.outerWidth;
        }
        for (var n = this.cells.length, o = t; o < n; o++) {
            var s = this.cells[o];
            s.setPosition(e), e += s.size.outerWidth, this.maxCellHeight = Math.max(s.size.outerHeight, this.maxCellHeight);
        }
        this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0;
    }, p._sizeCells = function(t) {
        t.forEach(function(t) {
            t.getSize();
        });
    }, p.updateSlides = function() {
        if (this.slides = [], this.cells.length) {
            var t = new s(this);
            this.slides.push(t);
            var e = "left" == this.originSide ? "marginRight" : "marginLeft", i = this._getCanCellFit();
            this.cells.forEach(function(n, o) {
                if (t.cells.length) {
                    var r = t.outerWidth - t.firstMargin + (n.size.outerWidth - n.size[e]);
                    i.call(this, o, r) ? t.addCell(n) : (t.updateTarget(), t = new s(this), this.slides.push(t), 
                    t.addCell(n));
                } else t.addCell(n);
            }, this), t.updateTarget(), this.updateSelectedSlide();
        }
    }, p._getCanCellFit = function() {
        var t = this.options.groupCells;
        if (!t) return function() {
            return !1;
        };
        if ("number" == typeof t) {
            var e = parseInt(t, 10);
            return function(t) {
                return t % e != 0;
            };
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/), n = i ? parseInt(i[1], 10) / 100 : 1;
        return function(t, e) {
            return e <= (this.size.innerWidth + 1) * n;
        };
    }, p._init = p.reposition = function() {
        this.positionCells(), this.positionSliderAtSelected();
    }, p.getSize = function() {
        this.size = i(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign;
    };
    var g = {
        center: {
            left: .5,
            right: .5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    return p.setCellAlign = function() {
        var t = g[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
    }, p.setGallerySize = function() {
        if (this.options.setGallerySize) {
            var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = t + "px";
        }
    }, p._getWrapShiftCells = function() {
        if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
            var t = this.cursorPosition, e = this.cells.length - 1;
            this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, 
            this.afterShiftCells = this._getGapCells(t, 0, 1);
        }
    }, p._getGapCells = function(t, e, i) {
        for (var n = []; t > 0; ) {
            var o = this.cells[e];
            if (!o) break;
            n.push(o), e += i, t -= o.size.outerWidth;
        }
        return n;
    }, p._containSlides = function() {
        if (this.options.contain && !this.options.wrapAround && this.cells.length) {
            var t = this.options.rightToLeft, e = t ? "marginRight" : "marginLeft", i = t ? "marginLeft" : "marginRight", n = this.slideableWidth - this.getLastCell().size[i], o = n < this.size.innerWidth, s = this.cursorPosition + this.cells[0].size[e], r = n - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach(function(t) {
                o ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, s), t.target = Math.min(t.target, r));
            }, this);
        }
    }, p.dispatchEvent = function(t, e, i) {
        var n = e ? [ e ].concat(i) : i;
        if (this.emitEvent(t, n), c && this.$element) {
            var o = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
            if (e) {
                var s = c.Event(e);
                s.type = t, o = s;
            }
            this.$element.trigger(o, i);
        }
    }, p.select = function(t, e, i) {
        this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)), 
        this.slides[t] && (this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), 
        this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select"), 
        this.dispatchEvent("cellSelect")));
    }, p._wrapSelect = function(t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && e > 1)) return t;
        var i = n.modulo(t, e), o = Math.abs(i - this.selectedIndex), s = Math.abs(i + e - this.selectedIndex), r = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && s < o ? t += e : !this.isDragSelect && r < o && (t -= e), 
        t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth);
    }, p.previous = function(t, e) {
        this.select(this.selectedIndex - 1, t, e);
    }, p.next = function(t, e) {
        this.select(this.selectedIndex + 1, t, e);
    }, p.updateSelectedSlide = function() {
        var t = this.slides[this.selectedIndex];
        t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, 
        this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0]);
    }, p.unselectSelectedSlide = function() {
        this.selectedSlide && this.selectedSlide.unselect();
    }, p.selectCell = function(t, e, i) {
        var n;
        "number" == typeof t ? n = this.cells[t] : ("string" == typeof t && (t = this.element.querySelector(t)), 
        n = this.getCell(t));
        for (var o = 0; n && o < this.slides.length; o++) if (-1 != this.slides[o].cells.indexOf(n)) return void this.select(o, e, i);
    }, p.getCell = function(t) {
        for (var e = 0; e < this.cells.length; e++) {
            var i = this.cells[e];
            if (i.element == t) return i;
        }
    }, p.getCells = function(t) {
        var e = [];
        return (t = n.makeArray(t)).forEach(function(t) {
            var i = this.getCell(t);
            i && e.push(i);
        }, this), e;
    }, p.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element;
        });
    }, p.getParentCell = function(t) {
        var e = this.getCell(t);
        return e || (t = n.getParent(t, ".flickity-slider > *"), this.getCell(t));
    }, p.getAdjacentCellElements = function(t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (1 + 2 * t >= i) return this.getCellElements();
        for (var o = [], s = e - t; s <= e + t; s++) {
            var r = this.options.wrapAround ? n.modulo(s, i) : s, a = this.slides[r];
            a && (o = o.concat(a.getCellElements()));
        }
        return o;
    }, p.uiChange = function() {
        this.emitEvent("uiChange");
    }, p.childUIPointerDown = function(t) {
        this.emitEvent("childUIPointerDown", [ t ]);
    }, p.onresize = function() {
        this.watchCSS(), this.resize();
    }, n.debounceMethod(l, "onresize", 150), p.resize = function() {
        if (this.isActive) {
            this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), 
            this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
            var t = this.selectedElements && this.selectedElements[0];
            this.selectCell(t, !1, !0);
        }
    }, p.watchCSS = function() {
        this.options.watchCSS && (-1 != h(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate());
    }, p.onkeydown = function(t) {
        if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element)) if (37 == t.keyCode) {
            var e = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(), this[e]();
        } else if (39 == t.keyCode) {
            var i = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(), this[i]();
        }
    }, p.deactivate = function() {
        this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), 
        this.cells.forEach(function(t) {
            t.destroy();
        }), this.unselectSelectedSlide(), this.element.removeChild(this.viewport), a(this.slider.children, this.element), 
        this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), 
        this.isActive = !1, this.emitEvent("deactivate"));
    }, p.destroy = function() {
        this.deactivate(), t.removeEventListener("resize", this), this.emitEvent("destroy"), 
        c && this.$element && c.removeData(this.element, "flickity"), delete this.element.flickityGUID, 
        delete f[this.guid];
    }, n.extend(p, r), l.data = function(t) {
        var e = (t = n.getQueryElement(t)) && t.flickityGUID;
        return e && f[e];
    }, n.htmlInit(l, "flickity"), c && c.bridget && c.bridget("flickity", l), l.setJQuery = function(t) {
        c = t;
    }, l.Cell = o, l;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", [ "ev-emitter/ev-emitter" ], function(i) {
        return e(t, i);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.Unipointer = e(t, t.EvEmitter);
}(window, function(t, e) {
    function i() {}
    function n() {}
    var o = n.prototype = Object.create(e.prototype);
    o.bindStartEvent = function(t) {
        this._bindStartEvent(t, !0);
    }, o.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1);
    }, o._bindStartEvent = function(t, e) {
        var i = (e = void 0 === e || !!e) ? "addEventListener" : "removeEventListener";
        t[i]("mousedown", this), t[i]("touchstart", this);
    }, o.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
    }, o.getTouch = function(t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.identifier == this.pointerIdentifier) return i;
        }
    }, o.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t);
    }, o.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0]);
    }, o.onpointerdown = function(t) {
        this._pointerDown(t, t);
    }, o._pointerDown = function(t, e) {
        this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, 
        this.pointerDown(t, e));
    }, o.pointerDown = function(t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [ t, e ]);
    };
    var s = {
        mousedown: [ "mousemove", "mouseup" ],
        touchstart: [ "touchmove", "touchend", "touchcancel" ],
        pointerdown: [ "pointermove", "pointerup", "pointercancel" ]
    };
    return o._bindPostStartEvents = function(e) {
        if (e) {
            var i = s[e.type];
            i.forEach(function(e) {
                t.addEventListener(e, this);
            }, this), this._boundPointerEvents = i;
        }
    }, o._unbindPostStartEvents = function() {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function(e) {
            t.removeEventListener(e, this);
        }, this), delete this._boundPointerEvents);
    }, o.onmousemove = function(t) {
        this._pointerMove(t, t);
    }, o.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
    }, o.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e);
    }, o._pointerMove = function(t, e) {
        this.pointerMove(t, e);
    }, o.pointerMove = function(t, e) {
        this.emitEvent("pointerMove", [ t, e ]);
    }, o.onmouseup = function(t) {
        this._pointerUp(t, t);
    }, o.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
    }, o.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e);
    }, o._pointerUp = function(t, e) {
        this._pointerDone(), this.pointerUp(t, e);
    }, o.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [ t, e ]);
    }, o._pointerDone = function() {
        this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), 
        this.pointerDone();
    }, o.pointerDone = i, o.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
    }, o.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e);
    }, o._pointerCancel = function(t, e) {
        this._pointerDone(), this.pointerCancel(t, e);
    }, o.pointerCancel = function(t, e) {
        this.emitEvent("pointerCancel", [ t, e ]);
    }, n.getPointerPoint = function(t) {
        return {
            x: t.pageX,
            y: t.pageY
        };
    }, n;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", [ "unipointer/unipointer" ], function(i) {
        return e(t, i);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.Unidragger = e(t, t.Unipointer);
}(window, function(t, e) {
    function i() {}
    var n = i.prototype = Object.create(e.prototype);
    return n.bindHandles = function() {
        this._bindHandles(!0);
    }, n.unbindHandles = function() {
        this._bindHandles(!1);
    }, n._bindHandles = function(e) {
        for (var i = (e = void 0 === e || !!e) ? "addEventListener" : "removeEventListener", n = 0; n < this.handles.length; n++) {
            var o = this.handles[n];
            this._bindStartEvent(o, e), o[i]("click", this), t.PointerEvent && (o.style.touchAction = e ? this._touchActionValue : "");
        }
    }, n._touchActionValue = "none", n.pointerDown = function(t, e) {
        if ("INPUT" == t.target.nodeName && "range" == t.target.type) return this.isPointerDown = !1, 
        void delete this.pointerIdentifier;
        this._dragPointerDown(t, e);
        var i = document.activeElement;
        i && i.blur && i.blur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [ t, e ]);
    }, n._dragPointerDown = function(t, i) {
        this.pointerDownPoint = e.getPointerPoint(i), this.canPreventDefaultOnPointerDown(t, i) && t.preventDefault();
    }, n.canPreventDefaultOnPointerDown = function(t) {
        return "SELECT" != t.target.nodeName;
    }, n.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [ t, e, i ]), this._dragMove(t, e, i);
    }, n._dragPointerMove = function(t, i) {
        var n = e.getPointerPoint(i), o = {
            x: n.x - this.pointerDownPoint.x,
            y: n.y - this.pointerDownPoint.y
        };
        return !this.isDragging && this.hasDragStarted(o) && this._dragStart(t, i), o;
    }, n.hasDragStarted = function(t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
    }, n.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [ t, e ]), this._dragPointerUp(t, e);
    }, n._dragPointerUp = function(t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
    }, n._dragStart = function(t, i) {
        this.isDragging = !0, this.dragStartPoint = e.getPointerPoint(i), this.isPreventingClicks = !0, 
        this.dragStart(t, i);
    }, n.dragStart = function(t, e) {
        this.emitEvent("dragStart", [ t, e ]);
    }, n._dragMove = function(t, e, i) {
        this.isDragging && this.dragMove(t, e, i);
    }, n.dragMove = function(t, e, i) {
        t.preventDefault(), this.emitEvent("dragMove", [ t, e, i ]);
    }, n._dragEnd = function(t, e) {
        this.isDragging = !1, setTimeout(function() {
            delete this.isPreventingClicks;
        }.bind(this)), this.dragEnd(t, e);
    }, n.dragEnd = function(t, e) {
        this.emitEvent("dragEnd", [ t, e ]);
    }, n.onclick = function(t) {
        this.isPreventingClicks && t.preventDefault();
    }, n._staticClick = function(t, e) {
        if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
            var i = t.target.nodeName;
            "INPUT" != i && "TEXTAREA" != i || t.target.focus(), this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, 
            setTimeout(function() {
                delete this.isIgnoringMouseUp;
            }.bind(this), 400));
        }
    }, n.staticClick = function(t, e) {
        this.emitEvent("staticClick", [ t, e ]);
    }, i.getPointerPoint = e.getPointerPoint, i;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/drag", [ "./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils" ], function(i, n, o) {
        return e(t, i, n, o);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils);
}(window, function(t, e, i, n) {
    function o(t) {
        var e = d[t.type], i = u[t.target.nodeName];
        return e || i;
    }
    function s() {
        return {
            x: t.pageXOffset,
            y: t.pageYOffset
        };
    }
    n.extend(e.defaults, {
        draggable: !0,
        dragThreshold: 3
    }), e.createMethods.push("_createDrag");
    var r = e.prototype;
    n.extend(r, i.prototype), r._touchActionValue = "pan-y";
    var a = "createTouch" in document, l = !1;
    r._createDrag = function() {
        this.on("activate", this.bindDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), 
        this.on("deactivate", this.unbindDrag), a && !l && (t.addEventListener("touchmove", function() {}), 
        l = !0);
    }, r.bindDrag = function() {
        this.options.draggable && !this.isDragBound && (this.element.classList.add("is-draggable"), 
        this.handles = [ this.viewport ], this.bindHandles(), this.isDragBound = !0);
    }, r.unbindDrag = function() {
        this.isDragBound && (this.element.classList.remove("is-draggable"), this.unbindHandles(), 
        delete this.isDragBound);
    }, r._uiChangeDrag = function() {
        delete this.isFreeScrolling;
    }, r._childUIPointerDownDrag = function(t) {
        t.preventDefault(), this.pointerDownFocus(t);
    };
    var c = {
        TEXTAREA: !0,
        INPUT: !0,
        OPTION: !0
    }, h = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0
    };
    r.pointerDown = function(e, i) {
        if (c[e.target.nodeName] && !h[e.target.type]) return this.isPointerDown = !1, void delete this.pointerIdentifier;
        this._dragPointerDown(e, i);
        var n = document.activeElement;
        n && n.blur && n != this.element && n != document.body && n.blur(), this.pointerDownFocus(e), 
        this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this._bindPostStartEvents(e), 
        this.pointerDownScroll = s(), t.addEventListener("scroll", this), this.dispatchEvent("pointerDown", e, [ i ]);
    }, r.pointerDownFocus = function(e) {
        var i = o(e);
        if (this.options.accessibility && !i) {
            var n = t.pageYOffset;
            this.element.focus(), t.pageYOffset != n && t.scrollTo(t.pageXOffset, n);
        }
    };
    var d = {
        touchstart: !0,
        pointerdown: !0
    }, u = {
        INPUT: !0,
        SELECT: !0
    };
    return r.canPreventDefaultOnPointerDown = function(t) {
        return !o(t);
    }, r.hasDragStarted = function(t) {
        return Math.abs(t.x) > this.options.dragThreshold;
    }, r.pointerUp = function(t, e) {
        delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), 
        this.dispatchEvent("pointerUp", t, [ e ]), this._dragPointerUp(t, e);
    }, r.pointerDone = function() {
        t.removeEventListener("scroll", this), delete this.pointerDownScroll;
    }, r.dragStart = function(e, i) {
        this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), 
        this.dispatchEvent("dragStart", e, [ i ]);
    }, r.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [ e, i ]), this._dragMove(t, e, i);
    }, r.dragMove = function(t, e, i) {
        t.preventDefault(), this.previousDragX = this.dragX;
        var n = this.options.rightToLeft ? -1 : 1, o = this.dragStartPosition + i.x * n;
        if (!this.options.wrapAround && this.slides.length) {
            var s = Math.max(-this.slides[0].target, this.dragStartPosition);
            o = o > s ? .5 * (o + s) : o;
            var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
            o = o < r ? .5 * (o + r) : o;
        }
        this.dragX = o, this.dragMoveTime = new Date(), this.dispatchEvent("dragMove", t, [ e, i ]);
    }, r.dragEnd = function(t, e) {
        this.options.freeScroll && (this.isFreeScrolling = !0);
        var i = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
            var n = this.getRestingPosition();
            this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target;
        } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
        delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), 
        delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [ e ]);
    }, r.dragEndRestingSelect = function() {
        var t = this.getRestingPosition(), e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)), i = this._getClosestResting(t, e, 1), n = this._getClosestResting(t, e, -1);
        return i.distance < n.distance ? i.index : n.index;
    }, r._getClosestResting = function(t, e, i) {
        for (var n = this.selectedIndex, o = 1 / 0, s = this.options.contain && !this.options.wrapAround ? function(t, e) {
            return t <= e;
        } : function(t, e) {
            return t < e;
        }; s(e, o) && (n += i, o = e, null !== (e = this.getSlideDistance(-t, n))); ) e = Math.abs(e);
        return {
            distance: o,
            index: n - i
        };
    }, r.getSlideDistance = function(t, e) {
        var i = this.slides.length, o = this.options.wrapAround && i > 1, s = o ? n.modulo(e, i) : e, r = this.slides[s];
        if (!r) return null;
        var a = o ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (r.target + a);
    }, r.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || new Date() - this.dragMoveTime > 100) return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex), e = this.previousDragX - this.dragX;
        return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0;
    }, r.staticClick = function(t, e) {
        var i = this.getParentCell(t.target), n = i && i.element, o = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [ e, n, o ]);
    }, r.onscroll = function() {
        var t = s(), e = this.pointerDownScroll.x - t.x, i = this.pointerDownScroll.y - t.y;
        (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone();
    }, e;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("tap-listener/tap-listener", [ "unipointer/unipointer" ], function(i) {
        return e(t, i);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.TapListener = e(t, t.Unipointer);
}(window, function(t, e) {
    function i(t) {
        this.bindTap(t);
    }
    var n = i.prototype = Object.create(e.prototype);
    return n.bindTap = function(t) {
        t && (this.unbindTap(), this.tapElement = t, this._bindStartEvent(t, !0));
    }, n.unbindTap = function() {
        this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement);
    }, n.pointerUp = function(i, n) {
        if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
            var o = e.getPointerPoint(n), s = this.tapElement.getBoundingClientRect(), r = t.pageXOffset, a = t.pageYOffset;
            if (o.x >= s.left + r && o.x <= s.right + r && o.y >= s.top + a && o.y <= s.bottom + a && this.emitEvent("tap", [ i, n ]), 
            "mouseup" != i.type) {
                this.isIgnoringMouseUp = !0;
                var l = this;
                setTimeout(function() {
                    delete l.isIgnoringMouseUp;
                }, 400);
            }
        }
    }, n.destroy = function() {
        this.pointerDone(), this.unbindTap();
    }, i;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", [ "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils" ], function(i, n, o) {
        return e(t, i, n, o);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
}(window, function(t, e, i, n) {
    "use strict";
    function o(t, e) {
        this.direction = t, this.parent = e, this._create();
    }
    function s(t) {
        return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z";
    }
    var r = "http://www.w3.org/2000/svg";
    o.prototype = new i(), o.prototype._create = function() {
        this.isEnabled = !0, this.isPrevious = -1 == this.direction;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        e.className = "flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", 
        e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "previous" : "next");
        var i = this.createSVG();
        e.appendChild(i), this.on("tap", this.onTap), this.parent.on("select", this.update.bind(this)), 
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
    }, o.prototype.activate = function() {
        this.bindTap(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element);
    }, o.prototype.deactivate = function() {
        this.parent.element.removeChild(this.element), i.prototype.destroy.call(this), this.element.removeEventListener("click", this);
    }, o.prototype.createSVG = function() {
        var t = document.createElementNS(r, "svg");
        t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(r, "path"), i = s(this.parent.options.arrowShape);
        return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), 
        t.appendChild(e), t;
    }, o.prototype.onTap = function() {
        if (this.isEnabled) {
            this.parent.uiChange();
            var t = this.isPrevious ? "previous" : "next";
            this.parent[t]();
        }
    }, o.prototype.handleEvent = n.handleEvent, o.prototype.onclick = function() {
        var t = document.activeElement;
        t && t == this.element && this.onTap();
    }, o.prototype.enable = function() {
        this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0);
    }, o.prototype.disable = function() {
        this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1);
    }, o.prototype.update = function() {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && t.length > 1) this.enable(); else {
            var e = t.length ? t.length - 1 : 0, i = this.isPrevious ? 0 : e;
            this[this.parent.selectedIndex == i ? "disable" : "enable"]();
        }
    }, o.prototype.destroy = function() {
        this.deactivate();
    }, n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    }), e.createMethods.push("_createPrevNextButtons");
    var a = e.prototype;
    return a._createPrevNextButtons = function() {
        this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), 
        this.on("activate", this.activatePrevNextButtons));
    }, a.activatePrevNextButtons = function() {
        this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons);
    }, a.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons);
    }, e.PrevNextButton = o, e;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", [ "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils" ], function(i, n, o) {
        return e(t, i, n, o);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
}(window, function(t, e, i, n) {
    function o(t) {
        this.parent = t, this._create();
    }
    o.prototype = new i(), o.prototype._create = function() {
        this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", 
        this.dots = [], this.on("tap", this.onTap), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
    }, o.prototype.activate = function() {
        this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder);
    }, o.prototype.deactivate = function() {
        this.parent.element.removeChild(this.holder), i.prototype.destroy.call(this);
    }, o.prototype.setDots = function() {
        var t = this.parent.slides.length - this.dots.length;
        t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t);
    }, o.prototype.addDots = function(t) {
        for (var e = document.createDocumentFragment(), i = []; t; ) {
            var n = document.createElement("li");
            n.className = "dot", e.appendChild(n), i.push(n), t--;
        }
        this.holder.appendChild(e), this.dots = this.dots.concat(i);
    }, o.prototype.removeDots = function(t) {
        this.dots.splice(this.dots.length - t, t).forEach(function(t) {
            this.holder.removeChild(t);
        }, this);
    }, o.prototype.updateSelected = function() {
        this.selectedDot && (this.selectedDot.className = "dot"), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], 
        this.selectedDot.className = "dot is-selected");
    }, o.prototype.onTap = function(t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(e);
            this.parent.select(i);
        }
    }, o.prototype.destroy = function() {
        this.deactivate();
    }, e.PageDots = o, n.extend(e.defaults, {
        pageDots: !0
    }), e.createMethods.push("_createPageDots");
    var s = e.prototype;
    return s._createPageDots = function() {
        this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), 
        this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), 
        this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots));
    }, s.activatePageDots = function() {
        this.pageDots.activate();
    }, s.updateSelectedPageDots = function() {
        this.pageDots.updateSelected();
    }, s.updatePageDots = function() {
        this.pageDots.setDots();
    }, s.deactivatePageDots = function() {
        this.pageDots.deactivate();
    }, e.PageDots = o, e;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/player", [ "ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity" ], function(t, i, n) {
        return e(t, i, n);
    }) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
}(window, function(t, e, i) {
    function n(t) {
        this.parent = t, this.state = "stopped", s && (this.onVisibilityChange = function() {
            this.visibilityChange();
        }.bind(this), this.onVisibilityPlay = function() {
            this.visibilityPlay();
        }.bind(this));
    }
    var o, s;
    "hidden" in document ? (o = "hidden", s = "visibilitychange") : "webkitHidden" in document && (o = "webkitHidden", 
    s = "webkitvisibilitychange"), n.prototype = Object.create(t.prototype), n.prototype.play = function() {
        if ("playing" != this.state) {
            var t = document[o];
            if (s && t) return void document.addEventListener(s, this.onVisibilityPlay);
            this.state = "playing", s && document.addEventListener(s, this.onVisibilityChange), 
            this.tick();
        }
    }, n.prototype.tick = function() {
        if ("playing" == this.state) {
            var t = this.parent.options.autoPlay;
            t = "number" == typeof t ? t : 3e3;
            var e = this;
            this.clear(), this.timeout = setTimeout(function() {
                e.parent.next(!0), e.tick();
            }, t);
        }
    }, n.prototype.stop = function() {
        this.state = "stopped", this.clear(), s && document.removeEventListener(s, this.onVisibilityChange);
    }, n.prototype.clear = function() {
        clearTimeout(this.timeout);
    }, n.prototype.pause = function() {
        "playing" == this.state && (this.state = "paused", this.clear());
    }, n.prototype.unpause = function() {
        "paused" == this.state && this.play();
    }, n.prototype.visibilityChange = function() {
        this[document[o] ? "pause" : "unpause"]();
    }, n.prototype.visibilityPlay = function() {
        this.play(), document.removeEventListener(s, this.onVisibilityPlay);
    }, e.extend(i.defaults, {
        pauseAutoPlayOnHover: !0
    }), i.createMethods.push("_createPlayer");
    var r = i.prototype;
    return r._createPlayer = function() {
        this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), 
        this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer);
    }, r.activatePlayer = function() {
        this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this));
    }, r.playPlayer = function() {
        this.player.play();
    }, r.stopPlayer = function() {
        this.player.stop();
    }, r.pausePlayer = function() {
        this.player.pause();
    }, r.unpausePlayer = function() {
        this.player.unpause();
    }, r.deactivatePlayer = function() {
        this.player.stop(), this.element.removeEventListener("mouseenter", this);
    }, r.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this));
    }, r.onmouseleave = function() {
        this.player.unpause(), this.element.removeEventListener("mouseleave", this);
    }, i.Player = n, i;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", [ "./flickity", "fizzy-ui-utils/utils" ], function(i, n) {
        return e(t, i, n);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils);
}(window, function(t, e, i) {
    function n(t) {
        var e = document.createDocumentFragment();
        return t.forEach(function(t) {
            e.appendChild(t.element);
        }), e;
    }
    var o = e.prototype;
    return o.insert = function(t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
            var o = this.cells.length;
            e = void 0 === e ? o : e;
            var s = n(i), r = e == o;
            if (r) this.slider.appendChild(s); else {
                var a = this.cells[e].element;
                this.slider.insertBefore(s, a);
            }
            if (0 === e) this.cells = i.concat(this.cells); else if (r) this.cells = this.cells.concat(i); else {
                var l = this.cells.splice(e, o - e);
                this.cells = this.cells.concat(i).concat(l);
            }
            this._sizeCells(i);
            var c = e > this.selectedIndex ? 0 : i.length;
            this._cellAddedRemoved(e, c);
        }
    }, o.append = function(t) {
        this.insert(t, this.cells.length);
    }, o.prepend = function(t) {
        this.insert(t, 0);
    }, o.remove = function(t) {
        var e, n, o = this.getCells(t), s = 0, r = o.length;
        for (e = 0; e < r; e++) n = o[e], s -= this.cells.indexOf(n) < this.selectedIndex ? 1 : 0;
        for (e = 0; e < r; e++) (n = o[e]).remove(), i.removeFrom(this.cells, n);
        o.length && this._cellAddedRemoved(0, s);
    }, o._cellAddedRemoved = function(t, e) {
        e = e || 0, this.selectedIndex += e, this.selectedIndex = Math.max(0, Math.min(this.slides.length - 1, this.selectedIndex)), 
        this.cellChange(t, !0), this.emitEvent("cellAddedRemoved", [ t, e ]);
    }, o.cellSizeChange = function(t) {
        var e = this.getCell(t);
        if (e) {
            e.getSize();
            var i = this.cells.indexOf(e);
            this.cellChange(i);
        }
    }, o.cellChange = function(t, e) {
        var i = this.slideableWidth;
        if (this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("cellChange", [ t ]), 
        this.options.freeScroll) {
            var n = i - this.slideableWidth;
            this.x += n * this.cellAlign, this.positionSlider();
        } else e && this.positionSliderAtSelected(), this.select(this.selectedIndex);
    }, e;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", [ "./flickity", "fizzy-ui-utils/utils" ], function(i, n) {
        return e(t, i, n);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils);
}(window, function(t, e, i) {
    "use strict";
    function n(t) {
        if ("IMG" == t.nodeName && t.getAttribute("data-flickity-lazyload")) return [ t ];
        var e = t.querySelectorAll("img[data-flickity-lazyload]");
        return i.makeArray(e);
    }
    function o(t, e) {
        this.img = t, this.flickity = e, this.load();
    }
    e.createMethods.push("_createLazyload");
    var s = e.prototype;
    return s._createLazyload = function() {
        this.on("select", this.lazyLoad);
    }, s.lazyLoad = function() {
        var t = this.options.lazyLoad;
        if (t) {
            var e = "number" == typeof t ? t : 0, i = [];
            this.getAdjacentCellElements(e).forEach(function(t) {
                var e = n(t);
                i = i.concat(e);
            }), i.forEach(function(t) {
                new o(t, this);
            }, this);
        }
    }, o.prototype.handleEvent = i.handleEvent, o.prototype.load = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), 
        this.img.src = this.img.getAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload");
    }, o.prototype.onload = function(t) {
        this.complete(t, "flickity-lazyloaded");
    }, o.prototype.onerror = function(t) {
        this.complete(t, "flickity-lazyerror");
    }, o.prototype.complete = function(t, e) {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img), n = i && i.element;
        this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n);
    }, e.LazyLoader = o, e;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/index", [ "./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload" ], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")));
}(window, function(t) {
    return t;
}), function(t, e) {
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", [ "flickity/js/index", "fizzy-ui-utils/utils" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils);
}(window, function(t, e) {
    function i(t, e, i) {
        return (e - t) * i + t;
    }
    t.createMethods.push("_createAsNavFor");
    var n = t.prototype;
    return n._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), 
        this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
            var e = this;
            setTimeout(function() {
                e.setNavCompanion(t);
            });
        }
    }, n.setNavCompanion = function(i) {
        i = e.getQueryElement(i);
        var n = t.data(i);
        if (n && n != this) {
            this.navCompanion = n;
            var o = this;
            this.onNavCompanionSelect = function() {
                o.navCompanionSelect();
            }, n.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), 
            this.navCompanionSelect(!0);
        }
    }, n.navCompanionSelect = function(t) {
        if (this.navCompanion) {
            var e = this.navCompanion.selectedCells[0], n = this.navCompanion.cells.indexOf(e), o = n + this.navCompanion.selectedCells.length - 1, s = Math.floor(i(n, o, this.navCompanion.cellAlign));
            if (this.selectCell(s, !1, t), this.removeNavSelectedElements(), !(s >= this.cells.length)) {
                var r = this.cells.slice(n, o + 1);
                this.navSelectedElements = r.map(function(t) {
                    return t.element;
                }), this.changeNavSelectedClass("add");
            }
        }
    }, n.changeNavSelectedClass = function(t) {
        this.navSelectedElements.forEach(function(e) {
            e.classList[t]("is-nav-selected");
        });
    }, n.activateAsNavFor = function() {
        this.navCompanionSelect(!0);
    }, n.removeNavSelectedElements = function() {
        this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements);
    }, n.onNavStaticClick = function(t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n);
    }, n.deactivateAsNavFor = function() {
        this.removeNavSelectedElements();
    }, n.destroyAsNavFor = function() {
        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), 
        this.off("staticClick", this.onNavStaticClick), delete this.navCompanion);
    }, t;
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", [ "ev-emitter/ev-emitter" ], function(i) {
        return e(t, i);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter);
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t, e) {
        for (var i in e) t[i] = e[i];
        return t;
    }
    function n(t) {
        var e = [];
        if (Array.isArray(t)) e = t; else if ("number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]); else e.push(t);
        return e;
    }
    function o(t, e, s) {
        return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), 
        this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? s = e : i(this.options, e), 
        s && this.on("always", s), this.getImages(), a && (this.jqDeferred = new a.Deferred()), 
        void setTimeout(function() {
            this.check();
        }.bind(this))) : new o(t, e, s);
    }
    function s(t) {
        this.img = t;
    }
    function r(t, e) {
        this.url = t, this.element = e, this.img = new Image();
    }
    var a = t.jQuery, l = t.console;
    o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this);
    }, o.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o);
            }
            if ("string" == typeof this.options.background) {
                var s = t.querySelectorAll(this.options.background);
                for (n = 0; n < s.length; n++) {
                    var r = s[n];
                    this.addElementBackgroundImages(r);
                }
            }
        }
    };
    var c = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
            var o = n && n[2];
            o && this.addBackground(o, t), n = i.exec(e.backgroundImage);
        }
    }, o.prototype.addImage = function(t) {
        var e = new s(t);
        this.images.push(e);
    }, o.prototype.addBackground = function(t, e) {
        var i = new r(t, e);
        this.images.push(i);
    }, o.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n);
            });
        }
        var e = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t), e.check();
        }) : void this.complete();
    }, o.prototype.progress = function(t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [ this, t, e ]), 
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), 
        this.options.debug && l && l.log("progress: " + i, t, e);
    }, o.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [ this ]), this.emitEvent("always", [ this ]), 
        this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this);
        }
    }, s.prototype = Object.create(e.prototype), s.prototype.check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), 
        this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), 
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), 
        void (this.proxyImage.src = this.img.src));
    }, s.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth;
    }, s.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [ this, this.img, e ]);
    }, s.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
    }, s.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents();
    }, s.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents();
    }, s.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), 
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
    }, r.prototype = Object.create(s.prototype), r.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), 
        this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), 
        this.unbindEvents());
    }, r.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
    }, r.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [ this, this.element, e ]);
    }, o.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery) && (a = e, a.fn.imagesLoaded = function(t, e) {
            return new o(this, t, e).jqDeferred.promise(a(this));
        });
    }, o.makeJQueryPlugin(), o;
}), function(t, e) {
    "function" == typeof define && define.amd ? define([ "flickity/js/index", "imagesloaded/imagesloaded" ], function(i, n) {
        return e(t, i, n);
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded);
}(window, function(t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return n._createImagesLoaded = function() {
        this.on("activate", this.imagesLoaded);
    }, n.imagesLoaded = function() {
        function t(t, i) {
            var n = e.getParentCell(i.img);
            e.cellSizeChange(n && n.element), e.options.freeScroll || e.positionSliderAtSelected();
        }
        if (this.options.imagesLoaded) {
            var e = this;
            i(this.slider).on("progress", t);
        }
    }, e;
});