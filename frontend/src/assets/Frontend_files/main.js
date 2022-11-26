"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/cart-page/cart-page.component */ 8747);
/* harmony import */ var _components_pages_food_page_food_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/food-page/food-page.component */ 3689);
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/home/home.component */ 2670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: '', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent },
    { path: 'search/:searchTerm', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent },
    { path: 'tag/:tag', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent },
    { path: 'food/:id', component: _components_pages_food_page_food_page_component__WEBPACK_IMPORTED_MODULE_1__.FoodPageComponent },
    { path: 'cart-page', component: _components_pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_0__.CartPageComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_partials_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/partials/header/header.component */ 9331);



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_partials_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_partials_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/partials/header/header.component */ 9331);
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/home/home.component */ 2670);
/* harmony import */ var _components_partials_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/partials/search/search.component */ 562);
/* harmony import */ var _components_partials_tags_tags_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/partials/tags/tags.component */ 7571);
/* harmony import */ var _components_pages_food_page_food_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/food-page/food-page.component */ 3689);
/* harmony import */ var _components_pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/cart-page/cart-page.component */ 8747);
/* harmony import */ var _components_partials_title_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/partials/title/title.component */ 4688);
/* harmony import */ var _components_partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/partials/not-found/not-found.component */ 862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_partials_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _components_partials_search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent,
        _components_partials_tags_tags_component__WEBPACK_IMPORTED_MODULE_5__.TagsComponent,
        _components_pages_food_page_food_page_component__WEBPACK_IMPORTED_MODULE_6__.FoodPageComponent,
        _components_pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_7__.CartPageComponent,
        _components_partials_title_title_component__WEBPACK_IMPORTED_MODULE_8__.TitleComponent,
        _components_partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__.NotFoundComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 8747:
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/cart-page/cart-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageComponent": () => (/* binding */ CartPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _partials_title_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/title/title.component */ 4688);
/* harmony import */ var _partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/not-found/not-found.component */ 862);






