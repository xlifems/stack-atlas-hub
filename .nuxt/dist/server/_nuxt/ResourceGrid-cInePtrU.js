import { defineComponent, ref, computed, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./ResourceCard-BteQGqt3.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchBar",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    placeholder: { default: "Search lessons, tools, services…" }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const inputRef = ref(null);
    const localQuery = ref(props.modelValue.query ?? "");
    const activeFilters = computed(() => {
      const filters = [];
      if (props.modelValue.category)
        filters.push({ key: "category", label: `Track: ${props.modelValue.category}` });
      if (props.modelValue.tag) filters.push({ key: "tag", label: `Skill: ${props.modelValue.tag}` });
      if (props.modelValue.technology)
        filters.push({ key: "technology", label: `Stack: ${props.modelValue.technology}` });
      return filters;
    });
    watch(
      () => props.modelValue.query,
      (v) => {
        localQuery.value = v ?? "";
      }
    );
    function focus() {
      inputRef.value?.focus();
    }
    __expose({ focus });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="relative flex items-center"><svg class="absolute left-5 w-5 h-5 text-brand-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg><input${ssrRenderAttr("value", unref(localQuery))} type="search"${ssrRenderAttr("placeholder", __props.placeholder)} class="input-search pl-14 pr-12 text-base">`);
      if (unref(localQuery)) {
        _push(`<button class="absolute right-4 w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center hover:bg-sunset-500 hover:text-white cursor-pointer transition-all duration-150" aria-label="Clear search"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(activeFilters).length) {
        _push(`<div class="flex flex-wrap gap-2 mt-3"><!--[-->`);
        ssrRenderList(unref(activeFilters), (filter) => {
          _push(`<button class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-semibold bg-brand-600 text-white shadow-clay-sm hover:-translate-y-0.5 cursor-pointer transition-all duration-150"><span>${ssrInterpolate(filter.label)}</span><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button>`);
        });
        _push(`<!--]--><button class="text-xs text-ink-500 hover:text-brand-700 font-display font-semibold transition-colors duration-150 px-2 cursor-pointer"> Clear all </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ResourceGrid",
  __ssrInlineRender: true,
  props: {
    resources: {},
    totalCount: {},
    pageSize: { default: 24 }
  },
  setup(__props) {
    const props = __props;
    const page = ref(1);
    watch(
      () => props.resources,
      () => {
        page.value = 1;
      }
    );
    const visibleResources = computed(() => props.resources.slice(0, page.value * props.pageSize));
    const hasMore = computed(() => visibleResources.value.length < props.resources.length);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ResourceCard = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.resources.length === 0) {
        _push(`<div class="flex flex-col items-center justify-center py-24 gap-4 text-center"><div class="w-20 h-20 rounded-[2rem] bg-white shadow-clay flex items-center justify-center text-brand-600 animate-bounce-soft"><svg class="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.3-4.3"></path></svg></div><div><p class="font-display font-bold text-xl text-ink-950">No lessons found yet</p><p class="text-ink-500 text-sm mt-1">Try tweaking your search or clearing a filter</p></div>`);
        ssrRenderSlot(_ctx.$slots, "empty-action", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!--[--><p class="text-ink-500 text-sm mb-5 font-semibold"> Showing <span class="text-ink-950 font-bold">${ssrInterpolate(__props.resources.length)}</span> lesson${ssrInterpolate(__props.resources.length !== 1 ? "s" : "")} `);
        if (__props.totalCount && __props.resources.length < __props.totalCount) {
          _push(`<!--[--> of ${ssrInterpolate(__props.totalCount)}<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"><!--[-->`);
        ssrRenderList(unref(visibleResources), (resource) => {
          _push(ssrRenderComponent(_component_ResourceCard, {
            key: resource.id,
            resource,
            class: "animate-fade-in"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
        if (unref(hasMore)) {
          _push(`<div class="flex justify-center mt-10"><button class="btn-ghost"> Load more lessons <span class="text-ink-400 text-xs font-semibold"> (${ssrInterpolate(__props.resources.length - unref(page) * __props.pageSize)} remaining) </span></button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ResourceGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
//# sourceMappingURL=ResourceGrid-cInePtrU.js.map
