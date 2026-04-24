import { a as useRoute, u as useResources, _ as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$1 } from './ResourceCard-BteQGqt3.mjs';
import { defineComponent, computed, ref, watch, unref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/vue/server-renderer/index.mjs';
import { u as useSeoMeta } from './v3-5J-FkPup.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/h3/dist/index.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/destr/dist/index.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/unstorage/dist/index.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/ohash/dist/index.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/klona/dist/index.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/defu/dist/defu.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/scule/dist/index.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/unctx/dist/index.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/pathe/dist/index.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/unhead/dist/server.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/devalue/index.js';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/unhead/dist/utils.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///home/fmasa/Felix/Desarrollo/Frontend/stack-atlas-hub/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { getById, getByCategory } = useResources();
    const id = computed(() => route.params.id);
    const resource = computed(() => getById(id.value));
    const faviconUrl = ref(null);
    watch(
      resource,
      (r) => {
        if (!r) return;
        try {
          const { hostname } = new URL(r.url);
          faviconUrl.value = `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
        } catch {
          faviconUrl.value = null;
        }
      },
      { immediate: true }
    );
    const moreResources = computed(() => {
      if (!resource.value) return [];
      return getByCategory(resource.value.categorySlug).filter((r) => r.id !== resource.value.id).slice(0, 4);
    });
    useSeoMeta({
      title: computed(() => resource.value ? `${resource.value.title} \u2014 DevAtlas Academy` : "Lesson not found"),
      description: computed(() => {
        var _a, _b;
        return (_b = (_a = resource.value) == null ? void 0 : _a.description) != null ? _b : "";
      }),
      ogTitle: computed(() => {
        var _a, _b;
        return (_b = (_a = resource.value) == null ? void 0 : _a.title) != null ? _b : "";
      }),
      ogDescription: computed(() => {
        var _a, _b;
        return (_b = (_a = resource.value) == null ? void 0 : _a.description) != null ? _b : "";
      })
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ResourceCard = _sfc_main$1;
      if (unref(resource)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14" }, _attrs))}><nav class="flex items-center gap-2 text-sm text-ink-500 font-semibold mb-8">`);
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
          to: `/category/${unref(resource).categorySlug}`,
          class: "hover:text-brand-700 transition-colors duration-150 cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(resource).category)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(resource).category), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<svg class="w-3.5 h-3.5 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg><span class="text-ink-900 truncate max-w-[200px]">${ssrInterpolate(unref(resource).title)}</span></nav><div class="clay-card !p-8 sm:!p-10 mb-8"><div class="flex items-start gap-5 mb-6"><div class="w-16 h-16 rounded-2xl bg-brand-50 shadow-clay-sm flex items-center justify-center overflow-hidden shrink-0">`);
        if (unref(faviconUrl)) {
          _push(`<img${ssrRenderAttr("src", unref(faviconUrl))}${ssrRenderAttr("alt", `${unref(resource).title} logo`)} class="w-9 h-9 object-contain">`);
        } else {
          _push(`<svg class="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>`);
        }
        _push(`</div><div class="min-w-0 flex-1"><h1 class="text-3xl font-display font-bold text-ink-950 mb-2 leading-tight">${ssrInterpolate(unref(resource).title)}</h1><a${ssrRenderAttr("href", unref(resource).url)} target="_blank" rel="noopener noreferrer" class="text-brand-600 text-sm hover:text-bubblegum-500 transition-colors duration-150 break-all font-semibold cursor-pointer">${ssrInterpolate(unref(resource).url)}</a></div></div>`);
        if (unref(resource).description) {
          _push(`<p class="text-ink-700 leading-relaxed text-lg mb-8">${ssrInterpolate(unref(resource).description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<a${ssrRenderAttr("href", unref(resource).url)} target="_blank" rel="noopener noreferrer" class="btn-primary"> Start this lesson <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"><div class="clay-card-flat"><p class="text-[0.65rem] text-ink-500 uppercase tracking-[0.2em] font-display font-bold mb-2">Track</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/category/${unref(resource).categorySlug}`,
          class: "text-ink-950 font-display font-bold hover:text-brand-700 transition-colors duration-150 cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(resource).category)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(resource).category), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (unref(resource).technology) {
          _push(`<div class="clay-card-flat"><p class="text-[0.65rem] text-ink-500 uppercase tracking-[0.2em] font-display font-bold mb-2">Stack</p><span class="text-ink-950 font-display font-bold">${ssrInterpolate(unref(resource).technology)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(resource).subcategory) {
          _push(`<div class="clay-card-flat"><p class="text-[0.65rem] text-ink-500 uppercase tracking-[0.2em] font-display font-bold mb-2">Topic</p><span class="text-ink-950 font-display font-bold">${ssrInterpolate(unref(resource).subcategory)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(resource).tags.length > 0) {
          _push(`<div class="mb-12"><p class="text-[0.65rem] text-ink-500 uppercase tracking-[0.2em] font-display font-bold mb-3">Skills</p><div class="flex flex-wrap gap-2"><!--[-->`);
          ssrRenderList(unref(resource).tags, (tag) => {
            _push(`<span class="badge">${ssrInterpolate(tag)}</span>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(moreResources).length > 0) {
          _push(`<div><h2 class="section-title mb-6">More in ${ssrInterpolate(unref(resource).category)}</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"><!--[-->`);
          ssrRenderList(unref(moreResources), (r) => {
            _push(ssrRenderComponent(_component_ResourceCard, {
              key: r.id,
              resource: r
            }, null, _parent));
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4" }, _attrs))}><div class="w-24 h-24 rounded-[2.5rem] bg-white shadow-clay flex items-center justify-center text-brand-600 animate-wiggle"><svg class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.3-4.3"></path></svg></div><h1 class="section-title text-3xl">Lesson not found</h1>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back to the atlas`);
            } else {
              return [
                createTextVNode("Back to the atlas")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resource/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DulzjcP9.mjs.map
