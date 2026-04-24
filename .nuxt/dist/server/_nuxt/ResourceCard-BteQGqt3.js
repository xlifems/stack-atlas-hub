import { _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ResourceCard",
  __ssrInlineRender: true,
  props: {
    resource: {}
  },
  setup(__props) {
    const faviconUrl = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "clay-tile group flex flex-col gap-3 h-full cursor-pointer" }, _attrs))}><div class="flex items-start justify-between gap-3"><div class="flex items-center gap-3 min-w-0"><div class="w-10 h-10 shrink-0 rounded-2xl bg-brand-50 flex items-center justify-center shadow-clay-sm overflow-hidden">`);
      if (unref(faviconUrl)) {
        _push(`<img${ssrRenderAttr("src", unref(faviconUrl))}${ssrRenderAttr("alt", `${__props.resource.title} logo`)} class="w-5 h-5 object-contain">`);
      } else {
        _push(`<svg class="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>`);
      }
      _push(`</div><h3 class="font-display font-bold text-ink-950 text-base leading-tight truncate group-hover:text-brand-700 transition-colors duration-200">${ssrInterpolate(__props.resource.title)}</h3></div><a${ssrRenderAttr("href", __props.resource.url)} target="_blank" rel="noopener noreferrer" class="shrink-0 w-8 h-8 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 cursor-pointer hover:bg-sunset-500 hover:text-white hover:-translate-y-0.5 transition-all duration-200 shadow-clay-sm"${ssrRenderAttr("aria-label", `Visit ${__props.resource.title}`)}><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a></div>`);
      if (__props.resource.description) {
        _push(`<p class="text-ink-600 text-sm leading-relaxed line-clamp-2 flex-1">${ssrInterpolate(__props.resource.description)}</p>`);
      } else {
        _push(`<div class="flex-1"></div>`);
      }
      _push(`<div class="flex items-center justify-between gap-2 pt-3 border-t border-brand-100">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/category/${__props.resource.categorySlug}`,
        class: "badge truncate max-w-[160px] cursor-pointer hover:bg-brand-200 transition-colors duration-200",
        onClick: () => {
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.resource.category)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.resource.category), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.resource.technology) {
        _push(`<div class="badge-sunset shrink-0">${ssrInterpolate(__props.resource.technology)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ResourceCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ResourceCard-BteQGqt3.js.map
