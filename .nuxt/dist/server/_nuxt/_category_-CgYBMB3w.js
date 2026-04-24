import { a as useRoute, u as useResources, _ as __nuxt_component_0 } from "../server.mjs";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./ResourceGrid-cInePtrU.js";
import { _ as _sfc_main$3 } from "./CategoryCard-DTCpdiap.js";
import { defineComponent, computed, ref, watch, unref, mergeProps, withCtx, createTextVNode, isRef, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { a as useSeoMeta } from "./v3-5J-FkPup.js";
import "/home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/nuxt/node_modules/hookable/dist/index.mjs";
import "/home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/unctx/dist/index.mjs";
import "/home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/defu/dist/defu.mjs";
import "/home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/ufo/dist/index.mjs";
import "./ResourceCard-BteQGqt3.js";
import "/home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[category]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { getByCategory, getCategoryName, getCategoryStats, search } = useResources();
    const categorySlug = computed(() => route.params.category);
    const categoryName = computed(() => getCategoryName(categorySlug.value));
    const categoryResources = computed(() => getByCategory(categorySlug.value));
    const filters = ref({ query: "", category: categorySlug.value, tag: "", technology: "" });
    watch(categorySlug, (slug) => {
      filters.value = { ...filters.value, category: slug, query: "", tag: "" };
    });
    const availableTags = computed(() => {
      const tagSet = /* @__PURE__ */ new Set();
      categoryResources.value.forEach((r) => r.tags.forEach((t) => tagSet.add(t)));
      return Array.from(tagSet).slice(0, 8);
    });
    const filteredResources = computed(
      () => search({ ...filters.value, category: categorySlug.value })
    );
    const relatedCategories = computed(
      () => getCategoryStats().filter((c) => c.slug !== categorySlug.value).slice(0, 6)
    );
    function clearFilters() {
      filters.value = { query: "", category: categorySlug.value, tag: "", technology: "" };
    }
    useSeoMeta({
      title: computed(() => `${categoryName.value} — DevAtlas Academy`),
      description: computed(
        () => `Browse ${categoryResources.value.length} free ${categoryName.value} lessons and tools in the DevAtlas Academy.`
      ),
      ogTitle: computed(() => `${categoryName.value} — DevAtlas Academy`)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_SearchBar = _sfc_main$1;
      const _component_ResourceGrid = _sfc_main$2;
      const _component_CategoryCard = _sfc_main$3;
      if (unref(categoryResources).length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14" }, _attrs))}><nav class="flex items-center gap-2 text-sm text-ink-500 font-semibold mb-8">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "hover:text-brand-700 transition-colors duration-150 cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<svg class="w-3.5 h-3.5 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/categories",
          class: "hover:text-brand-700 transition-colors duration-150 cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Catalog`);
            } else {
              return [
                createTextVNode("Catalog")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<svg class="w-3.5 h-3.5 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg><span class="text-ink-900 truncate">${ssrInterpolate(unref(categoryName))}</span></nav><div class="clay-card !p-8 sm:!p-10 mb-10 flex flex-col sm:flex-row sm:items-center gap-6"><div class="w-20 h-20 rounded-[2rem] bg-brand-600 text-white shadow-clay flex items-center justify-center shrink-0 animate-bounce-soft"><svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4h7a3 3 0 013 3v13a2 2 0 00-2-2H4V4zM20 4h-7a3 3 0 00-3 3v13a2 2 0 012-2h8V4z"></path></svg></div><div class="min-w-0"><span class="eyebrow mb-3"><svg class="w-3.5 h-3.5 text-bubblegum-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Learning track </span><h1 class="section-title mt-2 text-4xl">${ssrInterpolate(unref(categoryName))}</h1><p class="text-ink-600 mt-2 leading-relaxed"><strong class="text-ink-950">${ssrInterpolate(unref(categoryResources).length)}</strong> free ${ssrInterpolate(unref(categoryResources).length === 1 ? "lesson" : "lessons")} waiting for you in this track. </p></div></div><div class="flex flex-col sm:flex-row gap-4 mb-8"><div class="flex-1">`);
        _push(ssrRenderComponent(_component_SearchBar, {
          modelValue: unref(filters),
          "onUpdate:modelValue": ($event) => isRef(filters) ? filters.value = $event : null,
          placeholder: "Search within this track…"
        }, null, _parent));
        _push(`</div>`);
        if (unref(availableTags).length > 0) {
          _push(`<div class="flex flex-wrap gap-2 sm:items-center"><!--[-->`);
          ssrRenderList(unref(availableTags).slice(0, 6), (tag) => {
            _push(`<button class="${ssrRenderClass([
              unref(filters).tag === tag ? "bg-brand-600 text-white" : "bg-white text-brand-700 hover:-translate-y-0.5",
              "inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-semibold transition-all duration-150 cursor-pointer shadow-clay-sm"
            ])}">${ssrInterpolate(tag)}</button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_ResourceGrid, {
          resources: unref(filteredResources),
          "total-count": unref(categoryResources).length
        }, {
          "empty-action": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="btn-ghost text-sm"${_scopeId}>Clear filters</button>`);
            } else {
              return [
                createVNode("button", {
                  class: "btn-ghost text-sm",
                  onClick: clearFilters
                }, "Clear filters")
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(relatedCategories).length > 0) {
          _push(`<div class="mt-16 pt-10 border-t-2 border-dashed border-brand-200"><h2 class="section-title mb-6">Keep exploring</h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
          ssrRenderList(unref(relatedCategories), (cat) => {
            _push(ssrRenderComponent(_component_CategoryCard, {
              key: cat.slug,
              category: cat
            }, null, _parent));
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4" }, _attrs))}><div class="w-24 h-24 rounded-[2.5rem] bg-white shadow-clay flex items-center justify-center text-brand-600 animate-wiggle"><svg class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.3-4.3"></path></svg></div><div><h1 class="section-title text-3xl">Track not found</h1><p class="text-ink-600 mt-2">We couldn&#39;t find a track for “${ssrInterpolate(_ctx.$route.params.category)}”.</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/categories",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Browse all tracks`);
            } else {
              return [
                createTextVNode("Browse all tracks")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/[category].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_category_-CgYBMB3w.js.map
