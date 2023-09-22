(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 6632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8159)), "D:\\APP-TESTING\\landing-page\\motivational-speaker\\src\\app\\page.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7060)), "D:\\APP-TESTING\\landing-page\\motivational-speaker\\src\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["D:\\APP-TESTING\\landing-page\\motivational-speaker\\src\\app\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 347:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 7909:
/***/ (() => {



/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 7060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(4490);
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
;// CONCATENATED MODULE: ./src/app/components/Navbar.tsx

const Navbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "h-20 fixed flex items-center justify-between px-10 bg-white w-screen z-[999]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "text-blue-500 font-bold text-lg",
                    children: [
                        "Motiv",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: "Speak"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "lg:flex gap-5 font-semibold hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "",
                        className: "",
                        children: "Home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "",
                        className: "text-gray-500",
                        children: "Tentang"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "",
                        className: "text-gray-500",
                        children: "E-book"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "",
                        className: "text-gray-500",
                        children: "Workshop"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "",
                        className: "text-gray-500",
                        children: "Join Telegram"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "",
                        className: "text-gray-500",
                        children: "Contact"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "lg:hidden block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: "Motivational Speaker | Sample Website",
    description: "dinov template sample 1"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "bg-white",
                    children: children
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                    className: "bg-gradient-to-r from-blue-500 to-blue-200 text-white",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 p-10 gap-5",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "bg-white p-2 w-fit h-fit rounded-md",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "text-blue-500 font-bold text-lg",
                                                    children: [
                                                        "Motiv",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-black",
                                                            children: "Speak"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Business Owner, Best Selling Author, Winner of 30 Affiliate Contests, Founder Trillionaire Enterprises, DeEP Foundation, dan Muhsinin Club"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "font-bold text-lg py-2 ",
                                            children: "Kategori"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: "ECourse"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: "EBook"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "font-bold text-lg py-2 ",
                                            children: "Get In Touch"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: "FAQ"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex gap-5 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "bg-white rounded-full",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                        fill: "currentColor",
                                                        viewBox: "0 0 256 256",
                                                        id: "Flat",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-10 h-10 text-blue-500",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                id: "SVGRepo_bgCarrier",
                                                                strokeWidth: 0
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                id: "SVGRepo_tracerCarrier",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                                id: "SVGRepo_iconCarrier",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z"
                                                                    }),
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "bg-white rounded-full",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                        fill: "currentColor",
                                                        viewBox: "0 0 256 256",
                                                        id: "Flat",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-10 h-10 text-blue-500",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                id: "SVGRepo_bgCarrier",
                                                                strokeWidth: 0
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                id: "SVGRepo_tracerCarrier",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                                id: "SVGRepo_iconCarrier",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z"
                                                                    }),
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "bg-white rounded-full",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                        fill: "currentColor",
                                                        viewBox: "0 0 256 256",
                                                        id: "Flat",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-10 h-10 text-blue-500",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                id: "SVGRepo_bgCarrier",
                                                                strokeWidth: 0
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                id: "SVGRepo_tracerCarrier",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                                id: "SVGRepo_iconCarrier",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z"
                                                                    }),
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Copyright 2023"
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 8159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Home() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "min-h-screen flex justify-center items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col lg:flex-row lg:h-[500px] mb-5 relative",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "lg:w-1/2 lg:h-[500px] h-[420px] flex flex-col justify-center text-center lg:text-left lg:pl-10",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-10",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "font-bold lg:text-2xl text-xl",
                                                    children: "DISCOVER YOUR PASSION"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "lg:text-6xl text-4xl font-bold",
                                                    children: "BE UNSTOPPABLE"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex lg:justify-start justify-center gap-5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "bg-blue-500 text-white px-5 py-3 font-semibold rounded-md",
                                                    children: "Get in Touch"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "bg-blue-50 text-blue-500 px-5 py-3 font-semibold rounded-md",
                                                    children: "Start your journey"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:w-1/2 -mt-20 lg:mt-0 flex justify-center items-center h-full overflow-hidden",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative h-96 w-[600px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-72 h-48 absolute left-72 bg-gradient-to-b from-white to-gray-300 rounded-md top-5"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-96 h-56 absolute  bg-gradient-to-b from-white to-gray-300 right-20 rounded-md top-36"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-32 h-48 absolute  bg-gradient-to-b from-white to-gray-300 rounded-md left-28 bottom-10"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_42/2840621/190430-mark-zuckerberg-f8-ew-153p.jpg",
                                                alt: "",
                                                className: "lg:w-72 w-56 lg:h-44 absolute object-cover rounded-lg left-2 top-5"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://images.inc.com/uploaded_files/image/1920x1080/getty_962130392_2000133320009280233_380105.jpg",
                                                alt: "",
                                                className: "lg:w-96 w-72 lg:h-56 absolute object-cover rounded-lg lg:-right-5 -right-10 lg:top-36 top-44"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://s.yimg.com/uu/api/res/1.2/YPIgv49UHsWIwdr8k9fLBA--~B/aD02MzY7dz05NjA7YXBwaWQ9eXRhY2h5b24-/http://globalfinance.zenfs.com/en_us/Finance/US_AFTP_SILICONALLEY_H_LIVE/Mark_Zuckerberg_wrote_a_nearly-f86e8405fc72d47b670d6772b1f5d5c5",
                                                alt: "",
                                                className: "lg:w-40 w-32 h-52 lg:h-60 absolute object-cover object-center rounded-lg lg:left-10 left-2 shadow-lg bottom-1"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5 ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-center items-center",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "lg:w-96 w-10/12 flex gap-5 shadow-md rounded-md p-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-16 h-16 bg-orange-100 rounded-md flex justify-center items-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 1.5,
                                                    stroke: "currentColor",
                                                    className: "w-12 h-12 text-orange-500",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-3xl font-bold",
                                                                children: "999"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-xl font-bold",
                                                                children: "+"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-semibold text-sm",
                                                        children: "SATISFIED CLIENTS"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-center items-center",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "lg:w-96 w-10/12 flex gap-5 shadow-md rounded-md p-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-16 h-16 bg-blue-100 rounded-md flex justify-center items-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 1.5,
                                                    stroke: "currentColor",
                                                    className: "w-12 h-12 text-blue-500",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-3xl font-bold",
                                                                children: "150"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-xl font-bold",
                                                                children: "+"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-semibold text-sm",
                                                        children: "AWARDS"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-center items-center",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "lg:w-96 w-10/12 flex gap-5 shadow-md rounded-md p-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-16 h-16 bg-green-100 rounded-md flex justify-center items-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 1.5,
                                                    stroke: "currentColor",
                                                    className: "w-12 h-12 text-green-500",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-3xl font-bold",
                                                                children: "27"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-xl font-bold",
                                                                children: "+"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-semibold text-sm",
                                                        children: "YEARS EXPERIENCE"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "flex flex-col lg:flex-row justify-center items-center py-5 mb-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "lg:w-4/12  flex justify-center items-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-64 h-96 absolute bg-gradient-to-b from-white to-gray-100 left-0 rounded-md scale-125 hidden lg:block"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "https://asset.kompas.com/crops/GQUver5Id7jVYzbXgJveT7OJ0qg=/65x0:650x390/1200x800/data/photo/2015/10/27/1658302Mark-Jadi780x390.jpg",
                                alt: "",
                                className: "w-64 h-96 object-cover rounded-lg shadow-md relative"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lg:w-8/12  flex flex-col justify-center items-center lg:p-10 p-2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-5 shadow-md rounded-md",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-3xl font-bold mb-2 lg:text-left text-center",
                                    children: "I AM MARK ZUCKERBERG"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-md lg:text-left text-center font-bold mb-2",
                                    children: "ENTREPRENEUR, BEST-SELLING AUTHOR & MOTIVATIONAL SPEAKER"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-5 text-justify",
                                    children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam cupiditate quasi repudiandae exercitationem iusto, dolorem, sequi enim, harum beatae sit excepturi? Officiis mollitia iste perferendis saepe? Blanditiis esse consectetur soluta cupiditate ducimus enim tempora, maiores earum facilis iste fugiat nostrum! Eligendi aliquid eveniet temporibus, ducimus ex perspiciatis consequuntur dignissimos et."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "bg-blue-500 text-white px-5 py-3 font-semibold rounded-md",
                                    children: "Read More"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "px-10 flex lg:flex-row flex-col py-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lg:w-1/2 w-full flex items-center justify-center mb-5 lg:mb-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "lg:text-7xl text-5xl font-bold lg:text-left text-center text-blue-500",
                                    children: "SUBSCRIBE"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "lg:text-3xl lg:text-left text-center text-xl font-bold",
                                    children: "FOR DAILY MOTION"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "lg:text-xl lg:text-left text-center font-bold lg:mb-10 mb-5",
                                    children: "GET LATEST INFORMATION"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-center lg:justify-start",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                className: " bg-blue-100 h-12 rounded-l-md px-2 w-44",
                                                placeholder: "example@gmail.com"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "bg-blue-500 text-white lg:px-5 px-2 py-3 font-semibold rounded-r-md",
                                                children: "Subscribe"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lg:w-1/2 w-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://images.ctfassets.net/6nwv0fapso8r/6fHhKK91M3A1gWzMOnT2SC/938c43456c52909ac7200740b3c0417d/front-EN.png",
                            alt: ""
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "lg:px-20 px-5 mb-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 gap-10",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " w-full bg-white shadow-md rounded-md p-5 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "https://cdn.britannica.com/54/187354-050-BE0530AF/Facebook-Founder-CEO-Mark-Zuckerberg-email-messaging-system-St-Regis.jpg",
                                alt: "",
                                className: "w-full h-[400px] object-cover rounded-md shadow-md mb-5"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-2xl font-bold mb-5 text-center",
                                children: "UPCOMING EVENT"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-5 lg:text-center text-justify",
                                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tenetur modi, aliquam soluta voluptate qui voluptatum natus adipisci, eos tempora ut sunt quasi? Voluptates debitis iure reprehenderit sint totam voluptatibus similique commodi vitae. Ea, quibusdam perspiciatis? Voluptatum aut molestias dolorem, sed assumenda fuga enim aliquam sint placeat asperiores autem doloribus eos porro eum praesentium ipsam libero possimus, ducimus amet saepe dolorum. Fugiat, reiciendis aliquam. Et porro vel iste ut voluptates quis corporis. Eum dolores aliquid, eius sapiente doloribus nesciunt dolorum totam molestiae iure possimus, voluptatum magni dolore officia excepturi temporibus, nam iusto repudiandae itaque similique ducimus. At, error perspiciatis."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-5 flex-wrap justify-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "bg-blue-500 text-white px-5 py-3 font-semibold rounded-md",
                                        children: "Read More"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "bg-blue-500 text-white px-5 py-3 font-semibold rounded-md",
                                        children: "Join Event"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "bg-blue-500 text-white px-5 py-3 font-semibold rounded-md",
                                        children: "Share this Event"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,969], () => (__webpack_exec__(6632)));
module.exports = __webpack_exports__;

})();