function CartPageComponent_div_2_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "select", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CartPageComponent_div_2_li_2_Template_select_change_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const cartItem_r2 = restoredCtx.$implicit; const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.changeQuantity(cartItem_r2, _r3.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div")(23, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartPageComponent_div_2_li_2_Template_button_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const cartItem_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.removeFromCart(cartItem_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const cartItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", cartItem_r2.food.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", cartItem_r2.food.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/food/", cartItem_r2.food.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cartItem_r2.food.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", cartItem_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 6, cartItem_r2.price), " ");
} }
function CartPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CartPageComponent_div_2_li_2_Template, 25, 8, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 5)(4, "div")(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Proceed to Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.cart.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.cart.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 3, ctx_r0.cart.totalPrice));
} }
class CartPageComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartService.getCartObservable().subscribe((cart) => {
            this.cart = cart;
        });
    }
    ngOnInit() {
    }
    removeFromCart(cartItem) {
        this.cartService.removeFromCart(cartItem.food.id);
    }
    changeQuantity(cartItem, quantityInString) {
        const quantity = parseInt(quantityInString);
        this.cartService.changeQuantity(cartItem.food.id, quantity);
    }
}
CartPageComponent.ɵfac = function CartPageComponent_Factory(t) { return new (t || CartPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
CartPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CartPageComponent, selectors: [["app-cart-page"]], decls: 3, vars: 2, consts: [["title", "Cart Page", "margin", "1.5rem 0 0 2.5rem"], ["notFoundMessage", "Cart Is Empty", 3, "visible"], ["class", "container", 4, "ngIf"], [1, "container"], [4, "ngFor", "ngForOf"], [1, "checkout"], [1, "foods-count"], [1, "total-price"], ["routerLink", "/checkout"], [3, "src", "alt"], [3, "routerLink"], [3, "value", "change"], ["quantitySelect", ""], [1, "remove-button", 3, "click"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-title", 0)(1, "app-not-found", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CartPageComponent_div_2_Template, 12, 5, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", !ctx.cart || !ctx.cart.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cart && ctx.cart.items.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _partials_title_title_component__WEBPACK_IMPORTED_MODULE_1__.TitleComponent, _partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe], styles: [".container[_ngcontent-%COMP%]{\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  margin: 1.5rem;\n  margin-top: 0.5rem;\n}\n\nul[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  flex:3 0;\n  justify-content: space-evenly;\n  border: 1px solid #ffbbbb;\n  border-radius: 1rem;\n  list-style: none;\n  margin: 0.5rem;\n  padding: 0;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #e4e4e4;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{\n  border: none;\n}\n\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 5rem;\n  height: 5rem;\n  border-radius: 100rem;\n  object-fit: cover;\n}\n\nli[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n  padding: 1rem;\n}\n\nli[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(:first-child){\n  flex-basis: 18%;\n}\n\nli[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\n  width: 3rem;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid lightgrey;\n  font-size: 1.1rem;\n  font-weight: 100;\n}\n\nli[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]{\n  border-radius: 1rem;\n  border: none;\n  padding: 0.5rem;\n  color: #e72929;\n  opacity: 0.7;\n  outline: none;\n}\n\nli[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover{\n  opacity: 1;\n  cursor: pointer;\n}\n\n.checkout[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  flex:1 3;\n  height: 20rem;\n  border: 1px solid #ffbbbb;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  margin: 0.5rem;\n}\n\n.checkout[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n  font-size: 1.4rem;\n  margin: 1rem;\n  flex: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.foods-count[_ngcontent-%COMP%]{\n  margin-bottom: 1.5rem;\n}\n\n.foods-count[_ngcontent-%COMP%]::before{\n  content:\"Count: \";\n  color: grey;\n}\n\n.total-price[_ngcontent-%COMP%]::before{\n  content: 'Price: ';\n  color: grey;\n}\n\n.checkout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  padding: 1rem;\n  color: white;\n  background:#e72929;\n  display: block;\n  width: 99%;\n  border-radius: 1rem;\n  text-align: center;\n  opacity: 0.7;\n  justify-self: center;\n}\n\n.checkout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n  opacity: 1;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCIiwiZmlsZSI6ImNhcnQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxudWx7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6MyAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmYmJiYjtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIHBhZGRpbmc6IDA7XG59XG5cbnVsIGxpe1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcbn1cblxudWwgbGk6bGFzdC1jaGlsZHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5saSBpbWd7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmxpIGRpdntcbiAgcGFkZGluZzogMXJlbTtcbn1cblxubGkgZGl2Om5vdCg6Zmlyc3QtY2hpbGQpe1xuICBmbGV4LWJhc2lzOiAxOCU7XG59XG5cbmxpIHNlbGVjdHtcbiAgd2lkdGg6IDNyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbmxpIC5yZW1vdmUtYnV0dG9ue1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY29sb3I6ICNlNzI5Mjk7XG4gIG9wYWNpdHk6IDAuNztcbiAgb3V0bGluZTogbm9uZTtcbn1cblxubGkgLnJlbW92ZS1idXR0b246aG92ZXJ7XG4gIG9wYWNpdHk6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoZWNrb3V0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXg6MSAzO1xuICBoZWlnaHQ6IDIwcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZiYmJiO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbjogMC41cmVtO1xufVxuXG4uY2hlY2tvdXQ+ZGl2e1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWFyZ2luOiAxcmVtO1xuICBmbGV4OiAzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5mb29kcy1jb3VudHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uZm9vZHMtY291bnQ6OmJlZm9yZXtcbiAgY29udGVudDpcIkNvdW50OiBcIjtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi50b3RhbC1wcmljZTo6YmVmb3Jle1xuICBjb250ZW50OiAnUHJpY2U6ICc7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uY2hlY2tvdXQgYXtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiNlNzI5Mjk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOTklO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNztcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5jaGVja291dCBhOmhvdmVye1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ 3689:
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/food-page/food-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodPageComponent": () => (/* binding */ FoodPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/food.service */ 9785);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/not-found/not-found.component */ 862);






function FoodPageComponent_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const origin_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", origin_r3, " ");
} }
function FoodPageComponent_div_1_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/tag/", tag_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", tag_r4, " ");
} }
function FoodPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 4)(3, "div", 5)(4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u2764");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, FoodPageComponent_div_1_span_9_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, FoodPageComponent_div_1_a_11_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Time to cook about ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " minutes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FoodPageComponent_div_1_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.addToCart()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.food.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r0.food.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.food.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("favorite ", ctx_r0.food.favorite ? "" : "not", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.food.origins);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.food.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.food.cookTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 10, ctx_r0.food.price), " ");
} }
class FoodPageComponent {
    constructor(activatedRoute, foodService, cartService, router) {
        this.cartService = cartService;
        this.router = router;
        activatedRoute.params.subscribe((params) => {
            if (params.id)
                this.food = foodService.getFoodById(params.id);
        });
    }
    ngOnInit() {
    }
    addToCart() {
        this.cartService.addToCart(this.food);
        this.router.navigateByUrl('/cart-page');
    }
}
FoodPageComponent.ɵfac = function FoodPageComponent_Factory(t) { return new (t || FoodPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__.FoodService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
FoodPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FoodPageComponent, selectors: [["app-food-page"]], decls: 2, vars: 2, consts: [["notFoundMessage", "Food not found or is no longer served", 3, "visible"], ["class", "container", 4, "ngIf"], [1, "container"], [3, "src", "alt"], [1, "details"], [1, "header"], [1, "name"], [1, "origins"], [4, "ngFor", "ngForOf"], [1, "tags"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "cook-time"], [1, "price"], [3, "click"], [3, "routerLink"]], template: function FoodPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-not-found", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FoodPageComponent_div_1_Template, 24, 12, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", !ctx.food);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.food);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe], styles: [".container[_ngcontent-%COMP%]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 3rem;\n}\n\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]{\n  min-width: 25rem;\n  max-width: 40rem;\n}\n\nimg[_ngcontent-%COMP%]{\n  border-radius: 3rem;\n  flex: 1 0;\n  object-fit: cover;\n  height: 35rem;\n  margin: 1rem;\n}\n\n.details[_ngcontent-%COMP%]{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex:1 0;\n  padding: 2rem;\n  color: black;\n  margin-left: 1rem;\n}\n\n.header[_ngcontent-%COMP%]{\n  display: flex;\n  justify-content: space-between;\n}\n\n.name[_ngcontent-%COMP%]{\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.favorite[_ngcontent-%COMP%]{\n  color: #e72929;\n  font-size: 2.5rem;\n}\n\n.favorite.not[_ngcontent-%COMP%]{\n  color: grey;\n}\n\n.origins[_ngcontent-%COMP%]{\n  display: flex;\n  flex-wrap: wrap;\n  margin: 1rem 0;\n}\n\n.origins[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  padding: 0.5rem;\n  font-size: 1.2rem;\n  margin: 0.5rem 0.5rem 0.5rem 0;\n  border-radius: 2rem;\n  background-color: aliceblue;\n}\n\n.tags[_ngcontent-%COMP%]{\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.tags[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  background-color: #f0f0f0;\n  padding: 0.3rem 1rem;\n  margin: 0.2rem 0.15rem;\n  border-radius: 10rem;\n  font-weight: 600;\n  color: blue;\n}\n\n.cook-time[_ngcontent-%COMP%]{\n  margin-top: 1rem;\n}\n\n.cook-time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  padding: 0.6rem 2rem 0.6rem 0;\n  border-radius: 10rem;\n  font-size: 1.3rem;\n}\n\n.price[_ngcontent-%COMP%]{\n  font-size: 1.8rem;\n  margin: 2rem 2rem 2rem 0;\n  color: green;\n}\n\n.price[_ngcontent-%COMP%]::before{\n  content: \"Price: \";\n  color: darkgrey;\n}\n\nbutton[_ngcontent-%COMP%]{\n  color: white;\n  background: #e72929;\n  border: none;\n  font-size: 1.2rem;\n  padding: 1rem;\n  border-radius: 10rem;\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n  opacity: 0.9;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJmb29kLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogM3JlbTtcbn1cblxuLmNvbnRhaW5lciA+ICp7XG4gIG1pbi13aWR0aDogMjVyZW07XG4gIG1heC13aWR0aDogNDByZW07XG59XG5cbmltZ3tcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgZmxleDogMSAwO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiAzNXJlbTtcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG4uZGV0YWlsc3tcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6MSAwO1xuICBwYWRkaW5nOiAycmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5uYW1le1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZmF2b3JpdGV7XG4gIGNvbG9yOiAjZTcyOTI5O1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLmZhdm9yaXRlLm5vdHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5vcmlnaW5ze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4ub3JpZ2lucyBzcGFue1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtYXJnaW46IDAuNXJlbSAwLjVyZW0gMC41cmVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuLnRhZ3N7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnRhZ3MgYXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XG4gIG1hcmdpbjogMC4ycmVtIDAuMTVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmNvb2stdGltZXtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmNvb2stdGltZSBzcGFue1xuICBwYWRkaW5nOiAwLjZyZW0gMnJlbSAwLjZyZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ucHJpY2V7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBtYXJnaW46IDJyZW0gMnJlbSAycmVtIDA7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnByaWNlOjpiZWZvcmV7XG4gIGNvbnRlbnQ6IFwiUHJpY2U6IFwiO1xuICBjb2xvcjogZGFya2dyZXk7XG59XG5cbmJ1dHRvbntcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZTcyOTI5O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uOmhvdmVye1xuICBvcGFjaXR5OiAwLjk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2670:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/food.service */ 9785);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _partials_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/search/search.component */ 562);
/* harmony import */ var _partials_tags_tags_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/tags/tags.component */ 7571);
/* harmony import */ var _partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../partials/not-found/not-found.component */ 862);







