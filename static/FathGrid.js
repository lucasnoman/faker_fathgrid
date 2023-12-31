!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.FathGrid = t())
    : (e.FathGrid = t());
})(self, function () {
  return (() => {
    'use strict';
    var __webpack_modules__ = {
        47: (e, t, r) => {
          r.d(t, { Z: () => a });
          var o = r(645),
            n = r.n(o)()(function (e) {
              return e[1];
            });
          n.push([
            e.id,
            '.FathForm .error {border-color:red;}\r\n.FathForm .error-msg {color:red;}\r\n',
            '',
          ]);
          const a = n;
        },
        635: (e, t, r) => {
          r.d(t, { Z: () => a });
          var o = r(645),
            n = r.n(o)()(function (e) {
              return e[1];
            });
          n.push([
            e.id,
            '.fathgrid-wrapper .fathgrid thead th.sorted, th.sorted-desc {position: relative;}\r\n.fathgrid-wrapper .fathgrid thead th.sorted::after {content:"▲";position:absolute;right: 0.4em;}\r\n.fathgrid-wrapper[dir=rtl] .fathgrid thead th.sorted::after {right:auto;left: 0.4em;}\r\n.fathgrid-wrapper .fathgrid thead th.sorted-desc::after {content:"▼";position:absolute;right: 0.4em;}\r\n.fathgrid-wrapper[dir=rtl] .fathgrid thead th.sorted-desc::after {right:auto;left: 0.4em;}\r\n.fathgrid-wrapper .fathgrid-export-nav, .fathgrid-wrapper .fathgrid-columns-nav, .fathgrid-wrapper .fathgrid-graph-nav,.fathgrid-wrapper .fathgrid-graph2-nav, .fathgrid-wrapper .fathgrid-grouping-nav, .fathgrid-wrapper .fathgrid-print-nav {float:right;}\r\n.fathgrid-wrapper[dir=rtl] .fathgrid-export-nav, .fathgrid-wrapper[dir=rtl] .fathgrid-columns-nav, .fathgrid-wrapper[dir=rtl] .fathgrid-graph-nav, .fathgrid-wrapper[dir=rtl] .fathgrid-graph2-nav, .fathgrid-wrapper[dir=rtl] .fathgrid-grouping-nav, .fathgrid-wrapper[dir=rtl] .fathgrid-print-nav {float:left;}\r\n.fathgrid-wrapper {position:relative;}\r\n\r\n.fathgrid-wrapper .dropdown {    position: relative;    display: inline-block;  }\r\n.fathgrid-wrapper .dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  right:0;\r\n  background-color: #f9f9f9;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 111;\r\n}\r\n.fathgrid-wrapper .dropdown:hover .dropdown-content {    display: block;  }\r\n.fathgrid-wrapper .dropdown:hover .dropdown-content a {display:block;padding:0.1em 2em;margin:2px 0;}\r\n.fathgrid-wrapper .dropdown:hover .dropdown-content a:hover {background-color:#eee;}\r\n.fathgrid-wrapper .dropdown-content div {padding:4px;}\r\n.fathgrid-wrapper .dropdown-content div label {width:3em;text-align:right;position:absolute;}\r\n.fathgrid-wrapper .dropdown-content div select {display:block;width:10em;margin-left:3.5em;border:solid 1px #eee;}\r\n.fathgrid-wrapper .error {border-color:red;}\r\n\r\n.fathgrid-wrapper tbody input, .fathgrid-wrapper tbody textarea , .fathgrid-wrapper tbody select {border:0;}\r\n.fathgrid-wrapper tr.grouping select {width:100%;}\r\n.fathgrid-wrapper nav a.checked::before{content:\'✓\';position:absolute;left:1em;}\r\n.fathgrid-wrapper[dir=rtl] nav a.checked::before{left:auto;right:1em;}\r\n\r\n.fathgrid-wrapper .pagination {\r\n  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";\r\n  display: flex;\r\n  list-style:none;\r\n  padding-inline-start:0;\r\n}\r\n.fathgrid-wrapper .page-link:not(.gotopage):hover {  background:#eee;}\r\n.fathgrid-wrapper .page-link {\r\n  position: relative;\r\n  color: #007bff;\r\n  display: block;\r\n  padding: 4px 8px;\r\n  margin-left: -1px;\r\n  line-height: 1.4em;\r\n  border: 1px solid #ddd;\r\n  text-decoration:none;\r\n}\r\n\r\n.fathgrid-wrapper .graphplaceholder  {background:white;display:none;transition-duration:0.4s;width:100%;border:solid 1px #bbb;margin:15px 0;padding:1em;}\r\n\r\n.fathgrid-wrapper nav.active {background:#bcf;}\r\n\r\n.fathgrid-wrapper tbody tr.hidden {display:none;}\r\n.fathgrid-wrapper tbody tr.table-total td {font-weight:bold;font-style:italic;border-top:solid 2px #555;}\r\n\r\n.fathgrid-wrapper[dir=ltr] tr.selected td:nth-child(1) {border-left:solid 4px cornflowerblue;}\r\n.fathgrid-wrapper[dir=rtl] tr.selected td:nth-child(1) {border-right:solid 4px cornflowerblue;}\r\n.fathgrid-wrapper tr.selected > td{background:#ddd;}\r\n.fathgrid-wrapper .fathgrid-col-divider:hover {background-color:rgba(0,0,0,0.4);}\r\n.fathgrid-wrapper .fathgrid-col-divider {\r\n  position:absolute;\r\n  top:0;\r\n  z-index:110;\r\n  right:-2px;\r\n  width:5px;\r\n  user-select:none;\r\n  cursor:col-resize;\r\n}\r\n.fathgrid-wrapper tr.group-footer td {background:#fafaff;cursor:pointer;font-weight:bold;}\r\n\r\n\r\n',
            '',
          ]);
          const a = n;
        },
        645: (e) => {
          e.exports = function (e) {
            var t = [];
            return (
              (t.toString = function () {
                return this.map(function (t) {
                  var r = e(t);
                  return t[2] ? '@media '.concat(t[2], ' {').concat(r, '}') : r;
                }).join('');
              }),
              (t.i = function (e, r, o) {
                'string' == typeof e && (e = [[null, e, '']]);
                var n = {};
                if (o)
                  for (var a = 0; a < this.length; a++) {
                    var l = this[a][0];
                    null != l && (n[l] = !0);
                  }
                for (var i = 0; i < e.length; i++) {
                  var s = [].concat(e[i]);
                  (o && n[s[0]]) ||
                    (r &&
                      (s[2]
                        ? (s[2] = ''.concat(r, ' and ').concat(s[2]))
                        : (s[2] = r)),
                    t.push(s));
                }
              }),
              t
            );
          };
        },
        718: (e, t, r) => {
          var o = r(379),
            n = r.n(o),
            a = r(635);
          n()(a.Z, { insert: 'head', singleton: !1 }), a.Z.locals;
        },
        379: (e, t, r) => {
          var o,
            n = (function () {
              var e = {};
              return function (t) {
                if (void 0 === e[t]) {
                  var r = document.querySelector(t);
                  if (
                    window.HTMLIFrameElement &&
                    r instanceof window.HTMLIFrameElement
                  )
                    try {
                      r = r.contentDocument.head;
                    } catch (e) {
                      r = null;
                    }
                  e[t] = r;
                }
                return e[t];
              };
            })(),
            a = [];
          function l(e) {
            for (var t = -1, r = 0; r < a.length; r++)
              if (a[r].identifier === e) {
                t = r;
                break;
              }
            return t;
          }
          function i(e, t) {
            for (var r = {}, o = [], n = 0; n < e.length; n++) {
              var i = e[n],
                s = t.base ? i[0] + t.base : i[0],
                c = r[s] || 0,
                d = ''.concat(s, ' ').concat(c);
              r[s] = c + 1;
              var p = l(d),
                u = { css: i[1], media: i[2], sourceMap: i[3] };
              -1 !== p
                ? (a[p].references++, a[p].updater(u))
                : a.push({ identifier: d, updater: m(u, t), references: 1 }),
                o.push(d);
            }
            return o;
          }
          function s(e) {
            var t = document.createElement('style'),
              o = e.attributes || {};
            if (void 0 === o.nonce) {
              var a = r.nc;
              a && (o.nonce = a);
            }
            if (
              (Object.keys(o).forEach(function (e) {
                t.setAttribute(e, o[e]);
              }),
              'function' == typeof e.insert)
            )
              e.insert(t);
            else {
              var l = n(e.insert || 'head');
              if (!l)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                );
              l.appendChild(t);
            }
            return t;
          }
          var c,
            d =
              ((c = []),
              function (e, t) {
                return (c[e] = t), c.filter(Boolean).join('\n');
              });
          function p(e, t, r, o) {
            var n = r
              ? ''
              : o.media
              ? '@media '.concat(o.media, ' {').concat(o.css, '}')
              : o.css;
            if (e.styleSheet) e.styleSheet.cssText = d(t, n);
            else {
              var a = document.createTextNode(n),
                l = e.childNodes;
              l[t] && e.removeChild(l[t]),
                l.length ? e.insertBefore(a, l[t]) : e.appendChild(a);
            }
          }
          function u(e, t, r) {
            var o = r.css,
              n = r.media,
              a = r.sourceMap;
            if (
              (n ? e.setAttribute('media', n) : e.removeAttribute('media'),
              a &&
                'undefined' != typeof btoa &&
                (o +=
                  '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                    ' */'
                  )),
              e.styleSheet)
            )
              e.styleSheet.cssText = o;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(o));
            }
          }
          var h = null,
            f = 0;
          function m(e, t) {
            var r, o, n;
            if (t.singleton) {
              var a = f++;
              (r = h || (h = s(t))),
                (o = p.bind(null, r, a, !1)),
                (n = p.bind(null, r, a, !0));
            } else
              (r = s(t)),
                (o = u.bind(null, r, t)),
                (n = function () {
                  !(function (e) {
                    if (null === e.parentNode) return !1;
                    e.parentNode.removeChild(e);
                  })(r);
                });
            return (
              o(e),
              function (t) {
                if (t) {
                  if (
                    t.css === e.css &&
                    t.media === e.media &&
                    t.sourceMap === e.sourceMap
                  )
                    return;
                  o((e = t));
                } else n();
              }
            );
          }
          e.exports = function (e, t) {
            (t = t || {}).singleton ||
              'boolean' == typeof t.singleton ||
              (t.singleton =
                (void 0 === o &&
                  (o = Boolean(
                    window && document && document.all && !window.atob
                  )),
                o));
            var r = i((e = e || []), t);
            return function (e) {
              if (
                ((e = e || []),
                '[object Array]' === Object.prototype.toString.call(e))
              ) {
                for (var o = 0; o < r.length; o++) {
                  var n = l(r[o]);
                  a[n].references--;
                }
                for (var s = i(e, t), c = 0; c < r.length; c++) {
                  var d = l(r[c]);
                  0 === a[d].references && (a[d].updater(), a.splice(d, 1));
                }
                r = s;
              }
            };
          };
        },
        714: (e, t, r) => {
          r.d(t, { Z: () => l });

          var o = r(379), n = r.n(o),a = r(47);

          function l(e, t, r) {
            const o = {
              method: 'GET',
              action: '',
              fieldSeparator: '',
              radioTemplate:
                '\n            <div class="form-check">\n                <input class="form-check-input" id="{id}" type="{type}" name="{name}" value="{value}" {disabled} {required} {attrs} {checked}/>\n                <label class="form-check-label" for="{id}">{label}</label>\n            </div>\n        ',
              checkboxTemplate:
                '\n            <div class="form-group form-check">\n                <input class="form-check-input" id="{id}" type="{type}" placeholder="{placeholder}" name="{name}" {disabled} {required} {attrs} {checked}/>\n                <label class="form-check-label" for="{id}">{label}</label>\n            </div>',
              inputTemplate:
                '\n            <div class="form-group {classes}">\n                <label for="{id}">{label}</label>\n                <input class="form-control" id="{id}" type="{type}" placeholder="{placeholder}" name="{name}" value="{value}" {disabled} {required} {attrs}/>\n                <small class="form-text text-muted">{hint}</small>\n                <small class="error-msg form-text ">{error}</small>\n            </div>',
              selectTemplate:
                '\n            <div class="form-group {classes}">\n                <label for="{id}">{label}</label>\n                <select  class="form-control" id="{id}"  placeholder="{placeholder}" name="{name}" {disabled} {required} {attrs}>{options}</select>\n                <small class="form-text text-muted">{hint}</small>\n                <small class="error-msg form-text ">{error}</small>\n            </div>',
              textareaTemplate:
                '\n            <div class="form-group {classes}">\n                <label for="{id}">{label}</label>\n                <textarea class="form-control" id="{id}" placeholder="{placeholder}" name="{name}" {disabled} {required} {attrs}>{value}</textarea>\n                <small class="form-text text-muted">{hint}</small>\n                <small class="error-msg form-text ">{error}</small>\n            </div>',
              save: function (e) {
                console.log('Saving data called', e);
              },
              validate: function (e, t) {
                console.log('validate called', e);
              },
              ...r,
            };
            let n = e;
            const a = document.querySelector(`#${t}`),
              l = {
                err: [],
                add: function (e, t) {
                  this.err.push({ f: e, m: t });
                },
                clear: function () {
                  this.err = [];
                },
              };
            function i() {
              a.innerHTML = `<form class="FathForm" method="${o.method}" action="${o.action}" >\n
              ${o.fields
                .map((e) =>
                  (function (e, t) {
                    const r = {
                      classes:
                        (e.classes || '') +
                        (void 0 !== e.error ? ' error' : ''),
                      label: e.label || e.name,
                      name: e.name,
                      id: e.id || e.name,
                      type: e.type || 'text',
                      placeholder: e.placeholder || '',
                      hint: e.hint || '',
                      value: t[e.name],
                      checked: t[e.name] ? 'checked' : '',
                      options: '{options}',
                      disabled: !0 === e.disabled ? 'disabled' : '',
                      required: !0 === e.required ? 'required' : '',
                      error: e.error || '',
                      attrs: `${e.height ? `height="${e.height}"` : ''} ${
                        e.style ? `style="${e.style}"` : ''
                      }`,
                    };
                    return 'radio' == e.type
                      ? e.list
                          .map(
                            (n) => (
                              (r.value = n.value),
                              (r.label = n.name),
                              (r.checked =
                                t[e.name] == n.value ? ' checked ' : ''),
                              `${o.radioTemplate.replace(
                                /{(\w+)}/g,
                                (e, t) => r[t]
                              )}`
                            )
                          )
                          .join('')
                      : void 0 !== e.list
                      ? `${o.selectTemplate.replace(
                          /{(\w+)}/g,
                          (e, t) => r[t]
                        )}`.replace(
                          '{options}',
                          e.list
                            .map(
                              (e) =>
                                `<option ${
                                  r.value == e.value ? 'selected' : ''
                                } value=${e.value}>${e.name}</option>`
                            )
                            .join('')
                        )
                      : 'textarea' == e.type
                      ? `${o.textareaTemplate.replace(
                          /{(\w+)}/g,
                          (e, t) => r[t]
                        )}`
                      : 'checkbox' == e.type
                      ? `${o.checkboxTemplate.replace(
                          /{(\w+)}/g,
                          (e, t) => r[t]
                        )}`
                      : `${o.inputTemplate.replace(
                          /{(\w+)}/g,
                          (e, t) => r[t]
                        )}`;
                  })(e, n)
                )
                .join(`${o.fieldSeparator}`)}\n          </form>`;
            }
            return (
              i(),
              {
                id: t,
                render: i,
                wrapperEl: a,
                save: function () {
                  (function () {
                    a
                      .querySelectorAll('input, select, textarea')
                      .forEach((e) => {
                        e.classList.remove('error'),
                          e.checkValidity() || e.classList.add('error');
                      }),
                      l.clear();
                    const e = { ...n };
                    return (
                      o.fields.forEach((t) => {
                        e[t.name] = a.querySelector(
                          `:scope *[name='${t.name}']`
                        ).value;
                      }),
                      o.validate(e, l),
                      !(
                        l.err.length > 0 &&
                        (o.fields.forEach((e) => {
                          e.error = void 0;
                        }),
                        l.err.forEach((e) => {
                          a
                            .querySelector(`:scope *[name='${e.f}']`)
                            .classList.add('error'),
                            (a
                              .querySelector(`:scope *[name='${e.f}']`)
                              .parentElement.querySelector(
                                ':scope .error-msg'
                              ).innerText = e.m);
                        }),
                        1)
                      )
                    );
                  })() &&
                    (o.fields.forEach((e) =>
                      'checkbox' === e.type
                        ? (n[e.name] = a.querySelector(
                            `:scope *[name='${e.name}']`
                          ).checked)
                        : 'radio' == e.type
                        ? null !=
                          a.querySelector(`:scope *[name='${e.name}']:checked`)
                          ? (n[e.name] = a.querySelector(
                              `:scope *[name='${e.name}']:checked`
                            ).value)
                          : null
                        : (n[e.name] = a.querySelector(
                            `:scope *[name='${e.name}']`
                          ).value)
                    ),
                    o.save(n));
                },
                reset: function () {
                  (n = e), i();
                },
              }
            );
          }
          n()(a.Z, { insert: 'head', singleton: !1 }), a.Z.locals;
        },
      },
      __webpack_module_cache__ = {};

    function __webpack_require__(e) {
      var t = __webpack_module_cache__[e];
      if (void 0 !== t) return t.exports;
      var r = (__webpack_module_cache__[e] = { id: e, exports: {} });
      return (
        __webpack_modules__[e](r, r.exports, __webpack_require__), r.exports
      );
    }

    (__webpack_require__.n = (e) => { var t = e && e.__esModule ? () => e.default : () => e; return __webpack_require__.d(t, { a: t }), t; }),
    (__webpack_require__.d = (e, t) => { for (var r in t) __webpack_require__.o(t, r) && !__webpack_require__.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }); }),
    (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));

    var __webpack_exports__ = {};

    return (
      (() => {
        __webpack_require__.d(__webpack_exports__, { default: () => FathGrid });
        var _fathgrid_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(718), _fathform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(714);

        function FathGrid(e, t) {
          let r = {
            id: e,
            size: 20,
            page: 1,
            multiselect: !1,
            editable: !1,
            filterable: !0,
            sortable: !0,
            pageable: !0,
            exportable: !0,
            printable: !0,
            graphType: 'line',
            graphValues: void 0,
            showGraph: !0,
            showGrouping: !0,
            showFooter: !1,
            selectColumns: !0,
            showGroupFooter: !1,
            showTableTotal: !1,
            showGroupHeader: !0,
            showGroupRows: !0,
            onInitFilter: function (e) {},
            onInitTable: function (e) {},
            onInitInput: function (e, t, r) {},
            prepareData: async function (e) {
              return e;
            },
            sort: [],
            columns: [],
            onRender: function () {},
            onClick: function (e, t, r) {
              U(e.rownum, t);
            },
            onChange: function (e, t, r, o) {},
            rowClass: null,
            data: null,
            q: '',
            rtl: !1,
            decimals: 2,
            graphHeight: '200px',
            template: '{tools}{info}{graph}{table}{pager}',
            language: 'auto',
            restoreColumns: !1,
            resizable: !0,
            fetchOptions: { headers: { Accept: 'application/json' } },
            filterParamPrefix: '',
            pageNumberBase: 1,
            iconGroup:
              '<svg style="display:block-inline;width:1.5em;margin:4px;stroke-width: 0;stroke: currentColor;fill: currentColor;" viewBox="0 0 32 32" >      <path d="M16 0c-8.837 0-16 2.239-16 5v3l12 12v10c0 1.105 1.791 2 4 2s4-0.895 4-2v-10l12-12v-3c0-2.761-7.163-5-16-5zM2.95 4.338c0.748-0.427 1.799-0.832 3.040-1.171 2.748-0.752 6.303-1.167 10.011-1.167s7.262 0.414 10.011 1.167c1.241 0.34 2.292 0.745 3.040 1.171 0.494 0.281 0.76 0.519 0.884 0.662-0.124 0.142-0.391 0.38-0.884 0.662-0.748 0.427-1.8 0.832-3.040 1.171-2.748 0.752-6.303 1.167-10.011 1.167s-7.262-0.414-10.011-1.167c-1.24-0.34-2.292-0.745-3.040-1.171-0.494-0.282-0.76-0.519-0.884-0.662 0.124-0.142 0.391-0.38 0.884-0.662z"></path>      </svg>',
            iconGraph:
              '<svg style="display:block-inline;width:1.5em;margin:4px;stroke-width: 0;stroke: currentColor;fill: currentColor;" viewBox="0 0 32 32" ><path d="M4 28h28v4h-32v-32h4zM9 26c-1.657 0-3-1.343-3-3s1.343-3 3-3c0.088 0 0.176 0.005 0.262 0.012l3.225-5.375c-0.307-0.471-0.487-1.033-0.487-1.638 0-1.657 1.343-3 3-3s3 1.343 3 3c0 0.604-0.179 1.167-0.487 1.638l3.225 5.375c0.086-0.007 0.174-0.012 0.262-0.012 0.067 0 0.133 0.003 0.198 0.007l5.324-9.316c-0.329-0.482-0.522-1.064-0.522-1.691 0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3-0.067 0-0.133-0.003-0.198-0.007l-5.324 9.316c0.329 0.481 0.522 1.064 0.522 1.691 0 1.657-1.343 3-3 3s-3-1.343-3-3c0-0.604 0.179-1.167 0.487-1.638l-3.225-5.375c-0.086 0.007-0.174 0.012-0.262 0.012s-0.176-0.005-0.262-0.012l-3.225 5.375c0.307 0.471 0.487 1.033 0.487 1.637 0 1.657-1.343 3-3 3z"></path></svg>',
            iconColumns:
              '<svg style="display:block-inline;width:1.5em;margin:4px;stroke-width: 0;stroke: currentColor;fill: currentColor;" viewBox="0 0 32 32" ><g transform="rotate(90 16 16)"><path d="M0 0h8v8h-8zM12 2h20v4h-20zM0 12h8v8h-8zM12 14h20v4h-20zM0 24h8v8h-8zM12 26h20v4h-20z"></path></g></svg>',
            iconExport:
              '<svg style="display:block-inline;width:1.5em;margin:4px;stroke-width: 0;stroke: currentColor;fill: currentColor;" viewBox="0 0 32 32" ><path d="M23 14l-8 8-8-8h5v-12h6v12zM15 22h-15v8h30v-8h-15zM28 26h-4v-2h4v2z"></path></svg>',
            iconPrint:
              '<svg style="display:block-inline;width:1.5em;margin:4px;stroke-width: 0;stroke: currentColor;fill: currentColor;" viewBox="0 0 32 32" >      <path d="M8 2h16v4h-16v-4z"></path>      <path d="M30 8h-28c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h6v8h16v-8h6c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2zM4 14c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM22 28h-12v-10h12v10z"></path></svg>',
            ...t,
          };
          const o = {
            en: {
              of: 'of',
              yes: 'yes',
              export: 'Export',
              previous: 'Previous',
              next: 'Next',
              last: 'Last',
              first: 'First',
              gotoPage: 'Goto Page',
              loading: 'Loading...',
              selectRow: 'Select Row',
              showSelectedOnly: 'Show Only Selected Rows',
              groupby: 'Group By',
              avg: 'Avg',
              count: 'Count',
              min: 'Min',
              max: 'Max',
              sum: 'Sum',
              show_grouping_controls: 'Show Grouping Controls',
              show_graph: 'Show Graph',
              select_columns: 'Select Columns',
              type: 'Type',
              none: 'None',
              line: 'Line',
              bar: 'Bar',
              pie: 'Pie',
            },
            de: {
              of: 'von',
              yes: 'Ja',
              export: 'Export',
              previous: 'Bisherige',
              next: 'Nächster',
              last: 'Zuletzt',
              first: 'Zuerst',
              gotoPage: 'gehe zu Seite',
              loading: 'Wird geladen...',
              selectRow: 'Zeile auswählen',
              showSelectedOnly: 'Nur ausgewählte Zeilen anzeigen',
            },
            fr: {
              of: 'de',
              yes: 'Oui',
              export: 'exportation',
              previous: 'précédent',
              next: 'suivant',
              last: 'dernier',
              first: 'première',
              gotoPage: 'aller à la page',
              loading: 'chargement...',
              selectRow: 'sélectionner la ligne',
              showSelectedOnly: 'afficher uniquement les lignes sélectionnées',
            },
            ar: {
              of: 'من',
              yes: 'نعم',
              export: 'تصدير',
              previous: 'السابق',
              next: 'التالى',
              last: 'الاخير',
              first: 'أول',
              gotoPage: 'انتقل إلى صفحة',
              loading: 'جار التحميل',
              selectRow: 'حدد الصف',
              showSelectedOnly: 'إظهار الصفوف المحددة فقط',
            },
            es: {
              of: 'de',
              yes: 'si',
              export: 'exportat',
              previous: 'anterior',
              next: 'próximo',
              last: 'último',
              first: 'primero',
              gotoPage: 'Ir a la página',
              loading: 'cargando...',
              selectRow: 'seleccione fila',
              showSelectedOnly: 'muestra solo las filas seleccionadas',
            },
          };
          'auto' === r.language &&
            (r.language = navigator.language.substr(0, 2)),
            (r.lang =
              void 0 !== o[r.language] ? { ...o[r.language], ...o.en } : o.en);
          let n = [],
            a = 0,
            l = 0,
            i = null === r.data ? [] : r.data,
            s = i;
          'string' == typeof i &&
            (async () => {
              const e = await fetch(i).then((e) => e.json());
              i = await e.json();
            })();
          const c = `<canvas style="width:100%;height:${r.graphHeight};" ></canvas>`,
            d =
              document.getElementById(e) ||
              document.body.appendChild(document.createElement('TABLE')),
            p =
              d.querySelector(':scope tbody') ||
              d.appendChild(document.createElement('TBODY')),
            u =
              d.querySelector(':scope thead') ||
              d.insertBefore(document.createElement('THEAD'), p);
          let h;
          const f = function () {
              return `<span class="page-info">${
                (r.page - 1) * r.size + 1
              }-${Math.min(l, r.page * (r.size > 0 ? r.size : l))} ${
                r.lang.of
              } ${a !== l ? `${l}/` : ''}${a}</span>`;
            },
            m = function () {
              const e = '&#x23f5;',
                t = '&#x23F4;';
              return r.size >= l || 0 === r.size
                ? ''
                : `\n      <ul class="pagination" >\n        <li class="page-item"><a class="page-link firstpage" title="${
                    r.lang.first
                  }" href="#">&#x2503;${
                    r.rtl ? e : t
                  }</a></li>\n        <li class="page-item"><a class="page-link prevpage" title="${
                    r.lang.previous
                  }" href="#">${
                    r.rtl ? e : t
                  }</a></li>\n        <li class="page-item active"><a class="page-link gotopage" title="${
                    r.lang.gotoPage
                  }" href="javascript:void(0)">${r.page} / ${Math.floor(
                    (l + (r.size - 1)) / r.size
                  )}</a></li>\n        <li class="page-item"><a class="page-link nextpage" title="${
                    r.lang.next
                  }" href="#">${
                    r.rtl ? t : e
                  }</a></li>\n        <li class="page-item"><a class="page-link lastpage" title="${
                    r.lang.last
                  }" href="#">${
                    r.rtl ? t : e
                  }&#x2503;</a></li>\n      </ul>\n    `;
            },
            g = function () {
              (r.page = Math.floor(
                Math.min(r.page + 1, (l + r.size - 1) / r.size)
              )),
                I();
            },
            v = function () {
              (r.page = Math.max(1, r.page - 1)), I();
            },
            y = function () {
              (r.page = Math.floor((l + r.size - 1) / r.size)), I();
            },
            b = function () {
              (r.page = 1), I();
            },
            w = function () {
              return n;
            },
            x = function (e, t = !0) {
              let o;
              t
                ? (r.multiselect || (n = []), n.push(i[e - 1]))
                : (n = n.filter((t) => t.rownum !== e)),
                (p.querySelectorAll(':scope tr.selected') || []).forEach((e) =>
                  e.classList.remove('selected')
                ),
                n.map((e) => {
                  null !==
                    (o = p.querySelector(
                      ":scope > tr[data-rownum='" + e.rownum + "']"
                    )) && o.classList.add('selected');
                }),
                null !== A &&
                  A.querySelectorAll('.selected-count').forEach(
                    (e) => (e.innerText = `${w().length}`)
                  ),
                (
                  p.querySelectorAll(
                    ':scope tr.selected td.multiselect input.selector'
                  ) || []
                ).forEach((e) => (e.checked = !0));
            },
            E = function (e, t, o) {
              const n = q.querySelector(
                ":scope .fathgrid-columns-nav .dropdown-content a[data-i='" +
                  e +
                  "']"
              );
              null !== n &&
                (t
                  ? n.classList.add('checked')
                  : n.classList.remove('checked')),
                (r.columns[e].visible = t),
                (void 0 === o || o) && _();
            },
            _ = function () {
              u.querySelectorAll(':scope tr').forEach((e, t) => {
                e.querySelectorAll(':scope th:not(.multiselect)').forEach(
                  (e, t) => {
                    e.style.display =
                      !1 === r.columns[t].visible ? 'none' : 'table-cell';
                  }
                );
              }),
                G(),
                I();
            },
            S = function (e, t) {
              return void 0 !== r.columns[t].name ? e[r.columns[t].name] : e[t];
            },
            k = function (e, t) {
              return void 0 !== r.columns[t].value
                ? r.columns[t].value(e, r.columns[t])
                : S(e, t);
            },
            L = function (e, t, o) {
              void 0 !== r.columns[t].name
                ? (i[e][r.columns[t].name] = o)
                : (i[e][t] = o);
            };
          let T;
          const q = document.createElement('DIV');
          q.classList.add('fathgrid-wrapper'),
            r.rtl && q.setAttribute('dir', 'rtl'),
            d.parentNode.insertBefore(q, d),
            u.querySelectorAll(':scope tr th').forEach((e, t) => {
              void 0 === r.columns[t] && (r.columns[t] = {}),
                '' === e.innerText
                  ? (e.innerText = r.columns[t].header || r.columns[t].name)
                  : (r.columns[t].header = e.innerText);
            });
          const $ = {
            graph: `<div class="graphplaceholder">${c}</div>`,
            tools: `\n    ${
              r.showGrouping
                ? `<nav class="fathgrid-grouping-nav" id="grouping${e}"><a href="javascript:void(0)" title="${r.lang.show_grouping_controls}">\n      ${r.iconGroup}\n      </a></nav>\n      `
                : ''
            }\n    ${
              void 0 !== r.graphValues && 'function' == typeof Chart
                ? `<nav class="fathgrid-graph-nav dropdown" id="graphs${e}"><a href="javascript:void(0)" title="${r.lang.show_graph}">\n      ${r.iconGraph}\n      </a></nav>\n      `
                : ''
            }\n    ${
              r.showGraph && 'function' == typeof Chart
                ? `<nav class="fathgrid-graph2-nav dropdown" id="graphs${e}"><a href="javascript:void(0)" title="${
                    r.lang.show_graph
                  }">\n      ${
                    r.iconGraph
                  }\n      </a><div class="dropdown-content">\n          <div>\n              <label>X</label><select id="${
                    r.id
                  }__select_graph_x">${r.columns
                    .map(
                      (e, t) =>
                        `<option value="${t}">${e.header || e.name}</option>`
                    )
                    .join(
                      ''
                    )}</select>\n              <label>Y</label><select id="${
                    r.id
                  }__select_graph_y">${r.columns
                    .map(
                      (e, t) =>
                        `<option value="${t}">${e.header || e.name}</option>`
                    )
                    .join(
                      ''
                    )}</select>\n              <label>Y2</label><select id="${
                    r.id
                  }__select_graph_y2"><option value=""></option>${r.columns
                    .map(
                      (e, t) =>
                        `<option value="${t}">${e.header || e.name}</option>`
                    )
                    .join('')}</select>\n              <label>${
                    r.lang.type
                  }</label><select id="${r.id}__select_graph_type">${[
                    r.lang.none,
                    r.lang.line,
                    r.lang.bar,
                    r.lang.pie,
                  ]
                    .map((e, t) => `<option value="${t}">${e}</option>`)
                    .join('')}</select>\n          </div>\n      </div></nav>`
                : ''
            }\n    ${
              r.selectColumns
                ? `<nav class="fathgrid-columns-nav dropdown" id="columns${e}"><a href="javascript:void(0)" title="${
                    r.lang.select_columns
                  }">\n      ${
                    r.iconColumns
                  }\n      </a><div class="dropdown-content">${r.columns
                    .map(
                      (e, t) =>
                        `<a class="${
                          !1 !== e.visible ? 'checked' : ''
                        }" data-i="${t}" href="#">${e.header || e.name}</a>`
                    )
                    .join(' ')}</div></nav>`
                : ''
            }\n    ${
              r.exportable
                ? `<nav class="fathgrid-export-nav dropdown" id="exporter${e}"><a href="javascript:void(0)">\n      ${
                    r.iconExport
                  }\n      </a><div class="dropdown-content"><a href="javascript:void(0)" title="${
                    r.lang.export
                  }" data-format="txt">TXT</a> <a href="javascript:void(0)" title="${
                    r.lang.export
                  }" data-format="csv">CSV</a> <a href="javascript:void(0)" title="${
                    r.lang.export
                  }" data-format="html">HTML</a> <a href="javascript:void(0)" title="${
                    r.lang.export
                  }" data-format="xls">XLS</a> ${
                    'function' == typeof window.jsPDF
                      ? `<a href="javascript:void(0)" title="${r.lang.export}" data-format="pdf">PDF</a>`
                      : ''
                  }</div></nav>`
                : ''
            }\n    ${
              r.printable
                ? `<nav class="fathgrid-print-nav dropdown printgrid${e}"><a href="javascript:void(0)" title="Print">\n      ${r.iconPrint}\n      </a></nav>\n      `
                : ''
            }\n    `,
            info: r.pageable
              ? `<div class="pageinfo${e}">` + f() + '</div>'
              : '',
            table: `<div id="table-container${e}"></div>`,
            pager: r.pageable
              ? `<nav class="paginator${e}">` + m() + '</nav>'
              : '',
          };
          (q.innerHTML = r.template.replace(/{(\w+)}/g, (e, t) => $[t])),
            q.querySelector(':scope #table-container' + e).appendChild(d),
            q
              .querySelectorAll(
                ':scope .fathgrid-columns-nav .dropdown-content a'
              )
              .forEach((e) =>
                e.addEventListener('click', function (t) {
                  E(e.dataset.i, !e.classList.contains('checked')), N(t);
                })
              ),
            q.querySelectorAll(':scope .fathgrid-graph-nav a').forEach((e) =>
              e.addEventListener('click', function (t) {
                e.parentElement.classList.toggle('active'),
                  Y(e.parentElement.classList.contains('active')),
                  N(t);
              })
            ),
            q
              .querySelectorAll(':scope .fathgrid-graph2-nav select')
              .forEach((e) =>
                e.addEventListener('change', function (e) {
                  K(), N(e);
                })
              ),
            q.querySelectorAll(':scope .fathgrid-grouping-nav a').forEach((e) =>
              e.addEventListener('click', function (t) {
                te(!e.parentElement.classList.contains('active')), N(t);
              })
            ),
            q.querySelectorAll(':scope .fathgrid-print-nav a').forEach((e) =>
              e.addEventListener('click', function (e) {
                Q(), N(e);
              })
            );
          const C = q.querySelectorAll(`:scope .pageinfo${e}`),
            F = q.querySelectorAll(`:scope .paginator${e}`),
            M = q.querySelector(`#exporter${e}`);
          null !== M &&
            M.querySelectorAll(':scope a').forEach((e) => {
              e.addEventListener('click', function (e) {
                void 0 !== e.srcElement.dataset.format &&
                  V(
                    Z(e.srcElement.dataset.format),
                    'export.' + e.srcElement.dataset.format
                  );
              });
            }),
            ('fathgrid ' + (r.tableClass || '')).split(' ').forEach((e) => {
              '' !== e && d.classList.add(e);
            }),
            null === i || 0 === a
              ? d.querySelectorAll(':scope tbody tr').forEach((e, t) => {
                  const r = [];
                  e.querySelectorAll(':scope td').forEach((e) => {
                    r.push(e.innerText);
                  }),
                    (r.id = void 0 === e.dataset.id ? t + 1 : e.dataset.id),
                    i.push(r);
                })
              : (i = i.map((e, t) => (void 0 === e.id && (e.id = t + 1), e))),
            (i = i.map((e, t) => ((e.rownum = t + 1), e)));
          let A = d.querySelector('TFOOT');
          const G = function () {
            if (r.showFooter) {
              if (
                (null === A
                  ? ((A = document.createElement('TFOOT')),
                    d.appendChild(A),
                    (A.innerHTML = '<tr></tr>'))
                  : (A.innerHTML = '<tr></tr>'),
                r.multiselect)
              ) {
                const e = document.createElement('TH');
                (e.dataset.i = -1),
                  e.classList.add('selected-count'),
                  A.appendChild(e);
              }
              r.columns.forEach((e, t) => {
                const r = document.createElement('TH');
                (r.dataset.i = t),
                  A.appendChild(r),
                  !1 === e.visible && (r.style.display = 'none'),
                  !1 === e.printable && r.classList.add('noprint'),
                  (e.class || '')
                    .split(' ')
                    .filter((e) => '' !== e)
                    .forEach((e) => r.classList.add(e));
              });
            }
          };
          G();
          const O = function () {
              const e = [];
              return (
                u
                  .querySelectorAll(
                    ':scope tr.filter th:not(.multiselect) input, :scope tr.filter th:not(.multiselect) select'
                  )
                  .forEach((t) => {
                    '' !== t.value &&
                      (e[r.columns[t.dataset.i].name || t.dataset.i] = t.value);
                  }),
                e
              );
            },
            j = async function () {
              if (void 0 !== r.serverURL) {
                const e = {
                    page: r.page - (1 - r.pageNumberBase),
                    size: r.size,
                    search: r.q,
                    sort: r.sort
                      .map(
                        (e) =>
                          r.columns[Math.abs(e) - 1].name ||
                          '(' + r.columns[Math.abs(e) - 1].expr + ')'
                      )
                      .join(','),
                    sortAndOrder: r.sort
                      .map(
                        (e) =>
                          (r.columns[Math.abs(e) - 1].name ||
                            '(' + r.columns[Math.abs(e) - 1].expr + ')') +
                          (e < 0 ? ' desc' : '')
                      )
                      .join(','),
                    order: r.sort.map((e) => (e < 0 ? 'desc' : 'asc')),
                    filters: Object.keys(O())
                      .filter((e) => 'number' != typeof e)
                      .map((e) => r.filterParamPrefix + e + '=' + O()[e])
                      .join('&'),
                  },
                  t = r.serverURL.replace(/\${(\w+)}/g, (t, r) => e[r]),
                  o = await (async function () {
                    const e = await fetch(t, r.fetchOptions);
                    return (
                      (a = parseInt(e.headers.get('x-total-count'))),
                      e.headers.get('Content-Range'),
                      await r.prepareData(await e.json())
                    );
                  })();
                return (
                  (isNaN(a) || void 0 === a) && (a = o.totalRecords),
                  (i = Array.isArray(o)
                    ? o
                    : void 0 !== o.content
                    ? o.content
                    : o.data),
                  (i = i.map((e, t) => ((e.rownum = t + 1), e))),
                  (isNaN(a) || void 0 === a) && (a = i.length),
                  (l = a),
                  (s = i),
                  i
                );
              }
              return (
                (a = i.length),
                (s = i.filter((e) => {
                  let t = !0;
                  return (
                    !(
                      r.multiselect &&
                      u.querySelector(':scope tr.filter .selector').checked &&
                      !n.includes(e)
                    ) &&
                    (u
                      .querySelectorAll(
                        ':scope tr.filter th:not(.multiselect) input, :scope tr.filter th:not(.multiselect) select'
                      )
                      .forEach((o) => {
                        const n = Array.from(
                          o.querySelectorAll(':scope option:checked'),
                          (e) => e.value
                        );
                        if (n.filter((e) => '' !== e).length > 1) {
                          let r = !1;
                          n.forEach((t) => {
                            '' !== t && e[o.dataset.i].includes(t) && (r = !0);
                          }),
                            r || (t = !1);
                        } else
                          'checkbox' === o.type
                            ? o.checked && !B(S(e, o.dataset.i)) && (t = !1)
                            : 'color' === o.type
                            ? '#000000' !== o.value &&
                              S(e, o.dataset.i) !== o.value &&
                              (t = !1)
                            : 'checkbox' === r.columns[o.dataset.i].type
                            ? '' !== o.value &&
                              S(e, o.dataset.i) !== o.value &&
                              (t = !1)
                            : '' !== o.value &&
                              'number' == typeof S(e, o.dataset.i)
                            ? (t =
                                S(e, o.dataset.i) ==
                                ('number' != typeof o.value
                                  ? parseFloat(o.value)
                                  : o.value))
                            : '' === o.value ||
                              ('' + S(e, o.dataset.i)).includes(o.value) ||
                              (t = !1);
                        t &&
                          '' !== r.q &&
                          (t =
                            void 0 !==
                            r.columns.find((t, o) =>
                              'number' == typeof S(e, o)
                                ? S(e, o) === r.q
                                : 'string' == typeof S(e, o)
                                ? S(e, o)
                                    .toLowerCase()
                                    .includes(r.q.toLowerCase())
                                : S(e, o) === r.q
                            ));
                      }),
                    t)
                  );
                })),
                (l = s.length),
                0 === r.size
                  ? s
                  : s.slice((r.page - 1) * r.size, r.page * r.size)
              );
            };
          let z = [],
            R = [];
          function H(e = null, t = !0) {
            null === e ? (e = z) : (z = e),
              [...p.children].forEach((e) => p.removeChild(e)),
              (h = void 0),
              (r.page - 1) * r.size >= l && (r.page = 1);
            let o,
              n,
              a,
              c = null,
              d = [];
            if (
              ((R = []),
              e.forEach((e, t) => {
                if (
                  'function' == typeof r.groupOn &&
                  c !== (o = r.groupOn(e, t))
                ) {
                  if (!0 === r.showGroupFooter && null !== c) {
                    p.appendChild((n = document.createElement('TR'))),
                      n.classList.add('group-footer');
                    const e = {};
                    r.columns.forEach((t, o) => {
                      let l;
                      n.appendChild((a = document.createElement('TD'))),
                        (a.style.display =
                          !1 !== t.visible ? a.style.display : 'none'),
                        !1 === t.printable && a.classList.add('noprint'),
                        (t.class || '')
                          .split(' ')
                          .filter((e) => '' !== e)
                          .forEach((e) => a.classList.add(e)),
                        null !==
                          (l =
                            'function' == typeof t.groupFooter
                              ? t.groupFooter(
                                  d,
                                  t.name || o,
                                  a,
                                  r.decimals,
                                  t.value
                                )
                              : t.groupFooter || null) &&
                          ((a.innerHTML = '' + l), (e[t.name || o] = l));
                    }),
                      R.push(e);
                  }
                  if (
                    r.showGroupHeader ||
                    r.columns.find(
                      (e, t) =>
                        !1 === e.visible && r._gr && r._gr.includes(t + 1)
                    )
                  ) {
                    p.appendChild((n = document.createElement('TR'))),
                      n.classList.add('group-header'),
                      n.appendChild((a = document.createElement('TD'))),
                      a.setAttribute(
                        'colspan',
                        r.columns.filter((e) => !1 !== e.visible).length +
                          (r.multiselect ? 1 : 0)
                      );
                    const t = r.columns
                      .filter(
                        (e, t) => !1 === e.visible && r._gr.includes(t + 1)
                      )
                      .map((t) => (t.value ? t.value(e, t) : e[t.name]))
                      .join(', ');
                    a.innerHTML = `${t || o}`;
                  }
                  (c = o), (d = []);
                }
                const l = document.createElement('tr');
                let i;
                if (
                  ((l.dataset.id = e.id),
                  (l.dataset.rownum = e.rownum),
                  'function' == typeof r.rowClass &&
                    (i = r.rowClass(e, t)) &&
                    'string' == typeof i &&
                    i
                      .split(' ')
                      .forEach((e) =>
                        '' !== e
                          ? e.startsWith('#')
                            ? (l.style.backgroundColor = e)
                            : l.classList.add(e)
                          : e
                      ),
                  w().includes(e) && l.classList.add('selected'),
                  r.multiselect)
                ) {
                  const t = document.createElement('td');
                  (t.title = `${r.lang.selectRow}`),
                    t.classList.add('multiselect'),
                    (t.innerHTML = `<input type="checkbox" class="selector" data-rownum="${
                      e.rownum
                    }" name="select_${e.id}" ${
                      w().includes(e) ? 'checked' : ''
                    } />`),
                    l.appendChild(t);
                }
                r.columns.forEach((t, o) => {
                  const n = document.createElement('td');
                  !1 === t.visible && (n.style.display = 'none'),
                    (t.class || '')
                      .split(' ')
                      .filter((e) => '' !== e)
                      .forEach((e) => n.classList.add(e));
                  const a =
                    void 0 !== t.value
                      ? t.value(e, t)
                      : void 0 !== t.name
                      ? e[t.name]
                      : e[o];
                  'checkbox' === t.type
                    ? ((n.innerHTML = `<input type="checkbox" ${
                        '1' === a ||
                        'true' === a ||
                        !0 === a ||
                        'yes' === a ||
                        'on' === a
                          ? 'checked'
                          : ''
                      } ${
                        !1 === t.editable ||
                        ('function' == typeof t.editable &&
                          !1 === t.editable(e, o + 1)) ||
                        !1 === r.editable
                          ? 'disabled'
                          : ''
                      } />`),
                      n
                        .querySelector(':scope input[type=checkbox]')
                        .addEventListener('click', function (t) {
                          r.onChange(
                            e,
                            o,
                            !t.srcElement.checked,
                            t.srcElement.checked
                          );
                        }))
                    : void 0 !== t.html
                    ? (n.innerHTML = t.html(e))
                    : (n.innerText = a),
                    !1 === t.printable && n.classList.add('noprint'),
                    l.appendChild(n);
                }),
                  r.showGroupRows || l.classList.add('hidden'),
                  p.appendChild(l),
                  void 0 !== r.groupOn && !0 === r.showGroupFooter && d.push(e);
              }),
              void 0 !== r.groupOn && !0 === r.showGroupFooter)
            ) {
              p.appendChild((n = document.createElement('TR'))),
                n.classList.add('group-footer');
              const e = {};
              r.columns.forEach((t, o) => {
                let l;
                n.appendChild((a = document.createElement('TD'))),
                  (a.style.display =
                    !1 !== t.visible ? a.style.display : 'none'),
                  (t.class || '')
                    .split(' ')
                    .filter((e) => '' !== e)
                    .forEach((e) => a.classList.add(e)),
                  !1 === t.printable && a.classList.add('noprint'),
                  null !==
                    (l =
                      'function' == typeof t.groupFooter
                        ? t.groupFooter(d, t.name || o, a, r.decimals, t.value)
                        : t.groupFooter || null) &&
                    ((a.innerHTML = '' + l), (e[t.name || o] = l));
              }),
                R.push(e),
                (d = []);
            }
            if (
              (void 0 !== r.groupOn &&
                !0 === r.showGroupFooter &&
                r.showTableTotal &&
                (p.appendChild((n = document.createElement('TR'))),
                n.classList.add('group-footer'),
                n.classList.add('table-total'),
                r.columns.forEach((t, o) => {
                  let l;
                  n.appendChild((a = document.createElement('TD'))),
                    (a.style.display =
                      !1 !== t.visible ? a.style.display : 'none'),
                    (t.class || '')
                      .split(' ')
                      .filter((e) => '' !== e)
                      .forEach((e) => a.classList.add(e)),
                    !1 === t.printable && a.classList.add('noprint'),
                    r._gr &&
                      !r._gr.includes(o + 1) &&
                      null !==
                        (l =
                          'function' == typeof t.groupFooter
                            ? t.groupFooter(
                                e,
                                t.name || o,
                                a,
                                r.decimals,
                                t.value
                              )
                            : t.groupFooter || null) &&
                      (a.innerHTML = '' + l);
                })),
              void 0 !== T &&
                t &&
                (function () {
                  if (void 0 === T) return;
                  const e = r.graphValues(J());
                  let t = 0;
                  (T.data = {
                    labels: e.labels,
                    datasets: Array.isArray(e.values[0])
                      ? e.values.map((o, n) => ({
                          label: e.title[n],
                          data: o,
                          borderWidth: 1,
                          fill: !1,
                          backgroundColor:
                            'pie' === r.graphType
                              ? o.map((e, t) => X[t % X.length])
                              : X[t],
                          borderColor:
                            'pie' === r.graphType
                              ? o.map((e, t) => X[t % X.length])
                              : X[t++],
                        }))
                      : [
                          {
                            label: e.title,
                            data: e.values,
                            borderWidth: 1,
                            backgroundColor:
                              'pie' === r.graphType
                                ? e.values.map((e, t) => X[t % X.length])
                                : X[t],
                            borderColor:
                              'pie' === r.graphType
                                ? e.values.map((e, t) => X[t % X.length])
                                : X[t++],
                          },
                        ],
                  }),
                    T.update({ duration: 0 });
                })(),
              r.pageable &&
                (C.forEach((e) => (e.innerHTML = f())),
                F.forEach((e) => {
                  (e.innerHTML = m()),
                    e.querySelectorAll('.nextpage').forEach((e) => {
                      e.addEventListener('click', function (e) {
                        g(), N(e);
                      });
                    }),
                    e.querySelectorAll('.prevpage').forEach((e) => {
                      e.addEventListener('click', function (e) {
                        v(), N(e);
                      });
                    }),
                    e.querySelectorAll('.lastpage').forEach((e) => {
                      e.addEventListener('click', function (e) {
                        y(), N(e);
                      });
                    }),
                    e.querySelectorAll('.firstpage').forEach((e) => {
                      e.addEventListener('click', function (e) {
                        b(), N(e);
                      });
                    }),
                    e.querySelectorAll('.gotopage').forEach((e) => {
                      e.addEventListener('click', function (t) {
                        e.innerHTML = `<input id="gotopage" style="width:3em;text-align:center;" type="number" min="1" max="${
                          (l + r.size - 1) / r.size
                        }" value="${r.page}"/>`;
                        const o = e.querySelector(':scope input');
                        o.focus(),
                          o.select(),
                          o.addEventListener('change', function (e) {
                            (r.page = Math.max(
                              1,
                              parseInt(e.srcElement.value)
                            )),
                              N(e),
                              I();
                          });
                      });
                    });
                })),
              p.querySelectorAll('input.selector').forEach((e) =>
                e.addEventListener('click', function (e) {
                  x(e.srcElement.dataset.rownum, e.srcElement.checked);
                })
              ),
              p.querySelectorAll('td').forEach((e) => {
                e.addEventListener('click', function (t) {
                  const o = t.srcElement.parentElement.closest('TR');
                  if (r.multiselect && e.classList.contains('multiselect'))
                    t.srcElement === e &&
                      e.querySelector(':scope input.selector').click();
                  else if (o.classList.contains('group-footer')) {
                    let e = o.previousSibling;
                    for (
                      ;
                      null !== e &&
                      !e.classList.contains('group-footer') &&
                      !e.classList.contains('group-header');

                    )
                      e.classList.toggle('hidden'), (e = e.previousSibling);
                  } else if (o.classList.contains('group-header')) {
                    let e = o.nextSibling;
                    for (
                      ;
                      null !== e && !e.classList.contains('group-footer');

                    )
                      e.classList.toggle('hidden'), (e = e.nextSibling);
                  } else
                    x(o.dataset.rownum),
                      r.onClick(
                        i[
                          t.srcElement.parentElement.closest('TR').dataset
                            .rownum - 1
                        ],
                        [
                          ...t.srcElement.parentElement.closest('TR').children,
                        ].indexOf(t.srcElement.closest('TD')) + 1,
                        t.srcElement.closest('TD')
                      );
                });
              }),
              null !== A)
            ) {
              let e;
              A.querySelectorAll(':scope th').forEach((t, o) => {
                void 0 !== r.columns[o].footer &&
                  null !==
                    (e =
                      'function' == typeof r.columns[o].footer
                        ? r.columns[o].footer(
                            s,
                            r.columns[o].name || o,
                            t,
                            r.decimals
                          )
                        : r.columns[o].footer || null) &&
                  (t.innerHTML = e);
              });
            }
            r.onRender(), r.onInitTable(p);
          }
          const I = function (e) {
              j()
                .then((t) => {H(t), void 0 !== e && e();})
                .catch((e) => {console.log('error getting data:', e);});
            },
            P = function () {
              i.sort((e, t) => {
                let o, n;
                for (let a = 0; a < r.sort.length; a++) {
                  const l = Math.abs(r.sort[a]) - 1,
                    i = r.sort[a] < 0;
                  if (
                    ((o =
                      'number' == typeof k(e, l)
                        ? k(e, l)
                        : k(e, l).replace(/(<([^>]+)>)/gi, '')),
                    (n =
                      'number' == typeof k(t, l)
                        ? k(t, l)
                        : k(t, l).replace(/(<([^>]+)>)/gi, '')),
                    o !== n)
                  )
                    return (
                      (!0 === i ? -1 : 1) *
                      ('number' != typeof o
                        ? o < n
                          ? -1
                          : o > n
                          ? 1
                          : 0
                        : o - n)
                    );
                }
                return 0;
              }),
                (i = i.map((e, t) => ((e.rownum = t + 1), e)));
            },
            D = function (e, t, o, n) {
              const a = r.sort;
              (r.sort = a.map((t) => (t === e || t === -e ? -t : t))),
                o ||
                  (r.sort = [
                    !0 === t || void 0 !== a.find((t) => t === e) ? -e : e,
                  ]),
                void 0 === a.find((t) => t === e || t === -e) &&
                  o &&
                  r.sort.push(!0 === t ? -e : e),
                void 0 !== r.sortBy &&
                  (r.sort = [
                    ...r.sortBy.filter((e) => !r.sort.includes(e)),
                    ...r.sort,
                  ]),
                P(),
                null !== u.querySelector(':scope th.sorted') &&
                  u
                    .querySelectorAll(':scope th.sorted')
                    .forEach((e) => e.classList.remove('sorted')),
                null !== u.querySelector(':scope th.sorted-desc') &&
                  u
                    .querySelectorAll(':scope th.sorted-desc')
                    .forEach((e) => e.classList.remove('sorted-desc')),
                r.sort.forEach((e) => {
                  u.querySelector(
                    ':scope tr:nth-child(1) th:nth-child(' +
                      (Math.abs(e) + (r.multiselect ? 1 : 0)) +
                      ')'
                  ).classList.add(e < 0 ? 'sorted-desc' : 'sorted');
                }),
                !1 !== n && I();
            };

          if (
            ((u.innerHTML = ''), 0 === u.querySelectorAll(':scope th').length)
          ) {
            const e = document.createElement('TR');
            let t;
            u.appendChild(e),
              r.multiselect && (e.innerHTML = '<th class="multiselect"></th>'),
              r.columns.forEach((r, o) => {
                e.appendChild((t = document.createElement('TH'))),
                  (t.innerText = r.header || r.name),
                  !1 === r.visible && (t.style.display = 'none'),
                  (t.dataset.name = r.name || o),
                  !1 === r.printable && t.classList.add('noprint'),
                  (r.class || '')
                    .split(' ')
                    .filter((e) => '' !== e)
                    .forEach((e) => t.classList.add(e));
              });
          }
          if (
            (u.querySelectorAll(':scope th').forEach((e, t) => {
              void 0 !== r.columns[t].width &&
                (e.style.width =
                  r.columns[t].width +
                  ('number' == typeof r.columns[t].width ? 'px' : ''));
            }),
            void 0 !== r.sortBy && r.sortBy.map((e) => D(e, !1, !0, !1)),
            r.sortable &&
              u.querySelectorAll('tr th').forEach((e, t) => {
                (e.style.cursor = 'pointer'),
                  e.addEventListener('click', function (e) {
                    D(t + 1, void 0, e.shiftKey),
                      N(e),
                      window.getSelection
                        ? window.getSelection().empty
                          ? window.getSelection().empty()
                          : window.getSelection().removeAllRanges &&
                            window.getSelection().removeAllRanges()
                        : document.selection && document.selection.empty();
                  });
              }),
            r.filterable)
          ) {
            const e = document.createElement('TR');
            e.classList.add('filter'),
              r.multiselect &&
                (e.innerHTML = `<th title="${r.lang.showSelectedOnly}" class="multiselect"><input type="checkbox" title="${r.lang.showSelectedOnly}" class="selector" /></th>`),
              r.columns.forEach((t, o) => {
                const n = document.createElement('TH');
                let a;
                if (
                  void 0 === r.columns[o].filterable ||
                  !1 !== r.columns[o].filterable
                ) {
                  if (
                    void 0 !== r.columns[o] &&
                    void 0 !== r.columns[o].filter
                  ) {
                    (a = document.createElement('SELECT')),
                      a.add(document.createElement('OPTION'));
                    let e = r.columns[o].filter;
                    null === e &&
                      ((e = []),
                      i.forEach((t) => {
                        e.includes(S(t, o)) || e.push(S(t, o));
                      }),
                      e.sort()),
                      'object' != typeof e || Array.isArray(e)
                        ? e.forEach((e) => {
                            const t = document.createElement('OPTION');
                            (t.innerText = 'object' == typeof e ? e.name : e),
                              (t.value = 'object' == typeof e ? e.value : e),
                              a.add(t);
                          })
                        : Object.keys(e).forEach((t) => {
                            const r = e[t],
                              o = document.createElement('OPTION');
                            (o.innerText = 'object' == typeof r ? r.name : r),
                              (o.value = 'object' == typeof r ? r.value : t),
                              a.add(o);
                          });
                  } else
                    (a = document.createElement('INPUT')),
                      a.setAttribute(
                        'type',
                        void 0 === r.columns[o] || void 0 === r.columns[o].type
                          ? 'text'
                          : r.columns[o].type
                      );
                  (a.style.width = '100%'),
                    !1 === r.columns[o].visible && (n.style.display = 'none'),
                    (a.dataset.i = o),
                    (a.title = `Filter value for field ${r.columns[o].name}`),
                    (
                      (r.columns[o].filterInputClass || '') +
                      ' ' +
                      (r.inputClass || '')
                    )
                      .split(' ')
                      .filter((e) => '' !== e)
                      .forEach((e) => a.classList.add(e)),
                    n.append(a);
                }
                !1 === t.printable && n.classList.add('noprint'), e.append(n);
              }),
              u.append(e),
              e.querySelectorAll(':scope input, select').forEach((e) => {
                e.addEventListener('change', function (e) {
                  I();
                });
              }),
              r.onInitFilter(e);
          }
          const N = function (e) {
              e.preventDefault(), e.stopPropagation();
            },
            B = function (e) {
              return (
                e === r.lang.yes ||
                'yes' === e ||
                'true' === e ||
                !0 === e ||
                'on' === e ||
                1 === e ||
                '1' === e
              );
            },
            W = function (e, t) {
              const o = e,
                n = t;
              for (; void 0 !== i[e - 1]; ) {
                t++;
                const o = r.columns[t - 1];
                if (
                  void 0 !== o &&
                  (!1 !== o.editable ||
                    ('function' == typeof o.editable &&
                      !1 !== o.editable(i[e - 1], t))) &&
                  'checkbox' !== o.type
                )
                  return U(e, t);
                t > r.columns.length && ((t = 0), e++);
              }
              U(o, n);
            },
            U = function (e, t) {
              if (void 0 !== h) {
                const e = h.value;
                if (!h.checkValidity()) return h.classList.add('error');
                const t = S(i[h.dataset.rownum - 1], h.dataset.col - 1);
                if (
                  (L(h.dataset.rownum - 1, h.dataset.col - 1, e),
                  t !== e &&
                    !1 ===
                      r.onChange(i[h.dataset.rownum - 1], h.dataset.col, t, e))
                )
                  return (
                    L(h.dataset.rownum - 1, h.dataset.col - 1, t),
                    void h.classList.add('error')
                  );
                h && h.remove(), (h = void 0), H();
              }
              const o = r.columns[t - 1];
              if (
                void 0 === o ||
                (void 0 !== o &&
                  (!1 === o.editable ||
                    ('function' == typeof o.editable &&
                      !1 === o.editable(i[e - 1], t))))
              )
                return;
              if ('checkbox' === o.type) return;
              const n = void 0 !== o && void 0 !== o.type ? o.type : 'text',
                a = S(i[e - 1], t - 1),
                l = p.querySelector(
                  ":scope > tr[data-rownum='" +
                    e +
                    "'] td:nth-child(" +
                    (t + (r.multiselect ? 1 : 0)) +
                    ')'
                );
              let s = null;
              if (void 0 !== o && void 0 !== o.listOfValues) {
                (l.innerHTML =
                  '<select style="width:100%;" id="coledit"  ></select>'),
                  (s = l.querySelector(':scope #coledit'));
                let r = o.listOfValues;
                'function' == typeof r && (r = r(i[e - 1], t, l)),
                  r.forEach((r) => {
                    const o = document.createElement('OPTION');
                    (o.innerText = void 0 === r.name ? r : r.name),
                      (o.value = void 0 === r.value ? r : r.value),
                      o.value === S(i[e - 1], t - 1) &&
                        o.setAttribute('selected', 'selected'),
                      s.add(o);
                  }),
                  s.focus();
              } else
                (l.innerHTML =
                  'textarea' === o.type
                    ? `<textarea id="coledit" style="width:${l.clientWidth}px;height:${l.clientHeight}px" ></textarea>`
                    : `<input type="${n}" ${
                        void 0 !== o.title ? `title="${o.title}"` : ''
                      } ${
                        void 0 !== o.pattern ? `pattern="${o.pattern}"` : ''
                      } style="width:100%;" id="coledit" />`),
                  (s = l.querySelector(':scope #coledit')),
                  (s.value = a),
                  s.focus(),
                  s.select();
              s.addEventListener('change', function (e) {
                const t = e.srcElement.dataset.rownum,
                  o = e.srcElement.dataset.col;
                if (S(i[t - 1], o - 1) !== e.srcElement.value) {
                  if (!e.srcElement.checkValidity())
                    return e.srcElement.classList.add('error');
                  L(t - 1, o - 1, e.srcElement.value),
                    !1 ===
                      r.onChange(
                        i[t - 1],
                        o,
                        S(i[t - 1], o - 1),
                        e.srcElement.value
                      ) &&
                      (L(t - 1, o - 1, S(i[t - 1], o - 1)),
                      e.srcElement.classList.add('error'));
                }
              }),
                s.addEventListener('click', function (e) {
                  e.stopPropagation();
                }),
                (s.dataset.originalvalue = a),
                (s.dataset.rownum = e),
                (s.dataset.col = t),
                s.addEventListener('keydown', function (o) {
                  if (void 0 !== e)
                    switch (o.which) {
                      case 27:
                        (h = void 0), I();
                        break;
                      case 38:
                        [...l.parentElement.parentElement.children].indexOf(
                          l.parentElement
                        ) > 0 && (N(o), U(e - 1, t));
                        break;
                      case 40:
                        null !== l.parentElement.nextSibling &&
                          (N(o), U(e + 1, t));
                        break;
                      case 37:
                        o.shiftKey &&
                          (N(o),
                          (function (e, t) {
                            const o = e,
                              n = t;
                            for (; void 0 !== i[e - 1]; ) {
                              --t < 1 && ((t = r.columns.length + 1), e--);
                              const o = r.columns[t - 1];
                              if (
                                void 0 !== o &&
                                (!1 !== o.editable ||
                                  ('function' == typeof o.editable &&
                                    !1 !== o.editable(i[e - 1], t))) &&
                                'checkbox' !== o.type
                              )
                                return U(e, t);
                            }
                            U(o, n);
                          })(e, t));
                        break;
                      case 13:
                      case 9:
                        N(o), W(e, t);
                        break;
                      case 39:
                        o.shiftKey && null !== l.nextSibling && (N(o), W(e, t));
                    }
                }),
                (h = s),
                (r.inputClass || '')
                  .split(' ')
                  .filter((e) => '' !== e)
                  .forEach((e) => h.classList.add(e)),
                r.onInitInput(i[e - 1], o.name || t, l);
            },
            V = function (e, t, r = 'text/plain') {
              if ('object' == typeof e) return void e.save(t);
              const o = window.URL.createObjectURL(new Blob([e], { type: r })),
                n = document.createElement('a');
              (n.style.display = 'none'),
                (n.href = o),
                (n.download = void 0 === t ? 'export.txt' : t),
                document.body.appendChild(n),
                n.click(),
                window.URL.revokeObjectURL(o);
            },
            Z = function (e) {
              let t = '';
              if (
                ('txt' === e &&
                  i.forEach((e) => {
                    (t += '\n'),
                      Object.keys(e).forEach((r) => {
                        t += e[r] + '\t';
                      });
                  }),
                'csv' === e &&
                  ((t += 'sep=,\n'),
                  i.forEach((e) => {
                    Object.keys(e).forEach((r) => {
                      t += '"' + ('' + e[r]).replace('"', '\\"') + '",';
                    }),
                      (t += '\n');
                  })),
                ('html' !== e && 'xls' !== e) ||
                  (t +=
                    '<table><tbody>' +
                    i
                      .map(
                        (e) =>
                          '<tr>' +
                          Object.keys(e)
                            .map((t) => '<td>' + (e[t] || '') + '</td>')
                            .join('') +
                          '</tr>'
                      )
                      .join('') +
                    '</tbody></table>'),
                'xls' === e)
              ) {
                const e = { title: 'Export', table: t };
                return '\n      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">\n      <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"/>\n      <head>\x3c!--[if gte mso 9]><xml>\n      <x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{title}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml>\n      <![endif]--\x3e</head>\n      <body>{table}</body></html>'.replace(
                  /{(\w+)}/g,
                  (t, r) => e[r]
                );
              }
              if ('pdf' === e) {
                const e = new (0, window.jsPDF)('p', 'cm', 'A4'),
                  t = 19,
                  o = 1.35;
                e.setLineWidth(0.025);
                let n = 1,
                  a = o,
                  l = 0,
                  s = 1;
                e.setFontSize(18),
                  e.text(
                    void 0 === r.reportTitle
                      ? (
                          document.querySelector('h1') ||
                          document.querySelector('TITLE')
                        ).innerText
                      : r.reportTitle,
                    n,
                    a,
                    {}
                  ),
                  (a += 1);
                const c = q.querySelector(':scope .graphplaceholder canvas');
                if (c.clientHeight > 0) {
                  const t = c.toDataURL('image/png', 1),
                    r = (c.clientHeight / c.clientWidth) * 19;
                  e.addImage(t, 'PNG', 1, a + 0.5, 19, r), (a += r + 2);
                }
                e.setFontSize(9);
                const p = [];
                let u = 0;
                d.querySelectorAll(':scope thead tr:nth-child(1) th').forEach(
                  (e) => {
                    (u += e.clientWidth), p.push(e.clientWidth);
                  }
                );
                const h = function () {
                  (n = 1),
                    (l = 0),
                    e.setFontType('bold'),
                    d
                      .querySelectorAll(':scope thead tr:nth-child(1) th')
                      .forEach((r) => {
                        p[l] &&
                          e.text(r.innerText, n, a, {
                            maxWidth: (p[l] / u) * t - 0.1,
                          }),
                          (n += (p[l++] / u) * t);
                      }),
                    e.line(1, a + 0.2, t + 1, a + 0.2),
                    (a += 0.5),
                    e.setFontType('normal');
                };
                h();
                let f,
                  m,
                  g = null,
                  v = [];
                return (
                  i.forEach((i, c) => {
                    'function' == typeof r.groupOn &&
                      g !== (f = r.groupOn(i, c)) &&
                      (e.setFontType('bold'),
                      !0 === r.showGroupFooter &&
                        null !== g &&
                        (e.line(1, a - 0.4, t + 1, a - 0.4),
                        (n = 1),
                        (m = 0),
                        (l = 0),
                        r.columns.forEach((o, i) => {
                          const s =
                            '' +
                            ('function' == typeof o.groupFooter
                              ? o.groupFooter(
                                  v,
                                  o.name || i,
                                  null,
                                  r.decimals,
                                  o.value
                                )
                              : void 0 === o.groupFooter
                              ? ''
                              : o.groupFooter);
                          e.text(s, n, a, { maxWidth: (p[l] / u) * t - 0.1 }),
                            (m = Math.max(
                              m,
                              e.splitTextToSize(s || '', (p[l] / u) * t - 0.1)
                                .length
                            )),
                            (n += (p[l++] / u) * t);
                        }),
                        e.line(1, a + 0.2, t + 1, a + 0.2),
                        (n = 1),
                        (a += 0.3 * (1 + Math.floor(m + 0.9999)))),
                      r.showGroupHeader &&
                        (e.text(f, 1, a, { maxWidth: t - 0.1 }), (a += 0.5)),
                      (n = 1),
                      e.setFontType('normal'),
                      (g = f),
                      (v = [])),
                      (l = 0),
                      (n = 1),
                      r.showGroupRows &&
                        ((m = 0),
                        r.columns.forEach((r, o) => {
                          const s = k(i, o);
                          void 0 !== s &&
                            p[l] &&
                            (e.text('' + (s || ''), n, a, {
                              maxWidth: (p[l] / u) * t - 0.1,
                            }),
                            (m = Math.max(
                              m,
                              e.splitTextToSize(s || '', (p[l] / u) * t - 0.1)
                                .length
                            ))),
                            (n += (p[l++] / u) * t);
                        }),
                        (n = 1),
                        (a += 0.3 * (1 + Math.floor(m + 0.9999))),
                        e.line(1, a - 0.35, t + 1, a - 0.35)),
                      a > 28 &&
                        (e.text('' + s++, 10, 29),
                        e.addPage(),
                        (a = o),
                        e.setLineWidth(0.025),
                        h()),
                      void 0 !== r.groupOn &&
                        !0 === r.showGroupFooter &&
                        v.push(i);
                  }),
                  e.text('' + s++, 10, 29),
                  e.setFontType('bold'),
                  !0 === r.showGroupFooter &&
                    null !== g &&
                    (e.line(1, a - 0.4, t + 1, a - 0.4),
                    (n = 1),
                    (l = 0),
                    (m = 0),
                    r.columns.forEach((o, i) => {
                      const s =
                        '' +
                        ('function' == typeof o.groupFooter
                          ? o.groupFooter(
                              v,
                              o.name || i,
                              null,
                              r.decimals,
                              o.value
                            )
                          : void 0 === o.groupFooter
                          ? ''
                          : o.groupFooter);
                      e.text(s, n, a, { maxWidth: (p[l] / u) * t - 0.1 }),
                        (m = Math.max(
                          m,
                          e.splitTextToSize(s || '', (p[l] / u) * t - 0.1)
                            .length
                        )),
                        (n += (p[l++] / u) * t);
                    }),
                    (a += 0.3 * (1 + Math.floor(m + 0.9999))),
                    e.line(1, a - 0.4, t + 1, a - 0.4)),
                  e
                );
              }
              return t;
            },
            X = [
              '#1D741B',
              '#FE840E',
              '#1E3D58',
              '#DD4132',
              '#9E1030',
              '#FF6F61',
              '#C62168',
              '#8D9440',
              '#FFD662',
              '#00539C',
              '#755139',
              '#D69C2F',
              '#616247',
              '#E8B5CE',
              '#D2C29D',
              '#343148',
              '#F0EAD6',
              '#615550',
              '#9B1B30',
              '#77212E',
              '#F5D6C6',
              '#FA9A85',
              '#5A3E36',
              '#CE5B78',
              '#935529',
              '#E08119',
              '#2A4B7C',
              '#577284',
              '#F96714',
              '#264E36',
              '#F3E0BE',
              '#2A293E',
              '#9F9C99',
              '#797B3A',
            ],
            J = function () {
              return R.length > 0 ? R : s;
            },
            K = function () {
              const t = q.querySelector(`:scope #${e}__select_graph_x`).value,
                o = q.querySelector(`:scope #${e}__select_graph_y`).value,
                n = q.querySelector(`:scope #${e}__select_graph_y2`).value,
                a = q.querySelector(`:scope #${e}__select_graph_type`).value;
              0 === a
                ? (Y(!1),
                  q
                    .querySelector(':scope .fathgrid-graph2-nav')
                    .classList.remove('active'))
                : (q
                    .querySelector(':scope .fathgrid-graph2-nav')
                    .classList.add('active'),
                  (r.graphType = ['none', 'line', 'bar', 'pie'][a]),
                  (r.graphValues = function (e) {
                    return {
                      title:
                        '' !== n
                          ? [r.columns[o].header, r.columns[n].header]
                          : r.columns[o].header,
                      labels: e.map((e) => e[r.columns[t].name]),
                      values:
                        '' !== n
                          ? [
                              e.map((e) => e[r.columns[o].name]),
                              e.map((e) => e[r.columns[n].name]),
                            ]
                          : e.map((e) => e[r.columns[o].name]),
                    };
                  }),
                  Y(!0));
            },
            Y = function (e) {
              if (
                (void 0 !== T &&
                  (T.destroy(),
                  (T = void 0),
                  (q.querySelector('.graphplaceholder').innerHTML = c)),
                'block' ===
                  q.querySelector(':scope .graphplaceholder').style.display &&
                  !e)
              )
                return void (q.querySelector(
                  ':scope .graphplaceholder'
                ).style.display = 'none');
              if (!e) return;
              const t = q.querySelector(':scope .graphplaceholder canvas');
              q.querySelector(':scope .graphplaceholder').style.display =
                'block';
              const o = r.graphValues(J());
              let n = 0;
              const a = {
                  type: r.graphType,
                  data: {
                    labels: o.labels,
                    datasets: Array.isArray(o.values[0])
                      ? o.values.map((e, t) => ({
                          label: o.title[t],
                          data: e,
                          borderWidth: 1,
                          fill: !1,
                          backgroundColor:
                            'pie' === r.graphType
                              ? e.map((e, t) => X[t % X.length])
                              : X[n],
                          borderColor:
                            'pie' === r.graphType
                              ? e.map((e, t) => X[t % X.length])
                              : X[n++],
                        }))
                      : [
                          {
                            label: o.title,
                            data: o.values,
                            borderWidth: 1,
                            backgroundColor:
                              'pie' === r.graphType
                                ? o.values.map((e, t) => X[t % X.length])
                                : X[n],
                            borderColor:
                              'pie' === r.graphType
                                ? o.values.map((e, t) => X[t % X.length])
                                : X[n++],
                          },
                        ],
                  },
                  options: {
                    scales: { yAxes: [{ ticks: { beginAtZero: !0 } }] },
                  },
                },
                l = window.Chart;
              T = new l(t, a);
            },
            Q = function () {
              const e = r.page,
                t = r.size;
              (r.page = 1),
                (r.size = s.length || i.length),
                j().then((o) => {
                  H(o, !1);
                  const n = window.open();
                  n.document.write(
                    `<!doctype html><html lang="en"><head>${document.head.innerHTML}<style>table .noprint {display:none}</style></head><body>`
                  ),
                    n.document.write(
                      `<h1>${
                        (
                          document.querySelector('h1') ||
                          document.querySelector('TITLE')
                        ).innerText
                      }</h1><div class="fathgrid-wrapper">`
                    ),
                    n.document.write(
                      (void 0 !== T
                        ? q.querySelector(':scope .graphplaceholder').innerHTML
                        : '') + d.parentElement.innerHTML
                    ),
                    n.document.write('</div></body></html>'),
                    n.document.close(),
                    n.setTimeout(() => {
                      void 0 !== T &&
                        n.document.querySelector('canvas') &&
                        n.document
                          .querySelector('canvas')
                          .getContext('2d')
                          .drawImage(q.querySelector('canvas'), 0, 0),
                        n.focus(),
                        n.print(),
                        n.close();
                    }, 1e3),
                    (r.page = e),
                    (r.size = t),
                    I();
                });
            };
          if ((I(), r.resizable)) {
            let e, t, o, n, a;
            if (
              (u.querySelectorAll(':scope tr:nth-child(1) th').forEach((r) => {
                r.style.position = 'relative';
                const l = document.createElement('div');
                function i(e) {
                  return 'border-box' ===
                    window
                      .getComputedStyle(e, null)
                      .getPropertyValue('box-sizing')
                    ? 0
                    : parseInt(
                        window
                          .getComputedStyle(e, null)
                          .getPropertyValue('padding-left')
                      ) +
                        parseInt(
                          window
                            .getComputedStyle(e, null)
                            .getPropertyValue('padding-right')
                        );
                }
                l.classList.add('fathgrid-col-divider'),
                  (l.style.height = u.offsetHeight + 'px'),
                  r.appendChild(l),
                  l.addEventListener('click', function (e) {
                    N(e);
                  }),
                  l.addEventListener('mousedown', (l) => {
                    (e = r),
                      (t = r.nextElementSibling),
                      (o = l.pageX),
                      (n = r.offsetWidth - i(r)),
                      null !== t && (a = t.offsetWidth - i(t));
                  });
              }),
              document.addEventListener('mouseup', (r) => {
                (e = void 0), (t = void 0);
              }),
              document.addEventListener('mousemove', (l) => {
                if (void 0 !== e) {
                  const i = l.pageX - o;
                  t && (t.style.width = a - i + 'px'),
                    (e.style.width = n + i + 'px');
                  const s = {};
                  u
                    .querySelectorAll(':scope tr:nth-child(1) th')
                    .forEach((e) => (s[e.cellIndex] = e.style.width)),
                    localStorage.setItem(
                      '__fathgrid_columns_' + r.id,
                      JSON.stringify(s)
                    );
                }
              }),
              r.restoreColumns)
            ) {
              let e = localStorage.getItem('__fathgrid_columns_' + r.id);
              if (null !== e)
                try {
                  (e = JSON.parse(e)),
                    u
                      .querySelectorAll(':scope tr:nth-child(1) th')
                      .forEach((t) => (t.style.width = e[t.cellIndex]));
                } catch (e) {}
            }
          }
          const ee = function (e) {
              (r._gr = []),
                r.columns.forEach((e, t) => {
                  const o = u.querySelector(
                    ":scope tr.grouping th[data-i='" + t + "'] select"
                  );
                  if (null !== o) {
                    const n = o.value;
                    (e.groupFooter = [
                      FathGrid.FIRST,
                      FathGrid.AVG,
                      FathGrid.COUNT,
                      FathGrid.FIRST,
                      FathGrid.LAST,
                      FathGrid.MIN,
                      FathGrid.MAX,
                      FathGrid.SUM,
                    ][n]),
                      0 === o.value && !1 !== e.visible && r._gr.push(t + 1);
                  } else e.groupFooter = void 0;
                }),
                (r.showGroupFooter = !0),
                (r.showGroupHeader = !1),
                (r.showGroupRows = !1),
                (r.groupOn =
                  0 === r._gr.length
                    ? void 0
                    : function (e, t) {
                        return r._gr.reduce(
                          (t, o) =>
                            t + (e[r.columns[o - 1].name] || o - 1) + '\n',
                          ''
                        );
                      }),
                (r.sort = r._gr),
                (r.sortBy = r._gr),
                P(),
                I();
            },
            te = function (e) {
              if (
                (null !== u.querySelector(':scope tr.grouping') &&
                  u.querySelector(':scope tr.grouping').remove(),
                e
                  ? q
                      .querySelector(':scope .fathgrid-grouping-nav')
                      .classList.add('active')
                  : q
                      .querySelector(':scope .fathgrid-grouping-nav')
                      .classList.remove('active'),
                !e)
              )
                return ee(), void (r.showGroupRows = !0);
              const t = document.createElement('TR');
              u.appendChild(t),
                t.classList.add('grouping'),
                r.columns.forEach((e, o) => {
                  const n = document.createElement('TH');
                  (n.dataset.i = o),
                    t.appendChild(n),
                    !1 === e.visible && (n.style.display = 'none'),
                    !1 === e.printable && n.classList.add('noprint'),
                    (e.class || '')
                      .split(' ')
                      .filter((e) => '' !== e)
                      .forEach((e) => n.classList.add(e)),
                    (n.innerHTML =
                      '<select class="' +
                      ((e.filterInputClass || '') + ' ' + r.inputClass)
                        .split(' ')
                        .filter((e) => '' !== e)
                        .join(' ') +
                      '">' +
                      [
                        r.lang.groupby,
                        r.lang.avg,
                        r.lang.count,
                        r.lang.first,
                        r.lang.last,
                        r.lang.min,
                        r.lang.max,
                        r.lang.sum,
                      ].map(
                        (e, t) => '<option value="' + t + `">${e}</option>`
                      ) +
                      '</select>'),
                    n
                      .querySelector(':scope select')
                      .addEventListener('change', function (e) {
                        ee();
                      });
                });
            },
            re = function () {
              const e = {};
              return (
                r.columns.forEach((t, r) => {
                  const o = u.querySelector(
                    ":scope tr.grouping th[data-i='" + r + "'] select"
                  );
                  null !== o && (e[r] = o.value);
                }),
                {
                  showGroupFooter: r.showGroupFooter,
                  showGroupHeader: r.showGroupHeader,
                  showGroupRows: r.showGroupRows,
                  ...e,
                }
              );
            };
          return {
            id: e,
            setConfig: function (e) {
              (r = { ...r, ...e }), I();
            },
            render: I,
            nextPage: g,
            prevPage: v,
            lastPage: y,
            firstPage: b,
            sort: D,
            setPageSize: function (e) {
              (r.size = parseInt(e)), (r.page = 1), I();
            },
            getPageSize: function () {
              return r.size;
            },
            getSort: function () {
              return r.sort;
            },
            setSort: function (e) {
              'number' == typeof e && (e = [e]),
                (r.sort = []),
                e.map((e) => D(Math.abs(e), e < 0, !0)),
                I();
            },
            filter: function (e, t) {
              (u
                .querySelector(
                  ':scope tr.filter th:nth-child(' +
                    (e + (r.multiselect ? 1 : 0)) +
                    ')'
                )
                .querySelector(':scope input, select').value = t),
                I();
            },
            getFilter: O,
            editCell: U,
            getData: function () {
              return i.map((e) => e);
            },
            setData: function (e) {
              (i = []),
                (e || []).map((e, t) => {
                  (e.rownum = t + 1), i.push(e);
                }),
                I();
            },
            setCell: function (e, t, r) {
              L(e - 1, t - 1, r);
            },
            getCell: function (e, t) {
              return i[e - 1][r.columns[t - 1].name || t - 1];
            },
            getExportData: Z,
            exportData: function (e = 'txt', t = 'export') {
              V(
                Z(e),
                t + '.' + e,
                'xls' === e ? 'application/vnd.ms-excel;base64,' : 'text/plain'
              );
            },
            search: function (e) {
              if (void 0 === e) return r.q;
              (r.q = e), I();
            },
            getSelectedItem: function () {
              return n.length ? n[0] : null;
            },
            getSelectedItems: w,
            setServerURL: function (e) {
              (r.serverURL = e), I();
            },
            wrapperEl: q,
            showSubgrid: function (e, t = '') {
              const o = p.querySelectorAll(':scope tr.subgrid'),
                n = p.querySelector(':scope > tr.selected');
              n.insertAdjacentHTML(
                'afterend',
                `<tr class="subgrid"><td colspan="${
                  r.columns.length + (r.multiselect ? 1 : 0)
                }" >${t}</td></tr>`
              ),
                n.nextSibling
                  .querySelector(':scope td')
                  .appendChild(e.wrapperEl),
                o.forEach((e) => e.parentElement.removeChild(e));
            },
            selectRow: x,
            insertRow: function (e, t, r) {
              null === e && (e = i.length + 1),
                i.splice(e - 1, 0, t),
                i.map((e, t) => ((e.rownum = t + 1), e)),
                I(r);
            },
            deleteRow: function (e, t) {
              i.splice(e - 1, 1),
                i.map((e, t) => ((e.rownum = t + 1), e)),
                I(t);
            },
            refresh: H,
            saveConfig: function () {
              return JSON.stringify({
                grouping: re(),
                size: r.size,
                sort: r.sort,
                visible: r.columns.map(
                  (e, t) => void 0 === e.visible || e.visible
                ),
                columnWidths: [
                  ...u.querySelectorAll(':scope tr:nth-child(1) th'),
                ].map((e) => e.clientWidth),
                graphValues: [
                  q.querySelector(`:scope #${e}__select_graph_x`).value,
                  q.querySelector(`:scope #${e}__select_graph_y`).value,
                  q.querySelector(`:scope #${e}__select_graph_y2`).value,
                  q.querySelector(`:scope #${e}__select_graph_type`).value,
                ],
              });
            },
            loadConfig: function (t) {
              const o = 'string' == typeof t ? JSON.parse(t) : t;
              var n;
              (r.size = o.size),
              (r.sort = o.sort),
              void 0 !== (n = o.grouping)[0]
                ? (te(!0),
                  r.columns.forEach((e, t) => {
                    const r = u.querySelector(":scope tr.grouping th[data-i='" + t + "'] select");
                    null !== r && (r.value = n[t]);
                  }),
                  (r.showGroupFooter = n.showGroupFooter),
                  (r.showGroupHeader = n.showGroupHeader),
                  (r.showGroupRows = n.showGroupRows),
                  ee())
                : te(!1),
              r.columns.map((e, t) => E(t, o.visible[t], !1)),
              void 0 !== o.columnWidths &&
                u
                  .querySelectorAll(':scope tr:nth-child(1) th')
                  .forEach((e, t) => (e.style.width = o.columnWidths[t] + 'px')),
              void 0 !== o.graphValues &&
                ((q.querySelector(`:scope #${e}__select_graph_x`).value = o.graphValues[0]),
                (q.querySelector(`:scope #${e}__select_graph_y`).value = o.graphValues[1]),
                (q.querySelector(`:scope #${e}__select_graph_y2`).value = o.graphValues[2]),
                (q.querySelector(`:scope #${e}__select_graph_type`).value = o.graphValues[3]),
                K()),
              _();
            },
            destroy: function (e) {
              void 0 === e
                ? q.parentNode.removeChild(q)
                : q.parentNode.replaceChild(e, q);
            },
          };
        }

        (FathGrid.SUM = function (e, t, r, o = 2) {
          return e
            .map((e) =>
              'number' != typeof e[t] ? parseFloat(e[t].replace('$', '')) : e[t]
            )
            .reduce((e, t) => e + t, 0)
            .toFixed(o);
        }),
        (FathGrid.AVG = function (e, t, r, o = 2) {
          return e.length
            ? (
                e
                  .map((e) =>
                    'number' != typeof e[t]
                      ? parseFloat(e[t].replace('$', ''))
                      : e[t]
                  )
                  .reduce((e, t) => e + t, 0) / e.length
              ).toFixed(o)
            : null;
        }),
        (FathGrid.COUNT = function (e, t, r, o = 2) {
          const n = [];
          return e.length
            ? e.filter((e) => !n.includes(e[t]) && (n.push(e[t]), !0)).length
            : null;
        }),
        (FathGrid.FIRST = function (e, t, r, o = 2, n) {
          return e.length
            ? void 0 !== n
              ? n(e.find((e) => !0))
              : e.find((e) => !0)[t]
            : null;
        }),
        (FathGrid.LAST = function (e, t, r, o = 2, n) {
          return e.length
            ? void 0 !== n
              ? n(e.slice(-1).find((e) => !0))
              : e.slice(-1).find((e) => !0)[t]
            : null;
        }),
        (FathGrid.MIN = function (e, t, r, o = 2, n) {
          let a = e[0][t];
          return 'number' == typeof a
            ? Math.min(...e.map((e) => e[t])).toFixed(o)
            : (e.map((e) => (a = a < e[t] ? a : e[t])), a);
        }),
        (FathGrid.MAX = function (e, t, r, o = 2, n) {
          let a = e[0][t];
          return 'number' == typeof a
            ? Math.max(...e.map((e) => e[t])).toFixed(o)
            : (e.map((e) => (a = a > e[t] ? a : e[t])), a);
        }),
        (FathGrid.EXPR = function (item, col) {
          const x = (col.expr || '').replace(
            new RegExp('(' + Object.keys(item || {}).join('|') + ')', 'g'),
            (e, t) =>
              'number' == typeof (item[t] || e)
                ? '(' + (item[t] || e) + ')'
                : "('" + (item[t] || e) + "')"
          );
          try {
            return eval(x);
          } catch (e) {
            console.error('expr', x, e);
          }
        }),
        (FathGrid.Form = _fathform_js__WEBPACK_IMPORTED_MODULE_1__.Z);
      })(),
      (__webpack_exports__ = __webpack_exports__.default),
      __webpack_exports__
    );
  })();
});
