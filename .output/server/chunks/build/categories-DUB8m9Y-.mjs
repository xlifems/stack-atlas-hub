import { u as useResources, _ as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$1 } from './CategoryCard-DTCpdiap.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useSeoMeta } from './v3-5J-FkPup.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "categories",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "All Learning Tracks \u2014 DevAtlas Academy",
      description: "Browse every learning track in the DevAtlas Academy catalog."
    });
    const { getCategoryStats, meta } = useResources();
    const categoryStats = getCategoryStats();
    const catFilter = ref("");
    const filteredCategories = computed(
      () => catFilter.value ? categoryStats.filter((c) => c.name.toLowerCase().includes(catFilter.value.toLowerCase())) : categoryStats
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CategoryCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14" }, _attrs))}><div class="mb-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center gap-1.5 text-ink-500 hover:text-brand-700 text-sm font-semibold font-display mb-5 transition-colors duration-150 cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"${_scopeId}></path></svg> Back to the atlas `);
          } else {
            return [
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
                  d: "M15 19l-7-7 7-7"
                })
              ])),
              createTextVNode(" Back to the atlas ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="eyebrow mb-4"><svg class="w-3.5 h-3.5 text-sunset-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg> Full catalog </span><h1 class="section-title mt-3 text-4xl sm:text-5xl">All learning tracks</h1><p class="section-subtitle mt-3"><strong class="text-ink-900">${ssrInterpolate(unref(categoryStats).length)}</strong> tracks \xB7 <strong class="text-ink-900">${ssrInterpolate(unref(meta).totalResources.toLocaleString())}</strong> total lessons </p></div><div class="max-w-md mb-10"><div class="relative"><svg class="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg><input${ssrRenderAttr("value", unref(catFilter))} type="search" placeholder="Filter tracks\u2026" class="input-search pl-14"></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(unref(filteredCategories), (cat) => {
        _push(ssrRenderComponent(_component_CategoryCard, {
          key: cat.slug,
          category: cat
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (unref(filteredCategories).length === 0) {
        _push(`<div class="clay-card-flat mt-6 text-center py-16"><p class="font-display font-bold text-lg text-ink-950">No tracks match \u201C${ssrInterpolate(unref(catFilter))}\u201D</p><p class="text-ink-500 mt-1">Try a different keyword, or browse everything.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=categories-DUB8m9Y-.mjs.map