function HomeComponent_li_4_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const origin_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", origin_r3, " ");
} }
function HomeComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " \u2764 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, HomeComponent_li_4_span_11_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const food_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/food/", food_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", food_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", food_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", food_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("favorite ", food_r1.favorite ? "" : "not", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", food_r1.origins);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\uD83D\uDD5A ", food_r1.cookTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 10, food_r1.price), " ");
} }
class HomeComponent {
    constructor(foodService, activatedRoute) {
        this.foodService = foodService;
        this.foods = [];
        activatedRoute.params.subscribe((params) => {
            if (params.searchTerm)
                this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
            else if (params.tag)
                this.foods = this.foodService.getAllFoodsByTag(params.tag);
            else
                this.foods = foodService.getAll();
        });
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__.FoodService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 2, consts: [["resetLinkText", "Reset Search", 3, "visible"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [3, "src", "alt"], [1, "content"], [1, "name"], [1, "stars"], [1, "product-item-footer"], [1, "origins"], [1, "cook-time"], [1, "price"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-search")(1, "app-tags")(2, "app-not-found", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HomeComponent_li_4_Template, 19, 12, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", !ctx.foods || !ctx.foods.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.foods);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _partials_search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent, _partials_tags_tags_component__WEBPACK_IMPORTED_MODULE_2__.TagsComponent, _partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe], styles: ["ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  list-style-type: none;\n  padding: 0;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 22.5rem;\n  width: 20rem;\n  border: 1px solid whitesmoke;\n  border-radius: 1rem;\n  margin: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  color: #e72929;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  cursor: pointer;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  height: 14.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 0.3rem;\n  padding: 0.5rem 1rem;\n  position: relative;\n  height: 7rem;\n}\n\n.favorite[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 1rem;\n  font-weight: 1.2rem;\n}\n\n.favorite.not[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.product-item-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.origins[_ngcontent-%COMP%] {\n  flex: 9;\n}\n\n.origins[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 2rem;\n  background-color: whitesmoke;\n  display: inline-block;\n  color: gray;\n  margin-right: 0.3rem;\n  padding: 0 0.5rem;\n  margin-top: 0.2rem;\n}\n\n.cook-time[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  flex: 3;\n  text-align: right;\n}\n\n.price[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0.9rem;\n  background: white;\n  padding: 0.3rem 100% 0 0;\n  color: #414141;\n  margin-top: 0.7rem;\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG5saSBhIHtcbiAgaGVpZ2h0OiAyMi41cmVtO1xuICB3aWR0aDogMjByZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIG1hcmdpbjogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogI2U3MjkyOTtcbn1cblxubGkgYTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuOTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5saSBhIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDE0LjVyZW07XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDdyZW07XG59XG5cbi5mYXZvcml0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjVyZW07XG4gIHJpZ2h0OiAxcmVtO1xuICBmb250LXdlaWdodDogMS4ycmVtO1xufVxuXG4uZmF2b3JpdGUubm90IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5wcm9kdWN0LWl0ZW0tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLm9yaWdpbnMge1xuICBmbGV4OiA5O1xufVxuXG4ub3JpZ2lucyBzcGFuIHtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG59XG5cbi5jb29rLXRpbWUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZmxleDogMztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wcmljZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwLjlyZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjNyZW0gMTAwJSAwIDA7XG4gIGNvbG9yOiAjNDE0MTQxO1xuICBtYXJnaW4tdG9wOiAwLjdyZW07XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ 9331:
/*!****************************************************************!*\
  !*** ./src/app/components/partials/header/header.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




class HeaderComponent {
    constructor(cartService) {
        this.cartTotalPrice = 0;
        cartService.getCartObservable().subscribe((newCart) => {
            this.cartTotalPrice = newCart.totalPrice;
        });
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 25, vars: 3, consts: [[1, "container"], ["routerLink", "/", 1, "logo"], ["routerLink", "/login"], [1, "menu-container"], ["routerLink", "/dashboard"], [1, "menu"], ["routerLink", "/profile"], ["routerLink", "/orders"], ["routerLink", "/cart-page"], [1, "fa", "fa-shopping-cart"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u0411\u043E\u0436\u0435 \u0418\u043C\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nav")(5, "ul")(6, "li")(7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 3)(10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Ilko");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5)(13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li")(20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 1, ctx.cartTotalPrice));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe], styles: ["header[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  padding: 0;\n  border-bottom: 1px solid #e72929 ;\n}\n\na[_ngcontent-%COMP%] {\n  color: #af1313;\n}\n\na[_ngcontent-%COMP%]:hover {\n  background: #e92020;\n  color: white;\n  cursor: pointer;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n}\n\na.logo[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 1rem;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style-type: none;\n  margin: 0;\n}\n\nul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: inline-block;\n}\n\na[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ff4d4d;\n  color: white;\n  padding:  0.2rem 0.45rem;\n  border-radius: 100rem;\n  font-size: 0.9rem;\n\n}\n\n.menu-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  background: whitesmoke;\n  display: none;\n}\n\n.menu-container[_ngcontent-%COMP%]:hover   .menu[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]  {\n  width: 100%;\n  min-width: 8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNzI5MjkgO1xufVxuXG5hIHtcbiAgY29sb3I6ICNhZjEzMTM7XG59XG5cbmE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTkyMDIwO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmEubG9nbyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG51bCBhIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5hIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjZmY0ZDRkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6ICAwLjJyZW0gMC40NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcblxufVxuXG4ubWVudS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVudS1jb250YWluZXI6aG92ZXIgLm1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1lbnUgYSAge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiA4cmVtO1xufVxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ 862:
/*!**********************************************************************!*\
  !*** ./src/app/components/partials/not-found/not-found.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function NotFoundComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.notFoundMessage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.resetLinkRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.resetLinkText);
} }
class NotFoundComponent {
    constructor() {
        this.visible = false;
        this.notFoundMessage = "Nothing Found";
        this.resetLinkText = "Reset";
        this.resetLinkRoute = "/";
    }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], inputs: { visible: "visible", notFoundMessage: "notFoundMessage", resetLinkText: "resetLinkText", resetLinkRoute: "resetLinkRoute" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "routerLink"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NotFoundComponent_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-size: 1.5rem;\n  font-weight: 100;\n  height: 15rem;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  background-color: #e72929;\n  color: white;\n  border-radius: 10rem;\n  padding: 0.7rem 1rem;\n  margin: 1rem;\n  opacity: 0.8;\n\n}\n\na[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osWUFBWTs7QUFFZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogMTAwO1xuICBoZWlnaHQ6IDE1cmVtO1xufVxuXG5hIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzI5Mjk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xuICBtYXJnaW46IDFyZW07XG4gIG9wYWNpdHk6IDAuODtcblxufVxuXG5hOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ 562:
/*!****************************************************************!*\
  !*** ./src/app/components/partials/search/search.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class SearchComponent {
    constructor(activatedRoute, router) {
        this.router = router;
        this.searchTerm = '';
        activatedRoute.params.subscribe((params) => {
            if (params.searchTerm)
                this.searchTerm = params.searchTerm;
        });
    }
    ngOnInit() {
    }
    search(term) {
        if (term)
            this.router.navigateByUrl('/search/' + term);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 5, vars: 1, consts: [["type", "text", "placeholder", "Search Food", 3, "value", "keyup.enter"], ["s", ""], [3, "click"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.search(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.search(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.searchTerm);
    } }, styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 3rem;\n  margin-bottom: 1.5rem;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-radius: 10rem 0 0 10rem;\n  border: none;\n  height: 3rem;\n  width: 20rem;\n  background-color: #f1f1f1;\n  padding: 1.2rem;\n  font-size: 1.1rem;\n  font-weight: 500;\n  outline: none;\n}\n\ninput[_ngcontent-%COMP%]:hover {\n  font-size: 1.2rem;\n}\n\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: gray;\n  height: 3rem;\n  width: 5rem;\n  border-radius: 0 10rem 10rem 0;\n  border: none;\n  background-color: yellowgreen;\n  color: white;\n  opacity: 0.8;\n  outline: none;\n}\n\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  cursor:pointer;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsZUFBZTtBQUNqQiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMTByZW0gMCAwIDEwcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDIwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwYWRkaW5nOiAxLjJyZW07XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dDpob3ZlciB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5kaXYgYnV0dG9uIHtcbiAgY29sb3I6IGdyYXk7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgMTByZW0gMTByZW0gMDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmRpdiBidXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 7571:
/*!************************************************************!*\
  !*** ./src/app/components/partials/tags/tags.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsComponent": () => (/* binding */ TagsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/food.service */ 9785);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function TagsComponent_div_0_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/tag/", tag_r2.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", tag_r2.name, "(", tag_r2.count, ") ");
} }
function TagsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagsComponent_div_0_a_1_Template, 2, 3, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.tags);
} }
class TagsComponent {
    constructor(foodService) {
        this.tags = foodService.getAllTags();
    }
    ngOnInit() {
    }
}
TagsComponent.ɵfac = function TagsComponent_Factory(t) { return new (t || TagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__.FoodService)); };
TagsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TagsComponent, selectors: [["app-tags"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function TagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TagsComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tags);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\ndiv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  padding: 0.3rem 1rem;\n  margin: 0.2rem 0.15rem;\n  border-radius: 10rem;\n  font-weight: 600;\n  font-size: 0.8rem;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InRhZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmRpdiBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XG4gIG1hcmdpbjogMC4ycmVtIDAuMTVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */"] });


/***/ }),

