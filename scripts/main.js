"use strict";
const VERSION = "v1.0",
    DEFAULT_AUTO_MODEL = "SmolLM2-360M-Instruct-q4f16_1-MLC",
    MODELS = [{
        id: "SmolLM2-360M-Instruct-q4f16_1-MLC",
        name: "SmolLM2 360M",
        params: "360M",
        size: "~200MB",
        rec: "Instant · Auto-loaded",
        p: "local",
        ctx: 2048,
        cat: "small",
        free: !0
    }, {
        id: "Qwen2.5-0.5B-Instruct-q4f16_1-MLC",
        name: "Qwen 2.5 0.5B",
        params: "500M",
        size: "~380MB",
        rec: "Ultra-lightweight",
        p: "local",
        ctx: 4096,
        cat: "small",
        free: !0
    }, {
        id: "Llama-3.2-1B-Instruct-q4f16_1-MLC",
        name: "Llama 3.2 1B",
        params: "1B",
        size: "~700MB",
        rec: "Fastest Llama",
        p: "local",
        ctx: 4096,
        cat: "small",
        free: !0
    }, {
        id: "TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC",
        name: "TinyLlama 1.1B",
        params: "1.1B",
        size: "~800MB",
        rec: "Minimal footprint",
        p: "local",
        ctx: 2048,
        cat: "small",
        free: !0
    }, {
        id: "Llama-3.2-3B-Instruct-q4f16_1-MLC",
        name: "Llama 3.2 3B",
        params: "3B",
        size: "~2GB",
        rec: "Best balance · Recommended",
        p: "local",
        ctx: 4096,
        cat: "recommended",
        free: !0
    }, {
        id: "Phi-3.5-mini-instruct-q4f16_1-MLC",
        name: "Phi 3.5 Mini",
        params: "3.8B",
        size: "~2.2GB",
        rec: "Strong reasoning",
        p: "local",
        ctx: 4096,
        cat: "recommended",
        free: !0
    }, {
        id: "gemma-2-2b-it-q4f16_1-MLC",
        name: "Gemma 2 2B",
        params: "2B",
        size: "~1.5GB",
        rec: "Google local model",
        p: "local",
        ctx: 4096,
        cat: "recommended",
        free: !0
    }, {
        id: "Qwen2.5-3B-Instruct-q4f16_1-MLC",
        name: "Qwen 2.5 3B",
        params: "3B",
        size: "~2GB",
        rec: "Balanced Qwen",
        p: "local",
        ctx: 8192,
        cat: "recommended",
        free: !0
    }, {
        id: "Mistral-7B-Instruct-v0.3-q4f16_1-MLC",
        name: "Mistral 7B v0.3",
        params: "7B",
        size: "~4.2GB",
        rec: "Strong · Desktop",
        p: "local",
        ctx: 4096,
        cat: "recommended",
        free: !0
    }, {
        id: "Qwen2.5-Coder-1.5B-Instruct-q4f16_1-MLC",
        name: "Qwen 2.5 Coder 1.5B",
        params: "1.5B",
        size: "~1GB",
        rec: "Lightweight coder",
        p: "local",
        ctx: 4096,
        cat: "coding",
        free: !0
    }, {
        id: "Qwen2.5-Coder-3B-Instruct-q4f16_1-MLC",
        name: "Qwen 2.5 Coder 3B",
        params: "3B",
        size: "~2.2GB",
        rec: "Fast code · Recommended",
        p: "local",
        ctx: 8192,
        cat: "coding",
        free: !0
    }, {
        id: "Qwen2.5-Coder-7B-Instruct-q4f16_1-MLC",
        name: "Qwen 2.5 Coder 7B",
        params: "7B",
        size: "~4.8GB",
        rec: "Advanced · Desktop",
        p: "local",
        ctx: 8192,
        cat: "coding",
        free: !0
    }, {
        id: "deepseek-coder-6.7b-instruct-q4f32_1-MLC",
        name: "DeepSeek Coder 6.7B",
        params: "6.7B",
        size: "~5GB",
        rec: "Strong logic · Desktop",
        p: "local",
        ctx: 4096,
        cat: "coding",
        free: !0
    }, {
        id: "Llama-3.1-8B-Instruct-q4f16_1-MLC",
        name: "Llama 3.1 8B",
        params: "8B",
        size: "~4.7GB",
        rec: "Desktop recommended",
        p: "local",
        ctx: 8192,
        cat: "large",
        free: !0
    }, {
        id: "Llama-3-8B-Instruct-q4f16_1-MLC",
        name: "Llama 3 8B",
        params: "8B",
        size: "~4.5GB",
        rec: "Original Llama 3",
        p: "local",
        ctx: 8192,
        cat: "large",
        free: !0
    }, {
        id: "Hermes-2-Pro-Mistral-7B-q4f16_1-MLC",
        name: "Hermes 2 Pro 7B",
        params: "7B",
        size: "~4.2GB",
        rec: "Fine-tuned quality",
        p: "local",
        ctx: 4096,
        cat: "large",
        free: !0
    }, {
        id: "Qwen2-7B-Instruct-q4f16_1-MLC",
        name: "Qwen 2 7B",
        params: "7B",
        size: "~4.4GB",
        rec: "Alibaba powerhouse",
        p: "local",
        ctx: 8192,
        cat: "large",
        free: !0
    }, {
        id: "WizardMath-7B-V1.1-q4f16_1-MLC",
        name: "WizardMath 7B",
        params: "7B",
        size: "~4.1GB",
        rec: "Mathematics specialist",
        p: "local",
        ctx: 4096,
        cat: "large",
        free: !0
    }, {
        id: "NeuralHermes-2.5-Mistral-7B-q4f16_1-MLC",
        name: "NeuralHermes 7B",
        params: "7B",
        size: "~4.2GB",
        rec: "Creative + logical",
        p: "local",
        ctx: 4096,
        cat: "large",
        free: !0
    }, {
        id: "gpt-4o",
        name: "GPT-4o",
        params: "-",
        size: "Cloud",
        rec: "OpenAI flagship",
        p: "openai",
        ctx: 128e3,
        cat: "openai",
        free: !1
    }, {
        id: "gpt-4o-mini",
        name: "GPT-4o Mini",
        params: "-",
        size: "Cloud",
        rec: "Fast · Affordable",
        p: "openai",
        ctx: 128e3,
        cat: "openai",
        free: !1
    }, {
        id: "gpt-4-turbo",
        name: "GPT-4 Turbo",
        params: "-",
        size: "Cloud",
        rec: "Extended context",
        p: "openai",
        ctx: 128e3,
        cat: "openai",
        free: !1
    }, {
        id: "gpt-3.5-turbo",
        name: "GPT-3.5 Turbo",
        params: "-",
        size: "Cloud",
        rec: "Fastest · Cheapest",
        p: "openai",
        ctx: 16384,
        cat: "openai",
        free: !1
    }, {
        id: "o3-mini",
        name: "o3-mini",
        params: "-",
        size: "Cloud",
        rec: "Advanced reasoning",
        p: "openai",
        ctx: 1e5,
        cat: "openai",
        free: !1
    }, {
        id: "o1-preview",
        name: "o1 Preview",
        params: "-",
        size: "Cloud",
        rec: "Deep thinking",
        p: "openai",
        ctx: 128e3,
        cat: "openai",
        free: !1
    }, {
        id: "gemini-2.0-flash",
        name: "Gemini 2.0 Flash",
        params: "-",
        size: "Cloud",
        rec: "Fastest Gemini",
        p: "gemini",
        ctx: 1e6,
        cat: "gemini",
        free: !1
    }, {
        id: "gemini-2.0-flash-exp",
        name: "Gemini 2.0 Flash Exp",
        params: "-",
        size: "Cloud",
        rec: "Latest experimental",
        p: "gemini",
        ctx: 1e6,
        cat: "gemini",
        free: !1
    }, {
        id: "gemini-1.5-pro",
        name: "Gemini 1.5 Pro",
        params: "-",
        size: "Cloud",
        rec: "2M context window",
        p: "gemini",
        ctx: 2e6,
        cat: "gemini",
        free: !1
    }, {
        id: "gemini-1.5-flash",
        name: "Gemini 1.5 Flash",
        params: "-",
        size: "Cloud",
        rec: "Fast multimodal",
        p: "gemini",
        ctx: 1e6,
        cat: "gemini",
        free: !1
    }, {
        id: "claude-3-7-sonnet-20250219",
        name: "Claude 3.7 Sonnet",
        params: "-",
        size: "Cloud",
        rec: "Best code + logic",
        p: "anthropic",
        ctx: 2e5,
        cat: "anthropic",
        free: !1
    }, {
        id: "claude-3-5-sonnet-20241022",
        name: "Claude 3.5 Sonnet",
        params: "-",
        size: "Cloud",
        rec: "Anthropic flagship",
        p: "anthropic",
        ctx: 2e5,
        cat: "anthropic",
        free: !1
    }, {
        id: "claude-3-5-haiku-20241022",
        name: "Claude 3.5 Haiku",
        params: "-",
        size: "Cloud",
        rec: "Fast · Efficient",
        p: "anthropic",
        ctx: 2e5,
        cat: "anthropic",
        free: !1
    }, {
        id: "claude-3-opus-20240229",
        name: "Claude 3 Opus",
        params: "-",
        size: "Cloud",
        rec: "Most capable",
        p: "anthropic",
        ctx: 2e5,
        cat: "anthropic",
        free: !1
    }, {
        id: "ollama-custom",
        name: "Ollama",
        params: "-",
        size: "Local",
        rec: "Self-hosted · Any model",
        p: "ollama",
        ctx: 32768,
        cat: "servers",
        free: !0
    }],
    CATS = [{
        id: "recommended",
        label: "Recommended",
        icon: "fa-star",
        open: !0
    }, {
        id: "coding",
        label: "Coding",
        icon: "fa-code",
        open: !0
    }, {
        id: "small",
        label: "Lightweight",
        icon: "fa-feather",
        open: !1
    }, {
        id: "large",
        label: "Large",
        icon: "fa-server",
        open: !1
    }, {
        id: "openai",
        label: "OpenAI",
        icon: "fa-bolt",
        open: !1,
        locked: !0
    }, {
        id: "gemini",
        label: "Gemini",
        icon: "fa-wand-magic-sparkles",
        open: !1,
        locked: !0
    }, {
        id: "anthropic",
        label: "Anthropic",
        icon: "fa-shield-halved",
        open: !1,
        locked: !0
    }, {
        id: "servers",
        label: "Local Servers",
        icon: "fa-house-laptop",
        open: !1
    }],
    QA = [{
        icon: "fa-lightbulb",
        label: "Explain",
        prompt: "Explain this clearly:\n"
    }, {
        icon: "fa-code",
        label: "Code",
        prompt: "Write code for:\n"
    }, {
        icon: "fa-bug",
        label: "Debug",
        prompt: "Debug this:\n```\n\n```"
    }, {
        icon: "fa-bolt",
        label: "Summarize",
        prompt: "Summarize concisely:\n"
    }, {
        icon: "fa-language",
        label: "Translate",
        prompt: "Translate to English:\n"
    }, {
        icon: "fa-flask",
        label: "Test",
        prompt: "Write unit tests for:\n"
    }],
    BAD_PATTERNS = [/i('m| am) (not able|unable) to (help|assist)/i, /i cannot (help|assist|provide|generate)/i, /i('m| am) sorry,? (but )?(i can't|i cannot)/i, /as an ai (language model|assistant)/i, /that('s| is) (outside|beyond) (my|what i)/i, /i (don't|do not) have the ability to/i, /i must (decline|refuse)/i, /i'm not able to (discuss|talk about)/i],
    BETTER_MODEL = {
        coding: "Qwen 2.5 Coder 3B",
        math: "WizardMath 7B",
        creative: "Hermes 2 Pro 7B",
        general: "Llama 3.2 3B"
    },
    SYS_DEFAULT = "You are mai., a precise and direct AI assistant. Be genuinely helpful. Respond clearly and concisely. Do not add unnecessary disclaimers.",
    SYS_CODER = "You are mai., an expert coding assistant. Write complete, working code. Use code blocks with language tags. You may write long comprehensive responses. Always show full implementations over fragments.",
    _on = (e, t) => {
        const s = document.getElementById(e);
        s && (s.onclick = t)
    },
    $ = e => document.querySelector(e),
    $$ = e => [...document.querySelectorAll(e)],
    $id = e => document.getElementById(e),
    esc = e => {
        const t = document.createElement("div");
        return t.textContent = e, t.innerHTML
    },
    uid = (e = "") => `${e}${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
    sleep = e => new Promise(t => setTimeout(t, e)),
    debounce = (e, t) => {
        let s;
        return (...i) => {
            clearTimeout(s), s = setTimeout(() => e(...i), t)
        }
    },
    throttle = (e, t) => {
        let s = 0;
        return (...i) => {
            const a = Date.now();
            a - s >= t && (s = a, e(...i))
        }
    },
    relT = e => {
        const t = (Date.now() - e) / 1e3,
            s = t / 60,
            i = s / 60,
            a = i / 24;
        return t < 60 ? "now" : s < 60 ? ~~s + "m" : i < 24 ? ~~i + "h" : a < 7 ? ~~a + "d" : new Date(e).toLocaleDateString()
    },
    fmtB = e => {
        if (!e) return "0 B";
        const t = Math.min(Math.floor(Math.log(e) / Math.log(1024)), 3);
        return (e / 1024 ** t).toFixed(t ? 1 : 0) + " " + ["B", "KB", "MB", "GB"][t]
    },
    fmtMs = e => {
        const t = ~~(e / 1e3),
            s = ~~(t / 60),
            i = ~~(s / 60);
        return i ? i + "h " + s % 60 + "m" : s ? s + "m " + t % 60 + "s" : t ? t + "s" : e + "ms"
    },
    truncate = (e, t = 80) => e.length > t ? e.slice(0, t) + "…" : e,
    stripMd = e => e.replace(/```[\s\S]*?```/g, "[code]").replace(/`[^`]+`/g, "").replace(/#{1,6}\s/g, "").replace(/\*{1,2}([^*]+)\*{1,2}/g, "$1").replace(/\n{2,}/g, ". ").trim(),
    isCutOff = e => {
        const t = e.trimEnd();
        return t.length > 20 && ![".", "!", "?", "`", "'", ")", "]", "}", ">", ":", "\n"].includes(t[t.length - 1])
    },
    detectLang = e => /^\s*<(!DOCTYPE|html|head|body|div|span)/i.test(e) ? "html" : /^\s*(import|export\s+default|const\s+\w|let\s+\w|function\s+\w|class\s+\w|=>|async\s+function)/.test(e) ? "javascript" : /^\s*(def |class |import |from |if __name__)/.test(e) ? "python" : /^\s*(fn |use |struct |impl |pub |mod )/.test(e) ? "rust" : /^\s*(#include|int main|void |namespace )/.test(e) ? "cpp" : /^\s*(SELECT|INSERT|UPDATE|DELETE|CREATE|DROP)/i.test(e) ? "sql" : /^\s*(package |import "|\bfunc\b)/.test(e) ? "go" : /^\s*\{[\s\S]*\}$/.test(e.trim()) ? "json" : "text",
    copyClip = async e => {
        try {
            await navigator.clipboard.writeText(e)
        } catch {
            const t = document.createElement("textarea");
            t.value = e, t.style.cssText = "position:fixed;opacity:0", document.body.appendChild(t), t.select(), document.execCommand("copy"), t.remove()
        }
    }, dlFile = (e, t, s = "text/plain") => {
        const i = new Blob([e], {
                type: s
            }),
            a = URL.createObjectURL(i),
            n = document.createElement("a");
        n.href = a, n.download = t, n.click(), setTimeout(() => URL.revokeObjectURL(a), 1e3)
    }, isCodingModel = e => "coding" === MODELS.find(t => t.id === e)?.cat, checkBadResponse = e => BAD_PATTERNS.some(t => t.test(e)), Saturn = {
        _anims: new Map,
        render(e, t = 0, s = {}) {
            if (!e) return;
            const {
                scale: i = 1
            } = s, a = e.width, n = e.height, o = e.getContext("2d");
            o.clearRect(0, 0, a, n);
            const l = a / 2,
                c = n / 2,
                r = .21 * Math.min(a, n) * i,
                d = Math.sin(26 * Math.PI / 180),
                h = 1.28 * r,
                p = 2.18 * r,
                m = h * d,
                u = p * d;
            this._drawRings(o, l, c, h, m, p, u, !0, t);
            const g = l - .42 * r,
                f = c - .38 * r,
                _ = o.createRadialGradient(g, f, .04 * r, l, c, 1.02 * r);
            _.addColorStop(0, "rgba(72,72,80,1)"), _.addColorStop(.22, "rgba(48,48,55,1)"), _.addColorStop(.5, "rgba(28,28,34,1)"), _.addColorStop(.78, "rgba(14,14,18,1)"), _.addColorStop(1, "rgba(6,6,8,1)"), o.save(), o.beginPath(), o.arc(l, c, r, 0, 2 * Math.PI), o.fillStyle = _, o.fill(), o.beginPath(), o.arc(l, c, r, 0, 2 * Math.PI), o.clip();
            for (let e = 0; e < 6; e++) {
                const s = c - .75 * r + e / 5 * r * 1.5,
                    i = .018 + .007 * Math.sin(.3 * t + e),
                    a = o.createLinearGradient(l - r, s, l + r, s);
                a.addColorStop(0, "rgba(255,255,255,0)"), a.addColorStop(.5, `rgba(255,255,255,${i})`), a.addColorStop(1, "rgba(255,255,255,0)"), o.fillStyle = a, o.fillRect(l - r, s - .06 * r, 2 * r, .12 * r)
            }
            const v = o.createRadialGradient(l + .5 * r, c + .3 * r, 0, l + .1 * r, c + .05 * r, 1.3 * r);
            v.addColorStop(0, "rgba(0,0,0,0)"), v.addColorStop(.55, "rgba(0,0,0,0.08)"), v.addColorStop(1, "rgba(0,0,0,0.7)"), o.fillStyle = v, o.fillRect(l - r, c - r, 2 * r, 2 * r), o.restore(), this._drawRings(o, l, c, h, m, p, u, !1, t), o.save(), o.beginPath(), o.arc(l, c, r, 0, 2 * Math.PI), o.clip();
            const b = o.createLinearGradient(l, c - u, l, c + u);
            b.addColorStop(0, "rgba(0,0,0,0)"), b.addColorStop(.38, "rgba(0,0,0,0.28)"), b.addColorStop(.5, "rgba(0,0,0,0.18)"), b.addColorStop(.62, "rgba(0,0,0,0.06)"), b.addColorStop(1, "rgba(0,0,0,0)"), o.fillStyle = b, o.fillRect(l - r, c - r, 2 * r, 2 * r), o.restore(), o.save(), o.beginPath(), o.arc(l, c, r, 0, 2 * Math.PI), o.clip();
            const w = o.createRadialGradient(l - .35 * r, c - .35 * r, 0, l - .25 * r, c - .25 * r, .55 * r);
            w.addColorStop(0, "rgba(255,255,255,0.13)"), w.addColorStop(.45, "rgba(255,255,255,0.04)"), w.addColorStop(1, "rgba(255,255,255,0)"), o.fillStyle = w, o.fillRect(l - r, c - r, 2 * r, 2 * r), o.restore();
            const y = o.createRadialGradient(l, c, .92 * r, l, c, 1.65 * r);
            y.addColorStop(0, "rgba(160,160,180,0.07)"), y.addColorStop(1, "rgba(0,0,0,0)"), o.fillStyle = y, o.beginPath(), o.arc(l, c, 1.65 * r, 0, 2 * Math.PI), o.fill()
        },
        _drawRings(e, t, s, i, a, n, o, l, c) {
            const r = .012 * c;
            for (let c = 9; c >= 0; c--) {
                const d = c / 9,
                    h = i + (n - i) * d,
                    p = a + (o - a) * d;
                let m;
                m = d < .08 ? 0 : d < .3 ? .13 + .35 * d : d < .42 ? .22 + .2 * d : d > .58 && d < .67 ? .04 : d < .82 ? .14 + .22 * (1 - d) : .05 + .15 * (1 - d), m *= .82 + .18 * Math.sin(r + 12 * d + c);
                const u = (n - i) / 10 * .72;
                e.beginPath(), l ? e.ellipse(t, s, h, p, 0, Math.PI, 2 * Math.PI) : e.ellipse(t, s, h, p, 0, 0, Math.PI), e.strokeStyle = `rgba(165,165,180,${m})`, e.lineWidth = u, e.stroke()
            }
        },
        start(e, t = {}) {
            if (!e) return;
            e.offsetWidth > 0 && (e.width = e.offsetWidth * window.devicePixelRatio || e.offsetWidth, e.height = e.offsetHeight * window.devicePixelRatio || e.offsetHeight);
            let s = 0;
            const i = () => {
                s++, this.render(e, s, t);
                const a = requestAnimationFrame(i);
                this._anims.set(e, a)
            };
            this.stop(e), i()
        },
        stop(e) {
            e && this._anims.has(e) && (cancelAnimationFrame(this._anims.get(e)), this._anims.delete(e)), e || (this._anims.forEach(e => cancelAnimationFrame(e)), this._anims.clear())
        }
    }, Dlg = {
        _ov: null,
        _init() {
            this._ov || (this._ov = document.createElement("div"), this._ov.className = "dlg-ov", document.body.appendChild(this._ov))
        },
        _show({
            icon: e,
            iconBg: t,
            title: s,
            msg: i,
            input: a,
            placeholder: n,
            defaultVal: o,
            btnText: l,
            btnDanger: c
        }) {
            return this._init(), new Promise(r => {
                const d = this._ov;
                d.innerHTML = `<div class="dlg-box"><div style="padding:20px 20px 0;text-align:center">${e?`<div class="dlg-icon" style="background:${t||"var(--bg3)"}"><i class="${e}"></i></div>`:""}<div class="dlg-title">${esc(s||"")}</div><div class="dlg-msg">${esc(i||"")}</div>${a?`<input class="dlg-input" placeholder="${esc(n||"")}" value="${esc(o||"")}">`:""}</div><div class="dlg-acts">${!1!==l?'<button class="m-btn ghost dlg-c">Cancel</button>':""}<button class="m-btn ${c?"danger":"solid"} dlg-ok">${esc(l||(c?"Delete":"OK"))}</button></div></div>`, d.classList.add("open");
                const h = d.querySelector(".dlg-input");
                h && setTimeout(() => h.focus(), 100);
                const p = e => {
                    d.classList.remove("open"), setTimeout(() => d.innerHTML = "", 250), r(e)
                };
                d.querySelector(".dlg-c")?.addEventListener("click", () => p(null)), d.querySelector(".dlg-ok").addEventListener("click", () => p(!a || (h.value?.trim() || null))), h && h.addEventListener("keydown", e => {
                    "Enter" === e.key && p(h.value?.trim() || null), "Escape" === e.key && p(null)
                }), d.addEventListener("click", e => {
                    e.target === d && p(null)
                }, {
                    once: !0
                })
            })
        },
        alert(e, t = "mai.") {
            return this._show({
                icon: "fa-solid fa-circle-info",
                iconBg: "var(--bg3)",
                title: t,
                msg: e,
                btnText: !1
            })
        },
        confirm(e, t = "Confirm") {
            return this._show({
                icon: "fa-solid fa-triangle-exclamation",
                iconBg: "var(--bg3)",
                title: t,
                msg: e
            })
        },
        prompt(e, t = "Input", s = {}) {
            return this._show({
                icon: "fa-solid fa-pen-to-square",
                iconBg: "var(--bg3)",
                title: t,
                msg: e,
                input: !0,
                placeholder: s.placeholder || "",
                defaultVal: s.default || ""
            })
        },
        danger(e, t = "Delete?") {
            return this._show({
                icon: "fa-solid fa-trash-can",
                iconBg: "var(--bg3)",
                title: t,
                msg: e,
                btnDanger: !0
            })
        }
    }, Toast = {
        _active: 0,
        MAX: 2,
        show(e, t = "ok", s = 3e3) {
            if (this._active >= this.MAX) return;
            this._active++;
            const i = $id("toasts"),
                a = document.createElement("div");
            a.className = "toast";
            const n = {
                ok: "fa-solid fa-circle-check",
                err: "fa-solid fa-circle-xmark",
                warn: "fa-solid fa-triangle-exclamation",
                info: "fa-solid fa-circle-info"
            };
            a.innerHTML = `<i class="${n[t]||n.info}"></i><span style="flex:1">${esc(e)}</span><button class="t-close"><i class="fa-solid fa-xmark"></i></button>`, i.appendChild(a), requestAnimationFrame(() => requestAnimationFrame(() => a.classList.add("show"))), a.querySelector(".t-close").onclick = () => this._dismiss(a), s > 0 && setTimeout(() => this._dismiss(a), s)
        },
        _dismiss(e) {
            e && e.parentNode && (e.classList.remove("show"), this._active = Math.max(0, this._active - 1), setTimeout(() => e.remove(), 250))
        }
    }, DB = {
        _db: null,
        async init() {
            return new Promise((e, t) => {
                const s = indexedDB.open("mai010", 3);
                s.onupgradeneeded = e => {
                    const t = e.target.result;
                    ["c", "s", "b", "t", "st"].forEach(e => {
                        t.objectStoreNames.contains(e) || t.createObjectStore(e, {
                            keyPath: "s" === e || "st" === e ? "k" : "id"
                        })
                    })
                }, s.onsuccess = t => {
                    this._db = t.target.result, e()
                }, s.onerror = t
            })
        },
        _tx(e, t = "readonly") {
            return this._db.transaction(e, t)
        },
        async put(e, t) {
            return new Promise((s, i) => {
                const a = this._tx(e, "readwrite").objectStore(e).put(t);
                a.onsuccess = s, a.onerror = i
            })
        },
        async get(e, t) {
            return new Promise((s, i) => {
                const a = this._tx(e).objectStore(e).get(t);
                a.onsuccess = () => s(a.result), a.onerror = i
            })
        },
        async getAll(e) {
            return new Promise((t, s) => {
                const i = this._tx(e).objectStore(e).getAll();
                i.onsuccess = () => t(i.result || []), i.onerror = s
            })
        },
        async del(e, t) {
            return new Promise((s, i) => {
                const a = this._tx(e, "readwrite").objectStore(e).delete(t);
                a.onsuccess = s, a.onerror = i
            })
        },
        async clear(e) {
            return new Promise((t, s) => {
                const i = this._tx(e, "readwrite").objectStore(e).clear();
                i.onsuccess = t, i.onerror = s
            })
        }
    }, Memory = {
        _cache: new Map,
        MAX_CACHE: 64,
        buildContext(e, t = 3200) {
            const s = e.filter(e => "system" !== e.role);
            let i = 0;
            const a = [];
            for (let e = s.length - 1; e >= 0; e--) {
                const n = s[e],
                    o = (Date.now() - (n.ts || 0)) / 6e4;
                Math.exp(-o / 90);
                if (i += Math.ceil(n.content.length / 3.8), i > t && a.length > 2) break;
                a.unshift(n)
            }
            return this.deduplicate(a)
        },
        deduplicate(e) {
            const t = [];
            for (const s of e) {
                const e = t[t.length - 1];
                e && e.role === s.role && e.content === s.content || t.push(s)
            }
            return t
        },
        get(e) {
            const t = this._cache.get(e);
            return t && (this._cache.delete(e), this._cache.set(e, t)), t
        },
        set(e, t) {
            this._cache.size >= this.MAX_CACHE && this._cache.delete(this._cache.keys().next().value), this._cache.set(e, t)
        }
    }, Router = {
        intent: e => /debug|fix|error|exception|traceback|bug/i.test(e) ? "debug" : /\bcode\b|function|class|script|algorithm|implement/i.test(e) ? "coding" : /math|equation|calculate|solve|integral|derivative/i.test(e) ? "math" : /write|generate|create|story|poem|essay/i.test(e) ? "creative" : "general",
        adaptTemp(e, t) {
            const s = this.intent(e);
            return "coding" === s || "debug" === s ? Math.max(.75 * t, .25) : "creative" === s ? Math.min(1.15 * t, 1.4) : t
        }
    }, CircuitBreaker = {
        _seen: new Set,
        check(e) {
            if (e.length < 160) return !1;
            const t = e.slice(-100),
                s = this._hash(t);
            return !!this._seen.has(s) || (this._seen.add(s), this._seen.size > 40 && this._seen.clear(), !1)
        },
        _hash(e) {
            let t = 0;
            for (let s = 0; s < e.length; s++) t = Math.imul(31, t) + e.charCodeAt(s) | 0;
            return t
        },
        reset() {
            this._seen.clear()
        }
    }, PII = {
        scrub: e => e.replace(/\b[\w.-]+@[\w.-]+\.\w{2,}\b/g, "[email]").replace(/\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/g, "[phone]").replace(/\b\d{3}-\d{2}-\d{4}\b/g, "[ssn]").replace(/\b(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})\b/g, "[card]")
    };
class App {
    constructor() {
        this.s = {
            theme: "dark",
            model: "",
            provider: "local",
            stream: !0,
            temp: .7,
            maxTok: 2048,
            topP: .95,
            hl: !0,
            ts: !0,
            autoTitle: !0,
            confDel: !0,
            notif: !1,
            sys: "",
            name: "",
            job: "",
            autoLoad: DEFAULT_AUTO_MODEL
        }, this.keys = {}, this.conv = null, this.hist = [], this.files = [], this._gen = !1, this._genStart = 0, this._genToks = 0, this._engine = null, this._selModel = null, this._atBot = !0, this._drawerOpen = !1, this._stats = {
            prompts: 0,
            sessions: 0,
            toksOut: 0,
            errors: 0,
            avgMs: 0,
            rc: 0
        }, this._sessStart = Date.now(), this._sr = null, this._saveDeb = debounce(() => this._save(), 1500), this._ctxEl = $id("ctx"), this._tempChat = !1, this._imgMode = !1, this._arenaMode = !1, this._arenaModel2 = null, this._callActive = !1, this._callSr = null, this._showLocked = !1, this._downloads = {}, this._abortCtrl = null, this._obSlide = 0, this._plusOpen = !1, this._saturnCanvas = null
    }
    async boot() {
        const e = $id("sp-canvas");
        e && (e.width = window.innerWidth, e.height = window.innerHeight, Saturn.start(e, {
            scale: 1.3
        })), this._sp(10, "Storage"), await DB.init(), this._sp(25, "Settings"), await this._loadCfg(), this._sp(40, "Theme"), this._theme(this.s.theme), this._sp(55, "UI"), this._initCtx(), this._renderQA(), this._bind(), this._sp(70, "Session"), await this._restore(), this._sp(85, "Model"), this.s.autoLoad && "none" !== this.s.autoLoad && (this._sp(90, "Loading " + this.s.autoLoad.split("-")[0] + "…"), await this._loadModelById(this.s.autoLoad, !0).catch(() => {})), this._sp(100, "Ready"), await sleep(480), Saturn.stop(e), $id("splash").classList.add("out"), setTimeout(() => $id("splash")?.remove(), 500), $id("app").classList.add("show"), await sleep(200);
        await DB.get("s", "onb") ? this._greet() : this._showOnboarding(), window.addEventListener("beforeunload", () => this._save()), window.matchMedia("(prefers-color-scheme:dark)").addEventListener("change", () => {
            "system" === this.s.theme && this._theme("system")
        }), this._bindKeys(), this._checkHash(), window.addEventListener("hashchange", () => this._checkHash()), this._scheduleCleanup()
    }
    _sp(e, t) {
        const s = $id("sp-fill"),
            i = $id("sp-txt");
        s && (s.style.width = e + "%"), i && (i.textContent = t)
    }
    _checkHash() {
        const e = location.hash.slice(1);
        e && e.startsWith("c_") && this._loadConv(e).catch(() => {})
    }
    _showOnboarding() {
        const e = $id("onboarding");
        if (!e) return;
        e.style.display = "flex";
        const t = $id("ob-canvas");
        t && (t.width = window.innerWidth, t.height = window.innerHeight, Saturn.start(t, {
            scale: 1.2
        })), $$("[data-ob-model]").forEach(e => {
            e.onclick = () => {
                $$("[data-ob-model]").forEach(e => e.classList.remove("active")), e.classList.add("active"), this.s.autoLoad = e.dataset.obModel
            }
        })
    }
    obNext() {
        const e = $$(".ob-slide"),
            t = $$(".ob-dot");
        this._obSlide < e.length - 1 && (e[this._obSlide].classList.remove("active"), e[this._obSlide].classList.add("out"), setTimeout(() => e[this._obSlide]?.classList.remove("out"), 400), this._obSlide++, e[this._obSlide].classList.add("active"), e[this._obSlide].classList.remove("out"), t.forEach((e, t) => e.classList.toggle("active", t === this._obSlide)))
    }
    obSaveAccount() {
        this.s.name = $id("ob-name")?.value?.trim() || "", this.s.job = $id("ob-job")?.value?.trim() || "", this._saveCfg(), this.obNext()
    }
    async obFinish() {
        await DB.put("s", {
            k: "onb",
            done: !0
        });
        const e = $id("onboarding");
        e.style.transition = "opacity .4s", e.style.opacity = "0", setTimeout(() => {
            e.style.display = "none", e.style.opacity = ""
        }, 400), Saturn.stop($id("ob-canvas")), this._greet(), this._saveCfg(), Toast.show("Welcome to mai.", "ok")
    }
    async _loadCfg() {
        try {
            const e = await DB.get("s", "cfg");
            e && Object.assign(this.s, e);
            const t = await DB.get("s", "keys");
            t && (this.keys = t);
            const s = await DB.get("st", "main");
            s && (this._stats = s), this._stats.sessions++, await DB.put("st", {
                k: "main",
                ...this._stats
            })
        } catch (e) {
            console.warn(e)
        }
    }
    async _saveCfg() {
        await DB.put("s", {
            k: "cfg",
            ...this.s
        }), await DB.put("s", {
            k: "keys",
            ...this.keys
        })
    }
    async _saveStats() {
        await DB.put("st", {
            k: "main",
            ...this._stats
        })
    }
    _theme(e) {
        let t = e;
        "system" === e && (t = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light"), document.documentElement.setAttribute("data-theme", t), this.s.theme = e, $("meta[name=theme-color]")?.setAttribute("content", "dark" === t ? "#000000" : "#f8f8f8")
    }
    _greet() {
        const e = (new Date).getHours(),
            t = this.s.name;
        let s = "How can I assist?";
        t && (s = e < 5 ? "Still up, " + t + "." : e < 12 ? "Morning, " + t + "." : e < 17 ? "Afternoon, " + t + "." : e < 21 ? "Evening, " + t + "." : "Night, " + t + ".");
        const i = $id("greeting");
        i && (i.textContent = s)
    }
    _renderQA() {
        const e = $id("qa-grid");
        e && (e.innerHTML = "", QA.forEach(t => {
            const s = document.createElement("button");
            s.className = "qa-chip", s.innerHTML = `<i class="fa-solid ${t.icon}"></i>${esc(t.label)}`, s.onclick = () => {
                const e = $id("inp");
                e && (e.value = t.prompt, e.focus(), this._autoResize(e))
            }, e.appendChild(s)
        }))
    }
    _newConv(e = !1) {
        this._save(), this._tempChat = e, this.conv = {
            id: uid("c_"),
            title: "New chat",
            created: Date.now(),
            updated: Date.now(),
            model: this.s.model
        }, this.hist = [], this.files = [], this._clearChat(), this._greet(), e || (location.hash = this.conv.id), this._renderConvs(), this._closeDrawer()
    }
    _clearChat() {
        const e = $id("msgs");
        e && (e.innerHTML = "");
        const t = $id("empty");
        t && (t.style.display = "");
        const s = $id("att-bar");
        s && (s.innerHTML = "", s.classList.remove("show"))
    }
    async _save() {
        if (!this.conv || !this.hist.length || this._tempChat) return;
        const e = this.hist.filter(e => "system" !== e.role);
        if (e.length) {
            if (this.s.autoTitle && "New chat" === this.conv.title) {
                const t = e.find(e => "user" === e.role);
                t && (this.conv.title = truncate(stripMd(t.content), 40))
            }
            this.conv.updated = Date.now(), this.conv.model = this.s.model, await DB.put("c", {
                ...this.conv,
                msgs: e.map(e => ({
                    role: e.role,
                    content: e.content,
                    ts: e.ts,
                    model: e.model
                }))
            }), this._renderConvs()
        }
    }
    async _loadConv(e, t = !0) {
        const s = await DB.get("c", e);
        if (!s) return;
        await this._save(), this.conv = {
            id: s.id,
            title: s.title,
            created: s.created,
            updated: s.updated,
            model: s.model
        }, this.hist = s.msgs || [], this.files = [], this._clearChat();
        const i = $id("msgs"),
            a = $id("empty");
        a && (a.style.display = "none"), this.hist.forEach((e, t) => {
            "system" !== e.role && i.appendChild(this._mkMsg(e.role, e.content, e.ts, t))
        }), location.hash = e, t && setTimeout(() => this._scrollBot(!0), 80), this._renderConvs(), this._closeDrawer()
    }
    async _delConv(e) {
        if (this.s.confDel) {
            if (!await Dlg.danger("Delete this chat?")) return
        }
        await DB.del("c", e), this.conv?.id === e ? this._newConv() : this._renderConvs()
    }
    async _renderConvs() {
        const e = $id("conv-list");
        if (!e) return;
        const t = ($id("d-search")?.value || "").toLowerCase(),
            s = await DB.getAll("c");
        s.sort((e, t) => (t.updated || 0) - (e.updated || 0));
        const i = t ? s.filter(e => e.title?.toLowerCase().includes(t)) : s;
        if (e.innerHTML = "", i.length) {
            i.forEach(t => {
                const s = document.createElement("div");
                s.className = "conv-item" + (t.id === this.conv?.id ? " active" : "");
                const i = (t.msgs || []).find(e => "assistant" === e.role);
                s.innerHTML = `<div class="ci-body"><div class="ci-title">${esc(t.title||"Untitled")}</div><div class="ci-prev">${esc(truncate(stripMd(i?.content||""),38))}</div></div><span class="ci-ts">${relT(t.updated)}</span><div class="ci-btns"><button class="ci-btn"><i class="fa-solid fa-trash"></i></button></div>`, s.querySelector(".ci-btn").onclick = e => {
                    e.stopPropagation(), this._delConv(t.id)
                }, s.onclick = () => this._loadConv(t.id), this._bindSwipe(s, () => this._delConv(t.id)), e.appendChild(s)
            });
            try {
                if (navigator.storage?.estimate) {
                    const {
                        usage: e,
                        quota: t
                    } = await navigator.storage.estimate(), s = Math.round(e / t * 100), i = $id("store-fill");
                    i && (i.style.width = Math.min(s, 100) + "%");
                    const a = $id("store-txt");
                    a && (a.textContent = fmtB(e) + " / " + fmtB(t))
                }
            } catch {}
        } else e.innerHTML = '<div class="d-empty">No conversations</div>'
    }
    _bindSwipe(e, t) {
        let s = 0,
            i = 0,
            a = !1;
        e.addEventListener("touchstart", e => {
            s = e.touches[0].clientX, i = 0, a = !1
        }, {
            passive: !0
        }), e.addEventListener("touchmove", t => {
            i = t.touches[0].clientX - s, Math.abs(i) > 8 && (a = !0, e.style.transform = `translateX(${Math.min(0,i)}px)`, e.style.opacity = String(Math.max(.3, 1 + i / 160)))
        }, {
            passive: !0
        }), e.addEventListener("touchend", () => {
            a && i < -88 ? (e.style.transition = "all .22s", e.style.transform = "translateX(-110%)", e.style.opacity = "0", setTimeout(() => t(), 230)) : (e.style.transform = "", e.style.opacity = ""), a = !1
        })
    }
    _buildCats(e, t) {
        const s = $id(e);
        if (!s) return;
        const i = ($id("m-search")?.value || "").toLowerCase();
        if (s.innerHTML = "", CATS.forEach(e => {
                let a = MODELS.filter(t => t.cat === e.id);
                if (this._showLocked || (a = a.filter(e => e.free)), i && (a = a.filter(e => e.name.toLowerCase().includes(i) || e.rec.toLowerCase().includes(i))), !a.length) return;
                const n = document.createElement("div");
                n.className = "mcat";
                const o = document.createElement("div");
                o.className = "mcat-head" + (e.open || i ? " open" : ""), o.innerHTML = `<i class="fa-solid ${e.icon}" style="font-size:10px;width:14px;text-align:center;color:var(--fg3)"></i>${esc(e.label)}<span class="mcat-badge">${a.length}</span><i class="fa-solid fa-chevron-down"></i>`;
                const l = document.createElement("div");
                l.className = "mcat-body" + (e.open || i ? " open" : ""), a.forEach(e => {
                    const i = document.createElement("div");
                    i.className = "mopt" + (this.s.model === e.id ? " sel" : ""), i.dataset.id = e.id;
                    const a = this._downloads[e.id];
                    i.innerHTML = `<div class="mopt-radio"></div><div style="flex:1;min-width:0"><div class="mopt-name">${esc(e.name)}</div><div class="mopt-meta">${esc(e.rec)}</div>${a?`<div class="dl-bar" style="margin-top:4px"><div class="dl-fill" id="dlfill-${e.id}" style="width:${a.pct}%"></div></div>`:""}</div><span class="mopt-size">${esc(e.size)}</span>`, i.addEventListener("click", () => {
                        s.querySelectorAll(".mopt").forEach(e => e.classList.remove("sel")), i.classList.add("sel"), this._selModel = e;
                        const a = $id("m-load-btn");
                        a && (a.disabled = !1, a.textContent = "local" === e.p ? "Download " + e.name : "Use " + e.name), t && t(e)
                    }), l.appendChild(i)
                }), o.addEventListener("click", () => {
                    o.classList.toggle("open"), l.classList.toggle("open")
                }), n.appendChild(o), n.appendChild(l), s.appendChild(n)
            }), this.s.model) {
            const e = s.querySelector(`.mopt[data-id="${this.s.model}"]`);
            e && (e.classList.add("sel"), this._selModel = MODELS.find(e => e.id === this.s.model))
        }
    }
    async _loadModel() {
        const e = this._selModel;
        if (e) {
            if (!e.free && !this.keys[e.p]) {
                const t = await Dlg.prompt("Enter " + e.p + " API key:", e.name, {
                    placeholder: "openai" === e.p ? "sk-..." : "gemini" === e.p ? "AIza..." : "sk-ant-..."
                });
                if (!t) return;
                this.keys[e.p] = t, await this._saveCfg()
            }
            "local" === e.p ? await this._loadModelById(e.id) : "ollama" === e.p ? (this.s.model = e.id, this.s.provider = "ollama", await this._saveCfg(), this._updateModel(), this.closeModal("m-model"), Toast.show("Ollama ready", "ok")) : (this.s.model = e.id, this.s.provider = e.p, await this._saveCfg(), this._updateModel(), this.closeModal("m-model"), Toast.show(e.name + " configured", "ok"))
        }
    }
    async _loadModelById(e, t = !1) {
        const s = MODELS.find(t => t.id === e);
        if (s && "local" === s.p) {
            this._downloads[e] = {
                pct: 0,
                name: s.name
            }, this._updateDlBar(0), this._renderDlRows();
            try {
                const i = await import("https://esm.run/@mlc-ai/web-llm");
                this._engine || (this._engine = new i.MLCEngine), this._engine.setInitProgressCallback(t => {
                    const s = Math.round(100 * (t.progress || 0));
                    this._downloads[e] && (this._downloads[e].pct = s), this._updateDlBar(s), this._renderDlRows();
                    const i = $id(`dlfill-${e}`);
                    i && (i.style.width = s + "%");
                    const a = $id("m-prog-fill");
                    a && (a.style.width = s + "%");
                    const n = $id("m-prog-pct");
                    n && (n.textContent = s + "%");
                    const o = $id("m-prog-status");
                    o && (o.textContent = t.text || "")
                }), $id("m-prog").style.display = "block", await this._engine.reload(e), this.s.model = e, this.s.provider = "local", await this._saveCfg(), this._updateModel(), delete this._downloads[e], this._updateDlBar(100), setTimeout(() => this._updateDlBar(-1), 800), this._renderDlRows(), $id("m-prog").style.display = "none", t || (this.closeModal("m-model"), Toast.show(s.name + " ready", "ok"))
            } catch (s) {
                delete this._downloads[e], this._updateDlBar(-1), this._renderDlRows();
                const i = $id("m-err");
                throw i && (i.style.display = "block", i.textContent = "Failed: " + s.message), t || Toast.show("Load failed", "err", 4e3), s
            }
        }
    }
    _updateDlBar(e) {
        const t = $id("hdr-dl-bar"),
            s = $id("hdr-dl-fill");
        if (e < 0) return t && (t.style.display = "none"), void $id("tb-progress").classList.remove("active");
        t && (t.style.display = "block"), s && (s.style.width = Math.min(e, 100) + "%"), $id("tb-progress").classList.toggle("active", e < 100)
    }
    _renderDlRows() {
        const e = $id("dm-dl-rows");
        e && (e.innerHTML = "", Object.entries(this._downloads).forEach(([t, s]) => {
            e.innerHTML += `<div class="dl-row"><div style="display:flex;justify-content:space-between;font-size:9px"><span>${esc(s.name)}</span><span>${s.pct}%</span></div><div class="dl-bar"><div class="dl-fill" style="width:${s.pct}%"></div></div></div>`
        }))
    }
    _updateModel() {
        const e = MODELS.find(e => e.id === this.s.model),
            t = $id("tb-model");
        t && (t.textContent = e ? e.name : "No model");
        const s = $id("dm-name");
        s && (s.textContent = e ? e.name : "No model");
        const i = $id("dm-meta");
        i && (i.textContent = e ? e.rec + " · " + e.size : "Select a model to begin");
        const a = $id("call-model-lbl");
        a && (a.textContent = e ? e.name : ""), this._updateSendBtn()
    }
    _updateSendBtn() {
        const e = $id("btn-send"),
            t = $id("send-icon"),
            s = $id("send-saturn");
        if (e)
            if (this._gen) e.className = "send-btn stop", e.disabled = !1, t && (t.style.display = "none"), s && (s.style.display = "block", Saturn.start(s, {
                scale: .65
            }));
            else {
                Saturn.stop(s), s && (s.style.display = "none"), t && (t.className = "fa-solid fa-arrow-up", t.style.display = "");
                const i = MODELS.find(e => e.id === this.s.model),
                    a = !!i && ("local" === i.p ? !!this._engine : !!this.keys[i.p] || "ollama" === i.p);
                e.disabled = !a && !this._imgMode, e.className = "send-btn" + (a || this._imgMode ? " ready" : "")
            }
    }
    _mkMsg(e, t, s, i) {
        const a = document.createElement("div");
        if (a.className = "msg-wrap " + ("user" === e ? "user" : "ai"), a.dataset.idx = i, "assistant" === e) {
            const e = MODELS.find(e => e.id === this.s.model);
            if (e) {
                const t = document.createElement("div");
                t.className = "msg-model-badge", t.textContent = e.name, a.appendChild(t)
            }
        }
        const n = document.createElement("div");
        if (n.className = "msg-bubble" + ("assistant" === e ? " md" : ""), "user" === e ? n.textContent = t : this._renderMd(n, t), a.appendChild(n), s && this.s.ts) {
            const e = document.createElement("div");
            e.className = "msg-time", e.textContent = new Date(s).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            }), a.appendChild(e)
        }
        const o = document.createElement("div");
        let l;
        return o.className = "msg-actions", "user" === e ? [{
            icon: "fa-pen",
            fn: () => this._editMsg(i, t)
        }, {
            icon: "fa-copy",
            fn: () => {
                copyClip(t), Toast.show("Copied", "ok", 1200)
            }
        }].forEach(e => {
            const t = document.createElement("button");
            t.className = "msg-action", t.innerHTML = `<i class="fa-solid ${e.icon}"></i>`, t.onclick = e.fn, o.appendChild(t)
        }) : [{
            icon: "fa-copy",
            fn: () => {
                copyClip(t), Toast.show("Copied", "ok", 1200)
            }
        }, {
            icon: "fa-bookmark",
            fn: () => this._bookmark(t, s)
        }, {
            icon: "fa-volume-high",
            fn: () => this._tts(t)
        }].forEach(e => {
            const t = document.createElement("button");
            t.className = "msg-action", t.innerHTML = `<i class="fa-solid ${e.icon}"></i>`, t.onclick = e.fn, o.appendChild(t)
        }), a.appendChild(o), a.addEventListener("touchstart", () => {
            l = setTimeout(() => a.classList.add("touched"), 440)
        }, {
            passive: !0
        }), a.addEventListener("touchend", () => {
            clearTimeout(l), setTimeout(() => a.classList.remove("touched"), 2e3)
        }, {
            passive: !0
        }), a
    }
    _editMsg(e, t) {
        const s = $id("inp");
        if (!s) return;
        s.value = t, this._autoResize(s), s.focus(), this.hist = this.hist.slice(0, e);
        const i = $id("msgs");
        if (!i) return;
        const a = i.querySelectorAll(".msg-wrap");
        for (let t = e; t < a.length; t++) a[t].remove();
        if (!i.children.length) {
            const e = $id("empty");
            e && (e.style.display = "")
        }
    }
    _renderMd(e, t) {
        if (t) try {
            let s = 0;
            const i = {},
                a = t.replace(/```(\w*)\n?([\s\S]*?)```/g, (e, t, a) => {
                    const n = `\0CB${s++}\0`;
                    return i[n] = {
                        lang: t || detectLang(a.trim()),
                        code: a.trim()
                    }, n
                }),
                n = marked.parse(a, {
                    breaks: !0,
                    gfm: !0
                });
            e.innerHTML = DOMPurify.sanitize(n), Object.entries(i).forEach(([t, {
                lang: s,
                code: i
            }]) => {
                const a = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
                let n;
                for (; n = a.nextNode();)
                    if (n.textContent.includes(t)) {
                        const e = this._mkCodeBlock(s, i),
                            a = n.parentNode,
                            o = n.textContent.split(t),
                            l = document.createTextNode(o[0]),
                            c = document.createTextNode(o.slice(1).join(""));
                        a.insertBefore(l, n), a.insertBefore(e, n), a.insertBefore(c, n), a.removeChild(n);
                        break
                    } e.innerHTML.includes(t) && (e.innerHTML = e.innerHTML.split(t).join(""), e.appendChild(this._mkCodeBlock(s, i)))
            }), this.s.hl && e.querySelectorAll("pre code:not([data-hl])").forEach(e => {
                try {
                    hljs.highlightElement(e), e.dataset.hl = "1"
                } catch {}
            }), e.querySelectorAll("img").forEach(e => e.addEventListener("click", () => this._lb(e.src)))
        } catch (s) {
            e.textContent = t
        } else e.innerHTML = ""
    }
    _mkCodeBlock(e, t) {
        const s = uid("cb"),
            i = t.split("\n").length > 45,
            a = "html" === e || "svg" === e || isCodingModel(this.s.model),
            n = document.createElement("div");
        n.className = "code-block", n.innerHTML = `\n<div class="code-block-hdr">\n  <div style="display:flex;align-items:center;gap:8px">\n    <button class="code-block-btn" id="cctog-${s}" title="Collapse"><i class="fa-solid fa-chevron-up" style="font-size:8px"></i></button>\n    <span class="code-block-lang">${esc(e)}</span>\n    ${i?`<span style="font-size:9px;color:var(--fg4)">${t.split("\n").length} lines</span>`:""}\n  </div>\n  <div class="code-block-actions">\n    ${a?`<button class="code-block-btn" id="cprev-${s}"><i class="fa-solid fa-eye"></i> Preview</button>`:""}\n    <button class="code-block-btn" id="cedit-${s}"><i class="fa-solid fa-pen" style="font-size:9px"></i></button>\n    <button class="code-block-btn" id="cdl-${s}"><i class="fa-solid fa-download" style="font-size:9px"></i></button>\n    <button class="code-block-btn" id="ccopy-${s}"><i class="fa-solid fa-copy" style="font-size:9px"></i> Copy</button>\n  </div>\n</div>\n<div class="code-content${i?" collapsed":""}" id="ccnt-${s}">\n  <pre><code class="language-${esc(e)}">${esc(t)}</code></pre>\n</div>\n${i?`<button class="code-large-toggle" id="cexp-${s}"><i class="fa-solid fa-chevron-down" style="font-size:9px"></i> Show all ${t.split("\n").length} lines</button>`:""}\n<div class="code-edit-area" id="cedit-area-${s}">\n  <textarea class="code-edit-ta" id="ceta-${s}" spellcheck="false"></textarea>\n  <div class="code-edit-bar">\n    <button class="code-block-btn" id="capply-${s}"><i class="fa-solid fa-check"></i> Apply</button>\n    <button class="code-block-btn" id="ccancel-${s}">Cancel</button>\n  </div>\n</div>`;
        const o = n.querySelector("code");
        if (this.s.hl && o) try {
            hljs.highlightElement(o)
        } catch {}
        return setTimeout(() => {
            $id(`cctog-${s}`)?.addEventListener("click", () => {
                const e = $id(`ccnt-${s}`),
                    t = $id(`cctog-${s}`);
                e?.classList.toggle("collapsed"), t.innerHTML = e?.classList.contains("collapsed") ? '<i class="fa-solid fa-chevron-down" style="font-size:8px"></i>' : '<i class="fa-solid fa-chevron-up" style="font-size:8px"></i>'
            }), $id(`ccopy-${s}`)?.addEventListener("click", () => {
                copyClip(t), Toast.show("Copied", "ok", 1200)
            }), $id(`cdl-${s}`)?.addEventListener("click", () => {
                dlFile(t, `code.${{javascript:"js",python:"py",html:"html",css:"css",rust:"rs",cpp:"cpp",go:"go",sql:"sql",json:"json"}[e]||"txt"}`)
            }), $id(`cprev-${s}`)?.addEventListener("click", () => this._showHtmlPreview(t, e)), $id(`cexp-${s}`)?.addEventListener("click", () => {
                $id(`ccnt-${s}`)?.classList.remove("collapsed"), $id(`cexp-${s}`)?.remove()
            }), $id(`cedit-${s}`)?.addEventListener("click", () => {
                const e = $id(`ceta-${s}`),
                    i = $id(`cedit-area-${s}`),
                    a = $id(`ccnt-${s}`);
                e && i && (e.value = t, i.classList.add("active"), a?.classList.add("collapsed"))
            }), $id(`capply-${s}`)?.addEventListener("click", () => {
                const t = $id(`ceta-${s}`);
                if (!t) return;
                const i = t.value,
                    a = n.querySelector("code");
                if (a) {
                    a.textContent = i;
                    try {
                        hljs.highlightElement(a)
                    } catch {}
                }
                $id(`cedit-area-${s}`)?.classList.remove("active"), $id(`ccnt-${s}`)?.classList.remove("collapsed"), "html" === e && this._showHtmlPreview(i, "html"), Toast.show("Applied", "ok", 1200)
            }), $id(`ccancel-${s}`)?.addEventListener("click", () => {
                $id(`cedit-area-${s}`)?.classList.remove("active"), $id(`ccnt-${s}`)?.classList.remove("collapsed")
            })
        }, 0), n
    }
    _showHtmlPreview(e, t) {
        const s = $id("html-frame"),
            i = $id("html-src");
        s && (s.srcdoc = "html" === t || "svg" === t ? e : `<pre style="font-family:monospace;padding:16px;white-space:pre-wrap;font-size:13px">${esc(e)}</pre>`), i && (i.textContent = e), this.openModal("m-html")
    }
    _showPill() {
        $id("stream-pill").classList.add("show")
    }
    _hidePill() {
        $id("stream-pill").classList.remove("show")
    }
    async _send(e) {
        if (!e?.trim()) return;
        if (this._gen) return void this._stop();
        if (this._imgMode) return void await this._sendImage(e);
        const t = MODELS.find(e => e.id === this.s.model);
        if (!t) return Toast.show("Select a model first", "warn"), void this.openModal("m-model");
        const s = t.p;
        if ("local" === s && !this._engine) return void Toast.show("Model not loaded", "warn");
        if (!["local", "ollama"].includes(s) && !this.keys[s]) return Toast.show("Add an API key in settings", "warn"), void this.openModal("m-keys");
        if (this._arenaMode && this._arenaModel2) return void this._sendArena(e);
        const i = $id("msgs"),
            a = $id("empty");
        a && (a.style.display = "none");
        let n = PII.scrub(e);
        if (this.files.length) {
            const t = this.files.filter(e => e.txt).map(e => `[File: ${e.name}]\n\`\`\`${e.ext||"txt"}\n${e.txt.slice(0,2e4)}\n\`\`\``);
            t.length && (n = e + "\n\n" + t.join("\n\n")), this.files = [];
            const s = $id("att-bar");
            s && (s.innerHTML = "", s.classList.remove("show"))
        }
        this.hist.push({
            role: "user",
            content: n,
            ts: Date.now()
        });
        const o = this._mkMsg("user", e, Date.now(), this.hist.filter(e => "system" !== e.role).length - 1);
        i.appendChild(o);
        const l = $id("inp");
        l.value = "", this._autoResize(l), this._atBot && this._scrollBot(!1);
        const c = document.createElement("div");
        c.className = "msg-wrap ai", c.innerHTML = '<div class="msg-bubble" style="background:var(--bg2);border:1px solid var(--border);border-bottom-left-radius:6px"><div class="typing-dots"><span></span><span></span><span></span></div></div>', i.appendChild(c), this._atBot && this._scrollBot(!1), this._gen = !0, this._genStart = Date.now(), this._genToks = 0, this._updateSendBtn(), this._showPill(), this._stats.prompts++, CircuitBreaker.reset();
        const r = this._mkMsg("assistant", "", Date.now(), this.hist.filter(e => "system" !== e.role).length),
            d = r.querySelector(".msg-bubble");
        let h = !1;
        const p = document.createElement("button");
        p.style.cssText = "background:none;border:none;color:var(--fg4);font-size:10px;cursor:pointer;padding:3px 8px;display:flex;align-items:center;gap:5px;margin-left:2px;border-radius:8px;transition:background .15s", p.innerHTML = '<span style="width:5px;height:5px;border-radius:50%;background:var(--fg3);animation:pulse 1.2s infinite;display:inline-block;flex-shrink:0"></span><span>Generating…</span>', p.title = "Tap to expand", p.onclick = () => {
            h = !0, p.remove(), c.remove(), i.appendChild(r), this._atBot && this._scrollBot(!1)
        }, i.appendChild(p);
        let m = "",
            u = !1;
        const g = throttle(() => {
                h && d && (this._renderMd(d, m), this._atBot && this._scrollBot(!1));
                const e = (Date.now() - this._genStart) / 1e3,
                    t = e > 0 ? (this._genToks / e).toFixed(1) : "0";
                $id("sp-speed").textContent = t + " t/s", $id("sp-tok").textContent = this._genToks + " tok";
                const s = $id("footer-speed");
                s && (s.style.display = "", s.textContent = t + " t/s")
            }, 80),
            f = setTimeout(() => {
                if (this._gen && m.length < 8) {
                    const e = document.createElement("div");
                    e.className = "timeout-hint", e.innerHTML = '<i class="fa-solid fa-clock" style="font-size:10px"></i> Taking a while — try stopping and using a smaller model.', r.querySelector(".msg-bubble")?.appendChild(e)
                }
            }, 22e3);
        this._abortCtrl = new AbortController;
        const _ = this._abortCtrl.signal;
        try {
            const e = Router.adaptTemp(n, +this.s.temp),
                a = {
                    role: "system",
                    content: isCodingModel(t.id) ? SYS_CODER : this.s.sys || SYS_DEFAULT
                },
                o = [a, ...Memory.buildContext(this.hist).map(e => ({
                    role: e.role,
                    content: e.content
                }))];
            if ("local" === s && this._engine) {
                const t = await this._engine.chat.completions.create({
                    messages: o,
                    temperature: e,
                    max_tokens: +this.s.maxTok,
                    top_p: +this.s.topP,
                    stream: !0
                });
                for await (const e of t) {
                    if (!this._gen || _.aborted) break;
                    const t = e.choices[0]?.delta?.content || "";
                    if (t && (m += t, this._genToks++, g(), m.length > 60 && !u && checkBadResponse(m) && (u = !0), m.length > 200 && CircuitBreaker.check(m))) {
                        this._stop();
                        break
                    }
                }
            } else if ("ollama" === s) {
                const e = this.keys.ollamaUrl || "http://localhost:11434",
                    t = await fetch(e + "/api/chat", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            model: this.keys.ollamaModel || "llama3",
                            messages: o,
                            stream: !0
                        }),
                        signal: _
                    });
                if (!t.ok) throw new Error("Ollama " + t.status);
                const s = t.body.getReader(),
                    i = new TextDecoder;
                let a = "";
                for (;;) {
                    const {
                        done: e,
                        value: t
                    } = await s.read();
                    if (e || _.aborted) break;
                    a += i.decode(t, {
                        stream: !0
                    });
                    for (const e of a.split("\n"))
                        if (e.trim()) try {
                            const t = JSON.parse(e);
                            if (t.message?.content && (m += t.message.content, this._genToks++, g()), t.done) break
                        } catch {}
                    a = ""
                }
            } else {
                const i = {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + this.keys[s]
                };
                let n = "",
                    l = {};
                "openai" === s ? (n = "https://api.openai.com/v1/chat/completions", l = {
                    model: t.id,
                    messages: o,
                    temperature: e,
                    max_tokens: +this.s.maxTok,
                    stream: this.s.stream
                }) : "gemini" === s ? (n = `https://generativelanguage.googleapis.com/v1beta/models/${t.id}:generateContent?key=${this.keys[s]}`, delete i.Authorization, l = {
                    contents: o.filter(e => "system" !== e.role).map(e => ({
                        role: "assistant" === e.role ? "model" : "user",
                        parts: [{
                            text: e.content
                        }]
                    })),
                    generationConfig: {
                        temperature: e,
                        maxOutputTokens: +this.s.maxTok
                    },
                    systemInstruction: {
                        parts: [{
                            text: a.content
                        }]
                    }
                }) : "anthropic" === s && (n = "https://api.anthropic.com/v1/messages", i["anthropic-version"] = "2023-06-01", i["x-api-key"] = this.keys[s], delete i.Authorization, l = {
                    model: t.id,
                    messages: o.filter(e => "system" !== e.role),
                    system: a.content,
                    max_tokens: +this.s.maxTok,
                    stream: this.s.stream
                });
                const c = await fetch(n, {
                    method: "POST",
                    headers: i,
                    body: JSON.stringify(l),
                    signal: _
                });
                if (!c.ok) {
                    const e = await c.json().catch(() => ({}));
                    throw new Error(e.error?.message || "HTTP " + c.status)
                }
                if (this.s.stream && "gemini" !== s) {
                    const e = c.body.getReader(),
                        t = new TextDecoder;
                    for (;;) {
                        const {
                            done: s,
                            value: i
                        } = await e.read();
                        if (s || _.aborted) break;
                        for (const e of t.decode(i, {
                                stream: !0
                            }).split("\n")) {
                            if (!e.startsWith("data:")) continue;
                            const t = e.slice(5).trim();
                            if ("[DONE]" === t) break;
                            try {
                                const e = JSON.parse(t),
                                    s = e.choices?.[0]?.delta?.content || e.delta?.text || "";
                                s && (m += s, this._genToks++, g())
                            } catch {}
                        }
                    }
                } else {
                    const e = await c.json();
                    m = "gemini" === s ? e.candidates?.[0]?.content?.parts?.map(e => e.text).join("") || "" : e.choices?.[0]?.message?.content || ""
                }
            }
            clearTimeout(f), p.remove(), c.remove(), h || i.appendChild(r), d && this._renderMd(d, m), this.hist.push({
                role: "assistant",
                content: m,
                ts: Date.now(),
                model: t.id
            });
            const l = Date.now() - this._genStart,
                v = ++this._stats.rc;
            if (this._stats.avgMs = (this._stats.avgMs * (v - 1) + l) / v, this._stats.toksOut += this._genToks, this._tempChat || this._saveDeb(), this._renderConvs(), u) {
                const e = document.createElement("div");
                e.className = "poor-hint";
                const t = BETTER_MODEL[Router.intent(n)] || BETTER_MODEL.general;
                e.innerHTML = `<i class="fa-solid fa-lightbulb" style="font-size:10px"></i> Response may be limited. Try <strong>${esc(t)}</strong> for better results.`, r.appendChild(e)
            }
            if (isCutOff(m)) {
                const e = document.createElement("button");
                e.className = "cont-chip", e.innerHTML = '<i class="fa-solid fa-arrow-turn-down" style="font-size:10px"></i> Continue', e.onclick = () => {
                    e.remove(), this._send("Continue.")
                }, r.appendChild(e)
            }
            if (document.hidden && l > 3e3 && this.s.notif && "granted" === Notification.permission) try {
                new Notification("mai.", {
                    body: truncate(m, 100)
                })
            } catch {}
            this._atBot && this._scrollBot()
        } catch (e) {
            clearTimeout(f), p.remove(), c.remove(), "AbortError" === e.name || e.message?.includes("interrupt") ? (m && (d && this._renderMd(d, m), h || i.appendChild(r), this.hist.push({
                role: "assistant",
                content: m,
                ts: Date.now(),
                model: t.id
            }), this._tempChat || this._saveDeb()), Toast.show("Stopped", "info", 1200)) : (h || i.appendChild(r), d && this._renderMd(d, "**Error:** " + e.message), Toast.show(e.message || "Failed", "err", 4e3), this._stats.errors++)
        } finally {
            this._gen = !1, this._abortCtrl = null, this._hidePill();
            const e = $id("footer-speed");
            e && (e.style.display = "none"), l.disabled = !1, l.focus(), this._updateSendBtn(), await this._saveStats()
        }
    }
    _stop() {
        if (this._abortCtrl) try {
            this._abortCtrl.abort()
        } catch {}
        if (this._engine?.interrupt) try {
            this._engine.interrupt()
        } catch {}
        this._gen = !1, this._updateSendBtn()
    }
    _sendArena(e) {
        const t = $id("msgs"),
            s = $id("empty");
        s && (s.style.display = "none"), this.hist.push({
            role: "user",
            content: e,
            ts: Date.now()
        }), t.appendChild(this._mkMsg("user", e, Date.now(), this.hist.length - 1));
        const i = $id("inp");
        i.value = "", this._autoResize(i), this._scrollBot(!1);
        const a = MODELS.find(e => e.id === this.s.model),
            n = MODELS.find(e => e.id === this._arenaModel2),
            o = document.createElement("div");
        o.className = "msg-wrap ai arena-wrap";
        const l = document.createElement("div");
        l.className = "arena-col";
        const c = document.createElement("div");
        c.className = "arena-col", l.innerHTML = `<div class="arena-label">${esc(a?.name||"Model A")}</div><div class="msg-bubble md" style="background:var(--bg2);border:1px solid var(--border);border-radius:14px;padding:10px 12px;font-size:13px"><div class="typing-dots"><span></span><span></span><span></span></div></div>`, c.innerHTML = `<div class="arena-label">${esc(n?.name||"Model B")}</div><div class="msg-bubble md" style="background:var(--bg2);border:1px solid var(--border);border-radius:14px;padding:10px 12px;font-size:13px"><div class="typing-dots"><span></span><span></span><span></span></div></div>`, o.appendChild(l), o.appendChild(c), t.appendChild(o), this._scrollBot(!1), Toast.show("mai. team — comparing responses", "info", 2500), setTimeout(() => {
            c.querySelector(".msg-bubble").innerHTML = '<span style="font-size:12px;color:var(--fg3)">Load a second model via <strong>Models</strong> to compare responses.</span>'
        }, 2e3), this._sendToCol(e, l.querySelector(".msg-bubble"))
    }
    async _sendToCol(e, t) {
        if (!t) return;
        const s = MODELS.find(e => e.id === this.s.model);
        if (!s || "local" !== s.p || !this._engine) return void(t.textContent = "(Run a local model to see response)");
        const i = [{
            role: "system",
            content: isCodingModel(s.id) ? SYS_CODER : this.s.sys || SYS_DEFAULT
        }, ...Memory.buildContext(this.hist).map(e => ({
            role: e.role,
            content: e.content
        }))];
        let a = "";
        try {
            const e = await this._engine.chat.completions.create({
                messages: i,
                temperature: +this.s.temp,
                max_tokens: Math.min(+this.s.maxTok, 600),
                stream: !0
            });
            for await (const s of e) {
                const e = s.choices[0]?.delta?.content || "";
                e && (a += e, this._renderMd(t, a))
            }
            this.hist.push({
                role: "assistant",
                content: a,
                ts: Date.now(),
                model: s.id
            }), this._tempChat || this._saveDeb()
        } catch (e) {
            t.textContent = "Error: " + e.message
        }
    }
    async _sendImage(e) {
        const t = $id("msgs"),
            s = $id("empty");
        s && (s.style.display = "none"), this.hist.push({
            role: "user",
            content: "[Image] " + e,
            ts: Date.now()
        }), t.appendChild(this._mkMsg("user", e, Date.now(), this.hist.length - 1));
        const i = $id("inp");
        i.value = "", this._autoResize(i);
        const a = document.createElement("div");
        a.className = "msg-wrap ai";
        const n = document.createElement("div");
        n.className = "msg-bubble md", n.style.cssText = "background:var(--bg2);border:1px solid var(--border);border-bottom-left-radius:6px", n.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>', a.appendChild(n), t.appendChild(a), this._scrollBot(!1);
        try {
            const t = $id("ig-model")?.value || "pollinations",
                s = await this._genImage(e, t);
            n.innerHTML = "";
            const i = document.createElement("div");
            i.style.cssText = "font-size:11px;color:var(--fg3);margin-bottom:6px", i.textContent = e;
            const a = document.createElement("img");
            a.src = s, a.style.cssText = "max-width:100%;border-radius:12px;cursor:zoom-in;display:block", a.onclick = () => this._lb(s), n.appendChild(i), n.appendChild(a), this.hist.push({
                role: "assistant",
                content: `![Generated](${s})`,
                ts: Date.now()
            }), this._tempChat || this._saveDeb()
        } catch (e) {
            n.textContent = "Image failed: " + e.message, Toast.show("Image generation failed", "err", 4e3)
        }
        this._scrollBot()
    }
    async _genImage(e, t) {
        const s = encodeURIComponent(e);
        if (!t || "pollinations" === t) {
            const e = `https://image.pollinations.ai/prompt/${s}?width=512&height=512&nologo=true&seed=${Math.floor(99999*Math.random())}`;
            return await new Promise((t, s) => {
                const i = new Image;
                i.onload = t, i.onerror = s, i.src = e
            }), e
        }
        if ("craiyon" === t) {
            const t = await fetch("https://backend.craiyon.com/generate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        prompt: e
                    })
                }),
                s = await t.json();
            if (s.images?.[0]) return "data:image/webp;base64," + s.images[0];
            throw new Error("Craiyon returned no image")
        }
        if ("hf-sdxl" === t) {
            const t = await fetch("https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    inputs: e
                })
            });
            if (!t.ok) throw new Error("HF API error " + t.status);
            const s = await t.blob();
            return URL.createObjectURL(s)
        }
        if ("dalle3" === t && this.keys.openai) {
            const t = await fetch("https://api.openai.com/v1/images/generations", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + this.keys.openai,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "dall-e-3",
                    prompt: e,
                    n: 1,
                    size: "1024x1024"
                })
            });
            return (await t.json()).data[0].url
        }
        return `https://image.pollinations.ai/prompt/${s}?width=512&height=512&nologo=true`
    }
    async _handleImageGenModal() {
        const e = $id("ig-prompt")?.value?.trim();
        if (!e) return void Toast.show("Enter a prompt", "warn");
        const t = $id("ig-model")?.value || "pollinations",
            s = $id("ig-result");
        s && (s.innerHTML = '<div class="typing-dots" style="padding:12px 0"><span></span><span></span><span></span></div>');
        try {
            const i = await this._genImage(e, t);
            if (s) {
                s.innerHTML = "";
                const e = document.createElement("div");
                e.className = "img-gen-result";
                const t = document.createElement("img");
                t.src = i, t.onclick = () => this._lb(i);
                const a = document.createElement("div");
                a.className = "img-gen-actions", a.innerHTML = `<button onclick="window.app._lb('${i.replace(/'/g,"\\'")}')"><i class="fa-solid fa-expand"></i></button><a href="${i}" download="generated.png"><button><i class="fa-solid fa-download"></i></button></a>`, e.appendChild(t), e.appendChild(a), s.appendChild(e)
            }
        } catch (e) {
            s && (s.textContent = "Failed: " + e.message)
        }
    }
    async _addFiles(e) {
        const t = [...e].filter(e => ["txt", "md", "js", "ts", "py", "html", "css", "json", "csv", "xml", "yaml", "yml", "sh", "sql", "jpg", "jpeg", "png", "gif", "webp"].includes(e.name.split(".").pop().toLowerCase()));
        for (const e of t.slice(0, 10)) {
            const t = e.name.split(".").pop().toLowerCase(),
                s = {
                    id: uid(),
                    name: e.name,
                    size: e.size,
                    ext: t
                };
            try {
                ["jpg", "jpeg", "png", "gif", "webp"].includes(t) ? (s.url = await new Promise((t, s) => {
                    const i = new FileReader;
                    i.onload = () => t(i.result), i.onerror = s, i.readAsDataURL(e)
                }), s.isImage = !0) : s.txt = await e.text(), this.files.push(s), this._renderAtt()
            } catch {
                Toast.show("Could not read " + e.name, "err")
            }
        }
    }
    _renderAtt() {
        const e = $id("att-bar");
        e && (e.innerHTML = "", this.files.length ? (e.classList.add("show"), this.files.forEach(t => {
            const s = document.createElement("div");
            s.className = "att-chip", t.isImage ? s.innerHTML = `<img src="${t.url}" alt="${esc(t.name)}">${esc(t.name)}<button data-id="${t.id}"><i class="fa-solid fa-xmark"></i></button>` : s.innerHTML = `<i class="fa-solid fa-file" style="font-size:10px;color:var(--fg3)"></i>${esc(t.name)}<button data-id="${t.id}"><i class="fa-solid fa-xmark"></i></button>`, s.querySelector("button").onclick = () => {
                this.files = this.files.filter(e => e.id !== t.id), this._renderAtt()
            }, e.appendChild(s)
        })) : e.classList.remove("show"))
    }
    _startVoice() {
        const e = window.SpeechRecognition || window.webkitSpeechRecognition;
        e ? (this._sr = new e, this._sr.continuous = !1, this._sr.interimResults = !0, this._sr.lang = "en-US", this._sr.onresult = e => {
            const t = [...e.results].map(e => e[0].transcript).join(""),
                s = $id("inp");
            s && (s.value = t, this._autoResize(s)), $id("voice-txt").textContent = t || "Listening..."
        }, this._sr.onerror = () => this._stopVoice(), this._sr.onend = () => {
            const e = $id("inp")?.value?.trim();
            this._stopVoice(), e && this._send(e)
        }, this._sr.start(), this.openModal("m-voice")) : Toast.show("Speech recognition not supported", "warn")
    }
    _stopVoice() {
        this._sr?.stop(), this._sr = null, this.closeModal("m-voice")
    }
    _tts(e) {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const t = e.replace(/```[\s\S]*?```/g, " code block. ").replace(/`[^`]+`/g, "").replace(/#{1,6}\s/g, "").replace(/\*{1,2}([^*]+)\*{1,2}/g, "$1").slice(0, 4e3),
            s = new SpeechSynthesisUtterance(t);
        s.rate = 1.05, s.pitch = 1, window.speechSynthesis.speak(s)
    }
    _openCall() {
        const e = $id("call-page");
        if (!e) return;
        e.style.display = "flex", this._callActive = !0;
        const t = $id("call-canvas");
        t && (t.width = window.innerWidth, t.height = window.innerHeight, Saturn.start(t, {
            scale: 1.4
        }));
        const s = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!s) return void Toast.show("Speech recognition not supported", "warn");
        this._callSr = new s, this._callSr.continuous = !0, this._callSr.interimResults = !0, this._callSr.lang = "en-US";
        let i = "",
            a = null;
        this._callSr.onresult = e => {
            let t = "";
            for (let s = e.resultIndex; s < e.results.length; s++) e.results[s].isFinal ? i += e.results[s][0].transcript + " " : t = e.results[s][0].transcript;
            const s = $id("call-transcript");
            s && (s.textContent = i + t || "Listening…"), $id("call-status").textContent = "Listening…", $$(".cb").forEach(e => e.classList.add("active")), clearTimeout(a), i.trim() && (a = setTimeout(async () => {
                const e = i.trim();
                i = "";
                const t = $id("call-transcript");
                t && (t.textContent = ""), await this._callRespond(e)
            }, 1800))
        }, this._callSr.onend = () => {
            if (this._callActive) try {
                this._callSr.start()
            } catch {}
        };
        try {
            this._callSr.start()
        } catch {}
    }
    async _callRespond(e) {
        const t = $id("call-status");
        t && (t.textContent = "Responding…"), $$(".cb").forEach(e => e.classList.remove("active"));
        const s = MODELS.find(e => e.id === this.s.model);
        if (!s || "local" !== s.p || !this._engine) {
            const e = $id("call-subtitles");
            return e && (e.textContent = "(Load a local model for voice responses)"), void(t && (t.textContent = "Listening…"))
        }
        try {
            const t = [{
                    role: "system",
                    content: (this.s.sys || SYS_DEFAULT) + " Be very concise. Respond in 1-3 short sentences only."
                }, ...this.hist.filter(e => "system" !== e.role).slice(-6), {
                    role: "user",
                    content: e
                }],
                s = await this._engine.chat.completions.create({
                    messages: t,
                    temperature: .6,
                    max_tokens: 120
                }),
                i = s.choices[0]?.message?.content || "";
            if (i) {
                const t = $id("call-subtitles");
                t && (t.innerHTML = ""), i.split(" ").forEach((e, s) => {
                    const i = document.createElement("span");
                    i.textContent = e + " ", i.style.cssText = `opacity:0;transition:opacity .14s;transition-delay:${.065*s}s`, t?.appendChild(i), requestAnimationFrame(() => requestAnimationFrame(() => i.style.opacity = "1"))
                }), this.hist.push({
                    role: "user",
                    content: e,
                    ts: Date.now()
                }), this.hist.push({
                    role: "assistant",
                    content: i,
                    ts: Date.now()
                }), this._tts(i), this._tempChat || this._saveDeb()
            }
        } catch (e) {
            Toast.show("Call error: " + e.message, "err", 3e3)
        }
        t && (t.textContent = "Listening…"), $$(".cb").forEach(e => e.classList.remove("active"))
    }
    _closeCall() {
        if (this._callActive = !1, this._callSr) {
            try {
                this._callSr.stop()
            } catch {}
            this._callSr = null
        }
        window.speechSynthesis?.cancel(), Saturn.stop($id("call-canvas"));
        const e = $id("call-page");
        e && (e.style.display = "none")
    }
    _scrollBot(e = !0) {
        const t = $id("chat-scroll");
        t && t.scrollTo({
            top: t.scrollHeight,
            behavior: e ? "smooth" : "instant"
        })
    }
    _updateScroll() {
        const e = $id("chat-scroll");
        e && (this._atBot = e.scrollHeight - e.scrollTop - e.clientHeight < 80)
    }
    _autoResize(e) {
        e && (e.style.height = "auto", e.style.height = Math.min(e.scrollHeight, 130) + "px")
    }
    _openDrawer() {
        $id("drawer").classList.add("open"), $id("drawer-ov").classList.add("open"), this._drawerOpen = !0, this._renderConvs()
    }
    _closeDrawer() {
        $id("drawer").classList.remove("open"), $id("drawer-ov").classList.remove("open"), this._drawerOpen = !1
    }
    _toggleDrawer() {
        this._drawerOpen ? this._closeDrawer() : this._openDrawer()
    }
    _openPlusMenu() {
        const e = $id("plus-menu"),
            t = $id("plus-ov");
        e && (e.style.display = "block"), t && (t.style.display = "block"), this._plusOpen = !0
    }
    _closePlusMenu() {
        const e = $id("plus-menu"),
            t = $id("plus-ov");
        e && (e.style.display = "none"), t && (t.style.display = "none"), this._plusOpen = !1
    }
    _togglePlusMenu() {
        this._plusOpen ? this._closePlusMenu() : this._openPlusMenu()
    }
    openModal(e) {
        const t = $id(e);
        t && (t.classList.add("open"), "m-model" === e && this._buildCats("m-model-cats", e => {
            this._selModel = e;
            const t = $id("m-load-btn");
            t && (t.disabled = !1, t.textContent = "local" === e.p ? "Download " + e.name : "Use " + e.name)
        }), "m-settings" === e && this._fillSettings(), "m-stats" === e && this._fillStats(), "m-tmpl" === e && this._fillTmpl(), "m-bm" === e && this._fillBm(), "m-export" === e && this._fillExport())
    }
    closeModal(e) {
        const t = $id(e);
        t && t.classList.remove("open")
    }
    closeAllModals() {
        $$(".modal-ov.open").forEach(e => e.classList.remove("open"))
    }
    _fillSettings() {
        const e = (e, t) => {
                const s = $id(e);
                s && (s.value = t)
            },
            t = (e, t) => {
                const s = $id(e);
                s && (s.checked = t)
            };
        e("s-theme", this.s.theme), e("s-name", this.s.name), e("s-job", this.s.job), e("s-temp", this.s.temp), e("s-maxtok", this.s.maxTok), e("s-topp", this.s.topP), e("s-sys", this.s.sys), e("s-autoload", this.s.autoLoad);
        const s = $id("s-temp-v");
        s && (s.textContent = this.s.temp), t("s-stream", this.s.stream), t("s-hl", this.s.hl), t("s-ts", this.s.ts), t("s-autotitle", this.s.autoTitle), t("s-confdel", this.s.confDel), t("s-notif", this.s.notif)
    }
    async _saveSettings() {
        const e = e => $id(e)?.value,
            t = e => $id(e)?.checked;
        this.s.theme = e("s-theme") || "dark", this.s.name = e("s-name") || "", this.s.job = e("s-job") || "", this.s.temp = parseFloat(e("s-temp")) || .7, this.s.maxTok = parseInt(e("s-maxtok")) || 2048, this.s.topP = parseFloat(e("s-topp")) || .95, this.s.sys = e("s-sys") || "", this.s.autoLoad = e("s-autoload") || DEFAULT_AUTO_MODEL, this.s.stream = t("s-stream"), this.s.hl = t("s-hl"), this.s.ts = t("s-ts"), this.s.autoTitle = t("s-autotitle"), this.s.confDel = t("s-confdel"), this.s.notif = t("s-notif"), this._theme(this.s.theme), await this._saveCfg(), this._greet(), this.closeModal("m-settings"), Toast.show("Settings saved", "ok")
    }
    _fillStats() {
        const e = this._stats,
            t = (e, t) => {
                const s = $id(e);
                s && (s.textContent = t)
            };
        t("st-prompts", e.prompts), t("st-sessions", e.sessions), t("st-toks", e.toksOut > 999 ? (e.toksOut / 1e3).toFixed(1) + "k" : e.toksOut), t("st-err", e.errors), t("st-avg", e.rc ? Math.round(e.avgMs) + "ms" : "—"), t("st-time", fmtMs(Date.now() - this._sessStart))
    }
    async _fillTmpl() {
        const e = $id("tm-list"),
            t = await DB.getAll("t");
        e.innerHTML = "", t.length ? t.forEach(t => {
            const s = document.createElement("div");
            s.className = "tmpl-item", s.innerHTML = `<div class="tmpl-name">${esc(t.name)}</div><div class="tmpl-prev">${esc(truncate(t.content,60))}</div><div style="display:flex;gap:4px;margin-top:6px"><button class="m-btn ghost" style="flex:1;padding:6px;font-size:11px" data-use>Use</button><button class="m-btn ghost" style="flex:0;padding:6px;font-size:11px;color:var(--fg3)" data-del><i class="fa-solid fa-trash"></i></button></div>`, s.querySelector("[data-use]").onclick = () => {
                const e = $id("inp");
                e && (e.value = t.content, this._autoResize(e)), this.closeModal("m-tmpl")
            }, s.querySelector("[data-del]").onclick = async () => {
                await DB.del("t", t.id), this._fillTmpl()
            }, e.appendChild(s)
        }) : e.innerHTML = '<div class="empty-sm">No templates</div>'
    }
    async _saveTmpl() {
        const e = $id("tm-name")?.value?.trim(),
            t = $id("tm-content")?.value?.trim();
        e && t ? (await DB.put("t", {
            id: uid("t_"),
            name: e,
            content: t
        }), $id("tm-name").value = "", $id("tm-content").value = "", this._fillTmpl(), Toast.show("Saved", "ok", 1200)) : Toast.show("Name and content required", "warn")
    }
    async _fillBm() {
        const e = $id("bm-list"),
            t = await DB.getAll("b");
        e.innerHTML = "", t.length ? t.sort((e, t) => t.ts - e.ts).forEach(t => {
            const s = document.createElement("div");
            s.className = "bm-item", s.innerHTML = `<div class="bm-text">${esc(truncate(t.content,120))}</div><div class="bm-ts">${relT(t.ts)}</div><div style="display:flex;gap:4px;margin-top:6px"><button class="m-btn ghost" style="flex:1;padding:6px;font-size:11px" data-copy>Copy</button><button class="m-btn ghost" style="flex:0;padding:6px;font-size:11px;color:var(--fg3)" data-del><i class="fa-solid fa-trash"></i></button></div>`, s.querySelector("[data-copy]").onclick = () => {
                copyClip(t.content), Toast.show("Copied", "ok", 1200)
            }, s.querySelector("[data-del]").onclick = async () => {
                await DB.del("b", t.id), this._fillBm()
            }, e.appendChild(s)
        }) : e.innerHTML = '<div class="empty-sm">Nothing saved yet</div>'
    }
    async _bookmark(e, t) {
        await DB.put("b", {
            id: uid("b_"),
            content: e,
            ts: t
        }), Toast.show("Saved", "ok", 1200)
    }
    _fillExport() {
        const e = this.hist.filter(e => "system" !== e.role).slice(0, 4);
        $id("ex-preview").textContent = e.length ? e.map(e => ("user" === e.role ? "You" : "mai.") + ": " + truncate(e.content, 70)).join("\n\n") : "No messages"
    }
    async _doExport() {
        const e = this.hist.filter(e => "system" !== e.role);
        if (!e.length) return void Toast.show("Nothing to export", "warn");
        const t = $id("ex-fmt")?.value || "md",
            s = (this.conv?.title || "chat").toLowerCase().replace(/\s+/g, "-") + "." + t;
        let i = "";
        "md" === t ? (i = "# " + (this.conv?.title || "Chat") + "\n\n", e.forEach(e => {
            i += "## " + ("user" === e.role ? "You" : "mai.") + "\n\n" + e.content + "\n\n---\n\n"
        })) : "json" === t ? i = JSON.stringify({
            version: "1.0",
            title: this.conv?.title,
            created: this.conv?.created,
            messages: e
        }, null, 2) : e.forEach(e => {
            i += ("user" === e.role ? "You" : "mai.") + ": " + e.content + "\n\n"
        }), dlFile(i, s, "json" === t ? "application/json" : "text/plain"), this.closeModal("m-export"), Toast.show("Exported", "ok")
    }
    _initCtx() {
        document.addEventListener("click", () => this._hideCtx()), document.addEventListener("keydown", e => {
            "Escape" === e.key && this._hideCtx()
        })
    }
    _showCtx(e, t, s) {
        if (!this._ctxEl) return;
        this._ctxEl.innerHTML = "", s.forEach(e => {
            if ("---" === e) {
                const e = document.createElement("div");
                return e.className = "ctx-sep", void this._ctxEl.appendChild(e)
            }
            const t = document.createElement("button");
            t.className = "ctx-item" + (e.danger ? " danger" : ""), t.innerHTML = `<i class="fa-solid ${e.icon}" style="width:16px;font-size:10px;text-align:center"></i>${esc(e.label)}`, t.onclick = () => {
                e.fn?.(), this._hideCtx()
            }, this._ctxEl.appendChild(t)
        }), this._ctxEl.classList.add("show");
        const i = Math.min(e, innerWidth - 185),
            a = Math.min(t, innerHeight - this._ctxEl.offsetHeight - 20);
        this._ctxEl.style.left = i + "px", this._ctxEl.style.top = a + "px"
    }
    _hideCtx() {
        this._ctxEl?.classList.remove("show")
    }
    _lb(e) {
        $id("lb-img").src = e, $id("lightbox").classList.add("show")
    }
    _closeLb() {
        $id("lightbox").classList.remove("show")
    }
    async _restore() {
        const e = await DB.getAll("c");
        e.length ? (e.sort((e, t) => (t.updated || 0) - (e.updated || 0)), await this._loadConv(e[0].id, !1)) : this._newConv()
    }
    _scheduleCleanup() {
        setTimeout(async () => {
            const e = (await DB.getAll("c")).filter(e => e.updated && Date.now() - e.updated > 7776e6);
            e.length && (Toast.show(`${e.length} chat${e.length>1?"s":""} older than 90 days will be cleared to free space.`, "info", 8e3), setTimeout(async () => {
                if (await Dlg.confirm(`Clear ${e.length} old conversation${e.length>1?"s":""}? You can export them first.`)) {
                    for (const t of e) await DB.del("c", t.id);
                    this._renderConvs(), Toast.show("Old chats cleared", "ok")
                }
            }, 1200))
        }, 6e3)
    }
    _bindKeys() {
        document.addEventListener("keydown", e => {
            if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) return void e.preventDefault();
            if ("F12" === e.key) return void e.preventDefault();
            const t = ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName);
            if ("Escape" === e.key) return this.closeAllModals(), this._closeDrawer(), void this._closePlusMenu();
            if ((!t || e.ctrlKey) && (e.ctrlKey && "n" === e.key && (e.preventDefault(), this._newConv(!1)), e.ctrlKey && "b" === e.key && (e.preventDefault(), this._toggleDrawer()), e.ctrlKey && "k" === e.key && (e.preventDefault(), this.openModal("m-model")), e.ctrlKey && "e" === e.key && (e.preventDefault(), this.openModal("m-export")), e.ctrlKey && "/" === e.key && (e.preventDefault(), $id("inp")?.focus()), e.ctrlKey && "i" === e.key && (e.preventDefault(), this._toggleImgMode()), "ArrowUp" === e.key && !t)) {
                const e = [...this.hist].reverse().find(e => "user" === e.role);
                if (e) {
                    const t = $id("inp");
                    t && (t.value = e.content, this._autoResize(t), t.focus())
                }
            }
        })
    }
    _toggleImgMode() {
        this._imgMode = !this._imgMode;
        const e = $id("img-mode-bar");
        e && (e.style.display = this._imgMode ? "flex" : "none");
        const t = $id("inp");
        t && (t.placeholder = this._imgMode ? "Describe an image…" : "Message..."), this._updateSendBtn()
    }
    _bind() {
        const e = (e, t) => {
            const s = $id(e);
            s && (s.onclick = t)
        };
        e("btn-drawer", () => this._toggleDrawer()), e("drawer-ov", () => this._closeDrawer()), e("drawer-close", () => this._closeDrawer()), e("d-btn-new", () => {
            this._newConv(!1), this._closeDrawer()
        }), e("d-btn-new-temp", () => {
            this._newConv(!0), this._closeDrawer(), Toast.show("Temp chat — not saved", "info", 2e3)
        }), e("d-clear-all", async () => {
            if (!await Dlg.danger("Delete all conversations?")) return;
            const e = await DB.getAll("c");
            for (const t of e) await DB.del("c", t.id);
            this._newConv(), Toast.show("All cleared", "ok")
        }), e("d-btn-model", () => {
            this.openModal("m-model"), this._closeDrawer()
        }), e("d-btn-keys", () => {
            this.openModal("m-keys"), this._closeDrawer()
        }), e("d-btn-export", () => this.openModal("m-export")), e("d-btn-templates", () => this.openModal("m-tmpl")), e("d-btn-bookmarks", () => this.openModal("m-bm")), e("d-btn-stats", () => this.openModal("m-stats")), e("d-btn-settings", () => {
            this.openModal("m-settings"), this._closeDrawer()
        }), e("d-model-card", () => {
            this.openModal("m-model"), this._closeDrawer()
        }), e("d-clear-cache", async () => {
            await DB.clear("c"), await DB.clear("b"), await DB.clear("t"), this._newConv(), Toast.show("Cleared", "ok")
        }), $id("d-search")?.addEventListener("input", debounce(() => this._renderConvs(), 220)), e("tb-model", () => this.openModal("m-model")), e("btn-settings", () => this.openModal("m-settings")), e("btn-call", () => this._openCall()), e("btn-call-end", () => this._closeCall()), e("btn-call-mute", () => $id("btn-call-mute")?.classList.toggle("muted")), e("btn-call-talk", () => $id("btn-call-talk")?.classList.toggle("listening")), $$("[data-close]").forEach(e => e.onclick = () => this.closeModal(e.dataset.close)), $$(".modal-ov").forEach(e => e.addEventListener("click", t => {
            t.target === e && this.closeModal(e.id)
        })), e("m-load-btn", () => this._loadModel()), $id("m-search")?.addEventListener("input", debounce(() => this._buildCats("m-model-cats", e => {
            this._selModel = e;
            const t = $id("m-load-btn");
            t && (t.disabled = Engine.isLoading(e.id), t.textContent = "local" === e.p ? Engine.getEngine(e.id) ? "Switch to " + e.name : "Download " + e.name : "Use " + e.name)
        }), 200)), $id("m-toggle-locked")?.addEventListener("click", () => {
            this._showLocked = !this._showLocked, $id("m-toggle-locked").textContent = this._showLocked ? "Hide locked" : "Show locked", this._buildCats("m-model-cats", () => {})
        }), e("k-save", async () => {
            const e = e => $id(e)?.value?.trim() || "",
                t = e("k-openai");
            t && (this.keys.openai = t);
            const s = e("k-gemini");
            s && (this.keys.gemini = s);
            const i = e("k-anthropic");
            i && (this.keys.anthropic = i);
            const a = e("k-ollama");
            a && (this.keys.ollamaUrl = a), await this._saveCfg(), this._updateModel(), this.closeModal("m-keys"), Toast.show("Saved", "ok")
        }), $id("s-temp")?.addEventListener("input", e => {
            const t = $id("s-temp-v");
            t && (t.textContent = e.target.value)
        }), e("s-save", () => this._saveSettings()), e("st-reset", async () => {
            await Dlg.danger("Reset stats?") && (this._stats = {
                prompts: 0,
                sessions: 0,
                toksOut: 0,
                errors: 0,
                avgMs: 0,
                rc: 0
            }, await this._saveStats(), this._fillStats(), Toast.show("Reset", "ok"))
        }), e("ex-do", () => this._doExport()), $id("ex-fmt")?.addEventListener("change", () => this._fillExport()), e("tm-save", () => this._saveTmpl()), e("ig-gen", () => this._handleImageGenModal()), e("voice-stop", () => this._stopVoice()), $id("m-voice")?.addEventListener("click", e => {
            e.target === $id("m-voice") && this._stopVoice()
        }), $id("htab-preview")?.addEventListener("click", () => {
            $id("html-frame").style.display = "", $id("html-src").style.display = "none", $$(".html-tab").forEach(e => e.classList.remove("active")), $id("htab-preview").classList.add("active")
        }), $id("htab-code")?.addEventListener("click", () => {
            $id("html-frame").style.display = "none", $id("html-src").style.display = "", $$(".html-tab").forEach(e => e.classList.remove("active")), $id("htab-code").classList.add("active")
        }), e("html-dl-btn", () => {
            const e = $id("html-src")?.textContent;
            e && dlFile(e, "preview.html", "text/html")
        }), e("html-fullscreen-btn", () => {
            try {
                $id("html-frame")?.requestFullscreen()
            } catch {}
        }), e("btn-send", () => {
            this._gen ? this._stop() : this._send($id("inp")?.value?.trim())
        });
        const t = $id("inp");
        t && (t.addEventListener("input", () => this._autoResize(t)), t.addEventListener("keydown", e => {
            if ("Enter" !== e.key || e.shiftKey || (e.preventDefault(), this._gen ? this._stop() : this._send(t.value?.trim())), "ArrowUp" === e.key && !t.value) {
                const s = [...this.hist].reverse().find(e => "user" === e.role);
                s && (t.value = s.content, this._autoResize(t), e.preventDefault())
            }
        }), t.addEventListener("paste", e => {
            const t = [...e.clipboardData?.items || []].find(e => e.type.startsWith("image/"));
            if (t) {
                e.preventDefault();
                const s = t.getAsFile();
                s && this._addFiles([s])
            }
        })), $id("chat-scroll")?.addEventListener("scroll", throttle(() => this._updateScroll(), 100)), $id("chat-scroll")?.addEventListener("dragover", e => e.preventDefault()), $id("chat-scroll")?.addEventListener("drop", e => {
            e.preventDefault(), e.dataTransfer.files.length && this._addFiles(e.dataTransfer.files)
        }), e("lb-close", () => this._closeLb()), $id("lightbox")?.addEventListener("click", e => {
            e.target === $id("lightbox") && this._closeLb()
        }), e("btn-plus", e => {
            e.stopPropagation(), this._togglePlusMenu()
        }), $id("btn-plus")?.addEventListener("click", e => e.stopPropagation()), e("plus-ov", () => this._closePlusMenu()), e("plus-menu-ov", () => this._closePlusMenu()), e("pm-file", () => {
            this._closePlusMenu(), $id("file-inp").click()
        }), e("pm-img", () => {
            this._closePlusMenu(), this._toggleImgMode()
        }), e("pm-imggen", () => {
            this._closePlusMenu(), this.openModal("m-imggen")
        }), e("pm-voice", () => {
            this._closePlusMenu(), this._startVoice()
        }), e("pm-call", () => {
            this._closePlusMenu(), this._openCall()
        }), e("pm-team", () => {
            if (this._closePlusMenu(), this._arenaMode) {
                this._arenaMode = !1, this._arenaModel2 = "";
                const e = $id("arena-bar");
                e && (e.style.display = "none"), this._updateModel()
            } else {
                const e = MODELS.filter(e => e.free && "local" === e.p && e.id !== this.s.model)[0];
                this._arenaMode = !0, this._arenaModel2 = e?.id || "";
                const t = $id("arena-bar");
                t && (t.style.display = "flex");
                const s = $id("arena-m2-label");
                s && (s.textContent = e ? e.name : "loading…"), e && !Engine.getEngine(e.id) && Engine.load(e.id, {
                    silent: !1,
                    slot: 2
                }).then(() => {
                    s && (s.textContent = e.name), this._updateModel()
                }).catch(() => {}), this._updateModel(), Toast.show("mai. team active", "info", 2500)
            }
        }), e("pm-templates", () => {
            this._closePlusMenu(), this.openModal("m-tmpl")
        }), e("pm-bin", () => {
            this._closePlusMenu(), $id("bin-inp").click()
        }), e("pm-import-conv", () => {
            this._closePlusMenu(), $id("conv-import-inp")?.click()
        }), e("arena-exit", () => {
            this._arenaMode = !1, this._arenaModel2 = "";
            const e = $id("arena-bar");
            e && (e.style.display = "none"), this._updateModel()
        }), e("arena-m2-btn", () => this.openModal("m-model")), e("img-mode-exit", () => {
            this._imgMode = !1;
            const e = $id("img-mode-bar");
            e && (e.style.display = "none");
            const t = $id("inp");
            t && (t.placeholder = "Message..."), this._updateSendBtn();
            const s = $id("pm-img");
            s && s.classList.remove("active")
        });
        const s = $id("file-inp");
        s && s.addEventListener("change", e => {
            this._addFiles(e.target.files), s.value = ""
        });
        const i = $id("bin-inp");
        i && i.addEventListener("change", e => {
            const t = e.target.files[0];
            if (!t) return;
            const s = "custom-" + t.name.replace(/\..+$/, "").replace(/[^a-zA-Z0-9-]/g, "-");
            MODELS.push({
                id: s,
                name: t.name.replace(/\..+$/, ""),
                params: "-",
                size: fmtB(t.size),
                rec: "Imported model",
                p: "local",
                ctx: 4096,
                cat: "recommended",
                free: !0
            }), Toast.show("Model registered. Load from Models.", "ok", 4e3), i.value = ""
        });
        const a = $id("conv-import-inp");
        a && a.addEventListener("change", async e => {
            const t = e.target.files[0];
            if (t) {
                try {
                    const e = await t.text(),
                        s = JSON.parse(e);
                    if (!s.messages) throw new Error("Invalid format");
                    const i = uid("c_");
                    await DB.put("c", {
                        id: i,
                        title: s.title || "Imported",
                        created: s.created || Date.now(),
                        updated: Date.now(),
                        model: "",
                        msgs: s.messages
                    }), await this._loadConv(i), Toast.show("Imported", "ok")
                } catch (e) {
                    Toast.show("Import failed: " + e.message, "err", 4e3)
                }
                a.value = ""
            }
        }), window.addEventListener("resize", () => {
            const e = $id("call-canvas");
            e && this._callActive && (e.width = window.innerWidth, e.height = window.innerHeight)
        }), window.matchMedia("(prefers-color-scheme:dark)").addEventListener("change", () => {
            "system" === this.s.theme && this._theme("system")
        })
    }
}
const app = new App;
window.app = app, document.addEventListener("DOMContentLoaded", () => app.boot().catch(e => {
    console.error(e);
    const t = $id("sp-txt");
    t && (t.textContent = "FAILED: " + e.message)
}));
