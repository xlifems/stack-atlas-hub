import { _ as _sfc_main$1, a as _sfc_main$2 } from "./ResourceGrid-cInePtrU.js";
import { u as useResources, _ as __nuxt_component_0 } from "../server.mjs";
import { _ as _sfc_main$3 } from "./CategoryCard-DTCpdiap.js";
import { _ as _sfc_main$4 } from "./ResourceCard-BteQGqt3.js";
import { defineComponent, ref, computed, unref, isRef, withCtx, createTextVNode, openBlock, createBlock, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { a as useSeoMeta } from "./v3-5J-FkPup.js";
import "/home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/nuxt/node_modules/hookable/dist/index.mjs";
import "/home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/unctx/dist/index.mjs";
import "/home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/defu/dist/defu.mjs";
import "/home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/ufo/dist/index.mjs";
import "/home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "DevAtlas Academy — Playful lessons for curious developers",
      description: "A friendly catalog of free developer tools, APIs and services organized as playful learning tracks. Learn anything, build everything.",
      ogTitle: "DevAtlas Academy — Playful lessons for curious developers",
      ogDescription: "Free developer tools, APIs, and services across playful learning tracks."
    });
    const { resources, meta, getCategoryStats, getByCategory, search } = useResources();
    const filters = ref({ query: "", category: "", tag: "", technology: "" });
    const isSearching = computed(
      () => !!(filters.value.query || filters.value.category || filters.value.tag || filters.value.technology)
    );
    const searchResults = computed(() => isSearching.value ? search(filters.value) : []);
    const topCategories = computed(() => getCategoryStats().slice(0, 12));
    const featuredResources = computed(() => resources.value.slice(0, 8));
    const categorySections = computed(
      () => getCategoryStats().slice(0, 4).map((cat) => ({
        ...cat,
        resources: getByCategory(cat.slug)
      }))
    );
    const progressDemo = [
      {
        name: "Cloud & Hosting",
        value: 82,
        bg: "bg-brand-600",
        path: "M3 15a4 4 0 014-4 5 5 0 019.584-1.548A4.5 4.5 0 0118.5 18H7a4 4 0 01-4-3z"
      },
      {
        name: "APIs & Data",
        value: 64,
        bg: "bg-bubblegum-500",
        path: "M13 10V3L4 14h7v7l9-11h-7z"
      },
      {
        name: "DevOps & CI",
        value: 45,
        bg: "bg-sunset-500",
        path: "M4.5 16.5l3 3m6-14l4.5 4.5M14 10l-4 4M9 15l-3 3m-.5-7.5l6-6a8 8 0 018 8l-6 6-8-8z"
      },
      {
        name: "AI & ML",
        value: 28,
        bg: "bg-mint-500",
        path: "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"
      }
    ];
    const testimonials = [
      {
        quote: "I picked up three new cloud tools in a weekend. The tracks feel like Saturday morning cartoons — in the best way.",
        name: "Sana Patel",
        role: "Frontend developer · Berlin",
        initials: "SP",
        bg: "bg-brand-600"
      },
      {
        quote: "Finally a resource list that doesn't feel like homework. The progress demo hooked my team instantly.",
        name: "Diego Ramírez",
        role: "Tech lead @ Mintly",
        initials: "DR",
        bg: "bg-bubblegum-500"
      },
      {
        quote: "I went from zero to shipping my first API in a week. The catalog is gold and it's free. Unreal.",
        name: "Lena Okafor",
        role: "CS student · Lagos",
        initials: "LO",
        bg: "bg-sunset-500"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchBar = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ResourceGrid = _sfc_main$2;
      const _component_CategoryCard = _sfc_main$3;
      const _component_ResourceCard = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative overflow-hidden pt-14 pb-20 px-4 sm:px-6 lg:px-8"><div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true"><div class="absolute top-16 left-[8%] w-24 h-24 rounded-[2rem] bg-bubblegum-300 shadow-clay-pink animate-float"></div><div class="absolute top-40 right-[10%] w-20 h-20 rounded-full bg-sunshine-300 shadow-clay-sunshine animate-float-delayed"></div><div class="absolute bottom-10 left-[18%] w-16 h-16 rounded-3xl bg-mint-300 shadow-clay-mint animate-float-delayed"></div><div class="absolute bottom-24 right-[22%] w-14 h-14 rounded-2xl bg-sky-300 shadow-clay-sky animate-float"></div></div><div class="relative max-w-5xl mx-auto text-center"><div class="inline-flex items-center gap-2 mb-6 animate-slide-up"><span class="eyebrow"><span class="w-2 h-2 rounded-full bg-mint-500 animate-pulse"></span> ${ssrInterpolate(unref(meta).totalResources.toLocaleString())} free lessons · Always $0 </span></div><h1 class="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6 animate-slide-up"> Learn to build <span class="text-gradient-playful">anything</span><br> with playful dev tools </h1><p class="text-ink-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-slide-up"> A friendly catalog of free tools, APIs and services across <strong class="text-ink-950">${ssrInterpolate(unref(meta).totalCategories)}</strong> learning tracks — curated for curious developers and eager students. </p><div id="search" class="max-w-2xl mx-auto animate-slide-up">`);
      _push(ssrRenderComponent(_component_SearchBar, {
        ref: "searchBarRef",
        modelValue: unref(filters),
        "onUpdate:modelValue": ($event) => isRef(filters) ? filters.value = $event : null,
        placeholder: "What do you want to learn today?",
        class: "text-left"
      }, null, _parent));
      _push(`</div><div class="flex flex-wrap items-center justify-center gap-3 mt-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/categories",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Start learning free <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Start learning free "),
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "stroke-width": "3"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M13 7l5 5m0 0l-5 5m5-5H6"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="#enroll" class="btn-ghost">Watch the demo</a></div><div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 text-sm text-ink-500"><span class="flex items-center gap-2 font-semibold"><span class="w-8 h-8 rounded-xl bg-white shadow-clay-sm flex items-center justify-center text-sunshine-500"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z"></path></svg></span> 4.9/5 from ${ssrInterpolate((unref(meta).totalResources / 7).toFixed(0))}+ learners </span><span class="flex items-center gap-2 font-semibold"><span class="w-8 h-8 rounded-xl bg-white shadow-clay-sm flex items-center justify-center text-mint-500"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg></span> 100% free tier forever </span><span class="flex items-center gap-2 font-semibold"><span class="w-8 h-8 rounded-xl bg-white shadow-clay-sm flex items-center justify-center text-brand-600"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></span> No credit card required </span></div></div></section>`);
      if (unref(isSearching)) {
        _push(`<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"><div class="flex items-center justify-between mb-6"><h2 class="section-title">Search results</h2><button class="btn-ghost text-xs">Clear search</button></div>`);
        _push(ssrRenderComponent(_component_ResourceGrid, {
          resources: unref(searchResults),
          "total-count": unref(meta).totalResources
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!--[--><section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"><div><span class="eyebrow mb-3"><svg class="w-3.5 h-3.5 text-sunset-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z"></path></svg> Course Catalog </span><h2 class="section-title mt-3">Pick a learning track</h2><p class="section-subtitle mt-2">${ssrInterpolate(unref(meta).totalCategories)} playful tracks, from cloud hosting to machine learning. </p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/categories",
          class: "btn-ghost self-start sm:self-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View all ${ssrInterpolate(unref(meta).totalCategories)} <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" View all " + toDisplayString(unref(meta).totalCategories) + " ", 1),
                (openBlock(), createBlock("svg", {
                  class: "w-3.5 h-3.5",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "3"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M9 5l7 7-7 7"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"><!--[-->`);
        ssrRenderList(unref(topCategories), (cat) => {
          _push(ssrRenderComponent(_component_CategoryCard, {
            key: cat.slug,
            category: cat
          }, null, _parent));
        });
        _push(`<!--]--></div></section><section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="clay-card !p-0 overflow-hidden"><div class="grid grid-cols-1 lg:grid-cols-5 gap-0"><div class="lg:col-span-2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center"><span class="eyebrow self-start mb-4"><svg class="w-3.5 h-3.5 text-mint-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> Track your growth </span><h2 class="section-title mb-4">Stay curious. <br>Watch your skills bloom.</h2><p class="text-ink-600 leading-relaxed mb-6"> Every lesson you open, every tool you try, every tag you explore — your progress lights up. No pressure, just a friendly nudge forward. </p><ul class="space-y-3 text-sm text-ink-700 mb-8"><li class="flex items-start gap-3"><span class="w-6 h-6 rounded-lg bg-mint-100 text-mint-600 flex items-center justify-center shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg></span><span>Streaks &amp; milestones that celebrate small wins</span></li><li class="flex items-start gap-3"><span class="w-6 h-6 rounded-lg bg-mint-100 text-mint-600 flex items-center justify-center shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg></span><span>Personalized next steps across every track</span></li><li class="flex items-start gap-3"><span class="w-6 h-6 rounded-lg bg-mint-100 text-mint-600 flex items-center justify-center shrink-0 mt-0.5"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg></span><span>Badges you can actually brag about</span></li></ul>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/categories",
          class: "btn-secondary self-start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Explore all tracks `);
            } else {
              return [
                createTextVNode(" Explore all tracks ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="lg:col-span-3 bg-gradient-to-br from-brand-50 via-bubblegum-50 to-sunshine-50 dotted p-8 sm:p-10 lg:p-12"><div class="clay-card-flat !p-6 max-w-md mx-auto"><div class="flex items-center justify-between mb-5"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-2xl bg-brand-600 text-white shadow-clay flex items-center justify-center font-display font-bold"> AK </div><div><p class="font-display font-bold text-ink-950 text-sm">Aki&#39;s atlas</p><p class="text-xs text-ink-500">Level 7 · 12-day streak</p></div></div><span class="badge-mint">+320 XP</span></div><div class="space-y-4"><!--[-->`);
        ssrRenderList(progressDemo, (track, i) => {
          _push(`<div class="flex flex-col gap-1.5"><div class="flex items-center justify-between text-xs"><span class="flex items-center gap-2 font-display font-semibold text-ink-900"><span class="${ssrRenderClass([track.bg, "w-6 h-6 rounded-lg flex items-center justify-center text-white shadow-clay-sm"])}"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round"${ssrRenderAttr("d", track.path)}></path></svg></span> ${ssrInterpolate(track.name)}</span><span class="text-ink-500 font-semibold">${ssrInterpolate(track.value)}%</span></div><div class="h-3 w-full rounded-full bg-brand-100 overflow-hidden shadow-clay-inset"><div class="${ssrRenderClass([track.bg, "h-full rounded-full animate-progress-fill"])}" style="${ssrRenderStyle({ ["--progress"]: track.value + "%", width: track.value + "%" })}"></div></div></div>`);
        });
        _push(`<!--]--></div><div class="mt-6 grid grid-cols-3 gap-2"><div class="rounded-2xl bg-brand-50 p-3 text-center shadow-clay-inset"><p class="font-display font-bold text-xl text-brand-700">24</p><p class="text-[0.65rem] text-ink-500 font-semibold uppercase tracking-wider">Lessons</p></div><div class="rounded-2xl bg-bubblegum-50 p-3 text-center shadow-clay-inset"><p class="font-display font-bold text-xl text-bubblegum-600">8</p><p class="text-[0.65rem] text-ink-500 font-semibold uppercase tracking-wider">Badges</p></div><div class="rounded-2xl bg-sunset-50 p-3 text-center shadow-clay-inset"><p class="font-display font-bold text-xl text-sunset-600">3</p><p class="text-[0.65rem] text-ink-500 font-semibold uppercase tracking-wider">Tracks</p></div></div></div></div></div></div></section><section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"><div><span class="eyebrow mb-3"><svg class="w-3.5 h-3.5 text-bubblegum-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> This week&#39;s picks </span><h2 class="section-title mt-3">Featured lessons</h2><p class="section-subtitle mt-2">Hand-picked tools worth exploring right now.</p></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"><!--[-->`);
        ssrRenderList(unref(featuredResources), (resource) => {
          _push(ssrRenderComponent(_component_ResourceCard, {
            key: resource.id,
            resource
          }, null, _parent));
        });
        _push(`<!--]--></div></section><section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="text-center mb-12"><span class="eyebrow"><svg class="w-3.5 h-3.5 text-sunshine-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z"></path></svg> Loved by learners </span><h2 class="section-title mt-4">Join a happy crew of builders</h2><p class="section-subtitle mt-3 max-w-xl mx-auto"> From first-time coders to senior engineers, here&#39;s what students are saying about the DevAtlas Academy vibe. </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-5"><!--[-->`);
        ssrRenderList(testimonials, (t, i) => {
          _push(`<article class="${ssrRenderClass([i === 1 ? "md:-translate-y-4" : "", "clay-card flex flex-col gap-4"])}"><div class="flex gap-1 text-sunshine-400"><!--[-->`);
          ssrRenderList(5, (s) => {
            _push(`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z"></path></svg>`);
          });
          _push(`<!--]--></div><p class="text-ink-800 leading-relaxed font-medium"> “${ssrInterpolate(t.quote)}” </p><div class="flex items-center gap-3 pt-4 border-t border-brand-100"><div class="${ssrRenderClass([t.bg, "w-11 h-11 rounded-2xl flex items-center justify-center font-display font-bold text-white shadow-clay-sm"])}">${ssrInterpolate(t.initials)}</div><div class="min-w-0"><p class="font-display font-bold text-ink-950 text-sm truncate">${ssrInterpolate(t.name)}</p><p class="text-xs text-ink-500 truncate">${ssrInterpolate(t.role)}</p></div></div></article>`);
        });
        _push(`<!--]--></div></section><!--[-->`);
        ssrRenderList(unref(categorySections), (cat) => {
          _push(`<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="flex items-end justify-between gap-4 mb-6"><div><h2 class="section-title">${ssrInterpolate(cat.name)}</h2><p class="section-subtitle mt-1">${ssrInterpolate(cat.resources.length)} lessons in this track</p></div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/category/${cat.slug}`,
            class: "btn-ghost text-xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` View track <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
              } else {
                return [
                  createTextVNode(" View track "),
                  (openBlock(), createBlock("svg", {
                    class: "w-3.5 h-3.5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "stroke-width": "3"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M9 5l7 7-7 7"
                    })
                  ]))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"><!--[-->`);
          ssrRenderList(cat.resources.slice(0, 8), (resource) => {
            _push(ssrRenderComponent(_component_ResourceCard, {
              key: resource.id,
              resource
            }, null, _parent));
          });
          _push(`<!--]--></div></section>`);
        });
        _push(`<!--]--><section id="enroll" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"><div class="relative overflow-hidden rounded-[2.5rem] p-10 sm:p-14 lg:p-20 text-center bg-gradient-to-br from-brand-600 via-brand-500 to-bubblegum-500 shadow-clay-lg"><div class="absolute -top-8 -left-8 w-40 h-40 rounded-[2rem] bg-sunshine-300 opacity-50 rotate-12 animate-float" aria-hidden="true"></div><div class="absolute -bottom-10 -right-6 w-48 h-48 rounded-full bg-sunset-400 opacity-50 animate-float-delayed" aria-hidden="true"></div><div class="absolute top-10 right-20 w-20 h-20 rounded-3xl bg-mint-300 opacity-60 -rotate-6 animate-wiggle" aria-hidden="true"></div><div class="relative"><span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 text-brand-700 font-display font-semibold text-xs uppercase tracking-wider shadow-clay-sm mb-6"><span class="w-2 h-2 rounded-full bg-sunset-500 animate-pulse"></span> Open enrollment </span><h2 class="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-5"> Ready to join the fun? </h2><p class="text-white/90 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"> Grab your free seat, pick a track, and start building today. No fees, no fluff — just ${ssrInterpolate(unref(meta).totalResources.toLocaleString())} lessons of pure, playful learning. </p><div class="flex flex-wrap items-center justify-center gap-3 mb-8">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/categories",
          class: "btn-chunky bg-white text-brand-700 shadow-clay hover:-translate-y-1 focus-visible:ring-white text-base px-7 py-3.5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Enroll for free <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" Enroll for free "),
                (openBlock(), createBlock("svg", {
                  class: "w-5 h-5",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "3"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M13 7l5 5m0 0l-5 5m5-5H6"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<a href="https://github.com/xlifems/stack-atlas-hub" target="_blank" rel="noopener noreferrer" class="btn-chunky bg-white/10 border-2 border-white/40 text-white shadow-clay-sm hover:bg-white/20 focus-visible:ring-white text-base px-7 py-3.5"> Browse the syllabus </a></div><div class="flex flex-wrap items-center justify-center gap-6 text-white/85 text-sm font-semibold"><span class="inline-flex items-center gap-2"><svg class="w-4 h-4 text-sunshine-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> Free forever </span><span class="inline-flex items-center gap-2"><svg class="w-4 h-4 text-sunshine-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> Unlock ${ssrInterpolate(unref(meta).totalCategories)} tracks </span><span class="inline-flex items-center gap-2"><svg class="w-4 h-4 text-sunshine-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> Cancel anytime (it&#39;s already free!) </span></div></div></div></section><!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DZNmalRj.js.map