/***/ 4688:
/*!**************************************************************!*\
  !*** ./src/app/components/partials/title/title.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleComponent": () => (/* binding */ TitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) { return { margin: a0, fontSize: a1 }; };
class TitleComponent {
    constructor() {
        this.margin = '1rem 0 1rem 0.2rem';
        this.fontSize = '1.7rem';
    }
    ngOnInit() {
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
TitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], inputs: { title: "title", margin: "margin", fontSize: "fontSize" }, decls: 2, vars: 5, consts: [[3, "ngStyle"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.margin, ctx.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: ["h1[_ngcontent-%COMP%] {\n  color: #616161\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtBQUNGIiwiZmlsZSI6InRpdGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIGNvbG9yOiAjNjE2MTYxXG59XG4iXX0= */"] });


/***/ }),

/***/ 910:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _shared_models_Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/models/Cart */ 8381);
/* harmony import */ var _shared_models_CartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/CartItem */ 1366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class CartService {
    constructor() {
        this.cart = this.getCartFromLocalStorage();
        this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.cart);
    }
    addToCart(food) {
        let cartItem = this.cart.items
            .find(item => item.food.id === food.id);
        if (cartItem)
            return;
        this.cart.items.push(new _shared_models_CartItem__WEBPACK_IMPORTED_MODULE_1__.CartItem(food));
        this.setCartToLocalStorage();
    }
    removeFromCart(foodId) {
        this.cart.items = this.cart.items
            .filter(item => item.food.id != foodId);
        this.setCartToLocalStorage();
    }
    changeQuantity(foodId, quantity) {
        let cartItem = this.cart.items
            .find(item => item.food.id === foodId);
        if (!cartItem)
            return;
        cartItem.quantity = quantity;
        cartItem.price = quantity * cartItem.food.price;
        this.setCartToLocalStorage();
    }
    clearCart() {
        this.cart = new _shared_models_Cart__WEBPACK_IMPORTED_MODULE_0__.Cart();
        this.setCartToLocalStorage();
    }
    getCartObservable() {
        return this.cartSubject.asObservable();
    }
    setCartToLocalStorage() {
        //calc cart total price
        this.cart.totalPrice = this.cart.items
            .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
        //calc cart total quantities
        this.cart.totalCount = this.cart.items
            .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
        const cartJson = JSON.stringify(this.cart);
        localStorage.setItem('Cart', cartJson);
        //Notify all listeners to the cartObservable
        this.cartSubject.next(this.cart);
    }
    getCartFromLocalStorage() {
        const cartJson = localStorage.getItem('Cart');
        //returns new cart if one is not available in local storage
        return cartJson ? JSON.parse(cartJson) : new _shared_models_Cart__WEBPACK_IMPORTED_MODULE_0__.Cart();
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9785:
/*!******************************************!*\
  !*** ./src/app/services/food.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodService": () => (/* binding */ FoodService)
