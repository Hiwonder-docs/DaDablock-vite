import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Appendix","description":"","frontmatter":{},"headers":[],"relativePath":"docs/resources_download.md","filePath":"docs/resources_download.md"}');
const _sfc_main = { name: "docs/resources_download.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="appendix" tabindex="-1">Appendix <a class="header-anchor" href="#appendix" aria-label="Permalink to &quot;Appendix&quot;">​</a></h1><ul><li>System Image &amp; Source Code：If you want to get the system image and source code, please email us at <a href="mailto:support@hiwonder.com" target="_blank" rel="noreferrer">support@hiwonder.com</a>, and share your order number 😃</li><li>Google Drive：<a href="https://drive.google.com/drive/folders/1TQkS2paRBfkfRvRJVoCxxfXtn2fkGa92?usp=sharing" target="_blank" rel="noreferrer">DaDablock Resources</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/resources_download.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resources_download = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  resources_download as default
};
