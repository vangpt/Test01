<template>
    <div id="app">
        <!-- <top-area></top-area>
        <menu-comp></menu-comp>
        <slider />
        <home /> -->
        <!-- <footer-comp /> -->
        <!-- <shop /> -->
        <!-- <shop-cart /> -->
        <!-- <menu-widget/> -->
        <!-- <checkout-confirm/> -->
        <!-- <checkout-error/> -->
        <!-- <wish-list /> -->
        <left-side/>
        <footer-bottom />
    </div>
</template>

<script>
import TopArea from "./components/TopArea";
import MenuComp from "./components/MenuComp";
import Slider from "./components/Slider";
import FooterComp from "./components/FooterComp";
import FooterBottom from "./components/FooterBottom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import ShopCart from "./components/shop/ShopCart";
import MenuWidget from "./components/shop/MenuWidget"
import CheckoutConfirm from "./components/shop/CheckoutConfirm"
import CheckoutError from "./components/shop/CheckoutError"
import WishList from "./components/shop/WishList"
import LeftSide from "./components/shop/LeftSide"
export default {
    name: "app",
    components: {
        TopArea,
        MenuComp,
        Slider,
        Home,
        Shop,
        FooterComp,
        FooterBottom,
        ShopCart,
        MenuWidget,
        CheckoutConfirm,
        CheckoutError,
        WishList,
        LeftSide,
    },
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    }
};
</script>

<style lang="scss">
@import "styles/main.scss";
</style>