/* harmony export */ });
/* harmony import */ var src_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/data */ 126);
/* harmony import */ var _shared_models_Food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/Food */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class FoodService {
    constructor() { }
    getAll() {
        return src_data__WEBPACK_IMPORTED_MODULE_0__.sample_foods;
    }
    getAllFoodsBySearchTerm(searchTerm) {
        return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
    }
    getAllTags() {
        return src_data__WEBPACK_IMPORTED_MODULE_0__.sample_tags;
    }
    getAllFoodsByTag(tag) {
        return tag == "All" ?
            this.getAll() :
            this.getAll().filter(food => food.tags?.includes(tag));
    }
    getFoodById(foodId) {
        return this.getAll().find(food => food.id == foodId) ?? new _shared_models_Food__WEBPACK_IMPORTED_MODULE_1__.Food();
    }
}
FoodService.ɵfac = function FoodService_Factory(t) { return new (t || FoodService)(); };
FoodService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FoodService, factory: FoodService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8381:
/*!***************************************!*\
  !*** ./src/app/shared/models/Cart.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart": () => (/* binding */ Cart)
/* harmony export */ });
class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
        this.totalCount = 0;
    }
}


/***/ }),

/***/ 1366:
/*!*******************************************!*\
  !*** ./src/app/shared/models/CartItem.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartItem": () => (/* binding */ CartItem)
/* harmony export */ });
class CartItem {
    constructor(food) {
        this.food = food;
        this.quantity = 1;
        this.price = this.food.price;
    }
}


/***/ }),

/***/ 8764:
/*!***************************************!*\
  !*** ./src/app/shared/models/Food.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Food": () => (/* binding */ Food)
/* harmony export */ });
class Food {
}


/***/ }),

/***/ 126:
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sample_foods": () => (/* binding */ sample_foods),
/* harmony export */   "sample_tags": () => (/* binding */ sample_tags)
/* harmony export */ });
const sample_foods = [
    {
        id: '1',
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
    },
    {
        id: '2',
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
    },
    {
        id: '3',
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
    },
    {
        id: '4',
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: 'assets/food-4.jpg',
        tags: ['FastFood', 'Fry'],
    },
    {
        id: '5',
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
    },
    {
        id: '6',
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
    },
];
const sample_tags = [
    { name: 'All', count: 6 },
    { name: 'FastFood', count: 4 },
    { name: 'Pizza', count: 2 },
    { name: 'Lunch', count: 3 },
    { name: 'SlowFood', count: 2 },
    { name: 'Hamburger', count: 1 },
    { name: 'Fry', count: 1 },
    { name: 'Soup', count: 1 },
];


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map