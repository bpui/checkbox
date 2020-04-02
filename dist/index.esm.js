import bpLibs from '@bpui/libs';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  components: {},
  props: {
    checked: {
      default: false
    },
    disabled: {
      default: false,
      type: Boolean
    },
  },
  model: {
    prop: "checked",
    event: "change"
  },
  data() {
    return {
      isChecked: false,
      hovering: false
    };
  },
  computed: {
    isDisabled() {
      return this.disabled || this.disabled !== false;
    }
  },
  created() {
    this.isChecked = this.checked;
  },
  beforeDestroy() {},
  beforeMount() {},
  mounted() {},
  methods: {
    handelChange(e) {
      this.$emit("change", e.target.checked);
      this.isChecked = e.target.checked;
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "label",
    {
      staticClass: "bp-checkbox",
      class: {
        "bp-Checkbox__disabled": _vm.isDisabled
      },
      on: {
        mouseenter: function($event) {
          _vm.hovering = true;
        },
        mouseleave: function($event) {
          _vm.hovering = false;
        }
      }
    },
    [
      _c("span", { staticClass: "bp-checkbox__input" }, [
        _c(
          "span",
          {
            staticClass: "bp-checkbox__inner",
            class: [
              _vm.hovering ? "bp-checkbox__inner_hover" : "",
              _vm.isChecked ? "bp-checkbox__inner_checked" : ""
            ]
          },
          [
            _vm.isChecked
              ? _c("bp-icon", { attrs: { name: "bp-checkbox_checked" } })
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "input",
          _vm._b(
            {
              staticClass: "bp-checkbox__original",
              attrs: { type: "checkbox", disabled: _vm.isDisabled },
              domProps: { checked: _vm.checked },
              on: { change: _vm.handelChange }
            },
            "input",
            _vm.$attrs,
            false
          )
        )
      ]),
      _vm._v(" "),
      _vm.$slots.default
        ? _c(
            "span",
            { staticClass: "bp-checkbox__label" },
            [_vm._t("default")],
            2
          )
        : _vm._e()
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

// register alias icon.
function init() {
  bpLibs.icons.registerAliasIcon('bp-checkbox_checked', 'ok');
}
init();

var index = {
  init,
  bpCheckbox: __vue_component__,
};

export default index;
//# sourceMappingURL=index.esm.js.map
