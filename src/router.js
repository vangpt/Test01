import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./pages/home";
import Shop from "./pages/shop";
import ShopCart from "./components/shop/ShopCart";
import CheckoutError from "./components/shop/CheckoutError";
import CheckoutConfirm from "./components/shop/CheckoutConfirm";
import FullWidth2 from "./components/shop/FullWidth2";
import FullWidth from "./components/shop/FullWidth";
import MenuWidget from "./components/shop/MenuWidget";
import WishList from "./components/shop/WishList";
import LeftSide from "./components/shop/LeftSide";
import RightSide from "./components/shop/RightSide";

import store from "./store";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/shop",
        name: "shop",
        component: Shop
    },
    {
        path: "/shop-cart",
        name: "shop-cart",
        component: ShopCart
    },
    {
        path: "/shop-wishlist",
        name: "shop-wishlist",
        component: WishList
    },
    {
        path: "/checkout-error",
        name: "checkout-error",
        component: CheckoutError
    },
    {
        path: "/checkout-confirm",
        name: "checkout-confirm",
        component: CheckoutConfirm
    },
    {
        path: "/detail-product/:id",
        name: "detail-product",
        component: FullWidth
    },
    {
        path: "/full-width-2",
        name: "full-width-2",
        component: FullWidth2
    },
    {
        path: "/left-side",
        name: "left-side",
        component: LeftSide
    },
    {
        path: "/right-side",
        name: "right-side",
        component: RightSide
    },
    {
        path: "/menu-widget",
        name: "menu-widget",
        component: MenuWidget
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});

export default router;